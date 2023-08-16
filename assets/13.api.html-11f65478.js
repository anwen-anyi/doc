import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as l,c as p,a as i,e as a,b as t,d as e,f as o}from"./app-e61ceee0.js";const c="/img/api/01-token.png",h="/img/api/02-list1.png",u="/img/api/02-list2.png",m={},g=t("h2",{id:"前言",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),e(" 前言")],-1),k=t("p",null,"大概的流程就是下面流程图这样的一个流程，大佬不用看都懂，这个是给小白看的，拉到下面我们说一下怎么个流程吧",-1),f=o("<blockquote><ul><li>POST token获取 /api/auth/login</li><li>POST 获取文件列表 /api/fs/list</li><li>POST 新建文件夹 /api/fs/mkdir</li><li>POST 重命名文件/目录 /api/fs/rename</li><li>POST 删除文件/目录 /api/fs/remove</li><li>PUT 表单上传文件 /api/fs/form</li><li>POST 获取下载信息 /api/fs/get</li><li>GET 系统设置 /api/admin/setting/list</li><li>GET 账户列表 /api/admin/user/list</li><li>GET 存储列表 /api/admin/storage/list</li><li>POST 启用存储 /api/admin/storage/enable</li><li>POST 禁用存储 /api/admin/storage/disable</li><li>POST 新建存储 /api/admin/storage/create</li><li>GET 查询指定存储信息 /api/admin/storage/get</li><li>GET 查询所有驱动配置模板列表 /api/admin/driver/list</li><li>POST 删除指定存储 /api/admin/storage/delete</li></ul></blockquote>",1),b={href:"https://github.com/alist-org/alist/discussions/2501",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/Kuingsmile",target:"_blank",rel:"noopener noreferrer"},y=t("p",null,"在教程之前先说一下怎么都是 /api/xxx/xxx ？这怎么使用？",-1),x=t("ul",null,[t("li",null,"前面是通用链接，这个链接就是我们自己的AList网站链接，可以是域名可以是IP，可以是http也可以是HTTPS，也能带端口号"),t("li",null,[e("例如我本地的就是：http://192.168.31.103:5244，到时候我们直接请求"),t("code",null,"http://192.168.31.103:5244/api/auth/login"),e(" 然后填写相关参数就能请求到")])],-1),T={href:"https://www.postman.com/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://apifox.com/",target:"_blank",rel:"noopener noreferrer"},P=o(`<h2 id="_1-token获取" tabindex="-1"><a class="header-anchor" href="#_1-token获取" aria-hidden="true">#</a> <strong>1.Token获取</strong></h2><p>POST token获取 /api/auth/login</p><h3 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数</h3><table><thead><tr><th>名称</th><th>位置</th><th>类型</th><th>必选</th><th>说明</th></tr></thead><tbody><tr><td>Password</td><td>query</td><td>string</td><td>是</td><td>密码</td></tr><tr><td>Username</td><td>query</td><td>string</td><td>是</td><td>用户名</td></tr></tbody></table><p>第一项我们先获取以下自己的token，因为后续所有的请求都需要携带我们的token才能使用</p><p>看到提供的请求参数有名称，位置，类型，是否必选，说明，这个就两个选项，这个API是需要我们帐号密码获取token，也没别的很简单，下面举个例子</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjkxNjYyNzU0LCJuYmYiOjE2OTE0ODk5NTQsImlhdCI6MTY5MTQ4OTk1NH0.pk6Z5r95_Brs0XSx0kZhoZYSg8PF0m9FnWN4H_oSDCQ&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="填写示例" tabindex="-1"><a class="header-anchor" href="#填写示例" aria-hidden="true">#</a> 填写示例：</h3><p>我们在顶部输入<code>http://192.168.31.103:5244/api/auth/login</code>后，在下面的params(query)里面填写我们的请求参数</p><p>在key填写请求参数<code>Password</code>和<code>Username</code>，在对应的Value里面填写我们的值。然后点击上面的Send(发送) 没问题的话就会返回和我一样的例子</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><code>&quot;message&quot;: &quot;failed find user: record not found&quot;,</code> 是用户名错了</li><li><code>&quot;message&quot;: &quot;password is incorrect&quot;,</code>是密码错了</li></ul><p>是不是很简单哩..........下面我们去获取一下我们挂载的文件列表吧</p><h2 id="_2-获取文件列表" tabindex="-1"><a class="header-anchor" href="#_2-获取文件列表" aria-hidden="true">#</a> <strong>2.获取文件列表</strong></h2><p>POST 获取文件列表 /api/fs/list</p><h3 id="请求参数-1" tabindex="-1"><a class="header-anchor" href="#请求参数-1" aria-hidden="true">#</a> 请求参数</h3><table><thead><tr><th>名称</th><th>位置</th><th>类型</th><th>必选</th><th>说明</th></tr></thead><tbody><tr><td>Authorization</td><td>header</td><td>string</td><td>是</td><td>用户token</td></tr><tr><td>Content-Type</td><td>header</td><td>string</td><td>否</td><td>none</td></tr><tr><td>body</td><td>body</td><td>object</td><td>否</td><td>none</td></tr><tr><td>» page</td><td>body</td><td>integer</td><td>否</td><td>当前页数</td></tr><tr><td>» password</td><td>body</td><td>string</td><td>否</td><td>密码</td></tr><tr><td>» path</td><td>body</td><td>string</td><td>否</td><td>路径</td></tr><tr><td>» per_page</td><td>body</td><td>integer</td><td>否</td><td>每页文件数</td></tr><tr><td>» refresh</td><td>body</td><td>boolean</td><td>否</td><td>强制刷新</td></tr></tbody></table><p>看到请求参数里面有一个<code>Authorization</code>就是填写我们获取token的参数，我们在postman上面新建一个页面，也选择<code>post</code>请求，</p><p>我们这次请求<code>http://192.168.31.103:5244/api/fs/list</code>，这次填写的要在<code>header</code>页面内，然后 Value 就填写我们上面获取到的token就可以</p><p>还有可选参数，第二个可选参数参考填写示例第二个，第二个我选择了分页</p><ul><li>至于form-data和x-www-form-urlencoded的区别，一个是以表单提交一个以URL编码形式提交数据，我们用第二个方式</li></ul><h3 id="填写示例-1" tabindex="-1"><a class="header-anchor" href="#填写示例-1" aria-hidden="true">#</a> 填写示例</h3><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',24);function O(q,v){const s=d("Mermaid"),n=d("ExternalLinkIcon");return l(),p("div",null,[i(" 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 "),i(" more "),g,k,a(s,{id:"mermaid-8",code:"eJx9lV1P2lAYx+/9FCRLdkewBRFJNFmyZVmyZGYvVydelL5gY4Glre7Gi2lixBfUxalT2ISNGXYx2OI22Erly/ScwrfYOT0t0lJMoDnn/J/z4+nz/M8hGo1O6bKuiOkI3DTs4wrsHqLjkmVWHiw+QSfndmMP/d7AT1i+mSLBklJ4wy9zqh55+nwqEuEVTtMeihIdMBFJVpT0PYlPjWmsq01L02Na3NOS0piWcDUhRTQOWGbPft9Ap9uo9mUJr2RA/6AND09hsY1Of1hG3d7Zd9YZYHVKVvdigsyCiRoPaAnscgduXXOvZWeRAaiyMxbKAnRWDa4KDFh89uKlM2TB40d0FAeLr+iISafTtGDR6ILIAL2wIuZpLkujksQA/OsxblVfjimFrJy/VR0M2c26748rYhl/YPGsX2v4IawDkbSYImt6CCEOcPLQ+OcS6n/92+Pe9tyKIKsh+xNgsF2C70x4VKKImF1uQvPEj0l4GFXMczkxhDMDYLE6OK/fAZm5heQKawFI3JvFCS0JcCFg6cTq7FrdKmUO40mElPRgUkHNEcnVhgnNuqW1Ont907R6NbTR8ucz6yGyYqCyrDdjCSkF7GvDNi77zRvbbA4jiSalaI+FnJyPaaKuy/msv1OswyOYOdD/dYWK7UCXHczcCGZVE9VJDGYawO8f4GYjDILFkWT0gsplxRAQtS0D4FELn0WKCxjXda4PhBufUcI6z7DAvtqYhKL+9aMEWZvE8uwcyqJm9rN4VeT0AIqWKgHQ5dd+6zPa34bNCwoM2ICWjZrbjx21xEj5Zzzmzlt8nwy+/YS7jcFWCdsCNWroYy+0LdT3lC+o8lpoe+nrJ71TNJJzoAjU+L5sBdxmMVAEDgdnyJfkwJM7k0yIkiGcdVj+BA8Mu7JHL+N1jtyH8/PzCzyJ4ckmkhdPtmecGxT/gSwITOQ+rgV5kJNGPv8B0F6pww=="}),f,t("p",null,[e("上述API来自："),t("strong",null,[t("a",b,[e("https://github.com/alist-org/alist/discussions/2501"),a(n)])]),e(" | "),t("a",_,[e("@Kuingsmile"),a(n)]),e("大佬整理发布")]),y,x,t("p",null,[e("我这里使用的请求软件是"),t("a",T,[e("postman"),a(n)]),e("，因为老早之前apifox还没出的时候就在用postman了...")]),t("ul",null,[t("li",null,[e("或者使用"),t("a",I,[e("Apifox"),a(n)])])]),P])}const N=r(m,[["render",O],["__file","13.api.html.vue"]]);export{N as default};
