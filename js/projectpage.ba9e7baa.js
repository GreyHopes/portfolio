(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projectpage"],{"2fbc":function(t,e,r){"use strict";var o=r("d695"),n=r.n(o);n.a},"583b":function(t,e,r){var o=r("23e7"),n=r("5e89"),s=Math.abs;o({target:"Number",stat:!0},{isSafeInteger:function(t){return n(t)&&s(t)<=9007199254740991}})},"5e89":function(t,e,r){var o=r("861d"),n=Math.floor;t.exports=function(t){return!o(t)&&isFinite(t)&&n(t)===t}},adf5:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"project-container"},[r("v-row",{staticClass:"title-row",attrs:{justify:"center"}},[r("v-img",{directives:[{name:"show",rawName:"v-show",value:""!==t.imgUrl,expression:"imgUrl !== ''"}],attrs:{src:t.getImageURL(t.imgUrl),"max-height":"30rem","min-height":"30rem",contain:""}})],1),r("v-row",{staticClass:"title-row",attrs:{justify:"center"}},[r("h1",[t._v(t._s(t.title))])]),r("v-row",{staticClass:"content-row"},[t.isMarkdown?r("VueShowdown",{attrs:{markdown:t.content}}):r("div",[t._v(t._s(t.content))])],1)],1)},n=[],s=(r("b0c0"),r("a9e3"),r("583b"),r("ac1f"),r("5319"),r("d930")),i={props:{projectId:String},data:function(){return{content:"",isMarkdown:!1,project:null,title:"",imgUrl:""}},methods:{getImageURL:s["a"],onSuccess:function(t){this.isMarkdown=!0,this.content=t.data.replace(/{{LOCAL_IMAGE_DIR}}/g,"/portfolio/images")},onFail:function(t){var e;console.error(t),this.content=null===(e=this.project.content)||void 0===e?void 0:e.text},retrieveData:function(){var t;this.project.content.mdUrl?this.axios.get("/portfolio/projects/markdown/"+this.project.content.mdUrl).then(this.onSuccess).catch(this.onFail):this.content=null===(t=this.project.content)||void 0===t?void 0:t.text;this.title=this.project.title,this.imgUrl=this.project.imageUrl},retrieveProject:function(t){var e=this;this.$store.state.projects?this.$store.state.projects.length<=t?this.$router.push({name:"404"}):(this.project=this.$store.state.projects[this.projectId],this.retrieveData()):this.$store.subscribe((function(r,o){"setprojects"===r.type&&o.projects.length>t&&(e.$store.state.projects.length<=t?e.$router.push({name:"404"}):(e.project=o.projects[t],e.retrieveData()))}),this,t)}},mounted:function(){this.retrieveProject(this.projectId)},watch:{$route:function(t,e){if(t&&"Project"===t.name&&t.params&&t.params.projectId){var r=t.params.projectId;Number.isSafeInteger(r)||this.retrieveProject(r)}}}},a=i,c=(r("2fbc"),r("2877")),h=r("6544"),u=r.n(h),l=r("a523"),p=r("adda"),d=r("0fd9"),m=Object(c["a"])(a,o,n,!1,null,null,null);e["default"]=m.exports;u()(m,{VContainer:l["a"],VImg:p["a"],VRow:d["a"]})},d695:function(t,e,r){}}]);
//# sourceMappingURL=projectpage.ba9e7baa.js.map