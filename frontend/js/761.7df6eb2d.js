(self["webpackChunkstudentmgmt_v3"]=self["webpackChunkstudentmgmt_v3"]||[]).push([[761],{2589:(e,l,t)=>{"use strict";t.d(l,{e:()=>d});var s=t(52),a=t.n(s);const d=async e=>{let l=url+"admin.php";try{var t=await a().post(l,e);return t.data}catch(s){console.error(s)}}},5761:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>le});var s=t(3673),a=t(2323);const d={id:"q-app"},n={class:"q-pa-md"},o={class:"row q-col-gutter-sm"},i={class:"col"},u=(0,s.Wm)("div",{class:"q-pa-sm q-gutter-sm"},null,-1),m={key:1,class:"column",outline:""},r=(0,s.Wm)("div",{class:"text-h6"},"Update Student",-1),c=(0,s.Uk)("Student Name"),w=(0,s.Uk)("Identity Card No."),p=(0,s.Uk)("Address"),f=(0,s.Uk)("Contact"),W=(0,s.Uk)("Class"),_=(0,s.Uk)("Password"),g=(0,s.Wm)("div",{class:"q-pa-md text-h5"},"New Class",-1),I=(0,s.Uk)("Student Name"),h=(0,s.Uk)("Identity Card No."),C=(0,s.Uk)("Address"),b=(0,s.Uk)("Contact"),S=(0,s.Uk)("Class"),q=(0,s.Uk)("Password");function V(e,l,t,V,k,y){const x=(0,s.up)("q-icon"),v=(0,s.up)("q-input"),U=(0,s.up)("q-tooltip"),D=(0,s.up)("q-btn"),N=(0,s.up)("q-chip"),A=(0,s.up)("q-td"),Q=(0,s.up)("q-btn-group"),Z=(0,s.up)("q-item-label"),F=(0,s.up)("q-item-section"),z=(0,s.up)("q-item"),j=(0,s.up)("q-list"),T=(0,s.up)("q-card"),O=(0,s.up)("q-table"),P=(0,s.up)("q-card-section"),L=(0,s.up)("q-separator"),R=(0,s.up)("q-select"),$=(0,s.up)("q-form"),E=(0,s.up)("q-card-actions"),K=(0,s.up)("q-dialog"),B=(0,s.up)("q-page"),G=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.j4)(B,{class:"row"},{default:(0,s.w5)((()=>[(0,s.Wm)("div",d,[(0,s.Wm)("div",n,[(0,s.Wm)("div",o,[(0,s.Wm)("div",i,[(0,s.Wm)(O,{flat:"",bordered:"",class:"statement-table",title:"Manage Student",rows:k.student,columns:k.columns,"hide-header":"grid"===k.mode,"row-key":"__index",grid:"grid"==k.mode,filter:k.filter,"virtual-scroll":"",pagination:k.pagination,"onUpdate:pagination":l[3]||(l[3]=e=>k.pagination=e),"rows-per-page-options":[0]},{"top-right":(0,s.w5)((t=>[(0,s.Wm)(v,{outlined:"",dense:"",debounce:"300",modelValue:k.filter,"onUpdate:modelValue":l[1]||(l[1]=e=>k.filter=e),placeholder:"Search"},{append:(0,s.w5)((()=>[(0,s.Wm)(x,{name:"search"})])),_:1},8,["modelValue"]),(0,s.Wm)(D,{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e=>y.setFs(t)},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(U,{disable:e.$q.platform.is.mobile},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(t.inFullscreen?"Exit Fullscreen":"Toggle Fullscreen"),1)])),_:2},1032,["disable"]),[[G]])])),_:2},1032,["icon","onClick"]),(0,s.Wm)(D,{flat:"",round:"",dense:"",icon:"grid"===k.mode?"list":"grid_on",onClick:l[2]||(l[2]=e=>k.mode="grid"===k.mode?"list":"grid")},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(U,{disable:e.$q.platform.is.mobile},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)("grid"===k.mode?"List":"Grid"),1)])),_:1},8,["disable"]),[[G]])])),_:1},8,["icon"]),u])),"body-cell-status":(0,s.w5)((e=>[(0,s.Wm)(A,{props:e},{default:(0,s.w5)((()=>[(0,s.Wm)(N,{color:"Active"===e.row.status?"green":"Disable"===e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.row.status),1)])),_:2},1032,["color"])])),_:2},1032,["props"])])),"body-cell-action":(0,s.w5)((e=>[(0,s.Wm)(A,{class:"text-right"},{default:(0,s.w5)((()=>[(0,s.Wm)(Q,{outline:""},{default:(0,s.w5)((()=>[(0,s.Wm)(D,{size:"0.75rem",outline:"",color:"primary",field:"edit",icon:"edit",label:"Edit",onClick:l=>y.editItem(e.row)},null,8,["onClick"]),(0,s.Wm)(D,{size:"0.75rem",outline:"",color:"primary",label:"Delete",icon:"delete",onClick:l=>y.deleteItem(e.row)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),item:(0,s.w5)((e=>[(0,s.Wm)("div",{class:"\r\n                    q-pa-xs\r\n                    col-xs-12 col-sm-6 col-md-4 col-lg-3\r\n                    grid-style-transition\r\n                  ",style:e.selected?"transform: scale(0.95);":""},[(0,s.Wm)(T,{class:e.selected?"bg-grey-2":""},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{dense:""},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.j4)(s.HY,null,(0,s.Ko)(e.cols,(l=>((0,s.wg)(),(0,s.j4)(z,{key:l.name},{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(l.label),1)])),_:2},1024)])),_:2},1024),(0,s.Wm)(F,{side:""},{default:(0,s.w5)((()=>["status"===l.name?((0,s.wg)(),(0,s.j4)(N,{key:0,color:"Active"==e.row.status?"green":"Disable"==e.row.status?"red":"grey","text-color":"white",dense:"",class:"text-weight-bolder",square:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(l.value),1)])),_:2},1032,["color"])):"action"===l.name?((0,s.wg)(),(0,s.j4)("div",m,[(0,s.Wm)(D,{class:"q-ma-xs",size:"0.6rem",outline:"",color:"primary",field:"edit",icon:"edit",label:"Edit",onClick:l=>y.editItem(e.row)},null,8,["onClick"]),(0,s.Wm)(D,{class:"q-ma-xs",size:"0.6rem",outline:"",color:"primary",label:"Delete",icon:"delete",onClick:l=>y.deleteItem(e.row)},null,8,["onClick"])])):((0,s.wg)(),(0,s.j4)(Z,{key:2,caption:"",class:l.classes?l.classes:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(l.value),1)])),_:2},1032,["class"]))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["class"])],4)])),bottom:(0,s.w5)((()=>[(0,s.Wm)(D,{dense:"",outline:"",color:"primary",icon:"add",label:"Add Student",onClick:y.ViewRow,"no-caps":""},null,8,["onClick"])])),_:1},8,["rows","columns","hide-header","grid","filter","pagination"])])]),(0,s.Wm)(K,{modelValue:k.show_dialog,"onUpdate:modelValue":l[10]||(l[10]=e=>k.show_dialog=e)},{default:(0,s.w5)((()=>[(0,s.Wm)(T,{style:{width:"600px","max-width":"60vw"}},{default:(0,s.w5)((()=>[(0,s.Wm)(P,null,{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(D,{round:"",flat:"",dense:"",icon:"close",class:"float-right",color:"grey-8"},null,512),[[G]]),r])),_:1}),(0,s.Wm)(L,{inset:""}),(0,s.Wm)(P,{class:"q-pt-none"},{default:(0,s.w5)((()=>[(0,s.Wm)($,{class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"q-pb-xs"},{default:(0,s.w5)((()=>[c])),_:1}),(0,s.Wm)(v,{dense:"",outlined:"",modelValue:k.editedItem.S_Name,"onUpdate:modelValue":l[4]||(l[4]=e=>k.editedItem.S_Name=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"q-pb-xs"},{default:(0,s.w5)((()=>[w])),_:1}),(0,s.Wm)(v,{dense:"",outlined:"",modelValue:k.editedItem.IC,"onUpdate:modelValue":l[5]||(l[5]=e=>k.editedItem.IC=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"q-pb-xs"},{default:(0,s.w5)((()=>[p])),_:1}),(0,s.Wm)(v,{dense:"",outlined:"",modelValue:k.editedItem.Address,"onUpdate:modelValue":l[6]||(l[6]=e=>k.editedItem.Address=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"q-pb-xs"},{default:(0,s.w5)((()=>[f])),_:1}),(0,s.Wm)(v,{dense:"",outlined:"",modelValue:k.editedItem.Contact,"onUpdate:modelValue":l[7]||(l[7]=e=>k.editedItem.Contact=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"q-pb-xs"},{default:(0,s.w5)((()=>[W])),_:1}),(0,s.Wm)(R,{filled:"",modelValue:k.editedItem.ClassID,"onUpdate:modelValue":l[8]||(l[8]=e=>k.editedItem.ClassID=e),options:k.listclass,"option-value":"ID","option-label":"Name",label:"Class","map-options":"","emit-value":""},null,8,["modelValue","options"])])),_:1})])),_:1}),(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"q-pb-xs"},{default:(0,s.w5)((()=>[_])),_:1}),(0,s.Wm)(v,{dense:"",outlined:"",modelValue:k.editedItem.password,"onUpdate:modelValue":l[9]||(l[9]=e=>k.editedItem.password=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,s.Wm)(P,null,{default:(0,s.w5)((()=>[(0,s.Wm)(E,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(D,{flat:"",label:"Close",color:"warning",dense:""},null,512),[[G]]),(0,s.wy)((0,s.Wm)(D,{flat:"",label:"OK",color:"primary",dense:"",onClick:y.update},null,8,["onClick"]),[[G]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])]),(0,s.Wm)("div",null,[(0,s.Wm)(K,{modelValue:k.newclass,"onUpdate:modelValue":l[17]||(l[17]=e=>k.newclass=e),class:"q-pa-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(T,{style:{width:"800px","max-width":"60vw"}},{default:(0,s.w5)((()=>[g,(0,s.Wm)(P,{class:"q-pt-none"},{default:(0,s.w5)((()=>[(0,s.Wm)($,{class:"q-gutter-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(j,{bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"q-pb-xs"},{default:(0,s.w5)((()=>[I])),_:1}),(0,s.Wm)(v,{dense:"",outlined:"",modelValue:k.newStudent.S_Name,"onUpdate:modelValue":l[11]||(l[11]=e=>k.newStudent.S_Name=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"q-pb-xs"},{default:(0,s.w5)((()=>[h])),_:1}),(0,s.Wm)(v,{dense:"",outlined:"",modelValue:k.newStudent.IC,"onUpdate:modelValue":l[12]||(l[12]=e=>k.newStudent.IC=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"q-pb-xs"},{default:(0,s.w5)((()=>[C])),_:1}),(0,s.Wm)(v,{dense:"",outlined:"",modelValue:k.newStudent.Address,"onUpdate:modelValue":l[13]||(l[13]=e=>k.newStudent.Address=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"q-pb-xs"},{default:(0,s.w5)((()=>[b])),_:1}),(0,s.Wm)(v,{dense:"",outlined:"",modelValue:k.newStudent.Contact,"onUpdate:modelValue":l[14]||(l[14]=e=>k.newStudent.Contact=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"q-pb-xs"},{default:(0,s.w5)((()=>[S])),_:1}),(0,s.Wm)(R,{filled:"",modelValue:k.newStudent.ClassID,"onUpdate:modelValue":l[15]||(l[15]=e=>k.newStudent.ClassID=e),options:k.listclass,"option-value":"ID","option-label":"Name",label:"Class","map-options":"","emit-value":""},null,8,["modelValue","options"])])),_:1})])),_:1}),(0,s.Wm)(z,null,{default:(0,s.w5)((()=>[(0,s.Wm)(F,null,{default:(0,s.w5)((()=>[(0,s.Wm)(Z,{class:"q-pb-xs"},{default:(0,s.w5)((()=>[q])),_:1}),(0,s.Wm)(v,{dense:"",outlined:"",modelValue:k.newStudent.password,"onUpdate:modelValue":l[16]||(l[16]=e=>k.newStudent.password=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,s.Wm)(P,null,{default:(0,s.w5)((()=>[(0,s.Wm)(E,{align:"right"},{default:(0,s.w5)((()=>[(0,s.wy)((0,s.Wm)(D,{flat:"",label:"Close",color:"warning",dense:""},null,512),[[G]]),(0,s.wy)((0,s.Wm)(D,{flat:"",label:"OK",color:"primary",dense:"",onClick:y.Addstudent},null,8,["onClick"]),[[G]])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])])),_:1})}var k=t(515),y=t.n(k),x=t(7874),v=t(2589),U=t(1959);const D={computed:y()(y()({},(0,x.Se)({getclass:"general/getclass"})),{},{Sid(){return String(this.CSID)}}),setup(){return{card:(0,U.iH)(!1)}},data(){return{defaultItem:{ID:"",S_Name:"",IC:"",Address:"",Contact:"",ClassID:"",ClassName:"",password:""},inFs:!1,columns:[{name:"S_Name",label:"Name",align:"left",field:"S_Name",sortable:!0,sort:(e,l)=>parseInt(e,10)-parseInt(l,10)},{name:"IC",label:"Identity Card",align:"left",field:"IC",sortable:!0,sort:(e,l)=>parseInt(e,10)-parseInt(l,10)},{name:"Address",label:"Address",align:"left",field:"Address",sortable:!0,sort:(e,l)=>parseInt(e,10)-parseInt(l,10)},{name:"Contact",label:"Contact",align:"left",field:"Contact",sortable:!0,sort:(e,l)=>parseInt(e,10)-parseInt(l,10)},{name:"ClassName",label:"Class Name",field:"Name",sortable:!0,sort:(e,l)=>parseInt(e,10)-parseInt(l,10)},{name:"password",label:"Password",field:"password",sortable:!0,sort:(e,l)=>parseInt(e,10)-parseInt(l,10)},{name:"action",label:"Actions",field:"",align:"right"}],student:[{ID:"",S_Name:"",IC:"",Address:"",Contact:"",ClassID:"",ClassName:"",password:""}],listclass:[{ID:0,Name:""}],noti:()=>{},show_dialog:!1,editedIndex:-1,editedItem:this.defaultItem,filter:"",mode:"list",pagination:{page:1},page:1,totalRecord:0,pageCount:1,newclass:!1,newStudent:[{S_Name:"",IC:"",Address:"",Contact:"",ClassID:"",password:""}],SubjectList:[],C_Name:"",C_Year:""}},updated(){console.log("uu"),this.refresh()},created(){console.log("cc"),this.refresh()},methods:{refresh(){(0,v.e)({Action:10}).then((e=>{"Success"==e.msg&&(this.student=JSON.parse(e.data),console.log(e.data))})),(0,v.e)({Action:2}).then((e=>{"Success"==e.msg&&(this.listclass=JSON.parse(e.data),console.log(e.data))}))},async deleteItem(e){console.log(e.ID);var l={Action:13,uid:e.ID};await(0,v.e)(l).then((e=>{console.log(e),"Success"==e.msg&&console.log("Success")})),this.refresh(),this.$q.notify({type:"positive",message:"Student Removed",timeout:500})},editItem(e){this.editedIndex=this.student.findIndex(((l,t)=>l.__index===e.__index)),this.editedItem=Object.assign({},e),this.show_dialog=!0},close(){this.show_dialog=!1,setTimeout((()=>{this.editedItem=this.defaultItem,this.editedIndex=-1}),300)},setFs(e){e.toggleFullscreen(),this.inFs=e.inFullscreen},ViewRow(){this.newclass=!0},CloseView(){this.newclass=!1,setTimeout((()=>{this.editedItem=this.defaultItem,this.editedIndex=-1}),300)},update(){var e={Action:11,uid:this.editedItem.ID,title:this.editedItem.S_Name,notes:this.editedItem.IC,due:this.editedItem.Address,ID:this.editedItem.Contact,ClassID:this.editedItem.ClassID,SubID:this.editedItem.password};console.log(e),(0,v.e)(e).then((e=>{console.log(e),"Success"==e.msg&&console.log("Success")})),this.refresh()},async Addstudent(){console.log(this.newStudent);var e={Action:12,title:this.newStudent.S_Name,notes:this.newStudent.IC,due:this.newStudent.Address,ID:this.newStudent.Contact,ClassID:this.newStudent.ClassID,SubID:this.newStudent.password};await(0,v.e)(e).then((e=>{console.log(e),"Success"==e.msg&&console.log("Success")})),this.refresh(),this.newStudent="",this.$q.notify({type:"positive",message:"New Class added",timeout:500})}}};var N=t(4379),A=t(6952),Q=t(4842),Z=t(4554),F=t(8240),z=t(8870),j=t(3884),T=t(7030),O=t(6375),P=t(151),L=t(7011),R=t(3414),$=t(2035),E=t(2350),K=t(6778),B=t(5589),G=t(5869),H=t(5269),J=t(3314),Y=t(9367),M=t(677),X=t(7518),ee=t.n(X);D.render=V;const le=D;ee()(D,"components",{QPage:N.Z,QTable:A.Z,QInput:Q.Z,QIcon:Z.Z,QBtn:F.Z,QTooltip:z.Z,QTd:j.Z,QChip:T.Z,QBtnGroup:O.Z,QCard:P.Z,QList:L.Z,QItem:R.Z,QItemSection:$.Z,QItemLabel:E.Z,QDialog:K.Z,QCardSection:B.Z,QSeparator:G.Z,QForm:H.Z,QSelect:J.Z,QCardActions:Y.Z}),ee()(D,"directives",{ClosePopup:M.Z})}}]);