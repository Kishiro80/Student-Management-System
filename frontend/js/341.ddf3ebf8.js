(self["webpackChunkstudentmgmt_v3"]=self["webpackChunkstudentmgmt_v3"]||[]).push([[341],{1429:(t,a,e)=>{"use strict";e.d(a,{e:()=>l});var r=e(52),s=e.n(r);const o="../php/",l=async t=>{console.log(t);let a=o+"teachsub.php";try{var e=await s().post(a,t);return e.data}catch(r){console.error(r)}}},341:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>T});var r=e(3673);const s={class:"column q-gutter-md"},o={class:"crd col-auto"},l={class:"col"},n={class:"row"},i={class:"crd q-col-gutter-xs col"},d={class:"crd col"},c={class:"crd col"};function h(t,a,e,h,u,p){const m=(0,r.up)("AlineChart"),g=(0,r.up)("AHistogram"),f=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(f,{padding:""},{default:(0,r.w5)((()=>[(0,r.Wm)("div",s,[(0,r.Wm)("div",o,[u.Graphdata&&u.loaded?((0,r.wg)(),(0,r.j4)(m,{key:0,item:u.Graphdata.graph1},null,8,["item"])):(0,r.kq)("",!0)]),(0,r.Wm)("div",l,[(0,r.Wm)("div",n,[(0,r.Wm)("div",i,[u.Graphdata?((0,r.wg)(),(0,r.j4)(g,{key:0,CSID:p.id,title:"Markah Awal Tahun",datalist:u.Graphdata.histogram.Awal,label:u.Graphdata.histogram.Label,chartname:"awal"},null,8,["CSID","datalist","label"])):(0,r.kq)("",!0)]),(0,r.Wm)("div",d,[u.Graphdata?((0,r.wg)(),(0,r.j4)(g,{key:0,CSID:p.id,title:"Markah Pertengahan Tahun",datalist:u.Graphdata.histogram.Tengah,label:u.Graphdata.histogram.Label,chartname:"tgh"},null,8,["CSID","datalist","label"])):(0,r.kq)("",!0)]),(0,r.Wm)("div",c,[u.Graphdata?((0,r.wg)(),(0,r.j4)(g,{key:0,CSID:p.id,title:"Markah Akhir Tahun",datalist:u.Graphdata.histogram.Akhir,label:u.Graphdata.histogram.Label,chartname:"akhir"},null,8,["CSID","datalist","label"])):(0,r.kq)("",!0)])])])])])),_:1})}const u={id:"chart"};function p(t,a,e,s,o,l){return(0,r.wg)(),(0,r.j4)("div",u)}var m=e(3502),g=e.n(m);const f={props:{CSID:{default:0,required:!0},item:{default:[{name:"Ali",data:[10,41,35]},{name:"Abu",data:[20,40,55]},{name:"Ahmad",data:[55,66,77]},{name:"Tan",data:[98,96,99]}]}},data(){return{chart:null,options:{series:this.item,chart:{height:350,type:"line",zoom:{enabled:!0}},dataLabels:{enabled:!0},stroke:{curve:"smooth"},title:{text:"Student Performance",align:"center"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.8}},xaxis:{categories:["Awal","Tengah","Akhir"]}}}},beforeUnmount(){this.chart.destroy()},mounted(){console.log("mountc"),this.chart=new(g())(document.querySelector("#chart"),this.options),this.chart.render(),console.log("mountd")}};f.render=p;const b=f;var w=e(2323);const k={class:"q-ma-none q-pa-none"};function v(t,a,e,s,o,l){const n=(0,r.up)("apexchart");return(0,r.wg)(),(0,r.j4)(r.HY,null,[(0,r.Wm)("h6",k,(0,w.zw)(e.title),1),(0,r.Wm)(n,{class:"q-ma-xs",type:"bar",options:o.options,series:l.series},null,8,["options","series"])],64)}var y=e(2585),q=e.n(y);const x={components:{apexchart:q()},computed:{series(){return[{name:"Marks",data:this.datalist}]}},props:{CSID:{default:0,required:!0},title:{default:null,required:!0},datalist:{default:null,required:!0},label:{default:null,required:!0},chartname:{default:"chart1",required:!0}},data(){return{chart:null,options:{chart:{height:350,type:"bar"},plotOptions:{bar:{borderRadius:10,dataLabels:{position:"center"}}},dataLabels:{enabled:!0,formatter:function(t){return t+" students"},offsetY:-20,style:{fontSize:"11px",colors:["#304758"]}},xaxis:{categories:this.label,position:"bottom",axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(t){return t+" students"}}},title:{text:this.title,floating:!0,offsetY:330,align:"center",style:{color:"#444"}}}}}};x.render=v;const S=x;var A=e(1429);const G={created(){this.refresh()},updated(){this.refresh(),this.loaded=!1,console.log("eee"),setTimeout((()=>{this.loaded=!0,console.log("asas")}),500)},data(){return{Graphdata:null,try2:"222",loaded:!0}},methods:{refresh(){console.log(this.id),console.log(t);var t={Action:6,ID:this.id};(0,A.e)(t).then((t=>{console.log("statistic response",t),"Success"==t.msg&&(console.log(t.data),this.Graphdata=t.data,console.log("graphdata is"),console.log(this.Graphdata))}))}},computed:{id(){return parseInt(this.$route.params.id)},Sid(){return String(this.id)}},props:["CSID"],components:{AlineChart:b,AHistogram:S}};var C=e(4379),D=e(7518),I=e.n(D);G.render=h;const T=G;I()(G,"components",{QPage:C.Z})}}]);