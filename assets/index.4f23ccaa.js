import{_ as I,A as C,u as x,r as g,B as w,a as _,o as s,c,b as e,d,k as f,F as y,z as b,C as z,q as A,t as p,D as m,m as L,p as P,i as R}from"./index.8d6d54a7.js";import{g as B}from"./ak.75fef5cb.js";import{g as T}from"./gifts.d793b17d.js";import{_ as D,a as S}from"./home_image_study2.6df5483e.js";const U={components:{Card:C(()=>z(()=>import("./Card.edf85cdd.js"),["assets/Card.edf85cdd.js","assets/Card.a61882ab.css","assets/index.8d6d54a7.js","assets/index.59e42d60.css"]))},setup(){const a=x();let l=g([]);const u=async()=>{(await T({quiz_id:1})).map(r=>{l.value.push(r.img)}),console.log("15155",l.value)};w(()=>{u()});const t=g([{label:"\u7B2C\u4E00\u7AD9",name:"\u9002\u5E94\u53D8\u5316",content:"\u53CC\u65B9\u89D2\u8272\u7684\u53D8\u4E0E\u4E0D\u53D8"},{label:"\u7B2C\u4E8C\u7AD9",name:"\u5173\u7CFB\u8C03\u9002",content:"\u4FDD\u6301\u4EB2\u5BC6\u4E0E\u62E5\u6709\u72EC\u7ACB"},{label:"\u7B2C\u4E09\u7AD9",name:"\u751F\u6D3B\u72B6\u6001",content:"\u628A\u65E5\u5B50\u8FC7\u5F97\u6709\u6ECB\u6709\u5473"},{label:"\u7B2C\u56DB\u7AD9",name:"\u5E73\u8861\u5DE5\u4F5C",content:"\u5DE5\u4F5C\u5BB6\u5EAD\u7684\u5E73\u8861\u827A\u672F"},{label:"\u7B2C\u4E94\u7AD9",name:"\u6709\u6548\u6C9F\u901A",content:"\u5E78\u798F\u5A5A\u59FB\u7684\u6C9F\u901A\u7B56\u7565"},{label:"\u7B2C\u516D\u7AD9",name:"\u60C5\u7EEA\u8C03\u63A7",content:"\u8D1F\u9762\u60C5\u7EEA\u7684\u8868\u8FBE\u65B9\u5F0F"},{label:"\u7B2C\u4E03\u7AD9",name:"\u5A46\u5AB3\u5173\u7CFB",content:"\u5A46\u5AB3\u4E4B\u95F4\u7684\u76F8\u5904\u6CD5\u5B9D"},{label:"\u7B2C\u516B\u7AD9",name:"\u8D22\u52A1\u7BA1\u7406",content:"\u9002\u5408\u5BB6\u5EAD\u7684\u8D22\u52A1\u89C4\u5F8B"},{label:"\u7B2C\u4E5D\u7AD9",name:"\u4F18\u751F\u51C6\u5907",content:"\u5B55\u80B2\u5B9D\u5B9D\u7684\u5FC5\u8981\u51C6\u5907"},{label:"\u7B2C\u5341\u7AD9",name:"\u5BB6\u5EAD\u6559\u80B2",content:"\u4E3A\u4EBA\u7236\u6BCD\u7684\u6838\u5FC3\u7406\u5FF5"}]);return{getImgUrl:B,giftListRef:l,dataListRef:t,goToAnswerPage:()=>{a.push({path:"sorrow"})}}}},V=a=>(P("data-v-d1782e95"),a=a(),R(),a),E={class:"began-to-set-sail-container"},F=V(()=>e("header",null,[e("p",{class:"platform-name-style"},"\u664B\u6C5F\u5E02\u65B0\u664B\u5BB6\u5EAD\u80FD\u529B\u4FC3\u8FDB\u5E73\u53F0"),e("img",{src:D,alt:"\u300A\u65B0\u5A5A\u5FC5\u77E5\u8981\u70B9\u300B",class:"image-know"}),e("img",{src:S,alt:"\u6709\u5956\u5B66\u6821",class:"image-study"})],-1)),N={class:"card-content-style"},q={class:"main-title-style flex-start"},G={class:"subtitle-style"},M={class:"prize-box-style"};function O(a,l,u,t,v,h){const o=_("van-image"),r=_("Card"),k=_("van-button");return s(),c("div",E,[F,e("article",null,[d(r,null,{default:f(()=>[e("div",N,[e("ul",null,[(s(!0),c(y,null,b(t.dataListRef,(n,i)=>(s(),c("li",{class:A(["flex-start",{"li-active":i===0}]),key:i},[e("div",q,[e("p",null,p(n.label),1),i===0?(s(),m(o,{key:0,class:"split-icon-style",src:t.getImgUrl("split_graphics.png")},null,8,["src"])):(s(),m(o,{key:1,class:"split-icon-style",src:t.getImgUrl("split_graphics2.png")},null,8,["src"])),e("p",null,p(n.name),1)]),e("p",G,p(n.content),1)],2))),128))])])]),_:1}),e("div",M,[d(o,{class:"myprize-style",src:t.getImgUrl("current-period-prizes.png")},null,8,["src"]),(s(!0),c(y,null,b(t.giftListRef,n=>(s(),m(o,{class:"prize-img-style",src:n,key:n},null,8,["src"]))),128))]),e("footer",null,[d(k,{class:"start-btn-style",color:"#F2487D",round:"",onClick:t.goToAnswerPage},{default:f(()=>[L(" \u5F00\u59CB\u542F\u822A ")]),_:1},8,["onClick"])])])])}const Q=I(U,[["render",O],["__scopeId","data-v-d1782e95"]]);export{Q as default};
