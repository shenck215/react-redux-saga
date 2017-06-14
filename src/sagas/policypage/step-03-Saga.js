import {
    takeEvery,
} from 'redux-saga';
import {
    put,
} from 'redux-saga/effects';
import {
    message,
} from 'antd';
import {
    GETFORECASTPOLICYINFO_SAGA,
    GETREMARKOFEDIT_SAGA,
    SAVEFORECASTPOLICYINFO_SAGA,
    receiveForecastPolicyInfo,
    tableIsLoading,
    changeLocalData,
    btnIsLoading,
} from '../../action/policypackage/step-03-Action';
import {
    getForecastPolicyInfoApi,
    getRemarkOfEdit,
    saveForecastPolicyInfo,
} from '../../api/policypackage/step-03-api';


function* incrementAsync(obj){

    const {
        type,
        params,
    } = obj;
    
    switch (type) {

        case GETFORECASTPOLICYINFO_SAGA : {

            const {
                cityStrategyId,
            } = params;
            
            yield put(tableIsLoading({tableIsLoading: true}))
            
            let data = yield getForecastPolicyInfoApi({cityStrategyId,});

            if(data.status === 0){
                yield put(receiveForecastPolicyInfo(data.data))
            }

            yield put(tableIsLoading({tableIsLoading: false}))
            
            break;
        }

        case GETREMARKOFEDIT_SAGA : {

            const {
                cityStrategyId,
                insuranceType,
                key,
                value,
                list,
                increaseType,
                increaseValue,
                resolve,
            } = params;
            
            let data;

            yield put(tableIsLoading({tableIsLoading: true}));

            if(key === 'startTime'){
                yield put(changeLocalData(params))
            }else if(key === 'increaseType') {
                data = yield getRemarkOfEdit({
                    cityStrategyId,
                    insuranceType,
                    increaseType: value,
                    increaseValue,
                });
            }else if(key === 'increaseValue') {
                data = yield getRemarkOfEdit({
                    cityStrategyId,
                    insuranceType,
                    increaseType,
                    increaseValue: value,
                });
            }

            if((key === 'increaseType' || key === 'increaseValue') && data.status === 0){
                yield put(changeLocalData({
                    insuranceType,
                    key,
                    value,
                    list,
                    remark: data.data,
                }));
            }

            resolve();

            yield put(tableIsLoading({tableIsLoading: false}));

            break;
        }

        case SAVEFORECASTPOLICYINFO_SAGA: {

            yield put(btnIsLoading({btnIsLoading: true}));

            let data = yield saveForecastPolicyInfo(params);

            if(data.status === 0){
                message.success('保存成功');   
            }else {
                message.error(data.errmsg);
            }

            yield put(btnIsLoading({btnIsLoading: false}));

            break;
        }

    }
}

export default function* watchForecastPolicyInfo(){
    yield* takeEvery([
        GETFORECASTPOLICYINFO_SAGA,
        GETREMARKOFEDIT_SAGA,
        SAVEFORECASTPOLICYINFO_SAGA,
    ],incrementAsync)
}