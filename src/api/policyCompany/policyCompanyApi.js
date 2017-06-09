/**
 * Created by YiShuai on 2017/5/27.
 */
import { fetchFn } from '../policyCompanyBuild/fetch'
import ApiConfig from '../fetchIndex'

export const getCompanyListApi = (data) =>
    fetchFn(ApiConfig.queryCompanyList, data).then(res => res)

    // fetchFn('http://127.0.0.1:2333/companylist.json', data).then(res => res)

