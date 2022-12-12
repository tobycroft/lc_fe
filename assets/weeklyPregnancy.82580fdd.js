import{_ as V,x as k,f as p,E as C,u as E,D as N,H as U,h as v,o as r,c as n,a as o,i as f,F as P,s as w,z as D,w as L,y as I,b as M,I as R,t as A,B as x,k as T,p as B,m as O}from"./index.936f1a5a.js";import{g as q}from"./ak.cf9c4f0a.js";import{u as z}from"./useMyMock.f6d14677.js";import{a as H}from"./article.cc7a9312.js";const F={components:{Video:k(()=>I(()=>import("./Video.1777bf44.js"),["assets/Video.1777bf44.js","assets/index.936f1a5a.js","assets/index.de1567a4.css"])),Audio4:k(()=>I(()=>import("./Audio4.084b9e0e.js"),["assets/Audio4.084b9e0e.js","assets/Audio4.cece14b3.css","assets/index.936f1a5a.js","assets/index.de1567a4.css","assets/ak.cf9c4f0a.js"])),Audio3:k(()=>I(()=>import("./Audio3.1ad34f2f.js"),["assets/Audio3.1ad34f2f.js","assets/Audio3.9635ed7d.css","assets/index.936f1a5a.js","assets/index.de1567a4.css","assets/ak.cf9c4f0a.js"]))},props:{info:{type:[Array,Object],default:()=>{}}},setup(s){const c=p({}),i=p([]),t=p(""),b=C(()=>{if(i.value[0])return i.value[0].type!="combine_audio"}),_=E();N(()=>{let e=_.currentRoute.value.query.article_id;H({aid:e}).then(d=>{let a=d.filter(u=>u.type=="audio"),l=d.filter(u=>u.type!="audio");a.length&&l.push({type:"audio",name:a[0].name,rank:a[0].rank,children:a}),l.sort((u,S)=>u.rank>S.rank?1:-1),i.value=l})});const y=p([]),m=e=>{y.value.push(e)},g=e=>{t.value&&y.value[t.value.split("_")[1]].changeAudioSuspend(),t.value=e},h=()=>{const e=_.currentRoute.value.query;M().setArticleId(e.article_id),_.push({path:"/selectPhase"})};return U(()=>{c.value=s.info}),{getImgUrl:q,articleInfo:c,...z(),articleContent:i,isMargin:b,getDom:m,onStartPlayer:g,reselect:h}}},j=s=>(B("data-v-0440c61e"),s=s(),O(),s),G={class:"weekly-during-pregnancy-container"},J={class:"card-title-style"},K={key:0,class:"card-right-style"},Q={class:"card-week-style"},W={class:"card-date-style"},X=["innerHTML"],Y={key:2,class:"video-box-style"},Z={class:"video-item-style"},$={key:3,class:"audio-box-style flex"},ee=j(()=>o("div",{class:"end"},"\u672C\u671F\u5468\u520A\u5230\u8FD9\u91CC\u5C31\u7ED3\u675F\u4E86\uFF0C\u770B\u770B\u5176\u5B83\u7684\u5427~",-1));function te(s,c,i,t,b,_){const y=v("van-image"),m=v("Video"),g=v("Audio4"),h=v("van-button");return r(),n("div",G,[o("header",null,[f(y,{style:{display:"block"},src:t.articleInfo.img},null,8,["src"])]),o("article",{class:D({active:t.isMargin})},[(r(!0),n(P,null,w(t.articleContent,(e,d)=>(r(),n("div",{key:d,class:"article-content-style"},[e.type!=="combine_audio"?(r(),n("div",{key:0,class:"card-header-style",style:R({backgroundImage:`url(${t.getImgUrl("weeklyPregnancy/weekly_title_box.png")})`})},[o("div",J,A(e.name),1),d==0?(r(),n("div",K,[o("div",Q,A(t.articleInfo.title),1),o("div",W,A(e.date),1)])):x("",!0)],4)):x("",!0),e.type==="default"||e.type==="multi"||e.type==="text"?(r(),n("div",{key:1,class:"rich-text-box-style",innerHTML:e.content},null,8,X)):e.type=="video"?(r(),n("div",Y,[o("ul",null,[o("li",null,[o("div",Z,[f(m,{videoId:"weekPlayer",videoUrl:e.url,poster:e.extra},null,8,["videoUrl","poster"])])])])])):e.type=="audio"?(r(),n("div",$,[o("ul",null,[(r(!0),n(P,null,w(e.children,(a,l)=>(r(),n("li",{key:l},[f(g,{ref_for:!0,ref:t.getDom,audioId:"audio_"+l,title:a.title,tagName:a.tag,playNum:a.content,avatarUrl:a.extra,audioUrl:a.url,onStartPlaye:t.onStartPlayer},null,8,["audioId","title","tagName","playNum","avatarUrl","audioUrl","onStartPlaye"])]))),128))])])):x("",!0)]))),128)),ee],2),o("div",{class:"btn",onClick:c[0]||(c[0]=(...e)=>t.reselect&&t.reselect(...e))},[f(h,null,{default:L(()=>[T("\u91CD\u65B0\u9009\u62E9\u9636\u6BB5")]),_:1})])])}const se=V(F,[["render",te],["__scopeId","data-v-0440c61e"]]);export{se as default};
