/**
 * Created by YiShuai on 2017/5/27.
 */
import { RECEIVED_COMPANY_NAME_LIST, IS_LOADING, MODIFY_FILTER_TAGS, MODIFY_FILTER_DATA } from '../../action/policyCompany/policyCompanyListAction'
import * as Immutable from 'immutable'
import React from 'react'

const initialState = Immutable.fromJS({
    // 保存请求返回数据
    dataSource: [],
    isLoading: false,
    // 保存前端数据 用于请求
    pageNow: 1,
    pageSize: 20,
    rowCount: 0,
    companyName: null,
    companyAddress: null,
    cooperateStartTime: null,
    cooperateEndTime: null,
    serviceCityNum: null,
    // 保存筛选条件 否则页面刷新会丢失
    filterTags: [],
})

// 请求结果转化为适合界面展示的数据结构
function processDataSource(dataSource) {
    if (dataSource && dataSource.length > 0) {

    } else {
        return []
    }
}

function processPayload(payload) {
    if (payload) {
        const { dataSource, pageNow, pageSize, rowCount } = payload
        return {
            dataSource: dataSource.map((item, index) => ({
                key: index,
                // companyName: dataSource.companyName,
                cooperationTime: [
                    item.cooperateStartTime,
                    item.cooperateEndTime
                ],
                // serviceCityNum: dataSource.serviceCityNum
                ...item
            })),
            pageNow, pageSize, rowCount
        }
    } else {
        return {
            dataSource: [],
            pageSize: initialState.getIn(['pageSize']),
            pageNow: initialState.getIn(['pageNow']),
            rowCount: initialState.getIn(['rowCount'])
        }
    }
}

export const policyCompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        // 筛选请求结果{records: [], }
        case RECEIVED_COMPANY_NAME_LIST:
            const { dataSource, pageNow, pageSize, rowCount } = processPayload(action.payload)
            return state.updateIn(['dataSource'], () => Immutable.fromJS(dataSource))
                        .updateIn(['rowCount'], () => rowCount)
                        .updateIn(['pageNow'], () => pageNow)
                        .updateIn(['pageSize'], () => pageSize)
        case IS_LOADING:
            return state.updateIn(['isLoading'], () => {
                return action.payload
            })
        case MODIFY_FILTER_TAGS:
            return state.updateIn(['filterTags'], () => {
                return Immutable.fromJS(action.payload)
            })
        case MODIFY_FILTER_DATA:
            const { companyName, companyAddress, cooperateStartTime, cooperateEndTime, serviceCityNum } = action.payload
            return state.updateIn(['companyName'], () => companyName)
                .updateIn(['companyAddress'], () => companyAddress)
                .updateIn(['cooperateStartTime'], () => cooperateStartTime)
                .updateIn(['cooperateEndTime'], () => cooperateEndTime)
                .updateIn(['serviceCityNum'], () => serviceCityNum)
        default:
            return state
    }
}