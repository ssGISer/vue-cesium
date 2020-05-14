(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{suyU:function(e,s,r){"use strict";r.r(s);var t={data:function(){return{url:"./statics/SampleData/models/CesiumAir/Cesium_Air.gltf",modelMatrix:{}}},methods:{ready:function(e){var s=e.Cesium,r=e.viewer;this.viewer=r,this.modelMatrix=s.Transforms.eastNorthUpToFixedFrame(s.Cartesian3.fromDegrees(105,38,1e4))},readyPromise:function(e){var s=Cesium.BoundingSphere.transform(e.boundingSphere,e.modelMatrix);this.viewer.scene.camera.flyToBoundingSphere(s)}}},a=r("JFUb"),n=Object(a.a)(t,(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("section",[r("h1",[e._v("Model")]),e._v(" "),e._m(0),e._v(" "),r("h2",[e._v("Example")]),e._v(" "),e._m(1),e._v(" "),r("h4",[e._v("Preview")]),e._v(" "),r("doc-preview",[[r("div",{staticClass:"viewer"},[r("vc-viewer",{on:{ready:e.ready}},[r("vc-primitive-model",{ref:"model",attrs:{url:e.url,modelMatrix:e.modelMatrix,scale:1e4,minimumPixelSize:128,maximumScale:2e5},on:{readyPromise:e.readyPromise}})],1)],1)]],2),e._v(" "),r("h4",[e._v("Code")]),e._v(" "),e._m(2),e._v(" "),r("h2",[e._v("Instance Properties")]),e._v(" "),e._m(3),e._v(" "),r("hr"),e._v(" "),e._m(4),e._v(" "),r("h2",[e._v("Events")]),e._v(" "),e._m(5),e._v(" "),r("hr")],1)}),[function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("The "),s("code",{pre:!0},[this._v("vc-primitive-model")]),this._v(" component is used to load a 3D model based on glTF, the runtime asset format for WebGL, OpenGL ES, and OpenGL.")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",[this._v("Load a model with "),s("code",{pre:!0},[this._v("vc-primitive-model")])])},function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewer"')]),e._v(">")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@ready")]),e._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ready"')]),e._v(">")]),e._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-model")]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("ref")]),e._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"model"')]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@readyPromise")]),e._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"readyPromise"')]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":url")]),e._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"url"')]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":modelMatrix")]),e._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"modelMatrix"')]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":scale")]),e._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"10000"')]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":minimumPixelSize")]),e._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"128"')]),e._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":maximumScale")]),e._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"200000"')]),e._v("\n      >")]),e._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-model")]),e._v(">")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(">")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),r("span",{pre:!0,attrs:{class:"javascript"}},[e._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    data() {\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" {\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("url")]),e._v(": "),r("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'./statics/SampleData/models/CesiumAir/Cesium_Air.gltf'")]),e._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("modelMatrix")]),e._v(": {}\n      }\n    },\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      ready(cesiumInstance) {\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { Cesium, viewer } = cesiumInstance\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".viewer = viewer\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("105")]),e._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("38")]),e._v(", "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("10000")]),e._v("))\n      },\n      readyPromise(model) {\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" boundingSphere = Cesium.BoundingSphere.transform(model.boundingSphere, model.modelMatrix)\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".viewer.scene.camera.flyToBoundingSphere(boundingSphere)\n      }\n    }\n  }\n")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])},function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("p",[e._v("|name|type|default|description|                                                                                     |\n| ------------------------- | ------- | ------ | ---------------------------------------------------------------------------------------------- |\n| url                       | String  |        | "),r("code",{pre:!0},[e._v("required")]),e._v(" The url to the .gltf file.                                                         |\n| basePath                  | String  |        | "),r("code",{pre:!0},[e._v("optional")]),e._v(" The base path that paths in the glTF JSON are relative to.                                           |\n| show                      | Boolean | "),r("code",{pre:!0},[e._v("true")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" Determines if the model primitive will be shown. |\n| modelMatrix               | Object  |        | "),r("code",{pre:!0},[e._v("optional")]),e._v(" The 4x4 transformation matrix that transforms the model from model to world coordinates. |\n| scale                     | Number  | "),r("code",{pre:!0},[e._v("1.0")]),e._v("  | "),r("code",{pre:!0},[e._v("optional")]),e._v(" A uniform scale applied to this model.                                                               |\n| minimumPixelSize          | Number  | "),r("code",{pre:!0},[e._v("0.0")]),e._v("  | "),r("code",{pre:!0},[e._v("optional")]),e._v(" The approximate minimum pixel size of the model regardless of zoom. |\n| maximumScale              | Number  |        | "),r("code",{pre:!0},[e._v("optional")]),e._v(" The maximum scale for the model.                                                              |\n| id                        | *      |        | "),r("code",{pre:!0},[e._v("optional")]),e._v(" A user-defined object to return when the model is picked with Scene#pick. |\n| allowPicking              | Boolean | "),r("code",{pre:!0},[e._v("true")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" When true, each glTF mesh and primitive is pickable with Scene#pick. |\n| incrementallyLoadTextures | Boolean | "),r("code",{pre:!0},[e._v("true")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" Determine if textures may continue to stream in after the model is loaded. |\n| asynchronous              | Boolean | "),r("code",{pre:!0},[e._v("true")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" Determines if model WebGL resource creation will be spread out over several frames or block until completion once all glTF files are loaded. |\n| clampAnimations | Boolean | "),r("code",{pre:!0},[e._v("true")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" Determines if the model's animations should hold a pose over frames where no keyframes are specified. |\n| shadows | Number | "),r("code",{pre:!0},[e._v("1")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" Determines whether the model casts or receives shadows from each light source. "),r("strong",[e._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")]),e._v(" |\n| debugShowBoundingVolume | Boolean | "),r("code",{pre:!0},[e._v("false")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. Draws the bounding sphere for each DrawCommand in the model. |\n| debugWireframe | Boolean | "),r("code",{pre:!0},[e._v("false")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. Draws the model in wireframe. |\n| heightReference | Number | "),r("code",{pre:!0},[e._v("0")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" Determines how the model is drawn relative to terrain. "),r("strong",[e._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")]),e._v(" |\n| scene | Object | "),r("code",{pre:!0},[e._v("false")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" Must be passed in for models that use the height reference property. |\n| distanceDisplayCondition | Object | | "),r("code",{pre:!0},[e._v("optional")]),e._v(" The condition specifying at what distance from the camera that this model will be displayed. "),r("strong",[e._v("Structure: { near: number, far: number }")]),e._v(" |\n| color | Object|String|Array | "),r("code",{pre:!0},[e._v("'WHITE'")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" A color that blends with the model's rendered color. |\n| colorBlendMode | Number | "),r("code",{pre:!0},[e._v("0")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" Defines how the color blends with the model. "),r("strong",[e._v("HIGHLIGHT: 0, REPLACE: 1, MIX: 2")]),e._v(" |\n| colorBlendAmount | Number | "),r("code",{pre:!0},[e._v("0.5")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" Value used to determine the color strength when the colorBlendMode is MIX. A value of 0.0 results in the model's rendered color while a value of 1.0 results in a solid color, with any value in-between resulting in a mix of the two. |\n| silhouetteColor | Object|String|Array | "),r("code",{pre:!0},[e._v("'RED'")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" The silhouette color. If more than 256 models have silhouettes enabled, there is a small chance that overlapping models will have minor artifacts. |\n| silhouetteSize | Number | "),r("code",{pre:!0},[e._v("0.0")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" The size of the silhouette in pixels. |\n| clippingPlanes | Object | | "),r("code",{pre:!0},[e._v("optional")]),e._v(" The ClippingPlaneCollection used to selectively disable rendering the model. |\n| debugWireframe | Boolean | "),r("code",{pre:!0},[e._v("true")]),e._v(" | "),r("code",{pre:!0},[e._v("optional")]),e._v(" Determines if a Draco encoded model is dequantized on the GPU. This decreases total memory usage for encoded models. |\n| credit | Object|String | | "),r("code",{pre:!0},[e._v("optional")]),e._v(" A credit for the model, which is displayed on the canvas. |")])},function(){var e=this.$createElement,s=this._self._c||e;return s("ul",[s("li",[this._v("Refer to the official document: "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Model.html"}},[this._v("Model")])])])])},function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("table",[r("thead",[r("tr",[r("th",[e._v("name")]),e._v(" "),r("th",[e._v("parameter")]),e._v(" "),r("th",[e._v("description")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("ready")]),e._v(" "),r("td",[e._v("{Cesium, viewer, cesiumObject}")]),e._v(" "),r("td",[e._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),e._v(" "),r("tr",[r("td",[e._v("readyPromise")]),e._v(" "),r("td",[e._v("model")]),e._v(" "),r("td",[e._v("Triggers when the model is ready for use.")])])])])}],!1,null,null,null);s.default=n.exports},tUP5:function(e,s,r){e.exports=r("suyU")}}]);
//# sourceMappingURL=73.98839c52d4f2f8ecc72f.js.map