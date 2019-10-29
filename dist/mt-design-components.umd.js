(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react-dom'), require('@material-ui/core'), require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react-dom', '@material-ui/core', 'react'], factory) :
    (factory((global.index = global.index || {}, global.index.ts = {}),global.ReactDOM,global.core,global.React));
}(this, (function (exports,ReactDOM,core,React) { 'use strict';

    ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
    var React__default = 'default' in React ? React['default'] : React;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    var getAppendAttributeValues = function (append) {
        var appenderString = (append) ? " " + append : "";
        return appenderString;
    };

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css = ".button-group {\n    position: relative;\n    display: inline-block;\n    font-size: 0;\n    white-space: nowrap;\n    vertical-align: middle;\n}\n\n.button-group+.button-group {\n    margin-left: 5px;\n}\n\n.button-group>.button {\n    position: relative;\n    border-radius: 0;\n}\n\n.button-group>.button+.button {\n    margin-left: -1px;\n}\n\n.button-group>.button:first-child {\n    margin-left: 0;\n    border-bottom-left-radius: 4px;\n    border-top-left-radius: 4px;\n}\n\n.button-group>.button:last-child {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n\n.button-group>.button:hover,\n.button-group>.button:focus,\n.button-group>.button:active {\n    z-index: 2;\n}\n\n.button-group>.button:active,\n.button-group>.button.active {\n    outline: 0;\n    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n";
    styleInject(css);

    var ButtonGroup = function (props) {
        var className = props.className, children = props.children, rest = __rest(props, ["className", "children"]);
        // preserve given class value/s by tacking them onto our guaranteed class/s
        var givenClasses = getAppendAttributeValues(props.className);
        return (React__default.createElement("div", __assign({ className: "button-group" + givenClasses }, rest), children));
    };

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }

      return target;
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var reactIs_production_min = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports,"__esModule",{value:!0});
    var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
    60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118;function x(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function y(a){return x(a)===m}exports.typeOf=x;exports.AsyncMode=l;
    exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
    exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w)};exports.isAsyncMode=function(a){return y(a)||x(a)===l};exports.isConcurrentMode=y;exports.isContextConsumer=function(a){return x(a)===k};exports.isContextProvider=function(a){return x(a)===h};
    exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return x(a)===n};exports.isFragment=function(a){return x(a)===e};exports.isLazy=function(a){return x(a)===t};exports.isMemo=function(a){return x(a)===r};exports.isPortal=function(a){return x(a)===d};exports.isProfiler=function(a){return x(a)===g};exports.isStrictMode=function(a){return x(a)===f};exports.isSuspense=function(a){return x(a)===p};
    });

    unwrapExports(reactIs_production_min);
    var reactIs_production_min_1 = reactIs_production_min.typeOf;
    var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
    var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
    var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
    var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
    var reactIs_production_min_6 = reactIs_production_min.Element;
    var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
    var reactIs_production_min_8 = reactIs_production_min.Fragment;
    var reactIs_production_min_9 = reactIs_production_min.Lazy;
    var reactIs_production_min_10 = reactIs_production_min.Memo;
    var reactIs_production_min_11 = reactIs_production_min.Portal;
    var reactIs_production_min_12 = reactIs_production_min.Profiler;
    var reactIs_production_min_13 = reactIs_production_min.StrictMode;
    var reactIs_production_min_14 = reactIs_production_min.Suspense;
    var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
    var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
    var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
    var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
    var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
    var reactIs_production_min_20 = reactIs_production_min.isElement;
    var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
    var reactIs_production_min_22 = reactIs_production_min.isFragment;
    var reactIs_production_min_23 = reactIs_production_min.isLazy;
    var reactIs_production_min_24 = reactIs_production_min.isMemo;
    var reactIs_production_min_25 = reactIs_production_min.isPortal;
    var reactIs_production_min_26 = reactIs_production_min.isProfiler;
    var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
    var reactIs_production_min_28 = reactIs_production_min.isSuspense;

    var reactIs_development = createCommonjsModule(function (module, exports) {



    if (process.env.NODE_ENV !== "production") {
      (function() {

    Object.defineProperty(exports, '__esModule', { value: true });

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;

    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
    // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' ||
      // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
    }

    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var lowPriorityWarning = function () {};

    {
      var printWarning = function (format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.warn(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function (condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }

    var lowPriorityWarning$1 = lowPriorityWarning;

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;
              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;
                  default:
                    return $$typeof;
                }
            }
          case REACT_LAZY_TYPE:
          case REACT_MEMO_TYPE:
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    }

    // AsyncMode is deprecated along with isAsyncMode
    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;

    var hasWarnedAboutDeprecatedIsAsyncMode = false;

    // AsyncMode should be deprecated
    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.typeOf = typeOf;
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isValidElementType = isValidElementType;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
      })();
    }
    });

    unwrapExports(reactIs_development);
    var reactIs_development_1 = reactIs_development.typeOf;
    var reactIs_development_2 = reactIs_development.AsyncMode;
    var reactIs_development_3 = reactIs_development.ConcurrentMode;
    var reactIs_development_4 = reactIs_development.ContextConsumer;
    var reactIs_development_5 = reactIs_development.ContextProvider;
    var reactIs_development_6 = reactIs_development.Element;
    var reactIs_development_7 = reactIs_development.ForwardRef;
    var reactIs_development_8 = reactIs_development.Fragment;
    var reactIs_development_9 = reactIs_development.Lazy;
    var reactIs_development_10 = reactIs_development.Memo;
    var reactIs_development_11 = reactIs_development.Portal;
    var reactIs_development_12 = reactIs_development.Profiler;
    var reactIs_development_13 = reactIs_development.StrictMode;
    var reactIs_development_14 = reactIs_development.Suspense;
    var reactIs_development_15 = reactIs_development.isValidElementType;
    var reactIs_development_16 = reactIs_development.isAsyncMode;
    var reactIs_development_17 = reactIs_development.isConcurrentMode;
    var reactIs_development_18 = reactIs_development.isContextConsumer;
    var reactIs_development_19 = reactIs_development.isContextProvider;
    var reactIs_development_20 = reactIs_development.isElement;
    var reactIs_development_21 = reactIs_development.isForwardRef;
    var reactIs_development_22 = reactIs_development.isFragment;
    var reactIs_development_23 = reactIs_development.isLazy;
    var reactIs_development_24 = reactIs_development.isMemo;
    var reactIs_development_25 = reactIs_development.isPortal;
    var reactIs_development_26 = reactIs_development.isProfiler;
    var reactIs_development_27 = reactIs_development.isStrictMode;
    var reactIs_development_28 = reactIs_development.isSuspense;

    var reactIs = createCommonjsModule(function (module) {

    if (process.env.NODE_ENV === 'production') {
      module.exports = reactIs_production_min;
    } else {
      module.exports = reactIs_development;
    }
    });
    var reactIs_1 = reactIs.isElement;
    var reactIs_2 = reactIs.isValidElementType;
    var reactIs_3 = reactIs.ForwardRef;

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
    	if (val === null || val === undefined) {
    		throw new TypeError('Object.assign cannot be called with null or undefined');
    	}

    	return Object(val);
    }

    function shouldUseNative() {
    	try {
    		if (!Object.assign) {
    			return false;
    		}

    		// Detect buggy property enumeration order in older V8 versions.

    		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
    		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
    		test1[5] = 'de';
    		if (Object.getOwnPropertyNames(test1)[0] === '5') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test2 = {};
    		for (var i = 0; i < 10; i++) {
    			test2['_' + String.fromCharCode(i)] = i;
    		}
    		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
    			return test2[n];
    		});
    		if (order2.join('') !== '0123456789') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test3 = {};
    		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
    			test3[letter] = letter;
    		});
    		if (Object.keys(Object.assign({}, test3)).join('') !==
    				'abcdefghijklmnopqrst') {
    			return false;
    		}

    		return true;
    	} catch (err) {
    		// We don't expect any of the above to throw, but better to be safe.
    		return false;
    	}
    }

    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    	var from;
    	var to = toObject(target);
    	var symbols;

    	for (var s = 1; s < arguments.length; s++) {
    		from = Object(arguments[s]);

    		for (var key in from) {
    			if (hasOwnProperty.call(from, key)) {
    				to[key] = from[key];
    			}
    		}

    		if (getOwnPropertySymbols) {
    			symbols = getOwnPropertySymbols(from);
    			for (var i = 0; i < symbols.length; i++) {
    				if (propIsEnumerable.call(from, symbols[i])) {
    					to[symbols[i]] = from[symbols[i]];
    				}
    			}
    		}
    	}

    	return to;
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

    var ReactPropTypesSecret_1 = ReactPropTypesSecret;

    var printWarning = function() {};

    if (process.env.NODE_ENV !== 'production') {
      var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
      var loggedTypeFailures = {};
      var has = Function.call.bind(Object.prototype.hasOwnProperty);

      printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }

    /**
     * Assert that the values match with the type specs.
     * Error messages are memorized and will only be shown once.
     *
     * @param {object} typeSpecs Map of name to a ReactPropType
     * @param {object} values Runtime values that need to be type-checked
     * @param {string} location e.g. "prop", "context", "child context"
     * @param {string} componentName Name of the component for error messages.
     * @param {?Function} getStack Returns the component stack.
     * @private
     */
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (process.env.NODE_ENV !== 'production') {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error(
                  (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
                );
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || 'React class') + ': type specification of ' +
                location + ' `' + typeSpecName + '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error.message] = true;

              var stack = getStack ? getStack() : '';

              printWarning(
                'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
              );
            }
          }
        }
      }
    }

    /**
     * Resets warning cache when testing.
     *
     * @private
     */
    checkPropTypes.resetWarningCache = function() {
      if (process.env.NODE_ENV !== 'production') {
        loggedTypeFailures = {};
      }
    };

    var checkPropTypes_1 = checkPropTypes;

    var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
    var printWarning$1 = function() {};

    if (process.env.NODE_ENV !== 'production') {
      printWarning$1 = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }

    function emptyFunctionThatReturnsNull() {
      return null;
    }

    var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
      /* global Symbol */
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

      /**
       * Returns the iterator method function contained on the iterable object.
       *
       * Be sure to invoke the function with the iterable as context:
       *
       *     var iteratorFn = getIteratorFn(myIterable);
       *     if (iteratorFn) {
       *       var iterator = iteratorFn.call(myIterable);
       *       ...
       *     }
       *
       * @param {?object} maybeIterable
       * @return {?function}
       */
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }

      /**
       * Collection of methods that allow declaration and validation of props that are
       * supplied to React components. Example usage:
       *
       *   var Props = require('ReactPropTypes');
       *   var MyArticle = React.createClass({
       *     propTypes: {
       *       // An optional string prop named "description".
       *       description: Props.string,
       *
       *       // A required enum prop named "category".
       *       category: Props.oneOf(['News','Photos']).isRequired,
       *
       *       // A prop named "dialog" that requires an instance of Dialog.
       *       dialog: Props.instanceOf(Dialog).isRequired
       *     },
       *     render: function() { ... }
       *   });
       *
       * A more formal specification of how these methods are used:
       *
       *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
       *   decl := ReactPropTypes.{type}(.isRequired)?
       *
       * Each and every declaration produces a function with the same signature. This
       * allows the creation of custom validation functions. For example:
       *
       *  var MyLink = React.createClass({
       *    propTypes: {
       *      // An optional string or URI prop named "href".
       *      href: function(props, propName, componentName) {
       *        var propValue = props[propName];
       *        if (propValue != null && typeof propValue !== 'string' &&
       *            !(propValue instanceof URI)) {
       *          return new Error(
       *            'Expected a string or an URI for ' + propName + ' in ' +
       *            componentName
       *          );
       *        }
       *      }
       *    },
       *    render: function() {...}
       *  });
       *
       * @internal
       */

      var ANONYMOUS = '<<anonymous>>';

      // Important!
      // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),

        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
      };

      /**
       * inlined Object.is polyfill to avoid requiring consumers ship their own
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
       */
      /*eslint-disable no-self-compare*/
      function is(x, y) {
        // SameValue algorithm
        if (x === y) {
          // Steps 1-5, 7-10
          // Steps 6.b-6.e: +0 != -0
          return x !== 0 || 1 / x === 1 / y;
        } else {
          // Step 6.a: NaN == NaN
          return x !== x && y !== y;
        }
      }
      /*eslint-enable no-self-compare*/

      /**
       * We use an Error-like object for backward compatibility as people may call
       * PropTypes directly and inspect their output. However, we don't use real
       * Errors anymore. We don't inspect their stack anyway, and creating them
       * is prohibitively expensive if they are created too often, such as what
       * happens in oneOfType() for any type before the one that matched.
       */
      function PropTypeError(message) {
        this.message = message;
        this.stack = '';
      }
      // Make `instanceof Error` still work for returned errors.
      PropTypeError.prototype = Error.prototype;

      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== 'production') {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;

          if (secret !== ReactPropTypesSecret_1) {
            if (throwOnDirectAccess) {
              // New behavior only for users of `prop-types` package
              var err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
              );
              err.name = 'Invariant Violation';
              throw err;
            } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
              // Old behavior for people using React.PropTypes
              var cacheKey = componentName + ':' + propName;
              if (
                !manualPropTypeCallCache[cacheKey] &&
                // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3
              ) {
                printWarning$1(
                  'You are manually calling a React.PropTypes validation ' +
                  'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
              }
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }

        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);

        return chainedCheckType;
      }

      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            // `propValue` being instance of, say, date/regexp, pass the 'object'
            // check, but we can offer a more precise error message here rather than
            // 'of type `object`'.
            var preciseType = getPreciseType(propValue);

            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }

      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!reactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (process.env.NODE_ENV !== 'production') {
            if (arguments.length > 1) {
              printWarning$1(
                'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
                'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
              );
            } else {
              printWarning$1('Invalid argument supplied to oneOf, expected an array.');
            }
          }
          return emptyFunctionThatReturnsNull;
        }

        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }

          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === 'symbol') {
              return String(value);
            }
            return value;
          });
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
          }
          for (var key in propValue) {
            if (has$1(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
          return emptyFunctionThatReturnsNull;
        }

        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning$1(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
            );
            return emptyFunctionThatReturnsNull;
          }
        }

        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
              return null;
            }
          }

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
        }
        return createChainableTypeChecker(validate);
      }

      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }

      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          // We need to check all keys in case some are required but missing from
          // props.
          var allKeys = objectAssign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError(
                'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
                '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }

        return createChainableTypeChecker(validate);
      }

      function isNode(propValue) {
        switch (typeof propValue) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }

            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                // Iterator will provide entry [k,v] tuples rather than values.
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }

            return true;
          default:
            return false;
        }
      }

      function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
          return true;
        }

        // falsy value can't be a Symbol
        if (!propValue) {
          return false;
        }

        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }

        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }

        return false;
      }

      // Equivalent of `typeof` but with special handling for array and regexp.
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          // Old webkits (at least until Android 4.0) return 'function' rather than
          // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
          // passes PropTypes.object.
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }

      // This handles more types than `getPropType`. Only used for error messages.
      // See `createPrimitiveTypeChecker`.
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }

      // Returns a string that is postfixed to a warning about an invalid type.
      // For example, "undefined" or "of type array"
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }

      // Returns class name of the object, if any.
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }

      ReactPropTypes.checkPropTypes = checkPropTypes_1;
      ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;

      return ReactPropTypes;
    };

    function emptyFunction() {}
    function emptyFunctionWithReset() {}
    emptyFunctionWithReset.resetWarningCache = emptyFunction;

    var factoryWithThrowingShims = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret_1) {
          // It is still safe when called from React.
          return;
        }
        var err = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use PropTypes.checkPropTypes() to call them. ' +
          'Read more at http://fb.me/use-check-prop-types'
        );
        err.name = 'Invariant Violation';
        throw err;
      }  shim.isRequired = shim;
      function getShim() {
        return shim;
      }  // Important!
      // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
      var ReactPropTypes = {
        array: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,

        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,

        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };

      ReactPropTypes.PropTypes = ReactPropTypes;

      return ReactPropTypes;
    };

    var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    if (process.env.NODE_ENV !== 'production') {
      var ReactIs = reactIs;

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
    } else {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = factoryWithThrowingShims();
    }
    });
    var propTypes_1 = propTypes.elementType;

    function toVal(mix) {
    	var k, y, str='';
    	if (mix) {
    		if (typeof mix === 'object') {
    			if (!!mix.push) {
    				for (k=0; k < mix.length; k++) {
    					if (mix[k] && (y = toVal(mix[k]))) {
    						str && (str += ' ');
    						str += y;
    					}
    				}
    			} else {
    				for (k in mix) {
    					if (mix[k] && (y = toVal(k))) {
    						str && (str += ' ');
    						str += y;
    					}
    				}
    			}
    		} else if (typeof mix !== 'boolean' && !mix.call) {
    			str && (str += ' ');
    			str += mix;
    		}
    	}
    	return str;
    }

    function clsx () {
    	var i=0, x, str='';
    	while (i < arguments.length) {
    		if (x = toVal(arguments[i++])) {
    			str && (str += ' ');
    			str += x;
    		}
    	}
    	return str;
    }

    function chainPropTypes(propType1, propType2) {
      if (process.env.NODE_ENV === 'production') {
        return function () {
          return null;
        };
      }

      return function validate() {
        return propType1.apply(void 0, arguments) || propType2.apply(void 0, arguments);
      };
    }

    function isClassComponent(elementType) {
      // elementType.prototype?.isReactComponent
      var _elementType$prototyp = elementType.prototype,
          prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
      return Boolean(prototype.isReactComponent);
    }

    function acceptingRef(props, propName, componentName, location, propFullName) {
      var element = props[propName];
      var safePropName = propFullName || propName;

      if (element == null) {
        return null;
      }

      var warningHint;
      var elementType = element.type;
      /**
       * Blacklisting instead of whitelisting
       *
       * Blacklisting will miss some components, such as React.Fragment. Those will at least
       * trigger a warning in React.
       * We can't whitelist because there is no safe way to detect React.forwardRef
       * or class components. "Safe" means there's no public API.
       *
       */

      if (typeof elementType === 'function' && !isClassComponent(elementType)) {
        warningHint = 'Did you accidentally use a plain function component for an element instead?';
      }

      if (warningHint !== undefined) {
        return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
      }

      return null;
    }

    var elementAcceptingRef = chainPropTypes(propTypes.element, acceptingRef);
    elementAcceptingRef.isRequired = chainPropTypes(propTypes.element.isRequired, acceptingRef);

    function isClassComponent$1(elementType) {
      // elementType.prototype?.isReactComponent
      var _elementType$prototyp = elementType.prototype,
          prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
      return Boolean(prototype.isReactComponent);
    }

    function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var safePropName = propFullName || propName;

      if (propValue == null) {
        return null;
      }

      var warningHint;
      /**
       * Blacklisting instead of whitelisting
       *
       * Blacklisting will miss some components, such as React.Fragment. Those will at least
       * trigger a warning in React.
       * We can't whitelist because there is no safe way to detect React.forwardRef
       * or class components. "Safe" means there's no public API.
       *
       */

      if (typeof propValue === 'function' && !isClassComponent$1(propValue)) {
        warningHint = 'Did you accidentally provide a plain function component instead?';
      }

      if (warningHint !== undefined) {
        return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element type that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
      }

      return null;
    }

    var elementTypeAcceptingRef$1 = chainPropTypes(propTypes_1, elementTypeAcceptingRef);

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    // This module is based on https://github.com/airbnb/prop-types-exact repository.
    // However, in order to reduce the number of dependencies and to remove some extra safe checks
    // the module was forked.
    // Only exported for test purposes.
    var specialProperty = "exact-prop: \u200B";
    function exactProp(propTypes) {
      if (process.env.NODE_ENV === 'production') {
        return propTypes;
      }

      return _extends({}, propTypes, _defineProperty({}, specialProperty, function (props) {
        var unsupportedProps = Object.keys(props).filter(function (prop) {
          return !propTypes.hasOwnProperty(prop);
        });

        if (unsupportedProps.length > 0) {
          return new Error("The following props are not supported: ".concat(unsupportedProps.map(function (prop) {
            return "`".concat(prop, "`");
          }).join(', '), ". Please remove them."));
        }

        return null;
      }));
    }

    function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    // https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3

    var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
    function getFunctionName(fn) {
      var match = "".concat(fn).match(fnNameMatchRegex);
      var name = match && match[1];
      return name || '';
    }
    /**
     * @param {function} Component
     * @param {string} fallback
     * @returns {string | undefined}
     */

    function getFunctionComponentName(Component) {
      var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return Component.displayName || Component.name || getFunctionName(Component) || fallback;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = getFunctionComponentName(innerType);
      return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
    }
    /**
     * cherry-pick from
     * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
     * originally forked from recompose/getDisplayName with added IE 11 support
     *
     * @param {React.ReactType} Component
     * @returns {string | undefined}
     */


    function getDisplayName(Component) {
      if (Component == null) {
        return undefined;
      }

      if (typeof Component === 'string') {
        return Component;
      }

      if (typeof Component === 'function') {
        return getFunctionComponentName(Component, 'Component');
      }

      if (_typeof(Component) === 'object') {
        switch (Component.$$typeof) {
          case reactIs_3:
            return getWrappedName(Component, Component.render, 'ForwardRef');

          default:
            return undefined;
        }
      }

      return undefined;
    }

    /* eslint-disable */
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var ponyfillGlobal = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

    var refType = propTypes.oneOfType([propTypes.func, propTypes.PropTypes.object]);

    /** @license Material-UI v4.4.0
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

    /**
     * This is the list of the style rule name we use as drop in replacement for the built-in
     * pseudo classes (:checked, :disabled, :focused, etc.).
     *
     * Why do they exist in the first place?
     * These classes are used at a specificity of 2.
     * It allows them to override previously definied styles as well as
     * being untouched by simple user overrides.
     */

    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
    // When new generator function is created, rule counter is reset.
    // We need to reset the rule counter for SSR for each request.
    //
    // It's inspired by
    // https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

    function createGenerateClassName() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _options$disableGloba = options.disableGlobal,
          disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
          _options$productionPr = options.productionPrefix,
          productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
          _options$seed = options.seed,
          seed = _options$seed === void 0 ? '' : _options$seed;
      var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
      var ruleCounter = 0;
      return function (rule, styleSheet) {
        ruleCounter += 1;

        if (process.env.NODE_ENV !== 'production') {
          if (ruleCounter >= 1e10) {
            console.warn(['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join(''));
          }
        }

        var name = styleSheet.options.name; // Is a global static MUI style?

        if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
          // We can use a shorthand class name, we never use the keys to style the components.
          if (pseudoClasses.indexOf(rule.key) !== -1) {
            return "Mui-".concat(rule.key);
          }

          var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

          if (!styleSheet.options.theme[nested] || seed !== '') {
            return prefix;
          }

          return "".concat(prefix, "-").concat(ruleCounter);
        }

        if (process.env.NODE_ENV === 'production') {
          return "".concat(seedPrefix).concat(productionPrefix).concat(ruleCounter);
        }

        var suffix = "".concat(rule.key, "-").concat(ruleCounter); // Help with debuggability.

        if (styleSheet.options.classNamePrefix) {
          return "".concat(seedPrefix).concat(styleSheet.options.classNamePrefix, "-").concat(suffix);
        }

        return "".concat(seedPrefix).concat(suffix);
      };
    }

    /* eslint-disable no-restricted-syntax */
    function getThemeProps(params) {
      var theme = params.theme,
          name = params.name,
          props = params.props;

      if (!theme || !theme.props || !theme.props[name]) {
        return props;
      } // Resolve default props, code borrow from React source.
      // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


      var defaultProps = theme.props[name];
      var propName;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }

      return props;
    }

    var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof$1(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof$1(document)) === 'object' && document.nodeType === 9;

    var isProduction = process.env.NODE_ENV === 'production';
    function warning(condition, message) {
      if (!isProduction) {
        if (condition) {
          return;
        }

        var text = "Warning: " + message;

        if (typeof console !== 'undefined') {
          console.warn(text);
        }

        try {
          throw Error(text);
        } catch (x) {}
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    var plainObjectConstrurctor = {}.constructor;
    function cloneStyle(style) {
      if (style == null || typeof style !== 'object') return style;
      if (Array.isArray(style)) return style.map(cloneStyle);
      if (style.constructor !== plainObjectConstrurctor) return style;
      var newStyle = {};

      for (var name in style) {
        newStyle[name] = cloneStyle(style[name]);
      }

      return newStyle;
    }

    /**
     * Create a rule instance.
     */

    function createRule(name, decl, options) {
      if (name === void 0) {
        name = 'unnamed';
      }

      var jss = options.jss;
      var declCopy = cloneStyle(decl);
      var rule = jss.plugins.onCreateRule(name, declCopy, options);
      if (rule) return rule; // It is an at-rule and it has no instance.

      if (name[0] === '@') {
        process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Unknown rule " + name) : void 0;
      }

      return null;
    }

    var join = function join(value, by) {
      var result = '';

      for (var i = 0; i < value.length; i++) {
        // Remove !important from the value, it will be readded later.
        if (value[i] === '!important') break;
        if (result) result += by;
        result += value[i];
      }

      return result;
    };
    /**
     * Converts array values to string.
     *
     * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
     * `border: ['1px', '2px']` > `border: 1px, 2px;`
     * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
     * `color: ['red', !important]` > `color: red !important;`
     */


    function toCssValue(value, ignoreImportant) {
      if (ignoreImportant === void 0) {
        ignoreImportant = false;
      }

      if (!Array.isArray(value)) return value;
      var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

      if (Array.isArray(value[0])) {
        for (var i = 0; i < value.length; i++) {
          if (value[i] === '!important') break;
          if (cssValue) cssValue += ', ';
          cssValue += join(value[i], ' ');
        }
      } else cssValue = join(value, ', '); // Add !important, because it was ignored.


      if (!ignoreImportant && value[value.length - 1] === '!important') {
        cssValue += ' !important';
      }

      return cssValue;
    }

    /**
     * Indent a string.
     * http://jsperf.com/array-join-vs-for
     */
    function indentStr(str, indent) {
      var result = '';

      for (var index = 0; index < indent; index++) {
        result += '  ';
      }

      return result + str;
    }
    /**
     * Converts a Rule to CSS string.
     */


    function toCss(selector, style, options) {
      if (options === void 0) {
        options = {};
      }

      var result = '';
      if (!style) return result;
      var _options = options,
          _options$indent = _options.indent,
          indent = _options$indent === void 0 ? 0 : _options$indent;
      var fallbacks = style.fallbacks;
      if (selector) indent++; // Apply fallbacks first.

      if (fallbacks) {
        // Array syntax {fallbacks: [{prop: value}]}
        if (Array.isArray(fallbacks)) {
          for (var index = 0; index < fallbacks.length; index++) {
            var fallback = fallbacks[index];

            for (var prop in fallback) {
              var value = fallback[prop];

              if (value != null) {
                if (result) result += '\n';
                result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
              }
            }
          }
        } else {
          // Object syntax {fallbacks: {prop: value}}
          for (var _prop in fallbacks) {
            var _value = fallbacks[_prop];

            if (_value != null) {
              if (result) result += '\n';
              result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
            }
          }
        }
      }

      for (var _prop2 in style) {
        var _value2 = style[_prop2];

        if (_value2 != null && _prop2 !== 'fallbacks') {
          if (result) result += '\n';
          result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
        }
      } // Allow empty style in this case, because properties will be added dynamically.


      if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

      if (!selector) return result;
      indent--;
      if (result) result = "\n" + result + "\n";
      return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
    }

    var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
    var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
    var escape = (function (str) {
      return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
    });

    var BaseStyleRule =
    /*#__PURE__*/
    function () {
      function BaseStyleRule(key, style, options) {
        this.type = 'style';
        this.key = void 0;
        this.isProcessed = false;
        this.style = void 0;
        this.renderer = void 0;
        this.renderable = void 0;
        this.options = void 0;
        var sheet = options.sheet,
            Renderer = options.Renderer;
        this.key = key;
        this.options = options;
        this.style = style;
        if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
      }
      /**
       * Get or set a style property.
       */


      var _proto = BaseStyleRule.prototype;

      _proto.prop = function prop(name, value, options) {
        // It's a getter.
        if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

        var force = options ? options.force : false;
        if (!force && this.style[name] === value) return this;
        var newValue = value;

        if (!options || options.process !== false) {
          newValue = this.options.jss.plugins.onChangeValue(value, name, this);
        }

        var isEmpty = newValue == null || newValue === false;
        var isDefined = name in this.style; // Value is empty and wasn't defined before.

        if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

        var remove = isEmpty && isDefined;
        if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

        if (this.renderable && this.renderer) {
          if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
          return this;
        }

        var sheet = this.options.sheet;

        if (sheet && sheet.attached) {
          process.env.NODE_ENV !== "production" ? warning(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : void 0;
        }

        return this;
      };

      return BaseStyleRule;
    }();
    var StyleRule =
    /*#__PURE__*/
    function (_BaseStyleRule) {
      _inheritsLoose(StyleRule, _BaseStyleRule);

      function StyleRule(key, style, options) {
        var _this;

        _this = _BaseStyleRule.call(this, key, style, options) || this;
        _this.selectorText = void 0;
        _this.id = void 0;
        _this.renderable = void 0;
        var selector = options.selector,
            scoped = options.scoped,
            sheet = options.sheet,
            generateId = options.generateId;

        if (selector) {
          _this.selectorText = selector;
        } else if (scoped !== false) {
          _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
          _this.selectorText = "." + escape(_this.id);
        }

        return _this;
      }
      /**
       * Set selector string.
       * Attention: use this with caution. Most browsers didn't implement
       * selectorText setter, so this may result in rerendering of entire Style Sheet.
       */


      var _proto2 = StyleRule.prototype;

      /**
       * Apply rule to an element inline.
       */
      _proto2.applyTo = function applyTo(renderable) {
        var renderer = this.renderer;

        if (renderer) {
          var json = this.toJSON();

          for (var prop in json) {
            renderer.setProperty(renderable, prop, json[prop]);
          }
        }

        return this;
      }
      /**
       * Returns JSON representation of the rule.
       * Fallbacks are not supported.
       * Useful for inline styles.
       */
      ;

      _proto2.toJSON = function toJSON() {
        var json = {};

        for (var prop in this.style) {
          var value = this.style[prop];
          if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
        }

        return json;
      }
      /**
       * Generates a CSS string.
       */
      ;

      _proto2.toString = function toString(options) {
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var opts = link ? _extends({}, options, {
          allowEmpty: true
        }) : options;
        return toCss(this.selectorText, this.style, opts);
      };

      _createClass(StyleRule, [{
        key: "selector",
        set: function set(selector) {
          if (selector === this.selectorText) return;
          this.selectorText = selector;
          var renderer = this.renderer,
              renderable = this.renderable;
          if (!renderable || !renderer) return;
          var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

          if (!hasChanged) {
            renderer.replaceRule(renderable, this);
          }
        }
        /**
         * Get selector string.
         */
        ,
        get: function get() {
          return this.selectorText;
        }
      }]);

      return StyleRule;
    }(BaseStyleRule);
    var pluginStyleRule = {
      onCreateRule: function onCreateRule(name, style, options) {
        if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
          return null;
        }

        return new StyleRule(name, style, options);
      }
    };

    var defaultToStringOptions = {
      indent: 1,
      children: true
    };
    var atRegExp = /@([\w-]+)/;
    /**
     * Conditional rule for @media, @supports
     */

    var ConditionalRule =
    /*#__PURE__*/
    function () {
      function ConditionalRule(key, styles, options) {
        this.type = 'conditional';
        this.at = void 0;
        this.key = void 0;
        this.rules = void 0;
        this.options = void 0;
        this.isProcessed = false;
        this.renderable = void 0;
        this.key = key;
        var atMatch = key.match(atRegExp);
        this.at = atMatch ? atMatch[1] : 'unknown';
        this.options = options;
        this.rules = new RuleList(_extends({}, options, {
          parent: this
        }));

        for (var name in styles) {
          this.rules.add(name, styles[name]);
        }

        this.rules.process();
      }
      /**
       * Get a rule.
       */


      var _proto = ConditionalRule.prototype;

      _proto.getRule = function getRule(name) {
        return this.rules.get(name);
      }
      /**
       * Get index of a rule.
       */
      ;

      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      }
      /**
       * Create and register rule, run plugins.
       */
      ;

      _proto.addRule = function addRule(name, style, options) {
        var rule = this.rules.add(name, style, options);
        if (!rule) return null;
        this.options.jss.plugins.onProcessRule(rule);
        return rule;
      }
      /**
       * Generates a CSS string.
       */
      ;

      _proto.toString = function toString(options) {
        if (options === void 0) {
          options = defaultToStringOptions;
        }

        if (options.indent == null) options.indent = defaultToStringOptions.indent;
        if (options.children == null) options.children = defaultToStringOptions.children;

        if (options.children === false) {
          return this.key + " {}";
        }

        var children = this.rules.toString(options);
        return children ? this.key + " {\n" + children + "\n}" : '';
      };

      return ConditionalRule;
    }();
    var keyRegExp = /@media|@supports\s+/;
    var pluginConditionalRule = {
      onCreateRule: function onCreateRule(key, styles, options) {
        return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
      }
    };

    var defaultToStringOptions$1 = {
      indent: 1,
      children: true
    };
    var nameRegExp = /@keyframes\s+([\w-]+)/;
    /**
     * Rule for @keyframes
     */

    var KeyframesRule =
    /*#__PURE__*/
    function () {
      function KeyframesRule(key, frames, options) {
        this.type = 'keyframes';
        this.at = '@keyframes';
        this.key = void 0;
        this.name = void 0;
        this.id = void 0;
        this.rules = void 0;
        this.options = void 0;
        this.isProcessed = false;
        this.renderable = void 0;
        var nameMatch = key.match(nameRegExp);

        if (nameMatch && nameMatch[1]) {
          this.name = nameMatch[1];
        } else {
          this.name = 'noname';
          process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Bad keyframes name " + key) : void 0;
        }

        this.key = this.type + "-" + this.name;
        this.options = options;
        var scoped = options.scoped,
            sheet = options.sheet,
            generateId = options.generateId;
        this.id = scoped === false ? this.name : escape(generateId(this, sheet));
        this.rules = new RuleList(_extends({}, options, {
          parent: this
        }));

        for (var name in frames) {
          this.rules.add(name, frames[name], _extends({}, options, {
            parent: this
          }));
        }

        this.rules.process();
      }
      /**
       * Generates a CSS string.
       */


      var _proto = KeyframesRule.prototype;

      _proto.toString = function toString(options) {
        if (options === void 0) {
          options = defaultToStringOptions$1;
        }

        if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
        if (options.children == null) options.children = defaultToStringOptions$1.children;

        if (options.children === false) {
          return this.at + " " + this.id + " {}";
        }

        var children = this.rules.toString(options);
        if (children) children = "\n" + children + "\n";
        return this.at + " " + this.id + " {" + children + "}";
      };

      return KeyframesRule;
    }();
    var keyRegExp$1 = /@keyframes\s+/;
    var refRegExp = /\$([\w-]+)/g;

    var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
      if (typeof val === 'string') {
        return val.replace(refRegExp, function (match, name) {
          if (name in keyframes) {
            return keyframes[name];
          }

          process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.") : void 0;
          return match;
        });
      }

      return val;
    };
    /**
     * Replace the reference for a animation name.
     */


    var replaceRef = function replaceRef(style, prop, keyframes) {
      var value = style[prop];
      var refKeyframe = findReferencedKeyframe(value, keyframes);

      if (refKeyframe !== value) {
        style[prop] = refKeyframe;
      }
    };

    var plugin = {
      onCreateRule: function onCreateRule(key, frames, options) {
        return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
      },
      // Animation name ref replacer.
      onProcessStyle: function onProcessStyle(style, rule, sheet) {
        if (rule.type !== 'style' || !sheet) return style;
        if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
        if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
        return style;
      },
      onChangeValue: function onChangeValue(val, prop, rule) {
        var sheet = rule.options.sheet;

        if (!sheet) {
          return val;
        }

        switch (prop) {
          case 'animation':
            return findReferencedKeyframe(val, sheet.keyframes);

          case 'animation-name':
            return findReferencedKeyframe(val, sheet.keyframes);

          default:
            return val;
        }
      }
    };

    var KeyframeRule =
    /*#__PURE__*/
    function (_BaseStyleRule) {
      _inheritsLoose(KeyframeRule, _BaseStyleRule);

      function KeyframeRule() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
        _this.renderable = void 0;
        return _this;
      }

      var _proto = KeyframeRule.prototype;

      /**
       * Generates a CSS string.
       */
      _proto.toString = function toString(options) {
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var opts = link ? _extends({}, options, {
          allowEmpty: true
        }) : options;
        return toCss(this.key, this.style, opts);
      };

      return KeyframeRule;
    }(BaseStyleRule);
    var pluginKeyframeRule = {
      onCreateRule: function onCreateRule(key, style, options) {
        if (options.parent && options.parent.type === 'keyframes') {
          return new KeyframeRule(key, style, options);
        }

        return null;
      }
    };

    var FontFaceRule =
    /*#__PURE__*/
    function () {
      function FontFaceRule(key, style, options) {
        this.type = 'font-face';
        this.at = '@font-face';
        this.key = void 0;
        this.style = void 0;
        this.options = void 0;
        this.isProcessed = false;
        this.renderable = void 0;
        this.key = key;
        this.style = style;
        this.options = options;
      }
      /**
       * Generates a CSS string.
       */


      var _proto = FontFaceRule.prototype;

      _proto.toString = function toString(options) {
        if (Array.isArray(this.style)) {
          var str = '';

          for (var index = 0; index < this.style.length; index++) {
            str += toCss(this.key, this.style[index]);
            if (this.style[index + 1]) str += '\n';
          }

          return str;
        }

        return toCss(this.key, this.style, options);
      };

      return FontFaceRule;
    }();
    var pluginFontFaceRule = {
      onCreateRule: function onCreateRule(key, style, options) {
        return key === '@font-face' ? new FontFaceRule(key, style, options) : null;
      }
    };

    var ViewportRule =
    /*#__PURE__*/
    function () {
      function ViewportRule(key, style, options) {
        this.type = 'viewport';
        this.at = '@viewport';
        this.key = void 0;
        this.style = void 0;
        this.options = void 0;
        this.isProcessed = false;
        this.renderable = void 0;
        this.key = key;
        this.style = style;
        this.options = options;
      }
      /**
       * Generates a CSS string.
       */


      var _proto = ViewportRule.prototype;

      _proto.toString = function toString(options) {
        return toCss(this.key, this.style, options);
      };

      return ViewportRule;
    }();
    var pluginViewportRule = {
      onCreateRule: function onCreateRule(key, style, options) {
        return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
      }
    };

    var SimpleRule =
    /*#__PURE__*/
    function () {
      function SimpleRule(key, value, options) {
        this.type = 'simple';
        this.key = void 0;
        this.value = void 0;
        this.options = void 0;
        this.isProcessed = false;
        this.renderable = void 0;
        this.key = key;
        this.value = value;
        this.options = options;
      }
      /**
       * Generates a CSS string.
       */
      // eslint-disable-next-line no-unused-vars


      var _proto = SimpleRule.prototype;

      _proto.toString = function toString(options) {
        if (Array.isArray(this.value)) {
          var str = '';

          for (var index = 0; index < this.value.length; index++) {
            str += this.key + " " + this.value[index] + ";";
            if (this.value[index + 1]) str += '\n';
          }

          return str;
        }

        return this.key + " " + this.value + ";";
      };

      return SimpleRule;
    }();
    var keysMap = {
      '@charset': true,
      '@import': true,
      '@namespace': true
    };
    var pluginSimpleRule = {
      onCreateRule: function onCreateRule(key, value, options) {
        return key in keysMap ? new SimpleRule(key, value, options) : null;
      }
    };

    var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

    var defaultUpdateOptions = {
      process: true
    };
    var forceUpdateOptions = {
      force: true,
      process: true
      /**
       * Contains rules objects and allows adding/removing etc.
       * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
       */

    };

    var RuleList =
    /*#__PURE__*/
    function () {
      // Rules registry for access by .get() method.
      // It contains the same rule registered by name and by selector.
      // Original styles object.
      // Used to ensure correct rules order.
      function RuleList(options) {
        this.map = {};
        this.raw = {};
        this.index = [];
        this.options = void 0;
        this.classes = void 0;
        this.keyframes = void 0;
        this.options = options;
        this.classes = options.classes;
        this.keyframes = options.keyframes;
      }
      /**
       * Create and register rule.
       *
       * Will not render after Style Sheet was rendered the first time.
       */


      var _proto = RuleList.prototype;

      _proto.add = function add(key, decl, ruleOptions) {
        var _this$options = this.options,
            parent = _this$options.parent,
            sheet = _this$options.sheet,
            jss = _this$options.jss,
            Renderer = _this$options.Renderer,
            generateId = _this$options.generateId,
            scoped = _this$options.scoped;

        var options = _extends({
          classes: this.classes,
          parent: parent,
          sheet: sheet,
          jss: jss,
          Renderer: Renderer,
          generateId: generateId,
          scoped: scoped
        }, ruleOptions); // We need to save the original decl before creating the rule
        // because cache plugin needs to use it as a key to return a cached rule.


        this.raw[key] = decl;

        if (key in this.classes) {
          // For e.g. rules inside of @media container
          options.selector = "." + escape(this.classes[key]);
        }

        var rule = createRule(key, decl, options);
        if (!rule) return null;
        this.register(rule);
        var index = options.index === undefined ? this.index.length : options.index;
        this.index.splice(index, 0, rule);
        return rule;
      }
      /**
       * Get a rule.
       */
      ;

      _proto.get = function get(name) {
        return this.map[name];
      }
      /**
       * Delete a rule.
       */
      ;

      _proto.remove = function remove(rule) {
        this.unregister(rule);
        delete this.raw[rule.key];
        this.index.splice(this.indexOf(rule), 1);
      }
      /**
       * Get index of a rule.
       */
      ;

      _proto.indexOf = function indexOf(rule) {
        return this.index.indexOf(rule);
      }
      /**
       * Run `onProcessRule()` plugins on every rule.
       */
      ;

      _proto.process = function process() {
        var plugins$$1 = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
        // we end up with very hard-to-track-down side effects.

        this.index.slice(0).forEach(plugins$$1.onProcessRule, plugins$$1);
      }
      /**
       * Register a rule in `.map` and `.classes` maps.
       */
      ;

      _proto.register = function register(rule) {
        this.map[rule.key] = rule;

        if (rule instanceof StyleRule) {
          this.map[rule.selector] = rule;
          if (rule.id) this.classes[rule.key] = rule.id;
        } else if (rule instanceof KeyframesRule && this.keyframes) {
          this.keyframes[rule.name] = rule.id;
        }
      }
      /**
       * Unregister a rule.
       */
      ;

      _proto.unregister = function unregister(rule) {
        delete this.map[rule.key];

        if (rule instanceof StyleRule) {
          delete this.map[rule.selector];
          delete this.classes[rule.key];
        } else if (rule instanceof KeyframesRule) {
          delete this.keyframes[rule.name];
        }
      }
      /**
       * Update the function values with a new data.
       */
      ;

      _proto.update = function update() {
        var name;
        var data;
        var options;

        if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
          name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

          data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe

          options = arguments.length <= 2 ? undefined : arguments[2];
        } else {
          data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

          options = arguments.length <= 1 ? undefined : arguments[1];
          name = null;
        }

        if (name) {
          this.onUpdate(data, this.get(name), options);
        } else {
          for (var index = 0; index < this.index.length; index++) {
            this.onUpdate(data, this.index[index], options);
          }
        }
      }
      /**
       * Execute plugins, update rule props.
       */
      ;

      _proto.onUpdate = function onUpdate(data, rule, options) {
        if (options === void 0) {
          options = defaultUpdateOptions;
        }

        var _this$options2 = this.options,
            plugins$$1 = _this$options2.jss.plugins,
            sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

        if (rule.rules instanceof RuleList) {
          rule.rules.update(data, options);
          return;
        }

        var styleRule = rule;
        var style = styleRule.style;
        plugins$$1.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

        if (options.process && style && style !== styleRule.style) {
          // We need to run the plugins in case new `style` relies on syntax plugins.
          plugins$$1.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

          for (var prop in styleRule.style) {
            var nextValue = styleRule.style[prop];
            var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
            // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

            if (nextValue !== prevValue) {
              styleRule.prop(prop, nextValue, forceUpdateOptions);
            }
          } // Remove props.


          for (var _prop in style) {
            var _nextValue = styleRule.style[_prop];
            var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
            // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

            if (_nextValue == null && _nextValue !== _prevValue) {
              styleRule.prop(_prop, null, forceUpdateOptions);
            }
          }
        }
      }
      /**
       * Convert rules to a CSS string.
       */
      ;

      _proto.toString = function toString(options) {
        var str = '';
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;

        for (var index = 0; index < this.index.length; index++) {
          var rule = this.index[index];
          var css = rule.toString(options); // No need to render an empty rule.

          if (!css && !link) continue;
          if (str) str += '\n';
          str += css;
        }

        return str;
      };

      return RuleList;
    }();

    var StyleSheet =
    /*#__PURE__*/
    function () {
      function StyleSheet(styles, options) {
        this.options = void 0;
        this.deployed = void 0;
        this.attached = void 0;
        this.rules = void 0;
        this.renderer = void 0;
        this.classes = void 0;
        this.keyframes = void 0;
        this.queue = void 0;
        this.attached = false;
        this.deployed = false;
        this.classes = {};
        this.keyframes = {};
        this.options = _extends({}, options, {
          sheet: this,
          parent: this,
          classes: this.classes,
          keyframes: this.keyframes
        });

        if (options.Renderer) {
          this.renderer = new options.Renderer(this);
        }

        this.rules = new RuleList(this.options);

        for (var name in styles) {
          this.rules.add(name, styles[name]);
        }

        this.rules.process();
      }
      /**
       * Attach renderable to the render tree.
       */


      var _proto = StyleSheet.prototype;

      _proto.attach = function attach() {
        if (this.attached) return this;
        if (this.renderer) this.renderer.attach();
        this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

        if (!this.deployed) this.deploy();
        return this;
      }
      /**
       * Remove renderable from render tree.
       */
      ;

      _proto.detach = function detach() {
        if (!this.attached) return this;
        if (this.renderer) this.renderer.detach();
        this.attached = false;
        return this;
      }
      /**
       * Add a rule to the current stylesheet.
       * Will insert a rule also after the stylesheet has been rendered first time.
       */
      ;

      _proto.addRule = function addRule(name, decl, options) {
        var queue = this.queue; // Plugins can create rules.
        // In order to preserve the right order, we need to queue all `.addRule` calls,
        // which happen after the first `rules.add()` call.

        if (this.attached && !queue) this.queue = [];
        var rule = this.rules.add(name, decl, options);
        if (!rule) return null;
        this.options.jss.plugins.onProcessRule(rule);

        if (this.attached) {
          if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
          // It will be inserted all together when .attach is called.

          if (queue) queue.push(rule);else {
            this.insertRule(rule);

            if (this.queue) {
              this.queue.forEach(this.insertRule, this);
              this.queue = undefined;
            }
          }
          return rule;
        } // We can't add rules to a detached style node.
        // We will redeploy the sheet once user will attach it.


        this.deployed = false;
        return rule;
      }
      /**
       * Insert rule into the StyleSheet
       */
      ;

      _proto.insertRule = function insertRule(rule) {
        if (this.renderer) {
          this.renderer.insertRule(rule);
        }
      }
      /**
       * Create and add rules.
       * Will render also after Style Sheet was rendered the first time.
       */
      ;

      _proto.addRules = function addRules(styles, options) {
        var added = [];

        for (var name in styles) {
          var rule = this.addRule(name, styles[name], options);
          if (rule) added.push(rule);
        }

        return added;
      }
      /**
       * Get a rule by name.
       */
      ;

      _proto.getRule = function getRule(name) {
        return this.rules.get(name);
      }
      /**
       * Delete a rule by name.
       * Returns `true`: if rule has been deleted from the DOM.
       */
      ;

      _proto.deleteRule = function deleteRule(name) {
        var rule = this.rules.get(name);
        if (!rule) return false;
        this.rules.remove(rule);

        if (this.attached && rule.renderable && this.renderer) {
          return this.renderer.deleteRule(rule.renderable);
        }

        return true;
      }
      /**
       * Get index of a rule.
       */
      ;

      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      }
      /**
       * Deploy pure CSS string to a renderable.
       */
      ;

      _proto.deploy = function deploy() {
        if (this.renderer) this.renderer.deploy();
        this.deployed = true;
        return this;
      }
      /**
       * Update the function values with a new data.
       */
      ;

      _proto.update = function update() {
        var _this$rules;

        (_this$rules = this.rules).update.apply(_this$rules, arguments);

        return this;
      }
      /**
       * Convert rules to a CSS string.
       */
      ;

      _proto.toString = function toString(options) {
        return this.rules.toString(options);
      };

      return StyleSheet;
    }();

    var PluginsRegistry =
    /*#__PURE__*/
    function () {
      function PluginsRegistry() {
        this.plugins = {
          internal: [],
          external: []
        };
        this.registry = void 0;
      }

      var _proto = PluginsRegistry.prototype;

      /**
       * Call `onCreateRule` hooks and return an object if returned by a hook.
       */
      _proto.onCreateRule = function onCreateRule(name, decl, options) {
        for (var i = 0; i < this.registry.onCreateRule.length; i++) {
          var rule = this.registry.onCreateRule[i](name, decl, options);
          if (rule) return rule;
        }

        return null;
      }
      /**
       * Call `onProcessRule` hooks.
       */
      ;

      _proto.onProcessRule = function onProcessRule(rule) {
        if (rule.isProcessed) return;
        var sheet = rule.options.sheet;

        for (var i = 0; i < this.registry.onProcessRule.length; i++) {
          this.registry.onProcessRule[i](rule, sheet);
        }

        if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
        rule.isProcessed = true;
      }
      /**
       * Call `onProcessStyle` hooks.
       */
      ;

      _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
        for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
          // $FlowFixMe
          rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
        }
      }
      /**
       * Call `onProcessSheet` hooks.
       */
      ;

      _proto.onProcessSheet = function onProcessSheet(sheet) {
        for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
          this.registry.onProcessSheet[i](sheet);
        }
      }
      /**
       * Call `onUpdate` hooks.
       */
      ;

      _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
        for (var i = 0; i < this.registry.onUpdate.length; i++) {
          this.registry.onUpdate[i](data, rule, sheet, options);
        }
      }
      /**
       * Call `onChangeValue` hooks.
       */
      ;

      _proto.onChangeValue = function onChangeValue(value, prop, rule) {
        var processedValue = value;

        for (var i = 0; i < this.registry.onChangeValue.length; i++) {
          processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
        }

        return processedValue;
      }
      /**
       * Register a plugin.
       */
      ;

      _proto.use = function use(newPlugin, options) {
        if (options === void 0) {
          options = {
            queue: 'external'
          };
        }

        var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

        if (plugins.indexOf(newPlugin) !== -1) {
          return;
        }

        plugins.push(newPlugin);
        this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
          for (var name in plugin) {
            if (name in registry) {
              registry[name].push(plugin[name]);
            } else {
              process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Unknown hook \"" + name + "\".") : void 0;
            }
          }

          return registry;
        }, {
          onCreateRule: [],
          onProcessRule: [],
          onProcessStyle: [],
          onProcessSheet: [],
          onChangeValue: [],
          onUpdate: []
        });
      };

      return PluginsRegistry;
    }();

    /**
     * Sheets registry to access them all at one place.
     */
    var SheetsRegistry =
    /*#__PURE__*/
    function () {
      function SheetsRegistry() {
        this.registry = [];
      }

      var _proto = SheetsRegistry.prototype;

      /**
       * Register a Style Sheet.
       */
      _proto.add = function add(sheet) {
        var registry = this.registry;
        var index = sheet.options.index;
        if (registry.indexOf(sheet) !== -1) return;

        if (registry.length === 0 || index >= this.index) {
          registry.push(sheet);
          return;
        } // Find a position.


        for (var i = 0; i < registry.length; i++) {
          if (registry[i].options.index > index) {
            registry.splice(i, 0, sheet);
            return;
          }
        }
      }
      /**
       * Reset the registry.
       */
      ;

      _proto.reset = function reset() {
        this.registry = [];
      }
      /**
       * Remove a Style Sheet.
       */
      ;

      _proto.remove = function remove(sheet) {
        var index = this.registry.indexOf(sheet);
        this.registry.splice(index, 1);
      }
      /**
       * Convert all attached sheets to a CSS string.
       */
      ;

      _proto.toString = function toString(_temp) {
        var _ref = _temp === void 0 ? {} : _temp,
            attached = _ref.attached,
            options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

        var css = '';

        for (var i = 0; i < this.registry.length; i++) {
          var sheet = this.registry[i];

          if (attached != null && sheet.attached !== attached) {
            continue;
          }

          if (css) css += '\n';
          css += sheet.toString(options);
        }

        return css;
      };

      _createClass(SheetsRegistry, [{
        key: "index",

        /**
         * Current highest index number.
         */
        get: function get() {
          return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
        }
      }]);

      return SheetsRegistry;
    }();

    /**
     * This is a global sheets registry. Only DomRenderer will add sheets to it.
     * On the server one should use an own SheetsRegistry instance and add the
     * sheets to it, because you need to make sure to create a new registry for
     * each request in order to not leak sheets across requests.
     */

    var sheets = new SheetsRegistry();

    /* eslint-disable */
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var globalThis$1 = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

    var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
    if (globalThis$1[ns] == null) globalThis$1[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
    // the current version with just one short number and use it for classes generation
    // we use a counter. Also it is more accurate, because user can manually reevaluate
    // the module.

    var moduleId = globalThis$1[ns]++;

    var maxRules = 1e10;

    /**
     * Returns a function which generates unique class names based on counters.
     * When new generator function is created, rule counter is reseted.
     * We need to reset the rule counter for SSR for each request.
     */
    var createGenerateId = function createGenerateId(options) {
      if (options === void 0) {
        options = {};
      }

      var ruleCounter = 0;
      return function (rule, sheet) {
        ruleCounter += 1;

        if (ruleCounter > maxRules) {
          process.env.NODE_ENV !== "production" ? warning(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : void 0;
        }

        var jssId = '';
        var prefix = '';

        if (sheet) {
          if (sheet.options.classNamePrefix) {
            prefix = sheet.options.classNamePrefix;
          }

          if (sheet.options.jss.id != null) {
            jssId = String(sheet.options.jss.id);
          }
        }

        if (options.minify) {
          // Using "c" because a number can't be the first char in a class name.
          return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
        }

        return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
      };
    };

    /**
     * Cache the value from the first time a function is called.
     */
    var memoize = function memoize(fn) {
      var value;
      return function () {
        if (!value) value = fn();
        return value;
      };
    };
    /**
     * Get a style property value.
     */


    function getPropertyValue(cssRule, prop) {
      try {
        // Support CSSTOM.
        if (cssRule.attributeStyleMap) {
          return cssRule.attributeStyleMap.get(prop);
        }

        return cssRule.style.getPropertyValue(prop);
      } catch (err) {
        // IE may throw if property is unknown.
        return '';
      }
    }
    /**
     * Set a style property.
     */


    function setProperty(cssRule, prop, value) {
      try {
        var cssValue = value;

        if (Array.isArray(value)) {
          cssValue = toCssValue(value, true);

          if (value[value.length - 1] === '!important') {
            cssRule.style.setProperty(prop, cssValue, 'important');
            return true;
          }
        } // Support CSSTOM.


        if (cssRule.attributeStyleMap) {
          cssRule.attributeStyleMap.set(prop, cssValue);
        } else {
          cssRule.style.setProperty(prop, cssValue);
        }
      } catch (err) {
        // IE may throw if property is unknown.
        return false;
      }

      return true;
    }
    /**
     * Remove a style property.
     */


    function removeProperty(cssRule, prop) {
      try {
        // Support CSSTOM.
        if (cssRule.attributeStyleMap) {
          cssRule.attributeStyleMap.delete(prop);
        } else {
          cssRule.style.removeProperty(prop);
        }
      } catch (err) {
        process.env.NODE_ENV !== "production" ? warning(false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".") : void 0;
      }
    }
    /**
     * Set the selector.
     */


    function setSelector(cssRule, selectorText) {
      cssRule.selectorText = selectorText; // Return false if setter was not successful.
      // Currently works in chrome only.

      return cssRule.selectorText === selectorText;
    }
    /**
     * Gets the `head` element upon the first call and caches it.
     * We assume it can't be null.
     */


    var getHead = memoize(function () {
      return document.querySelector('head');
    });
    /**
     * Find attached sheet with an index higher than the passed one.
     */

    function findHigherSheet(registry, options) {
      for (var i = 0; i < registry.length; i++) {
        var sheet = registry[i];

        if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
          return sheet;
        }
      }

      return null;
    }
    /**
     * Find attached sheet with the highest index.
     */


    function findHighestSheet(registry, options) {
      for (var i = registry.length - 1; i >= 0; i--) {
        var sheet = registry[i];

        if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
          return sheet;
        }
      }

      return null;
    }
    /**
     * Find a comment with "jss" inside.
     */


    function findCommentNode(text) {
      var head = getHead();

      for (var i = 0; i < head.childNodes.length; i++) {
        var node = head.childNodes[i];

        if (node.nodeType === 8 && node.nodeValue.trim() === text) {
          return node;
        }
      }

      return null;
    }

    /**
     * Find a node before which we can insert the sheet.
     */
    function findPrevNode(options) {
      var registry = sheets.registry;

      if (registry.length > 0) {
        // Try to insert before the next higher sheet.
        var sheet = findHigherSheet(registry, options);

        if (sheet && sheet.renderer) {
          return {
            parent: sheet.renderer.element.parentNode,
            node: sheet.renderer.element
          };
        } // Otherwise insert after the last attached.


        sheet = findHighestSheet(registry, options);

        if (sheet && sheet.renderer) {
          return {
            parent: sheet.renderer.element.parentNode,
            node: sheet.renderer.element.nextSibling
          };
        }
      } // Try to find a comment placeholder if registry is empty.


      var insertionPoint = options.insertionPoint;

      if (insertionPoint && typeof insertionPoint === 'string') {
        var comment = findCommentNode(insertionPoint);

        if (comment) {
          return {
            parent: comment.parentNode,
            node: comment.nextSibling
          };
        } // If user specifies an insertion point and it can't be found in the document -
        // bad specificity issues may appear.


        process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.") : void 0;
      }

      return false;
    }
    /**
     * Insert style element into the DOM.
     */


    function insertStyle(style, options) {
      var insertionPoint = options.insertionPoint;
      var nextNode = findPrevNode(options);

      if (nextNode !== false && nextNode.parent) {
        nextNode.parent.insertBefore(style, nextNode.node);
        return;
      } // Works with iframes and any node types.


      if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
        // https://stackoverflow.com/questions/41328728/force-casting-in-flow
        var insertionPointElement = insertionPoint;
        var parentNode = insertionPointElement.parentNode;
        if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else process.env.NODE_ENV !== "production" ? warning(false, '[JSS] Insertion point is not in the DOM.') : void 0;
        return;
      }

      getHead().appendChild(style);
    }
    /**
     * Read jss nonce setting from the page if the user has set it.
     */


    var getNonce = memoize(function () {
      var node = document.querySelector('meta[property="csp-nonce"]');
      return node ? node.getAttribute('content') : null;
    });

    var _insertRule = function insertRule(container, rule, index) {
      var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

      if (index === undefined || index > maxIndex) {
        // eslint-disable-next-line no-param-reassign
        index = maxIndex;
      }

      try {
        if ('insertRule' in container) {
          var c = container;
          c.insertRule(rule, index);
        } // Keyframes rule.
        else if ('appendRule' in container) {
            var _c = container;

            _c.appendRule(rule);
          }
      } catch (err) {
        process.env.NODE_ENV !== "production" ? warning(false, "[JSS] " + err.message) : void 0;
        return false;
      }

      return container.cssRules[index];
    };

    var createStyle = function createStyle() {
      var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
      // insert rules after we insert the style tag.
      // It seems to kick-off the source order specificity algorithm.

      el.textContent = '\n';
      return el;
    };

    var DomRenderer =
    /*#__PURE__*/
    function () {
      // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
      function DomRenderer(sheet) {
        this.getPropertyValue = getPropertyValue;
        this.setProperty = setProperty;
        this.removeProperty = removeProperty;
        this.setSelector = setSelector;
        this.element = void 0;
        this.sheet = void 0;
        this.hasInsertedRules = false;
        // There is no sheet when the renderer is used from a standalone StyleRule.
        if (sheet) sheets.add(sheet);
        this.sheet = sheet;

        var _ref = this.sheet ? this.sheet.options : {},
            media = _ref.media,
            meta = _ref.meta,
            element = _ref.element;

        this.element = element || createStyle();
        this.element.setAttribute('data-jss', '');
        if (media) this.element.setAttribute('media', media);
        if (meta) this.element.setAttribute('data-meta', meta);
        var nonce = getNonce();
        if (nonce) this.element.setAttribute('nonce', nonce);
      }
      /**
       * Insert style element into render tree.
       */


      var _proto = DomRenderer.prototype;

      _proto.attach = function attach() {
        // In the case the element node is external and it is already in the DOM.
        if (this.element.parentNode || !this.sheet) return;
        insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
        // browsers remove those rules.
        // TODO figure out if its a bug and if it is known.
        // Workaround is to redeploy the sheet.

        if (this.hasInsertedRules && !(this.sheet && !this.sheet.deployed)) {
          this.hasInsertedRules = false;
          this.deploy();
        }
      }
      /**
       * Remove style element from render tree.
       */
      ;

      _proto.detach = function detach() {
        var parentNode = this.element.parentNode;
        if (parentNode) parentNode.removeChild(this.element);
      }
      /**
       * Inject CSS string into element.
       */
      ;

      _proto.deploy = function deploy() {
        var sheet = this.sheet;
        if (!sheet) return;

        if (sheet.options.link) {
          this.insertRules(sheet.rules);
          return;
        }

        this.element.textContent = "\n" + sheet.toString() + "\n";
      }
      /**
       * Insert RuleList into an element.
       */
      ;

      _proto.insertRules = function insertRules(rules, nativeParent) {
        for (var i = 0; i < rules.index.length; i++) {
          this.insertRule(rules.index[i], i, nativeParent);
        }
      }
      /**
       * Insert a rule into element.
       */
      ;

      _proto.insertRule = function insertRule(rule, index, nativeParent) {
        if (nativeParent === void 0) {
          nativeParent = this.element.sheet;
        }

        if (rule.rules) {
          var parent = rule;
          var latestNativeParent = nativeParent;

          if (rule.type === 'conditional' || rule.type === 'keyframes') {
            // We need to render the container without children first.
            latestNativeParent = _insertRule(nativeParent, parent.toString({
              children: false
            }), index);

            if (latestNativeParent === false) {
              return false;
            }
          }

          this.insertRules(parent.rules, latestNativeParent);
          return latestNativeParent;
        }

        var ruleStr = rule.toString();
        if (!ruleStr) return false;

        var nativeRule = _insertRule(nativeParent, ruleStr, index);

        if (nativeRule === false) {
          return false;
        }

        this.hasInsertedRules = true;
        rule.renderable = nativeRule;
        return nativeRule;
      }
      /**
       * Delete a rule.
       */
      ;

      _proto.deleteRule = function deleteRule(cssRule) {
        var sheet = this.element.sheet;
        var index = this.indexOf(cssRule);
        if (index === -1) return false;
        sheet.deleteRule(index);
        return true;
      }
      /**
       * Get index of a CSS Rule.
       */
      ;

      _proto.indexOf = function indexOf(cssRule) {
        var cssRules = this.element.sheet.cssRules;

        for (var index = 0; index < cssRules.length; index++) {
          if (cssRule === cssRules[index]) return index;
        }

        return -1;
      }
      /**
       * Generate a new CSS rule and replace the existing one.
       *
       * Only used for some old browsers because they can't set a selector.
       */
      ;

      _proto.replaceRule = function replaceRule(cssRule, rule) {
        var index = this.indexOf(cssRule);
        if (index === -1) return false;
        this.element.sheet.deleteRule(index);
        return this.insertRule(rule, index);
      }
      /**
       * Get all rules elements.
       */
      ;

      _proto.getRules = function getRules() {
        return this.element.sheet.cssRules;
      };

      return DomRenderer;
    }();

    var instanceCounter = 0;

    var Jss =
    /*#__PURE__*/
    function () {
      function Jss(options) {
        this.id = instanceCounter++;
        this.version = "10.0.0-alpha.25";
        this.plugins = new PluginsRegistry();
        this.options = {
          id: {
            minify: false
          },
          createGenerateId: createGenerateId,
          Renderer: isBrowser ? DomRenderer : null,
          plugins: []
        };
        this.generateId = createGenerateId({
          minify: false
        });

        for (var i = 0; i < plugins.length; i++) {
          this.plugins.use(plugins[i], {
            queue: 'internal'
          });
        }

        this.setup(options);
      }
      /**
       * Prepares various options, applies plugins.
       * Should not be used twice on the same instance, because there is no plugins
       * deduplication logic.
       */


      var _proto = Jss.prototype;

      _proto.setup = function setup(options) {
        if (options === void 0) {
          options = {};
        }

        if (options.createGenerateId) {
          this.options.createGenerateId = options.createGenerateId;
        }

        if (options.id) {
          this.options.id = _extends({}, this.options.id, options.id);
        }

        if (options.createGenerateId || options.id) {
          this.generateId = this.options.createGenerateId(this.options.id);
        }

        if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

        if ('Renderer' in options) {
          this.options.Renderer = options.Renderer;
        } // eslint-disable-next-line prefer-spread


        if (options.plugins) this.use.apply(this, options.plugins);
        return this;
      }
      /**
       * Create a Style Sheet.
       */
      ;

      _proto.createStyleSheet = function createStyleSheet(styles, options) {
        if (options === void 0) {
          options = {};
        }

        var _options = options,
            index = _options.index;

        if (typeof index !== 'number') {
          index = sheets.index === 0 ? 0 : sheets.index + 1;
        }

        var sheet = new StyleSheet(styles, _extends({}, options, {
          jss: this,
          generateId: options.generateId || this.generateId,
          insertionPoint: this.options.insertionPoint,
          Renderer: this.options.Renderer,
          index: index
        }));
        this.plugins.onProcessSheet(sheet);
        return sheet;
      }
      /**
       * Detach the Style Sheet and remove it from the registry.
       */
      ;

      _proto.removeStyleSheet = function removeStyleSheet(sheet) {
        sheet.detach();
        sheets.remove(sheet);
        return this;
      }
      /**
       * Create a rule without a Style Sheet.
       */
      ;

      _proto.createRule = function createRule$$1(name, style, options) {
        if (style === void 0) {
          style = {};
        }

        if (options === void 0) {
          options = {};
        }

        // Enable rule without name for inline styles.
        if (typeof name === 'object') {
          return this.createRule(undefined, name, style);
        }

        var ruleOptions = _extends({}, options, {
          jss: this,
          Renderer: this.options.Renderer
        });

        if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
        if (!ruleOptions.classes) ruleOptions.classes = {};
        if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

        var rule = createRule(name, style, ruleOptions);

        if (rule) this.plugins.onProcessRule(rule);
        return rule;
      }
      /**
       * Register plugin. Passed function will be invoked with a rule instance.
       */
      ;

      _proto.use = function use() {
        var _this = this;

        for (var _len = arguments.length, plugins$$1 = new Array(_len), _key = 0; _key < _len; _key++) {
          plugins$$1[_key] = arguments[_key];
        }

        plugins$$1.forEach(function (plugin) {
          _this.plugins.use(plugin);
        });
        return this;
      };

      return Jss;
    }();

    /**
     * Extracts a styles object with only props that contain function values.
     */
    function getDynamicStyles(styles) {
      var to = null;

      for (var key in styles) {
        var value = styles[key];
        var type = typeof value;

        if (type === 'function') {
          if (!to) to = {};
          to[key] = value;
        } else if (type === 'object' && value !== null && !Array.isArray(value)) {
          var extracted = getDynamicStyles(value);

          if (extracted) {
            if (!to) to = {};
            to[key] = extracted;
          }
        }
      }

      return to;
    }

    /**
     * SheetsManager is like a WeakMap which is designed to count StyleSheet
     * instances and attach/detach automatically.
     */
    var SheetsManager =
    /*#__PURE__*/
    function () {
      function SheetsManager() {
        this.length = 0;
        this.sheets = new WeakMap();
      }

      var _proto = SheetsManager.prototype;

      _proto.get = function get(key) {
        var entry = this.sheets.get(key);
        return entry && entry.sheet;
      };

      _proto.add = function add(key, sheet) {
        if (this.sheets.has(key)) return;
        this.length++;
        this.sheets.set(key, {
          sheet: sheet,
          refs: 0
        });
      };

      _proto.manage = function manage(key) {
        var entry = this.sheets.get(key);

        if (entry) {
          if (entry.refs === 0) {
            entry.sheet.attach();
          }

          entry.refs++;
          return entry.sheet;
        }

        warning(false, "[JSS] SheetsManager: can't find sheet to manage");
        return undefined;
      };

      _proto.unmanage = function unmanage(key) {
        var entry = this.sheets.get(key);

        if (entry) {
          if (entry.refs > 0) {
            entry.refs--;
            if (entry.refs === 0) entry.sheet.detach();
          }
        } else {
          warning(false, "SheetsManager: can't find sheet to unmanage");
        }
      };

      _createClass(SheetsManager, [{
        key: "size",
        get: function get() {
          return this.length;
        }
      }]);

      return SheetsManager;
    }();

    /**
     * A better abstraction over CSS.
     *
     * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
     * @website https://github.com/cssinjs/jss
     * @license MIT
     */

    /**
     * Export a constant indicating if this browser has CSSTOM support.
     * https://developers.google.com/web/updates/2018/03/cssom
     */
    var hasCSSTOMSupport = typeof CSS !== 'undefined' && CSS && 'number' in CSS;
    /**
     * Creates a new instance of Jss.
     */

    var create = function create(options) {
      return new Jss(options);
    };
    /**
     * A global Jss instance.
     */

    var index = create();

    var now = Date.now();
    var fnValuesNs = "fnValues" + now;
    var fnRuleNs = "fnStyle" + ++now;
    function functionPlugin() {
      return {
        onCreateRule: function onCreateRule(name, decl, options) {
          if (typeof decl !== 'function') return null;
          var rule = createRule(name, {}, options);
          rule[fnRuleNs] = decl;
          return rule;
        },
        onProcessStyle: function onProcessStyle(style, rule) {
          // We need to extract function values from the declaration, so that we can keep core unaware of them.
          // We need to do that only once.
          // We don't need to extract functions on each style update, since this can happen only once.
          // We don't support function values inside of function rules.
          if (fnValuesNs in rule || fnRuleNs in rule) return style;
          var fnValues = {};

          for (var prop in style) {
            var value = style[prop];
            if (typeof value !== 'function') continue;
            delete style[prop];
            fnValues[prop] = value;
          } // $FlowFixMe


          rule[fnValuesNs] = fnValues;
          return style;
        },
        onUpdate: function onUpdate(data, rule, sheet, options) {
          var styleRule = rule;
          var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
          // will be returned from that function.

          if (fnRule) {
            // Empty object will remove all currently defined props
            // in case function rule returns a falsy value.
            styleRule.style = fnRule(data) || {};
          }

          var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

          if (fnValues) {
            for (var prop in fnValues) {
              styleRule.prop(prop, fnValues[prop](data), options);
            }
          }
        }
      };
    }

    var at = '@global';
    var atPrefix = '@global ';

    var GlobalContainerRule =
    /*#__PURE__*/
    function () {
      function GlobalContainerRule(key, styles, options) {
        this.type = 'global';
        this.at = at;
        this.rules = void 0;
        this.options = void 0;
        this.key = void 0;
        this.isProcessed = false;
        this.key = key;
        this.options = options;
        this.rules = new RuleList(_extends({}, options, {
          parent: this
        }));

        for (var selector in styles) {
          this.rules.add(selector, styles[selector]);
        }

        this.rules.process();
      }
      /**
       * Get a rule.
       */


      var _proto = GlobalContainerRule.prototype;

      _proto.getRule = function getRule(name) {
        return this.rules.get(name);
      }
      /**
       * Create and register rule, run plugins.
       */
      ;

      _proto.addRule = function addRule(name, style, options) {
        var rule = this.rules.add(name, style, options);
        this.options.jss.plugins.onProcessRule(rule);
        return rule;
      }
      /**
       * Get index of a rule.
       */
      ;

      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      }
      /**
       * Generates a CSS string.
       */
      ;

      _proto.toString = function toString() {
        return this.rules.toString();
      };

      return GlobalContainerRule;
    }();

    var GlobalPrefixedRule =
    /*#__PURE__*/
    function () {
      function GlobalPrefixedRule(key, style, options) {
        this.type = 'global';
        this.at = at;
        this.options = void 0;
        this.rule = void 0;
        this.isProcessed = false;
        this.key = void 0;
        this.key = key;
        this.options = options;
        var selector = key.substr(atPrefix.length);
        this.rule = options.jss.createRule(selector, style, _extends({}, options, {
          parent: this
        }));
      }

      var _proto2 = GlobalPrefixedRule.prototype;

      _proto2.toString = function toString(options) {
        return this.rule ? this.rule.toString(options) : '';
      };

      return GlobalPrefixedRule;
    }();

    var separatorRegExp = /\s*,\s*/g;

    function addScope(selector, scope) {
      var parts = selector.split(separatorRegExp);
      var scoped = '';

      for (var i = 0; i < parts.length; i++) {
        scoped += scope + " " + parts[i].trim();
        if (parts[i + 1]) scoped += ', ';
      }

      return scoped;
    }

    function handleNestedGlobalContainerRule(rule) {
      var options = rule.options,
          style = rule.style;
      var rules = style ? style[at] : null;
      if (!rules) return;

      for (var name in rules) {
        options.sheet.addRule(name, rules[name], _extends({}, options, {
          selector: addScope(name, rule.selector)
        }));
      }

      delete style[at];
    }

    function handlePrefixedGlobalRule(rule) {
      var options = rule.options,
          style = rule.style;

      for (var prop in style) {
        if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
        var selector = addScope(prop.substr(at.length), rule.selector);
        options.sheet.addRule(selector, style[prop], _extends({}, options, {
          selector: selector
        }));
        delete style[prop];
      }
    }
    /**
     * Convert nested rules to separate, remove them from original styles.
     *
     * @param {Rule} rule
     * @api public
     */


    function jssGlobal() {
      function onCreateRule(name, styles, options) {
        if (!name) return null;

        if (name === at) {
          return new GlobalContainerRule(name, styles, options);
        }

        if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
          return new GlobalPrefixedRule(name, styles, options);
        }

        var parent = options.parent;

        if (parent) {
          if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
            options.scoped = false;
          }
        }

        if (options.scoped === false) {
          options.selector = name;
        }

        return null;
      }

      function onProcessRule(rule) {
        if (rule.type !== 'style') return;
        handleNestedGlobalContainerRule(rule);
        handlePrefixedGlobalRule(rule);
      }

      return {
        onCreateRule: onCreateRule,
        onProcessRule: onProcessRule
      };
    }

    var separatorRegExp$1 = /\s*,\s*/g;
    var parentRegExp = /&/g;
    var refRegExp$1 = /\$([\w-]+)/g;
    /**
     * Convert nested rules to separate, remove them from original styles.
     *
     * @param {Rule} rule
     * @api public
     */

    function jssNested() {
      // Get a function to be used for $ref replacement.
      function getReplaceRef(container, sheet) {
        return function (match, key) {
          var rule = container.getRule(key) || sheet && sheet.getRule(key);

          if (rule) {
            rule = rule;
            return rule.selector;
          }

          process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Could not find the referenced rule \"" + key + "\" in \"" + (container.options.meta || container.toString()) + "\".") : void 0;
          return key;
        };
      }

      function replaceParentRefs(nestedProp, parentProp) {
        var parentSelectors = parentProp.split(separatorRegExp$1);
        var nestedSelectors = nestedProp.split(separatorRegExp$1);
        var result = '';

        for (var i = 0; i < parentSelectors.length; i++) {
          var parent = parentSelectors[i];

          for (var j = 0; j < nestedSelectors.length; j++) {
            var nested = nestedSelectors[j];
            if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

            result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
          }
        }

        return result;
      }

      function getOptions(rule, container, options) {
        // Options has been already created, now we only increase index.
        if (options) return _extends({}, options, {
          index: options.index + 1
        });
        var nestingLevel = rule.options.nestingLevel;
        nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;
        return _extends({}, rule.options, {
          nestingLevel: nestingLevel,
          index: container.indexOf(rule) + 1
        });
      }

      function onProcessStyle(style, rule, sheet) {
        if (rule.type !== 'style') return style;
        var styleRule = rule;
        var container = styleRule.options.parent;
        var options;
        var replaceRef;

        for (var prop in style) {
          var isNested = prop.indexOf('&') !== -1;
          var isNestedConditional = prop[0] === '@';
          if (!isNested && !isNestedConditional) continue;
          options = getOptions(styleRule, container, options);

          if (isNested) {
            var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
            // all nested rules within the sheet.

            if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

            selector = selector.replace(refRegExp$1, replaceRef);
            container.addRule(selector, style[prop], _extends({}, options, {
              selector: selector
            }));
          } else if (isNestedConditional) {
            // Place conditional right after the parent rule to ensure right ordering.
            container.addRule(prop, {}, options) // Flow expects more options but they aren't required
            // And flow doesn't know this will always be a StyleRule which has the addRule method
            // $FlowFixMe
            .addRule(styleRule.key, style[prop], {
              selector: styleRule.selector
            });
          }

          delete style[prop];
        }

        return style;
      }

      return {
        onProcessStyle: onProcessStyle
      };
    }

    /* eslint-disable no-var, prefer-template */
    var uppercasePattern = /[A-Z]/g;
    var msPattern = /^ms-/;
    var cache = {};

    function toHyphenLower(match) {
      return '-' + match.toLowerCase()
    }

    function hyphenateStyleName(name) {
      if (cache.hasOwnProperty(name)) {
        return cache[name]
      }

      var hName = name.replace(uppercasePattern, toHyphenLower);
      return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
    }

    /**
     * Convert camel cased property names to dash separated.
     *
     * @param {Object} style
     * @return {Object}
     */

    function convertCase(style) {
      var converted = {};

      for (var prop in style) {
        var key = prop.indexOf('--') === 0 ? prop : hyphenateStyleName(prop);
        converted[key] = style[prop];
      }

      if (style.fallbacks) {
        if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
      }

      return converted;
    }
    /**
     * Allow camel cased property names by converting them back to dasherized.
     *
     * @param {Rule} rule
     */


    function camelCase() {
      function onProcessStyle(style) {
        if (Array.isArray(style)) {
          // Handle rules like @font-face, which can have multiple styles in an array
          for (var index = 0; index < style.length; index++) {
            style[index] = convertCase(style[index]);
          }

          return style;
        }

        return convertCase(style);
      }

      function onChangeValue(value, prop, rule) {
        if (prop.indexOf('--') === 0) {
          return value;
        }

        var hyphenatedProp = hyphenateStyleName(prop); // There was no camel case in place

        if (prop === hyphenatedProp) return value;
        rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

        return null;
      }

      return {
        onProcessStyle: onProcessStyle,
        onChangeValue: onChangeValue
      };
    }

    var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
    var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
    var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
    /**
     * Generated jss-plugin-default-unit CSS property units
     *
     * @type object
     */

    var defaultUnits = {
      // Animation properties
      'animation-delay': ms,
      'animation-duration': ms,
      // Background properties
      'background-position': px,
      'background-position-x': px,
      'background-position-y': px,
      'background-size': px,
      // Border Properties
      border: px,
      'border-bottom': px,
      'border-bottom-left-radius': px,
      'border-bottom-right-radius': px,
      'border-bottom-width': px,
      'border-left': px,
      'border-left-width': px,
      'border-radius': px,
      'border-right': px,
      'border-right-width': px,
      'border-top': px,
      'border-top-left-radius': px,
      'border-top-right-radius': px,
      'border-top-width': px,
      'border-width': px,
      // Margin properties
      margin: px,
      'margin-bottom': px,
      'margin-left': px,
      'margin-right': px,
      'margin-top': px,
      // Padding properties
      padding: px,
      'padding-bottom': px,
      'padding-left': px,
      'padding-right': px,
      'padding-top': px,
      // Mask properties
      'mask-position-x': px,
      'mask-position-y': px,
      'mask-size': px,
      // Width and height properties
      height: px,
      width: px,
      'min-height': px,
      'max-height': px,
      'min-width': px,
      'max-width': px,
      // Position properties
      bottom: px,
      left: px,
      top: px,
      right: px,
      // Shadow properties
      'box-shadow': px,
      'text-shadow': px,
      // Column properties
      'column-gap': px,
      'column-rule': px,
      'column-rule-width': px,
      'column-width': px,
      // Font and text properties
      'font-size': px,
      'font-size-delta': px,
      'letter-spacing': px,
      'text-indent': px,
      'text-stroke': px,
      'text-stroke-width': px,
      'word-spacing': px,
      // Motion properties
      motion: px,
      'motion-offset': px,
      // Outline properties
      outline: px,
      'outline-offset': px,
      'outline-width': px,
      // Perspective properties
      perspective: px,
      'perspective-origin-x': percent,
      'perspective-origin-y': percent,
      // Transform properties
      'transform-origin': percent,
      'transform-origin-x': percent,
      'transform-origin-y': percent,
      'transform-origin-z': percent,
      // Transition properties
      'transition-delay': ms,
      'transition-duration': ms,
      // Alignment properties
      'vertical-align': px,
      'flex-basis': px,
      // Some random properties
      'shape-margin': px,
      size: px,
      // Grid properties
      grid: px,
      'grid-gap': px,
      'grid-row-gap': px,
      'grid-column-gap': px,
      'grid-template-rows': px,
      'grid-template-columns': px,
      'grid-auto-rows': px,
      'grid-auto-columns': px,
      // Not existing properties.
      // Used to avoid issues with jss-plugin-expand integration.
      'box-shadow-x': px,
      'box-shadow-y': px,
      'box-shadow-blur': px,
      'box-shadow-spread': px,
      'font-line-height': px,
      'text-shadow-x': px,
      'text-shadow-y': px,
      'text-shadow-blur': px
    };

    /**
     * Clones the object and adds a camel cased property version.
     */
    function addCamelCasedVersion(obj) {
      var regExp = /(-[a-z])/g;

      var replace = function replace(str) {
        return str[1].toUpperCase();
      };

      var newObj = {};

      for (var _key in obj) {
        newObj[_key] = obj[_key];
        newObj[_key.replace(regExp, replace)] = obj[_key];
      }

      return newObj;
    }

    var units = addCamelCasedVersion(defaultUnits);
    /**
     * Recursive deep style passing function
     */

    function iterate(prop, value, options) {
      if (!value) return value;

      if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
          value[i] = iterate(prop, value[i], options);
        }
      } else if (typeof value === 'object') {
        if (prop === 'fallbacks') {
          for (var innerProp in value) {
            value[innerProp] = iterate(innerProp, value[innerProp], options);
          }
        } else {
          for (var _innerProp in value) {
            value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
          }
        }
      } else if (typeof value === 'number') {
        if (options[prop]) {
          return "" + value + options[prop];
        }

        if (units[prop]) {
          return typeof units[prop] === 'function' ? units[prop](value).toString() : "" + value + units[prop];
        }

        return value.toString();
      }

      return value;
    }
    /**
     * Add unit to numeric values.
     */


    function defaultUnit(options) {
      if (options === void 0) {
        options = {};
      }

      var camelCasedOptions = addCamelCasedVersion(options);

      function onProcessStyle(style, rule) {
        if (rule.type !== 'style') return style;

        for (var prop in style) {
          style[prop] = iterate(prop, style[prop], camelCasedOptions);
        }

        return style;
      }

      function onChangeValue(value, prop) {
        return iterate(prop, value, camelCasedOptions);
      }

      return {
        onProcessStyle: onProcessStyle,
        onChangeValue: onChangeValue
      };
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    // Export javascript style and css style vendor prefixes.
    var js = '';
    var css$1 = '';
    var vendor = '';
    var browser = '';
    var isTouch = isBrowser && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

    if (isBrowser) {
      // Order matters. We need to check Webkit the last one because
      // other vendors use to add Webkit prefixes to some properties
      var jsCssMap = {
        Moz: '-moz-',
        ms: '-ms-',
        O: '-o-',
        Webkit: '-webkit-'
      };

      var _document$createEleme = document.createElement('p'),
          style = _document$createEleme.style;

      var testProp = 'Transform';

      for (var key in jsCssMap) {
        if (key + testProp in style) {
          js = key;
          css$1 = jsCssMap[key];
          break;
        }
      } // Correctly detect the Edge browser.


      if (js === 'Webkit' && 'msHyphens' in style) {
        js = 'ms';
        css$1 = jsCssMap.ms;
        browser = 'edge';
      } // Correctly detect the Safari browser.


      if (js === 'Webkit' && '-apple-trailing-word' in style) {
        vendor = 'apple';
      }
    }
    /**
     * Vendor prefix string for the current browser.
     *
     * @type {{js: String, css: String, vendor: String, browser: String}}
     * @api public
     */


    var prefix = {
      js: js,
      css: css$1,
      vendor: vendor,
      browser: browser,
      isTouch: isTouch
    };

    /**
     * Test if a keyframe at-rule should be prefixed or not
     *
     * @param {String} vendor prefix string for the current browser.
     * @return {String}
     * @api public
     */

    function supportedKeyframes(key) {
      // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
      if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
      // https://caniuse.com/#search=keyframes

      if (prefix.js === 'ms') return key;
      return "@" + prefix.css + "keyframes" + key.substr(10);
    }

    // https://caniuse.com/#search=appearance

    var appearence = {
      noPrefill: ['appearance'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'appearance') return false;
        if (prefix.js === 'ms') return "-webkit-" + prop;
        return prefix.css + prop;
      }
    };

    var regExp = /[-\s]+(.)?/g;
    /**
     * Replaces the letter with the capital letter
     *
     * @param {String} match
     * @param {String} c
     * @return {String}
     * @api private
     */

    function toUpper(match, c) {
      return c ? c.toUpperCase() : '';
    }
    /**
     * Convert dash separated strings to camel-cased.
     *
     * @param {String} str
     * @return {String}
     * @api private
     */


    function camelize(str) {
      return str.replace(regExp, toUpper);
    }

    /**
     * Convert dash separated strings to pascal cased.
     *
     * @param {String} str
     * @return {String}
     * @api private
     */

    function pascalize(str) {
      return camelize("-" + str);
    }

    // https://caniuse.com/#search=multicolumn
    // https://github.com/postcss/autoprefixer/issues/491
    // https://github.com/postcss/autoprefixer/issues/177

    var breakPropsOld = {
      supportedProperty: function supportedProperty(prop, style) {
        if (!/^break-/.test(prop)) return false;

        if (prefix.js === 'Webkit') {
          var jsProp = "WebkitColumn" + pascalize(prop);
          return jsProp in style ? prefix.css + "column-" + prop : false;
        }

        if (prefix.js === 'Moz') {
          var _jsProp = "page" + pascalize(prop);

          return _jsProp in style ? "page-" + prop : false;
        }

        return false;
      }
    };

    // https://caniuse.com/#search=color-adjust

    var colorAdjust = {
      noPrefill: ['color-adjust'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'color-adjust') return false;
        if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
        return prop;
      }
    };

    var propMap = {
      flex: 'box-flex',
      'flex-grow': 'box-flex',
      'flex-direction': ['box-orient', 'box-direction'],
      order: 'box-ordinal-group',
      'align-items': 'box-align',
      'flex-flow': ['box-orient', 'box-direction'],
      'justify-content': 'box-pack'
    };
    var propKeys = Object.keys(propMap);

    var prefixCss = function prefixCss(p) {
      return prefix.css + p;
    }; // Support old flex spec from 2009.


    var flex2009 = {
      supportedProperty: function supportedProperty(prop, style, _ref) {
        var multiple = _ref.multiple;

        if (propKeys.indexOf(prop) > -1) {
          var newProp = propMap[prop];

          if (!Array.isArray(newProp)) {
            return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
          }

          if (!multiple) return false;

          for (var i = 0; i < newProp.length; i++) {
            if (!(prefix.js + pascalize(newProp[0]) in style)) {
              return false;
            }
          }

          return newProp.map(prefixCss);
        }

        return false;
      }
    };

    var propMap$1 = {
      'flex-grow': 'flex-positive',
      'flex-shrink': 'flex-negative',
      'flex-basis': 'flex-preferred-size',
      'justify-content': 'flex-pack',
      order: 'flex-order',
      'align-items': 'flex-align',
      'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.
      // Support old flex spec from 2012.

    };
    var flex2012 = {
      supportedProperty: function supportedProperty(prop, style) {
        var newProp = propMap$1[prop];
        if (!newProp) return false;
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }
    };

    // See https://github.com/postcss/autoprefixer/issues/324.

    var inlineLogicalOld = {
      supportedProperty: function supportedProperty(prop, style) {
        if (!/^(border|margin|padding)-inline/.test(prop)) return false;
        if (prefix.js === 'Moz') return prop;
        var newProp = prop.replace('-inline', '');
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }
    };

    // but we can use a longhand property instead.
    // https://caniuse.com/#search=mask

    var mask = {
      noPrefill: ['mask'],
      supportedProperty: function supportedProperty(prop, style) {
        if (!/^mask/.test(prop)) return false;

        if (prefix.js === 'Webkit') {
          var longhand = 'mask-image';

          if (camelize(longhand) in style) {
            return prop;
          }

          if (prefix.js + pascalize(longhand) in style) {
            return prefix.css + prop;
          }
        }

        return prop;
      }
    };

    // https://caniuse.com/#search=overscroll-behavior

    var overscrollBehavior = {
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'overscroll-behavior') return false;

        if (prefix.js === 'ms') {
          return prefix.css + "scroll-chaining";
        }

        return prop;
      }
    };

    var prefixed = {
      supportedProperty: function supportedProperty(prop, style) {
        var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

        if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

        if (prop[0] === '-' && prop[1] === '-') return prop;
        if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

        if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
        return false;
      }
    };

    // https://caniuse.com/#search=scroll-snap

    var scrollSnap = {
      supportedProperty: function supportedProperty(prop) {
        if (prop.substring(0, 11) !== 'scroll-snap') return false;

        if (prefix.js === 'ms') {
          return "" + prefix.css + prop;
        }

        return prop;
      }
    };

    // https://caniuse.com/#search=text-orientation

    var textOrientation = {
      noPrefill: ['text-orientation'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'text-orientation') return false;

        if (prefix.vendor === 'apple' && !prefix.isTouch) {
          return prefix.css + prop;
        }

        return prop;
      }
    };

    // https://caniuse.com/#search=transform

    var transform = {
      noPrefill: ['transform'],
      supportedProperty: function supportedProperty(prop, style, options) {
        if (prop !== 'transform') return false;

        if (options.transform) {
          return prop;
        }

        return prefix.css + prop;
      }
    };

    // https://caniuse.com/#search=transition

    var transition = {
      noPrefill: ['transition'],
      supportedProperty: function supportedProperty(prop, style, options) {
        if (prop !== 'transition') return false;

        if (options.transition) {
          return prop;
        }

        return prefix.css + prop;
      }
    };

    // Camelization is required because we can't test using.
    // CSS syntax for e.g. in FF.

    var unprefixed = {
      supportedProperty: function supportedProperty(prop, style) {
        return camelize(prop) in style ? prop : false;
      }
    };

    // https://caniuse.com/#search=writing-mode

    var writingMode = {
      noPrefill: ['writing-mode'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'writing-mode') return false;

        if (prefix.js === 'Webkit' || prefix.js === 'ms') {
          return prefix.css + prop;
        }

        return prop;
      }
    };

    // plugins = [
    //   ...plugins,
    //    breakPropsOld,
    //    inlineLogicalOld,
    //    unprefixed,
    //    prefixed,
    //    scrollSnap,
    //    flex2012,
    //    flex2009
    // ]
    // Plugins without 'noPrefill' value, going last.
    // 'flex-*' plugins should be at the bottom.
    // 'flex2009' going after 'flex2012'.
    // 'prefixed' going after 'unprefixed'

    var plugins$1 = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
    var propertyDetectors = plugins$1.filter(function (p) {
      return p.supportedProperty;
    }).map(function (p) {
      return p.supportedProperty;
    });
    var noPrefill = plugins$1.filter(function (p) {
      return p.noPrefill;
    }).reduce(function (a, p) {
      a.push.apply(a, _toConsumableArray(p.noPrefill));
      return a;
    }, []);

    var el;
    var cache$1 = {};

    if (isBrowser) {
      el = document.createElement('p'); // We test every property on vendor prefix requirement.
      // Once tested, result is cached. It gives us up to 70% perf boost.
      // http://jsperf.com/element-style-object-access-vs-plain-object
      //
      // Prefill cache with known css properties to reduce amount of
      // properties we need to feature test at runtime.
      // http://davidwalsh.name/vendor-prefix

      var computed = window.getComputedStyle(document.documentElement, '');

      for (var key$1 in computed) {
        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(key$1)) cache$1[computed[key$1]] = computed[key$1];
      } // Properties that cannot be correctly detected using the
      // cache prefill method.


      noPrefill.forEach(function (x) {
        return delete cache$1[x];
      });
    }
    /**
     * Test if a property is supported, returns supported property with vendor
     * prefix if required. Returns `false` if not supported.
     *
     * @param {String} prop dash separated
     * @param {Object} [options]
     * @return {String|Boolean}
     * @api public
     */


    function supportedProperty(prop, options) {
      if (options === void 0) {
        options = {};
      }

      // For server-side rendering.
      if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

      if (process.env.NODE_ENV !== 'benchmark' && cache$1[prop] != null) {
        return cache$1[prop];
      } // Check if 'transition' or 'transform' natively supported in browser.


      if (prop === 'transition' || prop === 'transform') {
        options[prop] = prop in el.style;
      } // Find a plugin for current prefix property.


      for (var i = 0; i < propertyDetectors.length; i++) {
        cache$1[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

        if (cache$1[prop]) break;
      } // Reset styles for current property.
      // Firefox can even throw an error for invalid properties, e.g., "0".


      try {
        el.style[prop] = '';
      } catch (err) {
        return false;
      }

      return cache$1[prop];
    }

    var cache$1$1 = {};
    var transitionProperties = {
      transition: 1,
      'transition-property': 1,
      '-webkit-transition': 1,
      '-webkit-transition-property': 1
    };
    var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
    var el$1;
    /**
     * Returns prefixed value transition/transform if needed.
     *
     * @param {String} match
     * @param {String} p1
     * @param {String} p2
     * @return {String}
     * @api private
     */

    function prefixTransitionCallback(match, p1, p2) {
      if (p1 === 'var') return 'var';
      if (p1 === 'all') return 'all';
      if (p2 === 'all') return ', all';
      return p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
    }

    if (isBrowser) el$1 = document.createElement('p');
    /**
     * Returns prefixed value if needed. Returns `false` if value is not supported.
     *
     * @param {String} property
     * @param {String} value
     * @return {String|Boolean}
     * @api public
     */

    function supportedValue(property, value) {
      // For server-side rendering.
      var prefixedValue = value;
      if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
      // We want only prefixable values here.
      // eslint-disable-next-line no-restricted-globals

      if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
        return prefixedValue;
      } // Create cache key for current value.


      var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

      if (process.env.NODE_ENV !== 'benchmark' && cache$1$1[cacheKey] != null) {
        return cache$1$1[cacheKey];
      } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


      try {
        // Test value as it is.
        el$1.style[property] = prefixedValue;
      } catch (err) {
        // Return false if value not supported.
        cache$1$1[cacheKey] = false;
        return false;
      } // If 'transition' or 'transition-property' property.


      if (transitionProperties[property]) {
        prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
      } else if (el$1.style[property] === '') {
        // Value with a vendor prefix.
        prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

        if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

        el$1.style[property] = prefixedValue; // Return false if value not supported.

        if (el$1.style[property] === '') {
          cache$1$1[cacheKey] = false;
          return false;
        }
      } // Reset styles for current property.


      el$1.style[property] = ''; // Write current value to cache.

      cache$1$1[cacheKey] = prefixedValue;
      return cache$1$1[cacheKey];
    }

    /**
     * Add vendor prefix to a property name when needed.
     *
     * @api public
     */

    function jssVendorPrefixer() {
      function onProcessRule(rule) {
        if (rule.type === 'keyframes') {
          var atRule = rule;
          atRule.at = supportedKeyframes(atRule.at);
        }
      }

      function onProcessStyle(style, rule) {
        if (rule.type !== 'style') return style;

        for (var prop in style) {
          var value = style[prop];
          var changeProp = false;
          var supportedProp = supportedProperty(prop);
          if (supportedProp && supportedProp !== prop) changeProp = true;
          var changeValue = false;
          var supportedValue$$1 = supportedValue(supportedProp, toCssValue(value));
          if (supportedValue$$1 && supportedValue$$1 !== value) changeValue = true;

          if (changeProp || changeValue) {
            if (changeProp) delete style[prop];
            style[supportedProp || prop] = supportedValue$$1 || value;
          }
        }

        return style;
      }

      function onChangeValue(value, prop) {
        return supportedValue(prop, toCssValue(value)) || value;
      }

      return {
        onProcessRule: onProcessRule,
        onProcessStyle: onProcessStyle,
        onChangeValue: onChangeValue
      };
    }

    /**
     * Sort props by length.
     */
    function jssPropsSort() {
      var sort = function sort(prop0, prop1) {
        if (prop0.length === prop1.length) {
          return prop0 > prop1 ? 1 : -1;
        }

        return prop0.length - prop1.length;
      };

      return {
        onProcessStyle: function onProcessStyle(style, rule) {
          if (rule.type !== 'style') return style;
          var newStyle = {};
          var props = Object.keys(style).sort(sort);

          for (var i = 0; i < props.length; i++) {
            newStyle[props[i]] = style[props[i]];
          }

          return newStyle;
        }
      };
    }

    function jssPreset() {
      return {
        plugins: [functionPlugin(), jssGlobal(), jssNested(), camelCase(), defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
        // This way, we can get a performance boost.
        // In the documentation, we are using `autoprefixer` to solve this problem.
        typeof window === 'undefined' ? null : jssVendorPrefixer(), jssPropsSort()]
      };
    }

    function mergeClasses() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var baseClasses = options.baseClasses,
          newClasses = options.newClasses,
          Component = options.Component;

      if (!newClasses) {
        return baseClasses;
      }

      var nextClasses = _extends({}, baseClasses);

      if (process.env.NODE_ENV !== 'production') {
        if (typeof newClasses === 'string') {
          console.error(["Material-UI: the value `".concat(newClasses, "` ") + "provided to the classes prop of ".concat(getDisplayName(Component), " is incorrect."), 'You might want to use the className prop instead.'].join('\n'));
          return baseClasses;
        }
      }

      Object.keys(newClasses).forEach(function (key) {
        if (process.env.NODE_ENV !== 'production') {
          if (!baseClasses[key] && newClasses[key]) {
            console.error(["Material-UI: the key `".concat(key, "` ") + "provided to the classes prop is not implemented in ".concat(getDisplayName(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(','), ".")].join('\n'));
          }

          if (newClasses[key] && typeof newClasses[key] !== 'string') {
            console.error(["Material-UI: the key `".concat(key, "` ") + "provided to the classes prop is not valid for ".concat(getDisplayName(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join('\n'));
          }
        }

        if (newClasses[key]) {
          nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
        }
      });
      return nextClasses;
    }

    // Used https://github.com/thinkloop/multi-key-cache as inspiration
    var multiKeyStore = {
      set: function set(cache, key1, key2, value) {
        var subCache = cache.get(key1);

        if (!subCache) {
          subCache = new Map();
          cache.set(key1, subCache);
        }

        subCache.set(key2, value);
      },
      get: function get(cache, key1, key2) {
        var subCache = cache.get(key1);
        return subCache ? subCache.get(key2) : undefined;
      },
      delete: function _delete(cache, key1, key2) {
        var subCache = cache.get(key1);
        subCache.delete(key2);
      }
    };

    var ThemeContext = React__default.createContext(null);

    function useTheme() {
      return React__default.useContext(ThemeContext);
    }

    var jss = create(jssPreset()); // Use a singleton or the provided one by the context.
    //
    // The counter-based approach doesn't tolerate any mistake.
    // It's much safer to use the same counter everywhere.

    var generateClassName = createGenerateClassName(); // Exported for test purposes

    var sheetsManager = new Map();
    var defaultOptions = {
      disableGeneration: false,
      generateClassName: generateClassName,
      jss: jss,
      sheetsCache: null,
      sheetsManager: sheetsManager,
      sheetsRegistry: null
    };
    var StylesContext = React__default.createContext(defaultOptions);
    var injectFirstNode;

    function StylesProvider(props) {
      var children = props.children,
          _props$injectFirst = props.injectFirst,
          injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst,
          _props$disableGenerat = props.disableGeneration,
          disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat,
          localOptions = _objectWithoutProperties(props, ["children", "injectFirst", "disableGeneration"]);

      var outerOptions = React__default.useContext(StylesContext);

      var context = _extends({}, outerOptions, {
        disableGeneration: disableGeneration
      }, localOptions);

      if (process.env.NODE_ENV !== 'production') {
        if (typeof window === 'undefined' && !context.sheetsManager) {
          console.error('Material-UI: you need to use the ServerStyleSheets API when rendering on the server.');
        }
      }

      if (process.env.NODE_ENV !== 'production') {
        if (context.jss.options.insertionPoint && injectFirst) {
          console.error('Material-UI: you cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.');
        }
      }

      if (process.env.NODE_ENV !== 'production') {
        if (injectFirst && localOptions.jss) {
          console.error('Material-UI: you cannot use the jss and injectFirst props at the same time.');
        }
      }

      if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
        if (!injectFirstNode) {
          var head = document.head;
          injectFirstNode = document.createComment('mui-inject-first');
          head.insertBefore(injectFirstNode, head.firstChild);
        }

        context.jss = create({
          plugins: jssPreset().plugins,
          insertionPoint: injectFirstNode
        });
      }

      return React__default.createElement(StylesContext.Provider, {
        value: context
      }, children);
    }

    process.env.NODE_ENV !== "production" ? StylesProvider.propTypes = {
      /**
       * Your component tree.
       */
      children: propTypes.node.isRequired,

      /**
       * You can disable the generation of the styles with this option.
       * It can be useful when traversing the React tree outside of the HTML
       * rendering step on the server.
       * Let's say you are using react-apollo to extract all
       * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
       */
      disableGeneration: propTypes.bool,

      /**
       * JSS's class name generator.
       */
      generateClassName: propTypes.func,

      /**
       * By default, the styles are injected last in the <head> element of the page.
       * As a result, they gain more specificity than any other style sheet.
       * If you want to override Material-UI's styles, set this prop.
       */
      injectFirst: propTypes.bool,

      /**
       * JSS's instance.
       */
      jss: propTypes.object,

      /**
       * @ignore
       */
      serverGenerateClassName: propTypes.func,

      /**
       * @ignore
       *
       * Beta feature.
       *
       * Cache for the sheets.
       */
      sheetsCache: propTypes.object,

      /**
       * @ignore
       *
       * The sheetsManager is used to deduplicate style sheet injection in the page.
       * It's deduplicating using the (theme, styles) couple.
       * On the server, you should provide a new instance for each request.
       */
      sheetsManager: propTypes.object,

      /**
       * @ignore
       *
       * Collect the sheets.
       */
      sheetsRegistry: propTypes.object
    } : void 0;

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== "production" ? StylesProvider.propTypes = exactProp(StylesProvider.propTypes) : void 0;
    }

    /* eslint-disable import/prefer-default-export */
    // Global index counter to preserve source order.
    // We create the style sheet during at the creation of the component,
    // children are handled after the parents, so the order of style elements would be parent->child.
    // It is a problem though when a parent passes a className
    // which needs to override any child's styles.
    // StyleSheet of the child has a higher specificity, because of the source order.
    // So our solution is to render sheets them in the reverse order child->sheet, so
    // that parent has a higher specificity.
    var indexCounter = -1e9;
    function increment() {
      indexCounter += 1;

      if (process.env.NODE_ENV !== 'production') {
        if (indexCounter >= 0) {
          console.warn(['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join('\n'));
        }
      }

      return indexCounter;
    }

    var isMergeableObject = function isMergeableObject(value) {
    	return isNonNullObject(value)
    		&& !isSpecial(value)
    };

    function isNonNullObject(value) {
    	return !!value && typeof value === 'object'
    }

    function isSpecial(value) {
    	var stringValue = Object.prototype.toString.call(value);

    	return stringValue === '[object RegExp]'
    		|| stringValue === '[object Date]'
    		|| isReactElement(value)
    }

    // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
    var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

    function isReactElement(value) {
    	return value.$$typeof === REACT_ELEMENT_TYPE
    }

    function emptyTarget(val) {
    	return Array.isArray(val) ? [] : {}
    }

    function cloneUnlessOtherwiseSpecified(value, options) {
    	return (options.clone !== false && options.isMergeableObject(value))
    		? deepmerge(emptyTarget(value), value, options)
    		: value
    }

    function defaultArrayMerge(target, source, options) {
    	return target.concat(source).map(function(element) {
    		return cloneUnlessOtherwiseSpecified(element, options)
    	})
    }

    function getMergeFunction(key, options) {
    	if (!options.customMerge) {
    		return deepmerge
    	}
    	var customMerge = options.customMerge(key);
    	return typeof customMerge === 'function' ? customMerge : deepmerge
    }

    function getEnumerableOwnPropertySymbols(target) {
    	return Object.getOwnPropertySymbols
    		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    			return target.propertyIsEnumerable(symbol)
    		})
    		: []
    }

    function getKeys(target) {
    	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
    }

    function mergeObject(target, source, options) {
    	var destination = {};
    	if (options.isMergeableObject(target)) {
    		getKeys(target).forEach(function(key) {
    			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    		});
    	}
    	getKeys(source).forEach(function(key) {
    		if (!options.isMergeableObject(source[key]) || !target[key]) {
    			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    		} else {
    			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    		}
    	});
    	return destination
    }

    function deepmerge(target, source, options) {
    	options = options || {};
    	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

    	var sourceIsArray = Array.isArray(source);
    	var targetIsArray = Array.isArray(target);
    	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    	if (!sourceAndTargetTypesMatch) {
    		return cloneUnlessOtherwiseSpecified(source, options)
    	} else if (sourceIsArray) {
    		return options.arrayMerge(target, source, options)
    	} else {
    		return mergeObject(target, source, options)
    	}
    }

    deepmerge.all = function deepmergeAll(array, options) {
    	if (!Array.isArray(array)) {
    		throw new Error('first argument should be an array')
    	}

    	return array.reduce(function(prev, next) {
    		return deepmerge(prev, next, options)
    	}, {})
    };

    var deepmerge_1 = deepmerge;

    var cjs = deepmerge_1;

    // We use the same empty object to ref count the styles that don't need a theme object.
    var noopTheme = {};

    function arrayMerge(destination, source) {
      return source;
    }

    function getStylesCreator(stylesOrCreator) {
      var themingEnabled = typeof stylesOrCreator === 'function';

      if (process.env.NODE_ENV !== 'production') {
        if (_typeof(stylesOrCreator) !== 'object' && !themingEnabled) {
          console.error(['Material-UI: the `styles` argument provided is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n'));
        }
      }

      return {
        create: function create(theme, name) {
          var styles;

          try {
            styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
          } catch (err) {
            if (process.env.NODE_ENV !== 'production') {
              if (themingEnabled === true && theme === noopTheme) {
                // TODO: prepend error message/name instead
                console.error(['Material-UI: the `styles` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
              }
            }

            throw err;
          }

          if (!name || !theme.overrides || !theme.overrides[name]) {
            return styles;
          }

          var overrides = theme.overrides[name];

          var stylesWithOverrides = _extends({}, styles);

          Object.keys(overrides).forEach(function (key) {
            if (process.env.NODE_ENV !== 'production') {
              if (!stylesWithOverrides[key]) {
                console.warn(['Material-UI: you are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n'));
              }
            }

            stylesWithOverrides[key] = cjs(stylesWithOverrides[key], overrides[key], {
              arrayMerge: arrayMerge
            });
          });
          return stylesWithOverrides;
        },
        options: {}
      };
    }

    function getClasses(_ref, classes, Component) {
      var state = _ref.state,
          stylesOptions = _ref.stylesOptions;

      if (stylesOptions.disableGeneration) {
        return classes || {};
      }

      if (!state.cacheClasses) {
        state.cacheClasses = {
          // Cache for the finalized classes value.
          value: null,
          // Cache for the last used classes prop pointer.
          lastProp: null,
          // Cache for the last used rendered classes pointer.
          lastJSS: {}
        };
      } // Tracks if either the rendered classes or classes prop has changed,
      // requiring the generation of a new finalized classes object.


      var generate = false;

      if (state.classes !== state.cacheClasses.lastJSS) {
        state.cacheClasses.lastJSS = state.classes;
        generate = true;
      }

      if (classes !== state.cacheClasses.lastProp) {
        state.cacheClasses.lastProp = classes;
        generate = true;
      }

      if (generate) {
        state.cacheClasses.value = mergeClasses({
          baseClasses: state.cacheClasses.lastJSS,
          newClasses: classes,
          Component: Component
        });
      }

      return state.cacheClasses.value;
    }

    function attach(_ref2, props) {
      var state = _ref2.state,
          theme = _ref2.theme,
          stylesOptions = _ref2.stylesOptions,
          stylesCreator = _ref2.stylesCreator,
          name = _ref2.name;

      if (stylesOptions.disableGeneration) {
        return;
      }

      var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);

      if (!sheetManager) {
        sheetManager = {
          refs: 0,
          staticSheet: null,
          dynamicStyles: null
        };
        multiKeyStore.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
      }

      var options = _extends({}, stylesCreator.options, {}, stylesOptions, {
        theme: theme,
        flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
      });

      options.generateId = options.serverGenerateClassName || options.generateClassName;
      var sheetsRegistry = stylesOptions.sheetsRegistry;

      if (sheetManager.refs === 0) {
        var staticSheet;

        if (stylesOptions.sheetsCache) {
          staticSheet = multiKeyStore.get(stylesOptions.sheetsCache, stylesCreator, theme);
        }

        var styles = stylesCreator.create(theme, name);

        if (!staticSheet) {
          staticSheet = stylesOptions.jss.createStyleSheet(styles, _extends({
            link: false
          }, options));
          staticSheet.attach();

          if (stylesOptions.sheetsCache) {
            multiKeyStore.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
          }
        }

        if (sheetsRegistry) {
          sheetsRegistry.add(staticSheet);
        }

        sheetManager.staticSheet = staticSheet;
        sheetManager.dynamicStyles = getDynamicStyles(styles);
      }

      if (sheetManager.dynamicStyles) {
        var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends({
          link: true
        }, options));
        dynamicSheet.update(props).attach();
        state.dynamicSheet = dynamicSheet;
        state.classes = mergeClasses({
          baseClasses: sheetManager.staticSheet.classes,
          newClasses: dynamicSheet.classes
        });

        if (sheetsRegistry) {
          sheetsRegistry.add(dynamicSheet);
        }
      } else {
        state.classes = sheetManager.staticSheet.classes;
      }

      sheetManager.refs += 1;
    }

    function update(_ref3, props) {
      var state = _ref3.state;

      if (state.dynamicSheet) {
        state.dynamicSheet.update(props);
      }
    }

    function detach(_ref4) {
      var state = _ref4.state,
          theme = _ref4.theme,
          stylesOptions = _ref4.stylesOptions,
          stylesCreator = _ref4.stylesCreator;

      if (stylesOptions.disableGeneration) {
        return;
      }

      var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);
      sheetManager.refs -= 1;
      var sheetsRegistry = stylesOptions.sheetsRegistry;

      if (sheetManager.refs === 0) {
        multiKeyStore.delete(stylesOptions.sheetsManager, stylesCreator, theme);
        stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

        if (sheetsRegistry) {
          sheetsRegistry.remove(sheetManager.staticSheet);
        }
      }

      if (state.dynamicSheet) {
        stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

        if (sheetsRegistry) {
          sheetsRegistry.remove(state.dynamicSheet);
        }
      }
    }

    function useSynchronousEffect(func, values) {
      var key = React__default.useRef([]);
      var output; // Store "generation" key. Just returns a new object every time

      var currentKey = React__default.useMemo(function () {
        return {};
      }, values); // eslint-disable-line react-hooks/exhaustive-deps
      // "the first render", or "memo dropped the value"

      if (key.current !== currentKey) {
        key.current = currentKey;
        output = func();
      }

      React__default.useEffect(function () {
        return function () {
          if (output) {
            output();
          }
        };
      }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
      );
    }

    function makeStyles(stylesOrCreator) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var name = options.name,
          classNamePrefixOption = options.classNamePrefix,
          Component = options.Component,
          _options$defaultTheme = options.defaultTheme,
          defaultTheme = _options$defaultTheme === void 0 ? noopTheme : _options$defaultTheme,
          stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

      var stylesCreator = getStylesCreator(stylesOrCreator);
      var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
      stylesCreator.options = {
        index: increment(),
        name: name,
        meta: classNamePrefix,
        classNamePrefix: classNamePrefix
      };
      return function () {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var theme = useTheme() || defaultTheme;

        var stylesOptions = _extends({}, React__default.useContext(StylesContext), {}, stylesOptions2);

        var instance = React__default.useRef();
        var shouldUpdate = React__default.useRef();
        useSynchronousEffect(function () {
          var current = {
            name: name,
            state: {},
            stylesCreator: stylesCreator,
            stylesOptions: stylesOptions,
            theme: theme
          };
          attach(current, props);
          shouldUpdate.current = false;
          instance.current = current;
          return function () {
            detach(current);
          };
        }, [theme, stylesCreator]);
        React__default.useEffect(function () {
          if (shouldUpdate.current) {
            update(instance.current, props);
          }

          shouldUpdate.current = true;
        });
        return getClasses(instance.current, props.classes, Component);
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var ServerStyleSheets =
    /*#__PURE__*/
    function () {
      function ServerStyleSheets() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ServerStyleSheets);

        this.options = options;
      }

      _createClass(ServerStyleSheets, [{
        key: "collect",
        value: function collect(children) {
          // This is needed in order to deduplicate the injection of CSS in the page.
          var sheetsManager$$1 = new Map(); // This is needed in order to inject the critical CSS.

          this.sheetsRegistry = new SheetsRegistry(); // A new class name generator

          var generateClassName = createGenerateClassName();
          return React__default.createElement(StylesProvider, _extends({
            sheetsManager: sheetsManager$$1,
            serverGenerateClassName: generateClassName,
            sheetsRegistry: this.sheetsRegistry
          }, this.options), children);
        }
      }, {
        key: "toString",
        value: function toString() {
          return this.sheetsRegistry ? this.sheetsRegistry.toString() : '';
        }
      }, {
        key: "getStyleElement",
        value: function getStyleElement(props) {
          return React__default.createElement('style', _extends({
            id: 'jss-server-side',
            key: 'jss-server-side',
            dangerouslySetInnerHTML: {
              __html: this.toString()
            }
          }, props));
        }
      }]);

      return ServerStyleSheets;
    }();

    /**
     * Copyright 2015, Yahoo! Inc.
     * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
     */

    var REACT_STATICS = {
        childContextTypes: true,
        contextType: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromError: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
    };

    var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
    };

    var FORWARD_REF_STATICS = {
        '$$typeof': true,
        render: true,
        defaultProps: true,
        displayName: true,
        propTypes: true
    };

    var MEMO_STATICS = {
        '$$typeof': true,
        compare: true,
        defaultProps: true,
        displayName: true,
        propTypes: true,
        type: true
    };

    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

    function getStatics(component) {
        if (reactIs.isMemo(component)) {
            return MEMO_STATICS;
        }
        return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
    }

    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;

    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== 'string') {
            // don't hoist over string (html) components

            if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
            }

            var keys = getOwnPropertyNames(sourceComponent);

            if (getOwnPropertySymbols$1) {
                keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
            }

            var targetStatics = getStatics(targetComponent);
            var sourceStatics = getStatics(sourceComponent);

            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                    try {
                        // Avoid failures from read-only properties
                        defineProperty(targetComponent, key, descriptor);
                    } catch (e) {}
                }
            }

            return targetComponent;
        }

        return targetComponent;
    }

    var hoistNonReactStatics_cjs = hoistNonReactStatics;

    function omit(input, fields) {
      var output = {};
      Object.keys(input).forEach(function (prop) {
        if (fields.indexOf(prop) === -1) {
          output[prop] = input[prop];
        }
      });
      return output;
    } // styled-components's API removes the mapping between components and styles.
    // Using components as a low-level styling construct can be simpler.


    function styled(Component) {
      var componentCreator = function componentCreator(style) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var name = options.name,
            stylesOptions = _objectWithoutProperties(options, ["name"]);

        if (process.env.NODE_ENV !== 'production' && Component === undefined) {
          throw new Error(['You are calling styled(Component)(style) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
        }

        var classNamePrefix = name;

        if (process.env.NODE_ENV !== 'production') {
          if (!name) {
            // Provide a better DX outside production.
            var displayName = getDisplayName(Component);

            if (displayName !== undefined) {
              classNamePrefix = displayName;
            }
          }
        }

        var stylesOrCreator = typeof style === 'function' ? function (theme) {
          return {
            root: function root(props) {
              return style(_extends({
                theme: theme
              }, props));
            }
          };
        } : {
          root: style
        };
        var useStyles = makeStyles(stylesOrCreator, _extends({
          Component: Component,
          name: name || Component.displayName,
          classNamePrefix: classNamePrefix
        }, stylesOptions));
        var filterProps;
        var propTypes$$1 = {};

        if (style.filterProps) {
          filterProps = style.filterProps;
          delete style.filterProps;
        }
        /* eslint-disable react/forbid-foreign-prop-types */


        if (style.propTypes) {
          propTypes$$1 = style.propTypes;
          delete style.propTypes;
        }
        /* eslint-enable react/forbid-foreign-prop-types */


        var StyledComponent = React__default.forwardRef(function StyledComponent(props, ref) {
          var children = props.children,
              classNameProp = props.className,
              clone = props.clone,
              ComponentProp = props.component,
              other = _objectWithoutProperties(props, ["children", "className", "clone", "component"]);

          var classes = useStyles(props);
          var className = clsx(classes.root, classNameProp);
          var spread = other;

          if (filterProps) {
            spread = omit(spread, filterProps);
          }

          if (clone) {
            return React__default.cloneElement(children, _extends({
              className: clsx(children.props.className, className)
            }, spread));
          }

          if (typeof children === 'function') {
            return children(_extends({
              className: className
            }, spread));
          }

          var FinalComponent = ComponentProp || Component;
          return React__default.createElement(FinalComponent, _extends({
            ref: ref,
            className: className
          }, spread), children);
        });
        process.env.NODE_ENV !== "production" ? StyledComponent.propTypes = _extends({
          /**
           * A render function or node.
           */
          children: propTypes.oneOfType([propTypes.node, propTypes.func]),

          /**
           * @ignore
           */
          className: propTypes.string,

          /**
           * If `true`, the component will recycle it's children DOM element.
           * It's using `React.cloneElement` internally.
           *
           * This prop will be deprecated and removed in v5
           */
          clone: chainPropTypes(propTypes.bool, function (props) {
            if (props.clone && props.component) {
              return new Error('You can not use the clone and component prop at the same time.');
            }

            return null;
          }),

          /**
           * The component used for the root node.
           * Either a string to use a DOM element or a component.
           */
          component: propTypes.elementType
        }, propTypes$$1) : void 0;

        if (process.env.NODE_ENV !== 'production') {
          StyledComponent.displayName = "Styled(".concat(classNamePrefix, ")");
        }

        hoistNonReactStatics_cjs(StyledComponent, Component);
        return StyledComponent;
      };

      return componentCreator;
    }

    function mergeOuterLocalTheme(outerTheme, localTheme) {
      if (typeof localTheme === 'function') {
        var mergedTheme = localTheme(outerTheme);

        if (process.env.NODE_ENV !== 'production') {
          if (!mergedTheme) {
            console.error(['Material-UI: you should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n'));
          }
        }

        return mergedTheme;
      }

      return _extends({}, outerTheme, {}, localTheme);
    }
    /**
     * This component takes a `theme` prop.
     * It makes the `theme` available down the React tree thanks to React context.
     * This component should preferably be used at **the root of your component tree**.
     */


    function ThemeProvider(props) {
      var children = props.children,
          localTheme = props.theme;
      var outerTheme = useTheme();

      if (process.env.NODE_ENV !== 'production') {
        if (outerTheme === null && typeof localTheme === 'function') {
          console.error(['Material-UI: you are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
        }
      }

      var theme = React__default.useMemo(function () {
        var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

        if (output != null) {
          output[nested] = outerTheme !== null;
        }

        return output;
      }, [localTheme, outerTheme]);
      return React__default.createElement(ThemeContext.Provider, {
        value: theme
      }, children);
    }

    process.env.NODE_ENV !== "production" ? ThemeProvider.propTypes = {
      /**
       * Your component tree
       */
      children: propTypes.node.isRequired,

      /**
       * A theme object. You can provide a function to extend the outer theme.
       */
      theme: propTypes.oneOfType([propTypes.object, propTypes.func]).isRequired
    } : void 0;

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== "production" ? ThemeProvider.propTypes = exactProp(ThemeProvider.propTypes) : void 0;
    }

    // It does not modify the component passed to it;
    // instead, it returns a new component, with a `classes` property.

    var withStyles = function withStyles(stylesOrCreator) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return function (Component) {
        var defaultTheme = options.defaultTheme,
            _options$withTheme = options.withTheme,
            withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
            name = options.name,
            stylesOptions = _objectWithoutProperties(options, ["defaultTheme", "withTheme", "name"]);

        if (process.env.NODE_ENV !== 'production') {
          if (Component === undefined) {
            throw new Error(['You are calling withStyles(styles)(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
          }
        }

        var classNamePrefix = name;

        if (process.env.NODE_ENV !== 'production') {
          if (!name) {
            // Provide a better DX outside production.
            var displayName = getDisplayName(Component);

            if (displayName !== undefined) {
              classNamePrefix = displayName;
            }
          }
        }

        var useStyles = makeStyles(stylesOrCreator, _extends({
          defaultTheme: defaultTheme,
          Component: Component,
          name: name || Component.displayName,
          classNamePrefix: classNamePrefix
        }, stylesOptions));
        var WithStyles = React__default.forwardRef(function WithStyles(props, ref) {
          var classesProp = props.classes,
              innerRef = props.innerRef,
              other = _objectWithoutProperties(props, ["classes", "innerRef"]);

          var classes = useStyles(props);
          var theme;
          var more = other;

          if (typeof name === 'string' || withTheme) {
            // name and withTheme are invariant in the outer scope
            // eslint-disable-next-line react-hooks/rules-of-hooks
            theme = useTheme() || defaultTheme;

            if (name) {
              more = getThemeProps({
                theme: theme,
                name: name,
                props: other
              });
            } // Provide the theme to the wrapped component.
            // So we don't have to use the `withTheme()` Higher-order Component.


            if (withTheme && !more.theme) {
              more.theme = theme;
            }
          }

          return React__default.createElement(Component, _extends({
            ref: innerRef || ref,
            classes: classes
          }, more));
        });
        process.env.NODE_ENV !== "production" ? WithStyles.propTypes = {
          /**
           * Override or extend the styles applied to the component.
           */
          classes: propTypes.object,

          /**
           * Use that prop to pass a ref to the decorated component.
           * @deprecated
           */
          innerRef: chainPropTypes(propTypes.oneOfType([propTypes.func, propTypes.object]), function (props) {
            if (props.innerRef == null) {
              return null;
            }

            return null; // return new Error(
            //   'Material-UI: the `innerRef` prop is deprecated and will be removed in v5. ' +
            //     'Refs are now automatically forwarded to the inner component.',
            // );
          })
        } : void 0;

        if (process.env.NODE_ENV !== 'production') {
          WithStyles.displayName = "WithStyles(".concat(getDisplayName(Component), ")");
        }

        hoistNonReactStatics_cjs(WithStyles, Component);

        if (process.env.NODE_ENV !== 'production') {
          // Exposed for test purposes.
          WithStyles.Naked = Component;
          WithStyles.options = options;
          WithStyles.useStyles = useStyles;
        }

        return WithStyles;
      };
    };

    function withThemeCreator() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var defaultTheme = options.defaultTheme;

      var withTheme = function withTheme(Component) {
        if (process.env.NODE_ENV !== 'production') {
          if (Component === undefined) {
            throw new Error(['You are calling withTheme(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
          }
        }

        var WithTheme = React__default.forwardRef(function WithTheme(props, ref) {
          var innerRef = props.innerRef,
              other = _objectWithoutProperties(props, ["innerRef"]);

          var theme = useTheme() || defaultTheme;
          return React__default.createElement(Component, _extends({
            theme: theme,
            ref: innerRef || ref
          }, other));
        });
        process.env.NODE_ENV !== "production" ? WithTheme.propTypes = {
          /**
           * Use that prop to pass a ref to the decorated component.
           * @deprecated
           */
          innerRef: chainPropTypes(propTypes.oneOfType([propTypes.func, propTypes.object]), function (props) {
            if (props.innerRef == null) {
              return null;
            }

            return new Error('Material-UI: the `innerRef` prop is deprecated and will be removed in v5. ' + 'Refs are now automatically forwarded to the inner component.');
          })
        } : void 0;

        if (process.env.NODE_ENV !== 'production') {
          WithTheme.displayName = "WithTheme(".concat(getDisplayName(Component), ")");
        }

        hoistNonReactStatics_cjs(WithTheme, Component);

        if (process.env.NODE_ENV !== 'production') {
          // Exposed for test purposes.
          WithTheme.Naked = Component;
        }

        return WithTheme;
      };

      return withTheme;
    } // Provide the theme object as a prop to the input component.
    // It's an alternative API to useTheme().
    // We encourage the usage of useTheme() where possible.

    var withTheme = withThemeCreator();

    /** @license Material-UI v4.4.3
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    /* Warning if there are several instances of @material-ui/styles */

    if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test' && typeof window !== 'undefined') {
      ponyfillGlobal['__@material-ui/styles-init__'] = ponyfillGlobal['__@material-ui/styles-init__'] || 0;

      if (ponyfillGlobal['__@material-ui/styles-init__'] === 1) {
        console.warn(['It looks like there are several instances of `@material-ui/styles` initialized in this application.', 'This may cause theme propagation issues, broken class names, ' + 'specificity issues, and makes your application bigger without a good reason.', '', 'See https://material-ui.com/r/styles-instance-warning for more info.'].join('\n'));
      }

      ponyfillGlobal['__@material-ui/styles-init__'] += 1;
    }

    /*!
     * isobject <https://github.com/jonschlinkert/isobject>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */

    function isObject(val) {
      return val != null && typeof val === 'object' && Array.isArray(val) === false;
    }

    /*!
     * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     */

    function isObjectObject(o) {
      return isObject(o) === true
        && Object.prototype.toString.call(o) === '[object Object]';
    }

    function isPlainObject(o) {
      var ctor,prot;

      if (isObjectObject(o) === false) return false;

      // If has modified constructor
      ctor = o.constructor;
      if (typeof ctor !== 'function') return false;

      // If has modified prototype
      prot = ctor.prototype;
      if (isObjectObject(prot) === false) return false;

      // If constructor does not have an Object-specific method
      if (prot.hasOwnProperty('isPrototypeOf') === false) {
        return false;
      }

      // Most likely a plain Object
      return true;
    }

    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

    function createBreakpoints(breakpoints) {
      var _breakpoints$values = breakpoints.values,
          values = _breakpoints$values === void 0 ? {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      } : _breakpoints$values,
          _breakpoints$unit = breakpoints.unit,
          unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
          _breakpoints$step = breakpoints.step,
          step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
          other = _objectWithoutProperties(breakpoints, ["values", "unit", "step"]);

      function up(key) {
        var value = typeof values[key] === 'number' ? values[key] : key;
        return "@media (min-width:".concat(value).concat(unit, ")");
      }

      function down(key) {
        var endIndex = keys.indexOf(key) + 1;
        var upperbound = values[keys[endIndex]];

        if (endIndex === keys.length) {
          // xl down applies to all sizes
          return up('xs');
        }

        var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
        return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
      }

      function between(start, end) {
        var endIndex = keys.indexOf(end) + 1;

        if (endIndex === keys.length) {
          return up(start);
        }

        return "@media (min-width:".concat(values[start]).concat(unit, ") and ") + "(max-width:".concat(values[keys[endIndex]] - step / 100).concat(unit, ")");
      }

      function only(key) {
        return between(key, key);
      }

      function width(key) {
        return values[key];
      }

      return _extends({
        keys: keys,
        values: values,
        up: up,
        down: down,
        between: between,
        only: only,
        width: width
      }, other);
    }

    function createMixins(breakpoints, spacing, mixins) {
      var _toolbar;

      return _extends({
        gutters: function gutters() {
          var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          // To deprecate in v4.1
          //       warning(
          //         false,
          //         [
          //           'Material-UI: theme.mixins.gutters() is deprecated.',
          //           'You can use the source of the mixin directly:',
          //           `
          // paddingLeft: theme.spacing(2),
          // paddingRight: theme.spacing(2),
          // [theme.breakpoints.up('sm')]: {
          //   paddingLeft: theme.spacing(3),
          //   paddingRight: theme.spacing(3),
          // },
          // `,
          //         ].join('\n'),
          //       );
          return _extends({
            paddingLeft: spacing(2),
            paddingRight: spacing(2)
          }, styles, _defineProperty({}, breakpoints.up('sm'), _extends({
            paddingLeft: spacing(3),
            paddingRight: spacing(3)
          }, styles[breakpoints.up('sm')])));
        },
        toolbar: (_toolbar = {
          minHeight: 56
        }, _defineProperty(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
          minHeight: 48
        }), _defineProperty(_toolbar, breakpoints.up('sm'), {
          minHeight: 64
        }), _toolbar)
      }, mixins);
    }

    var indigo = {
      50: '#e8eaf6',
      100: '#c5cae9',
      200: '#9fa8da',
      300: '#7986cb',
      400: '#5c6bc0',
      500: '#3f51b5',
      600: '#3949ab',
      700: '#303f9f',
      800: '#283593',
      900: '#1a237e',
      A100: '#8c9eff',
      A200: '#536dfe',
      A400: '#3d5afe',
      A700: '#304ffe'
    };

    var pink = {
      50: '#fce4ec',
      100: '#f8bbd0',
      200: '#f48fb1',
      300: '#f06292',
      400: '#ec407a',
      500: '#e91e63',
      600: '#d81b60',
      700: '#c2185b',
      800: '#ad1457',
      900: '#880e4f',
      A100: '#ff80ab',
      A200: '#ff4081',
      A400: '#f50057',
      A700: '#c51162'
    };

    var grey = {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161'
    };

    var red = {
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
      300: '#e57373',
      400: '#ef5350',
      500: '#f44336',
      600: '#e53935',
      700: '#d32f2f',
      800: '#c62828',
      900: '#b71c1c',
      A100: '#ff8a80',
      A200: '#ff5252',
      A400: '#ff1744',
      A700: '#d50000'
    };

    var common = {
      black: '#000',
      white: '#fff'
    };

    /* eslint-disable no-use-before-define */

    /**
     * Returns a number whose value is limited to the given range.
     *
     * @param {number} value The value to be clamped
     * @param {number} min The lower boundary of the output range
     * @param {number} max The upper boundary of the output range
     * @returns {number} A number in the range [min, max]
     */
    function clamp(value) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      if (process.env.NODE_ENV !== 'production') {
        if (value < min || value > max) {
          console.error("Material-UI: the value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
        }
      }

      if (value < min) {
        return min;
      }

      if (value > max) {
        return max;
      }

      return value;
    }
    /**
     * Converts a color from CSS hex format to CSS rgb format.
     *
     * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
     * @returns {string} A CSS rgb color string
     */


    function hexToRgb(color) {
      color = color.substr(1);
      var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
      var colors = color.match(re);

      if (colors && colors[0].length === 1) {
        colors = colors.map(function (n) {
          return n + n;
        });
      }

      return colors ? "rgb(".concat(colors.map(function (n) {
        return parseInt(n, 16);
      }).join(', '), ")") : '';
    }
    /**
     * Converts a color from hsl format to rgb format.
     *
     * @param {string} color - HSL color values
     * @returns {string} rgb color values
     */

    function hslToRgb(color) {
      color = decomposeColor(color);
      var _color = color,
          values = _color.values;
      var h = values[0];
      var s = values[1] / 100;
      var l = values[2] / 100;
      var a = s * Math.min(l, 1 - l);

      var f = function f(n) {
        var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
        return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      };

      var type = 'rgb';
      var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

      if (color.type === 'hsla') {
        type += 'a';
        rgb.push(values[3]);
      }

      return recomposeColor({
        type: type,
        values: rgb
      });
    }
    /**
     * Returns an object with the type and values of a color.
     *
     * Note: Does not support rgb % values.
     *
     * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
     * @returns {object} - A MUI color object: {type: string, values: number[]}
     */

    function decomposeColor(color) {
      // Idempotent
      if (color.type) {
        return color;
      }

      if (color.charAt(0) === '#') {
        return decomposeColor(hexToRgb(color));
      }

      var marker = color.indexOf('(');
      var type = color.substring(0, marker);

      if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
        throw new Error(["Material-UI: unsupported `".concat(color, "` color."), 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'].join('\n'));
      }

      var values = color.substring(marker + 1, color.length - 1).split(',');
      values = values.map(function (value) {
        return parseFloat(value);
      });
      return {
        type: type,
        values: values
      };
    }
    /**
     * Converts a color object with type and values to a string.
     *
     * @param {object} color - Decomposed color
     * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
     * @param {array} color.values - [n,n,n] or [n,n,n,n]
     * @returns {string} A CSS color string
     */

    function recomposeColor(color) {
      var type = color.type;
      var values = color.values;

      if (type.indexOf('rgb') !== -1) {
        // Only convert the first 3 values to int (i.e. not alpha)
        values = values.map(function (n, i) {
          return i < 3 ? parseInt(n, 10) : n;
        });
      } else if (type.indexOf('hsl') !== -1) {
        values[1] = "".concat(values[1], "%");
        values[2] = "".concat(values[2], "%");
      }

      return "".concat(type, "(").concat(values.join(', '), ")");
    }
    /**
     * Calculates the contrast ratio between two colors.
     *
     * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
     *
     * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
     * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
     * @returns {number} A contrast ratio value in the range 0 - 21.
     */

    function getContrastRatio(foreground, background) {
      var lumA = getLuminance(foreground);
      var lumB = getLuminance(background);
      return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
    }
    /**
     * The relative brightness of any point in a color space,
     * normalized to 0 for darkest black and 1 for lightest white.
     *
     * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
     *
     * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
     * @returns {number} The relative brightness of the color in the range 0 - 1
     */

    function getLuminance(color) {
      color = decomposeColor(color);
      var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
      rgb = rgb.map(function (val) {
        val /= 255; // normalized

        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      }); // Truncate at 3 digits

      return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
    }
    /**
     * Set the absolute transparency of a color.
     * Any existing alpha values are overwritten.
     *
     * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
     * @param {number} value - value to set the alpha channel to in the range 0 -1
     * @returns {string} A CSS color string. Hex input values are returned as rgb
     */

    function fade(color, value) {
      color = decomposeColor(color);
      value = clamp(value);

      if (color.type === 'rgb' || color.type === 'hsl') {
        color.type += 'a';
      }

      color.values[3] = value;
      return recomposeColor(color);
    }
    /**
     * Darkens a color.
     *
     * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
     * @param {number} coefficient - multiplier in the range 0 - 1
     * @returns {string} A CSS color string. Hex input values are returned as rgb
     */

    function darken(color, coefficient) {
      color = decomposeColor(color);
      coefficient = clamp(coefficient);

      if (color.type.indexOf('hsl') !== -1) {
        color.values[2] *= 1 - coefficient;
      } else if (color.type.indexOf('rgb') !== -1) {
        for (var i = 0; i < 3; i += 1) {
          color.values[i] *= 1 - coefficient;
        }
      }

      return recomposeColor(color);
    }
    /**
     * Lightens a color.
     *
     * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
     * @param {number} coefficient - multiplier in the range 0 - 1
     * @returns {string} A CSS color string. Hex input values are returned as rgb
     */

    function lighten(color, coefficient) {
      color = decomposeColor(color);
      coefficient = clamp(coefficient);

      if (color.type.indexOf('hsl') !== -1) {
        color.values[2] += (100 - color.values[2]) * coefficient;
      } else if (color.type.indexOf('rgb') !== -1) {
        for (var i = 0; i < 3; i += 1) {
          color.values[i] += (255 - color.values[i]) * coefficient;
        }
      }

      return recomposeColor(color);
    }

    var light = {
      // The colors used to style the text.
      text: {
        // The most important text.
        primary: 'rgba(0, 0, 0, 0.87)',
        // Secondary text.
        secondary: 'rgba(0, 0, 0, 0.54)',
        // Disabled text have even lower visual prominence.
        disabled: 'rgba(0, 0, 0, 0.38)',
        // Text hints.
        hint: 'rgba(0, 0, 0, 0.38)'
      },
      // The color used to divide different elements.
      divider: 'rgba(0, 0, 0, 0.12)',
      // The background colors used to style the surfaces.
      // Consistency between these values is important.
      background: {
        paper: common.white,
        default: grey[50]
      },
      // The colors used to style the action elements.
      action: {
        // The color of an active action like an icon button.
        active: 'rgba(0, 0, 0, 0.54)',
        // The color of an hovered action.
        hover: 'rgba(0, 0, 0, 0.08)',
        hoverOpacity: 0.08,
        // The color of a selected action.
        selected: 'rgba(0, 0, 0, 0.14)',
        // The color of a disabled action.
        disabled: 'rgba(0, 0, 0, 0.26)',
        // The background color of a disabled action.
        disabledBackground: 'rgba(0, 0, 0, 0.12)'
      }
    };
    var dark = {
      text: {
        primary: common.white,
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
        hint: 'rgba(255, 255, 255, 0.5)',
        icon: 'rgba(255, 255, 255, 0.5)'
      },
      divider: 'rgba(255, 255, 255, 0.12)',
      background: {
        paper: grey[800],
        default: '#303030'
      },
      action: {
        active: common.white,
        hover: 'rgba(255, 255, 255, 0.1)',
        hoverOpacity: 0.1,
        selected: 'rgba(255, 255, 255, 0.2)',
        disabled: 'rgba(255, 255, 255, 0.3)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)'
      }
    };

    function addLightOrDark(intent, direction, shade, tonalOffset) {
      if (!intent[direction]) {
        if (intent.hasOwnProperty(shade)) {
          intent[direction] = intent[shade];
        } else if (direction === 'light') {
          intent.light = lighten(intent.main, tonalOffset);
        } else if (direction === 'dark') {
          intent.dark = darken(intent.main, tonalOffset * 1.5);
        }
      }
    }

    function createPalette(palette) {
      var _palette$primary = palette.primary,
          primary = _palette$primary === void 0 ? {
        light: indigo[300],
        main: indigo[500],
        dark: indigo[700]
      } : _palette$primary,
          _palette$secondary = palette.secondary,
          secondary = _palette$secondary === void 0 ? {
        light: pink.A200,
        main: pink.A400,
        dark: pink.A700
      } : _palette$secondary,
          _palette$error = palette.error,
          error = _palette$error === void 0 ? {
        light: red[300],
        main: red[500],
        dark: red[700]
      } : _palette$error,
          _palette$type = palette.type,
          type = _palette$type === void 0 ? 'light' : _palette$type,
          _palette$contrastThre = palette.contrastThreshold,
          contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
          _palette$tonalOffset = palette.tonalOffset,
          tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
          other = _objectWithoutProperties(palette, ["primary", "secondary", "error", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
      // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
      // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


      function getContrastText(background) {
        if (process.env.NODE_ENV !== 'production') {
          if (!background) {
            console.error("Material-UI: missing background argument in getContrastText(".concat(background, ")."));
          }
        }

        var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

        if (process.env.NODE_ENV !== 'production') {
          var contrast = getContrastRatio(background, contrastText);

          if (process.env.NODE_ENV !== 'production') {
            if (contrast < 3) {
              console.error(["Material-UI: the contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WACG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
            }
          }
        }

        return contrastText;
      }

      function augmentColor(color) {
        var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
        var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
        color = _extends({}, color);

        if (!color.main && color[mainShade]) {
          color.main = color[mainShade];
        }

        if (process.env.NODE_ENV !== 'production') {
          if (!color.main) {
            throw new Error(['Material-UI: the color provided to augmentColor(color) is invalid.', "The color object needs to have a `main` property or a `".concat(mainShade, "` property.")].join('\n'));
          }
        }

        addLightOrDark(color, 'light', lightShade, tonalOffset);
        addLightOrDark(color, 'dark', darkShade, tonalOffset);

        if (!color.contrastText) {
          color.contrastText = getContrastText(color.main);
        }

        return color;
      }

      var types = {
        dark: dark,
        light: light
      };

      if (process.env.NODE_ENV !== 'production') {
        if (!types[type]) {
          console.error("Material-UI: the palette type `".concat(type, "` is not supported."));
        }
      }

      var paletteOutput = cjs(_extends({
        // A collection of common colors.
        common: common,
        // The palette type, can be light or dark.
        type: type,
        // The colors used to represent primary interface elements for a user.
        primary: augmentColor(primary),
        // The colors used to represent secondary interface elements for a user.
        secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
        // The colors used to represent interface elements that the user should be made aware of.
        error: augmentColor(error),
        // The grey colors.
        grey: grey,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: contrastThreshold,
        // Take a background color and return the color of the text to maximize the contrast.
        getContrastText: getContrastText,
        // Generate a rich color object.
        augmentColor: augmentColor,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: tonalOffset
      }, types[type]), other, {
        clone: false // No need to clone deep

      });
      return paletteOutput;
    }

    function round(value) {
      return Math.round(value * 1e5) / 1e5;
    }

    var caseAllCaps = {
      textTransform: 'uppercase'
    };
    var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
    /**
     * @see @link{https://material.io/design/typography/the-type-system.html}
     * @see @link{https://material.io/design/typography/understanding-typography.html}
     */

    function createTypography(palette, typography) {
      var _ref = typeof typography === 'function' ? typography(palette) : typography,
          _ref$fontFamily = _ref.fontFamily,
          fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
          _ref$fontSize = _ref.fontSize,
          fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
          _ref$fontWeightLight = _ref.fontWeightLight,
          fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
          _ref$fontWeightRegula = _ref.fontWeightRegular,
          fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
          _ref$fontWeightMedium = _ref.fontWeightMedium,
          fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
          _ref$fontWeightBold = _ref.fontWeightBold,
          fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
          _ref$htmlFontSize = _ref.htmlFontSize,
          htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
          allVariants = _ref.allVariants,
          pxToRem2 = _ref.pxToRem,
          other = _objectWithoutProperties(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

      if (process.env.NODE_ENV !== 'production') {
        if (typeof fontSize !== 'number') {
          console.error("Material-UI: 'fontSize' is required to be a number.");
        }

        if (typeof htmlFontSize !== 'number') {
          console.error("Material-UI: 'htmlFontSize' is required to be a number.");
        }
      }

      var coef = fontSize / 14;

      var pxToRem = pxToRem2 || function (size) {
        return "".concat(size / htmlFontSize * coef, "rem");
      };

      var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
        return _extends({
          fontFamily: fontFamily,
          fontWeight: fontWeight,
          fontSize: pxToRem(size),
          // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
          lineHeight: lineHeight
        }, fontFamily === defaultFontFamily ? {
          letterSpacing: "".concat(round(letterSpacing / size), "em")
        } : {}, {}, casing, {}, allVariants);
      };

      var variants = {
        h1: buildVariant(fontWeightLight, 96, 1, -1.5),
        h2: buildVariant(fontWeightLight, 60, 1, -0.5),
        h3: buildVariant(fontWeightRegular, 48, 1.04, 0),
        h4: buildVariant(fontWeightRegular, 34, 1.17, 0.25),
        h5: buildVariant(fontWeightRegular, 24, 1.33, 0),
        h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
        subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
        subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
        body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
        body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
        button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
        caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
        overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
      };
      return cjs(_extends({
        htmlFontSize: htmlFontSize,
        pxToRem: pxToRem,
        round: round,
        // TODO To remove in v5?
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeightLight: fontWeightLight,
        fontWeightRegular: fontWeightRegular,
        fontWeightMedium: fontWeightMedium,
        fontWeightBold: fontWeightBold
      }, variants), other, {
        clone: false // No need to clone deep

      });
    }

    var shadowKeyUmbraOpacity = 0.2;
    var shadowKeyPenumbraOpacity = 0.14;
    var shadowAmbientShadowOpacity = 0.12;

    function createShadow() {
      return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
    }

    var shadows = ['none', createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1), createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2), createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

    var shape = {
      borderRadius: 4
    };

    var warnOnce;
    function createSpacing() {
      var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

      // Already transformed.
      if (spacingInput.mui) {
        return spacingInput;
      } // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
      // https://material.io/design/layout/understanding-layout.html#pixel-density


      var transform;

      if (typeof spacingInput === 'function') {
        transform = spacingInput;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          if (typeof spacingInput !== 'number') {
            console.error(["Material-UI: the `theme.spacing` value (".concat(spacingInput, ") is invalid."), 'It should be a number or a function.'].join('\n'));
          }
        }

        transform = function transform(factor) {
          if (process.env.NODE_ENV !== 'production') {
            if (typeof factor !== 'number') {
              console.error("Expected spacing argument to be a number, got ".concat(factor));
            }
          }

          return spacingInput * factor;
        };
      }

      var spacing = function spacing() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (process.env.NODE_ENV !== 'production') {
          if (!(args.length <= 4)) {
            console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
          }
        }

        if (args.length === 0) {
          return transform(1);
        }

        if (args.length === 1) {
          return transform(args[0]);
        }

        return args.map(function (factor) {
          var output = transform(factor);
          return typeof output === 'number' ? "".concat(output, "px") : output;
        }).join(' ');
      }; // Backward compatibility, to remove in v5.


      Object.defineProperty(spacing, 'unit', {
        get: function get() {
          if (process.env.NODE_ENV !== 'production') {
            if (!warnOnce || process.env.NODE_ENV === 'test') {
              console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
            }

            warnOnce = true;
          }

          return spacingInput;
        }
      });
      spacing.mui = true;
      return spacing;
    }

    /* eslint-disable no-restricted-globals */
    // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
    // to learn the context in which each easing should be used.
    var easing = {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    }; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
    // to learn when use what timing

    var duration = {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195
    };
    var formatMs = function formatMs(milliseconds) {
      return "".concat(Math.round(milliseconds), "ms");
    };
    var isString = function isString(value) {
      return typeof value === 'string';
    };
    var isNumber = function isNumber(value) {
      return !isNaN(parseFloat(value));
    };
    /**
     * @param {string|Array} props
     * @param {object} param
     * @param {string} param.prop
     * @param {number} param.duration
     * @param {string} param.easing
     * @param {number} param.delay
     */

    var transitions = {
      easing: easing,
      duration: duration,
      create: function create() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _options$duration = options.duration,
            durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
            _options$easing = options.easing,
            easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
            _options$delay = options.delay,
            delay = _options$delay === void 0 ? 0 : _options$delay,
            other = _objectWithoutProperties(options, ["duration", "easing", "delay"]);

        if (process.env.NODE_ENV !== 'production') {
          if (!isString(props) && !Array.isArray(props)) {
            console.error('Material-UI: argument "props" must be a string or Array.');
          }

          if (!isNumber(durationOption) && !isString(durationOption)) {
            console.error("Material-UI: argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
          }

          if (!isString(easingOption)) {
            console.error('Material-UI: argument "easing" must be a string.');
          }

          if (!isNumber(delay) && !isString(delay)) {
            console.error('Material-UI: argument "delay" must be a number or a string.');
          }

          if (Object.keys(other).length !== 0) {
            console.error("Material-UI: unrecognized argument(s) [".concat(Object.keys(other).join(','), "]"));
          }
        }

        return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
          return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
        }).join(',');
      },
      getAutoHeightDuration: function getAutoHeightDuration(height) {
        if (!height) {
          return 0;
        }

        var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

        return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
      }
    };

    // We need to centralize the zIndex definitions as they work
    // like global values in the browser.
    var zIndex = {
      mobileStepper: 1000,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    };

    function createMuiTheme() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _options$breakpoints = options.breakpoints,
          breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
          _options$mixins = options.mixins,
          mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
          _options$palette = options.palette,
          paletteInput = _options$palette === void 0 ? {} : _options$palette,
          shadowsInput = options.shadows,
          spacingInput = options.spacing,
          _options$typography = options.typography,
          typographyInput = _options$typography === void 0 ? {} : _options$typography,
          other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "shadows", "spacing", "typography"]);

      var palette = createPalette(paletteInput);
      var breakpoints = createBreakpoints(breakpointsInput);
      var spacing = createSpacing(spacingInput);

      var muiTheme = _extends({
        breakpoints: breakpoints,
        direction: 'ltr',
        mixins: createMixins(breakpoints, spacing, mixinsInput),
        overrides: {},
        // Inject custom styles
        palette: palette,
        props: {},
        // Inject custom props
        shadows: shadowsInput || shadows,
        typography: createTypography(palette, typographyInput),
        spacing: spacing
      }, cjs({
        shape: shape,
        transitions: transitions,
        zIndex: zIndex
      }, other, {
        isMergeableObject: isPlainObject
      }));

      if (process.env.NODE_ENV !== 'production') {
        var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

        var traverse = function traverse(node, parentKey) {
          var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

          for (key in node) {
            var child = node[key];

            if (depth === 1) {
              if (key.indexOf('Mui') === 0 && child) {
                traverse(child, key, depth + 1);
              }
            } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
              if (process.env.NODE_ENV !== 'production') {
                console.error(["Material-UI: the `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
                  root: _defineProperty({}, "&$".concat(key), child)
                }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
              } // Remove the style to prevent global conflicts.


              node[key] = {};
            }
          }
        };

        traverse(muiTheme.overrides);
      }

      if (process.env.NODE_ENV !== 'production') {
        if (muiTheme.shadows.length !== 25) {
          console.error('Material-UI: the shadows array provided to createMuiTheme should support 25 elevations.');
        }
      }

      return muiTheme;
    }

    var defaultTheme = createMuiTheme();

    function withStyles$1(stylesOrCreator, options) {
      return withStyles(stylesOrCreator, _extends({
        defaultTheme: defaultTheme
      }, options));
    }

    function isMuiElement(element, muiNames) {
      return React__default.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
    } // TODO: Make it private only in v5

    function setRef(ref, value) {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
    }
    function useForkRef(refA, refB) {
      /**
       * This will create a new function if the ref props change and are defined.
       * This means react will call the old forkRef with `null` and the new forkRef
       * with the ref. Cleanup naturally emerges from this behavior
       */
      return React__default.useMemo(function () {
        if (refA == null && refB == null) {
          return null;
        }

        return function (refValue) {
          setRef(refA, refValue);
          setRef(refB, refValue);
        };
      }, [refA, refB]);
    }

    var useEnhancedEffect = typeof window !== 'undefined' ? React__default.useLayoutEffect : React__default.useEffect;
    /**
     * https://github.com/facebook/react/issues/14099#issuecomment-440013892
     *
     * @param {function} fn
     */

    function useEventCallback(fn) {
      var ref = React__default.useRef(fn);
      useEnhancedEffect(function () {
        ref.current = fn;
      });
      return React__default.useCallback(function (event) {
        return (0, ref.current)(event);
      }, []);
    }

    var useEnhancedEffect$1 = typeof window !== 'undefined' && process.env.NODE_ENV !== 'test' ? React__default.useLayoutEffect : React__default.useEffect;
    /**
     * NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
     *
     * This component can be useful in a variety of situations:
     * - Escape hatch for broken dependencies not supporting SSR.
     * - Improve the time-to-first paint on the client by only rendering above the fold.
     * - Reduce the rendering time on the server.
     * - Under too heavy server load, you can turn on service degradation.
     */

    function NoSsr(props) {
      var children = props.children,
          _props$defer = props.defer,
          defer = _props$defer === void 0 ? false : _props$defer,
          _props$fallback = props.fallback,
          fallback = _props$fallback === void 0 ? null : _props$fallback;

      var _React$useState = React__default.useState(false),
          mountedState = _React$useState[0],
          setMountedState = _React$useState[1];

      useEnhancedEffect$1(function () {
        if (!defer) {
          setMountedState(true);
        }
      }, [defer]);
      React__default.useEffect(function () {
        if (defer) {
          setMountedState(true);
        }
      }, [defer]); // We need the Fragment here to force react-docgen to recognise NoSsr as a component.

      return React__default.createElement(React__default.Fragment, null, mountedState ? children : fallback);
    }

    process.env.NODE_ENV !== "production" ? NoSsr.propTypes = {
      /**
       * You can wrap a node.
       */
      children: propTypes.node.isRequired,

      /**
       * If `true`, the component will not only prevent server-side rendering.
       * It will also defer the rendering of the children into a different screen frame.
       */
      defer: propTypes.bool,

      /**
       * The fallback content to display.
       */
      fallback: propTypes.node
    } : void 0;

    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line
      NoSsr['propTypes' + ''] = exactProp(NoSsr.propTypes);
    }

    // based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;
    var inputTypesWhitelist = {
      text: true,
      search: true,
      url: true,
      tel: true,
      email: true,
      password: true,
      number: true,
      date: true,
      month: true,
      week: true,
      time: true,
      datetime: true,
      'datetime-local': true
    };
    /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} node
     * @return {boolean}
     */

    function focusTriggersKeyboardModality(node) {
      var type = node.type,
          tagName = node.tagName;

      if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
        return true;
      }

      if (tagName === 'TEXTAREA' && !node.readOnly) {
        return true;
      }

      if (node.isContentEditable) {
        return true;
      }

      return false;
    }

    function handleKeyDown() {
      hadKeyboardEvent = true;
    }
    /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */


    function handlePointerDown() {
      hadKeyboardEvent = false;
    }

    function handleVisibilityChange() {
      if (this.visibilityState === 'hidden') {
        // If the tab becomes active again, the browser will handle calling focus
        // on the element (Safari actually calls it twice).
        // If this tab change caused a blur on an element with focus-visible,
        // re-apply the class when the user switches back to the tab.
        if (hadFocusVisibleRecently) {
          hadKeyboardEvent = true;
        }
      }
    }

    function prepare(ownerDocument) {
      ownerDocument.addEventListener('keydown', handleKeyDown, true);
      ownerDocument.addEventListener('mousedown', handlePointerDown, true);
      ownerDocument.addEventListener('pointerdown', handlePointerDown, true);
      ownerDocument.addEventListener('touchstart', handlePointerDown, true);
      ownerDocument.addEventListener('visibilitychange', handleVisibilityChange, true);
    }

    function isFocusVisible(event) {
      var target = event.target;

      try {
        return target.matches(':focus-visible');
      } catch (error) {} // browsers not implementing :focus-visible will throw a SyntaxError
      // we use our own heuristic for those browsers
      // rethrow might be better if it's not the expected error but do we really
      // want to crash if focus-visible malfunctioned?
      // no need for validFocusTarget check. the user does that by attaching it to
      // focusable events only


      return hadKeyboardEvent || focusTriggersKeyboardModality(target);
    }
    /**
     * Should be called if a blur event is fired on a focus-visible element
     */


    function handleBlurVisible() {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      }, 100);
    }

    function useIsFocusVisible() {
      var ref = React__default.useCallback(function (instance) {
        var node = ReactDOM.findDOMNode(instance);

        if (node != null) {
          prepare(node.ownerDocument);
        }
      }, []);
      return {
        isFocusVisible: isFocusVisible,
        onBlurVisible: handleBlurVisible,
        ref: ref
      };
    }

    function hasClass(element, className) {
      if (element.classList) return !!className && element.classList.contains(className);
      return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
    }

    function addClass(element, className) {
      if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
    }

    function replaceClassName(origClass, classToRemove) {
      return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
    }

    function removeClass(element, className) {
      if (element.classList) {
        element.classList.remove(className);
      } else if (typeof element.className === 'string') {
        element.className = replaceClassName(element.className, className);
      } else {
        element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
      }
    }

    var config = {
      disabled: false
    };

    var timeoutsShape = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.number, propTypes.shape({
      enter: propTypes.number,
      exit: propTypes.number,
      appear: propTypes.number
    }).isRequired]) : null;
    var classNamesShape = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.string, propTypes.shape({
      enter: propTypes.string,
      exit: propTypes.string,
      active: propTypes.string
    }), propTypes.shape({
      enter: propTypes.string,
      enterDone: propTypes.string,
      enterActive: propTypes.string,
      exit: propTypes.string,
      exitDone: propTypes.string,
      exitActive: propTypes.string
    })]) : null;

    var TransitionGroupContext = React__default.createContext(null);

    var UNMOUNTED = 'unmounted';
    var EXITED = 'exited';
    var ENTERING = 'entering';
    var ENTERED = 'entered';
    var EXITING = 'exiting';
    /**
     * The Transition component lets you describe a transition from one component
     * state to another _over time_ with a simple declarative API. Most commonly
     * it's used to animate the mounting and unmounting of a component, but can also
     * be used to describe in-place transition states as well.
     *
     * ---
     *
     * **Note**: `Transition` is a platform-agnostic base component. If you're using
     * transitions in CSS, you'll probably want to use
     * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
     * instead. It inherits all the features of `Transition`, but contains
     * additional features necessary to play nice with CSS transitions (hence the
     * name of the component).
     *
     * ---
     *
     * By default the `Transition` component does not alter the behavior of the
     * component it renders, it only tracks "enter" and "exit" states for the
     * components. It's up to you to give meaning and effect to those states. For
     * example we can add styles to a component when it enters or exits:
     *
     * ```jsx
     * import { Transition } from 'react-transition-group';
     *
     * const duration = 300;
     *
     * const defaultStyle = {
     *   transition: `opacity ${duration}ms ease-in-out`,
     *   opacity: 0,
     * }
     *
     * const transitionStyles = {
     *   entering: { opacity: 1 },
     *   entered:  { opacity: 1 },
     *   exiting:  { opacity: 0 },
     *   exited:  { opacity: 0 },
     * };
     *
     * const Fade = ({ in: inProp }) => (
     *   <Transition in={inProp} timeout={duration}>
     *     {state => (
     *       <div style={{
     *         ...defaultStyle,
     *         ...transitionStyles[state]
     *       }}>
     *         I'm a fade Transition!
     *       </div>
     *     )}
     *   </Transition>
     * );
     * ```
     *
     * There are 4 main states a Transition can be in:
     *  - `'entering'`
     *  - `'entered'`
     *  - `'exiting'`
     *  - `'exited'`
     *
     * Transition state is toggled via the `in` prop. When `true` the component
     * begins the "Enter" stage. During this stage, the component will shift from
     * its current transition state, to `'entering'` for the duration of the
     * transition and then to the `'entered'` stage once it's complete. Let's take
     * the following example (we'll use the
     * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
     *
     * ```jsx
     * function App() {
     *   const [inProp, setInProp] = useState(false);
     *   return (
     *     <div>
     *       <Transition in={inProp} timeout={500}>
     *         {state => (
     *           // ...
     *         )}
     *       </Transition>
     *       <button onClick={() => setInProp(true)}>
     *         Click to Enter
     *       </button>
     *     </div>
     *   );
     * }
     * ```
     *
     * When the button is clicked the component will shift to the `'entering'` state
     * and stay there for 500ms (the value of `timeout`) before it finally switches
     * to `'entered'`.
     *
     * When `in` is `false` the same thing happens except the state moves from
     * `'exiting'` to `'exited'`.
     */

    var Transition =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(Transition, _React$Component);

      function Transition(props, context) {
        var _this;

        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;

        if (props.in) {
          if (appear) {
            initialStatus = EXITED;
            _this.appearStatus = ENTERING;
          } else {
            initialStatus = ENTERED;
          }
        } else {
          if (props.unmountOnExit || props.mountOnEnter) {
            initialStatus = UNMOUNTED;
          } else {
            initialStatus = EXITED;
          }
        }

        _this.state = {
          status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
      }

      Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;

        if (nextIn && prevState.status === UNMOUNTED) {
          return {
            status: EXITED
          };
        }

        return null;
      }; // getSnapshotBeforeUpdate(prevProps) {
      //   let nextStatus = null
      //   if (prevProps !== this.props) {
      //     const { status } = this.state
      //     if (this.props.in) {
      //       if (status !== ENTERING && status !== ENTERED) {
      //         nextStatus = ENTERING
      //       }
      //     } else {
      //       if (status === ENTERING || status === ENTERED) {
      //         nextStatus = EXITING
      //       }
      //     }
      //   }
      //   return { nextStatus }
      // }


      var _proto = Transition.prototype;

      _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
      };

      _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;

        if (prevProps !== this.props) {
          var status = this.state.status;

          if (this.props.in) {
            if (status !== ENTERING && status !== ENTERED) {
              nextStatus = ENTERING;
            }
          } else {
            if (status === ENTERING || status === ENTERED) {
              nextStatus = EXITING;
            }
          }
        }

        this.updateStatus(false, nextStatus);
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
      };

      _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;

        if (timeout != null && typeof timeout !== 'number') {
          exit = timeout.exit;
          enter = timeout.enter; // TODO: remove fallback for next major

          appear = timeout.appear !== undefined ? timeout.appear : enter;
        }

        return {
          exit: exit,
          enter: enter,
          appear: appear
        };
      };

      _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
          mounting = false;
        }

        if (nextStatus !== null) {
          // nextStatus will always be ENTERING or EXITING.
          this.cancelNextCallback();
          var node = ReactDOM.findDOMNode(this);

          if (nextStatus === ENTERING) {
            this.performEnter(node, mounting);
          } else {
            this.performExit(node);
          }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
          this.setState({
            status: UNMOUNTED
          });
        }
      };

      _proto.performEnter = function performEnter(node, mounting) {
        var _this2 = this;

        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set

        if (!mounting && !enter || config.disabled) {
          this.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(node);
          });
          return;
        }

        this.props.onEnter(node, appearing);
        this.safeSetState({
          status: ENTERING
        }, function () {
          _this2.props.onEntering(node, appearing);

          _this2.onTransitionEnd(node, enterTimeout, function () {
            _this2.safeSetState({
              status: ENTERED
            }, function () {
              _this2.props.onEntered(node, appearing);
            });
          });
        });
      };

      _proto.performExit = function performExit(node) {
        var _this3 = this;

        var exit = this.props.exit;
        var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

        if (!exit || config.disabled) {
          this.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(node);
          });
          return;
        }

        this.props.onExit(node);
        this.safeSetState({
          status: EXITING
        }, function () {
          _this3.props.onExiting(node);

          _this3.onTransitionEnd(node, timeouts.exit, function () {
            _this3.safeSetState({
              status: EXITED
            }, function () {
              _this3.props.onExited(node);
            });
          });
        });
      };

      _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
          this.nextCallback.cancel();
          this.nextCallback = null;
        }
      };

      _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
      };

      _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;

        var active = true;

        this.nextCallback = function (event) {
          if (active) {
            active = false;
            _this4.nextCallback = null;
            callback(event);
          }
        };

        this.nextCallback.cancel = function () {
          active = false;
        };

        return this.nextCallback;
      };

      _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
        this.setNextCallback(handler);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

        if (!node || doesNotHaveTimeoutOrListener) {
          setTimeout(this.nextCallback, 0);
          return;
        }

        if (this.props.addEndListener) {
          this.props.addEndListener(node, this.nextCallback);
        }

        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      };

      _proto.render = function render() {
        var status = this.state.status;

        if (status === UNMOUNTED) {
          return null;
        }

        var _this$props = this.props,
            children = _this$props.children,
            childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


        delete childProps.in;
        delete childProps.mountOnEnter;
        delete childProps.unmountOnExit;
        delete childProps.appear;
        delete childProps.enter;
        delete childProps.exit;
        delete childProps.timeout;
        delete childProps.addEndListener;
        delete childProps.onEnter;
        delete childProps.onEntering;
        delete childProps.onEntered;
        delete childProps.onExit;
        delete childProps.onExiting;
        delete childProps.onExited;

        if (typeof children === 'function') {
          // allows for nested Transitions
          return React__default.createElement(TransitionGroupContext.Provider, {
            value: null
          }, children(status, childProps));
        }

        var child = React__default.Children.only(children);
        return (// allows for nested Transitions
          React__default.createElement(TransitionGroupContext.Provider, {
            value: null
          }, React__default.cloneElement(child, childProps))
        );
      };

      return Transition;
    }(React__default.Component);

    Transition.contextType = TransitionGroupContext;
    Transition.propTypes = process.env.NODE_ENV !== "production" ? {
      /**
       * A `function` child can be used instead of a React element. This function is
       * called with the current transition status (`'entering'`, `'entered'`,
       * `'exiting'`, `'exited'`), which can be used to apply context
       * specific props to a component.
       *
       * ```jsx
       * <Transition in={this.state.in} timeout={150}>
       *   {state => (
       *     <MyComponent className={`fade fade-${state}`} />
       *   )}
       * </Transition>
       * ```
       */
      children: propTypes.oneOfType([propTypes.func.isRequired, propTypes.element.isRequired]).isRequired,

      /**
       * Show the component; triggers the enter or exit states
       */
      in: propTypes.bool,

      /**
       * By default the child component is mounted immediately along with
       * the parent `Transition` component. If you want to "lazy mount" the component on the
       * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
       * mounted, even on "exited", unless you also specify `unmountOnExit`.
       */
      mountOnEnter: propTypes.bool,

      /**
       * By default the child component stays mounted after it reaches the `'exited'` state.
       * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
       */
      unmountOnExit: propTypes.bool,

      /**
       * Normally a component is not transitioned if it is shown when the
       * `<Transition>` component mounts. If you want to transition on the first
       * mount set `appear` to `true`, and the component will transition in as soon
       * as the `<Transition>` mounts.
       *
       * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
       * > only adds an additional enter transition. However, in the
       * > `<CSSTransition>` component that first enter transition does result in
       * > additional `.appear-*` classes, that way you can choose to style it
       * > differently.
       */
      appear: propTypes.bool,

      /**
       * Enable or disable enter transitions.
       */
      enter: propTypes.bool,

      /**
       * Enable or disable exit transitions.
       */
      exit: propTypes.bool,

      /**
       * The duration of the transition, in milliseconds.
       * Required unless `addEndListener` is provided.
       *
       * You may specify a single timeout for all transitions:
       *
       * ```jsx
       * timeout={500}
       * ```
       *
       * or individually:
       *
       * ```jsx
       * timeout={{
       *  appear: 500,
       *  enter: 300,
       *  exit: 500,
       * }}
       * ```
       *
       * - `appear` defaults to the value of `enter`
       * - `enter` defaults to `0`
       * - `exit` defaults to `0`
       *
       * @type {number | { enter?: number, exit?: number, appear?: number }}
       */
      timeout: function timeout(props) {
        var pt = timeoutsShape;
        if (!props.addEndListener) pt = pt.isRequired;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return pt.apply(void 0, [props].concat(args));
      },

      /**
       * Add a custom transition end trigger. Called with the transitioning
       * DOM node and a `done` callback. Allows for more fine grained transition end
       * logic. **Note:** Timeouts are still used as a fallback if provided.
       *
       * ```jsx
       * addEndListener={(node, done) => {
       *   // use the css transitionend event to mark the finish of a transition
       *   node.addEventListener('transitionend', done, false);
       * }}
       * ```
       */
      addEndListener: propTypes.func,

      /**
       * Callback fired before the "entering" status is applied. An extra parameter
       * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
       *
       * @type Function(node: HtmlElement, isAppearing: bool) -> void
       */
      onEnter: propTypes.func,

      /**
       * Callback fired after the "entering" status is applied. An extra parameter
       * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
       *
       * @type Function(node: HtmlElement, isAppearing: bool)
       */
      onEntering: propTypes.func,

      /**
       * Callback fired after the "entered" status is applied. An extra parameter
       * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
       *
       * @type Function(node: HtmlElement, isAppearing: bool) -> void
       */
      onEntered: propTypes.func,

      /**
       * Callback fired before the "exiting" status is applied.
       *
       * @type Function(node: HtmlElement) -> void
       */
      onExit: propTypes.func,

      /**
       * Callback fired after the "exiting" status is applied.
       *
       * @type Function(node: HtmlElement) -> void
       */
      onExiting: propTypes.func,

      /**
       * Callback fired after the "exited" status is applied.
       *
       * @type Function(node: HtmlElement) -> void
       */
      onExited: propTypes.func // Name the function so it is clearer in the documentation

    } : {};

    function noop() {}

    Transition.defaultProps = {
      in: false,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      enter: true,
      exit: true,
      onEnter: noop,
      onEntering: noop,
      onEntered: noop,
      onExit: noop,
      onExiting: noop,
      onExited: noop
    };
    Transition.UNMOUNTED = 0;
    Transition.EXITED = 1;
    Transition.ENTERING = 2;
    Transition.ENTERED = 3;
    Transition.EXITING = 4;

    var _addClass = function addClass$$1(node, classes) {
      return node && classes && classes.split(' ').forEach(function (c) {
        return addClass(node, c);
      });
    };

    var removeClass$1 = function removeClass$$1(node, classes) {
      return node && classes && classes.split(' ').forEach(function (c) {
        return removeClass(node, c);
      });
    };
    /**
     * A transition component inspired by the excellent
     * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
     * using CSS transitions or animations. It's built upon the
     * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
     * component, so it inherits all of its props.
     *
     * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
     * and `exit` states of the transition. The first class is applied and then a
     * second `*-active` class in order to activate the CSS transition. After the
     * transition, matching `*-done` class names are applied to persist the
     * transition state.
     *
     * ```jsx
     * function App() {
     *   const [inProp, setInProp] = useState(false);
     *   return (
     *     <div>
     *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
     *         <div>
     *           {"I'll receive my-node-* classes"}
     *         </div>
     *       </CSSTransition>
     *       <button type="button" onClick={() => setInProp(true)}>
     *         Click to Enter
     *       </button>
     *     </div>
     *   );
     * }
     * ```
     *
     * When the `in` prop is set to `true`, the child component will first receive
     * the class `example-enter`, then the `example-enter-active` will be added in
     * the next tick. `CSSTransition` [forces a
     * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
     * between before adding the `example-enter-active`. This is an important trick
     * because it allows us to transition between `example-enter` and
     * `example-enter-active` even though they were added immediately one after
     * another. Most notably, this is what makes it possible for us to animate
     * _appearance_.
     *
     * ```css
     * .my-node-enter {
     *   opacity: 0;
     * }
     * .my-node-enter-active {
     *   opacity: 1;
     *   transition: opacity 200ms;
     * }
     * .my-node-exit {
     *   opacity: 1;
     * }
     * .my-node-exit-active {
     *   opacity: 0;
     *   transition: opacity 200ms;
     * }
     * ```
     *
     * `*-active` classes represent which styles you want to animate **to**.
     *
     * **Note**: If you're using the
     * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
     * prop, make sure to define styles for `.appear-*` classes as well.
     */


    var CSSTransition =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(CSSTransition, _React$Component);

      function CSSTransition() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.appliedClasses = {
          appear: {},
          enter: {},
          exit: {}
        };

        _this.onEnter = function (node, appearing) {
          _this.removeClasses(node, 'exit');

          _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

          if (_this.props.onEnter) {
            _this.props.onEnter(node, appearing);
          }
        };

        _this.onEntering = function (node, appearing) {
          var type = appearing ? 'appear' : 'enter';

          _this.addClass(node, type, 'active');

          if (_this.props.onEntering) {
            _this.props.onEntering(node, appearing);
          }
        };

        _this.onEntered = function (node, appearing) {
          var type = appearing ? 'appear' : 'enter';

          _this.removeClasses(node, type);

          _this.addClass(node, type, 'done');

          if (_this.props.onEntered) {
            _this.props.onEntered(node, appearing);
          }
        };

        _this.onExit = function (node) {
          _this.removeClasses(node, 'appear');

          _this.removeClasses(node, 'enter');

          _this.addClass(node, 'exit', 'base');

          if (_this.props.onExit) {
            _this.props.onExit(node);
          }
        };

        _this.onExiting = function (node) {
          _this.addClass(node, 'exit', 'active');

          if (_this.props.onExiting) {
            _this.props.onExiting(node);
          }
        };

        _this.onExited = function (node) {
          _this.removeClasses(node, 'exit');

          _this.addClass(node, 'exit', 'done');

          if (_this.props.onExited) {
            _this.props.onExited(node);
          }
        };

        _this.getClassNames = function (type) {
          var classNames = _this.props.classNames;
          var isStringClassNames = typeof classNames === 'string';
          var prefix = isStringClassNames && classNames ? classNames + "-" : '';
          var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
          var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
          var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
          return {
            baseClassName: baseClassName,
            activeClassName: activeClassName,
            doneClassName: doneClassName
          };
        };

        return _this;
      }

      var _proto = CSSTransition.prototype;

      _proto.addClass = function addClass$$1(node, type, phase) {
        var className = this.getClassNames(type)[phase + "ClassName"];

        if (type === 'appear' && phase === 'done') {
          className += " " + this.getClassNames('enter').doneClassName;
        } // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.


        if (phase === 'active') {
          /* eslint-disable no-unused-expressions */
          node && node.scrollTop;
        }

        this.appliedClasses[type][phase] = className;

        _addClass(node, className);
      };

      _proto.removeClasses = function removeClasses(node, type) {
        var _this$appliedClasses$ = this.appliedClasses[type],
            baseClassName = _this$appliedClasses$.base,
            activeClassName = _this$appliedClasses$.active,
            doneClassName = _this$appliedClasses$.done;
        this.appliedClasses[type] = {};

        if (baseClassName) {
          removeClass$1(node, baseClassName);
        }

        if (activeClassName) {
          removeClass$1(node, activeClassName);
        }

        if (doneClassName) {
          removeClass$1(node, doneClassName);
        }
      };

      _proto.render = function render() {
        var _this$props = this.props,
            _ = _this$props.classNames,
            props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

        return React__default.createElement(Transition, _extends({}, props, {
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }));
      };

      return CSSTransition;
    }(React__default.Component);

    CSSTransition.defaultProps = {
      classNames: ''
    };
    CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, Transition.propTypes, {
      /**
       * The animation classNames applied to the component as it appears, enters,
       * exits or has finished the transition. A single name can be provided and it
       * will be suffixed for each stage: e.g.
       *
       * `classNames="fade"` applies `fade-appear`, `fade-appear-active`,
       * `fade-appear-done`, `fade-enter`, `fade-enter-active`, `fade-enter-done`,
       * `fade-exit`, `fade-exit-active`, and `fade-exit-done`.
       *
       * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
       * This allows you to define different behavior for when appearing is done and
       * when regular entering is done, using selectors like
       * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
       * epic entrance animation when element first appears in the DOM using
       * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
       * simply use `fade-enter-done` for defining both cases.
       *
       * Each individual classNames can also be specified independently like:
       *
       * ```js
       * classNames={{
       *  appear: 'my-appear',
       *  appearActive: 'my-active-appear',
       *  appearDone: 'my-done-appear',
       *  enter: 'my-enter',
       *  enterActive: 'my-active-enter',
       *  enterDone: 'my-done-enter',
       *  exit: 'my-exit',
       *  exitActive: 'my-active-exit',
       *  exitDone: 'my-done-exit',
       * }}
       * ```
       *
       * If you want to set these classes using CSS Modules:
       *
       * ```js
       * import styles from './styles.css';
       * ```
       *
       * you might want to use camelCase in your CSS file, that way could simply
       * spread them instead of listing them one by one:
       *
       * ```js
       * classNames={{ ...styles }}
       * ```
       *
       * @type {string | {
       *  appear?: string,
       *  appearActive?: string,
       *  appearDone?: string,
       *  enter?: string,
       *  enterActive?: string,
       *  enterDone?: string,
       *  exit?: string,
       *  exitActive?: string,
       *  exitDone?: string,
       * }}
       */
      classNames: classNamesShape,

      /**
       * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
       * applied.
       *
       * @type Function(node: HtmlElement, isAppearing: bool)
       */
      onEnter: propTypes.func,

      /**
       * A `<Transition>` callback fired immediately after the 'enter-active' or
       * 'appear-active' class is applied.
       *
       * @type Function(node: HtmlElement, isAppearing: bool)
       */
      onEntering: propTypes.func,

      /**
       * A `<Transition>` callback fired immediately after the 'enter' or
       * 'appear' classes are **removed** and the `done` class is added to the DOM node.
       *
       * @type Function(node: HtmlElement, isAppearing: bool)
       */
      onEntered: propTypes.func,

      /**
       * A `<Transition>` callback fired immediately after the 'exit' class is
       * applied.
       *
       * @type Function(node: HtmlElement)
       */
      onExit: propTypes.func,

      /**
       * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
       *
       * @type Function(node: HtmlElement)
       */
      onExiting: propTypes.func,

      /**
       * A `<Transition>` callback fired immediately after the 'exit' classes
       * are **removed** and the `exit-done` class is added to the DOM node.
       *
       * @type Function(node: HtmlElement)
       */
      onExited: propTypes.func
    }) : {};

    /**
     * Given `this.props.children`, return an object mapping key to child.
     *
     * @param {*} children `this.props.children`
     * @return {object} Mapping of key to child
     */

    function getChildMapping(children, mapFn) {
      var mapper = function mapper(child) {
        return mapFn && React.isValidElement(child) ? mapFn(child) : child;
      };

      var result = Object.create(null);
      if (children) React.Children.map(children, function (c) {
        return c;
      }).forEach(function (child) {
        // run the map function here instead so that the key is the computed one
        result[child.key] = mapper(child);
      });
      return result;
    }
    /**
     * When you're adding or removing children some may be added or removed in the
     * same render pass. We want to show *both* since we want to simultaneously
     * animate elements in and out. This function takes a previous set of keys
     * and a new set of keys and merges them with its best guess of the correct
     * ordering. In the future we may expose some of the utilities in
     * ReactMultiChild to make this easy, but for now React itself does not
     * directly have this concept of the union of prevChildren and nextChildren
     * so we implement it here.
     *
     * @param {object} prev prev children as returned from
     * `ReactTransitionChildMapping.getChildMapping()`.
     * @param {object} next next children as returned from
     * `ReactTransitionChildMapping.getChildMapping()`.
     * @return {object} a key set that contains all keys in `prev` and all keys
     * in `next` in a reasonable order.
     */

    function mergeChildMappings(prev, next) {
      prev = prev || {};
      next = next || {};

      function getValueForKey(key) {
        return key in next ? next[key] : prev[key];
      } // For each key of `next`, the list of keys to insert before that key in
      // the combined list


      var nextKeysPending = Object.create(null);
      var pendingKeys = [];

      for (var prevKey in prev) {
        if (prevKey in next) {
          if (pendingKeys.length) {
            nextKeysPending[prevKey] = pendingKeys;
            pendingKeys = [];
          }
        } else {
          pendingKeys.push(prevKey);
        }
      }

      var i;
      var childMapping = {};

      for (var nextKey in next) {
        if (nextKeysPending[nextKey]) {
          for (i = 0; i < nextKeysPending[nextKey].length; i++) {
            var pendingNextKey = nextKeysPending[nextKey][i];
            childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
          }
        }

        childMapping[nextKey] = getValueForKey(nextKey);
      } // Finally, add the keys which didn't appear before any key in `next`


      for (i = 0; i < pendingKeys.length; i++) {
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
      }

      return childMapping;
    }

    function getProp(child, prop, props) {
      return props[prop] != null ? props[prop] : child.props[prop];
    }

    function getInitialChildMapping(props, onExited) {
      return getChildMapping(props.children, function (child) {
        return React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          appear: getProp(child, 'appear', props),
          enter: getProp(child, 'enter', props),
          exit: getProp(child, 'exit', props)
        });
      });
    }
    function getNextChildMapping(nextProps, prevChildMapping, onExited) {
      var nextChildMapping = getChildMapping(nextProps.children);
      var children = mergeChildMappings(prevChildMapping, nextChildMapping);
      Object.keys(children).forEach(function (key) {
        var child = children[key];
        if (!React.isValidElement(child)) return;
        var hasPrev = key in prevChildMapping;
        var hasNext = key in nextChildMapping;
        var prevChild = prevChildMapping[key];
        var isLeaving = React.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

        if (hasNext && (!hasPrev || isLeaving)) {
          // console.log('entering', key)
          children[key] = React.cloneElement(child, {
            onExited: onExited.bind(null, child),
            in: true,
            exit: getProp(child, 'exit', nextProps),
            enter: getProp(child, 'enter', nextProps)
          });
        } else if (!hasNext && hasPrev && !isLeaving) {
          // item is old (exiting)
          // console.log('leaving', key)
          children[key] = React.cloneElement(child, {
            in: false
          });
        } else if (hasNext && hasPrev && React.isValidElement(prevChild)) {
          // item hasn't changed transition states
          // copy over the last transition props;
          // console.log('unchanged', key)
          children[key] = React.cloneElement(child, {
            onExited: onExited.bind(null, child),
            in: prevChild.props.in,
            exit: getProp(child, 'exit', nextProps),
            enter: getProp(child, 'enter', nextProps)
          });
        }
      });
      return children;
    }

    var values = Object.values || function (obj) {
      return Object.keys(obj).map(function (k) {
        return obj[k];
      });
    };

    var defaultProps = {
      component: 'div',
      childFactory: function childFactory(child) {
        return child;
      }
      /**
       * The `<TransitionGroup>` component manages a set of transition components
       * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
       * components, `<TransitionGroup>` is a state machine for managing the mounting
       * and unmounting of components over time.
       *
       * Consider the example below. As items are removed or added to the TodoList the
       * `in` prop is toggled automatically by the `<TransitionGroup>`.
       *
       * Note that `<TransitionGroup>`  does not define any animation behavior!
       * Exactly _how_ a list item animates is up to the individual transition
       * component. This means you can mix and match animations across different list
       * items.
       */

    };

    var TransitionGroup =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(TransitionGroup, _React$Component);

      function TransitionGroup(props, context) {
        var _this;

        _this = _React$Component.call(this, props, context) || this;

        var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


        _this.state = {
          contextValue: {
            isMounting: true
          },
          handleExited: handleExited,
          firstRender: true
        };
        return _this;
      }

      var _proto = TransitionGroup.prototype;

      _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;
        this.setState({
          contextValue: {
            isMounting: false
          }
        });
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };

      TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
        var prevChildMapping = _ref.children,
            handleExited = _ref.handleExited,
            firstRender = _ref.firstRender;
        return {
          children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
          firstRender: false
        };
      };

      _proto.handleExited = function handleExited(child, node) {
        var currentChildMapping = getChildMapping(this.props.children);
        if (child.key in currentChildMapping) return;

        if (child.props.onExited) {
          child.props.onExited(node);
        }

        if (this.mounted) {
          this.setState(function (state) {
            var children = _extends({}, state.children);

            delete children[child.key];
            return {
              children: children
            };
          });
        }
      };

      _proto.render = function render() {
        var _this$props = this.props,
            Component = _this$props.component,
            childFactory = _this$props.childFactory,
            props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

        var contextValue = this.state.contextValue;
        var children = values(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;

        if (Component === null) {
          return React__default.createElement(TransitionGroupContext.Provider, {
            value: contextValue
          }, children);
        }

        return React__default.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, React__default.createElement(Component, props, children));
      };

      return TransitionGroup;
    }(React__default.Component);

    TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
      /**
       * `<TransitionGroup>` renders a `<div>` by default. You can change this
       * behavior by providing a `component` prop.
       * If you use React v16+ and would like to avoid a wrapping `<div>` element
       * you can pass in `component={null}`. This is useful if the wrapping div
       * borks your css styles.
       */
      component: propTypes.any,

      /**
       * A set of `<Transition>` components, that are toggled `in` and out as they
       * leave. the `<TransitionGroup>` will inject specific transition props, so
       * remember to spread them through if you are wrapping the `<Transition>` as
       * with our `<Fade>` example.
       *
       * While this component is meant for multiple `Transition` or `CSSTransition`
       * children, sometimes you may want to have a single transition child with
       * content that you want to be transitioned out and in when you change it
       * (e.g. routes, images etc.) In that case you can change the `key` prop of
       * the transition child as you change its content, this will cause
       * `TransitionGroup` to transition the child out and back in.
       */
      children: propTypes.node,

      /**
       * A convenience prop that enables or disables appear animations
       * for all children. Note that specifying this will override any defaults set
       * on individual children Transitions.
       */
      appear: propTypes.bool,

      /**
       * A convenience prop that enables or disables enter animations
       * for all children. Note that specifying this will override any defaults set
       * on individual children Transitions.
       */
      enter: propTypes.bool,

      /**
       * A convenience prop that enables or disables exit animations
       * for all children. Note that specifying this will override any defaults set
       * on individual children Transitions.
       */
      exit: propTypes.bool,

      /**
       * You may need to apply reactive updates to a child as it is exiting.
       * This is generally done by using `cloneElement` however in the case of an exiting
       * child the element has already been removed and not accessible to the consumer.
       *
       * If you do need to update a child as it leaves you can provide a `childFactory`
       * to wrap every child, even the ones that are leaving.
       *
       * @type Function(child: ReactElement) -> ReactElement
       */
      childFactory: propTypes.func
    } : {};
    TransitionGroup.defaultProps = defaultProps;

    /**
     * The `<ReplaceTransition>` component is a specialized `Transition` component
     * that animates between two children.
     *
     * ```jsx
     * <ReplaceTransition in>
     *   <Fade><div>I appear first</div></Fade>
     *   <Fade><div>I replace the above</div></Fade>
     * </ReplaceTransition>
     * ```
     */

    var ReplaceTransition =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(ReplaceTransition, _React$Component);

      function ReplaceTransition() {
        var _this;

        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

        _this.handleEnter = function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _this.handleLifecycle('onEnter', 0, args);
        };

        _this.handleEntering = function () {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return _this.handleLifecycle('onEntering', 0, args);
        };

        _this.handleEntered = function () {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return _this.handleLifecycle('onEntered', 0, args);
        };

        _this.handleExit = function () {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          return _this.handleLifecycle('onExit', 1, args);
        };

        _this.handleExiting = function () {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          return _this.handleLifecycle('onExiting', 1, args);
        };

        _this.handleExited = function () {
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          return _this.handleLifecycle('onExited', 1, args);
        };

        return _this;
      }

      var _proto = ReplaceTransition.prototype;

      _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
        var _child$props;

        var children = this.props.children;
        var child = React__default.Children.toArray(children)[idx];
        if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
        if (this.props[handler]) this.props[handler](ReactDOM.findDOMNode(this));
      };

      _proto.render = function render() {
        var _this$props = this.props,
            children = _this$props.children,
            inProp = _this$props.in,
            props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

        var _React$Children$toArr = React__default.Children.toArray(children),
            first = _React$Children$toArr[0],
            second = _React$Children$toArr[1];

        delete props.onEnter;
        delete props.onEntering;
        delete props.onEntered;
        delete props.onExit;
        delete props.onExiting;
        delete props.onExited;
        return React__default.createElement(TransitionGroup, props, inProp ? React__default.cloneElement(first, {
          key: 'first',
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onEntered: this.handleEntered
        }) : React__default.cloneElement(second, {
          key: 'second',
          onEnter: this.handleExit,
          onEntering: this.handleExiting,
          onEntered: this.handleExited
        }));
      };

      return ReplaceTransition;
    }(React__default.Component);

    ReplaceTransition.propTypes = process.env.NODE_ENV !== "production" ? {
      in: propTypes.bool.isRequired,
      children: function children(props, propName) {
        if (React__default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
        return null;
      }
    } : {};

    var _leaveRenders, _enterRenders;

    function areChildrenDifferent(oldChildren, newChildren) {
      if (oldChildren === newChildren) return false;

      if (React__default.isValidElement(oldChildren) && React__default.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
        return false;
      }

      return true;
    }
    /**
     * Enum of modes for SwitchTransition component
     * @enum { string }
     */


    var modes = {
      out: 'out-in',
      in: 'in-out'
    };

    var callHook = function callHook(element, name, cb) {
      return function () {
        var _element$props;

        element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
        cb();
      };
    };

    var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
      var current = _ref.current,
          changeState = _ref.changeState;
      return React__default.cloneElement(current, {
        in: false,
        onExited: callHook(current, 'onExited', function () {
          changeState(ENTERING, null);
        })
      });
    }, _leaveRenders[modes.in] = function (_ref2) {
      var current = _ref2.current,
          changeState = _ref2.changeState,
          children = _ref2.children;
      return [current, React__default.cloneElement(children, {
        in: true,
        onEntered: callHook(children, 'onEntered', function () {
          changeState(ENTERING);
        })
      })];
    }, _leaveRenders);
    var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
      var children = _ref3.children,
          changeState = _ref3.changeState;
      return React__default.cloneElement(children, {
        in: true,
        onEntered: callHook(children, 'onEntered', function () {
          changeState(ENTERED, React__default.cloneElement(children, {
            in: true
          }));
        })
      });
    }, _enterRenders[modes.in] = function (_ref4) {
      var current = _ref4.current,
          children = _ref4.children,
          changeState = _ref4.changeState;
      return [React__default.cloneElement(current, {
        in: false,
        onExited: callHook(current, 'onExited', function () {
          changeState(ENTERED, React__default.cloneElement(children, {
            in: true
          }));
        })
      }), React__default.cloneElement(children, {
        in: true
      })];
    }, _enterRenders);
    /**
     * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
     * You can use it when you want to control the render between state transitions.
     * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
     *
     * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
     * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child
     *
     * ```jsx
     *
     * function App() {
     *  const [state, setState] = useState(false);
     *  return (
     *    <SwitchTransition>
     *      <FadeTransition key={state ? "Goodbye, world!" : "Hello, world!"}
     *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
     *        classNames='fade' >
     *        <button onClick={() => setState(state => !state)}>
     *          {state ? "Goodbye, world!" : "Hello, world!"}
     *        </button>
     *      </FadeTransition>
     *    </SwitchTransition>
     *  )
     * }
     * ```
     */

    var SwitchTransition =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(SwitchTransition, _React$Component);

      function SwitchTransition() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.state = {
          status: ENTERED,
          current: null
        };
        _this.appeared = false;

        _this.changeState = function (status, current) {
          if (current === void 0) {
            current = _this.state.current;
          }

          _this.setState({
            status: status,
            current: current
          });
        };

        return _this;
      }

      var _proto = SwitchTransition.prototype;

      _proto.componentDidMount = function componentDidMount() {
        this.appeared = true;
      };

      SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        if (props.children == null) {
          return {
            current: null
          };
        }

        if (state.status === ENTERING && props.mode === modes.in) {
          return {
            status: ENTERING
          };
        }

        if (state.current && areChildrenDifferent(state.current, props.children)) {
          return {
            status: EXITING
          };
        }

        return {
          current: React__default.cloneElement(props.children, {
            in: true
          })
        };
      };

      _proto.render = function render() {
        var _this$props = this.props,
            children = _this$props.children,
            mode = _this$props.mode,
            _this$state = this.state,
            status = _this$state.status,
            current = _this$state.current;
        var data = {
          children: children,
          current: current,
          changeState: this.changeState,
          status: status
        };
        var component;

        switch (status) {
          case ENTERING:
            component = enterRenders[mode](data);
            break;

          case EXITING:
            component = leaveRenders[mode](data);
            break;

          case ENTERED:
            component = current;
        }

        return React__default.createElement(TransitionGroupContext.Provider, {
          value: {
            isMounting: !this.appeared
          }
        }, component);
      };

      return SwitchTransition;
    }(React__default.Component);

    SwitchTransition.propTypes = process.env.NODE_ENV !== "production" ? {
      /**
       * Transition modes.
       * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
       * `in-out: New element transitions in first, then when complete, the current element transitions out.`
       *
       * @type {'out-in'|'in-out'}
       */
      mode: propTypes.oneOf([modes.in, modes.out]),

      /**
       * Any `Transition` or `CSSTransition` component
       */
      children: propTypes.oneOfType([propTypes.element.isRequired])
    } : {};
    SwitchTransition.defaultProps = {
      mode: modes.out
    };

    var useEnhancedEffect$2 = typeof window === 'undefined' ? React__default.useEffect : React__default.useLayoutEffect;
    /**
     * @ignore - internal component.
     */

    function Ripple(props) {
      var classes = props.classes,
          _props$pulsate = props.pulsate,
          pulsate = _props$pulsate === void 0 ? false : _props$pulsate,
          rippleX = props.rippleX,
          rippleY = props.rippleY,
          rippleSize = props.rippleSize,
          inProp = props.in,
          _props$onExited = props.onExited,
          onExited = _props$onExited === void 0 ? function () {} : _props$onExited,
          timeout = props.timeout;

      var _React$useState = React__default.useState(false),
          leaving = _React$useState[0],
          setLeaving = _React$useState[1];

      var rippleClassName = clsx(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
      var rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
      };
      var childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
      var handleExited = useEventCallback(onExited); // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority

      useEnhancedEffect$2(function () {
        if (!inProp) {
          // react-transition-group#onExit
          setLeaving(true); // react-transition-group#onExited

          var timeoutId = setTimeout(handleExited, timeout);
          return function () {
            clearTimeout(timeoutId);
          };
        }

        return undefined;
      }, [handleExited, inProp, timeout]);
      return React__default.createElement("span", {
        className: rippleClassName,
        style: rippleStyles
      }, React__default.createElement("span", {
        className: childClassName
      }));
    }

    process.env.NODE_ENV !== "production" ? Ripple.propTypes = {
      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore - injected from TransitionGroup
       */
      in: propTypes.bool,

      /**
       * @ignore - injected from TransitionGroup
       */
      onExited: propTypes.func,

      /**
       * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
       */
      pulsate: propTypes.bool,

      /**
       * Diameter of the ripple.
       */
      rippleSize: propTypes.number,

      /**
       * Horizontal position of the ripple center.
       */
      rippleX: propTypes.number,

      /**
       * Vertical position of the ripple center.
       */
      rippleY: propTypes.number,

      /**
       * exit delay
       */
      timeout: propTypes.number.isRequired
    } : void 0;

    var DURATION = 550;
    var DELAY_RIPPLE = 80;
    var styles = function styles(theme) {
      return {
        /* Styles applied to the root element. */
        root: {
          overflow: 'hidden',
          pointerEvents: 'none',
          position: 'absolute',
          zIndex: 0,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: 'inherit'
        },

        /* Styles applied to the internal `Ripple` components `ripple` class. */
        ripple: {
          opacity: 0,
          position: 'absolute'
        },

        /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
        rippleVisible: {
          opacity: 0.3,
          transform: 'scale(1)',
          animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
        },

        /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
        ripplePulsate: {
          animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
        },

        /* Styles applied to the internal `Ripple` components `child` class. */
        child: {
          opacity: 1,
          display: 'block',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: 'currentColor'
        },

        /* Styles applied to the internal `Ripple` components `childLeaving` class. */
        childLeaving: {
          opacity: 0,
          animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
        },

        /* Styles applied to the internal `Ripple` components `childPulsate` class. */
        childPulsate: {
          position: 'absolute',
          left: 0,
          top: 0,
          animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
        },
        '@keyframes enter': {
          '0%': {
            transform: 'scale(0)',
            opacity: 0.1
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 0.3
          }
        },
        '@keyframes exit': {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        },
        '@keyframes pulsate': {
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(0.92)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        }
      };
    }; // TODO v5: Make private

    var TouchRipple = React__default.forwardRef(function TouchRipple(props, ref) {
      var _props$center = props.center,
          centerProp = _props$center === void 0 ? false : _props$center,
          classes = props.classes,
          className = props.className,
          other = _objectWithoutProperties(props, ["center", "classes", "className"]);

      var _React$useState = React__default.useState([]),
          ripples = _React$useState[0],
          setRipples = _React$useState[1];

      var nextKey = React__default.useRef(0);
      var rippleCallback = React__default.useRef(null);
      React__default.useEffect(function () {
        if (rippleCallback.current) {
          rippleCallback.current();
          rippleCallback.current = null;
        }
      }, [ripples]); // Used to filter out mouse emulated events on mobile.

      var ignoringMouseDown = React__default.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
      // We don't want to display the ripple for touch scroll events.

      var startTimer = React__default.useRef(null); // This is the hook called once the previous timeout is ready.

      var startTimerCommit = React__default.useRef(null);
      var container = React__default.useRef(null);
      React__default.useEffect(function () {
        return function () {
          clearTimeout(startTimer.current);
        };
      }, []);
      var startCommit = React__default.useCallback(function (params) {
        var pulsate = params.pulsate,
            rippleX = params.rippleX,
            rippleY = params.rippleY,
            rippleSize = params.rippleSize,
            cb = params.cb;
        setRipples(function (oldRipples) {
          return [].concat(_toConsumableArray(oldRipples), [React__default.createElement(Ripple, {
            key: nextKey.current,
            classes: classes,
            timeout: DURATION,
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize
          })]);
        });
        nextKey.current += 1;
        rippleCallback.current = cb;
      }, [classes]);
      var start = React__default.useCallback(function () {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var cb = arguments.length > 2 ? arguments[2] : undefined;
        var _options$pulsate = options.pulsate,
            pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
            _options$center = options.center,
            center = _options$center === void 0 ? centerProp || options.pulsate : _options$center,
            _options$fakeElement = options.fakeElement,
            fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

        if (event.type === 'mousedown' && ignoringMouseDown.current) {
          ignoringMouseDown.current = false;
          return;
        }

        if (event.type === 'touchstart') {
          ignoringMouseDown.current = true;
        }

        var element = fakeElement ? null : container.current;
        var rect = element ? element.getBoundingClientRect() : {
          width: 0,
          height: 0,
          left: 0,
          top: 0
        }; // Get the size of the ripple

        var rippleX;
        var rippleY;
        var rippleSize;

        if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
          rippleX = Math.round(rect.width / 2);
          rippleY = Math.round(rect.height / 2);
        } else {
          var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
          var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
          rippleX = Math.round(clientX - rect.left);
          rippleY = Math.round(clientY - rect.top);
        }

        if (center) {
          rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

          if (rippleSize % 2 === 0) {
            rippleSize += 1;
          }
        } else {
          var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
          var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
          rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
        } // Touche devices


        if (event.touches) {
          // Prepare the ripple effect.
          startTimerCommit.current = function () {
            startCommit({
              pulsate: pulsate,
              rippleX: rippleX,
              rippleY: rippleY,
              rippleSize: rippleSize,
              cb: cb
            });
          }; // Delay the execution of the ripple effect.


          startTimer.current = setTimeout(function () {
            if (startTimerCommit.current) {
              startTimerCommit.current();
              startTimerCommit.current = null;
            }
          }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
        } else {
          startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }
      }, [centerProp, startCommit]);
      var pulsate = React__default.useCallback(function () {
        start({}, {
          pulsate: true
        });
      }, [start]);
      var stop = React__default.useCallback(function (event, cb) {
        clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
        // We still want to show ripple effect.

        if (event.type === 'touchend' && startTimerCommit.current) {
          event.persist();
          startTimerCommit.current();
          startTimerCommit.current = null;
          startTimer.current = setTimeout(function () {
            stop(event, cb);
          });
          return;
        }

        startTimerCommit.current = null;
        setRipples(function (oldRipples) {
          if (oldRipples.length > 0) {
            return oldRipples.slice(1);
          }

          return oldRipples;
        });
        rippleCallback.current = cb;
      }, []);
      React__default.useImperativeHandle(ref, function () {
        return {
          pulsate: pulsate,
          start: start,
          stop: stop
        };
      }, [pulsate, start, stop]);
      return React__default.createElement("span", _extends({
        className: clsx(classes.root, className),
        ref: container
      }, other), React__default.createElement(TransitionGroup, {
        component: null,
        exit: true
      }, ripples));
    }); // TODO cleanup after https://github.com/reactjs/react-docgen/pull/378 is released

    function withMuiName(Component) {
      Component.muiName = 'MuiTouchRipple';
      return Component;
    }

    process.env.NODE_ENV !== "production" ? TouchRipple.propTypes = {
      /**
       * If `true`, the ripple starts at the center of the component
       * rather than at the point of interaction.
       */
      center: propTypes.bool,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string
    } : void 0;
    var TouchRipple$1 = withStyles$1(styles, {
      flip: false,
      name: 'MuiTouchRipple'
    })(withMuiName(React__default.memo(TouchRipple)));

    var styles$1 = {
      /* Styles applied to the root element. */
      root: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        // Remove grey highlight
        WebkitTapHighlightColor: 'transparent',
        backgroundColor: 'transparent',
        // Reset default value
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
        border: 0,
        margin: 0,
        // Remove the margin in Safari
        borderRadius: 0,
        padding: 0,
        // Remove the padding in Firefox
        cursor: 'pointer',
        userSelect: 'none',
        verticalAlign: 'middle',
        '-moz-appearance': 'none',
        // Reset
        '-webkit-appearance': 'none',
        // Reset
        textDecoration: 'none',
        // So we take precedent over the style of a native <a /> element.
        color: 'inherit',
        '&::-moz-focus-inner': {
          borderStyle: 'none' // Remove Firefox dotted outline.

        },
        '&$disabled': {
          pointerEvents: 'none',
          // Disable link interactions
          cursor: 'default'
        }
      },

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Pseudo-class applied to the root element if keyboard focused. */
      focusVisible: {}
    };
    /**
     * `ButtonBase` contains as few styles as possible.
     * It aims to be a simple building block for creating a button.
     * It contains a load of style reset and some focus/ripple logic.
     */

    var ButtonBase = React__default.forwardRef(function ButtonBase(props, ref) {
      var action = props.action,
          buttonRefProp = props.buttonRef,
          _props$centerRipple = props.centerRipple,
          centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple,
          children = props.children,
          classes = props.classes,
          className = props.className,
          _props$component = props.component,
          component = _props$component === void 0 ? 'button' : _props$component,
          _props$disabled = props.disabled,
          disabled = _props$disabled === void 0 ? false : _props$disabled,
          _props$disableRipple = props.disableRipple,
          disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
          _props$disableTouchRi = props.disableTouchRipple,
          disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi,
          _props$focusRipple = props.focusRipple,
          focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple,
          focusVisibleClassName = props.focusVisibleClassName,
          onBlur = props.onBlur,
          onClick = props.onClick,
          onFocus = props.onFocus,
          onFocusVisible = props.onFocusVisible,
          onKeyDown = props.onKeyDown,
          onKeyUp = props.onKeyUp,
          onMouseDown = props.onMouseDown,
          onMouseLeave = props.onMouseLeave,
          onMouseUp = props.onMouseUp,
          onTouchEnd = props.onTouchEnd,
          onTouchMove = props.onTouchMove,
          onTouchStart = props.onTouchStart,
          onDragLeave = props.onDragLeave,
          _props$tabIndex = props.tabIndex,
          tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
          TouchRippleProps = props.TouchRippleProps,
          _props$type = props.type,
          type = _props$type === void 0 ? 'button' : _props$type,
          other = _objectWithoutProperties(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);

      var buttonRef = React__default.useRef(null);

      function getButtonNode() {
        // #StrictMode ready
        return ReactDOM.findDOMNode(buttonRef.current);
      }

      var rippleRef = React__default.useRef(null);

      var _React$useState = React__default.useState(false),
          focusVisible = _React$useState[0],
          setFocusVisible = _React$useState[1];

      if (disabled && focusVisible) {
        setFocusVisible(false);
      }

      var _useIsFocusVisible = useIsFocusVisible(),
          isFocusVisible = _useIsFocusVisible.isFocusVisible,
          onBlurVisible = _useIsFocusVisible.onBlurVisible,
          focusVisibleRef = _useIsFocusVisible.ref;

      React__default.useImperativeHandle(action, function () {
        return {
          focusVisible: function focusVisible() {
            setFocusVisible(true);
            buttonRef.current.focus();
          }
        };
      }, []);
      React__default.useEffect(function () {
        if (focusVisible && focusRipple && !disableRipple) {
          rippleRef.current.pulsate();
        }
      }, [disableRipple, focusRipple, focusVisible]);

      function useRippleHandler(rippleAction, eventCallback) {
        var skipRippleAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : disableTouchRipple;
        return useEventCallback(function (event) {
          if (eventCallback) {
            eventCallback(event);
          }

          var ignore = event.defaultPrevented || skipRippleAction;

          if (!ignore && rippleRef.current) {
            rippleRef.current[rippleAction](event);
          }

          return true;
        });
      }

      var handleMouseDown = useRippleHandler('start', onMouseDown);
      var handleDragLeave = useRippleHandler('stop', onDragLeave);
      var handleMouseUp = useRippleHandler('stop', onMouseUp);
      var handleMouseLeave = useRippleHandler('stop', function (event) {
        if (focusVisible) {
          event.preventDefault();
        }

        if (onMouseLeave) {
          onMouseLeave(event);
        }
      });
      var handleTouchStart = useRippleHandler('start', onTouchStart);
      var handleTouchEnd = useRippleHandler('stop', onTouchEnd);
      var handleTouchMove = useRippleHandler('stop', onTouchMove);
      var handleBlur = useRippleHandler('stop', function (event) {
        if (focusVisible) {
          onBlurVisible(event);
          setFocusVisible(false);
        }

        if (onBlur) {
          onBlur(event);
        }
      }, false);
      var handleFocus = useEventCallback(function (event) {
        if (disabled) {
          return;
        } // Fix for https://github.com/facebook/react/issues/7769


        if (!buttonRef.current) {
          buttonRef.current = event.currentTarget;
        }

        if (isFocusVisible(event)) {
          setFocusVisible(true);

          if (onFocusVisible) {
            onFocusVisible(event);
          }
        }

        if (onFocus) {
          onFocus(event);
        }
      });
      /**
       * IE 11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
       */

      var keydownRef = React__default.useRef(false);
      var handleKeyDown = useEventCallback(function (event) {
        // Check if key is already down to avoid repeats being counted as multiple activations
        if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
          keydownRef.current = true;
          event.persist();
          rippleRef.current.stop(event, function () {
            rippleRef.current.start(event);
          });
        }

        if (onKeyDown) {
          onKeyDown(event);
        }

        var button = getButtonNode(); // Keyboard accessibility for non interactive elements

        if (event.target === event.currentTarget && component && component !== 'button' && (event.key === ' ' || event.key === 'Enter') && !(button.tagName === 'A' && button.href)) {
          event.preventDefault();

          if (onClick) {
            onClick(event);
          }
        }
      });
      var handleKeyUp = useEventCallback(function (event) {
        if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible) {
          keydownRef.current = false;
          event.persist();
          rippleRef.current.stop(event, function () {
            rippleRef.current.pulsate(event);
          });
        }

        if (onKeyUp) {
          onKeyUp(event);
        }
      });
      var ComponentProp = component;

      if (ComponentProp === 'button' && other.href) {
        ComponentProp = 'a';
      }

      var buttonProps = {};

      if (ComponentProp === 'button') {
        buttonProps.type = type;
        buttonProps.disabled = disabled;
      } else {
        if (ComponentProp !== 'a' || !other.href) {
          buttonProps.role = 'button';
        }

        buttonProps['aria-disabled'] = disabled;
      }

      var handleUserRef = useForkRef(buttonRefProp, ref);
      var handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
      var handleRef = useForkRef(handleUserRef, handleOwnRef);
      return React__default.createElement(ComponentProp, _extends({
        className: clsx(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
        onBlur: handleBlur,
        onClick: onClick,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        onMouseDown: handleMouseDown,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
        onDragLeave: handleDragLeave,
        onTouchEnd: handleTouchEnd,
        onTouchMove: handleTouchMove,
        onTouchStart: handleTouchStart,
        ref: handleRef,
        tabIndex: disabled ? -1 : tabIndex
      }, buttonProps, other), children, !disableRipple && !disabled ? React__default.createElement(NoSsr, null, React__default.createElement(TouchRipple$1, _extends({
        ref: rippleRef,
        center: centerRipple
      }, TouchRippleProps))) : null);
    });
    process.env.NODE_ENV !== "production" ? ButtonBase.propTypes = {
      /**
       * A ref for imperative actions.
       * It currently only supports `focusVisible()` action.
       */
      action: refType,

      /**
       * Use that prop to pass a ref to the native button component.
       * @deprecated Use `ref` instead.
       */
      buttonRef: refType,

      /**
       * If `true`, the ripples will be centered.
       * They won't start at the cursor interaction position.
       */
      centerRipple: propTypes.bool,

      /**
       * The content of the component.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       */
      component: elementTypeAcceptingRef$1,

      /**
       * If `true`, the base button will be disabled.
       */
      disabled: propTypes.bool,

      /**
       * If `true`, the ripple effect will be disabled.
       *
       * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
       * to highlight the element by applying separate styles with the `focusVisibleClassName`.
       */
      disableRipple: propTypes.bool,

      /**
       * If `true`, the touch ripple effect will be disabled.
       */
      disableTouchRipple: propTypes.bool,

      /**
       * If `true`, the base button will have a keyboard focus ripple.
       * `disableRipple` must also be `false`.
       */
      focusRipple: propTypes.bool,

      /**
       * This prop can help a person know which element has the keyboard focus.
       * The class name will be applied when the element gain the focus through a keyboard interaction.
       * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
       * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
       * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
       * if needed.
       */
      focusVisibleClassName: propTypes.string,

      /**
       * @ignore
       */
      onBlur: propTypes.func,

      /**
       * @ignore
       */
      onClick: propTypes.func,

      /**
       * @ignore
       */
      onDragLeave: propTypes.func,

      /**
       * @ignore
       */
      onFocus: propTypes.func,

      /**
       * Callback fired when the component is focused with a keyboard.
       * We trigger a `onFocus` callback too.
       */
      onFocusVisible: propTypes.func,

      /**
       * @ignore
       */
      onKeyDown: propTypes.func,

      /**
       * @ignore
       */
      onKeyUp: propTypes.func,

      /**
       * @ignore
       */
      onMouseDown: propTypes.func,

      /**
       * @ignore
       */
      onMouseLeave: propTypes.func,

      /**
       * @ignore
       */
      onMouseUp: propTypes.func,

      /**
       * @ignore
       */
      onTouchEnd: propTypes.func,

      /**
       * @ignore
       */
      onTouchMove: propTypes.func,

      /**
       * @ignore
       */
      onTouchStart: propTypes.func,

      /**
       * @ignore
       */
      role: propTypes.string,

      /**
       * @ignore
       */
      tabIndex: propTypes.oneOfType([propTypes.number, propTypes.string]),

      /**
       * Props applied to the `TouchRipple` element.
       */
      TouchRippleProps: propTypes.object,

      /**
       * Used to control the button's purpose.
       * This prop passes the value to the `type` attribute of the native button component.
       */
      type: propTypes.oneOf(['submit', 'reset', 'button'])
    } : void 0;
    var ButtonBase$1 = withStyles$1(styles$1, {
      name: 'MuiButtonBase'
    })(ButtonBase);

    // It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
    //
    // A strict capitalization should uppercase the first letter of each word a the sentence.
    // We only handle the first word.
    function capitalize(string) {
      if (process.env.NODE_ENV !== 'production') {
        if (typeof string !== 'string') {
          throw new Error('Material-UI: capitalize(string) expects a string argument.');
        }
      }

      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    /**
     * Safe chained function
     *
     * Will only create a new function if needed,
     * otherwise will pass back existing functions or null.
     *
     * @param {function} functions to chain
     * @returns {function|null}
     */

    function createChainedFunction() {
      for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
      }

      return funcs.reduce(function (acc, func) {
        if (func == null) {
          return acc;
        }

        if (process.env.NODE_ENV !== 'production') {
          if (typeof func !== 'function') {
            console.error('Material-UI: invalid Argument Type, must only provide functions, undefined, or null.');
          }
        }

        return function chainedFunction() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          acc.apply(this, args);
          func.apply(this, args);
        };
      }, function () {});
    }

    var styles$2 = function styles(theme) {
      return {
        /* Styles applied to the root element. */
        root: _extends({}, theme.typography.button, {
          boxSizing: 'border-box',
          minWidth: 64,
          padding: '6px 16px',
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.text.primary,
          transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
            duration: theme.transitions.duration.short
          }),
          '&:hover': {
            textDecoration: 'none',
            backgroundColor: fade(theme.palette.text.primary, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            },
            '&$disabled': {
              backgroundColor: 'transparent'
            }
          },
          '&$disabled': {
            color: theme.palette.action.disabled
          }
        }),

        /* Styles applied to the span element that wraps the children. */
        label: {
          width: '100%',
          // Ensure the correct width for iOS Safari
          display: 'inherit',
          alignItems: 'inherit',
          justifyContent: 'inherit'
        },

        /* Styles applied to the root element if `variant="text"`. */
        text: {
          padding: '6px 8px'
        },

        /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
        textPrimary: {
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }
        },

        /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
        textSecondary: {
          color: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }
        },

        /* Styles applied to the root element if `variant="outlined"`. */
        outlined: {
          padding: '5px 16px',
          border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
          '&$disabled': {
            border: "1px solid ".concat(theme.palette.action.disabled)
          }
        },

        /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
        outlinedPrimary: {
          color: theme.palette.primary.main,
          border: "1px solid ".concat(fade(theme.palette.primary.main, 0.5)),
          '&:hover': {
            border: "1px solid ".concat(theme.palette.primary.main),
            backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          }
        },

        /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
        outlinedSecondary: {
          color: theme.palette.secondary.main,
          border: "1px solid ".concat(fade(theme.palette.secondary.main, 0.5)),
          '&:hover': {
            border: "1px solid ".concat(theme.palette.secondary.main),
            backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent'
            }
          },
          '&$disabled': {
            border: "1px solid ".concat(theme.palette.action.disabled)
          }
        },

        /* Styles applied to the root element if `variant="contained"`. */
        contained: {
          color: theme.palette.getContrastText(theme.palette.grey[300]),
          backgroundColor: theme.palette.grey[300],
          boxShadow: theme.shadows[2],
          '&$focusVisible': {
            boxShadow: theme.shadows[6]
          },
          '&:active': {
            boxShadow: theme.shadows[8]
          },
          '&$disabled': {
            color: theme.palette.action.disabled,
            boxShadow: theme.shadows[0],
            backgroundColor: theme.palette.action.disabledBackground
          },
          '&:hover': {
            backgroundColor: theme.palette.grey.A100,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: theme.palette.grey[300]
            },
            '&$disabled': {
              backgroundColor: theme.palette.action.disabledBackground
            }
          }
        },

        /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
        containedPrimary: {
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: theme.palette.primary.main
            }
          }
        },

        /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
        containedSecondary: {
          color: theme.palette.secondary.contrastText,
          backgroundColor: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: theme.palette.secondary.main
            }
          }
        },

        /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
        focusVisible: {},

        /* Pseudo-class applied to the root element if `disabled={true}`. */
        disabled: {},

        /* Styles applied to the root element if `color="inherit"`. */
        colorInherit: {
          color: 'inherit',
          borderColor: 'currentColor'
        },

        /* Styles applied to the root element if `size="small"`. */
        sizeSmall: {
          padding: '4px 8px',
          fontSize: theme.typography.pxToRem(13)
        },

        /* Styles applied to the root element if `size="large"`. */
        sizeLarge: {
          padding: '8px 24px',
          fontSize: theme.typography.pxToRem(15)
        },

        /* Styles applied to the root element if `fullWidth={true}`. */
        fullWidth: {
          width: '100%'
        }
      };
    };
    var Button = React__default.forwardRef(function Button(props, ref) {
      var children = props.children,
          classes = props.classes,
          classNameProp = props.className,
          _props$color = props.color,
          color = _props$color === void 0 ? 'default' : _props$color,
          _props$component = props.component,
          component = _props$component === void 0 ? 'button' : _props$component,
          _props$disabled = props.disabled,
          disabled = _props$disabled === void 0 ? false : _props$disabled,
          _props$disableFocusRi = props.disableFocusRipple,
          disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
          focusVisibleClassName = props.focusVisibleClassName,
          _props$fullWidth = props.fullWidth,
          fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
          _props$size = props.size,
          size = _props$size === void 0 ? 'medium' : _props$size,
          _props$type = props.type,
          type = _props$type === void 0 ? 'button' : _props$type,
          _props$variant = props.variant,
          variant = _props$variant === void 0 ? 'text' : _props$variant,
          other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "fullWidth", "size", "type", "variant"]);

      var text = variant === 'text';
      var outlined = variant === 'outlined';
      var contained = variant === 'contained';
      var primary = color === 'primary';
      var secondary = color === 'secondary';
      var className = clsx(classes.root, classNameProp, text && [classes.text, primary && classes.textPrimary, secondary && classes.textSecondary], outlined && [classes.outlined, primary && classes.outlinedPrimary, secondary && classes.outlinedSecondary], contained && [classes.contained, primary && classes.containedPrimary, secondary && classes.containedSecondary], size !== 'medium' && classes["size".concat(capitalize(size))], disabled && classes.disabled, fullWidth && classes.fullWidth, {
        inherit: classes.colorInherit
      }[color]);
      return React__default.createElement(ButtonBase$1, _extends({
        className: className,
        component: component,
        disabled: disabled,
        focusRipple: !disableFocusRipple,
        focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
        ref: ref,
        type: type
      }, other), React__default.createElement("span", {
        className: classes.label
      }, children));
    });
    process.env.NODE_ENV !== "production" ? Button.propTypes = {
      /**
       * The content of the button.
       */
      children: propTypes.node.isRequired,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * The color of the component. It supports those theme colors that make sense for this component.
       */
      color: propTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),

      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       */
      component: propTypes.elementType,

      /**
       * If `true`, the button will be disabled.
       */
      disabled: propTypes.bool,

      /**
       * If `true`, the  keyboard focus ripple will be disabled.
       * `disableRipple` must also be true.
       */
      disableFocusRipple: propTypes.bool,

      /**
       * If `true`, the ripple effect will be disabled.
       *
       * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
       * to highlight the element by applying separate styles with the `focusVisibleClassName`.
       */
      disableRipple: propTypes.bool,

      /**
       * @ignore
       */
      focusVisibleClassName: propTypes.string,

      /**
       * If `true`, the button will take up the full width of its container.
       */
      fullWidth: propTypes.bool,

      /**
       * The URL to link to when the button is clicked.
       * If defined, an `a` element will be used as the root node.
       */
      href: propTypes.string,

      /**
       * The size of the button.
       * `small` is equivalent to the dense button styling.
       */
      size: propTypes.oneOf(['small', 'medium', 'large']),

      /**
       * @ignore
       */
      type: propTypes.string,

      /**
       * The variant to use.
       */
      variant: propTypes.oneOf(['text', 'outlined', 'contained'])
    } : void 0;
    var Button$1 = withStyles$1(styles$2, {
      name: 'MuiButton'
    })(Button);

    var css$2 = "/* TODO: remove this rule once all button variants converted to Material-UI wrappers */\n:root {\n    --color4-button-dark-fade: \n        hsl(var(--color1-primary-h), var(--color1-primary-s), calc(var(--color1-primary-l) - 6%));\n}\n\n.MuiButton-containedPrimary {\n    background-color: var(--color1-primary);\n}\n.MuiButton-containedPrimary:hover {\n    background-color: hsl(var(--color1-primary-h), var(--color1-primary-s), calc(var(--color1-primary-l) - 6%));\n}\n\n/* TODO: remove all these .app0button rules once all button variants converted to Material-UI wrappers */\n.app-button {\n    display: inline-block;\n    cursor: pointer;\n    color: #ffffff;\n    font-size: 14px;\n    line-height: 20px;\n    vertical-align: middle;\n    border-radius: 4px;\n    border: 1px solid #cccccc;\n    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n    text-decoration: none;\n    text-align: center;\n    margin: 0;\n    padding: 4px 12px;\n    background: linear-gradient(\n        to bottom, \n        var(--color4-button) 0%, \n        var(--color4-button-dark-fade) 84%);\n        /* hsl(var(--color1-primary-h), var(--color1-primary-s), calc(var(--color1-primary-l) - 6%)) 84%);  */\n        /* to #72bf44 */\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n.app-button:hover {\n    background: linear-gradient(\n        to bottom, \n        var(--color4-button-dark-fade) 0%, \n        var(--color4-button) 84%);\n}\n.app-button:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n}\n.app-button:active {\n    outline: 0;\n    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05)\n}\n.app-button[disabled] {\n    background: linear-gradient(to bottom, #eeeeee 0%, #dddddd 84%);\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.25);\n    color: #888888;\n}\n";
    styleInject(css$2);

    var FormButton = function (props) {
        var className = props.className, children = props.children, color = props.color, ref = props.ref, rest = __rest(props, ["className", "children", "color", "ref"]);
        // preserve given class value/s by tacking them onto our guaranteed class/s
        var givenClasses = getAppendAttributeValues(props.className);
        return (React__default.createElement(Button$1, __assign({ className: givenClasses, ref: ref, color: "primary", variant: "contained" }, rest), children));
    };

    var css$3 = ".button-link {\n    text-decoration: underline;\n    background-color: transparent;\n    border: none;\n    color: blue;\n    cursor: pointer;\n    font-family:inherit;\n    font-size:inherit;\n}\n";
    styleInject(css$3);

    var ButtonLink = function (props) {
        var className = props.className, children = props.children, rest = __rest(props, ["className", "children"]);
        // preserve given class value/s by tacking them onto our guaranteed class/s
        var givenClasses = getAppendAttributeValues(props.className);
        return (React__default.createElement("button", __assign({ className: "button-link" + givenClasses }, rest), children));
    };

    var css$4 = ".button-row {\n    padding: 20px 12px 12px 12px;\n}";
    styleInject(css$4);

    var ButtonRow = function (props) {
        var className = props.className, children = props.children, rest = __rest(props, ["className", "children"]);
        // preserve given class value/s by tacking them onto our guaranteed class/s
        var givenClasses = getAppendAttributeValues(props.className);
        return (React__default.createElement("div", __assign({ className: "button-row" + givenClasses }, rest), children));
    };

    var css$5 = ".secondary-form-button {\n    background: #f5f5f5;\n    color: #222222;\n    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n}\n\n.secondary-form-button:hover, .secondary-form-button.active {\n    background: #e6e6e6;\n    -webkit-transition: background-position 0.1s linear;\n    -moz-transition: background-position 0.1s linear;\n    -o-transition: background-position 0.1s linear;\n    transition: background-position 0.1s linear;\n}\n\n.secondary-form-button[disabled] {\n    background: #e6e6e6;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.25);\n    cursor: default;\n    opacity: 0.8;\n}\n";
    styleInject(css$5);

    var SecondaryFormButton = function (props) {
        var className = props.className, children = props.children, rest = __rest(props, ["className", "children"]);
        // preserve given class value/s by tacking them onto our guaranteed class/s
        var givenClasses = getAppendAttributeValues(props.className);
        return (React__default.createElement("button", __assign({ className: "secondary-form-button app-button" + givenClasses }, rest), children));
    };

    var css$6 = "input[type=\"radio\"].toggle-switch {\n    display: none; \n}\n\ninput[type=\"radio\"].toggle-switch.active+label {\n    cursor: pointer; \n}\n";
    styleInject(css$6);

    var ToggleButtons = function (props) {
        var id = props.id, selected = props.selected, items = props.items, onClick = props.onClick, disabled = props.disabled, className = props.className, rest = __rest(props, ["id", "selected", "items", "onClick", "disabled", "className"]);
        var isActive = function (itemValue) { return selected === itemValue && !disabled ? "active" : ""; };
        var renderButton = (items.map(function (item) { return (React__default.createElement(SecondaryFormButton, __assign({ "data-toggle-display-name": item.displayName, "data-toggle-btn-value": item.value, key: item.value, id: id, className: "button " + className + " " + isActive(item.value), onClick: onClick, value: item.value, disabled: disabled }, rest), item.displayName)); }));
        return (React__default.createElement(ButtonGroup, null, renderButton));
    };

    var css$7 = ".form-error {\n    color: #d30909;\n    margin: 12px;\n    padding: 12px 12px 12px 36px;\n    background-image: url(./icon_error.png);\n    background-repeat: no-repeat;\n    background-position: 0 13px;\n}\n";
    styleInject(css$7);

    var FormError = function (props) {
        var className = props.className, children = props.children, rest = __rest(props, ["className", "children"]);
        // preserve given class value/s by tacking them onto our guaranteed class/s
        var givenClasses = getAppendAttributeValues(props.className);
        return (React__default.createElement("div", __assign({ className: "form-error" + givenClasses }, rest), children));
    };

    var css$8 = ".form-panel {\n    padding: 40px;\n    font-size: 14px;\n    background-color: #f4f4f4;\n    border: 1px solid #eeeeee;\n    border-radius: 5px;\n}\n\n/* if a LoadingOverlay componenent is used within a FormPanel, \n   make sure it's fading to the correct background color  */\n.form-panel .disable-overlay-wrapper .disable-overlay {\n    background-color: #f4f4f4;\n}";
    styleInject(css$8);

    var FormPanel = function (props) {
        var className = props.className, children = props.children, rest = __rest(props, ["className", "children"]);
        // preserve given class value/s by tacking them onto our guaranteed class/s
        var givenClasses = getAppendAttributeValues(props.className);
        return (React__default.createElement("div", __assign({ className: "form-panel" + givenClasses }, rest), children));
    };

    function formControlState(_ref) {
      var props = _ref.props,
          states = _ref.states,
          muiFormControl = _ref.muiFormControl;
      return states.reduce(function (acc, state) {
        acc[state] = props[state];

        if (muiFormControl) {
          if (typeof props[state] === 'undefined') {
            acc[state] = muiFormControl[state];
          }
        }

        return acc;
      }, {});
    }

    /**
     * @ignore - internal component.
     */

    var FormControlContext = React__default.createContext();
    function useFormControl() {
      return React__default.useContext(FormControlContext);
    }

    // Corresponds to 10 frames at 60 Hz.
    // A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
    function debounce(func) {
      var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
      var timeout;

      function debounced() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        // eslint-disable-next-line consistent-this
        var that = this;

        var later = function later() {
          func.apply(that, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      }

      debounced.clear = function () {
        clearTimeout(timeout);
      };

      return debounced;
    }

    function getStyleValue(computedStyle, property) {
      return parseInt(computedStyle[property], 10) || 0;
    }

    var useEnhancedEffect$3 = typeof window !== 'undefined' ? React__default.useLayoutEffect : React__default.useEffect;
    var styles$3 = {
      /* Styles applied to the shadow textarea element. */
      shadow: {
        // Visibility needed to hide the extra text area on iPads
        visibility: 'hidden',
        // Remove from the content flow
        position: 'absolute',
        // Ignore the scrollbar width
        overflow: 'hidden',
        height: 0,
        top: 0,
        left: 0
      }
    };
    var TextareaAutosize = React__default.forwardRef(function TextareaAutosize(props, ref) {
      var onChange = props.onChange,
          rows = props.rows,
          rowsMax = props.rowsMax,
          style = props.style,
          value = props.value,
          other = _objectWithoutProperties(props, ["onChange", "rows", "rowsMax", "style", "value"]);

      var _React$useRef = React__default.useRef(value != null),
          isControlled = _React$useRef.current;

      var inputRef = React__default.useRef(null);
      var handleRef = useForkRef(ref, inputRef);
      var shadowRef = React__default.useRef(null);

      var _React$useState = React__default.useState({}),
          state = _React$useState[0],
          setState = _React$useState[1];

      var syncHeight = React__default.useCallback(function () {
        var input = inputRef.current;
        var computedStyle = window.getComputedStyle(input);
        var inputShallow = shadowRef.current;
        inputShallow.style.width = computedStyle.width;
        inputShallow.value = input.value || props.placeholder || 'x';
        var boxSizing = computedStyle['box-sizing'];
        var padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
        var border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

        var innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

        inputShallow.value = 'x';
        var singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

        var outerHeight = innerHeight;

        if (rows != null) {
          outerHeight = Math.max(Number(rows) * singleRowHeight, outerHeight);
        }

        if (rowsMax != null) {
          outerHeight = Math.min(Number(rowsMax) * singleRowHeight, outerHeight);
        }

        outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

        var outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
        var overflow = Math.abs(outerHeight - innerHeight) <= 1;
        setState(function (prevState) {
          // Need a large enough different to update the height.
          // This prevents infinite rendering loop.
          if (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow) {
            return {
              overflow: overflow,
              outerHeightStyle: outerHeightStyle
            };
          }

          return prevState;
        });
      }, [setState, rows, rowsMax, props.placeholder]);
      React__default.useEffect(function () {
        var handleResize = debounce(function () {
          syncHeight();
        });
        window.addEventListener('resize', handleResize);
        return function () {
          handleResize.clear();
          window.removeEventListener('resize', handleResize);
        };
      }, [syncHeight]);
      useEnhancedEffect$3(function () {
        syncHeight();
      });

      var handleChange = function handleChange(event) {
        if (!isControlled) {
          syncHeight();
        }

        if (onChange) {
          onChange(event);
        }
      };

      return React__default.createElement(React__default.Fragment, null, React__default.createElement("textarea", _extends({
        value: value,
        onChange: handleChange,
        ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
        ,
        rows: rows || 1,
        style: _extends({
          height: state.outerHeightStyle,
          // Need a large enough different to allow scrolling.
          // This prevents infinite rendering loop.
          overflow: state.overflow ? 'hidden' : null
        }, style)
      }, other)), React__default.createElement("textarea", {
        "aria-hidden": true,
        className: props.className,
        readOnly: true,
        ref: shadowRef,
        tabIndex: -1,
        style: _extends({}, styles$3.shadow, {}, style)
      }));
    });
    process.env.NODE_ENV !== "production" ? TextareaAutosize.propTypes = {
      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * @ignore
       */
      onChange: propTypes.func,

      /**
       * @ignore
       */
      placeholder: propTypes.string,

      /**
       * Minimum number of rows to display.
       */
      rows: propTypes.oneOfType([propTypes.string, propTypes.number]),

      /**
       * Maximum number of rows to display.
       */
      rowsMax: propTypes.oneOfType([propTypes.string, propTypes.number]),

      /**
       * @ignore
       */
      style: propTypes.object,

      /**
       * @ignore
       */
      value: propTypes.any
    } : void 0;

    // Supports determination of isControlled().
    // Controlled input accepts its current value as a prop.
    //
    // @see https://facebook.github.io/react/docs/forms.html#controlled-components
    // @param value
    // @returns {boolean} true if string (including '') or number (including zero)
    function hasValue(value) {
      return value != null && !(Array.isArray(value) && value.length === 0);
    } // Determine if field is empty or filled.
    // Response determines if label is presented above field or as placeholder.
    //
    // @param obj
    // @param SSR
    // @returns {boolean} False when not present or empty string.
    //                    True when any number or string with length.

    function isFilled(obj) {
      var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
    } // Determine if an Input is adorned on start.
    // It's corresponding to the left with LTR.
    //
    // @param obj
    // @returns {boolean} False when no adornments.
    //                    True when adorned at the start.

    function isAdornedStart(obj) {
      return obj.startAdornment;
    }

    var styles$4 = function styles(theme) {
      var light = theme.palette.type === 'light';
      var placeholder = {
        color: 'currentColor',
        opacity: light ? 0.42 : 0.5,
        transition: theme.transitions.create('opacity', {
          duration: theme.transitions.duration.shorter
        })
      };
      var placeholderHidden = {
        opacity: '0 !important'
      };
      var placeholderVisible = {
        opacity: light ? 0.42 : 0.5
      };
      return {
        /* Styles applied to the root element. */
        root: {
          // Mimics the default input display property used by browsers for an input.
          fontFamily: theme.typography.fontFamily,
          color: theme.palette.text.primary,
          fontSize: theme.typography.pxToRem(16),
          lineHeight: '1.1875em',
          // Reset (19px), match the native input line-height
          boxSizing: 'border-box',
          // Prevent padding issue with fullWidth.
          position: 'relative',
          cursor: 'text',
          display: 'inline-flex',
          alignItems: 'center',
          '&$disabled': {
            color: theme.palette.text.disabled,
            cursor: 'default'
          }
        },

        /* Styles applied to the root element if the component is a descendant of `FormControl`. */
        formControl: {},

        /* Styles applied to the root element if the component is focused. */
        focused: {},

        /* Styles applied to the root element if `disabled={true}`. */
        disabled: {},

        /* Styles applied to the root element if `startAdornment` is provided. */
        adornedStart: {},

        /* Styles applied to the root element if `endAdornment` is provided. */
        adornedEnd: {},

        /* Styles applied to the root element if `error={true}`. */
        error: {},

        /* Styles applied to the `input` element if `margin="dense"`. */
        marginDense: {},

        /* Styles applied to the root element if `multiline={true}`. */
        multiline: {
          padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
          '&$marginDense': {
            paddingTop: 4 - 1
          }
        },

        /* Styles applied to the root element if `fullWidth={true}`. */
        fullWidth: {
          width: '100%'
        },

        /* Styles applied to the `input` element. */
        input: {
          font: 'inherit',
          color: 'currentColor',
          padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
          border: 0,
          boxSizing: 'content-box',
          background: 'none',
          height: '1.1875em',
          // Reset (19px), match the native input line-height
          margin: 0,
          // Reset for Safari
          // Remove grey highlight
          WebkitTapHighlightColor: 'transparent',
          display: 'block',
          // Make the flex item shrink with Firefox
          minWidth: 0,
          width: '100%',
          // Fix IE 11 width issue
          '&::-webkit-input-placeholder': placeholder,
          '&::-moz-placeholder': placeholder,
          // Firefox 19+
          '&:-ms-input-placeholder': placeholder,
          // IE 11
          '&::-ms-input-placeholder': placeholder,
          // Edge
          '&:focus': {
            outline: 0
          },
          // Reset Firefox invalid required input style
          '&:invalid': {
            boxShadow: 'none'
          },
          '&::-webkit-search-decoration': {
            // Remove the padding when type=search.
            '-webkit-appearance': 'none'
          },
          // Show and hide the placeholder logic
          'label[data-shrink=false] + $formControl &': {
            '&::-webkit-input-placeholder': placeholderHidden,
            '&::-moz-placeholder': placeholderHidden,
            // Firefox 19+
            '&:-ms-input-placeholder': placeholderHidden,
            // IE 11
            '&::-ms-input-placeholder': placeholderHidden,
            // Edge
            '&:focus::-webkit-input-placeholder': placeholderVisible,
            '&:focus::-moz-placeholder': placeholderVisible,
            // Firefox 19+
            '&:focus:-ms-input-placeholder': placeholderVisible,
            // IE 11
            '&:focus::-ms-input-placeholder': placeholderVisible // Edge

          },
          '&$disabled': {
            opacity: 1 // Reset iOS opacity

          },
          '&:-webkit-autofill': {
            animationDuration: '5000s',
            animationName: '$auto-fill'
          }
        },
        '@keyframes auto-fill': {
          from: {}
        },

        /* Styles applied to the `input` element if `margin="dense"`. */
        inputMarginDense: {
          paddingTop: 4 - 1
        },

        /* Styles applied to the `input` element if `select={true}`. */
        inputSelect: {
          paddingRight: 24
        },

        /* Styles applied to the `input` element if `multiline={true}`. */
        inputMultiline: {
          height: 'auto',
          resize: 'none',
          padding: 0
        },

        /* Styles applied to the `input` element if `type="search"`. */
        inputTypeSearch: {
          // Improve type search style.
          '-moz-appearance': 'textfield',
          '-webkit-appearance': 'textfield'
        },

        /* Styles applied to the `input` element if `startAdornment` is provided. */
        inputAdornedStart: {},

        /* Styles applied to the `input` element if `endAdornment` is provided. */
        inputAdornedEnd: {},

        /* Styles applied to the `input` element if `hiddenLabel={true}`. */
        inputHiddenLabel: {}
      };
    };
    var useEnhancedEffect$4 = typeof window === 'undefined' ? React__default.useEffect : React__default.useLayoutEffect;
    /**
     * `InputBase` contains as few styles as possible.
     * It aims to be a simple building block for creating an input.
     * It contains a load of style reset and some state logic.
     */

    var InputBase = React__default.forwardRef(function InputBase(props, ref) {
      var ariaDescribedby = props['aria-describedby'],
          autoComplete = props.autoComplete,
          autoFocus = props.autoFocus,
          classes = props.classes,
          classNameProp = props.className,
          defaultValue = props.defaultValue,
          disabled = props.disabled,
          endAdornment = props.endAdornment,
          error = props.error,
          _props$fullWidth = props.fullWidth,
          fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
          id = props.id,
          _props$inputComponent = props.inputComponent,
          inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
          _props$inputProps = props.inputProps;
      _props$inputProps = _props$inputProps === void 0 ? {} : _props$inputProps;

      var inputPropsClassName = _props$inputProps.className,
          inputPropsProp = _objectWithoutProperties(_props$inputProps, ["className"]),
          inputRefProp = props.inputRef,
          margin = props.margin,
          _props$multiline = props.multiline,
          multiline = _props$multiline === void 0 ? false : _props$multiline,
          name = props.name,
          onBlur = props.onBlur,
          onChange = props.onChange,
          onClick = props.onClick,
          onFocus = props.onFocus,
          onKeyDown = props.onKeyDown,
          onKeyUp = props.onKeyUp,
          placeholder = props.placeholder,
          readOnly = props.readOnly,
          renderSuffix = props.renderSuffix,
          rows = props.rows,
          rowsMax = props.rowsMax,
          _props$select = props.select,
          select = _props$select === void 0 ? false : _props$select,
          startAdornment = props.startAdornment,
          _props$type = props.type,
          type = _props$type === void 0 ? 'text' : _props$type,
          value = props.value,
          other = _objectWithoutProperties(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "select", "startAdornment", "type", "value"]);

      var _React$useRef = React__default.useRef(value != null),
          isControlled = _React$useRef.current;

      var inputRef = React__default.useRef();
      var handleInputRefWarning = React__default.useCallback(function (instance) {
        if (process.env.NODE_ENV !== 'production') {
          if (instance && !(instance instanceof HTMLInputElement) && !instance.focus) {
            console.error(['Material-UI: you have provided a `inputComponent` to the input component', 'that does not correctly handle the `inputRef` prop.', 'Make sure the `inputRef` prop is called with a HTMLInputElement.'].join('\n'));
          }
        }
      }, []);
      var handleInputPropsRefProp = useForkRef(inputPropsProp.ref, handleInputRefWarning);
      var handleInputRefProp = useForkRef(inputRefProp, handleInputPropsRefProp);
      var handleInputRef = useForkRef(inputRef, handleInputRefProp);

      var _React$useState = React__default.useState(false),
          focused = _React$useState[0],
          setFocused = _React$useState[1];

      var muiFormControl = useFormControl();

      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React__default.useEffect(function () {
          if (muiFormControl) {
            return muiFormControl.registerEffect();
          }

          return undefined;
        }, [muiFormControl]);
      }

      var fcs = formControlState({
        props: props,
        muiFormControl: muiFormControl,
        states: ['disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled']
      });
      fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
      // We need to book keep the focused state manually.

      React__default.useEffect(function () {
        if (!muiFormControl && disabled && focused) {
          setFocused(false);

          if (onBlur) {
            onBlur();
          }
        }
      }, [muiFormControl, disabled, focused, onBlur]);
      var onFilled = muiFormControl && muiFormControl.onFilled;
      var onEmpty = muiFormControl && muiFormControl.onEmpty;
      var checkDirty = React__default.useCallback(function (obj) {
        if (isFilled(obj)) {
          if (onFilled) {
            onFilled();
          }
        } else if (onEmpty) {
          onEmpty();
        }
      }, [onFilled, onEmpty]);
      useEnhancedEffect$4(function () {
        if (isControlled) {
          checkDirty({
            value: value
          });
        }
      }, [value, checkDirty, isControlled]);

      var handleFocus = function handleFocus(event) {
        // Fix a bug with IE 11 where the focus/blur events are triggered
        // while the input is disabled.
        if (fcs.disabled) {
          event.stopPropagation();
          return;
        }

        if (onFocus) {
          onFocus(event);
        }

        if (muiFormControl && muiFormControl.onFocus) {
          muiFormControl.onFocus(event);
        } else {
          setFocused(true);
        }
      };

      var handleBlur = function handleBlur(event) {
        if (onBlur) {
          onBlur(event);
        }

        if (muiFormControl && muiFormControl.onBlur) {
          muiFormControl.onBlur(event);
        } else {
          setFocused(false);
        }
      };

      var handleChange = function handleChange(event) {
        if (!isControlled) {
          var element = event.target || inputRef.current;

          if (element == null) {
            throw new TypeError('Material-UI: Expected valid input target. ' + 'Did you use a custom `inputComponent` and forget to forward refs? ' + 'See https://material-ui.com/r/input-component-ref-interface for more info.');
          }

          checkDirty({
            value: element.value
          });
        } // Perform in the willUpdate


        if (onChange) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          onChange.apply(void 0, [event].concat(args));
        }
      }; // Check the input state on mount, in case it was filled by the user
      // or auto filled by the browser before the hydration (for SSR).


      React__default.useEffect(function () {
        checkDirty(inputRef.current);
      }, []); // eslint-disable-line react-hooks/exhaustive-deps

      var handleClick = function handleClick(event) {
        if (inputRef.current && event.currentTarget === event.target) {
          inputRef.current.focus();
        }

        if (onClick) {
          onClick(event);
        }
      };

      var InputComponent = inputComponent;

      var inputProps = _extends({}, inputPropsProp, {
        ref: handleInputRef
      });

      if (typeof InputComponent !== 'string') {
        inputProps = _extends({
          // Rename ref to inputRef as we don't know the
          // provided `inputComponent` structure.
          inputRef: handleInputRef,
          type: type
        }, inputProps, {
          ref: null
        });
      } else if (multiline) {
        if (rows && !rowsMax) {
          InputComponent = 'textarea';
        } else {
          inputProps = _extends({
            rows: rows,
            rowsMax: rowsMax
          }, inputProps);
          InputComponent = TextareaAutosize;
        }
      } else {
        inputProps = _extends({
          type: type
        }, inputProps);
      }

      var handleAutoFill = function handleAutoFill() {
        // Provide a fake value as Chrome might not let you access it for security reasons.
        checkDirty({
          value: 'x'
        });
      };

      return React__default.createElement("div", _extends({
        className: clsx(classes.root, classNameProp, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, {
          dense: classes.marginDense
        }[fcs.margin]),
        onClick: handleClick,
        ref: ref
      }, other), startAdornment, React__default.createElement(FormControlContext.Provider, {
        value: null
      }, React__default.createElement(InputComponent, _extends({
        "aria-invalid": fcs.error,
        "aria-describedby": ariaDescribedby,
        autoComplete: autoComplete,
        autoFocus: autoFocus,
        className: clsx(classes.input, inputPropsClassName, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, select && classes.inputSelect, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, {
          search: classes.inputTypeSearch
        }[type], {
          dense: classes.inputMarginDense
        }[fcs.margin]),
        defaultValue: defaultValue,
        disabled: fcs.disabled,
        id: id,
        onAnimationStart: handleAutoFill,
        name: name,
        onBlur: handleBlur,
        onChange: handleChange,
        onFocus: handleFocus,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        placeholder: placeholder,
        readOnly: readOnly,
        required: fcs.required,
        rows: rows,
        value: value
      }, inputProps))), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
        startAdornment: startAdornment
      })) : null);
    });
    process.env.NODE_ENV !== "production" ? InputBase.propTypes = {
      /**
       * @ignore
       */
      'aria-describedby': propTypes.string,

      /**
       * This prop helps users to fill forms faster, especially on mobile devices.
       * The name can be confusing, as it's more like an autofill.
       * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
       */
      autoComplete: propTypes.string,

      /**
       * If `true`, the `input` element will be focused during the first mount.
       */
      autoFocus: propTypes.bool,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * The CSS class name of the wrapper element.
       */
      className: propTypes.string,

      /**
       * The default `input` element value. Use when the component is not controlled.
       */
      defaultValue: propTypes.any,

      /**
       * If `true`, the `input` element will be disabled.
       */
      disabled: propTypes.bool,

      /**
       * End `InputAdornment` for this component.
       */
      endAdornment: propTypes.node,

      /**
       * If `true`, the input will indicate an error. This is normally obtained via context from
       * FormControl.
       */
      error: propTypes.bool,

      /**
       * If `true`, the input will take up the full width of its container.
       */
      fullWidth: propTypes.bool,

      /**
       * The id of the `input` element.
       */
      id: propTypes.string,

      /**
       * The component used for the `input` element.
       * Either a string to use a DOM element or a component.
       */
      inputComponent: propTypes.elementType,

      /**
       * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
       */
      inputProps: propTypes.object,

      /**
       * Pass a ref to the `input` element.
       */
      inputRef: refType,

      /**
       * If `dense`, will adjust vertical spacing. This is normally obtained via context from
       * FormControl.
       */
      margin: propTypes.oneOf(['dense', 'none']),

      /**
       * If `true`, a textarea element will be rendered.
       */
      multiline: propTypes.bool,

      /**
       * Name attribute of the `input` element.
       */
      name: propTypes.string,

      /**
       * @ignore
       */
      onBlur: propTypes.func,

      /**
       * Callback fired when the value is changed.
       *
       * @param {object} event The event source of the callback.
       * You can pull out the new value by accessing `event.target.value` (string).
       */
      onChange: propTypes.func,

      /**
       * @ignore
       */
      onClick: propTypes.func,

      /**
       * @ignore
       */
      onFocus: propTypes.func,

      /**
       * @ignore
       */
      onKeyDown: propTypes.func,

      /**
       * @ignore
       */
      onKeyUp: propTypes.func,

      /**
       * The short hint displayed in the input before the user enters a value.
       */
      placeholder: propTypes.string,

      /**
       * It prevents the user from changing the value of the field
       * (not from interacting with the field).
       */
      readOnly: propTypes.bool,

      /**
       * @ignore
       */
      renderSuffix: propTypes.func,

      /**
       * If `true`, the `input` element will be required.
       */
      required: propTypes.bool,

      /**
       * Number of rows to display when multiline option is set to true.
       */
      rows: propTypes.oneOfType([propTypes.string, propTypes.number]),

      /**
       * Maximum number of rows to display when multiline option is set to true.
       */
      rowsMax: propTypes.oneOfType([propTypes.string, propTypes.number]),

      /**
       * Should be `true` when the component hosts a select.
       */
      select: propTypes.bool,

      /**
       * Start `InputAdornment` for this component.
       */
      startAdornment: propTypes.node,

      /**
       * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
       */
      type: propTypes.string,

      /**
       * The value of the `input` element, required for a controlled component.
       */
      value: propTypes.any
    } : void 0;
    var InputBase$1 = withStyles$1(styles$4, {
      name: 'MuiInputBase'
    })(InputBase);

    var styles$5 = function styles(theme) {
      var light = theme.palette.type === 'light';
      var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
      return {
        /* Styles applied to the root element. */
        root: {
          position: 'relative'
        },

        /* Styles applied to the root element if the component is a descendant of `FormControl`. */
        formControl: {
          'label + &': {
            marginTop: 16
          }
        },

        /* Styles applied to the root element if the component is focused. */
        focused: {},

        /* Styles applied to the root element if `disabled={true}`. */
        disabled: {},

        /* Styles applied to the root element if `disableUnderline={false}`. */
        underline: {
          '&:after': {
            borderBottom: "2px solid ".concat(theme.palette.primary[light ? 'dark' : 'light']),
            left: 0,
            bottom: 0,
            // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
            content: '""',
            position: 'absolute',
            right: 0,
            transform: 'scaleX(0)',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
              easing: theme.transitions.easing.easeOut
            }),
            pointerEvents: 'none' // Transparent to the hover style.

          },
          '&$focused:after': {
            transform: 'scaleX(1)'
          },
          '&$error:after': {
            borderBottomColor: theme.palette.error.main,
            transform: 'scaleX(1)' // error is always underlined in red

          },
          '&:before': {
            borderBottom: "1px solid ".concat(bottomLineColor),
            left: 0,
            bottom: 0,
            // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
            content: '"\\00a0"',
            position: 'absolute',
            right: 0,
            transition: theme.transitions.create('border-bottom-color', {
              duration: theme.transitions.duration.shorter
            }),
            pointerEvents: 'none' // Transparent to the hover style.

          },
          '&:hover:not($disabled):before': {
            borderBottom: "2px solid ".concat(theme.palette.text.primary),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              borderBottom: "1px solid ".concat(bottomLineColor)
            }
          },
          '&$disabled:before': {
            borderBottomStyle: 'dotted'
          }
        },

        /* Styles applied to the root element if `error={true}`. */
        error: {},

        /* Styles applied to the root element if `multiline={true}`. */
        multiline: {},

        /* Styles applied to the root element if `fullWidth={true}`. */
        fullWidth: {},

        /* Styles applied to the `input` element. */
        input: {},

        /* Styles applied to the `input` element if `margin="dense"`. */
        inputMarginDense: {},

        /* Styles applied to the `input` element if `multiline={true}`. */
        inputMultiline: {},

        /* Styles applied to the `input` element if `type="search"`. */
        inputTypeSearch: {}
      };
    };
    var Input = React__default.forwardRef(function Input(props, ref) {
      var disableUnderline = props.disableUnderline,
          classes = props.classes,
          _props$fullWidth = props.fullWidth,
          fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
          _props$inputComponent = props.inputComponent,
          inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
          _props$multiline = props.multiline,
          multiline = _props$multiline === void 0 ? false : _props$multiline,
          _props$type = props.type,
          type = _props$type === void 0 ? 'text' : _props$type,
          other = _objectWithoutProperties(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

      return React__default.createElement(InputBase$1, _extends({
        classes: _extends({}, classes, {
          root: clsx(classes.root, !disableUnderline && classes.underline),
          underline: null
        }),
        fullWidth: fullWidth,
        inputComponent: inputComponent,
        multiline: multiline,
        ref: ref,
        type: type
      }, other));
    });
    process.env.NODE_ENV !== "production" ? Input.propTypes = {
      /**
       * This prop helps users to fill forms faster, especially on mobile devices.
       * The name can be confusing, as it's more like an autofill.
       * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
       */
      autoComplete: propTypes.string,

      /**
       * If `true`, the `input` element will be focused during the first mount.
       */
      autoFocus: propTypes.bool,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * The CSS class name of the wrapper element.
       */
      className: propTypes.string,

      /**
       * The default `input` element value. Use when the component is not controlled.
       */
      defaultValue: propTypes.any,

      /**
       * If `true`, the `input` element will be disabled.
       */
      disabled: propTypes.bool,

      /**
       * If `true`, the input will not have an underline.
       */
      disableUnderline: propTypes.bool,

      /**
       * End `InputAdornment` for this component.
       */
      endAdornment: propTypes.node,

      /**
       * If `true`, the input will indicate an error. This is normally obtained via context from
       * FormControl.
       */
      error: propTypes.bool,

      /**
       * If `true`, the input will take up the full width of its container.
       */
      fullWidth: propTypes.bool,

      /**
       * The id of the `input` element.
       */
      id: propTypes.string,

      /**
       * The component used for the native input.
       * Either a string to use a DOM element or a component.
       */
      inputComponent: propTypes.elementType,

      /**
       * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
       */
      inputProps: propTypes.object,

      /**
       * Pass a ref to the `input` element.
       */
      inputRef: refType,

      /**
       * If `dense`, will adjust vertical spacing. This is normally obtained via context from
       * FormControl.
       */
      margin: propTypes.oneOf(['dense', 'none']),

      /**
       * If `true`, a textarea element will be rendered.
       */
      multiline: propTypes.bool,

      /**
       * Name attribute of the `input` element.
       */
      name: propTypes.string,

      /**
       * Callback fired when the value is changed.
       *
       * @param {object} event The event source of the callback.
       * You can pull out the new value by accessing `event.target.value` (string).
       */
      onChange: propTypes.func,

      /**
       * The short hint displayed in the input before the user enters a value.
       */
      placeholder: propTypes.string,

      /**
       * It prevents the user from changing the value of the field
       * (not from interacting with the field).
       */
      readOnly: propTypes.bool,

      /**
       * If `true`, the `input` element will be required.
       */
      required: propTypes.bool,

      /**
       * Number of rows to display when multiline option is set to true.
       */
      rows: propTypes.oneOfType([propTypes.string, propTypes.number]),

      /**
       * Maximum number of rows to display when multiline option is set to true.
       */
      rowsMax: propTypes.oneOfType([propTypes.string, propTypes.number]),

      /**
       * Start `InputAdornment` for this component.
       */
      startAdornment: propTypes.node,

      /**
       * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
       */
      type: propTypes.string,

      /**
       * The value of the `input` element, required for a controlled component.
       */
      value: propTypes.any
    } : void 0;
    Input.muiName = 'Input';
    var Input$1 = withStyles$1(styles$5, {
      name: 'MuiInput'
    })(Input);

    var styles$6 = function styles(theme) {
      var light = theme.palette.type === 'light';
      var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
      var backgroundColor = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)';
      return {
        /* Styles applied to the root element. */
        root: {
          position: 'relative',
          backgroundColor: backgroundColor,
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
          transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          '&:hover': {
            backgroundColor: light ? 'rgba(0, 0, 0, 0.13)' : 'rgba(255, 255, 255, 0.13)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: backgroundColor
            }
          },
          '&$focused': {
            backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)'
          },
          '&$disabled': {
            backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
          }
        },

        /* Styles applied to the root element if `disableUnderline={false}`. */
        underline: {
          '&:after': {
            borderBottom: "2px solid ".concat(theme.palette.primary[light ? 'dark' : 'light']),
            left: 0,
            bottom: 0,
            // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
            content: '""',
            position: 'absolute',
            right: 0,
            transform: 'scaleX(0)',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
              easing: theme.transitions.easing.easeOut
            }),
            pointerEvents: 'none' // Transparent to the hover style.

          },
          '&$focused:after': {
            transform: 'scaleX(1)'
          },
          '&$error:after': {
            borderBottomColor: theme.palette.error.main,
            transform: 'scaleX(1)' // error is always underlined in red

          },
          '&:before': {
            borderBottom: "1px solid ".concat(bottomLineColor),
            left: 0,
            bottom: 0,
            // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
            content: '"\\00a0"',
            position: 'absolute',
            right: 0,
            transition: theme.transitions.create('border-bottom-color', {
              duration: theme.transitions.duration.shorter
            }),
            pointerEvents: 'none' // Transparent to the hover style.

          },
          '&:hover:before': {
            borderBottom: "1px solid ".concat(theme.palette.text.primary)
          },
          '&$disabled:before': {
            borderBottomStyle: 'dotted'
          }
        },

        /* Styles applied to the root element if the component is focused. */
        focused: {},

        /* Styles applied to the root element if `disabled={true}`. */
        disabled: {},

        /* Styles applied to the root element if `startAdornment` is provided. */
        adornedStart: {
          paddingLeft: 12
        },

        /* Styles applied to the root element if `endAdornment` is provided. */
        adornedEnd: {
          paddingRight: 12
        },

        /* Styles applied to the root element if `error={true}`. */
        error: {},

        /* Styles applied to the `input` element if `margin="dense"`. */
        marginDense: {},

        /* Styles applied to the root element if `multiline={true}`. */
        multiline: {
          padding: '27px 12px 10px',
          '&$marginDense': {
            paddingTop: 23,
            paddingBottom: 6
          }
        },

        /* Styles applied to the `input` element. */
        input: {
          padding: '27px 12px 10px'
        },

        /* Styles applied to the `input` element if `margin="dense"`. */
        inputMarginDense: {
          paddingTop: 23,
          paddingBottom: 6
        },

        /* Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
        inputHiddenLabel: {
          paddingTop: 18,
          paddingBottom: 19,
          '&$inputMarginDense': {
            paddingTop: 10,
            paddingBottom: 11
          }
        },

        /* Styles applied to the `input` element if `select={true}`. */
        inputSelect: {
          paddingRight: 24
        },

        /* Styles applied to the `input` element if `multiline={true}`. */
        inputMultiline: {
          padding: 0
        },

        /* Styles applied to the `input` element if `startAdornment` is provided. */
        inputAdornedStart: {
          paddingLeft: 0
        },

        /* Styles applied to the `input` element if `endAdornment` is provided. */
        inputAdornedEnd: {
          paddingRight: 0
        }
      };
    };
    var FilledInput = React__default.forwardRef(function FilledInput(props, ref) {
      var disableUnderline = props.disableUnderline,
          classes = props.classes,
          _props$fullWidth = props.fullWidth,
          fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
          _props$inputComponent = props.inputComponent,
          inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
          _props$multiline = props.multiline,
          multiline = _props$multiline === void 0 ? false : _props$multiline,
          _props$type = props.type,
          type = _props$type === void 0 ? 'text' : _props$type,
          other = _objectWithoutProperties(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

      return React__default.createElement(InputBase$1, _extends({
        classes: _extends({}, classes, {
          root: clsx(classes.root, !disableUnderline && classes.underline),
          underline: null
        }),
        fullWidth: fullWidth,
        inputComponent: inputComponent,
        multiline: multiline,
        ref: ref,
        type: type
      }, other));
    });
    process.env.NODE_ENV !== "production" ? FilledInput.propTypes = {
      /**
       * This prop helps users to fill forms faster, especially on mobile devices.
       * The name can be confusing, as it's more like an autofill.
       * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
       */
      autoComplete: propTypes.string,

      /**
       * If `true`, the `input` element will be focused during the first mount.
       */
      autoFocus: propTypes.bool,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * The CSS class name of the wrapper element.
       */
      className: propTypes.string,

      /**
       * The default `input` element value. Use when the component is not controlled.
       */
      defaultValue: propTypes.any,

      /**
       * If `true`, the `input` element will be disabled.
       */
      disabled: propTypes.bool,

      /**
       * If `true`, the input will not have an underline.
       */
      disableUnderline: propTypes.bool,

      /**
       * End `InputAdornment` for this component.
       */
      endAdornment: propTypes.node,

      /**
       * If `true`, the input will indicate an error. This is normally obtained via context from
       * FormControl.
       */
      error: propTypes.bool,

      /**
       * If `true`, the input will take up the full width of its container.
       */
      fullWidth: propTypes.bool,

      /**
       * The id of the `input` element.
       */
      id: propTypes.string,

      /**
       * The component used for the native input.
       * Either a string to use a DOM element or a component.
       */
      inputComponent: propTypes.elementType,

      /**
       * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
       */
      inputProps: propTypes.object,

      /**
       * Pass a ref to the `input` element.
       */
      inputRef: refType,

      /**
       * If `dense`, will adjust vertical spacing. This is normally obtained via context from
       * FormControl.
       */
      margin: propTypes.oneOf(['dense', 'none']),

      /**
       * If `true`, a textarea element will be rendered.
       */
      multiline: propTypes.bool,

      /**
       * Name attribute of the `input` element.
       */
      name: propTypes.string,

      /**
       * Callback fired when the value is changed.
       *
       * @param {object} event The event source of the callback.
       * You can pull out the new value by accessing `event.target.value` (string).
       */
      onChange: propTypes.func,

      /**
       * The short hint displayed in the input before the user enters a value.
       */
      placeholder: propTypes.string,

      /**
       * It prevents the user from changing the value of the field
       * (not from interacting with the field).
       */
      readOnly: propTypes.bool,

      /**
       * If `true`, the `input` element will be required.
       */
      required: propTypes.bool,

      /**
       * Number of rows to display when multiline option is set to true.
       */
      rows: propTypes.oneOfType([propTypes.string, propTypes.number]),

      /**
       * Maximum number of rows to display when multiline option is set to true.
       */
      rowsMax: propTypes.oneOfType([propTypes.string, propTypes.number]),

      /**
       * Start `InputAdornment` for this component.
       */
      startAdornment: propTypes.node,

      /**
       * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
       */
      type: propTypes.string,

      /**
       * The value of the `input` element, required for a controlled component.
       */
      value: propTypes.any
    } : void 0;
    FilledInput.muiName = 'Input';
    var FilledInput$1 = withStyles$1(styles$6, {
      name: 'MuiFilledInput'
    })(FilledInput);

    function useTheme$1() {
      return useTheme() || defaultTheme;
    }

    var styles$7 = function styles(theme) {
      var align = theme.direction === 'rtl' ? 'right' : 'left';
      return {
        /* Styles applied to the root element. */
        root: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          top: -5,
          left: 0,
          margin: 0,
          padding: 0,
          pointerEvents: 'none',
          borderRadius: theme.shape.borderRadius,
          borderStyle: 'solid',
          borderWidth: 1,
          // Match the Input Label
          transition: theme.transitions.create(["padding-".concat(align), 'border-color', 'border-width'], {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          })
        },

        /* Styles applied to the legend element. */
        legend: {
          textAlign: 'left',
          padding: 0,
          lineHeight: '11px',
          transition: theme.transitions.create('width', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          })
        }
      };
    };
    /**
     * @ignore - internal component.
     */

    var NotchedOutline = React__default.forwardRef(function NotchedOutline(props, ref) {
      var children = props.children,
          classes = props.classes,
          className = props.className,
          labelWidthProp = props.labelWidth,
          notched = props.notched,
          style = props.style,
          other = _objectWithoutProperties(props, ["children", "classes", "className", "labelWidth", "notched", "style"]);

      var theme = useTheme$1();
      var align = theme.direction === 'rtl' ? 'right' : 'left';
      var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0;
      return React__default.createElement("fieldset", _extends({
        "aria-hidden": true,
        style: _extends(_defineProperty({}, "padding".concat(capitalize(align)), 8 + (notched ? 0 : labelWidth / 2)), style),
        className: clsx(classes.root, className),
        ref: ref
      }, other), React__default.createElement("legend", {
        className: classes.legend,
        style: {
          // IE 11: fieldset with legend does not render
          // a border radius. This maintains consistency
          // by always having a legend rendered
          width: notched ? labelWidth : 0.01
        }
      }, React__default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: '&#8203;'
        }
      })));
    });
    process.env.NODE_ENV !== "production" ? NotchedOutline.propTypes = {
      /**
       * The content of the component.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * The width of the label.
       */
      labelWidth: propTypes.number.isRequired,

      /**
       * If `true`, the outline is notched to accommodate the label.
       */
      notched: propTypes.bool.isRequired,

      /**
       * @ignore
       */
      style: propTypes.object
    } : void 0;
    var NotchedOutline$1 = withStyles$1(styles$7, {
      name: 'PrivateNotchedOutline'
    })(NotchedOutline);

    var styles$8 = function styles(theme) {
      var borderColor = theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
      return {
        /* Styles applied to the root element. */
        root: {
          position: 'relative',
          '&:hover $notchedOutline': {
            borderColor: theme.palette.text.primary
          },
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            '&:hover $notchedOutline': {
              borderColor: borderColor
            }
          },
          '&$focused $notchedOutline': {
            borderColor: theme.palette.primary.main,
            borderWidth: 2
          },
          '&$error $notchedOutline': {
            borderColor: theme.palette.error.main
          },
          '&$disabled $notchedOutline': {
            borderColor: theme.palette.action.disabled
          }
        },

        /* Styles applied to the root element if the component is focused. */
        focused: {},

        /* Styles applied to the root element if `disabled={true}`. */
        disabled: {},

        /* Styles applied to the root element if `startAdornment` is provided. */
        adornedStart: {
          paddingLeft: 14
        },

        /* Styles applied to the root element if `endAdornment` is provided. */
        adornedEnd: {
          paddingRight: 14
        },

        /* Styles applied to the root element if `error={true}`. */
        error: {},

        /* Styles applied to the `input` element if `margin="dense"`. */
        marginDense: {},

        /* Styles applied to the root element if `multiline={true}`. */
        multiline: {
          padding: '18.5px 14px',
          '&$marginDense': {
            paddingTop: 10.5,
            paddingBottom: 10.5
          }
        },

        /* Styles applied to the `NotchedOutline` element. */
        notchedOutline: {
          borderColor: borderColor
        },

        /* Styles applied to the `input` element. */
        input: {
          padding: '18.5px 14px'
        },

        /* Styles applied to the `input` element if `margin="dense"`. */
        inputMarginDense: {
          paddingTop: 10.5,
          paddingBottom: 10.5
        },

        /* Styles applied to the `input` element if `select={true}`. */
        inputSelect: {
          paddingRight: 24
        },

        /* Styles applied to the `input` element if `multiline={true}`. */
        inputMultiline: {
          padding: 0
        },

        /* Styles applied to the `input` element if `startAdornment` is provided. */
        inputAdornedStart: {
          paddingLeft: 0
        },

        /* Styles applied to the `input` element if `endAdornment` is provided. */
        inputAdornedEnd: {
          paddingRight: 0
        }
      };
    };
    var OutlinedInput = React__default.forwardRef(function OutlinedInput(props, ref) {
      var classes = props.classes,
          _props$fullWidth = props.fullWidth,
          fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
          _props$inputComponent = props.inputComponent,
          inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
          _props$labelWidth = props.labelWidth,
          labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
          _props$multiline = props.multiline,
          multiline = _props$multiline === void 0 ? false : _props$multiline,
          notched = props.notched,
          _props$type = props.type,
          type = _props$type === void 0 ? 'text' : _props$type,
          other = _objectWithoutProperties(props, ["classes", "fullWidth", "inputComponent", "labelWidth", "multiline", "notched", "type"]);

      return React__default.createElement(InputBase$1, _extends({
        renderSuffix: function renderSuffix(state) {
          return React__default.createElement(NotchedOutline$1, {
            className: classes.notchedOutline,
            labelWidth: labelWidth,
            notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
          });
        },
        classes: _extends({}, classes, {
          root: clsx(classes.root, classes.underline),
          notchedOutline: null
        }),
        fullWidth: fullWidth,
        inputComponent: inputComponent,
        multiline: multiline,
        ref: ref,
        type: type
      }, other));
    });
    process.env.NODE_ENV !== "production" ? OutlinedInput.propTypes = {
      /**
       * This prop helps users to fill forms faster, especially on mobile devices.
       * The name can be confusing, as it's more like an autofill.
       * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
       */
      autoComplete: propTypes.string,

      /**
       * If `true`, the `input` element will be focused during the first mount.
       */
      autoFocus: propTypes.bool,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * The CSS class name of the wrapper element.
       */
      className: propTypes.string,

      /**
       * The default `input` element value. Use when the component is not controlled.
       */
      defaultValue: propTypes.any,

      /**
       * If `true`, the `input` element will be disabled.
       */
      disabled: propTypes.bool,

      /**
       * End `InputAdornment` for this component.
       */
      endAdornment: propTypes.node,

      /**
       * If `true`, the input will indicate an error. This is normally obtained via context from
       * FormControl.
       */
      error: propTypes.bool,

      /**
       * If `true`, the input will take up the full width of its container.
       */
      fullWidth: propTypes.bool,

      /**
       * The id of the `input` element.
       */
      id: propTypes.string,

      /**
       * The component used for the native input.
       * Either a string to use a DOM element or a component.
       */
      inputComponent: propTypes.elementType,

      /**
       * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
       */
      inputProps: propTypes.object,

      /**
       * Pass a ref to the `input` element.
       */
      inputRef: refType,

      /**
       * The width of the label.
       */
      labelWidth: propTypes.number,

      /**
       * If `dense`, will adjust vertical spacing. This is normally obtained via context from
       * FormControl.
       */
      margin: propTypes.oneOf(['dense', 'none']),

      /**
       * If `true`, a textarea element will be rendered.
       */
      multiline: propTypes.bool,

      /**
       * Name attribute of the `input` element.
       */
      name: propTypes.string,

      /**
       * If `true`, the outline is notched to accommodate the label.
       */
      notched: propTypes.bool,

      /**
       * Callback fired when the value is changed.
       *
       * @param {object} event The event source of the callback.
       * You can pull out the new value by accessing `event.target.value` (string).
       */
      onChange: propTypes.func,

      /**
       * The short hint displayed in the input before the user enters a value.
       */
      placeholder: propTypes.string,

      /**
       * It prevents the user from changing the value of the field
       * (not from interacting with the field).
       */
      readOnly: propTypes.bool,

      /**
       * If `true`, the `input` element will be required.
       */
      required: propTypes.bool,

      /**
       * Number of rows to display when multiline option is set to true.
       */
      rows: propTypes.oneOfType([propTypes.string, propTypes.number]),

      /**
       * Maximum number of rows to display when multiline option is set to true.
       */
      rowsMax: propTypes.oneOfType([propTypes.string, propTypes.number]),

      /**
       * Start `InputAdornment` for this component.
       */
      startAdornment: propTypes.node,

      /**
       * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
       */
      type: propTypes.string,

      /**
       * The value of the `input` element, required for a controlled component.
       */
      value: propTypes.any
    } : void 0;
    OutlinedInput.muiName = 'Input';
    var OutlinedInput$1 = withStyles$1(styles$8, {
      name: 'MuiOutlinedInput'
    })(OutlinedInput);

    function useFormControl$1() {
      return React__default.useContext(FormControlContext);
    }

    var styles$9 = function styles(theme) {
      return {
        /* Styles applied to the root element. */
        root: _extends({
          color: theme.palette.text.secondary
        }, theme.typography.body1, {
          lineHeight: 1,
          padding: 0,
          '&$focused': {
            color: theme.palette.primary[theme.palette.type === 'light' ? 'dark' : 'light']
          },
          '&$disabled': {
            color: theme.palette.text.disabled
          },
          '&$error': {
            color: theme.palette.error.main
          }
        }),

        /* Pseudo-class applied to the root element if `focused={true}`. */
        focused: {},

        /* Pseudo-class applied to the root element if `disabled={true}`. */
        disabled: {},

        /* Pseudo-class applied to the root element if `error={true}`. */
        error: {},

        /* Pseudo-class applied to the root element if `filled={true}`. */
        filled: {},

        /* Pseudo-class applied to the root element if `required={true}`. */
        required: {},

        /* Styles applied to the asterisk element. */
        asterisk: {
          '&$error': {
            color: theme.palette.error.main
          }
        }
      };
    };
    var FormLabel = React__default.forwardRef(function FormLabel(props, ref) {
      var children = props.children,
          classes = props.classes,
          classNameProp = props.className,
          _props$component = props.component,
          Component = _props$component === void 0 ? 'label' : _props$component,
          disabled = props.disabled,
          error = props.error,
          filled = props.filled,
          focused = props.focused,
          required = props.required,
          other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "required"]);

      var muiFormControl = useFormControl$1();
      var fcs = formControlState({
        props: props,
        muiFormControl: muiFormControl,
        states: ['required', 'focused', 'disabled', 'error', 'filled']
      });
      return React__default.createElement(Component, _extends({
        className: clsx(classes.root, classNameProp, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required),
        ref: ref
      }, other), children, fcs.required && React__default.createElement("span", {
        className: clsx(classes.asterisk, fcs.error && classes.error)
      }, "\u2009", '*'));
    });
    process.env.NODE_ENV !== "production" ? FormLabel.propTypes = {
      /**
       * The content of the component.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       */
      component: propTypes.elementType,

      /**
       * If `true`, the label should be displayed in a disabled state.
       */
      disabled: propTypes.bool,

      /**
       * If `true`, the label should be displayed in an error state.
       */
      error: propTypes.bool,

      /**
       * If `true`, the label should use filled classes key.
       */
      filled: propTypes.bool,

      /**
       * If `true`, the input of this label is focused (used by `FormGroup` components).
       */
      focused: propTypes.bool,

      /**
       * If `true`, the label will indicate that the input is required.
       */
      required: propTypes.bool
    } : void 0;
    var FormLabel$1 = withStyles$1(styles$9, {
      name: 'MuiFormLabel'
    })(FormLabel);

    var styles$a = function styles(theme) {
      return {
        /* Styles applied to the root element. */
        root: {
          display: 'block',
          transformOrigin: 'top left'
        },

        /* Pseudo-class applied to the root element if `focused={true}`. */
        focused: {},

        /* Pseudo-class applied to the root element if `disabled={true}`. */
        disabled: {},

        /* Pseudo-class applied to the root element if `error={true}`. */
        error: {},

        /* Pseudo-class applied to the root element if `required={true}`. */
        required: {},

        /* Pseudo-class applied to the asterisk element. */
        asterisk: {},

        /* Styles applied to the root element if the component is a descendant of `FormControl`. */
        formControl: {
          position: 'absolute',
          left: 0,
          top: 0,
          // slight alteration to spec spacing to match visual spec result
          transform: 'translate(0, 24px) scale(1)'
        },

        /* Styles applied to the root element if `margin="dense"`. */
        marginDense: {
          // Compensation for the `Input.inputDense` style.
          transform: 'translate(0, 21px) scale(1)'
        },

        /* Styles applied to the `input` element if `shrink={true}`. */
        shrink: {
          transform: 'translate(0, 1.5px) scale(0.75)',
          transformOrigin: 'top left'
        },

        /* Styles applied to the `input` element if `disableAnimation={false}`. */
        animated: {
          transition: theme.transitions.create(['color', 'transform'], {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          })
        },

        /* Styles applied to the root element if `variant="filled"`. */
        filled: {
          // Chrome's autofill feature gives the input field a yellow background.
          // Since the input field is behind the label in the HTML tree,
          // the input field is drawn last and hides the label with an opaque background color.
          // zIndex: 1 will raise the label above opaque background-colors of input.
          zIndex: 1,
          pointerEvents: 'none',
          transform: 'translate(12px, 20px) scale(1)',
          '&$marginDense': {
            transform: 'translate(12px, 17px) scale(1)'
          },
          '&$shrink': {
            transform: 'translate(12px, 10px) scale(0.75)',
            '&$marginDense': {
              transform: 'translate(12px, 7px) scale(0.75)'
            }
          }
        },

        /* Styles applied to the root element if `variant="outlined"`. */
        outlined: {
          // see comment above on filled.zIndex
          zIndex: 1,
          pointerEvents: 'none',
          transform: 'translate(14px, 20px) scale(1)',
          '&$marginDense': {
            transform: 'translate(14px, 12px) scale(1)'
          },
          '&$shrink': {
            transform: 'translate(14px, -6px) scale(0.75)'
          }
        }
      };
    };
    var InputLabel = React__default.forwardRef(function InputLabel(props, ref) {
      var classes = props.classes,
          className = props.className,
          _props$disableAnimati = props.disableAnimation,
          disableAnimation = _props$disableAnimati === void 0 ? false : _props$disableAnimati,
          margin = props.margin,
          shrinkProp = props.shrink,
          variant = props.variant,
          other = _objectWithoutProperties(props, ["classes", "className", "disableAnimation", "margin", "shrink", "variant"]);

      var muiFormControl = useFormControl$1();
      var shrink = shrinkProp;

      if (typeof shrink === 'undefined' && muiFormControl) {
        shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
      }

      var fcs = formControlState({
        props: props,
        muiFormControl: muiFormControl,
        states: ['margin', 'variant']
      });
      return React__default.createElement(FormLabel$1, _extends({
        "data-shrink": shrink,
        className: clsx(classes.root, className, muiFormControl && classes.formControl, !disableAnimation && classes.animated, shrink && classes.shrink, {
          dense: classes.marginDense
        }[fcs.margin], {
          filled: classes.filled,
          outlined: classes.outlined
        }[fcs.variant]),
        classes: {
          focused: classes.focused,
          disabled: classes.disabled,
          error: classes.error,
          required: classes.required,
          asterisk: classes.asterisk
        },
        ref: ref
      }, other));
    });
    process.env.NODE_ENV !== "production" ? InputLabel.propTypes = {
      /**
       * The contents of the `InputLabel`.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * If `true`, the transition animation is disabled.
       */
      disableAnimation: propTypes.bool,

      /**
       * If `true`, apply disabled class.
       */
      disabled: propTypes.bool,

      /**
       * If `true`, the label will be displayed in an error state.
       */
      error: propTypes.bool,

      /**
       * If `true`, the input of this label is focused.
       */
      focused: propTypes.bool,

      /**
       * If `dense`, will adjust vertical spacing. This is normally obtained via context from
       * FormControl.
       */
      margin: propTypes.oneOf(['dense']),

      /**
       * if `true`, the label will indicate that the input is required.
       */
      required: propTypes.bool,

      /**
       * If `true`, the label is shrunk.
       */
      shrink: propTypes.bool,

      /**
       * The variant to use.
       */
      variant: propTypes.oneOf(['standard', 'outlined', 'filled'])
    } : void 0;
    var InputLabel$1 = withStyles$1(styles$a, {
      name: 'MuiInputLabel'
    })(InputLabel);

    var styles$b = {
      /* Styles applied to the root element. */
      root: {
        display: 'inline-flex',
        flexDirection: 'column',
        position: 'relative',
        // Reset fieldset default style.
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: 'top' // Fix alignment issue on Safari.

      },

      /* Styles applied to the root element if `margin="normal"`. */
      marginNormal: {
        marginTop: 16,
        marginBottom: 8
      },

      /* Styles applied to the root element if `margin="dense"`. */
      marginDense: {
        marginTop: 8,
        marginBottom: 4
      },

      /* Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {
        width: '100%'
      }
    };
    /**
     * Provides context such as filled/focused/error/required for form inputs.
     * Relying on the context provides high flexibility and ensures that the state always stays
     * consistent across the children of the `FormControl`.
     * This context is used by the following components:
     *
     *  - FormLabel
     *  - FormHelperText
     *  - Input
     *  - InputLabel
     *
     * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
     *
     * ```jsx
     * <FormControl>
     *   <InputLabel htmlFor="my-input">Email address</InputLabel>
     *   <Input id="my-input" aria-describedby="my-helper-text" />
     *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
     * </FormControl>
     * ```
     *
     * ⚠️Only one input can be used within a FormControl.
     */

    var FormControl = React__default.forwardRef(function FormControl(props, ref) {
      var children = props.children,
          classes = props.classes,
          className = props.className,
          _props$component = props.component,
          Component = _props$component === void 0 ? 'div' : _props$component,
          _props$disabled = props.disabled,
          disabled = _props$disabled === void 0 ? false : _props$disabled,
          _props$error = props.error,
          error = _props$error === void 0 ? false : _props$error,
          _props$fullWidth = props.fullWidth,
          fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
          _props$hiddenLabel = props.hiddenLabel,
          hiddenLabel = _props$hiddenLabel === void 0 ? false : _props$hiddenLabel,
          _props$margin = props.margin,
          margin = _props$margin === void 0 ? 'none' : _props$margin,
          _props$required = props.required,
          required = _props$required === void 0 ? false : _props$required,
          _props$variant = props.variant,
          variant = _props$variant === void 0 ? 'standard' : _props$variant,
          other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "disabled", "error", "fullWidth", "hiddenLabel", "margin", "required", "variant"]);

      var _React$useState = React__default.useState(function () {
        // We need to iterate through the children and find the Input in order
        // to fully support server-side rendering.
        var initialAdornedStart = false;

        if (children) {
          React__default.Children.forEach(children, function (child) {
            if (!isMuiElement(child, ['Input', 'Select'])) {
              return;
            }

            var input = isMuiElement(child, ['Select']) ? child.props.input : child;

            if (input && isAdornedStart(input.props)) {
              initialAdornedStart = true;
            }
          });
        }

        return initialAdornedStart;
      }),
          adornedStart = _React$useState[0];

      var _React$useState2 = React__default.useState(function () {
        // We need to iterate through the children and find the Input in order
        // to fully support server-side rendering.
        var initialFilled = false;

        if (children) {
          React__default.Children.forEach(children, function (child) {
            if (!isMuiElement(child, ['Input', 'Select'])) {
              return;
            }

            if (isFilled(child.props, true)) {
              initialFilled = true;
            }
          });
        }

        return initialFilled;
      }),
          filled = _React$useState2[0],
          setFilled = _React$useState2[1];

      var _React$useState3 = React__default.useState(false),
          focused = _React$useState3[0],
          setFocused = _React$useState3[1];

      if (disabled && focused) {
        setFocused(false);
      }

      var registerEffect;

      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var registeredInput = React__default.useRef(false);

        registerEffect = function registerEffect() {
          if (registeredInput.current) {
            console.error(['Material-UI: there are multiple InputBase components inside a FromControl.', 'This is not supported. It might cause infinite rendering loops.', 'Only use one InputBase.'].join('\n'));
          }

          registeredInput.current = true;
          return function () {
            registeredInput.current = false;
          };
        };
      }

      var onFilled = React__default.useCallback(function () {
        setFilled(true);
      }, []);
      var onEmpty = React__default.useCallback(function () {
        setFilled(false);
      }, []);
      var childContext = {
        adornedStart: adornedStart,
        disabled: disabled,
        error: error,
        filled: filled,
        focused: focused,
        hiddenLabel: hiddenLabel,
        margin: margin,
        onBlur: function onBlur() {
          setFocused(false);
        },
        onEmpty: onEmpty,
        onFilled: onFilled,
        onFocus: function onFocus() {
          setFocused(true);
        },
        registerEffect: registerEffect,
        required: required,
        variant: variant
      };
      return React__default.createElement(FormControlContext.Provider, {
        value: childContext
      }, React__default.createElement(Component, _extends({
        className: clsx(classes.root, className, margin !== 'none' && classes["margin".concat(capitalize(margin))], fullWidth && classes.fullWidth),
        ref: ref
      }, other), children));
    });
    process.env.NODE_ENV !== "production" ? FormControl.propTypes = {
      /**
       * The contents of the form control.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       */
      component: propTypes.elementType,

      /**
       * If `true`, the label, input and helper text should be displayed in a disabled state.
       */
      disabled: propTypes.bool,

      /**
       * If `true`, the label should be displayed in an error state.
       */
      error: propTypes.bool,

      /**
       * If `true`, the component will take up the full width of its container.
       */
      fullWidth: propTypes.bool,

      /**
       * If `true`, the label will be hidden.
       * This is used to increase density for a `FilledInput`.
       * Be sure to add `aria-label` to the `input` element.
       */
      hiddenLabel: propTypes.bool,

      /**
       * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
       */
      margin: propTypes.oneOf(['none', 'dense', 'normal']),

      /**
       * If `true`, the label will indicate that the input is required.
       */
      required: propTypes.bool,

      /**
       * The variant to use.
       */
      variant: propTypes.oneOf(['standard', 'outlined', 'filled'])
    } : void 0;
    var FormControl$1 = withStyles$1(styles$b, {
      name: 'MuiFormControl'
    })(FormControl);

    var styles$c = function styles(theme) {
      return {
        /* Styles applied to the root element. */
        root: _extends({
          color: theme.palette.text.secondary
        }, theme.typography.caption, {
          textAlign: 'left',
          marginTop: 8,
          lineHeight: '1em',
          minHeight: '1em',
          margin: 0,
          '&$disabled': {
            color: theme.palette.text.disabled
          },
          '&$error': {
            color: theme.palette.error.main
          }
        }),

        /* Pseudo-class applied to the root element if `error={true}`. */
        error: {},

        /* Pseudo-class applied to the root element if `disabled={true}`. */
        disabled: {},

        /* Styles applied to the root element if `margin="dense"`. */
        marginDense: {
          marginTop: 4
        },

        /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
        contained: {
          margin: '8px 14px 0'
        },

        /* Pseudo-class applied to the root element if `focused={true}`. */
        focused: {},

        /* Pseudo-class applied to the root element if `filled={true}`. */
        filled: {},

        /* Pseudo-class applied to the root element if `required={true}`. */
        required: {}
      };
    };
    var FormHelperText = React__default.forwardRef(function FormHelperText(props, ref) {
      var classes = props.classes,
          classNameProp = props.className,
          _props$component = props.component,
          Component = _props$component === void 0 ? 'p' : _props$component,
          disabled = props.disabled,
          error = props.error,
          filled = props.filled,
          focused = props.focused,
          margin = props.margin,
          required = props.required,
          variant = props.variant,
          other = _objectWithoutProperties(props, ["classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);

      var muiFormControl = useFormControl$1();
      var fcs = formControlState({
        props: props,
        muiFormControl: muiFormControl,
        states: ['variant', 'margin', 'disabled', 'error', 'filled', 'focused', 'required']
      });
      return React__default.createElement(Component, _extends({
        className: clsx(classes.root, (fcs.variant === 'filled' || fcs.variant === 'outlined') && classes.contained, classNameProp, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required, {
          dense: classes.marginDense
        }[fcs.margin]),
        ref: ref
      }, other));
    });
    process.env.NODE_ENV !== "production" ? FormHelperText.propTypes = {
      /**
       * The content of the component.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       */
      component: propTypes.elementType,

      /**
       * If `true`, the helper text should be displayed in a disabled state.
       */
      disabled: propTypes.bool,

      /**
       * If `true`, helper text should be displayed in an error state.
       */
      error: propTypes.bool,

      /**
       * If `true`, the helper text should use filled classes key.
       */
      filled: propTypes.bool,

      /**
       * If `true`, the helper text should use focused classes key.
       */
      focused: propTypes.bool,

      /**
       * If `dense`, will adjust vertical spacing. This is normally obtained via context from
       * FormControl.
       */
      margin: propTypes.oneOf(['dense']),

      /**
       * If `true`, the helper text should use required classes key.
       */
      required: propTypes.bool,

      /**
       * The variant to use.
       */
      variant: propTypes.oneOf(['standard', 'outlined', 'filled'])
    } : void 0;
    var FormHelperText$1 = withStyles$1(styles$c, {
      name: 'MuiFormHelperText'
    })(FormHelperText);

    function ownerDocument(node) {
      return node && node.ownerDocument || document;
    }

    function ownerWindow(node) {
      var doc = ownerDocument(node);
      return doc.defaultView || window;
    }

    function getContainer(container) {
      container = typeof container === 'function' ? container() : container; // #StrictMode ready

      return ReactDOM.findDOMNode(container);
    }

    var useEnhancedEffect$5 = typeof window !== 'undefined' ? React__default.useLayoutEffect : React__default.useEffect;
    /**
     * Portals provide a first-class way to render children into a DOM node
     * that exists outside the DOM hierarchy of the parent component.
     */

    var Portal = React__default.forwardRef(function Portal(props, ref) {
      var children = props.children,
          container = props.container,
          _props$disablePortal = props.disablePortal,
          disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
          onRendered = props.onRendered;

      var _React$useState = React__default.useState(null),
          mountNode = _React$useState[0],
          setMountNode = _React$useState[1];

      var handleRef = useForkRef(children.ref, ref);
      useEnhancedEffect$5(function () {
        if (!disablePortal) {
          setMountNode(getContainer(container) || document.body);
        }
      }, [container, disablePortal]);
      useEnhancedEffect$5(function () {
        if (mountNode && !disablePortal) {
          setRef(ref, mountNode);
          return function () {
            setRef(ref, null);
          };
        }

        return undefined;
      }, [ref, mountNode, disablePortal]);
      useEnhancedEffect$5(function () {
        if (onRendered && (mountNode || disablePortal)) {
          onRendered();
        }
      }, [onRendered, mountNode, disablePortal]);

      if (disablePortal) {
        React__default.Children.only(children);
        return React__default.cloneElement(children, {
          ref: handleRef
        });
      }

      return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
    });
    process.env.NODE_ENV !== "production" ? Portal.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------

      /**
       * The children to render into the `container`.
       */
      children: propTypes.node,

      /**
       * A node, component instance, or function that returns either.
       * The `container` will have the portal children appended to it.
       * By default, it uses the body of the top-level document object,
       * so it's simply `document.body` most of the time.
       */
      container: propTypes.oneOfType([propTypes.func, propTypes.instanceOf(React__default.Component), propTypes.instanceOf(typeof Element === 'undefined' ? Object : Element)]),

      /**
       * Disable the portal behavior.
       * The children stay within it's parent DOM hierarchy.
       */
      disablePortal: propTypes.bool,

      /**
       * Callback fired once the children has been mounted into the `container`.
       *
       * This prop will be deprecated and removed in v5, the ref can be used instead.
       */
      onRendered: propTypes.func
    } : void 0;

    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line
      Portal['propTypes' + ''] = exactProp(Portal.propTypes);
    }

    // A change of the browser zoom change the scrollbar size.
    // Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
    function getScrollbarSize() {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.width = '99px';
      scrollDiv.style.height = '99px';
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarSize;
    }

    function isOverflowing(container) {
      var doc = ownerDocument(container);

      if (doc.body === container) {
        var win = ownerWindow(doc);
        return win.innerWidth > doc.documentElement.clientWidth;
      }

      return container.scrollHeight > container.clientHeight;
    }

    function ariaHidden(node, show) {
      if (show) {
        node.setAttribute('aria-hidden', 'true');
      } else {
        node.removeAttribute('aria-hidden');
      }
    }

    function getPaddingRight(node) {
      return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0;
    }

    var BLACKLIST = ['template', 'script', 'style'];

    function isHideable(node) {
      return node.nodeType === 1 && BLACKLIST.indexOf(node.tagName.toLowerCase()) === -1;
    }

    function siblings(container, mount, currentNode, nodesToExclude, callback) {
      var blacklist = [mount, currentNode].concat(_toConsumableArray(nodesToExclude));
      [].forEach.call(container.children, function (node) {
        if (blacklist.indexOf(node) === -1 && isHideable(node)) {
          callback(node);
        }
      });
    }

    function ariaHiddenSiblings(container, mountNode, currentNode) {
      var nodesToExclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var show = arguments.length > 4 ? arguments[4] : undefined;
      siblings(container, mountNode, currentNode, nodesToExclude, function (node) {
        return ariaHidden(node, show);
      });
    }

    function findIndexOf(containerInfo, callback) {
      var idx = -1;
      containerInfo.some(function (item, index) {
        if (callback(item)) {
          idx = index;
          return true;
        }

        return false;
      });
      return idx;
    }

    function handleContainer(containerInfo, props) {
      var restoreStyle = {};
      var style = {};
      var restorePaddings = [];
      var fixedNodes;

      if (!props.disableScrollLock) {
        restoreStyle.overflow = containerInfo.container.style.overflow;
        restoreStyle['padding-right'] = containerInfo.container.style.paddingRight;
        style.overflow = 'hidden';

        if (isOverflowing(containerInfo.container)) {
          var scrollbarSize = getScrollbarSize(); // Use computed style, here to get the real padding to add our scrollbar width.

          style['padding-right'] = "".concat(getPaddingRight(containerInfo.container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

          fixedNodes = ownerDocument(containerInfo.container).querySelectorAll('.mui-fixed');
          [].forEach.call(fixedNodes, function (node) {
            restorePaddings.push(node.style.paddingRight);
            node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
          });
        }
      }

      Object.keys(style).forEach(function (key) {
        containerInfo.container.style[key] = style[key];
      });

      var restore = function restore() {
        if (fixedNodes) {
          [].forEach.call(fixedNodes, function (node, i) {
            if (restorePaddings[i]) {
              node.style.paddingRight = restorePaddings[i];
            } else {
              node.style.removeProperty('padding-right');
            }
          });
        }

        Object.keys(restoreStyle).forEach(function (key) {
          if (restoreStyle[key]) {
            containerInfo.container.style.setProperty(key, restoreStyle[key]);
          } else {
            containerInfo.container.style.removeProperty(key);
          }
        });
      };

      return restore;
    }

    function getHiddenSiblings(container) {
      var hiddenSiblings = [];
      [].forEach.call(container.children, function (node) {
        if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
          hiddenSiblings.push(node);
        }
      });
      return hiddenSiblings;
    }
    /**
     * @ignore - do not document.
     *
     * Proper state management for containers and the modals in those containers.
     * Simplified, but inspired by react-overlay's ModalManager class.
     * Used by the Modal to ensure proper styling of containers.
     */


    var ModalManager =
    /*#__PURE__*/
    function () {
      function ModalManager() {
        _classCallCheck(this, ModalManager);

        // this.modals[modalIndex] = modal
        this.modals = []; // this.containers[containerIndex] = {
        //   modals: [],
        //   container,
        //   restore: null,
        // }

        this.containers = [];
      }

      _createClass(ModalManager, [{
        key: "add",
        value: function add(modal, container) {
          var modalIndex = this.modals.indexOf(modal);

          if (modalIndex !== -1) {
            return modalIndex;
          }

          modalIndex = this.modals.length;
          this.modals.push(modal); // If the modal we are adding is already in the DOM.

          if (modal.modalRef) {
            ariaHidden(modal.modalRef, false);
          }

          var hiddenSiblingNodes = getHiddenSiblings(container);
          ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
          var containerIndex = findIndexOf(this.containers, function (item) {
            return item.container === container;
          });

          if (containerIndex !== -1) {
            this.containers[containerIndex].modals.push(modal);
            return modalIndex;
          }

          this.containers.push({
            modals: [modal],
            container: container,
            restore: null,
            hiddenSiblingNodes: hiddenSiblingNodes
          });
          return modalIndex;
        }
      }, {
        key: "mount",
        value: function mount(modal, props) {
          var containerIndex = findIndexOf(this.containers, function (item) {
            return item.modals.indexOf(modal) !== -1;
          });
          var containerInfo = this.containers[containerIndex];

          if (!containerInfo.restore) {
            containerInfo.restore = handleContainer(containerInfo, props);
          }
        }
      }, {
        key: "remove",
        value: function remove(modal) {
          var modalIndex = this.modals.indexOf(modal);

          if (modalIndex === -1) {
            return modalIndex;
          }

          var containerIndex = findIndexOf(this.containers, function (item) {
            return item.modals.indexOf(modal) !== -1;
          });
          var containerInfo = this.containers[containerIndex];
          containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
          this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

          if (containerInfo.modals.length === 0) {
            // The modal might be closed before it had the chance to be mounted in the DOM.
            if (containerInfo.restore) {
              containerInfo.restore();
            }

            if (modal.modalRef) {
              // In case the modal wasn't in the DOM yet.
              ariaHidden(modal.modalRef, true);
            }

            ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
            this.containers.splice(containerIndex, 1);
          } else {
            // Otherwise make sure the next top modal is visible to a screen reader.
            var nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
            // aria-hidden because the dom element doesn't exist either
            // when modal was unmounted before modalRef gets null

            if (nextTop.modalRef) {
              ariaHidden(nextTop.modalRef, false);
            }
          }

          return modalIndex;
        }
      }, {
        key: "isTopModal",
        value: function isTopModal(modal) {
          return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
        }
      }]);

      return ModalManager;
    }();

    /* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */
    /**
     * @ignore - internal component.
     */

    function TrapFocus(props) {
      var children = props.children,
          _props$disableAutoFoc = props.disableAutoFocus,
          disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
          _props$disableEnforce = props.disableEnforceFocus,
          disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
          _props$disableRestore = props.disableRestoreFocus,
          disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
          getDoc = props.getDoc,
          isEnabled = props.isEnabled,
          open = props.open;
      var ignoreNextEnforceFocus = React__default.useRef();
      var sentinelStart = React__default.useRef(null);
      var sentinelEnd = React__default.useRef(null);
      var nodeToRestore = React__default.useRef();
      var rootRef = React__default.useRef(null); // can be removed once we drop support for non ref forwarding class components

      var handleOwnRef = React__default.useCallback(function (instance) {
        // #StrictMode ready
        rootRef.current = ReactDOM.findDOMNode(instance);
      }, []);
      var handleRef = useForkRef(children.ref, handleOwnRef); // ⚠️ You may rely on React.useMemo as a performance optimization, not as a semantic guarantee.
      // https://reactjs.org/docs/hooks-reference.html#usememo

      React__default.useMemo(function () {
        if (!open || typeof window === 'undefined') {
          return;
        }

        nodeToRestore.current = getDoc().activeElement;
      }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

      React__default.useEffect(function () {
        if (!open) {
          return;
        }

        var doc = ownerDocument(rootRef.current); // We might render an empty child.

        if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
          if (!rootRef.current.hasAttribute('tabIndex')) {
            if (process.env.NODE_ENV !== 'production') {
              console.error(['Material-UI: the modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
            }

            rootRef.current.setAttribute('tabIndex', -1);
          }

          rootRef.current.focus();
        }

        var contain = function contain() {
          if (disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
            ignoreNextEnforceFocus.current = false;
            return;
          }

          if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
            rootRef.current.focus();
          }
        };

        var loopFocus = function loopFocus(event) {
          // 9 = Tab
          if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
            return;
          } // Make sure the next tab starts from the right place.


          if (doc.activeElement === rootRef.current) {
            // We need to ignore the next contain as
            // it will try to move the focus back to the rootRef element.
            ignoreNextEnforceFocus.current = true;

            if (event.shiftKey) {
              sentinelEnd.current.focus();
            } else {
              sentinelStart.current.focus();
            }
          }
        };

        doc.addEventListener('focus', contain, true);
        doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
        // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
        //
        // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
        // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

        var interval = setInterval(function () {
          contain();
        }, 50);
        return function () {
          clearInterval(interval);
          doc.removeEventListener('focus', contain, true);
          doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

          if (!disableRestoreFocus) {
            // In IE 11 it is possible for document.activeElement to be null resulting
            // in nodeToRestore.current being null.
            // Not all elements in IE 11 have a focus method.
            // Once IE 11 support is dropped the focus() call can be unconditional.
            if (nodeToRestore.current && nodeToRestore.current.focus) {
              nodeToRestore.current.focus();
            }

            nodeToRestore.current = null;
          }
        };
      }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
      return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
        tabIndex: 0,
        ref: sentinelStart,
        "data-test": "sentinelStart"
      }), React__default.cloneElement(children, {
        ref: handleRef
      }), React__default.createElement("div", {
        tabIndex: 0,
        ref: sentinelEnd,
        "data-test": "sentinelEnd"
      }));
    }

    process.env.NODE_ENV !== "production" ? TrapFocus.propTypes = {
      /**
       * A single child content element.
       */
      children: propTypes.element.isRequired,

      /**
       * If `true`, the modal will not automatically shift focus to itself when it opens, and
       * replace it to the last focused element when it closes.
       * This also works correctly with any modal children that have the `disableAutoFocus` prop.
       *
       * Generally this should never be set to `true` as it makes the modal less
       * accessible to assistive technologies, like screen readers.
       */
      disableAutoFocus: propTypes.bool,

      /**
       * If `true`, the modal will not prevent focus from leaving the modal while open.
       *
       * Generally this should never be set to `true` as it makes the modal less
       * accessible to assistive technologies, like screen readers.
       */
      disableEnforceFocus: propTypes.bool,

      /**
       * If `true`, the modal will not restore focus to previously focused element once
       * modal is hidden.
       */
      disableRestoreFocus: propTypes.bool,

      /**
       * Return the document to consider.
       * We use it to implement the restore focus between different browser documents.
       */
      getDoc: propTypes.func.isRequired,

      /**
       * Do we still want to enforce the focus?
       * This prop helps nesting TrapFocus elements.
       */
      isEnabled: propTypes.func.isRequired,

      /**
       * If `true`, the modal is open.
       */
      open: propTypes.bool.isRequired
    } : void 0;

    var styles$d = {
      /* Styles applied to the root element. */
      root: {
        zIndex: -1,
        position: 'fixed',
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // Remove grey highlight
        WebkitTapHighlightColor: 'transparent',
        // Disable scroll capabilities.
        touchAction: 'none'
      },

      /* Styles applied to the root element if `invisible={true}`. */
      invisible: {
        backgroundColor: 'transparent'
      }
    };
    /**
     * @ignore - internal component.
     */

    var SimpleBackdrop = React__default.forwardRef(function SimpleBackdrop(props, ref) {
      var _props$invisible = props.invisible,
          invisible = _props$invisible === void 0 ? false : _props$invisible,
          open = props.open,
          other = _objectWithoutProperties(props, ["invisible", "open"]);

      return open ? React__default.createElement("div", _extends({
        "aria-hidden": true,
        ref: ref
      }, other, {
        style: _extends({}, styles$d.root, {}, invisible ? styles$d.invisible : {}, {}, other.style)
      })) : null;
    });
    process.env.NODE_ENV !== "production" ? SimpleBackdrop.propTypes = {
      /**
       * If `true`, the backdrop is invisible.
       * It can be used when rendering a popover or a custom select component.
       */
      invisible: propTypes.bool,

      /**
       * If `true`, the backdrop is open.
       */
      open: propTypes.bool.isRequired
    } : void 0;

    function getContainer$1(container) {
      container = typeof container === 'function' ? container() : container;
      return ReactDOM.findDOMNode(container);
    }

    function getHasTransition(props) {
      return props.children ? props.children.props.hasOwnProperty('in') : false;
    } // A modal manager used to track and manage the state of open Modals.
    // Modals don't open on the server so this won't conflict with concurrent requests.


    var defaultManager = new ModalManager();
    var styles$e = function styles(theme) {
      return {
        /* Styles applied to the root element. */
        root: {
          position: 'fixed',
          zIndex: theme.zIndex.modal,
          right: 0,
          bottom: 0,
          top: 0,
          left: 0
        },

        /* Styles applied to the root element if the `Modal` has exited. */
        hidden: {
          visibility: 'hidden'
        }
      };
    };
    /**
     * Modal is a lower-level construct that is leveraged by the following components:
     *
     * - [Dialog](/api/dialog/)
     * - [Drawer](/api/drawer/)
     * - [Menu](/api/menu/)
     * - [Popover](/api/popover/)
     *
     * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
     * rather than directly using Modal.
     *
     * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
     */

    var Modal = React__default.forwardRef(function Modal(inProps, ref) {
      var theme = useTheme();
      var props = getThemeProps({
        name: 'MuiModal',
        props: _extends({}, inProps),
        theme: theme
      });

      var _props$BackdropCompon = props.BackdropComponent,
          BackdropComponent = _props$BackdropCompon === void 0 ? SimpleBackdrop : _props$BackdropCompon,
          BackdropProps = props.BackdropProps,
          children = props.children,
          _props$closeAfterTran = props.closeAfterTransition,
          closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
          container = props.container,
          _props$disableAutoFoc = props.disableAutoFocus,
          disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
          _props$disableBackdro = props.disableBackdropClick,
          disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
          _props$disableEnforce = props.disableEnforceFocus,
          disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
          _props$disableEscapeK = props.disableEscapeKeyDown,
          disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
          _props$disablePortal = props.disablePortal,
          disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
          _props$disableRestore = props.disableRestoreFocus,
          disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
          _props$disableScrollL = props.disableScrollLock,
          disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL,
          _props$hideBackdrop = props.hideBackdrop,
          hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
          _props$keepMounted = props.keepMounted,
          keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
          _props$manager = props.manager,
          manager = _props$manager === void 0 ? defaultManager : _props$manager,
          onBackdropClick = props.onBackdropClick,
          onClose = props.onClose,
          onEscapeKeyDown = props.onEscapeKeyDown,
          onRendered = props.onRendered,
          open = props.open,
          other = _objectWithoutProperties(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);

      var _React$useState = React__default.useState(true),
          exited = _React$useState[0],
          setExited = _React$useState[1];

      var modal = React__default.useRef({});
      var mountNodeRef = React__default.useRef(null);
      var modalRef = React__default.useRef(null);
      var handleRef = useForkRef(modalRef, ref);
      var hasTransition = getHasTransition(props);

      var getDoc = function getDoc() {
        return ownerDocument(mountNodeRef.current);
      };

      var getModal = function getModal() {
        modal.current.modalRef = modalRef.current;
        modal.current.mountNode = mountNodeRef.current;
        return modal.current;
      };

      var handleMounted = function handleMounted() {
        manager.mount(getModal(), {
          disableScrollLock: disableScrollLock
        }); // Fix a bug on Chrome where the scroll isn't initially 0.

        modalRef.current.scrollTop = 0;
      };

      var handleOpen = useEventCallback(function () {
        var resolvedContainer = getContainer$1(container) || getDoc().body;
        manager.add(getModal(), resolvedContainer); // The element was already mounted.

        if (modalRef.current) {
          handleMounted();
        }
      });
      var isTopModal = React__default.useCallback(function () {
        return manager.isTopModal(getModal());
      }, [manager]);
      var handlePortalRef = useEventCallback(function (node) {
        mountNodeRef.current = node;

        if (!node) {
          return;
        }

        if (onRendered) {
          onRendered();
        }

        if (open && isTopModal()) {
          handleMounted();
        } else {
          ariaHidden(modalRef.current, true);
        }
      });
      var handleClose = React__default.useCallback(function () {
        manager.remove(getModal());
      }, [manager]);
      React__default.useEffect(function () {
        return function () {
          handleClose();
        };
      }, [handleClose]);
      React__default.useEffect(function () {
        if (open) {
          handleOpen();
        } else if (!hasTransition || !closeAfterTransition) {
          handleClose();
        }
      }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

      if (!keepMounted && !open && (!hasTransition || exited)) {
        return null;
      }

      var handleEnter = function handleEnter() {
        setExited(false);
      };

      var handleExited = function handleExited() {
        setExited(true);

        if (closeAfterTransition) {
          handleClose();
        }
      };

      var handleBackdropClick = function handleBackdropClick(event) {
        if (event.target !== event.currentTarget) {
          return;
        }

        if (onBackdropClick) {
          onBackdropClick(event);
        }

        if (!disableBackdropClick && onClose) {
          onClose(event, 'backdropClick');
        }
      };

      var handleKeyDown = function handleKeyDown(event) {
        // We don't take event.defaultPrevented into account:
        //
        // event.preventDefault() is meant to stop default behaviours like
        // clicking a checkbox to check it, hitting a button to submit a form,
        // and hitting left arrow to move the cursor in a text input etc.
        // Only special HTML elements have these default behaviors.
        if (event.key !== 'Escape' || !isTopModal()) {
          return;
        } // Swallow the event, in case someone is listening for the escape key on the body.


        event.stopPropagation();

        if (onEscapeKeyDown) {
          onEscapeKeyDown(event);
        }

        if (!disableEscapeKeyDown && onClose) {
          onClose(event, 'escapeKeyDown');
        }
      };

      var inlineStyle = styles$e(theme || {
        zIndex: zIndex
      });
      var childProps = {}; // FixMe: Always apply document role. Revisit once React Flare is released

      if (children.role === undefined) {
        childProps.role = children.role || 'document';
      }

      if (children.tabIndex === undefined) {
        childProps.tabIndex = children.tabIndex || '-1';
      } // It's a Transition like component


      if (hasTransition) {
        childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
        childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
      }

      return React__default.createElement(Portal, {
        ref: handlePortalRef,
        container: container,
        disablePortal: disablePortal
      }, React__default.createElement("div", _extends({
        ref: handleRef,
        onKeyDown: handleKeyDown,
        role: "presentation"
      }, other, {
        style: _extends({}, inlineStyle.root, {}, !open && exited ? inlineStyle.hidden : {}, {}, other.style)
      }), hideBackdrop ? null : React__default.createElement(BackdropComponent, _extends({
        open: open,
        onClick: handleBackdropClick
      }, BackdropProps)), React__default.createElement(TrapFocus, {
        disableEnforceFocus: disableEnforceFocus,
        disableAutoFocus: disableAutoFocus,
        disableRestoreFocus: disableRestoreFocus,
        getDoc: getDoc,
        isEnabled: isTopModal,
        open: open
      }, React__default.cloneElement(children, childProps))));
    });
    process.env.NODE_ENV !== "production" ? Modal.propTypes = {
      /**
       * A backdrop component. This prop enables custom backdrop rendering.
       */
      BackdropComponent: propTypes.elementType,

      /**
       * Props applied to the [`Backdrop`](/api/backdrop/) element.
       */
      BackdropProps: propTypes.object,

      /**
       * A single child content element.
       */
      children: elementAcceptingRef.isRequired,

      /**
       * When set to true the Modal waits until a nested Transition is completed before closing.
       */
      closeAfterTransition: propTypes.bool,

      /**
       * A node, component instance, or function that returns either.
       * The `container` will have the portal children appended to it.
       */
      container: propTypes.oneOfType([propTypes.object, propTypes.func]),

      /**
       * If `true`, the modal will not automatically shift focus to itself when it opens, and
       * replace it to the last focused element when it closes.
       * This also works correctly with any modal children that have the `disableAutoFocus` prop.
       *
       * Generally this should never be set to `true` as it makes the modal less
       * accessible to assistive technologies, like screen readers.
       */
      disableAutoFocus: propTypes.bool,

      /**
       * If `true`, clicking the backdrop will not fire any callback.
       */
      disableBackdropClick: propTypes.bool,

      /**
       * If `true`, the modal will not prevent focus from leaving the modal while open.
       *
       * Generally this should never be set to `true` as it makes the modal less
       * accessible to assistive technologies, like screen readers.
       */
      disableEnforceFocus: propTypes.bool,

      /**
       * If `true`, hitting escape will not fire any callback.
       */
      disableEscapeKeyDown: propTypes.bool,

      /**
       * Disable the portal behavior.
       * The children stay within it's parent DOM hierarchy.
       */
      disablePortal: propTypes.bool,

      /**
       * If `true`, the modal will not restore focus to previously focused element once
       * modal is hidden.
       */
      disableRestoreFocus: propTypes.bool,

      /**
       * Disable the scroll lock behavior.
       */
      disableScrollLock: propTypes.bool,

      /**
       * If `true`, the backdrop is not rendered.
       */
      hideBackdrop: propTypes.bool,

      /**
       * Always keep the children in the DOM.
       * This prop can be useful in SEO situation or
       * when you want to maximize the responsiveness of the Modal.
       */
      keepMounted: propTypes.bool,

      /**
       * @ignore
       */
      manager: propTypes.object,

      /**
       * Callback fired when the backdrop is clicked.
       */
      onBackdropClick: propTypes.func,

      /**
       * Callback fired when the component requests to be closed.
       * The `reason` parameter can optionally be used to control the response to `onClose`.
       *
       * @param {object} event The event source of the callback.
       * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`.
       */
      onClose: propTypes.func,

      /**
       * Callback fired when the escape key is pressed,
       * `disableEscapeKeyDown` is false and the modal is in focus.
       */
      onEscapeKeyDown: propTypes.func,

      /**
       * Callback fired once the children has been mounted into the `container`.
       * It signals that the `open={true}` prop took effect.
       *
       * This prop will be deprecated and removed in v5, the ref can be used instead.
       */
      onRendered: propTypes.func,

      /**
       * If `true`, the modal is open.
       */
      open: propTypes.bool.isRequired
    } : void 0;

    var reflow = function reflow(node) {
      return node.scrollTop;
    };
    function getTransitionProps(props, options) {
      var timeout = props.timeout,
          _props$style = props.style,
          style = _props$style === void 0 ? {} : _props$style;
      return {
        duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
        delay: style.transitionDelay
      };
    }

    function getScale(value) {
      return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
    }

    var styles$f = {
      entering: {
        opacity: 1,
        transform: getScale(1)
      },
      entered: {
        opacity: 1,
        transform: 'none'
      }
    };
    /**
     * The Grow transition is used by the [Tooltip](/components/tooltips/) and
     * [Popover](/components/popover/) components.
     * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
     */

    var Grow = React__default.forwardRef(function Grow(props, ref) {
      var children = props.children,
          inProp = props.in,
          onEnter = props.onEnter,
          onExit = props.onExit,
          style = props.style,
          _props$timeout = props.timeout,
          timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
          other = _objectWithoutProperties(props, ["children", "in", "onEnter", "onExit", "style", "timeout"]);

      var timer = React__default.useRef();
      var autoTimeout = React__default.useRef();
      var handleRef = useForkRef(children.ref, ref);
      var theme = useTheme$1();

      var handleEnter = function handleEnter(node, isAppearing) {
        reflow(node); // So the animation always start from the start.

        var _getTransitionProps = getTransitionProps({
          style: style,
          timeout: timeout
        }, {
          mode: 'enter'
        }),
            transitionDuration = _getTransitionProps.duration,
            delay = _getTransitionProps.delay;

        var duration;

        if (timeout === 'auto') {
          duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
          autoTimeout.current = duration;
        } else {
          duration = transitionDuration;
        }

        node.style.transition = [theme.transitions.create('opacity', {
          duration: duration,
          delay: delay
        }), theme.transitions.create('transform', {
          duration: duration * 0.666,
          delay: delay
        })].join(',');

        if (onEnter) {
          onEnter(node, isAppearing);
        }
      };

      var handleExit = function handleExit(node) {
        var _getTransitionProps2 = getTransitionProps({
          style: style,
          timeout: timeout
        }, {
          mode: 'exit'
        }),
            transitionDuration = _getTransitionProps2.duration,
            delay = _getTransitionProps2.delay;

        var duration;

        if (timeout === 'auto') {
          duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
          autoTimeout.current = duration;
        } else {
          duration = transitionDuration;
        }

        node.style.transition = [theme.transitions.create('opacity', {
          duration: duration,
          delay: delay
        }), theme.transitions.create('transform', {
          duration: duration * 0.666,
          delay: delay || duration * 0.333
        })].join(',');
        node.style.opacity = '0';
        node.style.transform = getScale(0.75);

        if (onExit) {
          onExit(node);
        }
      };

      var addEndListener = function addEndListener(_, next) {
        if (timeout === 'auto') {
          timer.current = setTimeout(next, autoTimeout.current || 0);
        }
      };

      React__default.useEffect(function () {
        return function () {
          clearTimeout(timer.current);
        };
      }, []);
      return React__default.createElement(Transition, _extends({
        appear: true,
        in: inProp,
        onEnter: handleEnter,
        onExit: handleExit,
        addEndListener: addEndListener,
        timeout: timeout === 'auto' ? null : timeout
      }, other), function (state, childProps) {
        return React__default.cloneElement(children, _extends({
          style: _extends({
            opacity: 0,
            transform: getScale(0.75),
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined
          }, styles$f[state], {}, style, {}, children.props.style),
          ref: handleRef
        }, childProps));
      });
    });
    process.env.NODE_ENV !== "production" ? Grow.propTypes = {
      /**
       * A single child content element.
       */
      children: propTypes.element,

      /**
       * If `true`, show the component; triggers the enter or exit animation.
       */
      in: propTypes.bool,

      /**
       * @ignore
       */
      onEnter: propTypes.func,

      /**
       * @ignore
       */
      onExit: propTypes.func,

      /**
       * @ignore
       */
      style: propTypes.object,

      /**
       * The duration for the transition, in milliseconds.
       * You may specify a single timeout for all transitions, or individually with an object.
       *
       * Set to 'auto' to automatically calculate transition time based on height.
       */
      timeout: propTypes.oneOfType([propTypes.number, propTypes.shape({
        enter: propTypes.number,
        exit: propTypes.number
      }), propTypes.oneOf(['auto'])])
    } : void 0;
    Grow.muiSupportAuto = true;

    var styles$g = function styles(theme) {
      var elevations = {};
      theme.shadows.forEach(function (shadow, index) {
        elevations["elevation".concat(index)] = {
          boxShadow: shadow
        };
      });
      return _extends({
        /* Styles applied to the root element. */
        root: {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          transition: theme.transitions.create('box-shadow')
        },

        /* Styles applied to the root element if `square={false}`. */
        rounded: {
          borderRadius: theme.shape.borderRadius
        }
      }, elevations);
    };
    var Paper = React__default.forwardRef(function Paper(props, ref) {
      var classes = props.classes,
          classNameProp = props.className,
          _props$component = props.component,
          Component = _props$component === void 0 ? 'div' : _props$component,
          _props$square = props.square,
          square = _props$square === void 0 ? false : _props$square,
          _props$elevation = props.elevation,
          elevation = _props$elevation === void 0 ? 1 : _props$elevation,
          other = _objectWithoutProperties(props, ["classes", "className", "component", "square", "elevation"]);

      if (process.env.NODE_ENV !== 'production') {
        if (elevation < 0 || elevation >= 25) {
          console.error("Material-UI: this elevation `".concat(elevation, "` is not implemented."));
        }
      }

      var className = clsx(classes.root, classes["elevation".concat(elevation)], classNameProp, !square && classes.rounded);
      return React__default.createElement(Component, _extends({
        className: className,
        ref: ref
      }, other));
    });
    process.env.NODE_ENV !== "production" ? Paper.propTypes = {
      /**
       * The content of the component.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       */
      component: propTypes.elementType,

      /**
       * Shadow depth, corresponds to `dp` in the spec.
       * It accepts values between 0 and 24 inclusive.
       */
      elevation: propTypes.number,

      /**
       * If `true`, rounded corners are disabled.
       */
      square: propTypes.bool
    } : void 0;
    var Paper$1 = withStyles$1(styles$g, {
      name: 'MuiPaper'
    })(Paper);

    function getOffsetTop(rect, vertical) {
      var offset = 0;

      if (typeof vertical === 'number') {
        offset = vertical;
      } else if (vertical === 'center') {
        offset = rect.height / 2;
      } else if (vertical === 'bottom') {
        offset = rect.height;
      }

      return offset;
    }
    function getOffsetLeft(rect, horizontal) {
      var offset = 0;

      if (typeof horizontal === 'number') {
        offset = horizontal;
      } else if (horizontal === 'center') {
        offset = rect.width / 2;
      } else if (horizontal === 'right') {
        offset = rect.width;
      }

      return offset;
    }

    function getTransformOriginValue(transformOrigin) {
      return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
        return typeof n === 'number' ? "".concat(n, "px") : n;
      }).join(' ');
    } // Sum the scrollTop between two elements.


    function getScrollParent(parent, child) {
      var element = child;
      var scrollTop = 0;

      while (element && element !== parent) {
        element = element.parentNode;
        scrollTop += element.scrollTop;
      }

      return scrollTop;
    }

    function getAnchorEl(anchorEl) {
      return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
    }

    var styles$h = {
      /* Styles applied to the `Paper` component. */
      paper: {
        position: 'absolute',
        overflowY: 'auto',
        overflowX: 'hidden',
        // So we see the popover when it's empty.
        // It's most likely on issue on userland.
        minWidth: 16,
        minHeight: 16,
        maxWidth: 'calc(100% - 32px)',
        maxHeight: 'calc(100% - 32px)',
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0
      }
    };
    var Popover = React__default.forwardRef(function Popover(props, ref) {
      var action = props.action,
          anchorEl = props.anchorEl,
          _props$anchorOrigin = props.anchorOrigin,
          anchorOrigin = _props$anchorOrigin === void 0 ? {
        vertical: 'top',
        horizontal: 'left'
      } : _props$anchorOrigin,
          anchorPosition = props.anchorPosition,
          _props$anchorReferenc = props.anchorReference,
          anchorReference = _props$anchorReferenc === void 0 ? 'anchorEl' : _props$anchorReferenc,
          children = props.children,
          classes = props.classes,
          containerProp = props.container,
          _props$elevation = props.elevation,
          elevation = _props$elevation === void 0 ? 8 : _props$elevation,
          getContentAnchorEl = props.getContentAnchorEl,
          _props$marginThreshol = props.marginThreshold,
          marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol,
          ModalClasses = props.ModalClasses,
          onEnter = props.onEnter,
          onEntered = props.onEntered,
          onEntering = props.onEntering,
          onExit = props.onExit,
          onExited = props.onExited,
          onExiting = props.onExiting,
          open = props.open,
          _props$PaperProps = props.PaperProps,
          PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
          _props$transformOrigi = props.transformOrigin,
          transformOrigin = _props$transformOrigi === void 0 ? {
        vertical: 'top',
        horizontal: 'left'
      } : _props$transformOrigi,
          _props$TransitionComp = props.TransitionComponent,
          TransitionComponent = _props$TransitionComp === void 0 ? Grow : _props$TransitionComp,
          _props$transitionDura = props.transitionDuration,
          transitionDurationProp = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
          _props$TransitionProp = props.TransitionProps,
          TransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp,
          other = _objectWithoutProperties(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "container", "elevation", "getContentAnchorEl", "marginThreshold", "ModalClasses", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);

      var paperRef = React__default.useRef(); // Returns the top/left offset of the position
      // to attach to on the anchor element (or body if none is provided)

      var getAnchorOffset = React__default.useCallback(function (contentAnchorOffset) {
        if (anchorReference === 'anchorPosition') {
          if (process.env.NODE_ENV !== 'production') {
            if (!anchorPosition) {
              console.error('Material-UI: you need to provide a `anchorPosition` prop when using ' + '<Popover anchorReference="anchorPosition" />.');
            }
          }

          return anchorPosition;
        }

        var resolvedAnchorEl = getAnchorEl(anchorEl);
        var containerWindow = ownerWindow(resolvedAnchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

        var anchorElement = resolvedAnchorEl instanceof containerWindow.Element ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
        var anchorRect = anchorElement.getBoundingClientRect();
        var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
        return {
          top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
          left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
        };
      }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the vertical offset of inner content to anchor the transform on if provided

      var getContentAnchorOffset = React__default.useCallback(function (element) {
        var contentAnchorOffset = 0;

        if (getContentAnchorEl && anchorReference === 'anchorEl') {
          var contentAnchorEl = getContentAnchorEl(element);

          if (contentAnchorEl && element.contains(contentAnchorEl)) {
            var scrollTop = getScrollParent(element, contentAnchorEl);
            contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
          } // != the default value


          if (process.env.NODE_ENV !== 'production') {
            if (anchorOrigin.vertical !== 'top') {
              console.error(['Material-UI: you can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` prop to the popover component.', 'Only use one of the two props.', 'Set `getContentAnchorEl` to `null | undefined`' + ' or leave `anchorOrigin.vertical` unchanged.'].join('\n'));
            }
          }
        }

        return contentAnchorOffset;
      }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]); // Return the base transform origin using the element
      // and taking the content anchor offset into account if in use

      var getTransformOrigin = React__default.useCallback(function (elemRect) {
        var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return {
          vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
          horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
        };
      }, [transformOrigin.horizontal, transformOrigin.vertical]);
      var getPositioningStyle = React__default.useCallback(function (element) {
        // Check if the parent has requested anchoring on an inner content node
        var contentAnchorOffset = getContentAnchorOffset(element);
        var elemRect = {
          width: element.offsetWidth,
          height: element.offsetHeight
        }; // Get the transform origin point on the element itself

        var elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);

        if (anchorReference === 'none') {
          return {
            top: null,
            left: null,
            transformOrigin: getTransformOriginValue(elemTransformOrigin)
          };
        } // Get the offset of of the anchoring element


        var anchorOffset = getAnchorOffset(contentAnchorOffset); // Calculate element positioning

        var top = anchorOffset.top - elemTransformOrigin.vertical;
        var left = anchorOffset.left - elemTransformOrigin.horizontal;
        var bottom = top + elemRect.height;
        var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

        var containerWindow = ownerWindow(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

        var heightThreshold = containerWindow.innerHeight - marginThreshold;
        var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

        if (top < marginThreshold) {
          var diff = top - marginThreshold;
          top -= diff;
          elemTransformOrigin.vertical += diff;
        } else if (bottom > heightThreshold) {
          var _diff = bottom - heightThreshold;

          top -= _diff;
          elemTransformOrigin.vertical += _diff;
        }

        if (process.env.NODE_ENV !== 'production') {
          if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
            console.error(['Material-UI: the popover component is too tall.', "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), 'Please consider adding a `max-height` to improve the user-experience.'].join('\n'));
          }
        } // Check if the horizontal axis needs shifting


        if (left < marginThreshold) {
          var _diff2 = left - marginThreshold;

          left -= _diff2;
          elemTransformOrigin.horizontal += _diff2;
        } else if (right > widthThreshold) {
          var _diff3 = right - widthThreshold;

          left -= _diff3;
          elemTransformOrigin.horizontal += _diff3;
        }

        return {
          top: "".concat(top, "px"),
          left: "".concat(left, "px"),
          transformOrigin: getTransformOriginValue(elemTransformOrigin)
        };
      }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
      var setPositioningStyles = React__default.useCallback(function (element) {
        var positioning = getPositioningStyle(element);

        if (positioning.top !== null) {
          element.style.top = positioning.top;
        }

        if (positioning.left !== null) {
          element.style.left = positioning.left;
        }

        element.style.transformOrigin = positioning.transformOrigin;
      }, [getPositioningStyle]);

      var handleEntering = function handleEntering(element, isAppearing) {
        if (onEntering) {
          onEntering(element, isAppearing);
        }

        setPositioningStyles(element);
      };

      var handlePaperRef = React__default.useCallback(function (instance) {
        // #StrictMode ready
        paperRef.current = ReactDOM.findDOMNode(instance);
      }, []);
      var updatePosition = React__default.useMemo(function () {
        if (!open) {
          return undefined;
        }

        return debounce(function () {
          setPositioningStyles(paperRef.current);
        });
      }, [open, setPositioningStyles]);
      React__default.useImperativeHandle(action, function () {
        return open ? {
          updatePosition: updatePosition
        } : null;
      }, [open, updatePosition]);
      React__default.useEffect(function () {
        if (!updatePosition) {
          return undefined;
        }

        window.addEventListener('resize', updatePosition);
        return function () {
          window.removeEventListener('resize', updatePosition);
          updatePosition.clear();
        };
      }, [updatePosition]);
      var transitionDuration = transitionDurationProp;

      if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
        transitionDuration = undefined;
      } // If the container prop is provided, use that
      // If the anchorEl prop is provided, use its parent body element as the container
      // If neither are provided let the Modal take care of choosing the container


      var container = containerProp || (anchorEl ? ownerDocument(getAnchorEl(anchorEl)).body : undefined);
      return React__default.createElement(Modal, _extends({
        classes: ModalClasses,
        container: container,
        open: open,
        ref: ref,
        BackdropProps: {
          invisible: true
        }
      }, other), React__default.createElement(TransitionComponent, _extends({
        appear: true,
        in: open,
        onEnter: onEnter,
        onEntered: onEntered,
        onExit: onExit,
        onExited: onExited,
        onExiting: onExiting,
        timeout: transitionDuration
      }, TransitionProps, {
        onEntering: createChainedFunction(handleEntering, TransitionProps.onEntering)
      }), React__default.createElement(Paper$1, _extends({
        elevation: elevation,
        ref: handlePaperRef
      }, PaperProps, {
        // eslint-disable-next-line react/prop-types
        className: clsx(classes.paper, PaperProps.className)
      }), children)));
    });
    process.env.NODE_ENV !== "production" ? Popover.propTypes = {
      /**
       * A ref for imperative actions.
       * It currently only supports updatePosition() action.
       */
      action: refType,

      /**
       * This is the DOM element, or a function that returns the DOM element,
       * that may be used to set the position of the popover.
       */
      anchorEl: chainPropTypes(propTypes.oneOfType([propTypes.object, propTypes.func]), function (props) {
        if (props.open && (!props.anchorReference || props.anchorReference === 'anchorEl')) {
          var resolvedAnchorEl = getAnchorEl(props.anchorEl);
          var containerWindow = ownerWindow(resolvedAnchorEl);

          if (resolvedAnchorEl instanceof containerWindow.Element) {
            var box = resolvedAnchorEl.getBoundingClientRect();

            if (process.env.NODE_ENV !== 'test' && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
              return new Error(['Material-UI: the `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
            }
          } else {
            return new Error(['Material-UI: the `anchorEl` prop provided to the component is invalid.', "It should be an Element instance but it's `".concat(resolvedAnchorEl, "` instead.")].join('\n'));
          }
        }

        return null;
      }),

      /**
       * This is the point on the anchor where the popover's
       * `anchorEl` will attach to. This is not used when the
       * anchorReference is 'anchorPosition'.
       *
       * Options:
       * vertical: [top, center, bottom];
       * horizontal: [left, center, right].
       */
      anchorOrigin: propTypes.shape({
        horizontal: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['left', 'center', 'right'])]).isRequired,
        vertical: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['top', 'center', 'bottom'])]).isRequired
      }),

      /**
       * This is the position that may be used
       * to set the position of the popover.
       * The coordinates are relative to
       * the application's client area.
       */
      anchorPosition: propTypes.shape({
        left: propTypes.number.isRequired,
        top: propTypes.number.isRequired
      }),

      /*
       * This determines which anchor prop to refer to to set
       * the position of the popover.
       */
      anchorReference: propTypes.oneOf(['anchorEl', 'anchorPosition', 'none']),

      /**
       * The content of the component.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * A node, component instance, or function that returns either.
       * The `container` will passed to the Modal component.
       * By default, it uses the body of the anchorEl's top-level document object,
       * so it's simply `document.body` most of the time.
       */
      container: propTypes.oneOfType([propTypes.object, propTypes.func]),

      /**
       * The elevation of the popover.
       */
      elevation: propTypes.number,

      /**
       * This function is called in order to retrieve the content anchor element.
       * It's the opposite of the `anchorEl` prop.
       * The content anchor element should be an element inside the popover.
       * It's used to correctly scroll and set the position of the popover.
       * The positioning strategy tries to make the content anchor element just above the
       * anchor element.
       */
      getContentAnchorEl: propTypes.func,

      /**
       * Specifies how close to the edge of the window the popover can appear.
       */
      marginThreshold: propTypes.number,

      /**
       * `classes` prop applied to the [`Modal`](/api/modal/) element.
       */
      ModalClasses: propTypes.object,

      /**
       * Callback fired when the component requests to be closed.
       *
       * @param {object} event The event source of the callback.
       * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
       */
      onClose: propTypes.func,

      /**
       * Callback fired before the component is entering.
       */
      onEnter: propTypes.func,

      /**
       * Callback fired when the component has entered.
       */
      onEntered: propTypes.func,

      /**
       * Callback fired when the component is entering.
       */
      onEntering: propTypes.func,

      /**
       * Callback fired before the component is exiting.
       */
      onExit: propTypes.func,

      /**
       * Callback fired when the component has exited.
       */
      onExited: propTypes.func,

      /**
       * Callback fired when the component is exiting.
       */
      onExiting: propTypes.func,

      /**
       * If `true`, the popover is visible.
       */
      open: propTypes.bool.isRequired,

      /**
       * Props applied to the [`Paper`](/api/paper/) element.
       */
      PaperProps: propTypes.shape({
        component: elementTypeAcceptingRef$1
      }),

      /**
       * This is the point on the popover which
       * will attach to the anchor's origin.
       *
       * Options:
       * vertical: [top, center, bottom, x(px)];
       * horizontal: [left, center, right, x(px)].
       */
      transformOrigin: propTypes.shape({
        horizontal: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['left', 'center', 'right'])]).isRequired,
        vertical: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['top', 'center', 'bottom'])]).isRequired
      }),

      /**
       * The component used for the transition.
       */
      TransitionComponent: propTypes.elementType,

      /**
       * Set to 'auto' to automatically calculate transition time based on height.
       */
      transitionDuration: propTypes.oneOfType([propTypes.number, propTypes.shape({
        enter: propTypes.number,
        exit: propTypes.number
      }), propTypes.oneOf(['auto'])]),

      /**
       * Props applied to the `Transition` element.
       */
      TransitionProps: propTypes.object
    } : void 0;
    var Popover$1 = withStyles$1(styles$h, {
      name: 'MuiPopover'
    })(Popover);

    /**
     * @ignore - internal component.
     */

    var ListContext = React__default.createContext({});

    var styles$i = {
      /* Styles applied to the root element. */
      root: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        position: 'relative'
      },

      /* Styles applied to the root element if `disablePadding={false}`. */
      padding: {
        paddingTop: 8,
        paddingBottom: 8
      },

      /* Styles applied to the root element if dense. */
      dense: {},

      /* Styles applied to the root element if a `subheader` is provided. */
      subheader: {
        paddingTop: 0
      }
    };
    var List = React__default.forwardRef(function List(props, ref) {
      var children = props.children,
          classes = props.classes,
          className = props.className,
          _props$component = props.component,
          Component = _props$component === void 0 ? 'ul' : _props$component,
          _props$dense = props.dense,
          dense = _props$dense === void 0 ? false : _props$dense,
          _props$disablePadding = props.disablePadding,
          disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding,
          subheader = props.subheader,
          other = _objectWithoutProperties(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

      var context = React__default.useMemo(function () {
        return {
          dense: dense
        };
      }, [dense]);
      return React__default.createElement(ListContext.Provider, {
        value: context
      }, React__default.createElement(Component, _extends({
        className: clsx(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
        ref: ref
      }, other), subheader, children));
    });
    process.env.NODE_ENV !== "production" ? List.propTypes = {
      /**
       * The content of the component.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       */
      component: propTypes.elementType,

      /**
       * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
       * the list and list items.
       * The prop is available to descendant components as the `dense` context.
       */
      dense: propTypes.bool,

      /**
       * If `true`, vertical padding will be removed from the list.
       */
      disablePadding: propTypes.bool,

      /**
       * The content of the subheader, normally `ListSubheader`.
       */
      subheader: propTypes.node
    } : void 0;
    var List$1 = withStyles$1(styles$i, {
      name: 'MuiList'
    })(List);

    function nextItem(list, item, disableListWrap) {
      if (list === item) {
        return list.firstChild;
      }

      if (item && item.nextElementSibling) {
        return item.nextElementSibling;
      }

      return disableListWrap ? null : list.firstChild;
    }

    function previousItem(list, item, disableListWrap) {
      if (list === item) {
        return disableListWrap ? list.firstChild : list.lastChild;
      }

      if (item && item.previousElementSibling) {
        return item.previousElementSibling;
      }

      return disableListWrap ? null : list.lastChild;
    }

    function textCriteriaMatches(nextFocus, textCriteria) {
      if (textCriteria === undefined) {
        return true;
      }

      var text = nextFocus.innerText;

      if (text === undefined) {
        // jsdom doesn't support innerText
        text = nextFocus.textContent;
      }

      if (text === undefined) {
        return false;
      }

      text = text.trim().toLowerCase();

      if (text.length === 0) {
        return false;
      }

      if (textCriteria.repeating) {
        return text[0] === textCriteria.keys[0];
      }

      return text.indexOf(textCriteria.keys.join('')) === 0;
    }

    function moveFocus(list, currentFocus, disableListWrap, traversalFunction, textCriteria) {
      var wrappedOnce = false;
      var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

      while (nextFocus) {
        // Prevent infinite loop.
        if (nextFocus === list.firstChild) {
          if (wrappedOnce) {
            return false;
          }

          wrappedOnce = true;
        } // Move to the next element.


        if (!nextFocus.hasAttribute('tabindex') || nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true' || !textCriteriaMatches(nextFocus, textCriteria)) {
          nextFocus = traversalFunction(list, nextFocus, disableListWrap);
        } else {
          nextFocus.focus();
          return true;
        }
      }

      return false;
    }

    var useEnhancedEffect$6 = typeof window === 'undefined' ? React__default.useEffect : React__default.useLayoutEffect;
    var MenuList = React__default.forwardRef(function MenuList(props, ref) {
      var actions = props.actions,
          _props$autoFocus = props.autoFocus,
          autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
          className = props.className,
          onKeyDown = props.onKeyDown,
          _props$disableListWra = props.disableListWrap,
          disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
          other = _objectWithoutProperties(props, ["actions", "autoFocus", "className", "onKeyDown", "disableListWrap"]);

      var listRef = React__default.useRef(null);
      var textCriteriaRef = React__default.useRef({
        keys: [],
        repeating: true,
        previousKeyMatched: true,
        lastTime: null
      });
      useEnhancedEffect$6(function () {
        if (autoFocus) {
          listRef.current.focus();
        }
      }, [autoFocus]);
      React__default.useImperativeHandle(actions, function () {
        return {
          adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
            // Let's ignore that piece of logic if users are already overriding the width
            // of the menu.
            var noExplicitWidth = !listRef.current.style.width;

            if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
              var scrollbarSize = "".concat(getScrollbarSize(true), "px");
              listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
              listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
            }

            return listRef.current;
          }
        };
      }, []);

      var handleKeyDown = function handleKeyDown(event) {
        var list = listRef.current;
        var key = event.key;
        /**
         * @type {Element} - will always be defined since we are in a keydown handler
         * attached to an element. A keydown event is either dispatched to the activeElement
         * or document.body or document.documentElement. Only the first case will
         * trigger this specific handler.
         */

        var currentFocus = ownerDocument(list).activeElement;

        if (key === 'ArrowDown') {
          event.preventDefault();
          moveFocus(list, currentFocus, disableListWrap, nextItem);
        } else if (key === 'ArrowUp') {
          event.preventDefault();
          moveFocus(list, currentFocus, disableListWrap, previousItem);
        } else if (key === 'Home') {
          event.preventDefault();
          moveFocus(list, null, disableListWrap, nextItem);
        } else if (key === 'End') {
          event.preventDefault();
          moveFocus(list, null, disableListWrap, previousItem);
        } else if (key.length === 1) {
          var criteria = textCriteriaRef.current;
          var lowerKey = key.toLowerCase();
          var currTime = performance.now();

          if (criteria.keys.length > 0) {
            // Reset
            if (currTime - criteria.lastTime > 500) {
              criteria.keys = [];
              criteria.repeating = true;
              criteria.previousKeyMatched = true;
            } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
              criteria.repeating = false;
            }
          }

          criteria.lastTime = currTime;
          criteria.keys.push(lowerKey);
          var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

          if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, nextItem, criteria))) {
            event.preventDefault();
          } else {
            criteria.previousKeyMatched = false;
          }
        }

        if (onKeyDown) {
          onKeyDown(event);
        }
      };

      var handleOwnRef = React__default.useCallback(function (instance) {
        // #StrictMode ready
        listRef.current = ReactDOM.findDOMNode(instance);
      }, []);
      var handleRef = useForkRef(handleOwnRef, ref);
      return React__default.createElement(List$1, _extends({
        role: "menu",
        ref: handleRef,
        className: className,
        onKeyDown: handleKeyDown,
        tabIndex: autoFocus ? 0 : -1
      }, other));
    });
    process.env.NODE_ENV !== "production" ? MenuList.propTypes = {
      /**
       * @ignore
       */
      actions: propTypes.shape({
        current: propTypes.object
      }),

      /**
       * If `true`, the list will be focused during the first mount.
       * Focus will also be triggered if the value changes from false to true.
       */
      autoFocus: propTypes.bool,

      /**
       * MenuList contents, normally `MenuItem`s.
       */
      children: propTypes.node,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * If `true`, the menu items will not wrap focus.
       */
      disableListWrap: propTypes.bool,

      /**
       * @ignore
       */
      onKeyDown: propTypes.func
    } : void 0;

    var RTL_ORIGIN = {
      vertical: 'top',
      horizontal: 'right'
    };
    var LTR_ORIGIN = {
      vertical: 'top',
      horizontal: 'left'
    };
    var styles$j = {
      /* Styles applied to the `Paper` component. */
      paper: {
        // specZ: The maximum height of a simple menu should be one or more rows less than the view
        // height. This ensures a tapable area outside of the simple menu with which to dismiss
        // the menu.
        maxHeight: 'calc(100% - 96px)',
        // Add iOS momentum scrolling.
        WebkitOverflowScrolling: 'touch'
      },

      /* Styles applied to the `List` component via `MenuList`. */
      list: {
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0
      }
    };
    var Menu = React__default.forwardRef(function Menu(props, ref) {
      var autoFocusProp = props.autoFocus,
          children = props.children,
          classes = props.classes,
          _props$disableAutoFoc = props.disableAutoFocusItem,
          disableAutoFocusItem = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
          _props$MenuListProps = props.MenuListProps,
          MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps,
          onClose = props.onClose,
          onEntering = props.onEntering,
          open = props.open,
          _props$PaperProps = props.PaperProps,
          PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
          PopoverClasses = props.PopoverClasses,
          _props$transitionDura = props.transitionDuration,
          transitionDuration = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
          _props$variant = props.variant,
          variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
          other = _objectWithoutProperties(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "transitionDuration", "variant"]);

      var theme = useTheme$1();
      var autoFocus = (autoFocusProp !== undefined ? autoFocusProp : !disableAutoFocusItem) && open;
      var menuListActionsRef = React__default.useRef(null);
      var firstValidItemRef = React__default.useRef(null);
      var firstSelectedItemRef = React__default.useRef(null);

      var getContentAnchorEl = function getContentAnchorEl() {
        return firstSelectedItemRef.current || firstValidItemRef.current;
      };

      var handleEntering = function handleEntering(element, isAppearing) {
        if (menuListActionsRef.current) {
          menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
        }

        if (onEntering) {
          onEntering(element, isAppearing);
        }
      };

      var handleListKeyDown = function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();

          if (onClose) {
            onClose(event, 'tabKeyDown');
          }
        }
      };

      var firstValidElementIndex = null;
      var firstSelectedIndex = null;
      var items = React__default.Children.map(children, function (child, index) {
        if (!React__default.isValidElement(child)) {
          return null;
        }

        if (process.env.NODE_ENV !== 'production') {
          if (child.type === React__default.Fragment) {
            console.error(["Material-UI: the Menu component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
          }
        }

        if (firstValidElementIndex === null) {
          firstValidElementIndex = index;
        }

        var newChildProps = null;

        if (variant !== "menu" && firstSelectedIndex === null && child.props.selected && !child.props.disabled) {
          firstSelectedIndex = index;
          newChildProps = {};

          if (autoFocus) {
            newChildProps.autoFocus = true;
          }

          if (child.props.tabIndex === undefined) {
            newChildProps.tabIndex = 0;
          }

          newChildProps.ref = function (instance) {
            // #StrictMode ready
            firstSelectedItemRef.current = ReactDOM.findDOMNode(instance);
            setRef(child.ref, instance);
          };
        } else if (index === firstValidElementIndex) {
          newChildProps = {
            ref: function ref(instance) {
              // #StrictMode ready
              firstValidItemRef.current = ReactDOM.findDOMNode(instance);
              setRef(child.ref, instance);
            }
          };
        }

        if (newChildProps !== null) {
          return React__default.cloneElement(child, newChildProps);
        }

        return child;
      });
      return React__default.createElement(Popover$1, _extends({
        getContentAnchorEl: getContentAnchorEl,
        classes: PopoverClasses,
        onClose: onClose,
        onEntering: handleEntering,
        anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
        transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
        PaperProps: _extends({}, PaperProps, {
          classes: _extends({}, PaperProps.classes, {
            root: classes.paper
          })
        }),
        open: open,
        ref: ref,
        transitionDuration: transitionDuration
      }, other), React__default.createElement(MenuList, _extends({
        onKeyDown: handleListKeyDown,
        actions: menuListActionsRef,
        autoFocus: autoFocus && firstSelectedIndex === null
      }, MenuListProps, {
        className: clsx(classes.list, MenuListProps.className)
      }), items));
    });
    process.env.NODE_ENV !== "production" ? Menu.propTypes = {
      /**
       * The DOM element used to set the position of the menu.
       */
      anchorEl: propTypes.oneOfType([propTypes.object, propTypes.func]),

      /**
       * If `true` (default), the menu list (possibly a particular item depending on the menu variant) will receive focus on open.
       */
      autoFocus: propTypes.bool,

      /**
       * Menu contents, normally `MenuItem`s.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * Same as `autoFocus=false`.
       * @deprecated Use `autoFocus` instead.
       */
      disableAutoFocusItem: propTypes.bool,

      /**
       * Props applied to the [`MenuList`](/api/menu-list/) element.
       */
      MenuListProps: propTypes.object,

      /**
       * Callback fired when the component requests to be closed.
       *
       * @param {object} event The event source of the callback.
       * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
       */
      onClose: propTypes.func,

      /**
       * Callback fired before the Menu enters.
       */
      onEnter: propTypes.func,

      /**
       * Callback fired when the Menu has entered.
       */
      onEntered: propTypes.func,

      /**
       * Callback fired when the Menu is entering.
       */
      onEntering: propTypes.func,

      /**
       * Callback fired before the Menu exits.
       */
      onExit: propTypes.func,

      /**
       * Callback fired when the Menu has exited.
       */
      onExited: propTypes.func,

      /**
       * Callback fired when the Menu is exiting.
       */
      onExiting: propTypes.func,

      /**
       * If `true`, the menu is visible.
       */
      open: propTypes.bool.isRequired,

      /**
       * @ignore
       */
      PaperProps: propTypes.object,

      /**
       * `classes` prop applied to the [`Popover`](/api/popover/) element.
       */
      PopoverClasses: propTypes.object,

      /**
       * The length of the transition in `ms`, or 'auto'
       */
      transitionDuration: propTypes.oneOfType([propTypes.number, propTypes.shape({
        enter: propTypes.number,
        exit: propTypes.number
      }), propTypes.oneOf(['auto'])]),

      /**
       * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
       * and the vertical alignment relative to the anchor element.
       */
      variant: propTypes.oneOf(['menu', 'selectedMenu'])
    } : void 0;
    var Menu$1 = withStyles$1(styles$j, {
      name: 'MuiMenu'
    })(Menu);

    function areEqualValues(a, b) {
      if (_typeof(b) === 'object' && b !== null) {
        return a === b;
      }

      return String(a) === String(b);
    }

    function isEmpty(display) {
      return display == null || typeof display === 'string' && !display.trim();
    }
    /**
     * @ignore - internal component.
     */


    var SelectInput = React__default.forwardRef(function SelectInput(props, ref) {
      var autoFocus = props.autoFocus,
          autoWidth = props.autoWidth,
          children = props.children,
          classes = props.classes,
          className = props.className,
          disabled = props.disabled,
          displayEmpty = props.displayEmpty,
          IconComponent = props.IconComponent,
          inputRefProp = props.inputRef,
          _props$MenuProps = props.MenuProps,
          MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps,
          multiple = props.multiple,
          name = props.name,
          onBlur = props.onBlur,
          onChange = props.onChange,
          onClose = props.onClose,
          onFocus = props.onFocus,
          onOpen = props.onOpen,
          openProp = props.open,
          readOnly = props.readOnly,
          renderValue = props.renderValue,
          required = props.required,
          SelectDisplayProps = props.SelectDisplayProps,
          tabIndexProp = props.tabIndex,
          type = props.type,
          value = props.value,
          _props$variant = props.variant,
          variant = _props$variant === void 0 ? 'standard' : _props$variant,
          other = _objectWithoutProperties(props, ["autoFocus", "autoWidth", "children", "classes", "className", "disabled", "displayEmpty", "IconComponent", "inputRef", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "required", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);

      var inputRef = React__default.useRef(null);
      var displayRef = React__default.useRef(null);
      var ignoreNextBlur = React__default.useRef(false);

      var _React$useRef = React__default.useRef(openProp != null),
          isOpenControlled = _React$useRef.current;

      var _React$useState = React__default.useState(),
          menuMinWidthState = _React$useState[0],
          setMenuMinWidthState = _React$useState[1];

      var _React$useState2 = React__default.useState(false),
          openState = _React$useState2[0],
          setOpenState = _React$useState2[1];

      var _React$useState3 = React__default.useState(0),
          forceUpdate = _React$useState3[1];

      var handleRef = useForkRef(ref, inputRefProp);
      React__default.useImperativeHandle(handleRef, function () {
        return {
          focus: function focus() {
            displayRef.current.focus();
          },
          node: inputRef.current,
          value: value
        };
      }, [value]);
      React__default.useEffect(function () {
        if (isOpenControlled && openProp) {
          // Focus the display node so the focus is restored on this element once
          // the menu is closed.
          displayRef.current.focus(); // Rerender with the resolve `displayRef` reference.

          forceUpdate(function (n) {
            return !n;
          });
        }

        if (autoFocus) {
          displayRef.current.focus();
        }
      }, [autoFocus, isOpenControlled, openProp]);

      var update = function update(open, event) {
        if (open) {
          if (onOpen) {
            onOpen(event);
          }
        } else if (onClose) {
          onClose(event);
        }

        if (!isOpenControlled) {
          setMenuMinWidthState(autoWidth ? null : displayRef.current.clientWidth);
          setOpenState(open);
        }
      };

      var handleClick = function handleClick(event) {
        // Opening the menu is going to blur the. It will be focused back when closed.
        ignoreNextBlur.current = true;
        update(true, event);
      };

      var handleClose = function handleClose(event) {
        update(false, event);
      };

      var handleItemClick = function handleItemClick(child) {
        return function (event) {
          if (!multiple) {
            update(false, event);
          }

          if (onChange) {
            var newValue;

            if (multiple) {
              newValue = Array.isArray(value) ? _toConsumableArray(value) : [];
              var itemIndex = value.indexOf(child.props.value);

              if (itemIndex === -1) {
                newValue.push(child.props.value);
              } else {
                newValue.splice(itemIndex, 1);
              }
            } else {
              newValue = child.props.value;
            }

            event.persist();
            event.target = {
              value: newValue,
              name: name
            };
            onChange(event, child);
          }
        };
      };

      var handleBlur = function handleBlur(event) {
        if (ignoreNextBlur.current === true) {
          // The parent components are relying on the bubbling of the event.
          event.stopPropagation();
          ignoreNextBlur.current = false;
          return;
        }

        if (onBlur) {
          event.persist();
          event.target = {
            value: value,
            name: name
          };
          onBlur(event);
        }
      };

      var handleKeyDown = function handleKeyDown(event) {
        if (!readOnly) {
          var validKeys = [' ', 'ArrowUp', 'ArrowDown', // The native select doesn't respond to enter on MacOS, but it's recommended by
          // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
          'Enter'];

          if (validKeys.indexOf(event.key) !== -1) {
            event.preventDefault(); // Opening the menu is going to blur the. It will be focused back when closed.

            ignoreNextBlur.current = true;
            update(true, event);
          }
        }
      };

      var open = isOpenControlled && displayRef.current ? openProp : openState;
      delete other['aria-invalid'];
      var display;
      var displaySingle;
      var displayMultiple = [];
      var computeDisplay = false; // No need to display any value if the field is empty.

      if (isFilled(props) || displayEmpty) {
        if (renderValue) {
          display = renderValue(value);
        } else {
          computeDisplay = true;
        }
      }

      var items = React__default.Children.map(children, function (child) {
        if (!React__default.isValidElement(child)) {
          return null;
        }

        if (process.env.NODE_ENV !== 'production') {
          if (child.type === React__default.Fragment) {
            console.error(["Material-UI: the Select component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
          }
        }

        var selected;

        if (multiple) {
          if (!Array.isArray(value)) {
            throw new Error('Material-UI: the `value` prop must be an array ' + 'when using the `Select` component with `multiple`.');
          }

          selected = value.some(function (v) {
            return areEqualValues(v, child.props.value);
          });

          if (selected && computeDisplay) {
            displayMultiple.push(child.props.children);
          }
        } else {
          selected = areEqualValues(value, child.props.value);

          if (selected && computeDisplay) {
            displaySingle = child.props.children;
          }
        }

        return React__default.cloneElement(child, {
          'aria-selected': selected ? 'true' : undefined,
          onClick: handleItemClick(child),
          role: 'option',
          selected: selected,
          value: undefined,
          // The value is most likely not a valid HTML attribute.
          'data-value': child.props.value // Instead, we provide it as a data attribute.

        });
      });

      if (computeDisplay) {
        display = multiple ? displayMultiple.join(', ') : displaySingle;
      } // Avoid performing a layout computation in the render method.


      var menuMinWidth = menuMinWidthState;

      if (!autoWidth && isOpenControlled && displayRef.current) {
        menuMinWidth = displayRef.current.clientWidth;
      }

      var tabIndex;

      if (typeof tabIndexProp !== 'undefined') {
        tabIndex = tabIndexProp;
      } else {
        tabIndex = disabled ? null : 0;
      }

      return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", _extends({
        className: clsx(classes.root, // TODO v5: merge root and select
        classes.select, classes.selectMenu, classes[variant], className, disabled && classes.disabled),
        ref: displayRef,
        tabIndex: tabIndex,
        role: "button",
        "aria-expanded": open ? 'true' : undefined,
        "aria-haspopup": "listbox",
        "aria-owns": open ? "menu-".concat(name || '') : undefined,
        onKeyDown: handleKeyDown,
        onBlur: handleBlur,
        onClick: disabled || readOnly ? null : handleClick,
        onFocus: onFocus // The id can help with end-to-end testing automation.
        ,
        id: name ? "select-".concat(name) : undefined
      }, SelectDisplayProps), isEmpty(display) ? // eslint-disable-next-line react/no-danger
      React__default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: '&#8203;'
        }
      }) : display), React__default.createElement("input", _extends({
        value: Array.isArray(value) ? value.join(',') : value,
        name: name,
        ref: inputRef,
        type: "hidden",
        autoFocus: autoFocus
      }, other)), React__default.createElement(IconComponent, {
        className: clsx(classes.icon, classes["icon".concat(capitalize(variant))])
      }), React__default.createElement(Menu$1, _extends({
        id: "menu-".concat(name || ''),
        anchorEl: displayRef.current,
        open: open,
        onClose: handleClose
      }, MenuProps, {
        MenuListProps: _extends({
          role: 'listbox',
          disableListWrap: true
        }, MenuProps.MenuListProps),
        PaperProps: _extends({}, MenuProps.PaperProps, {
          style: _extends({
            minWidth: menuMinWidth
          }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
        })
      }), items));
    });
    process.env.NODE_ENV !== "production" ? SelectInput.propTypes = {
      /**
       * @ignore
       */
      autoFocus: propTypes.bool,

      /**
       * If true, the width of the popover will automatically be set according to the items inside the
       * menu, otherwise it will be at least the width of the select input.
       */
      autoWidth: propTypes.bool,

      /**
       * The option elements to populate the select with.
       * Can be some `<MenuItem>` elements.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * The CSS class name of the select element.
       */
      className: propTypes.string,

      /**
       * If `true`, the select will be disabled.
       */
      disabled: propTypes.bool,

      /**
       * If `true`, the selected item is displayed even if its value is empty.
       */
      displayEmpty: propTypes.bool,

      /**
       * The icon that displays the arrow.
       */
      IconComponent: propTypes.elementType.isRequired,

      /**
       * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
       * Equivalent to `ref`
       */
      inputRef: refType,

      /**
       * Props applied to the [`Menu`](/api/menu/) element.
       */
      MenuProps: propTypes.object,

      /**
       * If true, `value` must be an array and the menu will support multiple selections.
       */
      multiple: propTypes.bool,

      /**
       * Name attribute of the `select` or hidden `input` element.
       */
      name: propTypes.string,

      /**
       * @ignore
       */
      onBlur: propTypes.func,

      /**
       * Callback function fired when a menu item is selected.
       *
       * @param {object} event The event source of the callback.
       * You can pull out the new value by accessing `event.target.value` (any).
       * @param {object} [child] The react element that was selected.
       */
      onChange: propTypes.func,

      /**
       * Callback fired when the component requests to be closed.
       * Use in controlled mode (see open).
       *
       * @param {object} event The event source of the callback.
       */
      onClose: propTypes.func,

      /**
       * @ignore
       */
      onFocus: propTypes.func,

      /**
       * Callback fired when the component requests to be opened.
       * Use in controlled mode (see open).
       *
       * @param {object} event The event source of the callback.
       */
      onOpen: propTypes.func,

      /**
       * Control `select` open state.
       */
      open: propTypes.bool,

      /**
       * @ignore
       */
      readOnly: propTypes.bool,

      /**
       * Render the selected value.
       *
       * @param {*} value The `value` provided to the component.
       * @returns {ReactElement}
       */
      renderValue: propTypes.func,

      /**
       * @ignore
       */
      required: propTypes.bool,

      /**
       * Props applied to the clickable div element.
       */
      SelectDisplayProps: propTypes.object,

      /**
       * @ignore
       */
      tabIndex: propTypes.oneOfType([propTypes.number, propTypes.string]),

      /**
       * @ignore
       */
      type: propTypes.any,

      /**
       * The input value.
       */
      value: propTypes.any.isRequired,

      /**
       * The variant to use.
       */
      variant: propTypes.oneOf(['standard', 'outlined', 'filled'])
    } : void 0;

    var styles$k = function styles(theme) {
      return {
        /* Styles applied to the root element. */
        root: {
          userSelect: 'none',
          width: '1em',
          height: '1em',
          display: 'inline-block',
          fill: 'currentColor',
          flexShrink: 0,
          fontSize: theme.typography.pxToRem(24),
          transition: theme.transitions.create('fill', {
            duration: theme.transitions.duration.shorter
          })
        },

        /* Styles applied to the root element if `color="primary"`. */
        colorPrimary: {
          color: theme.palette.primary.main
        },

        /* Styles applied to the root element if `color="secondary"`. */
        colorSecondary: {
          color: theme.palette.secondary.main
        },

        /* Styles applied to the root element if `color="action"`. */
        colorAction: {
          color: theme.palette.action.active
        },

        /* Styles applied to the root element if `color="error"`. */
        colorError: {
          color: theme.palette.error.main
        },

        /* Styles applied to the root element if `color="disabled"`. */
        colorDisabled: {
          color: theme.palette.action.disabled
        },

        /* Styles applied to the root element if `fontSize="inherit"`. */
        fontSizeInherit: {
          fontSize: 'inherit'
        },

        /* Styles applied to the root element if `fontSize="small"`. */
        fontSizeSmall: {
          fontSize: theme.typography.pxToRem(20)
        },

        /* Styles applied to the root element if `fontSize="large"`. */
        fontSizeLarge: {
          fontSize: theme.typography.pxToRem(35)
        }
      };
    };
    var SvgIcon = React__default.forwardRef(function SvgIcon(props, ref) {
      var children = props.children,
          classes = props.classes,
          className = props.className,
          _props$color = props.color,
          color = _props$color === void 0 ? 'inherit' : _props$color,
          _props$component = props.component,
          Component = _props$component === void 0 ? 'svg' : _props$component,
          _props$fontSize = props.fontSize,
          fontSize = _props$fontSize === void 0 ? 'default' : _props$fontSize,
          htmlColor = props.htmlColor,
          titleAccess = props.titleAccess,
          _props$viewBox = props.viewBox,
          viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
          other = _objectWithoutProperties(props, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);

      return React__default.createElement(Component, _extends({
        className: clsx(classes.root, className, color !== 'inherit' && classes["color".concat(capitalize(color))], fontSize !== 'default' && classes["fontSize".concat(capitalize(fontSize))]),
        focusable: "false",
        viewBox: viewBox,
        color: htmlColor,
        "aria-hidden": titleAccess ? 'false' : 'true',
        role: titleAccess ? 'img' : 'presentation',
        ref: ref
      }, other), children, titleAccess ? React__default.createElement("title", null, titleAccess) : null);
    });
    process.env.NODE_ENV !== "production" ? SvgIcon.propTypes = {
      // ----------------------------- Warning --------------------------------
      // | These PropTypes are generated from the TypeScript type definitions |
      // |     To update them edit the d.ts file and run "yarn proptypes"     |
      // ----------------------------------------------------------------------

      /**
       * Node passed into the SVG element.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * The color of the component. It supports those theme colors that make sense for this component.
       * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
       */
      color: propTypes.oneOf(['action', 'disabled', 'error', 'inherit', 'primary', 'secondary']),

      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       */
      component: propTypes.elementType,

      /**
       * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
       */
      fontSize: propTypes.oneOf(['default', 'inherit', 'large', 'small']),

      /**
       * Applies a color attribute to the SVG element.
       */
      htmlColor: propTypes.string,

      /**
       * The shape-rendering attribute. The behavior of the different options is described on the
       * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
       * If you are having issues with blurry icons you should investigate this property.
       */
      shapeRendering: propTypes.string,

      /**
       * Provides a human-readable title for the element that contains it.
       * https://www.w3.org/TR/SVG-access/#Equivalent
       */
      titleAccess: propTypes.string,

      /**
       * Allows you to redefine what the coordinates without units mean inside an SVG element.
       * For example, if the SVG element is 500 (width) by 200 (height),
       * and you pass viewBox="0 0 50 20",
       * this means that the coordinates inside the SVG will go from the top left corner (0,0)
       * to bottom right (50,20) and each unit will be worth 10px.
       */
      viewBox: propTypes.string
    } : void 0;
    SvgIcon.muiName = 'SvgIcon';
    var SvgIcon$1 = withStyles$1(styles$k, {
      name: 'MuiSvgIcon'
    })(SvgIcon);

    function createSvgIcon(path, displayName) {
      var Component = React__default.memo(React__default.forwardRef(function (props, ref) {
        return React__default.createElement(SvgIcon$1, _extends({}, props, {
          ref: ref
        }), path);
      }));

      if (process.env.NODE_ENV !== 'production') {
        Component.displayName = "".concat(displayName, "Icon");
      }

      Component.muiName = SvgIcon$1.muiName;
      return Component;
    }

    /**
     * @ignore - internal component.
     */

    var ArrowDropDownIcon = createSvgIcon(React__default.createElement("path", {
      d: "M7 10l5 5 5-5z"
    }), 'ArrowDropDown');

    /**
     * @ignore - internal component.
     */

    var NativeSelectInput = React__default.forwardRef(function NativeSelectInput(props, ref) {
      var classes = props.classes,
          className = props.className,
          disabled = props.disabled,
          IconComponent = props.IconComponent,
          inputRef = props.inputRef,
          _props$variant = props.variant,
          variant = _props$variant === void 0 ? 'standard' : _props$variant,
          other = _objectWithoutProperties(props, ["classes", "className", "disabled", "IconComponent", "inputRef", "variant"]);

      return React__default.createElement(React__default.Fragment, null, React__default.createElement("select", _extends({
        className: clsx(classes.root, // TODO v5: merge root and select
        classes.select, classes[variant], className, disabled && classes.disabled),
        disabled: disabled,
        ref: inputRef || ref
      }, other)), props.multiple ? null : React__default.createElement(IconComponent, {
        className: clsx(classes.icon, classes["icon".concat(capitalize(variant))])
      }));
    });
    process.env.NODE_ENV !== "production" ? NativeSelectInput.propTypes = {
      /**
       * The option elements to populate the select with.
       * Can be some `<option>` elements.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * The CSS class name of the select element.
       */
      className: propTypes.string,

      /**
       * If `true`, the select will be disabled.
       */
      disabled: propTypes.bool,

      /**
       * The icon that displays the arrow.
       */
      IconComponent: propTypes.elementType,

      /**
       * Use that prop to pass a ref to the native select element.
       * @deprecated
       */
      inputRef: refType,

      /**
       * @ignore
       */
      multiple: propTypes.bool,

      /**
       * Name attribute of the `select` or hidden `input` element.
       */
      name: propTypes.string,

      /**
       * Callback function fired when a menu item is selected.
       *
       * @param {object} event The event source of the callback.
       * You can pull out the new value by accessing `event.target.value` (string).
       */
      onChange: propTypes.func,

      /**
       * The input value.
       */
      value: propTypes.any,

      /**
       * The variant to use.
       */
      variant: propTypes.oneOf(['standard', 'outlined', 'filled'])
    } : void 0;

    var styles$l = function styles(theme) {
      return {
        /* Styles applied to the select component `root` class. */
        root: {},

        /* Styles applied to the select component `select` class. */
        select: {
          '-moz-appearance': 'none',
          // Reset
          '-webkit-appearance': 'none',
          // Reset
          // When interacting quickly, the text can end up selected.
          // Native select can't be selected either.
          userSelect: 'none',
          borderRadius: 0,
          // Reset
          minWidth: 16,
          // So it doesn't collapse.
          cursor: 'pointer',
          '&:focus': {
            // Show that it's not an text input
            backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
            borderRadius: 0 // Reset Chrome style

          },
          // Remove IE 11 arrow
          '&::-ms-expand': {
            display: 'none'
          },
          '&$disabled': {
            cursor: 'default'
          },
          '&[multiple]': {
            height: 'auto'
          },
          '&:not([multiple]) option, &:not([multiple]) optgroup': {
            backgroundColor: theme.palette.background.paper
          }
        },

        /* Styles applied to the select component if `variant="filled"`. */
        filled: {},

        /* Styles applied to the select component if `variant="outlined"`. */
        outlined: {
          borderRadius: theme.shape.borderRadius
        },

        /* Styles applied to the select component `selectMenu` class. */
        selectMenu: {
          height: 'auto',
          // Reset
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        },

        /* Pseudo-class applied to the select component `disabled` class. */
        disabled: {},

        /* Styles applied to the icon component. */
        icon: {
          // We use a position absolute over a flexbox in order to forward the pointer events
          // to the input.
          position: 'absolute',
          right: 0,
          top: 'calc(50% - 12px)',
          // Center vertically
          color: theme.palette.action.active,
          pointerEvents: 'none' // Don't block pointer events on the select under the icon.

        },

        /* Styles applied to the icon component if `variant="filled"`. */
        iconFilled: {
          right: 7
        },

        /* Styles applied to the icon component if `variant="outlined"`. */
        iconOutlined: {
          right: 7
        }
      };
    };
    var defaultInput = React__default.createElement(Input$1, null);
    /**
     * An alternative to `<Select native />` with a much smaller bundle size footprint.
     */

    var NativeSelect = React__default.forwardRef(function NativeSelect(props, ref) {
      var children = props.children,
          classes = props.classes,
          _props$IconComponent = props.IconComponent,
          IconComponent = _props$IconComponent === void 0 ? ArrowDropDownIcon : _props$IconComponent,
          _props$input = props.input,
          input = _props$input === void 0 ? defaultInput : _props$input,
          inputProps = props.inputProps,
          variant = props.variant,
          other = _objectWithoutProperties(props, ["children", "classes", "IconComponent", "input", "inputProps", "variant"]);

      var muiFormControl = useFormControl$1();
      var fcs = formControlState({
        props: props,
        muiFormControl: muiFormControl,
        states: ['variant']
      });
      return React__default.cloneElement(input, _extends({
        // Most of the logic is implemented in `NativeSelectInput`.
        // The `Select` component is a simple API wrapper to expose something better to play with.
        inputComponent: NativeSelectInput,
        select: true,
        inputProps: _extends({
          children: children,
          classes: classes,
          IconComponent: IconComponent,
          variant: fcs.variant,
          type: undefined
        }, inputProps, {}, input ? input.props.inputProps : {}),
        ref: ref
      }, other));
    });
    process.env.NODE_ENV !== "production" ? NativeSelect.propTypes = {
      /**
       * The option elements to populate the select with.
       * Can be some `<option>` elements.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * The icon that displays the arrow.
       */
      IconComponent: propTypes.elementType,

      /**
       * An `Input` element; does not have to be a material-ui specific `Input`.
       */
      input: propTypes.element,

      /**
       * Attributes applied to the `select` element.
       */
      inputProps: propTypes.object,

      /**
       * Callback function fired when a menu item is selected.
       *
       * @param {object} event The event source of the callback.
       * You can pull out the new value by accessing `event.target.value` (string).
       */
      onChange: propTypes.func,

      /**
       * The input value. The DOM API casts this to a string.
       */
      value: propTypes.any,

      /**
       * The variant to use.
       */
      variant: propTypes.oneOf(['standard', 'outlined', 'filled'])
    } : void 0;
    NativeSelect.muiName = 'Select';
    withStyles$1(styles$l, {
      name: 'MuiNativeSelect'
    })(NativeSelect);

    var styles$m = styles$l;

    var _ref = React__default.createElement(Input$1, null);

    var _ref2 = React__default.createElement(FilledInput$1, null);

    var Select = React__default.forwardRef(function Select(props, ref) {
      var _props$autoWidth = props.autoWidth,
          autoWidth = _props$autoWidth === void 0 ? false : _props$autoWidth,
          children = props.children,
          classes = props.classes,
          _props$displayEmpty = props.displayEmpty,
          displayEmpty = _props$displayEmpty === void 0 ? false : _props$displayEmpty,
          _props$IconComponent = props.IconComponent,
          IconComponent = _props$IconComponent === void 0 ? ArrowDropDownIcon : _props$IconComponent,
          input = props.input,
          inputProps = props.inputProps,
          MenuProps = props.MenuProps,
          _props$multiple = props.multiple,
          multiple = _props$multiple === void 0 ? false : _props$multiple,
          _props$native = props.native,
          native = _props$native === void 0 ? false : _props$native,
          onClose = props.onClose,
          onOpen = props.onOpen,
          open = props.open,
          renderValue = props.renderValue,
          SelectDisplayProps = props.SelectDisplayProps,
          _props$variant = props.variant,
          variantProps = _props$variant === void 0 ? 'standard' : _props$variant,
          _props$labelWidth = props.labelWidth,
          labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
          other = _objectWithoutProperties(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "input", "inputProps", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant", "labelWidth"]);

      var inputComponent = native ? NativeSelectInput : SelectInput;
      var muiFormControl = useFormControl$1();
      var fcs = formControlState({
        props: props,
        muiFormControl: muiFormControl,
        states: ['variant']
      });
      var variant = fcs.variant || variantProps;
      var InputComponent = input || {
        standard: _ref,
        outlined: React__default.createElement(OutlinedInput$1, {
          labelWidth: labelWidth
        }),
        filled: _ref2
      }[variant];
      return React__default.cloneElement(InputComponent, _extends({
        // Most of the logic is implemented in `SelectInput`.
        // The `Select` component is a simple API wrapper to expose something better to play with.
        inputComponent: inputComponent,
        select: true,
        inputProps: _extends({
          children: children,
          IconComponent: IconComponent,
          variant: variant,
          type: undefined,
          // We render a select. We can ignore the type provided by the `Input`.
          multiple: multiple
        }, native ? {} : {
          autoWidth: autoWidth,
          displayEmpty: displayEmpty,
          MenuProps: MenuProps,
          onClose: onClose,
          onOpen: onOpen,
          open: open,
          renderValue: renderValue,
          SelectDisplayProps: SelectDisplayProps
        }, {}, inputProps, {
          classes: inputProps ? mergeClasses({
            baseClasses: classes,
            newClasses: inputProps.classes,
            Component: Select
          }) : classes
        }, input ? input.props.inputProps : {}),
        ref: ref
      }, other));
    });
    process.env.NODE_ENV !== "production" ? Select.propTypes = {
      /**
       * If true, the width of the popover will automatically be set according to the items inside the
       * menu, otherwise it will be at least the width of the select input.
       */
      autoWidth: propTypes.bool,

      /**
       * The option elements to populate the select with.
       * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
       *
       * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * If `true`, a value is displayed even if no items are selected.
       *
       * In order to display a meaningful value, a function should be passed to the `renderValue` prop which returns the value to be displayed when no items are selected.
       * You can only use it when the `native` prop is `false` (default).
       */
      displayEmpty: propTypes.bool,

      /**
       * The icon that displays the arrow.
       */
      IconComponent: propTypes.elementType,

      /**
       * An `Input` element; does not have to be a material-ui specific `Input`.
       */
      input: propTypes.element,

      /**
       * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
       * When `native` is `true`, the attributes are applied on the `select` element.
       */
      inputProps: propTypes.object,

      /**
       * The label width to be used on OutlinedInput.
       * This prop is required when the `variant` prop is `outlined`.
       */
      labelWidth: propTypes.number,

      /**
       * Props applied to the [`Menu`](/api/menu/) element.
       */
      MenuProps: propTypes.object,

      /**
       * If true, `value` must be an array and the menu will support multiple selections.
       */
      multiple: propTypes.bool,

      /**
       * If `true`, the component will be using a native `select` element.
       */
      native: propTypes.bool,

      /**
       * Callback function fired when a menu item is selected.
       *
       * @param {object} event The event source of the callback.
       * You can pull out the new value by accessing `event.target.value` (any).
       * @param {object} [child] The react element that was selected when `native` is `false` (default).
       */
      onChange: propTypes.func,

      /**
       * Callback fired when the component requests to be closed.
       * Use in controlled mode (see open).
       *
       * @param {object} event The event source of the callback.
       */
      onClose: propTypes.func,

      /**
       * Callback fired when the component requests to be opened.
       * Use in controlled mode (see open).
       *
       * @param {object} event The event source of the callback.
       */
      onOpen: propTypes.func,

      /**
       * Control `select` open state.
       * You can only use it when the `native` prop is `false` (default).
       */
      open: propTypes.bool,

      /**
       * Render the selected value.
       * You can only use it when the `native` prop is `false` (default).
       *
       * @param {*} value The `value` provided to the component.
       * @returns {ReactElement}
       */
      renderValue: propTypes.func,

      /**
       * Props applied to the clickable div element.
       */
      SelectDisplayProps: propTypes.object,

      /**
       * The input value.
       * This prop is required when the `native` prop is `false` (default).
       */
      value: propTypes.any,

      /**
       * The variant to use.
       */
      variant: propTypes.oneOf(['standard', 'outlined', 'filled'])
    } : void 0;
    Select.muiName = 'Select';
    var Select$1 = withStyles$1(styles$m, {
      name: 'MuiSelect'
    })(Select);

    var variantComponent = {
      standard: Input$1,
      filled: FilledInput$1,
      outlined: OutlinedInput$1
    };
    var styles$n = {
      /* Styles applied to the root element. */
      root: {}
    };
    /**
     * The `TextField` is a convenience wrapper for the most common cases (80%).
     * It cannot be all things to all people, otherwise the API would grow out of control.
     *
     * ## Advanced Configuration
     *
     * It's important to understand that the text field is a simple abstraction
     * on top of the following components:
     *
     * - [FormControl](/api/form-control/)
     * - [InputLabel](/api/input-label/)
     * - [FilledInput](/api/filled-input/)
     * - [OutlinedInput](/api/outlined-input/)
     * - [Input](/api/input/)
     * - [FormHelperText](/api/form-helper-text/)
     *
     * If you wish to alter the props applied to the `input` element, you can do so as follows:
     *
     * ```jsx
     * const inputProps = {
     *   step: 300,
     * };
     *
     * return <TextField id="time" type="time" inputProps={inputProps} />;
     * ```
     *
     * For advanced cases, please look at the source of TextField by clicking on the
     * "Edit this page" button above. Consider either:
     *
     * - using the upper case props for passing values directly to the components
     * - using the underlying components directly as shown in the demos
     */

    var TextField = React__default.forwardRef(function TextField(props, ref) {
      var autoComplete = props.autoComplete,
          autoFocus = props.autoFocus,
          children = props.children,
          classes = props.classes,
          classNameProp = props.className,
          defaultValue = props.defaultValue,
          error = props.error,
          FormHelperTextProps = props.FormHelperTextProps,
          fullWidth = props.fullWidth,
          helperText = props.helperText,
          hiddenLabel = props.hiddenLabel,
          id = props.id,
          InputLabelProps = props.InputLabelProps,
          inputProps = props.inputProps,
          InputProps = props.InputProps,
          inputRef = props.inputRef,
          label = props.label,
          multiline = props.multiline,
          name = props.name,
          onBlur = props.onBlur,
          onChange = props.onChange,
          onFocus = props.onFocus,
          placeholder = props.placeholder,
          _props$required = props.required,
          required = _props$required === void 0 ? false : _props$required,
          rows = props.rows,
          rowsMax = props.rowsMax,
          _props$select = props.select,
          select = _props$select === void 0 ? false : _props$select,
          SelectProps = props.SelectProps,
          type = props.type,
          value = props.value,
          _props$variant = props.variant,
          variant = _props$variant === void 0 ? 'standard' : _props$variant,
          other = _objectWithoutProperties(props, ["autoComplete", "autoFocus", "children", "classes", "className", "defaultValue", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "variant"]);

      var _React$useState = React__default.useState(0),
          labelWidth = _React$useState[0],
          setLabelWidth = _React$useState[1];

      var labelRef = React__default.useRef(null);
      React__default.useEffect(function () {
        if (variant === 'outlined') {
          // #StrictMode ready
          var labelNode = ReactDOM.findDOMNode(labelRef.current);
          setLabelWidth(labelNode != null ? labelNode.offsetWidth : 0);
        }
      }, [variant, required, label]);

      if (process.env.NODE_ENV !== 'production') {
        if (select && !children) {
          console.error('Material-UI: `children` must be passed when using the `TextField` component with `select`.');
        }
      }

      var InputMore = {};

      if (variant === 'outlined') {
        if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
          InputMore.notched = InputLabelProps.shrink;
        }

        InputMore.labelWidth = labelWidth;
      }

      var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
      var InputComponent = variantComponent[variant];
      var InputElement = React__default.createElement(InputComponent, _extends({
        "aria-describedby": helperTextId,
        autoComplete: autoComplete,
        autoFocus: autoFocus,
        defaultValue: defaultValue,
        fullWidth: fullWidth,
        multiline: multiline,
        name: name,
        rows: rows,
        rowsMax: rowsMax,
        type: type,
        value: value,
        id: id,
        inputRef: inputRef,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        placeholder: placeholder,
        inputProps: inputProps
      }, InputMore, InputProps));
      return React__default.createElement(FormControl$1, _extends({
        className: clsx(classes.root, classNameProp),
        error: error,
        fullWidth: fullWidth,
        hiddenLabel: hiddenLabel,
        ref: ref,
        required: required,
        variant: variant
      }, other), label && React__default.createElement(InputLabel$1, _extends({
        htmlFor: id,
        ref: labelRef
      }, InputLabelProps), label), select ? React__default.createElement(Select$1, _extends({
        "aria-describedby": helperTextId,
        value: value,
        input: InputElement
      }, SelectProps), children) : InputElement, helperText && React__default.createElement(FormHelperText$1, _extends({
        id: helperTextId
      }, FormHelperTextProps), helperText));
    });
    process.env.NODE_ENV !== "production" ? TextField.propTypes = {
      /**
       * This prop helps users to fill forms faster, especially on mobile devices.
       * The name can be confusing, as it's more like an autofill.
       * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
       */
      autoComplete: propTypes.string,

      /**
       * If `true`, the `input` element will be focused during the first mount.
       */
      autoFocus: propTypes.bool,

      /**
       * @ignore
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * The default value of the `input` element.
       */
      defaultValue: propTypes.any,

      /**
       * If `true`, the `input` element will be disabled.
       */
      disabled: propTypes.bool,

      /**
       * If `true`, the label will be displayed in an error state.
       */
      error: propTypes.bool,

      /**
       * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
       */
      FormHelperTextProps: propTypes.object,

      /**
       * If `true`, the input will take up the full width of its container.
       */
      fullWidth: propTypes.bool,

      /**
       * The helper text content.
       */
      helperText: propTypes.node,

      /**
       * @ignore
       */
      hiddenLabel: propTypes.bool,

      /**
       * The id of the `input` element.
       * Use this prop to make `label` and `helperText` accessible for screen readers.
       */
      id: propTypes.string,

      /**
       * Props applied to the [`InputLabel`](/api/input-label/) element.
       */
      InputLabelProps: propTypes.object,

      /**
       * Props applied to the Input element.
       * It will be a [`FilledInput`](/api/filled-input/),
       * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
       * component depending on the `variant` prop value.
       */
      InputProps: propTypes.object,

      /**
       * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
       */
      inputProps: propTypes.object,

      /**
       * Pass a ref to the `input` element.
       */
      inputRef: refType,

      /**
       * The label content.
       */
      label: propTypes.node,

      /**
       * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
       */
      margin: propTypes.oneOf(['none', 'dense', 'normal']),

      /**
       * If `true`, a textarea element will be rendered instead of an input.
       */
      multiline: propTypes.bool,

      /**
       * Name attribute of the `input` element.
       */
      name: propTypes.string,

      /**
       * @ignore
       */
      onBlur: propTypes.func,

      /**
       * Callback fired when the value is changed.
       *
       * @param {object} event The event source of the callback.
       * You can pull out the new value by accessing `event.target.value` (string).
       */
      onChange: propTypes.func,

      /**
       * @ignore
       */
      onFocus: propTypes.func,

      /**
       * The short hint displayed in the input before the user enters a value.
       */
      placeholder: propTypes.string,

      /**
       * If `true`, the label is displayed as required and the `input` element` will be required.
       */
      required: propTypes.bool,

      /**
       * Number of rows to display when multiline option is set to true.
       */
      rows: propTypes.oneOfType([propTypes.string, propTypes.number]),

      /**
       * Maximum number of rows to display when multiline option is set to true.
       */
      rowsMax: propTypes.oneOfType([propTypes.string, propTypes.number]),

      /**
       * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
       * If this option is set you must pass the options of the select as children.
       */
      select: propTypes.bool,

      /**
       * Props applied to the [`Select`](/api/select/) element.
       */
      SelectProps: propTypes.object,

      /**
       * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
       */
      type: propTypes.string,

      /**
       * The value of the `input` element, required for a controlled component.
       */
      value: propTypes.any,

      /**
       * The variant to use.
       */
      variant: propTypes.oneOf(['standard', 'outlined', 'filled'])
    } : void 0;
    var TextField$1 = withStyles$1(styles$n, {
      name: 'MuiTextField'
    })(TextField);

    var css$9 = ".MuiOutlinedInput-root {\n    background-color: #ffffff;\n}\n";
    styleInject(css$9);

    var InputField = function (props) {
        var className = props.className, ref = props.ref, validationState = props.validationState, validationMessage = props.validationMessage, validationMessageFormatter = props.validationMessageFormatter, rest = __rest(props, ["className", "ref", "validationState", "validationMessage", "validationMessageFormatter"]);
        // preserve given class value/s by tacking them onto our guaranteed class/s
        var givenClasses = getAppendAttributeValues(props.className);
        var optionalProps = {};
        if (validationState === "Error") {
            optionalProps.error = true;
            optionalProps.helperText =
                React__default.createElement("span", { "data-qa-element": "field-validation-error" }, validationMessage);
        }
        else if (validationState === "Warning") {
            var vMsg = validationMessage || "???"; // just a fail-safe
            var vMsgElement = vMsg;
            if (validationMessageFormatter) {
                vMsgElement = validationMessageFormatter(vMsg);
            }
            optionalProps.helperText =
                React__default.createElement("span", { "data-qa-element": "field-validation-warning" }, vMsgElement);
        }
        return (React__default.createElement(TextField$1, __assign({ variant: "outlined", margin: "dense", ref: ref, className: givenClasses }, optionalProps, rest)));
    };

    var css$a = ".input-field-row {\n    padding: 12px;\n    box-sizing: content-box;\n}";
    styleInject(css$a);

    var InputFieldRow = function (props) {
        var className = props.className, children = props.children, rest = __rest(props, ["className", "children"]);
        // preserve given class value/s by tacking them onto our guaranteed class/s
        var givenClasses = getAppendAttributeValues(props.className);
        return (React__default.createElement("div", __assign({ className: "input-field-row" + givenClasses }, rest), children));
    };

    var styles$o = function styles(theme) {
      return {
        /* Styles applied to the root element. */
        root: {
          margin: 0
        },

        /* Styles applied to the root element if `variant="body2"`. */
        body2: theme.typography.body2,

        /* Styles applied to the root element if `variant="body1"`. */
        body1: theme.typography.body1,

        /* Styles applied to the root element if `variant="caption"`. */
        caption: theme.typography.caption,

        /* Styles applied to the root element if `variant="button"`. */
        button: theme.typography.button,

        /* Styles applied to the root element if `variant="h1"`. */
        h1: theme.typography.h1,

        /* Styles applied to the root element if `variant="h2"`. */
        h2: theme.typography.h2,

        /* Styles applied to the root element if `variant="h3"`. */
        h3: theme.typography.h3,

        /* Styles applied to the root element if `variant="h4"`. */
        h4: theme.typography.h4,

        /* Styles applied to the root element if `variant="h5"`. */
        h5: theme.typography.h5,

        /* Styles applied to the root element if `variant="h6"`. */
        h6: theme.typography.h6,

        /* Styles applied to the root element if `variant="subtitle1"`. */
        subtitle1: theme.typography.subtitle1,

        /* Styles applied to the root element if `variant="subtitle2"`. */
        subtitle2: theme.typography.subtitle2,

        /* Styles applied to the root element if `variant="overline"`. */
        overline: theme.typography.overline,

        /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
        srOnly: {
          position: 'absolute',
          height: 1,
          width: 1,
          overflow: 'hidden'
        },

        /* Styles applied to the root element if `align="left"`. */
        alignLeft: {
          textAlign: 'left'
        },

        /* Styles applied to the root element if `align="center"`. */
        alignCenter: {
          textAlign: 'center'
        },

        /* Styles applied to the root element if `align="right"`. */
        alignRight: {
          textAlign: 'right'
        },

        /* Styles applied to the root element if `align="justify"`. */
        alignJustify: {
          textAlign: 'justify'
        },

        /* Styles applied to the root element if `nowrap={true}`. */
        noWrap: {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        },

        /* Styles applied to the root element if `gutterBottom={true}`. */
        gutterBottom: {
          marginBottom: '0.35em'
        },

        /* Styles applied to the root element if `paragraph={true}`. */
        paragraph: {
          marginBottom: 16
        },

        /* Styles applied to the root element if `color="inherit"`. */
        colorInherit: {
          color: 'inherit'
        },

        /* Styles applied to the root element if `color="primary"`. */
        colorPrimary: {
          color: theme.palette.primary.main
        },

        /* Styles applied to the root element if `color="secondary"`. */
        colorSecondary: {
          color: theme.palette.secondary.main
        },

        /* Styles applied to the root element if `color="textPrimary"`. */
        colorTextPrimary: {
          color: theme.palette.text.primary
        },

        /* Styles applied to the root element if `color="textSecondary"`. */
        colorTextSecondary: {
          color: theme.palette.text.secondary
        },

        /* Styles applied to the root element if `color="error"`. */
        colorError: {
          color: theme.palette.error.main
        },

        /* Styles applied to the root element if `display="inline"`. */
        displayInline: {
          display: 'inline'
        },

        /* Styles applied to the root element if `display="block"`. */
        displayBlock: {
          display: 'block'
        }
      };
    };
    var defaultVariantMapping = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      subtitle1: 'h6',
      subtitle2: 'h6',
      body1: 'p',
      body2: 'p'
    };
    var Typography = React__default.forwardRef(function Typography(props, ref) {
      var _props$align = props.align,
          align = _props$align === void 0 ? 'inherit' : _props$align,
          classes = props.classes,
          className = props.className,
          _props$color = props.color,
          color = _props$color === void 0 ? 'initial' : _props$color,
          component = props.component,
          _props$display = props.display,
          display = _props$display === void 0 ? 'initial' : _props$display,
          _props$gutterBottom = props.gutterBottom,
          gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
          _props$noWrap = props.noWrap,
          noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
          _props$paragraph = props.paragraph,
          paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
          _props$variant = props.variant,
          variant = _props$variant === void 0 ? 'body1' : _props$variant,
          _props$variantMapping = props.variantMapping,
          variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
          other = _objectWithoutProperties(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

      var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
      return React__default.createElement(Component, _extends({
        className: clsx(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes["color".concat(capitalize(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat(capitalize(align))], display !== 'initial' && classes["display".concat(capitalize(display))]),
        ref: ref
      }, other));
    });
    process.env.NODE_ENV !== "production" ? Typography.propTypes = {
      /**
       * Set the text-align on the component.
       */
      align: propTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),

      /**
       * The content of the component.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * The color of the component. It supports those theme colors that make sense for this component.
       */
      color: propTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),

      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       * By default, it maps the variant to a good default headline component.
       */
      component: propTypes.elementType,

      /**
       * Controls the display type
       */
      display: propTypes.oneOf(['initial', 'block', 'inline']),

      /**
       * If `true`, the text will have a bottom margin.
       */
      gutterBottom: propTypes.bool,

      /**
       * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
       *
       * Note that text overflow can only happen with block or inline-block level elements
       * (the element needs to have a width in order to overflow).
       */
      noWrap: propTypes.bool,

      /**
       * If `true`, the text will have a bottom margin.
       */
      paragraph: propTypes.bool,

      /**
       * Applies the theme typography styles.
       */
      variant: propTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit']),

      /**
       * We are empirically mapping the variant prop to a range of different DOM element types.
       * For instance, subtitle1 to `<h6>`.
       * If you wish to change that mapping, you can provide your own.
       * Alternatively, you can use the `component` prop.
       */
      variantMapping: propTypes.object
    } : void 0;
    var Typography$1 = withStyles$1(styles$o, {
      name: 'MuiTypography'
    })(Typography);

    var styles$p = function styles(theme) {
      return {
        /* Styles applied to the root element. */
        root: {
          display: 'inline-flex',
          alignItems: 'center',
          cursor: 'pointer',
          // For correct alignment with the text.
          verticalAlign: 'middle',
          // Remove grey highlight
          WebkitTapHighlightColor: 'transparent',
          marginLeft: -11,
          marginRight: 16,
          // used for row presentation of radio/checkbox
          '&$disabled': {
            cursor: 'default'
          }
        },

        /* Styles applied to the root element if `labelPlacement="start"`. */
        labelPlacementStart: {
          flexDirection: 'row-reverse',
          marginLeft: 16,
          // used for row presentation of radio/checkbox
          marginRight: -11
        },

        /* Styles applied to the root element if `labelPlacement="top"`. */
        labelPlacementTop: {
          flexDirection: 'column-reverse',
          marginLeft: 16
        },

        /* Styles applied to the root element if `labelPlacement="bottom"`. */
        labelPlacementBottom: {
          flexDirection: 'column',
          marginLeft: 16
        },

        /* Pseudo-class applied to the root element if `disabled={true}`. */
        disabled: {},

        /* Styles applied to the label's Typography component. */
        label: {
          '&$disabled': {
            color: theme.palette.text.disabled
          }
        }
      };
    };
    /**
     * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
     * Use this component if you want to display an extra label.
     */

    var FormControlLabel = React__default.forwardRef(function FormControlLabel(props, ref) {
      var checked = props.checked,
          classes = props.classes,
          classNameProp = props.className,
          control = props.control,
          disabledProp = props.disabled,
          inputRef = props.inputRef,
          label = props.label,
          _props$labelPlacement = props.labelPlacement,
          labelPlacement = _props$labelPlacement === void 0 ? 'end' : _props$labelPlacement,
          name = props.name,
          onChange = props.onChange,
          value = props.value,
          other = _objectWithoutProperties(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);

      var muiFormControl = useFormControl$1();
      var disabled = disabledProp;

      if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
        disabled = control.props.disabled;
      }

      if (typeof disabled === 'undefined' && muiFormControl) {
        disabled = muiFormControl.disabled;
      }

      var controlProps = {
        disabled: disabled
      };
      ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(function (key) {
        if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
          controlProps[key] = props[key];
        }
      });
      return React__default.createElement("label", _extends({
        className: clsx(classes.root, classNameProp, labelPlacement !== 'end' && classes["labelPlacement".concat(capitalize(labelPlacement))], disabled && classes.disabled),
        ref: ref
      }, other), React__default.cloneElement(control, controlProps), React__default.createElement(Typography$1, {
        component: "span",
        className: clsx(classes.label, disabled && classes.disabled)
      }, label));
    });
    process.env.NODE_ENV !== "production" ? FormControlLabel.propTypes = {
      /**
       * If `true`, the component appears selected.
       */
      checked: propTypes.bool,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
       */
      control: propTypes.element,

      /**
       * If `true`, the control will be disabled.
       */
      disabled: propTypes.bool,

      /**
       * Pass a ref to the `input` element.
       */
      inputRef: refType,

      /**
       * The text to be used in an enclosing label element.
       */
      label: propTypes.node,

      /**
       * The position of the label.
       */
      labelPlacement: propTypes.oneOf(['end', 'start', 'top', 'bottom']),

      /*
       * @ignore
       */
      name: propTypes.string,

      /**
       * Callback fired when the state is changed.
       *
       * @param {object} event The event source of the callback.
       * You can pull out the new checked state by accessing `event.target.checked` (boolean).
       */
      onChange: propTypes.func,

      /**
       * The value of the component.
       */
      value: propTypes.any
    } : void 0;
    var FormControlLabel$1 = withStyles$1(styles$p, {
      name: 'MuiFormControlLabel'
    })(FormControlLabel);

    var css$b = ".input-label {\n    color: #555555;\n    height: 28px;\n    line-height: 22px;\n    padding: 4px 6px;\n    font-size: 14px;\n    vertical-align: middle;\n}";
    styleInject(css$b);

    var InputLabel$2 = function (props) {
        var className = props.className, control = props.control, label = props.label, rest = __rest(props, ["className", "control", "label"]);
        // preserve given class value/s by tacking them onto our guaranteed class/s
        var givenClasses = getAppendAttributeValues(props.className);
        return (React__default.createElement(FormControlLabel$1, __assign({ className: "input-label" + givenClasses, control: control, label: label }, rest)));
    };

    var css$c = ".disable-overlay-wrapper {\n    position: relative;\n}\n\n.disable-overlay-wrapper .disable-overlay {\n    display: none;\n    background-color: white;\n    opacity: 0.7;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.disable-overlay-wrapper .loading-overlay {\n    position: absolute;\n    top: 0;\n    bottom: 50px;\n    left: 0;\n    right: 0;\n    display: none; /* will be flex when visible */\n    justify-content: center;\n    align-items: center;\n}\n\n.disable-overlay-wrapper .loading-overlay .disable-msg {\n    background-color: white;\n    box-shadow: 0 0 5px white;\n    opacity: 1.0;\n    padding: 15px 30px;\n}\n\n.disable-overlay-wrapper.is-loading .disable-overlay {\n    display: block;\n}\n.disable-overlay-wrapper.is-loading .loading-overlay {\n    display: flex;\n}\n\n.disable-overlay-wrapper .loading-overlay .disable-msg .progress-circle {\n    padding: 8px;\n    text-align: center;\n}\n";
    styleInject(css$c);

    var LoadingOverlay = function (props) {
        var isLoading = props.isLoading, children = props.children, i18n = props.i18n;
        var isLoadingClass = (isLoading) ? " is-loading" : "";
        return (React__default.createElement("div", { className: "disable-overlay-wrapper" + isLoadingClass, "data-qa-element": "loading-overlay", "data-qa-loading-enabled": isLoading },
            children,
            React__default.createElement("div", { className: "disable-overlay" }),
            React__default.createElement("div", { className: "loading-overlay" },
                React__default.createElement("div", { className: "disable-msg" },
                    React__default.createElement("div", { className: "progress-circle" },
                        React__default.createElement(core.CircularProgress, null)),
                    i18n.loadingPleaseWaitTemplate ? i18n.loadingPleaseWaitTemplate : "Please Wait..."))));
    };

    var responsivePropType = process.env.NODE_ENV !== 'production' ? propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.object, propTypes.array]) : {};

    function merge(acc, item) {
      if (!item) {
        return acc;
      }

      return cjs(acc, item, {
        clone: false // No need to clone deep, it's way faster.

      });
    }

    // For instance with the first breakpoint xs: [xs, sm[.

    var values$1 = {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    };
    var defaultBreakpoints = {
      // Sorted ASC by size. That's important.
      // It can't be configured as it's used statically for propTypes.
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      up: function up(key) {
        return "@media (min-width:".concat(values$1[key], "px)");
      }
    };
    function handleBreakpoints(props, propValue, styleFromPropValue) {
      if (process.env.NODE_ENV !== 'production') {
        if (!props.theme) {
          console.error('@material-ui/system: you are calling a style function without a theme value.');
        }
      }

      if (Array.isArray(propValue)) {
        var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
        return propValue.reduce(function (acc, item, index) {
          acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
          return acc;
        }, {});
      }

      if (_typeof(propValue) === 'object') {
        var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;

        return Object.keys(propValue).reduce(function (acc, breakpoint) {
          acc[_themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
          return acc;
        }, {});
      }

      var output = styleFromPropValue(propValue);
      return output;
    }

    function getPath(obj, path) {
      if (!path || typeof path !== 'string') {
        return null;
      }

      return path.split('.').reduce(function (acc, item) {
        return acc && acc[item] ? acc[item] : null;
      }, obj);
    }

    function style$1(options) {
      var prop = options.prop,
          _options$cssProperty = options.cssProperty,
          cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty,
          themeKey = options.themeKey,
          transform = options.transform;

      var fn = function fn(props) {
        if (props[prop] == null) {
          return null;
        }

        var propValue = props[prop];
        var theme = props.theme;
        var themeMapping = getPath(theme, themeKey) || {};

        var styleFromPropValue = function styleFromPropValue(propValueFinal) {
          var value;

          if (typeof themeMapping === 'function') {
            value = themeMapping(propValueFinal);
          } else if (Array.isArray(themeMapping)) {
            value = themeMapping[propValueFinal];
          } else {
            value = getPath(themeMapping, propValueFinal) || propValueFinal;

            if (transform) {
              value = transform(value);
            }
          }

          if (cssProperty === false) {
            return value;
          }

          return _defineProperty({}, cssProperty, value);
        };

        return handleBreakpoints(props, propValue, styleFromPropValue);
      };

      fn.propTypes = process.env.NODE_ENV !== 'production' ? _defineProperty({}, prop, responsivePropType) : {};
      fn.filterProps = [prop];
      return fn;
    }

    function compose() {
      for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
      }

      var fn = function fn(props) {
        return styles.reduce(function (acc, style) {
          var output = style(props);

          if (output) {
            return merge(acc, output);
          }

          return acc;
        }, {});
      }; // Alternative approach that doesn't yield any performance gain.
      // const handlers = styles.reduce((acc, style) => {
      //   style.filterProps.forEach(prop => {
      //     acc[prop] = style;
      //   });
      //   return acc;
      // }, {});
      // const fn = props => {
      //   return Object.keys(props).reduce((acc, prop) => {
      //     if (handlers[prop]) {
      //       return merge(acc, handlers[prop](props));
      //     }
      //     return acc;
      //   }, {});
      // };


      fn.propTypes = process.env.NODE_ENV !== 'production' ? styles.reduce(function (acc, style) {
        return _extends(acc, style.propTypes);
      }, {}) : {};
      fn.filterProps = styles.reduce(function (acc, style) {
        return acc.concat(style.filterProps);
      }, []);
      return fn;
    }

    function getBorder(value) {
      if (typeof value !== 'number') {
        return value;
      }

      return "".concat(value, "px solid");
    }

    var border = style$1({
      prop: 'border',
      themeKey: 'borders',
      transform: getBorder
    });
    var borderTop = style$1({
      prop: 'borderTop',
      themeKey: 'borders',
      transform: getBorder
    });
    var borderRight = style$1({
      prop: 'borderRight',
      themeKey: 'borders',
      transform: getBorder
    });
    var borderBottom = style$1({
      prop: 'borderBottom',
      themeKey: 'borders',
      transform: getBorder
    });
    var borderLeft = style$1({
      prop: 'borderLeft',
      themeKey: 'borders',
      transform: getBorder
    });
    var borderColor = style$1({
      prop: 'borderColor',
      themeKey: 'palette'
    });
    var borderRadius = style$1({
      prop: 'borderRadius',
      themeKey: 'shape'
    });
    var borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);

    function omit$1(input, fields) {
      var output = {};
      Object.keys(input).forEach(function (prop) {
        if (fields.indexOf(prop) === -1) {
          output[prop] = input[prop];
        }
      });
      return output;
    }

    function css$d(styleFunction) {
      var newStyleFunction = function newStyleFunction(props) {
        var output = styleFunction(props);

        if (props.css) {
          return _extends({}, merge(output, styleFunction(_extends({
            theme: props.theme
          }, props.css))), {}, omit$1(props.css, [styleFunction.filterProps]));
        }

        return output;
      };

      newStyleFunction.propTypes = process.env.NODE_ENV !== 'production' ? _extends({}, styleFunction.propTypes, {
        css: propTypes.object
      }) : {};
      newStyleFunction.filterProps = ['css'].concat(_toConsumableArray(styleFunction.filterProps));
      return newStyleFunction;
    }

    var displayPrint = style$1({
      prop: 'displayPrint',
      cssProperty: false,
      transform: function transform(value) {
        return {
          '@media print': {
            display: value
          }
        };
      }
    });
    var displayRaw = style$1({
      prop: 'display'
    });
    var overflow = style$1({
      prop: 'overflow'
    });
    var textOverflow = style$1({
      prop: 'textOverflow'
    });
    var visibility = style$1({
      prop: 'visibility'
    });
    var whiteSpace = style$1({
      prop: 'whiteSpace'
    });
    var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

    var flexBasis = style$1({
      prop: 'flexBasis'
    });
    var flexDirection = style$1({
      prop: 'flexDirection'
    });
    var flexWrap = style$1({
      prop: 'flexWrap'
    });
    var justifyContent = style$1({
      prop: 'justifyContent'
    });
    var alignItems = style$1({
      prop: 'alignItems'
    });
    var alignContent = style$1({
      prop: 'alignContent'
    });
    var order = style$1({
      prop: 'order'
    });
    var flex = style$1({
      prop: 'flex'
    });
    var flexGrow = style$1({
      prop: 'flexGrow'
    });
    var flexShrink = style$1({
      prop: 'flexShrink'
    });
    var alignSelf = style$1({
      prop: 'alignSelf'
    });
    var justifyItems = style$1({
      prop: 'justifyItems'
    });
    var justifySelf = style$1({
      prop: 'justifySelf'
    });
    var flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);

    var color = style$1({
      prop: 'color',
      themeKey: 'palette'
    });
    var bgcolor = style$1({
      prop: 'bgcolor',
      cssProperty: 'backgroundColor',
      themeKey: 'palette'
    });
    var palette = compose(color, bgcolor);

    var position = style$1({
      prop: 'position'
    });
    var zIndex$1 = style$1({
      prop: 'zIndex',
      themeKey: 'zIndex'
    });
    var top = style$1({
      prop: 'top'
    });
    var right = style$1({
      prop: 'right'
    });
    var bottom = style$1({
      prop: 'bottom'
    });
    var left = style$1({
      prop: 'left'
    });
    var positions = compose(position, zIndex$1, top, right, bottom, left);

    var boxShadow = style$1({
      prop: 'boxShadow',
      themeKey: 'shadows'
    });

    function transform$1(value) {
      return value <= 1 ? "".concat(value * 100, "%") : value;
    }

    var width = style$1({
      prop: 'width',
      transform: transform$1
    });
    var maxWidth = style$1({
      prop: 'maxWidth',
      transform: transform$1
    });
    var minWidth = style$1({
      prop: 'minWidth',
      transform: transform$1
    });
    var height = style$1({
      prop: 'height',
      transform: transform$1
    });
    var maxHeight = style$1({
      prop: 'maxHeight',
      transform: transform$1
    });
    var minHeight = style$1({
      prop: 'minHeight',
      transform: transform$1
    });
    var sizeWidth = style$1({
      prop: 'size',
      cssProperty: 'width',
      transform: transform$1
    });
    var sizeHeight = style$1({
      prop: 'size',
      cssProperty: 'height',
      transform: transform$1
    });
    var sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight);

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArrayLimit(arr, i) {
      if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return;
      }

      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function memoize$1(fn) {
      var cache = {};
      return function (arg) {
        if (cache[arg] === undefined) {
          cache[arg] = fn(arg);
        }

        return cache[arg];
      };
    }

    var properties = {
      m: 'margin',
      p: 'padding'
    };
    var directions = {
      t: 'Top',
      r: 'Right',
      b: 'Bottom',
      l: 'Left',
      x: ['Left', 'Right'],
      y: ['Top', 'Bottom']
    };
    var aliases = {
      marginX: 'mx',
      marginY: 'my',
      paddingX: 'px',
      paddingY: 'py'
    }; // memoize() impact:
    // From 300,000 ops/sec
    // To 350,000 ops/sec

    var getCssProperties = memoize$1(function (prop) {
      // It's not a shorthand notation.
      if (prop.length > 2) {
        if (aliases[prop]) {
          prop = aliases[prop];
        } else {
          return [prop];
        }
      }

      var _prop$split = prop.split(''),
          _prop$split2 = _slicedToArray(_prop$split, 2),
          a = _prop$split2[0],
          b = _prop$split2[1];

      var property = properties[a];
      var direction = directions[b] || '';
      return Array.isArray(direction) ? direction.map(function (dir) {
        return property + dir;
      }) : [property + direction];
    });
    var spacingKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];

    function getTransformer(theme) {
      var themeSpacing = theme.spacing || 8;

      if (typeof themeSpacing === 'number') {
        return function (abs) {
          return themeSpacing * abs;
        };
      }

      if (Array.isArray(themeSpacing)) {
        return function (abs) {
          if (process.env.NODE_ENV !== 'production') {
            if (abs > themeSpacing.length - 1) {
              console.error(["@material-ui/system: the value provided (".concat(abs, ") overflows."), "The supported values are: ".concat(JSON.stringify(themeSpacing), "."), "".concat(abs, " > ").concat(themeSpacing.length - 1, ", you need to add the missing values.")].join('\n'));
            }
          }

          return themeSpacing[abs];
        };
      }

      if (typeof themeSpacing === 'function') {
        return themeSpacing;
      }

      if (process.env.NODE_ENV !== 'production') {
        console.error(["@material-ui/system: the `theme.spacing` value (".concat(themeSpacing, ") is invalid."), 'It should be a number, an array or a function.'].join('\n'));
      }

      return function () {
        return undefined;
      };
    }

    function getValue(transformer, propValue) {
      if (typeof propValue === 'string') {
        return propValue;
      }

      var abs = Math.abs(propValue);
      var transformed = transformer(abs);

      if (propValue >= 0) {
        return transformed;
      }

      if (typeof transformed === 'number') {
        return -transformed;
      }

      return "-".concat(transformed);
    }

    function getStyleFromPropValue(cssProperties, transformer) {
      return function (propValue) {
        return cssProperties.reduce(function (acc, cssProperty) {
          acc[cssProperty] = getValue(transformer, propValue);
          return acc;
        }, {});
      };
    }

    function spacing(props) {
      var theme = props.theme;
      var transformer = getTransformer(theme);
      return Object.keys(props).map(function (prop) {
        // Using a hash computation over an array iteration could be faster, but with only 28 items,
        // it's doesn't worth the bundle size.
        if (spacingKeys.indexOf(prop) === -1) {
          return null;
        }

        var cssProperties = getCssProperties(prop);
        var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
        var propValue = props[prop];
        return handleBreakpoints(props, propValue, styleFromPropValue);
      }).reduce(merge, {});
    }

    spacing.propTypes = process.env.NODE_ENV !== 'production' ? spacingKeys.reduce(function (obj, key) {
      obj[key] = responsivePropType;
      return obj;
    }, {}) : {};
    spacing.filterProps = spacingKeys;

    var fontFamily = style$1({
      prop: 'fontFamily',
      themeKey: 'typography'
    });
    var fontSize = style$1({
      prop: 'fontSize',
      themeKey: 'typography'
    });
    var fontStyle = style$1({
      prop: 'fontStyle',
      themeKey: 'typography'
    });
    var fontWeight = style$1({
      prop: 'fontWeight',
      themeKey: 'typography'
    });
    var letterSpacing = style$1({
      prop: 'letterSpacing'
    });
    var lineHeight = style$1({
      prop: 'lineHeight'
    });
    var textAlign = style$1({
      prop: 'textAlign'
    });
    var typography = compose(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);

    /** @license Material-UI v4.4.3
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var styled$1 = function styled$$1(Component) {
      var componentCreator = styled(Component);
      return function (style, options) {
        return componentCreator(style, _extends({
          defaultTheme: defaultTheme
        }, options));
      };
    };

    var styleFunction = css$d(compose(borders, display, flexbox, positions, palette, boxShadow, sizing, spacing, typography));
    /**
     * @ignore - do not document.
     */

    var Box = styled$1('div')(styleFunction, {
      name: 'MuiBox'
    });

    function unsupportedProp(props, propName, componentName, location, propFullName) {
      if (process.env.NODE_ENV === 'production') {
        return null;
      }

      var propFullNameSafe = propFullName || propName;

      if (typeof props[propName] !== 'undefined') {
        return new Error("The prop `".concat(propFullNameSafe, "` is not supported. Please remove it."));
      }

      return null;
    }

    var styles$q = function styles(theme) {
      var _extends2;

      return {
        /* Styles applied to the root element. */
        root: _extends({}, theme.typography.button, (_extends2 = {
          maxWidth: 264,
          minWidth: 72,
          position: 'relative',
          boxSizing: 'border-box',
          minHeight: 48,
          flexShrink: 0,
          padding: '6px 12px'
        }, _defineProperty(_extends2, theme.breakpoints.up('sm'), {
          padding: '6px 24px'
        }), _defineProperty(_extends2, "overflow", 'hidden'), _defineProperty(_extends2, "whiteSpace", 'normal'), _defineProperty(_extends2, "textAlign", 'center'), _defineProperty(_extends2, theme.breakpoints.up('sm'), {
          fontSize: theme.typography.pxToRem(13),
          minWidth: 160
        }), _extends2)),

        /* Styles applied to the root element if both `icon` and `label` are provided. */
        labelIcon: {
          minHeight: 72,
          paddingTop: 9,
          '& $wrapper > *:first-child': {
            marginBottom: 6
          }
        },

        /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="inherit"`. */
        textColorInherit: {
          color: 'inherit',
          opacity: 0.7,
          '&$selected': {
            opacity: 1
          },
          '&$disabled': {
            opacity: 0.4
          }
        },

        /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="primary"`. */
        textColorPrimary: {
          color: theme.palette.text.secondary,
          '&$selected': {
            color: theme.palette.primary.main
          },
          '&$disabled': {
            color: theme.palette.text.disabled
          }
        },

        /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="secondary"`. */
        textColorSecondary: {
          color: theme.palette.text.secondary,
          '&$selected': {
            color: theme.palette.secondary.main
          },
          '&$disabled': {
            color: theme.palette.text.disabled
          }
        },

        /* Pseudo-class applied to the root element if `selected={true}` (controlled by the Tabs component). */
        selected: {},

        /* Pseudo-class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
        disabled: {},

        /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
        fullWidth: {
          flexShrink: 1,
          flexGrow: 1,
          flexBasis: 0,
          maxWidth: 'none'
        },

        /* Styles applied to the root element if `wrapped={true}`. */
        wrapped: {
          fontSize: theme.typography.pxToRem(12),
          lineHeight: 1.5
        },

        /* Styles applied to the `icon` and `label`'s wrapper element. */
        wrapper: {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'column'
        }
      };
    };
    var Tab = React__default.forwardRef(function Tab(props, ref) {
      var classes = props.classes,
          className = props.className,
          _props$disabled = props.disabled,
          disabled = _props$disabled === void 0 ? false : _props$disabled,
          _props$disableFocusRi = props.disableFocusRipple,
          disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
          fullWidth = props.fullWidth,
          icon = props.icon,
          indicator = props.indicator,
          label = props.label,
          onChange = props.onChange,
          onClick = props.onClick,
          selected = props.selected,
          _props$textColor = props.textColor,
          textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
          value = props.value,
          _props$wrapped = props.wrapped,
          wrapped = _props$wrapped === void 0 ? false : _props$wrapped,
          other = _objectWithoutProperties(props, ["classes", "className", "disabled", "disableFocusRipple", "fullWidth", "icon", "indicator", "label", "onChange", "onClick", "selected", "textColor", "value", "wrapped"]);

      var handleChange = function handleChange(event) {
        if (onChange) {
          onChange(event, value);
        }

        if (onClick) {
          onClick(event);
        }
      };

      return React__default.createElement(ButtonBase$1, _extends({
        focusRipple: !disableFocusRipple,
        className: clsx(classes.root, classes["textColor".concat(capitalize(textColor))], className, disabled && classes.disabled, selected && classes.selected, label && icon && classes.labelIcon, fullWidth && classes.fullWidth, wrapped && classes.wrapped),
        ref: ref,
        role: "tab",
        "aria-selected": selected,
        disabled: disabled,
        onClick: handleChange
      }, other), React__default.createElement("span", {
        className: classes.wrapper
      }, icon, label), indicator);
    });
    process.env.NODE_ENV !== "production" ? Tab.propTypes = {
      /**
       * This prop isn't supported.
       * Use the `component` prop if you need to change the children structure.
       */
      children: unsupportedProp,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * If `true`, the tab will be disabled.
       */
      disabled: propTypes.bool,

      /**
       * If `true`, the  keyboard focus ripple will be disabled.
       * `disableRipple` must also be true.
       */
      disableFocusRipple: propTypes.bool,

      /**
       * If `true`, the ripple effect will be disabled.
       */
      disableRipple: propTypes.bool,

      /**
       * @ignore
       */
      fullWidth: propTypes.bool,

      /**
       * The icon element.
       */
      icon: propTypes.node,

      /**
       * @ignore
       * For server-side rendering consideration, we let the selected tab
       * render the indicator.
       */
      indicator: propTypes.node,

      /**
       * The label element.
       */
      label: propTypes.node,

      /**
       * @ignore
       */
      onChange: propTypes.func,

      /**
       * @ignore
       */
      onClick: propTypes.func,

      /**
       * @ignore
       */
      selected: propTypes.bool,

      /**
       * @ignore
       */
      textColor: propTypes.oneOf(['secondary', 'primary', 'inherit']),

      /**
       * You can provide your own value. Otherwise, we fallback to the child position index.
       */
      value: propTypes.any,

      /**
       * Tab labels appear in a single row.
       * They can use a second line if needed.
       */
      wrapped: propTypes.bool
    } : void 0;
    var Tab$1 = withStyles$1(styles$q, {
      name: 'MuiTab'
    })(Tab);

    // Based on https://github.com/react-bootstrap/dom-helpers/blob/master/src/util/inDOM.js
    var inDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    var cachedType;
    // Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
    function detectScrollType() {
        if (cachedType) {
            return cachedType;
        }
        if (!inDOM || !window.document.body) {
            return 'indeterminate';
        }
        var dummy = window.document.createElement('div');
        dummy.appendChild(document.createTextNode('ABCD'));
        dummy.dir = 'rtl';
        dummy.style.fontSize = '14px';
        dummy.style.width = '4px';
        dummy.style.height = '1px';
        dummy.style.position = 'absolute';
        dummy.style.top = '-1000px';
        dummy.style.overflow = 'scroll';
        document.body.appendChild(dummy);
        cachedType = 'reverse';
        if (dummy.scrollLeft > 0) {
            cachedType = 'default';
        }
        else {
            dummy.scrollLeft = 1;
            if (dummy.scrollLeft === 0) {
                cachedType = 'negative';
            }
        }
        document.body.removeChild(dummy);
        return cachedType;
    }
    // Based on https://stackoverflow.com/a/24394376
    function getNormalizedScrollLeft(element, direction) {
        var scrollLeft = element.scrollLeft;
        // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior
        if (direction !== 'rtl') {
            return scrollLeft;
        }
        var type = detectScrollType();
        if (type === 'indeterminate') {
            return Number.NaN;
        }
        switch (type) {
            case 'negative':
                return element.scrollWidth - element.clientWidth + scrollLeft;
            case 'reverse':
                return element.scrollWidth - element.clientWidth - scrollLeft;
        }
        return scrollLeft;
    }

    function easeInOutSin(time) {
      return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
    }

    function animate(property, element, to) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var cb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
      var _options$ease = options.ease,
          ease = _options$ease === void 0 ? easeInOutSin : _options$ease,
          _options$duration = options.duration,
          duration = _options$duration === void 0 ? 300 : _options$duration;
      var start = null;
      var from = element[property];
      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      var step = function step(timestamp) {
        if (cancelled) {
          cb(new Error('Animation cancelled'));
          return;
        }

        if (start === null) {
          start = timestamp;
        }

        var time = Math.min(1, (timestamp - start) / duration);
        element[property] = ease(time) * (to - from) + from;

        if (time >= 1) {
          requestAnimationFrame(function () {
            cb(null);
          });
          return;
        }

        requestAnimationFrame(step);
      };

      if (from === to) {
        cb(new Error('Element already at target position'));
        return cancel;
      }

      requestAnimationFrame(step);
      return cancel;
    }

    var styles$r = {
      width: 99,
      height: 99,
      position: 'absolute',
      top: -9999,
      overflow: 'scroll'
    };
    /**
     * @ignore - internal component.
     * The component is originates from https://github.com/STORIS/react-scrollbar-size.
     * It has been moved into the core in order to minimize the bundle size.
     */

    function ScrollbarSize(props) {
      var onChange = props.onChange,
          other = _objectWithoutProperties(props, ["onChange"]);

      var scrollbarHeight = React__default.useRef();
      var nodeRef = React__default.useRef(null);

      var setMeasurements = function setMeasurements() {
        scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
      };

      React__default.useEffect(function () {
        var handleResize = debounce(function () {
          var prevHeight = scrollbarHeight.current;
          setMeasurements();

          if (prevHeight !== scrollbarHeight.current) {
            onChange(scrollbarHeight.current);
          }
        });
        window.addEventListener('resize', handleResize);
        return function () {
          handleResize.clear();
          window.removeEventListener('resize', handleResize);
        };
      }, [onChange]);
      React__default.useEffect(function () {
        setMeasurements();
        onChange(scrollbarHeight.current);
      }, [onChange]);
      return React__default.createElement("div", _extends({
        style: styles$r,
        ref: nodeRef
      }, other));
    }
    process.env.NODE_ENV !== "production" ? ScrollbarSize.propTypes = {
      onChange: propTypes.func.isRequired
    } : void 0;

    var styles$s = function styles(theme) {
      return {
        root: {
          position: 'absolute',
          height: 2,
          bottom: 0,
          width: '100%',
          transition: theme.transitions.create()
        },
        colorPrimary: {
          backgroundColor: theme.palette.primary.main
        },
        colorSecondary: {
          backgroundColor: theme.palette.secondary.main
        },
        vertical: {
          height: '100%',
          width: 2,
          right: 0
        }
      };
    };
    /**
     * @ignore - internal component.
     */

    var TabIndicator = React__default.forwardRef(function TabIndicator(props, ref) {
      var classes = props.classes,
          className = props.className,
          color = props.color,
          orientation = props.orientation,
          other = _objectWithoutProperties(props, ["classes", "className", "color", "orientation"]);

      return React__default.createElement("span", _extends({
        className: clsx(classes.root, classes["color".concat(capitalize(color))], className, {
          vertical: classes.vertical
        }[orientation]),
        ref: ref
      }, other));
    });
    process.env.NODE_ENV !== "production" ? TabIndicator.propTypes = {
      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * @ignore
       * The color of the tab indicator.
       */
      color: propTypes.oneOf(['primary', 'secondary']).isRequired,

      /**
       * The tabs orientation (layout flow direction).
       */
      orientation: propTypes.oneOf(['horizontal', 'vertical']).isRequired
    } : void 0;
    var TabIndicator$1 = withStyles$1(styles$s, {
      name: 'PrivateTabIndicator'
    })(TabIndicator);

    /**
     * @ignore - internal component.
     */

    var KeyboardArrowLeft = createSvgIcon(React__default.createElement("path", {
      d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
    }), 'KeyboardArrowLeft');

    /**
     * @ignore - internal component.
     */

    var KeyboardArrowRight = createSvgIcon(React__default.createElement("path", {
      d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
    }), 'KeyboardArrowRight');

    var styles$t = {
      root: {
        width: 40,
        flexShrink: 0
      },
      vertical: {
        width: '100%',
        height: 40,
        '& svg': {
          transform: 'rotate(90deg)'
        }
      }
    };
    /**
     * @ignore - internal component.
     */

    var _ref$1 = React__default.createElement(KeyboardArrowLeft, {
      fontSize: "small"
    });

    var _ref2$1 = React__default.createElement(KeyboardArrowRight, {
      fontSize: "small"
    });

    var TabScrollButton = React__default.forwardRef(function TabScrollButton(props, ref) {
      var classes = props.classes,
          classNameProp = props.className,
          direction = props.direction,
          orientation = props.orientation,
          visible = props.visible,
          other = _objectWithoutProperties(props, ["classes", "className", "direction", "orientation", "visible"]);

      var className = clsx(classes.root, classNameProp, {
        vertical: classes.vertical
      }[orientation]);

      if (!visible) {
        return React__default.createElement("div", {
          className: className
        });
      }

      return React__default.createElement(ButtonBase$1, _extends({
        component: "div",
        className: className,
        ref: ref,
        role: null,
        tabIndex: null
      }, other), direction === 'left' ? _ref$1 : _ref2$1);
    });
    process.env.NODE_ENV !== "production" ? TabScrollButton.propTypes = {
      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * Which direction should the button indicate?
       */
      direction: propTypes.oneOf(['left', 'right']).isRequired,

      /**
       * The tabs orientation (layout flow direction).
       */
      orientation: propTypes.oneOf(['horizontal', 'vertical']).isRequired,

      /**
       * Should the button be present or just consume space.
       */
      visible: propTypes.bool.isRequired
    } : void 0;
    var TabScrollButton$1 = withStyles$1(styles$t, {
      name: 'PrivateTabScrollButton'
    })(TabScrollButton);

    var styles$u = function styles(theme) {
      return {
        /* Styles applied to the root element. */
        root: {
          overflow: 'hidden',
          minHeight: 48,
          WebkitOverflowScrolling: 'touch',
          // Add iOS momentum scrolling.
          display: 'flex'
        },

        /* Styles applied to the root element if `orientation="vertical"`. */
        vertical: {
          flexDirection: 'column'
        },

        /* Styles applied to the flex container element. */
        flexContainer: {
          display: 'flex'
        },

        /* Styles applied to the flex container element if `orientation="vertical"`. */
        flexContainerVertical: {
          flexDirection: 'column'
        },

        /* Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`. */
        centered: {
          justifyContent: 'center'
        },

        /* Styles applied to the tablist element. */
        scroller: {
          position: 'relative',
          display: 'inline-block',
          flex: '1 1 auto',
          whiteSpace: 'nowrap'
        },

        /* Styles applied to the tablist element if `!variant="scrollable"`. */
        fixed: {
          overflowX: 'hidden',
          width: '100%'
        },

        /* Styles applied to the tablist element if `variant="scrollable"`. */
        scrollable: {
          overflowX: 'scroll',
          // Hide dimensionless scrollbar on MacOS
          scrollbarWidth: 'none',
          // Firefox
          '&::-webkit-scrollbar': {
            display: 'none' // Safari + Chrome

          }
        },

        /* Styles applied to the `ScrollButtonComponent` component. */
        scrollButtons: {},

        /* Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"` or scrollButtons="desktop"`. */
        scrollButtonsDesktop: _defineProperty({}, theme.breakpoints.down('xs'), {
          display: 'none'
        }),

        /* Styles applied to the `TabIndicator` component. */
        indicator: {}
      };
    };
    var Tabs = React__default.forwardRef(function Tabs(props, ref) {
      var action = props.action,
          _props$centered = props.centered,
          centered = _props$centered === void 0 ? false : _props$centered,
          childrenProp = props.children,
          classes = props.classes,
          className = props.className,
          _props$component = props.component,
          Component = _props$component === void 0 ? 'div' : _props$component,
          _props$indicatorColor = props.indicatorColor,
          indicatorColor = _props$indicatorColor === void 0 ? 'secondary' : _props$indicatorColor,
          onChange = props.onChange,
          _props$orientation = props.orientation,
          orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
          _props$ScrollButtonCo = props.ScrollButtonComponent,
          ScrollButtonComponent = _props$ScrollButtonCo === void 0 ? TabScrollButton$1 : _props$ScrollButtonCo,
          _props$scrollButtons = props.scrollButtons,
          scrollButtons = _props$scrollButtons === void 0 ? 'auto' : _props$scrollButtons,
          _props$TabIndicatorPr = props.TabIndicatorProps,
          TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr,
          _props$textColor = props.textColor,
          textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
          value = props.value,
          _props$variant = props.variant,
          variant = _props$variant === void 0 ? 'standard' : _props$variant,
          other = _objectWithoutProperties(props, ["action", "centered", "children", "classes", "className", "component", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "TabIndicatorProps", "textColor", "value", "variant"]);

      var theme = useTheme$1();
      var scrollable = variant === 'scrollable';
      var isRtl = theme.direction === 'rtl';
      var vertical = orientation === 'vertical';
      var scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
      var start = vertical ? 'top' : 'left';
      var end = vertical ? 'bottom' : 'right';
      var clientSize = vertical ? 'clientHeight' : 'clientWidth';
      var size = vertical ? 'height' : 'width';

      if (process.env.NODE_ENV !== 'production') {
        if (centered && scrollable) {
          console.error('Material-UI: you can not use the `centered={true}` and `variant="scrollable"` properties ' + 'at the same time on a `Tabs` component.');
        }
      }

      var _React$useState = React__default.useState(false),
          mounted = _React$useState[0],
          setMounted = _React$useState[1];

      var _React$useState2 = React__default.useState({}),
          indicatorStyle = _React$useState2[0],
          setIndicatorStyle = _React$useState2[1];

      var _React$useState3 = React__default.useState({
        start: false,
        end: false
      }),
          displayScroll = _React$useState3[0],
          setDisplayScroll = _React$useState3[1];

      var _React$useState4 = React__default.useState({
        overflow: 'hidden',
        marginBottom: null
      }),
          scrollerStyle = _React$useState4[0],
          setScrollerStyle = _React$useState4[1];

      var valueToIndex = new Map();
      var tabsRef = React__default.useRef(null);
      var childrenWrapperRef = React__default.useRef(null);

      var getTabsMeta = function getTabsMeta() {
        var tabsNode = tabsRef.current;
        var tabsMeta;

        if (tabsNode) {
          var rect = tabsNode.getBoundingClientRect(); // create a new object with ClientRect class props + scrollLeft

          tabsMeta = {
            clientWidth: tabsNode.clientWidth,
            scrollLeft: tabsNode.scrollLeft,
            scrollTop: tabsNode.scrollTop,
            scrollLeftNormalized: getNormalizedScrollLeft(tabsNode, theme.direction),
            scrollWidth: tabsNode.scrollWidth,
            top: rect.top,
            bottom: rect.bottom,
            left: rect.left,
            right: rect.right
          };
        }

        var tabMeta;

        if (tabsNode && value !== false) {
          var _children = childrenWrapperRef.current.children;

          if (_children.length > 0) {
            var tab = _children[valueToIndex.get(value)];

            if (process.env.NODE_ENV !== 'production') {
              if (!tab) {
                console.error(["Material-UI: the value provided `".concat(value, "` to the Tabs component is invalid."), 'None of the Tabs children have this value.', valueToIndex.keys ? "You can provide one of the following values: ".concat(Array.from(valueToIndex.keys()).join(', '), ".") : null].join('\n'));
              }
            }

            tabMeta = tab ? tab.getBoundingClientRect() : null;
          }
        }

        return {
          tabsMeta: tabsMeta,
          tabMeta: tabMeta
        };
      };

      var updateIndicatorState = useEventCallback(function () {
        var _newIndicatorStyle;

        var _getTabsMeta = getTabsMeta(),
            tabsMeta = _getTabsMeta.tabsMeta,
            tabMeta = _getTabsMeta.tabMeta;

        var startValue = 0;

        if (tabMeta && tabsMeta) {
          if (vertical) {
            startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
          } else {
            var correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
            startValue = tabMeta.left - tabsMeta.left + correction;
          }
        }

        var newIndicatorStyle = (_newIndicatorStyle = {}, _defineProperty(_newIndicatorStyle, start, startValue), _defineProperty(_newIndicatorStyle, size, tabMeta ? tabMeta[size] : 0), _newIndicatorStyle);

        if (isNaN(indicatorStyle[start]) || isNaN(indicatorStyle[size])) {
          setIndicatorStyle(newIndicatorStyle);
        } else {
          var dStart = Math.abs(indicatorStyle[start] - newIndicatorStyle[start]);
          var dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);

          if (dStart >= 1 || dSize >= 1) {
            setIndicatorStyle(newIndicatorStyle);
          }
        }
      });

      var scroll = function scroll(scrollValue) {
        animate(scrollStart, tabsRef.current, scrollValue);
      };

      var moveTabsScroll = function moveTabsScroll(delta) {
        var scrollValue = tabsRef.current[scrollStart];

        if (vertical) {
          scrollValue += delta;
        } else {
          scrollValue += delta * (isRtl ? -1 : 1); // Fix for Edge

          scrollValue *= isRtl && detectScrollType() === 'reverse' ? -1 : 1;
        }

        scroll(scrollValue);
      };

      var handleStartScrollClick = function handleStartScrollClick() {
        moveTabsScroll(-tabsRef.current[clientSize]);
      };

      var handleEndScrollClick = function handleEndScrollClick() {
        moveTabsScroll(tabsRef.current[clientSize]);
      };

      var handleScrollbarSizeChange = React__default.useCallback(function (scrollbarHeight) {
        setScrollerStyle({
          overflow: null,
          marginBottom: -scrollbarHeight
        });
      }, []);

      var getConditionalElements = function getConditionalElements() {
        var conditionalElements = {};
        conditionalElements.scrollbarSizeListener = scrollable ? React__default.createElement(ScrollbarSize, {
          className: classes.scrollable,
          onChange: handleScrollbarSizeChange
        }) : null;
        var scrollButtonsActive = displayScroll.start || displayScroll.end;
        var showScrollButtons = scrollable && (scrollButtons === 'auto' && scrollButtonsActive || scrollButtons === 'desktop' || scrollButtons === 'on');
        conditionalElements.scrollButtonStart = showScrollButtons ? React__default.createElement(ScrollButtonComponent, {
          orientation: orientation,
          direction: isRtl ? 'right' : 'left',
          onClick: handleStartScrollClick,
          visible: displayScroll.start,
          className: clsx(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
        }) : null;
        conditionalElements.scrollButtonEnd = showScrollButtons ? React__default.createElement(ScrollButtonComponent, {
          orientation: orientation,
          direction: isRtl ? 'left' : 'right',
          onClick: handleEndScrollClick,
          visible: displayScroll.end,
          className: clsx(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
        }) : null;
        return conditionalElements;
      };

      var scrollSelectedIntoView = useEventCallback(function () {
        var _getTabsMeta2 = getTabsMeta(),
            tabsMeta = _getTabsMeta2.tabsMeta,
            tabMeta = _getTabsMeta2.tabMeta;

        if (!tabMeta || !tabsMeta) {
          return;
        }

        if (tabMeta[start] < tabsMeta[start]) {
          // left side of button is out of view
          var nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
          scroll(nextScrollStart);
        } else if (tabMeta[end] > tabsMeta[end]) {
          // right side of button is out of view
          var _nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);

          scroll(_nextScrollStart);
        }
      });
      var updateScrollButtonState = useEventCallback(function () {
        if (scrollable && scrollButtons !== 'off') {
          var _tabsRef$current = tabsRef.current,
              scrollTop = _tabsRef$current.scrollTop,
              scrollHeight = _tabsRef$current.scrollHeight,
              clientHeight = _tabsRef$current.clientHeight,
              scrollWidth = _tabsRef$current.scrollWidth,
              clientWidth = _tabsRef$current.clientWidth;
          var showStartScroll;
          var showEndScroll;

          if (vertical) {
            showStartScroll = scrollTop > 1;
            showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
          } else {
            var scrollLeft = getNormalizedScrollLeft(tabsRef.current, theme.direction); // use 1 for the potential rounding error with browser zooms.

            showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
            showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
          }

          if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
            setDisplayScroll({
              start: showStartScroll,
              end: showEndScroll
            });
          }
        }
      });
      React__default.useEffect(function () {
        var handleResize = debounce(function () {
          updateIndicatorState();
          updateScrollButtonState();
        });
        var win = ownerWindow(tabsRef.current);
        win.addEventListener('resize', handleResize);
        return function () {
          handleResize.clear();
          win.removeEventListener('resize', handleResize);
        };
      }, [updateIndicatorState, updateScrollButtonState]);
      var handleTabsScroll = React__default.useCallback(debounce(function () {
        updateScrollButtonState();
      }));
      React__default.useEffect(function () {
        return function () {
          handleTabsScroll.clear();
        };
      }, [handleTabsScroll]);
      React__default.useEffect(function () {
        setMounted(true);
      }, []);
      React__default.useEffect(function () {
        updateIndicatorState();
        updateScrollButtonState();
      });
      React__default.useEffect(function () {
        scrollSelectedIntoView();
      }, [scrollSelectedIntoView, indicatorStyle]);
      React__default.useImperativeHandle(action, function () {
        return {
          updateIndicator: updateIndicatorState
        };
      }, [updateIndicatorState]);
      var indicator = React__default.createElement(TabIndicator$1, _extends({
        className: classes.indicator,
        orientation: orientation,
        color: indicatorColor
      }, TabIndicatorProps, {
        style: _extends({}, indicatorStyle, {}, TabIndicatorProps.style)
      }));
      var childIndex = 0;
      var children = React__default.Children.map(childrenProp, function (child) {
        if (!React__default.isValidElement(child)) {
          return null;
        }

        if (process.env.NODE_ENV !== 'production') {
          if (child.type === React__default.Fragment) {
            console.error(["Material-UI: the Tabs component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
          }
        }

        var childValue = child.props.value === undefined ? childIndex : child.props.value;
        valueToIndex.set(childValue, childIndex);
        var selected = childValue === value;
        childIndex += 1;
        return React__default.cloneElement(child, {
          fullWidth: variant === 'fullWidth',
          indicator: selected && !mounted && indicator,
          selected: selected,
          onChange: onChange,
          textColor: textColor,
          value: childValue
        });
      });
      var conditionalElements = getConditionalElements();
      return React__default.createElement(Component, _extends({
        className: clsx(classes.root, className, vertical && classes.vertical),
        ref: ref
      }, other), conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, React__default.createElement("div", {
        className: clsx(classes.scroller, scrollable ? classes.scrollable : classes.fixed),
        style: scrollerStyle,
        ref: tabsRef,
        onScroll: handleTabsScroll
      }, React__default.createElement("div", {
        className: clsx(classes.flexContainer, vertical && classes.flexContainerVertical, centered && !scrollable && classes.centered),
        ref: childrenWrapperRef,
        role: "tablist"
      }, children), mounted && indicator), conditionalElements.scrollButtonEnd);
    });
    process.env.NODE_ENV !== "production" ? Tabs.propTypes = {
      /**
       * Callback fired when the component mounts.
       * This is useful when you want to trigger an action programmatically.
       * It currently only supports `updateIndicator()` action.
       *
       * @param {object} actions This object contains all possible actions
       * that can be triggered programmatically.
       */
      action: refType,

      /**
       * If `true`, the tabs will be centered.
       * This property is intended for large views.
       */
      centered: propTypes.bool,

      /**
       * The content of the component.
       */
      children: propTypes.node,

      /**
       * Override or extend the styles applied to the component.
       * See [CSS API](#css) below for more details.
       */
      classes: propTypes.object.isRequired,

      /**
       * @ignore
       */
      className: propTypes.string,

      /**
       * The component used for the root node.
       * Either a string to use a DOM element or a component.
       */
      component: propTypes.elementType,

      /**
       * Determines the color of the indicator.
       */
      indicatorColor: propTypes.oneOf(['secondary', 'primary']),

      /**
       * Callback fired when the value changes.
       *
       * @param {object} event The event source of the callback
       * @param {any} value We default to the index of the child (number)
       */
      onChange: propTypes.func,

      /**
       * The tabs orientation (layout flow direction).
       */
      orientation: propTypes.oneOf(['horizontal', 'vertical']),

      /**
       * The component used to render the scroll buttons.
       */
      ScrollButtonComponent: propTypes.elementType,

      /**
       * Determine behavior of scroll buttons when tabs are set to scroll:
       *
       * - `auto` will only present them when not all the items are visible.
       * - `desktop` will only present them on medium and larger viewports.
       * - `on` will always present them.
       * - `off` will never present them.
       */
      scrollButtons: propTypes.oneOf(['auto', 'desktop', 'on', 'off']),

      /**
       * Props applied to the tab indicator element.
       */
      TabIndicatorProps: propTypes.object,

      /**
       * Determines the color of the `Tab`.
       */
      textColor: propTypes.oneOf(['secondary', 'primary', 'inherit']),

      /**
       * The value of the currently selected `Tab`.
       * If you don't want any selected `Tab`, you can set this property to `false`.
       */
      value: propTypes.any,

      /**
       *  Determines additional display behavior of the tabs:
       *
       *  - `scrollable` will invoke scrolling properties and allow for horizontally
       *  scrolling (or swiping) of the tab bar.
       *  -`fullWidth` will make the tabs grow to use all the available space,
       *  which should be used for small views, like on mobile.
       *  - `standard` will render the default state.
       */
      variant: propTypes.oneOf(['standard', 'scrollable', 'fullWidth'])
    } : void 0;
    var Tabs$1 = withStyles$1(styles$u, {
      name: 'MuiTabs'
    })(Tabs);

    var NO_TAB_CONTENTS_ERROR = "TabSet expects children prop to hold at least one tab content component.";
    function TabPanel(props) {
        var children = props.children, value = props.value, idPrefix = props.idPrefix, index = props.index, other = __rest(props, ["children", "value", "idPrefix", "index"]);
        return (React__default.createElement(Box, __assign({ component: "div", role: "tabpanel", hidden: value !== index, id: idPrefix + "-tab-panel-" + index, "aria-labelledby": idPrefix + "-tab-" + index }, other),
            React__default.createElement(Box, { p: 3 }, children)));
    }
    function a11yProps(idPrefix, index) {
        return {
            "id": idPrefix + "-tab-" + index,
            "aria-controls": idPrefix + "-tab-panel-" + index,
        };
    }
    function TabSet(props) {
        var children = props.children, tabNames = props.tabNames, idPrefix = props.idPrefix, initialTabIndex = props.initialTabIndex;
        var selectedTab = (initialTabIndex !== undefined) ? initialTabIndex : 0;
        var _a = React__default.useState(selectedTab), value = _a[0], setValue = _a[1];
        function handleChange(event, newValue) {
            setValue(newValue);
        }
        var tabPanels = children;
        if (!tabPanels) {
            throw new Error(NO_TAB_CONTENTS_ERROR);
        }
        else {
            var tabNamesFinal = getTabNamesWithDefaults(tabNames, tabPanels.length);
            return (React__default.createElement("div", { className: "mt-tab-set" },
                React__default.createElement(Tabs$1, { indicatorColor: "primary", value: value, onChange: handleChange, "aria-label": "simple tabs example" }, tabNamesFinal.map(function (tabName, index) { return (React__default.createElement(Tab$1, __assign({ key: index, label: tabName }, a11yProps(idPrefix, index)))); })),
                tabPanels.map(function (child, index) { return (React__default.createElement(TabPanel, { key: index, value: value, index: index }, child)); })));
        }
    }
    var getTabNamesWithDefaults = function (names, count) {
        var results = [];
        for (var i = 0, iEnd = count; i < iEnd; i++) {
            var name_1 = (names.length > i) ? names[i] : "Tab " + (i + 1);
            results.push(React__default.createElement("span", { "data-qa-element": "tab-name" }, name_1));
        }
        return results;
    };

    exports.ButtonGroup = ButtonGroup;
    exports.FormButton = FormButton;
    exports.ButtonLink = ButtonLink;
    exports.ButtonRow = ButtonRow;
    exports.SecondaryFormButton = SecondaryFormButton;
    exports.ToggleButtons = ToggleButtons;
    exports.FormError = FormError;
    exports.FormPanel = FormPanel;
    exports.InputField = InputField;
    exports.InputFieldRow = InputFieldRow;
    exports.InputLabel = InputLabel$2;
    exports.LoadingOverlay = LoadingOverlay;
    exports.TabSet = TabSet;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mt-design-components.umd.js.map
