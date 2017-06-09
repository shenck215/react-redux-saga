webpackJsonp([6],{

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(408);

var _style2 = _interopRequireDefault(_style);

var _reactRedux = __webpack_require__(44);

var _PolicyCompanyForm = __webpack_require__(443);

var _PolicyCompanyForm2 = _interopRequireDefault(_PolicyCompanyForm);

var _AddCityModal = __webpack_require__(406);

var _AddCityModal2 = _interopRequireDefault(_AddCityModal);

var _AddContactModal = __webpack_require__(407);

var _AddContactModal2 = _interopRequireDefault(_AddContactModal);

var _policyCompanyBuildAction = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PolicyCompanyBuild = function (_Component) {
    _inherits(PolicyCompanyBuild, _Component);

    function PolicyCompanyBuild(props) {
        _classCallCheck(this, PolicyCompanyBuild);

        var _this = _possibleConstructorReturn(this, (PolicyCompanyBuild.__proto__ || Object.getPrototypeOf(PolicyCompanyBuild)).call(this, props));

        _this.submit = function (data) {
            var _this$props = _this.props,
                city = _this$props.city,
                contact = _this$props.contact,
                companyCityId = _this$props.companyCityId,
                protocolAddonUrl = _this$props.protocolAddonUrl,
                dispatch = _this$props.dispatch; // 存储在store中的表单数据

            var companyName = data.companyName,
                companyAddress = data.companyAddress,
                cooperationTime = data.cooperationTime,
                protocolAddon = data.protocolAddon,
                remark = data.remark; // 未缓存的表单数据

            console.log('index page', companyName, companyCityId, companyAddress, cooperationTime, protocolAddon, remark, city, contact);
            dispatch((0, _policyCompanyBuildAction.postNewCompanyInfo)({
                companyName: companyName, companyCityId: companyCityId, companyAddress: companyAddress, cooperationTime: cooperationTime, protocolAddonUrl: protocolAddonUrl, city: city, contact: contact, remark: remark
            }));
        };

        _this.cancelAddContact = function () {
            var dispatch = _this.props.dispatch;

            dispatch((0, _policyCompanyBuildAction.addContactModalVisible)({ addContactModalVisible: false })
            // 清除预设数据
            );dispatch((0, _policyCompanyBuildAction.setPresetContactData)({ presetContactData: null, presetContactDataIndex: null }));
        };

        _this.cancelAddCity = function () {
            var dispatch = _this.props.dispatch;

            dispatch((0, _policyCompanyBuildAction.addCityModalVisible)({ addCityModalVisible: false })
            // 清除预设数据
            );dispatch((0, _policyCompanyBuildAction.setPresetCityData)({ presetCityData: null, presetCityDataIndex: null }));
        };

        _this.receiveCityDatasource = function (data) {
            var _this$props2 = _this.props,
                dispatch = _this$props2.dispatch,
                presetCityData = _this$props2.presetCityData,
                cityDataSource = _this$props2.cityDataSource,
                city = _this$props2.city,
                presetCityDataIndex = _this$props2.presetCityDataIndex;
            // 如果预设不为空 则是修改操作 否则为添加操作

            if (presetCityData) {
                city.splice(presetCityDataIndex, 1, data);
                cityDataSource.splice(presetCityDataIndex, 1, _this.parsePropsToCityDataSource(data));
                dispatch((0, _policyCompanyBuildAction.modifyCityDataSource)({ cityDataSource: cityDataSource, city: city }));
                dispatch((0, _policyCompanyBuildAction.setPresetCityData)({ presetCityData: null, presetCityDataIndex: null }));
            } else {
                city.push(data);
                var dataSource = _this.parsePropsToCityDataSource(data);
                cityDataSource.push(dataSource);
                dispatch((0, _policyCompanyBuildAction.modifyCityDataSource)({ cityDataSource: cityDataSource, city: city }));
            }
        };

        _this.receiveContactDatasource = function (data) {
            var _this$props3 = _this.props,
                dispatch = _this$props3.dispatch,
                presetContactData = _this$props3.presetContactData,
                contactDataSource = _this$props3.contactDataSource,
                contact = _this$props3.contact,
                presetContactDataIndex = _this$props3.presetContactDataIndex,
                hasReceiverInThisCompany = _this$props3.hasReceiverInThisCompany;

            if (presetContactData) {
                var isReceiver = presetContactData.receiver;
                // 修改相应索引数据
                contact.splice(presetContactDataIndex, 1, data);
                contactDataSource.splice(presetContactDataIndex, 1, _this.parsePropsToContactDataSource(data));
                dispatch((0, _policyCompanyBuildAction.modifyContactDataSource)({ contactDataSource: contactDataSource, contact: contact }));
                dispatch((0, _policyCompanyBuildAction.setPresetContactData)({ presetContactData: null, presetContactDataIndex: null })
                // 如果设置了接收人
                );if (data.receiver === 1) {
                    // 设置接收人索引
                    dispatch((0, _policyCompanyBuildAction.hasReceiverInThisCompany)({ hasReceiverInThisCompany: true, receiverIndex: presetContactDataIndex }));
                } else {
                    // 接收人从是修改为否
                    if (isReceiver === 1) {
                        dispatch((0, _policyCompanyBuildAction.hasReceiverInThisCompany)({ hasReceiverInThisCompany: false, receiverIndex: null }));
                    }
                }
            } else {
                // 添加一条数据
                contact.push(data);
                var dataSource = _this.parsePropsToContactDataSource(data);
                contactDataSource.push(dataSource);
                dispatch((0, _policyCompanyBuildAction.modifyContactDataSource)({ contactDataSource: contactDataSource, contact: contact }));
                if (data.receiver === 1) {
                    // 设置接收人索引
                    dispatch((0, _policyCompanyBuildAction.hasReceiverInThisCompany)({ hasReceiverInThisCompany: true, receiverIndex: contactDataSource.length - 1 }));
                    console.log('add receiver index', contactDataSource.length - 1);
                }
            }
        };

        _this.parsePropsToCityDataSource = function (data) {
            if (!data || !data.serviceCity) {
                return {};
            }
            var accountType = ['预收', '实缴'];
            var accountMonth = ['当月', '次月', '双月'];
            return {
                serviceCity: data.serviceCity.join('-'),
                accountAddress: data.accountAddress,
                serviceFee: data.serviceFee,
                accountType: data.accountType ? accountType[data.accountType - 1] : '-/-',
                accountMonth: data.accountMonth ? accountMonth[data.accountMonth] : '-/-',
                payDay: data.payDay ? data.payDay + '号' : '-/-',
                issueCertificate: data.issueCertificate ? data.issueCertificate : '-/-'
            };
        };

        _this.parsePropsToContactDataSource = function (data) {
            if (!data || !data.contactName) {
                return {};
            }
            return {
                contactName: data.contactName,
                mobilePhoneNum: data.mobilePhoneNum,
                emailAddr: data.emailAddr,
                phoneNum: data.phoneNum ? data.phoneNum : '-/-',
                qqNum: data.qqNum ? data.qqNum : '-/-',
                receiver: data.receiver === 1 ? '是' : '不是',
                remark: data.remark ? data.remark : '-/-'
            };
        };

        _this.deleteCity = function (index) {
            var _this$props4 = _this.props,
                cityDataSource = _this$props4.cityDataSource,
                city = _this$props4.city,
                dispatch = _this$props4.dispatch;

            cityDataSource.splice(index, 1);
            city.splice(index, 1);
            dispatch((0, _policyCompanyBuildAction.modifyCityDataSource)({
                cityDataSource: cityDataSource, city: city
            }));
        };

        _this.deleteContact = function (index) {
            var _this$props5 = _this.props,
                contactDataSource = _this$props5.contactDataSource,
                contact = _this$props5.contact,
                dispatch = _this$props5.dispatch;

            contactDataSource.splice(index, 1);
            contact.splice(index, 1);
            dispatch((0, _policyCompanyBuildAction.modifyContactDataSource)({
                contactDataSource: contactDataSource, contact: contact
            }));
        };

        _this.editCity = function (index) {
            var _this$props6 = _this.props,
                dispatch = _this$props6.dispatch,
                city = _this$props6.city;

            console.log('index edit city', city[index]
            // 点击编辑时改变预设数据内容 和内容索引
            );dispatch((0, _policyCompanyBuildAction.addCityModalVisible)({ addCityModalVisible: true }));
            dispatch((0, _policyCompanyBuildAction.setPresetCityData)({ presetCityData: city[index], presetCityDataIndex: index }));
        };

        _this.editContact = function (index) {
            var _this$props7 = _this.props,
                dispatch = _this$props7.dispatch,
                contact = _this$props7.contact,
                receiverIndex = _this$props7.receiverIndex;

            console.log('index edit contact', contact[index]
            // 点击编辑时改变预设数据内容 和内容索引
            );dispatch((0, _policyCompanyBuildAction.addContactModalVisible)({ addContactModalVisible: true }));
            dispatch((0, _policyCompanyBuildAction.setPresetContactData)({ presetContactData: contact[index], presetContactDataIndex: index })
            // 如果接受人索引等于编辑索引 设置isReceiver传给AddContactModal用于判断对话框中的“设置派单表接收人”是否可用
            );if (index === receiverIndex) {
                _this.setState({
                    isReceiver: true
                });
            } else {
                _this.setState({
                    isReceiver: false
                });
            }
        };

        _this.state = {
            isReceiver: false
        };
        return _this;
    }

    _createClass(PolicyCompanyBuild, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                isLoading = _props.isLoading,
                addCityModalVisible = _props.addCityModalVisible,
                addContactModalVisible = _props.addContactModalVisible,
                dispatch = _props.dispatch,
                cityDataSource = _props.cityDataSource,
                contactDataSource = _props.contactDataSource,
                presetCityData = _props.presetCityData,
                presetContactData = _props.presetContactData;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    { className: _style2.default.title },
                    '\u65B0\u5EFA\u670D\u52A1\u5546'
                ),
                _react2.default.createElement(_PolicyCompanyForm2.default, {
                    submit: function submit(data) {
                        return _this2.submit(data);
                    },
                    loading: isLoading,
                    className: _style2.default.companyForm,
                    dispatch: dispatch,
                    cityDataSource: cityDataSource,
                    deleteCityDataSource: function deleteCityDataSource(index) {
                        return _this2.deleteCity(index);
                    },
                    editCityDataSource: function editCityDataSource(index) {
                        return _this2.editCity(index);
                    },
                    contactDataSource: contactDataSource,
                    deleteContactDataSource: function deleteContactDataSource(index) {
                        return _this2.deleteContact(index);
                    },
                    editContactDataSource: function editContactDataSource(index) {
                        return _this2.editContact(index);
                    } }),
                _react2.default.createElement(_AddCityModal2.default, {
                    visible: addCityModalVisible,
                    dispatch: dispatch,
                    cancel: this.cancelAddCity,
                    receiveCityDatasource: function receiveCityDatasource(values) {
                        return _this2.receiveCityDatasource(values);
                    },
                    presetCityData: presetCityData }),
                _react2.default.createElement(_AddContactModal2.default, {
                    visible: addContactModalVisible,
                    dispatch: dispatch,
                    cancel: this.cancelAddContact,
                    receiveContactDatasource: function receiveContactDatasource(values) {
                        return _this2.receiveContactDatasource(values);
                    },
                    presetContactData: presetContactData,
                    hasReceiverInThisCompany: this.props.hasReceiverInThisCompany,
                    receiverIndex: this.props.receiverIndex,
                    isReceiver: this.state.isReceiver })
            );
        }

        // 表单提交操作 从表单中传来除表格数据之外的其他数据 并从state中分别取到表格数据city和contact
        // 然后提交给saga


        // 解析对话框输入数据 push进表格数据源


        // 对话框保存按钮


        // 将对话框传来的数据转换成表格dataSource格式


        // 将对话框传来的数据转换成表格dataSource格式


        // 监听form中的表格动作 删除对应城市


        // 监听form中的表格动作 删除对应联系人


        // 监听form中表格动作 编辑对应城市


        // 监听form中表格动作 编辑对应联系人

    }]);

    return PolicyCompanyBuild;
}(_react.Component);

