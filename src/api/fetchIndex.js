import globalConfig from '../config/config';

const config = globalConfig.config;

let apiConfig = {
    //权限控制
    initApi: `${config}/api/info`,
    //请款管理
    getpaymentlist: `${config}/api/payment/getpaymentlist`,//请款管理列表
    cancleApply: `${config}/api/payment/cancleApply`,//请款管理列表——取消操作
    //基础城市设置
    getAreaList: `${config}/api/policy/areas/getAreaList`,//基础城市设置列表
    updateArea: `${config}/api/policy/areas/updateArea`,//基础城市设置列更新
    updateSocialSet: `${config}/api/policy/areas/updateSocialSet`,//新增/更新参保类型
    deleteSocialSet: `${config}/api/policy/areas/deleteSocialSet`,//删除参保类型
    updateAreaPackge: `${config}/api/policy/areas/updateAreaPackage`,//新增/删除套餐
    getPackageList: `${config}/api/policy/areas/getPackageList`,//得到套餐列表
    //参保材料设置
    deleteMaterialItem: `${config}/api/policy/material/deleteMaterialItem`,
    getMaterialItemList: `${config}/api/policy/material/getMaterialItemList`,
    addMaterialItem: `${config}/api/policy/material/addMaterialItem`,
    existCitySocialSet: `${config}/api/policy/areas/existCitySocialSet`,//是否存在关联的服务商政策包-城市基础
    existCitySocialSetm: `${config}/api/policy/material/existCitySocialSet`,//是否存在关联的服务商政策包-参保材料
    existMaterialName: `${config}/api/policy/material/existMaterialName`,//材料名称是否存在
    imgUpload: `${config}/api/imgUpload`,//上传
    //服务商政策管理
    getCompanyStrategyList: `${config}/api/policy/cityStrategy/getCompanyStrategyList`,//服务商政策管理列表
    exportCompanyStrategyExcel: `${config}/api/policy/cityStrategy/exportCompanyStrategyExcel`,//服务商政策管理导出
    // 服务商管理
    queryCompanyList: `${config}/api/policy/company/queryCompanyList`,// 查询服务商列表
    addCompany: `${config}/api/policy/company/addCompany`, // 新增服务商
    deleteCompany: `${config}/api/policy/company/deleteCompany`, // 删除服务商
    addCompanyCity: `${config}/api/policy/companyCity/addCompanyCity`, // 新增服务城市
    modifyServiceCity: `${config}/api/policy/companyCity/updateCompanyCity`, // 编辑服务城市
    addCompanyContact: `${config}/policy/companyContact/addCompanyContact`, // 新增服务商联系人
    addContact: `${config}/api/policy/companyContact/addCompanyContact`, // 添加联系人
    modifyContact: `${config}/api/policy/companyContact/updateCompanyContact`, // 编辑联系人
    deleteContact: `${config}/api/policy/companyContact/deleteCompanyContact`,// 删除联系人
    attachmentUpload: `${config}/api/attachmentUpload`, // 协议附件上传地址
    getCompanyInfo: `${config}/api/policy/company/getCompanyInfo`, // 查询服务商信息
    putCompanyInfo: `${config}/api/policy/company/updateCompany`, // 更新服务商信息
    getCompanyCityList: `${config}/api/policy/companyCity/queryCompanyCityList`, // 查询服务城市列表
    getCompanyContactList: `${config}/api/policy/companyContact/queryCompanyContactList`, // 查询服务商联系人列表
    getCompanyOperationLog: `${config}/api/policy/company/getLogsByType`, // 查询操作日志
    modifyServiceStatus: `${config}/api/policy/companyCity/updateServiceStatus`, // 修改服务城市服务状态
    deleteServiceCity: `${config}/api/policy/companyCity/deleteCompanyCity`, // 删除服务城市
    addServiceCity: `${config}/api/policy/companyCity/addCompanyCity`, // 添加服务城市
    hasSecuredCustomerInServiceCity: `${config}/api/policy/companyCity/getIfHaveServicingInsurerAtCompanyCity`, // 城市名下是否有参保人员
    //设置政策报第三步
    getForecastPolicyInfo: `${config}/api/policy/socialset/getForecastPolicyInfo`,//获取初始数据
}

export default apiConfig;