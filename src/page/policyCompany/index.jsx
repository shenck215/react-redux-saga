/**
 * Created by YiShuai on 2017/5/26.
 */
import React from 'react'
import indexCss from '../../css/policyCompany/index.css'
import { Button, Table, Input, Select, DatePicker, Tag } from 'antd'
import PopFilter from './PopFilter'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getCompanyNameList, toggleLoadingState, modifyFilterTags, modifyFilterData } from '../../action/policyCompany/policyCompanyListAction'
import moment from 'moment'
import Tags from '../../component/tags/tags'
import { unixToFormatedDataTime } from './utils'
import { browserHistory } from 'react-router'

let filterOptions = {
    companyName: {
        title:  '服务商名称',
        index: 0
    },
    companyAddress: {
        title:  '所在地区',
        index: 1
    },
    serviceCityNum: {
        title: '服务城市数量',
        index: 2
    },
    cooperationTime: {
        title: '合作时间',
        index: 3
    }
}

// const dataSource = [{
//     key: '1',
//     companyName: '杭州今元嘉和人力资源管理杭州今元嘉和人力资源管杭州今元嘉和人力资源管理杭州今元嘉和人力',
//     companyAddress: '杭州-江干-凯旋路',
//     serviceCityNum: 4,
//     cooperationTime: [
//         new Date().getTime(),
//         new Date().getTime()
//     ]
// }]

