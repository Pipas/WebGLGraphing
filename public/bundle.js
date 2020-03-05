/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeGeometry, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DirectionalLightShadow, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FileLoader, FlatShading, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontFaceDirectionCCW, FrontFaceDirectionCW, FrontSide, Frustum, GammaEncoding, Geometry, GeometryUtils, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, LightShadow, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, MathUtils, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColors, NoToneMapping, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, PMREMGenerator, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBAIntegerFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ETC2_EAC_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBIntegerFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_ETC2_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RGFormat, RGIntegerFormat, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RedFormat, RedIntegerFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, SRGB8_ALPHA8_ASTC_10x10_Format, SRGB8_ALPHA8_ASTC_10x5_Format, SRGB8_ALPHA8_ASTC_10x6_Format, SRGB8_ALPHA8_ASTC_10x8_Format, SRGB8_ALPHA8_ASTC_12x10_Format, SRGB8_ALPHA8_ASTC_12x12_Format, SRGB8_ALPHA8_ASTC_4x4_Format, SRGB8_ALPHA8_ASTC_5x4_Format, SRGB8_ALPHA8_ASTC_5x5_Format, SRGB8_ALPHA8_ASTC_6x5_Format, SRGB8_ALPHA8_ASTC_6x6_Format, SRGB8_ALPHA8_ASTC_8x5_Format, SRGB8_ALPHA8_ASTC_8x6_Format, SRGB8_ALPHA8_ASTC_8x8_Format, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SphericalReflectionMapping, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, SpotLightShadow, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uncharted2ToneMapping, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VideoTexture, WebGLCubeRenderTarget, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/graph/axis.ts":
/*!***************************!*\
  !*** ./src/graph/axis.ts ***!
  \***************************/
/*! exports provided: Axis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Axis\", function() { return Axis; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar Axis = /** @class */ (function () {\n    function Axis(graph) {\n        // Step size to draw indicator\n        this.stepSize = 1;\n        // Last drawn indicator\n        this.lastDrawnStep = 0;\n        this.graph = graph;\n        this.buildAxis();\n        this.buildSteps();\n    }\n    Axis.prototype.update = function () {\n        this.buildSteps();\n    };\n    Axis.prototype.buildAxis = function () {\n        this.addLine([new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](-100000, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](100000, 0, 0)]);\n    };\n    Axis.prototype.buildSteps = function () {\n        for (this.lastDrawnStep; this.lastDrawnStep < this.graph.visibleRange.maxX; this.lastDrawnStep += this.stepSize) {\n            this.addStep(this.lastDrawnStep);\n        }\n    };\n    Axis.prototype.addStep = function (x) {\n        this.addLine([new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](x * this.graph.xZoom, 0, 0), new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](x * this.graph.xZoom, -0.5, 0)]);\n    };\n    Axis.prototype.addLine = function (points) {\n        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BufferGeometry\"]().setFromPoints(points);\n        var line = new three__WEBPACK_IMPORTED_MODULE_0__[\"Line\"](geometry, Axis.material);\n        this.graph.scene.add(line);\n    };\n    // Axis line material\n    Axis.material = new three__WEBPACK_IMPORTED_MODULE_0__[\"LineBasicMaterial\"]({ color: 0x000000 });\n    return Axis;\n}());\n\n\n\n//# sourceURL=webpack:///./src/graph/axis.ts?");

/***/ }),

/***/ "./src/graph/graph.ts":
/*!****************************!*\
  !*** ./src/graph/graph.ts ***!
  \****************************/
/*! exports provided: Graph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Graph\", function() { return Graph; });\n/* harmony import */ var _axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axis */ \"./src/graph/axis.ts\");\n/* harmony import */ var _utils_directions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/directions */ \"./src/utils/directions.ts\");\n/* harmony import */ var _models_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/point */ \"./src/models/point.ts\");\n/* harmony import */ var _models_visibleRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/visibleRange */ \"./src/models/visibleRange.ts\");\n/* harmony import */ var _models_graphLine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/graphLine */ \"./src/models/graphLine.ts\");\n\n\n\n\n\nvar Graph = /** @class */ (function () {\n    function Graph(scene, camera, aspectRatio) {\n        this.cameraDistance = 10;\n        this.percentagePadding = 0.1;\n        this.cameraFollow = true;\n        this.scene = scene;\n        this.camera = camera;\n        this.aspectRatio = aspectRatio;\n        this.xZoom = 10;\n        this.yZoom = 1;\n        this.lastPoint = new _models_point__WEBPACK_IMPORTED_MODULE_2__[\"Point\"](0, 0);\n        this.setupCamera();\n    }\n    Graph.prototype.init = function () {\n        this.initTime = (new Date()).getTime();\n        this.setupCamera();\n        this.axis = new _axis__WEBPACK_IMPORTED_MODULE_0__[\"Axis\"](this);\n    };\n    Graph.prototype.setupCamera = function () {\n        this.camera.position.z = this.cameraDistance;\n        // 0 of the graph to be in the start of the camera\n        this.camera.position.x = this.cameraDistance * this.aspectRatio;\n        this.visibleRange = new _models_visibleRange__WEBPACK_IMPORTED_MODULE_3__[\"VisibleRange\"](0, this.cameraDistance * this.aspectRatio * 2 / this.xZoom, -this.cameraDistance * (1 - this.percentagePadding), this.cameraDistance * (1 - this.percentagePadding));\n    };\n    Graph.prototype.moveCamera = function (direction, delta) {\n        if (direction === _utils_directions__WEBPACK_IMPORTED_MODULE_1__[\"directions\"].LEFT) {\n            this.camera.position.x -= delta * this.xZoom;\n            this.visibleRange.maxX -= delta;\n            this.visibleRange.minX -= delta;\n        }\n        else {\n            this.camera.position.x += delta * this.xZoom;\n            this.visibleRange.maxX += delta;\n            this.visibleRange.minX += delta;\n        }\n        this.axis.update();\n    };\n    Graph.prototype.checkUpdateVisibleRange = function (point) {\n        if (point.x > this.visibleRange.maxX) {\n            this.moveCamera(_utils_directions__WEBPACK_IMPORTED_MODULE_1__[\"directions\"].RIGHT, point.x - this.visibleRange.maxX);\n        }\n        if (point.y > this.visibleRange.maxY || point.y < this.visibleRange.minY) {\n            this.updateVerticalScale(point.y);\n        }\n    };\n    Graph.prototype.updateVerticalScale = function (newValue) {\n        this.yZoom = this.cameraDistance * (1 - this.percentagePadding) / Math.abs(newValue);\n        this.visibleRange.minY = -newValue;\n        this.visibleRange.maxY = newValue;\n        this.redrawVisibleLines();\n    };\n    Graph.prototype.redrawVisibleLines = function () {\n        for (var i = 1; i < this.lines.length; i++) {\n            var line = this.lines[i];\n            if (line.isVisible())\n                line.redraw();\n            else\n                line.remove();\n        }\n    };\n    Graph.prototype.toggleCameraFollow = function () {\n        this.cameraFollow = !this.cameraFollow;\n    };\n    Graph.prototype.addPoint = function (value) {\n        var currentTime = (new Date()).getTime();\n        var newPoint = new _models_point__WEBPACK_IMPORTED_MODULE_2__[\"Point\"]((currentTime - this.initTime) / 1000, value);\n        this.lines.push(new _models_graphLine__WEBPACK_IMPORTED_MODULE_4__[\"GraphLine\"](this, this.lastPoint, newPoint));\n        this.lastPoint = newPoint;\n        if (this.lines.length > 2500) {\n            this.lines.shift().remove();\n        }\n        this.checkUpdateVisibleRange(newPoint);\n    };\n    return Graph;\n}());\n\n\n\n//# sourceURL=webpack:///./src/graph/graph.ts?");

