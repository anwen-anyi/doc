import{u as M,h as le,i as te,j as Y,k as se,P as ae,t as ie,l as re,m as j,p as w,q as ue,w as z,v as t,x as ne,R as _,y as oe,z as ce,A as de,C as he,B as ve,D as pe,E as me,F as ye,G as xe,H as ge,I as fe,J as $,K as I,L as He,M as q,N as be}from"./app-BxuMPliY.js";const ke=["/","/collect/","/collect/qq.html","/collect/tiktok.html","/collect/web.html","/collect/wechat.html","/index/01-home.html","/index/02-addcloud.html","/index/03-code.html","/index/05-head.html","/index/06-body.html","/index/07-wenti.html","/index/09-ssologin.html","/index/10-dlianjie.html","/index/11-durl.html","/index/12-install.html","/index/13.api.html","/index/14-android_install.html","/index/","/other/","/other/aliyun.html","/other/apple.html","/other/bing.html","/other/caniuse.html","/other/cloudflare.html","/other/github.html","/other/jsdeliver.html","/other/tencent.html","/other/zhandian.html","/index/build/","/index/build/github.html","/index/build/kaifa.html","/index/build/linux.html","/index/build/win.html","/index/build/sso/","/index/build/sso/build.html","/index/build/sso/dev.html","/404.html"],Re="SEARCH_PRO_QUERY_HISTORY",x=M(Re,[]),we=()=>{const{queryHistoryCount:s}=q,a=s>0;return{enabled:a,queryHistory:x,addQueryHistory:i=>{a&&(x.value=Array.from(new Set([i,...x.value.slice(0,s-1)])))},removeQueryHistory:i=>{x.value=[...x.value.slice(0,i),...x.value.slice(i+1)]}}},F=s=>ke[s.id]+("anchor"in s?`#${s.anchor}`:""),qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=q,g=M(qe,[]),Qe=()=>{const s=U>0;return{enabled:s,resultHistory:g,addResultHistory:a=>{if(s){const i={link:F(a),display:a.display};"header"in a&&(i.header=a.header),g.value=[i,...g.value.slice(0,U-1)]}},removeResultHistory:a=>{g.value=[...g.value.slice(0,a),...g.value.slice(a+1)]}}},Se=s=>{const a=he(),i=Y(),Q=ve(),u=j(0),b=w(()=>u.value>0),p=pe([]);return me(()=>{const{search:m,terminate:S}=ye(),f=He(c=>{const H=c.join(" "),{searchFilter:C=v=>v,splitWord:L,suggestionsFilter:P,...y}=a.value;H?(u.value+=1,m(c.join(" "),i.value,y).then(v=>C(v,H,i.value,Q.value)).then(v=>{u.value-=1,p.value=v}).catch(v=>{console.warn(v),u.value-=1,u.value||(p.value=[])})):p.value=[]},q.searchDelay-q.suggestDelay);z([s,i],([c])=>f(c),{immediate:!0}),xe(()=>{S()})}),{isSearching:b,results:p}};var Le=le({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:a}){const i=te(),Q=Y(),u=se(ae),{enabled:b,addQueryHistory:p,queryHistory:m,removeQueryHistory:S}=we(),{enabled:f,resultHistory:c,addResultHistory:H,removeResultHistory:C}=Qe(),L=b||f,P=ie(s,"queries"),{results:y,isSearching:v}=Se(P),r=re({isQuery:!0,index:0}),d=j(0),h=j(0),O=w(()=>L&&(m.value.length>0||c.value.length>0)),D=w(()=>y.value.length>0),A=w(()=>y.value[d.value]||null),B=()=>{const{isQuery:e,index:l}=r;l===0?(r.isQuery=!e,r.index=e?c.value.length-1:m.value.length-1):r.index=l-1},G=()=>{const{isQuery:e,index:l}=r;l===(e?m.value.length-1:c.value.length-1)?(r.isQuery=!e,r.index=0):r.index=l+1},J=()=>{d.value=d.value>0?d.value-1:y.value.length-1,h.value=A.value.contents.length-1},K=()=>{d.value=d.value<y.value.length-1?d.value+1:0,h.value=0},N=()=>{h.value<A.value.contents.length-1?h.value+=1:K()},V=()=>{h.value>0?h.value-=1:J()},E=e=>e.map(l=>be(l)?l:t(l[0],l[1])),W=e=>{if(e.type==="customField"){const l=ge[e.index]||"$content",[n,R=""]=fe(l)?l[Q.value].split("$content"):l.split("$content");return e.display.map(o=>t("div",E([n,...o,R])))}return e.display.map(l=>t("div",E(l)))},k=()=>{d.value=0,h.value=0,a("updateQuery",""),a("close")},X=()=>b?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},u.value.queryHistory),m.value.map((e,l)=>t("div",{class:["search-pro-result-item",{active:r.isQuery&&r.index===l}],onClick:()=>{a("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),S(l)}})]))])):null,Z=()=>f?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,l)=>t(_,{to:e.link,class:["search-pro-result-item",{active:!r.isQuery&&r.index===l}],onClick:()=>{k()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(n=>E(n)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:n=>{n.preventDefault(),n.stopPropagation(),C(l)}})]))])):null;return ue("keydown",e=>{if(s.isFocusing){if(D.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const l=A.value.contents[h.value];p(s.queries.join(" ")),H(l),i.push(F(l)),k()}}else if(f){if(e.key==="ArrowUp")B();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:l}=r;r.isQuery?(a("updateQuery",m.value[l]),e.preventDefault()):(i.push(c.value[l].link),k())}}}}),z([d,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!D.value:!O.value}],id:"search-pro-results"},s.queries.length?v.value?t(ne,{hint:u.value.searching}):D.value?t("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:l},n)=>{const R=d.value===n;return t("li",{class:["search-pro-result-list-item",{active:R}]},[t("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),l.map((o,ee)=>{const T=R&&h.value===ee;return t(_,{to:F(o),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{p(s.queries.join(" ")),H(o),k()}},()=>[o.type==="text"?null:t(o.type==="title"?oe:o.type==="heading"?ce:de,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?t("div",{class:"content-header"},o.header):null,t("div",W(o))])])})])})):u.value.emptyResult:L?O.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{Le as default};
