/**
 * Created by YiShuai on 2017/6/14.
 */
// import { message } from 'antd'
// export const fetchFn = (url, data, option) => {
//
//     console.log('data', JSON.stringify(data))
//     let params = {
//         method: 'post',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(data),
//         credentials: 'include'
//     }
//
//     let requestParams = Object.assign(params, option)
//
//     return fetch(url, requestParams)
//         .then(res => {
//             // console.log('res json()', res, res.json())
//             return res.json()
//         })
//         .then(json => {
//             console.log('last', json)
//             return json
//         })
//         .catch(err => message.error(err.toString()))
// }

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
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: enCodeChar(data),
        credentials: 'include',
    };
    if(option) {
        Object.assign(json, option)
    }
    return fetch(url, json).then((res, done) => {
        console.log('donw', done)
        return res.json()
    }).then(data => {
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


