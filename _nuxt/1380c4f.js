(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{107:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));n(140);function r(t){return Object.values(t)}function o(t){return null!=t}},119:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(54),o={dashboard:{title:"dashboard.title",to:"/",icon:r.h},assignments:{title:"assignments.title",to:"/assignments",icon:r.p},users:{title:"users.title",to:"/users",icon:r.b},settings:{title:"settings.title",to:"/settings",icon:r.e},login:{title:"login.title",to:"/login"}}},221:function(t,e,n){"use strict";n(38),n(19);e.a=function(t){var e=t.$axios,n=t.app,r=t.localePath;e.interceptors.response.use((function(t){return t}),(function(t){var code=parseInt(t.response&&t.response.status);return[401,403].includes(code)&&n.$auth.logout().then((function(){var t;return null===(t=n.router)||void 0===t?void 0:t.push(r("/login"))})),Promise.reject(t)}))}},222:function(t,e,n){"use strict";var r=n(315),o=n(316),c=new(n.n(o).a);e.a=function(t){Object(r.a)({key:"apollo-admin",storage:{getItem:function(t){return c.get(t)},setItem:function(t,e){return c.set(t,e)},removeItem:function(t){return c.remove(t)}}})(t.store)}},223:function(t,e,n){"use strict";var r=n(14);n(69);function o(){return(o=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.$workbox;case 2:if(n=t.sent){t.next=6;break}return console.debug("Workbox couldn't be loaded."),t.abrupt("return");case 6:n.addEventListener("installed",(function(t){if(console.log(t.isUpdate),!0===t.isUpdate)return console.debug("There is an update for the PWA, reloading..."),void window.location.reload();console.debug("The PWA is on the latest version.")}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.a=function(t){return o.apply(this,arguments)}},224:function(t,e,n){"use strict";var r=n(0),o=n(317);r.default.use(o.a,{watchStorage:!0})},225:function(t,e,n){"use strict";var r=n(0),o=n(318);r.default.use(o.a)},297:function(t,e,n){var content=n(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("2af25b86",content,!0,{sourceMap:!1})},307:function(t,e,n){"use strict";n.r(e);var r=n(32),o=Object(r.b)({data:function(){return{logo:n(433)}}}),c=(n(434),n(33)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-container"},[n("nuxt-link",{staticClass:"icon-link",attrs:{to:t.localePath("/")}},[n("img",{attrs:{src:t.logo,alt:"logo"}})])],1)}),[],!1,null,null,null);e.default=component.exports},308:function(t,e,n){"use strict";n.r(e);var r=n(54),o=n(32),c=Object(o.b)({data:function(){return{mdiBrightness2:r.c,mdiBrightness5:r.d}},computed:{useDarkTheme:function(){return"dark"===this.$colorMode.value||this.$colorMode.unknown}},watch:{useDarkTheme:{handler:function(t){this.$vuetify.theme.dark=t},immediate:!0}},methods:{toggleTheme:function(){this.$colorMode.preference=this.useDarkTheme?"light":"dark"}}}),l=n(33),d=n(31),f=n.n(d),v=n(324),m=n(212),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:"","aria-label":t.$t(t.useDarkTheme?"actions.use-light-theme":"actions.use-dark-theme")},on:{click:function(e){return t.toggleTheme()}}},[n("v-icon",[t._v(t._s(t.useDarkTheme?t.mdiBrightness5:t.mdiBrightness2))])],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:v.a,VIcon:m.a})},322:function(t,e,n){"use strict";n(29),n(61);var r=n(32),o=n(86),c=Object(r.b)({data:function(){return{drawerOpen:!1}},head:function(){var path=this.$route.path;return{htmlAttrs:{lang:this.$i18n.locale},link:[{rel:"canonical",href:"https://apollo-admin.yeger.eu".concat(path.length>1?path:"","/").replace("//","/")}]}},computed:Object(o.c)("settings",["layout"])}),l=n(33),d=n(31),f=n.n(d),v=n(497),m=n(503),h=n(501),_=n(504),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{fixed:"",app:"",permanent:t.$vuetify.breakpoint.lgAndUp,clipped:!0},model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}},[n("app-sidebar")],1),t._v(" "),n("app-header",{model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}}),t._v(" "),n("v-main",[n("v-container",{staticClass:"page-container",class:{"bound-width":"compact"===t.layout,"unbound-width":"fill"===t.layout}},[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{AppSidebar:n(487).default,AppHeader:n(485).default}),f()(component,{VApp:v.a,VContainer:m.a,VMain:h.a,VNavigationDrawer:_.a})},323:function(t,e,n){"use strict";n(29),n(61);var r=n(32),o=n(86),c=Object(r.b)({head:function(){var path=this.$route.path;return{htmlAttrs:{lang:this.$i18n.locale},link:[{rel:"canonical",href:"https://apollo-admin.yeger.eu".concat(path.length>1?path:"","/").replace("//","/")}]}},computed:Object(o.c)("settings",["layout"])}),l=n(33),d=n(31),f=n.n(d),v=n(497),m=n(502),h=n(503),_=n(501),x=n(500),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{"clipped-left":!0,app:"",color:"primary",dark:"",dense:"",fixed:""}},[n("logo",{staticClass:"ml-lg-n2"}),t._v(" "),n("v-spacer"),t._v(" "),n("theme-toggle")],1),t._v(" "),n("v-main",[n("v-container",{staticClass:"page-container",class:{"bound-width":"compact"===t.layout,"unbound-width":"fill"===t.layout}},[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{Logo:n(307).default,ThemeToggle:n(308).default}),f()(component,{VApp:v.a,VAppBar:m.a,VContainer:h.a,VMain:_.a,VSpacer:x.a})},330:function(t,e,n){n(331),n(332),t.exports=n(335)},362:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("aaec6fdc",content,!0,{sourceMap:!1})},363:function(t,e,n){var r=n(25)(!1);r.push([t.i,"html{overflow-x:hidden!important;overflow-y:auto!important}:not(input):not(.selectable){-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.page-container{display:flex;justify-content:center}.unbound-width{max-width:unset!important}.bound-width{max-width:960px!important}a{text-decoration:none}a:focus,a:hover{color:var(--v-secondary-base)}.v-footer{display:flex}.v-footer>div{flex:1}.v-footer div:first-child>*{margin-right:auto}.v-footer div:last-child>*{margin-left:auto}.v-badge--inline{height:20px}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}",""]),t.exports=r},433:function(t,e,n){t.exports=n.p+"img/logo.3fc30d3.svg"},434:function(t,e,n){"use strict";n(297)},435:function(t,e,n){var r=n(25)(!1);r.push([t.i,"html{overflow-x:hidden!important;overflow-y:auto!important}:not(input):not(.selectable){-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.page-container{display:flex;justify-content:center}.unbound-width{max-width:unset!important}.bound-width{max-width:960px!important}a{text-decoration:none}a:focus,a:hover{color:var(--v-secondary-base)}.v-footer{display:flex}.v-footer>div{flex:1}.v-footer div:first-child>*{margin-right:auto}.v-footer div:last-child>*{margin-left:auto}.v-badge--inline{height:20px}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.logo-container{width:48px;height:48px;margin-right:-12px}.logo-container img{width:36px;height:36px;margin:6px}",""]),t.exports=r},458:function(t,e,n){"use strict";n.r(e),n.d(e,"actions",(function(){return r}));var r={reset:function(t){var e=t.dispatch;e("assignments/reset"),e("settings/reset"),e("users/reset")}}},459:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"actions",(function(){return l})),n.d(e,"getters",(function(){return d})),n.d(e,"mutations",(function(){return f}));n(8);var r=n(0),o=n(107),c=function(){return{}},l={reset:function(t){var e=t.commit;e("removeAll"),e("set",{})}},d={byId:function(t){return function(e){return t[e]}},assignments:function(t){return Object(o.b)(t)}},f={add:function(t,e){r.default.set(t,e.id,e)},remove:function(t,e){r.default.delete(t,e.id)},removeAll:function(t){Object(o.b)(t).forEach((function(e){return r.default.delete(t,e.id)}))},set:function(t,e){Object.assign(t,e)}}},460:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"actions",(function(){return c})),n.d(e,"mutations",(function(){return l}));var r={layout:"default"},o=function(){return r},c={reset:function(t){(0,t.commit)("setLayout",r.layout)}},l={setLayout:function(t,e){t.layout=e}}},461:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"actions",(function(){return l})),n.d(e,"getters",(function(){return d})),n.d(e,"mutations",(function(){return f}));n(8);var r=n(0),o=n(107),c=function(){return{}},l={reset:function(t){var e=t.commit;e("removeAll"),e("set",{})}},d={byId:function(t){return function(e){return t[e]}},users:function(t){return Object(o.b)(t)}},f={add:function(t,e){r.default.set(t,e.id,e)},remove:function(t,e){r.default.delete(t,e.id)},removeAll:function(t){Object(o.b)(t).forEach((function(e){return r.default.delete(t,e.id)}))},set:function(t,e){Object.assign(t,e)}}},482:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(69),n(32)),c=n(54),l=n(119),d=Object(o.b)({setup:function(){var t=Object(o.k)(),e=Object(o.h)(),n=e.$auth,d=e.localePath,f=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.logout();case 2:t.push(d("/login?logout=true"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{logout:f,mdiLogout:c.i,routes:[l.a.dashboard,l.a.assignments,l.a.users,l.a.settings]}}}),f=d,v=n(33),m=n(31),h=n.n(m),_=n(212),x=n(135),w=n(216),y=n(113),k=n(41),O=n(489),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item-group",{attrs:{color:"info"}},[n("v-subheader",[t._v(t._s(t.$t("misc.navigation")))]),t._v(" "),t._l(t.routes,(function(t,i){return n("route-list-item",{key:i,attrs:{route:t}})})),t._v(" "),n("v-list-item",{on:{click:function(e){return t.logout()}}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(t.mdiLogout))])],1),t._v(" "),n("v-list-item-title",[t._v("\n      "+t._s(t.$t("actions.logout"))+"\n    ")])],1)],2)}),[],!1,null,null,null);e.default=component.exports;h()(component,{RouteListItem:n(483).default}),h()(component,{VIcon:_.a,VListItem:x.a,VListItemGroup:w.a,VListItemIcon:y.a,VListItemTitle:k.b,VSubheader:O.a})},483:function(t,e,n){"use strict";n.r(e);var r=n(32),o=Object(r.b)({props:{route:{type:Object,required:!0}}}),c=n(33),l=n(31),d=n.n(l),f=n(212),v=n(135),m=n(113),h=n(41),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",{attrs:{to:t.localePath(t.route.to),exact:""}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(t.route.icon)}})],1),t._v(" "),n("v-list-item-title",[t._v("\n    "+t._s(t.$tc(t.route.navTitle||t.route.title,2))+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a,VListItem:v.a,VListItemIcon:m.a,VListItemTitle:h.b})},484:function(t,e,n){"use strict";n.r(e);var r=n(54),o=n(32),c=Object(o.b)({data:function(){return{mdiGithub:r.g,mdiOpenInNew:r.l}}}),l=n(33),d=n(31),f=n.n(d),v=n(212),m=n(135),h=n(41),_=n(216),x=n(113),w=n(489),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item-group",{attrs:{color:"info"}},[n("v-subheader",[t._v(t._s(t.$t("misc.resources")))]),t._v(" "),n("v-list-item",{staticClass:"text--primary",attrs:{rel:"noopener",href:"https://github.com/DerYeger/apollo-admin",target:"_blank","input-value":"false"}},[n("v-list-item-icon",[n("v-icon",{staticClass:"text--secondary"},[t._v(t._s(t.mdiGithub))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n        GitHub Repository\n        "),n("v-icon",{staticClass:"text--secondary",attrs:{small:""}},[t._v(t._s(t.mdiOpenInNew))])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VIcon:v.a,VListItem:m.a,VListItemContent:h.a,VListItemGroup:_.a,VListItemIcon:x.a,VListItemTitle:h.b,VSubheader:w.a})},485:function(t,e,n){"use strict";n.r(e);var r=n(54),o=n(32),c=Object(o.b)({props:{value:{type:Boolean,required:!0}},data:function(){return{mdiMenu:r.j}}}),l=n(33),d=n(31),f=n.n(d),v=n(502),m=n(499),h=n(212),_=n(500),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{"clipped-left":!0,app:"",color:"primary",dark:"",dense:"",fixed:""}},[n("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndDown,expression:"$vuetify.breakpoint.mdAndDown"}],staticClass:"ml-n4",attrs:{"aria-label":t.$t(t.value?"actions.close-menu":"actions.open-menu")},on:{click:function(e){return t.$emit("input",!t.value)}}},[n("v-icon",[t._v(t._s(t.mdiMenu))])],1),t._v(" "),n("logo",{staticClass:"ml-lg-n2"}),t._v(" "),n("v-spacer"),t._v(" "),n("language-menu"),t._v(" "),n("theme-toggle")],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{Logo:n(307).default,LanguageMenu:n(486).default,ThemeToggle:n(308).default}),f()(component,{VAppBar:v.a,VAppBarNavIcon:m.a,VIcon:h.a,VSpacer:_.a})},486:function(t,e,n){"use strict";n.r(e);n(59);var r=n(32),o=n(54),c=Object(r.b)({data:function(){var t=this;return{locales:this.$i18n.availableLocales.map((function(e){return{code:e,name:t.$t("locales.".concat(e))}})),mdiTranslate:o.q}}}),l=n(33),d=n(31),f=n.n(d),v=n(324),m=n(212),h=n(213),_=n(135),x=n(41),w=n(491),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"","aria-label":t.$t("actions.change-language")}},"v-btn",o,!1),r),[n("v-icon",[t._v(t._s(t.mdiTranslate))])],1)]}}])},[t._v(" "),n("v-list",t._l(t.locales,(function(e){return n("v-list-item",{key:e.code,attrs:{to:t.switchLocalePath(e.code)}},[n("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:v.a,VIcon:m.a,VList:h.a,VListItem:_.a,VListItemTitle:x.b,VMenu:w.a})},487:function(t,e,n){"use strict";n.r(e);var r=n(33),o=n(31),c=n.n(o),l=n(213),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{dense:"",nav:""}},[n("app-navigation"),t._v(" "),n("resources")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{AppNavigation:n(482).default,Resources:n(484).default}),c()(component,{VList:l.a})},94:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=n(33),c=n(31),l=n.n(c),d=n(497),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v(t._s(t.$t("dashboard.title")))])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a})}},[[330,15,5,16]]]);