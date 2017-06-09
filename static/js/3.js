webpackJsonp([3],{

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(44);

var _antd = __webpack_require__(15);

var _reactRouter = __webpack_require__(33);

var _style = __webpack_require__(433);

var _style2 = _interopRequireDefault(_style);

var _edit = __webpack_require__(427);

var _edit2 = _interopRequireDefault(_edit);

var _add = __webpack_require__(426);

var _add2 = _interopRequireDefault(_add);

var _AddContactModal = __webpack_require__(407);

var _AddContactModal2 = _interopRequireDefault(_AddContactModal);

var _AddCityModal = __webpack_require__(406);

var _AddCityModal2 = _interopRequireDefault(_AddCityModal);

var _EditCityModal = __webpack_require__(444);

var _EditCityModal2 = _interopRequireDefault(_EditCityModal);

var _PopSelect = __webpack_require__(445);

var _PopSelect2 = _interopRequireDefault(_PopSelect);

var _policyCompanyDetailAction = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var RangePicker = _antd.DatePicker.RangePicker;

var companyId = void 0;

var options = [{
    value: '浙江',
    label: '浙江',
    children: [{
        value: '杭州',
        label: '杭州',
        children: [{
            value: '江干',
            label: '江干'
        }]
    }]
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
        }]
    }]
}];

var cityDataSourceExample = [{
    // 服务城市id
    id: 1,
    serviceCity: '杭州市',
    accountAddress: '浙江省',
    serviceState: 2,
    serviceFee: 100,
    billingType: 1, // 1 预收 2 实缴
    billingMonth: 2, // 0 当月 1 次月 2 双月
    payDay: 23,
    issueCertificate: '身份证，证证证',
    accidentCollection: 222,
    serviceRate: 3, //
    policyPackageState: 0,
    policyPackage: ''
}];

var contactDataSourceExample = [{
    id: 1,
    name: 'yis',
    mobile: '15100000000',
    qq: '10000',
    telephone: '35883599',
    email: '10000@qq.com',
    remark: '下雨不要忘记带伞',
    isRecipient: 0
}];

var presetCityDataSource = null;
var presetContactDataSource = null;

