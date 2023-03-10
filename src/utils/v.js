!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.vuelidate = e())
    : (t.vuelidate = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function r(n) {
      if (e[n]) return e[n].exports;
      var o = (e[n] = { i: n, l: !1, exports: {} });
      return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = t),
      (r.c = e),
      (r.d = function (t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (t, e) {
        if ((1 & e && (t = r(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            r.d(
              n,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(e, "a", e), e;
      }),
      (r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (r.p = "/"),
      r((r.s = 3))
    );
  })({
    3: function (t, e, r) {
      "use strict";
      function n(t) {
        return null == t;
      }
      function o(t) {
        return null != t;
      }
      function i(t, e) {
        return e.tag === t.tag && e.key === t.key;
      }
      function u(t) {
        var e = t.tag;
        t.vm = new e({ data: t.args });
      }
      function a(t, e, r) {
        var n,
          i,
          u = {};
        for (n = e; n <= r; ++n) o((i = t[n].key)) && (u[i] = n);
        return u;
      }
      function l(t, e, r) {
        for (; e <= r; ++e) u(t[e]);
      }
      function c(t, e, r) {
        for (; e <= r; ++e) {
          var n = t[e];
          o(n) && (n.vm.$destroy(), (n.vm = null));
        }
      }
      function s(t, e) {
        t !== e &&
          ((e.vm = t.vm),
          (function (t) {
            for (var e = Object.keys(t.args), r = 0; r < e.length; r++)
              e.forEach(function (e) {
                t.vm[e] = t.args[e];
              });
          })(e));
      }
      function f(t, e) {
        o(t) && o(e)
          ? t !== e &&
            (function (t, e) {
              for (
                var r,
                  f,
                  d,
                  y = 0,
                  h = 0,
                  p = t.length - 1,
                  v = t[0],
                  b = t[p],
                  m = e.length - 1,
                  g = e[0],
                  M = e[m];
                y <= p && h <= m;

              )
                n(v)
                  ? (v = t[++y])
                  : n(b)
                  ? (b = t[--p])
                  : i(v, g)
                  ? (s(v, g), (v = t[++y]), (g = e[++h]))
                  : i(b, M)
                  ? (s(b, M), (b = t[--p]), (M = e[--m]))
                  : i(v, M)
                  ? (s(v, M), (v = t[++y]), (M = e[--m]))
                  : i(b, g)
                  ? (s(b, g), (b = t[--p]), (g = e[++h]))
                  : (n(r) && (r = a(t, y, p)),
                    n((f = o(g.key) ? r[g.key] : null))
                      ? (u(g), (g = e[++h]))
                      : i((d = t[f]), g)
                      ? (s(d, g), (t[f] = void 0), (g = e[++h]))
                      : (u(g), (g = e[++h])));
              y > p ? l(e, h, m) : h > m && c(t, y, p);
            })(t, e)
          : o(e)
          ? l(e, 0, e.length - 1)
          : o(t) && c(t, 0, t.length - 1);
      }
      function d(t, e, r) {
        return { tag: t, key: e, args: r };
      }
      function y(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? y(Object(r), !0).forEach(function (e) {
                p(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : y(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function p(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function v(t) {
        return (v =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      r.r(e),
        r.d(e, "Vuelidate", function () {
          return q;
        }),
        r.d(e, "validationMixin", function () {
          return U;
        }),
        r.d(e, "withParams", function () {
          return j;
        });
      var b = [],
        m = null;
      function g() {
        null !== m && b.push(m), (m = {});
      }
      function M() {
        var t = m,
          e = (m = b.pop() || null);
        return e && (Array.isArray(e.$sub) || (e.$sub = []), e.$sub.push(t)), t;
      }
      function O(t) {
        if ("object" !== v(t) || Array.isArray(t))
          throw new Error("params must be an object");
        m = h(h({}, m), t);
      }
      function $(t) {
        var e = t(O);
        return function () {
          g();
          try {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return e.apply(this, r);
          } finally {
            M();
          }
        };
      }
      function j(t, e) {
        return "object" === v(t) && void 0 !== e
          ? ((r = t),
            (n = e),
            $(function (t) {
              return function () {
                t(r);
                for (
                  var e = arguments.length, o = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  o[i] = arguments[i];
                return n.apply(this, o);
              };
            }))
          : $(t);
        var r, n;
      }
      function _(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return P(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          (function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return P(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return P(t, e);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function P(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      function w(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function x(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? w(Object(r), !0).forEach(function (e) {
                k(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function k(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function z(t) {
        return (z =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var A = function () {
          return null;
        },
        S = function (t, e, r) {
          return t.reduce(function (t, n) {
            return (t[r ? r(n) : n] = e(n)), t;
          }, {});
        };
      function K(t) {
        return "function" == typeof t;
      }
      function W(t) {
        return null !== t && ("object" === z(t) || K(t));
      }
      var D = function (t, e, r, n) {
        if ("function" == typeof r) return r.call(t, e, n);
        r = Array.isArray(r) ? r : r.split(".");
        for (var o = 0; o < r.length; o++) {
          if (!e || "object" !== z(e)) return n;
          e = e[r[o]];
        }
        return void 0 === e ? n : e;
      };
      var E = {
        $invalid: function () {
          var t = this,
            e = this.proxy;
          return (
            this.nestedKeys.some(function (e) {
              return t.refProxy(e).$invalid;
            }) ||
            this.ruleKeys.some(function (t) {
              return !e[t];
            })
          );
        },
        $dirty: function () {
          var t = this;
          return (
            !!this.dirty ||
            (0 !== this.nestedKeys.length &&
              this.nestedKeys.every(function (e) {
                return t.refProxy(e).$dirty;
              }))
          );
        },
        $anyDirty: function () {
          var t = this;
          return (
            !!this.dirty ||
            (0 !== this.nestedKeys.length &&
              this.nestedKeys.some(function (e) {
                return t.refProxy(e).$anyDirty;
              }))
          );
        },
        $error: function () {
          return this.$dirty && !this.$pending && this.$invalid;
        },
        $anyError: function () {
          var t = this;
          return (
            !!this.$error ||
            this.nestedKeys.some(function (e) {
              return t.refProxy(e).$anyError;
            })
          );
        },
        $pending: function () {
          var t = this;
          return (
            this.ruleKeys.some(function (e) {
              return t.getRef(e).$pending;
            }) ||
            this.nestedKeys.some(function (e) {
              return t.refProxy(e).$pending;
            })
          );
        },
        $params: function () {
          var t = this,
            e = this.validations;
          return x(
            x(
              {},
              S(this.nestedKeys, function (t) {
                return (e[t] && e[t].$params) || null;
              })
            ),
            S(this.ruleKeys, function (e) {
              return t.getRef(e).$params;
            })
          );
        },
      };
      function V(t) {
        this.dirty = t;
        var e = this.proxy,
          r = t ? "$touch" : "$reset";
        this.nestedKeys.forEach(function (t) {
          e[t][r]();
        });
      }
      var R = {
          $touch: function () {
            V.call(this, !0);
          },
          $reset: function () {
            V.call(this, !1);
          },
          $flattenParams: function () {
            var t = this.proxy,
              e = [];
            for (var r in this.$params)
              if (this.isNested(r)) {
                for (var n = t[r].$flattenParams(), o = 0; o < n.length; o++)
                  n[o].path.unshift(r);
                e = e.concat(n);
              } else e.push({ path: [], name: r, params: this.$params[r] });
            return e;
          },
        },
        B = Object.keys(E),
        I = Object.keys(R),
        N = null,
        C = function (t) {
          if (N) return N;
          var e = t.extend({
              computed: {
                refs: function () {
                  var t = this._vval;
                  (this._vval = this.children), f(t, this._vval);
                  var e = {};
                  return (
                    this._vval.forEach(function (t) {
                      e[t.key] = t.vm;
                    }),
                    e
                  );
                },
              },
              beforeCreate: function () {
                this._vval = null;
              },
              beforeDestroy: function () {
                this._vval && (f(this._vval), (this._vval = null));
              },
              methods: {
                getModel: function () {
                  return this.lazyModel
                    ? this.lazyModel(this.prop)
                    : this.model;
                },
                getModelKey: function (t) {
                  var e = this.getModel();
                  if (e) return e[t];
                },
                hasIter: function () {
                  return !1;
                },
              },
            }),
            r = e.extend({
              data: function () {
                return {
                  rule: null,
                  lazyModel: null,
                  model: null,
                  lazyParentModel: null,
                  rootModel: null,
                };
              },
              methods: {
                runRule: function (e) {
                  var r = this.getModel();
                  g();
                  var n,
                    o = this.rule.call(this.rootModel, r, e),
                    i =
                      W((n = o)) && K(n.then)
                        ? (function (t, e) {
                            var r = new t({ data: { p: !0, v: !1 } });
                            return (
                              e.then(
                                function (t) {
                                  (r.p = !1), (r.v = t);
                                },
                                function (t) {
                                  throw ((r.p = !1), (r.v = !1), t);
                                }
                              ),
                              (r.__isVuelidateAsyncVm = !0),
                              r
                            );
                          })(t, o)
                        : o,
                    u = M();
                  return {
                    output: i,
                    params:
                      u && u.$sub ? (u.$sub.length > 1 ? u : u.$sub[0]) : null,
                  };
                },
              },
              computed: {
                run: function () {
                  var t = this,
                    e = this.lazyParentModel();
                  if (Array.isArray(e) && e.__ob__) {
                    var r = e.__ob__.dep;
                    r.depend();
                    var n = r.constructor.target;
                    if (!this._indirectWatcher) {
                      var o = n.constructor;
                      this._indirectWatcher = new o(
                        this,
                        function () {
                          return t.runRule(e);
                        },
                        null,
                        { lazy: !0 }
                      );
                    }
                    var i = this.getModel();
                    if (!this._indirectWatcher.dirty && this._lastModel === i)
                      return this._indirectWatcher.depend(), n.value;
                    (this._lastModel = i),
                      this._indirectWatcher.evaluate(),
                      this._indirectWatcher.depend();
                  } else
                    this._indirectWatcher &&
                      (this._indirectWatcher.teardown(),
                      (this._indirectWatcher = null));
                  return this._indirectWatcher
                    ? this._indirectWatcher.value
                    : this.runRule(e);
                },
                $params: function () {
                  return this.run.params;
                },
                proxy: function () {
                  var t = this.run.output;
                  return t.__isVuelidateAsyncVm ? !!t.v : !!t;
                },
                $pending: function () {
                  var t = this.run.output;
                  return !!t.__isVuelidateAsyncVm && t.p;
                },
              },
              destroyed: function () {
                this._indirectWatcher &&
                  (this._indirectWatcher.teardown(),
                  (this._indirectWatcher = null));
              },
            }),
            n = e.extend({
              data: function () {
                return {
                  dirty: !1,
                  validations: null,
                  lazyModel: null,
                  model: null,
                  prop: null,
                  lazyParentModel: null,
                  rootModel: null,
                };
              },
              methods: x(
                x({}, R),
                {},
                {
                  refProxy: function (t) {
                    return this.getRef(t).proxy;
                  },
                  getRef: function (t) {
                    return this.refs[t];
                  },
                  isNested: function (t) {
                    return "function" != typeof this.validations[t];
                  },
                }
              ),
              computed: x(
                x({}, E),
                {},
                {
                  nestedKeys: function () {
                    return this.keys.filter(this.isNested);
                  },
                  ruleKeys: function () {
                    var t = this;
                    return this.keys.filter(function (e) {
                      return !t.isNested(e);
                    });
                  },
                  keys: function () {
                    return Object.keys(this.validations).filter(function (t) {
                      return "$params" !== t;
                    });
                  },
                  proxy: function () {
                    var t = this,
                      e = S(this.keys, function (e) {
                        return {
                          enumerable: !0,
                          configurable: !0,
                          get: function () {
                            return t.refProxy(e);
                          },
                        };
                      }),
                      r = S(B, function (e) {
                        return {
                          enumerable: !0,
                          configurable: !0,
                          get: function () {
                            return t[e];
                          },
                        };
                      }),
                      n = S(I, function (e) {
                        return {
                          enumerable: !1,
                          configurable: !0,
                          get: function () {
                            return t[e];
                          },
                        };
                      }),
                      o = this.hasIter()
                        ? {
                            $iter: {
                              enumerable: !0,
                              value: Object.defineProperties({}, x({}, e)),
                            },
                          }
                        : {};
                    return Object.defineProperties(
                      {},
                      x(
                        x(
                          x(x({}, e), o),
                          {},
                          {
                            $model: {
                              enumerable: !0,
                              get: function () {
                                var e = t.lazyParentModel();
                                return null != e ? e[t.prop] : null;
                              },
                              set: function (e) {
                                var r = t.lazyParentModel();
                                null != r && ((r[t.prop] = e), t.$touch());
                              },
                            },
                          },
                          r
                        ),
                        n
                      )
                    );
                  },
                  children: function () {
                    var t = this;
                    return []
                      .concat(
                        _(
                          this.nestedKeys.map(function (e) {
                            return u(t, e);
                          })
                        ),
                        _(
                          this.ruleKeys.map(function (e) {
                            return a(t, e);
                          })
                        )
                      )
                      .filter(Boolean);
                  },
                }
              ),
            }),
            o = n.extend({
              methods: {
                isNested: function (t) {
                  return void 0 !== this.validations[t]();
                },
                getRef: function (t) {
                  var e = this;
                  return {
                    get proxy() {
                      return e.validations[t]() || !1;
                    },
                  };
                },
              },
            }),
            i = n.extend({
              computed: {
                keys: function () {
                  var t = this.getModel();
                  return W(t) ? Object.keys(t) : [];
                },
                tracker: function () {
                  var t = this,
                    e = this.validations.$trackBy;
                  return e
                    ? function (r) {
                        return "".concat(D(t.rootModel, t.getModelKey(r), e));
                      }
                    : function (t) {
                        return "".concat(t);
                      };
                },
                getModelLazy: function () {
                  var t = this;
                  return function () {
                    return t.getModel();
                  };
                },
                children: function () {
                  var t = this,
                    e = this.validations,
                    r = this.getModel(),
                    o = x({}, e);
                  delete o.$trackBy;
                  var i = {};
                  return this.keys
                    .map(function (e) {
                      var u = t.tracker(e);
                      return i.hasOwnProperty(u)
                        ? null
                        : ((i[u] = !0),
                          d(n, u, {
                            validations: o,
                            prop: e,
                            lazyParentModel: t.getModelLazy,
                            model: r[e],
                            rootModel: t.rootModel,
                          }));
                    })
                    .filter(Boolean);
                },
              },
              methods: {
                isNested: function () {
                  return !0;
                },
                getRef: function (t) {
                  return this.refs[this.tracker(t)];
                },
                hasIter: function () {
                  return !0;
                },
              },
            }),
            u = function (t, e) {
              if ("$each" === e)
                return d(i, e, {
                  validations: t.validations[e],
                  lazyParentModel: t.lazyParentModel,
                  prop: e,
                  lazyModel: t.getModel,
                  rootModel: t.rootModel,
                });
              var r = t.validations[e];
              if (Array.isArray(r)) {
                var u = t.rootModel,
                  a = S(
                    r,
                    function (t) {
                      return function () {
                        return D(u, u.$v, t);
                      };
                    },
                    function (t) {
                      return Array.isArray(t) ? t.join(".") : t;
                    }
                  );
                return d(o, e, {
                  validations: a,
                  lazyParentModel: A,
                  prop: e,
                  lazyModel: A,
                  rootModel: u,
                });
              }
              return d(n, e, {
                validations: r,
                lazyParentModel: t.getModel,
                prop: e,
                lazyModel: t.getModelKey,
                rootModel: t.rootModel,
              });
            },
            a = function (t, e) {
              return d(r, e, {
                rule: t.validations[e],
                lazyParentModel: t.lazyParentModel,
                lazyModel: t.getModel,
                rootModel: t.rootModel,
              });
            };
          return (N = { VBase: e, Validation: n });
        },
        T = null;
      var L = function (t, e) {
          var r = (function (t) {
              if (T) return T;
              for (var e = t.constructor; e.super; ) e = e.super;
              return (T = e), e;
            })(t),
            n = C(r),
            o = n.Validation;
          return new (0, n.VBase)({
            computed: {
              children: function () {
                var r = "function" == typeof e ? e.call(t) : e;
                return [
                  d(o, "$v", {
                    validations: r,
                    lazyParentModel: A,
                    prop: "$v",
                    model: t,
                    rootModel: t,
                  }),
                ];
              },
            },
          });
        },
        U = {
          data: function () {
            var t = this.$options.validations;
            return t && (this._vuelidate = L(this, t)), {};
          },
          beforeCreate: function () {
            var t = this.$options;
            t.validations &&
              (t.computed || (t.computed = {}),
              t.computed.$v ||
                (t.computed.$v = function () {
                  return this._vuelidate ? this._vuelidate.refs.$v.proxy : null;
                }));
          },
          beforeDestroy: function () {
            this._vuelidate &&
              (this._vuelidate.$destroy(), (this._vuelidate = null));
          },
        };
      function q(t) {
        t.mixin(U);
      }
      e.default = q;
    },
  });
});
