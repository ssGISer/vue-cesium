(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{FjNP:function(t,s,e){"use strict";e.r(s);var a=e("JFUb"),r=Object(a.a)({data:function(){return{show:!0}},methods:{ready:function(t){},subReady:function(t){t.Cesium;t.viewer.camera.flyHome(0)}}},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("CzmlDataSource")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Example")]),t._v(" "),t._m(1),t._v(" "),e("h4",[t._v("Preview")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{attrs:{shouldAnimate:!0},on:{ready:t.ready}},[e("vc-datasource-czml",{attrs:{czml:"./statics/SampleData/simple.czml",show:t.show},on:{ready:t.subReady}})],1)],1)]],2),t._v(" "),e("h4",[t._v("Code")]),t._v(" "),t._m(2),t._v(" "),e("h2",[t._v("Instance Properties")]),t._v(" "),t._m(3),t._v(" "),e("hr"),t._v(" "),t._m(4),t._v(" "),e("h2",[t._v("Events")]),t._v(" "),t._m(5),t._v(" "),e("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",{pre:!0},[this._v("vc-datasource-czml")]),this._v(" component is used to load a dataSource which processes "),s("a",{attrs:{href:"https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide"}},[this._v("CZML")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",[this._v("Load a CzmlDataSource with "),s("code",{pre:!0},[this._v("vc-datasource-czml")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":shouldAnimate")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"true"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-czml")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("czml")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"./statics/SampleData/simple.czml"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"subReady"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-czml")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {},\n      subReady(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n        viewer.camera.flyHome("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(")\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("czml")]),t._v(" "),e("td",[t._v("String|Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("required")]),t._v(" A url or CZML object to be processed..")])]),t._v(" "),e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" Gets whether or not this data source should be displayed.")])]),t._v(" "),e("tr",[e("td",[t._v("options")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" An object with the following properties:")])]),t._v(" "),e("tr",[e("td",[t._v("sourceUri")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("credit")]),t._v(" "),e("td",[t._v("String|Object")]),t._v(" "),e("td"),t._v(" "),e("td")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Refer to the official document: "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html"}},[this._v("CzmlDataSource")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("parameter")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),e("td",[t._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),t._v(" "),e("tr",[e("td",[t._v("changedEvent")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Triggers when the underlying data changes.")])]),t._v(" "),e("tr",[e("td",[t._v("errorEvent")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Triggers if an error is encountered during processing.")])]),t._v(" "),e("tr",[e("td",[t._v("loadingEvent")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Triggers the data source either starts or stops loading.")])]),t._v(" "),e("tr",[e("td",[t._v("clusterEvent")]),t._v(" "),e("td",[t._v("(clusteredEntities, cluster)")]),t._v(" "),e("td",[t._v("Gets the event that is fired when entities are added or removed from the collection.")])]),t._v(" "),e("tr",[e("td",[t._v("collectionChanged")]),t._v(" "),e("td",[t._v("(collection, added, removed, changed)")]),t._v(" "),e("td",[t._v("Gets the event that will be raised when a new cluster will be displayed.")])])])])}],!1,null,null,null);s.default=r.exports},f4P5:function(t,s,e){t.exports=e("FjNP")}}]);
//# sourceMappingURL=11.5794f1e38a0df933517c.js.map