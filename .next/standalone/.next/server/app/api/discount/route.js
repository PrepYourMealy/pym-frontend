"use strict";(()=>{var e={};e.id=185,e.ids=[185],e.modules={2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6113:e=>{e.exports=require("crypto")},6005:e=>{e.exports=require("node:crypto")},9242:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>v,patchFetch:()=>R,requestAsyncStorage:()=>l,routeModule:()=>c,serverHooks:()=>x,staticGenerationAsyncStorage:()=>m});var n={};r.r(n),r.d(n,{GET:()=>d});var s=r(6360),o=r(445),i=r(475),a=r(7202),u=r(8641),p=r(4374);let d=async e=>{let{userId:t}=(0,a.I)();if(!t)return console.error("Unauthorized"),new Response("Unauthorized",{status:401});let r=await fetch(`${u.O.APPLICATION_SERVER_URL}${p.bl}${p.Gn}${p.SK}`),n=await r.json();return r.ok?new Response(JSON.stringify(n),{status:200}):new Response("Menu creation failed",{status:500})},c=new s.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/discount/route",pathname:"/api/discount",filename:"route",bundlePath:"app/api/discount/route"},resolvedPagePath:"/Users/henryschwerdtner/IdeaProjects/pym-frontend/src/app/api/discount/route.ts",nextConfigOutput:"standalone",userland:n}),{requestAsyncStorage:l,staticGenerationAsyncStorage:m,serverHooks:x}=c,v="/api/discount/route";function R(){return(0,i.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:m})}},4374:(e,t,r)=>{r.d(t,{Cl:()=>o,Gn:()=>s,SK:()=>i,T7:()=>a,bl:()=>n,rr:()=>u});let n="/api",s="/v1",o="/menus",i="/discounts",a="/settings",u="/lists"},8641:(e,t,r)=>{r.d(t,{O:()=>o});var n=r(5144),s=r(7908);let o=(0,n.D)({server:{NODE_ENV:s.z.enum(["development","test","production"]).default("development"),APPLICATION_SERVER_URL:s.z.string().default("http://server:3000")},client:{},runtimeEnv:{NODE_ENV:"production",APPLICATION_SERVER_URL:process.env.APPLICATION_SERVER_URL},skipValidation:!!process.env.SKIP_ENV_VALIDATION,emptyStringAsUndefined:!0})}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[809,346],()=>r(9242));module.exports=n})();