import{_ as f,q as h,e as m,r as d,o,c as l,f as e,a,F as k,n as I,t as x,A as i,g as _,v as u,x as b,p as w,h as S}from"./index.15bcdf39.js";import{g as C}from"./ak.4c48d12e.js";import{u as p,a as L}from"./useAudio.3efbcb9e.js";import"./home_imgae_love.80825a44.js";const V={components:{Video:h(()=>b(()=>import("./Video.0a0a94c6.js"),["assets/Video.0a0a94c6.js","assets/index.15bcdf39.js","assets/index.a9b2f033.css"]))},setup(){const s=p().articleInfoList;console.log("articleInfoList :>> ",s.data[0]);const r=m(s.data[0].article_info);return{getImgUrl:C,listRef:r,...p(),...L()}}},y=s=>(w("data-v-45f96187"),s=s(),S(),s),A={class:"weekly-during-pregnancy-container"},P={class:"card-header-style"},U={class:"card-title-style"},R=["innerHTML"],M={key:1,class:"video-box-style"},B=y(()=>e("p",{class:"video-title-style"},"\u65B0\u751F\u513F\u9EC4\u75B8\u5982\u4F55\u5904\u7406\u548C\u62A4\u7406\uFF1F",-1)),D={key:2,class:"audio-box-style flex"},E={class:"flex-start align-start"},N={class:"cover-box-style"},T=y(()=>e("div",{class:"detail-box-style"},[e("p",{class:"title-style"},"\u68EE\u6797\u6B22\u5531\u5BB6"),e("p",{class:"tag-style"},"\u6B22\u4E50\u513F\u6B4C")],-1)),F={class:"control-box-style"};function H(s,r,q,n,O,j){const c=d("van-image"),g=d("Video");return o(),l("div",A,[e("header",null,[a(c,{src:n.getImgUrl("weekly_head.png")},null,8,["src"])]),e("article",null,[(o(!0),l(k,null,I(n.listRef,(t,v)=>(o(),l("div",{key:v,class:"article-content-style"},[e("div",P,[a(c,{class:"weekly_title_box-img-style",src:n.getImgUrl("weekly_title_box.png")},null,8,["src"]),e("p",U,x(t.name),1)]),t.type==="default"||t.type==="multi"?(o(),l("div",{key:0,class:"rich-text-box-style",innerHTML:t.content},null,8,R)):i("",!0),t.type==="video"?(o(),l("div",M,[e("ul",null,[e("li",null,[a(g,{videoId:"weekPlayer"}),B])])])):i("",!0),t.type==="audio"?(o(),l("div",D,[e("div",E,[e("div",N,[a(c,{class:"cover-style",src:s.avatarUrl},null,8,["src"])]),T]),e("div",F,[_(a(c,{class:"audio-control-btn-style",src:n.getImgUrl("audio_play.png"),onClick:s.changeAudioPlay},null,8,["src","onClick"]),[[u,!s.audioPlayStatusRef]]),_(a(c,{class:"audio-control-btn-style",src:n.getImgUrl("audio_suspend.png"),onClick:s.changeAudioSuspend},null,8,["src","onClick"]),[[u,s.audioPlayStatusRef]])])])):i("",!0)]))),128))])])}const Q=f(V,[["render",H],["__scopeId","data-v-45f96187"]]);export{Q as default};
