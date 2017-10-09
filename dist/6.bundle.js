webpackJsonp([6],{

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(49)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(62),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/wangbaogui/wbg/mycat/app/views/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-689fc47e", Component.options)
  } else {
    hotAPI.reload("data-v-689fc47e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".box{padding-bottom:0; box-shadow: 1px 3px 5px #ccc;background: #fff;}\n.mint-swipe,.mint-swipe-items-wrap{overflow:hidden;position:relative;height:100%}\n.mint-swipe-items-wrap>div{position:absolute;-webkit-transform:translateX(-100%);\ntransform:translateX(-100%);width:100%;height:auto;display:none}\n.mint-swipe-items-wrap>div.is-active{display:block;-webkit-transform:none;transform:none}\n.mint-swipe-indicators{position:absolute;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n.mint-swipe-indicator{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2;margin:0 3px}\n.mint-swipe-indicator.is-active{background:#fff}\n.my-swipe {\n    height: 20rem;\n    color: #fff;\n    font-size: 30px;\n    text-align: center;\n    background: #fff;\n}\n.my-swipe a{\n    display: block;\n    width:100%;\n    height: auto\n}\n.my-swipe a img{\n    display: block;\n    width: 100%;\n    /* height: 15rem; */\n    margin: 0 auto;\n}\n\n.home-list{\n    width: 100%;\n    background: #fff;\n    height: 1rem;\n    padding: .5rem 0;\n    margin: .3rem 0;\n    color: #a6b1b0;\n    text-shadow: 2px 2px 2px #ccc;\n    overflow: hidden;\n    box-shadow:0 0 2px 2px #ccc;\n}\n.home-list ul{\n    width: 100%;\n    height: auto;\n}\n.home-list ul.list-ul{\n    animation:mymove 20s linear infinite;\n    -webkit-animation:mymove 20s linear infinite;\n}\n.home-ul{\n    width: 100%;\n    min-height: 18rem;\n    background: #fff;\n}\n\n@keyframes mymove {\n    0%{\n        transform: translateY(0%)\n    }\n\n    100%{\n       transform: translateY(-95%) \n    }\n}\n@-webkit-keyframes mymove {\n    0%{\n        transform: translateY(0%)\n    }\n\n    100%{\n       transform: translateY(-95%) \n    }\n}\n.home-list ul li{\n    height: 2rem;\n    line-height: 2rem;\n    text-overflow:ellipsis;\n    white-space:nowrap;\n    overflow:hidden;\n    text-indent: 1rem;\n    color: #a6b1b0;\n}", ""]);

// exports


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./home.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./home.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


__webpack_require__(52);

var homeData = {

    bannerList: []

};

exports.default = {
    name: "app",
    data: function data() {
        return homeData;
    },
    created: function created() {
        var _this = this;
        var $this = this.$parent;

        $this.com_Ajax({
            method: 'get',
            url: './app/data/list.json'
        }, function (data) {

            _this.bannerList = data.data.banner;
        }, function (data) {

            console.log(data);
        });
    }

};

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('my-top', {
    attrs: {
      "top-show": _vm.topshow
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "home"
  }, [_c('swipe', {
    staticClass: "my-swipe"
  }, _vm._l((_vm.bannerList), function(item) {
    return _c('swipe-item', {
      key: item.$index
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: 'detail',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('img', {
      attrs: {
        "src": item.imgUrl
      }
    })])], 1)
  }))], 1)]), _vm._v(" "), _c('my-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-689fc47e", module.exports)
  }
}

/***/ })

});