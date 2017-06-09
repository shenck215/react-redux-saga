webpackJsonp([5],{

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(15);

var _index = __webpack_require__(439);

var _index2 = _interopRequireDefault(_index);

var _step = __webpack_require__(449);

var _step2 = _interopRequireDefault(_step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step = _antd.Steps.Step;

var Policypackage = function (_React$Component) {
    _inherits(Policypackage, _React$Component);

    function Policypackage(props) {
        _classCallCheck(this, Policypackage);

        return _possibleConstructorReturn(this, (Policypackage.__proto__ || Object.getPrototypeOf(Policypackage)).call(this, props));
    }

    _createClass(Policypackage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { key: '1' },
                    _react2.default.createElement(
                        'div',
                        { className: _index2.default.title },
                        '\u8BBE\u7F6E\u57CE\u5E02\u653F\u7B56',
                        _react2.default.createElement(
                            'span',
                            null,
                            '\u6D59\u6C5F - \u676D\u5DDE - \u5E02\u533A'
                        )
                    ),
                    _react2.default.createElement(
                        _antd.Steps,
                        { current: 0, className: _index2.default.steps },
                        _react2.default.createElement(Step, { title: '\u8BBE\u7F6E\u57FA\u672C\u4FE1\u606F' }),
                        _react2.default.createElement(Step, { title: '\u8BBE\u7F6E\u6B63\u5F0F\u653F\u7B56\u5305\u660E\u7EC6' }),
                        _react2.default.createElement(Step, { title: '\u8BBE\u7F6E\u9884\u6D4B\u5305\u4E0A\u6D6E\u7B56\u7565' }),
                        _react2.default.createElement(Step, { title: '\u8BBE\u7F6E\u53C2\u4FDD\u6750\u6599' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_step2.default, null)
                )
            );
        }
    }]);

    return Policypackage;
}(_react2.default.Component);

exports.default = Policypackage;

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(366)();
// imports


// module
exports.push([module.i, ".index---title---3JCJR{\r\n    border-bottom: 2px solid #22baa0;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 20px;\r\n    font-size: 18px;\r\n}\r\n\r\n.index---title---3JCJR span{\r\n    font-size: 18px;\r\n    color: #f60;\r\n    font-weight: bold;\r\n    margin-left: 20px;\r\n}\r\n\r\n\r\n\r\n.index---steps---1xyBj {\r\n    background: #EAEDF2;\r\n    margin: 0 auto;\r\n    margin-top: 20px;\r\n    padding: 20px;\r\n    border-radius: 2px;\r\n}\r\n.index---steps---1xyBj .ant-steps-step .ant-steps-head  {\r\n    background: #EAEDF2;\r\n}\r\n.index---steps---1xyBj .ant-steps-step .ant-steps-title  {\r\n    background: #EAEDF2;\r\n}\r\n\r\n.ant-steps .ant-steps-item.ant-steps-status-process .ant-steps-tail > i{\r\n    background-color: #22baa0;\r\n}\r\n\r\n.ant-steps .ant-steps-item.ant-steps-status-wait .ant-steps-tail > i{\r\n    background-color: #CFE5F0;\r\n}", ""]);

// exports
exports.locals = {
	"title": "index---title---3JCJR",
	"steps": "index---steps---1xyBj"
};

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(366)();
// imports


// module
exports.push([module.i, ".step-01---form---C1g8o {\r\n    margin-top: 20px;\r\n}\r\n\r\n.step-01---form---C1g8o .ant-select:only-child {\r\n    display: inline-block;\r\n}\r\n\r\n.step-01---add---3YHgv {\r\n    color: #108ee9;\r\n}\r\n\r\n.step-01---table---3Lkoj tr th, .step-01---table---3Lkoj tr td {\r\n    padding: 8px;\r\n}\r\n\r\n", ""]);

