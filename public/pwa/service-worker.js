if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const r=e=>a(e,n),f={module:{uri:n},exports:i,require:r};s[n]=Promise.all(t.map((e=>f[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-0ea65fa9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ZHKAFcxpQtf_afS5zqwQE/_buildManifest.js",revision:"e50bd43c906648e2a1ccbe057d6ceadb"},{url:"/_next/static/ZHKAFcxpQtf_afS5zqwQE/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/11-2bec2f18e481907f.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/250-b74497582552d3f0.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/322-641b5a8a18ceac4d.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/378-6577f0a3d5287c7a.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/387-2549c928e102b51e.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/576-3685aa4015c05dfb.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/624-bf303bc78db332b8.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/718-74d4dbaff640d5d6.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/749-74aab03f5f5a5623.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/87-0b16f859257e77d7.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/879-433dc5a68e1701ea.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/890-e986c15b0e0897b2.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/983-6ecc31e9892dd29d.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/998-567bb5eb01fce065.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/(category)/%5Bslug%5D/%5BsubcategorySlug%5D/page-305a6d464f1fcca9.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/(category)/%5Bslug%5D/page-4d7428625e5f2afd.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/(category)/shop/page-8d4107151105b382.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/(privacy)/privacy/page-3f946d9f77a1342c.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/(privacy)/terms-conditions/page-00c4335f3b1d7ca8.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/(users)/account/page-00a156e22c795c89.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/(users)/invoice/page-e0d3ae3d9f54ed9e.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/(users)/my-orders/page-5ad7f4613a70de01.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/about/page-47db060b60b22efb.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/blogs/page-bd9176696a469d44.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/cart/page-0935ac73d21a5c67.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/contact/page-78d0bb645688215f.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/d/%5Bslug%5D/page-dc4e6c49cee1b29a.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/layout-eb3a29405fe0f215.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/page-a66064841c5d894b.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/(routes)/popular/page-1f44122a8ea639bf.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/layout-3096335a077fb4ef.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/app/not-found-646a705de70a3921.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/fd9d1056-a47ab120dbeb6bb8.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/main-8bf2bd228b916098.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/main-app-cb2b8606ebd4cbe1.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/pages/_app-8e650e1c50ef0819.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/pages/_error-0ffac66cb3fae446.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6a8effc6ff013df6.js",revision:"ZHKAFcxpQtf_afS5zqwQE"},{url:"/_next/static/css/46d2f1b70d0e73f2.css",revision:"46d2f1b70d0e73f2"},{url:"/_next/static/css/8b887345f19c0c9f.css",revision:"8b887345f19c0c9f"},{url:"/_next/static/media/1fec31e74ba38015-s.woff2",revision:"75eaf4e1acc5415668028fe1559ed4fc"},{url:"/_next/static/media/29a6e977ce941007-s.p.woff2",revision:"c3fde93c119a0ecc35cf245546106c4c"},{url:"/_next/static/media/49a8276303391d8d-s.p.woff2",revision:"60e095b7646fd7c31ad69a80ddf9d0b3"},{url:"/_next/static/media/6b6d7d81fdf0fdba-s.p.woff2",revision:"a51ecd36f076a57448707fabc030fdb2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));