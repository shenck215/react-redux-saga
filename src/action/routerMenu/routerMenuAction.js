export const GET_ROUTER_MENU_SAGA = 'GET_ROUTERMENU';//获取路由及导航栏等信息
export const RECEIVED_ROUTER_MENU_DATA = 'RECEIVED_ROUTER_MENU_DATA';//取得路由及导航栏等信息
export const ROUTER_MENU_ISFINISHED = 'ROUTER_MENU_ISFINISHED';//数据获取是否完成

export const getRouterMenu = (params) => {

    return {
        type: GET_ROUTER_MENU_SAGA,
        params,
    }
}

export const receivedRouterMenuData = (params) => {
    return {
        type: RECEIVED_ROUTER_MENU_DATA,
        params,
    }
}

export const isFinished = (params) => {
    return {
        type: ROUTER_MENU_ISFINISHED,
        params,
    }
}