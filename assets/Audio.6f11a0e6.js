import{_ as p,C as h,r as l,K as S,a as f,o as N,c as R,b as a,d as n,t as r,w as y,v as g}from"./index.6e6e1e56.js";import{g as U}from"./ak.1933dec5.js";const A=h({name:"Audio",props:{audioId:{type:String,default:""},audioUrl:{type:String,default:""},avatarUrl:{type:String,default:""},title:{type:String,defualt:""},tagName:{type:String,default:""},playNum:{type:String,default:""}},setup(e,_){const i=l(e.audioId),c=l(e.title),u=l(e.tagName),d=l(e.playNum),t=l(e.audioUrl),s=new Audio(t.value);let o=l(!1);const v=()=>{o.value=!0},m=()=>{o.value=!1};return S(()=>{if(i.value=e.audioId,c.value=e.title,u.value=e.tagName,d.value=e.playNum,t.value=e.audioUrl,s.src=t.value,o.value){console.log("\u64AD\u653E :>> "),s.play(),_.emit("startPlaye",i.value);return}console.log("\u6682\u505C :>> "),s.pause()}),{audioPlayStatusRef:o,changeAudioPlay:v,changeAudioSuspend:m,audio:s,getImgUrl:U,titleRef:c,tagNameRef:u,playNumRef:d}}}),I={class:"audio-container flex"},C={class:"flex-start align-start"},b={class:"cover-box-style"},k={class:"detail-box-style"},P={class:"title-style"},w={class:"tag-style"},$={class:"play-num-style"},B={class:"play-num-text-style"},D={class:"control-box-style"};function E(e,_,i,c,u,d){const t=f("van-image"),s=f("van-icon");return N(),R("div",I,[a("div",C,[a("div",b,[n(t,{class:"cover-style",src:e.avatarUrl},null,8,["src"])]),a("div",k,[a("p",P,r(e.titleRef),1),a("p",w,r(e.tagNameRef),1),a("p",$,[a("span",null,[n(s,{name:"service-o"})]),a("span",B,r(e.playNumRef),1)])])]),a("div",D,[y(n(t,{class:"audio-control-btn-style",src:e.getImgUrl("audio_play.png"),onClick:e.changeAudioPlay},null,8,["src","onClick"]),[[g,!e.audioPlayStatusRef]]),y(n(t,{class:"audio-control-btn-style",src:e.getImgUrl("audio_suspend.png"),onClick:e.changeAudioSuspend},null,8,["src","onClick"]),[[g,e.audioPlayStatusRef]])])])}const j=p(A,[["render",E],["__scopeId","data-v-00061a5f"]]);export{j as default};
