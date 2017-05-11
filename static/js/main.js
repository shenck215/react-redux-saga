/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		6: 0
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
/******/ 		if(installedChunks[chunkId] === 0) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "static/js/" + ({}[chunkId]||chunkId) + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "http://127.0.0.1:2333/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = vendors_library;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(0);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(602);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(603);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var GET_ROUTER_MENU_SAGA = exports.GET_ROUTER_MENU_SAGA = 'GET_ROUTERMENU';
var RECEIVED_ROUTER_MENU_DATA = exports.RECEIVED_ROUTER_MENU_DATA = 'RECEIVED_ROUTER_MENU_DATA';
var ROUTER_MENU_ISFINISHED = exports.ROUTER_MENU_ISFINISHED = 'ROUTER_MENU_ISFINISHED';

var getRouterMenu = exports.getRouterMenu = function getRouterMenu(params) {

    return {
        type: GET_ROUTER_MENU_SAGA,
        params: params
    };
};

var receivedRouterMenuData = exports.receivedRouterMenuData = function receivedRouterMenuData(params) {
    return {
        type: RECEIVED_ROUTER_MENU_DATA,
        params: params
    };
};

var isFinished = exports.isFinished = function isFinished(params) {
    return {
        type: ROUTER_MENU_ISFINISHED,
        params: params
    };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(122);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routerMiddleware = exports.routerActions = exports.goForward = exports.goBack = exports.go = exports.replace = exports.push = exports.CALL_HISTORY_METHOD = exports.routerReducer = exports.LOCATION_CHANGE = exports.syncHistoryWithStore = undefined;

var _reducer = __webpack_require__(11);

Object.defineProperty(exports, 'LOCATION_CHANGE', {
  enumerable: true,
  get: function get() {
    return _reducer.LOCATION_CHANGE;
  }
});
Object.defineProperty(exports, 'routerReducer', {
  enumerable: true,
  get: function get() {
    return _reducer.routerReducer;
  }
});

var _actions = __webpack_require__(10);

Object.defineProperty(exports, 'CALL_HISTORY_METHOD', {
  enumerable: true,
  get: function get() {
    return _actions.CALL_HISTORY_METHOD;
  }
});
Object.defineProperty(exports, 'push', {
  enumerable: true,
  get: function get() {
    return _actions.push;
  }
});
Object.defineProperty(exports, 'replace', {
  enumerable: true,
  get: function get() {
    return _actions.replace;
  }
});
Object.defineProperty(exports, 'go', {
  enumerable: true,
  get: function get() {
    return _actions.go;
  }
});
Object.defineProperty(exports, 'goBack', {
  enumerable: true,
  get: function get() {
    return _actions.goBack;
  }
});
Object.defineProperty(exports, 'goForward', {
  enumerable: true,
  get: function get() {
    return _actions.goForward;
  }
});
Object.defineProperty(exports, 'routerActions', {
  enumerable: true,
  get: function get() {
    return _actions.routerActions;
  }
});

var _sync = __webpack_require__(38);

var _sync2 = _interopRequireDefault(_sync);

var _middleware = __webpack_require__(37);

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.syncHistoryWithStore = _sync2['default'];
exports.routerMiddleware = _middleware2['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(605);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (action) {
  return action && action.type === '@@redux/INIT' ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
};

module.exports = exports['default'];
//# sourceMappingURL=getStateName.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routerMenuApi = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _fetch = __webpack_require__(17);

var _fetchIndex = __webpack_require__(23);

var _fetchIndex2 = _interopRequireDefault(_fetchIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// get user info
//apiConfig.initApi
var routerMenuApi = exports.routerMenuApi = function routerMenuApi(data) {
    return (0, _fetch.fetchFn)(_fetchIndex2.default.initApi, data, { method: 'get' }).then(function (data) {
        return data;
    });
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This action type will be dispatched by the history actions below.
 * If you're writing a middleware to watch for navigation events, be sure to
 * look for actions of this type.
 */
var CALL_HISTORY_METHOD = exports.CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

function updateLocation(method) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return {
      type: CALL_HISTORY_METHOD,
      payload: { method: method, args: args }
    };
  };
}

/**
 * These actions correspond to the history API.
 * The associated routerMiddleware will capture these events before they get to
 * your reducer and reissue them as the matching function on your history.
 */
var push = exports.push = updateLocation('push');
var replace = exports.replace = updateLocation('replace');
var go = exports.go = updateLocation('go');
var goBack = exports.goBack = updateLocation('goBack');
var goForward = exports.goForward = updateLocation('goForward');

var routerActions = exports.routerActions = { push: push, replace: replace, go: go, goBack: goBack, goForward: goForward };

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.routerReducer = routerReducer;
/**
 * This action type will be dispatched when your history
 * receives a location change.
 */
var LOCATION_CHANGE = exports.LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

var initialState = {
  locationBeforeTransitions: null
};

/**
 * This reducer will update the state with the most recent location history
 * has transitioned to. This may not be in sync with the router, particularly
 * if you have asynchronously-loaded routes, so reading from and relying on
 * this state is discouraged.
 */
function routerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      payload = _ref.payload;

  if (type === LOCATION_CHANGE) {
    return _extends({}, state, { locationBeforeTransitions: payload });
  }

  return state;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(599);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _reactRedux = __webpack_require__(7);

var _antd = __webpack_require__(2);

var _routerMenuAction = __webpack_require__(4);

var _mainPage = __webpack_require__(32);

var _mainPage2 = _interopRequireDefault(_mainPage);

var _welcome = __webpack_require__(33);

var _welcome2 = _interopRequireDefault(_welcome);

var _notFundPage = __webpack_require__(31);

var _notFundPage2 = _interopRequireDefault(_notFundPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import renderRouteMune from './routers';


/* eslint-disable */
/**
 * 懒加载
 */
function lazyLoadComponents(lazyModules) {
    return function (location, cb) {
        var moduleKeys = Object.keys(lazyModules);
        var promises = moduleKeys.map(function (key) {
            return new Promise(function (resolve) {
                return lazyModules[key](resolve);
            });
        });

        Promise.all(promises).then(function (modules) {
            cb(null, modules.reduce(function (obj, module, i) {
                obj[moduleKeys[i]] = module;
                return obj;
            }, {}));
        });
    };
}

function lazyLoadComponent(lazyModule, a) {

    return function (location, cb) {
        lazyModule(function (module) {
            return cb(null, module.default);
        });
    };
}

var RouterIndexApp = function (_Component) {
    _inherits(RouterIndexApp, _Component);

    function RouterIndexApp(props) {
        _classCallCheck(this, RouterIndexApp);

        return _possibleConstructorReturn(this, (RouterIndexApp.__proto__ || Object.getPrototypeOf(RouterIndexApp)).call(this, props));
        // this.state = {
        //     user: {
        //         userInfo: {
        //             user_name: ''
        //         }
        //     },
        //     menu: [],
        //     routers: [],
        //     isFinished: false,
        //     breadCrumb: {},
        // }
    }

    _createClass(RouterIndexApp, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var dispatch = this.props.dispatch;


            dispatch((0, _routerMenuAction.getRouterMenu)({}));

            // /**
            //  * 获取用户信息，导航菜单，路由，加载状态
            //  */
            // renderRouteMune().then( data => {

            //     this.setState({
            //         user: data.user,
            //         menu: data.menu,
            //         routers: data.routerArr,
            //         breadCrumb: data.breadCrumb,
            //         isFinished: true,
            //     })
            // });
        }
    }, {
        key: 'getChildContext',
        value: function getChildContext() {
            var _props = this.props,
                user = _props.user,
                menu = _props.menu,
                breadCrumb = _props.breadCrumb;


            return {
                user: user,
                menu: menu,
                breadCrumb: breadCrumb
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                isFinished = _props2.isFinished,
                history = _props2.history,
                routerArr = _props2.routerArr;


            var routers = [];
            /**
             * 生成Route
            */

            if (isFinished) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = routerArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        routers.push(_react2.default.createElement(_reactRouter.Route, { path: item.path, getComponent: lazyLoadComponent(item.component) }));
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
            }

            return isFinished === true ? _react2.default.createElement(
                _reactRouter.Router,
                { history: history },
                _react2.default.createElement(
                    _reactRouter.Route,
                    { path: '/', getComponent: lazyLoadComponent(_mainPage2.default) },
                    _react2.default.createElement(_reactRouter.IndexRoute, { getComponent: lazyLoadComponent(_welcome2.default) }),
                    routers,
                    _react2.default.createElement(_reactRouter.Route, { getComponent: lazyLoadComponent(_notFundPage2.default) })
                )
            ) : _react2.default.createElement(
                'div',
                { style: { width: 100, height: 100, position: 'fixed', left: '50%', margin: '-25px 0 0 -25px', top: '50%' } },
                _react2.default.createElement(_antd.Spin, { size: 'large', tip: '\u52A0\u8F7D\u4E2D...' })
            );
        }
    }]);

    return RouterIndexApp;
}(_react.Component);

