
import * as Immutable from 'immutable';
import React from 'react';
import {
    RECEIVEFORECASTPOLICYINFO,
} from '../../action/policypackage/step-03-Action';


const initialState = Immutable.fromJS({
    list: [],
});

export const forecastPolicyInfoReducer = (state = initialState, action) => {

    const {
        params,
    } = action;

    switch (action.type) {
        
        case RECEIVEFORECASTPOLICYINFO: {
            
            return state;
        }

        default:
            return state;
    }

    
}