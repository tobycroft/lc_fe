import{_ as p,q as a,e as s,r as n,o as u,c as m,f as c,a as t,g as f,v as b,x as l}from"./index.35a4e011.js";const x={components:{Video:a(()=>l(()=>import("./Video.98f0590d.js"),["assets/Video.98f0590d.js","assets/index.35a4e011.js","assets/index.a9b2f033.css"])),Answer:a(()=>l(()=>import("./Answer.1b3cdb72.js"),["assets/Answer.1b3cdb72.js","assets/Answer.d850dd61.css","assets/ak.4c48d12e.js","assets/home_imgae_love.80825a44.js","assets/index.35a4e011.js","assets/index.a9b2f033.css"])),AnswerToEnd:a(()=>l(()=>import("./AnswerToEnd.ad5da1df.js"),["assets/AnswerToEnd.ad5da1df.js","assets/AnswerToEnd.fe27357b.css","assets/ak.4c48d12e.js","assets/home_imgae_love.80825a44.js","assets/index.35a4e011.js","assets/index.a9b2f033.css"]))},setup(){const i=s([{title:"\u4F18\u751F\u51C6\u5907",topic:"\u4EE5\u4E0B\u5907\u5B55\u592B\u5987\u7684\u505A\u6CD5\u4E2D\uFF0C\u6B63\u786E\u7684\u9009\u9879\u6709\uFF08 \uFF09",options:[{label:"\u575A\u6301\u6BCF\u5929\u6162\u8DD130\u5206\u949F",value:"A"},{label:"\u670B\u53CB\u805A\u4F1A\u53EA\u559D\u4F4E\u5EA6\u6570\u7684\u5564\u9152\uFF0C\u4E0D\u559D\u9AD8\u5EA6\u6570\u7684\u767D\u9152",value:"B"},{label:"\u62BD\u7535\u5B50\u70DF",value:"C"},{label:"\u670D\u7528\u53F6\u9178",value:"D"}],videoUrl:"https://xiaobicdn.xiaobixiezi.com/sv/5a765a6e-183789d371c/5a765a6e-183789d371c.mp4"},{title:"\u4F18\u751F\u51C6\u5907",topic:"\u4EE5\u4E0B\u5907\u5B55\u592B\u5987\u7684\u505A\u6CD5\u4E2D\uFF0C\u6B63\u786E\u7684\u9009\u9879\u6709\uFF08 \uFF09",options:[{label:"\u575A\u6301\u6BCF\u5929\u6162\u8DD130\u5206\u949F",value:"A"},{label:"\u670B\u53CB\u805A\u4F1A\u53EA\u559D\u4F4E\u5EA6\u6570\u7684\u5564\u9152\uFF0C\u4E0D\u559D\u9AD8\u5EA6\u6570\u7684\u767D\u9152",value:"B"},{label:"\u62BD\u7535\u5B50\u70DF",value:"C"},{label:"\u670D\u7528\u53F6\u9178",value:"D"}],videoUrl:"https://xiaobicdn.xiaobixiezi.com/sv/5a765a6e-183789d371c/5a765a6e-183789d371c.mp4"}]),o=s(1);return{listDataRef:i,activeNumRef:o,onChangeTopic:e=>{console.log("val :>> ",e),o.value=e}}}},h={class:"sorrow-container"};function A(i,o,r,e,D,w){const _=n("Video"),d=n("Answer"),v=n("AnswerToEnd");return u(),m("div",h,[c("header",null,[t(_,{videoId:"asrrowPlayer",videoUrl:e.listDataRef[e.activeNumRef-1].videoUrl},null,8,["videoUrl"])]),c("article",null,[t(d,{listData:e.listDataRef,onChange:e.onChangeTopic},null,8,["listData","onChange"])]),f(t(v,null,null,512),[[b,!1]])])}const C=p(x,[["render",A],["__scopeId","data-v-35b0ea6c"]]);export{C as default};
