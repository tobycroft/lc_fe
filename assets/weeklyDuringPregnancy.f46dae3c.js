import{_ as N,x as b,y as x,f,E as S,u as U,D as V,h as d,o as n,c as r,a as l,i as c,F as A,s as I,z as P,t as w,B as D,w as C,k as L,b as M}from"./index.4d2dce95.js";import{g as E}from"./ak.c35040ff.js";import{u as T}from"./useMyMock.b06ed2f5.js";import{g as R,a as B}from"./article.5ba31314.js";const H={components:{Video:b(()=>x(()=>import("./Video.13c4c800.js"),["assets/Video.13c4c800.js","assets/index.4d2dce95.js","assets/index.de1567a4.css"])),Audio:b(()=>x(()=>import("./Audio.54069c71.js"),["assets/Audio.54069c71.js","assets/Audio.0f4ded21.css","assets/index.4d2dce95.js","assets/index.de1567a4.css","assets/ak.c35040ff.js"])),Audio3:b(()=>x(()=>import("./Audio3.158a31e2.js"),["assets/Audio3.158a31e2.js","assets/Audio3.9635ed7d.css","assets/index.4d2dce95.js","assets/index.de1567a4.css","assets/ak.c35040ff.js"]))},setup(){const g=f({}),s=f([]),_=f(""),t=S(()=>{if(s.value[0])return s.value[0].type!="combine_audio"}),y=U();V(()=>{let a=y.currentRoute.value.query.article_id;R({id:a}).then(i=>{g.value=i}),B({aid:a}).then(i=>{let e=i.filter(o=>o.type=="audio"),u=i.filter(o=>o.type!="audio");e.length&&u.push({type:"audio",name:e[0].name,rank:e[0].rank,children:e}),u.sort((o,v)=>o.rank>v.rank?1:-1),s.value=u})});const m=f([]),p=a=>{m.value.push(a)},h=a=>{_.value&&m.value[_.value.split("_")[1]].changeAudioSuspend(),_.value=a},k=()=>{const a=y.currentRoute.value.query;M().setArticleId(a.article_id),y.push({path:"/selectPhase"})};return{getImgUrl:E,articleInfo:g,...T(),articleContent:s,isMargin:t,getDom:p,onStartPlayer:h,reselect:k}}},q={class:"weekly-during-pregnancy-container"},F={key:0,class:"card-header-style"},O={class:"card-title-style"},z=["innerHTML"],j={key:2,class:"video-box-style"},G={key:3,class:"audio-box-style flex"},J={key:4},K={class:"audio-box-style flex"},Q=["innerHTML"];function W(g,s,_,t,y,m){const p=d("van-image"),h=d("Video"),k=d("Audio"),a=d("Audio3"),i=d("van-button");return n(),r("div",q,[l("header",null,[c(p,{style:{display:"block"},src:t.articleInfo.img},null,8,["src"])]),l("article",{class:P({active:t.isMargin})},[(n(!0),r(A,null,I(t.articleContent,(e,u)=>(n(),r("div",{key:u,class:P(["article-content-style",{"combine-audio-style":e.type=="combine_audio"}])},[e.type!=="combine_audio"?(n(),r("div",F,[c(p,{class:"weekly_title_box-img-style",src:t.getImgUrl("weekly_title_box.png")},null,8,["src"]),l("div",O,w(e.name),1)])):D("",!0),e.type==="default"||e.type==="multi"||e.type==="text"?(n(),r("div",{key:1,class:"rich-text-box-style",innerHTML:e.content},null,8,z)):e.type=="video"?(n(),r("div",j,[l("ul",null,[l("li",null,[c(h,{videoId:"weekPlayer",videoUrl:e.url,poster:e.extra},null,8,["videoUrl","poster"])])])])):e.type=="audio"?(n(),r("div",G,[l("ul",null,[(n(!0),r(A,null,I(e.children,(o,v)=>(n(),r("li",{key:v},[c(k,{ref_for:!0,ref:t.getDom,audioId:"audio_"+v,title:o.title,tagName:o.tag,playNum:o.content+"w",avatarUrl:o.extra,audioUrl:o.url,onStartPlaye:t.onStartPlayer},null,8,["audioId","title","tagName","playNum","avatarUrl","audioUrl","onStartPlaye"])]))),128))])])):e.type=="combine_audio"?(n(),r("div",J,[c(a,{ref_for:!0,ref:t.getDom,audioId:e.id,title:e.title,tagName:e.tag,audioUrl:e.url,onStartPlaye:t.onStartPlayer},null,8,["audioId","title","tagName","audioUrl","onStartPlaye"]),l("div",K,[l("div",{class:"content",innerHTML:e.content},null,8,Q)])])):D("",!0)],2))),128)),l("div",{class:"btn",onClick:s[0]||(s[0]=(...e)=>t.reselect&&t.reselect(...e))},[c(i,{color:"#F2487D",round:""},{default:C(()=>[L("\u91CD\u65B0\u9009\u62E9\u9636\u6BB5")]),_:1})])],2)])}const ee=N(H,[["render",W],["__scopeId","data-v-daafeb67"]]);export{ee as default};