/***/ }),

/***/ "./src/graphManager.ts":
/*!*****************************!*\
  !*** ./src/graphManager.ts ***!
  \*****************************/
/*! exports provided: GraphManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GraphManager\", function() { return GraphManager; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _graph_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph/graph */ \"./src/graph/graph.ts\");\n\n\nvar GraphManager = /** @class */ (function () {\n    function GraphManager(canvas) {\n        this.canvas = canvas;\n        this.screenDimensions = {\n            width: canvas.offsetWidth,\n            height: canvas.offsetHeight\n        };\n        this.buildScene();\n        this.buildRender();\n        this.buildCamera();\n        this.graph = new _graph_graph__WEBPACK_IMPORTED_MODULE_1__[\"Graph\"](this.scene, this.camera, this.screenDimensions.width / this.screenDimensions.height);\n    }\n    GraphManager.prototype.buildScene = function () {\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"]('#fff');\n    };\n    GraphManager.prototype.buildRender = function () {\n        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({ canvas: this.canvas });\n        // const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1\n        // renderer.setPixelRatio(DPR)\n        this.renderer.setSize(this.screenDimensions.width, this.screenDimensions.height);\n    };\n    GraphManager.prototype.buildCamera = function () {\n        var aspectRatio = this.screenDimensions.width / this.screenDimensions.height;\n        var fieldOfView = 90;\n        var nearPlane = 1;\n        var farPlane = 1000;\n        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](fieldOfView, aspectRatio, nearPlane, farPlane);\n    };\n    GraphManager.prototype.addPoint = function (value) {\n        this.graph.addPoint(value);\n    };\n    GraphManager.prototype.initGraph = function () {\n        this.graph.init();\n    };\n    GraphManager.prototype.update = function () {\n        this.renderer.render(this.scene, this.camera);\n    };\n    GraphManager.prototype.onWindowResize = function () {\n        // const { offsetWidth, offsetHeight } = canvas\n        // screenDimensions.width = offsetWidth\n        // screenDimensions.height = offsetHeight\n        // camera.aspect = offsetWidth / offsetHeight\n        // camera.updateProjectionMatrix()\n        // renderer.setSize(offsetWidth, offsetHeight)\n    };\n    return GraphManager;\n}());\n\n\n\n//# sourceURL=webpack:///./src/graphManager.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphManager */ \"./src/graphManager.ts\");\n\nvar interval;\nvar graphManager;\nvar x = 0;\nvar val = 0;\nfunction toggleValues() {\n    if (interval) {\n        clearInterval(interval);\n        interval = null;\n    }\n    else {\n        interval = setInterval(function () {\n            x += 1;\n            graphManager.addPoint(val);\n            if (x > 100) {\n                val += 4;\n                x = 0;\n                console.log('val: ' + val);\n            }\n        }, 1);\n    }\n}\nfunction resizeCanvas() {\n    graphManager.onWindowResize();\n}\nfunction bindEventListeners() {\n    window.onresize = resizeCanvas;\n    document.getElementById('toggle').addEventListener('click', toggleValues);\n    resizeCanvas();\n}\nfunction render() {\n    requestAnimationFrame(render);\n    graphManager.update();\n}\nwindow.onload = function () {\n    var canvas = document.getElementById('canvas');\n    graphManager = new _graphManager__WEBPACK_IMPORTED_MODULE_0__[\"GraphManager\"](canvas);\n    bindEventListeners();\n    render();\n    graphManager.initGraph();\n    toggleValues();\n};\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/models/graphLine.ts":
/*!*********************************!*\
  !*** ./src/models/graphLine.ts ***!
  \*********************************/
/*! exports provided: GraphLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GraphLine\", function() { return GraphLine; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar GraphLine = /** @class */ (function () {\n    function GraphLine(graph, startPoint, endPoint) {\n        this.graph = graph;\n        this.startPoint = startPoint;\n        this.endPoint = endPoint;\n        this.draw();\n    }\n    GraphLine.prototype.isVisible = function () {\n        return this.graph.visibleRange.contains(this.startPoint) || this.graph.visibleRange.contains(this.endPoint);\n    };\n    GraphLine.prototype.draw = function () {\n        var firstPoint = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](this.startPoint.x * this.graph.xZoom, this.startPoint.y * this.graph.yZoom, 0);\n        var secondPoint = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](this.endPoint.x * this.graph.xZoom, this.startPoint.y * this.graph.yZoom, 0);\n        var geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BufferGeometry\"]().setFromPoints([firstPoint, secondPoint]);\n        this.object = new three__WEBPACK_IMPORTED_MODULE_0__[\"Line\"](geometry, GraphLine.material);\n        this.graph.scene.add(this.object);\n    };\n    GraphLine.prototype.remove = function () {\n        this.graph.scene.remove(this.object);\n    };\n    GraphLine.prototype.redraw = function () {\n        this.remove();\n        this.draw();\n    };\n    GraphLine.material = new three__WEBPACK_IMPORTED_MODULE_0__[\"LineBasicMaterial\"]({ color: 0x000000 });\n    return GraphLine;\n}());\n\n\n\n//# sourceURL=webpack:///./src/models/graphLine.ts?");

/***/ }),