RouterIndexApp.childContextTypes = {
    user: _react2.default.PropTypes.object,
    menu: _react2.default.PropTypes.array,
    breadCrumb: _react2.default.PropTypes.object
};

function mapStateToProps(state) {
    var data = state.getIn(['routerMenu']);
    return {
        user: data.getIn(['user']),
        menu: data.getIn(['menu']),
        routerArr: data.getIn(['routerArr']),
        breadCrumb: data.getIn(['breadCrumb']),
        isFinished: data.getIn(['isFinished'])
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(RouterIndexApp);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(39);

var _index = __webpack_require__(29);

var _reduxSaga = __webpack_require__(12);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _index2 = __webpack_require__(27);

var _index3 = _interopRequireDefault(_index2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by caozheng on 2017/1/4.
 */
var sagaMiddleware = (0, _reduxSaga2.default)();
var sagaRun = sagaMiddleware.run;

var entryStores = (0, _redux.createStore)(_index3.default, (0, _redux.applyMiddleware)(sagaMiddleware));

for (var saga in _index.getSagaList) {
    sagaRun(_index.getSagaList[saga]);
}

exports.default = entryStores;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(12);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchFn = undefined;

__webpack_require__(40);

var _antd = __webpack_require__(2);

/**
 * fetchFn 对window.fetch的封装，方面统一管理
 * @param url {String<URL>} 请求地址 
 * @param data {Object<JSON>} 请求参数
 * @param option {Object<JSON>} 额外的fetch可配置参数
 */
var fetchFn = exports.fetchFn = function fetchFn(url, data, option) {
    var json = {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data,
        credentials: 'include'
    };
    if (option) {
        Object.assign(json, option);
    }
    return fetch(url, json).then(function (res) {
        return res.json();
    }).then(function (data) {
        // if( Number(data.status) !== 0) {
        //     message.error( data['error'] ||data['msg'] || data['errmsg'] || '请求失败');
        // }
        return data;
    }).catch(function (error) {
        var msg = void 0;
        switch (error.toString()) {
            case 'TypeError: Failed to fetch':
                msg = '请求失败';
                break;
            default:
                msg = '请求失败';
        }
        _antd.message.error(msg);
        return { status: 1, msg: msg };
    });
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(5);

var _immutable2 = _interopRequireDefault(_immutable);

var _utilities = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (reducers) {
  var getDefaultState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _immutable2.default.Map;

  var reducerKeys = Object.keys(reducers);

  // eslint-disable-next-line space-infix-ops
  return function () {
    var inputState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDefaultState();
    var action = arguments[1];

    // eslint-disable-next-line no-process-env
    if (false) {
      var warningMessage = (0, _utilities.getUnexpectedInvocationParameterMessage)(inputState, reducers, action);

      if (warningMessage) {
        // eslint-disable-next-line no-console
        console.error(warningMessage);
      }
    }

    return inputState.withMutations(function (temporaryState) {
      reducerKeys.forEach(function (reducerName) {
        var reducer = reducers[reducerName];
        var currentDomainState = temporaryState.get(reducerName);
        var nextDomainState = reducer(currentDomainState, action);

        (0, _utilities.validateNextState)(nextDomainState, reducerName, action);

        temporaryState.set(reducerName, nextDomainState);
      });
    });
  };
};

module.exports = exports['default'];
//# sourceMappingURL=combineReducers.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineReducers = undefined;

var _combineReducers2 = __webpack_require__(18);

var _combineReducers3 = _interopRequireDefault(_combineReducers2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.combineReducers = _combineReducers3.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = __webpack_require__(5);

var _immutable2 = _interopRequireDefault(_immutable);

var _getStateName = __webpack_require__(8);

var _getStateName2 = _interopRequireDefault(_getStateName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (state, reducers, action) {
  var reducerNames = Object.keys(reducers);

  if (!reducerNames.length) {
    return 'Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.';
  }

  var stateName = (0, _getStateName2.default)(action);

  if (!_immutable2.default.Iterable.isIterable(state)) {
    return 'The ' + stateName + ' is of unexpected type. Expected argument to be an instance of Immutable.Iterable with the following properties: "' + reducerNames.join('", "') + '".';
  }

  var unexpectedStatePropertyNames = state.keySeq().toArray().filter(function (name) {
    return !reducers.hasOwnProperty(name);
  });

  if (unexpectedStatePropertyNames.length > 0) {
    return 'Unexpected ' + (unexpectedStatePropertyNames.length === 1 ? 'property' : 'properties') + ' "' + unexpectedStatePropertyNames.join('", "') + '" found in ' + stateName + '. Expected to find one of the known reducer property names instead: "' + reducerNames.join('", "') + '". Unexpected properties will be ignored.';
  }

  return null;
};

module.exports = exports['default'];
//# sourceMappingURL=getUnexpectedInvocationParameterMessage.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateNextState = exports.getUnexpectedInvocationParameterMessage = exports.getStateName = undefined;

var _getStateName2 = __webpack_require__(8);

var _getStateName3 = _interopRequireDefault(_getStateName2);

var _getUnexpectedInvocationParameterMessage2 = __webpack_require__(20);

var _getUnexpectedInvocationParameterMessage3 = _interopRequireDefault(_getUnexpectedInvocationParameterMessage2);

var _validateNextState2 = __webpack_require__(22);

var _validateNextState3 = _interopRequireDefault(_validateNextState2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getStateName = _getStateName3.default;
exports.getUnexpectedInvocationParameterMessage = _getUnexpectedInvocationParameterMessage3.default;
exports.validateNextState = _validateNextState3.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (nextState, reducerName, action) {
  // eslint-disable-next-line no-undefined
  if (nextState === undefined) {
    throw new Error('Reducer "' + reducerName + '" returned undefined when handling "' + action.type + '" action. To ignore an action, you must explicitly return the previous state.');
  }
};

module.exports = exports['default'];
//# sourceMappingURL=validateNextState.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(25);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiConfig = {
    initApi: _config2.default.appDomain + '/user/info'
};

exports.default = apiConfig;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TableApp = __webpack_require__(36);

var _TableApp2 = _interopRequireDefault(_TableApp);

var _DateApp = __webpack_require__(34);

var _DateApp2 = _interopRequireDefault(_DateApp);

var _ModalApp = __webpack_require__(35);

var _ModalApp2 = _interopRequireDefault(_ModalApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * key必须与后台返回的code值对应(如：code为person_s，可以值为PersonsApp),
 * value值为组件名称
 */
var componentApp = {
  'WYBvalidApp': _DateApp2.default,
  'ButtonclienttransferApp': _TableApp2.default,
  'WYBinsuredApp': _ModalApp2.default
};

exports.default = componentApp;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var env = 'dev'; //dev是本地开发环境，test是测试环境，beta是公测环境，product是正式环境

var config = {
	env: env
};

if (env === 'dev') {
	config.appDomain = '';
}

module.exports = config;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routerIndex = __webpack_require__(14);

var _routerIndex2 = _interopRequireDefault(_routerIndex);

__webpack_require__(13);

var _reactRedux = __webpack_require__(7);

var _createStore = __webpack_require__(15);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouter = __webpack_require__(3);

var _reactRouterRedux = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, _createStore2.default, {
    selectLocationState: function selectLocationState(state) {
        return state.get('routing');
    }
});

var Root = function (_React$Component) {
    _inherits(Root, _React$Component);

    function Root() {
        _classCallCheck(this, Root);

        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
    }

    _createClass(Root, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.title = '金柚网后台管理';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: _createStore2.default },
                _react2.default.createElement(_routerIndex2.default, { history: history })
            );
        }
    }]);

    return Root;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Root, null), document.getElementById('root'));

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxImmutable = __webpack_require__(19);

