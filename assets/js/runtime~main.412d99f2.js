(()=>{"use strict";var e,a,c,t,r,f={},d={};function b(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return f[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=f,b.c=d,e=[],b.O=(a,c,t,r)=>{if(!c){var f=1/0;for(i=0;i<e.length;i++){c=e[i][0],t=e[i][1],r=e[i][2];for(var d=!0,o=0;o<c.length;o++)(!1&r||f>=r)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(d=!1,r<f&&(f=r));if(d){e.splice(i--,1);var n=t();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[c,t,r]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var f={};a=a||[null,c({}),c([]),c(c)];for(var d=2&t&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,b.d(r,f),r},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({165:"2bddce6d",867:"33fc5bb8",914:"b8e1a990",1235:"a7456010",1724:"dff1c289",1892:"740b7cea",1903:"acecf23e",1953:"1e4232ab",1972:"73664a40",1974:"5c868d36",2349:"cde5f7b2",2711:"9e4087bc",2748:"822bd8ab",3098:"533a09ca",3249:"ccc49370",3294:"5cb59e75",3637:"f4f34a3a",3694:"8717b14a",3976:"0e384e19",4134:"393be207",4212:"621db11d",4583:"1df93b7f",4596:"d3cc2794",4736:"e44a2883",4813:"6875c492",5202:"c4e29143",5557:"d9f32620",5621:"36a57ceb",5742:"aba21aa0",6061:"1f391b9e",6453:"a0c63c97",6969:"14eb3368",7013:"83dbfdab",7098:"a7bd4aaa",7472:"814f3328",7643:"a6aa9e1f",7843:"c1fe89df",8209:"01a85c17",8401:"17896441",8609:"925b3f96",8737:"7661071f",8863:"f55d3e7a",9017:"c6bdcea0",9048:"a94703ab",9064:"bf778dbc",9262:"18c41134",9325:"59362658",9328:"e273c56f",9647:"5e95c892",9858:"36994c47"}[e]||e)+"."+{165:"d611c12d",867:"d2d8d770",914:"c02531da",1235:"3991b78f",1538:"c98f838f",1724:"529a9045",1892:"c2033269",1903:"33888c4f",1953:"0ebf94a7",1972:"c858a26b",1974:"5dd1c168",2237:"ada67f30",2349:"909ae966",2711:"74c2491e",2748:"1f7159e4",3098:"51a6846b",3249:"4a537717",3294:"0d335ec2",3347:"8550fce6",3637:"c908401f",3694:"eacd88ac",3976:"ba40d368",4134:"7098f806",4212:"c6bddd2a",4583:"81661504",4596:"61f77985",4736:"76216d9f",4813:"0b034524",5202:"b99d1414",5557:"a8e679ce",5621:"234948ba",5742:"56e75c2e",6061:"70d41181",6453:"1bcf6849",6969:"08ac14b5",7013:"791cba5f",7098:"ec4fc88c",7472:"0e9801b4",7643:"ca825850",7843:"51949e53",8209:"8b675874",8401:"7afad9dc",8609:"12b2740d",8737:"0a69cd19",8863:"705c0f9b",9017:"483aee0c",9048:"c8e10b46",9064:"e62e0c5f",9262:"d673cdb5",9325:"4872c130",9328:"016d48c6",9647:"2a423898",9858:"5549bb31"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t={},r="docu-origin:",b.l=(e,a,c,f)=>{if(t[e])t[e].push(a);else{var d,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+c){d=u;break}}d||(o=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+c),d.src=e),t[e]=[a];var l=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((e=>e(c))),a)return a(c)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),o&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/your-cool-site/",b.gca=function(e){return e={17896441:"8401",59362658:"9325","2bddce6d":"165","33fc5bb8":"867",b8e1a990:"914",a7456010:"1235",dff1c289:"1724","740b7cea":"1892",acecf23e:"1903","1e4232ab":"1953","73664a40":"1972","5c868d36":"1974",cde5f7b2:"2349","9e4087bc":"2711","822bd8ab":"2748","533a09ca":"3098",ccc49370:"3249","5cb59e75":"3294",f4f34a3a:"3637","8717b14a":"3694","0e384e19":"3976","393be207":"4134","621db11d":"4212","1df93b7f":"4583",d3cc2794:"4596",e44a2883:"4736","6875c492":"4813",c4e29143:"5202",d9f32620:"5557","36a57ceb":"5621",aba21aa0:"5742","1f391b9e":"6061",a0c63c97:"6453","14eb3368":"6969","83dbfdab":"7013",a7bd4aaa:"7098","814f3328":"7472",a6aa9e1f:"7643",c1fe89df:"7843","01a85c17":"8209","925b3f96":"8609","7661071f":"8737",f55d3e7a:"8863",c6bdcea0:"9017",a94703ab:"9048",bf778dbc:"9064","18c41134":"9262",e273c56f:"9328","5e95c892":"9647","36994c47":"9858"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,c)=>{var t=b.o(e,a)?e[a]:void 0;if(0!==t)if(t)c.push(t[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((c,r)=>t=e[a]=[c,r]));c.push(t[2]=r);var f=b.p+b.u(a),d=new Error;b.l(f,(c=>{if(b.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var r=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+f+")",d.name="ChunkLoadError",d.type=r,d.request=f,t[1](d)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var t,r,f=c[0],d=c[1],o=c[2],n=0;if(f.some((a=>0!==e[a]))){for(t in d)b.o(d,t)&&(b.m[t]=d[t]);if(o)var i=o(b)}for(a&&a(c);n<f.length;n++)r=f[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},c=self.webpackChunkdocu_origin=self.webpackChunkdocu_origin||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();