// exports
exports.locals = {
	"form": "step-01---form---C1g8o",
	"add": "step-01---add---3YHgv",
	"table": "step-01---table---3Lkoj"
};

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(421);
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

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(422);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(365)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../node_modules/.1.2.2@postcss-loader/index.js!./step-01.css", function() {
			var newContent = require("!!../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../node_modules/.1.2.2@postcss-loader/index.js!./step-01.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(15);

var _step = __webpack_require__(440);

var _step2 = _interopRequireDefault(_step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var Option = _antd.Select.Option;
var AutoCompleteOption = _antd.AutoComplete.Option;
var RadioGroup = _antd.Radio.Group;

var MonthPicker = _antd.DatePicker.MonthPicker;

// css

// 新增特殊截点日组件
var AddSpecialDayModal = function (_React$Component) {
    _inherits(AddSpecialDayModal, _React$Component);

    function AddSpecialDayModal() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AddSpecialDayModal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddSpecialDayModal.__proto__ || Object.getPrototypeOf(AddSpecialDayModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            // 是否显示modal
            specialDayModal: {
                visible: false
            },
            // 特殊服务商截点日 月份
            serviceMonthSelect: {
                value: "1"
            },
            // 特殊参保截点日 月份
            insuredMonthSelect: {
                value: "1"
            },
            // 特殊参保截点日 日期
            insuredDaySelectChange: {
                value: ''
            }

        }, _this.specialDayModalhandleOk = function () {
            _this.setState({
                specialDayModal: {
                    visible: false
                }
            });
        }, _this.specialDayModalhandleCancel = function () {
            _this.setState({
                specialDayModal: {
                    visible: false
                }
            });
        }, _this.changeState = function () {
            _this.setState({
                specialDayModal: {
                    visible: true
                }
            });
        }, _this.monthPickerChange = function (value) {
            // 特殊截点日允许设置多个，但参保月份不允许重复，因此在选择后需要检测是否已添加，若已添加，则提示“该月份已存在，不需要重复设置”
            console.log(value.format('x'));
        }, _this.getServiceDayOption = function () {
            var serviceDaySelectVal = _this.props.data.serviceDaySelectVal; // 服务商截点日日期
            var insuredMonthSelectVal = _this.state.serviceMonthSelect.value; // 1是当月，2是上月

            if (!serviceDaySelectVal || !insuredMonthSelectVal) {
                return;
            }

            if (insuredMonthSelectVal == 1) {
                return _this.props.data.getOption(serviceDaySelectVal);
            } else {
                return _this.props.data.getOption(28);
            }
        }, _this.serviceMonthSelectChange = function (value) {

            _this.setState({
                serviceMonthSelect: {
                    value: value
                }
            });
        }, _this.insuredMonthSelectChange = function (value) {

            console.log(value);

            _this.setState({
                insuredMonthSelect: {
                    value: value
                }
            });
        }, _this.insuredDaySelectChange = function (value) {}, _this.getInsuredDayOption = function () {
            var serviceDaySelectVal = _this.props.data.insuredDaySelectVal; // 参保截点日日期
            var insuredMonthSelectVal = _this.state.insuredMonthSelect.value; // 1是当月，2是上月

            if (!serviceDaySelectVal || !insuredMonthSelectVal) {
                return;
            }

            if (insuredMonthSelectVal == 1) {
                return _this.props.data.getOption(serviceDaySelectVal);
            } else {
                return _this.props.data.getOption(28);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // 设置 特殊服务商截点日 可选日期


    // 设置 特殊参保截点日 可选的日期


    _createClass(AddSpecialDayModal, [{
        key: 'render',
        value: function render() {

            // 公共栅格配置
            var formItemLayout = {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 6 }
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 14 }
                }
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _antd.Modal,
                    {
                        title: '\u8BBE\u7F6E\u7279\u6B8A\u622A\u70B9\u65E5',
                        visible: this.state.specialDayModal.visible,
                        onOk: this.specialDayModalhandleOk,
                        onCancel: this.specialDayModalhandleCancel,
                        width: '700'
                    },
                    _react2.default.createElement(_antd.Alert, { message: '\u6CE8\uFF1A\u7279\u6B8A\u670D\u52A1\u5546\u622A\u70B9\u65E5\u548C\u7279\u6B8A\u53C2\u4FDD\u622A\u70B9\u65E5\u7684\u5F53\u6708\u548C\u4E0A\u6708\u662F\u5206\u522B\u76F8\u5BF9\u4E8E\u5E38\u89C4\u7684\u670D\u52A1\u5546\u622A\u70B9\u65E5\u548C\u53C2\u4FDD\u622A\u70B9\u65E5\u800C\u8A00\u7684', type: 'error' }),
                    _react2.default.createElement(
                        _antd.Form,
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            FormItem,
                            _extends({}, formItemLayout, {
                                label: '\u53C2\u4FDD\u6708\u4EFD'
                            }),
                            _react2.default.createElement(MonthPicker, {
                                placeholder: '\u8BF7\u8BBE\u7F6E\u53C2\u4FDD\u6708\u4EFD',
                                onChange: this.monthPickerChange
                            })
                        ),
                        _react2.default.createElement(
                            FormItem,
                            _extends({}, formItemLayout, {
                                label: '\u7279\u6B8A\u670D\u52A1\u5546\u622A\u70B9\u65E5'
                            }),
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    className: _step2.default.select,
                                    style: { width: 100 },
                                    placeholder: '\u8BF7\u9009\u62E9',
                                    onChange: this.serviceMonthSelectChange,
                                    defaultValue: this.state.serviceMonthSelect.value
                                },
                                _react2.default.createElement(
                                    Option,
                                    { value: '1' },
                                    '\u5F53\u6708'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '2' },
                                    '\u4E0A\u6708'
                                )
                            ),
                            '\xA0',
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    className: _step2.default.select,
                                    style: { width: 100 },
                                    placeholder: '\u8BF7\u9009\u62E9'
                                },
                                this.getServiceDayOption()
                            ),
                            '\uFF08\u7528\u4E8E\u6D3E\u5355\u622A\u70B9\u65E5\u7684\u8BA1\u7B97\uFF09'
                        ),
                        _react2.default.createElement(
                            FormItem,
                            _extends({}, formItemLayout, {
                                label: '\u7279\u6B8A\u53C2\u4FDD\u622A\u70B9\u65E5'
                            }),
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    className: _step2.default.select,
                                    style: { width: 100 },
                                    onChange: this.insuredMonthSelectChange,
                                    defaultValue: this.state.insuredMonthSelect.value,
                                    placeholder: '\u8BF7\u9009\u62E9'
                                },
                                _react2.default.createElement(
                                    Option,
                                    { value: '1' },
                                    '\u5F53\u6708'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '2' },
                                    '\u4E0A\u6708'
                                )
                            ),
                            '\xA0',
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    className: _step2.default.select,
                                    style: { width: 100 },
                                    placeholder: '\u8BF7\u9009\u62E9',
                                    onChange: this.insuredDaySelectChange
                                },
                                this.getInsuredDayOption()
                            )
                        ),
                        _react2.default.createElement(
                            FormItem,
                            _extends({}, formItemLayout, {
                                label: _react2.default.createElement(
                                    'span',
                                    null,
                                    '\u5907\u6CE8\u8BF4\u660E'
                                )
                            }),
                            _react2.default.createElement(_antd.Input, {
                                type: 'textarea',
                                rows: 4,
                                placeholder: '\u8BF7\u8BBE\u7F6E\u5907\u6CE8\u8BF4\u660E'
                            })
                        )
                    )
                )
            );
        }
    }]);

    return AddSpecialDayModal;
}(_react2.default.Component);