function mapStateToProps(state) {
    var data = state.getIn(['policyCompanyBuildReducer']);
    return {
        isLoading: data.getIn(['isLoading']),
        addCityModalVisible: data.getIn(['addCityModalVisible']),
        addContactModalVisible: data.getIn(['addContactModalVisible']),
        cityDataSource: data.getIn(['cityDataSource']).toJS(),
        city: data.getIn(['city']).toJS(),
        presetCityData: data.getIn(['presetCityData']),
        presetCityDataIndex: data.getIn(['presetCityDataIndex']),
        contactDataSource: data.getIn(['contactDataSource']).toJS(),
        contact: data.getIn(['contact']).toJS(),
        presetContactData: data.getIn(['presetContactData']),
        presetContactDataIndex: data.getIn(['presetContactDataIndex']),
        hasReceiverInThisCompany: data.getIn(['hasReceiverInThisCompany']),
        receiverIndex: data.getIn(['receiverIndex']),
        companyCityId: data.getIn(['companyCityId']),
        protocolAddonUrl: data.getIn(['protocolAddonUrl'])
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PolicyCompanyBuild);

/***/ }),

/***/ 406:
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

var _policyCompanyBuildAction = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Steve on 2017/6/2.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var FormItem = _antd.Form.Item;

var AddCityModal = function (_Component) {
    _inherits(AddCityModal, _Component);

    function AddCityModal(props) {
        _classCallCheck(this, AddCityModal);

        var _this = _possibleConstructorReturn(this, (AddCityModal.__proto__ || Object.getPrototypeOf(AddCityModal)).call(this, props));

        _this.submit = function (e) {
            e.preventDefault();
            var _this$props = _this.props,
                receiveCityDatasource = _this$props.receiveCityDatasource,
                dispatch = _this$props.dispatch;
            var _this$props$form = _this.props.form,
                resetFields = _this$props$form.resetFields,
                validateFields = _this$props$form.validateFields;

            validateFields(function (errors, values) {
                if (!errors) {
                    dispatch((0, _policyCompanyBuildAction.addCityModalVisible)({ addCityModalVisible: false }));
                    Object.assign(values, { serviceAreaId: 0 });
                    console.log('addCityModal', values
                    // 表单数据回传给index页面处理
                    );receiveCityDatasource(values);
                    resetFields
                    // this.issueCertificateInputElement.refs.input.value = ''
                    ();
                }
            });
        };

        _this.generateDayOption = function () {
            var children = [];
            for (var i = 1; i <= 30; i++) {
                children.push(_react2.default.createElement(
                    _antd.Select.Option,
                    { value: i, key: i },
                    i + '\u53F7'
                ));
            }
            return children;
        };

        _this.issueCertificateTextAreaChange = function (e) {
            var length = e.target.value.length;
            if (length > 100) {
                length = 100;
                e.target.value = e.target.value.substring(0, 100);
            }
            _this.setState({
                wordCount: length
            });
        };

        _this.state = {
            wordCount: 0
        };
        return _this;
    }

    _createClass(AddCityModal, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                dispatch = _props.dispatch,
                visible = _props.visible,
                cancel = _props.cancel,
                presetCityData = _props.presetCityData;
            var _props$form = this.props.form,
                getFieldDecorator = _props$form.getFieldDecorator,
                resetFields = _props$form.resetFields;

            var formItemLayout = {
                labelCol: {
                    xs: 24,
                    sm: 6
                },
                wrapperCol: {
                    xs: 24,
                    sm: 16
                }
            };
            var options = [{
                label: '浙江',
                value: '浙江',
                children: [{
                    label: '杭州',
                    value: '杭州',
                    children: [{
                        label: '江干',
                        value: '江干'
                    }]
                }]
            }];

            return _react2.default.createElement(
                _antd.Modal,
                { visible: visible, title: '\u6DFB\u52A0\u670D\u52A1\u57CE\u5E02', cancelText: '\u653E\u5F03', okText: '\u786E\u8BA4', onOk: this.submit, onCancel: function onCancel() {
                        resetFields();cancel();
                    } },
                _react2.default.createElement(
                    _antd.Form,
                    { onSubmit: this.submit },
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u670D\u52A1\u57CE\u5E02' }, formItemLayout),
                        getFieldDecorator('serviceCity', {
                            rules: [{
                                required: true,
                                message: '服务城市不能为空'
                            }],
                            initialValue: presetCityData ? presetCityData.serviceCity : []
                        })(_react2.default.createElement(_antd.Cascader, { placeholder: '\u8BF7\u9009\u62E9', options: options }))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u5F00\u6237\u5730\u533A' }, formItemLayout),
                        getFieldDecorator('accountAddress', {
                            rules: [{
                                required: true,
                                message: '开户地区不能为空'
                            }],
                            initialValue: presetCityData ? presetCityData.accountAddress : []
                        })(_react2.default.createElement(_antd.Cascader, { placeholder: '\u8BF7\u9009\u62E9', options: options }))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u670D\u52A1\u8D39' }, formItemLayout),
                        getFieldDecorator('serviceFee', {
                            rules: [{
                                required: true,
                                message: '服务费不能为空'
                            }],
                            initialValue: presetCityData ? presetCityData.serviceFee : null
                        })(_react2.default.createElement(_antd.Input, { addonAfter: _react2.default.createElement(
                                'span',
                                null,
                                '\u5143/\u4EBA\u6708'
                            ) }))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u8D26\u5355\u7C7B\u578B' }, formItemLayout),
                        getFieldDecorator('accountType', {
                            initialValue: presetCityData ? presetCityData.accountType : null
                        })(_react2.default.createElement(
                            _antd.Select,
                            { placeholder: '\u8BF7\u9009\u62E9' },
                            _react2.default.createElement(
                                _antd.Select.Option,
                                { value: '1' },
                                '\u9884\u6536'
                            ),
                            _react2.default.createElement(
                                _antd.Select.Option,
                                { value: '2' },
                                '\u5B9E\u7F34'
                            )
                        ))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u8D26\u5355\u5F52\u5C5E\u6708' }, formItemLayout),
                        getFieldDecorator('accountMonth', {
                            initialValue: presetCityData ? presetCityData.accountMonth : null
                        })(_react2.default.createElement(
                            _antd.Select,
                            { placeholder: '\u8BF7\u9009\u62E9' },
                            _react2.default.createElement(
                                _antd.Select.Option,
                                { value: '0' },
                                '\u5F53\u6708'
                            ),
                            _react2.default.createElement(
                                _antd.Select.Option,
                                { value: '1' },
                                '\u6B21\u6708'
                            ),
                            _react2.default.createElement(
                                _antd.Select.Option,
                                { value: '2' },
                                '\u53CC\u6708'
                            )
                        ))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u6253\u6B3E\u65E5' }, formItemLayout),
                        getFieldDecorator('payDay', {
                            initialValue: presetCityData ? presetCityData.payDay : null
                        })(_react2.default.createElement(
                            _antd.Select,
                            { placeholder: '\u8BF7\u9009\u62E9' },
                            this.generateDayOption()
                        ))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u53EF\u5F00\u5177\u8BC1\u660E' }, formItemLayout),
                        getFieldDecorator('issueCertificate', {
                            initialValue: presetCityData ? presetCityData.issueCertificate : null
                        })(_react2.default.createElement(_antd.Input, { type: 'textarea', ref: function ref(el) {
                                return _this2.issueCertificateInputElement = el;
                            }, placeholder: '\u53EF\u5F00\u5177\u8BC1\u660E', onChange: this.issueCertificateTextAreaChange, defaultValue: presetCityData ? presetCityData.issueCertificate : '' })),
                        _react2.default.createElement(
                            'span',
                            null,
                            this.state.wordCount + '/100'
                        )
                    )
                )
            );
        }

        // 控制输入字数

    }]);

    return AddCityModal;
}(_react.Component);