var PolicyCompanyDetail = function (_Component) {
    _inherits(PolicyCompanyDetail, _Component);

    function PolicyCompanyDetail(props) {
        _classCallCheck(this, PolicyCompanyDetail);

        var _this = _possibleConstructorReturn(this, (PolicyCompanyDetail.__proto__ || Object.getPrototypeOf(PolicyCompanyDetail)).call(this, props));

        _this.edit = function () {
            _this.props.dispatch((0, _policyCompanyDetailAction.toggleEditable)(true));
        };

        _this.deleteCompany = function () {
            var _this$props = _this.props,
                dispatch = _this$props.dispatch,
                cityDataSource = _this$props.cityDataSource;

            if (!cityDataSource || cityDataSource.size === 0) {
                _antd.Modal.warn({
                    title: '确认删除此服务商？',
                    okText: '是的',
                    maskClosable: true
                });
            } else {
                _antd.Modal.error({
                    title: '服务商下有服务城市，不可直接删除！',
                    maskClosable: true
                });
            }
        };

        _this.editServiceCity = function (id) {
            // 找到要编辑的数据
            _this.searchCityDataFromCityDataSourceById(id
            // 把数据转换为适合对话框展示的数据
            );presetCityDataSource = _this.processPresetCityDataToModalData(presetCityDataSource);
            console.log('modal data', presetCityDataSource);
            _this.setState({
                editCityModalVisible: true
            });
        };

        _this.handleTabsChange = function (tabName) {
            var _this$props2 = _this.props,
                contactCurrent = _this$props2.contactCurrent,
                pageSize = _this$props2.pageSize,
                dispatch = _this$props2.dispatch,
                operationCurrent = _this$props2.operationCurrent;

            if (tabName === 'contact') {
                dispatch((0, _policyCompanyDetailAction.getContact)({
                    companyId: companyId,
                    contactCurrent: contactCurrent,
                    pageSize: pageSize
                }));
            } else if (tabName === 'log') {
                dispatch((0, _policyCompanyDetailAction.getOperationLog)({
                    companyId: companyId,
                    operationCurrent: operationCurrent,
                    pageSize: pageSize
                }));
            }
        };

        _this.cancelEditCity = function () {
            _this.setState({
                editCityModalVisible: false
            });
        };

        _this.searchCityDataFromCityDataSourceById = function (id) {
            var cityDataSource = _this.props.cityDataSource;
            // TODO 修改为cityDataSource

            cityDataSourceExample.forEach(function (item, index) {
                console.log('searchCityDataFromCityDataSourceById', item, index);
                if (item.id === id) presetCityDataSource = item;
            });
        };

        _this.processPresetCityDataToModalData = function (presetCityData) {
            var id = presetCityData.id,
                serviceCity = presetCityData.serviceCity,
                accountAddress = presetCityData.accountAddress,
                serviceFee = presetCityData.serviceFee,
                billingType = presetCityData.billingType,
                billingMonth = presetCityData.billingMonth,
                payDay = presetCityData.payDay,
                issueCertificate = presetCityData.issueCertificate,
                accidentCollection = presetCityData.accidentCollection,
                serviceRate = presetCityData.serviceRate;

            return {
                serviceCity: serviceCity, accountAddress: accountAddress, serviceFee: serviceFee, payDay: payDay,
                issueCertificate: issueCertificate, serviceRate: serviceRate, accidentCollection: accidentCollection, id: id, // 加上id 虽然在对话框中没用 但在对话框将修改数据返回时要靠这个id去服务器修改相应数据
                accountType: billingType,
                accountMonth: billingMonth
            };
        };

        _this.save = function () {
            var validateFields = _this.props.form.validateFields;

            validateFields(function (err, value) {
                console.log(err, value);
                if (!err) {
                    _this.props.dispatch((0, _policyCompanyDetailAction.savingLoading)(true)
                    // 修改页面数据
                    );_this.props.dispatch((0, _policyCompanyDetailAction.receivedPolicyCompanyDetail)(value)
                    // 向服务器发起修改请求
                    );_this.props.dispatch((0, _policyCompanyDetailAction.putModifiedCompanyInfo)(value));
                }
            });
        };

        _this.receiveCityDatasource = function (data) {
            var _this$props3 = _this.props,
                pageSize = _this$props3.pageSize,
                cityCurrent = _this$props3.cityCurrent;

            console.log('add city modal', data
            // 对话框数据请求服务器
            );_this.props.dispatch((0, _policyCompanyDetailAction.addServiceCity)(_extends({
                companyId: companyId
            }, data)));
            _this.props.dispatch((0, _policyCompanyDetailAction.getServiceCity)({
                companyId: companyId,
                pageSize: pageSize,
                cityCurrent: cityCurrent,
                serviceState: _this.state.filterServiceState,
                policyPackageState: _this.state.filterPolicyPackageState
            }));
        };

        _this.receiveEditedCityDatasource = function (data) {
            console.log('edit modal received data', data);
            var _this$props4 = _this.props,
                dispatch = _this$props4.dispatch,
                cityCurrent = _this$props4.cityCurrent,
                pageSize = _this$props4.pageSize;

            _this.setState({
                editCityModalVisible: false
            }
            // TODO 请求服务器 修改城市
            );dispatch((0, _policyCompanyDetailAction.modifyServiceCity)(_extends({}, data, { companyId: companyId })));
            dispatch((0, _policyCompanyDetailAction.getServiceCity)({
                companyId: companyId,
                cityCurrent: cityCurrent,
                pageSize: pageSize
            }));
        };

        _this.receiveContactDatasource = function (values) {
            var _this$props5 = _this.props,
                dispatch = _this$props5.dispatch,
                contactCurrent = _this$props5.contactCurrent,
                pageSize = _this$props5.pageSize;

            console.log('add contact modal', values);
            if (presetContactDataSource) {
                dispatch((0, _policyCompanyDetailAction.modifyContact)(_extends({
                    companyId: companyId
                }, values)));
            } else {
                dispatch((0, _policyCompanyDetailAction.addContact)(_extends({
                    companyId: companyId
                }, values)));
            }
            // 重新获取数据
            dispatch((0, _policyCompanyDetailAction.getContact)({
                companyId: companyId,
                contactCurrent: contactCurrent,
                pageSize: pageSize
            })
            // 置空 区别添加和修改 并防止添加联系人的对话框被预设数据污染
            );presetContactDataSource = null;
        };

        _this.editContact = function (id) {
            console.log('edit contact', id
            // 找到要编辑的数据
            );_this.searchContactDataFromContactDataSourceById(id
            // 把数据转换为适合对话框展示的数据
            );presetContactDataSource = _this.processPresetContactDataToModalData(presetContactDataSource);
            console.log('presetContactDataSource', presetContactDataSource);
            _this.props.dispatch((0, _policyCompanyDetailAction.addContactModalVisible)({ addContactModalVisible: true })
            // 对话框显示后将预设数据不要置为空  在对话框上点击取消或确定后置空
            // presetContactDataSource = null
            );
        };

        _this.deleteContact = function (id) {
            _antd.Modal.warn({
                title: '确定删除次服务商联系人',
                onOk: function onOk() {
                    _this.props.dispatch((0, _policyCompanyDetailAction.deleteContact)({ id: id, companyId: companyId }));
                },
                maskClosable: true,
                okText: '是的'
            });
        };

        _this.searchContactDataFromContactDataSourceById = function (id) {
            var contactDataSource = _this.props.contactDataSource;
            // TODO 将contactDataSourceExample替换为contactDataSource

            contactDataSourceExample.forEach(function (item) {
                if (item.id === id) {
                    presetContactDataSource = item;
                }
            });
        };

        _this.processPresetContactDataToModalData = function (contactDataSource) {
            var id = contactDataSource.id,
                name = contactDataSource.name,
                mobile = contactDataSource.mobile,
                qq = contactDataSource.qq,
                telephone = contactDataSource.telephone,
                email = contactDataSource.email,
                remark = contactDataSource.remark,
                isRecipient = contactDataSource.isRecipient;

            return {
                id: id,
                contactName: name,
                mobilePhoneNum: mobile,
                emailAddr: email,
                phoneNum: telephone,
                qqNum: qq,
                receiver: isRecipient,
                remark: remark
            };
        };

        _this.cancelModifyBaseInfo = function () {
            _this.props.form.resetFields();
            _this.props.dispatch((0, _policyCompanyDetailAction.toggleEditable)(false));
        };

        _this.cancelAddContact = function () {
            var dispatch = _this.props.dispatch;
            // 置空 防止添加联系人的对话框被预设数据污染

            presetContactDataSource = null;
            dispatch((0, _policyCompanyDetailAction.addContactModalVisible)({ addContactModalVisible: false }));
        };

        _this.cancelAddCity = function () {
            var dispatch = _this.props.dispatch;

            dispatch((0, _policyCompanyDetailAction.addCityModalVisible)({ addCityModalVisible: false }));
        };

        _this.showAddContactModal = function () {
            var dispatch = _this.props.dispatch;

            dispatch((0, _policyCompanyDetailAction.addContactModalVisible)({ addContactModalVisible: true }));
        };

        _this.showAddCityModal = function () {
            var dispatch = _this.props.dispatch;

            dispatch((0, _policyCompanyDetailAction.addCityModalVisible)({ addCityModalVisible: true }));
        };

        _this.filterByPolicyPackageState = function (value) {
            _this.setState({ filterPolicyPackageState: value });
            var _this$props6 = _this.props,
                dispatch = _this$props6.dispatch,
                pageSize = _this$props6.pageSize,
                cityCurrent = _this$props6.cityCurrent;

            dispatch((0, _policyCompanyDetailAction.getServiceCity)({
                companyId: companyId,
                pageSize: pageSize,
                cityCurrent: cityCurrent,
                serviceState: _this.state.filterServiceState,
                policyPackageState: value
            }));
        };

        _this.filterByServiceState = function (value) {
            _this.setState({ filterServiceState: value });
            var _this$props7 = _this.props,
                dispatch = _this$props7.dispatch,
                pageSize = _this$props7.pageSize,
                cityCurrent = _this$props7.cityCurrent;

            dispatch((0, _policyCompanyDetailAction.getServiceCity)({
                companyId: companyId,
                pageSize: pageSize,
                cityCurrent: cityCurrent,
                serviceState: value,
                policyPackageState: _this.state.policyPackageState
            }));
        };

        _this.processCityDataToTableDataSource = function (cityDataArr) {
            return cityDataArr.map(function (cityData) {
                return {
                    serviceCity: cityData.serviceCity,
                    accountAddress: cityData.accountAddress,
                    serviceState: function () {
                        switch (cityData.serviceState) {
                            case 1:
                                return '正常服务';
                            case 2:
                                return '只减不增';
                            case 3:
                                return '停止服务';
                            default:
                                return '-/-';
                        }
                    }(), // 0 未设置 1 异常 2 正常
                    serviceFee: cityData.serviceFee ? cityData.serviceFee : '-/-',
                    billingType: function () {
                        switch (cityData.billingType) {
                            case 1:
                                return '预收';
                            case 2:
                                return '实缴';
                            default:
                                return '-/-';
                        }
                    }(), // 1 预收 2 实缴
                    billingMonth: function () {
                        switch (cityData.billingMonth) {
                            case 0:
                                return '当月';
                            case 1:
                                return '次月';
                            case 2:
                                return '双月';
                            default:
                                return '-/-';
                        }
                    }(), // 0 当月 1 次月 2 双月
                    payDay: cityData.payDay + '号',
                    issueCertificate: cityData.issueCertificate,
                    accidentCollection: cityData.accidentCollection ? cityData.accidentCollection : '-/-',
                    serviceRate: cityData.serviceRate ? cityData.serviceRate : '-/-', //
                    policyPackageState: function () {
                        switch (cityData.policyPackageState) {
                            case 0:
                                return '未设置';
                            case 1:
                                return '异常';
                            case 2:
                                return '正常';
                            default:
                                return '-/-';
                        }
                    }(),
                    policyPackage: function () {
                        switch (cityData.policyPackageState) {
                            case 1:
                            case 2:
                                return '查看';
                            case 0:
                                return '设置';
                            default:
                                return '-/-';
                        }
                    }(),
                    // 冗余数据
                    id: cityData.id,
                    serviceStateOriginal: cityData.serviceState,
                    policyPackageStateOriginal: cityData.policyPackageState
                };
            }

            // 将服务器返回的联系人数据转换为表格数据源 - 联系人
            );
        };

        _this.processContactDataToTableDataSource = function (contactDataArr) {
            return contactDataArr.map(function (contact) {
                return {
                    name: contact.name,
                    mobile: contact.mobile ? contact.mobile : '-/-',
                    qq: contact.qq ? contact.qq : '-/-',
                    telephone: contact.telephone ? contact.telephone : '-/-',
                    email: contact.email ? contact.email : '-/-',
                    remark: contact.remark ? contact.remark : '-/-',
                    receiver: function () {
                        switch (contact.isRecipient) {
                            case 0:
                                return '不是';
                            case 1:
                                return '是';
                            default:
                                return '-/-';
                        }
                    }(),
                    // 冗余数据 表格不显示该字段 但请求时可以用到
                    id: contact.id,
                    receiverOriginal: contact.isRecipient
                };
            });
        };

        _this.modifyServiceState = function (serviceStateChangedValue, record) {
            var _this$props8 = _this.props,
                dispatch = _this$props8.dispatch,
                pageSize = _this$props8.pageSize,
                cityCurrent = _this$props8.cityCurrent;

            dispatch((0, _policyCompanyDetailAction.modifyServiceCityServiceState)({
                id: record.id,
                oldServiceState: record.serviceStateOriginal,
                serviceState: serviceStateChangedValue
            }));
            dispatch((0, _policyCompanyDetailAction.getServiceCity)({
                companyId: companyId,
                pageSize: pageSize,
                cityCurrent: cityCurrent,
                serviceState: _this.state.filterServiceState,
                policyPackageState: _this.state.filterPolicyPackageState
            }));
        };

        _this.deleteServiceCity = function (id, serviceState) {
            var dispatch = _this.props.dispatch;

            if (serviceState === 3) {
                // TODO 删除服务城市
                _antd.Modal.confirm({
                    title: '确认删除此服务城市',
                    onOk: function onOk() {
                        dispatch((0, _policyCompanyDetailAction.deleteServiceCity)({ id: id, companyId: companyId }));
                    }
                });
            } else {
                _antd.Modal.warn({
                    title: '只有停止服务的城市可以删除'
                });
            }
        };

        _this.state = {
            filterPolicyPackageState: null,
            filterServiceState: null,
            editCityModalVisible: false
        };
        companyId = props.location.query.id;
        // 路由参数中获取从服务商列表页获取的服务商id 然后获取服务商详情信息
        props.dispatch((0, _policyCompanyDetailAction.getPolicyCompanyDetail)(companyId)
        // 获取初始服务城市信息
        );props.dispatch((0, _policyCompanyDetailAction.getServiceCity)({
            companyId: companyId,
            cityCurrent: props.cityCurrent,
            pageSize: props.pageSize
        }));
        return _this;
    }

    _createClass(PolicyCompanyDetail, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                companyName = _props.companyName,
                companyAddress = _props.companyAddress,
                detailAddress = _props.detailAddress,
                cooperationTime = _props.cooperationTime,
                protocolFileUrl = _props.protocolFileUrl,
                remark = _props.remark,
                dispatch = _props.dispatch,
                addCityModalVisible = _props.addCityModalVisible,
                addContactModalVisible = _props.addContactModalVisible,
                savingLoading = _props.savingLoading,
                hasSecuredCustomerInServiceCity = _props.hasSecuredCustomerInServiceCity,
                hasReceiverInThisCompany = _props.hasReceiverInThisCompany;
            var getFieldDecorator = this.props.form.getFieldDecorator;

            var formItemlayout = {
                labelCol: { span: 6 },
                wrapperCol: { span: 18 }
                // 服务城市tab表格列
            };var columnsCity = [{
                title: '服务城市',
                dataIndex: 'serviceCity',
                key: 'serviceCity'
            }, {
                title: '开户地区',
                dataIndex: 'accountAddress',
                key: 'accountAddress'
            }, {
                title: _react2.default.createElement(
                    _antd.Select,
                    { placeholder: '\u670D\u52A1\u72B6\u6001', style: { minWidth: 100 }, onSelect: function onSelect(value) {
                            return _this2.filterByServiceState(value);
                        } },
                    _react2.default.createElement(
                        _antd.Select.Option,
                        { value: 1 },
                        '\u6B63\u5E38\u670D\u52A1'
                    ),
                    _react2.default.createElement(
                        _antd.Select.Option,
                        { value: 2 },
                        '\u53EA\u51CF\u4E0D\u589E'
                    ),
                    _react2.default.createElement(
                        _antd.Select.Option,
                        { value: 3 },
                        '\u505C\u6B62\u670D\u52A1'
                    )
                ),
                dataIndex: 'serviceState',
                key: 'serviceState',
                render: function render(text, record) {
                    return _react2.default.createElement(_PopSelect2.default, {
                        saveCallback: function saveCallback(serviceStateChangedValue) {
                            return _this2.modifyServiceState(serviceStateChangedValue, record);
                        },
                        defaultSelected: record.serviceStateOriginal,
                        policyPackageState: record.policyPackageStateOriginal,
                        text: text,
                        dispatchHasSecuredCustomerInServiceCity: dispatch((0, _policyCompanyDetailAction.hasSecuredCustomerInServiceCity)(record.id)),
                        hasSecuredCustomer: hasSecuredCustomerInServiceCity });
                }
            }, {
                title: '服务费',
                dataIndex: 'serviceFee',
                key: 'serviceFee'
            }, {
                title: '账单类型',
                dataIndex: 'billingType',
                key: 'billingType'
            }, {
                title: '账单归属月',
                dataIndex: 'billingMonth',
                key: 'billingMonth'
            }, {
                title: '打款日',
                dataIndex: 'payDay',
                key: 'payDay'
            }, {
                title: '可开具证明',
                dataIndex: 'issueCertificate',
                key: 'issueCertificate',
                render: function render(text, record) {
                    return _react2.default.createElement(
                        _antd.Popover,
                        { content: text, trigger: 'click' },
                        _react2.default.createElement(
                            'a',
                            null,
                            '\u67E5\u770B'
                        )
                    );
                }
            }, {
                title: '事故汇总',
                dataIndex: 'accidentCollection',
                key: 'accidentCollection'
            }, {
                title: '服务评分',
                dataIndex: 'serviceRate',
                key: 'serviceRate'
            }, {
                title: _react2.default.createElement(
                    _antd.Select,
                    { placeholder: '\u653F\u7B56\u5305\u72B6\u6001', style: { minWidth: 100 }, onChange: this.filterByPolicyPackageState },
                    _react2.default.createElement(
                        _antd.Select.Option,
                        { value: 0 },
                        '\u672A\u8BBE\u7F6E'
                    ),
                    _react2.default.createElement(
                        _antd.Select.Option,
                        { value: 2 },
                        '\u6B63\u5E38'
                    ),
                    _react2.default.createElement(
                        _antd.Select.Option,
                        { value: 1 },
                        '\u5F02\u5E38'
                    )
                ),
                dataIndex: 'policyPackageState',
                key: 'policyPackageState',
                render: function render(text) {
                    return _react2.default.createElement(
                        'span',
                        { style: function () {
                                switch (text) {
                                    case '未设置':
                                    case '异常':
                                        return { color: 'red' };
                                    case '正常':
                                        return {};
                                }
                            }() },
                        text
                    );
                }
            }, {
                title: '政策包',
                dataIndex: 'policyPackage',
                key: 'policyPackage',
                render: function render(text, record) {
                    return _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '' },
                        text
                    );
                }
            }, {
                title: '操作',
                dataIndex: 'action',
                key: 'action',
                render: function render(text, record) {
                    return _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.editServiceCity(record.id);
                                } },
                            '\u7F16\u8F91'
                        ),
                        '\xA0|\xA0',
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.deleteServiceCity(record.id, record.serviceStateOriginal);
                                } },
                            '\u5220\u9664'
                        )
                    );
                }
            }];

            // 联系人tab表格列
            var columnsContact = [{
                title: '姓名',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: '手机',
                dataIndex: 'mobile',
                key: 'mobile'
            }, {
                title: 'QQ',
                dataIndex: 'qq',
                key: 'qq'
            }, {
                title: '固定电话',
                dataIndex: 'telephone',
                key: 'telephone'
            }, {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email'
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
                dataIndex: 'action',
                key: 'action',
                render: function render(text, record) {
                    return _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.editContact(record.id);
                                } },
                            '\u7F16\u8F91'
                        ),
                        '\xA0|\xA0',
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick() {
                                    return _this2.deleteContact(record.id);
                                } },
                            '\u5220\u9664'
                        )
                    );
                }
            }];

            // 操作日志表格列
            var columnsLog = [{
                title: '操作时间',
                dataIndex: 'operateTime',
                key: 'operateTime'
            }, {
                title: '操作人',
                dataIndex: 'operatePeople',
                key: 'operatePeople'
            }, {
                title: '动作',
                dataIndex: 'operation',
                key: 'operation'
            }, {
                title: '备注说明',
                dataIndex: 'remark',
                key: 'remark'
            }];

            // 服务城市分页器
            var paginationCity = {
                current: this.props.cityCurrent,
                total: this.props.cityTotal,
                pageSize: this.props.pageSize,
                showQuickJumper: true,
                onChange: function onChange(cityCurrent, pageSize) {
                    dispatch((0, _policyCompanyDetailAction.getServiceCity)({
                        companyId: companyId, cityCurrent: cityCurrent, pageSize: pageSize,
                        serviceState: _this2.state.filterServiceState,
                        policyPackageState: _this2.state.filterPolicyPackageState
                    }));
                }

                // 联系人分页器
            };var paginationContact = {
                current: this.props.contactCurrent,
                total: this.props.contactTotal,
                pageSize: this.props.pageSize,
                showQuickJumper: true,
                onChange: function onChange(contactCurrent, pageSize) {
                    dispatch((0, _policyCompanyDetailAction.getContact)({ companyId: companyId, contactCurrent: contactCurrent, pageSize: pageSize }));
                }

                // 操作日志分页器
            };var paginationLog = {
                current: this.props.operationCurrent,
                total: this.props.operationTotal,
                pageSize: this.props.pageSize,
                showQuickJumper: true,
                onChange: function onChange(operationCurrent, pageSize) {
                    dispatch((0, _policyCompanyDetailAction.getOperationLog)({ companyId: companyId, operationCurrent: operationCurrent, pageSize: pageSize }));
                }
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: _style2.default.title },
                    _react2.default.createElement(
                        'div',
                        { className: _style2.default.left },
                        _react2.default.createElement(
                            _antd.Button,
                            { type: 'primary', onClick: function onClick() {
                                    _reactRouter.browserHistory.replace('/jsp/react/policycompany/policycompanylist');
                                } },
                            '\u8FD4\u56DE'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: _style2.default.desc },
                            '\u67E5\u770B\u670D\u52A1\u5546\uFF1A'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: _style2.default.companyName },
                            companyName
                        )
                    ),
                    _react2.default.createElement(
                        _antd.Button,
                        { type: 'danger', className: _style2.default.right, onClick: this.deleteCompany },
                        '\u5220\u9664'
                    ),
                    _react2.default.createElement('div', { className: _style2.default.clear })
                ),
                _react2.default.createElement(
                    'div',
                    { className: _style2.default.baseInfo },
                    _react2.default.createElement(
                        'h4',
                        null,
                        '\u57FA\u672C\u4FE1\u606F'
                    ),
                    _react2.default.createElement('img', { src: _edit2.default, onClick: this.edit, style: this.props.editable ? { display: "none" } : {} })
                ),
                _react2.default.createElement(
                    _antd.Form,
                    { className: _style2.default.form, layout: 'inline', style: this.props.editable ? { display: 'none' } : {} },
                    _react2.default.createElement(
                        _antd.Row,
                        null,
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12 },
                            _react2.default.createElement(
                                FormItem,
                                { label: '\u670D\u52A1\u5546\u540D\u79F0' },
                                getFieldDecorator('companyName')(_react2.default.createElement(
                                    'span',
                                    null,
                                    companyName
                                ))
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12 },
                            _react2.default.createElement(
                                FormItem,
                                { label: '\u6240\u5728\u5730\u533A' },
                                getFieldDecorator('companyAddress')(_react2.default.createElement(
                                    'span',
                                    null,
                                    companyAddress
                                ))
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12 },
                            _react2.default.createElement(
                                FormItem,
                                { label: '\u8BE6\u7EC6\u5730\u5740' },
                                getFieldDecorator('detailAddress')(_react2.default.createElement(
                                    'span',
                                    null,
                                    detailAddress
                                ))
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12 },
                            _react2.default.createElement(
                                FormItem,
                                { label: '\u5408\u4F5C\u65F6\u95F4' },
                                getFieldDecorator('cooperationTime')(_react2.default.createElement(
                                    'span',
                                    null,
                                    cooperationTime
                                ))
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12 },
                            _react2.default.createElement(
                                FormItem,
                                { label: '\u534F\u8BAE\u6587\u4EF6' },
                                getFieldDecorator('protocolFileUrl')(_react2.default.createElement(
                                    'a',
                                    { target: '_blank', href: protocolFileUrl },
                                    '\u67E5\u770B'
                                ))
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12 },
                            _react2.default.createElement(
                                FormItem,
                                { label: '\u5907\u6CE8\u8BF4\u660E' },
                                getFieldDecorator('remark')(_react2.default.createElement(
                                    'span',
                                    null,
                                    remark
                                ))
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _antd.Form,
                    { className: _style2.default.form, layout: 'inline', style: this.props.editable ? { backgroundColor: "#f0f0f0" } : { display: 'none' } },
                    _react2.default.createElement(
                        _antd.Row,
                        null,
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12 },
                            _react2.default.createElement(
                                FormItem,
                                _extends({ label: '\u670D\u52A1\u5546\u540D\u79F0' }, formItemlayout),
                                getFieldDecorator('companyName', {
                                    rules: [{ required: true, message: '服务商名称不能为空' }, { message: '服务商名称控制在4~40字', min: 4, max: 40 }],
                                    initialValue: companyName
                                })(_react2.default.createElement(_antd.Input, { type: 'text', placeholder: '\u670D\u52A1\u5546\u540D\u79F0', style: { width: 300 } }))
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12 },
                            _react2.default.createElement(
                                FormItem,
                                _extends({ label: '\u6240\u5728\u5730\u533A' }, formItemlayout),
                                getFieldDecorator('companyAddress', {
                                    defaultValue: companyAddress.split('-'),
                                    rules: [{ required: true, message: '请选择所在地区' }]
                                })(_react2.default.createElement(_antd.Cascader, { placeholder: '\u8BF7\u9009\u62E9', options: options, style: { width: 300 } }))
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12, style: { marginTop: 20 } },
                            _react2.default.createElement(
                                FormItem,
                                _extends({ label: '\u8BE6\u7EC6\u5730\u5740' }, formItemlayout),
                                getFieldDecorator('detailAddress', {
                                    rules: [{ required: true, message: '请填写详细地址' }],
                                    initialValue: detailAddress
                                })(_react2.default.createElement(_antd.Input, { type: 'text', placeholder: '\u8BE6\u7EC6\u5730\u5740', style: { width: 300 } }))
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12, style: { marginTop: 20 } },
                            _react2.default.createElement(
                                FormItem,
                                _extends({ label: '\u5408\u4F5C\u65F6\u95F4' }, formItemlayout, { style: { width: 400 } }),
                                getFieldDecorator('cooperationTime')(_react2.default.createElement(RangePicker, { placeholder: ['合作开始日期', '合作结束日期'] }))
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12, style: { marginTop: 20 } },
                            _react2.default.createElement(
                                FormItem,
                                _extends({ label: '\u534F\u8BAE\u6587\u4EF6' }, formItemlayout, { style: { width: 300 } }),
                                getFieldDecorator('protocolFileUrl')(_react2.default.createElement(
                                    'a',
                                    { href: this.props.protocolFileUrl },
                                    '\u67E5\u770B'
                                ))
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 12, style: { marginTop: 20 } },
                            _react2.default.createElement(
                                FormItem,
                                _extends({ label: '\u5907\u6CE8\u8BF4\u660E' }, formItemlayout),
                                getFieldDecorator('remark')(_react2.default.createElement(_antd.Input, { type: 'text', placeholder: '\u5907\u6CE8', style: { width: 300 } }))
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Col,
                            { span: 24, style: { marginTop: 20 }, offset: 1 },
                            _react2.default.createElement(
                                _antd.Button,
                                { type: 'primary', size: 'small', onClick: this.save, loading: savingLoading },
                                '\u4FDD\u5B58'
                            ),
                            _react2.default.createElement(
                                _antd.Button,
                                { type: 'default', size: 'small', onClick: this.cancelModifyBaseInfo, style: { marginLeft: 10 } },
                                '\u53D6\u6D88'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _antd.Tabs,
                    { type: 'card', animated: true, style: { marginTop: 10 }, onChange: function onChange(tabName) {
                            return _this2.handleTabsChange(tabName);
                        } },
                    _react2.default.createElement(
                        _antd.Tabs.TabPane,
                        { tab: '\u670D\u52A1\u57CE\u5E02', key: 'city' },
                        _react2.default.createElement(_antd.Table, {
                            columns: columnsCity,
                            size: 'default',
                            bordered: true,
                            dataSource: this.processCityDataToTableDataSource(cityDataSourceExample),
                            pagination: paginationCity,
                            title: function title() {
                                return _react2.default.createElement(
                                    'div',
                                    { style: { textAlign: "right" } },
                                    _react2.default.createElement('img', { src: _add2.default, style: { cursor: "pointer" }, onClick: _this2.showAddCityModal })
                                );
                            } })
                    ),
                    _react2.default.createElement(
                        _antd.Tabs.TabPane,
                        { tab: '\u8054\u7CFB\u4EBA\u4FE1\u606F', key: 'contact' },
                        _react2.default.createElement(_antd.Table, {
                            columns: columnsContact,
                            size: 'default',
                            bordered: true,
                            dataSource: this.processContactDataToTableDataSource(contactDataSourceExample),
                            pagination: paginationContact,
                            title: function title() {
                                return _react2.default.createElement(
                                    'div',
                                    { style: { textAlign: "right" } },
                                    _react2.default.createElement('img', { src: _add2.default, style: { cursor: "pointer" }, onClick: _this2.showAddContactModal })
                                );
                            } })
                    ),
                    _react2.default.createElement(
                        _antd.Tabs.TabPane,
                        { tab: '\u64CD\u4F5C\u65E5\u5FD7', key: 'log' },
                        _react2.default.createElement(_antd.Table, { columns: columnsLog, size: 'default', pagination: paginationLog, bordered: true })
                    )
                ),
                _react2.default.createElement(_AddCityModal2.default, {
                    dispatch: dispatch,
                    visible: addCityModalVisible,
                    cancel: this.cancelAddCity,
                    receiveCityDatasource: function receiveCityDatasource(values) {
                        return _this2.receiveCityDatasource(values);
                    } }),
                _react2.default.createElement(_EditCityModal2.default, {
                    visible: this.state.editCityModalVisible,
                    dispatch: dispatch,
                    presetCityData: presetCityDataSource,
                    cancel: this.cancelEditCity,
                    receiveCityDatasource: function receiveCityDatasource(values) {
                        return _this2.receiveEditedCityDatasource(values);
                    } }),
                _react2.default.createElement(_AddContactModal2.default, {
                    dispatch: dispatch,
                    visible: addContactModalVisible,
                    cancel: this.cancelAddContact,
                    hasReceiverInThisCompany: hasReceiverInThisCompany,
                    presetContactData: presetContactDataSource,
                    receiveContactDatasource: function receiveContactDatasource(values) {
                        return _this2.receiveContactDatasource(values);
                    } })
            );
        }

        // 删除服务商


        // 根据要编辑的信息id找到信息


        // 将数据库返回数据转换为适合对话框转换的数据


        // 从添加城市对话框传回的数据 然后请求服务器添加城市


        // 从编辑城市对话框传过来的数据


        // 从添加联系人对话框传过来的数据


        // 将数据库返回数据转换为适合对话框转换的数据


        // 取消修改

        // 取消添加联系人

        // 取消添加服务城市


        // 根据政策包状态筛选服务城市


        // 根据服务状态筛选服务城市


        // 将服务器返回数据转为表格显示数据 - 服务城市


        // 删除服务城市操作

    }]);

    return PolicyCompanyDetail;
}(_react.Component);

