import{g as I}from"./ak.1933dec5.js";import{j as R,u as O,l as T,e as C,g as M,f as N,T as u,r as t,_ as f,a as g,o as U,c as F,b as n,d as m,k as D,w as E,v as A,t as h,m as P,p as b,i as y}from"./index.9a4cf9ec.js";const k=async e=>await R("https://api.lc.familyeducation.org.cn/v1/user/auth/phone",e),L=async e=>await R("https://api.lc.familyeducation.org.cn/v1/user/auth/send",e);function W(){const e=O(),o=async(i,a)=>await k({phone:i,code:a}),_=async()=>await M(),s=async i=>await N({url:i}),c=i=>{const a=/^[1][3-9][\d]{9}/;return i?a.test(i)||u("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"):u("\u8BF7\u8F93\u5165\u624B\u673A\u53F7"),a.test(i)},p=T();return{onSubmit:async i=>{if(console.log("submit",i),!c(i.phone))return;const a=await o(i.phone,i.code);p.getLoginInfo(a.token,a.uid).then(async r=>{const l=await _();l.wx_id&&C().setWxId(l.wx_id),C().userInfo.wx_id?(console.log(e),e.push({path:"/basicInformation"})):s("https://lc.familyeducation.org.cn/#/basicInformation").then(v=>{window.location.href=v})})}}}function V(e){const o=t(60),_=t(!1),s=async()=>{const p={phone:e.value};console.log(p),await L(p)};return{sendTime:o,isSend:_,handleSendCode:async()=>{await s(),_.value=!0;const p=setInterval(()=>{o.value--,o.value<=0&&(_.value=!1,o.value=0,clearTimeout(p))},1e3)}}}const w={setup(){O();const e=t(""),o=t(""),_=t(!1),{onSubmit:s}=W();return{checkVal:_,getImgUrl:I,phoneRef:e,codeRef:o,onSubmit:s,...V(e)}}},S=e=>(b("data-v-3c0db908"),e=e(),y(),e),x={class:"flex-column root"},q=S(()=>n("div",{class:"title"},"\u664B\u6C5F\u5E02\u65B0\u664B\u5BB6\u5EAD\u80FD\u529B\u4FC3\u8FDB\u5E73\u53F0",-1)),G=["src"],j={class:"field-wrap"},K={class:"flex"},H=S(()=>n("span",null,"+86",-1)),B=["src"],X={class:"field-wrap"},Y={style:{"margin-top":"40px"}},J=S(()=>n("p",{class:"note"},[P(" \u767B\u5F55\u5373\u4EE3\u8868\u60A8\u540C\u610F "),n("span",{class:"red-char"},"\u300A\u7528\u6237\u4F7F\u7528\u534F\u8BAE\u300B"),P("\u548C "),n("span",{class:"red-char"},"\u300A\u9690\u79C1\u534F\u8BAE\u300B")],-1)),z={class:"circle-box"},$=["src"],Q=["src"],Z=["src"];function ee(e,o,_,s,c,p){const d=g("van-field"),i=g("van-button"),a=g("van-form");return U(),F("div",x,[n("header",null,[q,n("img",{class:"img_happy",src:s.getImgUrl("login_img_happy.png"),alt:""},null,8,G)]),m(a,{class:"form-wrap",onSubmit:s.onSubmit},{default:D(()=>[n("div",j,[n("div",K,[H,n("img",{class:"arr-icon",src:s.getImgUrl("login_filed_arr.png"),alt:""},null,8,B)]),m(d,{class:"phoneRef-field",modelValue:s.phoneRef,"onUpdate:modelValue":o[0]||(o[0]=r=>s.phoneRef=r),name:"phone",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])]),n("div",X,[m(d,{class:"phoneRef-field",modelValue:s.codeRef,"onUpdate:modelValue":o[1]||(o[1]=r=>s.codeRef=r),name:"code",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},null,8,["modelValue"]),E(n("span",{class:"send-code",onClick:o[2]||(o[2]=(...r)=>e.handleSendCode&&e.handleSendCode(...r))},"\u83B7\u53D6\u9A8C\u8BC1\u7801",512),[[A,!e.isSend]]),E(n("span",{class:"send-code grey"},"\u5DF2\u53D1\u9001\uFF08"+h(e.sendTime)+"s\uFF09",513),[[A,e.isSend]])]),n("div",Y,[m(i,{round:"",block:"",class:"btn-submit",type:"primary","native-type":"submit"},{default:D(()=>[P(" \u4E0B\u4E00\u6B65 ")]),_:1})])]),_:1},8,["onSubmit"]),J,n("div",z,[n("img",{class:"cic-img",src:s.getImgUrl("login_img_circle.png"),alt:""},null,8,$),n("img",{class:"char-img",src:s.getImgUrl("login_bottom_char.png"),alt:""},null,8,Q),n("img",{class:"c-bottom",src:s.getImgUrl("login_img_circle.png"),alt:""},null,8,Z)])])}const ie=f(w,[["render",ee],["__scopeId","data-v-3c0db908"]]);export{ie as default};
