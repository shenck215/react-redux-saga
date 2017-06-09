webpackJsonp([4],{

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(434);

var _index2 = _interopRequireDefault(_index);

var _antd = __webpack_require__(15);

var _PopFilter = __webpack_require__(446);

var _PopFilter2 = _interopRequireDefault(_PopFilter);

var _reactRouter = __webpack_require__(33);

var _reactRedux = __webpack_require__(44);

var _policyCompanyListAction = __webpack_require__(61);

var _moment = __webpack_require__(14);

var _moment2 = _interopRequireDefault(_moment);

var _tags = __webpack_require__(404);

var _tags2 = _interopRequireDefault(_tags);

var _utils = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by YiShuai on 2017/5/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var filterOptions = {
    companyName: {
        title: '服务商名称',
        index: 0
    },
    companyAddress: {
        title: '所在地区',
        index: 1
    },
    serviceCityNum: {
        title: '服务城市数量',
        index: 2
    },
    cooperationTime: {
        title: '合作时间',
        index: 3
    }

    // const dataSource = [{
    //     key: '1',
    //     companyName: '杭州今元嘉和人力资源管理杭州今元嘉和人力资源管杭州今元嘉和人力资源管理杭州今元嘉和人力',
    //     companyAddress: '杭州-江干-凯旋路',
    //     serviceCityNum: 4,
    //     cooperationTime: [
    //         new Date().getTime(),
    //         new Date().getTime()
    //     ]
    // }]

};
var PolicyCompany = function (_React$Component) {
    _inherits(PolicyCompany, _React$Component);

    function PolicyCompany(props) {
        _classCallCheck(this, PolicyCompany);

        var _this = _possibleConstructorReturn(this, (PolicyCompany.__proto__ || Object.getPrototypeOf(PolicyCompany)).call(this, props));

        _this.goToDetail = function (id) {
            sessionStorage.setItem('policycompanydetailId', id);
        };

        _this.goToBuildNewCompanyPage = function () {
            _reactRouter.browserHistory.push('/jsp/react/businessset/facilitator/new');
        };

        _this.resetFilterOptions = function () {
            var _this$props = _this.props,
                dispatch = _this$props.dispatch,
                pageNow = _this$props.pageNow,
                pageSize = _this$props.pageSize;

            dispatch((0, _policyCompanyListAction.modifyFilterTags)([]));
            dispatch((0, _policyCompanyListAction.modifyFilterData)({}));
            dispatch((0, _policyCompanyListAction.getCompanyNameList)({
                pageNow: pageNow,
                pageSize: pageSize
            }));
        };

        _this.handleFilterCache = function (key, value) {
            var _this$props2 = _this.props,
                dispatch = _this$props2.dispatch,
                companyName = _this$props2.companyName,
                companyAddress = _this$props2.companyAddress,
                cooperateStartTime = _this$props2.cooperateStartTime,
                cooperateEndTime = _this$props2.cooperateEndTime,
                serviceCityNum = _this$props2.serviceCityNum;

            var filterData = { companyName: companyName, companyAddress: companyAddress, cooperateStartTime: cooperateStartTime, cooperateEndTime: cooperateEndTime, serviceCityNum: serviceCityNum };
            if (key === 'cooperationTime') {
                // moment对象数组(RangePicker组件)解析为时间戳数组
                var cooperateTimes = value.map(function (item) {
                    return item.format('X');
                });
                dispatch((0, _policyCompanyListAction.modifyFilterData)(Object.assign(filterData, {
                    cooperateStartTime: cooperateTimes[0], cooperateEndTime: cooperateTimes[1]
                })));
            } else {
                dispatch((0, _policyCompanyListAction.modifyFilterData)(Object.assign(filterData, _defineProperty({}, key, value))));
            }
        };

        _this.deleteFilterCache = function (key) {
            var _this$props3 = _this.props,
                dispatch = _this$props3.dispatch,
                pageNow = _this$props3.pageNow,
                pageSize = _this$props3.pageSize,
                filterTags = _this$props3.filterTags;
            var _this$props4 = _this.props,
                companyName = _this$props4.companyName,
                companyAddress = _this$props4.companyAddress,
                cooperateStartTime = _this$props4.cooperateStartTime,
                cooperateEndTime = _this$props4.cooperateEndTime,
                serviceCityNum = _this$props4.serviceCityNum;

            var filterData = { companyName: companyName, companyAddress: companyAddress, cooperateStartTime: cooperateStartTime, cooperateEndTime: cooperateEndTime, serviceCityNum: serviceCityNum };
            filterTags[filterOptions[key]['index']] = null;
            // 键值为cooperationTime时 同时置空起止时间
            if (key === 'cooperationTime') {
                // 隐藏bug  置空了起止时间 但cooperationTime不为空
                filterData = Object.assign(filterData, { cooperateStartTime: null, cooperateEndTime: null });
            } else {
                filterData = Object.assign(filterData, _defineProperty({}, key, null));
            }
            dispatch((0, _policyCompanyListAction.modifyFilterTags)(filterTags));
            dispatch((0, _policyCompanyListAction.modifyFilterData)(filterData));
            dispatch((0, _policyCompanyListAction.getCompanyNameList)(_extends({
                pageNow: pageNow,
                pageSize: pageSize
            }, filterData)));
        };

        _this.filterSave = function (key, valid) {
            var _this$props5 = _this.props,
                dispatch = _this$props5.dispatch,
                filterTags = _this$props5.filterTags,
                filterData = _this$props5.filterData,
                pageNow = _this$props5.pageNow,
                pageSize = _this$props5.pageSize,
                companyName = _this$props5.companyName,
                companyAddress = _this$props5.companyAddress,
                cooperateStartTime = _this$props5.cooperateStartTime,
                cooperateEndTime = _this$props5.cooperateEndTime,
                serviceCityNum = _this$props5.serviceCityNum;

            var filterDataUpdate = { companyName: companyName, companyAddress: companyAddress, cooperationTime: [cooperateStartTime, cooperateEndTime], serviceCityNum: serviceCityNum };
            if (valid) {
                Object.keys(filterDataUpdate).map(function (key) {
                    var searchTitleText = filterOptions[key]['title'] + '：';
                    if (key === 'cooperationTime') {
                        if (filterDataUpdate[key] && filterDataUpdate[key][0] && filterDataUpdate[key][0]) {
                            var searchText = (0, _utils.unixToFormatedDataTime)(filterDataUpdate[key][0]) + '至' + (0, _utils.unixToFormatedDataTime)(filterDataUpdate[key][1]);
                            filterTags[filterOptions[key]['index']] = _react2.default.createElement(_tags2.default, { searchTitleText: searchTitleText, searchText: searchText, deleteSearchCashe: function deleteSearchCashe() {
                                    return _this.deleteFilterCache(key);
                                } });
                            // console.log(filterTags[filterOptions[key]['index']])
                        }
                    } else if (filterDataUpdate[key]) {
                        filterTags[filterOptions[key]['index']] = _react2.default.createElement(_tags2.default, { searchTitleText: searchTitleText, searchText: filterDataUpdate[key], deleteSearchCashe: function deleteSearchCashe() {
                                return _this.deleteFilterCache(key);
                            } });
                        // console.log(filterTags[filterOptions[key]['index']])
                    }
                });
                dispatch((0, _policyCompanyListAction.modifyFilterTags)(filterTags));
                dispatch((0, _policyCompanyListAction.getCompanyNameList)(_extends({
                    pageNow: pageNow,
                    pageSize: pageSize
                }, filterData)));
            }
        };

        _this.state = {
            companyName: '',
            companyAddress: '',
            serviceCityNum: 0,
            cooperationTime: [],
            filterTags: []
        };
        return _this;
    }

    _createClass(PolicyCompany, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var dispatch = this.props.dispatch;
            var _props = this.props,
                pageNow = _props.pageNow,
                pageSize = _props.pageSize;

            dispatch((0, _policyCompanyListAction.getCompanyNameList)({
                pageNow: pageNow,
                pageSize: pageSize
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                pageNow = _props2.pageNow,
                rowCount = _props2.rowCount,
                dispatch = _props2.dispatch,
                pageSize = _props2.pageSize,
                companyName = _props2.companyName,
                companyAddress = _props2.companyAddress,
                cooperateStartTime = _props2.cooperateStartTime,
                cooperateEndTime = _props2.cooperateEndTime,
                serviceCityNum = _props2.serviceCityNum;

            var columns = [{
                title: _react2.default.createElement(
                    _PopFilter2.default,
                    { title: '\u670D\u52A1\u5546\u540D\u79F0', iconType: 'filter', save: function save(valid) {
                            return _this2.filterSave('companyName', valid);
                        } },
                    _react2.default.createElement(_antd.Input, { defaultValue: this.props.companyName, onChange: function onChange(e) {
                            return _this2.handleFilterCache('companyName', e.target.value);
                        } })
                ),
                dataIndex: 'companyName',
                key: 'companyName',
                width: 400,
                render: function render(text, record) {
                    return _react2.default.createElement(
                        _reactRouter.Link,
                        { className: _index2.default.companyName, to: '/jsp/react/policycompany/policycompanylist/policycompanydetail', onClick: function onClick() {
                                return _this2.goToDetail(record.id);
                            } },
                        record.companyName
                    );
                }
            }, {
                title: _react2.default.createElement(_PopFilter2.default, { title: '\u6240\u5728\u5730\u533A', iconType: 'filter', save: function save(valid) {
                        return _this2.filterSave('companyAddress', valid);
                    } }),
                dataIndex: 'companyAddress',
                key: 'companyAddress',
                width: 200,
                render: function render(text, record) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        record.companyAddress
                    );
                }
            }, {
                title: _react2.default.createElement(
                    _PopFilter2.default,
                    { title: '\u670D\u52A1\u57CE\u5E02\u6570\u91CF', iconType: 'filter', save: function save(valid) {
                            return _this2.filterSave('serviceCityNum', valid);
                        } },
                    _react2.default.createElement(
                        _antd.Select,
                        { value: this.state.serviceCityNum, defaultValue: this.props.serviceCityNum ? this.props.serviceCityNum : '', onChange: function onChange(value) {
                                return _this2.handleFilterCache('serviceCityNum', value);
                            } },
                        _react2.default.createElement(
                            _antd.Select.Option,
                            { value: '0' },
                            '0'
                        ),
                        _react2.default.createElement(
                            _antd.Select.Option,
                            { value: '1~3' },
                            '1~3'
                        ),
                        _react2.default.createElement(
                            _antd.Select.Option,
                            { value: '3~5' },
                            '3~5'
                        ),
                        _react2.default.createElement(
                            _antd.Select.Option,
                            { value: '5~' },
                            '5\u4E2A\u53CA\u4EE5\u4E0A'
                        )
                    )
                ),
                dataIndex: 'serviceCityNum',
                key: 'serviceCityNum',
                width: 200
            }, {
                title: _react2.default.createElement(
                    _PopFilter2.default,
                    { title: '\u5408\u4F5C\u65F6\u95F4', iconType: 'filter', save: function save(valid) {
                            return _this2.filterSave('cooperationTime', valid);
                        } },
                    _react2.default.createElement(_antd.DatePicker.RangePicker, { onChange: function onChange(values) {
                            return _this2.handleFilterCache('cooperationTime', values);
                        } })
                ),
                dataIndex: 'cooperationTime',
                key: 'cooperationTime',
                width: 300,
                render: function render(text, record) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        (0, _moment2.default)(record.cooperationTime[0]).format('YYYY-MM-DD'),
                        '\u81F3',
                        (0, _moment2.default)(record.cooperationTime[1]).format('YYYY-MM-DD')
                    );
                }
            }];

            var pagination = {
                current: pageNow,
                total: rowCount,
                pageSize: pageSize,
                showQuickJumper: true,
                // 页码改变的回调
                onChange: function onChange(pageNow, pageSize) {
                    dispatch((0, _policyCompanyListAction.getCompanyNameList)({
                        pageNow: pageNow, pageSize: pageSize,
                        companyName: companyName, companyAddress: companyAddress, cooperateStartTime: cooperateStartTime, cooperateEndTime: cooperateEndTime, serviceCityNum: serviceCityNum
                    }));
                }
            };

            return _react2.default.createElement(
                'div',
                { className: 'page' },
                _react2.default.createElement(
                    'div',
                    { className: _index2.default.title },
                    _react2.default.createElement(
                        'h2',
                        null,
                        '\u670D\u52A1\u5546\u7BA1\u7406'
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            _antd.Button,
                            { type: 'primary', onClick: function onClick() {
                                    return _this2.goToBuildNewCompanyPage();
                                }, style: { marginRight: 10 } },
                            '\u65B0\u5EFA\u670D\u52A1\u5546'
                        ),
                        _react2.default.createElement(
                            _antd.Button,
                            { onClick: function onClick() {
                                    return _this2.resetFilterOptions();
                                } },
                            '\u91CD\u7F6E'
                        )
                    ),
                    _react2.default.createElement('div', { className: _index2.default.clear })
                ),
                _react2.default.createElement(_antd.Table, {
                    columns: columns,
                    dataSource: this.props.dataSource,
                    bordered: true,
                    pagination: pagination,
                    title: function title() {
                        return _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u7B5B\u9009\u6761\u4EF6\uFF1A'
                            ),
                            _this2.props.filterTags
                        );
                    } })
            );
        }

        // 操作缓存对象 动态保存所有过滤条件


        // 操作tags删除过滤条件


        // 过滤项表单提交操作 参数valid为验证是否通过 使用缓存对象filterCache

    }]);

    return PolicyCompany;
}(_react2.default.Component);

