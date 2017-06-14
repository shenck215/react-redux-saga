
/**
 * Created by YiShuai on 2017/6/12.
 */
import * as Immutable from 'immutable'
import {
    RECEIVE_RECORDS, IS_LOADING, TOGGLE_ADD_CITY_MODAL_VISIBLE, RECEIVE_COMPANY_INFO_BY_CITY,
    MODIFY_GET_COMPANY_LOADING_TEXT,
} from '../../action/cityManage/cityManageAction'

const initialState = Immutable.fromJS({
    pageSize: 10,
    pageNow: 1,
    rowCount: 0,
    records: [],
    isLoading: false,
    addCityModalVisible: false,
    companyDataSource: [],
    getCompanyLoadingText: '请先选择城市',
    packagesList: []
})

function processCityRecordsPayloadToProps(data) {
    if (data && data.records) {
        return {
            records: data.records,
            pageNow: data.pageNow,
            rowCount: data.rowCount
        }
    } else {
        return {
            records: initialState.getIn(['records']),
            pageNow: initialState.getIn(['pageNow']),
            rowCount: initialState.getIn(['rowCount'])
        }
    }
}

export const cityManageReducer = (state = initialState, action) => {
    const data = action.payload
    switch (action.type) {
        case RECEIVE_RECORDS:
            const props = processCityRecordsPayloadToProps(data)
            return state.updateIn(['records'], () => Immutable.fromJS(props.records))
                        .updateIn(['pageNow'], () => props.pageSize)
                        .updateIn(['rowCount'], () => props.rowCount)
        case IS_LOADING:
            return state.updateIn(['isLoading'], () => data)
        case TOGGLE_ADD_CITY_MODAL_VISIBLE:
            return state.updateIn(['addCityModalVisible'], () => data)
        case RECEIVE_COMPANY_INFO_BY_CITY:
            const { companyCityInfoList, packagesList } = data
            return state.updateIn(['companyDataSource'], () => Immutable.fromJS(companyCityInfoList))
                .updateIn(['packagesList'], () => Immutable.fromJS(packagesList))
        case MODIFY_GET_COMPANY_LOADING_TEXT:
            return state.updateIn(['getCompanyLoadingText'], () => data)
        default:
            return state
    }
}