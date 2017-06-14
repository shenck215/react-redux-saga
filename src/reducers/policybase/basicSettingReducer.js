
import * as Immutable from 'immutable';
import React from 'react';
import {
    BASICSETTING_LIST_RECEIVE,
    GETSMALLTABLEDATA_GET,
    RECEIVE_PACKAGELIST,
    DELETE_SOCIAL_SUCCESS,
    DELETE_SOCIAL_ERROR,
    EXISTINFOMODAL_LOADING,
    SMALLTABLEMODAL_LOADING,
    DELETESUCCESS_LOADING,
} from '../../action/policybase/basicSettingAction';


const initialState = Immutable.fromJS({
    start: 1,
    total: 0,
    length: 10,
    dataSource: [],
    isLoading: true,
    counter: 0,
    socialList: [],
    fundList: [],
    index: 0,
    packageListOptions: [],
    deleteSuccessVisible:false,
    deleteErrorVisible: false,
    existInfoModalLoading: false,
    smallTableModalLoading: false,
    deleteSuccessLoading: false,
});

const parseData = (data) => {

    if (data && data.records) {

        const {
            pageSize = initialState.getIn(['pageSize']),
            pageNow = initialState.getIn(['current']),
            rowCount = initialState.getIn(['total']),
            index = initialState.getIn(['index']),
        } = data;

        return {
            dataSource: data.records,
            pageSize,
            pageNow,
            rowCount,
            index,
        }
    } else {
        return {
            dataSource: [],
            pageSize: 20,
            pageNow: 1,
            rowCount: 0,
            index: 0,
        }
    }

}

const updataSmallTable = (dataSource,index) => {
    let socialList = [],fundList= [];

    for(let item of dataSource[index].baseSocialsetList){
        if(item.belongBusi === 1) {
            socialList.push(item);
        }else {
            fundList.push(item);
        }
    }

    return {
        socialList,
        fundList,
    }
}


export const basicSettingList = (state = initialState, action) => {

    const {
        params,
    } = action;

    switch (action.type) {
        case BASICSETTING_LIST_RECEIVE:{
            const {
                dataSource,
                pageNow,
                pageSize,
                index,
            } = parseData(params);
            
            let data = updataSmallTable(dataSource,index);
            
            return state.updateIn(['dataSource'], () => {
                return Immutable.fromJS(dataSource);
            }).updateIn(['start'], () => {
                return pageNow;
            }).updateIn(['length'], () => {
                return pageSize;
            }).updateIn(['index'], () => {
                return index;
            }).updateIn(['socialList'], () => {
                return data.socialList;
            }).updateIn(['fundList'], () => {
                return data.fundList;
            }).update('counter', (value) => ++ value )
        }
            
            

        case GETSMALLTABLEDATA_GET: {
            const {
                dataSource,
                index,
                resolve,
            } = params;

            let data = updataSmallTable(dataSource,index);

            resolve();

            return state.updateIn(['socialList'], () => {
                return data.socialList;
            }).updateIn(['fundList'], () => {
                return data.fundList;
            }).updateIn(['index'], () => {
                return index;
            })
        }

        case RECEIVE_PACKAGELIST: {
            const {
                data,
            } = params;

            let packageListOptions = [];

            for(let item of data) {
                packageListOptions.push({
                    value: item.packageId,
                    label: item.packageName,
                });
            }
            
            return state.updateIn(['packageListOptions'], () => {
                return packageListOptions;
            })
        }   

        case DELETE_SOCIAL_SUCCESS: {

            const {
                deleteSuccessVisible,
                index,
            } = params;

            return state.updateIn(['deleteSuccessVisible'], () => {
                return deleteSuccessVisible;
            }).updateIn(['index'],() => {
                return index;
            })
        }

        case DELETE_SOCIAL_ERROR: {

            const {
                deleteErrorVisible,
            } = params

            return state.updateIn(['deleteErrorVisible'], () => {
                return deleteErrorVisible;
            })
        }

        case EXISTINFOMODAL_LOADING: {

            const {
                existInfoModalLoading,
            } = params;

            return state.updateIn(['deleteSuccessLoading'], () => {
                return existInfoModalLoading;
            })
        }

        case SMALLTABLEMODAL_LOADING: {

            const {
                smallTableModalLoading,
            } = params;

            return state.updateIn(['deleteSuccessLoading'], () => {
                return smallTableModalLoading;
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

        default:
            return state;
    }

    
}