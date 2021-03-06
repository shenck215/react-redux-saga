/**
 * Created by caozheng on 2017/2/8.
 */
import 'babel-polyfill';
import watchGetRouterMenu from '../sagas/routerMenu/routerMenuSaga';
import watchPaymentRequestList from '../sagas/paymentManagement/paymentManagementListSaga';
import watchBaseSettingList from '../sagas/policybase/baseSettingSaga';
import watchinsuredmaterialsRequestList from '../sagas/policybase/insuredmaterialsSaga';
import watchPolicyCompanyRequest from './policyCompany/policyCompanyListSage';
import watchPolicyCompanyDetailRequest from './policyCompanyDetail/policyCompanyDetailSaga';
import watchPolicyCompanyBuildRequest from './policyCompanyBuild/policyCompanyBuildSaga';
import watchCityManageRequest from './cityManage/cityMangeSaga'
import watchPolicyPackageList from './policypackageList/policypackageListSaga';
import watchForecastPolicyInfo from './policypage/step-03-Saga';
import watchPolicyPackageSetting from './policyPackage/policyPackageSagas'

export const getSagaList = {
    watchGetRouterMenu,
    watchPaymentRequestList,
    watchBaseSettingList,
    watchinsuredmaterialsRequestList,
    watchPolicyCompanyRequest,
    watchPolicyCompanyDetailRequest,
    watchPolicyCompanyBuildRequest,
    watchCityManageRequest,
    watchPolicyPackageList,
    watchForecastPolicyInfo,
    watchPolicyPackageSetting
};



