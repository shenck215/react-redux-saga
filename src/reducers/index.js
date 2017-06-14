/**
 * Created by caozheng on 2017/1/4.
 */
import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

// mainPage
import {
    routerMenu,
} from '../reducers/routerMenu/routerMenuReducer';
import {
    paymentManagementList,
} from '../reducers/paymentManagement/paymentManagementListReducer';
import {
    basicSettingList,
} from '../reducers/policybase/basicSettingReducer';

import {
    insuredMaterialsListReducer,
} from '../reducers/policybase/insuredmaterialsReducer';

import { 
    policyPackageList,
} from './policypackageList/policypackageListReducer';

import {
    forecastPolicyInfoReducer,
} from './policypackage/step-03-Reducer';

import { policyCompanyReducer } from './policyCompany/policyCompanyReducer'
import { policyCompanyDetailReducer } from './policyCompanyDetail/policyCompanyDetailReducer'
import { policyCompanyBuildReducer } from './policyCompanyBuild/policyCompanyBuildReducer'
import { cityManageReducer } from './cityManage/cityManageReducer'

import { policyPackageOneReducer } from './policyPackage/policyPackageOneReducer'


const indexReduces = combineReducers({
    routerMenu,
    paymentManagementList,
    basicSettingList,
    policyPackageList,
    insuredMaterialsListReducer,
    policyCompanyReducer,
    policyCompanyDetailReducer,
    policyCompanyBuildReducer,
    cityManageReducer,
    policyPackageOneReducer,
    forecastPolicyInfoReducer,
    routing: routerReducer,
});

export default indexReduces;