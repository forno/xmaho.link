(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    "0PSK": function (e, t, n) {
      "use strict";
      var o = n("q1tI"),
        r = n.n(o);
      t.a = r.a.createContext(null);
    },
    "0mN4": function (e, t, n) {
      "use strict";
      n("OGtf")("fixed", function (e) {
        return function () {
          return e(this, "tt", "", "");
        };
      });
    },
    "4Hym": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return r;
        });
      var o = function (e) {
        return e.scrollTop;
      };
      function r(e, t) {
        var n = e.timeout,
          o = e.style,
          r = void 0 === o ? {} : o;
        return {
          duration:
            r.transitionDuration || "number" == typeof n ? n : n[t.mode] || 0,
          delay: r.transitionDelay,
        };
      }
    },
    "51K9": function (e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"FORNO\'s portfolio","description":"FORNO\'s portfolio for every develop","author":"FORNO"}}}}'
      );
    },
    "8/g6": function (e, t, n) {
      "use strict";
      n("HAE/");
      var o = n("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var n = a.default.memo(
            a.default.forwardRef(function (t, n) {
              return a.default.createElement(
                i.default,
                (0, r.default)({ ref: n }, t),
                e
              );
            })
          );
          0;
          return (n.muiName = i.default.muiName), n;
        });
      var r = o(n("pVnL")),
        a = o(n("q1tI")),
        i = o(n("UJJ5"));
    },
    Bl7J: function (e, t, n) {
      "use strict";
      var o = n("q1tI"),
        r = n.n(o),
        a =
          (n("0mN4"),
          n("rGqo"),
          n("yt8O"),
          n("Btvt"),
          n("RW0V"),
          n("DNiP"),
          n("wx14")),
        i = n("Ff2n"),
        c = n("rePB"),
        s = n("iuhU"),
        l = n("H2TA"),
        u = n("NqtD"),
        d = o.forwardRef(function (e, t) {
          var n = e.classes,
            r = e.className,
            c = e.component,
            l = void 0 === c ? "div" : c,
            d = e.disableGutters,
            p = void 0 !== d && d,
            f = e.fixed,
            m = void 0 !== f && f,
            b = e.maxWidth,
            h = void 0 === b ? "lg" : b,
            v = Object(i.a)(e, [
              "classes",
              "className",
              "component",
              "disableGutters",
              "fixed",
              "maxWidth",
            ]);
          return o.createElement(
            l,
            Object(a.a)(
              {
                className: Object(s.a)(
                  n.root,
                  r,
                  m && n.fixed,
                  p && n.disableGutters,
                  !1 !== h && n["maxWidth".concat(Object(u.a)(String(h)))]
                ),
                ref: t,
              },
              v
            )
          );
        }),
        p = Object(l.a)(
          function (e) {
            return {
              root: Object(c.a)(
                {
                  width: "100%",
                  marginLeft: "auto",
                  boxSizing: "border-box",
                  marginRight: "auto",
                  paddingLeft: e.spacing(2),
                  paddingRight: e.spacing(2),
                  display: "block",
                },
                e.breakpoints.up("sm"),
                { paddingLeft: e.spacing(3), paddingRight: e.spacing(3) }
              ),
              disableGutters: { paddingLeft: 0, paddingRight: 0 },
              fixed: Object.keys(e.breakpoints.values).reduce(function (t, n) {
                var o = e.breakpoints.values[n];
                return 0 !== o && (t[e.breakpoints.up(n)] = { maxWidth: o }), t;
              }, {}),
              maxWidthXs: Object(c.a)({}, e.breakpoints.up("xs"), {
                maxWidth: Math.max(e.breakpoints.values.xs, 444),
              }),
              maxWidthSm: Object(c.a)({}, e.breakpoints.up("sm"), {
                maxWidth: e.breakpoints.values.sm,
              }),
              maxWidthMd: Object(c.a)({}, e.breakpoints.up("md"), {
                maxWidth: e.breakpoints.values.md,
              }),
              maxWidthLg: Object(c.a)({}, e.breakpoints.up("lg"), {
                maxWidth: e.breakpoints.values.lg,
              }),
              maxWidthXl: Object(c.a)({}, e.breakpoints.up("xl"), {
                maxWidth: e.breakpoints.values.xl,
              }),
            };
          },
          { name: "MuiContainer" }
        )(d),
        f = n("51K9"),
        m = n("qhky");
      function b(e) {
        var t = e.description,
          n = e.lang,
          o = e.meta,
          a = e.title,
          i = f.data.site,
          c = t || i.siteMetadata.description;
        return r.a.createElement(m.a, {
          htmlAttributes: { lang: n },
          title: a,
          titleTemplate: "%s | " + i.siteMetadata.title,
          meta: [
            { name: "description", content: c },
            { property: "og:title", content: a },
            { property: "og:description", content: c },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: i.siteMetadata.author },
            { name: "twitter:title", content: a },
            { name: "twitter:description", content: c },
          ].concat(o),
        });
      }
      b.defaultProps = { lang: "ja", meta: [], description: "" };
      var h = b,
        v = (n("91GP"), n("f98A")),
        g = n("kKAo"),
        y = o.forwardRef(function (e, t) {
          var n = e.classes,
            r = e.className,
            c = e.color,
            l = void 0 === c ? "primary" : c,
            d = e.position,
            p = void 0 === d ? "fixed" : d,
            f = Object(i.a)(e, ["classes", "className", "color", "position"]);
          return o.createElement(
            g.a,
            Object(a.a)(
              {
                square: !0,
                component: "header",
                elevation: 4,
                className: Object(s.a)(
                  n.root,
                  n["position".concat(Object(u.a)(p))],
                  n["color".concat(Object(u.a)(l))],
                  r,
                  "fixed" === p && "mui-fixed"
                ),
                ref: t,
              },
              f
            )
          );
        }),
        E = Object(l.a)(
          function (e) {
            var t =
              "light" === e.palette.type
                ? e.palette.grey[100]
                : e.palette.grey[900];
            return {
              root: {
                display: "flex",
                flexDirection: "column",
                width: "100%",
                boxSizing: "border-box",
                zIndex: e.zIndex.appBar,
                flexShrink: 0,
              },
              positionFixed: {
                position: "fixed",
                top: 0,
                left: "auto",
                right: 0,
                "@media print": { position: "absolute" },
              },
              positionAbsolute: {
                position: "absolute",
                top: 0,
                left: "auto",
                right: 0,
              },
              positionSticky: {
                position: "sticky",
                top: 0,
                left: "auto",
                right: 0,
              },
              positionStatic: { position: "static" },
              positionRelative: { position: "relative" },
              colorDefault: {
                backgroundColor: t,
                color: e.palette.getContrastText(t),
              },
              colorPrimary: {
                backgroundColor: e.palette.primary.main,
                color: e.palette.primary.contrastText,
              },
              colorSecondary: {
                backgroundColor: e.palette.secondary.main,
                color: e.palette.secondary.contrastText,
              },
              colorInherit: { color: "inherit" },
              colorTransparent: {
                backgroundColor: "transparent",
                color: "inherit",
              },
            };
          },
          { name: "MuiAppBar" }
        )(y),
        O = n("ye/S"),
        x = o.forwardRef(function (e, t) {
          var n = e.absolute,
            r = void 0 !== n && n,
            c = e.classes,
            l = e.className,
            u = e.component,
            d = void 0 === u ? "hr" : u,
            p = e.flexItem,
            f = void 0 !== p && p,
            m = e.light,
            b = void 0 !== m && m,
            h = e.orientation,
            v = void 0 === h ? "horizontal" : h,
            g = e.role,
            y = void 0 === g ? ("hr" !== d ? "separator" : void 0) : g,
            E = e.variant,
            O = void 0 === E ? "fullWidth" : E,
            x = Object(i.a)(e, [
              "absolute",
              "classes",
              "className",
              "component",
              "flexItem",
              "light",
              "orientation",
              "role",
              "variant",
            ]);
          return o.createElement(
            d,
            Object(a.a)(
              {
                className: Object(s.a)(
                  c.root,
                  l,
                  "fullWidth" !== O && c[O],
                  r && c.absolute,
                  f && c.flexItem,
                  b && c.light,
                  "vertical" === v && c.vertical
                ),
                role: y,
                ref: t,
              },
              x
            )
          );
        }),
        j = Object(l.a)(
          function (e) {
            return {
              root: {
                height: 1,
                margin: 0,
                border: "none",
                flexShrink: 0,
                backgroundColor: e.palette.divider,
              },
              absolute: {
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
              },
              inset: { marginLeft: 72 },
              light: { backgroundColor: Object(O.b)(e.palette.divider, 0.08) },
              middle: { marginLeft: e.spacing(2), marginRight: e.spacing(2) },
              vertical: { height: "100%", width: 1 },
              flexItem: { alignSelf: "stretch", height: "auto" },
            };
          },
          { name: "MuiDivider" }
        )(x),
        k = (n("hEkN"), n("V+eJ"), n("Xt1q")),
        w = n("ODXe"),
        R = n("dRu9"),
        C = n("wpWl"),
        S = n("tr08"),
        T = n("4Hym"),
        N = n("bfFb"),
        M = { entering: { opacity: 1 }, entered: { opacity: 1 } },
        I = { enter: C.b.enteringScreen, exit: C.b.leavingScreen },
        D = o.forwardRef(function (e, t) {
          var n = e.children,
            r = e.disableStrictModeCompat,
            c = void 0 !== r && r,
            s = e.in,
            l = e.onEnter,
            u = e.onEntered,
            d = e.onEntering,
            p = e.onExit,
            f = e.onExited,
            m = e.onExiting,
            b = e.style,
            h = e.TransitionComponent,
            v = void 0 === h ? R.a : h,
            g = e.timeout,
            y = void 0 === g ? I : g,
            E = Object(i.a)(e, [
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
              "TransitionComponent",
              "timeout",
            ]),
            O = Object(S.a)(),
            x = O.unstable_strictMode && !c,
            j = o.useRef(null),
            k = Object(N.a)(n.ref, t),
            C = Object(N.a)(x ? j : void 0, k),
            D = function (e) {
              return function (t, n) {
                if (e) {
                  var o = x ? [j.current, t] : [t, n],
                    r = Object(w.a)(o, 2),
                    a = r[0],
                    i = r[1];
                  void 0 === i ? e(a) : e(a, i);
                }
              };
            },
            P = D(d),
            A = D(function (e, t) {
              Object(T.b)(e);
              var n = Object(T.a)({ style: b, timeout: y }, { mode: "enter" });
              (e.style.webkitTransition = O.transitions.create("opacity", n)),
                (e.style.transition = O.transitions.create("opacity", n)),
                l && l(e, t);
            }),
            L = D(u),
            F = D(m),
            z = D(function (e) {
              var t = Object(T.a)({ style: b, timeout: y }, { mode: "exit" });
              (e.style.webkitTransition = O.transitions.create("opacity", t)),
                (e.style.transition = O.transitions.create("opacity", t)),
                p && p(e);
            }),
            B = D(f);
          return o.createElement(
            v,
            Object(a.a)(
              {
                appear: !0,
                in: s,
                nodeRef: x ? j : void 0,
                onEnter: A,
                onEntered: L,
                onEntering: P,
                onExit: z,
                onExited: B,
                onExiting: F,
                timeout: y,
              },
              E
            ),
            function (e, t) {
              return o.cloneElement(
                n,
                Object(a.a)(
                  {
                    style: Object(a.a)(
                      Object(a.a)(
                        Object(a.a)(
                          {
                            opacity: 0,
                            visibility: "exited" !== e || s ? void 0 : "hidden",
                          },
                          M[e]
                        ),
                        b
                      ),
                      n.props.style
                    ),
                    ref: C,
                  },
                  t
                )
              );
            }
          );
        }),
        P = o.forwardRef(function (e, t) {
          var n = e.children,
            r = e.classes,
            c = e.className,
            l = e.invisible,
            u = void 0 !== l && l,
            d = e.open,
            p = e.transitionDuration,
            f = e.TransitionComponent,
            m = void 0 === f ? D : f,
            b = Object(i.a)(e, [
              "children",
              "classes",
              "className",
              "invisible",
              "open",
              "transitionDuration",
              "TransitionComponent",
            ]);
          return o.createElement(
            m,
            Object(a.a)({ in: d, timeout: p }, b),
            o.createElement(
              "div",
              {
                className: Object(s.a)(r.root, c, u && r.invisible),
                "aria-hidden": !0,
                ref: t,
              },
              n
            )
          );
        }),
        A = Object(l.a)(
          {
            root: {
              zIndex: -1,
              position: "fixed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              right: 0,
              bottom: 0,
              top: 0,
              left: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              WebkitTapHighlightColor: "transparent",
            },
            invisible: { backgroundColor: "transparent" },
          },
          { name: "MuiBackdrop" }
        )(P),
        L = (n("KKXr"), n("i8i4")),
        F = n("l3Wi");
      function z(e, t) {
        var n = (function (e, t) {
          var n,
            o = t.getBoundingClientRect();
          if (t.fakeTransform) n = t.fakeTransform;
          else {
            var r = window.getComputedStyle(t);
            n =
              r.getPropertyValue("-webkit-transform") ||
              r.getPropertyValue("transform");
          }
          var a = 0,
            i = 0;
          if (n && "none" !== n && "string" == typeof n) {
            var c = n.split("(")[1].split(")")[0].split(",");
            (a = parseInt(c[4], 10)), (i = parseInt(c[5], 10));
          }
          return "left" === e
            ? "translateX("
                .concat(window.innerWidth, "px) translateX(")
                .concat(a - o.left, "px)")
            : "right" === e
            ? "translateX(-".concat(o.left + o.width - a, "px)")
            : "up" === e
            ? "translateY("
                .concat(window.innerHeight, "px) translateY(")
                .concat(i - o.top, "px)")
            : "translateY(-".concat(o.top + o.height - i, "px)");
        })(e, t);
        n && ((t.style.webkitTransform = n), (t.style.transform = n));
      }
      var B = { enter: C.b.enteringScreen, exit: C.b.leavingScreen },
        V = o.forwardRef(function (e, t) {
          var n = e.children,
            r = e.direction,
            c = void 0 === r ? "down" : r,
            s = e.in,
            l = e.onEnter,
            u = e.onEntered,
            d = e.onEntering,
            p = e.onExit,
            f = e.onExited,
            m = e.onExiting,
            b = e.style,
            h = e.timeout,
            v = void 0 === h ? B : h,
            g = e.TransitionComponent,
            y = void 0 === g ? R.a : g,
            E = Object(i.a)(e, [
              "children",
              "direction",
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
            O = Object(S.a)(),
            x = o.useRef(null),
            j = o.useCallback(function (e) {
              x.current = L.findDOMNode(e);
            }, []),
            k = Object(N.a)(n.ref, j),
            w = Object(N.a)(k, t),
            C = function (e) {
              return function (t) {
                e && (void 0 === t ? e(x.current) : e(x.current, t));
              };
            },
            M = C(function (e, t) {
              z(c, e), Object(T.b)(e), l && l(e, t);
            }),
            I = C(function (e, t) {
              var n = Object(T.a)({ timeout: v, style: b }, { mode: "enter" });
              (e.style.webkitTransition = O.transitions.create(
                "-webkit-transform",
                Object(a.a)(
                  Object(a.a)({}, n),
                  {},
                  { easing: O.transitions.easing.easeOut }
                )
              )),
                (e.style.transition = O.transitions.create(
                  "transform",
                  Object(a.a)(
                    Object(a.a)({}, n),
                    {},
                    { easing: O.transitions.easing.easeOut }
                  )
                )),
                (e.style.webkitTransform = "none"),
                (e.style.transform = "none"),
                d && d(e, t);
            }),
            D = C(u),
            P = C(m),
            A = C(function (e) {
              var t = Object(T.a)({ timeout: v, style: b }, { mode: "exit" });
              (e.style.webkitTransition = O.transitions.create(
                "-webkit-transform",
                Object(a.a)(
                  Object(a.a)({}, t),
                  {},
                  { easing: O.transitions.easing.sharp }
                )
              )),
                (e.style.transition = O.transitions.create(
                  "transform",
                  Object(a.a)(
                    Object(a.a)({}, t),
                    {},
                    { easing: O.transitions.easing.sharp }
                  )
                )),
                z(c, e),
                p && p(e);
            }),
            V = C(function (e) {
              (e.style.webkitTransition = ""),
                (e.style.transition = ""),
                f && f(e);
            }),
            W = o.useCallback(
              function () {
                x.current && z(c, x.current);
              },
              [c]
            );
          return (
            o.useEffect(
              function () {
                if (!s && "down" !== c && "right" !== c) {
                  var e = Object(F.a)(function () {
                    x.current && z(c, x.current);
                  });
                  return (
                    window.addEventListener("resize", e),
                    function () {
                      e.clear(), window.removeEventListener("resize", e);
                    }
                  );
                }
              },
              [c, s]
            ),
            o.useEffect(
              function () {
                s || W();
              },
              [s, W]
            ),
            o.createElement(
              y,
              Object(a.a)(
                {
                  nodeRef: x,
                  onEnter: M,
                  onEntered: D,
                  onEntering: I,
                  onExit: A,
                  onExited: V,
                  onExiting: P,
                  appear: !0,
                  in: s,
                  timeout: v,
                },
                E
              ),
              function (e, t) {
                return o.cloneElement(
                  n,
                  Object(a.a)(
                    {
                      ref: w,
                      style: Object(a.a)(
                        Object(a.a)(
                          {
                            visibility: "exited" !== e || s ? void 0 : "hidden",
                          },
                          b
                        ),
                        n.props.style
                      ),
                    },
                    t
                  )
                );
              }
            )
          );
        }),
        W = { left: "right", right: "left", top: "down", bottom: "up" };
      var q = { enter: C.b.enteringScreen, exit: C.b.leavingScreen },
        H = o.forwardRef(function (e, t) {
          var n = e.anchor,
            r = void 0 === n ? "left" : n,
            c = e.BackdropProps,
            l = e.children,
            d = e.classes,
            p = e.className,
            f = e.elevation,
            m = void 0 === f ? 16 : f,
            b = e.ModalProps,
            h = (b = void 0 === b ? {} : b).BackdropProps,
            v = Object(i.a)(b, ["BackdropProps"]),
            y = e.onClose,
            E = e.open,
            O = void 0 !== E && E,
            x = e.PaperProps,
            j = void 0 === x ? {} : x,
            w = e.SlideProps,
            R = e.TransitionComponent,
            C = void 0 === R ? V : R,
            T = e.transitionDuration,
            N = void 0 === T ? q : T,
            M = e.variant,
            I = void 0 === M ? "temporary" : M,
            D = Object(i.a)(e, [
              "anchor",
              "BackdropProps",
              "children",
              "classes",
              "className",
              "elevation",
              "ModalProps",
              "onClose",
              "open",
              "PaperProps",
              "SlideProps",
              "TransitionComponent",
              "transitionDuration",
              "variant",
            ]),
            P = Object(S.a)(),
            L = o.useRef(!1);
          o.useEffect(function () {
            L.current = !0;
          }, []);
          var F = (function (e, t) {
              return "rtl" === e.direction &&
                (function (e) {
                  return -1 !== ["left", "right"].indexOf(e);
                })(t)
                ? W[t]
                : t;
            })(P, r),
            z = o.createElement(
              g.a,
              Object(a.a)(
                { elevation: "temporary" === I ? m : 0, square: !0 },
                j,
                {
                  className: Object(s.a)(
                    d.paper,
                    d["paperAnchor".concat(Object(u.a)(F))],
                    j.className,
                    "temporary" !== I &&
                      d["paperAnchorDocked".concat(Object(u.a)(F))]
                  ),
                }
              ),
              l
            );
          if ("permanent" === I)
            return o.createElement(
              "div",
              Object(a.a)(
                { className: Object(s.a)(d.root, d.docked, p), ref: t },
                D
              ),
              z
            );
          var B = o.createElement(
            C,
            Object(a.a)(
              { in: O, direction: W[F], timeout: N, appear: L.current },
              w
            ),
            z
          );
          return "persistent" === I
            ? o.createElement(
                "div",
                Object(a.a)(
                  { className: Object(s.a)(d.root, d.docked, p), ref: t },
                  D
                ),
                B
              )
            : o.createElement(
                k.a,
                Object(a.a)(
                  {
                    BackdropProps: Object(a.a)(
                      Object(a.a)(Object(a.a)({}, c), h),
                      {},
                      { transitionDuration: N }
                    ),
                    BackdropComponent: A,
                    className: Object(s.a)(d.root, d.modal, p),
                    open: O,
                    onClose: y,
                    ref: t,
                  },
                  D,
                  v
                ),
                B
              );
        }),
        K = Object(l.a)(
          function (e) {
            return {
              root: {},
              docked: { flex: "0 0 auto" },
              paper: {
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                flex: "1 0 auto",
                zIndex: e.zIndex.drawer,
                WebkitOverflowScrolling: "touch",
                position: "fixed",
                top: 0,
                outline: 0,
              },
              paperAnchorLeft: { left: 0, right: "auto" },
              paperAnchorRight: { left: "auto", right: 0 },
              paperAnchorTop: {
                top: 0,
                left: 0,
                bottom: "auto",
                right: 0,
                height: "auto",
                maxHeight: "100%",
              },
              paperAnchorBottom: {
                top: "auto",
                left: 0,
                bottom: 0,
                right: 0,
                height: "auto",
                maxHeight: "100%",
              },
              paperAnchorDockedLeft: {
                borderRight: "1px solid ".concat(e.palette.divider),
              },
              paperAnchorDockedTop: {
                borderBottom: "1px solid ".concat(e.palette.divider),
              },
              paperAnchorDockedRight: {
                borderLeft: "1px solid ".concat(e.palette.divider),
              },
              paperAnchorDockedBottom: {
                borderTop: "1px solid ".concat(e.palette.divider),
              },
              modal: {},
            };
          },
          { name: "MuiDrawer", flip: !1 }
        )(H),
        X = n("VD++"),
        Y = o.forwardRef(function (e, t) {
          var n = e.edge,
            r = void 0 !== n && n,
            c = e.children,
            l = e.classes,
            d = e.className,
            p = e.color,
            f = void 0 === p ? "default" : p,
            m = e.disabled,
            b = void 0 !== m && m,
            h = e.disableFocusRipple,
            v = void 0 !== h && h,
            g = e.size,
            y = void 0 === g ? "medium" : g,
            E = Object(i.a)(e, [
              "edge",
              "children",
              "classes",
              "className",
              "color",
              "disabled",
              "disableFocusRipple",
              "size",
            ]);
          return o.createElement(
            X.a,
            Object(a.a)(
              {
                className: Object(s.a)(
                  l.root,
                  d,
                  "default" !== f && l["color".concat(Object(u.a)(f))],
                  b && l.disabled,
                  "small" === y && l["size".concat(Object(u.a)(y))],
                  { start: l.edgeStart, end: l.edgeEnd }[r]
                ),
                centerRipple: !0,
                focusRipple: !v,
                disabled: b,
                ref: t,
              },
              E
            ),
            o.createElement("span", { className: l.label }, c)
          );
        }),
        G = Object(l.a)(
          function (e) {
            return {
              root: {
                textAlign: "center",
                flex: "0 0 auto",
                fontSize: e.typography.pxToRem(24),
                padding: 12,
                borderRadius: "50%",
                overflow: "visible",
                color: e.palette.action.active,
                transition: e.transitions.create("background-color", {
                  duration: e.transitions.duration.shortest,
                }),
                "&:hover": {
                  backgroundColor: Object(O.b)(
                    e.palette.action.active,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
                "&$disabled": {
                  backgroundColor: "transparent",
                  color: e.palette.action.disabled,
                },
              },
              edgeStart: { marginLeft: -12, "$sizeSmall&": { marginLeft: -3 } },
              edgeEnd: { marginRight: -12, "$sizeSmall&": { marginRight: -3 } },
              colorInherit: { color: "inherit" },
              colorPrimary: {
                color: e.palette.primary.main,
                "&:hover": {
                  backgroundColor: Object(O.b)(
                    e.palette.primary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              colorSecondary: {
                color: e.palette.secondary.main,
                "&:hover": {
                  backgroundColor: Object(O.b)(
                    e.palette.secondary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              disabled: {},
              sizeSmall: { padding: 3, fontSize: e.typography.pxToRem(18) },
              label: {
                width: "100%",
                display: "flex",
                alignItems: "inherit",
                justifyContent: "inherit",
              },
            };
          },
          { name: "MuiIconButton" }
        )(Y),
        U = n("eD//"),
        J = n("ucBr"),
        $ = n("MquD"),
        _ = "undefined" == typeof window ? o.useEffect : o.useLayoutEffect,
        Q = o.forwardRef(function (e, t) {
          var n = e.alignItems,
            r = void 0 === n ? "center" : n,
            c = e.autoFocus,
            l = void 0 !== c && c,
            u = e.button,
            d = void 0 !== u && u,
            p = e.children,
            f = e.classes,
            m = e.className,
            b = e.component,
            h = e.ContainerComponent,
            v = void 0 === h ? "li" : h,
            g = e.ContainerProps,
            y = (g = void 0 === g ? {} : g).className,
            E = Object(i.a)(g, ["className"]),
            O = e.dense,
            x = void 0 !== O && O,
            j = e.disabled,
            k = void 0 !== j && j,
            w = e.disableGutters,
            R = void 0 !== w && w,
            C = e.divider,
            S = void 0 !== C && C,
            T = e.focusVisibleClassName,
            M = e.selected,
            I = void 0 !== M && M,
            D = Object(i.a)(e, [
              "alignItems",
              "autoFocus",
              "button",
              "children",
              "classes",
              "className",
              "component",
              "ContainerComponent",
              "ContainerProps",
              "dense",
              "disabled",
              "disableGutters",
              "divider",
              "focusVisibleClassName",
              "selected",
            ]),
            P = o.useContext($.a),
            A = { dense: x || P.dense || !1, alignItems: r },
            F = o.useRef(null);
          _(
            function () {
              l && F.current && F.current.focus();
            },
            [l]
          );
          var z = o.Children.toArray(p),
            B =
              z.length &&
              Object(J.a)(z[z.length - 1], ["ListItemSecondaryAction"]),
            V = o.useCallback(function (e) {
              F.current = L.findDOMNode(e);
            }, []),
            W = Object(N.a)(V, t),
            q = Object(a.a)(
              {
                className: Object(s.a)(
                  f.root,
                  m,
                  A.dense && f.dense,
                  !R && f.gutters,
                  S && f.divider,
                  k && f.disabled,
                  d && f.button,
                  "center" !== r && f.alignItemsFlexStart,
                  B && f.secondaryAction,
                  I && f.selected
                ),
                disabled: k,
              },
              D
            ),
            H = b || "li";
          return (
            d &&
              ((q.component = b || "div"),
              (q.focusVisibleClassName = Object(s.a)(f.focusVisible, T)),
              (H = X.a)),
            B
              ? ((H = q.component || b ? H : "div"),
                "li" === v &&
                  ("li" === H
                    ? (H = "div")
                    : "li" === q.component && (q.component = "div")),
                o.createElement(
                  $.a.Provider,
                  { value: A },
                  o.createElement(
                    v,
                    Object(a.a)(
                      { className: Object(s.a)(f.container, y), ref: W },
                      E
                    ),
                    o.createElement(H, q, z),
                    z.pop()
                  )
                ))
              : o.createElement(
                  $.a.Provider,
                  { value: A },
                  o.createElement(H, Object(a.a)({ ref: W }, q), z)
                )
          );
        }),
        Z = Object(l.a)(
          function (e) {
            return {
              root: {
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                position: "relative",
                textDecoration: "none",
                width: "100%",
                boxSizing: "border-box",
                textAlign: "left",
                paddingTop: 8,
                paddingBottom: 8,
                "&$focusVisible": {
                  backgroundColor: e.palette.action.selected,
                },
                "&$selected, &$selected:hover": {
                  backgroundColor: e.palette.action.selected,
                },
                "&$disabled": { opacity: 0.5 },
              },
              container: { position: "relative" },
              focusVisible: {},
              dense: { paddingTop: 4, paddingBottom: 4 },
              alignItemsFlexStart: { alignItems: "flex-start" },
              disabled: {},
              divider: {
                borderBottom: "1px solid ".concat(e.palette.divider),
                backgroundClip: "padding-box",
              },
              gutters: { paddingLeft: 16, paddingRight: 16 },
              button: {
                transition: e.transitions.create("background-color", {
                  duration: e.transitions.duration.shortest,
                }),
                "&:hover": {
                  textDecoration: "none",
                  backgroundColor: e.palette.action.hover,
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              secondaryAction: { paddingRight: 48 },
              selected: {},
            };
          },
          { name: "MuiListItem" }
        )(Q),
        ee = o.forwardRef(function (e, t) {
          var n = e.classes,
            r = e.className,
            c = Object(i.a)(e, ["classes", "className"]),
            l = o.useContext($.a);
          return o.createElement(
            "div",
            Object(a.a)(
              {
                className: Object(s.a)(
                  n.root,
                  r,
                  "flex-start" === l.alignItems && n.alignItemsFlexStart
                ),
                ref: t,
              },
              c
            )
          );
        }),
        te = Object(l.a)(
          function (e) {
            return {
              root: {
                minWidth: 56,
                color: e.palette.action.active,
                flexShrink: 0,
                display: "inline-flex",
              },
              alignItemsFlexStart: { marginTop: 8 },
            };
          },
          { name: "MuiListItemIcon" }
        )(ee),
        ne = {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "h6",
          subtitle2: "h6",
          body1: "p",
          body2: "p",
        },
        oe = o.forwardRef(function (e, t) {
          var n = e.align,
            r = void 0 === n ? "inherit" : n,
            c = e.classes,
            l = e.className,
            d = e.color,
            p = void 0 === d ? "initial" : d,
            f = e.component,
            m = e.display,
            b = void 0 === m ? "initial" : m,
            h = e.gutterBottom,
            v = void 0 !== h && h,
            g = e.noWrap,
            y = void 0 !== g && g,
            E = e.paragraph,
            O = void 0 !== E && E,
            x = e.variant,
            j = void 0 === x ? "body1" : x,
            k = e.variantMapping,
            w = void 0 === k ? ne : k,
            R = Object(i.a)(e, [
              "align",
              "classes",
              "className",
              "color",
              "component",
              "display",
              "gutterBottom",
              "noWrap",
              "paragraph",
              "variant",
              "variantMapping",
            ]),
            C = f || (O ? "p" : w[j] || ne[j]) || "span";
          return o.createElement(
            C,
            Object(a.a)(
              {
                className: Object(s.a)(
                  c.root,
                  l,
                  "inherit" !== j && c[j],
                  "initial" !== p && c["color".concat(Object(u.a)(p))],
                  y && c.noWrap,
                  v && c.gutterBottom,
                  O && c.paragraph,
                  "inherit" !== r && c["align".concat(Object(u.a)(r))],
                  "initial" !== b && c["display".concat(Object(u.a)(b))]
                ),
                ref: t,
              },
              R
            )
          );
        }),
        re = Object(l.a)(
          function (e) {
            return {
              root: { margin: 0 },
              body2: e.typography.body2,
              body1: e.typography.body1,
              caption: e.typography.caption,
              button: e.typography.button,
              h1: e.typography.h1,
              h2: e.typography.h2,
              h3: e.typography.h3,
              h4: e.typography.h4,
              h5: e.typography.h5,
              h6: e.typography.h6,
              subtitle1: e.typography.subtitle1,
              subtitle2: e.typography.subtitle2,
              overline: e.typography.overline,
              srOnly: {
                position: "absolute",
                height: 1,
                width: 1,
                overflow: "hidden",
              },
              alignLeft: { textAlign: "left" },
              alignCenter: { textAlign: "center" },
              alignRight: { textAlign: "right" },
              alignJustify: { textAlign: "justify" },
              noWrap: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              },
              gutterBottom: { marginBottom: "0.35em" },
              paragraph: { marginBottom: 16 },
              colorInherit: { color: "inherit" },
              colorPrimary: { color: e.palette.primary.main },
              colorSecondary: { color: e.palette.secondary.main },
              colorTextPrimary: { color: e.palette.text.primary },
              colorTextSecondary: { color: e.palette.text.secondary },
              colorError: { color: e.palette.error.main },
              displayInline: { display: "inline" },
              displayBlock: { display: "block" },
            };
          },
          { name: "MuiTypography" }
        )(oe),
        ae = o.forwardRef(function (e, t) {
          var n = e.children,
            r = e.classes,
            c = e.className,
            l = e.disableTypography,
            u = void 0 !== l && l,
            d = e.inset,
            p = void 0 !== d && d,
            f = e.primary,
            m = e.primaryTypographyProps,
            b = e.secondary,
            h = e.secondaryTypographyProps,
            v = Object(i.a)(e, [
              "children",
              "classes",
              "className",
              "disableTypography",
              "inset",
              "primary",
              "primaryTypographyProps",
              "secondary",
              "secondaryTypographyProps",
            ]),
            g = o.useContext($.a).dense,
            y = null != f ? f : n;
          null == y ||
            y.type === re ||
            u ||
            (y = o.createElement(
              re,
              Object(a.a)(
                {
                  variant: g ? "body2" : "body1",
                  className: r.primary,
                  component: "span",
                  display: "block",
                },
                m
              ),
              y
            ));
          var E = b;
          return (
            null == E ||
              E.type === re ||
              u ||
              (E = o.createElement(
                re,
                Object(a.a)(
                  {
                    variant: "body2",
                    className: r.secondary,
                    color: "textSecondary",
                    display: "block",
                  },
                  h
                ),
                E
              )),
            o.createElement(
              "div",
              Object(a.a)(
                {
                  className: Object(s.a)(
                    r.root,
                    c,
                    g && r.dense,
                    p && r.inset,
                    y && E && r.multiline
                  ),
                  ref: t,
                },
                v
              ),
              y,
              E
            )
          );
        }),
        ie = Object(l.a)(
          {
            root: {
              flex: "1 1 auto",
              minWidth: 0,
              marginTop: 4,
              marginBottom: 4,
            },
            multiline: { marginTop: 6, marginBottom: 6 },
            dense: {},
            inset: { paddingLeft: 56 },
            primary: {},
            secondary: {},
          },
          { name: "MuiListItemText" }
        )(ae),
        ce = o.forwardRef(function (e, t) {
          var n = e.classes,
            r = e.className,
            c = e.component,
            l = void 0 === c ? "div" : c,
            u = e.disableGutters,
            d = void 0 !== u && u,
            p = e.variant,
            f = void 0 === p ? "regular" : p,
            m = Object(i.a)(e, [
              "classes",
              "className",
              "component",
              "disableGutters",
              "variant",
            ]);
          return o.createElement(
            l,
            Object(a.a)(
              {
                className: Object(s.a)(n.root, n[f], r, !d && n.gutters),
                ref: t,
              },
              m
            )
          );
        }),
        se = Object(l.a)(
          function (e) {
            return {
              root: {
                position: "relative",
                display: "flex",
                alignItems: "center",
              },
              gutters: Object(c.a)(
                { paddingLeft: e.spacing(2), paddingRight: e.spacing(2) },
                e.breakpoints.up("sm"),
                { paddingLeft: e.spacing(3), paddingRight: e.spacing(3) }
              ),
              regular: e.mixins.toolbar,
              dense: { minHeight: 48 },
            };
          },
          { name: "MuiToolbar" }
        )(ce),
        le = n("CXIY"),
        ue = n.n(le),
        de = n("Rme4"),
        pe = n.n(de),
        fe = n("E8kk"),
        me = n.n(fe),
        be = n("uniG"),
        he = n.n(be),
        ve = n("G7As"),
        ge = o.forwardRef(function (e, t) {
          var n = e.classes,
            r = e.className,
            c = e.color,
            l = void 0 === c ? "primary" : c,
            d = e.component,
            p = void 0 === d ? "a" : d,
            f = e.onBlur,
            m = e.onFocus,
            b = e.TypographyClasses,
            h = e.underline,
            v = void 0 === h ? "hover" : h,
            g = e.variant,
            y = void 0 === g ? "inherit" : g,
            E = Object(i.a)(e, [
              "classes",
              "className",
              "color",
              "component",
              "onBlur",
              "onFocus",
              "TypographyClasses",
              "underline",
              "variant",
            ]),
            O = Object(ve.a)(),
            x = O.isFocusVisible,
            j = O.onBlurVisible,
            k = O.ref,
            w = o.useState(!1),
            R = w[0],
            C = w[1],
            S = Object(N.a)(t, k);
          return o.createElement(
            re,
            Object(a.a)(
              {
                className: Object(s.a)(
                  n.root,
                  n["underline".concat(Object(u.a)(v))],
                  r,
                  R && n.focusVisible,
                  "button" === p && n.button
                ),
                classes: b,
                color: l,
                component: p,
                onBlur: function (e) {
                  R && (j(), C(!1)), f && f(e);
                },
                onFocus: function (e) {
                  x(e) && C(!0), m && m(e);
                },
                ref: S,
                variant: y,
              },
              E
            )
          );
        }),
        ye = Object(l.a)(
          {
            root: {},
            underlineNone: { textDecoration: "none" },
            underlineHover: {
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            },
            underlineAlways: { textDecoration: "underline" },
            button: {
              position: "relative",
              WebkitTapHighlightColor: "transparent",
              backgroundColor: "transparent",
              outline: 0,
              border: 0,
              margin: 0,
              borderRadius: 0,
              padding: 0,
              cursor: "pointer",
              userSelect: "none",
              verticalAlign: "middle",
              "-moz-appearance": "none",
              "-webkit-appearance": "none",
              "&::-moz-focus-inner": { borderStyle: "none" },
              "&$focusVisible": { outline: "auto" },
            },
            focusVisible: {},
          },
          { name: "MuiLink" }
        )(ge),
        Ee = n("Wbzz"),
        Oe = r.a.forwardRef(function (e, t) {
          return r.a.createElement(
            ye,
            Object.assign({ component: Ee.Link, ref: t }, e)
          );
        }),
        xe = function (e) {
          var t = e.siteTitle,
            n = v.data,
            o = t || n.site.siteMetadata.title,
            a = r.a.useState({ left: !1 }),
            i = a[0],
            c = a[1],
            s = function (e, t) {
              return function (n) {
                var o;
                ("keydown" !== n.type ||
                  ("Tab" !== n.key && "Shift" !== n.key)) &&
                  c(Object.assign({}, i, (((o = {})[e] = t), o)));
              };
            };
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              E,
              { position: "static" },
              r.a.createElement(
                se,
                null,
                r.a.createElement(
                  G,
                  {
                    onClick: s("left", !0),
                    edge: "start",
                    color: "inherit",
                    "aria-label": "left",
                  },
                  r.a.createElement(he.a, null)
                ),
                r.a.createElement(
                  Oe,
                  { to: "/", color: "inherit" },
                  r.a.createElement(re, { component: "h1", variant: "h6" }, o)
                )
              )
            ),
            r.a.createElement(
              K,
              { anchor: "left", open: i.left, onClose: s("left", !1) },
              r.a.createElement(
                "div",
                {
                  role: "presentation",
                  onClick: s("left", !1),
                  onKeyDown: s("left", !1),
                },
                r.a.createElement(
                  U.a,
                  null,
                  r.a.createElement(
                    Oe,
                    { to: "/", color: "inherit" },
                    r.a.createElement(
                      Z,
                      null,
                      r.a.createElement(
                        te,
                        null,
                        r.a.createElement(pe.a, null)
                      ),
                      r.a.createElement(ie, { primary: "Home" })
                    )
                  ),
                  r.a.createElement(
                    Oe,
                    { to: "/about", color: "inherit" },
                    r.a.createElement(
                      Z,
                      null,
                      r.a.createElement(
                        te,
                        null,
                        r.a.createElement(me.a, null)
                      ),
                      r.a.createElement(ie, { primary: "About" })
                    )
                  ),
                  r.a.createElement(j, null),
                  r.a.createElement(
                    Oe,
                    { to: "/tools/reformat-english", color: "inherit" },
                    r.a.createElement(
                      Z,
                      null,
                      r.a.createElement(
                        te,
                        null,
                        r.a.createElement(ue.a, null)
                      ),
                      r.a.createElement(ie, { primary: "Reformat English" })
                    )
                  )
                )
              )
            )
          );
        },
        je = n("Wk/n");
      function ke(e) {
        var t = e.createdYear,
          n = e.author,
          o = e.contact,
          a = je.data,
          i = n || a.site.siteMetadata.author,
          c = o || a.site.siteMetadata.contact;
        return r.a.createElement(
          re,
          { variant: "body2", color: "textSecondary", align: "center" },
          "© ",
          r.a.createElement(ye, { color: "inherit", href: c }, i),
          " ",
          t
        );
      }
      ke.defaultProps = { createdYear: new Date().getFullYear() };
      var we = function (e) {
        var t = e.createdYear;
        return r.a.createElement(
          "footer",
          null,
          r.a.createElement(ke, { createdYear: t })
        );
      };
      we.defaultProps = { createdYear: new Date().getFullYear() };
      var Re = we,
        Ce = function (e) {
          var t = e.children,
            n = e.pageTitle,
            o = e.createdYear;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(h, { title: n }),
            r.a.createElement(xe, null),
            r.a.createElement(p, { component: "main", maxWidth: "sm" }, t),
            r.a.createElement(Re, { createdYear: o })
          );
        };
      Ce.defaultProps = { createdYear: new Date().getFullYear() };
      t.a = Ce;
    },
    CXIY: function (e, t, n) {
      "use strict";
      n("HAE/");
      var o = n("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(n("q1tI")),
        a = (0, o(n("8/g6")).default)(
          r.default.createElement("path", {
            d:
              "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z",
          }),
          "FormatAlignLeft"
        );
      t.default = a;
    },
    E8kk: function (e, t, n) {
      "use strict";
      n("HAE/");
      var o = n("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(n("q1tI")),
        a = (0, o(n("8/g6")).default)(
          r.default.createElement("path", {
            d:
              "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
          }),
          "Info"
        );
      t.default = a;
    },
    G7As: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var o = n("q1tI"),
        r = n("i8i4"),
        a = !0,
        i = !1,
        c = null,
        s = {
          text: !0,
          search: !0,
          url: !0,
          tel: !0,
          email: !0,
          password: !0,
          number: !0,
          date: !0,
          month: !0,
          week: !0,
          time: !0,
          datetime: !0,
          "datetime-local": !0,
        };
      function l(e) {
        e.metaKey || e.altKey || e.ctrlKey || (a = !0);
      }
      function u() {
        a = !1;
      }
      function d() {
        "hidden" === this.visibilityState && i && (a = !0);
      }
      function p(e) {
        var t,
          n,
          o,
          r = e.target;
        try {
          return r.matches(":focus-visible");
        } catch (i) {}
        return (
          a ||
          ((n = (t = r).type),
          !("INPUT" !== (o = t.tagName) || !s[n] || t.readOnly) ||
            ("TEXTAREA" === o && !t.readOnly) ||
            !!t.isContentEditable)
        );
      }
      function f() {
        (i = !0),
          window.clearTimeout(c),
          (c = window.setTimeout(function () {
            i = !1;
          }, 100));
      }
      function m() {
        return {
          isFocusVisible: p,
          onBlurVisible: f,
          ref: o.useCallback(function (e) {
            var t,
              n = r.findDOMNode(e);
            null != n &&
              ((t = n.ownerDocument).addEventListener("keydown", l, !0),
              t.addEventListener("mousedown", u, !0),
              t.addEventListener("pointerdown", u, !0),
              t.addEventListener("touchstart", u, !0),
              t.addEventListener("visibilitychange", d, !0));
          }, []),
        };
      }
    },
    GIek: function (e, t, n) {
      "use strict";
      function o(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t);
      }
      n.d(t, "a", function () {
        return o;
      });
    },
    HR5l: function (e, t, n) {
      "use strict";
      var o = n("wx14"),
        r = n("Ff2n"),
        a = n("q1tI"),
        i = n("iuhU"),
        c = n("H2TA"),
        s = n("NqtD"),
        l = a.forwardRef(function (e, t) {
          var n = e.children,
            c = e.classes,
            l = e.className,
            u = e.color,
            d = void 0 === u ? "inherit" : u,
            p = e.component,
            f = void 0 === p ? "svg" : p,
            m = e.fontSize,
            b = void 0 === m ? "default" : m,
            h = e.htmlColor,
            v = e.titleAccess,
            g = e.viewBox,
            y = void 0 === g ? "0 0 24 24" : g,
            E = Object(r.a)(e, [
              "children",
              "classes",
              "className",
              "color",
              "component",
              "fontSize",
              "htmlColor",
              "titleAccess",
              "viewBox",
            ]);
          return a.createElement(
            f,
            Object(o.a)(
              {
                className: Object(i.a)(
                  c.root,
                  l,
                  "inherit" !== d && c["color".concat(Object(s.a)(d))],
                  "default" !== b && c["fontSize".concat(Object(s.a)(b))]
                ),
                focusable: "false",
                viewBox: y,
                color: h,
                "aria-hidden": !v || void 0,
                role: v ? "img" : void 0,
                ref: t,
              },
              E
            ),
            n,
            v ? a.createElement("title", null, v) : null
          );
        });
      (l.muiName = "SvgIcon"),
        (t.a = Object(c.a)(
          function (e) {
            return {
              root: {
                userSelect: "none",
                width: "1em",
                height: "1em",
                display: "inline-block",
                fill: "currentColor",
                flexShrink: 0,
                fontSize: e.typography.pxToRem(24),
                transition: e.transitions.create("fill", {
                  duration: e.transitions.duration.shorter,
                }),
              },
              colorPrimary: { color: e.palette.primary.main },
              colorSecondary: { color: e.palette.secondary.main },
              colorAction: { color: e.palette.action.active },
              colorError: { color: e.palette.error.main },
              colorDisabled: { color: e.palette.action.disabled },
              fontSizeInherit: { fontSize: "inherit" },
              fontSizeSmall: { fontSize: e.typography.pxToRem(20) },
              fontSizeLarge: { fontSize: e.typography.pxToRem(35) },
            };
          },
          { name: "MuiSvgIcon" }
        )(l));
    },
    MquD: function (e, t, n) {
      "use strict";
      var o = n("q1tI"),
        r = o.createContext({});
      t.a = r;
    },
    NqtD: function (e, t, n) {
      "use strict";
      function o(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      n.d(t, "a", function () {
        return o;
      });
    },
    Ovef: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var o = n("q1tI"),
        r = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;
      function a(e) {
        var t = o.useRef(e);
        return (
          r(function () {
            t.current = e;
          }),
          o.useCallback(function () {
            return t.current.apply(void 0, arguments);
          }, [])
        );
      }
    },
    Rme4: function (e, t, n) {
      "use strict";
      n("HAE/");
      var o = n("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(n("q1tI")),
        a = (0, o(n("8/g6")).default)(
          r.default.createElement("path", {
            d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
          }),
          "Home"
        );
      t.default = a;
    },
    UJJ5: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("HR5l");
      n.d(t, "default", function () {
        return o.a;
      });
    },
    "VD++": function (e, t, n) {
      "use strict";
      var o = n("wx14"),
        r = n("Ff2n"),
        a = n("q1tI"),
        i = n.n(a),
        c = n("i8i4"),
        s = n("iuhU"),
        l = n("bfFb"),
        u = n("Ovef"),
        d = n("H2TA"),
        p = n("G7As"),
        f = n("KQm4"),
        m =
          (n("2Spj"),
          n("RW0V"),
          n("bWfx"),
          n("rGqo"),
          n("yt8O"),
          n("Btvt"),
          n("hhXQ"),
          n("zLVn")),
        b = n("JX7q"),
        h = n("dI71"),
        v = n("0PSK");
      n("8+KV"), n("hHhE");
      function g(e, t) {
        var n = Object.create(null);
        return (
          e &&
            a.Children.map(e, function (e) {
              return e;
            }).forEach(function (e) {
              n[e.key] = (function (e) {
                return t && Object(a.isValidElement)(e) ? t(e) : e;
              })(e);
            }),
          n
        );
      }
      function y(e, t, n) {
        return null != n[t] ? n[t] : e.props[t];
      }
      function E(e, t, n) {
        var o = g(e.children),
          r = (function (e, t) {
            function n(n) {
              return n in t ? t[n] : e[n];
            }
            (e = e || {}), (t = t || {});
            var o,
              r = Object.create(null),
              a = [];
            for (var i in e)
              i in t ? a.length && ((r[i] = a), (a = [])) : a.push(i);
            var c = {};
            for (var s in t) {
              if (r[s])
                for (o = 0; o < r[s].length; o++) {
                  var l = r[s][o];
                  c[r[s][o]] = n(l);
                }
              c[s] = n(s);
            }
            for (o = 0; o < a.length; o++) c[a[o]] = n(a[o]);
            return c;
          })(t, o);
        return (
          Object.keys(r).forEach(function (i) {
            var c = r[i];
            if (Object(a.isValidElement)(c)) {
              var s = i in t,
                l = i in o,
                u = t[i],
                d = Object(a.isValidElement)(u) && !u.props.in;
              !l || (s && !d)
                ? l || !s || d
                  ? l &&
                    s &&
                    Object(a.isValidElement)(u) &&
                    (r[i] = Object(a.cloneElement)(c, {
                      onExited: n.bind(null, c),
                      in: u.props.in,
                      exit: y(c, "exit", e),
                      enter: y(c, "enter", e),
                    }))
                  : (r[i] = Object(a.cloneElement)(c, { in: !1 }))
                : (r[i] = Object(a.cloneElement)(c, {
                    onExited: n.bind(null, c),
                    in: !0,
                    exit: y(c, "exit", e),
                    enter: y(c, "enter", e),
                  }));
            }
          }),
          r
        );
      }
      var O =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
        x = (function (e) {
          function t(t, n) {
            var o,
              r = (o = e.call(this, t, n) || this).handleExited.bind(
                Object(b.a)(o)
              );
            return (
              (o.state = {
                contextValue: { isMounting: !0 },
                handleExited: r,
                firstRender: !0,
              }),
              o
            );
          }
          Object(h.a)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } });
            }),
            (n.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var n,
                o,
                r = t.children,
                i = t.handleExited;
              return {
                children: t.firstRender
                  ? ((n = e),
                    (o = i),
                    g(n.children, function (e) {
                      return Object(a.cloneElement)(e, {
                        onExited: o.bind(null, e),
                        in: !0,
                        appear: y(e, "appear", n),
                        enter: y(e, "enter", n),
                        exit: y(e, "exit", n),
                      });
                    }))
                  : E(e, r, i),
                firstRender: !1,
              };
            }),
            (n.handleExited = function (e, t) {
              var n = g(this.props.children);
              e.key in n ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var n = Object(o.a)({}, t.children);
                    return delete n[e.key], { children: n };
                  }));
            }),
            (n.render = function () {
              var e = this.props,
                t = e.component,
                n = e.childFactory,
                o = Object(m.a)(e, ["component", "childFactory"]),
                r = this.state.contextValue,
                a = O(this.state.children).map(n);
              return (
                delete o.appear,
                delete o.enter,
                delete o.exit,
                null === t
                  ? i.a.createElement(v.a.Provider, { value: r }, a)
                  : i.a.createElement(
                      v.a.Provider,
                      { value: r },
                      i.a.createElement(t, o, a)
                    )
              );
            }),
            t
          );
        })(i.a.Component);
      x.defaultProps = {
        component: "div",
        childFactory: function (e) {
          return e;
        },
      };
      var j = x,
        k = "undefined" == typeof window ? a.useEffect : a.useLayoutEffect;
      var w = function (e) {
          var t = e.classes,
            n = e.pulsate,
            o = void 0 !== n && n,
            r = e.rippleX,
            i = e.rippleY,
            c = e.rippleSize,
            l = e.in,
            d = e.onExited,
            p = void 0 === d ? function () {} : d,
            f = e.timeout,
            m = a.useState(!1),
            b = m[0],
            h = m[1],
            v = Object(s.a)(t.ripple, t.rippleVisible, o && t.ripplePulsate),
            g = { width: c, height: c, top: -c / 2 + i, left: -c / 2 + r },
            y = Object(s.a)(t.child, b && t.childLeaving, o && t.childPulsate),
            E = Object(u.a)(p);
          return (
            k(
              function () {
                if (!l) {
                  h(!0);
                  var e = setTimeout(E, f);
                  return function () {
                    clearTimeout(e);
                  };
                }
              },
              [E, l, f]
            ),
            a.createElement(
              "span",
              { className: v, style: g },
              a.createElement("span", { className: y })
            )
          );
        },
        R = a.forwardRef(function (e, t) {
          var n = e.center,
            i = void 0 !== n && n,
            c = e.classes,
            l = e.className,
            u = Object(r.a)(e, ["center", "classes", "className"]),
            d = a.useState([]),
            p = d[0],
            m = d[1],
            b = a.useRef(0),
            h = a.useRef(null);
          a.useEffect(
            function () {
              h.current && (h.current(), (h.current = null));
            },
            [p]
          );
          var v = a.useRef(!1),
            g = a.useRef(null),
            y = a.useRef(null),
            E = a.useRef(null);
          a.useEffect(function () {
            return function () {
              clearTimeout(g.current);
            };
          }, []);
          var O = a.useCallback(
              function (e) {
                var t = e.pulsate,
                  n = e.rippleX,
                  o = e.rippleY,
                  r = e.rippleSize,
                  i = e.cb;
                m(function (e) {
                  return [].concat(Object(f.a)(e), [
                    a.createElement(w, {
                      key: b.current,
                      classes: c,
                      timeout: 550,
                      pulsate: t,
                      rippleX: n,
                      rippleY: o,
                      rippleSize: r,
                    }),
                  ]);
                }),
                  (b.current += 1),
                  (h.current = i);
              },
              [c]
            ),
            x = a.useCallback(
              function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = arguments.length > 2 ? arguments[2] : void 0,
                  o = t.pulsate,
                  r = void 0 !== o && o,
                  a = t.center,
                  c = void 0 === a ? i || t.pulsate : a,
                  s = t.fakeElement,
                  l = void 0 !== s && s;
                if ("mousedown" === e.type && v.current) v.current = !1;
                else {
                  "touchstart" === e.type && (v.current = !0);
                  var u,
                    d,
                    p,
                    f = l ? null : E.current,
                    m = f
                      ? f.getBoundingClientRect()
                      : { width: 0, height: 0, left: 0, top: 0 };
                  if (
                    c ||
                    (0 === e.clientX && 0 === e.clientY) ||
                    (!e.clientX && !e.touches)
                  )
                    (u = Math.round(m.width / 2)),
                      (d = Math.round(m.height / 2));
                  else {
                    var b = e.touches ? e.touches[0] : e,
                      h = b.clientX,
                      x = b.clientY;
                    (u = Math.round(h - m.left)), (d = Math.round(x - m.top));
                  }
                  if (c)
                    (p = Math.sqrt(
                      (2 * Math.pow(m.width, 2) + Math.pow(m.height, 2)) / 3
                    )) %
                      2 ==
                      0 && (p += 1);
                  else {
                    var j =
                        2 * Math.max(Math.abs((f ? f.clientWidth : 0) - u), u) +
                        2,
                      k =
                        2 *
                          Math.max(Math.abs((f ? f.clientHeight : 0) - d), d) +
                        2;
                    p = Math.sqrt(Math.pow(j, 2) + Math.pow(k, 2));
                  }
                  e.touches
                    ? null === y.current &&
                      ((y.current = function () {
                        O({
                          pulsate: r,
                          rippleX: u,
                          rippleY: d,
                          rippleSize: p,
                          cb: n,
                        });
                      }),
                      (g.current = setTimeout(function () {
                        y.current && (y.current(), (y.current = null));
                      }, 80)))
                    : O({
                        pulsate: r,
                        rippleX: u,
                        rippleY: d,
                        rippleSize: p,
                        cb: n,
                      });
                }
              },
              [i, O]
            ),
            k = a.useCallback(
              function () {
                x({}, { pulsate: !0 });
              },
              [x]
            ),
            R = a.useCallback(function (e, t) {
              if ((clearTimeout(g.current), "touchend" === e.type && y.current))
                return (
                  e.persist(),
                  y.current(),
                  (y.current = null),
                  void (g.current = setTimeout(function () {
                    R(e, t);
                  }))
                );
              (y.current = null),
                m(function (e) {
                  return e.length > 0 ? e.slice(1) : e;
                }),
                (h.current = t);
            }, []);
          return (
            a.useImperativeHandle(
              t,
              function () {
                return { pulsate: k, start: x, stop: R };
              },
              [k, x, R]
            ),
            a.createElement(
              "span",
              Object(o.a)({ className: Object(s.a)(c.root, l), ref: E }, u),
              a.createElement(j, { component: null, exit: !0 }, p)
            )
          );
        }),
        C = Object(d.a)(
          function (e) {
            return {
              root: {
                overflow: "hidden",
                pointerEvents: "none",
                position: "absolute",
                zIndex: 0,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                borderRadius: "inherit",
              },
              ripple: { opacity: 0, position: "absolute" },
              rippleVisible: {
                opacity: 0.3,
                transform: "scale(1)",
                animation: "$enter "
                  .concat(550, "ms ")
                  .concat(e.transitions.easing.easeInOut),
              },
              ripplePulsate: {
                animationDuration: "".concat(
                  e.transitions.duration.shorter,
                  "ms"
                ),
              },
              child: {
                opacity: 1,
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                backgroundColor: "currentColor",
              },
              childLeaving: {
                opacity: 0,
                animation: "$exit "
                  .concat(550, "ms ")
                  .concat(e.transitions.easing.easeInOut),
              },
              childPulsate: {
                position: "absolute",
                left: 0,
                top: 0,
                animation: "$pulsate 2500ms ".concat(
                  e.transitions.easing.easeInOut,
                  " 200ms infinite"
                ),
              },
              "@keyframes enter": {
                "0%": { transform: "scale(0)", opacity: 0.1 },
                "100%": { transform: "scale(1)", opacity: 0.3 },
              },
              "@keyframes exit": {
                "0%": { opacity: 1 },
                "100%": { opacity: 0 },
              },
              "@keyframes pulsate": {
                "0%": { transform: "scale(1)" },
                "50%": { transform: "scale(0.92)" },
                "100%": { transform: "scale(1)" },
              },
            };
          },
          { flip: !1, name: "MuiTouchRipple" }
        )(a.memo(R)),
        S = a.forwardRef(function (e, t) {
          var n = e.action,
            i = e.buttonRef,
            d = e.centerRipple,
            f = void 0 !== d && d,
            m = e.children,
            b = e.classes,
            h = e.className,
            v = e.component,
            g = void 0 === v ? "button" : v,
            y = e.disabled,
            E = void 0 !== y && y,
            O = e.disableRipple,
            x = void 0 !== O && O,
            j = e.disableTouchRipple,
            k = void 0 !== j && j,
            w = e.focusRipple,
            R = void 0 !== w && w,
            S = e.focusVisibleClassName,
            T = e.onBlur,
            N = e.onClick,
            M = e.onFocus,
            I = e.onFocusVisible,
            D = e.onKeyDown,
            P = e.onKeyUp,
            A = e.onMouseDown,
            L = e.onMouseLeave,
            F = e.onMouseUp,
            z = e.onTouchEnd,
            B = e.onTouchMove,
            V = e.onTouchStart,
            W = e.onDragLeave,
            q = e.tabIndex,
            H = void 0 === q ? 0 : q,
            K = e.TouchRippleProps,
            X = e.type,
            Y = void 0 === X ? "button" : X,
            G = Object(r.a)(e, [
              "action",
              "buttonRef",
              "centerRipple",
              "children",
              "classes",
              "className",
              "component",
              "disabled",
              "disableRipple",
              "disableTouchRipple",
              "focusRipple",
              "focusVisibleClassName",
              "onBlur",
              "onClick",
              "onFocus",
              "onFocusVisible",
              "onKeyDown",
              "onKeyUp",
              "onMouseDown",
              "onMouseLeave",
              "onMouseUp",
              "onTouchEnd",
              "onTouchMove",
              "onTouchStart",
              "onDragLeave",
              "tabIndex",
              "TouchRippleProps",
              "type",
            ]),
            U = a.useRef(null);
          var J = a.useRef(null),
            $ = a.useState(!1),
            _ = $[0],
            Q = $[1];
          E && _ && Q(!1);
          var Z = Object(p.a)(),
            ee = Z.isFocusVisible,
            te = Z.onBlurVisible,
            ne = Z.ref;
          function oe(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : k;
            return Object(u.a)(function (o) {
              return t && t(o), !n && J.current && J.current[e](o), !0;
            });
          }
          a.useImperativeHandle(
            n,
            function () {
              return {
                focusVisible: function () {
                  Q(!0), U.current.focus();
                },
              };
            },
            []
          ),
            a.useEffect(
              function () {
                _ && R && !x && J.current.pulsate();
              },
              [x, R, _]
            );
          var re = oe("start", A),
            ae = oe("stop", W),
            ie = oe("stop", F),
            ce = oe("stop", function (e) {
              _ && e.preventDefault(), L && L(e);
            }),
            se = oe("start", V),
            le = oe("stop", z),
            ue = oe("stop", B),
            de = oe(
              "stop",
              function (e) {
                _ && (te(e), Q(!1)), T && T(e);
              },
              !1
            ),
            pe = Object(u.a)(function (e) {
              U.current || (U.current = e.currentTarget),
                ee(e) && (Q(!0), I && I(e)),
                M && M(e);
            }),
            fe = function () {
              var e = c.findDOMNode(U.current);
              return g && "button" !== g && !("A" === e.tagName && e.href);
            },
            me = a.useRef(!1),
            be = Object(u.a)(function (e) {
              R &&
                !me.current &&
                _ &&
                J.current &&
                " " === e.key &&
                ((me.current = !0),
                e.persist(),
                J.current.stop(e, function () {
                  J.current.start(e);
                })),
                e.target === e.currentTarget &&
                  fe() &&
                  " " === e.key &&
                  e.preventDefault(),
                D && D(e),
                e.target === e.currentTarget &&
                  fe() &&
                  "Enter" === e.key &&
                  !E &&
                  (e.preventDefault(), N && N(e));
            }),
            he = Object(u.a)(function (e) {
              R &&
                " " === e.key &&
                J.current &&
                _ &&
                !e.defaultPrevented &&
                ((me.current = !1),
                e.persist(),
                J.current.stop(e, function () {
                  J.current.pulsate(e);
                })),
                P && P(e),
                N &&
                  e.target === e.currentTarget &&
                  fe() &&
                  " " === e.key &&
                  !e.defaultPrevented &&
                  N(e);
            }),
            ve = g;
          "button" === ve && G.href && (ve = "a");
          var ge = {};
          "button" === ve
            ? ((ge.type = Y), (ge.disabled = E))
            : (("a" === ve && G.href) || (ge.role = "button"),
              (ge["aria-disabled"] = E));
          var ye = Object(l.a)(i, t),
            Ee = Object(l.a)(ne, U),
            Oe = Object(l.a)(ye, Ee),
            xe = a.useState(!1),
            je = xe[0],
            ke = xe[1];
          a.useEffect(function () {
            ke(!0);
          }, []);
          var we = je && !x && !E;
          return a.createElement(
            ve,
            Object(o.a)(
              {
                className: Object(s.a)(
                  b.root,
                  h,
                  _ && [b.focusVisible, S],
                  E && b.disabled
                ),
                onBlur: de,
                onClick: N,
                onFocus: pe,
                onKeyDown: be,
                onKeyUp: he,
                onMouseDown: re,
                onMouseLeave: ce,
                onMouseUp: ie,
                onDragLeave: ae,
                onTouchEnd: le,
                onTouchMove: ue,
                onTouchStart: se,
                ref: Oe,
                tabIndex: E ? -1 : H,
              },
              ge,
              G
            ),
            m,
            we
              ? a.createElement(C, Object(o.a)({ ref: J, center: f }, K))
              : null
          );
        });
      t.a = Object(d.a)(
        {
          root: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            WebkitTapHighlightColor: "transparent",
            backgroundColor: "transparent",
            outline: 0,
            border: 0,
            margin: 0,
            borderRadius: 0,
            padding: 0,
            cursor: "pointer",
            userSelect: "none",
            verticalAlign: "middle",
            "-moz-appearance": "none",
            "-webkit-appearance": "none",
            textDecoration: "none",
            color: "inherit",
            "&::-moz-focus-inner": { borderStyle: "none" },
            "&$disabled": { pointerEvents: "none", cursor: "default" },
            "@media print": { colorAdjust: "exact" },
          },
          disabled: {},
          focusVisible: {},
        },
        { name: "MuiButtonBase" }
      )(S);
    },
    "Wk/n": function (e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"author":"FORNO","contact":"https://twitter.com/forno_recsys"}}}}'
      );
    },
    Xt1q: function (e, t, n) {
      "use strict";
      var o = n("Ff2n"),
        r = n("wx14"),
        a = n("q1tI"),
        i = n("i8i4"),
        c = n("aXM8"),
        s = n("A+CX"),
        l = n("gk1O"),
        u = n("GIek"),
        d = n("bfFb");
      var p = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect;
      var f = a.forwardRef(function (e, t) {
          var n = e.children,
            o = e.container,
            r = e.disablePortal,
            c = void 0 !== r && r,
            s = e.onRendered,
            l = a.useState(null),
            f = l[0],
            m = l[1],
            b = Object(d.a)(a.isValidElement(n) ? n.ref : null, t);
          return (
            p(
              function () {
                c ||
                  m(
                    (function (e) {
                      return (
                        (e = "function" == typeof e ? e() : e), i.findDOMNode(e)
                      );
                    })(o) || document.body
                  );
              },
              [o, c]
            ),
            p(
              function () {
                if (f && !c)
                  return (
                    Object(u.a)(t, f),
                    function () {
                      Object(u.a)(t, null);
                    }
                  );
              },
              [t, f, c]
            ),
            p(
              function () {
                s && (f || c) && s();
              },
              [s, f, c]
            ),
            c
              ? a.isValidElement(n)
                ? a.cloneElement(n, { ref: b })
                : n
              : f
              ? i.createPortal(n, f)
              : f
          );
        }),
        m = n("x6Ns"),
        b = n("Ovef"),
        h = n("HwzS"),
        v = (n("dZ+Y"), n("V+eJ"), n("8+KV"), n("1OyB")),
        g = n("vuIU"),
        y = n("KQm4"),
        E = n("bwkw"),
        O = n("g+pH");
      function x(e, t) {
        t
          ? e.setAttribute("aria-hidden", "true")
          : e.removeAttribute("aria-hidden");
      }
      function j(e) {
        return parseInt(window.getComputedStyle(e)["padding-right"], 10) || 0;
      }
      function k(e, t, n) {
        var o =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          r = arguments.length > 4 ? arguments[4] : void 0,
          a = [t, n].concat(Object(y.a)(o)),
          i = ["TEMPLATE", "SCRIPT", "STYLE"];
        [].forEach.call(e.children, function (e) {
          1 === e.nodeType &&
            -1 === a.indexOf(e) &&
            -1 === i.indexOf(e.tagName) &&
            x(e, r);
        });
      }
      function w(e, t) {
        var n = -1;
        return (
          e.some(function (e, o) {
            return !!t(e) && ((n = o), !0);
          }),
          n
        );
      }
      function R(e, t) {
        var n,
          o = [],
          r = [],
          a = e.container;
        if (!t.disableScrollLock) {
          if (
            (function (e) {
              var t = Object(l.a)(e);
              return t.body === e
                ? Object(O.a)(t).innerWidth > t.documentElement.clientWidth
                : e.scrollHeight > e.clientHeight;
            })(a)
          ) {
            var i = Object(E.a)();
            o.push({
              value: a.style.paddingRight,
              key: "padding-right",
              el: a,
            }),
              (a.style["padding-right"] = "".concat(j(a) + i, "px")),
              (n = Object(l.a)(a).querySelectorAll(".mui-fixed")),
              [].forEach.call(n, function (e) {
                r.push(e.style.paddingRight),
                  (e.style.paddingRight = "".concat(j(e) + i, "px"));
              });
          }
          var c = a.parentElement,
            s =
              "HTML" === c.nodeName &&
              "scroll" === window.getComputedStyle(c)["overflow-y"]
                ? c
                : a;
          o.push({ value: s.style.overflow, key: "overflow", el: s }),
            (s.style.overflow = "hidden");
        }
        return function () {
          n &&
            [].forEach.call(n, function (e, t) {
              r[t]
                ? (e.style.paddingRight = r[t])
                : e.style.removeProperty("padding-right");
            }),
            o.forEach(function (e) {
              var t = e.value,
                n = e.el,
                o = e.key;
              t ? n.style.setProperty(o, t) : n.style.removeProperty(o);
            });
        };
      }
      var C = (function () {
        function e() {
          Object(v.a)(this, e), (this.modals = []), (this.containers = []);
        }
        return (
          Object(g.a)(e, [
            {
              key: "add",
              value: function (e, t) {
                var n = this.modals.indexOf(e);
                if (-1 !== n) return n;
                (n = this.modals.length),
                  this.modals.push(e),
                  e.modalRef && x(e.modalRef, !1);
                var o = (function (e) {
                  var t = [];
                  return (
                    [].forEach.call(e.children, function (e) {
                      e.getAttribute &&
                        "true" === e.getAttribute("aria-hidden") &&
                        t.push(e);
                    }),
                    t
                  );
                })(t);
                k(t, e.mountNode, e.modalRef, o, !0);
                var r = w(this.containers, function (e) {
                  return e.container === t;
                });
                return -1 !== r
                  ? (this.containers[r].modals.push(e), n)
                  : (this.containers.push({
                      modals: [e],
                      container: t,
                      restore: null,
                      hiddenSiblingNodes: o,
                    }),
                    n);
              },
            },
            {
              key: "mount",
              value: function (e, t) {
                var n = w(this.containers, function (t) {
                    return -1 !== t.modals.indexOf(e);
                  }),
                  o = this.containers[n];
                o.restore || (o.restore = R(o, t));
              },
            },
            {
              key: "remove",
              value: function (e) {
                var t = this.modals.indexOf(e);
                if (-1 === t) return t;
                var n = w(this.containers, function (t) {
                    return -1 !== t.modals.indexOf(e);
                  }),
                  o = this.containers[n];
                if (
                  (o.modals.splice(o.modals.indexOf(e), 1),
                  this.modals.splice(t, 1),
                  0 === o.modals.length)
                )
                  o.restore && o.restore(),
                    e.modalRef && x(e.modalRef, !0),
                    k(
                      o.container,
                      e.mountNode,
                      e.modalRef,
                      o.hiddenSiblingNodes,
                      !1
                    ),
                    this.containers.splice(n, 1);
                else {
                  var r = o.modals[o.modals.length - 1];
                  r.modalRef && x(r.modalRef, !1);
                }
                return t;
              },
            },
            {
              key: "isTopModal",
              value: function (e) {
                return (
                  this.modals.length > 0 &&
                  this.modals[this.modals.length - 1] === e
                );
              },
            },
          ]),
          e
        );
      })();
      var S = function (e) {
          var t = e.children,
            n = e.disableAutoFocus,
            o = void 0 !== n && n,
            r = e.disableEnforceFocus,
            c = void 0 !== r && r,
            s = e.disableRestoreFocus,
            u = void 0 !== s && s,
            p = e.getDoc,
            f = e.isEnabled,
            m = e.open,
            b = a.useRef(),
            h = a.useRef(null),
            v = a.useRef(null),
            g = a.useRef(),
            y = a.useRef(null),
            E = a.useCallback(function (e) {
              y.current = i.findDOMNode(e);
            }, []),
            O = Object(d.a)(t.ref, E),
            x = a.useRef();
          return (
            a.useEffect(
              function () {
                x.current = m;
              },
              [m]
            ),
            !x.current &&
              m &&
              "undefined" != typeof window &&
              (g.current = p().activeElement),
            a.useEffect(
              function () {
                if (m) {
                  var e = Object(l.a)(y.current);
                  o ||
                    !y.current ||
                    y.current.contains(e.activeElement) ||
                    (y.current.hasAttribute("tabIndex") ||
                      y.current.setAttribute("tabIndex", -1),
                    y.current.focus());
                  var t = function () {
                      e.hasFocus() && !c && f() && !b.current
                        ? y.current &&
                          !y.current.contains(e.activeElement) &&
                          y.current.focus()
                        : (b.current = !1);
                    },
                    n = function (t) {
                      !c &&
                        f() &&
                        9 === t.keyCode &&
                        e.activeElement === y.current &&
                        ((b.current = !0),
                        t.shiftKey ? v.current.focus() : h.current.focus());
                    };
                  e.addEventListener("focus", t, !0),
                    e.addEventListener("keydown", n, !0);
                  var r = setInterval(function () {
                    t();
                  }, 50);
                  return function () {
                    clearInterval(r),
                      e.removeEventListener("focus", t, !0),
                      e.removeEventListener("keydown", n, !0),
                      u ||
                        (g.current && g.current.focus && g.current.focus(),
                        (g.current = null));
                  };
                }
              },
              [o, c, u, f, m]
            ),
            a.createElement(
              a.Fragment,
              null,
              a.createElement("div", {
                tabIndex: 0,
                ref: h,
                "data-test": "sentinelStart",
              }),
              a.cloneElement(t, { ref: O }),
              a.createElement("div", {
                tabIndex: 0,
                ref: v,
                "data-test": "sentinelEnd",
              })
            )
          );
        },
        T = {
          root: {
            zIndex: -1,
            position: "fixed",
            right: 0,
            bottom: 0,
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            WebkitTapHighlightColor: "transparent",
          },
          invisible: { backgroundColor: "transparent" },
        },
        N = a.forwardRef(function (e, t) {
          var n = e.invisible,
            i = void 0 !== n && n,
            c = e.open,
            s = Object(o.a)(e, ["invisible", "open"]);
          return c
            ? a.createElement(
                "div",
                Object(r.a)({ "aria-hidden": !0, ref: t }, s, {
                  style: Object(r.a)(
                    Object(r.a)(Object(r.a)({}, T.root), i ? T.invisible : {}),
                    s.style
                  ),
                })
              )
            : null;
        });
      var M = new C(),
        I = a.forwardRef(function (e, t) {
          var n = Object(c.a)(),
            u = Object(s.a)({
              name: "MuiModal",
              props: Object(r.a)({}, e),
              theme: n,
            }),
            p = u.BackdropComponent,
            v = void 0 === p ? N : p,
            g = u.BackdropProps,
            y = u.children,
            E = u.closeAfterTransition,
            O = void 0 !== E && E,
            j = u.container,
            k = u.disableAutoFocus,
            w = void 0 !== k && k,
            R = u.disableBackdropClick,
            C = void 0 !== R && R,
            T = u.disableEnforceFocus,
            I = void 0 !== T && T,
            D = u.disableEscapeKeyDown,
            P = void 0 !== D && D,
            A = u.disablePortal,
            L = void 0 !== A && A,
            F = u.disableRestoreFocus,
            z = void 0 !== F && F,
            B = u.disableScrollLock,
            V = void 0 !== B && B,
            W = u.hideBackdrop,
            q = void 0 !== W && W,
            H = u.keepMounted,
            K = void 0 !== H && H,
            X = u.manager,
            Y = void 0 === X ? M : X,
            G = u.onBackdropClick,
            U = u.onClose,
            J = u.onEscapeKeyDown,
            $ = u.onRendered,
            _ = u.open,
            Q = Object(o.a)(u, [
              "BackdropComponent",
              "BackdropProps",
              "children",
              "closeAfterTransition",
              "container",
              "disableAutoFocus",
              "disableBackdropClick",
              "disableEnforceFocus",
              "disableEscapeKeyDown",
              "disablePortal",
              "disableRestoreFocus",
              "disableScrollLock",
              "hideBackdrop",
              "keepMounted",
              "manager",
              "onBackdropClick",
              "onClose",
              "onEscapeKeyDown",
              "onRendered",
              "open",
            ]),
            Z = a.useState(!0),
            ee = Z[0],
            te = Z[1],
            ne = a.useRef({}),
            oe = a.useRef(null),
            re = a.useRef(null),
            ae = Object(d.a)(re, t),
            ie = (function (e) {
              return !!e.children && e.children.props.hasOwnProperty("in");
            })(u),
            ce = function () {
              return Object(l.a)(oe.current);
            },
            se = function () {
              return (
                (ne.current.modalRef = re.current),
                (ne.current.mountNode = oe.current),
                ne.current
              );
            },
            le = function () {
              Y.mount(se(), { disableScrollLock: V }),
                (re.current.scrollTop = 0);
            },
            ue = Object(b.a)(function () {
              var e =
                (function (e) {
                  return (
                    (e = "function" == typeof e ? e() : e), i.findDOMNode(e)
                  );
                })(j) || ce().body;
              Y.add(se(), e), re.current && le();
            }),
            de = a.useCallback(
              function () {
                return Y.isTopModal(se());
              },
              [Y]
            ),
            pe = Object(b.a)(function (e) {
              (oe.current = e),
                e && ($ && $(), _ && de() ? le() : x(re.current, !0));
            }),
            fe = a.useCallback(
              function () {
                Y.remove(se());
              },
              [Y]
            );
          if (
            (a.useEffect(
              function () {
                return function () {
                  fe();
                };
              },
              [fe]
            ),
            a.useEffect(
              function () {
                _ ? ue() : (ie && O) || fe();
              },
              [_, fe, ie, O, ue]
            ),
            !K && !_ && (!ie || ee))
          )
            return null;
          var me = (function (e) {
              return {
                root: {
                  position: "fixed",
                  zIndex: e.zIndex.modal,
                  right: 0,
                  bottom: 0,
                  top: 0,
                  left: 0,
                },
                hidden: { visibility: "hidden" },
              };
            })(n || { zIndex: h.a }),
            be = {};
          return (
            void 0 === y.props.tabIndex &&
              (be.tabIndex = y.props.tabIndex || "-1"),
            ie &&
              ((be.onEnter = Object(m.a)(function () {
                te(!1);
              }, y.props.onEnter)),
              (be.onExited = Object(m.a)(function () {
                te(!0), O && fe();
              }, y.props.onExited))),
            a.createElement(
              f,
              { ref: pe, container: j, disablePortal: L },
              a.createElement(
                "div",
                Object(r.a)(
                  {
                    ref: ae,
                    onKeyDown: function (e) {
                      "Escape" === e.key &&
                        de() &&
                        (J && J(e),
                        P || (e.stopPropagation(), U && U(e, "escapeKeyDown")));
                    },
                    role: "presentation",
                  },
                  Q,
                  {
                    style: Object(r.a)(
                      Object(r.a)(
                        Object(r.a)({}, me.root),
                        !_ && ee ? me.hidden : {}
                      ),
                      Q.style
                    ),
                  }
                ),
                q
                  ? null
                  : a.createElement(
                      v,
                      Object(r.a)(
                        {
                          open: _,
                          onClick: function (e) {
                            e.target === e.currentTarget &&
                              (G && G(e), !C && U && U(e, "backdropClick"));
                          },
                        },
                        g
                      )
                    ),
                a.createElement(
                  S,
                  {
                    disableEnforceFocus: I,
                    disableAutoFocus: w,
                    disableRestoreFocus: z,
                    getDoc: ce,
                    isEnabled: de,
                    open: _,
                  },
                  a.cloneElement(y, be)
                )
              )
            )
          );
        });
      t.a = I;
    },
    bfFb: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var o = n("q1tI"),
        r = n("GIek");
      function a(e, t) {
        return o.useMemo(
          function () {
            return null == e && null == t
              ? null
              : function (n) {
                  Object(r.a)(e, n), Object(r.a)(t, n);
                };
          },
          [e, t]
        );
      }
    },
    bwkw: function (e, t, n) {
      "use strict";
      function o() {
        var e = document.createElement("div");
        (e.style.width = "99px"),
          (e.style.height = "99px"),
          (e.style.position = "absolute"),
          (e.style.top = "-9999px"),
          (e.style.overflow = "scroll"),
          document.body.appendChild(e);
        var t = e.offsetWidth - e.clientWidth;
        return document.body.removeChild(e), t;
      }
      n.d(t, "a", function () {
        return o;
      });
    },
    dRu9: function (e, t, n) {
      "use strict";
      var o = n("zLVn"),
        r = n("dI71"),
        a = n("q1tI"),
        i = n.n(a),
        c = n("i8i4"),
        s = n.n(c),
        l = !1,
        u = n("0PSK"),
        d = (function (e) {
          function t(t, n) {
            var o;
            o = e.call(this, t, n) || this;
            var r,
              a = n && !n.isMounting ? t.enter : t.appear;
            return (
              (o.appearStatus = null),
              t.in
                ? a
                  ? ((r = "exited"), (o.appearStatus = "entering"))
                  : (r = "entered")
                : (r =
                    t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited"),
              (o.state = { status: r }),
              (o.nextCallback = null),
              o
            );
          }
          Object(r.a)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && "unmounted" === t.status
                ? { status: "exited" }
                : null;
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? "entering" !== n && "entered" !== n && (t = "entering")
                  : ("entering" !== n && "entered" !== n) || (t = "exiting");
              }
              this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                o = this.props.timeout;
              return (
                (e = t = n = o),
                null != o &&
                  "number" != typeof o &&
                  ((e = o.exit),
                  (t = o.enter),
                  (n = void 0 !== o.appear ? o.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (n.updateStatus = function (e, t) {
              void 0 === e && (e = !1),
                null !== t
                  ? (this.cancelNextCallback(),
                    "entering" === t
                      ? this.performEnter(e)
                      : this.performExit())
                  : this.props.unmountOnExit &&
                    "exited" === this.state.status &&
                    this.setState({ status: "unmounted" });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                o = this.context ? this.context.isMounting : e,
                r = this.props.nodeRef ? [o] : [s.a.findDOMNode(this), o],
                a = r[0],
                i = r[1],
                c = this.getTimeouts(),
                u = o ? c.appear : c.enter;
              (!e && !n) || l
                ? this.safeSetState({ status: "entered" }, function () {
                    t.props.onEntered(a);
                  })
                : (this.props.onEnter(a, i),
                  this.safeSetState({ status: "entering" }, function () {
                    t.props.onEntering(a, i),
                      t.onTransitionEnd(u, function () {
                        t.safeSetState({ status: "entered" }, function () {
                          t.props.onEntered(a, i);
                        });
                      });
                  }));
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                o = this.props.nodeRef ? void 0 : s.a.findDOMNode(this);
              t && !l
                ? (this.props.onExit(o),
                  this.safeSetState({ status: "exiting" }, function () {
                    e.props.onExiting(o),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: "exited" }, function () {
                          e.props.onExited(o);
                        });
                      });
                  }))
                : this.safeSetState({ status: "exited" }, function () {
                    e.props.onExited(o);
                  });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (o) {
                  n && ((n = !1), (t.nextCallback = null), e(o));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : s.a.findDOMNode(this),
                o = null == e && !this.props.addEndListener;
              if (n && !o) {
                if (this.props.addEndListener) {
                  var r = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    a = r[0],
                    i = r[1];
                  this.props.addEndListener(a, i);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
              var e = this.state.status;
              if ("unmounted" === e) return null;
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  Object(o.a)(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return i.a.createElement(
                u.a.Provider,
                { value: null },
                "function" == typeof n
                  ? n(e, r)
                  : i.a.cloneElement(i.a.Children.only(n), r)
              );
            }),
            t
          );
        })(i.a.Component);
      function p() {}
      (d.contextType = u.a),
        (d.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: p,
          onEntering: p,
          onEntered: p,
          onExit: p,
          onExiting: p,
          onExited: p,
        }),
        (d.UNMOUNTED = "unmounted"),
        (d.EXITED = "exited"),
        (d.ENTERING = "entering"),
        (d.ENTERED = "entered"),
        (d.EXITING = "exiting");
      t.a = d;
    },
    "eD//": function (e, t, n) {
      "use strict";
      var o = n("wx14"),
        r = n("Ff2n"),
        a = n("q1tI"),
        i = n("iuhU"),
        c = n("H2TA"),
        s = n("MquD"),
        l = a.forwardRef(function (e, t) {
          var n = e.children,
            c = e.classes,
            l = e.className,
            u = e.component,
            d = void 0 === u ? "ul" : u,
            p = e.dense,
            f = void 0 !== p && p,
            m = e.disablePadding,
            b = void 0 !== m && m,
            h = e.subheader,
            v = Object(r.a)(e, [
              "children",
              "classes",
              "className",
              "component",
              "dense",
              "disablePadding",
              "subheader",
            ]),
            g = a.useMemo(
              function () {
                return { dense: f };
              },
              [f]
            );
          return a.createElement(
            s.a.Provider,
            { value: g },
            a.createElement(
              d,
              Object(o.a)(
                {
                  className: Object(i.a)(
                    c.root,
                    l,
                    f && c.dense,
                    !b && c.padding,
                    h && c.subheader
                  ),
                  ref: t,
                },
                v
              ),
              h,
              n
            )
          );
        });
      t.a = Object(c.a)(
        {
          root: {
            listStyle: "none",
            margin: 0,
            padding: 0,
            position: "relative",
          },
          padding: { paddingTop: 8, paddingBottom: 8 },
          dense: {},
          subheader: { paddingTop: 0 },
        },
        { name: "MuiList" }
      )(l);
    },
    f98A: function (e) {
      e.exports = JSON.parse(
        '{"data":{"site":{"siteMetadata":{"title":"FORNO\'s portfolio"}}}}'
      );
    },
    "g+pH": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var o = n("gk1O");
      function r(e) {
        return Object(o.a)(e).defaultView || window;
      }
    },
    gk1O: function (e, t, n) {
      "use strict";
      function o(e) {
        return (e && e.ownerDocument) || document;
      }
      n.d(t, "a", function () {
        return o;
      });
    },
    hEkN: function (e, t, n) {
      "use strict";
      n("OGtf")("anchor", function (e) {
        return function (t) {
          return e(this, "a", "name", t);
        };
      });
    },
    hhXQ: function (e, t, n) {
      var o = n("XKFU"),
        r = n("UExd")(!1);
      o(o.S, "Object", {
        values: function (e) {
          return r(e);
        },
      });
    },
    kKAo: function (e, t, n) {
      "use strict";
      n("8+KV");
      var o = n("Ff2n"),
        r = n("wx14"),
        a = n("q1tI"),
        i = n("iuhU"),
        c = n("H2TA"),
        s = a.forwardRef(function (e, t) {
          var n = e.classes,
            c = e.className,
            s = e.component,
            l = void 0 === s ? "div" : s,
            u = e.square,
            d = void 0 !== u && u,
            p = e.elevation,
            f = void 0 === p ? 1 : p,
            m = e.variant,
            b = void 0 === m ? "elevation" : m,
            h = Object(o.a)(e, [
              "classes",
              "className",
              "component",
              "square",
              "elevation",
              "variant",
            ]);
          return a.createElement(
            l,
            Object(r.a)(
              {
                className: Object(i.a)(
                  n.root,
                  c,
                  "outlined" === b ? n.outlined : n["elevation".concat(f)],
                  !d && n.rounded
                ),
                ref: t,
              },
              h
            )
          );
        });
      t.a = Object(c.a)(
        function (e) {
          var t = {};
          return (
            e.shadows.forEach(function (e, n) {
              t["elevation".concat(n)] = { boxShadow: e };
            }),
            Object(r.a)(
              {
                root: {
                  backgroundColor: e.palette.background.paper,
                  color: e.palette.text.primary,
                  transition: e.transitions.create("box-shadow"),
                },
                rounded: { borderRadius: e.shape.borderRadius },
                outlined: { border: "1px solid ".concat(e.palette.divider) },
              },
              t
            )
          );
        },
        { name: "MuiPaper" }
      )(s);
    },
    l3Wi: function (e, t, n) {
      "use strict";
      function o(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 166;
        function o() {
          for (var o = arguments.length, r = new Array(o), a = 0; a < o; a++)
            r[a] = arguments[a];
          var i = this,
            c = function () {
              e.apply(i, r);
            };
          clearTimeout(t), (t = setTimeout(c, n));
        }
        return (
          (o.clear = function () {
            clearTimeout(t);
          }),
          o
        );
      }
      n.d(t, "a", function () {
        return o;
      });
    },
    tr08: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var o = n("aXM8"),
        r = (n("q1tI"), n("cNwE"));
      function a() {
        return Object(o.a)() || r.a;
      }
    },
    ucBr: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      n("V+eJ");
      var o = n("q1tI");
      function r(e, t) {
        return o.isValidElement(e) && -1 !== t.indexOf(e.type.muiName);
      }
    },
    uniG: function (e, t, n) {
      "use strict";
      n("HAE/");
      var o = n("TqRt");
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(n("q1tI")),
        a = (0, o(n("8/g6")).default)(
          r.default.createElement("path", {
            d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
          }),
          "Menu"
        );
      t.default = a;
    },
    x6Ns: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      n("DNiP");
      function o() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.reduce(
          function (e, t) {
            return null == t
              ? e
              : function () {
                  for (
                    var n = arguments.length, o = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    o[r] = arguments[r];
                  e.apply(this, o), t.apply(this, o);
                };
          },
          function () {}
        );
      }
    },
  },
]);
//# sourceMappingURL=ddad382ec8f0d449c9d80edd0550013ccd14e70c-42c3ff31bc52f5d7abfd.js.map