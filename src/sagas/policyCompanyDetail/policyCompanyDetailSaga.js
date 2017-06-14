/**
 * Created by YiShuai on 2017/6/1.
 */
import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'
import {
    GET_POLICY_COMPANY_DETAIL, receivedPolicyCompanyDetail, PUT_MODIFIED_COMPANY_INFO, DELETE_COMPANY, toggleEditable, savingLoading,
    GET_SERVICE_CITY, receiveServiceCity, GET_CONTACT, receiveContact, GET_OPERATION_LOG, receiveOperationLog,
    MODIFY_SERVICE_CITY_SERVICE_STATE, modifyServiceCityServiceStateSuccess, DELETE_SERVICE_CITY, HAS_SECURED_CUSTOMER_IN_SERVICE_CITY,
    hasSecuredCustomerInServiceCityResult, ADD_SERVICE_CITY, MODIFY_SERVICE_CITY, ADD_CONTACT, MODIFY_CONTACT, DELETE_CONTACT
} from '../../action/policyCompanyDetail/policyCompanyDetailAction'
import {
    getPolicyCompanyDetail, putPolicyCompanyInfo, getCompanyCityList, deleteCompany, getCompanyContactList,
    getCompanyOperationLogList, modifyServiceStatus, deleteServiceCity, hasSecuredCustomerInServiceCity,
    addServiceCity, modifyServiceCity, addContact, modifyContact, deleteContact
} from '../../api/policyCompanyDetail/policyCompanyDetailApi'
import { message } from 'antd'
import { unixToFormatedDataTime } from '../../page/policyCompany/utils'

function processCompanyDetailResponseDataToProps(response) {
    if (response && response.data) {
        return {
            companyName: response.data.companyName,
            companyAddress: response.data.companyAddress,
            detailAddress: response.data.detailAddress,
            cooperationTime: [response.data.cooperateStartTime, response.data.cooperateEndTime],
            protocolFileUrl: response.data.attachment,
            remark: response.data.remark,
        }
    }
}

// 转换为城市列表请求参数
function processGetCityPropsToRequestParam(payload) {
    const { companyId, cityCurrent, pageSize } = payload
    return {
        start: (cityCurrent-1)*pageSize,
        pageSize: pageSize,
        companyId,
        // serviceAreaId: payload.serviceCity,
        // areaId: payload.accountAddress,
        serviceStatus: payload.serviceState,
        strategyStatus: payload.policyPackageState
    }
}

// 转换为log请求参数
function processGetLogPropsToRequestParam(payload) {
    const { companyId, operationCurrent, pageSize } = payload
    return {
        start: (operationCurrent-1)*pageSize,
        pageSize: pageSize,
        companyId,
        serviceAreaId: payload.serviceCity,
        areaId: payload.accountAddress,
        serviceStatus: payload.serviceState,
        strategyStatus: payload.policyPackageState
    }
}

// 修改城市服务状态
function processModifyServiceCityServiceStatePropsToRequestParam(payload) {
    const { id, oldServiceState, serviceState } = payload
    return {
        id,
        oldServiceStatus: oldServiceState,
        serviceStatus: serviceState
    }
}

// 删除城市
function processDeleteServiceCityPropsToRequestParam(payload) {
    const { id, companyId } = payload
    return { id, companyId }
}

// 添加城市
function processAddServiceCityPropsToRequestParam(payload) {
    const { companyId, accountAddress, accountMonth, accountType, issueCertificate, payDay, serviceCity, serviceFee} = payload
    return {
        companyId,
        serviceAreaId: 3,//serviceCity,
        areaId: 0,//accountAddress,
        billMonth: accountMonth,
        billType: accountType,
        payDate: payDay,
        serviceCharge: serviceFee,
        prove: issueCertificate
    }
}

// 城市列表响应结果转为props
function processServiceCityResponseToProps(response) {
    if (response && response.data) {
        return {
            cityDataSource: response.data.records,
            pageSize: response.data.pageSize,
            cityCurrent: response.data.pageNow,
            cityTotal: response.data.rowCount
        }
    }
}