exports.default = _antd.Form.create()(AddCityModal);

/***/ }),

/***/ 407:
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

var _policyCompanyBuildAction = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Steve on 2017/6/3.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/**
 * Created by Steve on 2017/6/2.
 */


var FormItem = _antd.Form.Item;

var AddContactModal = function (_Component) {
    _inherits(AddContactModal, _Component);

    function AddContactModal(props) {
        _classCallCheck(this, AddContactModal);

        var _this = _possibleConstructorReturn(this, (AddContactModal.__proto__ || Object.getPrototypeOf(AddContactModal)).call(this, props));

        _this.submit = function (e) {
            e.preventDefault();
            var _this$props = _this.props,
                receiveContactDatasource = _this$props.receiveContactDatasource,
                dispatch = _this$props.dispatch;
            var _this$props$form = _this.props.form,
                resetFields = _this$props$form.resetFields,
                validateFields = _this$props$form.validateFields;

            validateFields(function (errors, values) {
                // console.log('add contact modal', errors, values)
                if (!errors) {
                    dispatch((0, _policyCompanyBuildAction.addContactModalVisible)({ addCityModalVisible: false })
                    // 表单数据回传给index页面处理
                    );receiveContactDatasource(values);
                    resetFields();
                }
            });
        };

        _this.remarkTextAreaChange = function (e) {
            var length = e.target.value.length;
            if (length > 20) {
                length = 20;
                e.target.value = e.target.value.substring(0, 20);
            }
            _this.setState({
                wordCount: length
            });
        };

        _this.state = {
            wordCount: 0
        };
        return _this;
    }

    _createClass(AddContactModal, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                dispatch = _props.dispatch,
                visible = _props.visible,
                cancel = _props.cancel,
                presetContactData = _props.presetContactData,
                hasReceiverInThisCompany = _props.hasReceiverInThisCompany;
            // console.log('add contact modal', presetContactData)

            var _props$form = this.props.form,
                getFieldDecorator = _props$form.getFieldDecorator,
                resetFields = _props$form.resetFields;

            var formItemLayout = {
                labelCol: {
                    xs: 24,
                    sm: 6
                },
                wrapperCol: {
                    xs: 24,
                    sm: 16
                }
            };

            return _react2.default.createElement(
                _antd.Modal,
                { visible: visible, title: '\u6DFB\u52A0\u8054\u7CFB\u4EBA', cancelText: '\u653E\u5F03', okText: '\u786E\u8BA4', onOk: this.submit, onCancel: function onCancel() {
                        resetFields();cancel();
                    } },
                _react2.default.createElement(
                    _antd.Form,
                    { onSubmit: this.submit },
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u59D3\u540D' }, formItemLayout),
                        getFieldDecorator('contactName', {
                            rules: [{
                                required: true,
                                message: '姓名不能为空'
                            }],
                            initialValue: presetContactData ? presetContactData.contactName : null
                        })(_react2.default.createElement(_antd.Input, null))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u624B\u673A' }, formItemLayout),
                        getFieldDecorator('mobilePhoneNum', {
                            rules: [{
                                required: true,
                                message: '手机号码不能为空'
                            }],
                            initialValue: presetContactData ? presetContactData.mobilePhoneNum : null
                        })(_react2.default.createElement(_antd.Input, null))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u90AE\u7BB1' }, formItemLayout),
                        getFieldDecorator('emailAddr', {
                            rules: [{
                                required: true,
                                message: '邮箱不能为空'
                            }],
                            initialValue: presetContactData ? presetContactData.emailAddr : null
                        })(_react2.default.createElement(_antd.Input, null))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u56FA\u5B9A\u7535\u8BDD' }, formItemLayout),
                        getFieldDecorator('phoneNum', {
                            initialValue: presetContactData ? presetContactData.phoneNum : null
                        })(_react2.default.createElement(_antd.Input, null))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: 'QQ' }, formItemLayout),
                        getFieldDecorator('qqNum', {
                            initialValue: presetContactData ? presetContactData.qqNum : null
                        })(_react2.default.createElement(_antd.Input, null))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u6D3E\u5355\u8868\u63A5\u6536\u4EBA' }, formItemLayout),
                        getFieldDecorator('receiver', {
                            initialValue: presetContactData ? presetContactData.receiver : 0
                        })(_react2.default.createElement(
                            _antd.Radio.Group,
                            { disabled: hasReceiverInThisCompany && !this.props.isReceiver },
                            _react2.default.createElement(
                                _antd.Radio,
                                { value: 1 },
                                '\u662F'
                            ),
                            _react2.default.createElement(
                                _antd.Radio,
                                { value: 0 },
                                '\u4E0D\u662F'
                            )
                        )),
                        _react2.default.createElement(
                            'span',
                            { className: 'ant-form-text' },
                            this.props.hasReceiverInThisCompany ? '（只能有一个派单表接收人）' : ''
                        )
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u5907\u6CE8' }, formItemLayout),
                        getFieldDecorator('remark', {
                            initialValue: presetContactData ? presetContactData.remark : null
                        })(_react2.default.createElement(_antd.Input, { type: 'textarea', ref: function ref(el) {
                                return _this2.remarkInputElement = el;
                            }, placeholder: '\u5907\u6CE8', onChange: this.remarkTextAreaChange })),
                        _react2.default.createElement(
                            'span',
                            null,
                            this.state.wordCount + '/20'
                        )
                    )
                )
            );
        }

        // 控制输入字数

    }]);

    return AddContactModal;
}(_react.Component);

