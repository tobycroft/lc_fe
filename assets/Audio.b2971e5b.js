import{_ as m,H as v,e as o,A as h,r,o as N,c as S,f as a,a as n,t as d,g as _,v as f}from"./index.6d997c54.js";import{g as R}from"./ak.b75c3897.js";import"./home_imgae_love.80825a44.js";const A=v({name:"Audio",props:{audioUrl:{type:String,default:""},avatarUrl:{type:String,default:""},title:{type:String,defualt:""},tagName:{type:String,default:""},playNum:{type:String,default:""}},setup(e,g){const c=o(e.title),i=o(e.tagName),u=o(e.playNum),l=o(e.audioUrl),t=new Audio(l.value);let s=o(!1);const p=()=>{s.value=!0},y=()=>{s.value=!1};return h(()=>{if(c.value=e.title,i.value=e.tagName,u.value=e.playNum,l.value=e.audioUrl,t.src=l.value,s.value){console.log("\u64AD\u653E :>> "),t.play();return}console.log("\u6682\u505C :>> "),t.pause()}),{audioPlayStatusRef:s,changeAudioPlay:p,changeAudioSuspend:y,audio:t,getImgUrl:R,titleRef:c,tagNameRef:i,playNumRef:u}}}),U={class:"audio-container flex"},k={class:"flex-start align-start"},C={class:"cover-box-style"},b={class:"detail-box-style"},P={class:"title-style"},$={class:"tag-style"},w={class:"play-num-style"},I={class:"play-num-text-style"},B={class:"control-box-style"};function D(e,g,c,i,u,l){const t=r("van-image"),s=r("van-icon");return N(),S("div",U,[a("div",k,[a("div",C,[n(t,{class:"cover-style",src:e.avatarUrl},null,8,["src"])]),a("div",b,[a("p",P,d(e.titleRef),1),a("p",$,d(e.tagNameRef),1),a("p",w,[a("span",null,[n(s,{name:"service-o"})]),a("span",I,d(e.playNumRef),1)])])]),a("div",B,[_(n(t,{class:"audio-control-btn-style",src:e.getImgUrl("audio_play.png"),onClick:e.changeAudioPlay},null,8,["src","onClick"]),[[f,!e.audioPlayStatusRef]]),_(n(t,{class:"audio-control-btn-style",src:e.getImgUrl("audio_suspend.png"),onClick:e.changeAudioSuspend},null,8,["src","onClick"]),[[f,e.audioPlayStatusRef]])])])}const H=m(A,[["render",D],["__scopeId","data-v-46c11094"]]);export{H as default};
