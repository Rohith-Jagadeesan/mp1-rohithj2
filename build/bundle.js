/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ===== Variables ===== */
/* ===== Resets / Base ===== */
* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #0b1220;
  color: #e5e7eb;
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  line-height: 1.5;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: #7aa2ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.container {
  width: min(100% - 32px, 1200px);
  margin-inline: auto;
}

/* ===== Navbar ===== */
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: saturate(180%) blur(8px);
  background: linear-gradient(to bottom, rgba(2, 6, 23, 0.9), rgba(2, 6, 23, 0.6));
  transition: height 0.25s ease, padding 0.25s ease, box-shadow 0.25s ease;
}
.navbar--large {
  height: 76px;
  box-shadow: none;
}
.navbar--small {
  height: 50px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}
.navbar__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 16px;
  max-width: 1200px;
  margin: 0 auto;
}
.navbar__brand {
  color: #e5e7eb;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(18px, 2.2vw, 24px);
  text-decoration: none;
}
.navbar__nav {
  display: flex;
  align-items: center;
  gap: 16px;
}

.nav__link {
  color: #cbd5e1;
  font-weight: 700;
  letter-spacing: 0.2px;
  position: relative;
  transition: color 0.2s ease;
}
.navbar--large .nav__link {
  font-size: 18px;
  padding: 10px 8px;
}
.navbar--small .nav__link {
  font-size: 15px;
  padding: 6px 6px;
}
.nav__link:hover {
  color: #e5e7eb;
}
.nav__link.is-active {
  color: #7aa2ff;
}
.nav__link.is-active::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 2px;
  background: #7aa2ff;
}

/* Reading progress */
.progress {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}
.progress__bar {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #7aa2ff, #9ad0ff);
  transition: width 0.06s linear;
}

