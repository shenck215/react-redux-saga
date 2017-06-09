import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Row, Col, Input, Cascader, DatePicker, Tabs, Table, Pagination, Select, Popover, Modal } from 'antd'
import { browserHistory } from 'react-router'
import style from '../../css/policyCompanyDetail/style.css'
import edit from '../../images/policyCompanyDetail/edit.png'
import add from '../../images/policyCompanyDetail/add.png'
import AddContactModal from '../policyCompanyBuild/AddContactModal'
import AddCityModal from '../policyCompanyBuild/AddCityModal'
import EditCityModal from './EditCityModal'
import PopSelect from './PopSelect'
import {
    addCityModalVisible as addCityModalVisibleActionCreator, addContactModalVisible as addContactModalVisibleActionCreator,
    getPolicyCompanyDetail, putModifiedCompanyInfo, savingLoading, receivedPolicyCompanyDetail, toggleEditable,
    getServiceCity, getContact, getOperationLog, modifyServiceCityServiceState, deleteServiceCity as deleteServiceCityActionCreator,
    hasSecuredCustomerInServiceCity as hasSecuredCustomerInServiceCityActionCreator, addServiceCity, modifyServiceCity,
    addContact, modifyContact, deleteContact as deleteContactActionCreator, deleteCompany as deleteCompanyActionCreator,
    hasReceiverInThisCompany
} from '../../action/policyCompanyDetail/policyCompanyDetailAction'
import { Link } from 'react-router'

const FormItem = Form.Item
const { RangePicker } = DatePicker
let companyId

