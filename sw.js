if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const t=e=>n(e,d),c={module:{uri:d},exports:o,require:t};i[d]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-4O3uvt4C.js",revision:null},{url:"assets/index-Cz6Hyc1V.css",revision:null},{url:"index.html",revision:"c44b23736a3544953f3bd5acfeb42c08"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"963b423bef4ef338b13886f02ffd88e2"},{url:"maskable-icon-512x512.png",revision:"6262fe56340a0ee66e37c8b17a32a6d3"},{url:"pwa-192x192.png",revision:"6d31969ca01974afcd5d46d10842a370"},{url:"pwa-512x512.png",revision:"f2e0cffeb026ef34784ee2809fa8d827"},{url:"pwa-64x64.png",revision:"36f8b2466ed06fa7dd9dd2171c6c5d8a"},{url:"manifest.webmanifest",revision:"471463edd06f2a291c8a19ebbdda8f1c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
