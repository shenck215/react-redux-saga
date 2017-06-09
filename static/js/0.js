webpackJsonp([0],{

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lib = __webpack_require__(386);

var _lib2 = _interopRequireDefault(_lib);

var _antd = __webpack_require__(15);

__webpack_require__(436);

var _basicSetting = __webpack_require__(447);

var _basicSetting2 = _interopRequireDefault(_basicSetting);

var _insuredmaterials = __webpack_require__(448);

var _insuredmaterials2 = _interopRequireDefault(_insuredmaterials);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;

var CityBasicSettingApp = function (_React$Component) {
    _inherits(CityBasicSettingApp, _React$Component);

    function CityBasicSettingApp(props) {
        _classCallCheck(this, CityBasicSettingApp);

        return _possibleConstructorReturn(this, (CityBasicSettingApp.__proto__ || Object.getPrototypeOf(CityBasicSettingApp)).call(this, props));
    }

    _createClass(CityBasicSettingApp, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                _lib2.default,
                null,
                _react2.default.createElement(
                    'div',
                    { key: '1' },
                    _react2.default.createElement(
                        _antd.Tabs,
                        { type: 'card', className: 'tabtitle' },
                        _react2.default.createElement(TabPane, { tab: '\u57FA\u7840\u9879\u8BBE\u7F6E', disabled: true, key: '1' }),
                        _react2.default.createElement(
                            TabPane,
                            { tab: '\u57FA\u7840\u57CE\u5E02\u8BBE\u7F6E', key: '2' },
                            _react2.default.createElement(_basicSetting2.default, null)
                        ),
                        _react2.default.createElement(
                            TabPane,
                            { tab: '\u53C2\u4FDD\u6750\u6599\u8BBE\u7F6E', key: '3' },
                            _react2.default.createElement(_insuredmaterials2.default, null)
                        )
                    )
                )
            );
        }
    }]);

    return CityBasicSettingApp;
}(_react2.default.Component);

exports.default = CityBasicSettingApp;

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(29);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.toArrayChildren = toArrayChildren;
exports.dataToArray = dataToArray;
exports.objectEqual = objectEqual;
exports.findChildInChildrenByKey = findChildInChildrenByKey;
exports.mergeChildren = mergeChildren;
exports.transformArguments = transformArguments;
exports.getChildrenFromProps = getChildrenFromProps;
exports.startConvertToEndUnit = startConvertToEndUnit;
exports.parsePath = parsePath;
exports.getTransformValue = getTransformValue;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _deepEql = __webpack_require__(397);

var _deepEql2 = _interopRequireDefault(_deepEql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function toArrayChildren(children) {
  var ret = [];
  _react2["default"].Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

function dataToArray(vars) {
  if (!vars && vars !== 0) {
    return [];
  }
  if (Array.isArray(vars)) {
    return vars;
  }
  return [vars];
}

function objectEqual(obj1, obj2) {
  if (obj1 === obj2 || (0, _deepEql2["default"])(obj1, obj2)) {
    return true;
  }
  if (!obj1 || !obj2) {
    return false;
  }
  // animation 写在标签上的进行判断是否相等， 判断每个参数有没有 function;
  var equalBool = true;
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false;
    }
    for (var i = 0; i < obj1.length; i++) {
      var currentObj = obj1[i];
      var nextObj = obj2[i];
      for (var p in currentObj) {
        if (currentObj[p] !== nextObj[p]) {
          if ((0, _typeof3["default"])(currentObj[p]) === 'object' && (0, _typeof3["default"])(nextObj[p]) === 'object') {
            equalBool = objectEqual(currentObj[p], nextObj[p]);
          } else if (typeof currentObj[p] === 'function' && typeof nextObj[p] === 'function') {
            if (currentObj[p].name !== nextObj[p].name) {
              equalBool = false;
            }
          } else {
            equalBool = false;
            return false;
          }
        }
      }
    }
  }

  var setEqualBool = function setEqualBool(objA, objB) {
    Object.keys(objA).forEach(function (key) {
      if (!(key in objB)) {
        equalBool = false;
      }

      if ((0, _typeof3["default"])(objA[key]) === 'object' && (0, _typeof3["default"])(objB[key]) === 'object') {
        equalBool = objectEqual(objA[key], objB[key]);
      } else if (typeof objA[key] === 'function' && typeof objB[key] === 'function') {
        if (objA[key].name !== objB[key].name) {
          equalBool = false;
        }
      } else if (objA[key] !== objB[key]) {
        equalBool = false;
      }
    });
  };

  setEqualBool(obj1, obj2);
  setEqualBool(obj2, obj1);
  return equalBool;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (c) {
      if (ret || !c) {
        return;
      }
      if (c.key === key) {
        ret = c;
      }
    });
  }
  return ret;
}

function mergeChildren(prev, next) {
  var ret = [];
  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  var followChildrenKey = void 0;
  prev.forEach(function (c) {
    if (!c) {
      return;
    }
    if (findChildInChildrenByKey(next, c.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[c.key] = pendingChildren;
        pendingChildren = [];
      }
      followChildrenKey = c.key;
    } else if (c.key) {
      pendingChildren.push(c);
    }
  });
  if (!followChildrenKey) {
    ret = ret.concat(pendingChildren);
  }

  next.forEach(function (c) {
    if (!c) {
      return;
    }
    if (nextChildrenPending.hasOwnProperty(c.key)) {
      ret = ret.concat(nextChildrenPending[c.key]);
    }
    ret.push(c);
    if (c.key === followChildrenKey) {
      ret = ret.concat(pendingChildren);
    }
  });

  return ret;
}

function transformArguments(arg, key, i) {
  var result = void 0;
  if (typeof arg === 'function') {
    result = arg({
      key: key,
      index: i
    });
  } else {
    result = arg;
  }
  return result;
}

function getChildrenFromProps(props) {
  return props && props.children;
}

function startConvertToEndUnit(target, style, num, unit, dataUnit, fixed, isOriginWidth) {
  var horiz = /(?:Left|Right|Width|X)/i.test(style) || isOriginWidth;
  var t = style.indexOf('border') !== -1 ? target : target.parentNode || document.body;
  t = fixed ? document.body : t;
  var pix = void 0;

  if (unit === '%') {
    pix = parseFloat(num) / 100 * (horiz ? t.clientWidth : t.clientHeight);
  } else if (unit === 'vw') {
    pix = parseFloat(num) * document.body.clientWidth / 100;
  } else if (unit === 'vh') {
    pix = parseFloat(num) * document.body.clientHeight / 100;
  } else if (unit && unit.match(/em/i)) {
    pix = parseFloat(num) * 16;
  } else {
    pix = parseFloat(num);
  }
  if (dataUnit === '%') {
    pix = pix * 100 / (horiz ? t.clientWidth : t.clientHeight);
  } else if (dataUnit === 'vw') {
    pix = parseFloat(num) / document.body.clientWidth * 100;
  } else if (dataUnit === 'vh') {
    pix = parseFloat(num) / document.body.clientHeight * 100;
  } else if (dataUnit && dataUnit.match(/em/i)) {
    pix = parseFloat(num) / 16;
  }
  return pix;
}
var domPath = void 0;
function parsePath(path) {
  if (typeof path === 'string') {
    if (path.charAt(0).match(/m/i)) {
      domPath = domPath || document.createElementNS('http://www.w3.org/2000/svg', 'path');
      domPath.setAttributeNS(null, 'd', path);
      return domPath;
    }
    return document.querySelector(path);
  } else if (path.style) {
    return path;
  }
  throw new Error('Error while parsing the path');
}

function getTransformValue(t, supports3D) {
  if (typeof t === 'string') {
    return t;
  }
  var perspective = t.perspective;
  var angle = t.rotate;
  var rotateX = t.rotateX;
  var rotateY = t.rotateY;
  var sx = t.scaleX;
  var sy = t.scaleY;
  var sz = t.scaleZ;
  var skx = t.skewX;
  var sky = t.skewY;
  var xPercent = t.xPercent || 0;
  var yPercent = t.yPercent || 0;
  var translateX = xPercent ? 0 : t.translateX;
  var translateY = yPercent ? 0 : t.translateY;
  var translateZ = t.translateZ || 0;
  var percent = xPercent || yPercent ? 'translate(' + (xPercent || translateX + 'px') + ',' + (yPercent || translateY + 'px') + ')' : '';
  var sk = skx || sky ? 'skew(' + skx + 'deg,' + sky + 'deg)' : '';
  var an = angle ? 'rotate(' + angle + 'deg)' : '';
  var ss = void 0;
  if (!perspective && !rotateX && !rotateY && !translateZ && sz === 1 || !supports3D) {
    ss = sx !== 1 || sy !== 1 ? 'scale(' + sx + ',' + sy + ')' : '';
    var translate = percent || 'translate(' + translateX + 'px,' + translateY + 'px)';
    return translate + ' ' + an + ' ' + ss + ' ' + sk;
  }
  ss = sx !== 1 || sy !== 1 || sz !== 1 ? 'scale3d(' + sx + ',' + sy + ',' + sz + ')' : '';
  var rX = rotateX ? 'rotateX(' + rotateX + 'deg)' : '';
  var rY = rotateY ? 'rotateY(' + rotateY + 'deg)' : '';
  var per = perspective ? 'perspective(' + perspective + 'px)' : '';
  var translate3d = percent ? percent + ' translate3d(0,0,' + translateZ + 'px)' : 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)';
  return per + ' ' + translate3d + ' ' + ss + ' ' + an + ' ' + rX + ' ' + rY + ' ' + sk;
}

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toFixed = toFixed;
exports.createMatrix = createMatrix;
exports.checkStyleName = checkStyleName;
exports.getGsapType = getGsapType;
exports.parseColor = parseColor;
exports.parseShadow = parseShadow;
exports.getColor = getColor;
exports.isTransform = isTransform;
exports.isConvert = isConvert;
exports.splitFilterToObject = splitFilterToObject;
exports.getMatrix = getMatrix;
exports.getTransform = getTransform;
exports.stylesToCss = stylesToCss;
exports.getUnit = getUnit;
exports.getValues = getValues;
exports.findStyleByName = findStyleByName;
exports.mergeStyle = mergeStyle;
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

var unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

var IE = function () {
  if (typeof document === 'undefined') {
    return false;
  }
  if (navigator && (navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 9.0") > 0)) {
    return true;
  }
  return false;
}();

var rnd = 100000;

var colorLookup = {
  aqua: [0, 255, 255],
  lime: [0, 255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, 255],
  navy: [0, 0, 128],
  white: [255, 255, 255],
  fuchsia: [255, 0, 255],
  olive: [128, 128, 0],
  yellow: [255, 255, 0],
  orange: [255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [255, 0, 0],
  pink: [255, 192, 203],
  cyan: [0, 255, 255],
  transparent: [255, 255, 255, 0]
};
var _hue = function _hue(hh, m1, m2) {
  var h = hh > 1 ? hh - 1 : hh;
  h = hh < 0 ? hh + 1 : h;
  var a = h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1;
  var b = h < 0.5 ? m2 : a;
  var c = h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : b;
  return c * 255 + 0.5 | 0;
};
var DEG2RAD = Math.PI / 180;
var RAD2DEG = 180 / Math.PI;

var cssList = {
  _lists: {
    transformsBase: ['translate', 'translateX', 'translateY', 'scale', 'scaleX', 'scaleY', 'skewX', 'skewY', 'rotateZ', 'rotate'],
    transforms3D: ['translate3d', 'translateZ', 'scaleZ', 'rotateX', 'rotateY', 'perspective']
  },
  transformGroup: { translate: 1, translate3d: 1, scale: 1, scale3d: 1, rotate: 1, rotate3d: 1 },
  filter: ['grayScale', 'sepia', 'hueRotate', 'invert', 'brightness', 'contrast', 'blur'],
  filterConvert: { grayScale: 'grayscale', hueRotate: 'hue-rotate' }
};
cssList._lists.transformsBase = !IE ? cssList._lists.transformsBase.concat(cssList._lists.transforms3D) : cssList._lists.transformsBase;

function toFixed(num, length) {
  var _rnd = length ? Math.pow(10, length) : rnd;
  var n = num | 0;
  var dec = num - n;
  return dec ? (dec * _rnd + (num < 0 ? -0.5 : 0.5) | 0) / _rnd + n : num;
}

function createMatrix(style) {
  return window.WebKitCSSMatrix && new window.WebKitCSSMatrix(style) || window.MozCSSMatrix && new window.MozCSSMatrix(style) || window.DOMMatrix && new window.DOMMatrix(style) || window.MsCSSMatrix && new window.MsCSSMatrix(style) || window.OCSSMatrix && new window.OCSSMatrix(style) || window.CSSMatrix && new window.CSSMatrix(style) || null;
}

function checkStyleName(p) {
  var a = ['O', 'Moz', 'ms', 'Ms', 'Webkit'];
  if (p !== 'filter' && p in document.body.style) {
    return p;
  }
  var _p = p.charAt(0).toUpperCase() + p.substr(1);
  var prefixCss = a.filter(function (key) {
    return '' + key + _p in document.body.style;
  });
  return prefixCss[0] ? '' + prefixCss[0] + _p : null;
}

function getGsapType(_p) {
  var p = _p;
  p = p === 'x' ? 'translateX' : p;
  p = p === 'y' ? 'translateY' : p;
  p = p === 'z' ? 'translateZ' : p;
  // p = p === 'r' ? 'rotate' : p;
  return p;
}

function parseColor(_v) {
  var a = void 0;
  var r = void 0;
  var g = void 0;
  var b = void 0;
  var h = void 0;
  var s = void 0;
  var l = void 0;
  var v = _v;
  var _numExp = /(?:\d|\-\d|\.\d|\-\.\d)+/g;
  if (!v) {
    a = colorLookup.black;
  } else if (typeof v === 'number') {
    a = [v >> 16, v >> 8 & 255, v & 255];
  } else {
    if (v.charAt(v.length - 1) === ',') {
      v = v.substr(0, v.length - 1);
    }
    if (colorLookup[v]) {
      a = colorLookup[v];
    } else if (v.charAt(0) === '#') {
      // is #FFF
      if (v.length === 4) {
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = '#' + r + r + g + g + b + b;
      }
      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & 255, v & 255];
    } else if (v.substr(0, 3) === 'hsl') {
      a = v.match(_numExp);
      h = Number(a[0]) % 360 / 360;
      s = Number(a[1]) / 100;
      l = Number(a[2]) / 100;
      g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
      r = l * 2 - g;
      if (a.length > 3) {
        a[3] = Number(a[3]);
      }
      a[0] = _hue(h + 1 / 3, r, g);
      a[1] = _hue(h, r, g);
      a[2] = _hue(h - 1 / 3, r, g);
    } else {
      a = v.match(_numExp) || colorLookup.transparent;
    }
    a[0] = Number(a[0]);
    a[1] = Number(a[1]);
    a[2] = Number(a[2]);

    if (a.length > 3) {
      a[3] = Number(a[3]);
    }
  }
  return a;
}

function parseShadow(v) {
  if (!v) {
    return [0, 0, 0, 0, 0, 0, 0];
  }
  var inset = void 0;
  if (v.indexOf('rgb') >= 0) {
    var t = v.match(/rgb+(?:a)?\((.*)\)/);
    var s = v.replace(t[0], '').trim().split(/\s+/);
    inset = s.indexOf('inset');
    if (inset >= 0) {
      s.splice(inset, 1);
    }
    var c = t[1].replace(/\s+/g, '').split(',');
    if (c.length === 3) {
      c.push(1);
    }
    return s.concat(c, inset >= 0 ? ['inset'] : []);
  }
  var vArr = v.split(/\s+/);
  inset = vArr.indexOf('inset');
  if (inset >= 0) {
    vArr.splice(inset, 1);
  }
  var color = parseColor(vArr[vArr.length - 1]);
  color[3] = typeof color[3] === 'number' ? color[3] : 1;
  vArr = vArr.splice(0, vArr.length - 1);
  return vArr.concat(color, inset >= 0 ? ['inset'] : []);
}

function getColor(v) {
  var rgba = v.length === 4 ? 'rgba' : 'rgb';
  var _vars = v.map(function (d, i) {
    return i < 3 ? Math.round(d) : d;
  });
  return rgba + '(' + _vars.join(',') + ')';
}

function isTransform(p) {
  return cssList._lists.transformsBase.indexOf(p) >= 0 ? 'transform' : p;
}

function isConvert(p) {
  var cssName = isTransform(p);
  return cssList.filter.indexOf(cssName) >= 0 ? 'filter' : cssName;
}

function splitFilterToObject(data) {
  if (data === 'none' || !data || data === '') {
    return null;
  }
  var filter = data.replace(' ', '').split(')').filter(function (item) {
    return item;
  });
  var startData = {};
  filter.forEach(function (item) {
    var dataArr = item.split('(');
    startData[dataArr[0]] = dataArr[1];
  });
  return startData;
}

function getMatrix(t) {
  var arr = t.match(/(?:\-|\b)[\d\-\.e]+\b/gi);
  var m = {};
  if (arr.length === 6) {
    m.m11 = parseFloat(arr[0]);
    m.m12 = parseFloat(arr[1]);
    m.m13 = 0;
    m.m14 = 0;
    m.m21 = parseFloat(arr[2]);
    m.m22 = parseFloat(arr[3]);
    m.m23 = 0;
    m.m24 = 0;
    m.m31 = 0;
    m.m32 = 0;
    m.m33 = 1;
    m.m34 = 0;
    m.m41 = parseFloat(arr[4]);
    m.m42 = parseFloat(arr[5]);
    m.m43 = 0;
    m.m44 = 0;
  } else {
    arr.forEach(function (item, i) {
      var ii = i % 4 + 1;
      var j = Math.floor(i / 4) + 1;
      m['m' + j + ii] = parseFloat(item);
    });
  }
  return m;
}

function getTransform(transform) {
  var _transform = transform === 'none' || transform === '' ? 'matrix(1, 0, 0, 1, 0, 0)' : transform;
  var m = getMatrix(_transform);
  var m11 = m.m11;
  var m12 = m.m12;
  var m13 = m.m13;
  var m14 = m.m14;
  var m21 = m.m21;
  var m22 = m.m22;
  var m23 = m.m23;
  var m24 = m.m24;
  var m31 = m.m31;
  var m32 = m.m32;
  var m33 = m.m33;
  var m34 = m.m34;
  var m43 = m.m43;
  var t1 = void 0;
  var t2 = void 0;
  var t3 = void 0;
  var tm = {};
  tm.perspective = m34 ? toFixed(m33 / (m34 < 0 ? -m34 : m34)) : 0;
  tm.rotateX = toFixed(Math.asin(m23) * RAD2DEG);
  var angle = tm.rotateX * DEG2RAD;
  var skewX = Math.tan(m21);
  var skewY = Math.tan(m12);
  var cos = m34 * tm.perspective;
  var sin = void 0;
  // rotateX
  if (angle) {
    cos = Math.cos(-angle);
    sin = Math.sin(-angle);
    t1 = m21 * cos + m31 * sin;
    t2 = m22 * cos + m32 * sin;
    t3 = m23 * cos + m33 * sin;
    m31 = m21 * -sin + m31 * cos;
    m32 = m22 * -sin + m32 * cos;
    m33 = m23 * -sin + m33 * cos;
    m34 = m24 * -sin + m34 * cos;
    m21 = t1;
    m22 = t2;
    m23 = t3;
  }
  // rotateY
  angle = Math.atan2(m31, m33);
  tm.rotateY = toFixed(angle * RAD2DEG);
  if (angle) {
    cos = Math.cos(-angle);
    sin = Math.sin(-angle);
    t1 = m11 * cos - m31 * sin;
    t2 = m12 * cos - m32 * sin;
    t3 = m13 * cos - m33 * sin;
    m32 = m12 * sin + m32 * cos;
    m33 = m13 * sin + m33 * cos;
    m34 = m14 * sin + m34 * cos;
    m11 = t1;
    m12 = t2;
    m13 = t3;
  }
  // rotateZ
  angle = Math.atan2(m12, m11);
  tm.rotate = toFixed(angle * RAD2DEG);
  if (angle) {
    cos = Math.cos(-angle);
    sin = Math.sin(-angle);
    m11 = m11 * cos + m21 * sin;
    t2 = m12 * cos + m22 * sin;
    m22 = m12 * -sin + m22 * cos;
    m23 = m13 * -sin + m23 * cos;
    m12 = t2;
  }

  if (tm.rotateX && Math.abs(tm.rotateX) + Math.abs(tm.rotate) > 359.9) {
    tm.rotateX = tm.rotate = 0;
    tm.rotateY += 180;
  }
  tm.scaleX = toFixed(Math.sqrt(m11 * m11 + m12 * m12));
  tm.scaleY = toFixed(Math.sqrt(m22 * m22 + m32 * m32));
  tm.scaleZ = toFixed(Math.sqrt(m23 * m23 + m33 * m33));
  // 不管 skewX skewY了；
  tm.skewX = skewX === -skewY ? 0 : skewX;
  tm.skewY = skewY === -skewX ? 0 : skewY;
  tm.perspective = m34 ? 1 / (m34 < 0 ? -m34 : m34) : 0;
  tm.translateX = m.m41;
  tm.translateY = m.m42;
  tm.translateZ = m43;
  return tm;
}

function stylesToCss(key, value) {
  var _value = void 0;
  if (!isUnitlessNumber[key] && typeof value === 'number') {
    _value = ' ' + value + 'px';
  } else if (key === 'content' && !unquotedContentValueRegex.test(value)) {
    _value = '\'' + value.replace(/'/g, "\\'") + '\'';
  }
  return _value || value;
}

function getUnit(p, v) {
  var currentUnit = v && v.toString().replace(/[^a-z|%]/ig, '');
  var unit = '';
  if (p.indexOf('translate') >= 0 || p.indexOf('perspective') >= 0 || p.indexOf('blur') >= 0) {
    unit = 'px';
  } else if (p.indexOf('skew') >= 0 || p.indexOf('rotate') >= 0) {
    unit = 'deg';
  }
  return currentUnit || unit;
}

function getValues(p, d, u) {
  return p + '(' + d + (u || '') + ')';
}

function findStyleByName(cssArray, name) {
  var ret = null;
  if (cssArray) {
    cssArray.forEach(function (_cname) {
      if (ret) {
        return;
      }
      var cName = _cname.split('(')[0];
      var a = cName in cssList.transformGroup && name.substring(0, name.length - 1).indexOf(cName) >= 0;
      var b = name in cssList.transformGroup && cName.substring(0, cName.length - 1).indexOf(name) >= 0;
      var c = cName in cssList.transformGroup && name in cssList.transformGroup && (cName.substring(0, cName.length - 2) === name || name.substring(0, name.length - 2) === cName);
      if (cName === name || a || b || c) {
        ret = _cname;
      }
    });
  }
  return ret;
}

function mergeStyle(current, change) {
  if (!current || current === '') {
    return change;
  }
  if (!change || change === '') {
    return current;
  }
  var _current = current.replace(/\s/g, '').split(')').filter(function (item) {
    return item !== '' && item;
  }).map(function (item) {
    return item + ')';
  });
  var _change = change.replace(/\s/g, '').split(')').filter(function (item) {
    return item !== '' && item;
  });
  _change.forEach(function (changeOnly) {
    var changeArr = changeOnly.split('(');
    var changeName = changeArr[0];
    var currentSame = findStyleByName(_current, changeName);
    if (!currentSame) {
      _current.push(changeOnly + ')');
    } else {
      var index = _current.indexOf(currentSame);
      _current[index] = changeOnly + ')';
    }
  });
  _current.forEach(function (item, i) {
    if (item.indexOf('perspective') >= 0 && i) {
      _current.splice(i, 1);
      _current.unshift(item);
    }
  });
  return _current.join(' ').trim();
}

exports.default = cssList;


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable func-names */
var Plugins = function Plugins() {};
var p = Plugins.prototype;
p.push = function (plugin) {
  this[plugin.prototype.name] = plugin;
};
exports["default"] = new Plugins();
module.exports = exports['default'];

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _util = __webpack_require__(379);

var _styleUtils = __webpack_require__(380);

var _TimeLine = __webpack_require__(393);

var _TimeLine2 = _interopRequireDefault(_TimeLine);

var _ticker = __webpack_require__(384);

var _ticker2 = _interopRequireDefault(_ticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

var perFrame = Math.round(1000 / 60);

var TweenOne = function (_Component) {
  (0, _inherits3["default"])(TweenOne, _Component);

  function TweenOne() {
    (0, _classCallCheck3["default"])(this, TweenOne);

    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));

    _this.restart = function () {
      _this.startMoment = _this.timeLine.progressTime;
      _this.startFrame = _ticker2["default"].frame;
      _this.play();
    };

    _this.start = function () {
      _this.updateAnim = null;
      var props = _this.props;
      if (props.animation && Object.keys(props.animation).length) {
        _this.timeLine = new _TimeLine2["default"](_this.dom, (0, _util.dataToArray)(props.animation), { attr: props.attr, willChange: props.willChange });
        // 预先注册 raf, 初始动画数值。
        _this.raf();
        // 开始动画
        _this.play();
      }
    };

    _this.play = function () {
      _this.cancelRequestAnimationFrame();
      if (_this.paused) {
        return;
      }
      _this.rafID = _ticker2["default"].add(_this.raf);
    };

    _this.updateAnimFunc = function () {
      _this.cancelRequestAnimationFrame();
      _this.startFrame = _ticker2["default"].frame;
      if (_this.updateAnim === 'update') {
        if (_this.props.resetStyleBool && _this.timeLine) {
          _this.timeLine.resetDefaultStyle();
        }
        _this.startMoment = 0;
      }
    };

    _this.frame = function () {
      var moment = (_ticker2["default"].frame - _this.startFrame) * perFrame + _this.startMoment;
      if (_this.reverse) {
        moment = (_this.startMoment || 0) - (_ticker2["default"].frame - _this.startFrame) * perFrame;
      }
      moment = moment > _this.timeLine.totalTime ? _this.timeLine.totalTime : moment;
      moment = moment <= 0 ? 0 : moment;
      if (moment < _this.moment && !_this.reverse) {
        _this.timeLine.resetDefaultStyle();
      }
      _this.moment = moment;
      _this.timeLine.onChange = _this.onChange;
      _this.timeLine.frame(moment);
    };

    _this.raf = function () {
      _this.frame();
      if (_this.updateAnim) {
        if (_this.updateStartStyle) {
          _this.timeLine.reStart(_this.props.style);
        }
        _this.updateAnimFunc();
        _this.start();
      }
      if (_this.moment >= _this.timeLine.totalTime && !_this.reverse || _this.paused || _this.reverse && _this.moment === 0) {
        return _this.cancelRequestAnimationFrame();
      }
    };

    _this.cancelRequestAnimationFrame = function () {
      _ticker2["default"].clear(_this.rafID);
      _this.rafID = -1;
    };

    _this.rafID = -1;
    _this.moment = _this.props.moment || 0;
    _this.startMoment = _this.props.moment || 0;
    _this.startFrame = _ticker2["default"].frame;
    _this.paused = _this.props.paused;
    _this.reverse = _this.props.reverse;
    _this.onChange = _this.props.onChange;
    _this.newMomentAnim = false;
    _this.updateAnim = null;
    return _this;
  }

  TweenOne.prototype.componentDidMount = function componentDidMount() {
    this.dom = _reactDom2["default"].findDOMNode(this);
    this.start();
  };

  TweenOne.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (nextProps.resetStyleBool && this.timeLine && this.rafID === -1) {
      this.timeLine.resetDefaultStyle();
    }
    this.onChange = nextProps.onChange;
    // 跳帧事件 moment;
    var newMoment = nextProps.moment;
    this.newMomentAnim = false;
    if (typeof newMoment === 'number' && newMoment !== this.moment) {
      this.startMoment = newMoment;
      this.startFrame = _ticker2["default"].frame;
      if (this.rafID === -1 && !nextProps.paused) {
        this.timeLine.resetAnimData();
        var style = nextProps.style;
        this.dom.setAttribute('style', '');
        Object.keys(style).forEach(function (key) {
          _this2.dom.style[key] = (0, _styleUtils.stylesToCss)(key, style[key]);
        });
        this.play();
      } else {
        this.newMomentAnim = true;
      }
    }
    // 动画处理
    var newAnimation = nextProps.animation;
    var currentAnimation = this.props.animation;
    var equal = (0, _util.objectEqual)(currentAnimation, newAnimation);
    var styleEqual = (0, _util.objectEqual)(this.props.style, nextProps.style);
    // 如果 animation 不同， 在下一帧重新动画
    if (!equal) {
      if (this.rafID !== -1) {
        this.updateAnim = 'update';
      } else if (nextProps.updateReStart) {
        this.startFrame = _ticker2["default"].frame;
        this.updateAnim = 'start';
      }
      // 只做动画，不做回调处理。。。
      if (this.timeLine) {
        this.timeLine.updateAnim = this.updateAnim;
      }
    }

    if (!styleEqual) {
      // 在动画时更改了 style, 作为更改开始数值。
      if (this.rafID !== -1) {
        this.updateStartStyle = true;
      }
    }

    // 暂停倒放
    if (this.paused !== nextProps.paused || this.reverse !== nextProps.reverse) {
      this.paused = nextProps.paused;
      this.reverse = nextProps.reverse;
      if (this.paused) {
        this.cancelRequestAnimationFrame();
      } else {
        if (this.reverse && nextProps.reverseDelay) {
          this.cancelRequestAnimationFrame();
          _ticker2["default"].timeout(this.restart, nextProps.reverseDelay);
        } else {
          this.restart();
        }
      }
    }
  };

  TweenOne.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.updateStartStyle && !this.updateAnim) {
      this.timeLine.reStart(this.props.style);
      this.updateStartStyle = false;
    }

    if (this.newMomentAnim) {
      this.raf();
    }

    // 样式更新了后再执行动画；
    if (this.updateAnim === 'start') {
      this.start();
    }
  };

  TweenOne.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cancelRequestAnimationFrame();
  };

  TweenOne.prototype.render = function render() {
    var props = (0, _extends3["default"])({}, this.props);
    ['animation', 'component', 'componentReplace', 'reverseDelay', 'attr', 'paused', 'reverse', 'moment', 'resetStyleBool', 'updateReStart', 'willChange'].forEach(function (key) {
      return delete props[key];
    });
    props.style = (0, _extends3["default"])({}, this.props.style);
    Object.keys(props.style).forEach(function (p) {
      if (p.match(/filter/i)) {
        ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
          return props.style[prefix + 'Filter'] = props.style[p];
        });
      }
    });
    // 子级是组件，生成组件需要替换的 component;
    props.component = typeof props.component === 'function' ? this.props.componentReplace : props.component;
    if (!props.component) {
      delete props.component;
    }
    // component 为空时调用子级的。。
    if (!this.props.component) {
      var childrenProps = this.props.children.props;
      var style = childrenProps.style,
          className = childrenProps.className;
      // 合并 style 与 className。

      var newStyle = (0, _extends3["default"])({}, style, props.style);
      var newClassName = props.className ? props.className + ' ' + className : className;
      return _react2["default"].cloneElement(this.props.children, { style: newStyle, className: newClassName });
    }
    return _react2["default"].createElement(this.props.component, props);
  };

  return TweenOne;
}(_react.Component);

