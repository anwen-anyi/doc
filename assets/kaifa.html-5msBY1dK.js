import{_ as h}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as g,c as b,a as e,b as s,d as n,w as t,n as r,g as c,e as p}from"./app-lS6aMu-A.js";const m={},_=p('<h2 id="前言-什么是在线调试开发" tabindex="-1"><a class="header-anchor" href="#前言-什么是在线调试开发"><span><strong>前言：什么是在线调试开发?</strong></span></a></h2><p>对我来说就是在线修改代码查看效果，不用每次修改一处位置然后编译再查看效果。</p><h2 id="如何在线调试开发" tabindex="-1"><a class="header-anchor" href="#如何在线调试开发"><span><strong>如何在线调试开发？</strong></span></a></h2><h3 id="_1-1-调试前准备" tabindex="-1"><a class="header-anchor" href="#_1-1-调试前准备"><span><strong>1.1 调试前准备</strong></span></a></h3>',4),v={href:"https://github.com/alist-org/alist-web",target:"_blank",rel:"noopener noreferrer"},k=e("strong",null,"alist-web",-1),x=e("li",null,"下载已经可以直接使用的AList，然后启动",-1),f={href:"https://github.com/alist-org/alist-web.git",target:"_blank",rel:"noopener noreferrer"},A=e("ul",null,[e("li",null,[s("仔细看有 "),e("strong",null,[e("code",null,"--recurse-submodules")]),s(" 参数，如果不加会缺少"),e("code",null,"solid-router"),s("运行的时候会报错")])],-1),y=p(`<br><h3 id="_1-2-加载包管理器所需要的安装项目依赖" tabindex="-1"><a class="header-anchor" href="#_1-2-加载包管理器所需要的安装项目依赖"><span><strong>1.2 加载包管理器所需要的安装项目依赖</strong></span></a></h3><p>我们这里在线调试使用的开发工具是 <strong>VS Code</strong> <sup>(Visual_Studio_Code)</sup> ，如果你使用 <strong>WebStorm</strong><sup>JetBrains</sup> 也可以</p><p>进入调试工具打开前端的代码，执行如下代码</p><div class="language-pnpm line-numbers-mode" data-ext="pnpm" data-title="pnpm"><pre class="language-pnpm"><code>pnpm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后就会加载<code>package.json</code>这里面提到的我们需要的项目依赖，会在同级目录的<code>node_modules</code>暂时存储</p><p>(第一次加载可能会慢一些，如果你后续继续开发的话<code>node_modules</code>留着不要删除后续继续用)</p><h4 id="_1-2-1-后续继续开发调试" tabindex="-1"><a class="header-anchor" href="#_1-2-1-后续继续开发调试"><span><strong>1.2.1 后续继续开发调试</strong></span></a></h4><p>我们后续继续开发调试的时候，AList版本也会更新依赖也会更新，到时候我们继续使用<code>pnpm install</code>安装命令来更新就好</p><p>之要之前使用的<code>node_modules</code>文件夹没有删除后续更新基本几秒钟的时间</p><br><h3 id="_1-3-修改调试配置" tabindex="-1"><a class="header-anchor" href="#_1-3-修改调试配置"><span><strong>1.3 修改调试配置</strong></span></a></h3><ul><li><p>进入开发调试工具后我们先修改两个文件</p><ul><li><p>如果你需要在局域网其他电脑查看效果需要修改两个文件</p></li><li><p>如果你只是在本地这台电脑修改不需要要修改</p></li></ul></li><li><p>两个文件都需要修改，缺一不可</p></li></ul>`,13),L=e("p",null,[s("文件1：alist-web/"),e("code",null,"package.json")],-1),w=e("p",null,[s("我们这里在线调试用 "),e("code",null,"dev"),s(" 启动我们就修改"),e("code",null,"dev"),s("即可")],-1),T=e("h4",{id:"修改前",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#修改前"},[e("span",null,"修改前")])],-1),V=e("div",{class:"language-json line-numbers-mode","data-ext":"json","data-title":"json"},[e("pre",{class:"language-json"},[e("code",null,[s(`......
    `),e("span",{class:"token property"},'"start"'),e("span",{class:"token operator"},":"),s(),e("span",{class:"token string"},'"vite"'),e("span",{class:"token punctuation"},","),s(`
    `),e("span",{class:"token property"},'"dev"'),e("span",{class:"token operator"},":"),s(),e("span",{class:"token string"},'"vite"'),e("span",{class:"token punctuation"},","),s(`
    `),e("span",{class:"token property"},'"build"'),e("span",{class:"token operator"},":"),s(),e("span",{class:"token string"},'"vite build"'),e("span",{class:"token punctuation"},","),s(`
......
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),I=e("div",{class:"language-log line-numbers-mode","data-ext":"log","data-title":"log"},[e("pre",{class:"language-log"},[e("code",null,[e("span",{class:"token operator"},">"),s(" alist"),e("span",{class:"token operator"},"-"),s("web"),e("span",{class:"token operator"},"@"),e("span",{class:"token number"},"0.0.0"),s(" dev alist"),e("span",{class:"token operator"},"-"),s(`web
`),e("span",{class:"token operator"},">"),s(` vite


  VITE `),e("span",{class:"token number"},"v3.0.8"),s("  ready in "),e("span",{class:"token number"},"952"),s(` ms

  ➜  Local`),e("span",{class:"token operator"},":"),s("   "),e("span",{class:"token url"},"http://localhost:5173/"),s(`
  ➜  Network`),e("span",{class:"token operator"},":"),s(" use "),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},"-"),s(`host to expose
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," ")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),N=e("h4",{id:"修改后",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#修改后"},[e("span",null,"修改后")])],-1),P=e("div",{class:"language-json line-numbers-mode","data-ext":"json","data-title":"json"},[e("pre",{class:"language-json"},[e("code",null,[s(`......    
    `),e("span",{class:"token property"},'"start"'),e("span",{class:"token operator"},":"),s(),e("span",{class:"token string"},'"vite"'),e("span",{class:"token punctuation"},","),s(`
    `),e("span",{class:"token property"},'"dev"'),e("span",{class:"token operator"},":"),s(),e("span",{class:"token string"},'"vite --host 0.0.0.0"'),e("span",{class:"token punctuation"},","),s(`
    `),e("span",{class:"token property"},'"build"'),e("span",{class:"token operator"},":"),s(),e("span",{class:"token string"},'"vite build"'),e("span",{class:"token punctuation"},","),s(`
......
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=e("div",{class:"language-log line-numbers-mode","data-ext":"log","data-title":"log"},[e("pre",{class:"language-log"},[e("code",null,[e("span",{class:"token operator"},">"),s(" alist"),e("span",{class:"token operator"},"-"),s("web"),e("span",{class:"token operator"},"@"),e("span",{class:"token number"},"0.0.0"),s(" dev alist"),e("span",{class:"token operator"},"-"),s(`web
`),e("span",{class:"token operator"},">"),s(" vite "),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},"-"),s("host "),e("span",{class:"token ip-address constant"},"0.0.0.0"),s(`


  VITE `),e("span",{class:"token number"},"v3.0.8"),s("  ready in "),e("span",{class:"token number"},"1994"),s(` ms

  ➜  Local`),e("span",{class:"token operator"},":"),s("   "),e("span",{class:"token url"},"http://localhost:5173/"),s(`
  ➜  Network`),e("span",{class:"token operator"},":"),s(),e("span",{class:"token url"},"http://192.168.137.1:5173/"),s(`
  ➜  Network`),e("span",{class:"token operator"},":"),s(),e("span",{class:"token url"},"http://192.168.140.1:5173/"),s(`
  ➜  Network`),e("span",{class:"token operator"},":"),s(),e("span",{class:"token url"},"http://192.168.200.1:5173/"),s(`
  ➜  Network`),e("span",{class:"token operator"},":"),s(),e("span",{class:"token url"},"http://192.168.31.14:5173/"),s(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," ")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),C=e("p",null,"这样修改的好处就是 启动 Vite 构建工具时并指示它在本地主机的所有 IP 地址上监听请求，方便我们在其他设备也能预览",-1),E=e("p",null,[s("像开始那样如果我们不添加参数,只能使用"),e("code",null,"http://localhost:5173/"),s("然后用本机访问，无法使用局域网内或者其他设备预览查看")],-1),B=e("p",null,[s("文件2：alist-web/"),e("code",null,".env.development")],-1),Z=e("h4",{id:"修改前-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#修改前-1"},[e("span",null,[e("strong",null,"修改前")])])],-1),R=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[s("VITE_API_URL "),e("span",{class:"token operator"},"="),s(),e("span",{class:"token string"},'"http://localhost:5244/"'),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),S=e("h4",{id:"修改后-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#修改后-1"},[e("span",null,[e("strong",null,"修改后")])])],-1),z=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[s("VITE_API_URL "),e("span",{class:"token operator"},"="),s(),e("span",{class:"token string"},'"http://192.168.31.14:5244/"'),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),D=e("p",null,"当然这里修改不限于只能启动本地的，你也可以填写远程服务器的只要能访问的到就可以，例如我写我远程服务区的地址",-1),U=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[s("VITE_API_URL "),e("span",{class:"token operator"},"="),s(),e("span",{class:"token string"},'"https://alist.xxxx.com/"'),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),W=e("p",null,[s("这里如果不修改，也只能在本机访问 因为默认的是"),e("code",null,"localhost"),s("，其他机器没办法访问到AList")],-1),J=e("p",null,[s("所以需要我们改一下地址，改成内网IP"),e("sup",null,"(第二种)"),s("或者远程服务器"),e("sup",null,"(第三种)")],-1),M=e("br",null,null,-1),O=e("h2",{id:"结语",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#结语"},[e("span",null,[e("strong",null,"结语")])])],-1),q=e("p",null,[s("呃呃呃 看起来我说的很啰嗦，很繁琐，主要是照顾一下 "),e("mark",null,[e("strong",null,"真·小白")]),s(" 让他们知道如何使用，大佬基本上也不需要看直接上手多多担待啦")],-1),F=e("p",null,[s("然后可以愉快并且奔放的去"),e("strong",null,"编译或者魔改"),s("啦 🤙🤙🤙🤙🤙")],-1),G={style:{"text-align":"center"}};function H(K,Q){const d=i("ExternalLinkIcon"),u=i("Tabs"),a=i("VPCard");return g(),b("div",null,[_,e("p",null,[s("我们先下载一个编译好的AList，然后将AList前端代码("),e("a",v,[k,n(d)]),s(")下载到本地")]),e("ul",null,[x,e("li",null,[s("下载AList前端代码："),e("strong",null,[s("git clone --recurse-submodules "),e("a",f,[s("https://github.com/alist-org/alist-web.git"),n(d)])]),A])]),y,n(u,{id:"88",data:[{id:"文件1"},{id:"文件2"}]},{title0:t(({value:l,isActive:o})=>[s("文件1")]),title1:t(({value:l,isActive:o})=>[s("文件2")]),tab0:t(({value:l,isActive:o})=>[L,w,T,V,I,N,P,j,C,E]),tab1:t(({value:l,isActive:o})=>[B,Z,R,S,z,D,U,W,J]),_:1}),M,O,q,F,e("div",G,[n(a,r(c({title:"Windows版编译教程¹",desc:"------------------------------",logo:"/home.png",link:"win.md",color:"rgba(13, 109, 252, 0.80)"})),null,16),n(a,r(c({title:"Linux版-编译教程²",desc:"------------------------------",logo:"/home.png",link:"linux.md",color:"rgba(13, 109, 252, 0.80)"})),null,16),n(a,r(c({title:"自用的AList魔改教程³",desc:"------------------------------",logo:"/home.png",link:"../03-code.md",color:"rgba(13, 109, 252, 0.80)"})),null,16)])])}const $=h(m,[["render",H],["__file","kaifa.html.vue"]]),ee=JSON.parse('{"path":"/index/build/kaifa.html","title":"在线调试开发AList前端","lang":"zh-CN","frontmatter":{"title":"在线调试开发AList前端","icon":"fa-solid fa-spider-web","order":112,"author":"安稳","date":"2023-01-01T00:00:00.000Z","category":["使用指南"],"tag":["AList魔改教程","AList教程","Build","在线调试"],"sticky":true,"star":true,"headerDepth":6,"collapsible":false,"description":"前言：什么是在线调试开发? 对我来说就是在线修改代码查看效果，不用每次修改一处位置然后编译再查看效果。 如何在线调试开发？ 1.1 调试前准备 我们先下载一个编译好的AList，然后将AList前端代码(alist-web)下载到本地 下载已经可以直接使用的AList，然后启动 下载AList前端代码：git clone --recurse-submo...","head":[["meta",{"property":"og:url","content":"https://anwen-anyi/anwen-anyi.github.io/index/build/kaifa.html"}],["meta",{"property":"og:site_name","content":"安安稳稳"}],["meta",{"property":"og:title","content":"在线调试开发AList前端"}],["meta",{"property":"og:description","content":"前言：什么是在线调试开发? 对我来说就是在线修改代码查看效果，不用每次修改一处位置然后编译再查看效果。 如何在线调试开发？ 1.1 调试前准备 我们先下载一个编译好的AList，然后将AList前端代码(alist-web)下载到本地 下载已经可以直接使用的AList，然后启动 下载AList前端代码：git clone --recurse-submo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-24T14:34:15.000Z"}],["meta",{"property":"article:author","content":"安稳"}],["meta",{"property":"article:tag","content":"AList魔改教程"}],["meta",{"property":"article:tag","content":"AList教程"}],["meta",{"property":"article:tag","content":"Build"}],["meta",{"property":"article:tag","content":"在线调试"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-24T14:34:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在线调试开发AList前端\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-24T14:34:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"安稳\\"}]}"]]},"headers":[{"level":2,"title":"前言：什么是在线调试开发?","slug":"前言-什么是在线调试开发","link":"#前言-什么是在线调试开发","children":[]},{"level":2,"title":"如何在线调试开发？","slug":"如何在线调试开发","link":"#如何在线调试开发","children":[{"level":3,"title":"1.1 调试前准备","slug":"_1-1-调试前准备","link":"#_1-1-调试前准备","children":[]},{"level":3,"title":"1.2 加载包管理器所需要的安装项目依赖","slug":"_1-2-加载包管理器所需要的安装项目依赖","link":"#_1-2-加载包管理器所需要的安装项目依赖","children":[{"level":4,"title":"1.2.1 后续继续开发调试","slug":"_1-2-1-后续继续开发调试","link":"#_1-2-1-后续继续开发调试","children":[]}]},{"level":3,"title":"1.3 修改调试配置","slug":"_1-3-修改调试配置","link":"#_1-3-修改调试配置","children":[]}]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"createdTime":1684647523000,"updatedTime":1703428455000,"contributors":[{"name":"AnWen-anyi","email":"anwen_anyi@foxmail.com","commits":4}]},"readingTime":{"minutes":3.7,"words":1109},"filePathRelative":"index/build/kaifa.md","localizedDate":"2023年1月1日","autoDesc":true,"excerpt":"<h2><strong>前言：什么是在线调试开发?</strong></h2>\\n<p>对我来说就是在线修改代码查看效果，不用每次修改一处位置然后编译再查看效果。</p>\\n<h2><strong>如何在线调试开发？</strong></h2>\\n<h3><strong>1.1 调试前准备</strong></h3>\\n<p>我们先下载一个编译好的AList，然后将AList前端代码(<a href=\\"https://github.com/alist-org/alist-web\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>alist-web</strong></a>)下载到本地</p>"}');export{$ as comp,ee as data};
