import{g as T}from"./ak.42431a64.js";import{r as R,u as A,l as F,b as C,g as I,d as h,T as D,f as p,_ as v,h as P,o as U,c as f,a as s,i as d,w as E,D as S,j as u,v as O,t as y,k as g,p as W,m as L}from"./index.584ba2b0.js";const V=async e=>await R("https://api.lc.familyeducation.org.cn/v1/user/auth/phone",e),b=async e=>await R("https://api.lc.familyeducation.org.cn/v1/user/auth/send",e);function j(){const e=A(),o=async(r,a)=>await V({phone:r,code:a}),t=async()=>await I(),n=async r=>await h({url:r}),_=r=>{const a=/^[1][3-9][\d]{9}/;return r?a.test(r)||D("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"):D("\u8BF7\u8F93\u5165\u624B\u673A\u53F7"),a.test(r)},i=F();return{onSubmit:async r=>{if(console.log("submit",r),!_(r.phone))return;const a=await o(r.phone,r.code);i.getLoginInfo(a.token,a.uid).then(async m=>{const c=await t();c.wx_id&&C().setWxId(c.wx_id),C().userInfo.wx_id?e.push({path:"/basicInformation"}):n("https://lc.familyeducation.org.cn/#/login").then(M=>{window.location.href=M})})}}}function x(e){const o=p(60),t=p(!1),n=async()=>{const i={phone:e.value};console.log(i),await b(i)};return{sendTime:o,isSend:t,handleSendCode:async()=>{await n(),t.value=!0;const i=setInterval(()=>{o.value--,o.value<=0&&(t.value=!1,o.value=0,clearTimeout(i))},1e3)}}}const q={setup(){const e=A(),o=p(""),t=p("");(()=>{const i=e.currentRoute.value.query;S.alert({message:i}),i.code==500?S.alert({message:i.echo}):i.code==0&&S.alert({message:i.echo}).then(async()=>{const l=await I();C().setWxId(l.wx_id),e.push({path:"/basicInformation"})})})();const{onSubmit:_}=j();return{getImgUrl:T,phoneRef:o,codeRef:t,onSubmit:_,...x(o)}}},N=e=>(W("data-v-c4c82e46"),e=e(),L(),e),w={class:"flex-column root"},G=["src"],K={class:"field-wrap"},H={class:"flex"},k=N(()=>s("span",null,"+86",-1)),B=["src"],X={class:"field-wrap"},J={style:{"margin-top":"40px"}},z=N(()=>s("p",{class:"note"},[g(" \u767B\u5F55\u5373\u4EE3\u8868\u60A8\u540C\u610F "),s("span",{class:"red-char"},"\u300A\u7528\u6237\u4F7F\u7528\u534F\u8BAE\u300B"),g("\u548C "),s("span",{class:"red-char"},"\u300A\u9690\u79C1\u534F\u8BAE\u300B")],-1)),Q={class:"circle-box"},$=["src"],Y=["src"],Z=["src"];function ee(e,o,t,n,_,i){const l=P("van-field"),r=P("van-button"),a=P("van-form");return U(),f("div",w,[s("img",{class:"img_happy",src:n.getImgUrl("login_img_happy.png"),alt:""},null,8,G),d(a,{class:"form-wrap",onSubmit:n.onSubmit},{default:E(()=>[s("div",K,[s("div",H,[k,s("img",{class:"arr-icon",src:n.getImgUrl("login_filed_arr.png"),alt:""},null,8,B)]),d(l,{class:"phoneRef-field",modelValue:n.phoneRef,"onUpdate:modelValue":o[0]||(o[0]=m=>n.phoneRef=m),name:"phone",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])]),s("div",X,[d(l,{class:"phoneRef-field",modelValue:n.codeRef,"onUpdate:modelValue":o[1]||(o[1]=m=>n.codeRef=m),name:"code",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},null,8,["modelValue"]),u(s("span",{class:"send-code",onClick:o[2]||(o[2]=(...m)=>e.handleSendCode&&e.handleSendCode(...m))},"\u83B7\u53D6\u9A8C\u8BC1\u7801",512),[[O,!e.isSend]]),u(s("span",{class:"send-code grey"},"\u5DF2\u53D1\u9001\uFF08"+y(e.sendTime)+"s\uFF09",513),[[O,e.isSend]])]),s("div",J,[d(r,{round:"",block:"",class:"btn-submit",type:"primary","native-type":"submit"},{default:E(()=>[g(" \u4E0B\u4E00\u6B65 ")]),_:1})])]),_:1},8,["onSubmit"]),z,s("div",Q,[s("img",{class:"cic-img",src:n.getImgUrl("login_img_circle.png"),alt:""},null,8,$),s("img",{class:"char-img",src:n.getImgUrl("login_bottom_char.png"),alt:""},null,8,Y),s("img",{class:"c-bottom",src:n.getImgUrl("login_img_circle.png"),alt:""},null,8,Z)])])}const re=v(q,[["render",ee],["__scopeId","data-v-c4c82e46"]]);export{re as default};