var objectOrArray = _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].array]);

TweenOne.propTypes = {
  component: _propTypes2["default"].any,
  componentReplace: _propTypes2["default"].string,
  animation: objectOrArray,
  children: _propTypes2["default"].any,
  style: _propTypes2["default"].object,
  paused: _propTypes2["default"].bool,
  reverse: _propTypes2["default"].bool,
  reverseDelay: _propTypes2["default"].number,
  moment: _propTypes2["default"].number,
  attr: _propTypes2["default"].string,
  willChange: _propTypes2["default"].bool,
  onChange: _propTypes2["default"].func,
  resetStyleBool: _propTypes2["default"].bool,
  updateReStart: _propTypes2["default"].bool
};

TweenOne.defaultProps = {
  component: 'div',
  reverseDelay: 0,
  attr: 'style',
  onChange: noop,
  willChange: true,
  updateReStart: true
};
exports["default"] = TweenOne;
module.exports = exports['default'];

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tweenFunctions = __webpack_require__(392);

var _tweenFunctions2 = _interopRequireDefault(_tweenFunctions);

var _util = __webpack_require__(379);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_tweenFunctions2["default"].path = function (_path, _param) {
  var param = _param || {};
  var pathNode = (0, _util.parsePath)(_path);
  var pathLength = pathNode.getTotalLength();
  var rect = param.rect || 100; // path 的大小，100 * 100，
  var lengthPixel = param.lengthPixel || 200; // 线上取点像素，默认分为 200 段。。
  var points = [];
  for (var i = 0; i < lengthPixel; i++) {
    points.push(pathNode.getPointAtLength(pathLength / lengthPixel * i));
  }
  return function path(t, b, _c, d) {
    var p = _tweenFunctions2["default"].linear(t, b, _c, d);
    var timePointX = rect * p; // X 轴的百分比;
    // 取出 x 轴百分比上的点;
    var point = points.filter(function (item) {
      return item.x >= timePointX;
    })[0] || pathNode.getPointAtLength(p * pathLength);
    return 1 - point.y / rect;
  };
};

exports["default"] = _tweenFunctions2["default"];
module.exports = exports['default'];

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _raf = __webpack_require__(402);

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getTime = Date.now || function () {
  return new Date().getTime();
}; /* eslint-disable func-names */

var Ticker = function Ticker() {};

var p = Ticker.prototype = {
  tickFnArray: [],
  tickKeyObject: {},
  id: -1,
  tweenId: 0,
  frame: 0,
  perFrame: Math.round(1000 / 60),
  elapsed: 0,
  lastUpdate: getTime()
};
p.add = function (fn) {
  var key = 'TweenOneTicker' + this.tweenId;
  this.tweenId++;
  this.wake(key, fn);
  return key;
};
p.wake = function (key, fn) {
  var _this = this;

  this.tickKeyObject[key] = fn;
  this.tickFnArray = Object.keys(this.tickKeyObject).map(function (k) {
    return _this.tickKeyObject[k];
  });
  if (this.id === -1) {
    this.id = (0, _raf2["default"])(this.tick);
  }
};
p.clear = function (key) {
  var _this2 = this;

  delete this.tickKeyObject[key];
  this.tickFnArray = Object.keys(this.tickKeyObject).map(function (k) {
    return _this2.tickKeyObject[k];
  });
};
p.sleep = function () {
  _raf2["default"].cancel(this.id);
  this.id = -1;
  this.frame = 0;
};
var ticker = new Ticker();
p.tick = function (a) {
  ticker.elapsed = getTime() - ticker.lastUpdate;
  ticker.lastUpdate += ticker.elapsed;
  ticker.tickFnArray.forEach(function (func) {
    return func(a);
  });
  // 如果 object 里没对象了，自动杀掉；
  if (!ticker.tickFnArray.length) {
    ticker.sleep();
    return;
  }
  if (!ticker.frame) {
    ticker.frame++;
  } else {
    ticker.frame += Math.round(ticker.elapsed / ticker.perFrame);
  }
  ticker.id = (0, _raf2["default"])(ticker.tick);
};
var timeoutIdNumber = 0;
p.timeout = function (fn, time) {
  var _this3 = this;

  if (!(typeof fn === 'function')) {
    return console.warn('not function'); // eslint-disable-line
  }
  var timeoutID = 'timeout' + Date.now() + '-' + timeoutIdNumber;
  var startFrame = this.frame;
  this.wake(timeoutID, function () {
    var moment = (_this3.frame - startFrame) * _this3.perFrame;
    if (moment >= (time || 0)) {
      _this3.clear(timeoutID);
      fn();
    }
  });
  timeoutIdNumber++;
  return timeoutID;
};
var intervalIdNumber = 0;
p.interval = function (fn, time) {
  var _this4 = this;

  if (!(typeof fn === 'function')) {
    console.warn('not function'); // eslint-disable-line
    return null;
  }
  var intervalID = 'interval' + Date.now() + '-' + intervalIdNumber;
  var starFrame = this.frame;
  this.wake(intervalID, function () {
    var moment = (_this4.frame - starFrame) * _this4.perFrame;
    if (moment >= (time || 0)) {
      starFrame = _this4.frame;
      fn();
    }
  });
  intervalIdNumber++;
  return intervalID;
};
exports["default"] = ticker;
module.exports = exports['default'];

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _QueueAnim = __webpack_require__(389);

var _QueueAnim2 = _interopRequireDefault(_QueueAnim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_QueueAnim2["default"].isQueueAnim = true; // export this package's api
exports["default"] = _QueueAnim2["default"];
module.exports = exports['default'];

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(366)();
// imports


// module
exports.push([module.i, ".btn_div{\r\n    text-align: right;\r\n    display: inline-block;\r\n}\r\n.btn_div .ok{\r\n    margin: 0 5px;\r\n    padding: 0 8px;\r\n}\r\n.btn_div .cancel{\r\n    padding: 0 8px;\r\n}\r\n.ant-popover-inner-content .ant-form-horizontal{\r\n    display: inline-block;\r\n    width: 150px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(21);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toConsumableArray2 = __webpack_require__(22);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcTweenOne = __webpack_require__(395);

var _rcTweenOne2 = _interopRequireDefault(_rcTweenOne);

var _utils = __webpack_require__(391);

var _animTypes = __webpack_require__(390);

var _animTypes2 = _interopRequireDefault(_animTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var noop = function noop() {};

var QueueAnim = function (_React$Component) {
  (0, _inherits3["default"])(QueueAnim, _React$Component);

  function QueueAnim() {
    (0, _classCallCheck3["default"])(this, QueueAnim);

    var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

    _initialiseProps.call(_this);

    _this.isEnterKey = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];
    // 记录转换成 TweenOne 组件。
    _this.saveTweenTag = {};
    _this.keysToEnterPaused = {};
    _this.placeholderTimeoutIds = {};

    // 第一次进入，默认进场
    var children = (0, _utils.toArrayChildren)((0, _utils.getChildrenFromProps)(_this.props));
    var childrenShow = {};
    children.forEach(function (child) {
      if (!child || !child.key) {
        return;
      }
      if (_this.props.appear) {
        _this.keysToEnter.push(child.key);
      } else {
        childrenShow[child.key] = true;
      }
    });
    _this.keysToEnterToCallback = [].concat((0, _toConsumableArray3["default"])(_this.keysToEnter));
    _this.originalChildren = (0, _utils.toArrayChildren)((0, _utils.getChildrenFromProps)(_this.props));
    _this.state = {
      children: children,
      childrenShow: childrenShow
    };
    return _this;
  }

  QueueAnim.prototype.componentDidMount = function componentDidMount() {
    if (this.props.appear) {
      this.componentDidUpdate();
    }
  };

  QueueAnim.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var nextChildren = (0, _utils.toArrayChildren)(nextProps.children);
    var currentChildren = this.originalChildren;
    var newChildren = (0, _utils.mergeChildren)(currentChildren, nextChildren);

    var childrenShow = !newChildren.length ? {} : this.state.childrenShow;
    this.keysToEnterPaused = {};
    // 在出场没结束时，childrenShow 里的值将不会清除。再触发进场时， childrenShow 里的值是保留着的, 设置了 enterForcedRePlay 将重新播放进场。
    this.keysToLeave.forEach(function (key) {
      // 将所有在出场里的停止掉。避免间隔性出现
      // 进场是用的间隔性进入，这里不做 stop 处理将会在这间隔里继续出场的动画。。
      _this2.keysToEnterPaused[key] = true;
      if (nextProps.enterForcedRePlay) {
        // 清掉所有出场的。
        delete childrenShow[key];
      }
    });

    this.keysToEnter = [];
    this.keysToLeave = [];

    // need render to avoid update
    this.setState({
      childrenShow: childrenShow,
      children: newChildren
    });

    nextChildren.forEach(function (c) {
      if (!c) {
        return;
      }
      var key = c.key;
      var hasPrev = (0, _utils.findChildInChildrenByKey)(currentChildren, key);
      if (!hasPrev && key) {
        _this2.keysToEnter.push(key);
      }
      // 如果当前 key 已存在 saveTweenTag 里，，刷新 child;
      if (_this2.saveTweenTag[key]) {
        _this2.saveTweenTag[key] = _react2["default"].cloneElement(_this2.saveTweenTag[key], {}, c);
      }
    });

    currentChildren.forEach(function (c) {
      if (!c) {
        return;
      }
      var key = c.key;
      var hasNext = (0, _utils.findChildInChildrenByKey)(nextChildren, key);
      if (!hasNext && key) {
        // 出场时删出动画标签，render 时重新生成。
        delete _this2.saveTweenTag[key];
        _this2.keysToLeave.push(key);
      }
    });
    this.keysToEnterToCallback = [].concat((0, _toConsumableArray3["default"])(this.keysToEnter));
  };

  QueueAnim.prototype.componentDidUpdate = function componentDidUpdate() {
    this.originalChildren = (0, _utils.toArrayChildren)((0, _utils.getChildrenFromProps)(this.props));
    var keysToEnter = [].concat((0, _toConsumableArray3["default"])(this.keysToEnter));
    var keysToLeave = [].concat((0, _toConsumableArray3["default"])(this.keysToLeave));
    keysToEnter.forEach(this.performEnter);
    keysToLeave.forEach(this.performLeave);
  };

  QueueAnim.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    Object.keys(this.placeholderTimeoutIds).forEach(function (key) {
      _rcTweenOne.ticker.clear(_this3.placeholderTimeoutIds[key]);
    });
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  QueueAnim.prototype.getTweenType = function getTweenType(type, num) {
    var data = _animTypes2["default"][type];
    return this.getTweenAnimConfig(data, num);
  };

  QueueAnim.prototype.getTweenAnimConfig = function getTweenAnimConfig(data, num) {
    var obj = {};
    Object.keys(data).forEach(function (key) {
      obj[key] = data[key][num];
    });
    return obj;
  };

  QueueAnim.prototype.render = function render() {
    var tagProps = (0, _objectWithoutProperties3["default"])(this.props, []);

    ['component', 'interval', 'duration', 'delay', 'type', 'animConfig', 'ease', 'leaveReverse', 'animatingClassName', 'enterForcedRePlay', 'onEnd', 'appear'].forEach(function (key) {
      return delete tagProps[key];
    });
    var childrenToRender = (0, _utils.toArrayChildren)(this.state.children).map(this.getChildrenToRender);
    return (0, _react.createElement)(this.props.component, (0, _extends3["default"])({}, tagProps), childrenToRender);
  };

  return QueueAnim;
}(_react2["default"].Component);

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.getTweenEnterData = function (key, i) {
    var props = _this4.props;
    var startAnim = _this4.getAnimData(props, key, i, 0, 1);
    var enterAnim = _this4.getAnimData(props, key, i, 0, 0);
    startAnim = props.enterForcedRePlay || !_this4.isEnterKey[key] ? startAnim : {};
    var ease = (0, _utils.transformArguments)(props.ease, key, i)[0];
    var duration = (0, _utils.transformArguments)(props.duration, key, i)[0];
    if (Array.isArray(ease)) {
      ease = ease.map(function (num) {
        return num * 100;
      });
      ease = _rcTweenOne2["default"].easing.path('M0,100C' + ease[0] + ',' + (100 - ease[1]) + ',' + ease[2] + ',' + (100 - ease[3]) + ',100,0', { lengthPixel: duration / 16.6667 });
    }

    return [(0, _extends3["default"])({ duration: 0 }, startAnim), (0, _extends3["default"])({
      onStart: _this4.enterBegin.bind(_this4, key),
      onComplete: _this4.enterComplete.bind(_this4, key),
      duration: duration,
      ease: ease
    }, enterAnim)];
  };

  this.getTweenLeaveData = function (key, i) {
    var props = _this4.props;
    var startAnim = _this4.getAnimData(props, key, i, 1, 0);
    var leaveAnim = _this4.getAnimData(props, key, i, 1, 1);
    startAnim = props.enterForcedRePlay || !_this4.isEnterKey[key] ? startAnim : {};
    var interval = (0, _utils.transformArguments)(props.interval, key, i)[1];
    var delay = (0, _utils.transformArguments)(props.delay, key, i)[1];
    var order = props.leaveReverse ? _this4.keysToLeave.length - i - 1 : i;
    var ease = (0, _utils.transformArguments)(props.ease, key, i)[0];
    var duration = (0, _utils.transformArguments)(props.duration, key, i)[0];
    if (Array.isArray(ease)) {
      ease = ease.map(function (num) {
        return num * 100;
      });
      ease = _rcTweenOne2["default"].easing.path('M0,100C' + ease[0] + ',' + (100 - ease[1]) + ',' + ease[2] + ',' + (100 - ease[3]) + ',100,0', { lengthPixel: duration / 16.6667 });
    }
    return [(0, _extends3["default"])({ duration: 0 }, startAnim), (0, _extends3["default"])({
      onStart: _this4.leaveBegin.bind(_this4, key),
      onComplete: _this4.leaveComplete.bind(_this4, key),
      duration: (0, _utils.transformArguments)(props.duration, key, i)[0],
      ease: ease,
      delay: interval * order + delay
    }, leaveAnim)];
  };

  this.getAnimData = function (props, key, i, enterOrLeave, startOrEnd) {
    /*
     * transformArguments 第一个为 enter, 第二个为 leave；
     * getTweenAnimConfig or getTweenType 第一个为到达的位置， 第二个为开始的位置。
     * 用 tween-one 的数组来实现老的动画逻辑。。。
     */
    return props.animConfig ? _this4.getTweenAnimConfig((0, _utils.transformArguments)(props.animConfig, key, i)[enterOrLeave], startOrEnd) : _this4.getTweenType((0, _utils.transformArguments)(props.type, key, i)[enterOrLeave], startOrEnd);
  };

  this.getChildrenToRender = function (child) {
    if (!child || !child.key) {
      return child;
    }
    var key = child.key;
    if (_this4.keysToLeave.indexOf(key) >= 0 && _this4.state.childrenShow[key] || _this4.state.childrenShow[key]) {
      var animation = _this4.keysToLeave.indexOf(key) >= 0 ? _this4.getTweenLeaveData(key, _this4.keysToLeave.indexOf(key)) : _this4.keysToEnterToCallback.indexOf(key) >= 0 && _this4.getTweenEnterData(key, _this4.keysToEnterToCallback.indexOf(key)) || null;
      var props = {
        key: key,
        component: null,
        animation: animation
      };
      if (!_this4.saveTweenTag[key]) {
        _this4.saveTweenTag[key] = (0, _react.createElement)(_rcTweenOne2["default"], props, child);
      } else {
        _this4.saveTweenTag[key] = (0, _react.cloneElement)(_this4.saveTweenTag[key], props);
      }
      if (_this4.keysToEnterPaused[key] && !(_this4.keysToLeave.indexOf(key) >= 0 && _this4.state.childrenShow[key])) {
        return (0, _react.cloneElement)(_this4.saveTweenTag[key], { paused: true });
      }
      return _this4.saveTweenTag[key];
    }
    return null;
  };

  this.performEnter = function (key, i) {
    var interval = (0, _utils.transformArguments)(_this4.props.interval, key, i)[0];
    var delay = (0, _utils.transformArguments)(_this4.props.delay, key, i)[0];
    _this4.placeholderTimeoutIds[key] = _rcTweenOne.ticker.timeout(_this4.performEnterBegin.bind(_this4, key), interval * i + delay);
    if (_this4.keysToEnter.indexOf(key) >= 0) {
      _this4.keysToEnter.splice(_this4.keysToEnter.indexOf(key), 1);
    }
  };

  this.performEnterBegin = function (key) {
    var childrenShow = _this4.state.childrenShow;
    childrenShow[key] = true;
    delete _this4.keysToEnterPaused[key];
    _this4.setState({ childrenShow: childrenShow });
  };

  this.performLeave = function (key) {
    _rcTweenOne.ticker.clear(_this4.placeholderTimeoutIds[key]);
    delete _this4.placeholderTimeoutIds[key];
  };

  this.enterBegin = function (key, e) {
    var elem = e.target;
    var animatingClassName = _this4.props.animatingClassName;
    elem.className = elem.className.replace(animatingClassName[1], '');
    if (elem.className.indexOf(animatingClassName[0]) === -1) {
      elem.className += '' + (elem.className ? ' ' : '') + animatingClassName[0];
    }
    _this4.isEnterKey[key] = true;
  };

  this.enterComplete = function (key, e) {
    if (_this4.keysToEnterPaused[key]) {
      return;
    }
    var elem = e.target;
    elem.className = elem.className.replace(_this4.props.animatingClassName[0], '').trim();
    _this4.props.onEnd({ key: key, type: 'enter' });
  };

  this.leaveBegin = function (key, e) {
    var elem = e.target;
    var animatingClassName = _this4.props.animatingClassName;
    elem.className = elem.className.replace(animatingClassName[0], '');
    if (elem.className.indexOf(animatingClassName[1]) === -1) {
      elem.className += ' ' + animatingClassName[1];
    }
  };

  this.leaveComplete = function (key, e) {
    // 切换时同时触发 onComplete。 手动跳出。。。
    if (_this4.keysToEnterToCallback.indexOf(key) >= 0) {
      return;
    }
    var childrenShow = _this4.state.childrenShow;
    delete childrenShow[key];
    if (_this4.keysToLeave.indexOf(key) >= 0) {
      _this4.keysToLeave.splice(_this4.keysToLeave.indexOf(key), 1);
      delete _this4.saveTweenTag[key];
      delete _this4.isEnterKey[key];
    }
    var needLeave = _this4.keysToLeave.some(function (c) {
      return childrenShow[c];
    });
    if (!needLeave) {
      var currentChildren = (0, _utils.toArrayChildren)((0, _utils.getChildrenFromProps)(_this4.props));
      _this4.setState({
        children: currentChildren,
        childrenShow: childrenShow
      });
    }
    var elem = e.target;
    elem.className = elem.className.replace(_this4.props.animatingClassName[1], '').trim();
    _this4.props.onEnd({ key: key, type: 'leave' });
  };
};

QueueAnim.propTypes = {
  component: _propTypes2["default"].any,
  interval: _propTypes2["default"].any,
  duration: _propTypes2["default"].any,
  delay: _propTypes2["default"].any,
  type: _propTypes2["default"].any,
  animConfig: _propTypes2["default"].any,
  ease: _propTypes2["default"].any,
  leaveReverse: _propTypes2["default"].bool,
  enterForcedRePlay: _propTypes2["default"].bool,
  animatingClassName: _propTypes2["default"].array,
  onEnd: _propTypes2["default"].func,
  appear: _propTypes2["default"].bool
};

QueueAnim.defaultProps = {
  component: 'div',
  interval: 100,
  duration: 450,
  delay: 0,
  type: 'right',
  animConfig: null,
  ease: 'easeOutQuart',
  leaveReverse: false,
  enterForcedRePlay: false,
  animatingClassName: ['queue-anim-entering', 'queue-anim-leaving'],
  onEnd: noop,
  appear: true
};

exports["default"] = QueueAnim;
module.exports = exports['default'];

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  left: {
    opacity: [1, 0],
    translateX: [0, -30]
  },
  top: {
    opacity: [1, 0],
    translateY: [0, -30]
  },
  right: {
    opacity: [1, 0],
    translateX: [0, 30]
  },
  bottom: {
    opacity: [1, 0],
    translateY: [0, 30]
  },
  alpha: {
    opacity: [1, 0]
  },
  scale: {
    opacity: [1, 0],
    scale: [1, 0]
  },
  scaleBig: {
    opacity: [1, 0],
    scale: [1, 2]
  },
  scaleX: {
    opacity: [1, 0],
    scaleX: [1, 0]
  },
  scaleY: {
    opacity: [1, 0],
    scaleY: [1, 0]
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArrayChildren = toArrayChildren;
exports.findChildInChildrenByKey = findChildInChildrenByKey;
exports.mergeChildren = mergeChildren;
exports.transformArguments = transformArguments;
exports.getChildrenFromProps = getChildrenFromProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function toArrayChildren(children) {
  var ret = [];
  _react2["default"].Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (c) {
      if (ret || !c) {
        return;
      }
      if (c.key === key) {
        ret = c;
      }
    });
  }
  return ret;
}

function mergeChildren(prev, next) {
  var ret = [];
  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  var followChildrenKey = void 0;
  prev.forEach(function (c) {
    if (!c) {
      return;
    }
    if (findChildInChildrenByKey(next, c.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[c.key] = pendingChildren;
        pendingChildren = [];
      }
      followChildrenKey = c.key;
    } else if (c.key) {
      pendingChildren.push(c);
    }
  });
  if (!followChildrenKey) {
    ret = ret.concat(pendingChildren);
  }
  next.forEach(function (c) {
    if (!c) {
      return;
    }
    if (nextChildrenPending.hasOwnProperty(c.key)) {
      ret = ret.concat(nextChildrenPending[c.key]);
    }
    ret.push(c);
    if (c.key === followChildrenKey) {
      ret = ret.concat(pendingChildren);
    }
  });

  return ret;
}

