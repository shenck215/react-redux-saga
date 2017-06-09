webpackJsonp([9],{

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _mainPage = __webpack_require__(430);

var _mainPage2 = _interopRequireDefault(_mainPage);

var _antd = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _antd.Layout.Header,
    Content = _antd.Layout.Content,
    Footer = _antd.Layout.Footer,
    Sider = _antd.Layout.Sider;

var MenuItemGroup = _antd.Menu.ItemGroup;
var SubMenu = _antd.Menu.SubMenu;

/* eslint-disable */

var MainPageApp = function (_React$Component) {
	_inherits(MainPageApp, _React$Component);

	function MainPageApp(props) {
		_classCallCheck(this, MainPageApp);

		var _this = _possibleConstructorReturn(this, (MainPageApp.__proto__ || Object.getPrototypeOf(MainPageApp)).call(this, props));

		_this.onCollapse = function (collapsed) {
			_this.setState({
				collapsed: !_this.state.collapsed,
				mode: 'inline'
			});
		};

		_this.menuClick = function (item) {

			var openKeys = item.keyPath;
			sessionStorage.setItem('openKeys', openKeys.join(','));
			_this.setState({
				openKeys: openKeys
			});

			// if (openKeys.length) {

			// 	this.proBreadCrumbItem(openKeys);

			// }
		};

		_this.menuOpenChange = function (openKeys) {

			_this.setState({
				openKeys: openKeys
			});

			sessionStorage.setItem('openKeys', openKeys.join(','));
		};

		_this.state = {
			collapsed: false,
			mode: 'inline',
			user: {
				userInfo: {
					user_name: ''
				}
			},
			menu: [],
			openKeys: sessionStorage.openKeys ? sessionStorage.openKeys.split(',') : []
			//breadCrumbItem: [<Breadcrumb.Item>无忧保首页</Breadcrumb.Item>],
		};
		return _this;
	}

	_createClass(MainPageApp, [{
		key: 'componentWillMount',
		value: function componentWillMount() {

			this.setState({
				user: this.context.user,
				menu: this.context.menu
				//breadCrumb: this.context.breadCrumb,
			});
		}

		/**
   * 根据openKeys获取面包屑关系
   */
		// proBreadCrumbItem = (openKeys) => {

		// 	let breadCrumbItem = [];
		// 	const breadCrumb = this.state.breadCrumb;
		// 	const nowOpenKeys = openKeys? openKeys: sessionStorage.openKeys;
		// 	const breadCrumbKey = nowOpenKeys.reverse().join(',');
		// 	if (breadCrumb[breadCrumbKey]) {
		// 		for (let item of breadCrumb[breadCrumbKey]) {
		// 			breadCrumbItem.push(<Breadcrumb.Item>{item}</Breadcrumb.Item>);
		// 		}
		// 		this.setState({
		// 			breadCrumbItem: breadCrumbItem
		// 		});
		// 		sessionStorage.setItem('breadCrumbKey',breadCrumbKey);
		// 	}
		// }

	}, {
		key: 'render',
		value: function render() {

			/**
    * 子组件
    */
			var children = this.props.children;

			//let breadCrumbItem = [];
			/**
    * 生成面包屑
    */
			// if(sessionStorage.breadCrumbKey) {
			// 	const breadCrumb = this.state.breadCrumb;
			// 	const breadCrumbKey = sessionStorage.breadCrumbKey;
			// 	if (breadCrumb[breadCrumbKey]) {
			// 		for (let item of breadCrumb[breadCrumbKey]) {
			// 			breadCrumbItem.push(<Breadcrumb.Item>{item}</Breadcrumb.Item>);
			// 		}
			// 	}
			// }else {
			// 	breadCrumbItem = this.state.breadCrumbItem;//初始化
			// }

			return _react2.default.createElement(
				_antd.Layout,
				{ style: { height: '100%' } },
				_react2.default.createElement(
					Sider,
					{
						collapsible: true,
						collapsed: this.state.collapsed,
						onCollapse: this.onCollapse
					},
					_react2.default.createElement(
						'div',
						{ className: 'logo' },
						'\u91D1\u67DA\u7F51'
					),
					_react2.default.createElement(
						_antd.Menu,
						{ theme: 'dark', onClick: this.menuClick, openKeys: this.state.openKeys, onOpenChange: this.menuOpenChange, mode: this.state.mode, defaultSelectedKeys: this.state.openKeys, style: { "padding-bottom": '153px' } },
						this.state.menu
					)
				),
				_react2.default.createElement(
					_antd.Layout,
					null,
					_react2.default.createElement(
						Header,
						{ style: { background: '#FFF', padding: 0 } },
						_react2.default.createElement(_antd.Icon, {
							className: 'trigger',
							type: this.state.collapsed ? 'menu-unfold' : 'menu-fold',
							onClick: this.onCollapse
						}),
						_react2.default.createElement(
							'div',
							{ className: _mainPage2.default.headerUserWrapper },
							_react2.default.createElement(
								_antd.Menu,
								{
									onClick: this.handleClick,
									mode: 'horizontal'
								},
								_react2.default.createElement(
									SubMenu,
									{ title: _react2.default.createElement(
											'span',
											null,
											_react2.default.createElement(_antd.Icon, { type: 'user' }),
											this.state.user.userInfo.user_name
										) },
									_react2.default.createElement(
										MenuItemGroup,
										{ title: 'users' },
										_react2.default.createElement(
											_antd.Menu.Item,
											{ key: 'setting:1' },
											_react2.default.createElement(
												'a',
												{ href: '/logout' },
												_react2.default.createElement(_antd.Icon, { type: 'poweroff' }),
												'\u6CE8\u9500'
											)
										)
									)
								)
							)
						)
					),
					_react2.default.createElement(
						Content,
						{ style: { margin: "12px 16px 24px" } },
						_react2.default.createElement(
							'div',
							{ style: { padding: 24, background: '#fff', minHeight: 738 } },
							children
						)
					),
					_react2.default.createElement(
						Footer,
						{ style: { textAlign: 'center' } },
						'Copyright \xA9 2017 - 2018\u676D\u5DDE\u4ECA\u5143\u6807\u77E9\u79D1\u6280\u6709\u9650\u516C\u53F8 \u7248\u6743\u5F52\u4ECA\u5143\u96C6\u56E2\u6240\u6709'
					)
				)
			);
		}
	}]);

	return MainPageApp;
}(_react2.default.Component);

MainPageApp.contextTypes = {
	user: _react2.default.PropTypes.object,
	menu: _react2.default.PropTypes.array
	//breadCrumb: React.PropTypes.object,
};

exports.default = MainPageApp;

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(366)();
// imports


// module
exports.push([module.i, "\r\n\r\n* {\r\n    font-size: 14px;\r\n}\r\n\r\n.ant-layout-sider .logo {\r\n    height: 50px;\r\n    background: #333;\r\n    border-radius: 6px;\r\n    margin: 16px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    color: white;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.ant-layout-header .trigger{\r\n    font-size: 18px;\r\n    line-height: 64px;\r\n    padding: 0 16px;\r\n    cursor: pointer;\r\n    transition: color .3s;\r\n}\r\n\r\n.mainPage---headerUserWrapper---1nxt5 {\r\n    float: right;\r\n    margin-right: 100px;\r\n}", ""]);

// exports
exports.locals = {
	"headerUserWrapper": "mainPage---headerUserWrapper---1nxt5"
};

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(411);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(365)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../node_modules/.1.2.2@postcss-loader/index.js!./mainPage.css", function() {
			var newContent = require("!!../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../node_modules/.1.2.2@postcss-loader/index.js!./mainPage.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=9.js.map