(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{7471:function(e,r,t){Promise.resolve().then(t.bind(t,1033))},6126:function(e,r,t){"use strict";var n=t(1742);t.o(n,"RedirectType")&&t.d(r,{RedirectType:function(){return n.RedirectType}}),t.o(n,"redirect")&&t.d(r,{redirect:function(){return n.redirect}}),t.o(n,"useParams")&&t.d(r,{useParams:function(){return n.useParams}}),t.o(n,"usePathname")&&t.d(r,{usePathname:function(){return n.usePathname}}),t.o(n,"useRouter")&&t.d(r,{useRouter:function(){return n.useRouter}})},1033:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var n=t(7949),i=t(9902),s=t(1425),a=t(6126);let o=e=>{let{currentStep:r,stepCount:t}=e,o=async()=>{await fetch("/api/settings/init",{method:"POST"}),await fetch("api/menu",{method:"POST"}),(0,a.redirect)("/dashboard",a.RedirectType.replace)};return(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Ol,{children:(0,n.jsx)(i.ll,{children:"Willkommen Bei PrepMyMealy"})}),(0,n.jsxs)(i.aY,{children:[(0,n.jsx)("p",{className:"mb-4",children:"Bevor wir dir ein Wochenmenu zusammenstellen k\xf6nnen, ben\xf6tigen wir ein paar Informationen von dir."}),(0,n.jsxs)("p",{className:"text-sm text-gray-500",children:["Schritt ",r+1," von ",t]}),(0,n.jsx)(s.z,{onClick:o,children:"\xdcberspringe die Konfiguration und starte mit den Standarteinstellungen"}),(0,n.jsx)("p",{children:"Settings under Construction please use defaults."})]}),(0,n.jsx)(i.eW,{className:"flex justify-between"})]})};function u(){return(0,n.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100 p-4",children:(0,n.jsx)(i.Zb,{className:"w-full max-w-md",children:(0,n.jsx)(o,{currentStep:0,stepCount:0})})})}function l(){return(0,n.jsx)("div",{children:(0,n.jsx)(u,{})})}},1425:function(e,r,t){"use strict";t.d(r,{z:function(){return l}});var n=t(7949),i=t(6265),s=t(9),a=t(9e3),o=t(9290);let u=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=i.forwardRef((e,r)=>{let{className:t,variant:i,size:a,asChild:l=!1,...d}=e,c=l?s.g7:"button";return(0,n.jsx)(c,{className:(0,o.cn)(u({variant:i,size:a,className:t})),ref:r,...d})});l.displayName="Button"},9902:function(e,r,t){"use strict";t.d(r,{Ol:function(){return o},Zb:function(){return a},aY:function(){return l},eW:function(){return d},ll:function(){return u}});var n=t(7949),i=t(6265),s=t(9290);let a=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...i})});a.displayName="Card";let o=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...i})});o.displayName="CardHeader";let u=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("h3",{ref:r,className:(0,s.cn)("font-semibold leading-none tracking-tight",t),...i})});u.displayName="CardTitle",i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...i})}).displayName="CardDescription";let l=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...i})});l.displayName="CardContent";let d=i.forwardRef((e,r)=>{let{className:t,...i}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...i})});d.displayName="CardFooter"},9290:function(e,r,t){"use strict";t.d(r,{cn:function(){return s}});var n=t(6491),i=t(8487);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,i.m6)((0,n.W)(r))}},9e3:function(e,r,t){"use strict";t.d(r,{j:function(){return s}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,n,i="";if("string"==typeof r||"number"==typeof r)i+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(n=e(r[t]))&&(i&&(i+=" "),i+=n);else for(t in r)r[t]&&(i&&(i+=" "),i+=t)}return i}(e))&&(n&&(n+=" "),n+=r);return n},s=(e,r)=>t=>{var s;if((null==r?void 0:r.variants)==null)return i(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:a,defaultVariants:o}=r,u=Object.keys(a).map(e=>{let r=null==t?void 0:t[e],i=null==o?void 0:o[e];if(null===r)return null;let s=n(r)||n(i);return a[e][s]}),l=t&&Object.entries(t).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{});return i(e,u,null==r?void 0:null===(s=r.compoundVariants)||void 0===s?void 0:s.reduce((e,r)=>{let{class:t,className:n,...i}=r;return Object.entries(i).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...o,...l}[r]):({...o,...l})[r]===t})?[...e,t,n]:e},[]),null==t?void 0:t.class,null==t?void 0:t.className)}}},function(e){e.O(0,[263,47,623,744],function(){return e(e.s=7471)}),_N_E=e.O()}]);