// 新增调基生效月组件


var AddChangeBaseModal = function (_React$Component2) {
    _inherits(AddChangeBaseModal, _React$Component2);

    function AddChangeBaseModal() {
        var _ref2;

        var _temp2, _this2, _ret2;

        _classCallCheck(this, AddChangeBaseModal);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = AddChangeBaseModal.__proto__ || Object.getPrototypeOf(AddChangeBaseModal)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {

            changeBaseModal: {
                visible: false
            }

        }, _this2.changeBaseModalhandleOk = function () {
            _this2.setState({
                changeBaseModal: {
                    visible: false
                }
            });
        }, _this2.changeBaseModalhandleCancel = function () {
            _this2.setState({
                changeBaseModal: {
                    visible: false
                }
            });
        }, _this2.changeState = function () {
            _this2.setState({});
        }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(AddChangeBaseModal, [{
        key: 'render',
        value: function render() {

            // 公共栅格配置
            var formItemLayout = {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 6 }
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 14 }
                }
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _antd.Modal,
                    {
                        title: '\u8BBE\u7F6E\u7279\u6B8A\u622A\u70B9\u65E5',
                        visible: this.state.changeBaseModal.visible,
                        onOk: this.changeBaseModalhandleOk,
                        onCancel: this.changeBaseModalhandleCancel,
                        width: '500'
                    },
                    _react2.default.createElement(_antd.Alert, { message: '\u8C03\u57FA\u751F\u6548\u6708\u4E3B\u8981\u63A7\u5236\u4F59\u989D\u7684\u4F7F\u7528\u548C\u89E3\u51BB\uFF0C\u4E3A\u51CF\u5C11\u516C\u53F8\u7684\u635F\u5931\uFF0C\u8BF7\u8C28\u614E\u586B\u5199\u3002', type: 'error' }),
                    _react2.default.createElement(
                        _antd.Form,
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            FormItem,
                            _extends({}, formItemLayout, {
                                label: '\u8C03\u57FA\u751F\u6548\u5E74\u4EFD'
                            }),
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    className: _step2.default.select,
                                    style: { width: 100 },
                                    placeholder: '\u8BF7\u9009\u62E9'
                                },
                                _react2.default.createElement(
                                    Option,
                                    { value: '1' },
                                    '2016'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '2' },
                                    '2017'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '3' },
                                    '2018'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '4' },
                                    '2019'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            FormItem,
                            _extends({}, formItemLayout, {
                                label: '\u793E\u4FDD\u8C03\u57FA\u751F\u6548\u6708'
                            }),
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    className: _step2.default.select,
                                    style: { width: 100 },
                                    placeholder: '\u8BF7\u9009\u62E9'
                                },
                                _react2.default.createElement(
                                    Option,
                                    { value: '1' },
                                    '\u6709'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '2' },
                                    '\u65E0'
                                )
                            ),
                            '\xA0',
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    className: _step2.default.select,
                                    style: { width: 100 },
                                    placeholder: '\u8BF7\u9009\u62E9'
                                },
                                _react2.default.createElement(
                                    Option,
                                    { value: '1' },
                                    '1'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '2' },
                                    '2'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '3' },
                                    '3'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '4' },
                                    '4'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '5' },
                                    '5'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '6' },
                                    '6'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '7' },
                                    '7'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            FormItem,
                            _extends({}, formItemLayout, {
                                label: '\u516C\u79EF\u91D1\u8C03\u57FA\u751F\u6548\u6708'
                            }),
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    className: _step2.default.select,
                                    style: { width: 100 },
                                    placeholder: '\u8BF7\u9009\u62E9'
                                },
                                _react2.default.createElement(
                                    Option,
                                    { value: '1' },
                                    '\u6709'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '2' },
                                    '\u65E0'
                                )
                            ),
                            '\xA0',
                            _react2.default.createElement(
                                _antd.Select,
                                {
                                    className: _step2.default.select,
                                    style: { width: 100 },
                                    placeholder: '\u8BF7\u9009\u62E9'
                                },
                                _react2.default.createElement(
                                    Option,
                                    { value: '1' },
                                    '1'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '2' },
                                    '2'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '3' },
                                    '3'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '4' },
                                    '4'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '5' },
                                    '5'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '6' },
                                    '6'
                                ),
                                _react2.default.createElement(
                                    Option,
                                    { value: '7' },
                                    '7'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddChangeBaseModal;
}(_react2.default.Component);