exports.default = _antd.Form.create()(AddContactModal);

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(414);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(365)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../node_modules/.1.2.2@postcss-loader/index.js!./style.css", function() {
			var newContent = require("!!../../../node_modules/.0.26.1@css-loader/index.js?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!../../../node_modules/.1.2.2@postcss-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(366)();
// imports


// module
exports.push([module.i, ".style---title---1CFy6{\r\n    padding-bottom: 10px;\r\n    border-bottom: solid 2px #22baa0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.style---companyForm---9GgCj{\r\n    margin-top: 20px;\r\n}\r\n\r\n.style---saveBtn---3XKp6{\r\n    width: 160px;\r\n}", ""]);

// exports
exports.locals = {
	"title": "style---title---1CFy6",
	"companyForm": "style---companyForm---9GgCj",
	"saveBtn": "style---saveBtn---3XKp6"
};

/***/ }),

/***/ 443:
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

var _style = __webpack_require__(408);

var _style2 = _interopRequireDefault(_style);

var _fetchIndex = __webpack_require__(23);

var _fetchIndex2 = _interopRequireDefault(_fetchIndex);

var _policyCompanyBuildAction = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by YiShuai on 2017/6/2.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var FormItem = _antd.Form.Item;

var cascader = [{
    label: '杭州',
    value: 'hz',
    children: [{
        label: '下城',
        value: 'xc',
        children: [{
            label: '凤起路',
            value: 'fql'
        }]
    }]
}];

