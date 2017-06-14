import { fetchFn } from '../fetch'
import ApiConfig from '../fetchIndex'

//步骤一提交信息
export const putPolicyPackageOneInfo = (data) => (data) => fetchFn(ApiConfig.getCompanyInfo, data).then(res => res)