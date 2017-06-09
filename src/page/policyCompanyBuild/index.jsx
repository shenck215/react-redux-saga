import React, { Component } from 'react'
import style from '../../css/policyCompanyBuild/style.css'
import { connect } from 'react-redux'
import PolicyCompanyForm from './PolicyCompanyForm'
import AddCityModal from './AddCityModal'
import AddContactModal from './AddContactModal'
import {
    addContactModalVisible as addContactModalVisibleActionCreator,
    addCityModalVisible as addCityModalVisibleActionCreator,
    modifyCityDataSource, modifyContactDataSource,
    setPresetCityData, setPresetContactData,
    hasReceiverInThisCompany as hasReceiverInThisCompanyActionCreator,
    postNewCompanyInfo
} from '../../action/policyCompanyBuild/policyCompanyBuildAction'

class PolicyCompanyBuild extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isReceiver: false
        }
    }

    render() {
        const { isLoading, addCityModalVisible, addContactModalVisible, dispatch, cityDataSource,
            contactDataSource, presetCityData, presetContactData, responseStatus } = this.props
        return (
            <div>
                <h2 className={style.title}>新建服务商</h2>
                <PolicyCompanyForm
                    submit={(data) => this.submit(data)}
                    responseStatus={responseStatus}
                    loading={isLoading}
                    className={style.companyForm}
                    dispatch={dispatch}
                    cityDataSource={cityDataSource}
                    deleteCityDataSource={(index) => this.deleteCity(index)}
                    editCityDataSource={(index) => this.editCity(index)}
                    contactDataSource={contactDataSource}
                    deleteContactDataSource={(index) => this.deleteContact(index)}
                    editContactDataSource={(index) => this.editContact(index)}/>
                <AddCityModal
                    visible={addCityModalVisible}
                    dispatch={dispatch}
                    cancel={this.cancelAddCity}
                    receiveCityDatasource={(values) => this.receiveCityDatasource(values)}
                    presetCityData={presetCityData}/>
                <AddContactModal
                    visible={addContactModalVisible}
                    dispatch={dispatch}
                    cancel={this.cancelAddContact}
                    receiveContactDatasource={(values) => this.receiveContactDatasource(values)}
                    presetContactData={presetContactData}
                    hasReceiverInThisCompany={this.props.hasReceiverInThisCompany}
                    receiverIndex={this.props.receiverIndex}
                    isReceiver={this.state.isReceiver}/>
            </div>
        )
    }

    // 表单提交操作 从表单中传来除表格数据之外的其他数据 并从state中分别取到表格数据city和contact
    // 然后提交给saga
    submit = (data) => {
        const { city, contact, companyCityId, protocolAddonUrl, dispatch } = this.props // 存储在store中的表单数据
        const { companyName, companyAddress, cooperationTime, protocolAddon, remark } = data // 未缓存的表单数据
        // console.log('index page', companyName, companyCityId, companyAddress, cooperationTime, protocolAddon, remark, city, contact)
        dispatch(postNewCompanyInfo({
            companyName, companyCityId, companyAddress, cooperationTime, protocolAddonUrl, city, contact, remark
        }))
    }

    cancelAddContact = () => {
        const { dispatch } = this.props
        dispatch(addContactModalVisibleActionCreator({addContactModalVisible: false}))
        // 清除预设数据
        dispatch(setPresetContactData({presetContactData: null, presetContactDataIndex: null}))
    }

    cancelAddCity = () => {
        const { dispatch } = this.props
        dispatch(addCityModalVisibleActionCreator({addCityModalVisible: false}))
        // 清除预设数据
        dispatch(setPresetCityData({presetCityData: null, presetCityDataIndex: null}))
    }

    // 解析对话框输入数据 push进表格数据源
    receiveCityDatasource = (data) => {
        const { dispatch, presetCityData, cityDataSource, city, presetCityDataIndex } = this.props
        // 如果预设不为空 则是修改操作 否则为添加操作
        if (presetCityData) {
            city.splice(presetCityDataIndex, 1, data)
            cityDataSource.splice(presetCityDataIndex, 1, this.parsePropsToCityDataSource(data))
            dispatch(modifyCityDataSource({cityDataSource, city}))
            dispatch(setPresetCityData({presetCityData: null, presetCityDataIndex: null}))
        } else {
            city.push(data)
            const dataSource = this.parsePropsToCityDataSource(data)
            cityDataSource.push(dataSource)
            dispatch(modifyCityDataSource({cityDataSource, city}))
        }
    }

    // 对话框保存按钮
    receiveContactDatasource= (data) => {
        const { dispatch, presetContactData, contactDataSource, contact, presetContactDataIndex, hasReceiverInThisCompany } = this.props
        if (presetContactData) {
            let isReceiver = presetContactData.receiver
            // 修改相应索引数据
            contact.splice(presetContactDataIndex, 1, data)
            contactDataSource.splice(presetContactDataIndex, 1, this.parsePropsToContactDataSource(data))
            dispatch(modifyContactDataSource({contactDataSource, contact}))
            dispatch(setPresetContactData({presetContactData: null, presetContactDataIndex: null}))
            // 如果设置了接收人
            if (data.receiver === 1) {
                // 设置接收人索引
                dispatch(hasReceiverInThisCompanyActionCreator({hasReceiverInThisCompany: true, receiverIndex: presetContactDataIndex}))
            } else {
                // 接收人从是修改为否
                if (isReceiver === 1) {
                    dispatch(hasReceiverInThisCompanyActionCreator({hasReceiverInThisCompany: false, receiverIndex: null}))
                }
            }
        } else {
            // 添加一条数据
            contact.push(data)
            const dataSource = this.parsePropsToContactDataSource(data)
            contactDataSource.push(dataSource)
            dispatch(modifyContactDataSource({contactDataSource, contact}))
            if (data.receiver === 1) {
                // 设置接收人索引
                dispatch(hasReceiverInThisCompanyActionCreator({hasReceiverInThisCompany: true, receiverIndex: contactDataSource.length-1}))
                console.log('add receiver index', contactDataSource.length-1)
            }
        }

    }

    // 将对话框传来的数据转换成表格dataSource格式
    parsePropsToCityDataSource = (data) => {
        if (!data || !data.serviceCity) {
            return {}
        }
        let accountType = ['预收', '实缴']
        let accountMonth = ['当月', '次月', '双月']
        return {
            serviceCity: data.serviceCity.join('-'),
            accountAddress: data.accountAddress,
            serviceFee: data.serviceFee,
            accountType: data.accountType?accountType[data.accountType-1]:'-/-',
            accountMonth: data.accountMonth?accountMonth[data.accountMonth]:'-/-',
            payDay: data.payDay?data.payDay+'号':'-/-',
            issueCertificate: data.issueCertificate?data.issueCertificate:'-/-'
        }
    }

    // 将对话框传来的数据转换成表格dataSource格式
    parsePropsToContactDataSource = (data) => {
        if (!data || !data.contactName) {
            return {}
        }
        return {
            contactName: data.contactName,
            mobilePhoneNum: data.mobilePhoneNum,
            emailAddr: data.emailAddr,
            phoneNum: data.phoneNum?data.phoneNum:'-/-',
            qqNum: data.qqNum?data.qqNum:'-/-',
            receiver: data.receiver === 1?'是':'不是',
            remark: data.remark?data.remark:'-/-'
        }
    }

    // 监听form中的表格动作 删除对应城市
    deleteCity = (index) => {
        const { cityDataSource, city, dispatch } = this.props
        cityDataSource.splice(index, 1)
        city.splice(index, 1)
        dispatch(modifyCityDataSource({
            cityDataSource, city
        }))
    }

    // 监听form中的表格动作 删除对应联系人
    deleteContact = (index) => {
        const { contactDataSource, contact, dispatch } = this.props
        contactDataSource.splice(index, 1)
        contact.splice(index, 1)
        dispatch(modifyContactDataSource({
            contactDataSource, contact
        }))
    }

    // 监听form中表格动作 编辑对应城市
    editCity = (index) => {
        const { dispatch, city } = this.props
        console.log('index edit city' , city[index])
        // 点击编辑时改变预设数据内容 和内容索引
        dispatch(addCityModalVisibleActionCreator({addCityModalVisible: true}))
        dispatch(setPresetCityData({presetCityData: city[index], presetCityDataIndex: index}))
    }

    // 监听form中表格动作 编辑对应联系人
    editContact = (index) => {
        const { dispatch, contact, receiverIndex } = this.props
        console.log('index edit contact' , contact[index])
        // 点击编辑时改变预设数据内容 和内容索引
        dispatch(addContactModalVisibleActionCreator({addContactModalVisible: true}))
        dispatch(setPresetContactData({presetContactData: contact[index], presetContactDataIndex: index}))
        // 如果接受人索引等于编辑索引 设置isReceiver传给AddContactModal用于判断对话框中的“设置派单表接收人”是否可用
        if (index === receiverIndex) {
            this.setState({
                isReceiver: true
            })
        } else {
            this.setState({
                isReceiver: false
            })
        }
    }
}

function mapStateToProps(state) {
    const data = state.getIn(['policyCompanyBuildReducer'])
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
        protocolAddonUrl: data.getIn(['protocolAddonUrl']),
        responseStatus: data.getIn(['responseStatus'])
    }
}

export default connect(mapStateToProps)(PolicyCompanyBuild)
