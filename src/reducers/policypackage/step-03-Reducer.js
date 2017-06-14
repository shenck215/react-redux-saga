
import * as Immutable from 'immutable';
import React from 'react';
import {
    RECEIVEFORECASTPOLICYINFO,
    CHANGELOCALDATE,
    BTNISLOADING,
    EMPTYREMARKDATA,
} from '../../action/policypackage/step-03-Action';


const initialState = Immutable.fromJS({
    areasName:'',
    list: [],
    tableIsLoading: false,
    btnIsLoading: false,
});

export const forecastPolicyInfoReducer = (state = initialState, action) => {

    const {
        params,
    } = action;

    switch (action.type) {
        
        case RECEIVEFORECASTPOLICYINFO: {

            const {
                areasName,
                list,
            } = params;

            return state.update('areasName', () => {
                return areasName;
            }).update('list', () => {
                return Immutable.fromJS(list);
            });
        }

        case CHANGELOCALDATE: {
            
            const {            
                insuranceType,
                key,
                value,
                list,
                remark,
            } = params;
            
            for(let item of list) {
                if(item.insuranceType === insuranceType) {
                    item[key] = value;
                    if(remark){
                        item.remark = remark;
                    }
                }
            }

            return state.update('list', () => {
                return Immutable.fromJS(list);
            })
        }

        case EMPTYREMARKDATA: {
            
            const {            
                insuranceType,
                key,
                value,
                list,
            } = params;
            
            for(let item of list) {
                if(item.insuranceType === insuranceType) {
                    item[key] = value;
                    item.remark = '';
                }
            }
            console.log(list)
            return state.update('list', () => {
                return Immutable.fromJS(list);
            })
        }

        case BTNISLOADING: {

            const {
                btnIsLoading,
            } = params;

            return state.update('btnIsLoading', () => {
                return btnIsLoading;
            })
        }

        default:
            return state;
    }

    
}