function transformArguments(arg, key, i) {
  var result = void 0;
  if (typeof arg === 'function') {
    result = arg({
      key: key,
      index: i
    });
  } else {
    result = arg;
  }
  if (Array.isArray(result) && result.length === 2) {
    return result;
  }
  return [result, result];
}

function getChildrenFromProps(props) {
  return props && props.children;
}

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// t: current time, b: beginning value, _c: final value, d: total duration
var tweenFunctions = {
  linear: function(t, b, _c, d) {
    var c = _c - b;
    return c * t / d + b;
  },
  easeInQuad: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function(t, b, _c, d) {
    var c = _c - b;
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    } else {
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
  },
  easeInCubic: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function(t, b, _c, d) {
    var c = _c - b;
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
  },
  easeInQuart: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function(t, b, _c, d) {
    var c = _c - b;
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t + b;
    } else {
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
  },
  easeInQuint: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function(t, b, _c, d) {
    var c = _c - b;
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
  },
  easeInSine: function(t, b, _c, d) {
    var c = _c - b;
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function(t, b, _c, d) {
    var c = _c - b;
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function(t, b, _c, d) {
    var c = _c - b;
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function(t, b, _c, d) {
    var c = _c - b;
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function(t, b, _c, d) {
    var c = _c - b;
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function(t, b, _c, d) {
    var c = _c - b;
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    } else {
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  },
  easeInCirc: function(t, b, _c, d) {
    var c = _c - b;
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function(t, b, _c, d) {
    var c = _c - b;
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    } else {
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
  },
  easeInElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      return b;
    } else if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      return b;
    } else if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      return b;
    } else if ((t /= d / 2) === 2) {
      return b + c;
    }
    if (!p) {
      p = d * (0.3 * 1.5);
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    } else {
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    }
  },
  easeInBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    } else {
      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    }
  },
  easeInBounce: function(t, b, _c, d) {
    var c = _c - b;
    var v;
    v = tweenFunctions.easeOutBounce(d - t, 0, c, d);
    return c - v + b;
  },
  easeOutBounce: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  },
  easeInOutBounce: function(t, b, _c, d) {
    var c = _c - b;
    var v;
    if (t < d / 2) {
      v = tweenFunctions.easeInBounce(t * 2, 0, c, d);
      return v * 0.5 + b;
    } else {
      v = tweenFunctions.easeOutBounce(t * 2 - d, 0, c, d);
      return v * 0.5 + c * 0.5 + b;
    }
  }
};

module.exports = tweenFunctions;


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _easing = __webpack_require__(383);

var _easing2 = _interopRequireDefault(_easing);

var _plugins = __webpack_require__(381);

var _plugins2 = _interopRequireDefault(_plugins);

var _StylePlugin = __webpack_require__(396);

var _StylePlugin2 = _interopRequireDefault(_StylePlugin);

var _styleUtils = __webpack_require__(380);

var _util = __webpack_require__(379);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEFAULT_EASING = 'easeInOutQuad'; /* eslint-disable func-names */
/**
 * Created by jljsj on 16/1/27.
 */

var DEFAULT_DURATION = 450;
var DEFAULT_DELAY = 0;
function noop() {}
_plugins2["default"].push(_StylePlugin2["default"]);
// 设置默认数据
function defaultData(vars, now) {
  return {
    duration: vars.duration || vars.duration === 0 ? vars.duration : DEFAULT_DURATION,
    delay: vars.delay || DEFAULT_DELAY,
    ease: typeof vars.ease === 'function' ? vars.ease : _easing2["default"][vars.ease || DEFAULT_EASING],
    onUpdate: vars.onUpdate || noop,
    onComplete: vars.onComplete || noop,
    onStart: vars.onStart || noop,
    onRepeat: vars.onRepeat || noop,
    repeat: vars.repeat || 0,
    repeatDelay: vars.repeatDelay || 0,
    yoyo: vars.yoyo || false,
    type: vars.type || 'to',
    initTime: now,
    appearTo: typeof vars.appearTo === 'number' ? vars.appearTo : null
  };
}

var timeLine = function timeLine(target, toData, props) {
  this.target = target;
  this.attr = props.attr || 'style';
  this.willChange = props.willChange;
  // 记录总时间;
  this.totalTime = 0;
  // 记录当前时间;
  this.progressTime = 0;
  // 记录时间轴数据;
  this.defaultData = [];
  // 每个的开始数据；
  this.start = {};
  // 记录动画开始;
  this.onStart = {};
  // 开始默认的数据；
  this.startDefaultData = {};
  // 动画过程
  this.tween = {};
  // toData;
  this.data = toData;
  // 每帧的时间;
  this.perFrame = Math.round(1000 / 60);
  // 注册，第一次进入执行注册
  this.register = false;
  // 设置 style
  var data = this.setAttrIsStyle();
  // 设置默认动画数据;
  this.setDefaultData(data);
};
var p = timeLine.prototype;
p.setAttrIsStyle = function () {
  var _this = this;

  var data = [];
  this.data.forEach(function (d, i) {
    var _d = (0, _extends3["default"])({}, d);
    if (_this.attr === 'style') {
      data[i] = {};
      Object.keys(_d).forEach(function (key) {
        if (key in defaultData({}, 0)) {
          data[i][key] = _d[key];
          delete _d[key];
        }
      });
      data[i].style = _d;
      _this.startDefaultData.style = _this.target.getAttribute('style');
    } else if (_this.attr === 'attr') {
      Object.keys(_d).forEach(function (key) {
        if (key === 'style' && Array.isArray(d[key])) {
          throw new Error('Style should be the object.');
        }
        if (key === 'bezier') {
          _d.style = (0, _extends3["default"])({}, _d.style, { bezier: _d[key] });
          delete _d[key];
          _this.startDefaultData.style = _this.target.getAttribute('style');
        } else {
          _this.startDefaultData[key] = _this.target.getAttribute(key);
        }
      });
      data[i] = _d;
    }
  });
  return data;
};
p.setDefaultData = function (_vars) {
  var _this2 = this;

  var now = 0;
  var repeatMax = false;
  var data = _vars.map(function (item) {
    var appearToBool = typeof item.appearTo === 'number';
    // 加上延时，在没有播放过时；
    if (!appearToBool) {
      now += item.delay || 0;
    }
    var appearToTime = (item.appearTo || 0) + (item.delay || 0);
    // 获取默认数据
    var tweenData = defaultData(item, appearToBool ? appearToTime : now);
    tweenData.vars = {};
    Object.keys(item).forEach(function (_key) {
      if (!(_key in tweenData)) {
        var _data = item[_key];
        if (_key in _plugins2["default"]) {
          tweenData.vars[_key] = new _plugins2["default"][_key](_this2.target, _data, tweenData.type);
        } else if (_key.match(/color/i) || _key === 'stroke' || _key === 'fill') {
          tweenData.vars[_key] = { type: 'color', vars: (0, _styleUtils.parseColor)(_data) };
        } else if (typeof _data === 'number' || _data.split(/[,|\s]/g).length <= 1) {
          var vars = parseFloat(_data);
          var unit = _data.toString().replace(/[^a-z|%]/g, '');
          var count = _data.toString().replace(/[^+|=|-]/g, '');
          tweenData.vars[_key] = { unit: unit, vars: vars, count: count };
        } else if ((_key === 'd' || _key === 'points') && 'SVGMorph' in _plugins2["default"]) {
          tweenData.vars[_key] = new _plugins2["default"].SVGMorph(_this2.target, _data, _key);
        }
      }
    });
    if (tweenData.yoyo && !tweenData.repeat) {
      console.warn('Warning: yoyo must be used together with repeat;'); // eslint-disable-line
    }
    if (tweenData.repeat === -1) {
      repeatMax = true;
    }
    var repeat = tweenData.repeat === -1 ? 0 : tweenData.repeat;
    if (appearToBool) {
      // 如果有 appearTo 且这条时间比 now 大时，，总时间用这条；
      var appearNow = item.appearTo + (item.delay || 0) + tweenData.duration * (repeat + 1) + tweenData.repeatDelay * repeat;
      now = appearNow >= now ? appearNow : now;
    } else {
      if (tweenData.delay < -tweenData.duration) {
        // 如果延时小于 负时间时,,不加,再减回延时;
        now -= tweenData.delay;
      } else {
        // repeat 为 -1 只记录一次。不能跟 reverse 同时使用;
        now += tweenData.duration * (repeat + 1) + tweenData.repeatDelay * repeat;
      }
    }
    tweenData.mode = '';
    return tweenData;
  });
  this.totalTime = repeatMax ? Number.MAX_VALUE : now;
  this.defaultData = data;
};
p.getComputedStyle = function () {
  return document.defaultView ? document.defaultView.getComputedStyle(this.target) : {};
};
p.getAnimStartData = function (item) {
  var _this3 = this;

  var start = {};
  this.computedStyle = this.computedStyle || this.getComputedStyle();
  Object.keys(item).forEach(function (_key) {
    if (_key in _plugins2["default"] || _this3.attr === 'attr' && (_key === 'd' || _key === 'points')) {
      start[_key] = item[_key].getAnimStart(_this3.computedStyle, _this3.willChange);
      return;
    }
    if (_this3.attr === 'attr') {
      // 除了d和这points外的标签动画；
      var attribute = _this3.target.getAttribute(_key);
      var data = attribute === 'null' || !attribute ? 0 : attribute;
      if (_key.match(/color/i) || _key === 'stroke' || _key === 'fill') {
        data = !data && _key === 'stroke' ? 'rgba(255, 255, 255, 0)' : data;
        data = (0, _styleUtils.parseColor)(data);
        start[_key] = data;
      } else if (parseFloat(data) || parseFloat(data) === 0 || data === 0) {
        var unit = data.toString().replace(/[^a-z|%]/g, '');
        start[_key] = unit !== item[_key].unit ? (0, _util.startConvertToEndUnit)(_this3.target, _key, parseFloat(data), unit, item[_key].unit) : parseFloat(data);
      }
      return;
    }
    start[_key] = _this3.target[_key] || 0;
  });
  return start;
};
p.setAnimData = function (data) {
  var _this4 = this;

  Object.keys(data).forEach(function (key) {
    if (key in _plugins2["default"] || _this4.attr === 'attr' && (key === 'd' || key === 'points')) {
      return;
    }
    _this4.target[key] = data[key];
  });
};
p.setRatio = function (ratio, endData, i) {
  var _this5 = this;

  Object.keys(endData.vars).forEach(function (_key) {
    if (_key in _plugins2["default"] || _this5.attr === 'attr' && (_key === 'd' || _key === 'points')) {
      endData.vars[_key].setRatio(ratio, _this5.tween);
      return;
    }
    var endVars = endData.vars[_key];
    var startVars = _this5.start[i][_key];
    var data = void 0;
    if (_this5.attr === 'attr') {
      // 除了d和这points外的标签动画；
      if (!endVars.type) {
        data = endVars.unit.charAt(1) === '=' ? startVars + endVars.vars * ratio + endVars.unit : (endVars.vars - startVars) * ratio + startVars + endVars.unit;
        _this5.target.setAttribute(_key, data);
      } else if (endVars.type === 'color') {
        if (endVars.vars.length === 3 && startVars.length === 4) {
          endVars.vars[3] = 1;
        }
        data = endVars.vars.map(function (_endData, _i) {
          var startData = startVars[_i] || 0;
          return (_endData - startData) * ratio + startData;
        });
        _this5.target.setAttribute(_key, (0, _styleUtils.getColor)(data));
      }
    }
  });
  this.setAnimData(this.tween);
};
p.render = function () {
  var _this6 = this;

  this.defaultData.forEach(function (item, i) {
    var initTime = item.initTime;
    var duration = (0, _styleUtils.toFixed)(item.duration);
    // 处理 yoyo 和 repeat; yoyo 是在时间轴上的, 并不是倒放
    var repeatNum = Math.ceil((_this6.progressTime - initTime) / (duration + item.repeatDelay)) - 1;
    repeatNum = repeatNum < 0 ? 0 : repeatNum;
    if (item.repeat) {
      if (item.repeat < repeatNum && item.repeat !== -1) {
        return;
      }
      if (item.repeat || item.repeat <= repeatNum) {
        initTime = initTime + repeatNum * (duration + item.repeatDelay);
      }
    }
    var startData = item.yoyo && repeatNum % 2 || item.type === 'from' ? 1 : 0;
    var endData = item.yoyo && repeatNum % 2 || item.type === 'from' ? 0 : 1;
    //  精度损失，只取小数点后10位。
    var progressTime = (0, _styleUtils.toFixed)(_this6.progressTime - initTime);

    var ratio = void 0;

    // 开始注册;
    // from 时需先执行参数位置;
    var fromDelay = item.type === 'from' ? item.delay : 0;
    if (progressTime + fromDelay >= 0) {
      if (!_this6.start[i]) {
        // 设置 start
        _this6.start[i] = _this6.getAnimStartData(item.vars);
        if (progressTime < _this6.perFrame) {
          ratio = !item.duration && !item.delay ? item.ease(1, startData, endData, 1) : item.ease(0, startData, endData, 1);
          _this6.setRatio(ratio, item, i);
        } else if (progressTime > duration) {
          ratio = item.ease(1, startData, endData, 1);
          _this6.setRatio(ratio, item, i);
        }
        if (!_this6.register) {
          _this6.register = true;
          if (progressTime === 0) {
            return;
          }
        }
      }
    }

    var e = {
      index: i,
      target: _this6.target
    };

    if (progressTime >= 0 && !(progressTime > duration && item.mode === 'onComplete')) {
      var updateAnim = _this6.updateAnim === 'update';
      if (progressTime >= duration) {
        ratio = item.ease(1, startData, endData, 1);
        _this6.setRatio(ratio, item, i);
        if (item.mode !== 'reset' && !updateAnim) {
          item.onComplete(e);
        }
        item.mode = 'onComplete';
      } else if (progressTime < _this6.perFrame) {
        ratio = item.ease(0, startData, endData, 1);
        _this6.setRatio(ratio, item, i);
        // 将第一帧作动画开始 start;
        if (!updateAnim) {
          if (item.repeat && repeatNum > 0) {
            item.mode = 'onRepeat';
            item.onRepeat((0, _extends3["default"])({}, e, { repeatNum: repeatNum }));
          } else {
            item.mode = 'onStart';
            item.onStart(e);
          }
        }
      } else if (progressTime > 0 && progressTime < duration) {
        item.mode = 'onUpdate';
        ratio = item.ease(progressTime, startData, endData, duration);
        _this6.setRatio(ratio, item, i);
        if (!updateAnim) {
          item.onUpdate((0, _extends3["default"])({ ratio: ratio }, e));
        }
      }
      if (!updateAnim) {
        _this6.onChange((0, _extends3["default"])({
          moment: _this6.progressTime,
          mode: item.mode
        }, e));
      }
    }
  });
};
// 播放帧
p.frame = function (moment) {
  this.progressTime = moment;
  this.render();
};
p.resetAnimData = function () {
  this.tween = {};
  this.start = {};
  this.onStart = {};
};

p.resetDefaultStyle = function () {
  var _this7 = this;

  this.tween = {};
  this.defaultData = this.defaultData.map(function (item) {
    item.mode = 'reset';
    return item;
  });
  Object.keys(this.startDefaultData).forEach(function (key) {
    if (!(key in defaultData({}, 0))) {
      _this7.target.setAttribute(key, _this7.startDefaultData[key]);
    }
  });
};

p.reStart = function (style) {
  var _this8 = this;

  this.start = {};
  Object.keys(style).forEach(function (key) {
    _this8.target.style[key] = (0, _styleUtils.stylesToCss)(key, style[key]);
  });
  this.setAttrIsStyle();
  this.resetDefaultStyle();
};

p.onChange = noop;
exports["default"] = timeLine;
module.exports = exports['default'];

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(2);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TweenOne = __webpack_require__(382);

var _TweenOne2 = _interopRequireDefault(_TweenOne);

var _util = __webpack_require__(379);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

var TweenOneGroup = function (_Component) {
  (0, _inherits3["default"])(TweenOneGroup, _Component);

  function TweenOneGroup() {
    (0, _classCallCheck3["default"])(this, TweenOneGroup);

    var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));

    _initialiseProps.call(_this);

    _this.keysToEnter = [];
    _this.keysToLeave = [];
    _this.saveTweenTag = {};
    _this.onEnterBool = false;
    _this.isTween = {};
    // 第一进入，appear 为 true 时默认用 enter 或 tween-one 上的效果
    var children = (0, _util.toArrayChildren)((0, _util.getChildrenFromProps)(_this.props));
    _this.state = {
      children: children
    };
    return _this;
  }

  TweenOneGroup.prototype.componentDidMount = function componentDidMount() {
    this.onEnterBool = true;
  };

  TweenOneGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var nextChildren = (0, _util.toArrayChildren)(nextProps.children);
    var currentChildren = (0, _util.toArrayChildren)(this.state.children);
    var newChildren = (0, _util.mergeChildren)(currentChildren, nextChildren);

    this.keysToEnter = [];
    this.keysToLeave = [];
    nextChildren.forEach(function (c) {
      if (!c) {
        return;
      }
      var key = c.key;
      var hasPrev = (0, _util.findChildInChildrenByKey)(currentChildren, key);
      // 如果当前 key 已存在 saveTweenTag 里，，刷新 child;
      if (_this2.saveTweenTag[key]) {
        _this2.saveTweenTag[key] = _react2["default"].cloneElement(_this2.saveTweenTag[key], {}, c);
      }
      if (!hasPrev && key) {
        _this2.keysToEnter.push(key);
      }
    });

    currentChildren.forEach(function (c) {
      if (!c) {
        return;
      }
      var key = c.key;
      var hasNext = (0, _util.findChildInChildrenByKey)(nextChildren, key);
      if (!hasNext && key) {
        _this2.keysToLeave.push(key);
        delete _this2.saveTweenTag[key];
      }
    });
    this.setState({
      children: newChildren
    });
  };

  TweenOneGroup.prototype.render = function render() {
    var childrenToRender = this.getChildrenToRender(this.state.children);
    if (!this.props.component) {
      return childrenToRender[0] || null;
    }
    var componentProps = (0, _extends3["default"])({}, this.props);
    ['component', 'appear', 'enter', 'leave', 'animatingClassName', 'onEnd', 'resetStyleBool', 'willChange'].forEach(function (key) {
      return delete componentProps[key];
    });
    return (0, _react.createElement)(this.props.component, componentProps, childrenToRender);
  };

  return TweenOneGroup;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onChange = function (animation, key, type, obj) {
    var length = (0, _util.dataToArray)(animation).length;
    var animatingClassName = _this3.props.animatingClassName;
    var tag = obj.target;
    var isEnter = type === 'enter' || type === 'appear';
    if (obj.mode === 'onStart') {
      tag.className = tag.className.replace(animatingClassName[isEnter ? 1 : 0], '').trim();
      if (tag.className.indexOf(animatingClassName[isEnter ? 0 : 1]) === -1) {
        tag.className = (tag.className + ' ' + animatingClassName[isEnter ? 0 : 1]).trim();
      }
    } else if (obj.index === length - 1 && obj.mode === 'onComplete') {
      if (type === 'enter') {
        _this3.keysToEnter.splice(_this3.keysToEnter.indexOf(key), 1);
      } else if (type === 'leave') {
        var children = _this3.state.children.filter(function (child) {
          return key !== child.key;
        });
        _this3.keysToLeave.splice(_this3.keysToLeave.indexOf(key), 1);
        delete _this3.saveTweenTag[key];
        _this3.setState({
          children: children
        });
      }
      tag.className = tag.className.replace(animatingClassName[isEnter ? 0 : 1], '').trim();
      delete _this3.isTween[key];
      var _obj = { key: key, type: type };
      _this3.props.onEnd(_obj);
    }
  };

  this.getTweenChild = function (child) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var key = child.key;
    _this3.saveTweenTag[key] = _react2["default"].createElement(_TweenOne2["default"], (0, _extends3["default"])({}, props, {
      key: key,
      component: null
    }), child);
    return _this3.saveTweenTag[key];
  };

  this.getCoverAnimation = function (child, i, type) {
    var animation = void 0;
    var onChange = void 0;
    animation = type === 'leave' ? _this3.props.leave : _this3.props.enter;
    if (type === 'appear') {
      var appear = (0, _util.transformArguments)(_this3.props.appear, child.key, i);
      animation = appear && _this3.props.enter || null;
    }
    onChange = _this3.onChange.bind(_this3, animation, child.key, type);
    var animate = (0, _util.transformArguments)(animation, child.key, i);
    var props = {
      willChange: _this3.props.willChange,
      key: child.key,
      animation: animate,
      onChange: onChange,
      resetStyleBool: _this3.props.resetStyleBool
    };
    var children = _this3.getTweenChild(child, props);
    if (_this3.keysToEnter.concat(_this3.keysToLeave).indexOf(child.key) >= 0 || !_this3.onEnterBool && animation) {
      _this3.isTween[child.key] = type;
    }
    return children;
  };

  this.getChildrenToRender = function (children) {
    return children.map(function (child, i) {
      if (!child || !child.key) {
        return child;
      }
      var key = child.key;

      if (_this3.keysToLeave.indexOf(key) >= 0) {
        return _this3.getCoverAnimation(child, i, 'leave');
      } else if (_this3.keysToEnter.indexOf(key) >= 0 || _this3.isTween[key] && _this3.keysToLeave.indexOf(key) === -1) {
        return _this3.getCoverAnimation(child, i, 'enter');
      } else if (!_this3.onEnterBool) {
        return _this3.getCoverAnimation(child, i, 'appear');
      }
      return _this3.saveTweenTag[key];
    });
  };
};

TweenOneGroup.propTypes = {
  component: _propTypes2["default"].any,
  children: _propTypes2["default"].any,
  style: _propTypes2["default"].object,
  appear: _propTypes2["default"].bool,
  enter: _propTypes2["default"].any,
  leave: _propTypes2["default"].any,
  animatingClassName: _propTypes2["default"].array,
  onEnd: _propTypes2["default"].func,
  willChange: _propTypes2["default"].bool,
  resetStyleBool: _propTypes2["default"].bool
};

TweenOneGroup.defaultProps = {
  component: 'div',
  appear: true,
  animatingClassName: ['tween-one-entering', 'tween-one-leaving'],
  enter: { x: 50, opacity: 0, type: 'from' },
  leave: { x: -50, opacity: 0 },
  onEnd: noop,
  willChange: true,
  resetStyleBool: true
};
TweenOneGroup.isTweenOneGroup = true;
exports["default"] = TweenOneGroup;
module.exports = exports['default'];

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TweenOne = __webpack_require__(382);
TweenOne.TweenOneGroup = __webpack_require__(394);
TweenOne.easing = __webpack_require__(383);
TweenOne.plugins = __webpack_require__(381);
TweenOne.ticker = __webpack_require__(384);
TweenOne.isTweenOne = true;
module.exports = TweenOne;

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(5);

var _extends3 = _interopRequireDefault(_extends2);

var _styleUtils = __webpack_require__(380);

var _styleUtils2 = _interopRequireDefault(_styleUtils);

var _util = __webpack_require__(379);

var _plugins = __webpack_require__(381);

