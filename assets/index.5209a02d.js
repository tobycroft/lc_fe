import{_ as m,f as p,r,o as b,c as h,a as o,w as f,g as v,t as x,y as w,q as d,u as C,z as A,h as D,s as _,v as U}from"./index.8e26e5ab.js";import{g as R}from"./ak.f9236663.js";const N={name:"CouponPop",props:{serialNumber:{type:Number,default:1}},setup(a,n){const l=p(!1),e=p({}),s=p(a.serialNumber);return{showRef:l,getImgUrl:R,serialNumberRef:s,gift:e,next:()=>{n.emit("next"),l.value=!1},open:(c,u)=>{c.value=c,s.value=u,l.value=!0},nums:{1:"\u4E00",2:"\u4E8C",3:"\u4E09",4:"\u56DB",5:"\u4E94",6:"\u516D",7:"\u4E03",8:"\u516B",9:"\u4E5D",10:"\u5341"}}}},y={class:"greetings-container"},B={class:"van-popup-content"};function z(a,n,l,e,s,i){const t=r("van-image"),c=r("van-popup");return b(),h("div",y,[o(c,{onClose:e.next,class:"van-popup-style",show:e.showRef,"onUpdate:show":n[0]||(n[0]=u=>e.showRef=u)},{default:f(()=>[v("div",B,[v("header",null,"\u606D\u559C\u5230\u8FBE\u7B2C"+x(e.nums[e.serialNumberRef])+"\u7AD9",1),v("article",null,[o(t,{class:"message-str-style",src:e.getImgUrl(`message/message_str_${e.serialNumberRef}.png`)},null,8,["src"]),o(t,{class:"wedd-left-style",src:e.getImgUrl("wedd_left.png")},null,8,["src"]),o(t,{class:"heart-shap-left-style",src:e.getImgUrl("heart_shap_left.png")},null,8,["src"]),o(t,{class:"wedd-right-style",src:e.getImgUrl("wedd_right.png")},null,8,["src"]),o(t,{class:"transparent-heart-shap-right-style",src:e.getImgUrl("transparent_heart_shap_right.png")},null,8,["src"]),o(t,{class:"prize-picture-style",src:e.gift.img},null,8,["src"])])])]),_:1},8,["onClose","show"])])}const I=m(N,[["render",z],["__scopeId","data-v-7e70c68d"]]);const P=w({components:{Video:d(()=>_(()=>import("./Video.1af28ab0.js"),["assets/Video.1af28ab0.js","assets/index.8e26e5ab.js","assets/index.145fdbd3.css"])),Answer:d(()=>_(()=>import("./Answer.698b0446.js"),["assets/Answer.698b0446.js","assets/Answer.14d00b6f.css","assets/ak.f9236663.js","assets/index.8e26e5ab.js","assets/index.145fdbd3.css"])),AnswerToEnd:d(()=>_(()=>import("./AnswerToEnd.9c8958ce.js"),["assets/AnswerToEnd.9c8958ce.js","assets/AnswerToEnd.fe27357b.css","assets/ak.f9236663.js","assets/index.8e26e5ab.js","assets/index.145fdbd3.css"])),CouponPop:I},setup(){const a=C(),n=p([{title:"\u9002\u5E94\u53D8\u5316",topic:"\u65B0\u5A5A\u592B\u5987\u5728\u89D2\u8272\u4E0A\u9700\u8981\u54EA\u4E9B\u8F6C\u53D8\uFF0C\u6B63\u786E\u7684\u9009\u9879\u662F( )",answer:"B",options:[{label:"\u603B\u662F\u62B1\u6028\u65E5\u5E38\u751F\u6D3B\u7410\u4E8B\u4E00\u5806\uFF0C\u4E0D\u80FD\u9002\u5E94",value:"A"},{label:"\u8BBE\u5B9A\u5BB6\u5EAD\u5171\u540C\u7F8E\u597D\u65F6\u523B",value:"B"},{label:"\u5A5A\u540E\u5A5A\u524D\u5B8C\u5168\u4E0D\u4E00\u6837\uFF0C\u89C9\u5F97\u8FD8\u4E0D\u5982\u56DE\u5230\u5A5A\u524D",value:"C"},{label:"\u592B\u59BB\u4E8C\u4EBA\u5404\u5FD9\u5404\u7684\uFF0C\u6CA1\u6709\u8F6C\u53D8",value:"D"}],hint:"\u65B0\u5A5A\u592B\u59BB\u5BF9\u5A5A\u59FB\u751F\u6D3B\u5145\u6EE1\u4E86\u597D\u5947\uFF0C\u53CC\u65B9\u4ECE\u539F\u751F\u5BB6\u5EAD\u4E2D\u5404\u81EA\u72EC\u7ACB\u51FA\u6765\u7EC4\u6210\u4E00\u4E2A\u201C\u65B0\u5BB6\u201D\uFF0C\u7B80\u5355\u7684\u4E09\u4E2A\u65B9\u9762\uFF08\u592B\u59BB\u53CC\u53CC\u628A\u5BB6\u8FD8\u3001\u7F8E\u597D\u751F\u6D3B\u9F50\u8E0F\u6B65\u3001\u8C03\u6574\u5FC3\u6001\u751C\u871C\u871C)\u8FDB\u884C\u8C03\u6574\uFF0C\u5C31\u4F1A\u8BA9\u8BB8\u591A\u65B0\u5A5A\u592B\u59BB\u77E5\u9053\u8BE5\u5982\u4F55\u8212\u9002\u7684\u76F8\u5904\u3002",videoUrl:"https://xiaobicdn.xiaobixiezi.com/sv/5a765a6e-183789d371c/5a765a6e-183789d371c.mp4"},{title:"\u5173\u7CFB\u8C03\u9002",topic:"\u65B0\u5A5A\u592B\u5987\u60F3\u8981\u62E5\u6709\u72EC\u7ACB\u7684\u592B\u59BB\u5173\u7CFB\uFF0C\u5E94\u8BE5\u638C\u63E1\u7684\u79D8\u8BC0\u5176\u4E2D\u6B63\u786E\u7684\u4E00\u9879\u662F( )",answer:"D",options:[{label:"\u89C9\u5F97\u8FDB\u5165\u5A5A\u59FB\u4E86\uFF0C\u4E0D\u9700\u8981\u518D\u81EA\u6211\u6210\u957F\u3001\u72EC\u7ACB\u548C\u63D0\u5347",value:"A"},{label:"\u820D\u5F03\u559C\u6B22\u7684\u751F\u6D3B",value:"B"},{label:"\u7AA5\u63A2\u5BF9\u65B9\u9690\u79C1\uFF0C\u5728\u670B\u53CB\u9762\u524D\u5927\u63EDTA\u7684\u8001\u5E95",value:"C"},{label:"\u5C3D\u91CF\u4FDD\u7559\u539F\u6709\u826F\u597D\u7684\u670B\u53CB\u5708",value:"D"}],hint:"\u53EA\u8981\u592B\u59BB\u4E24\u4EBA\u7528\u5FC3\u53BB\u7EF4\u7CFB\u611F\u60C5\u548C\u7ECF\u8425\u751F\u6D3B\uFF0C\u5C31\u80FD\u591F\u62E5\u6709\u5E78\u798F\u751C\u871C\u7684\u65B0\u5A5A\u751F\u6D3B\u3002\u4F5C\u4E3A\u65B0\u5A5A\u592B\u5987\uFF0C\u5728\u4FDD\u6301\u4EB2\u5BC6\u7684\u540C\u65F6\uFF0C\u4E5F\u8981\u62E5\u6709\u72EC\u7ACB\uFF0C\u8FD9\u6837\u624D\u80FD\u8BA9\u592B\u59BB\u5173\u7CFB\u8C03\u6574\u5230\u8212\u9002\u53C8\u751C\u871C\u7684\u72B6\u6001\u3002\u72EC\u7ACB\u81EA\u4E3B\u7684\u5E73\u8861\u6728\uFF1B\u79CD\u690D\u5FC3\u5E95\u7684\u5C0F\u7EFF\u6D32\uFF1B\u4FDD\u7559\u826F\u597D\u7684\u793E\u4EA4\u5708\u3002",videoUrl:"https://xiaobicdn.xiaobixiezi.com/sv/5a765a6e-183789d371c/5a765a6e-183789d371c.mp4"},{title:"\u751F\u6D3B\u72B6\u6001",topic:"\u8981\u60F3\u62E5\u6709\u4E00\u4E2A\u826F\u597D\u7684\u751F\u6D3B\u72B6\u6001\uFF0C\u6B63\u786E\u7684\u4E00\u9879\u662F( )",answer:"A",options:[{label:"\u8BA1\u5212\u65C5\u884C\uFF0C\u7EE7\u7EED\u4FDD\u6301\u751C\u871C\u7684\u4E8C\u4EBA\u4E16\u754C",value:"A"},{label:"\u4E0D\u7231\u770B\u4E66\uFF0C\u603B\u662F\u501F\u53E3\u81EA\u5DF1\u6CA1\u65F6\u95F4",value:"B"},{label:"\u820D\u5F03\u5A5A\u524D\u539F\u6709\u7684\u5174\u8DA3\u7231\u597D",value:"C"},{label:"\u66B4\u996E\u66B4\u98DF\uFF0C\u751F\u6D3B\u4F5C\u606F\u4E0D\u89C4\u5F8B",value:"D"}],hint:"\u65B0\u5A5A\u751F\u6D3B\u8BA9\u4EBA\u89C9\u5F97\u662F\u751C\u871C\u5E78\u798F\u7684\uFF0C\u592B\u59BB\u53CC\u65B9\u5E94\u8BE5\u5B89\u6392\u597D\u81EA\u5DF1\u7684\u751F\u6D3B\uFF0C\u8BA9\u5F7C\u6B64\u4E4B\u95F4\u7684\u611F\u60C5\u7559\u4E0B\u7F8E\u597D\u7684\u56DE\u5FC6\u548C\u89C1\u8BC1\u3002\u505A\u5230\u6301\u7EED\u4E8C\u4EBA\u4E16\u754C\u3001\u7B54\u8C22\u4EB2\u670B\u597D\u53CB\u3001\u70ED\u7231\u7F8E\u597D\u751F\u6D3B\u3001\u6C38\u8446\u5404\u81EA\u9B45\u529B\u3001\u57F9\u517B\u5174\u8DA3\u7231\u597D\u3001\u575A\u6301\u953B\u70BC\u8EAB\u4F53\u8FD9\u516D\u4EF6\u4E8B\uFF0C\u5C31\u80FD\u62E5\u6709\u4E00\u4E2A\u826F\u597D\u7684\u751F\u6D3B\u72B6\u6001\uFF0C\u4ECE\u800C\u7ED9\u65B0\u5A5A\u592B\u59BB\u5E26\u6765\u771F\u6B63\u7684\u5E78\u798F\u3002",videoUrl:"https://xiaobicdn.xiaobixiezi.com/sv/5a765a6e-183789d371c/5a765a6e-183789d371c.mp4"},{title:"\u5E73\u8861\u5DE5\u4F5C",topic:"\u5982\u4F55\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5F88\u597D\u7684\u5E73\u8861\u5DE5\u4F5C\u4E0E\u5BB6\u5EAD\uFF0C\u4EE5\u4E0B\u6B63\u786E\u7684\u9009\u9879\u662F( )",answer:"C",options:[{label:"\u5FFD\u89C6\u8EAB\u4F53\u5065\u5EB7\uFF0C\u89C9\u5F97\u81EA\u5DF1\u8FD8\u5E74\u8F7B",value:"A"},{label:"\u5DE5\u4F5C\u65F6\u5206\u5FC3\uFF0C\u5DE5\u4F5C\u6548\u7387\u4F4E",value:"B"},{label:"\u627E\u56FA\u5B9A\u65F6\u95F4\u4E0E\u7231\u4EBA\u9AD8\u8D28\u91CF\u76F8\u5904",value:"C"},{label:"\u4E0D\u6C9F\u901A\u4EA4\u6D41\uFF0C\u9047\u5230\u95EE\u9898\u6CA1\u6709\u5171\u540C\u5546\u91CF\u89E3\u51B3\u65B9\u6848",value:"D"}],hint:"\u5DE5\u4F5C\u548C\u5BB6\u5EAD\u90FD\u662F\u751F\u6D3B\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\uFF0C\u5DE5\u4F5C\u662F\u5E78\u798F\u5BB6\u5EAD\u7684\u4FDD\u969C\uFF0C\u540C\u65F6\u5E78\u798F\u7684\u5BB6\u5EAD\u80FD\u4FC3\u8FDB\u6211\u4EEC\u66F4\u597D\u7684\u5DE5\u4F5C\u3002\u505A\u5230\u5DE5\u4F5C\u4E0E\u5BB6\u5EAD\u7684\u5E73\u8861\uFF0C\u5E76\u4E0D\u662F\u5B8C\u5168\u7684\u5E73\u8861\uFF0C\u800C\u662F\u5BFB\u6C42\u4E00\u5B9A\u7684\u5E73\u8861\u3002\u4F5C\u4E3A\u65B0\u5A5A\u592B\u59BB\uFF0C\u505A\u5230\u81EA\u8EAB\u5065\u5EB7\u7BA1\u7406\u3001\u5DE5\u4F5C\u5F20\u5F1B\u6709\u5EA6\u3001\u53CA\u65F6\u8F6C\u6362\u89D2\u8272\u3001\u56FA\u5B9A\u76F8\u5904\u65F6\u95F4\u3001\u6309\u65F6\u7167\u987E\u5BB6\u5EAD\u3001\u7ECF\u5E38\u6C9F\u901A\u4EA4\u6D41\uFF0C\u53EF\u4EE5\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5F88\u597D\u7684\u5E73\u8861\u5DE5\u4F5C\u4E0E\u5BB6\u5EAD\u3002",videoUrl:"https://xiaobicdn.xiaobixiezi.com/sv/5a765a6e-183789d371c/5a765a6e-183789d371c.mp4"},{title:"\u6709\u6548\u6C9F\u901A",topic:"\u4EE5\u4E0B\u5E78\u798F\u5A5A\u59FB\u7684\u6C9F\u901A\u7B56\u7565\u4E2D\uFF0C\u6B63\u786E\u7684\u9009\u9879\u662F( )",answer:"B",options:[{label:"TA\u7684\u8BDD\u8FD8\u6CA1\u8BF4\u5B8C\uFF0C\u5C31\u6025\u4E8E\u8868\u8FBE\u81EA\u5DF1\u7684\u60F3\u6CD5",value:"A"},{label:"\u5F7C\u6B64\u7406\u89E3\u4E0E\u4F53\u8C05\uFF0C\u4EE5\u5C0A\u91CD\u4E3A\u524D\u63D0",value:"B"},{label:"\u89C9\u5F97\u5DF2\u7ECF\u7ED3\u5A5A\u4E86\uFF0C\u592B\u59BB\u4E4B\u524D\u7684\u8D5E\u7F8E\u662F\u591A\u4F59\u7684",value:"C"},{label:"\u56FA\u6267\u5DF2\u89C1\uFF0C\u63A5\u53D7\u4E0D\u4E86TA\u7684\u610F\u89C1",value:"D"}],hint:"\u4FD7\u8BDD\u8BF4\uFF0C\u201C\u4E00\u53E5\u8BDD\u53EF\u4EE5\u628A\u4EBA\u8BF4\u7B11\uFF0C\u4E00\u53E5\u8BDD\u4E5F\u53EF\u4EE5\u628A\u4EBA\u8BF4\u8DF3\u3002\u201D\u65B0\u5A5A\u592B\u59BB\u4E4B\u95F4\u7684\u6C9F\u901A\u6781\u4E3A\u91CD\u8981\uFF0C\u638C\u63E1\u6709\u6548\u7684\u592B\u59BB\u6C9F\u901A\u7B56\u7565\uFF0C\u6709\u52A9\u4E8E\u4FDD\u6301\u751C\u871C\u7684\u65B0\u5A5A\u5173\u7CFB\uFF0C\u66F4\u662F\u5A5A\u59FB\u7684\u6DA6\u6ED1\u5242\u3002\u516D\u4E2A\u6C9F\u901A\u7B56\u7565\uFF1A\u642D\u5EFA\u6C9F\u901A\u6865\u6881\u3001\u9009\u62E9\u5408\u9002\u65F6\u95F4\u3001\u5B66\u4F1A\u6B63\u786E\u503E\u542C\u3001\u592B\u59BB\u9700\u8981\u8D5E\u7F8E\u3001\u7406\u89E3\u80A2\u4F53\u8BED\u8A00\u3001\u61C2\u5F97\u5FC5\u8981\u59A5\u534F\u3002",videoUrl:"https://xiaobicdn.xiaobixiezi.com/sv/5a765a6e-183789d371c/5a765a6e-183789d371c.mp4"},{title:"\u60C5\u7EEA\u8C03\u63A7",topic:"\u5982\u4F55\u6B63\u786E\u8868\u8FBE\u8D1F\u9762\u60C5\u7EEA\uFF0C\u4EE5\u4E0B\u6B63\u786E\u7684\u9009\u9879\u662F( )",answer:"D",options:[{label:"\u957F\u671F\u618B\u5728\u5FC3\u91CC,\u81EA\u5DF1\u9ED8\u9ED8\u5FCD\u53D7",value:"A"},{label:"\u4E0D\u80FD\u9762\u5BF9\u81EA\u5DF1\u7684\u8D1F\u9762\u60C5\u7EEA",value:"B"},{label:"\u901A\u8FC7\u4E0D\u5408\u7406\u7684\u65B9\u5F0F\u53D1\u6CC4\u4E0D\u826F\u60C5\u7EEA",value:"C"},{label:"\u8FD0\u7528\u6B63\u9762\u79EF\u6781\u7684\u8A00\u8BED\u6697\u793A",value:"D"}],hint:"\u4F5C\u4E3A\u65B0\u5A5A\u5BB6\u5EAD\uFF0C\u53CC\u65B9\u521A\u521A\u6B65\u5165\u5A5A\u59FB\uFF0C\u65B0\u5A5A\u71D5\u5C14\uFF0C\u6D53\u60C5\u871C\u610F\u3002\u53D1\u813E\u6C14\u7684\u98CE\u9669\u6BD4\u8F83\u5C0F\uFF0C\u6240\u4EE5\u66F4\u5BB9\u6613\u8BA9\u4EBA\u60C5\u7EEA\u5931\u63A7\u3002\u6211\u4EEC\u901A\u8FC7\u5766\u7136\u63A5\u7EB3\u81EA\u5DF1\u3001\u5B66\u4F1A\u8868\u8FBE\u60F3\u6CD5\u3001\u61C2\u5F97\u5408\u7406\u6392\u89E3\u3001\u5BFB\u627E\u5916\u63F4\u503E\u8BC9\u3001\u6B63\u9762\u8A00\u8BED\u6697\u793A\u3001\u8F6C\u79FB\u8D1F\u9762\u60C5\u7EEA\u6765\u6B63\u786E\u8868\u8FBE\u8D1F\u9762\u60C5\u7EEA\u3002",videoUrl:"https://xiaobicdn.xiaobixiezi.com/sv/5a765a6e-183789d371c/5a765a6e-183789d371c.mp4"},{title:"\u5A46\u5AB3\u5173\u7CFB",topic:"\u8981\u60F3\u5A46\u5AB3\u4E4B\u95F4\u548C\u8C10\u76F8\u5904\uFF0C\u4EE5\u4E0B\u6B63\u786E\u7684\u9009\u9879\u662F( )",answer:"A",options:[{label:"\u4E92\u76F8\u5C0A\u91CD\u3001\u611F\u6069\u3001\u5305\u5BB9\uFF0C\u51E1\u4E8B\u591A\u6C9F\u901A\u591A\u5546\u91CF",value:"A"},{label:"\u513F\u5B50\u4E0D\u95FB\u4E0D\u95EE\uFF0C\u4EFB\u7531\u5A46\u5AB3\u77DB\u76FE\u53D1\u5C55",value:"B"},{label:"\u89C9\u5F97\u5DF2\u7ECF\u662F\u4E00\u5BB6\u4EBA\u4E86\uFF0C\u4E92\u76F8\u4E4B\u95F4\u4E0D\u9700\u8981\u8D5E\u7F8E",value:"C"},{label:"\u5A46\u5A46\u662F\u522B\u4EBA\u5988\uFF0C\u4EB2\u5988\u624D\u662F\u81EA\u5DF1\u5988\uFF0C\u533A\u522B\u5BF9\u5F85",value:"D"}],hint:"\u4F5C\u4E3A\u65B0\u5A5A\u592B\u59BB\uFF0C\u7B2C\u4E00\u6B21\u9762\u5BF9\u5A46\u5AB3\u5173\u7CFB\uFF0C\u8981\u5B66\u4F1A\u4E00\u4E9B\u5C0F\u6280\u5DE7\uFF0C\u964D\u4F4E\u4E00\u70B9\u513F\u671F\u5F85\uFF0C\u53CC\u65B9\u5145\u5206\u7684\u5C0A\u91CD\u4E0E\u5305\u5BB9\uFF0C\u8003\u8651\u4E8B\u60C5\uFF0C\u4ECE\u5BF9\u65B9\u7684\u89D2\u5EA6\u6765\u8003\u8651\uFF0C\u628A\u5F7C\u6B64\u5F53\u4F5C\u5BB6\u4EBA\uFF0C\u6240\u6709\u7684\u4E8B\u60C5\u90FD\u4F1A\u8FCE\u5203\u800C\u89E3\u3002\u5A46\u5AB3\u4E4B\u95F4\u516D\u4E2A\u76F8\u5904\u6CD5\u5B9D\uFF1A\u5C0A\u91CD\u5305\u5BB9\u662F\u5730\u57FA\uFF1B\u6362\u4F4D\u601D\u8003\u5FC3\u8FDE\u5FC3\uFF1B\u513F\u5B50\u626E\u6F14\u4E2D\u4ECB\u65B9\uFF1B\u5634\u4E0A\u62B9\u871C\u5938\u5BF9\u65B9\uFF1B\u5A46\u5A46\u4EB2\u5988\u90FD\u662F\u5988\uFF1B\u4E00\u5B9A\u8DDD\u79BB\u4EA7\u751F\u7F8E\u3002",videoUrl:"https://xiaobicdn.xiaobixiezi.com/sv/5a765a6e-183789d371c/5a765a6e-183789d371c.mp4"},{title:"\u8D22\u52A1\u7BA1\u7406",topic:"\u9002\u5408\u5BB6\u5EAD\u7684\u8D22\u52A1\u89C4\u5F8B\uFF0C\u4EE5\u4E0B\u6B63\u786E\u7684\u9009\u9879\u662F( )",answer:"D",options:[{label:"\u8D2D\u4E70\u5927\u91CF\u7684\u671F\u8D27\u548C\u865A\u62DF\u8D27\u5E01\uFF0C\u60F3\u8D5A\u53D6\u66F4\u9AD8\u6536\u76CA",value:"A"},{label:"\u4E0D\u901A\u8FC7\u52B3\u52A8\u521B\u9020\u8D22\u5BCC\uFF0C\u7518\u5F53\u5543\u8001\u65CF",value:"B"},{label:"\u94FA\u5F20\u6D6A\u8D39\uFF0C\u4E0D\u77E5\u9053\u533A\u5206\u201C\u9700\u8981\u201D\u548C\u201C\u60F3\u8981\u201D\u4E24\u79CD\u4E0D\u540C\u7684\u8D2D\u4E70\u884C\u4E3A",value:"C"},{label:"\u5B66\u4F1A\u8BB0\u8D26\uFF0C\u505A\u5230\u5BB6\u5EAD\u6536\u652F\u5FC3\u4E2D\u6709\u6570\uFF0C\u6539\u53D8\u4E0D\u5FC5\u8981\u7684\u6D88\u8D39\u4E60\u60EF",value:"D"}],hint:"\u7269\u8D28\u57FA\u7840\u51B3\u5B9A\u4E0A\u5C42\u5EFA\u7B51\u3002\u5BB6\u5EAD\u7ED3\u6784\u7684\u7A33\u5B9A\uFF0C\u4E3B\u8981\u53D6\u51B3\u4E8E\u8FD9\u4E2A\u5BB6\u5EAD\u7684\u7ECF\u6D4E\u57FA\u7840\u3002\u591A\u6570\u4EBA\u90FD\u77E5\u9053\u4F01\u4E1A\u9700\u8981\u7ECF\u8425\uFF0C\u5374\u5BB9\u6613\u5FFD\u7565\u5BB6\u5EAD\u5176\u5B9E\u66F4\u9700\u8981\u7ECF\u8425\u3002\u9002\u5408\u5BB6\u5EAD\u7684\u516D\u5927\u8D22\u52A1\u89C4\u5F8B\uFF1A\u8D22\u5BCC\u79EF\u7D2F\uFF0C\u52B3\u52A8\u521B\u9020\uFF1B\u5EF6\u8FDF\u6EE1\u8DB3\uFF0C\u91CF\u5165\u4E3A\u51FA\uFF1B\u8D44\u4EA7\u8D1F\u503A\uFF0C\u6E05\u6670\u5212\u5206\uFF1B\u6536\u652F\u8BB0\u8D26\uFF0C\u5B9A\u671F\u68C0\u89C6\uFF1B\u6295\u8D44\u7406\u8D22\uFF0C\u8C28\u614E\u64CD\u4F5C\uFF1B\u4FDD\u9669\u89C4\u5212\uFF0C\u9632\u8303\u610F\u5916\u3002\u53EA\u6709\u6211\u4EEC\u638C\u63E1\u4E86\u9002\u5408\u5BB6\u5EAD\u7684\u8D22\u52A1\u89C4\u5F8B\uFF0C\u624D\u80FD\u5F88\u597D\u7684\u505A\u5230\u5BB6\u5EAD\u8D22\u52A1\u7BA1\u7406\uFF0C\u83B7\u5F97\u5E78\u798F\u7A33\u5B9A\u7684\u5A5A\u59FB\u751F\u6D3B\u3002",videoUrl:"https://xiaobicdn.xiaobixiezi.com/sv/5a765a6e-183789d371c/5a765a6e-183789d371c.mp4"},{title:"\u4F18\u751F\u51C6\u5907",topic:"\u4EE5\u4E0B\u5907\u5B55\u592B\u5987\u7684\u505A\u6CD5\u4E2D\uFF0C\u6B63\u786E\u7684\u9009\u9879\u662F( )",answer:"C",options:[{label:"\u670D\u7528\u5927\u91CF\u4E0D\u592A\u9002\u7528\u7684\u4FDD\u5065\u54C1",value:"A"},{label:"\u670B\u53CB\u805A\u4F1A\u53EA\u559D\u4F4E\u5EA6\u6570\u7684\u5564\u9152\uFF0C\u4E0D\u559D\u9AD8\u5EA6\u6570\u7684\u767D\u9152",value:"B"},{label:"\u575A\u6301\u6BCF\u5929\u6162\u8DD130\u5206\u949F",value:"C"},{label:"\u62BD\u7535\u5B50\u70DF",value:"D"}],hint:"\u5907\u5B55\u671F\u95F4\uFF0C\u592B\u59BB\u53CC\u65B9\u90FD\u5E94\u6212\u9664\u5438\u70DF\u559D\u9152\u7684\u4E0D\u826F\u4E60\u60EF\uFF0C\u89C4\u5F8B\u4F5C\u606F\uFF0C\u575A\u6301\u8FD0\u52A8\uFF1B\u5973\u65B9\u9700\u5728\u5B55\u524D3\u4E2A\u6708\u5F00\u59CB\u670D\u7528\u53F6\u9178\u3002",videoUrl:"https://xiaobicdn.xiaobixiezi.com/sv/5a765a6e-183789d371c/5a765a6e-183789d371c.mp4"},{title:"\u5BB6\u5EAD\u6559\u80B2",topic:"\u4EE5\u4E0B\u54EA\u4E2A\u9009\u9879\u5C5E\u4E8E\u65E9\u671F\u6559\u80B2\u7684\u65B9\u6CD5\uFF1F( )",answer:"B",options:[{label:"\u5B69\u5B50\u751F\u6D3B\u7684\u5BB6\u5EAD\u5B64\u5355\uFF0C\u592B\u59BB\u611F\u60C5\u6DE1\u8584",value:"A"},{label:"\u5BB6\u957F\u6811\u7ACB\u7EC8\u8EAB\u5B66\u4E60\u89C2\u5FF5\uFF0C\u4E3A\u5B69\u5B50\u8425\u9020\u5168\u9762\u5065\u5EB7\u6210\u957F\u7684\u73AF\u5883\uFF0C\u52AA\u529B\u6210\u4E3A\u7EC8\u8EAB\u5B66\u4E60\u7684\u8DF5\u884C\u8005",value:"B"},{label:"\u8001\u662F\u8DDF\u4F18\u79C0\u7684\u5B69\u5B50\u4F5C\u6BD4\u8F83\uFF0C\u4EE5\u522B\u4EBA\u5BB6\u7684\u5B69\u5B50\u6765\u6559\u80B2\u8981\u6C42\u81EA\u5DF1\u5B69\u5B50",value:"C"},{label:"\u5BB6\u957F\u6CA1\u6709\u4EE5\u8EAB\u4F5C\u5219\uFF0C\u6CA1\u6709\u505A\u597D\u5B69\u5B50\u826F\u597D\u7684\u699C\u6837",value:"D"}],hint:"\u4EFB\u4F55\u4E00\u79CD\u804C\u4E1A\u51E0\u4E4E\u90FD\u9700\u8981\u4E13\u4E1A\u7684\u5C97\u524D\u57F9\u8BAD\u624D\u80FD\u4E0A\u5C97\uFF0C\u7136\u800C\u7236\u6BCD\u8FD9\u4E2A\u4E16\u754C\u4E0A\u4ECE\u4E1A\u4EBA\u6570\u6700\u591A\u7684\u5C97\u4F4D\u5374\u6CA1\u6709\u4E0A\u5C97\u8BC1\uFF0C\u6211\u4EEC\u5C31\u5DF2\u7ECF\u81EA\u7136\u800C\u7136\u7684\u6210\u4E3A\u7236\u6BCD\u4E86\u3002\u4E3A\u4EBA\u7236\u6BCD\u7684\u6838\u5FC3\u7406\u5FF5\u4E3B\u8981\u662F\u65E9\u671F\u6559\u80B2\u3002\u5305\u62EC\u5BB6\u5EAD\u548C\u8C10\u6709\u7231\u3001\u7236\u6BCD\u6709\u6548\u966A\u4F34\u3001\u5FEB\u4E50\u4EB2\u5B50\u9605\u8BFB\u3001\u5BB6\u957F\u4EE5\u8EAB\u4F5C\u5219\u3001\u505A\u5230\u56E0\u6750\u65BD\u6559\u3001\u6811\u7ACB\u5B66\u4E60\u89C2\u5FF5\u3002\u56E0\u4E3A\u53EA\u6709\u901A\u8FC7\u5B66\u4E60\uFF0C\u6211\u4EEC\u624D\u4F1A\u5177\u5907\u6B63\u786E\u79D1\u5B66\u7684\u80B2\u513F\u89C2\uFF0C\u624D\u80FD\u591F\u5E2E\u52A9\u5B69\u5B50\u5065\u5EB7\u5FEB\u4E50\u7684\u6210\u957F\u3002",videoUrl:"https://xiaobicdn.xiaobixiezi.com/sv/5a765a6e-183789d371c/5a765a6e-183789d371c.mp4"}]),l=p(1),e=(i=null)=>{console.log("gift :>> ",i),i?s.value.open(i,l.value):l.value<n.value.length?l.value=l.value+1:(console.log("\u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u9898\u4E86 :>> "),a.replace("/completeStudy"))},s=p(null);return A(()=>{}),{listDataRef:n,activeNumRef:l,onChangeTopic:e,domCouponPopRef:s}}}),T={class:"sorrow-container"};function E(a,n,l,e,s,i){const t=r("Video"),c=r("Answer"),u=r("AnswerToEnd"),g=r("CouponPop");return b(),h("div",T,[v("header",null,[o(t,{videoId:"asrrowPlayer",videoUrl:a.listDataRef[a.activeNumRef-1].videoUrl},null,8,["videoUrl"])]),v("article",null,[o(c,{listData:a.listDataRef,activeNum:a.activeNumRef,onChange:a.onChangeTopic},null,8,["listData","activeNum","onChange"])]),D(o(u,null,null,512),[[U,!1]]),o(g,{ref:"domCouponPopRef",serialNumber:a.activeNumRef,onNext:a.onChangeTopic},null,8,["serialNumber","onNext"])])}const O=m(P,[["render",E],["__scopeId","data-v-652b4115"]]);export{O as default};