class PolicyCompany extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            companyName: '',
            companyAddress: '',
            serviceCityNum: 0,
            cooperationTime: [],
            filterTags: []
        }
        props.dispatch(getCompanyNameList({
            pageNow: props.pageNow,
            pageSize: props.pageSize
        }))
        props.dispatch(toggleLoadingState(true))
    }

    render() {
        const { pageNow, rowCount, dispatch, pageSize, companyName, companyAddress, cooperateStartTime,
            cooperateEndTime, serviceCityNum, isLoading } = this.props
        const columns = [{
            title: <PopFilter title="服务商名称" iconType="filter" save={(valid) => this.filterSave('companyName', valid)}>
                <Input defaultValue={this.props.companyName} onChange={e => this.handleFilterCache('companyName', e.target.value)}/>
            </PopFilter>,
            dataIndex: 'companyName',
            key: 'companyName',
            width: 400,
            render: (text, record) => {
                return <Link className={indexCss.companyName}
                             to={{pathname: '/jsp/react/policycompany/policycompanylist/policycompanydetail', query: {id: record.id}}}
                             >{record.companyName}</Link>
            }
        }, {
            title: <PopFilter title="所在地区" iconType="filter" save={(valid) => this.filterSave('companyAddress', valid)}>

            </PopFilter>,
            dataIndex: 'companyAddress',
            key: 'companyAddress',
            width: 200,
            render: (text, record) => {
                return <div>{record.companyAddress}</div>
            }
        }, {
            title:  <PopFilter title="服务城市数量" iconType="filter" save={(valid) => this.filterSave('serviceCityNum', valid)}>
                <Select value={this.state.serviceCityNum} defaultValue={this.props.serviceCityNum?this.props.serviceCityNum:''} onChange={(value) => this.handleFilterCache('serviceCityNum', value)}>
                    <Select.Option value="0">0</Select.Option>
                    <Select.Option value="1~3">1~3</Select.Option>
                    <Select.Option value="3~5">3~5</Select.Option>
                    <Select.Option value="5~">5个及以上</Select.Option>
                </Select>
            </PopFilter>,
            dataIndex: 'serviceCityNum',
            key: 'serviceCityNum',
            width: 200
        }, {
            title:  <PopFilter title="合作时间" iconType="filter" save={(valid) => this.filterSave('cooperationTime', valid)}>
                <DatePicker.RangePicker onChange={(values) => this.handleFilterCache('cooperationTime', values)}/>
            </PopFilter>,
            dataIndex: 'cooperationTime',
            key: 'cooperationTime',
            width: 300,
            render: (text, record) => <div>{moment(record.cooperationTime[0]).format('YYYY-MM-DD')}至{moment(record.cooperationTime[1]).format('YYYY-MM-DD')}</div>
        }]

        const pagination = {
            current: pageNow,
            total: rowCount,
            pageSize: pageSize,
            showQuickJumper: true,
            // 页码改变的回调
            onChange: (pageNow, pageSize) => {
                dispatch(getCompanyNameList({
                    pageNow, pageSize,
                    companyName, companyAddress, cooperateStartTime, cooperateEndTime, serviceCityNum
                }))
            }
        }

        return(
            <div className="page">
                <div className={indexCss.title}>
                    <h2>服务商管理</h2>
                    <span><Button type="primary" onClick={() => this.goToBuildNewCompanyPage()} style={{marginRight: 10}}>新建服务商</Button><Button onClick={() => this.resetFilterOptions()}>重置</Button></span>
                    <div className={indexCss.clear}/>
                </div>

                <Table
                    loading={isLoading}
                    columns={columns}
                    dataSource={this.props.dataSource}
                    bordered={true}
                    pagination={pagination}
                    title={() => <div><span>筛选条件：</span>{this.props.filterTags}</div>}/>
            </div>
        )
    }

    goToBuildNewCompanyPage = () => {
        browserHistory.push('/jsp/react/businessset/facilitator/new')
    }

    resetFilterOptions = () => {
        const { dispatch, pageNow, pageSize } = this.props
        dispatch(modifyFilterTags([]))
        dispatch(modifyFilterData({}))
        dispatch(getCompanyNameList({
            pageNow,
            pageSize
        }))
    }

    // 操作缓存对象 动态保存所有过滤条件
    handleFilterCache = (key, value) => {
        const { dispatch, companyName, companyAddress, cooperateStartTime, cooperateEndTime, serviceCityNum } = this.props
        const filterData = { companyName, companyAddress, cooperateStartTime, cooperateEndTime, serviceCityNum }
        if (key === 'cooperationTime') {
            // moment对象数组(RangePicker组件)解析为时间戳数组(秒)
            let cooperateTimes = value.map(item => item.format('X'))
            dispatch(modifyFilterData(Object.assign(filterData, {
                cooperateStartTime: cooperateTimes[0], cooperateEndTime: cooperateTimes[1]
            })))
        } else {
            dispatch(modifyFilterData(Object.assign(filterData, {
                [key]: value
            })))
        }
        console.log('filterData', filterData)
    }

    // 操作tags删除过滤条件
    deleteFilterCache =　(key) => {
        const { dispatch, pageNow, pageSize, filterTags } = this.props
        const { companyName, companyAddress, cooperateStartTime, cooperateEndTime, serviceCityNum } = this.props
        let filterData = { companyName, companyAddress, cooperateStartTime, cooperateEndTime, serviceCityNum }
        filterTags[filterOptions[key]['index']] = null
        // 键值为cooperationTime时 同时置空起止时间
        if (key === 'cooperationTime') {
            // 隐藏bug  置空了起止时间 但cooperationTime不为空
            filterData = Object.assign(filterData, { cooperateStartTime: null, cooperateEndTime: null })
        } else {
            filterData = Object.assign(filterData, { [key]: null })
        }
        dispatch(modifyFilterTags(filterTags))
        dispatch(modifyFilterData(filterData))
        dispatch(getCompanyNameList({
            pageNow,
            pageSize,
            ...filterData
        }))
    }

    // 过滤项表单提交操作 参数valid为验证是否通过 使用缓存对象filterData
    filterSave = (key, valid) => {
        const { dispatch, filterTags, pageNow, pageSize, companyName, companyAddress, cooperateStartTime, cooperateEndTime, serviceCityNum } = this.props
        const filterDataUpdate = { companyName, companyAddress, cooperationTime: [cooperateStartTime, cooperateEndTime], serviceCityNum }
        if (valid) {
            Object.keys(filterDataUpdate).map(key => {
                const searchTitleText = filterOptions[key]['title'] + '：'
                if (key === 'cooperationTime') {
                    if (filterDataUpdate[key] && filterDataUpdate[key][0] && filterDataUpdate[key][0]) {
                        const searchText = unixToFormatedDataTime(filterDataUpdate[key][0]) + '至' + unixToFormatedDataTime(filterDataUpdate[key][1])
                        filterTags[filterOptions[key]['index']] = <Tags searchTitleText={searchTitleText} searchText={searchText} deleteSearchCashe={() => this.deleteFilterCache(key)}/>
                        // console.log(filterTags[filterOptions[key]['index']])
                    }
                } else if (filterDataUpdate[key]){
                    filterTags[filterOptions[key]['index']] = <Tags searchTitleText={searchTitleText} searchText={filterDataUpdate[key]} deleteSearchCashe={() => this.deleteFilterCache(key)}/>
                    // console.log(filterTags[filterOptions[key]['index']])
                }
            })
            dispatch(modifyFilterTags(filterTags))
            dispatch(getCompanyNameList({
                pageNow,
                pageSize,
                companyName, companyAddress, cooperateStartTime, cooperateEndTime, serviceCityNum
            }))
        }
    }
}

function mapStateToProps(state) {
    const data = state.getIn(['policyCompanyReducer'])
    return {
        dataSource: data.getIn(['dataSource']).toJS(),
        isLoading: data.getIn(['isLoading']),
        pageSize: data.getIn(['pageSize']),
        rowCount: data.getIn(['rowCount']),
        pageNow: data.getIn(['pageNow']),
        filterTags: data.getIn(['filterTags']).toJS(),
        companyName: data.getIn(['companyName']),
        companyAddress: data.getIn(['companyAddress']),
        cooperateStartTime: data.getIn(['cooperateStartTime']),
        cooperateEndTime: data.getIn(['cooperateEndTime']),
        serviceCityNum: data.getIn(['serviceCityNum']),
    }
}

export default connect(mapStateToProps)(PolicyCompany)