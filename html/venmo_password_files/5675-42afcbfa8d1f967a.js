(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5675],{78566:function(e,t,n){"use strict";var i=n(930),r=n(85696),o=n(7980);t.default=function(e){var t,n=e.src,o=e.sizes,a=e.unoptimized,u=void 0!==a&&a,d=e.priority,p=void 0!==d&&d,b=e.loading,y=e.lazyRoot,v=void 0===y?null:y,w=e.lazyBoundary,A=void 0===w?"200px":w,O=e.className,S=e.quality,x=e.width,E=e.height,_=e.objectFit,I=e.objectPosition,R=e.onLoadingComplete,P=e.loader,D=void 0===P?j:P,L=e.placeholder,q=void 0===L?"empty":L,M=e.blurDataURL,C=function(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),N=c.useRef(null),W=C,B=o?"responsive":"intrinsic";"layout"in W&&(W.layout&&(B=W.layout),delete W.layout);var U="";if(function(e){return"object"===typeof e&&(h(e)||function(e){return void 0!==e.src}(e))}(n)){var H=h(n)?n.default:n;if(!H.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(H)));if(M=M||H.blurDataURL,U=H.src,(!B||"fill"!==B)&&(E=E||H.height,x=x||H.width,!H.height||!H.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(H)))}n="string"===typeof n?n:U;var F=z(x),T=z(E),V=z(S),J=!p&&("lazy"===b||"undefined"===typeof b);(n.startsWith("data:")||n.startsWith("blob:"))&&(u=!0,J=!1);g.has(n)&&(J=!1);0;var G,Q=l.useIntersection({rootRef:v,rootMargin:A,disabled:!J}),K=r(Q,2),X=K[0],Y=K[1],Z=!J||Y,$={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ee={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},te=!1,ne={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:I},ie="blur"===q?{filter:"blur(20px)",backgroundSize:_||"cover",backgroundImage:'url("'.concat(M,'")'),backgroundPosition:I||"0% 0%"}:{};if("fill"===B)$.display="block",$.position="absolute",$.top=0,$.left=0,$.bottom=0,$.right=0;else if("undefined"!==typeof F&&"undefined"!==typeof T){var re=T/F,oe=isNaN(re)?"100%":"".concat(100*re,"%");"responsive"===B?($.display="block",$.position="relative",te=!0,ee.paddingTop=oe):"intrinsic"===B?($.display="inline-block",$.position="relative",$.maxWidth="100%",te=!0,ee.maxWidth="100%",G="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(F,"%27%20height=%27").concat(T,"%27/%3e")):"fixed"===B&&($.display="inline-block",$.position="relative",$.width=F,$.height=T)}else 0;var ae={src:m,srcSet:void 0,sizes:void 0};Z&&(ae=k({src:n,unoptimized:u,layout:B,width:F,quality:V,sizes:o,loader:D}));var ce=n;0;0;var se=(i(t={},"imagesrcset",ae.srcSet),i(t,"imagesizes",ae.sizes),t),ue=c.default.useLayoutEffect,le=c.useRef(R);return c.useEffect((function(){le.current=R}),[R]),ue((function(){X(N.current)}),[X]),c.useEffect((function(){!function(e,t,n,i,r){var o=function(){var n=e.current;n&&(n.src!==m&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(g.add(t),"blur"===i&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),r.current)){var o=n.naturalWidth,a=n.naturalHeight;r.current({naturalWidth:o,naturalHeight:a})}})))};e.current&&(e.current.complete?o():e.current.onload=o)}(N,ce,0,q,le)}),[ce,B,q,Z]),c.default.createElement("span",{style:$},te?c.default.createElement("span",{style:ee},G?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:G}):null):null,c.default.createElement("img",Object.assign({},W,ae,{decoding:"async","data-nimg":B,className:O,ref:N,style:f({},ne,ie)})),J&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},W,k({src:n,unoptimized:u,layout:B,width:F,quality:V,sizes:o,loader:D}),{decoding:"async","data-nimg":B,style:ne,className:O,loading:b||"lazy"}))),p?c.default.createElement(s.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+ae.src+ae.srcSet+ae.sizes,rel:"preload",as:"image",href:ae.srcSet?void 0:ae.src},se))):null)};var a,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(67294)),s=(a=n(72717))&&a.__esModule?a:{default:a},u=n(5809),l=n(90639);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){d(e,t,n[t])}))}return e}var g=new Set,m=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var p=new Map([["default",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t).concat(S(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(S(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(S(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function h(e){return void 0!==e.default}var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||u.imageConfigDefault,y=b.deviceSizes,v=b.imageSizes,w=b.loader,A=b.path,O=(b.domains,[].concat(o(y),o(v)));function k(e){var t=e.src,n=e.unoptimized,i=e.layout,r=e.width,a=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var u=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var i,r=/(^|\s)(1?\d?\d)vw/g,a=[];i=r.exec(n);i)a.push(parseInt(i[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:O.filter((function(e){return e>=y[0]*c})),kind:"w"}}return{widths:O,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:y,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return O.find((function(t){return t>=e}))||O[O.length-1]})))),kind:"x"}}(r,i,c),l=u.widths,d=u.kind,f=l.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:l.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:l[f]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t=p.get(w);if(t)return t(f({root:A},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(w))}function S(e){return"/"===e[0]?e.slice(1):e}y.sort((function(e,t){return e-t})),O.sort((function(e,t){return e-t}))},90639:function(e,t,n){"use strict";var i=n(85696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,u=r.useRef(),l=r.useState(!1),d=i(l,2),f=d[0],g=d[1],m=r.useState(t?t.current:null),p=i(m,2),h=p[0],b=p[1],y=r.useCallback((function(e){u.current&&(u.current(),u.current=void 0),s||f||e&&e.tagName&&(u.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&g(e)}),{root:h,rootMargin:n}))}),[s,h,n,f]);return r.useEffect((function(){if(!a&&!f){var e=o.requestIdleCallback((function(){return g(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),r.useEffect((function(){t&&b(t.current)}),[t]),[y,f]};var r=n(67294),o=n(26286),a="undefined"!==typeof IntersectionObserver;var c=new Map},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},25675:function(e,t,n){e.exports=n(78566)}}]);