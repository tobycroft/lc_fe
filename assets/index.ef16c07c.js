import{g as D}from"./ak.b75c3897.js";import{u as R,l as O,T as S,e as t,_ as v,r as m,o as U,c as T,f as s,a as r,w as P,g as A,v as u,t as I,p as M,h as L,d}from"./index.a10b8966.js";import{r as C}from"./request.78f16589.js";import"./home_imgae_love.80825a44.js";const y=async e=>await C("https://api.lc.familyeducation.org.cn/v1/user/auth/phone",e),b=async e=>await C("https://api.lc.familyeducation.org.cn/v1/user/auth/send",e);function f(){const e=R(),a=async(n,_)=>await y({phone:n,code:_}),i=n=>{const _=/^[1][3-9][\d]{9}/;return n?_.test(n)||S("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"):S("\u8BF7\u8F93\u5165\u624B\u673A\u53F7"),_.test(n)},o=O();return{onSubmit:async n=>{if(console.log("submit",n),!i(n.phone))return;const _=await a(n.phone,n.code);o.getLoginInfo(_.token,_.uid),e.push({path:"/basicInformation"})}}}function N(e){const a=t(60),i=t(!1),o=async()=>{const n={phone:e.value};console.log(n),await b(n)};return{sendTime:a,isSend:i,handleSendCode:async()=>{await o(),i.value=!0;const n=setInterval(()=>{a.value--,a.value<=0&&(i.value=!1,a.value=0,clearTimeout(n))},1e3)}}}const k={setup(){const e=t(""),a=t(""),{onSubmit:i}=f();return{getImgUrl:D,phoneRef:e,codeRef:a,onSubmit:i,...N(e)}}},E=e=>(M("data-v-c9525c86"),e=e(),L(),e),F={class:"flex-column root"},h=["src"],w={class:"field-wrap"},j={class:"flex"},V=E(()=>s("span",null,"+86",-1)),W=["src"],G={class:"field-wrap"},x={style:{"margin-top":"40px"}},H=d(" \u4E0B\u4E00\u6B65 "),B=E(()=>s("p",{class:"note"},[d(" \u767B\u5F55\u5373\u4EE3\u8868\u60A8\u540C\u610F "),s("span",{class:"red-char"},"\u300A\u7528\u6237\u4F7F\u7528\u534F\u8BAE\u300B"),d("\u548C "),s("span",{class:"red-char"},"\u300A\u9690\u79C1\u534F\u8BAE\u300B")],-1)),Y={class:"circle-box"},K=["src"],X=["src"],Z=["src"];function z(e,a,i,o,c,n){const _=m("van-field"),l=m("van-button"),g=m("van-form");return U(),T("div",F,[s("img",{class:"img_happy",src:o.getImgUrl("login_img_happy.png"),alt:""},null,8,h),r(g,{class:"form-wrap",onSubmit:o.onSubmit},{default:P(()=>[s("div",w,[s("div",j,[V,s("img",{class:"arr-icon",src:o.getImgUrl("login_filed_arr.png"),alt:""},null,8,W)]),r(_,{class:"phoneRef-field",modelValue:o.phoneRef,"onUpdate:modelValue":a[0]||(a[0]=p=>o.phoneRef=p),name:"phone",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])]),s("div",G,[r(_,{class:"phoneRef-field",modelValue:o.codeRef,"onUpdate:modelValue":a[1]||(a[1]=p=>o.codeRef=p),name:"code",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},null,8,["modelValue"]),A(s("span",{class:"send-code",onClick:a[2]||(a[2]=(...p)=>e.handleSendCode&&e.handleSendCode(...p))},"\u83B7\u53D6\u9A8C\u8BC1\u7801",512),[[u,!e.isSend]]),A(s("span",{class:"send-code grey"},"\u5DF2\u53D1\u9001\uFF08"+I(e.sendTime)+"s\uFF09",513),[[u,e.isSend]])]),s("div",x,[r(l,{round:"",block:"",class:"btn-submit",type:"primary","native-type":"submit"},{default:P(()=>[H]),_:1})])]),_:1},8,["onSubmit"]),B,s("div",Y,[s("img",{class:"cic-img",src:o.getImgUrl("login_img_circle.png"),alt:""},null,8,K),s("img",{class:"char-img",src:o.getImgUrl("login_bottom_char.png"),alt:""},null,8,X),s("img",{class:"c-bottom",src:o.getImgUrl("login_img_circle.png"),alt:""},null,8,Z)])])}const ee=v(k,[["render",z],["__scopeId","data-v-c9525c86"]]);export{ee as default};