// 页面主组件


var RegistrationForm = function (_React$Component3) {
    _inherits(RegistrationForm, _React$Component3);

    function RegistrationForm() {
        var _ref3;

        var _temp3, _this3, _ret3;

        _classCallCheck(this, RegistrationForm);

        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref3 = RegistrationForm.__proto__ || Object.getPrototypeOf(RegistrationForm)).call.apply(_ref3, [this].concat(args))), _this3), _this3.state = {
            // 服务商截点日
            serviceDaySelect: {
                value: ''
            },
            // 调基生效月
            changeBaseModal: {
                visible: false
            },
            // 参保截点日 月份
            insuredMonthSelect: {
                value: '1'
            },
            // 参保截点日 日期
            insuredDaySelect: {
                value: ''
            }

            // 新增特殊截点日 动作
        }, _this3.addSpecialDay = function () {
            _this3.addSpecialDayModal.changeState();
        }, _this3.addChangeBase = function () {

            _this3.setState({
                changeBaseModal: {
                    visible: true
                }
            });
        }, _this3.changeBaseModalhandleOk = function () {
            _this3.setState({
                changeBaseModal: {
                    visible: false
                }
            });
        }, _this3.changeBaseModalhandleCancel = function () {
            _this3.setState({
                changeBaseModal: {
                    visible: false
                }
            });
        }, _this3.serviceDaySelect = function (value) {
            _this3.setState({
                serviceDaySelect: {
                    value: value
                }
            });
        }, _this3.insuredMonthSelectChange = function (value) {
            _this3.setState({
                insuredMonthSelect: {
                    value: value
                }
            });
        }, _this3.getOption = function (number) {
            var optionArray = [];
            for (var i = 1; i <= number; i++) {
                optionArray.push(_react2.default.createElement(
                    Option,
                    { value: i },
                    i
                ));
            }
            return optionArray;
        }, _this3.getInsuredDayOption = function () {
            var serviceDaySelectVal = _this3.state.serviceDaySelect.value; // 服务商截点日日期
            var insuredMonthSelectVal = _this3.state.insuredMonthSelect.value; // 1是当月，2是上月

            if (!serviceDaySelectVal || !insuredMonthSelectVal) {
                return;
            }

            if (insuredMonthSelectVal == 1) {
                return _this3.getOption(serviceDaySelectVal);
            } else {
                return _this3.getOption(28);
            }
        }, _this3.insuredDayChange = function () {}, _this3.insuredDaySelectChange = function (value) {
            _this3.setState({
                insuredDaySelect: {
                    value: value
                }
            });
        }, _this3.specialDayTip = function () {

            var serviceDaySelectVal = _this3.state.serviceDaySelect.value; // 服务商截点日 日期
            var insuredDaySelectVal = _this3.state.insuredDaySelect.value; // 参保截点日 日期

            if (!serviceDaySelectVal) {
                return _react2.default.createElement(
                    'div',
                    null,
                    '\u8BF7\u5148\u8BBE\u7F6E\u670D\u52A1\u5546\u622A\u70B9\u65E5'
                );
            } else if (!insuredDaySelectVal) {
                return _react2.default.createElement(
                    'div',
                    null,
                    '\u8BF7\u5148\u8BBE\u7F6E\u53C2\u4FDD\u622A\u70B9\u65E5'
                );
            } else {
                return '';
            }
        }, _temp3), _possibleConstructorReturn(_this3, _ret3);
    }

    // 特殊截点日 提示


    _createClass(RegistrationForm, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            var getFieldDecorator = this.props.form.getFieldDecorator;

            // 公共栅格配置

            var formItemLayout = {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 3 }
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 14 }
                }
            };
            var tailFormItemLayout = {
                wrapperCol: {
                    xs: {
                        span: 24,
                        offset: 0
                    },
                    sm: {
                        span: 14,
                        offset: 3
                    }
                }
            };

            // 特殊截点日 table 数据
            var columns = [{
                title: '参保月份',
                dataIndex: 'month',
                key: 'month'
            }, {
                title: '特殊服务商截点日',
                dataIndex: 'serviceDay',
                key: 'serviceDay'
            }, {
                title: '特殊参保截点日',
                dataIndex: 'insuredDate',
                key: 'insuredDate'
            }, {
                title: '提前原因（用户端可见）',
                dataIndex: 'reason',
                key: 'reason'
            }, {
                title: '操作',
                dataIndex: 'tool',
                key: 'tool',
                render: function render() {
                    var result = [_react2.default.createElement(
                        'a',
                        { href: '#' },
                        '\u7F16\u8F91'
                    ), ' | ', _react2.default.createElement(
                        'a',
                        { href: '#' },
                        '\u5220\u9664'
                    )];
                    return result;
                }
            }];

            var data = [{
                key: '1',
                month: '2017-02',
                serviceDay: '[当月]5号',
                insuredDate: '[上月]15号',
                reason: '春节'
            }, {
                key: '2',
                month: '2017-02',
                serviceDay: '[当月]5号',
                insuredDate: '[上月]15号',
                reason: '春节'
            }];

            // 调基生效月 table 数据
            var changeBaseColumns = [{
                title: '调基生效年份',
                dataIndex: 'year',
                key: 'year'
            }, {
                title: '社保调基生效月',
                dataIndex: 'shebaomonth',
                key: 'shebaomonth'
            }, {
                title: '公积金调基生效月',
                dataIndex: 'fundmonth',
                key: 'fundmonth'
            }, {
                title: '操作',
                dataIndex: 'tool',
                key: 'tool',
                render: function render() {
                    var result = [_react2.default.createElement(
                        'a',
                        { href: '#' },
                        '\u7F16\u8F91'
                    ), ' | ', _react2.default.createElement(
                        'a',
                        { href: '#' },
                        '\u5220\u9664'
                    )];
                    return result;
                }
            }];

            var changeBaseData = [{
                key: '1',
                year: '2016年',
                shebaomonth: '7月',
                fundmonth: '无'
            }, {
                key: '2',
                year: '2017年',
                shebaomonth: '7月',
                fundmonth: '8月'
            }];
            // xxx


            return _react2.default.createElement(
                _antd.Form,
                { onSubmit: this.handleSubmit, className: _step2.default.form },
                _react2.default.createElement(
                    FormItem,
                    _extends({}, formItemLayout, {
                        label: _react2.default.createElement(
                            'span',
                            null,
                            '\u670D\u52A1\u5546\u622A\u70B9\u65E5'
                        )
                    }),
                    '\u6BCF\u6708\xA0',
                    getFieldDecorator('serviceDate', {
                        rules: [{ required: true, message: '' }]
                    })(_react2.default.createElement(
                        _antd.Select,
                        {
                            className: _step2.default.select,
                            style: { width: 100 },
                            placeholder: '\u8BF7\u9009\u62E9',
                            onChange: this.serviceDaySelect
                        },
                        this.getOption(31)
                    )),
                    '\xA0\u65E5'
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, formItemLayout, {
                        label: _react2.default.createElement(
                            'span',
                            null,
                            '\u53C2\u4FDD\u622A\u70B9\u65E5'
                        )
                    }),
                    getFieldDecorator('insuredDate', {
                        rules: [{ required: true, message: '' }],
                        initialValue: "1"
                    })(_react2.default.createElement(
                        _antd.Select,
                        {
                            className: _step2.default.select,
                            style: { width: 100 },
                            placeholder: '\u8BF7\u9009\u62E9',
                            defaultValue: this.state.insuredMonthSelect.value,
                            onChange: this.insuredMonthSelectChange
                        },
                        _react2.default.createElement(
                            Option,
                            { value: '1' },
                            '\u5F53\u6708'
                        ),
                        _react2.default.createElement(
                            Option,
                            { value: '2' },
                            '\u4E0A\u6708'
                        )
                    )),
                    '\xA0\u6BCF\u6708\xA0',
                    getFieldDecorator('insuredDateDay', {
                        rules: [{ required: true, message: '' }]
                    })(_react2.default.createElement(
                        _antd.Select,
                        {
                            className: _step2.default.select,
                            style: { width: 100 },
                            placeholder: '\u8BF7\u9009\u62E9',
                            onChange: this.insuredDaySelectChange
                        },
                        this.getInsuredDayOption()
                    )),
                    '\xA0\u65E5'
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, formItemLayout, {
                        label: _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement(
                                _antd.Tooltip,
                                { title: '\u4E3B\u8981\u5E94\u7528\u4E8E\u5927\u4E8E\u4E09\u5929\u4EE5\u4E0A\u7684\u8282\u5047\u65E5\uFF0C\u5982\uFF1A\u56FD\u5E86\u3001\u6625\u8282' },
                                _react2.default.createElement(_antd.Icon, { type: 'question-circle-o' })
                            ),
                            '\xA0\u7279\u6B8A\u622A\u70B9\u65E5'
                        )
                    }),
                    this.specialDayTip(),
                    _react2.default.createElement(AddSpecialDayModal, { data: {
                            getOption: this.getOption,
                            serviceDaySelectVal: this.state.serviceDaySelect.value,
                            insuredDaySelectVal: this.state.insuredDaySelect.value
                        }, ref: function ref(node) {
                            return _this4.addSpecialDayModal = node;
                        } }),
                    !this.specialDayTip() && _react2.default.createElement(_antd.Table, { className: _step2.default.table, columns: columns, dataSource: data, pagination: false, bordered: true }),
                    _react2.default.createElement(
                        'span',
                        { onClick: this.addSpecialDay, className: _step2.default.add },
                        _react2.default.createElement(_antd.Icon, { type: 'plus' }),
                        ' \u65B0\u589E'
                    )
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, formItemLayout, {
                        label: _react2.default.createElement(
                            'span',
                            null,
                            '\u7F34\u7EB3\u89C4\u5219'
                        )
                    }),
                    getFieldDecorator('paymentRule', {
                        rules: [{ required: true, message: '' }]
                    })(_react2.default.createElement(
                        _antd.Select,
                        {
                            className: _step2.default.select,
                            style: { width: 200 },
                            placeholder: '\u8BF7\u9009\u62E9'
                        },
                        _react2.default.createElement(
                            Option,
                            { value: '1' },
                            '\u793E\u4FDD\u516C\u79EF\u91D1\u5F3A\u5236'
                        ),
                        _react2.default.createElement(
                            Option,
                            { value: '2' },
                            '\u793E\u4FDD\u5F3A\u5236\u516C\u79EF\u91D1\u53EF\u9009'
                        ),
                        _react2.default.createElement(
                            Option,
                            { value: '3' },
                            '\u53EF\u5355\u7F34\u516C\u79EF\u91D1'
                        ),
                        _react2.default.createElement(
                            Option,
                            { value: '4' },
                            '\u4EC5\u7F34\u793E\u4FDD'
                        ),
                        _react2.default.createElement(
                            Option,
                            { value: '5' },
                            '\u4EC5\u7F34\u516C\u79EF\u91D1'
                        )
                    ))
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, formItemLayout, {
                        label: _react2.default.createElement(
                            'span',
                            null,
                            '\u589E\u51CF\u89C4\u5219'
                        )
                    }),
                    getFieldDecorator('addReduceRule', {
                        rules: [{ required: true, message: '' }]
                    })(_react2.default.createElement(
                        _antd.Select,
                        {
                            className: _step2.default.select,
                            style: { width: 200 },
                            placeholder: '\u8BF7\u9009\u62E9'
                        },
                        _react2.default.createElement(
                            Option,
                            { value: '1' },
                            '\u589E\u5F53\u6708\u51CF\u5F53\u6708'
                        ),
                        _react2.default.createElement(
                            Option,
                            { value: '2' },
                            '\u589E\u5F53\u6708\u51CF\u6B21\u6708'
                        ),
                        _react2.default.createElement(
                            Option,
                            { value: '3' },
                            '\u589E\u6B21\u6708\u51CF\u5F53\u6708'
                        ),
                        _react2.default.createElement(
                            Option,
                            { value: '4' },
                            '\u589E\u6B21\u6708\u51CF\u6B21\u6708'
                        )
                    ))
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, formItemLayout, {
                        label: _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement(
                                _antd.Tooltip,
                                { title: 'What do you want other to call you?' },
                                _react2.default.createElement(_antd.Icon, { type: 'question-circle-o' })
                            ),
                            '\xA0\u793E\u4FDD\u516C\u79EF\u91D1\u57FA\u6570'
                        )
                    }),
                    _react2.default.createElement(
                        _antd.Checkbox,
                        null,
                        '\u4E00\u81F4'
                    )
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, formItemLayout, {
                        label: _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement(
                                _antd.Tooltip,
                                { title: 'What do you want other to call you?' },
                                _react2.default.createElement(_antd.Icon, { type: 'question-circle-o' })
                            ),
                            '\xA0\u793E\u4FDD\u516C\u79EF\u91D1\u57FA\u6570'
                        )
                    }),
                    _react2.default.createElement(
                        _antd.Checkbox,
                        null,
                        '\u589E\u5458\u9700\u8981\u989D\u5916\u6536\u53D6'
                    ),
                    _react2.default.createElement(
                        _antd.Checkbox,
                        null,
                        '\u51CF\u5458\u9700\u8981\u989D\u5916\u6536\u53D6'
                    )
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, formItemLayout, {
                        label: _react2.default.createElement(
                            'span',
                            null,
                            '\u8C03\u57FA\u751F\u6548\u6708'
                        )
                    }),
                    _react2.default.createElement(AddChangeBaseModal, null),
                    _react2.default.createElement(_antd.Table, { className: _step2.default.table, columns: changeBaseColumns, dataSource: changeBaseData, pagination: false, bordered: true }),
                    _react2.default.createElement(
                        'div',
                        { onClick: this.addChangeBase, className: _step2.default.add },
                        _react2.default.createElement(_antd.Icon, { type: 'plus' }),
                        ' \u65B0\u589E'
                    )
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, formItemLayout, {
                        label: _react2.default.createElement(
                            'span',
                            null,
                            '\u8C03\u57FA\u8BF4\u660E'
                        )
                    }),
                    _react2.default.createElement(_antd.Input, {
                        type: 'textarea',
                        rows: 4,
                        placeholder: '\u8C03\u57FA\u6761\u4EF6\u3001\u8C03\u57FA\u6750\u6599\u3001\u8C03\u57FA\u653F\u7B56\u7B49\u4FE1\u606F\u8BF4\u660E\uFF0C300\u4E2A\u5B57\u4E4B\u5185'
                    })
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, formItemLayout, {
                        label: _react2.default.createElement(
                            'span',
                            null,
                            '\u53C2\u4FDD\u987B\u77E5'
                        )
                    }),
                    _react2.default.createElement(_antd.Input, {
                        type: 'textarea',
                        rows: 4,
                        placeholder: '\u53C2\u4FDD\u524D\u544A\u77E5\u5BA2\u6237\u7684\u6CE8\u610F\u4E8B\u9879\uFF0C\u6B64\u4FE1\u606F\u9762\u5411\u5BA2\u6237\u5F00\u653E\uFF0C\u8BF7\u8C28\u614E\u586B\u5199\uFF0C300\u4E2A\u5B57\u4E4B\u5185'
                    })
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, formItemLayout, {
                        label: _react2.default.createElement(
                            'span',
                            null,
                            '\u5907\u6CE8\u8BF4\u660E'
                        )
                    }),
                    _react2.default.createElement(_antd.Input, {
                        type: 'textarea',
                        rows: 4,
                        placeholder: '\u5F53\u524D\u57CE\u5E02\u7684\u7279\u6B8A\u4E8B\u9879\u8BF4\u660E\uFF0C\u4EC5\u540E\u53F0\u5F00\u653E\uFF0C300\u4E2A\u5B57\u4E4B\u5185'
                    })
                ),
                _react2.default.createElement(
                    FormItem,
                    tailFormItemLayout,
                    _react2.default.createElement(
                        _antd.Button,
                        { type: 'primary', htmlType: 'submit', size: 'large' },
                        '\u4FDD\u5B58\uFF0C\u4E0B\u4E00\u6B65'
                    )
                )
            );
        }
    }]);

    return RegistrationForm;
}(_react2.default.Component);

var WrappedRegistrationForm = _antd.Form.create()(RegistrationForm);

exports.default = WrappedRegistrationForm;

/***/ })

});
//# sourceMappingURL=5.js.map