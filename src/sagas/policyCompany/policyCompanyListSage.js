/**
 * Created by YiShuai on 2017/5/27.
 */
import { put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { GET_COMPANY_NAME_LIST, receivedCompanyList, toggleLoadingState } from '../../action/policyCompany/policyCompanyListAction'
import { getCompanyListApi } from '../../api/policyCompany/policyCompanyApi'
import { message } from 'antd'
import { msToSecond } from '../../page/policyCompany/utils'

// 发送网络请求
function* getCompanyList(payload) {
    try {
        yield put(toggleLoadingState(true))
        return yield getCompanyListApi(payload)
    } catch (err) {
        yield put(toggleLoadingState(false))
    }
}

function processFilterOptionToRequestParam(payload) {
    return {
        start: (payload.pageNow - 1) * payload.pageSize,
        length: payload.pageSize,
        companyName: payload.companyName ? payload.companyName : null,
        cooperateStartTime: payload.cooperateStartTime ? payload.cooperateStartTime : null,
        cooperateEndTime: payload.cooperateEndTime ? payload.cooperateEndTime :null,
        serviceCityNum: payload.serviceCityNum ? Number(payload.serviceCityNum.split('~')[0]) : null,
        companyAddress: payload.companyAddress ? payload.companyAddress : null
    }
}

function processResponseToProps(response) {
    if (response && response.data) {
        return {
            dataSource: response.data.records,
            pageSize: response.data.pageSize,
            pageNow: response.data.pageNow,
            rowCount: response.data.rowCount
        }
    }
}

function* requestAsync(action) {
    switch (action.type) {
        case GET_COMPANY_NAME_LIST:
            // 处理请求数据为post参数
            let requestParam = processFilterOptionToRequestParam(action.payload)
            let companyListResponse = yield getCompanyList(requestParam)
            if (companyListResponse.status === 0) {
                let companyListProps = processResponseToProps(companyListResponse)
                // 修改redux
                yield put(receivedCompanyList(companyListProps))
            } else {
                message.error(companyListResponse.msg)
            }
            // 隐藏加载框
            yield put(toggleLoadingState(false))
            break
        default:
            break
    }
}

export default function* watchSyncRequestAction() {
    yield* takeEvery([
        GET_COMPANY_NAME_LIST
    ], requestAsync)
}