import{e as h,_ as R,q as D,f as g,z as v,r as f,o,c as i,g as a,a as t,F as S,n as E,s as A,t as O,B as I}from"./index.8e26e5ab.js";import{g as y}from"./ak.f9236663.js";import{u as k}from"./useMyMock.50642e70.js";const b=async p=>await h("https://api.lc.familyeducation.org.cn/v1/article/info/get",p),U=async p=>await h("https://api.lc.familyeducation.org.cn/v1/article/content/list",p);const N={components:{Video:D(()=>A(()=>import("./Video.1af28ab0.js"),["assets/Video.1af28ab0.js","assets/index.8e26e5ab.js","assets/index.145fdbd3.css"])),Audio:D(()=>A(()=>import("./Audio.cdad6b40.js"),["assets/Audio.cdad6b40.js","assets/Audio.0f4ded21.css","assets/index.8e26e5ab.js","assets/index.145fdbd3.css","assets/ak.f9236663.js"]))},setup(){const p=g({}),d=g([]),m=g("");v(()=>{b({id:1}).then(_=>{p.value=_}),U({aid:1}).then(_=>{let s=_.filter(n=>n.type=="audio"),c=_.filter(n=>n.type!="audio");s.length&&c.push({type:"audio",name:s[0].name,rank:s[0].rank,children:s}),c.sort((n,l)=>n.rank>l.rank?1:-1),d.value=c})});const e=g([]),u=_=>{e.value.push(_)},C=_=>{m.value&&e.value[m.value.split("_")[1]].changeAudioSuspend(),m.value=_};return{getImgUrl:y,articleInfo:p,...k(),articleContent:d,getDom:u,onStartPlayer:C}}},T={class:"weekly-during-pregnancy-container"},w={class:"card-header-style"},M={class:"card-title-style"},x=["innerHTML"],F={key:1,class:"video-box-style"},L={key:2,class:"audio-box-style flex"};function G(p,d,m,e,u,C){const _=f("van-image"),s=f("Video"),c=f("Audio");return o(),i("div",T,[a("header",null,[t(_,{src:e.getImgUrl(e.articleInfo.img)},null,8,["src"])]),a("article",null,[(o(!0),i(S,null,E(e.articleContent,(n,l)=>(o(),i("div",{key:l,class:"article-content-style"},[a("div",w,[t(_,{class:"weekly_title_box-img-style",src:e.getImgUrl("weekly_title_box.png")},null,8,["src"]),a("p",M,O(n.name),1)]),n.type==="default"||n.type==="multi"||n.type==="text"?(o(),i("div",{key:0,class:"rich-text-box-style",innerHTML:n.content},null,8,x)):n.type=="video"?(o(),i("div",F,[a("ul",null,[a("li",null,[t(s,{videoId:"weekPlayer",videoUrl:"https://xiaobicdn.xiaobixiezi.com/sv/1b4d699-181b93dc9b1/1b4d699-181b93dc9b1.mp4"})])])])):n.type=="audio"?(o(),i("div",L,[a("ul",null,[(o(!0),i(S,null,E(n.children,(r,P)=>(o(),i("li",{key:P},[t(c,{ref_for:!0,ref:e.getDom,audioId:"audio_"+P,title:r.title,tagName:r.tag,playNum:r.content+"w",avatarUrl:e.getImgUrl(r.extra),audioUrl:"https://xiaobicdn.xiaobixiezi.com/sv/4d9aa2aa-18378989bdf/4d9aa2aa-18378989bdf.mp3",onStartPlaye:e.onStartPlayer},null,8,["audioId","title","tagName","playNum","avatarUrl","onStartPlaye"])]))),128))])])):I("",!0)]))),128))])])}const V=R(N,[["render",G],["__scopeId","data-v-7ebe021d"]]);export{V as default};
