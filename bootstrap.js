/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/rpgbe_bg.wasm": function() {
/******/ 			return {
/******/ 				"./rpgbe_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_42f092928baaee84": function(p0i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_instanceof_Window_42f092928baaee84"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_15b2e504fb1556d6": function(p0i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_document_15b2e504fb1556d6"](p0i32);
/******/ 					},
/******/ 					"__wbg_getElementById_927eae2597d26692": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_getElementById_927eae2597d26692"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlCanvasElement_9f56aef8c479066b": function(p0i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_instanceof_HtmlCanvasElement_9f56aef8c479066b"](p0i32);
/******/ 					},
/******/ 					"__wbg_getContext_efe7e95b72348104": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_getContext_efe7e95b72348104"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_copyToChannel_960b01b15d78c9c3": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_copyToChannel_960b01b15d78c9c3"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_instanceof_CanvasRenderingContext2d_10bb8c4425aab773": function(p0i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_instanceof_CanvasRenderingContext2d_10bb8c4425aab773"](p0i32);
/******/ 					},
/******/ 					"__wbg_putImageData_b6835d76d1cb45dd": function(p0i32,p1i32,p2f64,p3f64) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_putImageData_b6835d76d1cb45dd"](p0i32,p1i32,p2f64,p3f64);
/******/ 					},
/******/ 					"__wbg_connect_fad7fe6381e416de": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_connect_fad7fe6381e416de"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setbuffer_63ab27d5f9282677": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_setbuffer_63ab27d5f9282677"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_start_d4b18f4cde9f64a2": function(p0i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_start_d4b18f4cde9f64a2"](p0i32);
/******/ 					},
/******/ 					"__wbg_destination_4ef0618e5a74b95f": function(p0i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_destination_4ef0618e5a74b95f"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_a1cb1513a646f9fb": function() {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_new_a1cb1513a646f9fb"]();
/******/ 					},
/******/ 					"__wbg_createBuffer_5a0b67de11ed0664": function(p0i32,p1i32,p2i32,p3f32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_createBuffer_5a0b67de11ed0664"](p0i32,p1i32,p2i32,p3f32);
/******/ 					},
/******/ 					"__wbg_createBufferSource_4aff461e0681922a": function(p0i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_createBufferSource_4aff461e0681922a"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithu8clampedarrayandsh_67cfbae8df523bed": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_newwithu8clampedarrayandsh_67cfbae8df523bed"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_971e9a5abe185139": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_newnoargs_971e9a5abe185139"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_33d7bcddbbfa394a": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_call_33d7bcddbbfa394a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_self_fd00a1ef86d1b2ed": function() {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_self_fd00a1ef86d1b2ed"]();
/******/ 					},
/******/ 					"__wbg_window_6f6e346d8bbd61d7": function() {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_window_6f6e346d8bbd61d7"]();
/******/ 					},
/******/ 					"__wbg_globalThis_3348936ac49df00a": function() {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_globalThis_3348936ac49df00a"]();
/******/ 					},
/******/ 					"__wbg_global_67175caf56f55ca9": function() {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_global_67175caf56f55ca9"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_34f5ec9f8a838ba0": function(p0i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_buffer_34f5ec9f8a838ba0"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_cda198d9dbc6d7ea": function(p0i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_new_cda198d9dbc6d7ea"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_1a930cfcda1a8067": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_set_1a930cfcda1a8067"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_51f19f73d6d9eff3": function(p0i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbg_length_51f19f73d6d9eff3"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["../pkg/rpgbe_bg.js"].exports["__wbindgen_memory"]();
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/rpgbe_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/rpgbe_bg.wasm":"6982deeab5e80cefa0db"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });