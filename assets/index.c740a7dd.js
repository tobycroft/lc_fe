import{_ as k,x as n,f as p,u as w,D as m,h as r,o,c as d,A as t,B as c,y as a}from"./index.f20618ab.js";import{g as I}from"./article.4725d713.js";const P={components:{weeklyNewborn:n(()=>a(()=>import("./weeklyNewborn.790fae21.js"),["assets/weeklyNewborn.790fae21.js","assets/weeklyNewborn.054ed18a.css","assets/index.f20618ab.js","assets/index.de1567a4.css","assets/ak.132e1c0f.js","assets/useMyMock.c93e6ef8.js","assets/article.4725d713.js"])),weeklyPregnancy:n(()=>a(()=>import("./weeklyPregnancy.04ef663a.js"),["assets/weeklyPregnancy.04ef663a.js","assets/weeklyPregnancy.edb052c7.css","assets/index.f20618ab.js","assets/index.de1567a4.css","assets/ak.132e1c0f.js","assets/useMyMock.c93e6ef8.js","assets/article.4725d713.js"])),weeklyPreparation:n(()=>a(()=>import("./weeklyPreparation.e19a852e.js"),["assets/weeklyPreparation.e19a852e.js","assets/weeklyPreparation.344a0d70.css","assets/index.f20618ab.js","assets/index.de1567a4.css","assets/ak.132e1c0f.js","assets/useMyMock.c93e6ef8.js","assets/article.4725d713.js"])),weeklyDuringPregnancy:n(()=>a(()=>import("./weeklyDuringPregnancy.dc1a7c07.js"),["assets/weeklyDuringPregnancy.dc1a7c07.js","assets/weeklyDuringPregnancy.85ae625c.css","assets/index.f20618ab.js","assets/index.de1567a4.css","assets/ak.132e1c0f.js","assets/useMyMock.c93e6ef8.js","assets/article.4725d713.js"]))},setup(){const i=p({}),_=w();return m(()=>{let l=_.currentRoute.value.query.article_id;I({id:l}).then(e=>{i.value=e})}),{articleInfo:i}}},g={class:"weekly-box"};function v(i,_,l,e,E,h){const s=r("weeklyPregnancy"),y=r("weeklyNewborn"),f=r("weeklyPreparation"),u=r("weeklyDuringPregnancy");return o(),d("div",g,[e.articleInfo.show_type==3?(o(),t(s,{key:0,info:e.articleInfo},null,8,["info"])):c("",!0),e.articleInfo.show_type==4?(o(),t(y,{key:1,info:e.articleInfo},null,8,["info"])):c("",!0),e.articleInfo.show_type==5?(o(),t(f,{key:2,info:e.articleInfo},null,8,["info"])):c("",!0),e.articleInfo.show_type<3?(o(),t(u,{key:3,info:e.articleInfo},null,8,["info"])):c("",!0)])}const x=k(P,[["render",v]]);export{x as default};
