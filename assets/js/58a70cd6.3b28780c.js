"use strict";(self.webpackChunkdocker_compose_hub=self.webpackChunkdocker_compose_hub||[]).push([[9798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||c;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<c;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6415:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const c={title:"FRP \u5185\u7f51\u7a7f\u900f",description:"FRP \u5185\u7f51\u7a7f\u900f"},a=void 0,l={unversionedId:"tool/frp/README",id:"tool/frp/README",title:"FRP \u5185\u7f51\u7a7f\u900f",description:"FRP \u5185\u7f51\u7a7f\u900f",source:"@site/docs/tool/frp/README.md",sourceDirName:"tool/frp",slug:"/tool/frp/",permalink:"/docs/tool/frp/",draft:!1,editUrl:"https://github.com/MoshiCoCo/docker-compose-hub/blob/docusaurus/docs/tool/frp/README.md",tags:[],version:"current",frontMatter:{title:"FRP \u5185\u7f51\u7a7f\u900f",description:"FRP \u5185\u7f51\u7a7f\u900f"},sidebar:"tutorialSidebar",previous:{title:"neilpang/acme.sh",permalink:"/docs/tool/acme-sh/"},next:{title:"netdata/netdata",permalink:"/docs/tool/netdata/"}},i={},p=[{value:"\u955c\u50cf\u540d",id:"\u955c\u50cf\u540d",level:2},{value:"\u955c\u50cf\u7528\u9014",id:"\u955c\u50cf\u7528\u9014",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u4f7f\u7528docker-compose",id:"\u4f7f\u7528docker-compose",level:3},{value:"\u4f7f\u7528docker run",id:"\u4f7f\u7528docker-run",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u955c\u50cf\u540d"},"\u955c\u50cf\u540d"),(0,o.kt)("p",null,"FRP \u5185\u7f51\u7a7f\u900f"),(0,o.kt)("h2",{id:"\u955c\u50cf\u7528\u9014"},"\u955c\u50cf\u7528\u9014"),(0,o.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("h3",{id:"\u4f7f\u7528docker-compose"},"\u4f7f\u7528docker-compose"),(0,o.kt)("p",null,"\u542f\u52a8\u670d\u52a1\u7aef\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose -f docker-compose-server.yml up -d")),(0,o.kt)("p",null,"\u542f\u52a8\u5ba2\u6237\u7aef\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose -f docker-compose-client.yml up -d")),(0,o.kt)("h3",{id:"\u4f7f\u7528docker-run"},"\u4f7f\u7528docker run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u670d\u52a1\u7aef\n\ndocker run -dit \\\n--name frps \\\n--restart=always \\\n--network host \\\n-v /etc/localtime:/etc/localtime:ro \\\n-v $PWD/frps.ini:/etc/frp/frps.ini \\\nsnowdreamtech/frps\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5ba2\u6237\u7aef\ndocker run -dit \\\n--name frpc \\\n--restart=always \\\n--network host \\\n-v /etc/localtime:/etc/localtime:ro \\\n-v $PWD/frpc.ini:/etc/frp/frpc.ini \\\nsnowdreamtech/frpc\n")))}u.isMDXComponent=!0}}]);