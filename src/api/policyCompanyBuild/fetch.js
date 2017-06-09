import 'whatwg-fetch';
import {
    message,
} from 'antd';
import {
    enCodeChar,
} from '../enCodeChar';

/**
 * fetchFn 对window.fetch的封装，方面统一管理
 * @param url {String<URL>} 请求地址 
 * @param data {Object<JSON>} 请求参数
 * @param option {Object<JSON>} 额外的fetch可配置参数
 */
export const fetchFn =  (url, data, option) => {
  
    let json = {
        method: 'post',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include',
    };
    if(option) {
        Object.assign(json, option)
    }
    return fetch(url, json).then(res => res.json()).then(data => {
        // if( Number(data.status) !== 0) {
        //     message.error( data['error'] ||data['msg'] || data['errmsg'] || '请求失败');
        // }
        return data;
    }).catch((error) => {
        let msg;
        switch(error.toString()) {
            case 'TypeError: Failed to fetch' :
                msg = '请求失败';
                break;
            default:
                msg = '请求失败'; 
        }
        message.error(msg);
        return { status: 1,  msg,};
    });
}


