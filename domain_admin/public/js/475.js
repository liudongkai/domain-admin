(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[475],{5477:(e,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>we});var t=o(9835),l=o(6970);const i=e=>((0,t.dD)("data-v-0dfda669"),e=e(),(0,t.Cn)(),e),s={class:"setting-toolbar"},n=i((()=>(0,t._)("div",null,"域名列表",-1))),d={class:"left"},r=["onClick"],u={class:"title"},m={class:"domian"},p={class:"center"},c={class:"info"},g={key:0},h={key:1},f={class:"right"},_=i((()=>(0,t._)("div",{class:"header-text"},"域名信息",-1))),D={class:"q-col-gutter-sm q-gutter-y-none row"},w=i((()=>(0,t._)("span",{class:"q-ml-sm"},"确定删除当前记录？",-1))),y=i((()=>(0,t._)("div",{class:"header-text"},"域名信息",-1))),v=i((()=>(0,t._)("div",null,"颁发者：",-1))),k={class:"margin-l-20"},C={class:"margin-l-20"},b={class:"margin-l-20"},W=i((()=>(0,t._)("div",null,"颁发对象：",-1))),q={class:"margin-l-20"},I={class:"margin-l-20"},F={class:"margin-l-20"},x={class:"q-col-gutter-sm q-gutter-y-none row"};function L(e,a,o,i,L,G){const V=(0,t.up)("GroupMange"),Z=(0,t.up)("q-btn"),Q=(0,t.up)("q-linear-progress"),z=(0,t.up)("q-card-section"),U=(0,t.up)("q-input"),j=(0,t.up)("q-select"),B=(0,t.up)("q-form"),$=(0,t.up)("q-card-actions"),S=(0,t.up)("q-card"),P=(0,t.up)("q-dialog"),R=(0,t.up)("q-page"),A=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(R,{class:"page-black"},{default:(0,t.w5)((()=>[(0,t.Wm)(V,{onGroupData:e.getGroupData,onChangeGroup:e.changeGroup},null,8,["onGroupData","onChangeGroup"]),(0,t._)("div",s,[n,(0,t._)("div",null,[(0,t.Wm)(Z,{flat:"",padding:"5px",size:"12px",outline:e.status,round:"",color:"primary",icon:"add",onClick:a[0]||(a[0]=a=>e.openDialog())},null,8,["outline"]),(0,t.Wm)(Z,{flat:"",padding:"5px",size:"12px",outline:e.status,round:"",color:"primary",icon:"sync_alt",onClick:a[1]||(a[1]=a=>e.syncAll())},null,8,["outline"])])]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.domainList,((a,o)=>((0,t.wg)(),(0,t.iD)("div",{class:"info-table",key:o},[(0,t._)("div",d,[(0,t._)("div",{class:"info-link",onClick:o=>e.openDetailDialog(a)},[(0,t._)("div",{class:(0,l.C_)(["icon",{"icon-green":!a.connect_status}])},(0,l.zw)(a.alias[0]),3),(0,t._)("div",u,(0,l.zw)(a.alias),1),(0,t._)("div",m,(0,l.zw)(a.domain),1)],8,r)]),(0,t._)("div",p,[a.expire_days?((0,t.wg)(),(0,t.j4)(Q,{key:0,size:"sm",value:(a.total_days-a.expire_days)/a.total_days,color:"primary",onClick:e.test,label:"Change Model"},null,8,["value","onClick"])):(0,t.kq)("",!0),a.expire_days?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(Q,{key:1,size:"sm",value:(a.total_days-a.expire_days)/a.total_days,color:"red",onClick:e.test,label:"Change Model"},null,8,["value","onClick"])),(0,t._)("div",c,[a.expire_days?((0,t.wg)(),(0,t.iD)("div",g,"剩余"+(0,l.zw)(a.expire_days)+"天到期",1)):((0,t.wg)(),(0,t.iD)("div",h,"未知"))])]),(0,t._)("div",f,[(0,t.Wm)(Z,{"text-color":"grey-6",flat:"",padding:"5px",size:"12px",outline:e.status,round:"",icon:"edit_note",onClick:o=>e.openDialog(a)},null,8,["outline","onClick"]),(0,t.Wm)(Z,{"text-color":"grey-6",flat:"",padding:"5px",size:"12px",outline:e.status,round:"",icon:"close",onClick:o=>e.openDeleteDialog(a)},null,8,["outline","onClick"])])])))),128)),(0,t.Wm)(P,{modelValue:e.dialogStatus,"onUpdate:modelValue":a[5]||(a[5]=a=>e.dialogStatus=a),class:"dialog-class"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{class:"dialog-card",dark:""},{default:(0,t.w5)((()=>[(0,t.Wm)(z,null,{default:(0,t.w5)((()=>[_])),_:1}),(0,t.Wm)(z,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{ref:"submitForm"},{default:(0,t.w5)((()=>[(0,t._)("div",D,[(0,t.Wm)(U,{rules:e.domainRules.alias,modelValue:e.form.alias,"onUpdate:modelValue":a[2]||(a[2]=a=>e.form.alias=a),class:"col-8",dark:"",dense:"",label:"名称*"},null,8,["rules","modelValue"]),(0,t.Wm)(j,{modelValue:e.form.group_id,"onUpdate:modelValue":a[3]||(a[3]=a=>e.form.group_id=a),options:e.groupList,class:"col-4",dark:"",dense:"",label:"选择分组"},null,8,["modelValue","options"]),(0,t.Wm)(U,{rules:e.domainRules.domain,modelValue:e.form.domain,"onUpdate:modelValue":a[4]||(a[4]=a=>e.form.domain=a),class:"col-12",dark:"",dense:"",label:"域名地址*"},{append:(0,t.w5)((()=>[(0,t.Wm)(Z,{size:"12px",dense:"",flat:"",label:"校验域名",onClick:e.verifyDomian},null,8,["onClick"])])),_:1},8,["rules","modelValue"])])])),_:1},512)])),_:1}),(0,t.Wm)($,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(Z,{flat:"",label:"取消",color:"primary"},null,512),[[A]]),(0,t.Wm)(Z,{flat:"",label:"保存",color:"primary",onClick:e.submitForm},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(P,{modelValue:e.deleteDialog,"onUpdate:modelValue":a[6]||(a[6]=a=>e.deleteDialog=a),class:"dialog-class"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{dark:"",style:{width:"300px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(z,{class:"row items-center"},{default:(0,t.w5)((()=>[w])),_:1}),(0,t.Wm)($,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(Z,{flat:"",label:"取消",color:"primary"},null,512),[[A]]),(0,t.Wm)(Z,{flat:"",label:"确定",color:"primary",onClick:e.deleteData},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(P,{modelValue:e.detailDialog,"onUpdate:modelValue":a[8]||(a[8]=a=>e.detailDialog=a),class:"dialog-class"},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{class:"dialog-card",dark:"",style:{width:"600px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(z,null,{default:(0,t.w5)((()=>[y])),_:1}),(0,t.Wm)(z,{class:"q-pt-none detail-info items-center"},{default:(0,t.w5)((()=>[(0,t._)("div",null,"域名: "+(0,l.zw)(e.detailInfo.domain),1),(0,t._)("div",null,"颁发时间: "+(0,l.zw)(e.detailInfo.start_date),1),(0,t._)("div",null,"截止时间: "+(0,l.zw)(e.detailInfo.expire_date),1),v,(0,t._)("div",k,"公用名: "+(0,l.zw)(e.detailInfo.issuer.CN),1),(0,t._)("div",C,"组织: "+(0,l.zw)(e.detailInfo.issuer.O),1),(0,t._)("div",b,"组织单位: "+(0,l.zw)(e.detailInfo.issuer.OU),1),W,(0,t._)("div",q,"公用名: "+(0,l.zw)(e.detailInfo.subject.CN),1),(0,t._)("div",I,"组织: "+(0,l.zw)(e.detailInfo.subject.O),1),(0,t._)("div",F,"组织单位: "+(0,l.zw)(e.detailInfo.subject.OU),1)])),_:1}),(0,t.Wm)(z,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{ref:"submitMailForm"},{default:(0,t.w5)((()=>[(0,t._)("div",x,[(0,t.Wm)(U,{rules:e.mailRules.link,modelValue:e.mailForm.link,"onUpdate:modelValue":a[7]||(a[7]=a=>e.mailForm.link=a),class:"col-12",dark:"",dense:"",label:"邮箱地址*"},{append:(0,t.w5)((()=>[(0,t.Wm)(Z,{size:"12px",dense:"",flat:"",label:"推送邮箱",onClick:e.sendDomainEmail},null,8,["onClick"])])),_:1},8,["rules","modelValue"])])])),_:1},512)])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}o(6890),o(8964);var G=o(3340),V=o(9981),Z=o.n(V);const Q={getDomainList:"/api/getDomainList",addDomain:"/api/addDomain",updateDomainById:"/api/updateDomainById",deleteDomainById:"/api/deleteDomainById",getCertInformation:"/api/getCertInformation",updateAllDomainCertInfo:"/api/updateAllDomainCertInfo",getCertInformation:"/api/getCertInformation",sendDomainInfoListEmail:"/api/sendDomainInfoListEmail",getGroupList:"/api/getGroupList",addGroup:"/api/addGroup",updateGroupById:"/api/updateGroupById",deleteGroupById:"/api/deleteGroupById"};var z=o(4328);o(1470);const U=Z().create({baseURL:"http://182.92.114.142:9090"}),j="http://182.92.114.142:9090";function B(e){return e&&"object"!=typeof e&&"number"!=typeof e&&"boolean"!=typeof e?e.replace(/(^\s*)|(\s*$)/g,""):e}function $(e){let a={};return Object.keys(e).forEach((function(o){a[o]=B(e[o])})),a}const S=e=>{if(!e.url)return void console.warn("参数url不存在或为空");e.method=e.method?e.method.toLocaleUpperCase():"",e.data=$(e.data||{});let a=new Promise(((a,o)=>{Z()({url:j+e.url,method:e.method||"POST",headers:{"Content-Type":"application/json"},data:e.data,params:"GET"==e.method?e.data:null,transformRequest:[function(e){return JSON.stringify(e)}]}).then((e=>{0==e.data.code?a(e.data.data):(z.Z.create({type:"negative",position:"top",message:"服务异常，请稍后尝试"}),o(e))})).catch((e=>{z.Z.create({type:"negative",position:"top",message:"服务异常，请稍后尝试"}),o(e)})).finally((e=>{}))}));return a.catch((e=>{console.log(e)})),a},P=((0,G.xr)((({app:e})=>{e.config.globalProperties.$axios=Z(),e.config.globalProperties.$api=U})),e=>((0,t.dD)("data-v-46ef16a6"),e=e(),(0,t.Cn)(),e)),R={class:"group-toolbar"},A=(0,t.Uk)("编辑"),E=(0,t.Uk)("删除"),M=P((()=>(0,t._)("div",{class:"header-text"},"添加分组",-1))),O={class:"q-col-gutter-md q-gutter-y-xs row"},T=P((()=>(0,t._)("span",{class:"q-ml-sm"},"确定删除当前分组？",-1)));function N(e,a,o,l,i,s){const n=(0,t.up)("q-item-section"),d=(0,t.up)("q-item"),r=(0,t.up)("q-list"),u=(0,t.up)("q-menu"),m=(0,t.up)("q-btn"),p=(0,t.up)("q-card-section"),c=(0,t.up)("q-input"),g=(0,t.up)("q-form"),h=(0,t.up)("q-card-actions"),f=(0,t.up)("q-card"),_=(0,t.up)("q-dialog"),D=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)("div",R,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.groupList,((a,o)=>((0,t.wg)(),(0,t.iD)("div",{key:o},[(0,t.Wm)(m,{padding:"4px 12px",size:"10px",outline:o!=e.groupChoose,rounded:"",color:"primary",label:a.name,onClick:a=>e.chooseGroup(o)},{default:(0,t.w5)((()=>[o==e.groupChoose&&0!=o?((0,t.wg)(),(0,t.j4)(u,{key:0,dark:"","touch-position":"","context-menu":""},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{dense:"",style:{"min-width":"100px"}},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(d,{clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{onClick:o=>e.openDialog(a)},{default:(0,t.w5)((()=>[A])),_:2},1032,["onClick"])])),_:2},1024)),[[D]]),(0,t.wy)(((0,t.wg)(),(0,t.j4)(d,{clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{onClick:o=>e.openDeleteDialog(a)},{default:(0,t.w5)((()=>[E])),_:2},1032,["onClick"])])),_:2},1024)),[[D]])])),_:2},1024)])),_:2},1024)):(0,t.kq)("",!0)])),_:2},1032,["outline","label","onClick"])])))),128)),(0,t.Wm)(m,{padding:"5px",size:"8px",round:"",color:"primary",icon:"add",onClick:a[0]||(a[0]=a=>e.openDialog())}),(0,t.Wm)(_,{modelValue:e.infoDialog,"onUpdate:modelValue":a[2]||(a[2]=a=>e.infoDialog=a),class:"dialog-class"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{class:"dialog-card",dark:""},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[M])),_:1}),(0,t.Wm)(p,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{ref:"submitForm"},{default:(0,t.w5)((()=>[(0,t._)("div",O,[(0,t.Wm)(c,{class:"col-12",dark:"",dense:"",modelValue:e.groupForm.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.groupForm.name=a),label:"名称*",rules:e.groupRules.name},null,8,["modelValue","rules"])])])),_:1},512)])),_:1}),(0,t.Wm)(h,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(m,{flat:"",label:"取消",color:"primary"},null,512),[[D]]),(0,t.Wm)(m,{flat:"",label:"保存",color:"primary",onClick:e.submitForm},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(_,{modelValue:e.deleteDialog,"onUpdate:modelValue":a[3]||(a[3]=a=>e.deleteDialog=a),class:"dialog-class"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,{dark:"",style:{width:"300px"}},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"row items-center"},{default:(0,t.w5)((()=>[T])),_:1}),(0,t.Wm)(h,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(m,{flat:"",label:"取消",color:"primary"},null,512),[[D]]),(0,t.Wm)(m,{flat:"",label:"确定",color:"primary",onClick:e.deleteGroup},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}o(702);const H=(0,t.aZ)({name:"IndexPage",data(){return{groupList:[],groupChoose:0,groupForm:{},groupRules:{name:[e=>e&&e.length>0||"请输入分组名称"]},infoDialog:!1,deleteDialog:!1}},mounted(){this.getGroupList()},methods:{getGroupList(){S({url:Q.getGroupList,method:"post"}).then((e=>{this.$emit("groupData",[...e.list]),this.groupList=e.list,this.groupList.unshift({name:"全部"})}))},chooseGroup(e){this.$emit("changeGroup",this.groupList[e].id),this.groupChoose=e},openDialog(e){this.resetForm(),e&&(this.groupForm.id=e.id,this.groupForm.name=e.name),this.infoDialog=!0},resetForm(){this.groupForm={}},submitForm(){this.groupForm.id?this.saveData("updateGroupById"):this.saveData("addGroup")},saveData(e){this.$refs.submitForm.validate().then((a=>{a&&S({url:Q[e],method:"post",data:this.groupForm}).then((e=>{this.getGroupList(),this.infoDialog=!1}))}))},openDeleteDialog(e){this.resetForm(),e&&(this.groupForm.id=e.id),this.deleteDialog=!0},deleteGroup(){S({url:Q.deleteGroupById,method:"post",data:this.groupForm}).then((e=>{this.getGroupList(),this.deleteDialog=!1}))}}});var K=o(1639),Y=o(4455),J=o(9346),X=o(3246),ee=o(490),ae=o(1233),oe=o(3706),te=o(4458),le=o(3190),ie=o(8326),se=o(6611),ne=o(1821),de=o(3940),re=o(2146),ue=o(9984),me=o.n(ue);const pe=(0,K.Z)(H,[["render",N],["__scopeId","data-v-46ef16a6"]]),ce=pe;me()(H,"components",{QBtn:Y.Z,QMenu:J.Z,QList:X.Z,QItem:ee.Z,QItemSection:ae.Z,QDialog:oe.Z,QCard:te.Z,QCardSection:le.Z,QForm:ie.Z,QInput:se.Z,QCardActions:ne.Z,QSpinner:de.Z}),me()(H,"directives",{ClosePopup:re.Z});const ge=(0,t.aZ)({name:"IndexPage",data(){return{model:"one",status:!1,progress:.65,form:{alias:"",domain:"",group_id:{label:"未分组",value:0},domain_status:!1},dialogStatus:!1,deleteDialog:!1,detailDialog:!1,domainList:[],groupList:[],searchFrom:{},domainRules:{alias:[e=>e&&e.length>0||"请输入域名名称"],domain:[e=>e&&e.length>0||"请输入域名地址",e=>this.form.domain_status||"域名校验未通过"]},mailForm:{},mailRules:{link:[e=>e&&e.length>0||"请输入邮箱地址"]}}},components:{GroupMange:ce},mounted(){this.getDomainList()},methods:{sendDomainEmail(){this.$refs.submitMailForm.validate().then((e=>{e&&S({url:Q.sendDomainInfoListEmail,method:"post",data:{to_addresses:this.mailForm.link}}).then((e=>{z.Z.create({type:"positive",position:"top",message:"发送成功"})}))}))},openDetailDialog(e){this.$q.loading.show({message:"加载中..."}),S({url:Q.getCertInformation,method:"post",data:{domain:e.domain}}).then((e=>{this.$q.loading.hide(),this.detailDialog=!0,this.detailInfo=e}))},syncAll(){this.$q.loading.show({message:"域名信息更新中..."}),S({url:Q.updateAllDomainCertInfo,method:"post"}).then((e=>{this.$q.loading.hide()}))},verifyDomian(){S({url:Q.getCertInformation,method:"post",data:{domain:this.form.domain}}).then((e=>{null!=e&&(this.$refs.submitForm.resetValidation(),this.form.domain_status=!0)}))},changeGroup(e){this.searchFrom.group_id=e,this.getDomainList()},submitForm(){this.form.id?this.saveData("updateDomainById"):this.saveData("addDomain")},progressFrom(){let e={...this.form};return e.group_id=e.group_id.value,console.log(e),e},saveData(e){this.$refs.submitForm.validate().then((a=>{if(a){let a=this.progressFrom();S({url:Q[e],method:"post",data:a}).then((e=>{this.getDomainList(),this.dialogStatus=!1}))}}))},deleteData(){S({url:Q.deleteDomainById,method:"post",data:{id:this.form.id}}).then((e=>{this.getDomainList(),this.deleteDialog=!1}))},openDeleteDialog(e){this.resetForm(),e&&(this.form.id=e.id),this.deleteDialog=!0},getGroupData(e){this.groupList=e.map((e=>({label:e.name,value:e.id}))),this.groupList.unshift({label:"未分组"})},getDomainList(){S({url:Q.getDomainList,method:"post",data:this.searchFrom}).then((e=>{this.domainList=e.list}))},resetForm(){this.form={alias:"",domain:"",group_id:{label:"未分组",value:0}}},openDialog(e){this.resetForm(),e&&(this.form={...e},e.group?this.form.group_id={label:e.group.name,value:e.group.id}:this.form.group_id={label:"未分组",value:0}),this.dialogStatus=!0},testre(){S({url:Q.getCertInformation,method:"get",data:{domain:"www.baidu.com"}})},test(){S({url:Q.refresh_captcha}),console.log(S(111)),this.status=!this.status,U.get(Q.refresh_captcha).then((e=>{data.value=e.data})).catch((()=>{$q.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})}))}}});var he=o(9885),fe=o(8289),_e=o(4401);const De=(0,K.Z)(ge,[["render",L],["__scopeId","data-v-0dfda669"]]),we=De;me()(ge,"components",{QPage:he.Z,QBtn:Y.Z,QLinearProgress:fe.Z,QDialog:oe.Z,QCard:te.Z,QCardSection:le.Z,QForm:ie.Z,QInput:se.Z,QSelect:_e.Z,QCardActions:ne.Z}),me()(ge,"directives",{ClosePopup:re.Z})},4654:()=>{}}]);