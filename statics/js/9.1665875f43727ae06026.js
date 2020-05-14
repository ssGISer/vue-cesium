(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"76du":function(s,a,t){s.exports=t("kDVo")},kDVo:function(s,a,t){"use strict";t.r(a);var e=t("JFUb"),n=Object(e.a)({data:function(){return{options:{enableCompass:!0,enableZoomControl:!0,enableDistanceLegend:!0,enableLocationBar:!0,enableCompassOuterRing:!0,enablePrintView:!0,enableMyLocation:!0}}},methods:{ready:function(s){this.cesiumInstance=s;var a=this.cesiumInstance;a.Cesium,a.viewer}}},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("VcNavigation")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Example")]),s._v(" "),t("h3",[s._v("Load a VcNavigation")]),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[t("vc-navigation",{ref:"navigation",attrs:{options:s.options}}),s._v(" "),t("vc-layer-imagery",[t("vc-provider-imagery-openstreetmap")],1)],1),s._v(" "),t("div",{staticClass:"demo-tool"},[t("span",[s._v("EnableCompass")]),s._v(" "),t("md-switch",{model:{value:s.options.enableCompass,callback:function(a){s.$set(s.options,"enableCompass",a)},expression:"options.enableCompass"}}),s._v(" "),t("span",[s._v("EnableZoomControl")]),s._v(" "),t("md-switch",{model:{value:s.options.enableZoomControl,callback:function(a){s.$set(s.options,"enableZoomControl",a)},expression:"options.enableZoomControl"}}),s._v(" "),t("span",[s._v("EnableDistanceLegend")]),s._v(" "),t("md-switch",{model:{value:s.options.enableDistanceLegend,callback:function(a){s.$set(s.options,"enableDistanceLegend",a)},expression:"options.enableDistanceLegend"}}),s._v(" "),t("span",[s._v("EnableLocationBar")]),s._v(" "),t("md-switch",{model:{value:s.options.enableLocationBar,callback:function(a){s.$set(s.options,"enableLocationBar",a)},expression:"options.enableLocationBar"}}),s._v(" "),t("span",[s._v("EnableCompassOuterRing")]),s._v(" "),t("md-switch",{model:{value:s.options.enableCompassOuterRing,callback:function(a){s.$set(s.options,"enableCompassOuterRing",a)},expression:"options.enableCompassOuterRing"}})],1)],1)]],2),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),t("h2",[s._v("Event")]),s._v(" "),s._m(3)],1)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("The "),t("code",{pre:!0},[s._v("vc-navigation")]),s._v(" component is used to load the navigation compass widget. "),t("strong",[s._v("Note:")]),s._v(" This component requires "),t("code",{pre:!0},[s._v("import 'vue-cesium/lib/vc-navigation.css'")]),s._v(", Requires "),t("code",{pre:!0},[s._v("css-loader")]),s._v(".")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-navigation")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"navigation"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":options")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-navigation")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-openstreetmap")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-openstreetmap")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("EnableCompass"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options.enableCompass"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("EnableZoomControl"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options.enableZoomControl"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("EnableDistanceLegend"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options.enableDistanceLegend"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("EnableLocationBar"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options.enableLocationBar"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("EnableCompassOuterRing"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"options.enableCompassOuterRing"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-switch")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enableCompass")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enableZoomControl")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// enableZoomControl: {")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   // scaling ratio")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   zoomAmount: 2,")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   option used to set a default view when resetting the map view with the reset navigation control.{lng: number, lat: number, height: number} or rectangle{west: number,south: number,east: number,north: number}")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   defaultResetView: {")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//     lng: 105, lat: 29.999999999999993, height: 19059568.497290563, heading: 360, pitch: -90, roll: 0")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   }")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// },")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enableDistanceLegend")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enableLocationBar")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// enableLocationBar: {")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   // Get more accurate elevation")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   gridFileUrl: 'https://zouyaoji.top/vue-cesium/statics/SampleData/WW15MGH.DAC'")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// },")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enableCompassOuterRing")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enablePrintView")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// enablePrintView: {")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   // show Credit")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   showCredit: true,")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   // print automatically")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   printAutomatically: false")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// },")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("enableMyLocation")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        }\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("type")]),s._v(" "),t("th",[s._v("default")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("enableCompass")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" option used to enable or disable the compass.")])]),s._v(" "),t("tr",[t("td",[s._v("enableZoomControl")]),s._v(" "),t("td",[s._v("Boolean|Object")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" option used to enable or disable the zoom control.")])]),s._v(" "),t("tr",[t("td",[s._v("enableDistanceLegend")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" option used to enable or disable the distance legend.")])]),s._v(" "),t("tr",[t("td",[s._v("enableLocationBar")]),s._v(" "),t("td",[s._v("Boolean|Object")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" option used to enable or disable the LocationBar.")])]),s._v(" "),t("tr",[t("td",[s._v("enableCompassOuterRing")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" option used to enable or disable the Compass Outer Ring.")])]),s._v(" "),t("tr",[t("td",[s._v("enablePrintView")]),s._v(" "),t("td",[s._v("Boolean|Object")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" option used to enable or disable the PrintView.")])]),s._v(" "),t("tr",[t("td",[s._v("overrideCamera.overrideCamera")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("false")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" Whether the default camera position parameter of the zoom control overrides the camera parameter on the vc-viewer.")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer}")]),s._v(" "),t("td",[s._v("Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.")])]),s._v(" "),t("tr",[t("td",[s._v("legendChanged")]),s._v(" "),t("td",[s._v("number")]),s._v(" "),t("td",[s._v("Triggered when the scale changes, returns the scale value in meters.")])]),s._v(" "),t("tr",[t("td",[s._v("geolocation")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td",[s._v("Triggered when positioning is successful and returns the positioning result.")])])])])}],!1,null,null,null);a.default=n.exports}}]);
//# sourceMappingURL=9.1665875f43727ae06026.js.map