(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    "+QRC": function (e, t, n) {
      "use strict";
      n("pIFo");
      var o = n("E9nw"),
        r = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          a,
          i,
          l,
          c,
          d,
          s = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          if (
            ((i = o()),
            (l = document.createRange()),
            (c = document.getSelection()),
            ((d = document.createElement("span")).textContent = e),
            (d.style.all = "unset"),
            (d.style.position = "fixed"),
            (d.style.top = 0),
            (d.style.clip = "rect(0, 0, 0, 0)"),
            (d.style.whiteSpace = "pre"),
            (d.style.webkitUserSelect = "text"),
            (d.style.MozUserSelect = "text"),
            (d.style.msUserSelect = "text"),
            (d.style.userSelect = "text"),
            d.addEventListener("copy", function (o) {
              if ((o.stopPropagation(), t.format))
                if ((o.preventDefault(), void 0 === o.clipboardData)) {
                  n && console.warn("unable to use e.clipboardData"),
                    n && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var a = r[t.format] || r.default;
                  window.clipboardData.setData(a, e);
                } else
                  o.clipboardData.clearData(),
                    o.clipboardData.setData(t.format, e);
              t.onCopy && (o.preventDefault(), t.onCopy(o.clipboardData));
            }),
            document.body.appendChild(d),
            l.selectNodeContents(d),
            c.addRange(l),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          s = !0;
        } catch (u) {
          n && console.error("unable to copy using execCommand: ", u),
            n && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (s = !0);
          } catch (u) {
            n && console.error("unable to copy using clipboardData: ", u),
              n && console.error("falling back to prompt"),
              (a = (function (e) {
                var t =
                  (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
                return e.replace(/#{\s*key\s*}/g, t);
              })(
                "message" in t ? t.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(a, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(l)
              : c.removeAllRanges()),
            d && document.body.removeChild(d),
            i();
        }
        return s;
      };
    },
    E9nw: function (e, t, n) {
      n("8+KV"),
        (e.exports = function () {
          var e = document.getSelection();
          if (!e.rangeCount) return function () {};
          for (
            var t = document.activeElement, n = [], o = 0;
            o < e.rangeCount;
            o++
          )
            n.push(e.getRangeAt(o));
          switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
              t.blur();
              break;
            default:
              t = null;
          }
          return (
            e.removeAllRanges(),
            function () {
              "Caret" === e.type && e.removeAllRanges(),
                e.rangeCount ||
                  n.forEach(function (t) {
                    e.addRange(t);
                  }),
                t && t.focus();
            }
          );
        });
    },
    P5Jw: function (e, t, n) {
      "use strict";
      var o = n("rHrb").CopyToClipboard;
      (o.CopyToClipboard = o), (e.exports = o);
    },
    WLL4: function (e, t, n) {
      var o = n("XKFU");
      o(o.S + o.F * !n("nh4g"), "Object", { defineProperties: n("FJW5") });
    },
    "YoL/": function (e, t, n) {
      "use strict";
      n("HAE/");
      var o = n("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(n("q1tI")),
        a = (0, o(n("8/g6")).default)(
          r.default.createElement("path", {
            d:
              "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
          }),
          "Assignment"
        );
      t.default = a;
    },
    jm62: function (e, t, n) {
      var o = n("XKFU"),
        r = n("mQtv"),
        a = n("aCFj"),
        i = n("EemH"),
        l = n("8a7r");
      o(o.S, "Object", {
        getOwnPropertyDescriptors: function (e) {
          for (
            var t, n, o = a(e), c = i.f, d = r(o), s = {}, u = 0;
            d.length > u;

          )
            void 0 !== (n = c(o, (t = d[u++]))) && l(s, t, n);
          return s;
        },
      });
    },
    mQtv: function (e, t, n) {
      var o = n("kJMx"),
        r = n("JiEa"),
        a = n("y3w9"),
        i = n("dyZX").Reflect;
      e.exports =
        (i && i.ownKeys) ||
        function (e) {
          var t = o.f(a(e)),
            n = r.f;
          return n ? t.concat(n(e)) : t;
        };
    },
    rHrb: function (e, t, n) {
      "use strict";
      n("hHhE"),
        n("/SS/"),
        n("V+eJ"),
        n("WLL4"),
        n("jm62"),
        n("8+KV"),
        n("0l/t"),
        n("rGqo"),
        n("yt8O"),
        n("Btvt"),
        n("RW0V"),
        n("rE2o"),
        n("ioFf"),
        n("HAE/"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var o = a(n("q1tI")),
        r = a(n("+QRC"));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function c(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              a = Object.keys(e);
            for (o = 0; o < a.length; o++)
              (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (o = 0; o < a.length; o++)
            (n = a[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function u(e, t) {
        return !t || ("object" !== i(t) && "function" != typeof t) ? f(e) : t;
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function f(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function b(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var h = (function (e) {
        function t() {
          var e, n;
          d(this, t);
          for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            b(
              f((n = u(this, (e = p(t)).call.apply(e, [this].concat(i))))),
              "onClick",
              function (e) {
                var t = n.props,
                  a = t.text,
                  i = t.onCopy,
                  l = t.children,
                  c = t.options,
                  d = o.default.Children.only(l),
                  s = (0, r.default)(a, c);
                i && i(a, s),
                  d &&
                    d.props &&
                    "function" == typeof d.props.onClick &&
                    d.props.onClick(e);
              }
            ),
            n
          );
        }
        var n, a, i;
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && m(e, t);
          })(t, e),
          (n = t),
          (a = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  n = c(e, ["text", "onCopy", "options", "children"]),
                  r = o.default.Children.only(t);
                return o.default.cloneElement(
                  r,
                  (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? l(n, !0).forEach(function (t) {
                            b(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n)
                          )
                        : l(n).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                            );
                          });
                    }
                    return e;
                  })({}, n, { onClick: this.onClick })
                );
              },
            },
          ]) && s(n.prototype, a),
          i && s(n, i),
          t
        );
      })(o.default.PureComponent);
      (t.CopyToClipboard = h),
        b(h, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    wcnv: function (e, t, n) {
      "use strict";
      n.r(t);
      n("pIFo");
      var o = n("q1tI"),
        r = n.n(o),
        a = n("Ff2n"),
        i = n("wx14"),
        l = n("iuhU"),
        c = n("H2TA"),
        d = n("ye/S"),
        s = n("VD++"),
        u = n("NqtD"),
        p = o.forwardRef(function (e, t) {
          var n = e.children,
            r = e.classes,
            c = e.className,
            d = e.color,
            p = void 0 === d ? "default" : d,
            f = e.component,
            m = void 0 === f ? "button" : f,
            b = e.disabled,
            h = void 0 !== b && b,
            v = e.disableElevation,
            g = void 0 !== v && v,
            y = e.disableFocusRipple,
            O = void 0 !== y && y,
            x = e.endIcon,
            j = e.focusVisibleClassName,
            C = e.fullWidth,
            E = void 0 !== C && C,
            w = e.size,
            S = void 0 === w ? "medium" : w,
            k = e.startIcon,
            R = e.type,
            P = void 0 === R ? "button" : R,
            D = e.variant,
            M = void 0 === D ? "text" : D,
            N = Object(a.a)(e, [
              "children",
              "classes",
              "className",
              "color",
              "component",
              "disabled",
              "disableElevation",
              "disableFocusRipple",
              "endIcon",
              "focusVisibleClassName",
              "fullWidth",
              "size",
              "startIcon",
              "type",
              "variant",
            ]),
            T =
              k &&
              o.createElement(
                "span",
                {
                  className: Object(l.a)(
                    r.startIcon,
                    r["iconSize".concat(Object(u.a)(S))]
                  ),
                },
                k
              ),
            I =
              x &&
              o.createElement(
                "span",
                {
                  className: Object(l.a)(
                    r.endIcon,
                    r["iconSize".concat(Object(u.a)(S))]
                  ),
                },
                x
              );
          return o.createElement(
            s.a,
            Object(i.a)(
              {
                className: Object(l.a)(
                  r.root,
                  r[M],
                  c,
                  "inherit" === p
                    ? r.colorInherit
                    : "default" !== p && r["".concat(M).concat(Object(u.a)(p))],
                  "medium" !== S && [
                    r["".concat(M, "Size").concat(Object(u.a)(S))],
                    r["size".concat(Object(u.a)(S))],
                  ],
                  g && r.disableElevation,
                  h && r.disabled,
                  E && r.fullWidth
                ),
                component: m,
                disabled: h,
                focusRipple: !O,
                focusVisibleClassName: Object(l.a)(r.focusVisible, j),
                ref: t,
                type: P,
              },
              N
            ),
            o.createElement("span", { className: r.label }, T, n, I)
          );
        }),
        f = Object(c.a)(
          function (e) {
            return {
              root: Object(i.a)(
                Object(i.a)({}, e.typography.button),
                {},
                {
                  boxSizing: "border-box",
                  minWidth: 64,
                  padding: "6px 16px",
                  borderRadius: e.shape.borderRadius,
                  color: e.palette.text.primary,
                  transition: e.transitions.create(
                    ["background-color", "box-shadow", "border"],
                    { duration: e.transitions.duration.short }
                  ),
                  "&:hover": {
                    textDecoration: "none",
                    backgroundColor: Object(d.b)(
                      e.palette.text.primary,
                      e.palette.action.hoverOpacity
                    ),
                    "@media (hover: none)": { backgroundColor: "transparent" },
                    "&$disabled": { backgroundColor: "transparent" },
                  },
                  "&$disabled": { color: e.palette.action.disabled },
                }
              ),
              label: {
                width: "100%",
                display: "inherit",
                alignItems: "inherit",
                justifyContent: "inherit",
              },
              text: { padding: "6px 8px" },
              textPrimary: {
                color: e.palette.primary.main,
                "&:hover": {
                  backgroundColor: Object(d.b)(
                    e.palette.primary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              textSecondary: {
                color: e.palette.secondary.main,
                "&:hover": {
                  backgroundColor: Object(d.b)(
                    e.palette.secondary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              outlined: {
                padding: "5px 15px",
                border: "1px solid ".concat(
                  "light" === e.palette.type
                    ? "rgba(0, 0, 0, 0.23)"
                    : "rgba(255, 255, 255, 0.23)"
                ),
                "&$disabled": {
                  border: "1px solid ".concat(
                    e.palette.action.disabledBackground
                  ),
                },
              },
              outlinedPrimary: {
                color: e.palette.primary.main,
                border: "1px solid ".concat(
                  Object(d.b)(e.palette.primary.main, 0.5)
                ),
                "&:hover": {
                  border: "1px solid ".concat(e.palette.primary.main),
                  backgroundColor: Object(d.b)(
                    e.palette.primary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              outlinedSecondary: {
                color: e.palette.secondary.main,
                border: "1px solid ".concat(
                  Object(d.b)(e.palette.secondary.main, 0.5)
                ),
                "&:hover": {
                  border: "1px solid ".concat(e.palette.secondary.main),
                  backgroundColor: Object(d.b)(
                    e.palette.secondary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
                "&$disabled": {
                  border: "1px solid ".concat(e.palette.action.disabled),
                },
              },
              contained: {
                color: e.palette.getContrastText(e.palette.grey[300]),
                backgroundColor: e.palette.grey[300],
                boxShadow: e.shadows[2],
                "&:hover": {
                  backgroundColor: e.palette.grey.A100,
                  boxShadow: e.shadows[4],
                  "@media (hover: none)": {
                    boxShadow: e.shadows[2],
                    backgroundColor: e.palette.grey[300],
                  },
                  "&$disabled": {
                    backgroundColor: e.palette.action.disabledBackground,
                  },
                },
                "&$focusVisible": { boxShadow: e.shadows[6] },
                "&:active": { boxShadow: e.shadows[8] },
                "&$disabled": {
                  color: e.palette.action.disabled,
                  boxShadow: e.shadows[0],
                  backgroundColor: e.palette.action.disabledBackground,
                },
              },
              containedPrimary: {
                color: e.palette.primary.contrastText,
                backgroundColor: e.palette.primary.main,
                "&:hover": {
                  backgroundColor: e.palette.primary.dark,
                  "@media (hover: none)": {
                    backgroundColor: e.palette.primary.main,
                  },
                },
              },
              containedSecondary: {
                color: e.palette.secondary.contrastText,
                backgroundColor: e.palette.secondary.main,
                "&:hover": {
                  backgroundColor: e.palette.secondary.dark,
                  "@media (hover: none)": {
                    backgroundColor: e.palette.secondary.main,
                  },
                },
              },
              disableElevation: {
                boxShadow: "none",
                "&:hover": { boxShadow: "none" },
                "&$focusVisible": { boxShadow: "none" },
                "&:active": { boxShadow: "none" },
                "&$disabled": { boxShadow: "none" },
              },
              focusVisible: {},
              disabled: {},
              colorInherit: { color: "inherit", borderColor: "currentColor" },
              textSizeSmall: {
                padding: "4px 5px",
                fontSize: e.typography.pxToRem(13),
              },
              textSizeLarge: {
                padding: "8px 11px",
                fontSize: e.typography.pxToRem(15),
              },
              outlinedSizeSmall: {
                padding: "3px 9px",
                fontSize: e.typography.pxToRem(13),
              },
              outlinedSizeLarge: {
                padding: "7px 21px",
                fontSize: e.typography.pxToRem(15),
              },
              containedSizeSmall: {
                padding: "4px 10px",
                fontSize: e.typography.pxToRem(13),
              },
              containedSizeLarge: {
                padding: "8px 22px",
                fontSize: e.typography.pxToRem(15),
              },
              sizeSmall: {},
              sizeLarge: {},
              fullWidth: { width: "100%" },
              startIcon: {
                display: "inherit",
                marginRight: 8,
                marginLeft: -4,
                "&$iconSizeSmall": { marginLeft: -2 },
              },
              endIcon: {
                display: "inherit",
                marginRight: -4,
                marginLeft: 8,
                "&$iconSizeSmall": { marginRight: -2 },
              },
              iconSizeSmall: { "& > *:first-child": { fontSize: 18 } },
              iconSizeMedium: { "& > *:first-child": { fontSize: 20 } },
              iconSizeLarge: { "& > *:first-child": { fontSize: 22 } },
            };
          },
          { name: "MuiButton" }
        )(p),
        m = (n("bWfx"), n("i8i4")),
        b = n("l3Wi"),
        h = n("gk1O"),
        v = n("g+pH"),
        g = n("x6Ns"),
        y = n("Xt1q"),
        O = n("ODXe"),
        x = n("dRu9"),
        j = n("tr08"),
        C = n("4Hym"),
        E = n("bfFb");
      function w(e) {
        return "scale(".concat(e, ", ").concat(Math.pow(e, 2), ")");
      }
      var S = {
          entering: { opacity: 1, transform: w(1) },
          entered: { opacity: 1, transform: "none" },
        },
        k = o.forwardRef(function (e, t) {
          var n = e.children,
            r = e.disableStrictModeCompat,
            l = void 0 !== r && r,
            c = e.in,
            d = e.onEnter,
            s = e.onEntered,
            u = e.onEntering,
            p = e.onExit,
            f = e.onExited,
            m = e.onExiting,
            b = e.style,
            h = e.timeout,
            v = void 0 === h ? "auto" : h,
            g = e.TransitionComponent,
            y = void 0 === g ? x.a : g,
            k = Object(a.a)(e, [
              "children",
              "disableStrictModeCompat",
              "in",
              "onEnter",
              "onEntered",
              "onEntering",
              "onExit",
              "onExited",
              "onExiting",
              "style",
              "timeout",
              "TransitionComponent",
            ]),
            R = o.useRef(),
            P = o.useRef(),
            D = Object(j.a)(),
            M = D.unstable_strictMode && !l,
            N = o.useRef(null),
            T = Object(E.a)(n.ref, t),
            I = Object(E.a)(M ? N : void 0, T),
            F = function (e) {
              return function (t, n) {
                if (e) {
                  var o = M ? [N.current, t] : [t, n],
                    r = Object(O.a)(o, 2),
                    a = r[0],
                    i = r[1];
                  void 0 === i ? e(a) : e(a, i);
                }
              };
            },
            W = F(u),
            z = F(function (e, t) {
              Object(C.b)(e);
              var n,
                o = Object(C.a)({ style: b, timeout: v }, { mode: "enter" }),
                r = o.duration,
                a = o.delay;
              "auto" === v
                ? ((n = D.transitions.getAutoHeightDuration(e.clientHeight)),
                  (P.current = n))
                : (n = r),
                (e.style.transition = [
                  D.transitions.create("opacity", { duration: n, delay: a }),
                  D.transitions.create("transform", {
                    duration: 0.666 * n,
                    delay: a,
                  }),
                ].join(",")),
                d && d(e, t);
            }),
            L = F(s),
            A = F(m),
            B = F(function (e) {
              var t,
                n = Object(C.a)({ style: b, timeout: v }, { mode: "exit" }),
                o = n.duration,
                r = n.delay;
              "auto" === v
                ? ((t = D.transitions.getAutoHeightDuration(e.clientHeight)),
                  (P.current = t))
                : (t = o),
                (e.style.transition = [
                  D.transitions.create("opacity", { duration: t, delay: r }),
                  D.transitions.create("transform", {
                    duration: 0.666 * t,
                    delay: r || 0.333 * t,
                  }),
                ].join(",")),
                (e.style.opacity = "0"),
                (e.style.transform = w(0.75)),
                p && p(e);
            }),
            $ = F(f);
          return (
            o.useEffect(function () {
              return function () {
                clearTimeout(R.current);
              };
            }, []),
            o.createElement(
              y,
              Object(i.a)(
                {
                  appear: !0,
                  in: c,
                  nodeRef: M ? N : void 0,
                  onEnter: z,
                  onEntered: L,
                  onEntering: W,
                  onExit: B,
                  onExited: $,
                  onExiting: A,
                  addEndListener: function (e, t) {
                    var n = M ? e : t;
                    "auto" === v && (R.current = setTimeout(n, P.current || 0));
                  },
                  timeout: "auto" === v ? null : v,
                },
                k
              ),
              function (e, t) {
                return o.cloneElement(
                  n,
                  Object(i.a)(
                    {
                      style: Object(i.a)(
                        Object(i.a)(
                          Object(i.a)(
                            {
                              opacity: 0,
                              transform: w(0.75),
                              visibility:
                                "exited" !== e || c ? void 0 : "hidden",
                            },
                            S[e]
                          ),
                          b
                        ),
                        n.props.style
                      ),
                      ref: I,
                    },
                    t
                  )
                );
              }
            )
          );
        });
      k.muiSupportAuto = !0;
      var R = k,
        P = n("kKAo");
      function D(e, t) {
        var n = 0;
        return (
          "number" == typeof t
            ? (n = t)
            : "center" === t
            ? (n = e.height / 2)
            : "bottom" === t && (n = e.height),
          n
        );
      }
      function M(e, t) {
        var n = 0;
        return (
          "number" == typeof t
            ? (n = t)
            : "center" === t
            ? (n = e.width / 2)
            : "right" === t && (n = e.width),
          n
        );
      }
      function N(e) {
        return [e.horizontal, e.vertical]
          .map(function (e) {
            return "number" == typeof e ? "".concat(e, "px") : e;
          })
          .join(" ");
      }
      function T(e) {
        return "function" == typeof e ? e() : e;
      }
      var I = o.forwardRef(function (e, t) {
          var n = e.action,
            r = e.anchorEl,
            c = e.anchorOrigin,
            d = void 0 === c ? { vertical: "top", horizontal: "left" } : c,
            s = e.anchorPosition,
            u = e.anchorReference,
            p = void 0 === u ? "anchorEl" : u,
            f = e.children,
            O = e.classes,
            x = e.className,
            j = e.container,
            C = e.elevation,
            E = void 0 === C ? 8 : C,
            w = e.getContentAnchorEl,
            S = e.marginThreshold,
            k = void 0 === S ? 16 : S,
            I = e.onEnter,
            F = e.onEntered,
            W = e.onEntering,
            z = e.onExit,
            L = e.onExited,
            A = e.onExiting,
            B = e.open,
            $ = e.PaperProps,
            H = void 0 === $ ? {} : $,
            q = e.transformOrigin,
            V = void 0 === q ? { vertical: "top", horizontal: "left" } : q,
            K = e.TransitionComponent,
            U = void 0 === K ? R : K,
            _ = e.transitionDuration,
            X = void 0 === _ ? "auto" : _,
            J = e.TransitionProps,
            Y = void 0 === J ? {} : J,
            Q = Object(a.a)(e, [
              "action",
              "anchorEl",
              "anchorOrigin",
              "anchorPosition",
              "anchorReference",
              "children",
              "classes",
              "className",
              "container",
              "elevation",
              "getContentAnchorEl",
              "marginThreshold",
              "onEnter",
              "onEntered",
              "onEntering",
              "onExit",
              "onExited",
              "onExiting",
              "open",
              "PaperProps",
              "transformOrigin",
              "TransitionComponent",
              "transitionDuration",
              "TransitionProps",
            ]),
            Z = o.useRef(),
            G = o.useCallback(
              function (e) {
                if ("anchorPosition" === p) return s;
                var t = T(r),
                  n = (t && 1 === t.nodeType
                    ? t
                    : Object(h.a)(Z.current).body
                  ).getBoundingClientRect(),
                  o = 0 === e ? d.vertical : "center";
                return {
                  top: n.top + D(n, o),
                  left: n.left + M(n, d.horizontal),
                };
              },
              [r, d.horizontal, d.vertical, s, p]
            ),
            ee = o.useCallback(
              function (e) {
                var t = 0;
                if (w && "anchorEl" === p) {
                  var n = w(e);
                  if (n && e.contains(n)) {
                    var o = (function (e, t) {
                      for (var n = t, o = 0; n && n !== e; )
                        o += (n = n.parentElement).scrollTop;
                      return o;
                    })(e, n);
                    t = n.offsetTop + n.clientHeight / 2 - o || 0;
                  }
                  0;
                }
                return t;
              },
              [d.vertical, p, w]
            ),
            te = o.useCallback(
              function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
                return {
                  vertical: D(e, V.vertical) + t,
                  horizontal: M(e, V.horizontal),
                };
              },
              [V.horizontal, V.vertical]
            ),
            ne = o.useCallback(
              function (e) {
                var t = ee(e),
                  n = { width: e.offsetWidth, height: e.offsetHeight },
                  o = te(n, t);
                if ("none" === p)
                  return { top: null, left: null, transformOrigin: N(o) };
                var a = G(t),
                  i = a.top - o.vertical,
                  l = a.left - o.horizontal,
                  c = i + n.height,
                  d = l + n.width,
                  s = Object(v.a)(T(r)),
                  u = s.innerHeight - k,
                  f = s.innerWidth - k;
                if (i < k) {
                  var m = i - k;
                  (i -= m), (o.vertical += m);
                } else if (c > u) {
                  var b = c - u;
                  (i -= b), (o.vertical += b);
                }
                if (l < k) {
                  var h = l - k;
                  (l -= h), (o.horizontal += h);
                } else if (d > f) {
                  var g = d - f;
                  (l -= g), (o.horizontal += g);
                }
                return {
                  top: "".concat(Math.round(i), "px"),
                  left: "".concat(Math.round(l), "px"),
                  transformOrigin: N(o),
                };
              },
              [r, p, G, ee, te, k]
            ),
            oe = o.useCallback(
              function () {
                var e = Z.current;
                if (e) {
                  var t = ne(e);
                  null !== t.top && (e.style.top = t.top),
                    null !== t.left && (e.style.left = t.left),
                    (e.style.transformOrigin = t.transformOrigin);
                }
              },
              [ne]
            ),
            re = o.useCallback(function (e) {
              Z.current = m.findDOMNode(e);
            }, []);
          o.useEffect(function () {
            B && oe();
          }),
            o.useImperativeHandle(
              n,
              function () {
                return B
                  ? {
                      updatePosition: function () {
                        oe();
                      },
                    }
                  : null;
              },
              [B, oe]
            ),
            o.useEffect(
              function () {
                if (B) {
                  var e = Object(b.a)(function () {
                    oe();
                  });
                  return (
                    window.addEventListener("resize", e),
                    function () {
                      e.clear(), window.removeEventListener("resize", e);
                    }
                  );
                }
              },
              [B, oe]
            );
          var ae = X;
          "auto" !== X || U.muiSupportAuto || (ae = void 0);
          var ie = j || (r ? Object(h.a)(T(r)).body : void 0);
          return o.createElement(
            y.a,
            Object(i.a)(
              {
                container: ie,
                open: B,
                ref: t,
                BackdropProps: { invisible: !0 },
                className: Object(l.a)(O.root, x),
              },
              Q
            ),
            o.createElement(
              U,
              Object(i.a)(
                {
                  appear: !0,
                  in: B,
                  onEnter: I,
                  onEntered: F,
                  onExit: z,
                  onExited: L,
                  onExiting: A,
                  timeout: ae,
                },
                Y,
                {
                  onEntering: Object(g.a)(function (e, t) {
                    W && W(e, t), oe();
                  }, Y.onEntering),
                }
              ),
              o.createElement(
                P.a,
                Object(i.a)({ elevation: E, ref: re }, H, {
                  className: Object(l.a)(O.paper, H.className),
                }),
                f
              )
            )
          );
        }),
        F = Object(c.a)(
          {
            root: {},
            paper: {
              position: "absolute",
              overflowY: "auto",
              overflowX: "hidden",
              minWidth: 16,
              minHeight: 16,
              maxWidth: "calc(100% - 32px)",
              maxHeight: "calc(100% - 32px)",
              outline: 0,
            },
          },
          { name: "MuiPopover" }
        )(I);
      n("f3/d"), n("DNiP");
      function W(e) {
        var t = e.props,
          n = e.states,
          o = e.muiFormControl;
        return n.reduce(function (e, n) {
          return (e[n] = t[n]), o && void 0 === t[n] && (e[n] = o[n]), e;
        }, {});
      }
      var z = o.createContext();
      var L = z;
      n("xfY5");
      function A(e, t) {
        return parseInt(e[t], 10) || 0;
      }
      var B = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        $ = {
          visibility: "hidden",
          position: "absolute",
          overflow: "hidden",
          height: 0,
          top: 0,
          left: 0,
          transform: "translateZ(0)",
        },
        H = o.forwardRef(function (e, t) {
          var n = e.onChange,
            r = e.rows,
            l = e.rowsMax,
            c = e.rowsMin,
            d = void 0 === c ? 1 : c,
            s = e.style,
            u = e.value,
            p = Object(a.a)(e, [
              "onChange",
              "rows",
              "rowsMax",
              "rowsMin",
              "style",
              "value",
            ]),
            f = r || d,
            m = o.useRef(null != u).current,
            h = o.useRef(null),
            v = Object(E.a)(t, h),
            g = o.useRef(null),
            y = o.useRef(0),
            O = o.useState({}),
            x = O[0],
            j = O[1],
            C = o.useCallback(
              function () {
                var t = h.current,
                  n = window.getComputedStyle(t),
                  o = g.current;
                (o.style.width = n.width),
                  (o.value = t.value || e.placeholder || "x"),
                  "\n" === o.value.slice(-1) && (o.value += " ");
                var r = n["box-sizing"],
                  a = A(n, "padding-bottom") + A(n, "padding-top"),
                  i = A(n, "border-bottom-width") + A(n, "border-top-width"),
                  c = o.scrollHeight - a;
                o.value = "x";
                var d = o.scrollHeight - a,
                  s = c;
                f && (s = Math.max(Number(f) * d, s)),
                  l && (s = Math.min(Number(l) * d, s));
                var u = (s = Math.max(s, d)) + ("border-box" === r ? a + i : 0),
                  p = Math.abs(s - c) <= 1;
                j(function (e) {
                  return y.current < 20 &&
                    ((u > 0 && Math.abs((e.outerHeightStyle || 0) - u) > 1) ||
                      e.overflow !== p)
                    ? ((y.current += 1), { overflow: p, outerHeightStyle: u })
                    : e;
                });
              },
              [l, f, e.placeholder]
            );
          o.useEffect(
            function () {
              var e = Object(b.a)(function () {
                (y.current = 0), C();
              });
              return (
                window.addEventListener("resize", e),
                function () {
                  e.clear(), window.removeEventListener("resize", e);
                }
              );
            },
            [C]
          ),
            B(function () {
              C();
            }),
            o.useEffect(
              function () {
                y.current = 0;
              },
              [u]
            );
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "textarea",
              Object(i.a)(
                {
                  value: u,
                  onChange: function (e) {
                    (y.current = 0), m || C(), n && n(e);
                  },
                  ref: v,
                  rows: f,
                  style: Object(i.a)(
                    {
                      height: x.outerHeightStyle,
                      overflow: x.overflow ? "hidden" : null,
                    },
                    s
                  ),
                },
                p
              )
            ),
            o.createElement("textarea", {
              "aria-hidden": !0,
              className: e.className,
              readOnly: !0,
              ref: g,
              tabIndex: -1,
              style: Object(i.a)(Object(i.a)({}, $), s),
            })
          );
        });
      n("LK8F");
      function q(e) {
        return null != e && !(Array.isArray(e) && 0 === e.length);
      }
      function V(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (
          e &&
          ((q(e.value) && "" !== e.value) ||
            (t && q(e.defaultValue) && "" !== e.defaultValue))
        );
      }
      var K = "undefined" == typeof window ? o.useEffect : o.useLayoutEffect,
        U = o.forwardRef(function (e, t) {
          var n = e["aria-describedby"],
            r = e.autoComplete,
            c = e.autoFocus,
            d = e.classes,
            s = e.className,
            p = (e.color, e.defaultValue),
            f = e.disabled,
            m = e.endAdornment,
            b = (e.error, e.fullWidth),
            h = void 0 !== b && b,
            v = e.id,
            g = e.inputComponent,
            y = void 0 === g ? "input" : g,
            O = e.inputProps,
            x = void 0 === O ? {} : O,
            j = e.inputRef,
            C = (e.margin, e.multiline),
            w = void 0 !== C && C,
            S = e.name,
            k = e.onBlur,
            R = e.onChange,
            P = e.onClick,
            D = e.onFocus,
            M = e.onKeyDown,
            N = e.onKeyUp,
            T = e.placeholder,
            I = e.readOnly,
            F = e.renderSuffix,
            A = e.rows,
            B = e.rowsMax,
            $ = e.rowsMin,
            q = e.startAdornment,
            U = e.type,
            _ = void 0 === U ? "text" : U,
            X = e.value,
            J = Object(a.a)(e, [
              "aria-describedby",
              "autoComplete",
              "autoFocus",
              "classes",
              "className",
              "color",
              "defaultValue",
              "disabled",
              "endAdornment",
              "error",
              "fullWidth",
              "id",
              "inputComponent",
              "inputProps",
              "inputRef",
              "margin",
              "multiline",
              "name",
              "onBlur",
              "onChange",
              "onClick",
              "onFocus",
              "onKeyDown",
              "onKeyUp",
              "placeholder",
              "readOnly",
              "renderSuffix",
              "rows",
              "rowsMax",
              "rowsMin",
              "startAdornment",
              "type",
              "value",
            ]),
            Y = null != x.value ? x.value : X,
            Q = o.useRef(null != Y).current,
            Z = o.useRef(),
            G = o.useCallback(function (e) {
              0;
            }, []),
            ee = Object(E.a)(x.ref, G),
            te = Object(E.a)(j, ee),
            ne = Object(E.a)(Z, te),
            oe = o.useState(!1),
            re = oe[0],
            ae = oe[1],
            ie = o.useContext(z);
          var le = W({
            props: e,
            muiFormControl: ie,
            states: [
              "color",
              "disabled",
              "error",
              "hiddenLabel",
              "margin",
              "required",
              "filled",
            ],
          });
          (le.focused = ie ? ie.focused : re),
            o.useEffect(
              function () {
                !ie && f && re && (ae(!1), k && k());
              },
              [ie, f, re, k]
            );
          var ce = ie && ie.onFilled,
            de = ie && ie.onEmpty,
            se = o.useCallback(
              function (e) {
                V(e) ? ce && ce() : de && de();
              },
              [ce, de]
            );
          K(
            function () {
              Q && se({ value: Y });
            },
            [Y, se, Q]
          );
          o.useEffect(function () {
            se(Z.current);
          }, []);
          var ue = y,
            pe = Object(i.a)(Object(i.a)({}, x), {}, { ref: ne });
          "string" != typeof ue
            ? (pe = Object(i.a)(
                Object(i.a)({ inputRef: ne, type: _ }, pe),
                {},
                { ref: null }
              ))
            : w
            ? !A || B || $
              ? ((pe = Object(i.a)({ rows: A, rowsMax: B }, pe)), (ue = H))
              : (ue = "textarea")
            : (pe = Object(i.a)({ type: _ }, pe));
          return (
            o.useEffect(
              function () {
                ie && ie.setAdornedStart(Boolean(q));
              },
              [ie, q]
            ),
            o.createElement(
              "div",
              Object(i.a)(
                {
                  className: Object(l.a)(
                    d.root,
                    d["color".concat(Object(u.a)(le.color || "primary"))],
                    s,
                    le.disabled && d.disabled,
                    le.error && d.error,
                    h && d.fullWidth,
                    le.focused && d.focused,
                    ie && d.formControl,
                    w && d.multiline,
                    q && d.adornedStart,
                    m && d.adornedEnd,
                    "dense" === le.margin && d.marginDense
                  ),
                  onClick: function (e) {
                    Z.current &&
                      e.currentTarget === e.target &&
                      Z.current.focus(),
                      P && P(e);
                  },
                  ref: t,
                },
                J
              ),
              q,
              o.createElement(
                L.Provider,
                { value: null },
                o.createElement(
                  ue,
                  Object(i.a)(
                    {
                      "aria-invalid": le.error,
                      "aria-describedby": n,
                      autoComplete: r,
                      autoFocus: c,
                      defaultValue: p,
                      disabled: le.disabled,
                      id: v,
                      onAnimationStart: function (e) {
                        se(
                          "mui-auto-fill-cancel" === e.animationName
                            ? Z.current
                            : { value: "x" }
                        );
                      },
                      name: S,
                      placeholder: T,
                      readOnly: I,
                      required: le.required,
                      rows: A,
                      value: Y,
                      onKeyDown: M,
                      onKeyUp: N,
                    },
                    pe,
                    {
                      className: Object(l.a)(
                        d.input,
                        x.className,
                        le.disabled && d.disabled,
                        w && d.inputMultiline,
                        le.hiddenLabel && d.inputHiddenLabel,
                        q && d.inputAdornedStart,
                        m && d.inputAdornedEnd,
                        "search" === _ && d.inputTypeSearch,
                        "dense" === le.margin && d.inputMarginDense
                      ),
                      onBlur: function (e) {
                        k && k(e),
                          x.onBlur && x.onBlur(e),
                          ie && ie.onBlur ? ie.onBlur(e) : ae(!1);
                      },
                      onChange: function (e) {
                        if (!Q) {
                          var t = e.target || Z.current;
                          if (null == t)
                            throw new TypeError(
                              "Material-UI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://material-ui.com/r/input-component-ref-interface for more info."
                            );
                          se({ value: t.value });
                        }
                        for (
                          var n = arguments.length,
                            o = new Array(n > 1 ? n - 1 : 0),
                            r = 1;
                          r < n;
                          r++
                        )
                          o[r - 1] = arguments[r];
                        x.onChange && x.onChange.apply(x, [e].concat(o)),
                          R && R.apply(void 0, [e].concat(o));
                      },
                      onFocus: function (e) {
                        le.disabled
                          ? e.stopPropagation()
                          : (D && D(e),
                            x.onFocus && x.onFocus(e),
                            ie && ie.onFocus ? ie.onFocus(e) : ae(!0));
                      },
                    }
                  )
                )
              ),
              m,
              F
                ? F(Object(i.a)(Object(i.a)({}, le), {}, { startAdornment: q }))
                : null
            )
          );
        }),
        _ = Object(c.a)(
          function (e) {
            var t = "light" === e.palette.type,
              n = {
                color: "currentColor",
                opacity: t ? 0.42 : 0.5,
                transition: e.transitions.create("opacity", {
                  duration: e.transitions.duration.shorter,
                }),
              },
              o = { opacity: "0 !important" },
              r = { opacity: t ? 0.42 : 0.5 };
            return {
              "@global": {
                "@keyframes mui-auto-fill": {},
                "@keyframes mui-auto-fill-cancel": {},
              },
              root: Object(i.a)(
                Object(i.a)({}, e.typography.body1),
                {},
                {
                  color: e.palette.text.primary,
                  lineHeight: "1.1876em",
                  boxSizing: "border-box",
                  position: "relative",
                  cursor: "text",
                  display: "inline-flex",
                  alignItems: "center",
                  "&$disabled": {
                    color: e.palette.text.disabled,
                    cursor: "default",
                  },
                }
              ),
              formControl: {},
              focused: {},
              disabled: {},
              adornedStart: {},
              adornedEnd: {},
              error: {},
              marginDense: {},
              multiline: {
                padding: "".concat(6, "px 0 ").concat(7, "px"),
                "&$marginDense": { paddingTop: 3 },
              },
              colorSecondary: {},
              fullWidth: { width: "100%" },
              input: {
                font: "inherit",
                letterSpacing: "inherit",
                color: "currentColor",
                padding: "".concat(6, "px 0 ").concat(7, "px"),
                border: 0,
                boxSizing: "content-box",
                background: "none",
                height: "1.1876em",
                margin: 0,
                WebkitTapHighlightColor: "transparent",
                display: "block",
                minWidth: 0,
                width: "100%",
                animationName: "mui-auto-fill-cancel",
                animationDuration: "10ms",
                "&::-webkit-input-placeholder": n,
                "&::-moz-placeholder": n,
                "&:-ms-input-placeholder": n,
                "&::-ms-input-placeholder": n,
                "&:focus": { outline: 0 },
                "&:invalid": { boxShadow: "none" },
                "&::-webkit-search-decoration": {
                  "-webkit-appearance": "none",
                },
                "label[data-shrink=false] + $formControl &": {
                  "&::-webkit-input-placeholder": o,
                  "&::-moz-placeholder": o,
                  "&:-ms-input-placeholder": o,
                  "&::-ms-input-placeholder": o,
                  "&:focus::-webkit-input-placeholder": r,
                  "&:focus::-moz-placeholder": r,
                  "&:focus:-ms-input-placeholder": r,
                  "&:focus::-ms-input-placeholder": r,
                },
                "&$disabled": { opacity: 1 },
                "&:-webkit-autofill": {
                  animationDuration: "5000s",
                  animationName: "mui-auto-fill",
                },
              },
              inputMarginDense: { paddingTop: 3 },
              inputMultiline: { height: "auto", resize: "none", padding: 0 },
              inputTypeSearch: {
                "-moz-appearance": "textfield",
                "-webkit-appearance": "textfield",
              },
              inputAdornedStart: {},
              inputAdornedEnd: {},
              inputHiddenLabel: {},
            };
          },
          { name: "MuiInputBase" }
        )(U),
        X = o.forwardRef(function (e, t) {
          var n = e.disableUnderline,
            r = e.classes,
            c = e.fullWidth,
            d = void 0 !== c && c,
            s = e.inputComponent,
            u = void 0 === s ? "input" : s,
            p = e.multiline,
            f = void 0 !== p && p,
            m = e.type,
            b = void 0 === m ? "text" : m,
            h = Object(a.a)(e, [
              "disableUnderline",
              "classes",
              "fullWidth",
              "inputComponent",
              "multiline",
              "type",
            ]);
          return o.createElement(
            _,
            Object(i.a)(
              {
                classes: Object(i.a)(
                  Object(i.a)({}, r),
                  {},
                  {
                    root: Object(l.a)(r.root, !n && r.underline),
                    underline: null,
                  }
                ),
                fullWidth: d,
                inputComponent: u,
                multiline: f,
                ref: t,
                type: b,
              },
              h
            )
          );
        });
      X.muiName = "Input";
      var J = Object(c.a)(
          function (e) {
            var t =
              "light" === e.palette.type
                ? "rgba(0, 0, 0, 0.42)"
                : "rgba(255, 255, 255, 0.7)";
            return {
              root: { position: "relative" },
              formControl: { "label + &": { marginTop: 16 } },
              focused: {},
              disabled: {},
              colorSecondary: {
                "&$underline:after": {
                  borderBottomColor: e.palette.secondary.main,
                },
              },
              underline: {
                "&:after": {
                  borderBottom: "2px solid ".concat(e.palette.primary.main),
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: "absolute",
                  right: 0,
                  transform: "scaleX(0)",
                  transition: e.transitions.create("transform", {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: "none",
                },
                "&$focused:after": { transform: "scaleX(1)" },
                "&$error:after": {
                  borderBottomColor: e.palette.error.main,
                  transform: "scaleX(1)",
                },
                "&:before": {
                  borderBottom: "1px solid ".concat(t),
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: "absolute",
                  right: 0,
                  transition: e.transitions.create("border-bottom-color", {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: "none",
                },
                "&:hover:not($disabled):before": {
                  borderBottom: "2px solid ".concat(e.palette.text.primary),
                  "@media (hover: none)": {
                    borderBottom: "1px solid ".concat(t),
                  },
                },
                "&$disabled:before": { borderBottomStyle: "dotted" },
              },
              error: {},
              marginDense: {},
              multiline: {},
              fullWidth: {},
              input: {},
              inputMarginDense: {},
              inputMultiline: {},
              inputTypeSearch: {},
            };
          },
          { name: "MuiInput" }
        )(X),
        Y = o.forwardRef(function (e, t) {
          var n = e.disableUnderline,
            r = e.classes,
            c = e.fullWidth,
            d = void 0 !== c && c,
            s = e.inputComponent,
            u = void 0 === s ? "input" : s,
            p = e.multiline,
            f = void 0 !== p && p,
            m = e.type,
            b = void 0 === m ? "text" : m,
            h = Object(a.a)(e, [
              "disableUnderline",
              "classes",
              "fullWidth",
              "inputComponent",
              "multiline",
              "type",
            ]);
          return o.createElement(
            _,
            Object(i.a)(
              {
                classes: Object(i.a)(
                  Object(i.a)({}, r),
                  {},
                  {
                    root: Object(l.a)(r.root, !n && r.underline),
                    underline: null,
                  }
                ),
                fullWidth: d,
                inputComponent: u,
                multiline: f,
                ref: t,
                type: b,
              },
              h
            )
          );
        });
      Y.muiName = "Input";
      var Q = Object(c.a)(
          function (e) {
            var t = "light" === e.palette.type,
              n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
              o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.09)";
            return {
              root: {
                position: "relative",
                backgroundColor: o,
                borderTopLeftRadius: e.shape.borderRadius,
                borderTopRightRadius: e.shape.borderRadius,
                transition: e.transitions.create("background-color", {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
                "&:hover": {
                  backgroundColor: t
                    ? "rgba(0, 0, 0, 0.13)"
                    : "rgba(255, 255, 255, 0.13)",
                  "@media (hover: none)": { backgroundColor: o },
                },
                "&$focused": {
                  backgroundColor: t
                    ? "rgba(0, 0, 0, 0.09)"
                    : "rgba(255, 255, 255, 0.09)",
                },
                "&$disabled": {
                  backgroundColor: t
                    ? "rgba(0, 0, 0, 0.12)"
                    : "rgba(255, 255, 255, 0.12)",
                },
              },
              colorSecondary: {
                "&$underline:after": {
                  borderBottomColor: e.palette.secondary.main,
                },
              },
              underline: {
                "&:after": {
                  borderBottom: "2px solid ".concat(e.palette.primary.main),
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: "absolute",
                  right: 0,
                  transform: "scaleX(0)",
                  transition: e.transitions.create("transform", {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: "none",
                },
                "&$focused:after": { transform: "scaleX(1)" },
                "&$error:after": {
                  borderBottomColor: e.palette.error.main,
                  transform: "scaleX(1)",
                },
                "&:before": {
                  borderBottom: "1px solid ".concat(n),
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: "absolute",
                  right: 0,
                  transition: e.transitions.create("border-bottom-color", {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: "none",
                },
                "&:hover:before": {
                  borderBottom: "1px solid ".concat(e.palette.text.primary),
                },
                "&$disabled:before": { borderBottomStyle: "dotted" },
              },
              focused: {},
              disabled: {},
              adornedStart: { paddingLeft: 12 },
              adornedEnd: { paddingRight: 12 },
              error: {},
              marginDense: {},
              multiline: {
                padding: "27px 12px 10px",
                "&$marginDense": { paddingTop: 23, paddingBottom: 6 },
              },
              input: {
                padding: "27px 12px 10px",
                "&:-webkit-autofill": {
                  WebkitBoxShadow:
                    "light" === e.palette.type
                      ? null
                      : "0 0 0 100px #266798 inset",
                  WebkitTextFillColor:
                    "light" === e.palette.type ? null : "#fff",
                  caretColor: "light" === e.palette.type ? null : "#fff",
                  borderTopLeftRadius: "inherit",
                  borderTopRightRadius: "inherit",
                },
              },
              inputMarginDense: { paddingTop: 23, paddingBottom: 6 },
              inputHiddenLabel: {
                paddingTop: 18,
                paddingBottom: 19,
                "&$inputMarginDense": { paddingTop: 10, paddingBottom: 11 },
              },
              inputMultiline: { padding: 0 },
              inputAdornedStart: { paddingLeft: 0 },
              inputAdornedEnd: { paddingRight: 0 },
            };
          },
          { name: "MuiFilledInput" }
        )(Y),
        Z = n("rePB"),
        G = o.forwardRef(function (e, t) {
          e.children;
          var n = e.classes,
            r = e.className,
            c = e.label,
            d = e.labelWidth,
            s = e.notched,
            p = e.style,
            f = Object(a.a)(e, [
              "children",
              "classes",
              "className",
              "label",
              "labelWidth",
              "notched",
              "style",
            ]),
            m = "rtl" === Object(j.a)().direction ? "right" : "left";
          if (void 0 !== c)
            return o.createElement(
              "fieldset",
              Object(i.a)(
                {
                  "aria-hidden": !0,
                  className: Object(l.a)(n.root, r),
                  ref: t,
                  style: p,
                },
                f
              ),
              o.createElement(
                "legend",
                {
                  className: Object(l.a)(
                    n.legendLabelled,
                    s && n.legendNotched
                  ),
                },
                c
                  ? o.createElement("span", null, c)
                  : o.createElement("span", {
                      dangerouslySetInnerHTML: { __html: "&#8203;" },
                    })
              )
            );
          var b = d > 0 ? 0.75 * d + 8 : 0.01;
          return o.createElement(
            "fieldset",
            Object(i.a)(
              {
                "aria-hidden": !0,
                style: Object(i.a)(
                  Object(Z.a)({}, "padding".concat(Object(u.a)(m)), 8),
                  p
                ),
                className: Object(l.a)(n.root, r),
                ref: t,
              },
              f
            ),
            o.createElement(
              "legend",
              { className: n.legend, style: { width: s ? b : 0.01 } },
              o.createElement("span", {
                dangerouslySetInnerHTML: { __html: "&#8203;" },
              })
            )
          );
        }),
        ee = Object(c.a)(
          function (e) {
            return {
              root: {
                position: "absolute",
                bottom: 0,
                right: 0,
                top: -5,
                left: 0,
                margin: 0,
                padding: "0 8px",
                pointerEvents: "none",
                borderRadius: "inherit",
                borderStyle: "solid",
                borderWidth: 1,
                overflow: "hidden",
              },
              legend: {
                textAlign: "left",
                padding: 0,
                lineHeight: "11px",
                transition: e.transitions.create("width", {
                  duration: 150,
                  easing: e.transitions.easing.easeOut,
                }),
              },
              legendLabelled: {
                display: "block",
                width: "auto",
                textAlign: "left",
                padding: 0,
                height: 11,
                fontSize: "0.75em",
                visibility: "hidden",
                maxWidth: 0.01,
                transition: e.transitions.create("max-width", {
                  duration: 50,
                  easing: e.transitions.easing.easeOut,
                }),
                "& > span": {
                  paddingLeft: 5,
                  paddingRight: 5,
                  display: "inline-block",
                },
              },
              legendNotched: {
                maxWidth: 1e3,
                transition: e.transitions.create("max-width", {
                  duration: 100,
                  easing: e.transitions.easing.easeOut,
                  delay: 50,
                }),
              },
            };
          },
          { name: "PrivateNotchedOutline" }
        )(G),
        te = o.forwardRef(function (e, t) {
          var n = e.classes,
            r = e.fullWidth,
            c = void 0 !== r && r,
            d = e.inputComponent,
            s = void 0 === d ? "input" : d,
            u = e.label,
            p = e.labelWidth,
            f = void 0 === p ? 0 : p,
            m = e.multiline,
            b = void 0 !== m && m,
            h = e.notched,
            v = e.type,
            g = void 0 === v ? "text" : v,
            y = Object(a.a)(e, [
              "classes",
              "fullWidth",
              "inputComponent",
              "label",
              "labelWidth",
              "multiline",
              "notched",
              "type",
            ]);
          return o.createElement(
            _,
            Object(i.a)(
              {
                renderSuffix: function (e) {
                  return o.createElement(ee, {
                    className: n.notchedOutline,
                    label: u,
                    labelWidth: f,
                    notched:
                      void 0 !== h
                        ? h
                        : Boolean(e.startAdornment || e.filled || e.focused),
                  });
                },
                classes: Object(i.a)(
                  Object(i.a)({}, n),
                  {},
                  {
                    root: Object(l.a)(n.root, n.underline),
                    notchedOutline: null,
                  }
                ),
                fullWidth: c,
                inputComponent: s,
                multiline: b,
                ref: t,
                type: g,
              },
              y
            )
          );
        });
      te.muiName = "Input";
      var ne = Object(c.a)(
        function (e) {
          var t =
            "light" === e.palette.type
              ? "rgba(0, 0, 0, 0.23)"
              : "rgba(255, 255, 255, 0.23)";
          return {
            root: {
              position: "relative",
              borderRadius: e.shape.borderRadius,
              "&:hover $notchedOutline": {
                borderColor: e.palette.text.primary,
              },
              "@media (hover: none)": {
                "&:hover $notchedOutline": { borderColor: t },
              },
              "&$focused $notchedOutline": {
                borderColor: e.palette.primary.main,
                borderWidth: 2,
              },
              "&$error $notchedOutline": { borderColor: e.palette.error.main },
              "&$disabled $notchedOutline": {
                borderColor: e.palette.action.disabled,
              },
            },
            colorSecondary: {
              "&$focused $notchedOutline": {
                borderColor: e.palette.secondary.main,
              },
            },
            focused: {},
            disabled: {},
            adornedStart: { paddingLeft: 14 },
            adornedEnd: { paddingRight: 14 },
            error: {},
            marginDense: {},
            multiline: {
              padding: "18.5px 14px",
              "&$marginDense": { paddingTop: 10.5, paddingBottom: 10.5 },
            },
            notchedOutline: { borderColor: t },
            input: {
              padding: "18.5px 14px",
              "&:-webkit-autofill": {
                WebkitBoxShadow:
                  "light" === e.palette.type
                    ? null
                    : "0 0 0 100px #266798 inset",
                WebkitTextFillColor: "light" === e.palette.type ? null : "#fff",
                caretColor: "light" === e.palette.type ? null : "#fff",
                borderRadius: "inherit",
              },
            },
            inputMarginDense: { paddingTop: 10.5, paddingBottom: 10.5 },
            inputMultiline: { padding: 0 },
            inputAdornedStart: { paddingLeft: 0 },
            inputAdornedEnd: { paddingRight: 0 },
          };
        },
        { name: "MuiOutlinedInput" }
      )(te);
      function oe() {
        return o.useContext(L);
      }
      var re = o.forwardRef(function (e, t) {
          var n = e.children,
            r = e.classes,
            c = e.className,
            d = (e.color, e.component),
            s = void 0 === d ? "label" : d,
            p =
              (e.disabled,
              e.error,
              e.filled,
              e.focused,
              e.required,
              Object(a.a)(e, [
                "children",
                "classes",
                "className",
                "color",
                "component",
                "disabled",
                "error",
                "filled",
                "focused",
                "required",
              ])),
            f = W({
              props: e,
              muiFormControl: oe(),
              states: [
                "color",
                "required",
                "focused",
                "disabled",
                "error",
                "filled",
              ],
            });
          return o.createElement(
            s,
            Object(i.a)(
              {
                className: Object(l.a)(
                  r.root,
                  r["color".concat(Object(u.a)(f.color || "primary"))],
                  c,
                  f.disabled && r.disabled,
                  f.error && r.error,
                  f.filled && r.filled,
                  f.focused && r.focused,
                  f.required && r.required
                ),
                ref: t,
              },
              p
            ),
            n,
            f.required &&
              o.createElement(
                "span",
                {
                  "aria-hidden": !0,
                  className: Object(l.a)(r.asterisk, f.error && r.error),
                },
                " ",
                "*"
              )
          );
        }),
        ae = Object(c.a)(
          function (e) {
            return {
              root: Object(i.a)(
                Object(i.a)(
                  { color: e.palette.text.secondary },
                  e.typography.body1
                ),
                {},
                {
                  lineHeight: 1,
                  padding: 0,
                  "&$focused": { color: e.palette.primary.main },
                  "&$disabled": { color: e.palette.text.disabled },
                  "&$error": { color: e.palette.error.main },
                }
              ),
              colorSecondary: {
                "&$focused": { color: e.palette.secondary.main },
              },
              focused: {},
              disabled: {},
              error: {},
              filled: {},
              required: {},
              asterisk: { "&$error": { color: e.palette.error.main } },
            };
          },
          { name: "MuiFormLabel" }
        )(re),
        ie = o.forwardRef(function (e, t) {
          var n = e.classes,
            r = e.className,
            c = e.disableAnimation,
            d = void 0 !== c && c,
            s = (e.margin, e.shrink),
            u =
              (e.variant,
              Object(a.a)(e, [
                "classes",
                "className",
                "disableAnimation",
                "margin",
                "shrink",
                "variant",
              ])),
            p = oe(),
            f = s;
          void 0 === f && p && (f = p.filled || p.focused || p.adornedStart);
          var m = W({
            props: e,
            muiFormControl: p,
            states: ["margin", "variant"],
          });
          return o.createElement(
            ae,
            Object(i.a)(
              {
                "data-shrink": f,
                className: Object(l.a)(
                  n.root,
                  r,
                  p && n.formControl,
                  !d && n.animated,
                  f && n.shrink,
                  "dense" === m.margin && n.marginDense,
                  { filled: n.filled, outlined: n.outlined }[m.variant]
                ),
                classes: {
                  focused: n.focused,
                  disabled: n.disabled,
                  error: n.error,
                  required: n.required,
                  asterisk: n.asterisk,
                },
                ref: t,
              },
              u
            )
          );
        }),
        le = Object(c.a)(
          function (e) {
            return {
              root: { display: "block", transformOrigin: "top left" },
              focused: {},
              disabled: {},
              error: {},
              required: {},
              asterisk: {},
              formControl: {
                position: "absolute",
                left: 0,
                top: 0,
                transform: "translate(0, 24px) scale(1)",
              },
              marginDense: { transform: "translate(0, 21px) scale(1)" },
              shrink: {
                transform: "translate(0, 1.5px) scale(0.75)",
                transformOrigin: "top left",
              },
              animated: {
                transition: e.transitions.create(["color", "transform"], {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
              },
              filled: {
                zIndex: 1,
                pointerEvents: "none",
                transform: "translate(12px, 20px) scale(1)",
                "&$marginDense": {
                  transform: "translate(12px, 17px) scale(1)",
                },
                "&$shrink": {
                  transform: "translate(12px, 10px) scale(0.75)",
                  "&$marginDense": {
                    transform: "translate(12px, 7px) scale(0.75)",
                  },
                },
              },
              outlined: {
                zIndex: 1,
                pointerEvents: "none",
                transform: "translate(14px, 20px) scale(1)",
                "&$marginDense": {
                  transform: "translate(14px, 12px) scale(1)",
                },
                "&$shrink": { transform: "translate(14px, -6px) scale(0.75)" },
              },
            };
          },
          { name: "MuiInputLabel" }
        )(ie),
        ce = (n("8+KV"), n("ucBr")),
        de = o.forwardRef(function (e, t) {
          var n = e.children,
            r = e.classes,
            c = e.className,
            d = e.color,
            s = void 0 === d ? "primary" : d,
            p = e.component,
            f = void 0 === p ? "div" : p,
            m = e.disabled,
            b = void 0 !== m && m,
            h = e.error,
            v = void 0 !== h && h,
            g = e.fullWidth,
            y = void 0 !== g && g,
            O = e.focused,
            x = e.hiddenLabel,
            j = void 0 !== x && x,
            C = e.margin,
            E = void 0 === C ? "none" : C,
            w = e.required,
            S = void 0 !== w && w,
            k = e.size,
            R = e.variant,
            P = void 0 === R ? "standard" : R,
            D = Object(a.a)(e, [
              "children",
              "classes",
              "className",
              "color",
              "component",
              "disabled",
              "error",
              "fullWidth",
              "focused",
              "hiddenLabel",
              "margin",
              "required",
              "size",
              "variant",
            ]),
            M = o.useState(function () {
              var e = !1;
              return (
                n &&
                  o.Children.forEach(n, function (t) {
                    if (Object(ce.a)(t, ["Input", "Select"])) {
                      var n = Object(ce.a)(t, ["Select"]) ? t.props.input : t;
                      n && n.props.startAdornment && (e = !0);
                    }
                  }),
                e
              );
            }),
            N = M[0],
            T = M[1],
            I = o.useState(function () {
              var e = !1;
              return (
                n &&
                  o.Children.forEach(n, function (t) {
                    Object(ce.a)(t, ["Input", "Select"]) &&
                      V(t.props, !0) &&
                      (e = !0);
                  }),
                e
              );
            }),
            F = I[0],
            W = I[1],
            z = o.useState(!1),
            A = z[0],
            B = z[1],
            $ = void 0 !== O ? O : A;
          b && $ && B(!1);
          var H = o.useCallback(function () {
              W(!0);
            }, []),
            q = {
              adornedStart: N,
              setAdornedStart: T,
              color: s,
              disabled: b,
              error: v,
              filled: F,
              focused: $,
              fullWidth: y,
              hiddenLabel: j,
              margin: ("small" === k ? "dense" : void 0) || E,
              onBlur: function () {
                B(!1);
              },
              onEmpty: o.useCallback(function () {
                W(!1);
              }, []),
              onFilled: H,
              onFocus: function () {
                B(!0);
              },
              registerEffect: void 0,
              required: S,
              variant: P,
            };
          return o.createElement(
            L.Provider,
            { value: q },
            o.createElement(
              f,
              Object(i.a)(
                {
                  className: Object(l.a)(
                    r.root,
                    c,
                    "none" !== E && r["margin".concat(Object(u.a)(E))],
                    y && r.fullWidth
                  ),
                  ref: t,
                },
                D
              ),
              n
            )
          );
        }),
        se = Object(c.a)(
          {
            root: {
              display: "inline-flex",
              flexDirection: "column",
              position: "relative",
              minWidth: 0,
              padding: 0,
              margin: 0,
              border: 0,
              verticalAlign: "top",
            },
            marginNormal: { marginTop: 16, marginBottom: 8 },
            marginDense: { marginTop: 8, marginBottom: 4 },
            fullWidth: { width: "100%" },
          },
          { name: "MuiFormControl" }
        )(de),
        ue = o.forwardRef(function (e, t) {
          var n = e.children,
            r = e.classes,
            c = e.className,
            d = e.component,
            s = void 0 === d ? "p" : d,
            u =
              (e.disabled,
              e.error,
              e.filled,
              e.focused,
              e.margin,
              e.required,
              e.variant,
              Object(a.a)(e, [
                "children",
                "classes",
                "className",
                "component",
                "disabled",
                "error",
                "filled",
                "focused",
                "margin",
                "required",
                "variant",
              ])),
            p = W({
              props: e,
              muiFormControl: oe(),
              states: [
                "variant",
                "margin",
                "disabled",
                "error",
                "filled",
                "focused",
                "required",
              ],
            });
          return o.createElement(
            s,
            Object(i.a)(
              {
                className: Object(l.a)(
                  r.root,
                  ("filled" === p.variant || "outlined" === p.variant) &&
                    r.contained,
                  c,
                  p.disabled && r.disabled,
                  p.error && r.error,
                  p.filled && r.filled,
                  p.focused && r.focused,
                  p.required && r.required,
                  "dense" === p.margin && r.marginDense
                ),
                ref: t,
              },
              u
            ),
            " " === n
              ? o.createElement("span", {
                  dangerouslySetInnerHTML: { __html: "&#8203;" },
                })
              : n
          );
        }),
        pe = Object(c.a)(
          function (e) {
            return {
              root: Object(i.a)(
                Object(i.a)(
                  { color: e.palette.text.secondary },
                  e.typography.caption
                ),
                {},
                {
                  textAlign: "left",
                  marginTop: 3,
                  margin: 0,
                  "&$disabled": { color: e.palette.text.disabled },
                  "&$error": { color: e.palette.error.main },
                }
              ),
              error: {},
              disabled: {},
              marginDense: { marginTop: 4 },
              contained: { marginLeft: 14, marginRight: 14 },
              focused: {},
              filled: {},
              required: {},
            };
          },
          { name: "MuiFormHelperText" }
        )(ue),
        fe = n("XNZ3"),
        me = (n("0l/t"), n("dZ+Y"), n("HAE/"), n("V+eJ"), n("Tze0"), n("U8pU")),
        be = (n("TOwV"), n("rGqo"), n("yt8O"), n("Btvt"), n("eD//")),
        he = n("bwkw");
      function ve(e, t, n) {
        return e === t
          ? e.firstChild
          : t && t.nextElementSibling
          ? t.nextElementSibling
          : n
          ? null
          : e.firstChild;
      }
      function ge(e, t, n) {
        return e === t
          ? n
            ? e.firstChild
            : e.lastChild
          : t && t.previousElementSibling
          ? t.previousElementSibling
          : n
          ? null
          : e.lastChild;
      }
      function ye(e, t) {
        if (void 0 === t) return !0;
        var n = e.innerText;
        return (
          void 0 === n && (n = e.textContent),
          0 !== (n = n.trim().toLowerCase()).length &&
            (t.repeating
              ? n[0] === t.keys[0]
              : 0 === n.indexOf(t.keys.join("")))
        );
      }
      function Oe(e, t, n, o, r, a) {
        for (var i = !1, l = r(e, t, !!t && n); l; ) {
          if (l === e.firstChild) {
            if (i) return;
            i = !0;
          }
          var c =
            !o && (l.disabled || "true" === l.getAttribute("aria-disabled"));
          if (l.hasAttribute("tabindex") && ye(l, a) && !c)
            return void l.focus();
          l = r(e, l, n);
        }
      }
      var xe = "undefined" == typeof window ? o.useEffect : o.useLayoutEffect,
        je = o.forwardRef(function (e, t) {
          var n = e.actions,
            r = e.autoFocus,
            l = void 0 !== r && r,
            c = e.autoFocusItem,
            d = void 0 !== c && c,
            s = e.children,
            u = e.className,
            p = e.disabledItemsFocusable,
            f = void 0 !== p && p,
            b = e.disableListWrap,
            v = void 0 !== b && b,
            g = e.onKeyDown,
            y = e.variant,
            O = void 0 === y ? "selectedMenu" : y,
            x = Object(a.a)(e, [
              "actions",
              "autoFocus",
              "autoFocusItem",
              "children",
              "className",
              "disabledItemsFocusable",
              "disableListWrap",
              "onKeyDown",
              "variant",
            ]),
            j = o.useRef(null),
            C = o.useRef({
              keys: [],
              repeating: !0,
              previousKeyMatched: !0,
              lastTime: null,
            });
          xe(
            function () {
              l && j.current.focus();
            },
            [l]
          ),
            o.useImperativeHandle(
              n,
              function () {
                return {
                  adjustStyleForScrollbar: function (e, t) {
                    var n = !j.current.style.width;
                    if (e.clientHeight < j.current.clientHeight && n) {
                      var o = "".concat(Object(he.a)(!0), "px");
                      (j.current.style[
                        "rtl" === t.direction ? "paddingLeft" : "paddingRight"
                      ] = o),
                        (j.current.style.width = "calc(100% + ".concat(o, ")"));
                    }
                    return j.current;
                  },
                };
              },
              []
            );
          var w = o.useCallback(function (e) {
              j.current = m.findDOMNode(e);
            }, []),
            S = Object(E.a)(w, t),
            k = -1;
          o.Children.forEach(s, function (e, t) {
            o.isValidElement(e) &&
              (e.props.disabled ||
                ((("selectedMenu" === O && e.props.selected) || -1 === k) &&
                  (k = t)));
          });
          var R = o.Children.map(s, function (e, t) {
            if (t === k) {
              var n = {};
              return (
                d && (n.autoFocus = !0),
                void 0 === e.props.tabIndex &&
                  "selectedMenu" === O &&
                  (n.tabIndex = 0),
                o.cloneElement(e, n)
              );
            }
            return e;
          });
          return o.createElement(
            be.a,
            Object(i.a)(
              {
                role: "menu",
                ref: S,
                className: u,
                onKeyDown: function (e) {
                  var t = j.current,
                    n = e.key,
                    o = Object(h.a)(t).activeElement;
                  if ("ArrowDown" === n) e.preventDefault(), Oe(t, o, v, f, ve);
                  else if ("ArrowUp" === n)
                    e.preventDefault(), Oe(t, o, v, f, ge);
                  else if ("Home" === n)
                    e.preventDefault(), Oe(t, null, v, f, ve);
                  else if ("End" === n)
                    e.preventDefault(), Oe(t, null, v, f, ge);
                  else if (1 === n.length) {
                    var r = C.current,
                      a = n.toLowerCase(),
                      i = performance.now();
                    r.keys.length > 0 &&
                      (i - r.lastTime > 500
                        ? ((r.keys = []),
                          (r.repeating = !0),
                          (r.previousKeyMatched = !0))
                        : r.repeating && a !== r.keys[0] && (r.repeating = !1)),
                      (r.lastTime = i),
                      r.keys.push(a);
                    var l = o && !r.repeating && ye(o, r);
                    r.previousKeyMatched && (l || Oe(t, o, !1, f, ve, r))
                      ? e.preventDefault()
                      : (r.previousKeyMatched = !1);
                  }
                  g && g(e);
                },
                tabIndex: l ? 0 : -1,
              },
              x
            ),
            R
          );
        }),
        Ce = n("GIek"),
        Ee = { vertical: "top", horizontal: "right" },
        we = { vertical: "top", horizontal: "left" },
        Se = o.forwardRef(function (e, t) {
          var n = e.autoFocus,
            r = void 0 === n || n,
            c = e.children,
            d = e.classes,
            s = e.disableAutoFocusItem,
            u = void 0 !== s && s,
            p = e.MenuListProps,
            f = void 0 === p ? {} : p,
            b = e.onClose,
            h = e.onEntering,
            v = e.open,
            g = e.PaperProps,
            y = void 0 === g ? {} : g,
            O = e.PopoverClasses,
            x = e.transitionDuration,
            C = void 0 === x ? "auto" : x,
            E = e.variant,
            w = void 0 === E ? "selectedMenu" : E,
            S = Object(a.a)(e, [
              "autoFocus",
              "children",
              "classes",
              "disableAutoFocusItem",
              "MenuListProps",
              "onClose",
              "onEntering",
              "open",
              "PaperProps",
              "PopoverClasses",
              "transitionDuration",
              "variant",
            ]),
            k = Object(j.a)(),
            R = r && !u && v,
            P = o.useRef(null),
            D = o.useRef(null),
            M = -1;
          o.Children.map(c, function (e, t) {
            o.isValidElement(e) &&
              (e.props.disabled ||
                ((("menu" !== w && e.props.selected) || -1 === M) && (M = t)));
          });
          var N = o.Children.map(c, function (e, t) {
            return t === M
              ? o.cloneElement(e, {
                  ref: function (t) {
                    (D.current = m.findDOMNode(t)), Object(Ce.a)(e.ref, t);
                  },
                })
              : e;
          });
          return o.createElement(
            F,
            Object(i.a)(
              {
                getContentAnchorEl: function () {
                  return D.current;
                },
                classes: O,
                onClose: b,
                onEntering: function (e, t) {
                  P.current && P.current.adjustStyleForScrollbar(e, k),
                    h && h(e, t);
                },
                anchorOrigin: "rtl" === k.direction ? Ee : we,
                transformOrigin: "rtl" === k.direction ? Ee : we,
                PaperProps: Object(i.a)(
                  Object(i.a)({}, y),
                  {},
                  {
                    classes: Object(i.a)(
                      Object(i.a)({}, y.classes),
                      {},
                      { root: d.paper }
                    ),
                  }
                ),
                open: v,
                ref: t,
                transitionDuration: C,
              },
              S
            ),
            o.createElement(
              je,
              Object(i.a)(
                {
                  onKeyDown: function (e) {
                    "Tab" === e.key &&
                      (e.preventDefault(), b && b(e, "tabKeyDown"));
                  },
                  actions: P,
                  autoFocus: r && (-1 === M || u),
                  autoFocusItem: R,
                  variant: w,
                },
                f,
                { className: Object(l.a)(d.list, f.className) }
              ),
              N
            )
          );
        }),
        ke = Object(c.a)(
          {
            paper: {
              maxHeight: "calc(100% - 96px)",
              WebkitOverflowScrolling: "touch",
            },
            list: { outline: 0 },
          },
          { name: "MuiMenu" }
        )(Se);
      function Re(e, t) {
        return "object" === Object(me.a)(t) && null !== t
          ? e === t
          : String(e) === String(t);
      }
      var Pe = o.forwardRef(function (e, t) {
          var n = e["aria-label"],
            r = e.autoFocus,
            c = e.autoWidth,
            d = e.children,
            s = e.classes,
            p = e.className,
            f = e.defaultValue,
            m = e.disabled,
            b = e.displayEmpty,
            v = e.IconComponent,
            g = e.inputRef,
            y = e.labelId,
            x = e.MenuProps,
            j = void 0 === x ? {} : x,
            C = e.multiple,
            w = e.name,
            S = e.onBlur,
            k = e.onChange,
            R = e.onClose,
            P = e.onFocus,
            D = e.onOpen,
            M = e.open,
            N = e.readOnly,
            T = e.renderValue,
            I = (e.required, e.SelectDisplayProps),
            F = void 0 === I ? {} : I,
            W = e.tabIndex,
            z = (e.type, e.value),
            L = e.variant,
            A = void 0 === L ? "standard" : L,
            B = Object(a.a)(e, [
              "aria-label",
              "autoFocus",
              "autoWidth",
              "children",
              "classes",
              "className",
              "defaultValue",
              "disabled",
              "displayEmpty",
              "IconComponent",
              "inputRef",
              "labelId",
              "MenuProps",
              "multiple",
              "name",
              "onBlur",
              "onChange",
              "onClose",
              "onFocus",
              "onOpen",
              "open",
              "readOnly",
              "renderValue",
              "required",
              "SelectDisplayProps",
              "tabIndex",
              "type",
              "value",
              "variant",
            ]),
            $ = (function (e) {
              var t = e.controlled,
                n = e.default,
                r = (e.name, e.state, o.useRef(void 0 !== t).current),
                a = o.useState(n),
                i = a[0],
                l = a[1];
              return [
                r ? t : i,
                o.useCallback(function (e) {
                  r || l(e);
                }, []),
              ];
            })({ controlled: z, default: f, name: "Select" }),
            H = Object(O.a)($, 2),
            q = H[0],
            K = H[1],
            U = o.useRef(null),
            _ = o.useState(null),
            X = _[0],
            J = _[1],
            Y = o.useRef(null != M).current,
            Q = o.useState(),
            Z = Q[0],
            G = Q[1],
            ee = o.useState(!1),
            te = ee[0],
            ne = ee[1],
            oe = Object(E.a)(t, g);
          o.useImperativeHandle(
            oe,
            function () {
              return {
                focus: function () {
                  X.focus();
                },
                node: U.current,
                value: q,
              };
            },
            [X, q]
          ),
            o.useEffect(
              function () {
                r && X && X.focus();
              },
              [r, X]
            ),
            o.useEffect(
              function () {
                if (X) {
                  var e = Object(h.a)(X).getElementById(y);
                  if (e) {
                    var t = function () {
                      getSelection().isCollapsed && X.focus();
                    };
                    return (
                      e.addEventListener("click", t),
                      function () {
                        e.removeEventListener("click", t);
                      }
                    );
                  }
                }
              },
              [y, X]
            );
          var re,
            ae,
            ie = function (e, t) {
              e ? D && D(t) : R && R(t),
                Y || (G(c ? null : X.clientWidth), ne(e));
            },
            le = function (e) {
              return function (t) {
                var n;
                if ((C || ie(!1, t), C)) {
                  n = Array.isArray(q) ? q.slice() : [];
                  var o = q.indexOf(e.props.value);
                  -1 === o ? n.push(e.props.value) : n.splice(o, 1);
                } else n = e.props.value;
                e.props.onClick && e.props.onClick(t),
                  q !== n &&
                    (K(n),
                    k &&
                      (t.persist(),
                      Object.defineProperty(t, "target", {
                        writable: !0,
                        value: { value: n, name: w },
                      }),
                      k(t, e)));
              };
            },
            ce = null !== X && (Y ? M : te);
          delete B["aria-invalid"];
          var de = [],
            se = !1;
          (V({ value: q }) || b) && (T ? (re = T(q)) : (se = !0));
          var ue = o.Children.map(d, function (e) {
            if (!o.isValidElement(e)) return null;
            var t;
            if (C) {
              if (!Array.isArray(q))
                throw new Error(
                  "Material-UI: The `value` prop must be an array when using the `Select` component with `multiple`."
                );
              (t = q.some(function (t) {
                return Re(t, e.props.value);
              })) &&
                se &&
                de.push(e.props.children);
            } else (t = Re(q, e.props.value)) && se && (ae = e.props.children);
            return (
              t && !0,
              o.cloneElement(e, {
                "aria-selected": t ? "true" : void 0,
                onClick: le(e),
                onKeyUp: function (t) {
                  " " === t.key && t.preventDefault(),
                    e.props.onKeyUp && e.props.onKeyUp(t);
                },
                role: "option",
                selected: t,
                value: void 0,
                "data-value": e.props.value,
              })
            );
          });
          se && (re = C ? de.join(", ") : ae);
          var pe,
            fe = Z;
          !c && Y && X && (fe = X.clientWidth),
            (pe = void 0 !== W ? W : m ? null : 0);
          var me = F.id || (w ? "mui-component-select-".concat(w) : void 0);
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              Object(i.a)(
                {
                  className: Object(l.a)(
                    s.root,
                    s.select,
                    s.selectMenu,
                    s[A],
                    p,
                    m && s.disabled
                  ),
                  ref: J,
                  tabIndex: pe,
                  role: "button",
                  "aria-disabled": m ? "true" : void 0,
                  "aria-expanded": ce ? "true" : void 0,
                  "aria-haspopup": "listbox",
                  "aria-label": n,
                  "aria-labelledby":
                    [y, me].filter(Boolean).join(" ") || void 0,
                  onKeyDown: function (e) {
                    if (!N) {
                      -1 !==
                        [" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(e.key) &&
                        (e.preventDefault(), ie(!0, e));
                    }
                  },
                  onMouseDown:
                    m || N
                      ? null
                      : function (e) {
                          0 === e.button &&
                            (e.preventDefault(), X.focus(), ie(!0, e));
                        },
                  onBlur: function (e) {
                    !ce &&
                      S &&
                      (e.persist(),
                      Object.defineProperty(e, "target", {
                        writable: !0,
                        value: { value: q, name: w },
                      }),
                      S(e));
                  },
                  onFocus: P,
                },
                F,
                { id: me }
              ),
              (function (e) {
                return null == e || ("string" == typeof e && !e.trim());
              })(re)
                ? o.createElement("span", {
                    dangerouslySetInnerHTML: { __html: "&#8203;" },
                  })
                : re
            ),
            o.createElement(
              "input",
              Object(i.a)(
                {
                  value: Array.isArray(q) ? q.join(",") : q,
                  name: w,
                  ref: U,
                  type: "hidden",
                  autoFocus: r,
                },
                B
              )
            ),
            o.createElement(v, {
              className: Object(l.a)(
                s.icon,
                s["icon".concat(Object(u.a)(A))],
                ce && s.iconOpen,
                m && s.disabled
              ),
            }),
            o.createElement(
              ke,
              Object(i.a)(
                {
                  id: "menu-".concat(w || ""),
                  anchorEl: X,
                  open: ce,
                  onClose: function (e) {
                    ie(!1, e);
                  },
                },
                j,
                {
                  MenuListProps: Object(i.a)(
                    {
                      "aria-labelledby": y,
                      role: "listbox",
                      disableListWrap: !0,
                    },
                    j.MenuListProps
                  ),
                  PaperProps: Object(i.a)(
                    Object(i.a)({}, j.PaperProps),
                    {},
                    {
                      style: Object(i.a)(
                        { minWidth: fe },
                        null != j.PaperProps ? j.PaperProps.style : null
                      ),
                    }
                  ),
                }
              ),
              ue
            )
          );
        }),
        De = n("HR5l");
      var Me,
        Ne,
        Te =
          ((Me = o.createElement("path", { d: "M7 10l5 5 5-5z" })),
          ((Ne = function (e, t) {
            return r.a.createElement(De.a, Object(i.a)({ ref: t }, e), Me);
          }).muiName = De.a.muiName),
          r.a.memo(r.a.forwardRef(Ne))),
        Ie = o.forwardRef(function (e, t) {
          var n = e.classes,
            r = e.className,
            c = e.disabled,
            d = e.IconComponent,
            s = e.inputRef,
            p = e.variant,
            f = void 0 === p ? "standard" : p,
            m = Object(a.a)(e, [
              "classes",
              "className",
              "disabled",
              "IconComponent",
              "inputRef",
              "variant",
            ]);
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "select",
              Object(i.a)(
                {
                  className: Object(l.a)(
                    n.root,
                    n.select,
                    n[f],
                    r,
                    c && n.disabled
                  ),
                  disabled: c,
                  ref: s || t,
                },
                m
              )
            ),
            e.multiple
              ? null
              : o.createElement(d, {
                  className: Object(l.a)(
                    n.icon,
                    n["icon".concat(Object(u.a)(f))],
                    c && n.disabled
                  ),
                })
          );
        }),
        Fe = function (e) {
          return {
            root: {},
            select: {
              "-moz-appearance": "none",
              "-webkit-appearance": "none",
              userSelect: "none",
              borderRadius: 0,
              minWidth: 16,
              cursor: "pointer",
              "&:focus": {
                backgroundColor:
                  "light" === e.palette.type
                    ? "rgba(0, 0, 0, 0.05)"
                    : "rgba(255, 255, 255, 0.05)",
                borderRadius: 0,
              },
              "&::-ms-expand": { display: "none" },
              "&$disabled": { cursor: "default" },
              "&[multiple]": { height: "auto" },
              "&:not([multiple]) option, &:not([multiple]) optgroup": {
                backgroundColor: e.palette.background.paper,
              },
              "&&": { paddingRight: 24 },
            },
            filled: { "&&": { paddingRight: 32 } },
            outlined: {
              borderRadius: e.shape.borderRadius,
              "&&": { paddingRight: 32 },
            },
            selectMenu: {
              height: "auto",
              minHeight: "1.1876em",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            },
            disabled: {},
            icon: {
              position: "absolute",
              right: 0,
              top: "calc(50% - 12px)",
              pointerEvents: "none",
              color: e.palette.action.active,
              "&$disabled": { color: e.palette.action.disabled },
            },
            iconOpen: { transform: "rotate(180deg)" },
            iconFilled: { right: 7 },
            iconOutlined: { right: 7 },
          };
        },
        We = o.createElement(J, null),
        ze = o.forwardRef(function (e, t) {
          var n = e.children,
            r = e.classes,
            l = e.IconComponent,
            c = void 0 === l ? Te : l,
            d = e.input,
            s = void 0 === d ? We : d,
            u = e.inputProps,
            p =
              (e.variant,
              Object(a.a)(e, [
                "children",
                "classes",
                "IconComponent",
                "input",
                "inputProps",
                "variant",
              ])),
            f = W({ props: e, muiFormControl: oe(), states: ["variant"] });
          return o.cloneElement(
            s,
            Object(i.a)(
              {
                inputComponent: Ie,
                inputProps: Object(i.a)(
                  Object(i.a)(
                    {
                      children: n,
                      classes: r,
                      IconComponent: c,
                      variant: f.variant,
                      type: void 0,
                    },
                    u
                  ),
                  s ? s.props.inputProps : {}
                ),
                ref: t,
              },
              p
            )
          );
        });
      ze.muiName = "Select";
      Object(c.a)(Fe, { name: "MuiNativeSelect" })(ze);
      var Le = Fe,
        Ae = o.createElement(J, null),
        Be = o.createElement(Q, null),
        $e = o.forwardRef(function e(t, n) {
          var r = t.autoWidth,
            l = void 0 !== r && r,
            c = t.children,
            d = t.classes,
            s = t.displayEmpty,
            u = void 0 !== s && s,
            p = t.IconComponent,
            f = void 0 === p ? Te : p,
            m = t.id,
            b = t.input,
            h = t.inputProps,
            v = t.label,
            g = t.labelId,
            y = t.labelWidth,
            O = void 0 === y ? 0 : y,
            x = t.MenuProps,
            j = t.multiple,
            C = void 0 !== j && j,
            E = t.native,
            w = void 0 !== E && E,
            S = t.onClose,
            k = t.onOpen,
            R = t.open,
            P = t.renderValue,
            D = t.SelectDisplayProps,
            M = t.variant,
            N = void 0 === M ? "standard" : M,
            T = Object(a.a)(t, [
              "autoWidth",
              "children",
              "classes",
              "displayEmpty",
              "IconComponent",
              "id",
              "input",
              "inputProps",
              "label",
              "labelId",
              "labelWidth",
              "MenuProps",
              "multiple",
              "native",
              "onClose",
              "onOpen",
              "open",
              "renderValue",
              "SelectDisplayProps",
              "variant",
            ]),
            I = w ? Ie : Pe,
            F =
              W({ props: t, muiFormControl: oe(), states: ["variant"] })
                .variant || N,
            z =
              b ||
              {
                standard: Ae,
                outlined: o.createElement(ne, { label: v, labelWidth: O }),
                filled: Be,
              }[F];
          return o.cloneElement(
            z,
            Object(i.a)(
              {
                inputComponent: I,
                inputProps: Object(i.a)(
                  Object(i.a)(
                    Object(i.a)(
                      {
                        children: c,
                        IconComponent: f,
                        variant: F,
                        type: void 0,
                        multiple: C,
                      },
                      w
                        ? { id: m }
                        : {
                            autoWidth: l,
                            displayEmpty: u,
                            labelId: g,
                            MenuProps: x,
                            onClose: S,
                            onOpen: k,
                            open: R,
                            renderValue: P,
                            SelectDisplayProps: Object(i.a)({ id: m }, D),
                          }
                    ),
                    h
                  ),
                  {},
                  {
                    classes: h
                      ? Object(fe.a)({
                          baseClasses: d,
                          newClasses: h.classes,
                          Component: e,
                        })
                      : d,
                  },
                  b ? b.props.inputProps : {}
                ),
                ref: n,
              },
              T
            )
          );
        });
      $e.muiName = "Select";
      var He = Object(c.a)(Le, { name: "MuiSelect" })($e),
        qe = { standard: J, filled: Q, outlined: ne },
        Ve = o.forwardRef(function (e, t) {
          var n = e.autoComplete,
            r = e.autoFocus,
            c = void 0 !== r && r,
            d = e.children,
            s = e.classes,
            u = e.className,
            p = e.color,
            f = void 0 === p ? "primary" : p,
            m = e.defaultValue,
            b = e.disabled,
            h = void 0 !== b && b,
            v = e.error,
            g = void 0 !== v && v,
            y = e.FormHelperTextProps,
            O = e.fullWidth,
            x = void 0 !== O && O,
            j = e.helperText,
            C = e.hiddenLabel,
            E = e.id,
            w = e.InputLabelProps,
            S = e.inputProps,
            k = e.InputProps,
            R = e.inputRef,
            P = e.label,
            D = e.multiline,
            M = void 0 !== D && D,
            N = e.name,
            T = e.onBlur,
            I = e.onChange,
            F = e.onFocus,
            W = e.placeholder,
            z = e.required,
            L = void 0 !== z && z,
            A = e.rows,
            B = e.rowsMax,
            $ = e.select,
            H = void 0 !== $ && $,
            q = e.SelectProps,
            V = e.type,
            K = e.value,
            U = e.variant,
            _ = void 0 === U ? "standard" : U,
            X = Object(a.a)(e, [
              "autoComplete",
              "autoFocus",
              "children",
              "classes",
              "className",
              "color",
              "defaultValue",
              "disabled",
              "error",
              "FormHelperTextProps",
              "fullWidth",
              "helperText",
              "hiddenLabel",
              "id",
              "InputLabelProps",
              "inputProps",
              "InputProps",
              "inputRef",
              "label",
              "multiline",
              "name",
              "onBlur",
              "onChange",
              "onFocus",
              "placeholder",
              "required",
              "rows",
              "rowsMax",
              "select",
              "SelectProps",
              "type",
              "value",
              "variant",
            ]);
          var J = {};
          if (
            "outlined" === _ &&
            (w && void 0 !== w.shrink && (J.notched = w.shrink), P)
          ) {
            var Y,
              Q =
                null !== (Y = null == w ? void 0 : w.required) && void 0 !== Y
                  ? Y
                  : L;
            J.label = o.createElement(o.Fragment, null, P, Q && " *");
          }
          H &&
            ((q && q.native) || (J.id = void 0),
            (J["aria-describedby"] = void 0));
          var Z = j && E ? "".concat(E, "-helper-text") : void 0,
            G = P && E ? "".concat(E, "-label") : void 0,
            ee = qe[_],
            te = o.createElement(
              ee,
              Object(i.a)(
                {
                  "aria-describedby": Z,
                  autoComplete: n,
                  autoFocus: c,
                  defaultValue: m,
                  fullWidth: x,
                  multiline: M,
                  name: N,
                  rows: A,
                  rowsMax: B,
                  type: V,
                  value: K,
                  id: E,
                  inputRef: R,
                  onBlur: T,
                  onChange: I,
                  onFocus: F,
                  placeholder: W,
                  inputProps: S,
                },
                J,
                k
              )
            );
          return o.createElement(
            se,
            Object(i.a)(
              {
                className: Object(l.a)(s.root, u),
                disabled: h,
                error: g,
                fullWidth: x,
                hiddenLabel: C,
                ref: t,
                required: L,
                color: f,
                variant: _,
              },
              X
            ),
            P && o.createElement(le, Object(i.a)({ htmlFor: E, id: G }, w), P),
            H
              ? o.createElement(
                  He,
                  Object(i.a)(
                    {
                      "aria-describedby": Z,
                      id: E,
                      labelId: G,
                      value: K,
                      input: te,
                    },
                    q
                  ),
                  d
                )
              : te,
            j && o.createElement(pe, Object(i.a)({ id: Z }, y), j)
          );
        }),
        Ke = Object(c.a)({ root: {} }, { name: "MuiTextField" })(Ve),
        Ue = n("YoL/"),
        _e = n.n(Ue),
        Xe = n("P5Jw"),
        Je = n("Bl7J");
      t.default = function () {
        var e = r.a.useState(""),
          t = e[0],
          n = e[1],
          o = r.a.useState(!1),
          a = o[0],
          i = (o[1], r.a.useState(null)),
          l = i[0],
          c = i[1],
          d = Boolean(l),
          s = d ? "copied-popover" : void 0,
          u = r.a.useRef(null);
        return (
          r.a.useEffect(
            function () {
              if (a) {
                var e = u.current;
                null !== e && e.focus();
              }
            },
            [a]
          ),
          r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Je.a,
              { pageTitle: "Reformat English", createdYear: "2020" },
              r.a.createElement("h2", null, "Reformat English"),
              r.a.createElement(
                "p",
                null,
                "Reformat english text for translation system."
              ),
              r.a.createElement(Ke, {
                id: "english-text",
                label: "Source text(unformated)",
                placeholder: "The unformated English",
                fullWidth: !0,
                variant: "outlined",
                multiline: !0,
                value: t,
                onChange: function (e) {
                  var t = e.target.value
                    .replace(/\n/g, " ")
                    .replace(/\.   */g, ". \n")
                    .replace(/\. ?/g, ".\n");
                  n(t);
                },
              }),
              r.a.createElement(
                Xe.CopyToClipboard,
                { text: t },
                r.a.createElement(
                  f,
                  {
                    "area-describedby": s,
                    variant: "contained",
                    color: "primary",
                    startIcon: r.a.createElement(_e.a, null),
                    onClick: function (e) {
                      return c(e.currentTarget);
                    },
                  },
                  "Copy"
                )
              )
            ),
            r.a.createElement(
              F,
              {
                id: s,
                open: d,
                anchorEl: l,
                onClose: function () {
                  return c(null);
                },
                anchorOrigin: { vertical: "bottom", horizontal: "center" },
                transformorigin: { vertical: "top", horizontal: "center" },
              },
              "Copy success"
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-tools-reformat-english-js-29bfab6475a007e5d4b2.js.map