var _plugins2 = _interopRequireDefault(_plugins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StylePlugin = function StylePlugin(target, vars, type) {
  this.target = target;
  this.vars = vars;
  this.type = type;
  this.propsData = {};
  this.setDefaultData();
}; /* eslint-disable func-names, no-console */

var p = StylePlugin.prototype = {
  name: 'style'
};
p.getTweenData = function (key, vars) {
  var data = {
    data: {},
    dataType: {},
    dataUnit: {},
    dataCount: {},
    dataSplitStr: {}
  };
  if (key.match(/colo|fill|storker/i)) {
    data.data[key] = (0, _styleUtils.parseColor)(vars);
    data.dataType[key] = 'color';
  } else if (key.match(/shadow/i)) {
    data.data[key] = (0, _styleUtils.parseShadow)(vars);
    data.dataType[key] = 'shadow';
  } else if (typeof vars === 'string' && vars.split(/[\s|,]/).length > 1) {
    data.data[key] = vars.split(/[\s|,]/);
    data.dataSplitStr[key] = vars.replace(/[^\s|,]/g, '');
    data.dataType[key] = 'string';
  } else {
    data.data[key] = vars;
    data.dataType[key] = 'other';
  }
  if (Array.isArray(data.data[key])) {
    data.dataUnit[key] = data.data[key].map(function (_item) {
      return _item.toString().replace(/[^a-z|%]/g, '');
    });
    data.dataCount[key] = data.data[key].map(function (_item) {
      return _item.toString().replace(/[^+|=|-]/g, '');
    });

    data.data[key] = data.data[key].map(function (_item) {
      return !parseFloat(_item) && parseFloat(_item) !== 0 ? _item : parseFloat(_item);
    });
  } else {
    data.dataUnit[key] = data.data[key].toString().replace(/[^a-z|%]/g, '');
    data.dataCount[key] = data.data[key].toString().replace(/[^+|=|-]/g, '');
    var d = parseFloat(data.data[key].toString().replace(/[a-z|%|=]/g, ''));
    data.data[key] = !d && d !== 0 ? data.data[key] : d;
  }
  return data;
};
p.setDefaultData = function () {
  var _this = this;

  this.propsData.data = {};
  this.propsData.dataType = {};
  this.propsData.dataUnit = {};
  this.propsData.dataCount = {};
  this.propsData.dataSplitStr = {};
  Object.keys(this.vars).forEach(function (_key) {
    if (_key in _plugins2["default"]) {
      _this.propsData.data[_key] = new _plugins2["default"][_key](_this.target, _this.vars[_key]);
      return;
    }
    var key = (0, _styleUtils.getGsapType)(_key);
    var _data = _this.getTweenData(key, _this.vars[_key]);
    _this.propsData.data[key] = _data.data[key];
    _this.propsData.dataType[key] = _data.dataType[key];
    _this.propsData.dataUnit[key] = _data.dataUnit[key];
    _this.propsData.dataCount[key] = _data.dataCount[key];
    if (_data.dataSplitStr[key]) {
      _this.propsData.dataSplitStr[key] = _data.dataSplitStr[key];
    }
  });
};
p.convertToMarksArray = function (unit, key, data, i) {
  var startUnit = data.toString().replace(/[^a-z|%]/g, '');
  var endUnit = unit[i];
  if (startUnit === endUnit) {
    return parseFloat(data);
  } else if (!parseFloat(data) && parseFloat(data) !== 0) {
    return data;
  }
  return (0, _util.startConvertToEndUnit)(this.target, key, data, startUnit, endUnit, null, key === 'transformOrigin' && !i);
};
p.getAnimStart = function (computedStyle, willChangeBool) {
  var _this2 = this;

  var style = {};
  this.supports3D = (0, _styleUtils.checkStyleName)('perspective');
  var willChangeArray = void 0;
  if (willChangeBool) {
    this.willChange = computedStyle.willChange === 'auto' || !computedStyle.willChange || computedStyle.willChange === 'none' ? '' : computedStyle.willChange;
    willChangeArray = this.willChange.split(',').filter(function (k) {
      return k;
    });
  }
  Object.keys(this.propsData.data).forEach(function (key) {
    var cssName = (0, _styleUtils.isConvert)(key);
    if (willChangeBool) {
      var willStyle = key in _plugins2["default"] ? _this2.propsData.data[key].useStyle || cssName : cssName;
      if (willChangeArray.indexOf(willStyle) === -1 && (willStyle in computedStyle || key in _plugins2["default"])) {
        willChangeArray.push(willStyle.replace(/([A-Z])/g, '-$1').toLocaleLowerCase());
      }
      _this2.willChange = willChangeArray.join(',');
    }
    var startData = computedStyle[cssName];
    var fixed = computedStyle.position === 'fixed';
    if (!startData || startData === 'none' || startData === 'auto') {
      startData = '';
    }
    var transform = void 0;
    var endUnit = void 0;
    var startUnit = void 0;
    if (key in _plugins2["default"]) {
      if (key === 'bezier') {
        _this2.transform = (0, _styleUtils.checkStyleName)('transform');
        startData = computedStyle[_this2.transform];
        style.transform = style.transform || (0, _styleUtils.getTransform)(startData);
      }
      _this2.propsData.data[key].getAnimStart(computedStyle);
    } else if (cssName === 'transform') {
      _this2.transform = (0, _styleUtils.checkStyleName)('transform');
      startData = computedStyle[_this2.transform];
      endUnit = _this2.propsData.dataUnit[key];
      transform = style.transform || (0, _styleUtils.getTransform)(startData);
      if (endUnit && endUnit.match(/%|vw|vh|em|rem/i)) {
        var percent = key === 'translateX' ? 'xPercent' : 'yPercent';
        transform[percent] = (0, _util.startConvertToEndUnit)(_this2.target, key, transform[key], null, endUnit);
        transform[key] = 0;
      }
      style.transform = transform;
    } else if (cssName === 'filter') {
      _this2.filterName = (0, _styleUtils.checkStyleName)('filter') || 'filter';
      startData = computedStyle[_this2.filterName];
      _this2.filterObject = (0, _extends3["default"])({}, _this2.filterObject, (0, _styleUtils.splitFilterToObject)(startData));
      startData = _this2.filterObject[key] || 0;
      startUnit = startData.toString().replace(/[^a-z|%]/g, '');
      endUnit = _this2.propsData.dataUnit[key];
      if (endUnit !== startUnit) {
        startData = (0, _util.startConvertToEndUnit)(_this2.target, cssName, parseFloat(startData), startUnit, endUnit, fixed);
      }
      style[key] = parseFloat(startData);
    } else if (key.match(/color|fill/i) || key === 'stroke') {
      startData = !startData && key === 'stroke' ? 'rgba(255, 255, 255, 0)' : startData;
      style[cssName] = (0, _styleUtils.parseColor)(startData);
    } else if (key.match(/shadow/i)) {
      startData = (0, _styleUtils.parseShadow)(startData);
      endUnit = _this2.propsData.dataUnit[key];
      startData = startData.map(_this2.convertToMarksArray.bind(_this2, endUnit, key));
      style[cssName] = startData;
    } else if (Array.isArray(_this2.propsData.data[key])) {
      startData = startData.split(/[\s|,]/);
      endUnit = _this2.propsData.dataUnit[key];
      startData = startData.map(_this2.convertToMarksArray.bind(_this2, endUnit, key));
      style[cssName] = startData;
    } else {
      // 计算单位
      endUnit = _this2.propsData.dataUnit[cssName];
      startUnit = startData.toString().replace(/[^a-z|%]/g, '');
      if (endUnit !== startUnit) {
        startData = (0, _util.startConvertToEndUnit)(_this2.target, cssName, parseFloat(startData), startUnit, endUnit, fixed);
      }
      style[cssName] = parseFloat(startData || 0);
    }
  });
  this.start = style;
  return style;
};
p.setArrayRatio = function (ratio, start, vars, unit, type) {
  if (type === 'color' && start.length === 4 && vars.length === 3) {
    vars[3] = 1;
  }
  var startInset = start.indexOf('inset') >= 0;
  var endInset = vars.indexOf('inset') >= 0;
  if (startInset && !endInset || endInset && !startInset) {
    throw console.error('Error: "box-shadow" inset have to exist');
  }
  var length = endInset ? 9 : 8;
  if (start.length === length && vars.length === length - 1) {
    vars.splice(3, 0, 0);
    unit.splice(3, 0, '');
  } else if (vars.length === length && start.length === length - 1) {
    start.splice(3, 0, 0);
  }
  var _vars = vars.map(function (endData, i) {
    var startIsAlpha = type === 'color' && i === 3 && !start[i] ? 1 : 0;
    var startData = typeof start[i] === 'number' ? start[i] : startIsAlpha;
    if (typeof endData === 'string') {
      return endData;
    }
    return (endData - startData) * ratio + startData + (unit[i] || 0);
  });
  if (type === 'color') {
    return (0, _styleUtils.getColor)(_vars);
  } else if (type === 'shadow') {
    var l = _vars.length === length ? 4 : 3;
    var s = _vars.slice(0, l).map(function (item) {
      if (typeof item === 'number') {
        return item + 'px';
      }
      return item;
    });
    var c = _vars.slice(l, endInset ? _vars.length - 1 : _vars.length);
    var color = (0, _styleUtils.getColor)(c);
    return (s.join(' ') + ' ' + color + ' ' + (endInset ? 'inset' : '')).trim();
  }
  return _vars;
};

p.setRatio = function (ratio, tween) {
  var _this3 = this;

  tween.style = tween.style || {};
  if (this.start.transform) {
    tween.style.transform = tween.style.transform || (0, _extends3["default"])({}, this.start.transform);
  }
  var style = this.target.style;
  if (this.willChange) {
    if (ratio === (this.type === 'from' ? 0 : 1)) {
      style.willChange = null;
    } else {
      style.willChange = this.willChange;
    }
  }
  Object.keys(this.propsData.data).forEach(function (key) {
    var _isTransform = (0, _styleUtils.isTransform)(key) === 'transform';
    var startVars = _isTransform ? _this3.start.transform[key] : _this3.start[key];
    var endVars = _this3.propsData.data[key];
    var unit = _this3.propsData.dataUnit[key];
    var count = _this3.propsData.dataCount[key];
    if (key in _plugins2["default"]) {
      _this3.propsData.data[key].setRatio(ratio, tween);
      if (key === 'bezier') {
        style[_this3.transform] = (0, _util.getTransformValue)(tween.style.transform, _this3.supports3D);
      } else {
        Object.keys(tween.style).forEach(function (css) {
          return style[css] = tween.style[css];
        });
      }
      return;
    } else if (_isTransform) {
      if (unit && unit.match(/%|vw|vh|em|rem/i)) {
        var pName = key === 'translateX' ? 'xPercent' : 'yPercent';
        startVars = _this3.start.transform[pName];
        if (count.charAt(1) === '=') {
          tween.style.transform[pName] = startVars + endVars * ratio + unit;
        } else {
          tween.style.transform[pName] = (endVars - startVars) * ratio + startVars + unit;
        }
      } else if (key === 'scale') {
        var xStart = _this3.start.transform.scaleX;
        var yStart = _this3.start.transform.scaleY;
        if (count.charAt(1) === '=') {
          tween.style.transform.scaleX = xStart + endVars * ratio;
          tween.style.transform.scaleY = yStart + endVars * ratio;
        } else {
          tween.style.transform.scaleX = (endVars - xStart) * ratio + xStart;
          tween.style.transform.scaleY = (endVars - yStart) * ratio + yStart;
        }
      }
      if (count.charAt(1) === '=') {
        tween.style.transform[key] = startVars + endVars * ratio;
      } else {
        tween.style.transform[key] = (endVars - startVars) * ratio + startVars;
      }
      style[_this3.transform] = (0, _util.getTransformValue)(tween.style.transform, _this3.supports3D);
      return;
    } else if (Array.isArray(endVars)) {
      var _type = _this3.propsData.dataType[key];
      tween.style[key] = _this3.setArrayRatio(ratio, startVars, endVars, unit, _type);
      if (_type === 'string') {
        tween.style[key] = tween.style[key].join(_this3.propsData.dataSplitStr[key]);
      }
    } else {
      var styleUnit = (0, _styleUtils.stylesToCss)(key, 0);
      styleUnit = typeof styleUnit === 'number' ? '' : styleUnit.replace(/[^a-z|%]/g, '');
      unit = unit || (_styleUtils2["default"].filter.indexOf(key) >= 0 ? '' : styleUnit);
      if (typeof endVars === 'string') {
        tween.style[key] = endVars;
      } else {
        if (count.charAt(1) === '=') {
          tween.style[key] = startVars + endVars * ratio + unit;
        } else {
          tween.style[key] = (endVars - startVars) * ratio + startVars + unit;
        }
      }
    }
    if (_styleUtils2["default"].filter.indexOf(key) >= 0) {
      if (!_this3.filterObject) {
        return;
      }
      _this3.filterObject[key] = tween.style[key];
      var filterStyle = '';
      Object.keys(_this3.filterObject).forEach(function (filterKey) {
        filterStyle += ' ' + filterKey + '(' + _this3.filterObject[filterKey] + ')';
      });
      style[_this3.filterName] = filterStyle.trim();
      return;
    }
    style[key] = tween.style[key];
  });
};
exports["default"] = StylePlugin;
module.exports = exports['default'];

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* globals Symbol: true, Uint8Array: true, WeakMap: true */
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependencies
 */

var type = __webpack_require__(401);
function FakeMap() {
  this.clear();
}
FakeMap.prototype = {
  clear: function clearMap() {
    this.keys = [];
    this.values = [];
    return this;
  },
  set: function setMap(key, value) {
    var index = this.keys.indexOf(key);
    if (index >= 0) {
      this.values[index] = value;
    } else {
      this.keys.push(key);
      this.values.push(value);
    }
    return this;
  },
  get: function getMap(key) {
    return this.values[this.keys.indexOf(key)];
  },
  delete: function deleteMap(key) {
    var index = this.keys.indexOf(key);
    if (index >= 0) {
      this.values = this.values.slice(0, index).concat(this.values.slice(index + 1));
      this.keys = this.keys.slice(0, index).concat(this.keys.slice(index + 1));
    }
    return this;
  },
};

var MemoizeMap = null;
if (typeof WeakMap === 'function') {
  MemoizeMap = WeakMap;
} else {
  MemoizeMap = FakeMap;
}

/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
  // Technically, WeakMap keys can *only* be objects, not primitives.
  if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    return null;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    var result = leftHandMap.get(rightHandOperand);
    if (typeof result === 'boolean') {
      return result;
    }
  }
  return null;
}

/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
  // Technically, WeakMap keys can *only* be objects, not primitives.
  if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    return;
  }
  var leftHandMap = memoizeMap.get(leftHandOperand);
  if (leftHandMap) {
    leftHandMap.set(rightHandOperand, result);
  } else {
    leftHandMap = new MemoizeMap();
    leftHandMap.set(rightHandOperand, result);
    memoizeMap.set(leftHandOperand, leftHandMap);
  }
}

/*!
 * Primary Export
 */

module.exports = deepEqual;
module.exports.MemoizeMap = MemoizeMap;

/**
 * Assert deeply nested sameValue equality between two objects of any type.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
 */
function deepEqual(leftHandOperand, rightHandOperand, options) {
  // If we have a comparator, we can't assume anything; so bail to its check first.
  if (options && options.comparator) {
    return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
  }

  var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
  if (simpleResult !== null) {
    return simpleResult;
  }

  // Deeper comparisons are pushed through to a larger function
  return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
}

/**
 * Many comparisons can be canceled out early via simple equality or primitive checks.
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @return {Boolean|null} equal match
 */
function simpleEqual(leftHandOperand, rightHandOperand) {
  // Equal references (except for Numbers) can be returned early
  if (leftHandOperand === rightHandOperand) {
    // Handle +-0 cases
    return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
  }

  // handle NaN cases
  if (
    leftHandOperand !== leftHandOperand && // eslint-disable-line no-self-compare
    rightHandOperand !== rightHandOperand // eslint-disable-line no-self-compare
  ) {
    return true;
  }

  // Anything that is not an 'object', i.e. symbols, functions, booleans, numbers,
  // strings, and undefined, can be compared by reference.
  if (isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
    // Easy out b/c it would have passed the first equality check
    return false;
  }
  return null;
}

/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
function extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
  options = options || {};
  options.memoize = options.memoize === false ? false : options.memoize || new MemoizeMap();
  var comparator = options && options.comparator;

  // Check if a memoized result exists.
  var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
  if (memoizeResultLeft !== null) {
    return memoizeResultLeft;
  }
  var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
  if (memoizeResultRight !== null) {
    return memoizeResultRight;
  }

  // If a comparator is present, use it.
  if (comparator) {
    var comparatorResult = comparator(leftHandOperand, rightHandOperand);
    // Comparators may return null, in which case we want to go back to default behavior.
    if (comparatorResult === false || comparatorResult === true) {
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
      return comparatorResult;
    }
    // To allow comparators to override *any* behavior, we ran them first. Since it didn't decide
    // what to do, we need to make sure to return the basic tests first before we move on.
    var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
    if (simpleResult !== null) {
      // Don't memoize this, it takes longer to set/retrieve than to just compare.
      return simpleResult;
    }
  }

  var leftHandType = type(leftHandOperand);
  if (leftHandType !== type(rightHandOperand)) {
    memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
    return false;
  }

  // Temporarily set the operands in the memoize object to prevent blowing the stack
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);

  var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
  memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
  return result;
}

function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
  switch (leftHandType) {
    case 'String':
    case 'Number':
    case 'Boolean':
    case 'Date':
      // If these types are their instance types (e.g. `new Number`) then re-deepEqual against their values
      return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
    case 'Promise':
    case 'Symbol':
    case 'function':
    case 'WeakMap':
    case 'WeakSet':
    case 'Error':
      return leftHandOperand === rightHandOperand;
    case 'Arguments':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'Array':
      return iterableEqual(leftHandOperand, rightHandOperand, options);
    case 'RegExp':
      return regexpEqual(leftHandOperand, rightHandOperand);
    case 'Generator':
      return generatorEqual(leftHandOperand, rightHandOperand, options);
    case 'DataView':
      return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
    case 'ArrayBuffer':
      return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
    case 'Set':
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    case 'Map':
      return entriesEqual(leftHandOperand, rightHandOperand, options);
    default:
      return objectEqual(leftHandOperand, rightHandOperand, options);
  }
}

/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */

function regexpEqual(leftHandOperand, rightHandOperand) {
  return leftHandOperand.toString() === rightHandOperand.toString();
}

/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function entriesEqual(leftHandOperand, rightHandOperand, options) {
  // IE11 doesn't support Set#entries or Set#@@iterator, so we need manually populate using Set#forEach
  if (leftHandOperand.size !== rightHandOperand.size) {
    return false;
  }
  if (leftHandOperand.size === 0) {
    return true;
  }
  var leftHandItems = [];
  var rightHandItems = [];
  leftHandOperand.forEach(function gatherEntries(key, value) {
    leftHandItems.push([ key, value ]);
  });
  rightHandOperand.forEach(function gatherEntries(key, value) {
    rightHandItems.push([ key, value ]);
  });
  return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
}

/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function iterableEqual(leftHandOperand, rightHandOperand, options) {
  var length = leftHandOperand.length;
  if (length !== rightHandOperand.length) {
    return false;
  }
  if (length === 0) {
    return true;
  }
  var index = -1;
  while (++index < length) {
    if (deepEqual(leftHandOperand[index], rightHandOperand[index], options) === false) {
      return false;
    }
  }
  return true;
}

/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function generatorEqual(leftHandOperand, rightHandOperand, options) {
  return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options);
}

/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
function hasIteratorFunction(target) {
  return typeof Symbol !== 'undefined' &&
    typeof target === 'object' &&
    typeof Symbol.iterator !== 'undefined' &&
    typeof target[Symbol.iterator] === 'function';
}

/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function getIteratorEntries(target) {
  if (hasIteratorFunction(target)) {
    try {
      return getGeneratorEntries(target[Symbol.iterator]());
    } catch (iteratorError) {
      return [];
    }
  }
  return [];
}

/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
function getGeneratorEntries(generator) {
  var generatorResult = generator.next();
  var accumulator = [ generatorResult.value ];
  while (generatorResult.done === false) {
    generatorResult = generator.next();
    accumulator.push(generatorResult.value);
  }
  return accumulator;
}

/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
function getEnumerableKeys(target) {
  var keys = [];
  for (var key in target) {
    keys.push(key);
  }
  return keys;
}

/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function keysEqual(leftHandOperand, rightHandOperand, keys, options) {
  var length = keys.length;
  if (length === 0) {
    return true;
  }
  for (var i = 0; i < length; i += 1) {
    if (deepEqual(leftHandOperand[keys[i]], rightHandOperand[keys[i]], options) === false) {
      return false;
    }
  }
  return true;
}

/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */

function objectEqual(leftHandOperand, rightHandOperand, options) {
  var leftHandKeys = getEnumerableKeys(leftHandOperand);
  var rightHandKeys = getEnumerableKeys(rightHandOperand);
  if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
    leftHandKeys.sort();
    rightHandKeys.sort();
    if (iterableEqual(leftHandKeys, rightHandKeys) === false) {
      return false;
    }
    return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
  }

  var leftHandEntries = getIteratorEntries(leftHandOperand);
  var rightHandEntries = getIteratorEntries(rightHandOperand);
  if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
    leftHandEntries.sort();
    rightHandEntries.sort();
    return iterableEqual(leftHandEntries, rightHandEntries, options);
  }

  if (leftHandKeys.length === 0 &&
      leftHandEntries.length === 0 &&
      rightHandKeys.length === 0 &&
      rightHandEntries.length === 0) {
    return true;
  }

  return false;
}

/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
function isPrimitive(value) {
  return value === null || typeof value !== 'object';
}


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(387);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(365)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../../node_modules/.1.2.2@postcss-loader/index.js!./filterTable.css", function() {
			var newContent = require("!!../../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../../node_modules/.1.2.2@postcss-loader/index.js!./filterTable.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(405)))

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/* !
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var getPrototypeOfExists = typeof Object.getPrototypeOf === 'function';
var promiseExists = typeof Promise === 'function';
var globalObject = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : self; // eslint-disable-line
var isDom = 'location' in globalObject && 'document' in globalObject;
var htmlElementExists = typeof HTMLElement !== 'undefined';
var isArrayExists = typeof Array.isArray === 'function';
var symbolExists = typeof Symbol !== 'undefined';
var mapExists = typeof Map !== 'undefined';
var setExists = typeof Set !== 'undefined';
var weakMapExists = typeof WeakMap !== 'undefined';
var weakSetExists = typeof WeakSet !== 'undefined';
var dataViewExists = typeof DataView !== 'undefined';
var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== 'undefined';
var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== 'undefined';
var setEntriesExists = setExists && typeof Set.prototype.entries === 'function';
var mapEntriesExists = mapExists && typeof Map.prototype.entries === 'function';
var setIteratorPrototype = getPrototypeOfExists && setEntriesExists && Object.getPrototypeOf(new Set().entries());
var mapIteratorPrototype = getPrototypeOfExists && mapEntriesExists && Object.getPrototypeOf(new Map().entries());
var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
var stringIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === 'function';
var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(''[Symbol.iterator]());
var toStringLeftSliceLength = 8;
var toStringRightSliceLength = -1;
/**
 * ### typeOf (obj)
 *
 * Uses `Object.prototype.toString` to determine the type of an object,
 * normalising behaviour across engine versions & well optimised.
 *
 * @param {Mixed} object
 * @return {String} object type
 * @api public
 */
module.exports = function typeDetect(obj) {
  /* ! Speed optimisation
   * Pre:
   *   string literal     x 3,039,035 ops/sec ±1.62% (78 runs sampled)
   *   boolean literal    x 1,424,138 ops/sec ±4.54% (75 runs sampled)
   *   number literal     x 1,653,153 ops/sec ±1.91% (82 runs sampled)
   *   undefined          x 9,978,660 ops/sec ±1.92% (75 runs sampled)
   *   function           x 2,556,769 ops/sec ±1.73% (77 runs sampled)
   * Post:
   *   string literal     x 38,564,796 ops/sec ±1.15% (79 runs sampled)
   *   boolean literal    x 31,148,940 ops/sec ±1.10% (79 runs sampled)
   *   number literal     x 32,679,330 ops/sec ±1.90% (78 runs sampled)
   *   undefined          x 32,363,368 ops/sec ±1.07% (82 runs sampled)
   *   function           x 31,296,870 ops/sec ±0.96% (83 runs sampled)
   */
  var typeofObj = typeof obj;
  if (typeofObj !== 'object') {
    return typeofObj;
  }

  /* ! Speed optimisation
   * Pre:
   *   null               x 28,645,765 ops/sec ±1.17% (82 runs sampled)
   * Post:
   *   null               x 36,428,962 ops/sec ±1.37% (84 runs sampled)
   */
  if (obj === null) {
    return 'null';
  }

  /* ! Spec Conformance
   * Test: `Object.prototype.toString.call(window)``
   *  - Node === "[object global]"
   *  - Chrome === "[object global]"
   *  - Firefox === "[object Window]"
   *  - PhantomJS === "[object Window]"
   *  - Safari === "[object Window]"
   *  - IE 11 === "[object Window]"
   *  - IE Edge === "[object Window]"
   * Test: `Object.prototype.toString.call(this)``
   *  - Chrome Worker === "[object global]"
   *  - Firefox Worker === "[object DedicatedWorkerGlobalScope]"
   *  - Safari Worker === "[object DedicatedWorkerGlobalScope]"
   *  - IE 11 Worker === "[object WorkerGlobalScope]"
   *  - IE Edge Worker === "[object WorkerGlobalScope]"
   */
  if (obj === globalObject) {
    return 'global';
  }

  /* ! Speed optimisation
   * Pre:
   *   array literal      x 2,888,352 ops/sec ±0.67% (82 runs sampled)
   * Post:
   *   array literal      x 22,479,650 ops/sec ±0.96% (81 runs sampled)
   */
  if (isArrayExists && Array.isArray(obj)) {
    return 'Array';
  }

  if (isDom) {
    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/browsers.html#location)
     * WhatWG HTML$7.7.3 - The `Location` interface
     * Test: `Object.prototype.toString.call(window.location)``
     *  - IE <=11 === "[object Object]"
     *  - IE Edge <=13 === "[object Object]"
     */
    if (obj === globalObject.location) {
      return 'Location';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#document)
     * WhatWG HTML$3.1.1 - The `Document` object
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     *       WhatWG HTML states:
     *         > For historical reasons, Window objects must also have a
     *         > writable, configurable, non-enumerable property named
     *         > HTMLDocument whose value is the Document interface object.
     * Test: `Object.prototype.toString.call(document)``
     *  - Chrome === "[object HTMLDocument]"
     *  - Firefox === "[object HTMLDocument]"
     *  - Safari === "[object HTMLDocument]"
     *  - IE <=10 === "[object Document]"
     *  - IE 11 === "[object HTMLDocument]"
     *  - IE Edge <=13 === "[object HTMLDocument]"
     */
    if (obj === globalObject.document) {
      return 'Document';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#mimetypearray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface MimeTypeArray
     * Test: `Object.prototype.toString.call(navigator.mimeTypes)``
     *  - IE <=10 === "[object MSMimeTypesCollection]"
     */
    if (obj === (globalObject.navigator || {}).mimeTypes) {
      return 'MimeTypeArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$8.6.1.5 - Plugins - Interface PluginArray
     * Test: `Object.prototype.toString.call(navigator.plugins)``
     *  - IE <=10 === "[object MSPluginsCollection]"
     */
    if (obj === (globalObject.navigator || {}).plugins) {
      return 'PluginArray';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/multipage/webappapis.html#pluginarray)
     * WhatWG HTML$4.4.4 - The `blockquote` element - Interface `HTMLQuoteElement`
     * Test: `Object.prototype.toString.call(document.createElement('blockquote'))``
     *  - IE <=10 === "[object HTMLBlockElement]"
     */
    if (htmlElementExists && obj instanceof HTMLElement && obj.tagName === 'BLOCKQUOTE') {
      return 'HTMLQuoteElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltabledatacellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableDataCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('td'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (htmlElementExists && obj instanceof HTMLElement && obj.tagName === 'TD') {
      return 'HTMLTableDataCellElement';
    }

    /* ! Spec Conformance
     * (https://html.spec.whatwg.org/#htmltableheadercellelement)
     * WhatWG HTML$4.9.9 - The `td` element - Interface `HTMLTableHeaderCellElement`
     * Note: Most browsers currently adher to the W3C DOM Level 2 spec
     *       (https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-82915075)
     *       which suggests that browsers should use HTMLTableCellElement for
     *       both TD and TH elements. WhatWG separates these.
     * Test: Object.prototype.toString.call(document.createElement('th'))
     *  - Chrome === "[object HTMLTableCellElement]"
     *  - Firefox === "[object HTMLTableCellElement]"
     *  - Safari === "[object HTMLTableCellElement]"
     */
    if (htmlElementExists && obj instanceof HTMLElement && obj.tagName === 'TH') {
      return 'HTMLTableHeaderCellElement';
    }
  }

  /* ! Speed optimisation
  * Pre:
  *   Float64Array       x 625,644 ops/sec ±1.58% (80 runs sampled)
  *   Float32Array       x 1,279,852 ops/sec ±2.91% (77 runs sampled)
  *   Uint32Array        x 1,178,185 ops/sec ±1.95% (83 runs sampled)
  *   Uint16Array        x 1,008,380 ops/sec ±2.25% (80 runs sampled)
  *   Uint8Array         x 1,128,040 ops/sec ±2.11% (81 runs sampled)
  *   Int32Array         x 1,170,119 ops/sec ±2.88% (80 runs sampled)
  *   Int16Array         x 1,176,348 ops/sec ±5.79% (86 runs sampled)
  *   Int8Array          x 1,058,707 ops/sec ±4.94% (77 runs sampled)
  *   Uint8ClampedArray  x 1,110,633 ops/sec ±4.20% (80 runs sampled)
  * Post:
  *   Float64Array       x 7,105,671 ops/sec ±13.47% (64 runs sampled)
  *   Float32Array       x 5,887,912 ops/sec ±1.46% (82 runs sampled)
  *   Uint32Array        x 6,491,661 ops/sec ±1.76% (79 runs sampled)
  *   Uint16Array        x 6,559,795 ops/sec ±1.67% (82 runs sampled)
  *   Uint8Array         x 6,463,966 ops/sec ±1.43% (85 runs sampled)
  *   Int32Array         x 5,641,841 ops/sec ±3.49% (81 runs sampled)
  *   Int16Array         x 6,583,511 ops/sec ±1.98% (80 runs sampled)
  *   Int8Array          x 6,606,078 ops/sec ±1.74% (81 runs sampled)
  *   Uint8ClampedArray  x 6,602,224 ops/sec ±1.77% (83 runs sampled)
  */
  var stringTag = (symbolToStringTagExists && obj[Symbol.toStringTag]);
  if (typeof stringTag === 'string') {
    return stringTag;
  }

  if (getPrototypeOfExists) {
    var objPrototype = Object.getPrototypeOf(obj);
    /* ! Speed optimisation
    * Pre:
    *   regex literal      x 1,772,385 ops/sec ±1.85% (77 runs sampled)
    *   regex constructor  x 2,143,634 ops/sec ±2.46% (78 runs sampled)
    * Post:
    *   regex literal      x 3,928,009 ops/sec ±0.65% (78 runs sampled)
    *   regex constructor  x 3,931,108 ops/sec ±0.58% (84 runs sampled)
    */
    if (objPrototype === RegExp.prototype) {
      return 'RegExp';
    }

    /* ! Speed optimisation
    * Pre:
    *   date               x 2,130,074 ops/sec ±4.42% (68 runs sampled)
    * Post:
    *   date               x 3,953,779 ops/sec ±1.35% (77 runs sampled)
    */
    if (objPrototype === Date.prototype) {
      return 'Date';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-promise.prototype-@@tostringtag)
     * ES6$25.4.5.4 - Promise.prototype[@@toStringTag] should be "Promise":
     * Test: `Object.prototype.toString.call(Promise.resolve())``
     *  - Chrome <=47 === "[object Object]"
     *  - Edge <=20 === "[object Object]"
     *  - Firefox 29-Latest === "[object Promise]"
     *  - Safari 7.1-Latest === "[object Promise]"
     */
    if (promiseExists && objPrototype === Promise.prototype) {
      return 'Promise';
    }

    /* ! Speed optimisation
    * Pre:
    *   set                x 2,222,186 ops/sec ±1.31% (82 runs sampled)
    * Post:
    *   set                x 4,545,879 ops/sec ±1.13% (83 runs sampled)
    */
    if (setExists && objPrototype === Set.prototype) {
      return 'Set';
    }

    /* ! Speed optimisation
    * Pre:
    *   map                x 2,396,842 ops/sec ±1.59% (81 runs sampled)
    * Post:
    *   map                x 4,183,945 ops/sec ±6.59% (82 runs sampled)
    */
    if (mapExists && objPrototype === Map.prototype) {
      return 'Map';
    }

    /* ! Speed optimisation
    * Pre:
    *   weakset            x 1,323,220 ops/sec ±2.17% (76 runs sampled)
    * Post:
    *   weakset            x 4,237,510 ops/sec ±2.01% (77 runs sampled)
    */
    if (weakSetExists && objPrototype === WeakSet.prototype) {
      return 'WeakSet';
    }

    /* ! Speed optimisation
    * Pre:
    *   weakmap            x 1,500,260 ops/sec ±2.02% (78 runs sampled)
    * Post:
    *   weakmap            x 3,881,384 ops/sec ±1.45% (82 runs sampled)
    */
    if (weakMapExists && objPrototype === WeakMap.prototype) {
      return 'WeakMap';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-dataview.prototype-@@tostringtag)
     * ES6$24.2.4.21 - DataView.prototype[@@toStringTag] should be "DataView":
     * Test: `Object.prototype.toString.call(new DataView(new ArrayBuffer(1)))``
     *  - Edge <=13 === "[object Object]"
     */
    if (dataViewExists && objPrototype === DataView.prototype) {
      return 'DataView';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%mapiteratorprototype%-@@tostringtag)
     * ES6$23.1.5.2.2 - %MapIteratorPrototype%[@@toStringTag] should be "Map Iterator":
     * Test: `Object.prototype.toString.call(new Map().entries())``
     *  - Edge <=13 === "[object Object]"
     */
    if (mapExists && objPrototype === mapIteratorPrototype) {
      return 'Map Iterator';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%setiteratorprototype%-@@tostringtag)
     * ES6$23.2.5.2.2 - %SetIteratorPrototype%[@@toStringTag] should be "Set Iterator":
     * Test: `Object.prototype.toString.call(new Set().entries())``
     *  - Edge <=13 === "[object Object]"
     */
    if (setExists && objPrototype === setIteratorPrototype) {
      return 'Set Iterator';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%arrayiteratorprototype%-@@tostringtag)
     * ES6$22.1.5.2.2 - %ArrayIteratorPrototype%[@@toStringTag] should be "Array Iterator":
     * Test: `Object.prototype.toString.call([][Symbol.iterator]())``
     *  - Edge <=13 === "[object Object]"
     */
    if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
      return 'Array Iterator';
    }

    /* ! Spec Conformance
     * (http://www.ecma-international.org/ecma-262/6.0/index.html#sec-%stringiteratorprototype%-@@tostringtag)
     * ES6$21.1.5.2.2 - %StringIteratorPrototype%[@@toStringTag] should be "String Iterator":
     * Test: `Object.prototype.toString.call(''[Symbol.iterator]())``
     *  - Edge <=13 === "[object Object]"
     */
    if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
      return 'String Iterator';
    }

    /* ! Speed optimisation
    * Pre:
    *   object from null   x 2,424,320 ops/sec ±1.67% (76 runs sampled)
    * Post:
    *   object from null   x 5,838,000 ops/sec ±0.99% (84 runs sampled)
    */
    if (objPrototype === null) {
      return 'Object';
    }
  }

  return Object
    .prototype
    .toString
    .call(obj)
    .slice(toStringLeftSliceLength, toStringRightSliceLength);
};

module.exports.typeDetect = module.exports;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(385)))

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(400)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(385)))

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(15);

