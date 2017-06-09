/**
 * Created by YiShuai on 2017/6/1.
 */
import * as Immutable from 'immutable'
import {
    RECEIVED_POLICY_COMPANY_DETAIL, IS_LOADING, ADD_CITY_MODAL_VISIBLE, ADD_CONTACT_MODAL_VISIBLE,
    SAVING_LOADING, TOGGLE_EDITABLE, RECEIVE_SERVICE_CITY, RECEIVE_CONTACT, RECEIVE_OPERATION_LOG,
    MODIFY_SERVICE_CITY_SERVICE_STATE_SUCCESS, HAS_SECURED_CUSTOMER_IN_SERVICE_CITY_RESULT
} from '../../action/policyCompanyDetail/policyCompanyDetailAction'

const initialState = Immutable.fromJS({
    id: 1,
    companyName: '杭州今元嘉和人力资源有限公司',
    companyAddress: '浙江-杭州-江干',
    detailAddress: '凯旋路18号',
    cooperationTime: '2013-12-2至2018-12-3',
    protocolFileUrl: 'http://baidu.com',
    remark: 'nothing',
    addCityModalVisible: false,
    addContactModalVisible: false,
    editable: false,
    savingLoading: false,
    // 表格数据
    pageSize: 1,
    // 服务城市列表
    cityDataSource: [],
    cityCurrent: 1,
    cityTotal: 0,
    cityRowCount: 0,
    hasSecuredCustomerInServiceCity: null,
    // 联系人列表
    contactDataSource: [],
    contactCurrent: 1,
    contactTotal: 0,
    contactRowCount: 0,
    // 操作日志
    operationDataSource: [],
    operationCurrent: 1,
    operationTotal: 0,
    operationRowCount: 0,
    // 联系人中是否有派单表接收人
    hasReceiverInThisCompany: false
})

function processCompanyServiceCityResponsePayload(payload) {
    if (payload) {
        return payload
    } else {
        return {
            cityDataSource: [],
            pageSize: initialState.getIn(['pageSize']),
            cityCurrent: initialState.getIn(['cityCurrent']),
            cityTotal: initialState.getIn(['cityTotal'])
        }
    }
}

function processCompanyContactResponsePayload(payload) {
    if (payload) {
        return payload
    } else {
        return {
            contactDataSource: [],
            pageSize: initialState.getIn(['pageSize']),
            contactCurrent: initialState.getIn(['contactCurrent']),
            contactTotal: initialState.getIn(['contactTotal'])
        }
    }
}

function processOperationLogResponsePayload(payload) {
    if (payload) {
        return payload
    } else {
        return {
            operationDataSource: [],
            pageSize: initialState.getIn(['pageSize']),
            operationCurrent: initialState.getIn(['operationCurrent']),
            operationTotal: initialState.getIn(['operationTotal'])
        }
    }
}

export const policyCompanyDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_POLICY_COMPANY_DETAIL:
            const { companyName, companyAddress, detailAddress, cooperationTime, protocolFileUrl, remark } = action.payload
            return state.updateIn(['companyName'], () => companyName)
                .updateIn(['companyAddress'], () => companyName)
                .updateIn(['detailAddress'], () => detailAddress)
                .updateIn(['cooperationTime'], () => cooperationTime)
                .updateIn(['protocolFileUrl'], () => protocolFileUrl)
                .updateIn(['remark'], () => remark)
        case IS_LOADING:
            return
        case ADD_CITY_MODAL_VISIBLE:
            const { addCityModalVisible } = action.payload
            return state.updateIn(['addCityModalVisible'], () => addCityModalVisible)
        case ADD_CONTACT_MODAL_VISIBLE:
        const { addContactModalVisible } = action.payload
        return state.updateIn(['addContactModalVisible'], () => addContactModalVisible)
        case SAVING_LOADING:
            return state.updateIn(['savingLoading'], () => action.payload)
        case TOGGLE_EDITABLE:
            return state.updateIn(['editable'], () => action.payload)
        // 服务器返回城市列表数据
        case RECEIVE_SERVICE_CITY:
            const { cityCurrent, cityTotal, cityDataSource, pageSize } = processCompanyServiceCityResponsePayload(action.payload)
            return state.updateIn(['cityDataSource'], () => Immutable.fromJS(cityDataSource))
                .updateIn(['cityCurrent'], () => cityCurrent)
                .updateIn(['pageSize'], () => pageSize)
                .updateIn(['cityTotal'], () => cityTotal)
        // 服务器返回联系人列表数据
        case RECEIVE_CONTACT:
            const contactData = processCompanyContactResponsePayload(action.payload)
            const { contactCurrent, contactTotal, contactDataSource } = contactData
            return state.updateIn(['contactDataSource'], () => Immutable.fromJS(contactDataSource))
                .updateIn(['contactCurrent'], () => contactCurrent)
                .updateIn(['contactTotal'], () => contactTotal)
                .updateIn(['pageSize'], () => contactData.pageSize)
        // 服务器返回操作日志列表数据
        case RECEIVE_OPERATION_LOG:
            const operationData = processOperationLogResponsePayload(action.payload)
            const { operationCurrent, operationTotal, operationDataSource } = operationData
            console.log('operationCurrent, operationTotal, operationDataSource', operationCurrent, operationTotal, operationDataSource)
            return state.updateIn(['operationDataSource'], () => Immutable.fromJS(operationDataSource))
                .updateIn(['operationCurrent'], () => operationCurrent)
                .updateIn(['operationTotal'], () => operationTotal)
                .updateIn(['pageSize'], () => operationData.pageSize)
        case HAS_SECURED_CUSTOMER_IN_SERVICE_CITY_RESULT:
            return state.updateIn(['hasSecuredCustomerInServiceCity'], action.payload)
        default:
            return state
    }
}