/**
 * Created by YiShuai on 2017/6/1.
 */
import moment from 'moment'

// 时间戳转格式化日期字符串
export const unixToFormatedDataTime = (unix) => moment.unix(unix).format('YYYY-MM-DD')

// 时间戳转为moment对象
export const unixToMoment = (unix) => moment(unix, 'X')

// moment对象解析为时间戳
export const momentToUnix = (moment) => moment.format('X')

// moment数组(RangePicker组件)解析为时间戳数组
export const momentArrToUnix = (moments) => moments.map(item => item.format('X'))

// 毫秒时间戳转秒
export const msToSecond = (ms) => (ms/1000).toFixed()