import{g as f}from"./ak.2492a013.js";import{j as h,_ as x,u as b,r as g,e as p,J as y,a as I,o as w,c as k,b as e,t as l,d as N,k as D,m as S,p as C,i as F}from"./index.793c1864.js";const P=t=>h("https://upload.familyeducation.org.cn:444/v1/file/index/upfull?token=lc",t);const R={setup(){const t=b();let n=g(void 0);const d=p().userInfo.wx_name,o=p().userInfo.couple_name,r=async s=>{const a=await P({file:s});console.log("res :>> ",a),n.value=a},_=s=>{console.log("file :>>",s),r(s.file)},c=()=>{t.push({path:"/selectPhase"})},v=y(()=>{var s=new Date,u=s.getFullYear(),a=s.getMonth()+1,m=s.getDate();return`${u}\u5E74${a}\u6708${m}\u65E5`});return{getImgUrl:f,afterRead:_,wxName:d,coupleName:o,visiableImgUrl:n,goToReceivePrize:c,dataFormat:v}}},i=t=>(C("data-v-b94c99ba"),t=t(),F(),t),U={class:"complete-study-container"},B=i(()=>e("div",{class:"greet-style"},[e("div",null,"Hey\uFF01\u606D\u559C\u4F60\u4EEC\u5B8C\u6210\u5B66\u4E60~"),e("div",null,"\u795D\u4F60\u4EEC\u5E78\u798F\u7F8E\u6EE1")],-1)),T={class:"content-box-style"},V={style:{width:"100%"}},$={class:"sentiment-box-style"},z={class:"left-name"},M=i(()=>e("div",{class:"close-icon"},null,-1)),Y={class:"right-name"},j={class:"date-style"},q=i(()=>e("div",{class:"subscription-tips"}," \u5E73\u53F0\u5C06\u4E3A\u60A8\u514D\u8D39\u8BA2\u96053\u5E74\u65B0\u5A5A\u5468\u520A ",-1)),A={class:"award-box-style"};function E(t,n,d,o,r,_){const c=I("van-button");return w(),k("div",U,[B,e("div",T,[e("article",null,[e("div",V,[e("div",$,[e("div",z,l(o.wxName),1),M,e("div",Y,l(o.coupleName),1)]),e("div",j,l(o.dataFormat),1)])])]),q,e("div",A,[N(c,{class:"award-btn-style",color:"#F2487D",round:"",block:"",onClick:o.goToReceivePrize},{default:D(()=>[S(" \u514D\u8D39\u8BA2\u9605\u5E76\u62BD\u5956 ")]),_:1},8,["onClick"])])])}const G=x(R,[["render",E],["__scopeId","data-v-b94c99ba"]]);export{G as default};