var _filterTable = __webpack_require__(398);

var _filterTable2 = _interopRequireDefault(_filterTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;

var FilterTableFrom = function (_React$Component) {
    _inherits(FilterTableFrom, _React$Component);

    function FilterTableFrom(props) {
        _classCallCheck(this, FilterTableFrom);

        return _possibleConstructorReturn(this, (FilterTableFrom.__proto__ || Object.getPrototypeOf(FilterTableFrom)).call(this, props));
    }

    _createClass(FilterTableFrom, [{
        key: 'getChildren',
        value: function getChildren() {
            var _props = this.props,
                children = _props.children,
                form = _props.form;

            var checkConfirm = this.checkConfirm;
            var getFieldDecorator = this.props.form.getFieldDecorator;

            var node = [];

            _react2.default.Children.map(children, function (child, i) {
                var key = child.key,
                    props = child.props;
                var vaildType = props.vaildType,
                    value = props.value,
                    defaultValue = props.defaultValue,
                    errmsg = props.errmsg;


                if (vaildType) {
                    switch (vaildType) {
                        case 'input':
                            node.push(_react2.default.createElement(
                                FormItem,
                                null,
                                getFieldDecorator(key, {
                                    rules: [{
                                        required: true, message: 'Please input your input!'
                                    }]
                                })(child)
                            ));
                            break;
                        case 'select':

                            node.push(_react2.default.createElement(
                                FormItem,
                                null,
                                getFieldDecorator(key, {
                                    rules: [{
                                        required: true, message: errmsg
                                    }],
                                    initialValue: defaultValue
                                })(child)
                            ));
                            break;
                        default:
                            throw new Error('no type in vaildType');
                    }
                } else {
                    node.push(_react2.default.createElement(
                        'span',
                        null,
                        child
                    ));
                }
            });
            return node;
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.getChildren();
            return _react2.default.createElement(
                _antd.Form,
                null,
                children
            );
        }
    }]);

    return FilterTableFrom;
}(_react2.default.Component);

var FilterTableFromContent = _antd.Form.create()(FilterTableFrom);

var FilterTable = function (_React$Component2) {
    _inherits(FilterTable, _React$Component2);

    function FilterTable(props) {
        _classCallCheck(this, FilterTable);

        var _this2 = _possibleConstructorReturn(this, (FilterTable.__proto__ || Object.getPrototypeOf(FilterTable)).call(this, props));

        _this2.state = {
            controlVisible: false
        };
        return _this2;
    }

    _createClass(FilterTable, [{
        key: 'controlVisible',
        value: function controlVisible() {
            var tabDisabled = this.props.tabDisabled;

            this.setState({
                controlVisible: !this.state.controlVisible
            });

            if (tabDisabled) {
                if (!this.state.controlVisible) {
                    document.querySelector('.ant-tabs-tab-active').setAttribute("class", "ant-tabs-tab ant-tabs-tab-active ant-tabs-tab-disabled");
                    var arr = document.querySelectorAll('.ant-tabs-tab:not(.ant-tabs-tab-active)');
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var item = _step.value;

                            item.setAttribute("class", "ant-tabs-tab ant-tabs-tab-disabled");
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                } else {
                    document.querySelector('.ant-tabs-tab-active').setAttribute("class", "ant-tabs-tab ant-tabs-tab-active");
                    var _arr = document.querySelectorAll('.ant-tabs-tab:not(.ant-tabs-tab-active)');
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = _arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var _item = _step2.value;

                            _item.setAttribute("class", "ant-tabs-tab");
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            }
        }
    }, {
        key: 'ok',
        value: function ok() {
            var _props2 = this.props,
                reg = _props2.reg,
                ok = _props2.ok,
                children = _props2.children;

            /**
             * 验证
             */

            var result = false;
            this.FilterTableFromContent.validateFields(function (err, values) {

                if (!err) {
                    console.log('Received values of form: ', values);
                    result = true;
                }
            });
            if (!result) return;

            if (ok) {

                ok();

                this.controlVisible();
                return;
            }

            this.controlVisible();
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            var cancel = this.props.cancel;


            if (cancel) {
                cancel();
                this.controlVisible();
                return;
            }
            this.controlVisible();
        }
    }, {
        key: 'getPopupContainer',
        value: function getPopupContainer(triggerNode) {

            return triggerNode.parentNode;
        }
    }, {
        key: 'contentProps',
        value: function contentProps() {
            var _this3 = this;

            var _props3 = this.props,
                children = _props3.children,
                _props3$hasBtn = _props3.hasBtn,
                hasBtn = _props3$hasBtn === undefined ? true : _props3$hasBtn,
                _props3$btnStyle = _props3.btnStyle,
                btnStyle = _props3$btnStyle === undefined ? {} : _props3$btnStyle;

            return _react2.default.createElement(
                'div',
                { style: { minWidth: 260 } },
                _react2.default.createElement(
                    FilterTableFromContent,
                    { ref: function ref(node) {
                            return _this3.FilterTableFromContent = node;
                        } },
                    children
                ),
                hasBtn ? _react2.default.createElement(
                    'div',
                    { className: 'btn_div', style: btnStyle },
                    _react2.default.createElement(
                        _antd.Button,
                        {
                            className: 'ok',
                            type: 'primary',
                            onClick: function onClick(e) {
                                return _this3.ok(e);
                            }
                        },
                        '\u4FDD\u5B58'
                    ),
                    _react2.default.createElement(
                        _antd.Button,
                        {
                            className: 'cancel',
                            onClick: function onClick(e) {
                                return _this3.cancel(e);
                            }
                        },
                        '\u53D6\u6D88'
                    )
                ) : ''
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props4 = this.props,
                title = _props4.title,
                placement = _props4.placement,
                type = _props4.type,
                dom = _props4.dom,
                overlayStyle = _props4.overlayStyle,
                overlayClassName = _props4.overlayClassName,
                fixed = _props4.fixed;


            var popoverProps = {
                content: this.contentProps(),
                trigger: "click",
                visible: this.state.controlVisible,
                placement: placement ? placement : 'bottom',
                overlayStyle: overlayStyle ? overlayStyle : {},
                overlayClassName: overlayClassName ? overlayClassName : '',
                arrowPointAtCenter: true
            };

            if (fixed) {
                popoverProps.getPopupContainer = function (triggerNode) {
                    return _this4.getPopupContainer(triggerNode);
                };
            }

            return _react2.default.createElement(
                'div',
                { style: { position: 'relative' } },
                title,
                _react2.default.createElement(
                    _antd.Popover,
                    popoverProps,
                    _react2.default.createElement(
                        _antd.Icon,
                        { type: type ? type : '', onClick: function onClick() {
                                return _this4.controlVisible();
                            } },
                        dom ? dom : ''
                    )
                )
            );
        }
    }]);

    return FilterTable;
}(_react2.default.Component);

exports.default = FilterTable;

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(9))(191);

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(432);

var _antd = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaskPrompt = function (_React$Component) {
    _inherits(MaskPrompt, _React$Component);

    function MaskPrompt(props) {
        _classCallCheck(this, MaskPrompt);

        return _possibleConstructorReturn(this, (MaskPrompt.__proto__ || Object.getPrototypeOf(MaskPrompt)).call(this, props));
    }

    _createClass(MaskPrompt, [{
        key: 'hideWindowMask',
        value: function hideWindowMask() {

            this.refs.windowMask.style.display = 'none';
            this.refs.prompt.className = "prompt";
        }
    }, {
        key: 'showWindowMask',
        value: function showWindowMask() {

            this.refs.windowMask.style.display = 'block';
            this.refs.prompt.className = "prompt prompt-show";
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var children = this.props.children;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('div', { ref: 'windowMask', className: 'window-mask', onClick: function onClick() {
                        return _this2.hideWindowMask();
                    } }),
                _react2.default.createElement(
                    'div',
                    { ref: 'prompt', className: 'prompt' },
                    _react2.default.createElement(
                        'div',
                        { className: 'prompt-content' },
                        children,
                        _react2.default.createElement(
                            _antd.Button,
                            {
                                type: 'primary',
                                style: { marginTop: 15 },
                                onClick: function onClick() {
                                    return _this2.hideWindowMask();
                                }
                            },
                            _react2.default.createElement('i', { className: 'anticon anticon-double-left' }),
                            '\u8FD4\u56DE'
                        )
                    )
                )
            );
        }
    }]);

    return MaskPrompt;
}(_react2.default.Component);

exports.default = MaskPrompt;

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(366)();
// imports


// module
exports.push([module.i, ".window-mask {\r\n    display: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0,0,0,0.5);\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 9999;\r\n}\r\n\r\n.prompt {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 10000;\r\n    width: 40%;\r\n    min-height: 100%;\r\n    background: #fff;\r\n    transition: -webkit-transform 0.5s;\r\n    transition: transform 0.5s;\r\n    transition: transform 0.5s, -webkit-transform 0.5s;\r\n    transform: translateX(100%);\r\n    -webkit-transform: translateX(100%);\r\n    -moz-transform: translateX(100%);\r\n    -ms-transform: translateX(100%);\r\n    -o-transform: translateX(100%);\r\n    -webkit-transition: transform 0.5s;\r\n    -moz-transition: transform 0.5s;\r\n    -ms-transition: transform 0.5s;\r\n    -o-transition: transform 0.5s;\r\n}\r\n\r\n.prompt-show {\r\n    transform: translateX(0%);\r\n    -webkit-transform: translateX(0%);\r\n    -moz-transform: translateX(0%);\r\n    -ms-transform: translateX(0%);\r\n    -o-transform: translateX(0%);\r\n}\r\n\r\n.prompt-content {\r\n\tmargin: 20px 30px;\r\n}\r\n\r\n.window-mask-wrapper {\r\n\tdisplay: none\r\n}", ""]);

// exports


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(366)();
// imports


// module
exports.push([module.i, "\r\n.basicSetting---marginBottom10---daKqS{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.basicSetting---existInfoDiv---36hNe{\r\n    width: 260px;\r\n}\r\n.basicSetting---existInfoCol20---2pr8k{\r\n    color: #22baa0;\r\n}\r\n.basicSetting---existInfoCol4---2YMox{\r\n    text-align: right;\r\n}\r\n.basicSetting---existInfoCol4---2YMox span {\r\n    color: #2196F3;\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n}\r\n\r\n.basicSetting---existInfoDiv---36hNe table{\r\n    width: 100%;\r\n    border-collapse: 0;\r\n    border-spacing: 0;\r\n    border-left: 1px solid #e9e9e9;\r\n    border-top: 1px solid #e9e9e9;\r\n}\r\n.basicSetting---existInfoDiv---36hNe table > tr > th{\r\n    background: #f7f7f7;\r\n}\r\n.basicSetting---existInfoDiv---36hNe table > tr > th, .basicSetting---existInfoDiv---36hNe table > tr > td{\r\n    border-right: 1px solid #e9e9e9;\r\n    border-bottom: 1px solid #e9e9e9;\r\n    padding: 5px;\r\n}\r\n\r\n.ant-form-item{\r\n    margin: 5px  0 0 0 !important;\r\n}\r\n\r\n.ant-checkbox-group-item span + span{\r\n    position: relative;\r\n    top: 2px;\r\n}\r\n\r\n\r\n.window-mask {\r\n    width: 103%;\r\n    height: 114%;\r\n    top: -24px;\r\n    left: -24px;\r\n}\r\n\r\n.prompt {\r\n    top: -24px;\r\n    right: -24px;\r\n    min-height: 114%;\r\n}\r\n    \r\n.basicSetting---maskWrapperTitle---2Uzvp{\r\n    overflow: hidden;\r\n    margin: 10px 0;\r\n}\r\n.basicSetting---maskWrapperTitleCol20---21t7H{\r\n    font-weight: bold;\r\n}\r\n.basicSetting---maskWrapperTitleCol4---3rS9_{\r\n    text-align: right;\r\n}\r\n\r\n.basicSetting---smallTableBtn---1G_Av{\r\n    color: #2196F3;\r\n}\r\n.basicSetting---smallTableBtn---1G_Av span{\r\n    cursor: pointer;\r\n}\r\n\r\n.basicSetting---smallTableTextAreaSpan---336pc{\r\n    position: relative;\r\n    top: -34px;\r\n}\r\n\r\n.basicSetting---CheckboxGroup---rKzFS{\r\n    margin-bottom: 10px;\r\n}\r\n.basicSetting---CheckboxGroup---rKzFS .ant-checkbox-group{\r\n    width: 84%;\r\n    display: inline-block;\r\n} \r\n\r\n.basicSetting---packageIdList---19OmW{\r\n    display: inline-block;\r\n    border: 1px solid rgba(158, 158, 158, 0.56);\r\n    padding: 5px 5px;\r\n    min-width: 70px;\r\n    margin: 0 10px 5px 0;\r\n    text-align: center;\r\n    font-size: 12.8px;\r\n}   \r\n\r\n\r\n.basicSetting---deleteErrorI---Nxypi{\r\n    font-size: 32px;\r\n    color: #108ee9;\r\n    position: relative;\r\n    top: -4px;\r\n}\r\n.basicSetting---deleteErrorP---14DPG{\r\n    display: inline-block;\r\n    width: 92%;\r\n    padding-left: 10px;\r\n}\r\n.basicSetting---deleteErrorP---14DPG span{\r\n    color: red;\r\n}\r\n.basicSetting---deleteSuccessI---a7bHl{\r\n    font-size: 32px;\r\n    color: #108ee9;\r\n}\r\n.basicSetting---deleteSuccessP---2CZ0B{\r\n    display: inline-block;\r\n    padding-left: 10px;\r\n    position: relative;\r\n    top: -6px;\r\n}\r\n.basicSetting---deleteSuccessP---2CZ0B span{\r\n    color: #F60;\r\n}", ""]);

// exports
exports.locals = {
	"marginBottom10": "basicSetting---marginBottom10---daKqS",
	"existInfoDiv": "basicSetting---existInfoDiv---36hNe",
	"existInfoCol20": "basicSetting---existInfoCol20---2pr8k",
	"existInfoCol4": "basicSetting---existInfoCol4---2YMox",
	"maskWrapperTitle": "basicSetting---maskWrapperTitle---2Uzvp",
	"maskWrapperTitleCol20": "basicSetting---maskWrapperTitleCol20---21t7H",
	"maskWrapperTitleCol4": "basicSetting---maskWrapperTitleCol4---3rS9_",
	"smallTableBtn": "basicSetting---smallTableBtn---1G_Av",
	"smallTableTextAreaSpan": "basicSetting---smallTableTextAreaSpan---336pc",
	"CheckboxGroup": "basicSetting---CheckboxGroup---rKzFS",
	"packageIdList": "basicSetting---packageIdList---19OmW",
	"deleteErrorI": "basicSetting---deleteErrorI---Nxypi",
	"deleteErrorP": "basicSetting---deleteErrorP---14DPG",
	"deleteSuccessI": "basicSetting---deleteSuccessI---a7bHl",
	"deleteSuccessP": "basicSetting---deleteSuccessP---2CZ0B"
};

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(366)();
// imports


// module
exports.push([module.i, ".ant-tabs-bar {\r\n\tborder-color: #22baa0;\r\n}\r\n\r\n.ant-tabs-nav div:first-child + div{\r\n\tbackground: #fff !important;\r\n\tborder: 0 !important;\r\n\tcolor: #333;\r\n\tfont-size: 15px;\r\n}\r\n\r\n\r\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active{\r\n\tborder-color: #22baa0;\r\n}\r\n\r\n.ant-tabs:not(.index---ant-tabs-vertical---7ril3) > .ant-tabs-content{\r\n\tmin-height: 600px;\r\n}", ""]);

// exports
exports.locals = {
	"ant-tabs-vertical": "index---ant-tabs-vertical---7ril3"
};

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(366)();
// imports


// module
exports.push([module.i, "\r\n.window-mask {\r\n    width: 103%;\r\n    height: 114%;\r\n    top: -24px;\r\n    left: -24px;\r\n}\r\n\r\n.prompt {\r\n    top: -24px;\r\n    right: -24px;\r\n    min-height: 114%;\r\n}\r\n   \r\n.ant-row {\r\n\tmargin: 10px;\r\n}\r\n.ant-col-6{\r\n    text-align: right;\r\n}\r\n\r\n\r\n.insuredmaterials---deleteErrorI---365wW{\r\n    font-size: 32px;\r\n    color: #108ee9;\r\n    position: relative;\r\n    top: -4px;\r\n}\r\n.insuredmaterials---deleteErrorP---3QqWs{\r\n    display: inline-block;\r\n    width: 92%;\r\n    padding-left: 10px;\r\n}\r\n.insuredmaterials---deleteErrorP---3QqWs span{\r\n    color: red;\r\n}\r\n\r\n.insuredmaterials---deleteSuccessI---2AYVJ{\r\n    font-size: 32px;\r\n    color: #108ee9;\r\n}\r\n.insuredmaterials---deleteSuccessP---3k4pJ{\r\n    display: inline-block;\r\n    padding-left: 10px;\r\n    position: relative;\r\n    top: -6px;\r\n}\r\n.insuredmaterials---deleteSuccessP---3k4pJ span{\r\n    color: #F60;\r\n}\r\n\r\n.insuredmaterials---materialName---3geYc{\r\n    color: #22baa0;\r\n    font-weight: bold;\r\n    font-size: 16px;\r\n}\r\n\r\n.insuredmaterials---materialTable---2Esiq{\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    border-collapse: 0;\r\n    border-spacing: 0;\r\n    border-left: 1px solid #e9e9e9;\r\n    border-top: 1px solid #e9e9e9;\r\n}\r\n.insuredmaterials---materialTable---2Esiq > tr > th{\r\n    background: #f7f7f7;\r\n}\r\n.insuredmaterials---materialTable---2Esiq > tr > th, .insuredmaterials---materialTable---2Esiq > tr > td{\r\n    text-align: left;\r\n    border-right: 1px solid #e9e9e9;\r\n    border-bottom: 1px solid #e9e9e9;\r\n    padding: 5px;\r\n}\r\n\r\n.insuredmaterials---createMaterialBtn---12Wzo{\r\n    position: absolute;\r\n    top: -48px;\r\n    right: 0;\r\n}\r\n", ""]);

// exports
exports.locals = {
	"deleteErrorI": "insuredmaterials---deleteErrorI---365wW",
	"deleteErrorP": "insuredmaterials---deleteErrorP---3QqWs",
	"deleteSuccessI": "insuredmaterials---deleteSuccessI---2AYVJ",
	"deleteSuccessP": "insuredmaterials---deleteSuccessP---3k4pJ",
	"materialName": "insuredmaterials---materialName---3geYc",
	"materialTable": "insuredmaterials---materialTable---2Esiq",
	"createMaterialBtn": "insuredmaterials---createMaterialBtn---12Wzo"
};

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bool = _propTypes2.default.bool,
    func = _propTypes2.default.func,
    object = _propTypes2.default.object,
    shape = _propTypes2.default.shape,
    string = _propTypes2.default.string;


var transitionDuration = 300;

var defaults = {
  styles: {
    image: {
      cursor: 'zoom-in'
    },
    zoomImage: {
      cursor: 'zoom-out',
      position: 'absolute',
      transition: 'transform ' + transitionDuration + 'ms',
      transform: 'translate3d(0, 0, 0) scale(1)',
      transformOrigin: 'center center',
      willChange: 'transform, top, left'
    },
    zoomContainer: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 999
    },
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#fff',
      opacity: 0,
      transition: 'opacity ' + transitionDuration + 'ms'
    }
  }
};

