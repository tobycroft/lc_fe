import{g as y,p as A}from"./ak.5795e222.js";import{j as b,_ as M,r,M as F,a as v,o as E,c as R,b as s,d as c,t as i,m as d,F as k,z as U,q as L,w as O,v as f,k as N,T as g,p as W,i as V}from"./index.9d83faaf.js";const w=async n=>await b("https://api.lc.familyeducation.org.cn/v1/quiz/record/add",n);const x={name:"Answer",props:{finishVideo:{type:Boolean,default:!1},activeNum:{type:Number,default:1},listData:{type:[Array,Object],default:()=>{}}},setup(n,P){const _=r([]),e=r(1),u=r(),C=r("\u4E0B\u4E00\u9898"),l=r(0),S=a=>{console.log(a),n.finishVideo?(o.value.includes(a)?o.value=o.value.filter(D=>D!=a):o.value.push(a),console.log(o.value)):g("\u9700\u770B\u5B8C\u89C6\u9891\u624D\u53EF\u7B54\u9898")},p=a=>{switch(a){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D";default:return""}},t=r(!1),m=()=>{t.value=!0,P.emit("scrollBottom")};let o=r([]);const T=async()=>{if(e.value==9&&(C.value="\u63D0\u4EA4"),!n.finishVideo){g("\u9700\u770B\u5B8C\u89C6\u9891\u624D\u53EF\u7B54\u9898");return}if(o.value==[]){g("\u8BF7\u9009\u62E9\u95EE\u9898\u7B54\u6848");return}const a=o.value.sort().toString(),D=_.value[e.value-1].answer.toString();if(a!=D){g("\u7B54\u6848\u4E0D\u6B63\u786E\uFF0C\u770B\u770B\u63D0\u793A\u518D\u4F5C\u7B54\u5427");return}let h=await w({qs_id:e.value,choice:a});o.value=[],t.value=!1,P.emit("change",h.gift_info)};return F(()=>{_.value=n.listData,e.value=n.activeNum,u.value=_.value.length,l.value=A(e.value,u.value)}),{showTips:m,getImgUrl:y,percentage:A,percentageRef:l,optionsKeyVisiable:p,promptVisiableRef:t,promptActiveRef:o,listDataRef:_,activeNumRef:e,btnVal:C,onNextTopic:T,clickPrompt:S}}},I=n=>(W("data-v-954d71b1"),n=n(),V(),n),q={class:"answer-container"},G={class:"card-style"},j={class:"title-box-style flex-start"},K={class:"title-left-style"},H={class:"station-name"},B={class:"subject-total"},X={class:"current-subject"},J={class:"problem-box-style"},Y={class:"problem-type-style"},z=I(()=>s("span",{class:"multiple-choice-style"},"(\u591A\u9009)",-1)),Q={class:"problem-style"},Z=["onClick"],$={class:"options-number-style"},ee={class:"options-content-style"},se={class:"operation-box-style flex"},ne={class:"prompt-box-style"},oe={class:"prompt-title-style"},ae=I(()=>s("span",null,"\u63D0\u793A:",-1)),ie={class:"prompt-content-style"};function te(n,P,_,e,u,C){const l=v("van-image"),S=v("van-progress"),p=v("van-button");return E(),R("div",q,[s("div",G,[s("header",null,[s("div",j,[s("div",K,[c(l,{class:"title-circular-style",src:e.getImgUrl("title_circular.png")},null,8,["src"]),s("span",H,i(e.listDataRef[e.activeNumRef-1].stationTitle),1)]),s("div",B,[s("span",X,"0"+i(e.activeNumRef),1),d(" /"+i(e.listDataRef.length),1)])]),c(S,{class:"progress-style",percentage:e.percentageRef,"stroke-width":"1","show-pivot":!1,color:"#F2487D","track-color":"#E6E6E6"},null,8,["percentage"])]),s("article",null,[s("div",J,[s("p",Y,[d(i(e.listDataRef[e.activeNumRef-1].title)+" ",1),z]),s("p",Q,i(e.listDataRef[e.activeNumRef-1].topic),1)]),s("ul",null,[(E(!0),R(k,null,U(e.listDataRef[e.activeNumRef-1].options,(t,m)=>(E(),R("li",{key:m,class:L(["flex-start",{"active-li-style":e.promptActiveRef.includes(t.value),"unfinish-li-style":!_.finishVideo}]),onClick:o=>e.clickPrompt(t.value)},[s("div",$,i(e.optionsKeyVisiable(m))+". ",1),s("p",ee,i(t.label),1),O(c(l,{class:"active-img-style",src:e.getImgUrl("subject_select.png")},null,8,["src"]),[[f,e.promptActiveRef.includes(t.value)]])],10,Z))),128))]),s("footer",null,[s("div",se,[c(p,{class:"global-btn-style check-prompt-btn-style",color:"#EEEEEE",onClick:e.showTips},{default:N(()=>[d(" \u67E5\u770B\u63D0\u793A ")]),_:1},8,["onClick"]),c(p,{class:"global-btn-style next-btn-style",color:"#F2487D",round:"",onClick:e.onNextTopic},{default:N(()=>[d(i(e.btnVal),1)]),_:1},8,["onClick"])])])])]),O(s("div",ne,[s("p",oe,[c(l,{class:"title-circular-style",src:e.getImgUrl("title_circular.png")},null,8,["src"]),ae]),s("p",ie,i(e.listDataRef[e.activeNumRef-1].hint),1)],512),[[f,e.promptVisiableRef]])])}const le=M(x,[["render",te],["__scopeId","data-v-954d71b1"]]);export{le as default};