var _reactRouterRedux = __webpack_require__(6);

var _routerMenuReducer = __webpack_require__(28);

var indexReduces = (0, _reduxImmutable.combineReducers)({
    routerMenu: _routerMenuReducer.routerMenu,
    routing: _reactRouterRedux.routerReducer
});

// mainPage
/**
 * Created by caozheng on 2017/1/4.
 */
exports.default = indexReduces;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.routerMenu = undefined;

var _routerMenuAction = __webpack_require__(4);

var _antd = __webpack_require__(2);

var _reactRouter = __webpack_require__(3);

var _immutable = __webpack_require__(5);

var Immutable = _interopRequireWildcard(_immutable);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _routerMenuApi = __webpack_require__(9);

var _component = __webpack_require__(24);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SubMenu = _antd.Menu.SubMenu;
var MenuItem = _antd.Menu.Item;

var initialState = Immutable.fromJS({
	user: {
		userInfo: {
			user_name: ''
		}
	},
	menu: [],
	routerArr: [],
	isFinished: false,
	collapsed: false,
	mode: 'inline',
	openKeys: [],
	breadCrumbItem: {}
});

/**
 * 处理路由,生成对应的APP name
 */
var component = function component(code) {
	var appNameArr = code.replace(/_/g, '').split('');
	appNameArr[0] = appNameArr[0].toLocaleUpperCase();
	var appName = appNameArr.join('') + 'App';
	return appName;
};