var ImageZoom = function (_Component) {
  _inherits(ImageZoom, _Component);

  function ImageZoom(props) {
    _classCallCheck(this, ImageZoom);

    var _this = _possibleConstructorReturn(this, (ImageZoom.__proto__ || Object.getPrototypeOf(ImageZoom)).call(this, props));

    _this.state = {
      isZoomed: props.isZoomed,
      image: props.image,
      hasAlreadyLoaded: false
    };

    _this.handleZoom = _this.handleZoom.bind(_this);
    _this.handleUnzoom = _this.handleUnzoom.bind(_this);
    return _this;
  }

  _createClass(ImageZoom, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.isZoomed) this.renderZoomed();
    }

    // Clean up any mess we made of the DOM before we unmount

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeZoomed();
    }

    /**
     * We need to check to see if any changes are being
     * mandated by the consumer and if so, update accordingly
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var imageChanged = this.props.image.src !== nextProps.image.src;
      var isZoomedChanged = this.state.isZoomed !== nextProps.isZoomed;
      var changes = _extends({}, imageChanged && { image: nextProps.image }, isZoomedChanged && { isZoomed: nextProps.isZoomed });

      if (Object.keys(changes).length) {
        this.setState(changes);
      }
    }

    /**
     * When the component's state updates, check for changes
     * and either zoom or start the unzoom procedure
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_, prevState) {
      if (prevState.isZoomed !== this.state.isZoomed) {
        if (this.state.isZoomed) this.renderZoomed();else if (this.portalInstance) this.portalInstance.handleUnzoom();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      /**
       * Take whatever attributes you want to pass the image
       * and then override with the properties we need
       */
      var attrs = _extends({}, this.state.image, {
        style: this.getImageStyle(),
        onClick: this.handleZoom
      });

      var image = _react2.default.createElement('img', _extends({ ref: 'image' }, attrs));

      if (this.props.shouldPreload && this.props.zoomImage && this.props.zoomImage.src) {
        return _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement('link', { rel: 'preload', href: this.props.zoomImage.src, as: 'image' }),
          image
        );
      }

      return image;
    }

    // Side-effects!

  }, {
    key: 'renderZoomed',
    value: function renderZoomed() {
      this.portal = createPortal('div');
      this.portalInstance = _reactDom2.default.render(_react2.default.createElement(Zoom, {
        zoomImage: this.props.zoomImage,
        image: _reactDom2.default.findDOMNode(this.refs.image),
        defaultStyles: this.props.defaultStyles,
        hasAlreadyLoaded: this.state.hasAlreadyLoaded,
        shouldRespectMaxDimension: this.props.shouldRespectMaxDimension,
        zoomMargin: this.props.zoomMargin,
        onClick: this.handleUnzoom
      }), this.portal);
    }

    // Side-effects!

  }, {
    key: 'removeZoomed',
    value: function removeZoomed() {
      if (this.portal) {
        _reactDom2.default.unmountComponentAtNode(this.portal);
        removePortal(this.portal);
        delete this.portalInstance;
        delete this.portal;
      }
    }
  }, {
    key: 'getImageStyle',
    value: function getImageStyle() {
      var style = _extends({}, this.state.isZoomed && { visibility: 'hidden' });

      return _extends({}, defaults.styles.image, style, this.props.defaultStyles.image, this.state.image.style);
    }
  }, {
    key: 'handleZoom',
    value: function handleZoom(event) {
      if (this.props.shouldHandleZoom(event)) {
        this.setState({ isZoomed: true }, this.props.onZoom);
      }
    }

    /**
     * This gets passed to the zoomed component as a callback
     * to trigger when the time is right to shut down the zoom.
     * If `shouldReplaceImage`, update the normal image we're showing
     * with the zoomed image -- useful when wanting to replace a low-res
     * image with a high-res one once it's already been downloaded.
     * It also cleans up the zoom references and then updates state.
     */

  }, {
    key: 'handleUnzoom',
    value: function handleUnzoom(src) {
      var _this2 = this;

      return function () {
        var changes = _extends({}, { isZoomed: false }, { hasAlreadyLoaded: true }, _this2.props.shouldReplaceImage && { image: _extends({}, _this2.state.image, { src: src }) });

        /**
         * Lamentable but necessary right now in order to
         * remove the portal instance before the next
         * `componentDidUpdate` check for the portalInstance.
         * The reasoning is so we can differentiate between an
         * external `isZoomed` command and an internal one.
         */
        _this2.removeZoomed();

        _this2.setState(changes, _this2.props.onUnzoom);
      };
    }
  }], [{
    key: 'defaultProps',
    get: function get() {
      return {
        isZoomed: false,
        shouldReplaceImage: true,
        shouldRespectMaxDimension: false,
        zoomMargin: 40,
        defaultStyles: {
          zoomContainer: {},
          overlay: {},
          image: {},
          zoomImage: {}
        },
        shouldHandleZoom: function shouldHandleZoom(_) {
          return true;
        },
        onZoom: function onZoom() {},
        onUnzoom: function onUnzoom() {}
      };
    }
  }]);

  return ImageZoom;
}(_react.Component);

exports.default = ImageZoom;


ImageZoom.propTypes = {
  image: shape({
    src: string.isRequired,
    alt: string,
    className: string,
    style: object
  }).isRequired,
  zoomImage: shape({
    src: string,
    alt: string,
    className: string,
    style: object
  }),
  defaultStyles: object,
  isZoomed: bool,
  shouldHandleZoom: func,
  shouldPreload: bool,
  shouldReplaceImage: bool,
  shouldRespectMaxDimension: bool,
  onZoom: func,
  onUnzoom: func
};

//====================================================

var Zoom = function (_Component2) {
  _inherits(Zoom, _Component2);

  function Zoom(props) {
    _classCallCheck(this, Zoom);

    var _this3 = _possibleConstructorReturn(this, (Zoom.__proto__ || Object.getPrototypeOf(Zoom)).call(this, props));

    _this3.state = {
      hasLoaded: false,
      isZoomed: true,
      src: _this3.props.image.currentSrc || _this3.props.image.src
    };

    _this3.handleResize = _this3.handleResize.bind(_this3);
    _this3.handleUnzoom = _this3.handleUnzoom.bind(_this3);
    _this3.handleScroll = _this3.handleScroll.bind(_this3);
    _this3.handleKeyUp = _this3.handleKeyUp.bind(_this3);
    _this3.handleTouchStart = _this3.handleTouchStart.bind(_this3);
    _this3.handleTouchMove = _this3.handleTouchMove.bind(_this3);
    _this3.handleTouchEnd = _this3.handleTouchEnd.bind(_this3);
    return _this3;
  }

  _createClass(Zoom, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          hasAlreadyLoaded = _props.hasAlreadyLoaded,
          _props$zoomImage = _props.zoomImage,
          src = _props$zoomImage.src,
          srcSet = _props$zoomImage.srcSet;


      this.setState({ hasLoaded: true });
      if ((src || srcSet) && !hasAlreadyLoaded) this.fetchZoomImage();
      this.addListeners();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          defaultStyles = _props2.defaultStyles,
          zoomImage = _props2.zoomImage;
      var _state = this.state,
          isZoomed = _state.isZoomed,
          src = _state.src;


      return _react2.default.createElement(
        'div',
        { onClick: this.handleUnzoom, style: this.getZoomContainerStyle() },
        _react2.default.createElement(Overlay, {
          isVisible: isZoomed,
          defaultStyles: defaultStyles
        }),
        _react2.default.createElement('img', _extends({}, zoomImage, {
          src: src,
          style: this.getZoomImageStyle()
        }))
      );
    }
  }, {
    key: 'getZoomContainerStyle',
    value: function getZoomContainerStyle() {
      return _extends({}, defaults.styles.zoomContainer, this.props.defaultStyles.zoomContainer);
    }
  }, {
    key: 'fetchZoomImage',
    value: function fetchZoomImage() {
      var _this4 = this;

      var _props$zoomImage2 = this.props.zoomImage,
          src = _props$zoomImage2.src,
          srcSet = _props$zoomImage2.srcSet,
          sizes = _props$zoomImage2.sizes;

      var img = new Image();

      img.src = src;
      if (srcSet) img.srcset = srcSet;
      if (sizes) img.sizes = sizes;

      var onLoad = function onLoad() {
        // Only set state if component is still mounted
        if (_this4.state.isZoomed) {
          _this4.setState({ hasLoaded: true, src: img.currentSrc || img.src });
        }

        /**
         * If using srcset, future resize events can trigger
         * additional onload events to fire.
         * Remove listener after first load
         */
        img.removeEventListener('load', onLoad);
      };

      img.addEventListener('load', onLoad);
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      this.isTicking = false;
      window.addEventListener('resize', this.handleResize);
      window.addEventListener('scroll', this.handleScroll, true);
      window.addEventListener('keyup', this.handleKeyUp);
      window.addEventListener('ontouchstart', this.handleTouchStart);
      window.addEventListener('ontouchmove', this.handleTouchMove);
      window.addEventListener('ontouchend', this.handleTouchEnd);
      window.addEventListener('ontouchcancel', this.handleTouchEnd);
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      window.removeEventListener('resize', this.handleResize);
      window.removeEventListener('scroll', this.handleScroll, true);
      window.removeEventListener('keyup', this.handleKeyUp);
      window.removeEventListener('ontouchstart', this.handleTouchStart);
      window.removeEventListener('ontouchmove', this.handleTouchMove);
      window.removeEventListener('ontouchend', this.handleTouchEnd);
      window.removeEventListener('ontouchcancel', this.handleTouchEnd);
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      this.forceUpdate();
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      this.forceUpdate();
      if (this.state.isZoomed) this.handleUnzoom();
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(_ref) {
      var which = _ref.which;

      var opts = {
        27: this.handleUnzoom
      };

      if (opts[which]) return opts[which]();
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(e) {
      this.yTouchPosition = e.touches[0].clientY;
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(e) {
      this.forceUpdate();
      var touchChange = Math.abs(e.touches[0].clientY - this.yTouchPosition);
      if (touchChange > 10 && this.state.isZoomed) this.handleUnzoom();
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(e) {
      delete this.yTouchPosition;
    }
  }, {
    key: 'handleUnzoom',
    value: function handleUnzoom(e) {
      var _this5 = this;

      if (e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }
      this.setState({ isZoomed: false }, function () {
        return setTimeout(_this5.props.onClick(_this5.state.src), transitionDuration);
      });
    }
  }, {
    key: 'getZoomImageStyle',
    value: function getZoomImageStyle() {
      var _props3 = this.props,
          image = _props3.image,
          shouldRespectMaxDimension = _props3.shouldRespectMaxDimension,
          src = _props3.src,
          zoomMargin = _props3.zoomMargin;

      var imageOffset = image.getBoundingClientRect();

      var top = imageOffset.top,
          left = imageOffset.left;
      var width = image.width,
          height = image.height,
          naturalWidth = image.naturalWidth,
          naturalHeight = image.naturalHeight;


      var style = { top: top, left: left, width: width, height: height };

      if (!this.state.hasLoaded || !this.state.isZoomed) {
        return _extends({}, defaults.styles.zoomImage, this.props.defaultStyles.zoomImage, this.props.style, style);
      }

      // Get the the coords for center of the viewport
      var viewportX = window.innerWidth / 2;
      var viewportY = window.innerHeight / 2;

      // Get the coords for center of the original image
      var imageCenterX = imageOffset.left + width / 2;
      var imageCenterY = imageOffset.top + height / 2;

      // Get offset amounts for image coords to be centered on screen
      var translateX = viewportX - imageCenterX;
      var translateY = viewportY - imageCenterY;

      // Figure out how much to scale the image
      var scale = shouldRespectMaxDimension && !src ? getMaxDimensionScale({ width: width, height: height, naturalWidth: naturalWidth, naturalHeight: naturalHeight, zoomMargin: zoomMargin }) : getScale({ width: width, height: height, zoomMargin: zoomMargin });

      var zoomStyle = {
        transform: 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0) scale(' + scale + ')'
      };

      return _extends({}, defaults.styles.zoomImage, this.props.defaultStyles.zoomImage, this.props.style, style, zoomStyle);
    }
  }], [{
    key: 'defaultProps',
    get: function get() {
      return {
        zoomImage: {}
      };
    }
  }]);

  return Zoom;
}(_react.Component);

/**
 * Figure out how much to scale based
 * solely on no maxing out the browser
 */


function getScale(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      zoomMargin = _ref2.zoomMargin;

  var scaleX = window.innerWidth / (width + zoomMargin);
  var scaleY = window.innerHeight / (height + zoomMargin);
  return Math.min(scaleX, scaleY);
}

/**
 * Figure out how much to scale so you're
 * not larger than the original image
 */
function getMaxDimensionScale(_ref3) {
  var width = _ref3.width,
      height = _ref3.height,
      naturalWidth = _ref3.naturalWidth,
      naturalHeight = _ref3.naturalHeight,
      zoomMargin = _ref3.zoomMargin;

  var scale = getScale({ width: naturalWidth, height: naturalHeight, zoomMargin: zoomMargin });
  var ratio = naturalWidth > naturalHeight ? naturalWidth / width : naturalHeight / height;
  return scale > 1 ? ratio : scale * ratio;
}

Zoom.propTypes = {
  zoomImage: shape({
    src: string,
    alt: string,
    className: string,
    style: object
  }).isRequired,
  image: object.isRequired,
  hasAlreadyLoaded: bool.isRequired,
  defaultStyles: object.isRequired
};

//====================================================

var Overlay = function (_Component3) {
  _inherits(Overlay, _Component3);

  function Overlay(props) {
    _classCallCheck(this, Overlay);

    var _this6 = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props));

    _this6.state = {
      isVisible: false
    };
    return _this6;
  }

  _createClass(Overlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isVisible: true });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.isVisible) this.setState({ isVisible: false });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.isVisible !== nextProps.isVisible || this.state.isVisible !== nextProps.isVisible;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: this.getStyle() });
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      var opacity = this.state.isVisible & 1; // bitwise and; converts bool to 0 or 1
      return _extends({}, defaults.styles.overlay, { opacity: opacity }, this.props.defaultStyles.overlay);
    }
  }]);

  return Overlay;
}(_react.Component);

Overlay.propTypes = {
  isVisible: bool.isRequired,
  defaultStyles: object.isRequired
};

//====================================================

function createPortal(tag) {
  var portal = document.createElement(tag);
  document.body.appendChild(portal);
  return portal;
}

function removePortal(portal) {
  document.body.removeChild(portal);
}


