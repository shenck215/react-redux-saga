/**
 * Created by YiShuai on 2017/6/1.
 */
import { fetchFn } from '../fetch'
import ApiConfig from '../fetchIndex'

export const getPolicyCompanyDetail = (data) => fetchFn(ApiConfig.getCompanyInfo, data).then(res => res)
export const putPolicyCompanyInfo = (data) => fetchFn(ApiConfig.putCompanyInfo, data).then(res => res)
export const deleteCompany = (data) => fetchFn(ApiConfig.deleteCompany, data).then(res => res)

// 城市相关
export const getCompanyCityList = (data) => fetchFn(ApiConfig.getCompanyCityList, data).then(res => res)
export const modifyServiceStatus = (data) => fetchFn(ApiConfig.modifyServiceStatus, data).then(res => res)
export const deleteServiceCity = (data) => fetchFn(ApiConfig.deleteServiceCity, data).then(res => res)
export const hasSecuredCustomerInServiceCity = (data) => fetchFn(ApiConfig.hasSecuredCustomerInServiceCity, data).then(res => res)
export const addServiceCity = (data) => fetchFn(ApiConfig.addServiceCity, data).then(res => res)
export const modifyServiceCity = (data) => fetchFn(ApiConfig.modifyServiceCity, data).then(res => res)

// 联系人相关
export const getCompanyContactList = (data) => fetchFn(ApiConfig.getCompanyContactList, data).then(res => res)
export const addContact = (data) => fetchFn(ApiConfig.addContact, data).then(res => res)
export const modifyContact = (data) => fetchFn(ApiConfig.modifyContact, data).then(res => res)
export const deleteContact = (data) => fetchFn(ApiConfig.deleteContact, data).then(res => res)

// 日志相关
export const getCompanyOperationLogList = (data) => fetchFn(ApiConfig.getCompanyOperationLog, data).then(res => res)