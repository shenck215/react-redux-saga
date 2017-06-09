
import * as Immutable from 'immutable';
import React from 'react';
import {
    RECEIVEPOLICYPACKAGELIST,
    POLICYLIST_ISLOADING,
    RECEIVE_EXCEL_URL,
} from '../../action/policypackageList/policypackageListAction';


const initialState = Immutable.fromJS({
    pageNow: 1,
    rowCount: 0,
    pageSize: 20,
    dataSource: [],
    isLoading: true,
    searchParamsCashe: {
        supplierDeadline: [],
        deadlineDay: [],
        insuranceDeadline: [],
        housingFundDeadline: [],
        deductionDate: [],
    },
    searchTitleArr: [],
    exportUrl: '',
});

const parseData = (data) => {

    if (data && data.records) {

        const {
            pageSize = initialState.get('pageSize'),
            pageNow = initialState.get('current'),
            rowCount = initialState.get('rowCount'),
            searchParamsCashe = initialState.get('searchParamsCashe'),
            searchTitleArr = initialState.get('searchTitleArr'),
        } = data;

        return {
            dataSource: data.records,
            pageSize,
            pageNow,
            rowCount,
            searchParamsCashe,
            searchTitleArr,
        }
    } else {

        const {
            searchParamsCashe = initialState.get('searchParamsCashe'),
            searchTitleArr = initialState.get('searchTitleArr'),
        } = data;

        return {
            dataSource: [],
            pageSize: 20,
            pageNow: 1,
            rowCount: 0,
            searchParamsCashe,
            searchTitleArr,
        }
    }

}


export const policyPackageList = (state = initialState, action) => {

    const {
        params,
    } = action;

    switch (action.type) {
        case RECEIVEPOLICYPACKAGELIST: {

            const {
                dataSource,
                pageNow,
                pageSize,
                rowCount,
                searchParamsCashe,
                searchTitleArr,
            } = parseData(params);

            return state.updateIn(['dataSource'], () => {
                return Immutable.fromJS(dataSource);
            }).update('pageNow', () => {
                return pageNow;
            }).update('pageSize', () => {
                return pageSize;
            }).update('rowCount', () => {
                return rowCount;
            }).update('searchParamsCashe', () => {
                return Immutable.fromJS(searchParamsCashe);
            }).update('searchTitleArr', () => {
                return searchTitleArr;
            });
        }

        case POLICYLIST_ISLOADING: {

            const {
                isLoading,
            } = params;

            return state.update('isLoading', () => {
                return isLoading;
            })
        }

        case RECEIVE_EXCEL_URL: {

            const {
                exportUrl,
            } = params;

            return state.update('exportUrl', () => {
                return exportUrl;
            })
        }

        default:
            return state;
    }


}