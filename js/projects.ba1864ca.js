(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects"],{"37c6":function(e,t,r){"use strict";var s=r("8e36");t["a"]=s["a"]},"588f":function(e,t,r){"use strict";r("b42c")},"615b":function(e,t,r){},"62ad":function(e,t,r){"use strict";r("13d5"),r("14d9"),r("4b85");var s=r("2b0e"),a=r("d9f7"),i=r("80d2");const n=["sm","md","lg","xl"],o=(()=>n.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),l=(()=>n.reduce((e,t)=>(e["offset"+Object(i["t"])(t)]={type:[String,Number],default:null},e),{}))(),c=(()=>n.reduce((e,t)=>(e["order"+Object(i["t"])(t)]={type:[String,Number],default:null},e),{}))(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function h(e,t,r){let s=e;if(null!=r&&!1!==r){if(t){const r=t.replace(e,"");s+="-"+r}return"col"!==e||""!==r&&!0!==r?(s+="-"+r,s.toLowerCase()):s.toLowerCase()}}const u=new Map;t["a"]=s["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:r,children:s,parent:i}){let n="";for(const a in t)n+=String(t[a]);let o=u.get(n);if(!o){let e;for(e in o=[],d)d[e].forEach(r=>{const s=t[r],a=h(e,r,s);a&&o.push(a)});const r=o.some(e=>e.startsWith("col-"));o.push({col:!r||!t.cols,["col-"+t.cols]:t.cols,["offset-"+t.offset]:t.offset,["order-"+t.order]:t.order,["align-self-"+t.alignSelf]:t.alignSelf}),u.set(n,o)}return e(t.tag,Object(a["a"])(r,{class:o}),s)}})},"6ece":function(e,t,r){},"8e36":function(e,t,r){"use strict";r("6ece");var s=r("0789"),a=r("90a2"),i=r("a9ad"),n=r("fe6c"),o=r("a452"),l=r("7560"),c=r("80d2"),d=r("58df");const h=Object(d["a"])(i["a"],Object(n["b"])(["absolute","fixed","top","bottom"]),o["a"],l["a"]);t["a"]=h.extend({name:"v-progress-linear",directives:{intersect:a["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(c["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(c["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:Object(c["g"])(this.normalizedValue,"%"),width:Object(c["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?s["b"]:s["c"]},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(c["g"])(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=Object(c["m"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,r){this.isVisible=r},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(c["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},acca:function(e,t,r){"use strict";r.r(t);r("615b");var s=r("10d2"),a=r("2b0e"),i=r("37c6"),n=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(i["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),o=r("1c87"),l=r("58df"),c=Object(l["a"])(n,o["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...o["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s["a"].options.computed.classes.call(this)}},styles(){const e={...s["a"].options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=n.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}}),d=r("80d2");Object(d["h"])("v-card__actions");const h=Object(d["h"])("v-card__subtitle"),u=Object(d["h"])("v-card__text"),g=Object(d["h"])("v-card__title");var p=r("62ad"),f=r("a523"),m=r("adda"),v=r("0fd9"),b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"projects"},[t(f["a"],[t(v["a"],{staticClass:"title-row"},[t("h1",[e._v("Check out my projects")])]),t(v["a"],e._l(e.projects,(function(r,s){return t(p["a"],{key:r.title,attrs:{lg:"3",md:"4",sm:"12"}},[t("router-link",{attrs:{to:{path:"/project/"+s}}},[t(c,{attrs:{height:"100%"}},[t(m["a"],{attrs:{src:e.getImageURL(r.imageUrl),height:"200px"}}),t(g,[e._v(" "+e._s(r.title)+" ")]),t(h,[e._v(" "+e._s(r.subtitle)+" ")]),t(u)],1)],1)],1)})),1)],1)],1)},_=[],y=r("d930"),B={name:"Projects",data:()=>({projects:[]}),methods:{retrieveDataFromState:function(e){this.projects=e.portfolio.projects},getImageURL:y["a"]},mounted:function(){this.$store.state.portfolio?this.retrieveDataFromState(this.$store.state):this.$store.subscribe((e,t)=>{"setportfoliodata"===e.type&&this.retrieveDataFromState(t)},this)}},k=B,j=(r("588f"),r("2877")),C=Object(j["a"])(k,b,_,!1,null,null,null);t["default"]=C.exports},b42c:function(e,t,r){}}]);
//# sourceMappingURL=projects.ba1864ca.js.map