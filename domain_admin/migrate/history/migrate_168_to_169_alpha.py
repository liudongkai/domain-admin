# -*- coding: utf-8 -*-
"""
@File    : migrate_168_to_169_alpha.py
@Date    : 2024-02-20

cmd:
$ python domain_admin/migrate/migrate_168_to_169_alpha.py
"""
from __future__ import print_function, unicode_literals, absolute_import, division

from domain_admin.migrate import migrate_common
from domain_admin.model.base_model import db
from domain_admin.model.domain_info_model import DomainInfoModel
from domain_admin.model.domain_model import DomainModel
from domain_admin.model.notify_model import NotifyModel


def execute_migrate():
    """
    版本升级 1.6.8 => 1.6.9-alpha
    :return:
    """
    migrator = migrate_common.get_migrator(db)

    migrate_rows = [
        migrator.add_column(
            DomainInfoModel._meta.table_name,
            DomainInfoModel.domain_whois_server.name,
            DomainInfoModel.domain_whois_server
        ),

    ]

    migrate_common.try_execute_migrate(migrate_rows)
