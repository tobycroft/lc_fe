import{g as S}from"./ak.696322b3.js";import{r as D,_ as E,f as u,D as O,h as t,o as l,c as d,a as o,i as s,w as m,k as A,F as R,s as I,A as f,p as N,m as v}from"./index.4e5c0170.js";const M=async r=>await D("https://api.lc.familyeducation.org.cn/v1/gift/record/list",r);const y={setup(){let r=u([]);const a=async()=>{const e=await M({quiz_id:1});console.log("res :>> ",e),r.value=e.filter(_=>_.gift_info)};return O(()=>{a()}),{getImgUrl:S,getGiftsAPI:a,giftListRef:r}}},i=r=>(N("data-v-cef9fbd7"),r=r(),v(),r),T={class:"to-receive-prize-container"},U={class:"header-content-style"},F=i(()=>o("p",{class:"title-style"},"\u664B\u6C5F\u5E02\u65B0\u664B\u5BB6\u5EAD\u80FD\u529B\u4FC3\u8FDB\u5E73\u53F0",-1)),h=i(()=>o("div",{class:"joint-statement-box-style"},[o("p",null,"\u664B\u6C5F\u5E02\u6C11\u653F\u5C40"),o("p",null,"\u664B\u6C5F\u5E02\u5987\u5973\u8054\u5408\u4F1A"),o("p",{class:"joint-statement-title-style"},"\u8054\u5408\u4E3B\u529E")],-1)),b={class:"segmentation-box-style"},L={class:"article-content-style"},w=i(()=>o("p",{class:"sentiment-style"}," \u606D\u559C\u60A8\u4EEC\u5B8C\u6210\u65B0\u5A5A\u5FC5\u77E5\u8981\u70B9\u7684\u5B66\u4E60\uFF0C\u795D\u613F\u60A8\u4EEC\u5A5A\u59FB\u5E78\u798F\u7F8E\u6EE1\uFF01 ",-1)),W=i(()=>o("p",{class:"accept-way-style"},"\u73B0\u573A\u9886\u53D6\u793C\u5305",-1)),x={class:"swipe-box-style"};function V(r,a,p,e,_,j){const n=t("van-image"),g=t("van-button"),P=t("van-swipe-item"),C=t("van-swipe");return l(),d("div",T,[o("header",null,[o("div",U,[F,h,s(n,{class:"balloon-img-style",src:e.getImgUrl("award/balloon.png")},null,8,["src"]),s(n,{class:"envelope-img-style",src:e.getImgUrl("award/envelope.png")},null,8,["src"]),s(n,{class:"fireworks_left-img-style",src:e.getImgUrl("award/fireworks_left.png")},null,8,["src"]),s(n,{class:"fireworks_right-img-style",src:e.getImgUrl("award/fireworks_right.png")},null,8,["src"])])]),o("div",b,[s(n,{class:"balloon_bg-img-style",src:e.getImgUrl("award/balloon_bg.png")},null,8,["src"]),s(n,{class:"fireworks_left_bg-img-style",src:e.getImgUrl("award/fireworks_left_bg.png")},null,8,["src"]),s(n,{class:"clothes_bg-img-style",src:e.getImgUrl("award/clothes_bg.png")},null,8,["src"]),s(n,{class:"envelope_bg-img-style",src:e.getImgUrl("award/envelope_bg.png")},null,8,["src"]),s(n,{class:"bell_bg-img-style",src:e.getImgUrl("award/bell_bg.png")},null,8,["src"]),s(n,{class:"fireworks_right_bg-img-style",src:e.getImgUrl("award/fireworks_right_bg.png")},null,8,["src"]),s(n,{class:"gift_box_bg-img-style",src:e.getImgUrl("award/gift_box_bg.png")},null,8,["src"])]),o("article",null,[o("div",L,[w,s(g,{class:"contact-staff-btn-style",plain:"",round:""},{default:m(()=>[A(" \u8BF7\u8054\u7CFB\u5DE5\u4F5C\u4EBA\u5458 ")]),_:1}),W,o("div",x,[s(C,{class:"my-swipe",autoplay:3e3,"indicator-color":"white"},{default:m(()=>[(l(!0),d(R,null,I(e.giftListRef,c=>(l(),f(P,{key:c.id},{default:m(()=>[s(n,{class:"rounding-img-style",src:c.gift_info.img},null,8,["src"])]),_:2},1024))),128))]),_:1})])])])])}const k=E(y,[["render",V],["__scopeId","data-v-cef9fbd7"]]);export{k as default};
