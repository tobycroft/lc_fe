import{g as n}from"./ak.4c48d12e.js";import{_ as h,m as g,e as m,u,o as l,c as i,F as f,n as v,f as a,t as S,p as x,h as I}from"./index.35a4e011.js";import{u as b}from"./userInfo.290e0050.js";import"./home_imgae_love.80825a44.js";import"./request.9cf7b4e6.js";const k={setup(){const s=g([{id:1,name:"\u65B0\u5A5A\u671F",img:n("phase_love.png"),isSelect:!1},{id:2,name:"\u5907\u5B55\u4E2D",img:n("phase_pregnancy_per.png"),isSelect:!1},{id:3,name:"\u6000\u5B55\u4E2D",img:n("phase_pregnancy_now.png"),isSelect:!1},{id:4,name:"\u5B9D\u5B9D\u5DF2\u51FA\u751F",img:n("phase_birth.png"),isSelect:!1}]),t=m(0),r=c=>{s.forEach(o=>o.isSelect=!1),s[c].isSelect=!0,t.value=s[c].id},e=u();return{getImgUrl:n,phaseList:s,handleSelect:r,handleNext:()=>{b().setTagId(t.value),t.value==1&&e.push({path:"/duringWedd"}),t.value==2&&e.push({path:"/duringWedd"}),t.value==3&&e.push({path:"/duringPregnancy"}),t.value==4&&e.push({path:"/babyBorn"})}}}},p=s=>(x("data-v-d958ce72"),s=s(),I(),s),y={class:"flex-column"},N=p(()=>a("p",{class:"char-grey"},"\u8BF7\u5B8C\u5584\u4FE1\u606F\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u4E3A\u4F60\u63D0\u4F9B\u66F4\u597D\u7684\u670D\u52A1",-1)),B=p(()=>a("p",{class:"char"},"\u8BF7\u9009\u62E9\u4F60\u6216\u4F60\u592A\u592A\u6240\u5728\u7684\u9636\u6BB5\uFF1F",-1)),U=["onClick"],w=["src"],C=["src"],L={class:"bottom-wrap"},E=["src"];function F(s,t,r,e,_,c){return l(),i("div",y,[N,B,(l(!0),i(f,null,v(e.phaseList,(o,d)=>(l(),i("div",{class:"phase-box flex",key:d,onClick:R=>e.handleSelect(d)},[a("img",{class:"phase-img",src:o.img,alt:""},null,8,w),a("span",null,S(o.name),1),a("img",{class:"hook-img",src:o.isSelect?e.getImgUrl("phase_hook.png"):e.getImgUrl("phase_nohook.png"),alt:""},null,8,C)],8,U))),128)),a("div",L,[a("button",{class:"btn-bottom",onClick:t[0]||(t[0]=(...o)=>e.handleNext&&e.handleNext(...o))},"\u4E0B\u4E00\u6B65"),a("img",{class:"c-bottom",src:e.getImgUrl("login_img_circle.png"),alt:""},null,8,E)])])}const j=h(k,[["render",F],["__scopeId","data-v-d958ce72"]]);export{j as default};
