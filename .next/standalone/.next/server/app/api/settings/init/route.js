"use strict";(()=>{var e={};e.id=564,e.ids=[564],e.modules={2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6113:e=>{e.exports=require("crypto")},6005:e=>{e.exports=require("node:crypto")},7017:(e,t,n)=>{n.r(t),n.d(t,{originalPathname:()=>x,patchFetch:()=>v,requestAsyncStorage:()=>l,routeModule:()=>c,serverHooks:()=>m,staticGenerationAsyncStorage:()=>g});var r={};n.r(r),n.d(r,{POST:()=>d});var s=n(6360),i=n(445),o=n(475),a=n(7202),p=n(8641),u=n(4374);let d=async e=>{let{userId:t}=(0,a.I)();return t?(await fetch(`${p.O.APPLICATION_SERVER_URL}${u.bl}${u.Gn}${u.T7}/init/${t}`,{method:"POST"})).ok?new Response("Settings Creation Successful",{status:200}):new Response("Settings Creation failed",{status:500}):(console.error("Unauthorized"),new Response("Unauthorized",{status:401}))},c=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/settings/init/route",pathname:"/api/settings/init",filename:"route",bundlePath:"app/api/settings/init/route"},resolvedPagePath:"/Users/henryschwerdtner/IdeaProjects/pym-frontend/src/app/api/settings/init/route.tsx",nextConfigOutput:"standalone",userland:r}),{requestAsyncStorage:l,staticGenerationAsyncStorage:g,serverHooks:m}=c,x="/api/settings/init/route";function v(){return(0,o.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:g})}},4374:(e,t,n)=>{n.d(t,{Cl:()=>i,Gn:()=>s,SK:()=>o,T7:()=>a,bl:()=>r,rr:()=>p});let r="/api",s="/v1",i="/menus",o="/discounts",a="/settings",p="/lists"},8641:(e,t,n)=>{n.d(t,{O:()=>i});var r=n(5144),s=n(7908);let i=(0,r.D)({server:{NODE_ENV:s.z.enum(["development","test","production"]).default("development"),APPLICATION_SERVER_URL:s.z.string().default("http://server:3000")},client:{},runtimeEnv:{NODE_ENV:"production",APPLICATION_SERVER_URL:process.env.APPLICATION_SERVER_URL},skipValidation:!!process.env.SKIP_ENV_VALIDATION,emptyStringAsUndefined:!0})}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[809,346],()=>n(7017));module.exports=r})();