function mapStateToProps(state) {
    var data = state.getIn(['policyCompanyReducer']);
    return {
        dataSource: data.getIn(['dataSource']).toJS(),
        isLoading: data.getIn(['isLoading']),
        pageSize: data.getIn(['pageSize']),
        rowCount: data.getIn(['rowCount']),
        pageNow: data.getIn(['pageNow']),
        filterTags: data.getIn(['filterTags']).toJS(),
        companyName: data.getIn(['companyName']),
        companyAddress: data.getIn(['companyAddress']),
        cooperateStartTime: data.getIn(['cooperateStartTime']),
        cooperateEndTime: data.getIn(['cooperateEndTime']),
        serviceCityNum: data.getIn(['serviceCityNum'])
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PolicyCompany);

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(366)();
// imports


// module
exports.push([module.i, ".search_text{\r\n    display: inline-block;\r\n    border: 1px solid #d0dae4;\r\n    border-radius: 3px;\r\n    padding: 0;\r\n    margin-right: 7px;\r\n    margin-bottom: 7px;\r\n}\r\n.search_text:hover{\r\n    border-color: #00AAEF;\r\n}\r\n.search_text_title{\r\n    margin-left: 5px;\r\n}\r\n.search_text_cont{\r\n    line-height: 18px;\r\n    padding: 6px 0;\r\n    color: #00AAEF;\r\n    margin-right: 5px;\r\n}\r\n.anticon-close {\r\n    width: 32px;\r\n    line-height: 32px;\r\n    cursor: pointer;\r\n}\r\n.anticon-close:hover {\r\n    background: #00AAEF;\r\n    color: #fff;\r\n}", ""]);

// exports


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(388);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(365)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../../node_modules/.1.2.2@postcss-loader/index.js!./tags.css", function() {
			var newContent = require("!!../../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../../node_modules/.1.2.2@postcss-loader/index.js!./tags.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _tags = __webpack_require__(399);

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tags = function (_React$Component) {
    _inherits(Tags, _React$Component);

    function Tags(props) {
        _classCallCheck(this, Tags);

        return _possibleConstructorReturn(this, (Tags.__proto__ || Object.getPrototypeOf(Tags)).call(this, props));
    }

    _createClass(Tags, [{
        key: 'delete',
        value: function _delete() {
            var deleteSearchCashe = this.props.deleteSearchCashe;


            deleteSearchCashe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                searchTitleText = _props.searchTitleText,
                searchText = _props.searchText,
                key = _props.key;


            return _react2.default.createElement(
                'div',
                { className: 'search_text' },
                _react2.default.createElement(
                    'span',
                    { className: 'search_text_title' },
                    searchTitleText
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'search_text_cont' },
                    searchText
                ),
                _react2.default.createElement('span', { className: 'anticon anticon-close', 'data-key': key, onClick: function onClick(e) {
                        return _this2.delete(e);
                    } })
            );
        }
    }]);

    return Tags;
}(_react2.default.Component);

exports.default = Tags;

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(366)();
// imports


// module
exports.push([module.i, ".index---title---3JCJR{\r\n    border-bottom: solid 2px #22baa0;\r\n}\r\n\r\n.index---title---3JCJR h2{\r\n    float: left;\r\n}\r\n\r\n.index---title---3JCJR span {\r\n    float: right;\r\n}\r\n.index---title---3JCJR .index---clear---3cH17{\r\n    clear: both;\r\n}\r\n\r\n/*筛选项样式*/\r\n.index---filter---1hfus{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin: 20px 0px;\r\n}\r\n\r\n.index---filter---1hfus .index---companyNameFilter---2Hgif{\r\n    -webkit-box-flex: 4;\r\n        -ms-flex: 4;\r\n            flex: 4;\r\n}\r\n\r\n.index---filter---1hfus .index---zoneFilter---dMs3w{\r\n    margin-left: 10px;\r\n    -webkit-box-flex: 2;\r\n        -ms-flex: 2;\r\n            flex: 2;\r\n}\r\n\r\n.index---filter---1hfus .index---cityCountFilter---3wlUZ{\r\n    margin: 0px 10px;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.index---filter---1hfus .index---timeFilter---2QWyV{\r\n    margin-left: 10px;\r\n    -webkit-box-flex: 3;\r\n        -ms-flex: 3;\r\n            flex: 3;\r\n}\r\n\r\n/*表格样式*/\r\n.index---companyName---1VQ8A{\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    width: 400px;\r\n    display: inline-block;\r\n}", ""]);

// exports
exports.locals = {
	"title": "index---title---3JCJR",
	"clear": "index---clear---3cH17",
	"filter": "index---filter---1hfus",
	"companyNameFilter": "index---companyNameFilter---2Hgif",
	"zoneFilter": "index---zoneFilter---dMs3w",
	"cityCountFilter": "index---cityCountFilter---3wlUZ",
	"timeFilter": "index---timeFilter---2QWyV",
	"companyName": "index---companyName---1VQ8A"
};

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(416);
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

/***/ 446:
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by YiShuai on 2017/5/31.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PopFilterForm = function (_Component) {
    _inherits(PopFilterForm, _Component);

    function PopFilterForm(props) {
        _classCallCheck(this, PopFilterForm);

        return _possibleConstructorReturn(this, (PopFilterForm.__proto__ || Object.getPrototypeOf(PopFilterForm)).call(this, props));
    }

    _createClass(PopFilterForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _antd.Form,
                null,
                this.constructChildren()
            );
        }
    }, {
        key: 'constructChildren',
        value: function constructChildren() {
            var getFieldDecorator = this.props.form.getFieldDecorator;

            var formItems = [];

            // 包装每一个子组件进Form.Item
            _react2.default.Children.map(this.props.children, function (child, index) {
                var props = child.props;
                var prefixCls = props.prefixCls;

                if (prefixCls) {
                    switch (prefixCls) {
                        case 'ant-input':
                            formItems.push(_react2.default.createElement(
                                _antd.Form.Item,
                                null,
                                getFieldDecorator(index.toString(), { rules: [{ required: true, message: '筛选条件不能为空！' }] })(child)
                            ));
                            break;
                        case 'ant-calendar':
                            formItems.push(_react2.default.createElement(
                                _antd.Form.Item,
                                null,
                                getFieldDecorator(index.toString(), { rules: [{ required: true, message: '筛选条件不能为空！' }] })(child)
                            ));
                            break;
                        case 'ant-select':
                            formItems.push(_react2.default.createElement(
                                _antd.Form.Item,
                                null,
                                getFieldDecorator(index.toString(), { rules: [{ required: true, message: '筛选条件不能为空！' }] })(child)
                            ));
                            break;
                        default:
                            break;
                    }
                } else {
                    formItems.push(child);
                }
            });

            return formItems;
        }
    }]);

    return PopFilterForm;
}(_react.Component);