/* ===== Sections ===== */
.section {
  padding: clamp(48px, 8vw, 96px) 0;
  background: #0b1220;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}
.section--alt {
  background: #0e1630;
}
.section--hero {
  min-height: calc(100vh - 76px);
  display: grid;
  place-items: center; /* vertical + horizontal center */
  background: radial-gradient(1200px 600px at 40% -10%, #17223f 0%, transparent 60%);
}
.section--hero .hero__content {
  text-align: center;
}
.section--hero .hero__content h1 {
  font-size: clamp(32px, 5vw, 56px);
  margin: 0 0 8px;
}
.section--hero .hero__content .lead {
  color: #cbd5e1;
  font-size: clamp(16px, 2.4vw, 20px);
  margin: 0 0 20px;
}
.section--parallax {
  position: relative;
  background-image: url("https://picsum.photos/id/1018/1600/900");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.section--parallax .center-vert {
  min-height: 60vh;
  display: grid;
  place-items: center;
}
.section--parallax .parallax__content {
  background: rgba(0, 0, 0, 0.45);
  padding: 24px 28px;
  border-radius: 14px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
  text-align: center;
  max-width: 800px;
}

/* Cards / grid */
.grid-3 {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .grid-3 {
    grid-template-columns: 1fr;
  }
}

.card {
  background: #0b1329;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
}
.card h3 {
  margin: 0 0 8px;
}
.card p {
  color: #d7dbe6;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #7aa2ff;
  color: #08101f;
  font-weight: 800;
  padding: 12px 18px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.2s ease;
}
.btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
  text-decoration: none;
}

/* Carousel */
.carousel {
  position: relative;
}
.carousel__viewport {
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
}
.carousel__track {
  display: flex;
  transition: transform 0.45s ease;
  will-change: transform;
}
.carousel__slide {
  min-width: 100%;
  position: relative;
}
.carousel__slide img {
  width: 100%;
  height: auto;
  display: block;
}
.carousel__slide .carousel__caption {
  position: absolute;
  left: 12px;
  bottom: 12px;
  background: rgba(0, 0, 0, 0.45);
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.carousel__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.35);
  color: #e5e7eb;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}
.carousel__arrow:hover {
  background: rgba(0, 0, 0, 0.55);
}
.carousel__arrow--prev {
  left: 10px;
}
.carousel__arrow--next {
  right: 10px;
}

/* Modal */
.modal {
  position: fixed;
  inset: 0;
  display: none;
  z-index: 2000;
}
.modal.is-open {
  display: block;
}
.modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.2s ease both;
}
.modal__dialog {
  position: relative;
  z-index: 1;
  width: min(92%, 560px);
  margin: 10vh auto 0;
  background: #0b1329;
  color: #e5e7eb;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px 24px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
  animation: popIn 0.2s ease both;
}
.modal__close {
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 28px;
  background: transparent;
  border: none;
  color: #cbd5e1;
  cursor: pointer;
}
.modal__close:hover {
  color: #e5e7eb;
}

/* Video */
.video {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
}

/* Footer */
.footer {
  background: #070c17;
  padding: 24px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.footer p {
  margin: 0;
  text-align: center;
  color: #cbd5e1;
}

/* Social */
.social {
  display: flex;
  gap: 16px;
  font-size: 24px;
}
.social a {
  color: #e5e7eb;
}
.social a:hover {
  color: #7aa2ff;
  text-decoration: none;
}

/* Accessibility helper */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ===== Animations ===== */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes popIn {
  from {
    opacity: 0;
    transform: translateY(6px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
/* Simple staged fade-in utilities */
.fade-in-up {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.6s ease forwards;
}

.delay-1 {
  animation-delay: 0.15s;
}

.delay-2 {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* ===== Responsiveness (target sizes already covered by fluid design) ===== */
@media (max-width: 1280px) { /* tweaks if needed */ }
@media (max-width: 1024px) { /* tweaks if needed */ }
@media (max-width: 768px) { /* tweaks if needed */ }`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"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","sourcesContent":["/* ===== Variables ===== */\n$bg: #0b1220;\n$bg-alt: #0e1630;\n$surface: #0b1329;\n$text: #e5e7eb;\n$muted: #cbd5e1;\n$accent: #7aa2ff;\n\n$maxw: 1200px;\n$radius: 14px;\n$shadow: 0 18px 50px rgba(0,0,0,.35);\n\n$nav-h-large: 76px;\n$nav-h-small: 50px;\n\n/* ===== Resets / Base ===== */\n* { box-sizing: border-box; }\nhtml, body { height: 100%; }\nhtml { scroll-behavior: smooth; }\nbody {\n  margin: 0;\n  background: $bg;\n  color: $text;\n  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;\n  line-height: 1.5;\n}\n\nimg { max-width: 100%; display: block; }\na { color: $accent; text-decoration: none; }\na:hover { text-decoration: underline; }\n\n.container {\n  width: min(100% - 32px, #{$maxw});\n  margin-inline: auto;\n}\n\n/* ===== Navbar ===== */\n.navbar {\n  position: sticky; top: 0; width: 100%; z-index: 1000;\n  backdrop-filter: saturate(180%) blur(8px);\n  background: linear-gradient(to bottom, rgba(2,6,23,0.9), rgba(2,6,23,0.6));\n  transition: height .25s ease, padding .25s ease, box-shadow .25s ease;\n\n  &--large { height: $nav-h-large; box-shadow: none; }\n  &--small { height: $nav-h-small; box-shadow: 0 8px 24px rgba(0,0,0,0.25); }\n\n  &__inner {\n    height: 100%; display: flex; align-items: center; justify-content: space-between;\n    gap: 16px; padding: 0 16px;\n    max-width: $maxw; margin: 0 auto;\n  }\n\n  &__brand {\n    color: $text; font-weight: 800; display: inline-flex; align-items: center; gap: 10px;\n    font-size: clamp(18px, 2.2vw, 24px);\n    text-decoration: none;\n  }\n\n  &__nav {\n    display: flex; align-items: center; gap: 16px;\n  }\n}\n\n.nav__link {\n  color: $muted; font-weight: 700; letter-spacing: .2px; position: relative;\n  transition: color .2s ease;\n\n  .navbar--large & { font-size: 18px; padding: 10px 8px; }\n  .navbar--small & { font-size: 15px; padding: 6px 6px; }\n\n  &:hover { color: $text; }\n  &.is-active {\n    color: $accent;\n    &::after {\n      content: \"\"; position: absolute; left: 0; right: 0; bottom: -6px; height: 2px; background: $accent;\n    }\n  }\n}\n\n/* Reading progress */\n.progress {\n  position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: rgba(255,255,255,.08);\n  overflow: hidden;\n\n  &__bar {\n    height: 100%; width: 0%; background: linear-gradient(90deg, $accent, #9ad0ff);\n    transition: width .06s linear;\n  }\n}\n\n/* ===== Sections ===== */\n.section {\n  padding: clamp(48px, 8vw, 96px) 0;\n  background: $bg;\n  border-top: 1px solid rgba(255,255,255,.04);\n\n  &--alt {\n    background: $bg-alt;\n  }\n\n  &--hero {\n    min-height: calc(100vh - #{$nav-h-large});\n    display: grid; place-items: center; /* vertical + horizontal center */\n    background: radial-gradient(1200px 600px at 40% -10%, #17223f 0%, transparent 60%);\n\n    .hero__content {\n      text-align: center;\n      h1 { font-size: clamp(32px, 5vw, 56px); margin: 0 0 8px; }\n      .lead { color: $muted; font-size: clamp(16px, 2.4vw, 20px); margin: 0 0 20px; }\n    }\n  }\n\n  &--parallax {\n    position: relative;\n    background-image: url('https://picsum.photos/id/1018/1600/900');\n    background-size: cover; background-position: center;\n    background-attachment: fixed;\n\n    .center-vert { min-height: 60vh; display: grid; place-items: center; }\n    .parallax__content {\n      background: rgba(0,0,0,.45);\n      padding: 24px 28px; border-radius: $radius; box-shadow: $shadow; text-align: center;\n      max-width: 800px;\n    }\n  }\n}\n\n/* Cards / grid */\n.grid-3 {\n  display: grid; gap: 20px;\n  grid-template-columns: repeat(3, 1fr);\n  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }\n  @media (max-width: 640px) { grid-template-columns: 1fr; }\n}\n.card {\n  background: $surface; border: 1px solid rgba(255,255,255,.06);\n  border-radius: $radius; padding: 20px; box-shadow: $shadow;\n\n  h3 { margin: 0 0 8px; }\n  p { color: #d7dbe6; }\n}\n\n/* Buttons */\n.btn {\n  display: inline-flex; align-items: center; gap: 10px;\n  background: $accent; color: #08101f; font-weight: 800;\n  padding: 12px 18px; border-radius: 999px; border: none; cursor: pointer;\n  transition: transform .15s ease, filter .2s ease;\n  &:hover { transform: translateY(-1px); filter: brightness(1.05); text-decoration: none; }\n}\n\n/* Carousel */\n.carousel {\n  position: relative;\n\n  &__viewport {\n    overflow: hidden; border-radius: $radius; border: 1px solid rgba(255,255,255,.06);\n    box-shadow: $shadow;\n  }\n\n  &__track {\n    display: flex; transition: transform .45s ease; will-change: transform;\n  }\n\n  &__slide {\n    min-width: 100%; position: relative;\n    img { width: 100%; height: auto; display: block; }\n    .carousel__caption {\n      position: absolute; left: 12px; bottom: 12px;\n      background: rgba(0,0,0,.45); padding: 8px 12px; border-radius: 10px;\n      border: 1px solid rgba(255,255,255,.08);\n    }\n  }\n\n  &__arrow {\n    position: absolute; top: 50%; transform: translateY(-50%);\n    width: 44px; height: 44px; border-radius: 50%;\n    border: 1px solid rgba(255,255,255,.2); background: rgba(0,0,0,.35); color: $text;\n    display: grid; place-items: center; cursor: pointer;\n    transition: background .2s ease, transform .1s ease;\n    &:hover { background: rgba(0,0,0,.55); }\n    &--prev { left: 10px; }\n    &--next { right: 10px; }\n  }\n}\n\n/* Modal */\n.modal {\n  position: fixed; inset: 0; display: none; z-index: 2000;\n  &.is-open { display: block; }\n\n  &__backdrop {\n    position: absolute; inset: 0; background: rgba(0,0,0,.5);\n    animation: fadeIn .2s ease both;\n  }\n\n  &__dialog {\n    position: relative; z-index: 1;\n    width: min(92%, 560px); margin: 10vh auto 0; background: $surface; color: $text;\n    border-radius: $radius; border: 1px solid rgba(255,255,255,.1);\n    padding: 20px 24px; box-shadow: $shadow; animation: popIn .2s ease both;\n  }\n\n  &__close {\n    position: absolute; top: 8px; right: 12px; font-size: 28px;\n    background: transparent; border: none; color: $muted; cursor: pointer;\n    &:hover { color: $text; }\n  }\n}\n\n/* Video */\n.video {\n  width: 100%;\n  border-radius: $radius; border: 1px solid rgba(255,255,255,.06);\n  box-shadow: $shadow;\n}\n\n/* Footer */\n.footer {\n  background: #070c17; padding: 24px 0; border-top: 1px solid rgba(255,255,255,.08);\n  p { margin: 0; text-align: center; color: $muted; }\n}\n\n/* Social */\n.social {\n  display: flex; gap: 16px; font-size: 24px;\n  a { color: $text; }\n  a:hover { color: $accent; text-decoration: none; }\n}\n\n/* Accessibility helper */\n.sr-only {\n  position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0;\n}\n\n/* ===== Animations ===== */\n@keyframes fadeIn {\n  from { opacity: 0; } to { opacity: 1; }\n}\n@keyframes popIn {\n  from { opacity: 0; transform: translateY(6px) scale(.98); }\n  to { opacity: 1; transform: translateY(0) scale(1); }\n}\n\n/* Simple staged fade-in utilities */\n.fade-in-up { opacity: 0; transform: translateY(10px); animation: fadeInUp .6s ease forwards; }\n.delay-1 { animation-delay: .15s; }\n.delay-2 { animation-delay: .3s; }\n\n@keyframes fadeInUp {\n  to { opacity: 1; transform: translateY(0); }\n}\n\n/* ===== Responsiveness (target sizes already covered by fluid design) ===== */\n@media (max-width: 1280px) { /* tweaks if needed */ }\n@media (max-width: 1024px) { /* tweaks if needed */ }\n@media (max-width: 768px)  { /* tweaks if needed */ }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ca1bdec4020c385c768a.css";

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./css/main.css */ "./css/main.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./js/main.js */ "./js/main.js?db67"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <title>All-in-One Single Page</title>\n\n  <!-- Font & Icons -->\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap\" rel=\"stylesheet\">\n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\" rel=\"stylesheet\">\n\n  <!-- Your compiled CSS from styles.scss -->\n  <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\n</head>\n<body>\n  <!-- Sticky Navbar -->\n  <nav class=\"navbar navbar--large\" id=\"navbar\">\n    <div class=\"navbar__inner\">\n      <a class=\"navbar__brand\" href=\"#top\"><i class=\"fa-solid fa-gem\"></i> MySite</a>\n      <div class=\"navbar__nav\" id=\"navLinks\">\n        <a class=\"nav__link\" href=\"#hero\">Home</a>\n        <a class=\"nav__link\" href=\"#features\">Features</a>\n        <a class=\"nav__link\" href=\"#carousel\">Carousel</a>\n        <a class=\"nav__link\" href=\"#columns\">Columns</a>\n        <a class=\"nav__link\" href=\"#parallax\">Parallax</a>\n        <a class=\"nav__link\" href=\"#modal\">Modal</a>\n        <a class=\"nav__link\" href=\"#video\">Video</a>\n        <a class=\"nav__link\" href=\"#contact\">Contact</a>\n      </div>\n    </div>\n    <!-- Reading progress -->\n    <div class=\"progress\" aria-hidden=\"true\"><div class=\"progress__bar\" id=\"progressBar\"></div></div>\n    <span class=\"sr-only\" id=\"progressLabel\" aria-live=\"polite\"></span>\n  </nav>\n\n  <main id=\"top\">\n    <!-- HERO (full-viewport stripe, horizontally + vertically centered) -->\n    <header id=\"hero\" class=\"section section--hero\">\n      <div class=\"container hero__content\">\n        <h1 class=\"fade-in-up\">Welcome to the Demo</h1>\n        <p class=\"lead fade-in-up delay-1\">Sticky navbar, progress indicator, carousel, columns, parallax, modal, video, animations, and icons—done.</p>\n        <a href=\"#features\" class=\"btn fade-in-up delay-2\"><i class=\"fa-solid fa-circle-down\"></i> Explore</a>\n      </div>\n    </header>\n\n    <!-- FEATURES -->\n    <section id=\"features\" class=\"section\">\n      <div class=\"container\">\n        <h2>Features</h2>\n        <ul class=\"features-list\">\n          <li><i class=\"fa-solid fa-thumbtack\"></i> Sticky navbar with size change on scroll</li>\n          <li><i class=\"fa-solid fa-chart-line\"></i> Reading position indicator in the navbar</li>\n          <li><i class=\"fa-solid fa-angles-down\"></i> Smooth scrolling & active menu highlighting</li>\n          <li><i class=\"fa-solid fa-images\"></i> Carousel with side arrows (3+ slides)</li>\n          <li><i class=\"fa-solid fa-table-columns\"></i> Multi-column responsive layout</li>\n          <li><i class=\"fa-solid fa-image\"></i> Fixed background “parallax-like” section</li>\n          <li><i class=\"fa-solid fa-window-restore\"></i> Modal windows</li>\n          <li><i class=\"fa-solid fa-video\"></i> Embedded HTML5 video</li>\n          <li><i class=\"fa-solid fa-wand-magic-sparkles\"></i> CSS3 animations</li>\n          <li><i class=\"fa-brands fa-x-twitter\"></i> Social icons (Font Awesome)</li>\n        </ul>\n      </div>\n    </section>\n\n    <!-- CAROUSEL -->\n    <section id=\"carousel\" class=\"section section--alt\">\n      <div class=\"container\">\n        <h2>Carousel</h2>\n        <div class=\"carousel\" data-carousel>\n          <button class=\"carousel__arrow carousel__arrow--prev\" data-carousel-prev aria-label=\"Previous slide\">\n            <i class=\"fa-solid fa-chevron-left\"></i>\n          </button>\n          <div class=\"carousel__viewport\">\n            <div class=\"carousel__track\" data-carousel-track>\n              <div class=\"carousel__slide\">\n                <img src=\"https://picsum.photos/1200/500?random=1\" alt=\"Slide 1\">\n                <div class=\"carousel__caption\">Slide One</div>\n              </div>\n              <div class=\"carousel__slide\">\n                <img src=\"https://picsum.photos/1200/500?random=2\" alt=\"Slide 2\">\n                <div class=\"carousel__caption\">Slide Two</div>\n              </div>\n              <div class=\"carousel__slide\">\n                <img src=\"https://picsum.photos/1200/500?random=3\" alt=\"Slide 3\">\n                <div class=\"carousel__caption\">Slide Three</div>\n              </div>\n            </div>\n          </div>\n          <button class=\"carousel__arrow carousel__arrow--next\" data-carousel-next aria-label=\"Next slide\">\n            <i class=\"fa-solid fa-chevron-right\"></i>\n          </button>\n        </div>\n      </div>\n    </section>\n\n    <!-- MULTI-COLUMN -->\n    <section id=\"columns\" class=\"section\">\n      <div class=\"container\">\n        <h2>Multi-column Layout</h2>\n        <div class=\"grid-3\">\n          <article class=\"card\">\n            <h3><i class=\"fa-solid fa-bolt\"></i> Fast</h3>\n            <p>Responsive grid with three columns on large screens and graceful stacking on smaller viewports.</p>\n          </article>\n          <article class=\"card\">\n            <h3><i class=\"fa-solid fa-lock\"></i> Secure</h3>\n            <p>Scoped styles and accessible markup ensure a solid baseline for production use.</p>\n          </article>\n          <article class=\"card\">\n            <h3><i class=\"fa-solid fa-shuffle\"></i> Flexible</h3>\n            <p>Easily adjust variables in SCSS for spacing, colors, and breakpoints.</p>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <!-- PARALLAX-LIKE FIXED BACKGROUND -->\n    <section id=\"parallax\" class=\"section section--parallax\">\n      <div class=\"container center-vert\">\n        <div class=\"parallax__content\">\n          <h2>Fixed Background Section</h2>\n          <p>Scroll to see the fixed background effect. Text stays readable with an overlay.</p>\n        </div>\n      </div>\n    </section>\n\n    <!-- MODAL -->\n    <section id=\"modal\" class=\"section section--alt\">\n      <div class=\"container\">\n        <h2>Modal Windows</h2>\n        <p>Click the button to open a modal with additional content.</p>\n        <button class=\"btn\" data-open-modal=\"#demoModal\"><i class=\"fa-solid fa-window-maximize\"></i> Open Modal</button>\n      </div>\n\n      <div class=\"modal\" id=\"demoModal\" aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"demoModalTitle\">\n        <div class=\"modal__backdrop\" data-close-modal></div>\n        <div class=\"modal__dialog\" role=\"document\">\n          <button class=\"modal__close\" aria-label=\"Close modal\" data-close-modal>&times;</button>\n          <h3 id=\"demoModalTitle\">Hello from the Modal</h3>\n          <p>This modal is keyboard-accessible and closes on ESC, backdrop click, or the × button.</p>\n        </div>\n      </div>\n    </section>\n\n    <!-- VIDEO -->\n    <section id=\"video\" class=\"section\">\n      <div class=\"container\">\n        <h2>Embedded HTML5 Video</h2>\n        <video class=\"video\" controls preload=\"metadata\" poster=\"https://picsum.photos/1200/675?blur=3\">\n          <source src=\"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4\" type=\"video/mp4\">\n          Your browser does not support the video tag.\n        </video>\n      </div>\n    </section>\n\n    <!-- CONTACT / SOCIAL -->\n    <section id=\"contact\" class=\"section section--alt\">\n      <div class=\"container\">\n        <h2>Contact</h2>\n        <p>Follow us</p>\n        <div class=\"social\">\n          <a href=\"#\" aria-label=\"Twitter\" title=\"Twitter\"><i class=\"fa-brands fa-x-twitter\"></i></a>\n          <a href=\"#\" aria-label=\"GitHub\" title=\"GitHub\"><i class=\"fa-brands fa-github\"></i></a>\n          <a href=\"#\" aria-label=\"LinkedIn\" title=\"LinkedIn\"><i class=\"fa-brands fa-linkedin\"></i></a>\n          <a href=\"#\" aria-label=\"Instagram\" title=\"Instagram\"><i class=\"fa-brands fa-instagram\"></i></a>\n        </div>\n      </div>\n    </section>\n  </main>\n\n  <!-- FOOTER -->\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <p>&copy; <span id=\"year\"></span> MySite. All rights reserved.</p>\n    </div>\n  </footer>\n\n  <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"><" + "/script>\n</body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./js/main.js?9e1e":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

// ===== Helpers =====
var $ = function $(sel) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return ctx.querySelector(sel);
};

var $$ = function $$(sel) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Array.from(ctx.querySelectorAll(sel));
};

document.addEventListener('DOMContentLoaded', function () {
  var navbar = $('#navbar');
  var progressBar = $('#progressBar');
  var progressLabel = $('#progressLabel');
  var links = $$('.nav__link');
  var sections = links.map(function (a) {
    return $(a.getAttribute('href'));
  });
  var yearEl = $('#year'); // Footer year

  if (yearEl) yearEl.textContent = new Date().getFullYear(); // --- Scroll pipeline (ticked)

  var ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        updateNavbarSize();
        updateProgress();
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  }

  function updateNavbarSize() {
    var atTop = window.scrollY <= 2;
    navbar.classList.toggle('navbar--large', atTop);
    navbar.classList.toggle('navbar--small', !atTop);
  }

  function updateProgress() {
    var docEl = document.documentElement;
    var scrollTop = docEl.scrollTop || document.body.scrollTop;
    var scrollHeight = docEl.scrollHeight || document.body.scrollHeight;
    var clientHeight = docEl.clientHeight;
    var max = Math.max(scrollHeight - clientHeight, 1);
    var pct = Math.min(Math.max(scrollTop / max * 100, 0), 100);
    progressBar.style.width = pct + '%';
    progressLabel.textContent = "Reading progress: ".concat(Math.round(pct), "%");
  }

  function updateActiveLink() {
    var navBottom = navbar.getBoundingClientRect().bottom; // At the bottom → force last active

    var nearBottom = Math.abs(window.innerHeight + window.scrollY - document.documentElement.scrollHeight) <= 1;
    var activeIndex = -1;

    if (nearBottom) {
      activeIndex = links.length - 1;
    } else {
      // Section whose top is just below navbar bottom
      var bestDist = Infinity;
      sections.forEach(function (sec, idx) {
        if (!sec) return;
        var rect = sec.getBoundingClientRect();
        var dist = rect.top - navBottom;

        if (dist >= -1 && dist < bestDist) {
          bestDist = dist;
          activeIndex = idx;
        }
      }); // Fallback: if none matched, pick the first section whose bottom is still below nav bottom

      if (activeIndex === -1) {
        sections.forEach(function (sec, idx) {
          var rect = sec.getBoundingClientRect();
          if (rect.bottom > navBottom && activeIndex === -1) activeIndex = idx;
        });
      }
    }

    links.forEach(function (a, i) {
      return a.classList.toggle('is-active', i === activeIndex);
    });
  } // Initial paint


  updateNavbarSize();
  updateProgress();
  updateActiveLink(); // Events

  document.addEventListener('scroll', onScroll, {
    passive: true
  });
  window.addEventListener('resize', onScroll);
  window.addEventListener('orientationchange', onScroll); // Smooth scroll with offset for sticky navbar

  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || !id.startsWith('#')) return;
      e.preventDefault();
      var target = document.querySelector(id);
      if (!target) return;
      var navH = navbar.classList.contains('navbar--small') ? parseInt(getComputedStyle(navbar).height, 10) : parseInt(getComputedStyle(navbar).height, 10);
      var y = window.scrollY + target.getBoundingClientRect().top - (navH + 8);
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    });
  }); // ===== Carousel =====

  var carousel = $('[data-carousel]');

  if (carousel) {
    var render = function render() {
      track.style.transform = "translateX(".concat(index * -100, "%)");
    };

    var next = function next() {
      index = (index + 1) % slides.length;
      render();
    };

    var prev = function prev() {
      index = (index - 1 + slides.length) % slides.length;
      render();
    };

    var track = $('[data-carousel-track]', carousel);
    var prevBtn = $('[data-carousel-prev]', carousel);
    var nextBtn = $('[data-carousel-next]', carousel);
    var slides = $$('.carousel__slide', track);
    var index = 0;
    nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', next);
    prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', prev); // Optional: auto-advance

    var auto = setInterval(next, 5000);
    carousel.addEventListener('mouseenter', function () {
      return clearInterval(auto);
    });
    carousel.addEventListener('mouseleave', function () {
      return auto = setInterval(next, 5000);
    });
  } // ===== Modal =====


  var openers = $$('[data-open-modal]');
  var closers = $$('[data-close-modal]');
  openers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var sel = btn.getAttribute('data-open-modal');
      var modal = $(sel);
      if (!modal) return;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      var closeBtn = $('.modal__close', modal);
      closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.focus(); // ESC key close

      modal.addEventListener('keydown', onEsc);
    });
  });
  closers.forEach(function (btn) {
    btn.addEventListener('click', closeModalFromChild);
  });

  function onEsc(e) {
    if (e.key === 'Escape') {
      var open = $('.modal.is-open');
      if (open) closeModal(open);
    }
  }

  function closeModalFromChild(e) {
    var modal = e.target.closest('.modal');
    if (modal) closeModal(modal);
  } // Backdrop click


  $$('.modal__backdrop').forEach(function (backdrop) {
    backdrop.addEventListener('click', function (e) {
      var modal = e.target.closest('.modal');
      if (modal) closeModal(modal);
    });
  });

  function closeModal(modal) {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modal.removeEventListener('keydown', onEsc);
  }
});

/***/ }),

/***/ "./js/main.js?db67":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1cecb8fb75aa3717f92d.js";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js?9e1e");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */
// HTML Files
 // Stylesheets

 // Scripts


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map