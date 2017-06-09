import {
    fetchFn,
} from '../fetch';
import apiConfig from '../fetchIndex';

export const getForecastPolicyInfoApi = (data) => {

    return fetchFn(apiConfig.getForecastPolicyInfo,{},{method: 'get',body: data}).then(data => data);
   
}