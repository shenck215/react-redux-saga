import {
    RECEIVED_PAYMENTLIST_DATA,
    PAYMENTLIST_ISLOADING,
    PAYMENTLIST_ISVISIBLE,
    PAYMENTLIST_CANCEL_RESPONSE,
} from '../../action/paymentManagement/paymentManagementListAction';
import {
    message,
} from 'antd';
import * as Immutable from 'immutable';
import React from 'react';


const initialState = Immutable.fromJS({
    current: 1,
    total: 0,
    pageSize: 20,
    dataSource: [],
    isLoading: true,
    paymentCode: '',
    paymentName: '',
    amt: '',
    createTime: '',
    paymentInsurerNames: '',
    paymentStatus: '',
    visible: false,
    searchTitle: [],
});

const parseData = (data) => {

    if (data && data.records) {

        const {
            pageSize = initialState.getIn(['pageSize']),
            pageNow = initialState.getIn(['current']),
            rowCount = initialState.getIn(['total']),
            paymentCode = initialState.getIn(['paymentCode']),
            paymentName = initialState.getIn(['paymentName']),
            amt = initialState.getIn(['amt']),
            createTime = initialState.getIn(['createTime']),
            paymentInsurerNames = initialState.getIn(['paymentInsurerNames']),
            paymentStatus = initialState.getIn(['paymentStatus']),
            searchTitle = initialState.getIn(['searchTitle']),
        } = data;

        return {
            dataSource: data.records,
            pageSize,
            pageNow,
            rowCount,
            paymentCode,
            paymentName,
            amt,
            createTime,
            paymentInsurerNames,
            paymentStatus,
            searchTitle,
        }
    } else {
        const {
            searchTitle,
        } = data;
        return {
            dataSource: [],
            pageSize: 20,
            pageNow: 1,
            rowCount: 0,
            paymentCode: '',
            paymentName: '',
            amt: '',
            createTime: '',
            paymentInsurerNames: '',
            paymentStatus: '',
            searchTitle,
        }
    }

}


export const paymentManagementList = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_PAYMENTLIST_DATA:
        
            const {
                dataSource,
                pageSize,
                pageNow,
                rowCount,
                paymentCode,
                paymentName,
                amt,
                createTime,
                paymentInsurerNames,
                paymentStatus,
                searchTitle,
            } = parseData(action.params);
            debugger
            return state.updateIn(['dataSource'], () => {
                return Immutable.fromJS(dataSource);
            }).updateIn(['current'], () => {
                return pageNow;
            }).updateIn(['total'], () => {
                return rowCount;
            }).updateIn(['pageSize'], () => {
                return pageSize;
            }).updateIn(['paymentCode'], () => {
                return paymentCode;
            }).updateIn(['paymentName'], () => {
                return paymentName;
            }).updateIn(['amt'], () => {
                return amt;
            }).updateIn(['createTime'], () => {
                return createTime;
            }).updateIn(['paymentInsurerNames'], () => {
                return paymentInsurerNames;
            }).updateIn(['paymentStatus'], () => {
                return paymentStatus;
            }).updateIn(['searchTitle'], () => {
                return searchTitle;
            });
        
        case PAYMENTLIST_CANCEL_RESPONSE:
            
            if(action.params.status == 0) {
                message.success('操作成功', 1);
                return state.updateIn(['visible'], () => {
                    return false;
                });
            }else {
                message.error('操作失败', 1);
                return state;
            }
            

        case PAYMENTLIST_ISLOADING:
            const {
                isLoading,
            } = action.params;

            return state.updateIn(['isLoading'], () => {
                return isLoading;
            });

        case PAYMENTLIST_ISVISIBLE: 

            const {
                visible,
            } = action.params;

            return state.updateIn(['visible'], () => {
                return visible;
            });

        default:
            return state;
    }
}