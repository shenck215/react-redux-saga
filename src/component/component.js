import DemoApp from '../page/wybdemo/TableApp';
import PaymentManagementListFormApp from '../page/paymentManagement/paymentManagementList';
import CityBasicSettingApp from '../page/policybase/index'
import PolicypackageList from '../page/policypackageList/policypackageList';
import Policypackage from '../page/policypackage/index';
import PolicyCompany from '../page/policyCompany';
import PolicyCompanyDetail from '../page/policyCompanyDetail';
import PolicyCompanyBuild from '../page/policyCompanyBuild';
import CityManage from '../page/cityManage';
import Step3 from '../page/policypackage/step-03.jsx';
/**
 * 详情页路由定义,
 * 组件key值定义无要求，不重复即可，推介根据列表页定义，
 * path值同上
 */
export const detailsPage = [
    {
        'path': '/jsp/react/policycompany/policycompanylist/policycompanydetail',
        'PolicyCompanyDetailApp': ''
    },
    {
        'path': '/jsp/react/businessset/facilitator/new',
        'PolicyCompanyBuildApp': ''
    },
    {
        'path': '/jsp/react/policy/PolicypackageSet',
        'WYBpolicySetApp': ''
    },
    {
        'path': '/jsp/react/policy/step3',
        'Step3': ''
    }
];


/**
 * 用于菜单权限控制
 * 左侧菜单:
 * key必须与后台返回的code值对应(如：code为person_s，可以值为PersonsApp),
 * value值为组件名称。
 * 详情页:
 * key值与detailsPage定义的相同即可，
 * value值为组件名称。
 */
export const componentApp = {
    'DemoApp': DemoApp,
    'WYBrequestApp': PaymentManagementListFormApp,
    'WYBpolicybaseApp': CityBasicSettingApp,
    'WYBpolicyApp': PolicypackageList,
    'WYBpolicySetApp': Policypackage,
    'WYBpolicycompanyApp': PolicyCompany,
    'PolicyCompanyDetailApp': PolicyCompanyDetail,
    'PolicyCompanyBuildApp': PolicyCompanyBuild,
    'WYBcityApp': CityManage,
    'Step3': Step3,
};