// 联系人列表响应结果转为props
function processContactResponseToProps(response) {
    if (response && response.data) {
        return {
            contactDataSource: response.data.records,
            pageSize: response.data.pageSize,
            contactCurrent: response.data.pageNow,
            contactTotal: response.data.rowCount
        }
    }
}

// 编辑城市
function processModifyServiceCityPropsToRequestParam(payload) {
    const { companyId, id, accountAddress, accountMonth, accountType, issueCertificate, payDay, serviceCity, serviceFee, accidentCollection, serviceRate} = payload
    return {
        companyId,
        id,
        serviceAreaId:  0,//serviceCity,
        areaId: 0,//accountAddress,
        billMonth: accountMonth,
        billType: accountType,
        payDate: payDay,
        serviceCharge: serviceFee,
        prove: issueCertificate,
        accident: accidentCollection,
        score: serviceRate
    }
}

//联系人列表
function processGetContactPropsToRequestParam(payload) {
    const { companyId, contactCurrent, pageSize } = payload
    return {
        start: (contactCurrent-1)*pageSize,
        pageSize: pageSize,
        companyId,
        serviceAreaId: payload.serviceCity,
        areaId: payload.accountAddress,
        serviceStatus: payload.serviceState,
        strategyStatus: payload.policyPackageState
    }
}

// 添加联系人参数转换函数
function processAddContactPropsToRequestParam(payload) {
    const { companyId, contactName, emailAddr, mobilePhoneNum, phoneNum, qqNum, receiver, remark } = payload
    return {
        companyId,
        name: contactName,
        mobile: Number(mobilePhoneNum),
        email: emailAddr,
        telephone: phoneNum,
        isRecipient: receiver,
        remark,
        qq: qqNum
    }
}

// log返回数据转为state
function processResponseLogToProps(response) {
    if (response && response.data && response.data.records) {
        return {
            operationDataSource: response.data.records.map((item) => Object.assign(item, {createTime: unixToFormatedDataTime(item.createTime)})),
            pageSize: response.data.pageSize,
            operationCurrent: response.data.pageNow,
            operationTotal: response.data.rowCount
        }
    }
}

