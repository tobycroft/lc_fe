import{g as y,p as A}from"./ak.1933dec5.js";import{j as M,_ as T,r as i,K as F,a as D,o as E,c as R,b as s,d as c,t as r,m as d,F as U,x as b,q as L,w as v,v as f,k as N,T as P,p as V,i as x}from"./index.cc67b426.js";const W=async n=>await M("https://api.lc.familyeducation.org.cn/v1/quiz/record/add",n);const j={name:"Answer",props:{finishVideo:{type:Boolean,default:!1},activeNum:{type:Number,default:1},listData:{type:[Array,Object],default:()=>{}}},setup(n,_){const l=i([]),e=i(1),C=i(),S=i("\u4E0B\u4E00\u9898"),m=i(0),g=t=>{console.log(t),n.finishVideo?(o.value.includes(t)?o.value=o.value.filter(u=>u!=t):o.value.push(t),console.log(o.value)):P("\u9700\u770B\u5B8C\u89C6\u9891\u624D\u53EF\u7B54\u9898")},p=t=>{switch(t){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D";default:return""}},a=i(!1);let o=i([]);const O=async()=>{if(e.value==9&&(S.value="\u63D0\u4EA4"),!n.finishVideo){P("\u9700\u770B\u5B8C\u89C6\u9891\u624D\u53EF\u7B54\u9898");return}if(o.value==[]){P("\u8BF7\u9009\u62E9\u95EE\u9898\u7B54\u6848");return}const t=o.value.sort().toString(),u=l.value[e.value-1].answer.toString();if(t!=u){P("\u7B54\u6848\u4E0D\u6B63\u786E\uFF0C\u770B\u770B\u63D0\u793A\u518D\u4F5C\u7B54\u5427");return}let h=await W({qs_id:e.value,choice:t});o.value=[],a.value=!1,_.emit("change",h.gift_info)};return F(()=>{l.value=n.listData,e.value=n.activeNum,C.value=l.value.length,m.value=A(e.value,C.value)}),{getImgUrl:y,percentage:A,percentageRef:m,optionsKeyVisiable:p,promptVisiableRef:a,promptActiveRef:o,listDataRef:l,activeNumRef:e,btnVal:S,onNextTopic:O,clickPrompt:g}}},I=n=>(V("data-v-38e75eb9"),n=n(),x(),n),w={class:"answer-container"},q={class:"card-style"},G={class:"title-box-style flex-start"},K={class:"title-left-style"},k={class:"station-name"},H={class:"subject-total"},B={class:"current-subject"},X={class:"problem-box-style"},J={class:"problem-type-style"},z=I(()=>s("span",{class:"multiple-choice-style"},"(\u591A\u9009)",-1)),Y={class:"problem-style"},Z=["onClick"],Q={class:"options-number-style"},$={class:"options-content-style"},ee={class:"operation-box-style flex"},se={class:"prompt-box-style"},oe={class:"prompt-title-style"},ne=I(()=>s("span",null,"\u63D0\u793A:",-1)),te={class:"prompt-content-style"};function re(n,_,l,e,C,S){const m=D("van-image"),g=D("van-progress"),p=D("van-button");return E(),R("div",w,[s("div",q,[s("header",null,[s("div",G,[s("div",K,[c(m,{class:"title-circular-style",src:e.getImgUrl("title_circular.png")},null,8,["src"]),s("span",k,r(e.listDataRef[e.activeNumRef-1].stationTitle),1)]),s("div",H,[s("span",B,"0"+r(e.activeNumRef),1),d(" /"+r(e.listDataRef.length),1)])]),c(g,{class:"progress-style",percentage:e.percentageRef,"stroke-width":"1","show-pivot":!1,color:"#F2487D","track-color":"#E6E6E6"},null,8,["percentage"])]),s("article",null,[s("div",X,[s("p",J,[d(r(e.listDataRef[e.activeNumRef-1].title)+" ",1),z]),s("p",Y,r(e.listDataRef[e.activeNumRef-1].topic),1)]),s("ul",null,[(E(!0),R(U,null,b(e.listDataRef[e.activeNumRef-1].options,(a,o)=>(E(),R("li",{key:o,class:L(["flex-start",{"active-li-style":e.promptActiveRef.includes(a.value),"unfinish-li-style":!l.finishVideo}]),onClick:O=>e.clickPrompt(a.value)},[s("div",Q,r(e.optionsKeyVisiable(o))+". ",1),s("p",$,r(a.label),1),v(c(m,{class:"active-img-style",src:e.getImgUrl("subject_select.png")},null,8,["src"]),[[f,e.promptActiveRef.includes(a.value)]])],10,Z))),128))]),s("footer",null,[s("div",ee,[c(p,{class:"global-btn-style check-prompt-btn-style",color:"#EEEEEE",onClick:_[0]||(_[0]=a=>e.promptVisiableRef=!0)},{default:N(()=>[d(" \u67E5\u770B\u63D0\u793A ")]),_:1}),c(p,{class:"global-btn-style next-btn-style",color:"#F2487D",round:"",onClick:e.onNextTopic},{default:N(()=>[d(r(e.btnVal),1)]),_:1},8,["onClick"])])])])]),v(s("div",se,[s("p",oe,[c(m,{class:"title-circular-style",src:e.getImgUrl("title_circular.png")},null,8,["src"]),ne]),s("p",te,r(e.listDataRef[e.activeNumRef-1].hint),1)],512),[[f,e.promptVisiableRef]])])}const le=T(j,[["render",re],["__scopeId","data-v-38e75eb9"]]);export{le as default};