/**
 * 将路由与组件一一对应
 * @param {*} routerArr 
 * @param {*} arr 
 */
var componentForRoute = function componentForRoute(routerArr, arr) {
	for (var i in routerArr) {
		var key = Object.keys(routerArr[i])[1];
		routerArr[i].component = arr[key];
		delete routerArr[i][key];
	}
};

/**
 * 处理数据
 */
var dataProcess = function dataProcess(data) {
	var menu = []; //导航栏

	var user = data; //用户信息

	var routerArr = []; //路由

	var breadCrumb = {}; //面包屑

	// 渲染左侧导航及添加路由
	// 一级导航栏
	for (var i = 0; i < data.userRole.length; i++) {
		var item1 = [];
		var item2 = [];
		var item3 = [];

		if (data.userRole[i].children && data.userRole[i].children.length > 0) {
			//二级导航栏
			for (var j = 0; j < data.userRole[i].children.length; j++) {

				//判断是否有三级
				if (data.userRole[i].children[j].children && data.userRole[i].children[j].children.length > 0) {
					//三级导航栏
					for (var k = 0; k < data.userRole[i].children[j].children.length; k++) {

						data.userRole[i].children[j].children[k].url ? data.userRole[i].children[j].children[k].url = data.userRole[i].children[j].children[k].url.replace(/\/jsp/, '/wyb') : data.userRole[i].children[j].children[k].url;

						// 组合三级导航节点
						item3.push(_react2.default.createElement(
							MenuItem,
							{ key: data.userRole[i].children[j].children[k].code },
							i === data.userRole.length - 1 ? _react2.default.createElement(
								_reactRouter.Link,
								{ to: data.userRole[i].children[j].children[k].url },
								data.userRole[i].children[j].children[k].displayName
							) : _react2.default.createElement(
								'a',
								{ href: data.userRole[i].children[j].children[k].system_url + data.userRole[i].children[j].children[k].url },
								data.userRole[i].children[j].children[k].displayName
							)
						));

						/**
       * 路由
       */
						if (i === data.userRole.length - 1) {

							routerArr.push(_defineProperty({
								path: data.userRole[i].children[j].children[k].url
							}, component(data.userRole[i].children[j].children[k].code), ''));

							/**
        * 面包屑缓存
        */
							breadCrumb[data.userRole[i].code + ',' + data.userRole[i].children[j].code + ',' + data.userRole[i].children[j].children[k].code] = [data.userRole[i].displayName, data.userRole[i].children[j].displayName, data.userRole[i].children[j].children[k].displayName];
						}
					}
					// 组合二级导航节点
					item2 = _react2.default.createElement(
						SubMenu,
						{
							key: data.userRole[i].children[j].code,
							title: _react2.default.createElement(
								'span',
								{ className: 'nav-text' },
								data.userRole[i].children[j].displayName
							)
						},
						item3
					);
					// 将二级导航节点插入相应的一级导航
					item1.push(item2);
					item3 = [];
				} else {
					data.userRole[i].children[j].url ? data.userRole[i].children[j].url = data.userRole[i].children[j].url.replace(/\/jsp/, '/wyb') : data.userRole[i].children[j].url;
					// 组合二级导航节点并插入相应的一级导航
					item1.push(_react2.default.createElement(
						MenuItem,
						{ key: data.userRole[i].children[j].code },
						i === data.userRole.length - 1 ? _react2.default.createElement(
							_reactRouter.Link,
							{ to: data.userRole[i].children[j].url },
							data.userRole[i].children[j].displayName
						) : _react2.default.createElement(
							'a',
							{ href: data.userRole[i].children[j].system_url + data.userRole[i].children[j].url },
							data.userRole[i].children[j].displayName
						)
					));
					/**
      * 路由
      */
					if (i === data.userRole.length - 1) {

						routerArr.push(_defineProperty({
							path: data.userRole[i].children[j].url
						}, component(data.userRole[i].children[j].code), ''));

						/**
       * 面包屑缓存
       */
						breadCrumb[data.userRole[i].code + ',' + data.userRole[i].children[j].code] = [data.userRole[i].displayName, data.userRole[i].children[j].displayName];
					}
				}
			}
		}

		/**
   * 最终生成的导航栏
   */
		var submenu = _react2.default.createElement(
			SubMenu,
			{
				key: data.userRole[i].code,
				title: _react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(_antd.Icon, { type: 'user' }),
					_react2.default.createElement(
						'span',
						{ className: 'nav-text' },
						data.userRole[i].displayName
					)
				)
			},
			item1
		);

		menu.push(submenu);
	}

	/**
  * 将路由与组件一一对应
  */
	componentForRoute(routerArr, _component2.default);

	var renderRouteMune = {
		user: user,
		menu: menu,
		routerArr: routerArr,
		breadCrumb: breadCrumb,
		isFinished: true
	};

	return renderRouteMune;
};

