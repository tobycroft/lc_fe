import{_ as M,y as A,r as y,J as w,u as E,D as N,K as L,a as v,o as r,c as s,b as a,d as f,F as S,x as V,q as R,k as U,z as x,n as T,e as q,t as C,B as b,m as B,p as O,i as Y}from"./index.6e6e1e56.js";import{g as F}from"./ak.1933dec5.js";import{u as z}from"./useMyMock.9d4699dd.js";import{a as H}from"./article.cbe324c3.js";const j={components:{Video:A(()=>x(()=>import("./Video.55719657.js"),["assets/Video.55719657.js","assets/index.6e6e1e56.js","assets/index.59e42d60.css"])),Audio4:A(()=>x(()=>import("./Audio4.2846adac.js"),["assets/Audio4.2846adac.js","assets/Audio4.4eec17b6.css","assets/index.6e6e1e56.js","assets/index.59e42d60.css","assets/ak.1933dec5.js"])),Audio3:A(()=>x(()=>import("./Audio3.9f175f80.js"),["assets/Audio3.9f175f80.js","assets/Audio3.9635ed7d.css","assets/index.6e6e1e56.js","assets/index.59e42d60.css","assets/ak.1933dec5.js"]))},props:{info:{type:[Array,Object],default:()=>{}}},setup(n,m){const h=y({}),o=y([]),d=y(""),P=w(()=>{if(o.value[0])return o.value[0].type!="combine_audio"}),l=E();N(()=>{let t=l.currentRoute.value.query.article_id;H({aid:t}).then(i=>{let p=i.filter(c=>c.type=="audio"),I=i.filter(c=>c.type!="audio");p.length&&I.push({type:"audio",name:p[0].name,rank:p[0].rank,children:p}),I.sort((c,D)=>c.rank>D.rank?1:-1),o.value=I})});const u=y([]),g=t=>T(t).format("YYYY.MM.DD"),k=t=>{u.value.push(t)},e=t=>{d.value&&u.value[d.value.split("_")[1]].changeAudioSuspend(),d.value=t},_=()=>{const t=l.currentRoute.value.query;q().setArticleId(t.article_id),l.push({path:"/selectPhase"})};return L(()=>{h.value=n.info}),{getImgUrl:F,articleInfo:h,...z(),articleContent:o,isMargin:P,dateFormat:g,getDom:k,onStartPlayer:e,reselect:_}}},J=n=>(O("data-v-f66d60a1"),n=n(),Y(),n),K={class:"weekly-during-pregnancy-container"},G={key:0,class:"card-header-style"},Q={class:"card-title-bg"},W={class:"card-title-style"},X={key:0,class:"card-right-style"},Z={class:"card-week-style"},$=["innerHTML"],ee={key:2,class:"video-box-style"},te={class:"video-item-style"},oe={key:3,class:"audio-box-style flex"},ae=J(()=>a("div",{class:"end"},"\u672C\u671F\u5468\u520A\u5230\u8FD9\u91CC\u5C31\u7ED3\u675F\u4E86\uFF0C\u770B\u770B\u5176\u5B83\u7684\u5427~",-1));function re(n,m,h,o,d,P){const l=v("van-image"),u=v("Video"),g=v("Audio4"),k=v("van-button");return r(),s("div",K,[a("header",null,[f(l,{style:{display:"block"},src:o.articleInfo.img},null,8,["src"])]),a("article",{class:R({active:o.isMargin})},[(r(!0),s(S,null,V(o.articleContent,(e,_)=>(r(),s("div",{key:_,class:"article-content-style"},[e.type!=="combine_audio"?(r(),s("div",G,[a("div",Q,[a("div",W,C(e.name),1)]),_==0?(r(),s("div",X,[a("div",Z,C(o.articleInfo.title),1)])):b("",!0)])):b("",!0),e.type==="default"||e.type==="multi"||e.type==="text"?(r(),s("div",{key:1,class:"rich-text-box-style",innerHTML:e.content},null,8,$)):e.type=="video"?(r(),s("div",ee,[a("ul",null,[a("li",null,[a("div",te,[f(u,{videoId:"weekPlayer",videoUrl:e.url,poster:e.extra},null,8,["videoUrl","poster"])])])])])):e.type=="audio"?(r(),s("div",oe,[a("ul",null,[(r(!0),s(S,null,V(e.children,(t,i)=>(r(),s("li",{key:i},[f(g,{ref_for:!0,ref:o.getDom,audioId:"audio_"+i,title:t.title,tagName:t.tag,playNum:t.content,avatarUrl:t.extra,audioUrl:t.url,onStartPlaye:o.onStartPlayer},null,8,["audioId","title","tagName","playNum","avatarUrl","audioUrl","onStartPlaye"])]))),128))])])):b("",!0)]))),128)),ae],2),a("div",{class:"btn",onClick:m[0]||(m[0]=(...e)=>o.reselect&&o.reselect(...e))},[f(k,null,{default:U(()=>[B("\u91CD\u65B0\u9009\u62E9\u9636\u6BB5")]),_:1})])])}const ce=M(j,[["render",re],["__scopeId","data-v-f66d60a1"]]);export{ce as default};
