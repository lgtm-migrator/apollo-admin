(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7,8],{539:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(540),o=r(1),c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),v=Object(o.h)("v-card__title");n.a},540:function(t,e,r){"use strict";r(10),r(8),r(14),r(5),r(20),r(9),r(21);var n=r(2),o=(r(39),r(242),r(243),r(541),r(244)),c=r(545),l=r(100),d=r(15);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},541:function(t,e,r){var content=r(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("3e455b3a",content,!0,{sourceMap:!1})},542:function(t,e,r){var n=r(28)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},543:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(34);function o(t){var title=Object(n.h)().app.i18n.t(t.title);Object(n.i)({title:title})}},555:function(t,e,r){"use strict";r.r(e);var n=r(56),o=r(34),c=["compact","default","fill"],l=Object(o.b)({data:function(){return{layoutOptions:c,mdiMenuDown:n.k}},computed:{layout:{get:function(){return this.$store.state.settings.layout},set:function(t){this.$store.commit("settings/setLayout",t)}}}}),d=r(35),v=r(33),f=r.n(v),h=r(150),_=r(44),y=r(592),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-select",{attrs:{items:t.layoutOptions,label:t.$t("layout.title"),dense:"","append-icon":t.mdiMenuDown},scopedSlots:t._u([{key:"selection",fn:function(e){var r=e.item;return[t._v("\n    "+t._s(t.$t("layout."+r))+"\n  ")]}},{key:"item",fn:function(e){var n=e.item,o=e.attrs,c=e.on;return[r("v-list-item",t._g(t._b({},"v-list-item",o,!1),c),[r("v-list-item-content",[r("v-list-item-title",[t._v("\n          "+t._s(t.$t("layout."+n))+"\n        ")])],1)],1)]}}]),model:{value:t.layout,callback:function(e){t.layout=e},expression:"layout"}})}),[],!1,null,null,null);e.default=component.exports;f()(component,{VListItem:h.a,VListItemContent:_.a,VListItemTitle:_.b,VSelect:y.a})},559:function(t,e,r){"use strict";r.r(e);var n=r(35),o=r(33),c=r.n(o),l=r(346),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-btn",{attrs:{color:"primary",disabled:!t.$storageManager.isAvailable||t.$storageManager.isPersistent},on:{click:function(e){return t.$storageManager.requestPersistentStorage()}}},[t._v("\n  "+t._s(t.$t(t.$storageManager.isPersistent?"settings.persistence-granted":"settings.request-persistence"))+"\n")])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:l.a})},593:function(t,e,r){"use strict";r.r(e);var n=r(34),o=r(88),c=r(132),head=r(543),l=Object(n.b)({setup:function(){Object(head.a)(c.a.settings)},head:{},methods:Object(o.b)(["reset"])}),d=r(35),v=r(33),f=r.n(v),h=r(346),_=r(540),y=r(539),m=(r(8),r(14),r(20),r(21),r(2)),O=(r(5),r(39),r(10),r(23),r(67),r(245),r(41),r(246),r(247),r(248),r(249),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(47),r(40),r(9),r(84),r(348),r(0)),x=r(101),j=r(1);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=["sm","md","lg","xl"],P=S.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),C=S.reduce((function(t,e){return t["offset"+Object(j.x)(e)]={type:[String,Number],default:null},t}),{}),$=S.reduce((function(t,e){return t["order"+Object(j.x)(e)]={type:[String,Number],default:null},t}),{}),B={col:Object.keys(P),offset:Object.keys(C),order:Object.keys($)};function D(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var E=new Map,V=O.default.extend({name:"v-col",functional:!0,props:k(k(k(k({cols:{type:[Boolean,String,Number],default:!1}},P),{},{offset:{type:[String,Number],default:null}},C),{},{order:{type:[String,Number],default:null}},$),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,n=e.children,o=(e.parent,"");for(var c in r)o+=String(r[c]);var l=E.get(o);return l||function(){var t,e;for(e in l=[],B)B[e].forEach((function(t){var n=r[t],o=D(e,t,n);o&&l.push(o)}));var n=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!n||!r.cols},Object(m.a)(t,"col-".concat(r.cols),r.cols),Object(m.a)(t,"offset-".concat(r.offset),r.offset),Object(m.a)(t,"order-".concat(r.order),r.order),Object(m.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),E.set(o,l)}(),t(r.tag,Object(x.a)(data,{class:l}),n)}}),M=r(150);r(54),r(30);function L(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function N(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?L(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):L(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var z=["sm","md","lg","xl"],I=["start","end","center"];function T(t,e){return z.reduce((function(r,n){return r[t+Object(j.x)(n)]=e(),r}),{})}var F=function(t){return[].concat(I,["baseline","stretch"]).includes(t)},G=T("align",(function(){return{type:String,default:null,validator:F}})),J=function(t){return[].concat(I,["space-between","space-around"]).includes(t)},R=T("justify",(function(){return{type:String,default:null,validator:J}})),A=function(t){return[].concat(I,["space-between","space-around","stretch"]).includes(t)},H=T("alignContent",(function(){return{type:String,default:null,validator:A}})),W={align:Object.keys(G),justify:Object.keys(R),alignContent:Object.keys(H)},K={align:"align",justify:"justify",alignContent:"align-content"};function Q(t,e,r){var n=K[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var U=new Map,X=O.default.extend({name:"v-row",functional:!0,props:N(N(N({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:F}},G),{},{justify:{type:String,default:null,validator:J}},R),{},{alignContent:{type:String,default:null,validator:A}},H),render:function(t,e){var r=e.props,data=e.data,n=e.children,o="";for(var c in r)o+=String(r[c]);var l=U.get(o);return l||function(){var t,e;for(e in l=[],W)W[e].forEach((function(t){var n=r[t],o=Q(e,t,n);o&&l.push(o)}));l.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(m.a)(t,"align-".concat(r.align),r.align),Object(m.a)(t,"justify-".concat(r.justify),r.justify),Object(m.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),U.set(o,l)}(),t(r.tag,Object(x.a)(data,{staticClass:"row",class:l}),n)}}),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{dense:""}},[r("v-col",[r("v-card",[r("v-card-title",[t._v("Settings")]),t._v(" "),r("v-card-subtitle",[t._v("\n        "+t._s(t.$t("settings.appearance"))+"\n      ")]),t._v(" "),r("v-card-text",[r("v-list-item",[r("layout-selection")],1)],1),t._v(" "),r("v-card-subtitle",[t._v(t._s(t.$t("settings.storage")))]),t._v(" "),r("v-card-text",[r("v-list-item",[r("persistent-storage-button")],1),t._v(" "),r("v-list-item",[t._v("\n          "+t._s((t.$storageEstimate.usage/1e6).toFixed(2))+"MB /\n          "+t._s((t.$storageEstimate.quota/1e6).toFixed(0))+"MB\n        ")]),t._v(" "),r("v-list-item",[r("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.reset()}}},[t._v("\n            "+t._s(t.$t("actions.reset"))+"\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{LayoutSelection:r(555).default,PersistentStorageButton:r(559).default}),f()(component,{VBtn:h.a,VCard:_.a,VCardSubtitle:y.b,VCardText:y.c,VCardTitle:y.d,VCol:V,VListItem:M.a,VRow:X})}}]);