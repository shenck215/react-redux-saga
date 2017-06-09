
import {
    message,
} from 'antd';
import * as Immutable from 'immutable';
import React from 'react';
import {
    Link,
} from 'react-router';



import {
    IS_TABLE_LOADING,
    RECEIVE_MATERIALITEMLIST,
    DELETE_SUCCESS_MODULE,
    DELETE_ERROR_MODULE,
    LOOK_MATERIAL_DETAIL,
    DELETESUCCESS_LOADING,
    MODAL_LOADING,
} from '../../action/policybase/insuredmaterialsAction';



const initialState = Immutable.fromJS({
    dataSource: [],
    isLoading: false,
    pageNow: 1,
    total: 0,
    pageSize: 20,
    isDeleteSuccess: false,
    isDeleteError: false,
    id: 0,
    materialArr: [],
    deleteSuccessLoading: false,
});

const parseData = (data) => {

    if (data.data && data.data.records) {

        const {
            pageSize = initialState.getIn(['pageSize']),
            pageNow = initialState.getIn(['current']),
            rowCount = initialState.getIn(['total']),
        } = data;

        return {
            dataSource: data.data.records,
            pageSize: data.data.pageSize,
            pageNow: data.data.pageNow,
            rowCount: data.data.rowCount,
        }
    } else {
        return {
            dataSource: [],
            pageSize: 20,
            pageNow: 1,
            rowCount: 0,
        }
    }

}

export const insuredMaterialsListReducer = (state = initialState, action) => {

    const {
        params,
    } = action;

    switch (action.type) {

        case IS_TABLE_LOADING: {

            const {
                isLoading,
            } = params;

            return state.updateIn(['isLoading'], () => {
                return isLoading;
            })
        }

        case RECEIVE_MATERIALITEMLIST: {
            
            const {
                dataSource,
                pageSize,
                pageNow,
            } = parseData(params);

            return state.updateIn(['dataSource'], () => {
                return Immutable.fromJS(dataSource);
            }).updateIn(['pageSize'], () => {
                return pageSize;
            }).updateIn(['current'], () => {
                return pageNow;
            })
        }

        case DELETE_SUCCESS_MODULE: {
            
            const {
                isDeleteSuccess,
                id,
            } = params;

            return state.updateIn(['isDeleteSuccess'], () => {
                return isDeleteSuccess;
            }).updateIn(['id'], () => {
                return id;
            })
        }

        case DELETESUCCESS_LOADING: {
            
            const {
                deleteSuccessLoading,
            } = params;
            
            return state.updateIn(['deleteSuccessLoading'], () => {
                return deleteSuccessLoading;
            })
        }

        case DELETE_ERROR_MODULE: {
            const {
                isDeleteError,
            } = params;

            return state.updateIn(['isDeleteError'], () => {
                return isDeleteError;
            })
        }

        case LOOK_MATERIAL_DETAIL: {
            const {
                materialCompanyList,
            } = params;

            let materialArr = [];

            for(let item of materialCompanyList){
                materialArr.push(
                    <tr>
                        <td>{item.companyName}</td>
                        <td>{item.serviceAreaName}</td>
                        <td><Link to={item.cityStrategyId}>查看</Link></td>
                    </tr>
                );
            }

            return state.updateIn(['materialArr'],() => {
                return materialArr;
            })
        }

        case MODAL_LOADING: {
            const {
                modalLoading,
            } = params;

            return state.updateIn(['modalLoading'],() => {
                return modalLoading;
            })
        }

        default:
            return state;
    }
}