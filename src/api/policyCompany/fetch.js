/**
 * Created by YiShuai on 2017/6/1.
 */
import { enCodeChar } from '../enCodeChar'
import { message } from 'antd'

export const fetchFn = (url, data, option) => {
    let headers = {
        method: 'get',
        // get请求不能包含body
        // body: enCodeChar(data)
    }
    if (option)
        Object.assign(headers, option)
    return fetch(url, headers)
            .then(res => res.json())
            .then(data => data)
            .catch(err => {
                console.log(err)
                message.error('自定义错误')
                return {
                    status: -1
                }
            })
}