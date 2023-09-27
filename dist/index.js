(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('@import"https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap";.MyButton{font-size:14px;height:32px;padding:4px 15px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;border:1px solid transparent;background-color:#38be1a;color:#fff;cursor:pointer;transition:all .25s ease-in-out}.MyButton:hover{background-color:#4be229}.MonoFont{font-family:Roboto Mono,monospace}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var Mr = { exports: {} }, Ge = {}, hr = { exports: {} }, _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function Vt() {
  if (ct)
    return _;
  ct = 1;
  var V = Symbol.for("react.element"), y = Symbol.for("react.portal"), Re = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), ve = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), te = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), Z = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), U = Symbol.iterator;
  function ee(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var G = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ce = Object.assign, Ie = {};
  function ne(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || G;
  }
  ne.prototype.isReactComponent = {}, ne.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, ne.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ae() {
  }
  ae.prototype = ne.prototype;
  function F(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || G;
  }
  var he = F.prototype = new ae();
  he.constructor = F, ce(he, ne.prototype), he.isPureReactComponent = !0;
  var oe = Array.isArray, L = Object.prototype.hasOwnProperty, q = { current: null }, fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(n, s, h) {
    var C, g = {}, P = null, k = null;
    if (s != null)
      for (C in s.ref !== void 0 && (k = s.ref), s.key !== void 0 && (P = "" + s.key), s)
        L.call(s, C) && !fe.hasOwnProperty(C) && (g[C] = s[C]);
    var T = arguments.length - 2;
    if (T === 1)
      g.children = h;
    else if (1 < T) {
      for (var w = Array(T), W = 0; W < T; W++)
        w[W] = arguments[W + 2];
      g.children = w;
    }
    if (n && n.defaultProps)
      for (C in T = n.defaultProps, T)
        g[C] === void 0 && (g[C] = T[C]);
    return { $$typeof: V, type: n, key: P, ref: k, props: g, _owner: q.current };
  }
  function Ce(n, s) {
    return { $$typeof: V, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function we(n) {
    return typeof n == "object" && n !== null && n.$$typeof === V;
  }
  function Ye(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(h) {
      return s[h];
    });
  }
  var Se = /\/+/g;
  function H(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Ye("" + n.key) : s.toString(36);
  }
  function K(n, s, h, C, g) {
    var P = typeof n;
    (P === "undefined" || P === "boolean") && (n = null);
    var k = !1;
    if (n === null)
      k = !0;
    else
      switch (P) {
        case "string":
        case "number":
          k = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case V:
            case y:
              k = !0;
          }
      }
    if (k)
      return k = n, g = g(k), n = C === "" ? "." + H(k, 0) : C, oe(g) ? (h = "", n != null && (h = n.replace(Se, "$&/") + "/"), K(g, s, h, "", function(W) {
        return W;
      })) : g != null && (we(g) && (g = Ce(g, h + (!g.key || k && k.key === g.key ? "" : ("" + g.key).replace(Se, "$&/") + "/") + n)), s.push(g)), 1;
    if (k = 0, C = C === "" ? "." : C + ":", oe(n))
      for (var T = 0; T < n.length; T++) {
        P = n[T];
        var w = C + H(P, T);
        k += K(P, s, h, w, g);
      }
    else if (w = ee(n), typeof w == "function")
      for (n = w.call(n), T = 0; !(P = n.next()).done; )
        P = P.value, w = C + H(P, T++), k += K(P, s, h, w, g);
    else if (P === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return k;
  }
  function Y(n, s, h) {
    if (n == null)
      return n;
    var C = [], g = 0;
    return K(n, C, "", "", function(P) {
      return s.call(h, P, g++);
    }), C;
  }
  function ue(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = h);
      }, function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = h);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var d = { current: null }, le = { transition: null }, Te = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: le, ReactCurrentOwner: q };
  return _.Children = { map: Y, forEach: function(n, s, h) {
    Y(n, function() {
      s.apply(this, arguments);
    }, h);
  }, count: function(n) {
    var s = 0;
    return Y(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return Y(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!we(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, _.Component = ne, _.Fragment = Re, _.Profiler = ve, _.PureComponent = F, _.StrictMode = X, _.Suspense = $, _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, _.cloneElement = function(n, s, h) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var C = ce({}, n.props), g = n.key, P = n.ref, k = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (P = s.ref, k = q.current), s.key !== void 0 && (g = "" + s.key), n.type && n.type.defaultProps)
        var T = n.type.defaultProps;
      for (w in s)
        L.call(s, w) && !fe.hasOwnProperty(w) && (C[w] = s[w] === void 0 && T !== void 0 ? T[w] : s[w]);
    }
    var w = arguments.length - 2;
    if (w === 1)
      C.children = h;
    else if (1 < w) {
      T = Array(w);
      for (var W = 0; W < w; W++)
        T[W] = arguments[W + 2];
      C.children = T;
    }
    return { $$typeof: V, type: n.type, key: g, ref: P, props: C, _owner: k };
  }, _.createContext = function(n) {
    return n = { $$typeof: te, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: re, _context: n }, n.Consumer = n;
  }, _.createElement = pe, _.createFactory = function(n) {
    var s = pe.bind(null, n);
    return s.type = n, s;
  }, _.createRef = function() {
    return { current: null };
  }, _.forwardRef = function(n) {
    return { $$typeof: Q, render: n };
  }, _.isValidElement = we, _.lazy = function(n) {
    return { $$typeof: N, _payload: { _status: -1, _result: n }, _init: ue };
  }, _.memo = function(n, s) {
    return { $$typeof: Z, type: n, compare: s === void 0 ? null : s };
  }, _.startTransition = function(n) {
    var s = le.transition;
    le.transition = {};
    try {
      n();
    } finally {
      le.transition = s;
    }
  }, _.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, _.useCallback = function(n, s) {
    return d.current.useCallback(n, s);
  }, _.useContext = function(n) {
    return d.current.useContext(n);
  }, _.useDebugValue = function() {
  }, _.useDeferredValue = function(n) {
    return d.current.useDeferredValue(n);
  }, _.useEffect = function(n, s) {
    return d.current.useEffect(n, s);
  }, _.useId = function() {
    return d.current.useId();
  }, _.useImperativeHandle = function(n, s, h) {
    return d.current.useImperativeHandle(n, s, h);
  }, _.useInsertionEffect = function(n, s) {
    return d.current.useInsertionEffect(n, s);
  }, _.useLayoutEffect = function(n, s) {
    return d.current.useLayoutEffect(n, s);
  }, _.useMemo = function(n, s) {
    return d.current.useMemo(n, s);
  }, _.useReducer = function(n, s, h) {
    return d.current.useReducer(n, s, h);
  }, _.useRef = function(n) {
    return d.current.useRef(n);
  }, _.useState = function(n) {
    return d.current.useState(n);
  }, _.useSyncExternalStore = function(n, s, h) {
    return d.current.useSyncExternalStore(n, s, h);
  }, _.useTransition = function() {
    return d.current.useTransition();
  }, _.version = "18.2.0", _;
}
var Je = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Je.exports;
var ft;
function Ut() {
  return ft || (ft = 1, function(V, y) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Re = "18.2.0", X = Symbol.for("react.element"), ve = Symbol.for("react.portal"), re = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), Z = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), ne = Symbol.iterator, ae = "@@iterator";
      function F(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ne && e[ne] || e[ae];
        return typeof r == "function" ? r : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, oe = {
        transition: null
      }, L = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, q = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, fe = {}, pe = null;
      function Ce(e) {
        pe = e;
      }
      fe.setExtraStackFrame = function(e) {
        pe = e;
      }, fe.getCurrentStack = null, fe.getStackAddendum = function() {
        var e = "";
        pe && (e += pe);
        var r = fe.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var we = !1, Ye = !1, Se = !1, H = !1, K = !1, Y = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: oe,
        ReactCurrentOwner: q
      };
      Y.ReactDebugCurrentFrame = fe, Y.ReactCurrentActQueue = L;
      function ue(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          le("warn", e, a);
        }
      }
      function d(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          le("error", e, a);
        }
      }
      function le(e, r, a) {
        {
          var o = Y.ReactDebugCurrentFrame, i = o.getStackAddendum();
          i !== "" && (r += "%s", a = a.concat([i]));
          var v = a.map(function(l) {
            return String(l);
          });
          v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
        }
      }
      var Te = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", i = o + "." + r;
          if (Te[i])
            return;
          d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Te[i] = !0;
        }
      }
      var s = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, h = Object.assign, C = {};
      Object.freeze(C);
      function g(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      g.prototype.isReactComponent = {}, g.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, g.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var P = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, k = function(e, r) {
          Object.defineProperty(g.prototype, e, {
            get: function() {
              ue("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var T in P)
          P.hasOwnProperty(T) && k(T, P[T]);
      }
      function w() {
      }
      w.prototype = g.prototype;
      function W(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      var me = W.prototype = new w();
      me.constructor = W, h(me, g.prototype), me.isPureReactComponent = !0;
      function mr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Xe = Array.isArray;
      function $e(e) {
        return Xe(e);
      }
      function _r(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Ne(e) {
        try {
          return Oe(e), !1;
        } catch {
          return !0;
        }
      }
      function Oe(e) {
        return "" + e;
      }
      function Pe(e) {
        if (Ne(e))
          return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _r(e)), Oe(e);
      }
      function Qe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var i = r.displayName || r.name || "";
        return i !== "" ? a + "(" + i + ")" : a;
      }
      function ke(e) {
        return e.displayName || "Context";
      }
      function de(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case re:
            return "Fragment";
          case ve:
            return "Portal";
          case Q:
            return "Profiler";
          case te:
            return "StrictMode";
          case U:
            return "Suspense";
          case ee:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case Z:
              var r = e;
              return ke(r) + ".Consumer";
            case $:
              var a = e;
              return ke(a._context) + ".Provider";
            case N:
              return Qe(e, e.render, "ForwardRef");
            case G:
              var o = e.displayName || null;
              return o !== null ? o : de(e.type) || "Memo";
            case ce: {
              var i = e, v = i._payload, l = i._init;
              try {
                return de(l(v));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var je = Object.prototype.hasOwnProperty, Le = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ze, er, Me;
      Me = {};
      function Be(e) {
        if (je.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function _e(e) {
        if (je.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function gr(e, r) {
        var a = function() {
          Ze || (Ze = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function rr(e, r) {
        var a = function() {
          er || (er = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function tr(e) {
        if (typeof e.ref == "string" && q.current && e.__self && q.current.stateNode !== e.__self) {
          var r = de(q.current.type);
          Me[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Me[r] = !0);
        }
      }
      var xe = function(e, r, a, o, i, v, l) {
        var p = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: X,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: v
        };
        return p._store = {}, Object.defineProperty(p._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(p, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(p, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
      };
      function br(e, r, a) {
        var o, i = {}, v = null, l = null, p = null, E = null;
        if (r != null) {
          Be(r) && (l = r.ref, tr(r)), _e(r) && (Pe(r.key), v = "" + r.key), p = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            je.call(r, o) && !Le.hasOwnProperty(o) && (i[o] = r[o]);
        }
        var O = arguments.length - 2;
        if (O === 1)
          i.children = a;
        else if (O > 1) {
          for (var j = Array(O), x = 0; x < O; x++)
            j[x] = arguments[x + 2];
          Object.freeze && Object.freeze(j), i.children = j;
        }
        if (e && e.defaultProps) {
          var D = e.defaultProps;
          for (o in D)
            i[o] === void 0 && (i[o] = D[o]);
        }
        if (v || l) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && gr(i, M), l && rr(i, M);
        }
        return xe(e, v, l, p, E, q.current, i);
      }
      function Er(e, r) {
        var a = xe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Rr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, i = h({}, e.props), v = e.key, l = e.ref, p = e._self, E = e._source, O = e._owner;
        if (r != null) {
          Be(r) && (l = r.ref, O = q.current), _e(r) && (Pe(r.key), v = "" + r.key);
          var j;
          e.type && e.type.defaultProps && (j = e.type.defaultProps);
          for (o in r)
            je.call(r, o) && !Le.hasOwnProperty(o) && (r[o] === void 0 && j !== void 0 ? i[o] = j[o] : i[o] = r[o]);
        }
        var x = arguments.length - 2;
        if (x === 1)
          i.children = a;
        else if (x > 1) {
          for (var D = Array(x), M = 0; M < x; M++)
            D[M] = arguments[M + 2];
          i.children = D;
        }
        return xe(e.type, v, l, p, E, O, i);
      }
      function ge(e) {
        return typeof e == "object" && e !== null && e.$$typeof === X;
      }
      var nr = ".", Cr = ":";
      function wr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(i) {
          return a[i];
        });
        return "$" + o;
      }
      var We = !1, ar = /\/+/g;
      function ye(e) {
        return e.replace(ar, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Pe(e.key), wr("" + e.key)) : r.toString(36);
      }
      function be(e, r, a, o, i) {
        var v = typeof e;
        (v === "undefined" || v === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (v) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case X:
                case ve:
                  l = !0;
              }
          }
        if (l) {
          var p = e, E = i(p), O = o === "" ? nr + Ae(p, 0) : o;
          if ($e(E)) {
            var j = "";
            O != null && (j = ye(O) + "/"), be(E, r, j, "", function(Wt) {
              return Wt;
            });
          } else
            E != null && (ge(E) && (E.key && (!p || p.key !== E.key) && Pe(E.key), E = Er(
              E,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (E.key && (!p || p.key !== E.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                ye("" + E.key) + "/"
              ) : "") + O
            )), r.push(E));
          return 1;
        }
        var x, D, M = 0, z = o === "" ? nr : o + Cr;
        if ($e(e))
          for (var yr = 0; yr < e.length; yr++)
            x = e[yr], D = z + Ae(x, yr), M += be(x, r, a, D, i);
        else {
          var Lr = F(e);
          if (typeof Lr == "function") {
            var ut = e;
            Lr === ut.entries && (We || ue("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), We = !0);
            for (var Lt = Lr.call(ut), it, Mt = 0; !(it = Lt.next()).done; )
              x = it.value, D = z + Ae(x, Mt++), M += be(x, r, a, D, i);
          } else if (v === "object") {
            var st = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (st === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : st) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return M;
      }
      function De(e, r, a) {
        if (e == null)
          return e;
        var o = [], i = 0;
        return be(e, o, "", "", function(v) {
          return r.call(a, v, i++);
        }), o;
      }
      function Sr(e) {
        var r = 0;
        return De(e, function() {
          r++;
        }), r;
      }
      function or(e, r, a) {
        De(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Tr(e) {
        return De(e, function(r) {
          return r;
        }) || [];
      }
      function ur(e) {
        if (!ge(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ir(e) {
        var r = {
          $$typeof: Z,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: $,
          _context: r
        };
        var a = !1, o = !1, i = !1;
        {
          var v = {
            $$typeof: Z,
            _context: r
          };
          Object.defineProperties(v, {
            Provider: {
              get: function() {
                return o || (o = !0, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                i || (ue("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), i = !0);
              }
            }
          }), r.Consumer = v;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Fe = -1, ze = 0, qe = 1, Or = 2;
      function Pr(e) {
        if (e._status === Fe) {
          var r = e._result, a = r();
          if (a.then(function(v) {
            if (e._status === ze || e._status === Fe) {
              var l = e;
              l._status = qe, l._result = v;
            }
          }, function(v) {
            if (e._status === ze || e._status === Fe) {
              var l = e;
              l._status = Or, l._result = v;
            }
          }), e._status === Fe) {
            var o = e;
            o._status = ze, o._result = a;
          }
        }
        if (e._status === qe) {
          var i = e._result;
          return i === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, i), "default" in i || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), i.default;
        } else
          throw e._result;
      }
      function kr(e) {
        var r = {
          // We use these fields to store the result.
          _status: Fe,
          _result: e
        }, a = {
          $$typeof: ce,
          _payload: r,
          _init: Pr
        };
        {
          var o, i;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(v) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = v, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(v) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = v, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function jr(e) {
        e != null && e.$$typeof === G ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: N,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === re || e === Q || K || e === te || e === U || e === ee || H || e === Ie || we || Ye || Se || typeof e == "object" && e !== null && (e.$$typeof === ce || e.$$typeof === G || e.$$typeof === $ || e.$$typeof === Z || e.$$typeof === N || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        u(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: G,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(i) {
              o = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return a;
      }
      function f() {
        var e = he.current;
        return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function R(e) {
        var r = f();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function S(e) {
        var r = f();
        return r.useState(e);
      }
      function b(e, r, a) {
        var o = f();
        return o.useReducer(e, r, a);
      }
      function m(e) {
        var r = f();
        return r.useRef(e);
      }
      function B(e, r) {
        var a = f();
        return a.useEffect(e, r);
      }
      function A(e, r) {
        var a = f();
        return a.useInsertionEffect(e, r);
      }
      function I(e, r) {
        var a = f();
        return a.useLayoutEffect(e, r);
      }
      function J(e, r) {
        var a = f();
        return a.useCallback(e, r);
      }
      function Ee(e, r) {
        var a = f();
        return a.useMemo(e, r);
      }
      function sr(e, r, a) {
        var o = f();
        return o.useImperativeHandle(e, r, a);
      }
      function ie(e, r) {
        {
          var a = f();
          return a.useDebugValue(e, r);
        }
      }
      function yt() {
        var e = f();
        return e.useTransition();
      }
      function ht(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function mt() {
        var e = f();
        return e.useId();
      }
      function _t(e, r, a) {
        var o = f();
        return o.useSyncExternalStore(e, r, a);
      }
      var He = 0, Wr, Vr, Ur, Yr, Br, zr, qr;
      function Hr() {
      }
      Hr.__reactDisabledLog = !0;
      function gt() {
        {
          if (He === 0) {
            Wr = console.log, Vr = console.info, Ur = console.warn, Yr = console.error, Br = console.group, zr = console.groupCollapsed, qr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Hr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          He++;
        }
      }
      function bt() {
        {
          if (He--, He === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: h({}, e, {
                value: Wr
              }),
              info: h({}, e, {
                value: Vr
              }),
              warn: h({}, e, {
                value: Ur
              }),
              error: h({}, e, {
                value: Yr
              }),
              group: h({}, e, {
                value: Br
              }),
              groupCollapsed: h({}, e, {
                value: zr
              }),
              groupEnd: h({}, e, {
                value: qr
              })
            });
          }
          He < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var xr = Y.ReactCurrentDispatcher, Ar;
      function cr(e, r, a) {
        {
          if (Ar === void 0)
            try {
              throw Error();
            } catch (i) {
              var o = i.stack.trim().match(/\n( *(at )?)/);
              Ar = o && o[1] || "";
            }
          return `
` + Ar + e;
        }
      }
      var Dr = !1, fr;
      {
        var Et = typeof WeakMap == "function" ? WeakMap : Map;
        fr = new Et();
      }
      function Gr(e, r) {
        if (!e || Dr)
          return "";
        {
          var a = fr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Dr = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var v;
        v = xr.current, xr.current = null, gt();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (z) {
                o = z;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (z) {
                o = z;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (z) {
              o = z;
            }
            e();
          }
        } catch (z) {
          if (z && o && typeof z.stack == "string") {
            for (var p = z.stack.split(`
`), E = o.stack.split(`
`), O = p.length - 1, j = E.length - 1; O >= 1 && j >= 0 && p[O] !== E[j]; )
              j--;
            for (; O >= 1 && j >= 0; O--, j--)
              if (p[O] !== E[j]) {
                if (O !== 1 || j !== 1)
                  do
                    if (O--, j--, j < 0 || p[O] !== E[j]) {
                      var x = `
` + p[O].replace(" at new ", " at ");
                      return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && fr.set(e, x), x;
                    }
                  while (O >= 1 && j >= 0);
                break;
              }
          }
        } finally {
          Dr = !1, xr.current = v, bt(), Error.prepareStackTrace = i;
        }
        var D = e ? e.displayName || e.name : "", M = D ? cr(D) : "";
        return typeof e == "function" && fr.set(e, M), M;
      }
      function Rt(e, r, a) {
        return Gr(e, !1);
      }
      function Ct(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function lr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Gr(e, Ct(e));
        if (typeof e == "string")
          return cr(e);
        switch (e) {
          case U:
            return cr("Suspense");
          case ee:
            return cr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case N:
              return Rt(e.render);
            case G:
              return lr(e.type, r, a);
            case ce: {
              var o = e, i = o._payload, v = o._init;
              try {
                return lr(v(i), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Kr = {}, Jr = Y.ReactDebugCurrentFrame;
      function dr(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Jr.setExtraStackFrame(a);
        } else
          Jr.setExtraStackFrame(null);
      }
      function wt(e, r, a, o, i) {
        {
          var v = Function.call.bind(je);
          for (var l in e)
            if (v(e, l)) {
              var p = void 0;
              try {
                if (typeof e[l] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                p = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (O) {
                p = O;
              }
              p && !(p instanceof Error) && (dr(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof p), dr(null)), p instanceof Error && !(p.message in Kr) && (Kr[p.message] = !0, dr(i), d("Failed %s type: %s", a, p.message), dr(null));
            }
        }
      }
      function Ve(e) {
        if (e) {
          var r = e._owner, a = lr(e.type, e._source, r ? r.type : null);
          Ce(a);
        } else
          Ce(null);
      }
      var Fr;
      Fr = !1;
      function Xr() {
        if (q.current) {
          var e = de(q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function St(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Tt(e) {
        return e != null ? St(e.__source) : "";
      }
      var Qr = {};
      function Ot(e) {
        var r = Xr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function Zr(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Ot(r);
          if (!Qr[a]) {
            Qr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== q.current && (o = " It was passed a child from " + de(e._owner.type) + "."), Ve(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ve(null);
          }
        }
      }
      function et(e, r) {
        if (typeof e == "object") {
          if ($e(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              ge(o) && Zr(o, r);
            }
          else if (ge(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = F(e);
            if (typeof i == "function" && i !== e.entries)
              for (var v = i.call(e), l; !(l = v.next()).done; )
                ge(l.value) && Zr(l.value, r);
          }
        }
      }
      function rt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === N || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === G))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = de(r);
            wt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Fr) {
            Fr = !0;
            var i = de(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ve(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ve(null);
              break;
            }
          }
          e.ref !== null && (Ve(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), Ve(null));
        }
      }
      function tt(e, r, a) {
        var o = u(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = Tt(r);
          v ? i += v : i += Xr();
          var l;
          e === null ? l = "null" : $e(e) ? l = "array" : e !== void 0 && e.$$typeof === X ? (l = "<" + (de(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
        }
        var p = br.apply(this, arguments);
        if (p == null)
          return p;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            et(arguments[E], e);
        return e === re ? Pt(p) : rt(p), p;
      }
      var nt = !1;
      function kt(e) {
        var r = tt.bind(null, e);
        return r.type = e, nt || (nt = !0, ue("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ue("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function jt(e, r, a) {
        for (var o = Rr.apply(this, arguments), i = 2; i < arguments.length; i++)
          et(arguments[i], o.type);
        return rt(o), o;
      }
      function xt(e, r) {
        var a = oe.transition;
        oe.transition = {};
        var o = oe.transition;
        oe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (oe.transition = a, a === null && o._updatedFibers) {
            var i = o._updatedFibers.size;
            i > 10 && ue("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var at = !1, vr = null;
      function At(e) {
        if (vr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = V && V[r];
            vr = a.call(V, "timers").setImmediate;
          } catch {
            vr = function(i) {
              at === !1 && (at = !0, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var v = new MessageChannel();
              v.port1.onmessage = i, v.port2.postMessage(void 0);
            };
          }
        return vr(e);
      }
      var Ue = 0, ot = !1;
      function Dt(e) {
        {
          var r = Ue;
          Ue++, L.current === null && (L.current = []);
          var a = L.isBatchingLegacy, o;
          try {
            if (L.isBatchingLegacy = !0, o = e(), !a && L.didScheduleLegacyUpdate) {
              var i = L.current;
              i !== null && (L.didScheduleLegacyUpdate = !1, Nr(i));
            }
          } catch (D) {
            throw pr(r), D;
          } finally {
            L.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var v = o, l = !1, p = {
              then: function(D, M) {
                l = !0, v.then(function(z) {
                  pr(r), Ue === 0 ? Ir(z, D, M) : D(z);
                }, function(z) {
                  pr(r), M(z);
                });
              }
            };
            return !ot && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (ot = !0, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), p;
          } else {
            var E = o;
            if (pr(r), Ue === 0) {
              var O = L.current;
              O !== null && (Nr(O), L.current = null);
              var j = {
                then: function(D, M) {
                  L.current === null ? (L.current = [], Ir(E, D, M)) : D(E);
                }
              };
              return j;
            } else {
              var x = {
                then: function(D, M) {
                  D(E);
                }
              };
              return x;
            }
          }
        }
      }
      function pr(e) {
        e !== Ue - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ue = e;
      }
      function Ir(e, r, a) {
        {
          var o = L.current;
          if (o !== null)
            try {
              Nr(o), At(function() {
                o.length === 0 ? (L.current = null, r(e)) : Ir(e, r, a);
              });
            } catch (i) {
              a(i);
            }
          else
            r(e);
        }
      }
      var $r = !1;
      function Nr(e) {
        if (!$r) {
          $r = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            $r = !1;
          }
        }
      }
      var Ft = tt, It = jt, $t = kt, Nt = {
        map: De,
        forEach: or,
        count: Sr,
        toArray: Tr,
        only: ur
      };
      y.Children = Nt, y.Component = g, y.Fragment = re, y.Profiler = Q, y.PureComponent = W, y.StrictMode = te, y.Suspense = U, y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, y.cloneElement = It, y.createContext = ir, y.createElement = Ft, y.createFactory = $t, y.createRef = mr, y.forwardRef = jr, y.isValidElement = ge, y.lazy = kr, y.memo = c, y.startTransition = xt, y.unstable_act = Dt, y.useCallback = J, y.useContext = R, y.useDebugValue = ie, y.useDeferredValue = ht, y.useEffect = B, y.useId = mt, y.useImperativeHandle = sr, y.useInsertionEffect = A, y.useLayoutEffect = I, y.useMemo = Ee, y.useReducer = b, y.useRef = m, y.useState = S, y.useSyncExternalStore = _t, y.useTransition = yt, y.version = Re, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Je, Je.exports)), Je.exports;
}
var lt;
function pt() {
  return lt || (lt = 1, process.env.NODE_ENV === "production" ? hr.exports = Vt() : hr.exports = Ut()), hr.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Yt() {
  if (dt)
    return Ge;
  dt = 1;
  var V = pt(), y = Symbol.for("react.element"), Re = Symbol.for("react.fragment"), X = Object.prototype.hasOwnProperty, ve = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(Q, $, Z) {
    var N, U = {}, ee = null, G = null;
    Z !== void 0 && (ee = "" + Z), $.key !== void 0 && (ee = "" + $.key), $.ref !== void 0 && (G = $.ref);
    for (N in $)
      X.call($, N) && !re.hasOwnProperty(N) && (U[N] = $[N]);
    if (Q && Q.defaultProps)
      for (N in $ = Q.defaultProps, $)
        U[N] === void 0 && (U[N] = $[N]);
    return { $$typeof: y, type: Q, key: ee, ref: G, props: U, _owner: ve.current };
  }
  return Ge.Fragment = Re, Ge.jsx = te, Ge.jsxs = te, Ge;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Bt() {
  return vt || (vt = 1, process.env.NODE_ENV !== "production" && function() {
    var V = pt(), y = Symbol.for("react.element"), Re = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), ve = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), Q = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), ce = Symbol.iterator, Ie = "@@iterator";
    function ne(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = ce && t[ce] || t[Ie];
      return typeof u == "function" ? u : null;
    }
    var ae = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(t) {
      {
        for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
          c[f - 1] = arguments[f];
        he("error", t, c);
      }
    }
    function he(t, u, c) {
      {
        var f = ae.ReactDebugCurrentFrame, R = f.getStackAddendum();
        R !== "" && (u += "%s", c = c.concat([R]));
        var S = c.map(function(b) {
          return String(b);
        });
        S.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var oe = !1, L = !1, q = !1, fe = !1, pe = !1, Ce;
    Ce = Symbol.for("react.module.reference");
    function we(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === X || t === re || pe || t === ve || t === Z || t === N || fe || t === G || oe || L || q || typeof t == "object" && t !== null && (t.$$typeof === ee || t.$$typeof === U || t.$$typeof === te || t.$$typeof === Q || t.$$typeof === $ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Ce || t.getModuleId !== void 0));
    }
    function Ye(t, u, c) {
      var f = t.displayName;
      if (f)
        return f;
      var R = u.displayName || u.name || "";
      return R !== "" ? c + "(" + R + ")" : c;
    }
    function Se(t) {
      return t.displayName || "Context";
    }
    function H(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case X:
          return "Fragment";
        case Re:
          return "Portal";
        case re:
          return "Profiler";
        case ve:
          return "StrictMode";
        case Z:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Q:
            var u = t;
            return Se(u) + ".Consumer";
          case te:
            var c = t;
            return Se(c._context) + ".Provider";
          case $:
            return Ye(t, t.render, "ForwardRef");
          case U:
            var f = t.displayName || null;
            return f !== null ? f : H(t.type) || "Memo";
          case ee: {
            var R = t, S = R._payload, b = R._init;
            try {
              return H(b(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, Y = 0, ue, d, le, Te, n, s, h;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function g() {
      {
        if (Y === 0) {
          ue = console.log, d = console.info, le = console.warn, Te = console.error, n = console.group, s = console.groupCollapsed, h = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: C,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Y++;
      }
    }
    function P() {
      {
        if (Y--, Y === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, t, {
              value: ue
            }),
            info: K({}, t, {
              value: d
            }),
            warn: K({}, t, {
              value: le
            }),
            error: K({}, t, {
              value: Te
            }),
            group: K({}, t, {
              value: n
            }),
            groupCollapsed: K({}, t, {
              value: s
            }),
            groupEnd: K({}, t, {
              value: h
            })
          });
        }
        Y < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var k = ae.ReactCurrentDispatcher, T;
    function w(t, u, c) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (R) {
            var f = R.stack.trim().match(/\n( *(at )?)/);
            T = f && f[1] || "";
          }
        return `
` + T + t;
      }
    }
    var W = !1, me;
    {
      var mr = typeof WeakMap == "function" ? WeakMap : Map;
      me = new mr();
    }
    function Xe(t, u) {
      if (!t || W)
        return "";
      {
        var c = me.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      W = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = k.current, k.current = null, g();
      try {
        if (u) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (ie) {
              f = ie;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (ie) {
              f = ie;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            f = ie;
          }
          t();
        }
      } catch (ie) {
        if (ie && f && typeof ie.stack == "string") {
          for (var m = ie.stack.split(`
`), B = f.stack.split(`
`), A = m.length - 1, I = B.length - 1; A >= 1 && I >= 0 && m[A] !== B[I]; )
            I--;
          for (; A >= 1 && I >= 0; A--, I--)
            if (m[A] !== B[I]) {
              if (A !== 1 || I !== 1)
                do
                  if (A--, I--, I < 0 || m[A] !== B[I]) {
                    var J = `
` + m[A].replace(" at new ", " at ");
                    return t.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", t.displayName)), typeof t == "function" && me.set(t, J), J;
                  }
                while (A >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        W = !1, k.current = S, P(), Error.prepareStackTrace = R;
      }
      var Ee = t ? t.displayName || t.name : "", sr = Ee ? w(Ee) : "";
      return typeof t == "function" && me.set(t, sr), sr;
    }
    function $e(t, u, c) {
      return Xe(t, !1);
    }
    function _r(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Ne(t, u, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Xe(t, _r(t));
      if (typeof t == "string")
        return w(t);
      switch (t) {
        case Z:
          return w("Suspense");
        case N:
          return w("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case $:
            return $e(t.render);
          case U:
            return Ne(t.type, u, c);
          case ee: {
            var f = t, R = f._payload, S = f._init;
            try {
              return Ne(S(R), u, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, Pe = {}, Qe = ae.ReactDebugCurrentFrame;
    function ke(t) {
      if (t) {
        var u = t._owner, c = Ne(t.type, t._source, u ? u.type : null);
        Qe.setExtraStackFrame(c);
      } else
        Qe.setExtraStackFrame(null);
    }
    function de(t, u, c, f, R) {
      {
        var S = Function.call.bind(Oe);
        for (var b in t)
          if (S(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var B = Error((f || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              m = t[b](u, b, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              m = A;
            }
            m && !(m instanceof Error) && (ke(R), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, b, typeof m), ke(null)), m instanceof Error && !(m.message in Pe) && (Pe[m.message] = !0, ke(R), F("Failed %s type: %s", c, m.message), ke(null));
          }
      }
    }
    var je = Array.isArray;
    function Le(t) {
      return je(t);
    }
    function Ze(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function er(t) {
      try {
        return Me(t), !1;
      } catch {
        return !0;
      }
    }
    function Me(t) {
      return "" + t;
    }
    function Be(t) {
      if (er(t))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(t)), Me(t);
    }
    var _e = ae.ReactCurrentOwner, gr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rr, tr, xe;
    xe = {};
    function br(t) {
      if (Oe.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Er(t) {
      if (Oe.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rr(t, u) {
      if (typeof t.ref == "string" && _e.current && u && _e.current.stateNode !== u) {
        var c = H(_e.current.type);
        xe[c] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(_e.current.type), t.ref), xe[c] = !0);
      }
    }
    function ge(t, u) {
      {
        var c = function() {
          rr || (rr = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function nr(t, u) {
      {
        var c = function() {
          tr || (tr = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Cr = function(t, u, c, f, R, S, b) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: c,
        props: b,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function wr(t, u, c, f, R) {
      {
        var S, b = {}, m = null, B = null;
        c !== void 0 && (Be(c), m = "" + c), Er(u) && (Be(u.key), m = "" + u.key), br(u) && (B = u.ref, Rr(u, R));
        for (S in u)
          Oe.call(u, S) && !gr.hasOwnProperty(S) && (b[S] = u[S]);
        if (t && t.defaultProps) {
          var A = t.defaultProps;
          for (S in A)
            b[S] === void 0 && (b[S] = A[S]);
        }
        if (m || B) {
          var I = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && ge(b, I), B && nr(b, I);
        }
        return Cr(t, m, B, R, f, _e.current, b);
      }
    }
    var We = ae.ReactCurrentOwner, ar = ae.ReactDebugCurrentFrame;
    function ye(t) {
      if (t) {
        var u = t._owner, c = Ne(t.type, t._source, u ? u.type : null);
        ar.setExtraStackFrame(c);
      } else
        ar.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function be(t) {
      return typeof t == "object" && t !== null && t.$$typeof === y;
    }
    function De() {
      {
        if (We.current) {
          var t = H(We.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Sr(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + u + ":" + c + ".";
        }
        return "";
      }
    }
    var or = {};
    function Tr(t) {
      {
        var u = De();
        if (!u) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (u = `

Check the top-level render call using <` + c + ">.");
        }
        return u;
      }
    }
    function ur(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Tr(u);
        if (or[c])
          return;
        or[c] = !0;
        var f = "";
        t && t._owner && t._owner !== We.current && (f = " It was passed a child from " + H(t._owner.type) + "."), ye(t), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), ye(null);
      }
    }
    function ir(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Le(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            be(f) && ur(f, u);
          }
        else if (be(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var R = ne(t);
          if (typeof R == "function" && R !== t.entries)
            for (var S = R.call(t), b; !(b = S.next()).done; )
              be(b.value) && ur(b.value, u);
        }
      }
    }
    function Fe(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var c;
        if (typeof u == "function")
          c = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === $ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === U))
          c = u.propTypes;
        else
          return;
        if (c) {
          var f = H(u);
          de(c, t.props, "prop", f, t);
        } else if (u.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var R = H(u);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ze(t) {
      {
        for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
          var f = u[c];
          if (f !== "children" && f !== "key") {
            ye(t), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), ye(null);
            break;
          }
        }
        t.ref !== null && (ye(t), F("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    function qe(t, u, c, f, R, S) {
      {
        var b = we(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = Sr(R);
          B ? m += B : m += De();
          var A;
          t === null ? A = "null" : Le(t) ? A = "array" : t !== void 0 && t.$$typeof === y ? (A = "<" + (H(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : A = typeof t, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, m);
        }
        var I = wr(t, u, c, R, S);
        if (I == null)
          return I;
        if (b) {
          var J = u.children;
          if (J !== void 0)
            if (f)
              if (Le(J)) {
                for (var Ee = 0; Ee < J.length; Ee++)
                  ir(J[Ee], t);
                Object.freeze && Object.freeze(J);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ir(J, t);
        }
        return t === X ? ze(I) : Fe(I), I;
      }
    }
    function Or(t, u, c) {
      return qe(t, u, c, !0);
    }
    function Pr(t, u, c) {
      return qe(t, u, c, !1);
    }
    var kr = Pr, jr = Or;
    Ke.Fragment = X, Ke.jsx = kr, Ke.jsxs = jr;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Mr.exports = Yt() : Mr.exports = Bt();
var se = Mr.exports;
function zt(V) {
  return /* @__PURE__ */ se.jsx("div", { children: /* @__PURE__ */ se.jsx("button", { className: "MyButton", onClick: V.onClick, children: V.buttonText || "Press" }) });
}
function qt(V) {
  return /* @__PURE__ */ se.jsx("div", { style: { height: "100%", width: "100%" }, children: /* @__PURE__ */ se.jsxs("pre", { style: { fontFamily: "Arial", height: "100%", width: "100%" }, children: [
    /* @__PURE__ */ se.jsx("div", { className: "MonoFont", children: `( ${V.content || "hello"} )` }),
    /* @__PURE__ */ se.jsx("div", { className: "MonoFont", children: "     \\" }),
    /* @__PURE__ */ se.jsx("div", { className: "MonoFont", children: "      ^__^" }),
    /* @__PURE__ */ se.jsx("div", { className: "MonoFont", children: "      (oo)\\________" }),
    /* @__PURE__ */ se.jsx("div", { className: "MonoFont", children: "      (__)\\         )^" }),
    /* @__PURE__ */ se.jsx("div", { className: "MonoFont", children: "          ||------w|" }),
    /* @__PURE__ */ se.jsx("div", { className: "MonoFont", children: "          ||      ||" })
  ] }) });
}
export {
  zt as CustomizedButton,
  qt as CustomizedCowsay
};