var routerMenu = exports.routerMenu = function routerMenu() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case _routerMenuAction.RECEIVED_ROUTER_MENU_DATA:

			var data = dataProcess(action.params);

			return state.updateIn(['user'], function () {
				return data.user;
			}).updateIn(['menu'], function () {
				return data.menu;
			}).updateIn(['routerArr'], function () {
				return data.routerArr;
			}).updateIn(['breadCrumb'], function () {
				return data.breadCrumb;
			});

		case _routerMenuAction.ROUTER_MENU_ISFINISHED:
			var isFinished = action.params.isFinished;


			return state.updateIn(['isFinished'], function () {
				return isFinished;
			});

		default:
			return state;
	}
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSagaList = undefined;

__webpack_require__(41);

var _routerMenuSaga = __webpack_require__(30);

var _routerMenuSaga2 = _interopRequireDefault(_routerMenuSaga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by caozheng on 2017/2/8.
 */
var getSagaList = exports.getSagaList = {
  watchGetRouterMenu: _routerMenuSaga2.default
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = watchGetRouterMenu;

var _reduxSaga = __webpack_require__(12);

var _effects = __webpack_require__(42);

var _antd = __webpack_require__(2);

var _routerMenuAction = __webpack_require__(4);

var _routerMenuApi = __webpack_require__(9);

var _marked = [getRouterMenu, incrementAsync, watchGetRouterMenu].map(regeneratorRuntime.mark);

/**
 * 获取路由导航
 */
function getRouterMenu(params) {
    return regeneratorRuntime.wrap(function getRouterMenu$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return (0, _effects.put)((0, _routerMenuAction.isFinished)({ isFinished: false }));

                case 3:
                    _context.next = 5;
                    return (0, _routerMenuApi.routerMenuApi)(params);

                case 5:
                    return _context.abrupt('return', _context.sent);

                case 8:
                    _context.prev = 8;
                    _context.t0 = _context['catch'](0);
                    _context.next = 12;
                    return (0, _effects.put)((0, _routerMenuAction.isFinished)({ isFinished: true }));

                case 12:
                    _antd.message.error(_context.t0.toString());

                case 13:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this, [[0, 8]]);
}

function incrementAsync(obj) {
    var type, params, data;
    return regeneratorRuntime.wrap(function incrementAsync$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    type = obj.type, params = obj.params;
                    _context2.t0 = type;
                    _context2.next = _context2.t0 === _routerMenuAction.GET_ROUTER_MENU_SAGA ? 4 : 12;
                    break;

                case 4:
                    _context2.next = 6;
                    return getRouterMenu(params);

                case 6:
                    data = _context2.sent;
                    _context2.next = 9;
                    return (0, _effects.put)((0, _routerMenuAction.receivedRouterMenuData)(data));

                case 9:
                    _context2.next = 11;
                    return (0, _effects.put)((0, _routerMenuAction.isFinished)({ isFinished: true }));

                case 11:
                    return _context2.abrupt('break', 12);

                case 12:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}

function watchGetRouterMenu() {
    return regeneratorRuntime.wrap(function watchGetRouterMenu$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    return _context3.delegateYield((0, _reduxSaga.takeEvery)([_routerMenuAction.GET_ROUTER_MENU_SAGA], incrementAsync), 't0', 1);

                case 1:
                case 'end':
                    return _context3.stop();
            }
        }
    }, _marked[2], this);
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(5).then((function(require) {
		cb(__webpack_require__(45));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(46));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(4).then((function(require) {
		cb(__webpack_require__(47));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(48));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(49));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(50));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = routerMiddleware;

var _actions = __webpack_require__(10);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
 * provided history object. This will prevent these actions from reaching your
 * reducer or any middleware that comes after this one.
 */
function routerMiddleware(history) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type !== _actions.CALL_HISTORY_METHOD) {
          return next(action);
        }

        var _action$payload = action.payload,
            method = _action$payload.method,
            args = _action$payload.args;

        history[method].apply(history, _toConsumableArray(args));
      };
    };
  };
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = syncHistoryWithStore;

