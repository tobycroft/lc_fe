import{_ as d,u as g,r as S,a as P,o as C,c as u,w as D,v,b as a,d as r,l as p,g as E,e as c,f as A,h as O,p as I,i as R}from"./index.9d83faaf.js";import{g as f}from"./ak.5795e222.js";import{_ as T,a as h}from"./home_image_study2.6df5483e.js";const M="/assets/home_imgae_love.1d8b05d9.png",N="/assets/union-img.f6718a8d.png";const b={setup(){const s=g();(async()=>{if(p().loginInfo.token){const n=await E();n.wx_id||c().setWxId(n.wx_id)}})();const t=S(!0);return{toLogin:async()=>{if(p().loginInfo.token&&!c().userInfo.wx_id){const l=await A({url:"https://lc.familyeducation.org.cn/#/basicInformation"});window.location.href=l}else s.push({path:"/login"})},getImgUrl:f,tipsShow:t,closeTips:()=>{t.value=!1}}}},k=s=>(I("data-v-9086c9b4"),s=s(),R(),s),y={class:"root flex-column"},F={class:"tips"},U={class:"tips-left-style"},L=k(()=>a("div",{class:"tips-word-style"},"\u9762\u5411\u798F\u5EFA\u664B\u6C5F\u7ED3\u5A5A\u65B0\u4EBA",-1)),w=O('<h3 data-v-9086c9b4>\u664B\u6C5F\u5E02\u65B0\u664B\u5BB6\u5EAD\u80FD\u529B\u4FC3\u8FDB\u5E73\u53F0</h3><img src="'+T+'" alt="\u300A\u65B0\u5A5A\u5FC5\u77E5\u8981\u70B9\u300B" class="image-know" data-v-9086c9b4><img src="'+h+'" alt="\u6709\u5956\u5B66\u6821" class="image-study" data-v-9086c9b4><img src="'+M+'" alt="\u56FE\u7247" class="image-love" data-v-9086c9b4><div class="unit-box" data-v-9086c9b4><img src="'+N+'" alt="\u6709\u5956\u5B66\u6821" class="union-img" data-v-9086c9b4></div>',5);function x(s,i,t,e,m,_){const o=P("van-image");return C(),u("div",y,[D(a("div",F,[a("div",U,[r(o,{class:"tips-icon-style",src:e.getImgUrl("tips_icon.png")},null,8,["src"]),L]),r(o,{class:"close-icon-style",src:e.getImgUrl("close-icon.png"),onClick:e.closeTips},null,8,["src","onClick"])],512),[[v,e.tipsShow]]),w,a("div",{class:"btn",onClick:i[0]||(i[0]=(...n)=>e.toLogin&&e.toLogin(...n))},"\u5F00\u59CB\u5B66\u4E60")])}const j=d(b,[["render",x],["__scopeId","data-v-9086c9b4"]]);export{j as default};
