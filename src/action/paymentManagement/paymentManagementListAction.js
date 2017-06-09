export const PAYMENTLIST_REQUESTLIST_DATA_SAGA = 'PAYMENTLIST_REQUESTLIST_DATA_SAGA';
export const RECEIVED_PAYMENTLIST_DATA = 'RECEIVED_PAYMENTLIST_DATA';
export const PAYMENTLIST_ISLOADING = 'PAYMENTLIST_ISLOADING';
export const PAYMENTLIST_ISVISIBLE = 'PAYMENTLIST_ISVISIBLE';
export const PAYMENTLIST_CANCEL_REQUEST_SAGA = 'PAYMENTLIST_CANCEL_REQUEST_SAGA';
export const PAYMENTLIST_CANCEL_RESPONSE = 'PAYMENTLIST_CANCEL_RESPONSE';

export const paymentListRequestListData = (params) => {
    
    return {
        type: PAYMENTLIST_REQUESTLIST_DATA_SAGA,
        params,
    }
}

export const receivedPaymentListData = (params) => {
    return {
        type: RECEIVED_PAYMENTLIST_DATA,
        params,
    }
}

export const paymentListIsLoading = (params) => {
    return {
        type: PAYMENTLIST_ISLOADING,
        params
    }
}

export const paymentListIsVisible = (params) => {
    return {
        type: PAYMENTLIST_ISVISIBLE,
        params
    }
}

export const paymentListCancelRequest = (params) => {
    return {
        type: PAYMENTLIST_CANCEL_REQUEST_SAGA,
        params
    }
}

export const paymentListCancelResponse = (params) => {
    return {
        type: PAYMENTLIST_CANCEL_RESPONSE,
        params
    }
}