/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(413);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(365)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../../node_modules/.1.2.2@postcss-loader/index.js!./maskPrompt.css", function() {
			var newContent = require("!!../../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../../node_modules/.1.2.2@postcss-loader/index.js!./maskPrompt.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(417);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(365)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../node_modules/.1.2.2@postcss-loader/index.js!./basicSetting.css", function() {
			var newContent = require("!!../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../node_modules/.1.2.2@postcss-loader/index.js!./basicSetting.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(418);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(365)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../node_modules/.1.2.2@postcss-loader/index.js!./index.css", function() {
			var newContent = require("!!../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../node_modules/.1.2.2@postcss-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(419);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(365)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../node_modules/.1.2.2@postcss-loader/index.js!./insuredmaterials.css", function() {
			var newContent = require("!!../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../node_modules/.1.2.2@postcss-loader/index.js!./insuredmaterials.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlledComponent = function (_React$Component) {
    _inherits(ControlledComponent, _React$Component);

    function ControlledComponent() {
        _classCallCheck(this, ControlledComponent);

        return _possibleConstructorReturn(this, (ControlledComponent.__proto__ || Object.getPrototypeOf(ControlledComponent)).apply(this, arguments));
    }

    _createClass(ControlledComponent, [{
        key: 'render',


        // constructor(props) {
        //     super(porps);
        // }

        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_antd.Input, { key: '1', ref: function ref(node) {
                        return _this2.node1 = node;
                    } }),
                _react2.default.createElement(_antd.Input, { key: '2', ref: function ref(node) {
                        return _this2.node2 = node;
                    } })
            );
        }
    }]);

    return ControlledComponent;
}(_react2.default.Component);

exports.default = ControlledComponent;

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lib = __webpack_require__(386);

var _lib2 = _interopRequireDefault(_lib);

var _antd = __webpack_require__(15);

var _reactRedux = __webpack_require__(44);

var _filterTable = __webpack_require__(403);

var _filterTable2 = _interopRequireDefault(_filterTable);

var _controlledComponent = __webpack_require__(442);

var _controlledComponent2 = _interopRequireDefault(_controlledComponent);

var _maskPrompt = __webpack_require__(409);

var _maskPrompt2 = _interopRequireDefault(_maskPrompt);

var _basicSetting = __webpack_require__(435);

var _basicSetting2 = _interopRequireDefault(_basicSetting);

var _basicSettingAction = __webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;
var TabPane = _antd.Tabs.TabPane;
var CheckboxGroup = _antd.Checkbox.Group;

var BasicSettingApp = function (_React$Component) {
    _inherits(BasicSettingApp, _React$Component);

    function BasicSettingApp(props) {
        _classCallCheck(this, BasicSettingApp);

        var _this = _possibleConstructorReturn(this, (BasicSettingApp.__proto__ || Object.getPrototypeOf(BasicSettingApp)).call(this, props));

        _this.setChangeCache = {
            insuranceTel: '',
            insuranceUrl: '',
            housingFundTel: '',
            housingFundUrl: '',
            existAreaPackage: []
        };

        _this.getcolumns = function () {
            return [{
                title: _react2.default.createElement(
                    _filterTable2.default,
                    { title: '\u7701\u4EFD',
                        type: 'filter',
                        fixed: true,
                        placement: 'right',
                        ok: function ok(e) {
                            return _this.searchBtn('province');
                        }
                    },
                    _react2.default.createElement(
                        _antd.Select,
                        {
                            key: 'province',
                            vaildType: 'select',
                            placeholder: '\u8BF7\u9009\u62E9',
                            allowClear: true
                            //defaultValue={this.props.province ? this.props.province : '请选择'}

                            //value={this.state.province}
                            //onChange={value => this.handleSearchChangeCache(value, 'province')}
                        },
                        _react2.default.createElement(
                            Option,
                            { value: 'zhejiang' },
                            '\u6D59\u6C5F'
                        )
                    )
                ),
                dataIndex: 'provinceName',
                key: 'provinceName'
            }, {
                title: _react2.default.createElement(
                    _filterTable2.default,
                    {
                        title: '\u57CE\u5E02',
                        type: 'filter',
                        fixed: true,
                        ok: function ok(e) {
                            return _this.searchBtn('city');
                        }
                    },
                    _react2.default.createElement(
                        _antd.Select,
                        {
                            key: 'city',
                            vaildType: 'select',
                            placeholder: '\u8BF7\u9009\u62E9',
                            allowClear: true
                            //defaultValue={this.props.city ? this.props.city : '请选择'}
                            , style: { width: '100%' }
                            //value={this.state.city}
                            //onChange={value => this.handleSearchChangeCache(value, 'province')}
                        },
                        _react2.default.createElement(
                            Option,
                            { value: 'hangzhou' },
                            '\u676D\u5DDE'
                        )
                    )
                ),
                dataIndex: 'cityName',
                key: 'cityName'
            }, {
                title: '区域',
                // title: <FilterTable 
                //             title="区域" 
                //             fixed={true}
                //             dom={
                //                 <span style={{color:'#F60',textDecoration: 'underline',cursor:'pointer'}}>请设置</span>
                //             }
                //             ok={e => this.searchBtn('city')}
                //         >
                //     <Input key="input1" vaildType="input" />
                //     <Input key="input2" vaildType="input" />
                // </FilterTable>,
                dataIndex: 'areaName',
                key: 'areaName'
            }, {
                title: '是否属主城区',
                dataIndex: 'isMainArea',
                key: 'isMainArea',
                render: function render(text, record) {

                    if (text) {
                        return _react2.default.createElement(
                            _filterTable2.default,
                            {
                                title: '',
                                dom: _react2.default.createElement(
                                    'span',
                                    {
                                        style: { color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }
                                    },
                                    '\u662F'
                                ),
                                fixed: true,
                                ok: function ok(e) {
                                    return _this.updateBtn(record.areaId, 'isMainArea');
                                }
                            },
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    laceholder: '\u8BF7\u9009\u62E9',
                                    onChange: function onChange(value) {
                                        return _this.handleSetChangeCache(value, 'isMainArea');
                                    },
                                    defaultValue: text
                                },
                                _react2.default.createElement(
                                    Option,
                                    { value: true },
                                    '\u662F'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: false },
                                    '\u5426'
                                )
                            )
                        );
                    } else {
                        return _react2.default.createElement(
                            _filterTable2.default,
                            {
                                title: '',
                                dom: _react2.default.createElement(
                                    'span',
                                    {
                                        style: { color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }
                                    },
                                    '\u5426'
                                ),
                                fixed: true,
                                ok: function ok(e) {
                                    return _this.updateBtn(record.areaId, 'isMainArea');
                                }
                            },
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    placeholder: '\u8BF7\u9009\u62E9',
                                    onChange: function onChange(value) {
                                        return _this.handleSetChangeCache(value, 'isMainArea');
                                    },
                                    defaultValue: text
                                },
                                _react2.default.createElement(
                                    Option,
                                    { value: true },
                                    '\u662F'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: false },
                                    '\u5426'
                                )
                            )
                        );
                    }
                }
            }, {
                title: '官方查询信息',
                dataIndex: 'existInfo',
                key: 'existInfo',
                render: function render(text, record, index) {
                    var areaId = record.areaId,
                        insuranceTel = record.insuranceTel,
                        insuranceUrl = record.insuranceUrl,
                        housingFundTel = record.housingFundTel,
                        housingFundUrl = record.housingFundUrl,
                        provinceName = record.provinceName,
                        cityName = record.cityName,
                        areaName = record.areaName;


                    var thisId = 'existInfo-' + index;

                    var obj = {
                        thisId: thisId,
                        areaId: areaId,
                        provinceName: provinceName,
                        cityName: cityName,
                        areaName: areaName,
                        insuranceTel: insuranceTel,
                        insuranceUrl: insuranceUrl,
                        housingFundTel: housingFundTel,
                        housingFundUrl: housingFundUrl
                    };

                    if (text) {
                        return _react2.default.createElement(
                            _filterTable2.default,
                            {
                                title: '',
                                dom: _react2.default.createElement(
                                    'span',
                                    {
                                        id: thisId,
                                        style: { color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }
                                    },
                                    '\u67E5\u770B'
                                ),
                                hasBtn: false,
                                tabDisabled: true,
                                overlayStyle: { width: 430 }
                            },
                            _react2.default.createElement(
                                'div',
                                { className: _basicSetting2.default.existInfoDiv, style: { width: 400 } },
                                _react2.default.createElement(
                                    'div',
                                    { style: { height: 30 } },
                                    _react2.default.createElement(
                                        _antd.Col,
                                        { span: '20', className: _basicSetting2.default.existInfoCol20 },
                                        provinceName,
                                        ' - ',
                                        cityName,
                                        ' - ',
                                        areaName
                                    ),
                                    _react2.default.createElement(
                                        _antd.Col,
                                        { span: '4', className: _basicSetting2.default.existInfoCol4 },
                                        _react2.default.createElement(
                                            'span',
                                            { onClick: function onClick(e) {
                                                    return _this.existInfoEditBtn(obj);
                                                } },
                                            '\u7F16\u8F91'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'table',
                                        null,
                                        _react2.default.createElement(
                                            'tr',
                                            null,
                                            _react2.default.createElement(
                                                'th',
                                                { width: '90' },
                                                '\u5206\u7C7B'
                                            ),
                                            _react2.default.createElement(
                                                'th',
                                                null,
                                                '\u7535\u8BDD'
                                            ),
                                            _react2.default.createElement(
                                                'th',
                                                null,
                                                '\u7F51\u5740'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'tr',
                                            null,
                                            _react2.default.createElement(
                                                'td',
                                                null,
                                                '\u793E\u4FDD\u5C40'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                null,
                                                insuranceTel
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                null,
                                                'http://',
                                                insuranceUrl
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'tr',
                                            null,
                                            _react2.default.createElement(
                                                'td',
                                                null,
                                                '\u516C\u79EF\u91D1\u4E2D\u5FC3'
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                null,
                                                housingFundTel
                                            ),
                                            _react2.default.createElement(
                                                'td',
                                                null,
                                                'http://',
                                                housingFundUrl
                                            )
                                        )
                                    )
                                )
                            )
                        );
                    } else {
                        return _react2.default.createElement(
                            'span',
                            {
                                id: thisId,
                                style: { color: '#F60', textDecoration: 'underline', cursor: 'pointer' },
                                onClick: function onClick(e) {
                                    return _this.existInfoEditBtn(obj);
                                }
                            },
                            '\u8BF7\u8BBE\u7F6E'
                        );
                    }
                }
            }, {
                title: '社保参保类型',
                dataIndex: 'existInsurance',
                key: 'existInsurance',
                render: function render(text, record, index) {
                    var _this$props = _this.props,
                        dataSource = _this$props.dataSource,
                        socialList = _this$props.socialList;


                    if (text) {
                        return _react2.default.createElement(
                            'span',
                            {
                                style: { color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' },
                                onClick: function onClick() {
                                    return _this.showWindowMask(dataSource[index], 'existInsurance', index);
                                }
                            },
                            '\u67E5\u770B'
                        );
                    } else {
                        return _react2.default.createElement(
                            'span',
                            {
                                style: { color: '#F60', textDecoration: 'underline', cursor: 'pointer' },
                                onClick: function onClick() {
                                    return _this.editOrNewSmallTable('existInsurance', Object.assign({}, socialList, { areaId: record.areaId }));
                                }
                            },
                            '\u8BF7\u8BBE\u7F6E'
                        );
                    }
                }
            }, {
                title: '公积金参保类型',
                dataIndex: 'existHousingFund',
                key: 'existHousingFund',
                render: function render(text, record, index) {
                    var _this$props2 = _this.props,
                        dataSource = _this$props2.dataSource,
                        fundList = _this$props2.fundList;


                    if (text) {
                        return _react2.default.createElement(
                            'span',
                            {
                                style: { color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' },
                                onClick: function onClick() {
                                    return _this.showWindowMask(dataSource[index], 'existHousingFund', index);
                                }
                            },
                            '\u67E5\u770B'
                        );
                    } else {
                        return _react2.default.createElement(
                            'span',
                            {
                                style: { color: '#F60', textDecoration: 'underline', cursor: 'pointer' },
                                onClick: function onClick() {
                                    return _this.editOrNewSmallTable('existHousingFund', Object.assign({}, fundList, { areaId: record.areaId }));
                                }
                            },
                            '\u8BF7\u8BBE\u7F6E'
                        );
                    }
                }
            }, {
                title: '当地社保截点日',
                dataIndex: 'insuranceDeadline',
                key: 'insuranceDeadline',
                render: function render(text, record) {
                    if (text) {
                        return _react2.default.createElement(
                            _filterTable2.default,
                            {
                                title: '',
                                dom: _react2.default.createElement(
                                    'span',
                                    { style: { color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' } },
                                    text
                                ),
                                fixed: true,
                                ok: function ok(e) {
                                    return _this.updateBtn(record.areaId, 'insuranceDeadline');
                                }
                            },
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    key: 'insuranceDeadline',
                                    vaildType: 'select',
                                    placeholder: '\u8BF7\u9009\u62E9',
                                    errmsg: '\u8BF7\u8BBE\u7F6E\u5F53\u5730\u793E\u4FDD\u7684\u622A\u70B9\u65E5',
                                    onChange: function onChange(value) {
                                        return _this.handleSetChangeCache(value, 'insuranceDeadline');
                                    },
                                    defaultValue: text ? text : ''
                                },
                                _this.getSelect()
                            )
                        );
                    } else {
                        return _react2.default.createElement(
                            _filterTable2.default,
                            {
                                title: '',
                                dom: _react2.default.createElement(
                                    'span',
                                    { style: { color: '#F60', textDecoration: 'underline', cursor: 'pointer' } },
                                    '\u8BF7\u8BBE\u7F6E'
                                ),
                                fixed: true,
                                ok: function ok(e) {
                                    return _this.updateBtn(record.areaId, 'insuranceDeadline');
                                }
                            },
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    key: 'insuranceDeadline',
                                    vaildType: 'select',
                                    placeholder: '\u8BF7\u9009\u62E9',
                                    errmsg: '\u8BF7\u8BBE\u7F6E\u5F53\u5730\u793E\u4FDD\u7684\u622A\u70B9\u65E5',
                                    onChange: function onChange(value) {
                                        return _this.handleSetChangeCache(value, 'insuranceDeadline');
                                    },
                                    defaultValue: text ? text : ''
                                },
                                _this.getSelect()
                            )
                        );
                    }
                }
            }, {
                title: '当地公积金截点日',
                dataIndex: 'housingFundDeadline',
                key: 'housingFundDeadline',
                render: function render(text, record) {
                    if (text) {
                        return _react2.default.createElement(
                            _filterTable2.default,
                            {
                                title: '',
                                dom: _react2.default.createElement(
                                    'span',
                                    { style: { color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' } },
                                    text
                                ),
                                fixed: true,
                                ok: function ok(e) {
                                    return _this.updateBtn(record.areaId, 'housingFundDeadline');
                                }
                            },
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    key: 'housingFundDeadline',
                                    vaildType: 'select',
                                    placeholder: '\u8BF7\u9009\u62E9',
                                    errmsg: '\u8BF7\u8BBE\u7F6E\u5F53\u5730\u516C\u79EF\u91D1\u7684\u622A\u70B9\u65E5',
                                    onChange: function onChange(value) {
                                        return _this.handleSetChangeCache(value, 'housingFundDeadline');
                                    },
                                    defaultValue: text ? text : ''
                                },
                                _this.getSelect()
                            )
                        );
                    } else {
                        return _react2.default.createElement(
                            _filterTable2.default,
                            {
                                title: '',
                                dom: _react2.default.createElement(
                                    'span',
                                    { style: { color: '#F60', textDecoration: 'underline', cursor: 'pointer' } },
                                    '\u8BF7\u8BBE\u7F6E'
                                ),
                                fixed: true,
                                ok: function ok(e) {
                                    return _this.updateBtn(record.areaId, 'housingFundDeadline');
                                }
                            },
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    key: 'housingFundDeadline',
                                    vaildType: 'select',
                                    placeholder: '\u8BF7\u9009\u62E9',
                                    errmsg: '\u8BF7\u8BBE\u7F6E\u5F53\u5730\u516C\u79EF\u91D1\u7684\u622A\u70B9\u65E5',
                                    onChange: function onChange(value) {
                                        return _this.handleSetChangeCache(value, 'housingFundDeadline');
                                    },
                                    defaultValue: text ? text : ''
                                },
                                _this.getSelect()
                            )
                        );
                    }
                }
            }, {
                title: '开通产品',
                dataIndex: 'existAreaPackage',
                key: 'existAreaPackage',
                render: function render(text, record, index) {
                    var areaPackageList = record.areaPackageList,
                        provinceName = record.provinceName,
                        cityName = record.cityName,
                        areaName = record.areaName,
                        areaId = record.areaId;
                    var packageListOptions = _this.props.packageListOptions;


                    var spanArr = [];

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = areaPackageList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var item = _step.value;

                            spanArr.push(_react2.default.createElement(
                                'span',
                                { className: _basicSetting2.default.packageIdList },
                                item.packageName
                            ));
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    if (text) {
                        return _react2.default.createElement(
                            _filterTable2.default,
                            {
                                title: '',
                                dom: _react2.default.createElement(
                                    'span',
                                    { style: { color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' } },
                                    '\u67E5\u770B'
                                ),
                                ok: function ok(e) {
                                    return _this.existAreaPackageOkBtn(areaId, 'packageIdList');
                                },
                                cancel: function cancel(e) {
                                    return _this.existAreaPackageCancelBtn();
                                },
                                hasBtn: _this.state.hasBtn,
                                tabDisabled: true,
                                btnStyle: { position: 'relative', top: '30px' }
                            },
                            _this.state.isEdit ? _react2.default.createElement(
                                'div',
                                { className: _basicSetting2.default.existInfoDiv },
                                _react2.default.createElement(
                                    'div',
                                    { style: { height: 30 } },
                                    _react2.default.createElement(
                                        _antd.Col,
                                        { span: '20', className: _basicSetting2.default.existInfoCol20 },
                                        provinceName,
                                        ' - ',
                                        cityName,
                                        ' - ',
                                        areaName
                                    ),
                                    _react2.default.createElement(
                                        _antd.Col,
                                        { span: '4', className: _basicSetting2.default.existInfoCol4 },
                                        _react2.default.createElement(
                                            'span',
                                            { onClick: function onClick(e) {
                                                    return _this.existAreaPackageEditBtn(areaId, areaPackageList);
                                                } },
                                            '\u7F16\u8F91'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    spanArr
                                )
                            ) : _react2.default.createElement(
                                'div',
                                { style: { width: 270, height: 76 } },
                                _react2.default.createElement(CheckboxGroup, { options: packageListOptions, value: _this.state.packageIdList, onChange: function onChange(value) {
                                        return _this.handleSetChangeCache(value, 'packageIdList');
                                    } })
                            )
                        );
                    } else {

                        return _react2.default.createElement(
                            _filterTable2.default,
                            {
                                title: '',
                                dom: _react2.default.createElement(
                                    'span',
                                    {
                                        style: { color: '#F60', textDecoration: 'underline', cursor: 'pointer' },
                                        onClick: function onClick(e) {
                                            return _this.existAreaPackageLookBtn(areaId);
                                        }
                                    },
                                    '\u8BF7\u8BBE\u7F6E'
                                ),
                                btnStyle: { position: 'relative', top: '30px' },
                                ok: function ok(e) {
                                    return _this.existAreaPackageOkBtn(areaId, 'packageIdList');
                                }
                            },
                            _react2.default.createElement(
                                'div',
                                { style: { width: 270, height: 76 } },
                                _react2.default.createElement(CheckboxGroup, { options: packageListOptions, value: _this.state.packageIdList, onChange: function onChange(value) {
                                        return _this.handleSetChangeCache(value, 'packageIdList');
                                    } })
                            )
                        );
                    }
                }
            }];
        };

        _this.getSmallColumns = function () {
            return [{
                title: '类型名称',
                dataIndex: 'typeName',
                key: 'typeName'
            }, {
                title: '适合户口',
                dataIndex: 'householdType',
                key: 'householdType',
                render: function render(text) {

                    return text.replace(/1/, '本地城镇').replace(/2/, '外地城镇').replace(/3/, '本地农村').replace(/4/, '外地农村');
                }
            }, {
                title: '类型描述',
                dataIndex: 'description',
                key: 'description'
            }, {
                title: '操作',
                key: 'id',
                render: function render(text, record, index) {

                    var nowKey = record.belongBusi === 1 ? 'existInsurance' : 'existHousingFund';

                    return _react2.default.createElement(
                        'div',
                        { className: _basicSetting2.default.smallTableBtn },
                        _react2.default.createElement(
                            'span',
                            { onClick: function onClick(e) {
                                    return _this.editOrNewSmallTable(nowKey, record, 'edit');
                                } },
                            '\u7F16\u8F91'
                        ),
                        ' | ',
                        _react2.default.createElement(
                            'span',
                            { onClick: function onClick(e) {
                                    return _this.deleteSmallTable(record, index);
                                } },
                            '\u5220\u9664'
                        )
                    );
                }
            }];
        };

        _this.pagination = function (current) {
            var _this$props3 = _this.props,
                dispatch = _this$props3.dispatch,
                start = _this$props3.start,
                length = _this$props3.length,
                total = _this$props3.total,
                index = _this$props3.index;


            return {
                current: current,
                total: total,
                size: "default",
                defaultPageSize: length,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: function showTotal(total, range) {
                    return range[0] + '-' + range[1] + ' of ' + total;
                },
                onChange: function onChange(current) {

                    dispatch((0, _basicSettingAction.getBasicSettingList)({
                        start: current,
                        index: index,
                        length: length
                    }));
                },
                onShowSizeChange: function onShowSizeChange(current, pageSize) {

                    dispatch((0, _basicSettingAction.getBasicSettingList)({
                        index: index,
                        start: current,
                        length: pageSize
                    }));
                }
            };
        };

        return _this;
    }

    _createClass(BasicSettingApp, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                dispatch = _props.dispatch,
                start = _props.start,
                length = _props.length,
                index = _props.index;


            this.state = {
                visible: false,
                smallTableVisible: false,
                isEdit: true,
                hasBtn: false
            };

            dispatch((0, _basicSettingAction.getBasicSettingList)({
                index: index,
                start: start,
                length: length
            }));
        }
    }, {
        key: 'getSelect',
        value: function getSelect() {
            var selectArr = [];
            for (var i = 1; i <= 30; i++) {
                selectArr.push(_react2.default.createElement(
                    Option,
                    { value: i },
                    i,
                    '\u53F7'
                ));
            }
            return selectArr;
        }

        /**
         * 表格列
         */


        /**
         * 参保类型表格列
         */

    }, {
        key: 'editOrNewSmallTable',
        value: function editOrNewSmallTable(nowKey, record, type) {

            if (nowKey) {
                this.setState({
                    nowKey: nowKey,
                    id: record.id,
                    areaId: record.areaId,
                    typeName: record.typeName,
                    householdType: type === 'edit' ? JSON.parse('[' + record.householdType + ']') : record.householdType,
                    description: record.description,
                    smallTableVisible: true
                });
            } else {
                this.setState({
                    id: record.id,
                    areaId: record.areaId,
                    typeName: record.typeName,
                    householdType: type === 'edit' ? JSON.parse('[' + record.householdType + ']') : record.householdType,
                    description: record.description,
                    smallTableVisible: true
                });
            }
        }
    }, {
        key: 'deleteSmallTable',
        value: function deleteSmallTable(record, index) {
            var dispatch = this.props.dispatch;


            dispatch((0, _basicSettingAction.existCitySocialSet)({
                baseId: record.id,
                index: index
            }));

            this.setState({
                id: record.id
            });
        }

        /**
         * 参保类型参看遮罩
         * @param {*} value 
         * @param {*} key 
         */

    }, {
        key: 'showWindowMask',
        value: function showWindowMask(record, nowKey, index) {
            var _this2 = this;

            var _props2 = this.props,
                dispatch = _props2.dispatch,
                dataSource = _props2.dataSource;


            this.setState({
                nowKey: nowKey,
                areaId: record.areaId,
                provinceName: record.provinceName,
                cityName: record.cityName,
                areaName: record.areaName
            });

            return new Promise(function (resolve, reject) {
                dispatch((0, _basicSettingAction.getSmallTableDate)({
                    dataSource: dataSource,
                    index: index,
                    resolve: resolve
                }));
            }).then(function () {
                _this2.refs.maskPrompt.showWindowMask();
            });
        }
    }, {
        key: 'handleSetChangeCache',
        value: function handleSetChangeCache(value, key) {

            this.setChangeCache[key] = value;

            this.setState(_defineProperty({}, key, value));
        }
    }, {
        key: 'updateBtn',
        value: function updateBtn(areaId, nowKey) {
            var _props3 = this.props,
                dispatch = _props3.dispatch,
                start = _props3.start,
                length = _props3.length;


            dispatch((0, _basicSettingAction.getBasicSettingUpdate)({
                start: start,
                length: length,
                areaId: areaId,
                setChangeCache: this.setChangeCache,
                nowKey: nowKey
            }));
        }
    }, {
        key: 'addData',
        value: function addData() {
            var _props4 = this.props,
                dispatch = _props4.dispatch,
                start = _props4.start,
                length = _props4.length;


            dispatch((0, _basicSettingAction.getBasicSettingList)({
                index: index,
                start: start,
                length: length
            }));
        }

        /**
         * 官方查询信息的编辑
         */

    }, {
        key: 'existInfoEditBtn',
        value: function existInfoEditBtn(obj) {
            var thisId = obj.thisId,
                areaId = obj.areaId,
                provinceName = obj.provinceName,
                cityName = obj.cityName,
                areaName = obj.areaName,
                insuranceTel = obj.insuranceTel,
                insuranceUrl = obj.insuranceUrl,
                housingFundTel = obj.housingFundTel,
                housingFundUrl = obj.housingFundUrl;


            document.getElementById(thisId).click();

            this.setState({
                visible: true,
                areaId: areaId,
                provinceName: provinceName,
                cityName: cityName,
                areaName: areaName,
                insuranceTel: insuranceTel,
                insuranceUrl: insuranceUrl,
                housingFundTel: housingFundTel,
                housingFundUrl: housingFundUrl
            });
        }
    }, {
        key: 'existInfoModalOk',
        value: function existInfoModalOk(nowKey, setChangeCache) {
            var _this3 = this;

            var _props5 = this.props,
                dispatch = _props5.dispatch,
                start = _props5.start,
                length = _props5.length;
            var insuranceTel = setChangeCache.insuranceTel,
                insuranceUrl = setChangeCache.insuranceUrl,
                housingFundTel = setChangeCache.housingFundTel,
                housingFundUrl = setChangeCache.housingFundUrl;
            var areaId = this.state.areaId;


            var flag = false;

            if (!insuranceTel) {
                flag = 'insuranceTel';
            } else if (!insuranceUrl && insuranceTel) {
                flag = 'insuranceUrl';
            } else if (!housingFundTel && insuranceUrl) {
                flag = 'housingFundTel';
            } else if (!housingFundUrl && housingFundUrl) {
                flag = 'housingFundUrl';
            }

            var errmsgObj = {
                insuranceTel: '请设置社保的电话',
                insuranceUrl: '请设置社保的网址',
                housingFundTel: '请设置公积金的电话',
                housingFundUrl: '请设置公积金的网址'
            };

            if (flag) {
                _antd.message.error(errmsgObj[flag]);
                return false;
            } else {

                return new Promise(function (resolve, reject) {
                    dispatch((0, _basicSettingAction.getBasicSettingUpdate)({
                        start: start,
                        length: length,
                        areaId: areaId,
                        setChangeCache: setChangeCache,
                        nowKey: nowKey,
                        resolve: resolve
                    }));
                }).then(function () {
                    _this3.setState({
                        visible: false,
                        insuranceTel: insuranceTel,
                        insuranceUrl: insuranceUrl,
                        housingFundTel: housingFundTel,
                        housingFundUrl: housingFundUrl
                    });
                });
            }
        }
    }, {
        key: 'existInfoModalCancel',
        value: function existInfoModalCancel() {
            this.setState({
                visible: false
            });
        }

        /**
         * 更新或新建参保类型弹窗操作
         */

    }, {
        key: 'editOrNewSmallTableModalOk',
        value: function editOrNewSmallTableModalOk(areaId, nowKey, id) {
            var _this4 = this;

            var _props6 = this.props,
                dispatch = _props6.dispatch,
                start = _props6.start,
                length = _props6.length,
                index = _props6.index;
            var _state = this.state,
                typeName = _state.typeName,
                description = _state.description,
                householdType = _state.householdType;


            if (!typeName) {
                _antd.message.error('请填写类型名称');
                return false;
            } else if (!description) {
                _antd.message.error('请填写类型描述');
                return false;
            }

            return new Promise(function (resolve, reject) {
                dispatch((0, _basicSettingAction.getUpdateSocialSet)({
                    start: start,
                    length: length,
                    nowKey: nowKey,
                    id: id,
                    areaId: areaId,
                    resolve: resolve,
                    index: index,
                    typeName: typeName,
                    householdType: householdType,
                    description: description
                }));
            }).then(function () {
                _this4.setState({
                    smallTableVisible: false
                });
            });
        }
    }, {
        key: 'editOrNewSmallTableModalCancel',
        value: function editOrNewSmallTableModalCancel() {
            this.setState({
                smallTableVisible: false
            });
        }

        /**
         * 开通产品编辑
         */

    }, {
        key: 'existAreaPackageEditBtn',
        value: function existAreaPackageEditBtn(areaId, areaPackageList) {

            var packageIdList = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = areaPackageList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var item = _step2.value;

                    packageIdList.push(item.packageId);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.setState({
                isEdit: false,
                hasBtn: true,
                packageIdList: packageIdList
            });

            var dispatch = this.props.dispatch;


            dispatch((0, _basicSettingAction.getPackageListData)({
                areaId: areaId
            }));
        }

        /**
         * 开通产品设置
         */

    }, {
        key: 'existAreaPackageLookBtn',
        value: function existAreaPackageLookBtn(areaId) {
            var dispatch = this.props.dispatch;


            dispatch((0, _basicSettingAction.getPackageListData)({
                areaId: areaId
            }));

            this.setState({
                packageIdList: []
            });
        }

        /**
         * 开通产品
         */

    }, {
        key: 'existAreaPackageOkBtn',
        value: function existAreaPackageOkBtn(areaId, nowKey) {
            var _this5 = this;

            var _props7 = this.props,
                dispatch = _props7.dispatch,
                start = _props7.start,
                length = _props7.length;


            var flag = false;

            if (nowKey === 'packageIdList' && this.setChangeCache['packageIdList'].length === 0) {
                flag = true;
            }

            if (flag) {
                _antd.message.error('请设置当前城市开通的产品套餐');
                return false;
            } else {

                return new Promise(function (resolve, reject) {
                    dispatch((0, _basicSettingAction.getUpdateAreaPackge)({
                        start: start,
                        length: length,
                        areaId: areaId,
                        setChangeCache: _this5.setChangeCache,
                        nowKey: nowKey,
                        resolve: resolve
                    }));
                }).then(function () {
                    _this5.setState({
                        packageIdList: _this5.setChangeCache['packageIdList'],
                        isEdit: true,
                        hasBtn: false
                    });
                });
            }
        }
    }, {
        key: 'existAreaPackageCancelBtn',
        value: function existAreaPackageCancelBtn() {
            var _this6 = this;

            setTimeout(function () {
                _this6.setState({
                    isEdit: true,
                    hasBtn: false
                });
            }, 1000);
        }

        /**
         * 删除阻断弹窗--确认按钮
         */

    }, {
        key: 'deleteErrorModalOk',
        value: function deleteErrorModalOk() {
            var dispatch = this.props.dispatch;


            dispatch((0, _basicSettingAction.deleteSocialError)({
                deleteErrorVisible: false
            }));
        }

        /**
         * 删除成功弹窗--确认按钮
         */

    }, {
        key: 'deleteSuccessModalOk',
        value: function deleteSuccessModalOk(id, index) {
            var _props8 = this.props,
                dispatch = _props8.dispatch,
                start = _props8.start,
                length = _props8.length;


            dispatch((0, _basicSettingAction.getDeleteSocialSet)({
                start: start,
                length: length,
                id: id,
                index: index
            }));
        }

        /**
         * 删除成功弹窗--取消按钮
         */

    }, {
        key: 'deleteSuccessModalCancel',
        value: function deleteSuccessModalCancel() {
            var dispatch = this.props.dispatch;


            dispatch((0, _basicSettingAction.deleteSocialSuccess)({
                deleteSuccessVisible: false
            }));
        }

        /**
         * 分页
         */

    }, {
        key: 'render',
        value: function render() {
            var _this7 = this;

            var _props9 = this.props,
                dataSource = _props9.dataSource,
                loading = _props9.loading,
                start = _props9.start,
                counter = _props9.counter,
                socialList = _props9.socialList,
                fundList = _props9.fundList,
                deleteSuccessVisible = _props9.deleteSuccessVisible,
                deleteErrorVisible = _props9.deleteErrorVisible;
            var _state2 = this.state,
                visible = _state2.visible,
                smallTableVisible = _state2.smallTableVisible,
                nowKey = _state2.nowKey,
                provinceName = _state2.provinceName,
                cityName = _state2.cityName,
                id = _state2.id,
                areaId = _state2.areaId,
                areaName = _state2.areaName,
                insuranceTel = _state2.insuranceTel,
                insuranceUrl = _state2.insuranceUrl,
                housingFundTel = _state2.housingFundTel,
                housingFundUrl = _state2.housingFundUrl,
                typeName = _state2.typeName,
                householdType = _state2.householdType,
                description = _state2.description;


            var setChangeCache = {
                insuranceTel: insuranceTel,
                insuranceUrl: insuranceUrl,
                housingFundTel: housingFundTel,
                housingFundUrl: housingFundUrl
            };

            var existInfoModalProps = {
                visible: visible,
                closable: true,
                maskClosable: false,
                width: 480,
                title: '设置官方查询信息',
                onCancel: function onCancel() {
                    return _this7.existInfoModalCancel();
                },
                footer: _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _antd.Button,
                        { onClick: function onClick() {
                                return _this7.existInfoModalCancel();
                            } },
                        '\u53D6\u6D88'
                    ),
                    _react2.default.createElement(
                        _antd.Button,
                        { type: 'primary', loading: this.props.existInfoModalLoading, onClick: function onClick() {
                                return _this7.existInfoModalOk('existInfo', setChangeCache);
                            } },
                        '\u786E\u8BA4'
                    )
                ),
                afterClose: function afterClose() {}
            };

            var smallTableModalProps = {
                visible: smallTableVisible,
                closable: true,
                maskClosable: false,
                width: 480,
                title: '设置参保类型',
                onCancel: function onCancel() {
                    return _this7.editOrNewSmallTableModalCancel();
                },
                footer: _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _antd.Button,
                        { onClick: function onClick() {
                                return _this7.editOrNewSmallTableModalCancel();
                            } },
                        '\u53D6\u6D88'
                    ),
                    _react2.default.createElement(
                        _antd.Button,
                        { type: 'primary', loading: this.props.smallTableModalLoading, onClick: function onClick() {
                                return _this7.editOrNewSmallTableModalOk(areaId, nowKey, id);
                            } },
                        '\u786E\u8BA4'
                    )
                ),
                afterClose: function afterClose() {}
            };

            var deleteErrorProps = {
                visible: deleteErrorVisible,
                closable: true,
                maskClosable: false,
                width: 450,
                title: '操作提示',
                onCancel: function onCancel() {
                    return _this7.deleteErrorModalOk();
                },
                footer: _react2.default.createElement(
                    _antd.Button,
                    { type: 'primary', onClick: function onClick() {
                            return _this7.deleteErrorModalOk();
                        } },
                    '\u6211\u77E5\u9053\u4E86'
                ),
                afterClose: function afterClose() {}

            };

            var deleteSuccessProps = {
                visible: deleteSuccessVisible,
                closable: true,
                maskClosable: false,
                width: 300,
                title: '操作提示',
                onCancel: function onCancel() {
                    return _this7.deleteSuccessModalCancel();
                },
                footer: _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _antd.Button,
                        { onClick: function onClick() {
                                return _this7.deleteSuccessModalCancel();
                            } },
                        '\u53D6\u6D88'
                    ),
                    _react2.default.createElement(
                        _antd.Button,
                        { type: 'primary', loading: this.props.deleteSuccessLoading, onClick: function onClick() {
                                return _this7.deleteSuccessModalOk(id, _this7.props.index);
                            } },
                        '\u786E\u8BA4'
                    )
                ),
                afterClose: function afterClose() {}
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_antd.Table, {
                    title: function title() {
                        return _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u7B5B\u9009\u6761\u4EF6\u5C55\u793A\uFF1A'
                            )
                        );
                    },
                    bordered: true,
                    columns: this.getcolumns(),
                    loading: loading,
                    pagination: this.pagination(start),
                    dataSource: dataSource
                }),
                _react2.default.createElement(
                    _antd.Modal,
                    existInfoModalProps,
                    _react2.default.createElement(
                        'div',
                        { className: _basicSetting2.default.existInfoDiv, style: { width: 450 } },
                        _react2.default.createElement(
                            'div',
                            { style: { height: 30 } },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u5F53\u524D\u57CE\u5E02\uFF1A'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: _basicSetting2.default.existInfoCol20 },
                                provinceName,
                                ' - ',
                                cityName,
                                ' - ',
                                areaName
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'table',
                                null,
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'th',
                                        { width: '90' },
                                        '\u5206\u7C7B'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        '\u7535\u8BDD'
                                    ),
                                    _react2.default.createElement(
                                        'th',
                                        null,
                                        '\u7F51\u5740'
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        '\u793E\u4FDD\u5C40'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement(_antd.Input, {
                                            value: insuranceTel,
                                            onChange: function onChange(e) {
                                                return _this7.handleSetChangeCache(e.target.value, 'insuranceTel');
                                            },
                                            maxLength: '50'
                                        })
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement(_antd.Input, {
                                            addonBefore: 'http://',
                                            value: insuranceUrl,
                                            onChange: function onChange(e) {
                                                return _this7.handleSetChangeCache(e.target.value, 'insuranceUrl');
                                            },
                                            maxLength: '50'
                                        })
                                    )
                                ),
                                _react2.default.createElement(
                                    'tr',
                                    null,
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        '\u516C\u79EF\u91D1\u4E2D\u5FC3'
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement(_antd.Input, {
                                            value: housingFundTel,
                                            onChange: function onChange(e) {
                                                return _this7.handleSetChangeCache(e.target.value, 'housingFundTel');
                                            },
                                            maxLength: '50'
                                        })
                                    ),
                                    _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement(_antd.Input, {
                                            addonBefore: 'http://',
                                            value: housingFundUrl,
                                            onChange: function onChange(e) {
                                                return _this7.handleSetChangeCache(e.target.value, 'housingFundUrl');
                                            },
                                            maxLength: '50'
                                        })
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _antd.Modal,
                    smallTableModalProps,
                    _react2.default.createElement(
                        'div',
                        { className: _basicSetting2.default.marginBottom10 },
                        '\u6240\u5C5E\u4E1A\u52A1\uFF1A',
                        _react2.default.createElement(
                            'span',
                            { style: { color: '#F60' } },
                            nowKey === 'existInsurance' ? '社保' : '公积金'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _basicSetting2.default.marginBottom10 },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u7C7B\u578B\u540D\u79F0\uFF1A'
                        ),
                        _react2.default.createElement(_antd.Input, {
                            style: { width: '84%' },
                            value: typeName,
                            maxLength: 30,
                            placeholder: '\u901A\u4FD7\u6613\u61C2\u7684\u5B9A\u4E49\u540D\u79F0\uFF0C\u5BA2\u6237\u7AEF\u53EF\u89C1\uFF0C\u8BF7\u8C28\u614E\u586B\u5199',
                            onChange: function onChange(e) {
                                return _this7.handleSetChangeCache(e.target.value, 'typeName');
                            }
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _basicSetting2.default.CheckboxGroup },
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u9002\u5408\u6237\u53E3\uFF1A'
                        ),
                        _react2.default.createElement(CheckboxGroup, {
                            options: [{ label: '本地城镇', value: 1 }, { label: '外地城镇', value: 2 }, { label: '本地农村', value: 3 }, { label: '外地农村', value: 4 }]
                            //defaultValue={householdType? householdType.split(','): ''}
                            , value: householdType,
                            onChange: function onChange(value) {
                                return _this7.handleSetChangeCache(value, 'householdType');
                            }
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _basicSetting2.default.marginBottom10 },
                        _react2.default.createElement(
                            'span',
                            { className: _basicSetting2.default.smallTableTextAreaSpan },
                            '\u7C7B\u578B\u63CF\u8FF0\uFF1A'
                        ),
                        _react2.default.createElement(_antd.Input, {
                            type: 'textarea',
                            style: { width: '84%' },
                            value: description,
                            maxLength: 100,
                            placeholder: '\u8BF7\u7528\u901A\u4FD7\u6613\u61C2\u7684\u8BED\u8A00\u5411\u6295\u4FDD\u4EBA\u89E3\u91CA\u53C2\u4FDD\u7C7B\u578B\u7684\u610F\u4E49\uFF0C\u5BA2\u6237\u7AEF\u53EF\u89C1\uFF0C\u8BF7\u8C28\u614E\u586B\u5199\uFF0C100\u5B57\u4E4B\u5185',
                            onChange: function onChange(e) {
                                return _this7.handleSetChangeCache(e.target.value, 'description');
                            }
                        })
                    )
                ),
                _react2.default.createElement(
                    _antd.Modal,
                    deleteErrorProps,
                    _react2.default.createElement(_antd.Icon, {
                        className: _basicSetting2.default.deleteErrorI,
                        type: 'exclamation-circle-o'
                    }),
                    _react2.default.createElement(
                        'p',
                        { className: _basicSetting2.default.deleteErrorP },
                        '\u8BE5\u7C7B\u578B\u6709',
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u5173\u8054\u7684\u670D\u52A1\u5546\u653F\u7B56\u5305'
                        ),
                        '\uFF0C\u4E0D\u53EF\u76F4\u63A5\u5220\u9664\uFF0C\u8BF7\u5148\u5220\u9664\u670D\u52A1\u5546\u653F\u7B56\u5305\u4E2D\u6B64\u7C7B\u578B\uFF0C\u518D\u6267\u884C\u6B64\u64CD\u4F5C\uFF01'
                    )
                ),
                _react2.default.createElement(
                    _antd.Modal,
                    deleteSuccessProps,
                    _react2.default.createElement(_antd.Icon, {
                        className: _basicSetting2.default.deleteSuccessI,
                        type: 'exclamation-circle-o'
                    }),
                    _react2.default.createElement(
                        'p',
                        { className: _basicSetting2.default.deleteSuccessP },
                        '\u60A8\u786E\u8BA4\u8981',
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u5220\u9664'
                        ),
                        '\u5417\uFF1F'
                    )
                ),
                _react2.default.createElement(
                    _maskPrompt2.default,
                    { ref: 'maskPrompt' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u5F53\u524D\u57CE\u5E02\uFF1A'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: _basicSetting2.default.existInfoCol20 },
                            provinceName,
                            ' - ',
                            cityName,
                            ' - ',
                            areaName
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _basicSetting2.default.maskWrapperTitle },
                        _react2.default.createElement(
                            _antd.Col,
                            { span: '20', className: _basicSetting2.default.maskWrapperTitleCol20 },
                            nowKey === 'existInsurance' ? '社保参保类型' : '公积金参保类型'
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: '4', className: _basicSetting2.default.maskWrapperTitleCol4 },
                            _react2.default.createElement(
                                _antd.Button,
                                { type: 'primary', onClick: function onClick() {
                                        return _this7.editOrNewSmallTable(nowKey, { areaId: areaId });
                                    } },
                                '\u65B0\u589E'
                            )
                        )
                    ),
                    _react2.default.createElement(_antd.Table, {
                        key: counter,
                        size: 'small',
                        pagination: false,
                        bordered: true,
                        columns: this.getSmallColumns(),
                        dataSource: nowKey === 'existInsurance' ? socialList : fundList
                    })
                )
            );
        }
    }]);

    return BasicSettingApp;
}(_react2.default.Component);