/***/ "./src/models/point.ts":
/*!*****************************!*\
  !*** ./src/models/point.ts ***!
  \*****************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Point\", function() { return Point; });\nvar Point = /** @class */ (function () {\n    function Point(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    return Point;\n}());\n\n\n\n//# sourceURL=webpack:///./src/models/point.ts?");

/***/ }),

/***/ "./src/models/visibleRange.ts":
/*!************************************!*\
  !*** ./src/models/visibleRange.ts ***!
  \************************************/
/*! exports provided: VisibleRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VisibleRange\", function() { return VisibleRange; });\nvar VisibleRange = /** @class */ (function () {\n    function VisibleRange(minX, maxX, minY, maxY) {\n        this.minX = minX;\n        this.maxX = maxX;\n        this.minY = minY;\n        this.maxY = maxY;\n    }\n    VisibleRange.prototype.contains = function (point) {\n        return (this.minX <= point.x && this.maxX >= point.x && this.minY <= point.y && this.maxY >= point.y);\n    };\n    return VisibleRange;\n}());\n\n\n\n//# sourceURL=webpack:///./src/models/visibleRange.ts?");

/***/ }),

/***/ "./src/utils/directions.ts":
/*!*********************************!*\
  !*** ./src/utils/directions.ts ***!
  \*********************************/
/*! exports provided: directions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"directions\", function() { return directions; });\nvar directions;\n(function (directions) {\n    directions[directions[\"UP\"] = 0] = \"UP\";\n    directions[directions[\"DOWN\"] = 1] = \"DOWN\";\n    directions[directions[\"LEFT\"] = 2] = \"LEFT\";\n    directions[directions[\"RIGHT\"] = 3] = \"RIGHT\";\n})(directions || (directions = {}));\n\n\n//# sourceURL=webpack:///./src/utils/directions.ts?");

/***/ })

/******/ });