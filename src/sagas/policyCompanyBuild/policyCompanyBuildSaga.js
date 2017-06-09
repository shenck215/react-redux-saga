/**
 * Created by Steve on 2017/6/2.
 */
import { GET_EXAMPLE, receiveExample, isLoading, POST_NEW_COMPANY_INFO, receiveNewCompanyReturnInfo } from '../../action/policyCompanyBuild/policyCompanyBuildAction'
import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { addCompany} from '../../api/policyCompanyBuild/policyCompanyBuildApi'
import { message } from 'antd'
import { momentArrToUnix } from '../../page/policyCompany/utils'

function processCityArrToRequestParam(citys) {
    return citys.map(city => ({
        serviceArea: 'hangzhou-test',//city.serviceCity,
        serviceAreaId: city.serviceAreaId,
        areaId: 0,//city.accountAddress,
        serviceCharge: city.serviceFee,
        billType: city.accountType,
        billMonth: city.accountMonth,
        payDate: city.payDay,
        prove: city.issueCertificate
    }))
}

function processContactArrToRequestParam(contacts) {
    return contacts.map(contact => ({
        name: contact.contactName,
        mobile: contact.mobilePhoneNum,
        email: contact.emailAddr,
        qq: contact.qqNum,
        telephone: contact.phoneNum,
        isRecipient: contact.receiver,
        remark: contact.remark
    }))
}


function processPropsToRequestParam(payload) {
    return {
        companyName: payload.companyName,
        companyAreaId: 22, // payload.companyCityId
        detailAddress: '天成路28号',// payload.companyAddress,
        cooperateStartTime: momentArrToUnix(payload.cooperationTime)[0],
        cooperateEndTime: momentArrToUnix(payload.cooperationTime)[1],
        attachment: payload.protocolAddonUrl,
        remark: payload.remark,
        companyCities: processCityArrToRequestParam(payload.city),
        companyContacts: processContactArrToRequestParam(payload.contact)
    }
}

function* requestAsync(action) {
    switch (action.type) {
        case GET_EXAMPLE:
            break
        case POST_NEW_COMPANY_INFO:
            console.log('build saga', action.payload)
            console.log('build saga processed data', processPropsToRequestParam(action.payload))
            let responseData;
            try {
                responseData = yield addCompany(processPropsToRequestParam(action.payload))
                console.log(responseData)
                if (responseData.status === 0) {
                    console.log('测试返回数据：', responseData)
                    message.success(responseData.msg)
                } else if (responseData.status === 1) {
                    message.error(responseData.msg)
                }
            } catch (e) {
            } finally {
                yield put(receiveNewCompanyReturnInfo(responseData.status))
                yield put(isLoading(false))
            }
            break
        default:
            break
    }
}

export default function* () {
    yield* takeEvery([
        POST_NEW_COMPANY_INFO
    ], requestAsync)
}