/**
 * Created by YiShuai on 2017/6/5.
 */
import { fetchFn } from './fetch'
import ApiConfig from '../fetchIndex'

// 新增服务商
export const addCompany = (data) => {
    return fetchFn(ApiConfig.addCompany, data)
        .then(res => res)
        .catch(e => e)
}