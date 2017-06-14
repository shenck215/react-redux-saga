/**
 * Created by YiShuai on 2017/6/12.
 */
import { receiveRecords, GET_RECORDS, isLoading, receiveCompanyInfoByCity, GET_COMPANY_INFO_BY_CITY, modifyGetCompanyLoadingText } from '../../action/cityManage/cityManageAction'
import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { getCompanyStrategyList, getCompanyByAreaId } from '../../api/cityManage/cityManageApi'
import { message } from 'antd'

function* requestAsync(action) {
    const payload = action.payload
    switch (action.type) {
        case GET_RECORDS:
            const { pageNow, pageSize } = payload
            const resData = yield getCompanyStrategyList({
                start: (pageNow-1)*pageSize,
                length: pageSize
            })
            if (resData.status === 0) {
                yield put(receiveRecords(resData.data))
            } else {
                message.error(resData)
            }
            yield put(isLoading(false))
            return
        case GET_COMPANY_INFO_BY_CITY:
            // yield异步 否则会直接返回promise
            const resCompanyInfo = yield getCompanyByAreaId({ areaId: payload })
            if (resCompanyInfo.status === 0) {
                yield put(receiveCompanyInfoByCity(resCompanyInfo.data))
            } else {
                message.error(resCompanyInfo)
            }
            return
        default:
            return
    }
}

export default function* watchAsyncRequest() {
    yield* takeEvery([
        GET_RECORDS,
        GET_COMPANY_INFO_BY_CITY,
    ], requestAsync)
}