var PolicyCompanyForm = function (_Component) {
    _inherits(PolicyCompanyForm, _Component);

    function PolicyCompanyForm(props) {
        _classCallCheck(this, PolicyCompanyForm);

        var _this = _possibleConstructorReturn(this, (PolicyCompanyForm.__proto__ || Object.getPrototypeOf(PolicyCompanyForm)).call(this, props));

        _this.submit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (errors, values) {
                // console.log('form', errors, values)
                // console.log(Object.keys(errors))
                if (!errors) {
                    _this.props.dispatch((0, _policyCompanyBuildAction.isLoading)(true));
                    setTimeout(function () {
                        return _this.props.dispatch((0, _policyCompanyBuildAction.isLoading)(false));
                    }, 2000);
                    _this.props.submit(values);
                } else {
                    // 自定义验证时验证错误不会自动清空  以下两个字段需要自定义验证 所以手动清空 其他字段不用
                    _this.props.form.resetFields(['city', 'contact']);
                }
            });
        };

        _this.uploadChange = function (_ref) {
            var file = _ref.file;

            console.log('file status', file.status
            // 上传完成 上传按钮不可用
            );if (file.status === 'done') {
                _this.setState({
                    // 附件存在的标志
                    protocolAddon: true
                });
            }
            // 移除文件 可重新上传
            if (file.status === 'removed') {
                _this.setState({
                    protocolAddon: false
                });
            }
            //文件上传返回值
            if (file.response) {
                console.log('返回', file.response.data.url);
                _this.props.dispatch((0, _policyCompanyBuildAction.modifyProtocolAddonUrl)(file.response.data.url));
                return file.response.data.url;
            } else {
                console.log('上传失败');
            }
        };

        _this.showAddContactModal = function () {
            var dispatch = _this.props.dispatch;

            dispatch((0, _policyCompanyBuildAction.addContactModalVisible)({ addContactModalVisible: true }));
        };

        _this.showAddCityModal = function () {
            var dispatch = _this.props.dispatch;

            dispatch((0, _policyCompanyBuildAction.addCityModalVisible)({ addCityModalVisible: true }));
        };

        _this.remarkTextAreaChange = function (e) {
            var length = e.target.value.length;
            if (length > 500) {
                length = 500;
                e.target.value = e.target.value.substring(0, 500);
            }
            _this.setState({
                wordCount: length
            });
        };

        _this.state = {
            protocolAddon: false,
            city: false,
            contact: false,
            wordCount: 0
        };
        return _this;
    }

    _createClass(PolicyCompanyForm, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var companyNameLayout = {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 4 }
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 10 }
                }
            };
            var tableLayout = {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 4 }
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 20 }
                }
            };
            var getFieldDecorator = this.props.form.getFieldDecorator;
            var _props = this.props,
                cityDataSource = _props.cityDataSource,
                contactDataSource = _props.contactDataSource,
                dispatch = _props.dispatch;

            var columnsCity = [{
                title: '服务城市',
                dataIndex: 'serviceCity',
                key: 'serviceCity'
            }, {
                title: '开户地区',
                dataIndex: 'accountAddress',
                key: 'accountAddress'
            }, {
                title: '服务费(元/人月)',
                dataIndex: 'serviceFee',
                key: 'serviceFee'
            }, {
                title: '账单类型',
                dataIndex: 'accountType',
                key: 'accountType'
            }, {
                title: '账单归属月',
                dataIndex: 'accountMonth',
                key: 'accountMonth'
            }, {
                title: '打款日',
                dataIndex: 'payDay',
                key: 'payDay'
            }, {
                title: '可开具证明',
                dataIndex: 'issueCertificate',
                key: 'issueCertificate'
            }, {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: function render(text, record, index) {
                    return _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.props.editCityDataSource(index);
                                } },
                            '\u7F16\u8F91'
                        ),
                        '\xA0|\xA0',
                        _react2.default.createElement(
                            _antd.Popconfirm,
                            { title: '\u786E\u5B9A\u5220\u9664', onConfirm: function onConfirm() {
                                    _this2.props.deleteCityDataSource(index);
                                }, okText: '\u786E\u5B9A', cancelText: '\u53D6\u6D88' },
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                '\u5220\u9664'
                            )
                        )
                    );
                }
            }];

            var columnsContact = [{
                title: '姓名',
                dataIndex: 'contactName',
                key: 'contactName'
            }, {
                title: '手机',
                dataIndex: 'mobilePhoneNum',
                key: 'mobilePhoneNum'
            }, {
                title: '邮箱',
                dataIndex: 'emailAddr',
                key: 'emailAddr'
            }, {
                title: '固定电话',
                dataIndex: 'phoneNum',
                key: 'phoneNum'
            }, {
                title: 'QQ',
                dataIndex: 'qqNum',
                key: 'qqNum'
            }, {
                title: '派单表接收人',
                dataIndex: 'receiver',
                key: 'receiver'
            }, {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark'
            }, {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: function render(text, record, index) {
                    return _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.props.editContactDataSource(index);
                                } },
                            '\u7F16\u8F91'
                        ),
                        '\xA0|\xA0',
                        _react2.default.createElement(
                            _antd.Popconfirm,
                            { title: '\u786E\u5B9A\u5220\u9664', onConfirm: function onConfirm() {
                                    _this2.props.deleteContactDataSource(index);
                                }, okText: '\u786E\u5B9A', cancelText: '\u53D6\u6D88' },
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                '\u5220\u9664'
                            )
                        )
                    );
                }
            }];

            return _react2.default.createElement(
                _antd.Form,
                { onSubmit: function onSubmit(e) {
                        return _this2.submit(e);
                    } },
                _react2.default.createElement(
                    FormItem,
                    _extends({}, companyNameLayout, { label: '\u670D\u52A1\u5546\u540D\u79F0' }),
                    getFieldDecorator('companyName', {
                        rules: [{
                            required: true,
                            message: '必填项'
                        }]
                    })(_react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u586B\u5199\u8425\u4E1A\u6267\u7167\u4E0A\u7684\u4F01\u4E1A\u540D\u79F0' }))
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, companyNameLayout, { label: '\u516C\u53F8\u5730\u5740' }),
                    getFieldDecorator('companyAddress', {
                        rules: [{
                            required: true,
                            message: '必填项'
                        }]
                    })(_react2.default.createElement(
                        _antd.Row,
                        { gutter: 4 },
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 8 },
                            _react2.default.createElement(_antd.Cascader, { options: cascader, placeholder: '\u8BF7\u9009\u62E9', onChange: function onChange(value) {
                                    return dispatch((0, _policyCompanyBuildAction.modifyCompanyCityId)(value));
                                } })
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 16 },
                            _react2.default.createElement(_antd.Input, { placeholder: '\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740' })
                        )
                    ))
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, companyNameLayout, { label: '\u5408\u4F5C\u65F6\u95F4' }),
                    getFieldDecorator('cooperationTime')(_react2.default.createElement(_antd.DatePicker.RangePicker, { placeholder: ['合作开始时间', '合作结束时间'] }))
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, companyNameLayout, { label: '\u534F\u8BAE\u9644\u4EF6' }),
                    _react2.default.createElement(
                        _antd.Upload,
                        { action: _fetchIndex2.default.attachmentUpload, onChange: this.uploadChange, disabled: this.state.protocolAddon },
                        _react2.default.createElement(
                            _antd.Button,
                            null,
                            '\u4E0A\u4F20',
                            _react2.default.createElement(_antd.Icon, { type: 'upload' })
                        )
                    )
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, tableLayout, { label: '\u8054\u7CFB\u4EBA', help: contactDataSource.length !== 0 ? '' : "至少有一个联系人", validateStatus: contactDataSource.length !== 0 ? 'success' : 'error' }),
                    getFieldDecorator('contact', {
                        rules: [{
                            validator: function validator(rule, value, callback) {
                                if (contactDataSource.length === 0) {
                                    console.log('联系人验证不通过', rule, value, callback);
                                    callback('至少有一个联系人');
                                } else {
                                    callback();
                                    console.log(contactDataSource.length);
                                }
                            }
                        }]
                    })(_react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_antd.Table, { style: contactDataSource.length ? {} : { display: 'none' }, dataSource: contactDataSource, columns: columnsContact, size: 'small', bordered: true, pagination: false }),
                        _react2.default.createElement(
                            _antd.Button,
                            { size: 'small', type: 'dashed', onClick: this.showAddContactModal },
                            '+ \u65B0\u589E'
                        )
                    ))
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, tableLayout, { label: '\u670D\u52A1\u57CE\u5E02', help: cityDataSource.length !== 0 ? '' : "至少有一个服务城市", validateStatus: cityDataSource.length !== 0 ? 'success' : 'error' }),
                    getFieldDecorator('city', {
                        rules: [{
                            validator: function validator(rule, value, callback) {
                                if (cityDataSource.length === 0) {
                                    console.log('服务城市验证不通过', rule, value, callback);
                                    callback('至少有一个服务城市');
                                } else {
                                    callback
                                    // console.log(cityDataSource.length)
                                    ();
                                }
                            }
                        }]
                    })(_react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_antd.Table, { style: cityDataSource.length !== 0 ? {} : { display: 'none' }, dataSource: cityDataSource, columns: columnsCity, size: 'small', bordered: true, pagination: false }),
                        _react2.default.createElement(
                            _antd.Button,
                            { size: 'small', type: 'dashed', onClick: this.showAddCityModal },
                            '+ \u65B0\u589E'
                        )
                    ))
                ),
                _react2.default.createElement(
                    FormItem,
                    _extends({}, companyNameLayout, { label: '\u5907\u6CE8' }),
                    getFieldDecorator('remark')(_react2.default.createElement(_antd.Input, { type: 'textarea', placeholder: '\u5907\u6CE8', onChange: this.remarkTextAreaChange })),
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.wordCount + '/500'
                    )
                ),
                _react2.default.createElement(
                    FormItem,
                    null,
                    getFieldDecorator('submit')(_react2.default.createElement(
                        _antd.Row,
                        null,
                        _react2.default.createElement(
                            _antd.Col,
                            { offset: 4, span: 4 },
                            _react2.default.createElement(
                                _antd.Button,
                                { type: 'primary', className: _style2.default.saveBtn, htmlType: 'submit', loading: this.props.loading },
                                '\u4FDD\u5B58'
                            )
                        )
                    ))
                )
            );
        }

        // 控制输入字数

    }]);

    return PolicyCompanyForm;
}(_react.Component);

exports.default = _antd.Form.create()(PolicyCompanyForm);

/***/ })

});
//# sourceMappingURL=6.js.map