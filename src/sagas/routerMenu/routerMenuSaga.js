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
    GET_ROUTER_MENU_SAGA,
    receivedRouterMenuData,
    isFinished,
} from '../../action/routerMenu/routerMenuAction';
import {
    routerMenuApi,
} from '../../api/routerMenu/routerMenuApi';

/**
 * 获取路由导航
 */
function* getRouterMenu(params){
    try {
        yield put(isFinished({ isFinished: false }));
        return yield routerMenuApi(params);
    }
    catch(error) { 
        yield put(isFinished({ isFinished: true }));
        message.error(error.toString());
    }
}

function* incrementAsync(obj){

    const {
        type,
        params,
    } = obj;
    
    switch (type) {

        case GET_ROUTER_MENU_SAGA : {

            let data = yield getRouterMenu(params);
            
            yield put(receivedRouterMenuData(data));
            
            yield put(isFinished({ isFinished: true }));

            break;
        }
    }
}

export default function* watchGetRouterMenu(){
    yield* takeEvery([
        GET_ROUTER_MENU_SAGA,
    ],incrementAsync)
}