function mapStateToProps(state) {
    var data = state.getIn(['basicSettingList']);
    return {
        dataSource: data.getIn(['dataSource']).toJS(),
        isLoading: data.get('isLoading'),
        start: data.getIn(['start']),
        total: data.getIn(['total']),
        length: data.getIn(['length']),
        counter: data.get('counter'),
        socialList: data.getIn(['socialList']),
        fundList: data.getIn(['fundList']),
        index: data.getIn(['index']),
        packageListOptions: data.getIn(['packageListOptions']),
        deleteSuccessVisible: data.getIn(['deleteSuccessVisible']),
        deleteErrorVisible: data.getIn(['deleteErrorVisible']),
        existInfoModalLoading: data.getIn(['existInfoModalLoading']),
        smallTableModalLoading: data.getIn(['smallTableModalLoading']),
        deleteSuccessLoading: data.getIn(['deleteSuccessLoading'])
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(BasicSettingApp);

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _rcQueueAnim = __webpack_require__(386);

var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);

var _antd = __webpack_require__(15);

var _insuredmaterials = __webpack_require__(437);

var _insuredmaterials2 = _interopRequireDefault(_insuredmaterials);

var _reactRedux = __webpack_require__(44);

var _fetch = __webpack_require__(27);

var _fetchIndex = __webpack_require__(23);

var _fetchIndex2 = _interopRequireDefault(_fetchIndex);

var _maskPrompt = __webpack_require__(409);

var _maskPrompt2 = _interopRequireDefault(_maskPrompt);

var _reactMediumImageZoom = __webpack_require__(428);

var _reactMediumImageZoom2 = _interopRequireDefault(_reactMediumImageZoom);

var _insuredmaterialsAction = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _antd.Select.Option;
/**
 * 新增材料
 */

var CreateMaterialApp = function (_React$Component) {
	_inherits(CreateMaterialApp, _React$Component);

	function CreateMaterialApp(props) {
		_classCallCheck(this, CreateMaterialApp);

		var _this = _possibleConstructorReturn(this, (CreateMaterialApp.__proto__ || Object.getPrototypeOf(CreateMaterialApp)).call(this, props));

		_this.state = {
			modalVisible: false,
			textareaShow: false,
			isupload: false,
			fileType: [],
			fileList: [],
			name: '',
			property: '',
			boundProperties: '',
			listType: 'picture'
		};
		return _this;
	}

	_createClass(CreateMaterialApp, [{
		key: 'showModal',
		value: function showModal() {
			this.setState({
				modalVisible: true
			});
		}
	}, {
		key: 'handleSelectChange',
		value: function handleSelectChange(value, key) {

			if (value === 7 && key === 'property') {
				this.setState({
					fileType: ['image/bmp', 'image/png', 'image/gif', 'image/jpeg'],
					fileList: [],
					listType: 'picture'
				});
			} else if (value === 8 && key === 'property') {
				this.setState({
					fileType: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/pdf'],
					fileList: [],
					listType: 'text'
				});
			}

			if (key === 'property') {
				this.setState({
					textareaShow: value === 2 || value === 3 ? true : false,
					isupload: value === 7 || value === 8 ? true : false
				});
			}

			this.setState(_defineProperty({}, key, value));

			if ((value !== 2 || value !== 3 || value !== 7 || value !== 8) && key === 'property') {
				this.setState({
					boundProperties: ''
				});
			}
		}
	}, {
		key: 'textFn',
		value: function textFn() {
			var _this2 = this;

			if (this.state.textareaShow) {
				return _react2.default.createElement(
					_antd.Row,
					null,
					_react2.default.createElement(
						_antd.Col,
						{ span: 6 },
						_react2.default.createElement(
							'span',
							{ style: { color: 'red' } },
							'*'
						),
						'\u53EF\u9009\u503C\uFF1A'
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 18 },
						_react2.default.createElement(_antd.Input, { value: this.state.boundProperties, type: 'textarea', onChange: function onChange(e) {
								return _this2.handleSelectChange(e.target.value, 'boundProperties');
							}, maxLength: 100, placeholder: '\u8BF7\u8BBE\u7F6E\u53EF\u9009\u503C\uFF0C\u591A\u4E2A\u7528\u987F\u53F7\u9694\u5F00' })
					)
				);
			}
		}
	}, {
		key: 'beforeUpload',
		value: function beforeUpload(file, fileList) {
			var fileType = this.state.fileType;


			var isWant = false;

			if (fileType.indexOf(file.type) !== -1) {
				isWant = true;
			}

			if (!isWant) {
				_antd.message.error('上传的文件类型不正确');
				return false;
			}

			return isWant;
		}
	}, {
		key: 'uploadSuccess',
		value: function uploadSuccess(res, file) {
			if (res.status === 0) {
				this.setState({
					fileList: [{
						uid: file.uid,
						name: file.name,
						status: 'done',
						reponse: res.data,
						url: res.data.url
					}]
				});
			} else {
				this.setState({
					fileList: []
				});
				_antd.message.error('文件大小控制在3M之内');
			}
		}
	}, {
		key: 'removeUpload',
		value: function removeUpload() {
			this.setState({
				fileList: []
			});
		}
	}, {
		key: 'uploadFn',
		value: function uploadFn() {
			var _this3 = this;

			var Uploadprops = {
				name: 'file',
				data: {
					type: 7
				},
				action: _fetchIndex2.default.imgUpload,
				headers: {
					authorization: 'authorization-text'
				},
				multiple: true,
				listType: this.state.listType,
				fileList: this.state.fileList,
				beforeUpload: function beforeUpload(file, fileList) {
					return _this3.beforeUpload(file, fileList);
				},
				onSuccess: function onSuccess(res, file) {
					return _this3.uploadSuccess(res, file);
				},
				onRemove: function onRemove() {
					return _this3.removeUpload();
				}
			};
			if (this.state.isupload) {
				return _react2.default.createElement(
					_antd.Row,
					null,
					_react2.default.createElement(
						_antd.Col,
						{ span: 6 },
						'\u586B\u5199\u5B9E\u4F8B\uFF1A'
					),
					_react2.default.createElement(
						_antd.Col,
						{ span: 18 },
						_react2.default.createElement(
							_antd.Upload,
							Uploadprops,
							_react2.default.createElement(
								_antd.Button,
								null,
								_react2.default.createElement(_antd.Icon, { type: 'upload' }),
								'\u4E0A\u4F20'
							)
						)
					)
				);
			}
		}
	}, {
		key: 'onOk',
		value: function onOk() {
			var _this4 = this;

			var _state = this.state,
			    name = _state.name,
			    property = _state.property,
			    boundProperties = _state.boundProperties,
			    fileList = _state.fileList;
			var _props = this.props,
			    dispatch = _props.dispatch,
			    pageNow = _props.pageNow,
			    pageSize = _props.pageSize;


			if (!name) {
				_antd.message.error('请设置材料名称');
				return false;
			} else if (!property) {
				_antd.message.error('请设置材料的属性');
				return false;
			} else if ((property === 2 || property === 3) && !boundProperties) {
				_antd.message.error('请设置属性的可选值');
				return false;
			} else if ((property === 7 || property === 8) && !fileList.length > 0) {
				_antd.message.error('请先上传图片或文件');
				return false;
			}

			return new Promise(function (resolve, reject) {
				dispatch((0, _insuredmaterialsAction.existMaterialName)({
					start: pageNow,
					length: pageSize,
					name: name,
					property: property,
					boundProperties: boundProperties ? boundProperties : fileList.length > 0 ? fileList[0].reponse.ossKey : '',
					resolve: resolve
				}));
			}).then(function () {
				_this4.setState({
					modalVisible: false,
					name: '',
					property: '',
					fileList: [],
					textareaShow: false,
					boundProperties: '',
					isupload: false
				});
			});
		}
	}, {
		key: 'onCancel',
		value: function onCancel() {
			this.setState({
				modalVisible: false,
				name: '',
				property: '',
				fileList: [],
				textareaShow: false,
				boundProperties: '',
				isupload: false
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			var _state2 = this.state,
			    modalVisible = _state2.modalVisible,
			    isMultiple = _state2.isMultiple;


			var modalProps = {
				visible: modalVisible,
				closable: true,
				maskClosable: false,
				width: 380,
				title: '操作提示',
				onCancel: function onCancel() {
					return _this5.onCancel();
				},
				footer: _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_antd.Button,
						{ onClick: function onClick() {
								return _this5.onCancel();
							} },
						'\u53D6\u6D88'
					),
					_react2.default.createElement(
						_antd.Button,
						{ type: 'primary', loading: this.props.modalLoading, onClick: function onClick() {
								return _this5.onOk();
							} },
						'\u786E\u8BA4'
					)
				)
			};

			var propertySelectProp = {
				key: Date.now(),
				showSearch: true,
				style: { width: '100%' },
				placeholder: "请选择",
				optionFilterProp: "children",
				allowClear: true,
				onChange: function onChange(value) {
					return _this5.handleSelectChange(value, 'property');
				}
			};

			if (this.state.property) {
				propertySelectProp.value = this.state.property;
			}

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_antd.Button,
					{ type: 'primary', className: _insuredmaterials2.default.createMaterialBtn, onClick: function onClick() {
							return _this5.showModal();
						} },
					'\u65B0\u5EFA\u6750\u6599'
				),
				_react2.default.createElement(
					_antd.Modal,
					modalProps,
					_react2.default.createElement(
						_antd.Row,
						null,
						_react2.default.createElement(
							_antd.Col,
							{ span: 6 },
							_react2.default.createElement(
								'span',
								{ style: { color: 'red' } },
								'*'
							),
							'\u6750\u6599\u540D\u79F0\uFF1A'
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 18 },
							_react2.default.createElement(_antd.Input, { value: this.state.name, maxLength: 50, onChange: function onChange(e) {
									return _this5.handleSelectChange(e.target.value, 'name');
								}, placeholder: '\u8BF7\u8BBE\u7F6E\u6750\u6599\u540D\u79F0' })
						)
					),
					_react2.default.createElement(
						_antd.Row,
						null,
						_react2.default.createElement(
							_antd.Col,
							{ span: 6 },
							_react2.default.createElement(
								'span',
								{ style: { color: 'red' } },
								'*'
							),
							'\u5C5E\u6027\uFF1A'
						),
						_react2.default.createElement(
							_antd.Col,
							{ span: 18 },
							_react2.default.createElement(
								_antd.Select,
								propertySelectProp,
								_react2.default.createElement(
									Option,
									{ value: 1 },
									'\u8F93\u5165\u9879'
								),
								_react2.default.createElement(
									Option,
									{ value: 2 },
									'\u5355\u9009\u9879'
								),
								_react2.default.createElement(
									Option,
									{ value: 3 },
									'\u590D\u9009\u9879'
								),
								_react2.default.createElement(
									Option,
									{ value: 4 },
									'\u5730\u533A\u63D2\u4EF6'
								),
								_react2.default.createElement(
									Option,
									{ value: 5 },
									'\u5730\u533A+\u8BE6\u7EC6\u5730\u5740\u63D2\u4EF6'
								),
								_react2.default.createElement(
									Option,
									{ value: 6 },
									'\u7CBE\u786E\u5230\u65E5\u7684\u65F6\u95F4\u63D2\u4EF6'
								),
								_react2.default.createElement(
									Option,
									{ value: 7 },
									'\u56FE\u7247'
								),
								_react2.default.createElement(
									Option,
									{ value: 8 },
									'\u6587\u4EF6'
								)
							)
						)
					),
					this.textFn(),
					this.uploadFn()
				)
			);
		}
	}]);

	return CreateMaterialApp;
}(_react2.default.Component);

var InsuredMaterials = function (_React$Component2) {
	_inherits(InsuredMaterials, _React$Component2);

	function InsuredMaterials(props) {
		_classCallCheck(this, InsuredMaterials);

		var _this6 = _possibleConstructorReturn(this, (InsuredMaterials.__proto__ || Object.getPrototypeOf(InsuredMaterials)).call(this, props));

		_this6.getcolumns = function () {
			return [{
				title: '操作',
				dataIndex: 'id',
				key: 'id',
				width: 110,
				render: function render(text, record) {
					return _react2.default.createElement(
						'a',
						{ type: 'primary', onClick: function onClick() {
								return _this6.cancelButton(text);
							} },
						'\u5220\u9664'
					);
				}
			}, {
				title: '材料名称',
				dataIndex: 'name',
				key: 'name',
				width: 200
			}, {
				title: '属性',
				dataIndex: 'property',
				key: 'property',
				width: 300,
				render: function render(key) {
					if (key === '1') {
						return '输入项';
					} else if (key === '2') {
						return '单选项';
					} else if (key === '3') {
						return '复选项';
					} else if (key === '4') {
						return '地区插件';
					} else if (key === '5') {
						return '地区+详细地址插件';
					} else if (key === '6') {
						return '精确到日的时间插件';
					} else if (key === '7') {
						return '图片';
					} else if (key === '8') {
						return '文件';
					}
				}
			}, {
				title: '关联属性',
				dataIndex: 'boundProperties',
				key: 'boundProperties',
				render: function render(key, record) {
					if (key === '' || key === null) {
						return '-/-';
					} else if (record.property === '7') {
						return _react2.default.createElement(_reactMediumImageZoom2.default, {
							image: {
								src: key,
								alt: '附件',
								style: { width: 32, height: 32 }
							},
							zoomImage: {
								src: key,
								alt: '附件'
							}

						});
					} else if (record.property === '8') {
						return _react2.default.createElement(
							'a',
							{ href: key },
							'\u4E0B\u8F7D\u9644\u4EF6'
						);
					} else {
						return key;
					}
				}
			}, {
				title: '启用城市',
				dataIndex: 'materialCompanyList',
				key: 'materialCompanyList',
				width: 120,
				render: function render(text, record) {
					return _react2.default.createElement(
						'a',
						{ href: 'javascript:;', onClick: function onClick() {
								return _this6.showWindowMask(record);
							} },
						'\u67E5\u770B'
					);
				}
			}];
		};

		_this6.pagination = function (current) {
			var _this6$props = _this6.props,
			    dispatch = _this6$props.dispatch,
			    pageSize = _this6$props.pageSize,
			    total = _this6$props.total;


			return {
				current: current,
				total: total,
				size: "default",
				defaultPageSize: pageSize,
				showSizeChanger: true,
				showQuickJumper: true,
				showTotal: function showTotal(total, range) {
					return range[0] + '-' + range[1] + ' of ' + total;
				},
				onChange: function onChange(current) {
					dispatch((0, _insuredmaterialsAction.getMaterialItemList)({
						current: current,
						pageSize: pageSize
					}));
				},
				onShowSizeChange: function onShowSizeChange(current, pageSize) {
					dispatch((0, _insuredmaterialsAction.getMaterialItemList)({
						current: current,
						pageSize: pageSize
					}));
				}
			};
		};

		_this6.state = {
			materialName: ''
		};

		return _this6;
	}

	_createClass(InsuredMaterials, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _props2 = this.props,
			    dispatch = _props2.dispatch,
			    pageNow = _props2.pageNow,
			    pageSize = _props2.pageSize;


			dispatch((0, _insuredmaterialsAction.getMaterialItemList)({
				start: pageNow,
				length: pageSize
			}));
		}
	}, {
		key: 'cancelButton',


		/**
   * 删除参保材料
   */
		value: function cancelButton(id) {
			var dispatch = this.props.dispatch;


			dispatch((0, _insuredmaterialsAction.existCitySocialSetm)({
				materialItemId: id
			}));
		}

		/**
   * 正确弹窗-确认
   */

	}, {
		key: 'deleteSuccessOkBtn',
		value: function deleteSuccessOkBtn() {
			var _props3 = this.props,
			    dispatch = _props3.dispatch,
			    id = _props3.id,
			    pageNow = _props3.pageNow,
			    pageSize = _props3.pageSize;


			dispatch((0, _insuredmaterialsAction.deleteMaterialItem)({
				materialItemId: id,
				start: pageNow,
				length: pageSize
			}));
		}

		/**
   * 正确弹窗-取消
   */

	}, {
		key: 'deleteSuccessCancelBtn',
		value: function deleteSuccessCancelBtn() {
			var dispatch = this.props.dispatch;


			dispatch((0, _insuredmaterialsAction.deleteSuccessModule)({
				isDeleteSuccess: false
			}));
		}

		/**
   * 错误弹窗-取消
   */

	}, {
		key: 'deleteErrorCancelBtn',
		value: function deleteErrorCancelBtn() {
			var dispatch = this.props.dispatch;


			dispatch((0, _insuredmaterialsAction.deleteErrorModule)({
				isDeleteError: false
			}));
		}
	}, {
		key: 'showWindowMask',
		value: function showWindowMask(record) {
			var dispatch = this.props.dispatch;


			dispatch((0, _insuredmaterialsAction.lookMaterialDetail)({
				materialCompanyList: record.materialCompanyList
			}));

			this.setState({
				materialName: record.name
			});

			this.refs.maskPrompt.showWindowMask();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this7 = this;

			var _props4 = this.props,
			    dataSource = _props4.dataSource,
			    pageNow = _props4.pageNow,
			    pageSize = _props4.pageSize,
			    isDeleteSuccess = _props4.isDeleteSuccess,
			    deleteSuccessLoading = _props4.deleteSuccessLoading,
			    isDeleteError = _props4.isDeleteError,
			    materialArr = _props4.materialArr,
			    dispatch = _props4.dispatch;
			var materialName = this.state.materialName;


			var deleteSuccessProps = {
				visible: isDeleteSuccess,
				closable: true,
				maskClosable: false,
				width: 300,
				title: '操作提示',
				onCancel: function onCancel() {
					return _this7.deleteSuccessCancelBtn();
				},
				footer: _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_antd.Button,
						{ onClick: function onClick() {
								return _this7.deleteSuccessCancelBtn();
							} },
						'\u53D6\u6D88'
					),
					_react2.default.createElement(
						_antd.Button,
						{ type: 'primary', loading: deleteSuccessLoading, onClick: function onClick() {
								return _this7.deleteSuccessOkBtn();
							} },
						'\u786E\u8BA4'
					)
				)
			};

			var deleteErrorProps = {
				visible: isDeleteError,
				closable: true,
				maskClosable: false,
				width: 450,
				title: '操作提示',
				onCancel: function onCancel() {
					return _this7.deleteErrorCancelBtn();
				},
				footer: _react2.default.createElement(
					_antd.Button,
					{ type: 'primary', onClick: function onClick() {
							return _this7.deleteErrorCancelBtn();
						} },
					'\u6211\u77E5\u9053\u4E86'
				)
			};

			return _react2.default.createElement(
				'div',
				{ style: { position: 'relative' } },
				_react2.default.createElement(CreateMaterialApp, { dispatch: dispatch, pageNow: pageNow, pageSize: pageSize }),
				_react2.default.createElement(_antd.Table, { bordered: true, dataSource: dataSource, columns: this.getcolumns(), pagination: this.pagination(pageNow) }),
				_react2.default.createElement(
					_antd.Modal,
					deleteSuccessProps,
					_react2.default.createElement(_antd.Icon, {
						className: _insuredmaterials2.default.deleteSuccessI,
						type: 'exclamation-circle-o'
					}),
					_react2.default.createElement(
						'p',
						{ className: _insuredmaterials2.default.deleteSuccessP },
						'\u60A8\u786E\u8BA4\u8981',
						_react2.default.createElement(
							'span',
							null,
							'\u5220\u9664'
						),
						'\u5417\uFF1F'
					)
				),
				_react2.default.createElement(
					_antd.Modal,
					deleteErrorProps,
					_react2.default.createElement(_antd.Icon, {
						className: _insuredmaterials2.default.deleteErrorI,
						type: 'exclamation-circle-o'
					}),
					_react2.default.createElement(
						'p',
						{ className: _insuredmaterials2.default.deleteErrorP },
						'\u8BE5\u7C7B\u578B\u6709',
						_react2.default.createElement(
							'span',
							null,
							'\u5173\u8054\u7684\u670D\u52A1\u5546\u653F\u7B56\u5305'
						),
						'\uFF0C\u4E0D\u53EF\u76F4\u63A5\u5220\u9664\uFF0C\u8BF7\u5148\u5220\u9664\u670D\u52A1\u5546\u653F\u7B56\u5305\u4E2D\u6B64\u7C7B\u578B\uFF0C\u518D\u6267\u884C\u6B64\u64CD\u4F5C\uFF01'
					)
				),
				_react2.default.createElement(
					_maskPrompt2.default,
					{ ref: 'maskPrompt', key: '2' },
					_react2.default.createElement(
						'p',
						null,
						'\u6750\u6599\u540D\u79F0\uFF1A',
						_react2.default.createElement(
							'span',
							{ className: _insuredmaterials2.default.materialName },
							materialName
						)
					),
					_react2.default.createElement(
						'table',
						{ className: _insuredmaterials2.default.materialTable },
						_react2.default.createElement(
							'tr',
							null,
							_react2.default.createElement(
								'th',
								null,
								'\u670D\u52A1\u5546'
							),
							_react2.default.createElement(
								'th',
								null,
								'\u57CE\u5E02'
							),
							_react2.default.createElement(
								'th',
								{ width: '100' },
								'\u64CD\u4F5C'
							)
						),
						materialArr
					)
				)
			);
		}
	}]);

	return InsuredMaterials;
}(_react2.default.Component);

function mapStateToProps(state) {
	var data = state.getIn(['insuredMaterialsListReducer']);

	return {
		dataSource: data.getIn(['dataSource']).toJS(),
		isLoading: data.getIn(['isLoading']),
		pageNow: data.getIn(['pageNow']),
		total: data.getIn(['total']),
		pageSize: data.getIn(['pageSize']),
		isDeleteSuccess: data.getIn(['isDeleteSuccess']),
		isDeleteError: data.getIn(['isDeleteError']),
		id: data.getIn(['id']),
		materialArr: data.getIn(['materialArr']),
		deleteSuccessLoading: data.getIn(['deleteSuccessLoading']),
		modalLoading: data.getIn(['modalLoading'])
	};
}
exports.default = (0, _reactRedux.connect)(mapStateToProps)(InsuredMaterials);

/***/ })

});
//# sourceMappingURL=0.js.map