var PopFilterFormWrapper = _antd.Form.create()(PopFilterForm);

var PopFilter = function (_Component2) {
    _inherits(PopFilter, _Component2);

    function PopFilter(props) {
        _classCallCheck(this, PopFilter);

        var _this2 = _possibleConstructorReturn(this, (PopFilter.__proto__ || Object.getPrototypeOf(PopFilter)).call(this, props));

        _this2.state = {
            popVisible: false
        };
        return _this2;
    }

    _createClass(PopFilter, [{
        key: 'constructContent',
        value: function constructContent() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    PopFilterFormWrapper,
                    { ref: function ref(form) {
                            return _this3.form = form;
                        } },
                    this.props.children
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _antd.Button,
                        { onClick: function onClick() {
                                return _this3.cancel();
                            }, size: 'small', type: 'default' },
                        '\u53D6\u6D88'
                    ),
                    _react2.default.createElement(
                        _antd.Button,
                        { onClick: function onClick() {
                                return _this3.save();
                            }, size: 'small', type: 'primary', style: { marginLeft: 10 } },
                        '\u4FDD\u5B58'
                    )
                )
            );
        }
    }, {
        key: 'save',
        value: function save() {
            var _this4 = this;

            var save = this.props.save;

            this.form.validateFields(function (err, values) {
                if (err) {
                    save(false);
                    return;
                } else {
                    save(true);
                    _this4.togglePopVisible();
                    _this4.form.resetFields();
                }
            });
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.togglePopVisible();
            this.form.resetFields();
        }
    }, {
        key: 'togglePopVisible',
        value: function togglePopVisible() {
            this.setState({
                popVisible: !this.state.popVisible
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props = this.props,
                title = _props.title,
                iconType = _props.iconType,
                placement = _props.placement;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _antd.Popover,
                    { content: this.constructContent(), visible: this.state.popVisible, placement: placement ? placement : 'bottom', trigger: 'click' },
                    title,
                    _react2.default.createElement(_antd.Icon, { type: iconType, onClick: function onClick() {
                            return _this5.togglePopVisible();
                        } })
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this6 = this;

            if (this.state.popVisible) {
                var delegate = document.body.addEventListener('click', function () {
                    _this6.togglePopVisible();
                    document.body.removeEventListener('click', delegate);
                });
            }
        }
    }]);

    return PopFilter;
}(_react.Component);

exports.default = PopFilter;

/***/ })

});
//# sourceMappingURL=4.js.map