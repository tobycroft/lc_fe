import{g as D}from"./ak.4c48d12e.js";import{u as R,l as O,T as S,e as t,_ as v,r as m,o as U,c as T,f as a,a as r,w as P,g as C,v as u,t as I,p as M,h as L,d}from"./index.ad69ebe5.js";import{r as A}from"./request.af476e70.js";import"./home_imgae_love.80825a44.js";const y=async e=>await A("http://api.lc.familyeducation.org.cn/v1/user/auth/phone",e),f=async e=>await A("http://api.lc.familyeducation.org.cn/v1/user/auth/send",e);function b(){const e=R(),s=async(n,_)=>await y({phone:n,code:_}),i=n=>{const _=/^[1][3-9][\d]{9}/;return n?_.test(n)||S("\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"):S("\u8BF7\u8F93\u5165\u624B\u673A\u53F7"),_.test(n)},o=O();return{onSubmit:async n=>{if(console.log("submit",n),!i(n.phone))return;const _=await s(n.phone,n.code);o.getLoginInfo(_.token,_.uid),e.push({path:"/basicInformation"})}}}function N(e){const s=t(60),i=t(!1),o=async()=>{const n={phone:e.value};console.log(n),await f(n)};return{sendTime:s,isSend:i,handleSendCode:async()=>{await o(),i.value=!0;const n=setInterval(()=>{s.value--,s.value<=0&&(i.value=!1,s.value=0,clearTimeout(n))},1e3)}}}const k={setup(){const e=t(""),s=t(""),{onSubmit:i}=b();return{getImgUrl:D,phoneRef:e,codeRef:s,onSubmit:i,...N(e)}}},E=e=>(M("data-v-c9525c86"),e=e(),L(),e),F={class:"flex-column root"},h=["src"],j={class:"field-wrap"},w={class:"flex"},V=E(()=>a("span",null,"+86",-1)),W=["src"],x={class:"field-wrap"},G={style:{"margin-top":"40px"}},H=d(" \u4E0B\u4E00\u6B65 "),B=E(()=>a("p",{class:"note"},[d(" \u767B\u5F55\u5373\u4EE3\u8868\u60A8\u540C\u610F "),a("span",{class:"red-char"},"\u300A\u7528\u6237\u4F7F\u7528\u534F\u8BAE\u300B"),d("\u548C "),a("span",{class:"red-char"},"\u300A\u9690\u79C1\u534F\u8BAE\u300B")],-1)),Y={class:"circle-box"},K=["src"],X=["src"],Z=["src"];function z(e,s,i,o,c,n){const _=m("van-field"),l=m("van-button"),g=m("van-form");return U(),T("div",F,[a("img",{class:"img_happy",src:o.getImgUrl("login_img_happy.png"),alt:""},null,8,h),r(g,{class:"form-wrap",onSubmit:o.onSubmit},{default:P(()=>[a("div",j,[a("div",w,[V,a("img",{class:"arr-icon",src:o.getImgUrl("login_filed_arr.png"),alt:""},null,8,W)]),r(_,{class:"phoneRef-field",modelValue:o.phoneRef,"onUpdate:modelValue":s[0]||(s[0]=p=>o.phoneRef=p),name:"phone",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])]),a("div",x,[r(_,{class:"phoneRef-field",modelValue:o.codeRef,"onUpdate:modelValue":s[1]||(s[1]=p=>o.codeRef=p),name:"code",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"},null,8,["modelValue"]),C(a("span",{class:"send-code",onClick:s[2]||(s[2]=(...p)=>e.handleSendCode&&e.handleSendCode(...p))},"\u83B7\u53D6\u9A8C\u8BC1\u7801",512),[[u,!e.isSend]]),C(a("span",{class:"send-code grey"},"\u5DF2\u53D1\u9001\uFF08"+I(e.sendTime)+"s\uFF09",513),[[u,e.isSend]])]),a("div",G,[r(l,{round:"",block:"",class:"btn-submit",type:"primary","native-type":"submit"},{default:P(()=>[H]),_:1})])]),_:1},8,["onSubmit"]),B,a("div",Y,[a("img",{class:"cic-img",src:o.getImgUrl("login_img_circle.png"),alt:""},null,8,K),a("img",{class:"char-img",src:o.getImgUrl("login_bottom_char.png"),alt:""},null,8,X),a("img",{class:"c-bottom",src:o.getImgUrl("login_img_circle.png"),alt:""},null,8,Z)])])}const ee=v(k,[["render",z],["__scopeId","data-v-c9525c86"]]);export{ee as default};