const options = [{
    value: '浙江',
    label: '浙江',
    children: [{
        value: '杭州',
        label: '杭州',
        children: [{
            value: '江干',
            label: '江干',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

const cityDataSourceExample = [{
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
    policyPackage: '',
}]

const contactDataSourceExample = [{
    id: 1,
    name: 'yis',
    mobile: '15100000000',
    qq: '10000',
    telephone: '35883599',
    email: '10000@qq.com',
    remark: '下雨不要忘记带伞',
    isRecipient: 0
}]

let presetCityDataSource = null
let presetContactDataSource = null

class PolicyCompanyDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            filterPolicyPackageState: null,
            filterServiceState: null,
            editCityModalVisible: false
        }
        companyId = props.location.query.id
        // 路由参数中获取从服务商列表页获取的服务商id 然后获取服务商详情信息
        props.dispatch(getPolicyCompanyDetail(companyId))
        // 获取初始服务城市信息
        props.dispatch(getServiceCity({
            companyId,
            cityCurrent: props.cityCurrent,
            pageSize: props.pageSize
        }))
    }

    render() {
        console.log('cityDatasource', this.props.cityDataSource)
        const {
            companyName, companyAddress, detailAddress, cooperationTime, protocolFileUrl,
            remark, dispatch, addCityModalVisible, addContactModalVisible, savingLoading,
            hasSecuredCustomerInServiceCity, hasReceiverInThisCompany, cityDataSource, contactDataSource, operationDataSource
        } = this.props
        const { getFieldDecorator } = this.props.form
        const formItemlayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 18 }
        }
        // 服务城市tab表格列
        const columnsCity = [{
            title: '服务城市',
            dataIndex: 'serviceCity',
            key: 'serviceCity'
        }, {
            title: '开户地区',
            dataIndex: 'accountAddress',
            key: 'accountAddress'
        }, {
            title: <Select placeholder="服务状态" style={{minWidth: 100}} onSelect={(value) => this.filterByServiceState(value)}>
                <Select.Option value={1}>正常服务</Select.Option>
                <Select.Option value={2}>只减不增</Select.Option>
                <Select.Option value={3}>停止服务</Select.Option>
            </Select>,
            dataIndex: 'serviceState',
            key: 'serviceState',
            render: (text, record) => <PopSelect
                saveCallback={(serviceStateChangedValue) => this.modifyServiceState(serviceStateChangedValue, record)}
                defaultSelected={record.serviceStateOriginal}
                policyPackageState={record.policyPackageStateOriginal}
                text={text}
                dispatchHasSecuredCustomerInServiceCity={dispatch(hasSecuredCustomerInServiceCityActionCreator(record.id))}
                hasSecuredCustomer={hasSecuredCustomerInServiceCity}/>
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
            render: (text, record) => <Popover content={text} trigger="click"><a>查看</a></Popover>
        }, {
            title: '事故汇总',
            dataIndex: 'accidentCollection',
            key: 'accidentCollection'
        }, {
            title: '服务评分',
            dataIndex: 'serviceRate',
            key: 'serviceRate'
        }, {
            title: <Select placeholder="政策包状态" style={{ minWidth: 100 }} onChange={this.filterByPolicyPackageState}>
                <Select.Option value={0}>未设置</Select.Option>
                <Select.Option value={2}>正常</Select.Option>
                <Select.Option value={1}>异常</Select.Option>
            </Select>,
            dataIndex: 'policyPackageState',
            key: 'policyPackageState',
            render: (text) => <span style={(() => {
                switch (text) {
                    case '未设置':
                    case '异常':
                        return {color: 'red'}
                    case '正常':
                        return {}
                }
            })()}>{text}</span>
        }, {
            title: '政策包',
            dataIndex: 'policyPackage',
            key: 'policyPackage',
            render: (text, record) => <Link to="">{text}</Link>
        }, {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => <span>
                <a onClick={() => this.editServiceCity(record.id)}>编辑</a>&nbsp;|&nbsp;
                <a onClick={() => this.deleteServiceCity(record.id, record.serviceStateOriginal)}>删除</a></span>
        }]

        // 联系人tab表格列
        const columnsContact = [{
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
            render: (text, record) => <span>
                <a onClick={() => this.editContact(record.id)}>编辑</a>&nbsp;|&nbsp;
                <a onClick={() => this.deleteContact(record.id)}>删除</a></span>
        }]

        // 操作日志表格列
        const columnsLog = [{
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
        }]

        // 服务城市分页器
        const paginationCity = {
            current: this.props.cityCurrent,
            total: this.props.cityTotal,
            pageSize: this.props.pageSize,
            showQuickJumper: true,
            onChange: (cityCurrent, pageSize) => {
                dispatch(getServiceCity({
                    companyId, cityCurrent, pageSize,
                    serviceState: this.state.filterServiceState,
                    policyPackageState: this.state.filterPolicyPackageState
                }))
            }
        }
        // 联系人分页器
        const paginationContact = {
            current: this.props.contactCurrent,
            total: this.props.contactTotal,
            pageSize: this.props.pageSize,
            showQuickJumper: true,
            onChange: (contactCurrent, pageSize) => {
                dispatch(getContact({companyId, contactCurrent, pageSize}))
            }
        }

        // 操作日志分页器
        const paginationLog = {
            current: this.props.operationCurrent,
            total: this.props.operationTotal,
            pageSize: this.props.pageSize,
            showQuickJumper: true,
            onChange: (operationCurrent, pageSize) => {
                dispatch(getOperationLog({companyId, operationCurrent, pageSize}))
            }
        }

        return (
            <div>
                <div className={style.title}>
                    <div className={style.left}>
                        <Button type="primary" onClick={() => {browserHistory.replace('/jsp/react/policycompany/policycompanylist')}}>返回</Button>
                        <span className={style.desc}>查看服务商：</span>
                        <span className={style.companyName}>{companyName}</span>
                    </div>
                    <Button type="danger" className={style.right} onClick={this.deleteCompany}>删除</Button>
                    <div className={style.clear}/>
                </div>

                <div className={style.baseInfo}>
                    <h4>基本信息</h4>
                    <img src={edit} onClick={this.edit} style={this.props.editable ? {display: "none"} : {}}/>
                </div>

                {/*显示状态下的服务商详细信息*/}
                <Form className={style.form} layout="inline" style={this.props.editable ? {display: 'none'} : {}}>
                    <Row>
                        <Col span={12}>
                            <FormItem label="服务商名称">
                                {
                                    getFieldDecorator('companyName')(
                                        <span>{companyName}</span>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label="所在地区">
                                {
                                    getFieldDecorator('companyAddress')(
                                        <span>{companyAddress}</span>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label="详细地址">
                                {
                                    getFieldDecorator('detailAddress')(
                                        <span>{detailAddress}</span>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label="合作时间">
                                {
                                    getFieldDecorator('cooperationTime')(
                                        <span>{cooperationTime}</span>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label="协议文件">
                                {
                                    getFieldDecorator('protocolFileUrl')(
                                        <a target="_blank" href={protocolFileUrl}>查看</a>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label="备注说明" >
                                {
                                    getFieldDecorator('remark')(
                                        <span>{remark}</span>
                                    )
                                }
                            </FormItem>
                        </Col>
                    </Row>
                </Form>

                {/*编辑状态下的服务商信息*/}
                <Form className={style.form} layout="inline" style={this.props.editable ? {backgroundColor: "#f0f0f0"} : {display: 'none'}}>
                    <Row>
                        <Col span={12}>
                            <FormItem label="服务商名称" {...formItemlayout}>
                                {
                                    getFieldDecorator('companyName', {
                                        rules: [{ required: true, message: '服务商名称不能为空' }, { message: '服务商名称控制在4~40字', min: 4, max: 40 }],
                                        initialValue: companyName
                                    })(
                                        <Input type="text" placeholder="服务商名称" style={{width: 300}}/>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem label="所在地区" {...formItemlayout}>
                                {
                                    getFieldDecorator('companyAddress', {
                                        defaultValue: companyAddress.split('-'),
                                        rules: [{ required: true, message: '请选择所在地区' }]
                                    })(
                                        <Cascader placeholder="请选择" options={options} style={{width: 300}}/>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={12} style={{marginTop: 20}}>
                            <FormItem label="详细地址" {...formItemlayout}>
                                {
                                    getFieldDecorator('detailAddress', {
                                        rules: [{ required: true, message: '请填写详细地址' }],
                                        initialValue: detailAddress
                                    })(
                                        <Input type="text" placeholder="详细地址" style={{width: 300}}/>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={12} style={{marginTop: 20}}>
                            <FormItem label="合作时间" {...formItemlayout} style={{width: 400}}>
                                {
                                    getFieldDecorator('cooperationTime')(
                                        <RangePicker placeholder={['合作开始日期', '合作结束日期']}/>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={12} style={{marginTop: 20}}>
                            <FormItem label="协议文件" {...formItemlayout}  style={{width: 300}}>
                                {
                                    getFieldDecorator('protocolFileUrl')(
                                        <a href={this.props.protocolFileUrl}>查看</a>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={12} style={{marginTop: 20}}>
                            <FormItem label="备注说明" {...formItemlayout}>
                                {
                                    getFieldDecorator('remark')(
                                        <Input type="text" placeholder="备注" style={{width: 300}}/>
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={24} style={{marginTop: 20}} offset={1}>
                            <Button type="primary" size="small" onClick={this.save} loading={savingLoading}>保存</Button>
                            <Button type="default" size="small" onClick={this.cancelModifyBaseInfo} style={{marginLeft: 10}}>取消</Button>
                        </Col>
                    </Row>
                </Form>

                <Tabs type="card" animated style={{marginTop: 10}} onChange={(tabName) => this.handleTabsChange(tabName)}>
                    <Tabs.TabPane tab="服务城市" key="city">
                        <Table
                            columns={columnsCity}
                            size="default"
                            bordered={true}
                            dataSource={this.processCityDataToTableDataSource(cityDataSource)}
                            pagination={paginationCity}
                            title={() => <div style={{textAlign: "right"}}>
                                <img src={add} style={{cursor: "pointer"}} onClick={this.showAddCityModal}/>
                            </div>}/>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="联系人信息" key="contact">
                        <Table
                            columns={columnsContact}
                            size="default"
                            bordered={true}
                            dataSource={this.processContactDataToTableDataSource(contactDataSource)}
                            pagination={paginationContact}
                            title={() => <div style={{textAlign: "right"}}>
                                <img src={add} style={{cursor: "pointer"}} onClick={this.showAddContactModal}/>
                            </div>}/>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="操作日志" key="log">
                        <Table columns={columnsLog} size="default" dataSource={operationDataSource} pagination={paginationLog} bordered={true}/>
                    </Tabs.TabPane>
                </Tabs>

                <AddCityModal
                    dispatch={dispatch}
                    visible={addCityModalVisible}
                    cancel={this.cancelAddCity}
                    receiveCityDatasource={(values) => this.receiveCityDatasource(values)}/>
                <EditCityModal
                    visible={this.state.editCityModalVisible}
                    dispatch={dispatch}
                    presetCityData={presetCityDataSource}
                    cancel={this.cancelEditCity}
                    receiveCityDatasource={(values) => this.receiveEditedCityDatasource(values)}/>
                <AddContactModal
                    dispatch={dispatch}
                    visible={addContactModalVisible}
                    cancel={this.cancelAddContact}
                    hasReceiverInThisCompany={hasReceiverInThisCompany}
                    presetContactData={presetContactDataSource}
                    receiveContactDatasource={(values) => this.receiveContactDatasource(values)}/>
            </div>
        )
    }

    edit = () => {
        this.props.dispatch(toggleEditable(true))
    }

    // 删除服务商
    deleteCompany = () => {
        const { dispatch, cityDataSource } = this.props
        if (!cityDataSource || cityDataSource.size === 0) {
            Modal.warn({
                title: '确认删除此服务商？',
                okText: '是的',
                maskClosable: true,
                onOk: () => {
                    console.log('已删除')
                }
            })
        } else {
            Modal.error({
                title: '服务商下有服务城市，不可直接删除！',
                maskClosable: true
            })
        }

    }

    editServiceCity = (id) => {
        // 找到要编辑的数据
        this.searchCityDataFromCityDataSourceById(id)
        // 把数据转换为适合对话框展示的数据
        presetCityDataSource = this.processPresetCityDataToModalData(presetCityDataSource)
        this.setState({
            editCityModalVisible: true
        })
    }

    handleTabsChange = (tabName) => {
        const { contactCurrent, pageSize, dispatch, operationCurrent } = this.props
        if (tabName === 'contact') {
            dispatch(getContact({
                companyId,
                contactCurrent,
                pageSize
            }))
        } else if (tabName === 'log') {
            dispatch(getOperationLog({
                companyId,
                operationCurrent,
                pageSize
            }))
        }
    }

    cancelEditCity = () => {
        this.setState({
            editCityModalVisible: false
        })
    }

    // 根据要编辑的信息id找到信息
    searchCityDataFromCityDataSourceById = (id) => {
        const { cityDataSource } = this.props
        // TODO 修改为cityDataSource
        cityDataSourceExample.forEach((item, index) => {
            console.log('searchCityDataFromCityDataSourceById', item, index)
            if (item.id === id)
                presetCityDataSource = item
        })
    }

    // 将数据库返回数据转换为适合对话框转换的数据
    processPresetCityDataToModalData = (presetCityData) => {
        const { id, serviceCity, accountAddress, serviceFee, billingType, billingMonth, payDay, issueCertificate, accidentCollection, serviceRate } = presetCityData
        return {
            serviceCity, accountAddress, serviceFee, payDay,
            issueCertificate, serviceRate, accidentCollection, id, // 加上id 虽然在对话框中没用 但在对话框将修改数据返回时要靠这个id去服务器修改相应数据
            accountType: billingType,
            accountMonth: billingMonth,
        }
    }

    save = () => {
        const { validateFields } = this.props.form
        validateFields((err, value) => {
            if (!err) {
                this.props.dispatch(savingLoading(true))
                // 修改页面数据
                this.props.dispatch(receivedPolicyCompanyDetail(value))
                // 向服务器发起修改请求
                this.props.dispatch(putModifiedCompanyInfo(value))
            }
        })
    }

    // 从添加城市对话框传回的数据 然后请求服务器添加城市
    receiveCityDatasource = (data) => {
        const { pageSize, cityCurrent, dispatch } = this.props
        // 对话框数据请求服务器
        // this.props.dispatch(addServiceCity({
        //     companyId,
        //     ...data
        // }))
        // this.props.dispatch(getServiceCity({
        //     companyId,
        //     pageSize,
        //     cityCurrent,
        //     serviceState: this.state.filterServiceState,
        //     policyPackageState: this.state.filterPolicyPackageState
        // }))
        new Promise((resolve) => {
            dispatch(addServiceCity({
                resolve,
                companyId,
                ...data
            }))
        }).then(() => {
            dispatch(getServiceCity({
                companyId,
                pageSize,
                cityCurrent,
                serviceState: this.state.filterServiceState,
                policyPackageState: this.state.filterPolicyPackageState
            }))
        })
    }

    // 从编辑城市对话框传过来的数据
    receiveEditedCityDatasource = (data) => {
        const { dispatch, cityCurrent, pageSize } = this.props
        this.setState({
            editCityModalVisible: false
        })
        // TODO 请求服务器 修改城市
        dispatch(modifyServiceCity({ ...data, companyId }))
        dispatch(getServiceCity({
            companyId,
            cityCurrent,
            pageSize,
            serviceState: this.state.filterServiceState,
            policyPackageState: this.state.filterPolicyPackageState
        }))
    }

    // 从添加联系人对话框传过来的数据
    receiveContactDatasource = (values) => {
        const { dispatch, contactCurrent, pageSize } = this.props
        new Promise((resolve) => {
            if (presetContactDataSource) {
                dispatch(modifyContact({
                    resolve,
                    companyId,
                    ...values
                }))
            } else {
                dispatch(addContact({
                    resolve,
                    companyId,
                    ...values
                }))
            }
        }).then(() => {
            // 重新获取联系人数据
            dispatch(getContact({
                companyId,
                contactCurrent,
                pageSize
            }))
        })
        // 置空 区别添加和修改 并防止添加联系人的对话框被预设数据污染
        presetContactDataSource = null
    }

    // 编辑联系人
    editContact = (id) => {
        // 找到要编辑的数据
        this._searchContactDataFromContactDataSourceById(id)
        // 把数据转换为适合对话框展示的数据
        presetContactDataSource = this.processPresetContactDataToModalData(presetContactDataSource)
        this.props.dispatch(addContactModalVisibleActionCreator({addContactModalVisible: true}))
        // 对话框显示后将预设数据不要置为空  在对话框上点击取消或确定后置空
        // presetContactDataSource = null
    }

    // 删除联系人
    deleteContact = (id) => {
        Modal.warn({
            title: '确定删除次服务商联系人',
            onOk: () => {
                this.props.dispatch(deleteContactActionCreator({id, companyId}))
            },
            maskClosable: true,
            okText: '是的'
        })
    }

    // 编辑联系人时 根据表格索引查找联系人数据
    _searchContactDataFromContactDataSourceById = (id) => {
        const { contactDataSource } = this.props
        // TODO 将contactDataSourceExample替换为contactDataSource
        contactDataSource.forEach((item) => {
            if (item.id === id) {
                presetContactDataSource = item
            }
        })
    }

    // 将数据库返回数据转换为适合对话框转换的数据
    processPresetContactDataToModalData = (contactDataSource) => {
        const { id, name, mobile, qq, telephone, email, remark, isRecipient } = contactDataSource
        return {
            id,
            contactName: name,
            mobilePhoneNum: mobile,
            emailAddr: email,
            phoneNum: telephone,
            qqNum: qq,
            receiver: isRecipient,
            remark
        }
    }


    // 取消修改
    cancelModifyBaseInfo = () => {
        this.props.form.resetFields()
        this.props.dispatch(toggleEditable(false))
    }
    // 取消添加联系人
    cancelAddContact = () => {
        const { dispatch } = this.props
        // 置空 防止添加联系人的对话框被预设数据污染
        presetContactDataSource = null
        dispatch(addContactModalVisibleActionCreator({addContactModalVisible: false}))
    }
    // 取消添加服务城市
    cancelAddCity = () => {
        const { dispatch } = this.props
        dispatch(addCityModalVisibleActionCreator({addCityModalVisible: false}))
    }
    // 添加联系人对话框
    showAddContactModal = () => {
        const { dispatch } = this.props
        dispatch(addContactModalVisibleActionCreator({addContactModalVisible: true}))
    }
    // 添加城市对话框
    showAddCityModal = () => {
        const { dispatch } = this.props
        dispatch(addCityModalVisibleActionCreator({addCityModalVisible: true}))
    }

    // 根据政策包状态筛选服务城市
    filterByPolicyPackageState = (value) => {
        this.setState({filterPolicyPackageState: value})
        const { dispatch, pageSize, cityCurrent } = this.props
        dispatch(getServiceCity({
            companyId,
            pageSize,
            cityCurrent,
            serviceState: this.state.filterServiceState,
            policyPackageState: value
        }))
    }

    // 根据服务状态筛选服务城市
    filterByServiceState = (value) => {
        this.setState({filterServiceState: value})
        const { dispatch, pageSize, cityCurrent } = this.props
        dispatch(getServiceCity({
            companyId,
            pageSize,
            cityCurrent,
            serviceState: value,
            policyPackageState: this.state.policyPackageState
        }))
    }

    // 将服务器返回数据转为表格显示数据 - 服务城市
    processCityDataToTableDataSource = (cityDataArr) => {
        if (cityDataArr) {

            return cityDataArr.map((cityData) => ({
                serviceCity: cityData.serviceArea,
                accountAddress: cityData.areaId ? cityData.areaId : '-/-',
                serviceState: (() => {
                    switch (cityData.serviceStatus) {
                        case 1:
                            return '正常服务'
                        case 2:
                            return '只减不增'
                        case 3:
                            return '停止服务'
                        default:
                            return '-/-'
                    }
                })(), // 0 未设置 1 异常 2 正常
                serviceFee: cityData.serviceCharge ? cityData.serviceCharge : '-/-',
                billingType: (() => {
                    switch (cityData.billingType) {
                        case 1:
                            return '预收'
                        case 2:
                            return '实缴'
                        default:
                            return '-/-'
                    }
                })(), // 1 预收 2 实缴
                billingMonth: (() => {
                    switch (cityData.billingMonth) {
                        case 0:
                            return '当月'
                        case 1:
                            return '次月'
                        case 2:
                            return '双月'
                        default:
                            return '-/-'
                    }
                })(), // 0 当月 1 次月 2 双月
                payDay: cityData.payDate ? cityData.payDate + '号' : '-/-',
                issueCertificate: cityData.prove ? cityData.prove : '-/-',
                accidentCollection: cityData.accident ? cityData.accident : '-/-',
                serviceRate: cityData.score ? cityData.score : '-/-', //
                policyPackageState: (() => {
                    switch (cityData.strategyStatus) {
                        case 0:
                            return '未设置'
                        case 1:
                            return '异常'
                        case 2:
                            return '正常'
                        default:
                            return '-/-'
                    }
                })(),
                policyPackage: (() => {
                    switch (cityData.strategyStatus) {
                        case 1:
                        case 2:
                            return '查看'
                        case 0:
                            return '设置'
                        default:
                            return '-/-'
                    }
                })(),
                // 冗余数据
                id: cityData.id,
                serviceStateOriginal: cityData.serviceStatus,
                policyPackageStateOriginal: cityData.strategyStatus
            }))
        }
    }

    // 将服务器返回的联系人数据转换为表格数据源 - 联系人
    processContactDataToTableDataSource = (contactDataArr) => contactDataArr.map((contact) => ({
        name: contact.name,
        mobile: contact.mobile ? contact.mobile : '-/-',
        qq: contact.qq ? contact.qq : '-/-',
        telephone: contact.telephone ? contact.telephone : '-/-',
        email: contact.email ? contact.email : '-/-',
        remark: contact.remark ? contact.remark : '-/-',
        receiver: (() => {
            switch (contact.isRecipient) {
                case 0:
                    return '不是'
                case 1:
                    return '是'
                default:
                    return '-/-'
            }
        })(),
        // 冗余数据 表格不显示该字段 但请求时可以用到
        id: contact.id,
        receiverOriginal: contact.isRecipient
    }))

    // 修改服务状态
    modifyServiceState = (serviceStateChangedValue, record) => {
        const { dispatch, pageSize, cityCurrent } = this.props
        new Promise((resolve) => {
            dispatch(
                modifyServiceCityServiceState({
                    id: record.id,
                    oldServiceState: record.serviceStateOriginal,
                    serviceState: serviceStateChangedValue,
                    resolve
                })
            )
        }).then(() => {
            dispatch(getServiceCity({
                companyId,
                pageSize,
                cityCurrent,
                serviceState: this.state.filterServiceState,
                policyPackageState: this.state.filterPolicyPackageState
            }))
        })
    }

    // 删除服务城市操作
    deleteServiceCity = (id, serviceState) => {
        const { dispatch, cityCurrent, pageSize } = this.props
        const { filterServiceState, filterPolicyPackageState } = this.state
        if (serviceState === 3) {
            // TODO 删除服务城市
            Modal.confirm({
                title: '确认删除此服务城市',
                onOk() {
                    new Promise((resolve) => {
                        dispatch(deleteServiceCityActionCreator({id, companyId, resolve}))
                    }).then(() => {
                        dispatch(getServiceCity({
                            companyId,
                            pageSize,
                            cityCurrent,
                            serviceState: filterServiceState,
                            policyPackageState: filterPolicyPackageState
                        }))
                    })
                }
            })
        } else {
            Modal.warn({
                title: '只有停止服务的城市可以删除'
            })
        }
    }
}

const PolicyCompanyDetailWrapper = Form.create()(PolicyCompanyDetail)

function mapStateToProps(state) {
    const data = state.getIn(['policyCompanyDetailReducer'])
    console.log('lalalala', data.getIn(['operationDataSource']).toJS())
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
        cityDataSource: data.getIn(['cityDataSource']).toJS(),
        cityCurrent: data.getIn(['cityCurrent']),
        cityTotal: data.getIn(['cityTotal']),
        hasSecuredCustomerInServiceCity: data.getIn(['hasSecuredCustomerInServiceCity']),
        // 联系人列表数据
        contactDataSource: data.getIn(['contactDataSource']).toJS(),
        contactCurrent: data.getIn(['contactCurrent']),
        contactTotal: data.getIn(['contactTotal']),
        // 操作日志列表数据
        operationDataSource: data.getIn(['operationDataSource']).toJS(),
        operationCurrent: data.getIn(['operationCurrent']),
        operationTotal: data.getIn(['operationTotal']),
        // TODO 做不到
        hasReceiverInThisCompany: data.getIn(['hasReceiverInThisCompany'])
    }
}

export default connect(mapStateToProps)(PolicyCompanyDetailWrapper)