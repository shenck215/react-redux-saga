webpackJsonp([1],{

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _antd = __webpack_require__(2);

var _fetch = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*eslint-disable */

var FormItem = _antd.Form.Item;
var RadioGroup = _antd.Radio.Group;
var RadioButton = _antd.Radio.Button;

var columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 150,
    render: function render(text) {
        return _react2.default.createElement(
            'a',
            { href: '#' },
            text
        );
    }
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 70
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
}, {
    title: 'Action',
    key: 'action',
    width: 360,
    render: function render(text, record) {
        return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
                'a',
                { href: '#' },
                'Action - ',
                record.name
            ),
            _react2.default.createElement('span', { className: 'ant-divider' }),
            _react2.default.createElement(
                'a',
                { href: '#' },
                'Delete'
            ),
            _react2.default.createElement('span', { className: 'ant-divider' }),
            _react2.default.createElement(
                'a',
                { href: '#', className: 'ant-dropdown-link' },
                'More actions ',
                _react2.default.createElement(_antd.Icon, { type: 'down' })
            )
        );
    }
}];

var data = [];

for (var i = 1; i <= 10; i++) {
    data.push({
        key: i,
        name: 'Shenck' + i + '\u53F7',
        age: i + '2',
        address: 'Hang Zhou.' + i + ' Xi Hu',
        description: 'KeKe , A - ' + i
    });
}

var title = function title() {
    return 'Here is title';
};

var footer = function footer() {
    return 'Here is footer';
};

var scroll = { y: 240 };

var expandedRowRender = function expandedRowRender(record) {
    return _react2.default.createElement(
        'p',
        null,
        record.description
    );
};

var TableApp = function (_Component) {
    _inherits(TableApp, _Component);

    function TableApp(props) {
        _classCallCheck(this, TableApp);

        var _this = _possibleConstructorReturn(this, (TableApp.__proto__ || Object.getPrototypeOf(TableApp)).call(this, props));

        _this.handleToggle = function (value) {
            return function (enable) {
                _this.setState(_defineProperty({}, value, enable));
            };
        };

        _this.handleChangeTitle = function (enable) {
            _this.setState({
                title: enable ? title : undefined
            });
        };

        _this.handleChangeFooter = function (enable) {
            _this.setState({
                footer: enable ? footer : undefined
            });
        };

        _this.handleChangeShowHeader = function (enable) {
            _this.setState({
                showHeader: enable ? true : false
            });
        };

        _this.handleChangeRowSelection = function (enable) {
            console.log(_this.state);
            _this.setState({
                rowSelection: enable ? {} : undefined
            });
        };

        _this.handleChangeScroll = function (enable) {
            _this.setState({
                scroll: enable ? scroll : undefined
            });
        };

        _this.handleChangeExpandedRowRender = function (enable) {
            _this.setState({
                expandedRowRender: enable ? expandedRowRender : undefined
            });
        };

        _this.handleChangeSize = function (e) {
            _this.setState({
                size: e.target.value
            });
        };

        return _this;
    }

    _createClass(TableApp, [{
        key: 'componentWillMount',
        value: function componentWillMount() {

            // fetchFn(javaConfig.cityAjaxUrl).then((data) => {
            //     console.log(data)
            // });

            this.state = {
                bordered: false,
                loading: false,
                pagination: true,
                size: 'default',
                title: title,
                showHeader: true,
                footer: footer,
                rowSelection: {},
                scroll: undefined,
                expandedRowRender: undefined
            };
        }

        /**
         * 边框，加载中
         * 状态切换
         */


        /**
         * title
         */


        /**
         * footer
         */


        /**
         * 显示头
         */


        /**
         * 复选框
         */


        /**
         * 表头固定
         */


        /**
         * 额外的展开行
         */


        /**
         * 尺寸
         */

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _antd.Form,
                    { layout: 'inline' },
                    _react2.default.createElement(
                        FormItem,
                        { label: 'bordered' },
                        _react2.default.createElement(_antd.Switch, { checked: this.state.bordered, onChange: this.handleToggle('bordered') })
                    ),
                    _react2.default.createElement(
                        FormItem,
                        { label: 'loading' },
                        _react2.default.createElement(_antd.Switch, { checked: this.state.loading, onChange: this.handleToggle('loading') })
                    ),
                    _react2.default.createElement(
                        FormItem,
                        { label: 'pagination' },
                        _react2.default.createElement(_antd.Switch, { checked: this.state.pagination, onChange: this.handleToggle('pagination') })
                    ),
                    _react2.default.createElement(
                        FormItem,
                        { label: 'title' },
                        _react2.default.createElement(_antd.Switch, { checked: !!this.state.title, onChange: this.handleChangeTitle })
                    ),
                    _react2.default.createElement(
                        FormItem,
                        { label: 'footer' },
                        _react2.default.createElement(_antd.Switch, { checked: !!this.state.footer, onChange: this.handleChangeFooter })
                    ),
                    _react2.default.createElement(
                        FormItem,
                        { label: 'showHeader' },
                        _react2.default.createElement(_antd.Switch, { checked: this.state.showHeader, onChange: this.handleChangeShowHeader })
                    ),
                    _react2.default.createElement(
                        FormItem,
                        { label: 'rowSelection' },
                        _react2.default.createElement(_antd.Switch, { checked: this.state.rowSelection, onChange: this.handleChangeRowSelection })
                    ),
                    _react2.default.createElement(
                        FormItem,
                        { label: 'scroll' },
                        _react2.default.createElement(_antd.Switch, { checked: this.state.scroll, onChange: this.handleChangeScroll })
                    ),
                    _react2.default.createElement(
                        FormItem,
                        { label: 'expandedRowRender' },
                        _react2.default.createElement(_antd.Switch, { checked: this.state.expandedRowRender, onChange: this.handleChangeExpandedRowRender })
                    ),
                    _react2.default.createElement(
                        FormItem,
                        { label: 'Size' },
                        _react2.default.createElement(
                            RadioGroup,
                            { size: 'default', value: this.state.size, onChange: this.handleChangeSize },
                            _react2.default.createElement(
                                RadioButton,
                                { value: 'default' },
                                'Default'
                            ),
                            _react2.default.createElement(
                                RadioButton,
                                { value: 'middle' },
                                'Middle'
                            ),
                            _react2.default.createElement(
                                RadioButton,
                                { value: 'small' },
                                'Small'
                            )
                        )
                    )
                ),
                _react2.default.createElement(_antd.Table, _extends({}, this.state, { columns: columns, dataSource: data }))
            );
        }
    }]);

    return TableApp;
}(_react.Component);

exports.default = TableApp;

/***/ })

});
//# sourceMappingURL=1.js.map