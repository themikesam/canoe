!function(){"use strict";function t(t,e,n,i){var o=g++;p[o]=!0;var r=performance.now(),a=function(u){void 0===u&&(u=performance.now());var c=u-r;if(!p[o]||c>=e)return t(1),delete p[o],void(i&&i());t(n(c/e)),v(a)};return v(a),o}function e(t){!0===p[t]&&(p[t]=!1)}function n(t){return function(){if(O)return O;var t=h+"/index.json";return O=f.fetch(t).then(function(t){return t.json()}).then(function(t){for(var e=Object.create(null),n=0,i=t;n<i.length;n++){var o=i[n];e[o.uri]=o}return{pageMap:e,index:b(function(){var e=this;this.field("title",{boost:10}),this.field("tags",{boost:5}),this.field("content"),this.ref("uri"),t.forEach(function(t){return e.add(t)})})}}).catch(function(t){console&&console.log("Error while getting lunr index file: ",t)})}().then(function(e){return e.index.search(t).map(function(t){return e.pageMap[t.ref]})})}function i(t,e,i){t.value="";var o=function(t){e.textContent=t||"暂无搜索结果",i.innerHTML=""},r=function(){var e=(""+t.value).trim();e.length<2?o():(o("搜索中..."),n(e).then(function(t){return function(t){if(t&&t.length){Array.isArray(t)||(t=[t]);var e=t.reduce(function(t,e){return t+'<li><a href="'+h+e.uri+'">'+e.oriTitle+"</a></li>"},"");o("搜到了"+t.length+"项结果"),i.innerHTML=e}else o()}(t)}).catch(function(){return o("搜索失败, 请检查网络")}))};t.addEventListener("keyup",function(t){t.preventDefault(),t.stopPropagation(),r()})}function o(){L=f.offset(S),y=f.size(q,!0).height,E=f.size(W).height,C=j.map(function(t){var e=r(t);return null==e?0:Math.round(f.offset(e).top-E-20)}),w=!0}function r(t){var e=t.getAttribute("href").substr(1);return f.get('[id="'+e+'"]')}function a(n){n.preventDefault(),n.stopPropagation();var i=n.target;if("A"===i.tagName){var o=f.get("a.active",q);o&&o.classList.remove("active"),w=!1,function(n,i){if(n.href&&(n=r(n)),null!=n){var o=window.pageYOffset,a=f.offset(n).top-E-o;B&&e(B),B=t(function(t){return window.scroll(0,o+a*t)},400,m.easeInCubic,i)}}(i,function(){w=!0,i.classList.add("active")})}}function u(){if(C){var t=f.size(S).height,e=window.pageYOffset,n=e+y+E,i=L.top+t,o="fixed"===getComputedStyle(q).position;if(o&&n+E>=i){var r=-z.getBoundingClientRect().top+i-n+"px";f.css(q,"cssText","position:absolute;top: "+r)}if(!o&&n+E<i&&f.css(q,"cssText",""),w){for(var a,u=0,c=C.length-1;u<c;)C[a=u+c+1>>1]===e?u=c=a:C[a]<e?u=a:c=a-1;j.forEach(function(t,e){e===u?t.classList.add("active"):t.classList.remove("active")})}}}function c(){N&&Y&&(N.addEventListener("click",function(n){n.preventDefault(),function(){var n=!!f.get("#sidenav-overlay");n&&"1"===U.style.opacity||(U.style.opacity="0",n||document.body.appendChild(U),X&&e(X),X=t(function(t){return U.style.opacity=""+t},200,m.easeOutCubic))}(),document.body.classList.add("mobile-sidebar-active")}),U.addEventListener("click",function(n){n.stopPropagation(),document.body.classList.remove("mobile-sidebar-active"),function(){var n=f.get("#sidenav-overlay");null!==n&&("0"!==n.style.opacity?(X&&e(X),X=t(function(t){return n.style.opacity=""+(1-t)},200,m.easeOutCubic,function(){return f.remove(n)})):f.remove(n))}()}))}function s(t){void 0===t&&(t=f.get("a.active",$));var e=0,n=0;if(null!=t){var i=t.parentElement;e=i.offsetLeft,n=f.size(i).width}f.css(J,"cssText","left:"+e+"px;width:"+n+"px")}function l(){V&&K&&f.fetch(Z).then(function(t){return t.json()}).then(function(e){console&&console.log("hitokoto detail : ",e),function(e){t(function(t){return f.css(V,"opacity",""+(1-t))},300,m.easeOutCubic,e)}(function(){V.innerHTML=e.hitokoto+" --- <cite>"+e.from+"</cite>",t(function(t){return f.css(V,"opacity",""+t)},300,m.easeInCubic)})})}var d=new DOMParser,f={fetch:function(t,e){return void 0===e&&(e={}),null==e.credentials&&(e.credentials="same-origin"),fetch(t,e).then(function(t){if(t.status>=200&&t.status<300||304==t.status)return Promise.resolve(t);var e=new Error(t.statusText||""+t.status);return Promise.reject(e)})},domReady:function(t){document.addEventListener("DOMContentLoaded",t)},parseHtml:function(t){return d.parseFromString(t,"text/html").body.firstElementChild},get:function(t,e){return void 0===e&&(e=document),null==e?null:e.querySelector(t)},getAll:function(t,e){return void 0===e&&(e=document),null==e?[]:e.querySelectorAll(t)},remove:function(t){var e=t.parentElement;e&&e.removeChild(t)},css:function(t,e,n){if(null==n)return getComputedStyle(t)[e];t.style[e]=n},offset:function(t){var e=t.getBoundingClientRect(),n=document.documentElement;return{top:e.top+window.pageYOffset-(n.clientTop||0),left:e.left+window.pageXOffset-(n.clientLeft||0)}},size:function(t,e){void 0===e&&(e=!1);var n,i,o=t.getBoundingClientRect(),r=window.getComputedStyle(t);return e?(n=o.width,i=o.height):(n=o.width-(parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth)),i=o.height-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth))),{width:n,height:i}}},v=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},g=0,p={},m={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},h=window.baseURL,b=window.lunr;b.trimmer=function(t){return function(t){return/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(t)}(t.str)?t:(t.str=t.str.replace(/^\W+/,"").replace(/\W+$/,""),t)};var w,y,L,E,C,O=null,A=f.get(".navbar"),x=f.get(".nav-form",A),F=f.get("input",x),k=f.get(".search-result"),T=f.get("label",k),R=f.get("ul",k),I=f.get(".search-btn",A),H=f.get(".mobile-search"),M=f.get(".mobile-search-close"),P=f.get("input",H),Q=f.get("label",H),D=f.get("ul",H),z=f.get(".toc-panel"),q=f.get("nav",z),S=(f.get("footer.page-footer"),f.get(".main-panel .container")),W=f.get("nav.navbar"),j=[].slice.call(f.getAll("li a",q)),B=null,N=f.get(".navbar .button-collapse"),Y=f.get("#"+N.getAttribute("data-activates")),U=f.parseHtml('<div id="sidenav-overlay" style="opacity:0"></div>'),X=null,$=f.get(".navbar ul.tabs"),G=f.getAll("li.tab",$),J=f.parseHtml('<li class="indicator"></li>'),K=window.getHitokoto,V=f.get(".splash p.desc"),Z="https://sslapi.hitokoto.cn",_=window.baseURL;f.domReady(function(){$&&G&&G.length&&($.appendChild(J),s(),$.addEventListener("mouseover",function(t){t.stopPropagation();var e=t.target;"A"===e.tagName&&s(e)}),$.addEventListener("mouseout",function(t){t.stopPropagation(),"A"===t.target.tagName&&s()})),null!==q&&(q.addEventListener("click",a),window.addEventListener("scroll",u),["resize","load"].map(function(t){window.addEventListener(t,function(){o(),u()})}),o(),u()),function(){if(I&&x&&H){var n=!1;x.addEventListener("click",function(t){n||(n=!0,A.classList.add("search-active"))}),x.addEventListener("submit",function(t){t.preventDefault(),t.stopPropagation()}),document.addEventListener("click",function(t){n&&x!==t.target&&!x.contains(t.target)&&(n=!1,A.classList.remove("search-active"))}),i(F,T,R);var o=null;I.addEventListener("click",function(){f.css(H,"opacity","0"),document.body.classList.add("mobile-search-active"),P.focus(),o&&e(o),o=t(function(t){return f.css(H,"opacity",""+t)},200,m.easeOutCubic)}),M.addEventListener("click",function(){o&&e(o),o=t(function(t){return f.css(H,"opacity",""+(1-t))},200,m.easeOutCubic,function(){return document.body.classList.remove("mobile-search-active")})}),i(P,Q,D)}}(),function(){var t=f.get(".navbar .term-btn"),e=f.get(".taxonomy"),n=f.get(".taxonomy-panel",e);t&&n&&(t.addEventListener("click",function(t){t.preventDefault(),e.classList.toggle("active")}),document.addEventListener("click",function(i){n===i.target||n.contains(i.target)||t===i.target||t.contains(i.target)||e.classList.remove("active")}))}(),c(),function(){var t=_+"/svg/icon.svg",e=f.get("body"),n=f.parseHtml('<div style="display:none"></div>');e.appendChild(n),f.fetch(t).then(function(t){return t.text()}).then(function(t){return n.innerHTML=t})}(),function(){for(var t=f.getAll(".reveal"),e=0;e<t.length;e++)t[e].classList.add("enter")}(),l()})}();
