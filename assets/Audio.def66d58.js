import{_ as p,C as h,f as l,K as S,h as _,o as N,c as R,a,i as n,t as r,j as y,v as g}from"./index.4e5c0170.js";import{g as U}from"./ak.696322b3.js";const A=h({name:"Audio",props:{audioId:{type:String,default:""},audioUrl:{type:String,default:""},avatarUrl:{type:String,default:""},title:{type:String,defualt:""},tagName:{type:String,default:""},playNum:{type:String,default:""}},setup(e,f){const i=l(e.audioId),c=l(e.title),u=l(e.tagName),d=l(e.playNum),t=l(e.audioUrl),s=new Audio(t.value);let o=l(!1);const v=()=>{o.value=!0},m=()=>{o.value=!1};return S(()=>{if(i.value=e.audioId,c.value=e.title,u.value=e.tagName,d.value=e.playNum,t.value=e.audioUrl,s.src=t.value,o.value){console.log("\u64AD\u653E :>> "),s.play(),f.emit("startPlaye",i.value);return}console.log("\u6682\u505C :>> "),s.pause()}),{audioPlayStatusRef:o,changeAudioPlay:v,changeAudioSuspend:m,audio:s,getImgUrl:U,titleRef:c,tagNameRef:u,playNumRef:d}}}),I={class:"audio-container flex"},C={class:"flex-start align-start"},k={class:"cover-box-style"},P={class:"detail-box-style"},b={class:"title-style"},$={class:"tag-style"},w={class:"play-num-style"},B={class:"play-num-text-style"},D={class:"control-box-style"};function E(e,f,i,c,u,d){const t=_("van-image"),s=_("van-icon");return N(),R("div",I,[a("div",C,[a("div",k,[n(t,{class:"cover-style",src:e.avatarUrl},null,8,["src"])]),a("div",P,[a("p",b,r(e.titleRef),1),a("p",$,r(e.tagNameRef),1),a("p",w,[a("span",null,[n(s,{name:"service-o"})]),a("span",B,r(e.playNumRef),1)])])]),a("div",D,[y(n(t,{class:"audio-control-btn-style",src:e.getImgUrl("audio_play.png"),onClick:e.changeAudioPlay},null,8,["src","onClick"]),[[g,!e.audioPlayStatusRef]]),y(n(t,{class:"audio-control-btn-style",src:e.getImgUrl("audio_suspend.png"),onClick:e.changeAudioSuspend},null,8,["src","onClick"]),[[g,e.audioPlayStatusRef]])])])}const K=p(A,[["render",E],["__scopeId","data-v-00061a5f"]]);export{K as default};
