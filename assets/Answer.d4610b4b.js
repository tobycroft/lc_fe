import{p as R,g as k}from"./ak.b75c3897.js";import{_ as N,u as A,e as c,A as C,r as v,o as m,c as u,f as t,a as i,t as o,F as V,n as E,g,v as h,w,d as x,p as I,h as F}from"./index.6d997c54.js";import"./home_imgae_love.80825a44.js";const S={name:"Answer",props:{listData:{type:[Array,Object],default:()=>{}}},setup(l,p){const y=A(),e=c([]),a=c(1),d=c(),n=c(0),f=b=>{switch(b){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D";default:return""}},_=c(!1),r=c(null),s=()=>{if(a.value<e.value.length){a.value++,r.value="",p.emit("change",a.value);return}y.replace("/completeStudy"),console.log("\u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u9898\u4E86 :>> ")};return C(()=>{e.value=l.listData,d.value=e.value.length,n.value=R(a.value,d.value)}),{getImgUrl:k,percentage:R,percentageRef:n,optionsKeyVisiable:f,promptVisiableRef:_,promptActiveRef:r,listDataRef:e,activeNumRef:a,onNextTopic:s}}},D=l=>(I("data-v-7c800f93"),l=l(),F(),l),B={class:"answer-container"},z={class:"card-style"},T={class:"title-box-style flex-start"},U={class:"problem-box-style"},j={class:"problem-type-style"},K={class:"problem-style"},L=["onClick"],O={class:"options-number-style"},q={class:"options-content-style"},G={class:"prompt-box-style"},H=D(()=>t("p",{class:"prompt-title-style"},"\u63D0\u793A:",-1)),J={class:"prompt-content-style"},M={class:"operation-box-style flex"},P=x(" \u67E5\u770B\u63D0\u793A "),Q=x(" \u4E0B\u4E00\u9898 "),W=D(()=>t("div",{class:"organizer-box-style"},[t("p",{class:"organizer-name-style"},"\u664B\u6C5F\u5E02\u6C11\u653F\u5C40"),t("p",{class:"organizer-name-style"},"\u664B\u6C5F\u5E02\u5987\u5973\u8054\u5408\u4F1A"),t("p",{class:"tips-style"},"\u8054\u5408\u4E3B\u529E")],-1));function X(l,p,y,e,a,d){const n=v("van-image"),f=v("van-progress"),_=v("van-button");return m(),u("div",B,[t("div",z,[t("header",null,[t("div",T,[i(n,{class:"title-circular-style",src:e.getImgUrl("title_circular.png")},null,8,["src"]),t("p",null,"\u9898\u76EE"+o(e.activeNumRef)+"\uFF08\u5171"+o(e.listDataRef.length)+"\u9898\uFF09",1)]),i(f,{class:"progress-style",percentage:e.percentageRef,"stroke-width":"8","show-pivot":!1,color:"#F2487D","track-color":"#E6E6E6"},null,8,["percentage"])]),t("article",null,[t("div",U,[t("p",j,o(e.listDataRef[e.activeNumRef-1].title),1),t("p",K,o(e.listDataRef[e.activeNumRef-1].topic),1)]),t("ul",null,[(m(!0),u(V,null,E(e.listDataRef[e.activeNumRef-1].options,(r,s)=>(m(),u("li",{key:s,class:"flex-start",onClick:b=>e.promptActiveRef=s},[t("div",O,[g(t("p",null,o(e.optionsKeyVisiable(s)),513),[[h,e.promptActiveRef!==s]]),g(i(n,{class:"active-img-style",src:e.getImgUrl("subject_select.png")},null,8,["src"]),[[h,e.promptActiveRef===s]])]),t("p",q,o(r.label),1)],8,L))),128))]),g(t("div",G,[H,t("p",J,o(e.listDataRef[e.activeNumRef-1].hint),1)],512),[[h,e.promptVisiableRef]])]),t("footer",null,[t("div",M,[i(_,{class:"global-btn-style check-prompt-btn-style",color:"#FFE4EC",round:"",onClick:p[0]||(p[0]=r=>e.promptVisiableRef=!0)},{default:w(()=>[P]),_:1}),i(_,{class:"global-btn-style next-btn-style",color:"#F2487D",round:"",onClick:e.onNextTopic},{default:w(()=>[Q]),_:1},8,["onClick"])]),W])])])}const ee=N(S,[["render",X],["__scopeId","data-v-7c800f93"]]);export{ee as default};
