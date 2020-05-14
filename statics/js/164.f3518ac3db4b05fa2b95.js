(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{OG19:function(t,s,e){"use strict";e.r(s);var a={data:function(){return{url:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",options:[{value:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",label:"tileset one"},{value:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json",label:"tileset two"}]}},methods:{ready:function(t){this.cesiumInstance=t;t.Cesium,t.viewer},readyPromise:function(t){var s=this.cesiumInstance,e=s.Cesium;s.viewer.zoomTo(t,new e.HeadingPitchRange(0,-.5,2*t.boundingSphere.radius))},allTilesLoaded:function(){console.log("All tiles are loaded")},initialTilesLoaded:function(){console.log("Initial tiles are loaded")},loadProgress:function(t,s){0!==t||0!==s?console.log("Loading: requests: "+t+", processing: "+s):console.log("Stopped loading")},tileFailed:function(t){console.log("An error occurred loading tile: "+t.url),console.log("Error: "+t.message)},tileLoad:function(t){console.log("A tile was loaded.")},tileUnload:function(t){console.log("A tile was unloaded from the cache.")},tileVisible:function(t){}}},v=e("JFUb"),l=Object(v.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("Cesium3DTileset")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("示例")]),t._v(" "),e("h3",[t._v("加载 3DTileset 图元")]),t._v(" "),e("h4",[t._v("预览")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:t.ready}},[e("vc-primitive-tileset",{attrs:{url:t.url},on:{readyPromise:t.readyPromise,initialTilesLoaded:t.initialTilesLoaded,allTilesLoaded:t.allTilesLoaded,loadProgress:t.loadProgress,tileFailed:t.tileFailed,tileLoad:t.tileLoad,tileUnload:t.tileUnload,tileVisible:t.tileVisible}})],1),t._v(" "),e("div",{staticClass:"demo-tool"},[e("span",[t._v("切换地址")]),t._v(" "),e("md-select",{attrs:{placeholder:"切换地址"},model:{value:t.url,callback:function(s){t.url=s},expression:"url"}},t._l(t.options,(function(s){return e("md-option",{key:s.value,attrs:{value:s.value}},[t._v("\n            "+t._s(s.label)+"\n          ")])})),1)],1)],1)]],2),t._v(" "),e("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),e("hr"),t._v(" "),t._m(3),t._v(" "),e("h2",[t._v("事件")]),t._v(" "),t._m(4),t._v(" "),e("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("vc-primitive-tileset")]),this._v(" 组件用于加载 3DTiles 模型。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-tileset")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":url")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"url"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@readyPromise")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"readyPromise"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@initialTilesLoaded")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"initialTilesLoaded"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@allTilesLoaded")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"allTilesLoaded"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@loadProgress")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"loadProgress"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@tileFailed")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tileFailed"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@tileLoad")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tileLoad"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@tileUnload")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tileUnload"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@tileVisible")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"tileVisible"')]),t._v("\n      >")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-tileset")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"demo-tool"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("切换地址"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("span")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-select")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"url"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("placeholder")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"切换地址"')]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-option")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-for")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item in options"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":key")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item.value"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":value")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"item.value"')]),t._v(">")]),t._v("\n          {{item.label}}\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-option")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-select")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("url")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("options")]),t._v(": [\n          {\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),t._v(",\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'tileset one'")]),t._v("\n          },\n          {\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Hierarchy/BatchTableHierarchy/tileset.json'")]),t._v(",\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'tileset two'")]),t._v("\n          }\n        ]\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".cesiumInstance = cesiumInstance\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n      },\n      readyPromise(tileset) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".cesiumInstance\n        viewer.zoomTo(tileset, "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.HeadingPitchRange("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-0.5")]),t._v(", tileset.boundingSphere.radius * "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2.0")]),t._v("))\n      },\n      allTilesLoaded() {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'All tiles are loaded'")]),t._v(")\n      },\n      initialTilesLoaded() {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Initial tiles are loaded'")]),t._v(")\n      },\n      loadProgress(numberOfPendingRequests, numberOfTilesProcessing) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (numberOfPendingRequests === "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(" && numberOfTilesProcessing === "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(") {\n          "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Stopped loading'")]),t._v(")\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v("\n        }\n\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Loading: requests: '")]),t._v(" + numberOfPendingRequests + "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("', processing: '")]),t._v(" + numberOfTilesProcessing)\n      },\n      tileFailed(error) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'An error occurred loading tile: '")]),t._v(" + error.url)\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Error: '")]),t._v(" + error.message)\n      },\n      tileLoad(tile) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'A tile was loaded.'")]),t._v(")\n      },\n      tileUnload(tile) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'A tile was unloaded from the cache.'")]),t._v(")\n      },\n      tileVisible(tile) {}\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("属性名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("url")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("required")]),t._v("tileset json 文件地址。")])]),t._v(" "),e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v("是否显示 tileset 模型。")])]),t._v(" "),e("tr",[e("td",[t._v("modelMatrix")]),t._v(" "),e("td",[t._v("Matrix4")]),t._v(" "),e("td",[t._v("Matrix4.IDENTITY")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 一个 4x4 变换矩阵，用于转换 tileset 的根块。")])]),t._v(" "),e("tr",[e("td",[t._v("shadows")]),t._v(" "),e("td",[t._v("ShadowMode")]),t._v(" "),e("td",[t._v("ShadowMode.ENABLED")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 确定 tileset 是否投射或接收来自每个光源的阴影。")])]),t._v(" "),e("tr",[e("td",[t._v("maximumScreenSpaceError")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("16")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 用于驱动细节细化级别的最大屏幕空间错误。")])]),t._v(" "),e("tr",[e("td",[t._v("maximumMemoryUsage")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("512")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" tileset 可以使用的最大内存量（MB）。")])]),t._v(" "),e("tr",[e("td",[t._v("cullWithChildrenBounds")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 是否使用子绑定卷的并集来剔除切片。")])]),t._v(" "),e("tr",[e("td",[t._v("dynamicScreenSpaceError")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 减少远离相机的瓷砖的屏幕空间错误。")])]),t._v(" "),e("tr",[e("td",[t._v("dynamicScreenSpaceErrorDensity")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("0.00278")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 用于调整动态屏幕空间误差密度，类似于雾密度。")])]),t._v(" "),e("tr",[e("td",[t._v("dynamicScreenSpaceErrorFactor")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("4.0")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 用于增加计算的动态屏幕空间错误的因子。")])]),t._v(" "),e("tr",[e("td",[t._v("dynamicScreenSpaceErrorHeightFalloff")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("0.25")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" tileset 高度开始下降的比率。")])]),t._v(" "),e("tr",[e("td",[t._v("skipLevelOfDetail")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 优化选项。 确定在遍历期间是否应该应用详细信息跳过级别。")])]),t._v(" "),e("tr",[e("td",[t._v("baseScreenSpaceError")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("1024")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 当 skipLevelOfDetail 为 true 时，在跳过详细级别之前必须达到的屏幕空间错误。")])]),t._v(" "),e("tr",[e("td",[t._v("skipScreenSpaceErrorFactor")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("16")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 当 skipLevelOfDetail 为 true 时，定义要跳过的最小屏幕空间错误的乘数。 与 skipLevels 结合使用以确定要加载的切片。")])]),t._v(" "),e("tr",[e("td",[t._v("skipLevels")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v("当 skipLevelOfDetail 为 true 时，一个常量定义加载切片时要跳过的最小级别数。 当它为 0 时，不会跳过任何级别。与 skipScreenSpaceErrorFactor 结合使用以确定要加载的切片。")])]),t._v(" "),e("tr",[e("td",[t._v("immediatelyLoadDesiredLevelOfDetail")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 当 skipLevelOfDetail 为 true 时，将只下载满足最大屏幕空间错误的切片。跳过因子将被忽略，并且只加载所需的切片。")])]),t._v(" "),e("tr",[e("td",[t._v("loadSiblings")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 当 skipLevelOfDetail 为 true 时，确定在遍历期间是否始终下载可见切片的兄弟节点。")])]),t._v(" "),e("tr",[e("td",[t._v("clippingPlanes")]),t._v(" "),e("td",[t._v("ClippingPlaneCollection")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" ClippingPlaneCollection 用于有选择地禁用渲染 tileset。")])]),t._v(" "),e("tr",[e("td",[t._v("classificationType")]),t._v(" "),e("td",[t._v("ClassificationType")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 确定此 tileset 是否会对 terrain，3D Tiles 或两者进行分类。 有关限制和限制的详细信息，请参阅 Cesium3DTileset＃classificationType。")])]),t._v(" "),e("tr",[e("td",[t._v("ellipsoid")]),t._v(" "),e("td",[t._v("Ellipsoid")]),t._v(" "),e("td",[t._v("Ellipsoid.WGS84")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 决定地球的大小和形状参考椭球体。")])]),t._v(" "),e("tr",[e("td",[t._v("pointCloudShading")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 用于构造 PointCloudShading 对象以基于几何误差和光照控制点衰减的选项。")])]),t._v(" "),e("tr",[e("td",[t._v("imageBasedLightingFactor")]),t._v(" "),e("td",[t._v("Cartesian2")]),t._v(" "),e("td",[t._v("new Cartesian2(1.0, 1.0)")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 地球、天空、大气层的光照缩放因子。")])]),t._v(" "),e("tr",[e("td",[t._v("lightColor")]),t._v(" "),e("td",[t._v("Cartesian3")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 模型阴影的颜色和强度。")])]),t._v(" "),e("tr",[e("td",[t._v("debugFreezeFrame")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，确定是否只使用最后一帧的切片进行渲染。")])]),t._v(" "),e("tr",[e("td",[t._v("debugColorizeTiles")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则给每个 tile 一个随机颜色。")])]),t._v(" "),e("tr",[e("td",[t._v("debugWireframe")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用， 如果为 ture，则渲染每个 tile content 为线框。")])]),t._v(" "),e("tr",[e("td",[t._v("debugShowBoundingVolume")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则渲染每个 tile 的边界体积。")])]),t._v(" "),e("tr",[e("td",[t._v("debugShowContentBoundingVolume")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则渲染每个 tile content 的边界体积。")])]),t._v(" "),e("tr",[e("td",[t._v("debugShowViewerRequestVolume")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则渲染每个 tile 的请求量。")])]),t._v(" "),e("tr",[e("td",[t._v("debugShowGeometricError")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则绘制标签表示每个 tile 的几何误差。")])]),t._v(" "),e("tr",[e("td",[t._v("debugShowRenderingStatistics")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则绘制标签以表示每个 tile 的 commonds、points、triangles、features 的数量。")])]),t._v(" "),e("tr",[e("td",[t._v("debugShowMemoryUsage")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则绘制标签表示每个 tile 的纹理和几何内存，以 mb 为单位。")])]),t._v(" "),e("tr",[e("td",[t._v("debugShowUrl")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 仅调试可用，如果为 true，则绘制标签表示每个 tile 的网址。")])]),t._v(" "),e("tr",[e("td",[t._v("isZoomTo")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 加载到 scene 之后是否定位到该模型。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("参考官方文档："),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Cesium3DTileset.html"}},[this._v("Cesium3DTileset")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),e("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),t._v(" "),e("tr",[e("td",[t._v("allTilesLoaded")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("该组件所有层级的 tiles 加载完毕后触发该事件。")])]),t._v(" "),e("tr",[e("td",[t._v("initialTilesLoaded")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("该组件所有初始层级的 tiles 加载完毕触发该事件。")])]),t._v(" "),e("tr",[e("td",[t._v("loadProgress")]),t._v(" "),e("td",[t._v("(numberOfPendingRequests, numberOfTilesProcessing)")]),t._v(" "),e("td",[t._v("加载 tiles 触发，指示 tile 加载进度。")])]),t._v(" "),e("tr",[e("td",[t._v("tileFailed")]),t._v(" "),e("td",[t._v("{url, message}")]),t._v(" "),e("td",[t._v("tile 加载失败时触发该事件。")])]),t._v(" "),e("tr",[e("td",[t._v("tileLoad")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("tile 加载完成后触发该事件。")])]),t._v(" "),e("tr",[e("td",[t._v("tileUnload")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("tile 加载未成功加载时触发该事件。")])]),t._v(" "),e("tr",[e("td",[t._v("tileVisible")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("tile 可见性发生改变时触发该事件。")])])])])}],!1,null,null,null);s.default=l.exports},mfmA:function(t,s,e){t.exports=e("OG19")}}]);
//# sourceMappingURL=164.f3518ac3db4b05fa2b95.js.map