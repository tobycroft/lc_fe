import{g as o}from"./ak.f9236663.js";import{_ as g,m as h,f as m,u,o as l,c as i,F as f,n as v,g as t,k as S,t as x,p as k,i as I}from"./index.c0ad3219.js";const b={setup(){const s=h([{id:1,name:"\u65B0\u5A5A\u671F",img:o("phase_love.png"),isSelect:!1},{id:2,name:"\u5907\u5B55\u4E2D",img:o("phase_pregnancy_per.png"),isSelect:!1},{id:3,name:"\u6000\u5B55\u4E2D",img:o("phase_pregnancy_now.png"),isSelect:!1},{id:4,name:"\u5B9D\u5B9D\u5DF2\u51FA\u751F",img:o("phase_birth.png"),isSelect:!1}]),a=m(0),r=c=>{s.forEach(n=>n.isSelect=!1),s[c].isSelect=!0,a.value=s[c].id},e=u();return{getImgUrl:o,phaseList:s,handleSelect:r,handleNext:()=>{S().setTagId(a.value),a.value==1&&e.push({path:"/duringWedd"}),a.value==2&&e.push({path:"/duringWedd"}),a.value==3&&e.push({path:"/duringPregnancy"}),a.value==4&&e.push({path:"/babyBorn"})}}}},p=s=>(k("data-v-d958ce72"),s=s(),I(),s),y={class:"flex-column"},N=p(()=>t("p",{class:"char-grey"},"\u8BF7\u5B8C\u5584\u4FE1\u606F\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u4E3A\u4F60\u63D0\u4F9B\u66F4\u597D\u7684\u670D\u52A1",-1)),B=p(()=>t("p",{class:"char"},"\u8BF7\u9009\u62E9\u4F60\u6216\u4F60\u592A\u592A\u6240\u5728\u7684\u9636\u6BB5\uFF1F",-1)),U=["onClick"],w=["src"],C=["src"],L={class:"bottom-wrap"},E=["src"];function F(s,a,r,e,_,c){return l(),i("div",y,[N,B,(l(!0),i(f,null,v(e.phaseList,(n,d)=>(l(),i("div",{class:"phase-box flex",key:d,onClick:R=>e.handleSelect(d)},[t("img",{class:"phase-img",src:n.img,alt:""},null,8,w),t("span",null,x(n.name),1),t("img",{class:"hook-img",src:n.isSelect?e.getImgUrl("phase_hook.png"):e.getImgUrl("phase_nohook.png"),alt:""},null,8,C)],8,U))),128)),t("div",L,[t("button",{class:"btn-bottom",onClick:a[0]||(a[0]=(...n)=>e.handleNext&&e.handleNext(...n))},"\u4E0B\u4E00\u6B65"),t("img",{class:"c-bottom",src:e.getImgUrl("login_img_circle.png"),alt:""},null,8,E)])])}const P=g(b,[["render",F],["__scopeId","data-v-d958ce72"]]);export{P as default};