function* requestAsync(action) {
    switch (action.type) {
        case GET_POLICY_COMPANY_DETAIL:
            const response = yield getPolicyCompanyDetail({id: action.payload})
            if (response.status === 0) {
                yield put(receivedPolicyCompanyDetail(processCompanyDetailResponseDataToProps(response)))
            } else {
                message.error(response.msg)
            }
            break
        case PUT_MODIFIED_COMPANY_INFO:
            // 把action payload格式化为请求参数
            const res = yield putPolicyCompanyInfo(processGetCompanyDetailPropsToRequestParam(action.payload))
            // 请求完成 返回数据给reducer
            const req = yield put(receivedPolicyCompanyDetail(res))
            // 修改成功后 取消保存按钮的loading 编辑状态修改为否
            yield put(savingLoading(false))
            yield put(toggleEditable(false))
            break
        case DELETE_COMPANY:
            // 只传一个companyId
            const responseDeleteCompany = yield deleteCompany(action.payload)
            break
        case GET_SERVICE_CITY:
            // TODO
            // 参数转换
            const reqCityParam = processGetCityPropsToRequestParam(action.payload)
            // 发起请求
            const responseCity = yield getCompanyCityList(reqCityParam)
            if (responseCity.status === 0) {
                // 请求完成 返回数据给reducer TODO 返回数据的格式
                const responseCityProps = processServiceCityResponseToProps(responseCity)
                yield put(receiveServiceCity(responseCityProps))
            } else {
                message.error(responseCity.msg)
            }
            break
        case MODIFY_SERVICE_CITY_SERVICE_STATE:
            // TODO
            // 参数转换
            const reqStateParam = processModifyServiceCityServiceStatePropsToRequestParam(action.payload)
            try {
                // 发起请求
                const responseState = yield modifyServiceStatus(reqStateParam)
                if (responseState.status === 0) {
                    //  请求成功 回调promise继续执行
                    action.payload.resolve()
                }
            } catch (e) {}
            break
        case DELETE_SERVICE_CITY:
            // TODO
            // 参数转换
            const reqDeleteCityParam = processDeleteServiceCityPropsToRequestParam(action.payload)
            console.log('reqDeleteCityParam', reqDeleteCityParam)
            try {
                const responseState = yield deleteServiceCity(reqDeleteCityParam)
                console.log('responseState', responseState)
                if (responseState.status === 0) {
                    action.payload.resolve()
                }
            } catch (e) {}
            break
        case HAS_SECURED_CUSTOMER_IN_SERVICE_CITY:
            // 查询是否有参保人员 TODO 返回数据格式未知
            const responseSecuredCustomer = yield hasSecuredCustomerInServiceCity(action.payload)
            // payload只传一个值 不是对象
            yield put(hasSecuredCustomerInServiceCityResult(responseSecuredCustomer))
            break
        case ADD_SERVICE_CITY:
            const reqAddCityParam = processAddServiceCityPropsToRequestParam(action.payload)
            const responseAddCity = yield addServiceCity(reqAddCityParam)
            if (responseAddCity.status === 0) {
                message.success('添加成功')
                action.payload.resolve()
            } else {
                message.error(responseAddCity.msg)
                console.log('message.error(responseAddCity.errmsg)', responseAddCity)
            }
            break
        case MODIFY_SERVICE_CITY:
            const reqModifyCityParam = processModifyServiceCityPropsToRequestParam(action.payload)
            const responseModifyCity = yield modifyServiceCity(reqModifyCityParam)
            if (responseModifyCity.status === 0) {
                message.success('修改成功')
            } else {
                message.error(responseModifyCity.errmsg)
            }
            break

        case GET_CONTACT:
            // TODO
            // 参数转换
            const reqContactParam = processGetContactPropsToRequestParam(action.payload)
            // 发起请求
            const responseContact = yield getCompanyContactList(reqContactParam)
            if (responseContact.status === 0) {
                const responseContactProps = processContactResponseToProps(responseContact)
                // 请求完成 返回数据给reducer
                yield put(receiveContact(responseContactProps))
            } else {
                message.error(responseContact.errmsg)
            }
            break
        case ADD_CONTACT:
            const reqAddContactParam = processAddContactPropsToRequestParam(action.payload)
            console.log('reqAddContactParam', reqAddContactParam)
            const responseAddContact = yield addContact(reqAddContactParam)
            console.log('responseAddContact',responseAddContact)
            if (responseAddContact.status) {
                action.payload.resolve()
            } else {
                message.error(responseAddContact.msg)
            }
        case MODIFY_CONTACT:
            // 修改联系人传递的数据与添加时完全一样
            const reqModifyContactParam = processAddContactPropsToRequestParam(action.payload)
            const responseModifyContact = yield modifyContact(reqModifyContactParam)
        case DELETE_CONTACT:
            const responseDeleteContact = yield deleteContact(action.payload)

        case GET_OPERATION_LOG:
            // TODO
            // 参数转换
            const reqLogParam = processGetLogPropsToRequestParam(action.payload)
            console.log('reqLogParam', reqLogParam)
            // 发起请求
            const responseLog = yield getCompanyOperationLogList(reqLogParam)
            console.log('responseLog', responseLog)
            if (responseLog.status === 0) {
                const resLogProps = processResponseLogToProps(responseLog)
                // 请求完成 返回数据给reducer
                yield put(receiveOperationLog(resLogProps))
            } else {
                message.error(responseLog.msg)
            }
            break
        default:
            break
    }
}

export default function* watchSyncRequestAction() {
    yield takeEvery([
        GET_POLICY_COMPANY_DETAIL,
        PUT_MODIFIED_COMPANY_INFO,
        DELETE_COMPANY,
        // 城市相关
        GET_SERVICE_CITY,
        MODIFY_SERVICE_CITY_SERVICE_STATE,
        DELETE_SERVICE_CITY,
        ADD_SERVICE_CITY,
        MODIFY_SERVICE_CITY,
        // 联系人相关
        GET_CONTACT,
        ADD_CONTACT,
        MODIFY_CONTACT,
        DELETE_CONTACT,
        //日志相关
        GET_OPERATION_LOG,
    ], requestAsync)
}