var PolicyCompanyDetailWrapper = _antd.Form.create()(PolicyCompanyDetail);

function mapStateToProps(state) {
    var data = state.getIn(['policyCompanyDetailReducer']);
    return {
        companyName: data.getIn(['companyName']),
        companyAddress: data.getIn(['companyAddress']),
        detailAddress: data.getIn(['detailAddress']),
        cooperationTime: data.getIn(['cooperationTime']),
        protocolFileUrl: data.getIn(['protocolFileUrl']),
        remark: data.getIn(['remark']),
        addContactModalVisible: data.getIn(['addContactModalVisible']),
        addCityModalVisible: data.getIn(['addCityModalVisible']),
        savingLoading: data.getIn(['savingLoading']),
        editable: data.getIn(['editable']),
        pageSize: data.getIn(['pageSize']),
        // 服务城市列表数据
        cityDataSource: data.getIn(['cityDataSource']),
        cityCurrent: data.getIn(['cityCurrent']),
        cityTotal: data.getIn(['cityTotal']),
        hasSecuredCustomerInServiceCity: data.getIn(['hasSecuredCustomerInServiceCity']),
        // 联系人列表数据
        contactDataSource: data.getIn(['cityDataSource']),
        contactCurrent: data.getIn(['cityCurrent']),
        contactTotal: data.getIn(['cityTotal']),
        // 操作日志列表数据
        operationDataSource: data.getIn(['cityDataSource']),
        operationCurrent: data.getIn(['cityCurrent']),
        operationTotal: data.getIn(['cityTotal']),
        // TODO 做不到
        hasReceiverInThisCompany: data.getIn(['hasReceiverInThisCompany'])
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PolicyCompanyDetailWrapper);

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

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(366)();
// imports


// module
exports.push([module.i, ".style---title---1CFy6{\r\n    padding-bottom: 10px;\r\n    border-bottom: solid 2px #22baa0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.style---title---1CFy6 .style---left----96hQ{\r\n    float: left;\r\n}\r\n\r\n.style---title---1CFy6 .style---right---1zk_s{\r\n    float: right;\r\n}\r\n\r\n.style---title---1CFy6 .style---clear---QO98A{\r\n    clear: both;\r\n}\r\n\r\n.style---title---1CFy6 .style---desc---3euJ-{\r\n    font-weight: bold;\r\n    font-size: 1.2em;\r\n    vertical-align: middle;\r\n    margin-left: 10px;\r\n}\r\n\r\n.style---title---1CFy6 .style---companyName---3YrH3{\r\n    font-size: 1.2em;\r\n    vertical-align: middle;\r\n    margin-left: 10px;\r\n    color: #ef6330;\r\n}\r\n\r\n/* 伪元素清浮动 */\r\n.style---baseInfo---3yO4d:after{\r\n    display: block;\r\n    content: '';\r\n    clear: both;\r\n}\r\n\r\n.style---baseInfo---3yO4d h4{\r\n    float: left;\r\n}\r\n\r\n.style---baseInfo---3yO4d img{\r\n    width: 28px;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n.style---form---3_Fz-{\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n}", ""]);

// exports
exports.locals = {
	"title": "style---title---1CFy6",
	"left": "style---left----96hQ",
	"right": "style---right---1zk_s",
	"clear": "style---clear---QO98A",
	"desc": "style---desc---3euJ-",
	"companyName": "style---companyName---3YrH3",
	"baseInfo": "style---baseInfo---3yO4d",
	"form": "style---form---3_Fz-"
};

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAxklEQVRIS+1W3Q2CMBi8cxHBCdxAfRBfdQJgE5ykbKCv9kkXAZzkTDEmxhgKSU2Ioc9f73r3/ZWRNUuKJxIRAh4JjagDY2saCmW1y4uA+FhcTCEw5cKWqpKMIcFfWA57XASxNVeAqpNs00fxYAXuggPua+lE4E3Dn1rkSpHgyqv/S4CgW53k685G+zlB18unPvDmdbLIa9FzXAPvte6runEtHK/Ej4B22LVLnzNTbdPjUIBOe9zSJzK23xbgTHAekkDQXcD+AbcR6brdL8+kAAAAAElFTkSuQmCC"

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAALdElEQVR4Xu2dy3XbyBKGq6Arb21HYIoJjBzByIuhzqysSeCajMCaCCxHYDkCUJOA6dUcUQvTEVxNAiIdgaWtNULd0yApA2AD6OoHCJLFnY66C9X1f2j0uxEC/Trj+BBg7ynsP/wzezW4dXlMZ/zXryr/rPffr7Z2On/HHdjbewEPD99mvw9m1nY8lsvWB5/50Kexpa3ueBgDQF/9TQC3RDSYHQ9G3GcpiJDwEyJ0FrauaZ9ecYHqjON+BKh8mv8Izm+O+39y/Ol8iZ/hPX5CgKPUBMGMkP6Y9QbXHDttS+sdgO5VfAqEH7IFVRBMe/3n3MIfXMYjRHyds0V0MT0epHCZ/NSbH+3htJg2AXrJEa87js8B8G2hXNfTXv+liR9tTeMfgMv4DBDfFQt80+uzn9UdD6loh4C+TnuD9C00+XWu4qOI8MtKWqL3N8eDMxMbKs3BOJ4gYPopyv5symX6zCbSsUWpc6orANSFqFX/FwAM5ZAawDBQUgMYBqolyaQGMBRCagDDQEkNYBioliSrrAHSwRyKfoki6BCRWcuboLPstxe6TBNumZd97oIdNajE6Xs/Q4DDld4EwQwQOANChwjwbLVXAsblQoBZAngNkHzldEG5ceOk1wLQuYxPEPGtTgCOcUlbHgECmBDS+9lvA2OAQsQzB4Aa7Yp+YAwIJyEeJjZXI5AAns56bz6uKzY5AA7Gwy/y1jcvRQI0mPUGw+afDPAIQFnjbR1O7eIzkwc6cJmkso1ZCsBiomOqa+TYGpZ8vAgQc46DZ7089RyA4myZL+tihxWBZJ+ec2c6WQ/QJE4BOLiMh4j4pqLN+jFBGAFBJ6L51GzZjxCOdJMminDVDeI4TAh9BHyxkofovakdAtUtXS2bmlRCMu/C+ShXmY1lWRKkV033CuYAlMx0qf9xZ9/K2hI2hfMx+uZrNtBHudJe1j1+L4UX6c+b3wbnpnD7SCcAGEbRBwB1Lxswp6gNXa9Mtv0AjOPDCPB/us8IZz1AKQDMhSVVte1WAKCGj1cDTnfJPnS4DRxd0Ino8/R4wBqo6o7jWwB8moWA+0lSo6MR4qesDQL6Nu0NKttERfC2HoC0V5EGC4Yq6ET0j2rM2Y59Z5diqYYkPYFTLkjztYWgGrq/ANBdAnBqM/AyBxJO03IBfaW5Hc68RGV7aytqAB/fpW22sRM1wDYL6Fo2AcA1ghueXwDYcAFd3RcAXCO44fkFgA0X0NX9SgC2YSTQNUDbnr8MANPZwM7VxesooSNCUEvUZgnShcv8gfeRwG0X0LV8OgBMxC/ukyz4Mbzp9Qc2vgkANlFzyFMEwFh8QLVaa2VRasYVKwgEAAcxbbJmATAS/yo+SndIV4u/dIUNgQBgo6JDnkcADBp8Ngt1CIC1hV4AcBDTJqsCgACGdXMRNuIv/eFAIADYqOiQRzXm6iaQXMTnQiAAOIgZIqsP8TkQNAJAZ3zxFoFYc/ghgmtr00d/2+TZPsU3hSA4ALqjVUyC0cY03GNluGU4uIyv52sW/P6q2gQNALB6zIvf4jVpjT7e9AanoZ6Y7s/4AZMmIRAAGGqa9NsZ5rRJm4YgOAC6k75cg7Su/Nx1hHV+qhPMdNvBmoQgOADztfBwRpo9+nUBas3/CW7TvrvFWYdlZVBnKRLASXrWoGaLeFMQBAegNSK2yJHsQZrKrbLdwUEhUAddPqGXAkDDYBTFXz5+HRCoVcgCQIMAlIm/LghU91AAaAiAOvHXBYEA0AAApuI3DwHdCQCBAeCK3yQEiy37freHB47nRplfFT/dlnakZgN1ew2LhQvdMFTH0kgNEACpxTkA6sj8zLH2P8VfPvJgPPxet9InGASLBSkCgGcAFuctqfV7mcMpV8XX76LWO+MbguyQtgDgEQCd+Onu6AROskO+6Qrf+kWeOc98QVCczxAAPAFQKv4TOMpuZ7cR/9HFkqtujEcMNSeQCAAeAGhE/J9+alf+1kFQVoM0AkD6vcMod/ePh7g3ZiIhuIWH5HPpzN19umb/8ZufVvs+3/zVkrIgqDqJNDgAIZY5NaZ85kHp7WcP9DL3LZ/fJNa0+EuvjCCoO4Y2OAAmXZ11CGr1zMw3tOFqv8zdSggI4bxu+XlwAHQ3f1kFvwWZli3olohfWROYhis4AJXboU29bEk6VZ3CPozWWO2zagKTsAUHIH9Cl4lLbUxDdwAwTPbhrIXiO9UEwQFoo5w2Pum2ZzfQ2me4SnfJAxxyj5wXAAxCrBu8aZ34i0kmg+LkkggANRHTiq8OidyHE28jfFzVculX5xk45gSAimiVvPkrl1c7De9y1FpJ6ya+MicAlAjAED9/Nb2ToJzM7uILADsuvgCgAWBX3vxl0eUTkIFg18SXGmDHxRcAFgDs4psvn4Cl+PN7kuPs4kzdNvD1TWv7ae2X9S92ug2gE3WXxN/pT4CIP68TGqkB1Pw53O95P/uGM2yST0uHEVDufr5de/MbawOoHTDFb6y9cIFyalbLbus3vxjB4DXAweVwilh93WwgWY3M6tbM7Yr4jXwC2rwkbNfFbwSAUGffGb3eFYlE/IYageokLIzgHBFbsy9AJ3736uIdEJ25gsXNr9s6xrXhkj54G8DFOde8utW7WvHHwzi/k9f1yWb5dauKzHL6S7W1ACyGd9UI3+OOHRF/FZytBEA3ti/i62uNrQNAxOd9HrYKANV/R8AP2YkdefOrgdgaAHSDN5skvvIfEGYudwDy3v2GuoE2TnHzqAspimP7oLmUyfbELq4/xfR1rf2lX74Pozbxe+NrgDJRb3r9tGzLX9vFV34KACbImoq6OE5Ff2IX80GWyU3f/KV5AYARaJMJG3WoQ90xbIxHspJyxZcagBVegDZfRGEjvgDAAGBRrX9nZGksqa34AgBDIpPqn2HOW9I68dWDqqbHpQ1gKEUbq38T8QUAQ4Grkumrf3WCBz71YN7KhKn4AoBVePOZitV/GnyEfgQwWQcEHPEFAA8ArFT/ixG/+eHLzULAFV8AcARAV/1nr3NtEgLSnBJiUjxpBJpEqSRN8ZIFAvo27Q062eRNQOByg6gA4ADAwWU8RMQ3P03o7/INCYGL+PIJcBBfZS0eO1t1m3cICFzFFwAcADCp/ovmfULgQ3wBwAEA0+o/BAS+xBcAXAAoXLBUVf37hMCn+AKAJQA21b8PCHyLLwBYAlCs/tPLG4Beqfv3OCYXu5RGiFi7VT2E+AIAR61MWt2lE9YQqFs+fsCkCoJQ4gsAFgBU3a/HgUC9/bAXvUYgtVgwc6df3qmQ4gsAFgB0x/E5AL4ty1oFQQoP4RsCODE5oyC0+AKABQAmB0xkIeiM//o1ouTEVHQAuiOC0eJ+HVabwqI4siCEEzTO9aoKAmXbZBGomkNAgFECMOQ2JDn+69LKXAAjgnXVP8MUqKlbjGCYEEyaFj3rpwDAUM2k+q8yR0SfCWEEDzDhXqXCcJOVVAAwDBen+v9p8vF7PlG3e2Vv9DB8bPBkAoBhiLuX8RkgvqtL/vg9V1X78WBUl37d/xcADBWoum8w/Z4jTNbRiDN0vzSZAGAYweLaP7UECxFGyb8wasv33LAouWQCgGHU0vV//0I/vbm7pd9zw6IIADaB2tY8UgNsq7KG5WonAJexmiLVHuSYDrMi/dH00SWG8dyoZHV7Gte2N7B7FZ8C4YfKQZX5UGvwsfKNUpTn7GHdMHWyT8+bHrtIj1FRU6XRHk555ZHUPiOgRi2nx4MTnzZNbD2eo+Nz3N3kwZImH4F1VP/Kg0cA0nN1a1bKiGhhIrCutz8HQPopEAjCKFxh1WaDqU8nc0epLSGI7uGsahWOTwd22ZZagURP4LTphl825isALP+5WEF7BghHCPhil4XyW/Z0xnJCEZy3oWtdCkC20OmCyv+0994fvwKFtdYG0bMl/D8Vvw6cFoKVHwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(415);
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

/***/ 444:
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
                    dispatch((0, _policyCompanyBuildAction.addCityModalVisible)({ addCityModalVisible: false })
                    // 表单数据回传给index页面处理 在此之前加上presetCityData中的id
                    );var data = {};
                    receiveCityDatasource(Object.assign(data, values, { id: _this.props.presetCityData.id }));
                    resetFields
                    // this.issueCertificateInputElement.refs.input.value = ''
                    ();
                }
            });
        };

        _this.generateRateOption = function () {
            var children = [];
            for (var i = 1; i <= 10; i++) {
                children.push(_react2.default.createElement(
                    _antd.Select.Option,
                    { value: i, key: i },
                    i + '\u5206'
                ));
            }
            return children;
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
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u4E8B\u6545\u6C47\u603B' }, formItemLayout),
                        getFieldDecorator('accidentCollection', {
                            initialValue: presetCityData ? presetCityData.accidentCollection : null
                        })(_react2.default.createElement(_antd.Input, { placeholder: '\u53D1\u751F\u4E8B\u6545\u7684\u6B21\u6570', addonAfter: _react2.default.createElement(
                                'span',
                                null,
                                '\u6B21'
                            ) }))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        _extends({ label: '\u670D\u52A1\u8BC4\u5206' }, formItemLayout),
                        getFieldDecorator('serviceRate', {
                            initialValue: presetCityData ? presetCityData.serviceRate : null
                        })(_react2.default.createElement(
                            _antd.Select,
                            { placeholder: '\u8BF7\u9009\u62E9' },
                            this.generateRateOption()
                        ))
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

/***/ 445:
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by YiShuai on 2017/6/6.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PopSelect = function (_Component) {
    _inherits(PopSelect, _Component);

    function PopSelect(props) {
        _classCallCheck(this, PopSelect);

        var _this = _possibleConstructorReturn(this, (PopSelect.__proto__ || Object.getPrototypeOf(PopSelect)).call(this, props));

        _this.pop = function () {
            _this.setState({
                popVisible: true
            });
        };

        _this.save = function () {
            // hasSecuredCustomer应为布尔值
            var _this$props = _this.props,
                defaultSelected = _this$props.defaultSelected,
                saveCallback = _this$props.saveCallback,
                policyPackageState = _this$props.policyPackageState,
                hasSecuredCustomer = _this$props.hasSecuredCustomer;
            var serviceStateChangedValue = _this.state.serviceStateChangedValue;
            // TODO 改变为正常服务和只减不增的前置条件：政策包状态正常；停止服务的前置条件：名下无在保人员；
            // 如果选项发生改变

            if (serviceStateChangedValue !== defaultSelected) {
                // 如果原本为停止服务
                if (defaultSelected === 3) {
                    // 改变为正常服务和只增不减的前提是 政策包正常2
                    if (policyPackageState === 2) saveCallback(serviceStateChangedValue);else _antd.Modal.error({ title: '该服务城市的政策包不正常，无法改变服务状态，否则会影响客户下单！' });
                }
                // 剩下为不是停止服务
                // 改变为停止服务的前提是 名下无在保人员
                if (!hasSecuredCustomer) {
                    saveCallback(serviceStateChangedValue);
                } else {
                    _antd.Modal.error({ title: '该服务城市还有正在服务中的参保人，状态不能设置为停止服务，否则可能会影响客户的续费！' });
                }
            }
            _this.setState({
                popVisible: false
            }
            // console.log('popselect', this.selectElement)
            );
        };

        _this.cancel = function () {
            _this.setState({
                popVisible: false
            });
        };

        _this.state = {
            popVisible: false,
            serviceStateChangedValue: null
        };
        return _this;
    }

    _createClass(PopSelect, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                defaultSelected = _props.defaultSelected,
                text = _props.text;

            return _react2.default.createElement(
                _antd.Popover,
                { visible: this.state.popVisible, content: _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            _antd.Select,
                            { defaultValue: defaultSelected, style: { minWidth: 100 },
                                onSelect: function onSelect(value) {
                                    return _this2.setState({ serviceStateChangedValue: value });
                                },
                                ref: function ref(selectElement) {
                                    return _this2.selectElement = selectElement;
                                } },
                            _react2.default.createElement(
                                _antd.Select.Option,
                                { value: 1 },
                                '\u6B63\u5E38\u670D\u52A1'
                            ),
                            _react2.default.createElement(
                                _antd.Select.Option,
                                { value: 2 },
                                '\u53EA\u51CF\u4E0D\u589E'
                            ),
                            _react2.default.createElement(
                                _antd.Select.Option,
                                { value: 3 },
                                '\u505C\u6B62\u670D\u52A1'
                            )
                        ),
                        _react2.default.createElement(
                            _antd.Button,
                            { style: { marginLeft: 4 }, type: 'primary', onClick: this.save },
                            '\u4FDD\u5B58'
                        ),
                        _react2.default.createElement(
                            _antd.Button,
                            { style: { marginLeft: 2 }, type: 'danger', onClick: this.cancel },
                            'X'
                        )
                    ) },
                _react2.default.createElement(
                    'a',
                    { onClick: this.pop },
                    text
                )
            );
        }
    }]);

    return PopSelect;
}(_react.Component);

exports.default = PopSelect;

/***/ })

});
//# sourceMappingURL=3.js.map