var _reducer = __webpack_require__(11);

var defaultSelectLocationState = function defaultSelectLocationState(state) {
  return state.routing;
};

/**
 * This function synchronizes your history state with the Redux store.
 * Location changes flow from history to the store. An enhanced history is
 * returned with a listen method that responds to store updates for location.
 *
 * When this history is provided to the router, this means the location data
 * will flow like this:
 * history.push -> store.dispatch -> enhancedHistory.listen -> router
 * This ensures that when the store state changes due to a replay or other
 * event, the router will be updated appropriately and can transition to the
 * correct router state.
 */
function syncHistoryWithStore(history, store) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$selectLocationSt = _ref.selectLocationState,
      selectLocationState = _ref$selectLocationSt === undefined ? defaultSelectLocationState : _ref$selectLocationSt,
      _ref$adjustUrlOnRepla = _ref.adjustUrlOnReplay,
      adjustUrlOnReplay = _ref$adjustUrlOnRepla === undefined ? true : _ref$adjustUrlOnRepla;

  // Ensure that the reducer is mounted on the store and functioning properly.
  if (typeof selectLocationState(store.getState()) === 'undefined') {
    throw new Error('Expected the routing state to be available either as `state.routing` ' + 'or as the custom expression you can specify as `selectLocationState` ' + 'in the `syncHistoryWithStore()` options. ' + 'Ensure you have added the `routerReducer` to your store\'s ' + 'reducers via `combineReducers` or whatever method you use to isolate ' + 'your reducers.');
  }

  var initialLocation = void 0;
  var isTimeTraveling = void 0;
  var unsubscribeFromStore = void 0;
  var unsubscribeFromHistory = void 0;
  var currentLocation = void 0;

  // What does the store say about current location?
  var getLocationInStore = function getLocationInStore(useInitialIfEmpty) {
    var locationState = selectLocationState(store.getState());
    return locationState.locationBeforeTransitions || (useInitialIfEmpty ? initialLocation : undefined);
  };

  // Init initialLocation with potential location in store
  initialLocation = getLocationInStore();

  // If the store is replayed, update the URL in the browser to match.
  if (adjustUrlOnReplay) {
    var handleStoreChange = function handleStoreChange() {
      var locationInStore = getLocationInStore(true);
      if (currentLocation === locationInStore || initialLocation === locationInStore) {
        return;
      }

      // Update address bar to reflect store state
      isTimeTraveling = true;
      currentLocation = locationInStore;
      history.transitionTo(_extends({}, locationInStore, {
        action: 'PUSH'
      }));
      isTimeTraveling = false;
    };

    unsubscribeFromStore = store.subscribe(handleStoreChange);
    handleStoreChange();
  }

  // Whenever location changes, dispatch an action to get it in the store
  var handleLocationChange = function handleLocationChange(location) {
    // ... unless we just caused that location change
    if (isTimeTraveling) {
      return;
    }

    // Remember where we are
    currentLocation = location;

    // Are we being called for the first time?
    if (!initialLocation) {
      // Remember as a fallback in case state is reset
      initialLocation = location;

      // Respect persisted location, if any
      if (getLocationInStore()) {
        return;
      }
    }

    // Tell the store to update by dispatching an action
    store.dispatch({
      type: _reducer.LOCATION_CHANGE,
      payload: location
    });
  };
  unsubscribeFromHistory = history.listen(handleLocationChange);

  // History 3.x doesn't call listen synchronously, so fire the initial location change ourselves
  if (history.getCurrentLocation) {
    handleLocationChange(history.getCurrentLocation());
  }

  // The enhanced history uses store as source of truth
  return _extends({}, history, {
    // The listeners are subscribed to the store instead of history
    listen: function listen(listener) {
      // Copy of last location.
      var lastPublishedLocation = getLocationInStore(true);

      // Keep track of whether we unsubscribed, as Redux store
      // only applies changes in subscriptions on next dispatch
      var unsubscribed = false;
      var unsubscribeFromStore = store.subscribe(function () {
        var currentLocation = getLocationInStore(true);
        if (currentLocation === lastPublishedLocation) {
          return;
        }
        lastPublishedLocation = currentLocation;
        if (!unsubscribed) {
          listener(lastPublishedLocation);
        }
      });

      // History 2.x listeners expect a synchronous call. Make the first call to the
      // listener after subscribing to the store, in case the listener causes a
      // location change (e.g. when it redirects)
      if (!history.getCurrentLocation) {
        listener(lastPublishedLocation);
      }

      // Let user unsubscribe later
      return function () {
        unsubscribed = true;
        unsubscribeFromStore();
      };
    },


    // It also provides a way to destroy internal listeners
    unsubscribe: function unsubscribe() {
      if (adjustUrlOnReplay) {
        unsubscribeFromStore();
      }
      unsubscribeFromHistory();
    }
  });
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1340);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(600);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(604);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(681);

/***/ }),
/* 43 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map