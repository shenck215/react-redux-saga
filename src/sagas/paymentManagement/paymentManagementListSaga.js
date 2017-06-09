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
    PAYMENTLIST_REQUESTLIST_DATA_SAGA,
    PAYMENTLIST_CANCEL_REQUEST_SAGA,
    receivedPaymentListData,
    paymentListIsLoading,
    paymentListCancelRequest,
    paymentListRequestListData,
} from '../../action/paymentManagement/paymentManagementListAction';
import {
    paymentRequestApi,
    paymentCancelApi,
} from '../../api/paymentManagement/paymentManagementListApi';

/**
 * 获取路由导航
 */
function* getPaymentRequestListData(params){
    try {
        yield put(paymentListIsLoading({ isLoading: true }));
        return yield paymentRequestApi(params);
    }
    catch(error) { 
        yield put(paymentListIsLoading({ isLoading: false }));
        message.error(error.toString());
    }
}

/**
 * 取消请款
 * @param {*} params 
 */
function* getPaymentCancelData(params){
    try {
        yield put(paymentListIsLoading({ isLoading: true }));
        return yield paymentCancelApi(params);
    } catch (error) {
        yield put(paymentListIsLoading({ isLoading: false }));
        message.error(error.toString());
    }
}

/**
 * 筛选栏数据处理
 * @param {*} obj 
 */
const searchDataProcessing = (params) => {
    
    let data = {
        start: (params.current - 1) * params.pageSize,
        length: params.pageSize,
        minAmt: params.amt? (params.amt).substr(0,(params.amt).indexOf('~')) : '',
        maxAmt: params.amt? (params.amt).substr((params.amt).indexOf('~') + 1) : '',
        beginCreateTime: params.createTime? (new Date((params.createTime).substr(0,(params.createTime).indexOf('至'))).getTime() / 1000).toFixed() : '',
        endCreateTime: params.createTime? (new Date((params.createTime).substr((params.createTime).indexOf('至') + 1)).getTime() / 1000).toFixed() : '',
        paymentCode: params.paymentCode,
        paymentInsurerNames: params.paymentInsurerNames,
        paymentName: params.paymentName,
        paymentStatus: params.paymentStatus,
    };

    delete data['createTime'];
    delete data['amt'];

    return data;
}

function* incrementAsync(obj){

    const {
        type,
        params,
    } = obj;
    
    switch (type) {

        case PAYMENTLIST_REQUESTLIST_DATA_SAGA : {
            
            const dataObj = searchDataProcessing(params);

            let searchTitle = params.searchTitle;

            delete params.searchTitle;

            let data = yield getPaymentRequestListData(dataObj);

            data = Object.assign({},data.data,{
                amt: params.amt,
                createTime: params.createTime,
                current: params.current,
                pageSize: params.pageSize,
                paymentCode: params.paymentCode,
                paymentInsurerNames: params.paymentInsurerNames,
                paymentName: params.paymentName,
                paymentStatus: params.paymentStatus,
                searchTitle,
            });
           
            yield put(receivedPaymentListData(data));
            
            yield put(paymentListIsLoading({ isLoading: false }));

            break;
        }

        case PAYMENTLIST_CANCEL_REQUEST_SAGA: {
            

            const dataObj = searchDataProcessing(params);

            let data = yield getPaymentCancelData(dataObj);
            
            yield put(paymentListCancelResponse(data));

            yield put(paymentListRequestListData(params));

            yield put(paymentListIsLoading({ isLoading: false }));

            break;
        }
    }
}

export default function* watchPaymentRequestList(){
    yield* takeEvery([
        PAYMENTLIST_REQUESTLIST_DATA_SAGA,
        PAYMENTLIST_CANCEL_REQUEST_SAGA,
    ],incrementAsync)
}