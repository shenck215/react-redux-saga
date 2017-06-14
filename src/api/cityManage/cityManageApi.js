/**
 * Created by YiShuai on 2017/6/12.
 */
import ApiConfig from '../fetchIndex'
import { fetchFn as fetchFnSelf } from './fetch'
import { fetchFn } from '../fetch'
import { fetchFn as fetchSelf } from '../policyCompanyBuild/fetch'
// 获取服务商政策列表
export const getCompanyStrategyList = (data) => fetchFn(ApiConfig.getCompanyStrategyList, data).then(res => res)
// 根据城市查询服务商列表
export const getCompanyByAreaId = (data) => fetchFn(ApiConfig.getCompanyByAreaId, data).then(res => {
    console.log('res', res)
    return res
})