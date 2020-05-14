(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{"1DV0":function(s,a,e){s.exports=e("Xnrq")},Xnrq:function(s,a,e){"use strict";e.r(a);var r={data:function(){return{uniforms:{},fsRain:"\n        uniform sampler2D colorTexture;\n        varying vec2 v_textureCoordinates;\n        float hash(float x){\n          return fract(sin(x*23.3)*13.13);\n        }\n        void main(void){\n          float time = czm_frameNumber / 60.0;\n          vec2 resolution = czm_viewport.zw;\n          vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\n          vec3 c=vec3(.6,.7,.8);\n          float a=-.4;\n          float si=sin(a),co=cos(a);\n          uv*=mat2(co,-si,si,co);\n          uv*=length(uv+vec2(0,4.9))*.3+1.;\n          float v=1.-sin(hash(floor(uv.x*100.))*2.);\n          float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;\n          c*=v*b;\n          gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);\n        }",fsScanSegment:"\n        uniform sampler2D colorTexture;\n        uniform sampler2D depthTexture;\n        varying vec2 v_textureCoordinates;\n        uniform vec4 u_scanCenterEC;\n        uniform vec3 u_scanPlaneNormalEC;\n        uniform float u_radius;\n        uniform vec4 u_scanColor;\n        vec4 toEye(in vec2 uv, in float depth)\n        {\n          vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));\n          vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);\n          posInCamera =posInCamera / posInCamera.w;\n          return posInCamera;\n        }\n        vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point)\n        {\n          vec3 v01 = point -planeOrigin;\n          float d = dot(planeNormal, v01) ;\n          return (point - planeNormal * d);\n        }\n        float getDepth(in vec4 depth)\n        {\n          float z_window = czm_unpackDepth(depth);\n          z_window = czm_reverseLogDepth(z_window);\n          float n_range = czm_depthRange.near;\n          float f_range = czm_depthRange.far;\n          return (2.0 * z_window - n_range - f_range) / (f_range - n_range);\n        }\n        void main()\n        {\n          gl_FragColor = texture2D(colorTexture, v_textureCoordinates);\n          float depth = getDepth( texture2D(depthTexture, v_textureCoordinates));\n          vec4 viewPos = toEye(v_textureCoordinates, depth);\n          vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);\n          float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);\n          if(dis < u_radius)\n          {\n            float f = 1.0 -abs(u_radius - dis) / u_radius;\n            f = pow(f, 4.0);\n            gl_FragColor = mix(gl_FragColor, u_scanColor, f);\n          }\n        }"}},methods:{ready:function(s){this.cesiumInstance=s;var a=this.cesiumInstance,e=a.Cesium,r=a.viewer,t=new e.Color(1,0,0,1),n=new e.Cartographic(e.Math.toRadians(103.65),e.Math.toRadians(32.07),2540),v=e.Cartographic.toCartesian(n),l=new e.Cartesian4(v.x,v.y,v.z,1),_=new e.Cartographic(n.longitude,n.latitude,n.height+500),c=e.Cartographic.toCartesian(_),o=new e.Cartesian4(c.x,c.y,c.z,1),p=(new Date).getTime(),i=new e.Cartesian4,h=new e.Cartesian4,u=new e.Cartesian3;this.uniforms={u_scanCenterEC:function(){return e.Matrix4.multiplyByVector(r.camera._viewMatrix,l,i)},u_scanPlaneNormalEC:function(){var s=e.Matrix4.multiplyByVector(r.camera._viewMatrix,l,i),a=e.Matrix4.multiplyByVector(r.camera._viewMatrix,o,h);return u.x=a.x-s.x,u.y=a.y-s.y,u.z=a.z-s.z,e.Cartesian3.normalize(u,u),u},u_radius:function(){return((new Date).getTime()-p)%1e3*5e4/1e3},u_scanColor:t},r.camera.setView({destination:new e.Cartesian3(-1393343.0290741834,5456331.793439052,3386100.742517333),orientation:{heading:5.876909627704607,pitch:-1.2896948627752063,roll:6.281977273529364}})}}},t=e("JFUb"),n=Object(t.a)(r,(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("section",[e("h1",[s._v("后期处理集合")]),s._v(" "),s._m(0),s._v(" "),e("h2",[s._v("示例")]),s._v(" "),e("h3",[s._v("加载后期处理集合")]),s._v(" "),e("h4",[s._v("预览")]),s._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:s.ready}},[e("vc-collection-stage-process-post",[e("vc-stage-process-post",{attrs:{fragmentShader:s.fsRain}}),s._v(" "),e("vc-stage-process-post",{attrs:{fragmentShader:s.fsScanSegment,uniforms:s.uniforms}})],1)],1)],1)]],2),s._v(" "),e("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),e("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),e("hr"),s._v(" "),e("h2",[s._v("事件")]),s._v(" "),s._m(3)],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("vc-collection-stage-process-post")]),this._v(" 组件用于加载后期处理集合，可以加载多组自定义着色器。注意这个组件将直接替换 "),a("code",{pre:!0},[this._v("scene.postProcessStages")]),this._v("。")])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-stage-process-post")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-stage-process-post")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":fragmentShader")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fsRain"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-stage-process-post")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-stage-process-post")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":fragmentShader")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fsScanSegment"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":uniforms")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"uniforms"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-stage-process-post")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-collection-stage-process-post")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("uniforms")]),s._v(": {},\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fsRain")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`\n            uniform sampler2D colorTexture;\n            varying vec2 v_textureCoordinates;\n            float hash(float x){\n              return fract(sin(x*23.3)*13.13);\n            }\n            void main(void){\n              float time = czm_frameNumber / 60.0;\n              vec2 resolution = czm_viewport.zw;\n              vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\n              vec3 c=vec3(.6,.7,.8);\n              float a=-.4;\n              float si=sin(a),co=cos(a);\n              uv*=mat2(co,-si,si,co);\n              uv*=length(uv+vec2(0,4.9))*.3+1.;\n              float v=1.-sin(hash(floor(uv.x*100.))*2.);\n              float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;\n              c*=v*b;\n              gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c,1), 0.5);\n            }`")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fsScanSegment")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`\n            uniform sampler2D colorTexture;\n            uniform sampler2D depthTexture;\n            varying vec2 v_textureCoordinates;\n            uniform vec4 u_scanCenterEC;\n            uniform vec3 u_scanPlaneNormalEC;\n            uniform float u_radius;\n            uniform vec4 u_scanColor;\n            vec4 toEye(in vec2 uv, in float depth)\n            {\n              vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));\n              vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);\n              posInCamera =posInCamera / posInCamera.w;\n              return posInCamera;\n            }\n            vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point)\n            {\n              vec3 v01 = point -planeOrigin;\n              float d = dot(planeNormal, v01) ;\n              return (point - planeNormal * d);\n            }\n            float getDepth(in vec4 depth)\n            {\n              float z_window = czm_unpackDepth(depth);\n              z_window = czm_reverseLogDepth(z_window);\n              float n_range = czm_depthRange.near;\n              float f_range = czm_depthRange.far;\n              return (2.0 * z_window - n_range - f_range) / (f_range - n_range);\n            }\n            void main()\n            {\n              gl_FragColor = texture2D(colorTexture, v_textureCoordinates);\n              float depth = getDepth( texture2D(depthTexture, v_textureCoordinates));\n              vec4 viewPos = toEye(v_textureCoordinates, depth);\n              vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);\n              float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);\n              if(dis < u_radius)\n              {\n                float f = 1.0 -abs(u_radius - dis) / u_radius;\n                f = pow(f, 4.0);\n                gl_FragColor = mix(gl_FragColor, u_scanColor, f);\n              }\n            }`")]),s._v("\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" scanColor = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Color("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" maxRadius = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50000")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" duration = "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" cartographicCenter = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartographic(Cesium.Math.toRadians("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("103.65")]),s._v("), Cesium.Math.toRadians("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("32.07")]),s._v("), "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2290")]),s._v(" + "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("250")]),s._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _Cartesian3Center = Cesium.Cartographic.toCartesian(cartographicCenter)\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _Cartesian4Center = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian4(_Cartesian3Center.x, _Cartesian3Center.y, _Cartesian3Center.z, "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _CartographicCenter1 = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartographic(\n          cartographicCenter.longitude,\n          cartographicCenter.latitude,\n          cartographicCenter.height + "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v("\n        )\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _Cartesian3Center1 = Cesium.Cartographic.toCartesian(_CartographicCenter1)\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _Cartesian4Center1 = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian4(_Cartesian3Center1.x, _Cartesian3Center1.y, _Cartesian3Center1.z, "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _time = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("().getTime()\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _scratchCartesian4Center = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian4()\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _scratchCartesian4Center1 = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian4()\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" _scratchCartesian3Normal = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3()\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".uniforms = {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("u_scanCenterEC")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)\n          },\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("u_scanPlaneNormalEC")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center)\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1)\n            _scratchCartesian3Normal.x = temp1.x - temp.x\n            _scratchCartesian3Normal.y = temp1.y - temp.y\n            _scratchCartesian3Normal.z = temp1.z - temp.z\n            Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal)\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" _scratchCartesian3Normal\n          },\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("u_radius")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n            "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" (maxRadius * (("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Date")]),s._v("().getTime() - _time) % duration)) / duration\n          },\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("u_scanColor")]),s._v(": scanColor\n        }\n        viewer.camera.setView({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("destination")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-1393343.0290741834")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5456331.793439052")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3386100.742517333")]),s._v("),\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orientation")]),s._v(": {\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5.876909627704607")]),s._v(",\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-1.2896948627752063")]),s._v(",\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6.281977273529364")]),s._v("\n          }\n        })\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[s._v("属性名")]),s._v(" "),e("th",[s._v("类型")]),s._v(" "),e("th",[s._v("默认值")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("stages")]),s._v(" "),e("td",[s._v("Array")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" 指定 PostProcessStage 数组。")])])])])},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[s._v("事件名")]),s._v(" "),e("th",[s._v("参数")]),s._v(" "),e("th",[s._v("描述")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("ready")]),s._v(" "),e("td",[s._v("{Cesium, viewer}")]),s._v(" "),e("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例。")])])])])}],!1,null,null,null);a.default=n.exports}}]);
//# sourceMappingURL=153.80e59d30cdb3bc9ac52e.js.map