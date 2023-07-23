# -*- coding: utf-8 -*-
"""
@File    : acme_v2_api.py
@Date    : 2023-07-23

https://datatracker.ietf.org/doc/html/rfc8555
https://www.rfc-editor.org/rfc/rfc8555

ref:
acme-dns-tiny: https://gitlab.adorsaz.ch/adrien/acme-dns-tiny/-/tree/main

https://pypi.org/project/acme/

https://www.pyopenssl.org/en/latest/index.html

https://zhuanlan.zhihu.com/p/75032510
https://letsencrypt.org/zh-cn/docs/challenge-types/
https://datatracker.ietf.org/doc/html/rfc8555

code from https://github.com/certbot/certbot/blob/master/acme/examples/http01_example.py

Example ACME-V2 API for HTTP-01 challenge.

Brief:

This a complete usage example of the python-acme API.

Limitations of this example:
    - Works for only one Domain name
    - Performs only HTTP-01 challenge
    - Uses ACME-v2

Workflow:
    (Account creation)
    - Create account key
    - Register account and accept TOS
    (Certificate actions)
    - Select HTTP-01 within offered challenges by the CA server
    - Set up http challenge resource
    - Set up standalone web server
    - Create domain private key and CSR
    - Issue certificate
    - Renew certificate
    - Revoke certificate
    (Account update actions)
    - Change contact information
    - Deactivate Account
"""

import os
import traceback
from datetime import datetime, timedelta

from cryptography.hazmat.primitives.asymmetric import rsa

from domain_admin.config import ACME_DIR

import json

import OpenSSL
import josepy as jose
from acme import challenges, errors
from acme import client
from acme import crypto_util
from acme import messages
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import serialization

# Constants:

# This is the staging point for ACME-V2 within Let's Encrypt.
from domain_admin.log import logger
from domain_admin.utils.flask_ext.app_exception import AppException

DIRECTORY_URL = 'https://acme-staging-v02.api.letsencrypt.org/directory'

USER_AGENT = 'domain-admin'

# Account key size
ACC_KEY_BITS = 2048

# Certificate private key size
CERT_PKEY_BITS = 2048

# account.key
ACCOUNT_KEY_FILENAME = os.path.join(ACME_DIR, 'account.key')

# account.json
ACCOUNT_DATA_FILENAME = os.path.join(ACME_DIR, 'account.json')


# Useful methods and classes:

def new_csr_comp(domains, pkey_pem=None):
    """Create certificate signing request."""
    if pkey_pem is None:
        # Create private key.
        pkey = OpenSSL.crypto.PKey()
        pkey.generate_key(OpenSSL.crypto.TYPE_RSA, CERT_PKEY_BITS)
        pkey_pem = OpenSSL.crypto.dump_privatekey(
            OpenSSL.crypto.FILETYPE_PEM, pkey)

    csr_pem = crypto_util.make_csr(pkey_pem, domains)
    return pkey_pem, csr_pem


def select_http01_chall(orderr):
    """Extract authorization resource from within order resource."""
    # Authorization Resource: authz.
    # This object holds the offered challenges by the server and their status.
    authz_list = orderr.authorizations

    for authz in authz_list:
        # Choosing challenge.
        # authz.body.challenges is a set of ChallengeBody objects.
        for i in authz.body.challenges:
            # Find the supported challenge.
            if isinstance(i.chall, challenges.HTTP01):
                return i

    raise Exception('HTTP-01 challenge was not offered by the CA server.')


def perform_http01(client_acme, challb, orderr):
    """Set up standalone webserver and perform HTTP-01 challenge."""

    response, validation = challb.response_and_validation(client_acme.net.key)

    # Let the CA server know that we are ready for the challenge.
    client_acme.answer_challenge(challb, response)

    # Wait for challenge status and then issue a certificate.
    # It is possible to set a deadline time.
    deadline = datetime.now() + timedelta(seconds=10)

    try:
        finalized_orderr = client_acme.poll_and_finalize(orderr, deadline)
    except errors.TimeoutError as e:
        logger.error(traceback.format_exc())

        raise AppException("证书获取超时")

    return finalized_orderr.fullchain_pem


def get_account_key():
    """
    Python cryptography库及RSA非对称加密
    https://blog.csdn.net/photon222/article/details/109447327
    :return:
    """

    if os.path.exists(ACCOUNT_KEY_FILENAME):
        # load private key
        with open(ACCOUNT_KEY_FILENAME, "rb") as f:
            private_key = serialization.load_pem_private_key(
                f.read(),
                password=None,
                backend=default_backend()
            )
    else:
        # Create account key
        private_key = rsa.generate_private_key(
            public_exponent=65537,
            key_size=ACC_KEY_BITS,
            backend=default_backend())

        # serialized private key
        pem = private_key.private_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PrivateFormat.PKCS8,
            encryption_algorithm=serialization.NoEncryption()
        )

        # store private key
        with open(ACCOUNT_KEY_FILENAME, 'wb') as f:
            f.write(pem)

    return jose.JWKRSA(key=private_key)


def ensure_account_exists(client_acme):
    """
    确保账户存在
    :param client_acme:
    :return:
    """
    if os.path.exists(ACCOUNT_DATA_FILENAME):
        # 账户已存在
        with open(ACCOUNT_DATA_FILENAME, 'r') as f:
            account_data = json.loads(f.read())

        account_resource = messages.RegistrationResource.from_json(account_data)
        account = client_acme.query_registration(account_resource)
    else:
        # 账户不存在
        register = client_acme.new_account(messages.NewRegistration.from_data(
            terms_of_service_agreed=True)
        )

        with open(ACCOUNT_DATA_FILENAME, 'w') as f:
            f.write(json.dumps(register.to_json(), indent=2))


def get_acme_client():
    # Register account and accept TOS
    account_key = get_account_key()

    net = client.ClientNetwork(account_key, user_agent=USER_AGENT)
    directory = client.ClientV2.get_directory(DIRECTORY_URL, net)
    client_acme = client.ClientV2(directory, net=net)

    ensure_account_exists(client_acme)

    return client_acme
