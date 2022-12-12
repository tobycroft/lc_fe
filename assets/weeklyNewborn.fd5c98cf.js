import{_ as S,x as I,f as v,E as V,u as C,D as E,H as D,h as f,o as r,c as s,a as o,i as h,F as w,s as N,z as L,w as M,y as A,b as R,t as b,B as _,k as U,p as T,m as B}from"./index.4d2dce95.js";import{g as O}from"./ak.c35040ff.js";import{u as q}from"./useMyMock.b06ed2f5.js";import{a as H}from"./article.5ba31314.js";const z={components:{Video:I(()=>A(()=>import("./Video.13c4c800.js"),["assets/Video.13c4c800.js","assets/index.4d2dce95.js","assets/index.de1567a4.css"])),Audio:I(()=>A(()=>import("./Audio.54069c71.js"),["assets/Audio.54069c71.js","assets/Audio.0f4ded21.css","assets/index.4d2dce95.js","assets/index.de1567a4.css","assets/ak.c35040ff.js"])),Audio3:I(()=>A(()=>import("./Audio3.158a31e2.js"),["assets/Audio3.158a31e2.js","assets/Audio3.9635ed7d.css","assets/index.4d2dce95.js","assets/index.de1567a4.css","assets/ak.c35040ff.js"]))},props:{info:{type:[Array,Object],default:()=>{}}},setup(n){const i=v({}),c=v([]),t=v(""),x=V(()=>{if(c.value[0])return c.value[0].type!="combine_audio"}),p=C();E(()=>{let e=p.currentRoute.value.query.article_id;H({aid:e}).then(d=>{let a=d.filter(u=>u.type=="audio"),l=d.filter(u=>u.type!="audio");a.length&&l.push({type:"audio",name:a[0].name,rank:a[0].rank,children:a}),l.sort((u,P)=>u.rank>P.rank?1:-1),c.value=l})});const y=v([]),m=e=>{y.value.push(e)},g=e=>{t.value&&y.value[t.value.split("_")[1]].changeAudioSuspend(),t.value=e},k=()=>{const e=p.currentRoute.value.query;R().setArticleId(e.article_id),p.push({path:"/selectPhase"})};return D(()=>{i.value=n.info}),{getImgUrl:O,articleInfo:i,...q(),articleContent:c,isMargin:x,getDom:m,onStartPlayer:g,reselect:k}}},F=n=>(T("data-v-1696f9fe"),n=n(),B(),n),j={class:"weekly-during-pregnancy-container"},G={key:0,class:"card-header-style"},J={class:"card-title-style"},K={key:0,class:"card-right-style"},Q={class:"card-week-style"},W={class:"card-date-style"},X=["innerHTML"],Y={key:2,class:"video-box-style"},Z={class:"video-item-style"},$={key:3,class:"audio-box-style flex"},ee=F(()=>o("div",{class:"end"},"\u672C\u671F\u5468\u520A\u5230\u8FD9\u91CC\u5C31\u7ED3\u675F\u4E86\uFF0C\u770B\u770B\u5176\u5B83\u7684\u5427~",-1));function te(n,i,c,t,x,p){const y=f("van-image"),m=f("Video"),g=f("Audio"),k=f("van-button");return r(),s("div",j,[o("header",null,[h(y,{style:{display:"block"},src:t.articleInfo.img},null,8,["src"])]),o("article",{class:L({active:t.isMargin})},[(r(!0),s(w,null,N(t.articleContent,(e,d)=>(r(),s("div",{key:d,class:"article-content-style"},[e.type!=="combine_audio"?(r(),s("div",G,[o("div",J,b(e.name),1),d==0?(r(),s("div",K,[o("div",Q,b(t.articleInfo.title),1),o("div",W,b(e.date),1)])):_("",!0)])):_("",!0),e.type==="default"||e.type==="multi"||e.type==="text"?(r(),s("div",{key:1,class:"rich-text-box-style",innerHTML:e.content},null,8,X)):_("",!0),e.type=="video"?(r(),s("div",Y,[o("ul",null,[o("li",null,[o("div",Z,[h(m,{videoId:"weekPlayer",videoUrl:e.url,poster:e.extra},null,8,["videoUrl","poster"])])])])])):_("",!0),e.type=="audio"?(r(),s("div",$,[o("ul",null,[(r(!0),s(w,null,N(e.children,(a,l)=>(r(),s("li",{key:l},[h(g,{ref_for:!0,ref:t.getDom,audioId:"audio_"+l,title:a.title,tagName:a.tag,playNum:a.content+"w",avatarUrl:a.extra,audioUrl:a.url,onStartPlaye:t.onStartPlayer},null,8,["audioId","title","tagName","playNum","avatarUrl","audioUrl","onStartPlaye"])]))),128))])])):_("",!0)]))),128)),ee],2),o("div",{class:"btn",onClick:i[0]||(i[0]=(...e)=>t.reselect&&t.reselect(...e))},[h(k,null,{default:M(()=>[U("\u91CD\u65B0\u9009\u62E9\u9636\u6BB5")]),_:1})])])}const ne=S(z,[["render",te],["__scopeId","data-v-1696f9fe"]]);export{ne as default};
