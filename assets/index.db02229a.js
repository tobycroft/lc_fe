import{_ as k,x as n,f as p,u as w,D as m,h as r,o,c as d,A as t,B as c,y as a}from"./index.a4ebe3ad.js";import{g as I}from"./article.076ce2fc.js";const P={components:{weeklyNewborn:n(()=>a(()=>import("./weeklyNewborn.14e977d6.js"),["assets/weeklyNewborn.14e977d6.js","assets/weeklyNewborn.054ed18a.css","assets/index.a4ebe3ad.js","assets/index.de1567a4.css","assets/ak.3c5b7ffd.js","assets/useMyMock.c7bbe43d.js","assets/article.076ce2fc.js"])),weeklyPregnancy:n(()=>a(()=>import("./weeklyPregnancy.45b0c938.js"),["assets/weeklyPregnancy.45b0c938.js","assets/weeklyPregnancy.edb052c7.css","assets/index.a4ebe3ad.js","assets/index.de1567a4.css","assets/ak.3c5b7ffd.js","assets/useMyMock.c7bbe43d.js","assets/article.076ce2fc.js"])),weeklyPreparation:n(()=>a(()=>import("./weeklyPreparation.51426aee.js"),["assets/weeklyPreparation.51426aee.js","assets/weeklyPreparation.344a0d70.css","assets/index.a4ebe3ad.js","assets/index.de1567a4.css","assets/ak.3c5b7ffd.js","assets/useMyMock.c7bbe43d.js","assets/article.076ce2fc.js"])),weeklyDuringPregnancy:n(()=>a(()=>import("./weeklyDuringPregnancy.888ace72.js"),["assets/weeklyDuringPregnancy.888ace72.js","assets/weeklyDuringPregnancy.85ae625c.css","assets/index.a4ebe3ad.js","assets/index.de1567a4.css","assets/ak.3c5b7ffd.js","assets/useMyMock.c7bbe43d.js","assets/article.076ce2fc.js"]))},setup(){const i=p({}),_=w();return m(()=>{let l=_.currentRoute.value.query.article_id;I({id:l}).then(e=>{i.value=e})}),{articleInfo:i}}},g={class:"weekly-box"};function v(i,_,l,e,E,h){const s=r("weeklyPregnancy"),y=r("weeklyNewborn"),f=r("weeklyPreparation"),u=r("weeklyDuringPregnancy");return o(),d("div",g,[e.articleInfo.show_type==3?(o(),t(s,{key:0,info:e.articleInfo},null,8,["info"])):c("",!0),e.articleInfo.show_type==4?(o(),t(y,{key:1,info:e.articleInfo},null,8,["info"])):c("",!0),e.articleInfo.show_type==5?(o(),t(f,{key:2,info:e.articleInfo},null,8,["info"])):c("",!0),e.articleInfo.show_type<3?(o(),t(u,{key:3,info:e.articleInfo},null,8,["info"])):c("",!0)])}const x=k(P,[["render",v]]);export{x as default};
