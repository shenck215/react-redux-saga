/**
 * Created by YiShuai on 2017/6/12.
 */
import React, { Component } from 'react'
import { Button, Table, AutoComplete, Input, Select } from 'antd'
import style from '../../css/cityManage/style.css'
import { connect } from 'react-redux'
import { getRecords, isLoading } from '../../action/cityManage/cityManageAction'
import PopFilter from '../policyCompany/PopFilter'
import PopSearch from './PopSearch'
import AddCityModal from './AddCityModal'
import { toggleAddCityModalVisible } from '../../action/cityManage/cityManageAction'

const cityDataSourceExample = [{
    isEnable: true,
    serviceAreaId: 23,// 服务地区id
    companyName: '杭州今元嘉和人力资源有限公司',
    paymentRule: 1,
    changeRule: 1,
    startSupplierDeadline: 0,
    endSupplierDeadline: 0,
    startDeadlineDay: 0,
    endDeadlineDay: 0,
    isConsistent: 0,
    ensureChargeMethod: 0,
    seriousChargeMethod: 0,
    prove: 'jjjjjjjskkskkdkd',
    needToKnow: 'lslslsls',
    remark: 'fffff',
    isStick: 1
}]
const provinceDataSource = ['浙江', '北京']

class Page extends Component {

    constructor(props) {
        super(props)
        this.state = {
            paymentRule: null
        }
        props.dispatch(getRecords({
            pageSize: props.pageSize,
            pageNow: props.pageNow
        }))
        props.dispatch(isLoading(true))
    }

    render() {

        const {dispatch, pageSize, pageNow, rowCount, records, isLoading, addCityModalVisible, getCompanyLoadingText,
            companyDataSource, packagesList} = this.props

        const columns = [{
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => <span><a>编辑</a>&nbsp;|&nbsp;{record.isEnable === 0 ? <a>上架</a> : <a>下架</a>}</span>
        }, {
            title: <PopSearch text="省份" confirm={(values) => this.filter('province', values)}>
                <AutoComplete className={style.autoComplete} dataSource={provinceDataSource} filterOption={(inputValue, option) => this.filterProvince(inputValue, option)}/>
            </PopSearch>,
            dataIndex: 'province',
            key: 'province',
        }, {
            title: <PopSearch text="城市" confirm={(values) => this.filter('city', values)}>
                <AutoComplete className={style.autoComplete} dataSource={provinceDataSource} filterOption={(inputValue, option) => this.filterProvince(inputValue, option)}/>
            </PopSearch>,
            dataIndex: 'city',
            key: 'city',
        }, {
            title: <PopSearch text="区域" confirm={(values) => this.filter('zone', values)}>
                <AutoComplete className={style.autoComplete} dataSource={provinceDataSource} filterOption={(inputValue, option) => this.filterProvince(inputValue, option)}/>
            </PopSearch>,
            dataIndex: 'zone',
            key: 'zone',
        }, {
            title: <PopFilter title="当前服务商" iconType="filter" save={(valid) => this.filterSave('companyName', valid)}>
                <Input defaultValue={this.props.companyName} onChange={e => this.handleFilterCache('companyName', e.target.value)}/>
            </PopFilter>,
            dataIndex: 'companyName',
            key: 'companyName',
        }, {
            title: <Select placeholder="缴纳规则" value={this.state.paymentRule} style={{ minWidth: 150 }} onChange={this.filterByPaymentRule}>
                <Select.Option value={1}>社保公积金强制</Select.Option>
                <Select.Option value={2}>社保强制公积金可选</Select.Option>
                <Select.Option value={3}>可单缴公积金</Select.Option>
                <Select.Option value={4}>仅缴社保</Select.Option>
                <Select.Option value={5}>仅缴公积金</Select.Option>
            </Select>,
            dataIndex: 'paymentRule',
            key: 'paymentRule',
        }, {
            title: '增减规则',
            dataIndex: 'changeRule',
            key: 'changeRule',
        }, {
            title: '服务商截点',
            dataIndex: 'supplierDeadline',
            key: 'supplierDeadline',
        }, {
            title: '参保截点',
            dataIndex: 'deadlineDay',
            key: 'deadlineDay',
        }, {
            title: '基数',
            dataIndex: 'isConsistent',
            key: 'isConsistent',
        }, {
            title: '参保金',
            dataIndex: 'ensureChargeMethod',
            key: 'ensureChargeMethod',
        }, {
            title: '大病险',
            dataIndex: 'seriousChargeMethod',
            key: 'seriousChargeMethod',
        }, {
            title: '可开具证明',
            dataIndex: 'prove',
            key: 'prove',
        }, {
            title: '参保须知',
            dataIndex: 'needToKnow',
            key: 'needToKnow',
        }, {
            title: '备注说明',
            dataIndex: 'remark',
            key: 'remark',
        }, {
            title: '是否置顶',
            dataIndex: 'isStick',
            key: 'isStick'
        }]

        const pagination = {
            current: pageNow,
            total: rowCount,
            pageSize: pageSize,
            showQuickJumper: true,
            onChange: (current, pageSize) => {
                dispatch(getRecords({
                    pageNow: current,
                    pageSize
                }))
            },
            showTotal: (total, range) => `第${range[0]}条至第${range[1]}条，共${total}条`
        }

        return (
            <div>
                <div className={style.title}>
                    <span className={style.left}>开通城市管理</span>
                    <div className={style.right}>
                        <Button className={style.addCity} type="primary" onClick={this.addCity}>添加城市</Button>
                        <Button>重置</Button>
                    </div>
                </div>

                <Table
                    columns={columns}
                    dataSource={this.processRecordsToDatasource(records)}
                    pagination={pagination}
                    loading={isLoading}/>
                <AddCityModal
                    formLoadingText={getCompanyLoadingText}
                    formCompanyDataSource={companyDataSource}
                    packagesList={packagesList}
                    visible={addCityModalVisible}
                    dispatch={dispatch}/>
            </div>
        )
    }

    addCity = () => {
        console.log('kkkkkk')
        this.props.dispatch(toggleAddCityModalVisible(true))
    }

    processRecordsToDatasource = (records) => {
        if (records.length !== 0) {
            return records.map((item) => {
                const region = item.serviceCity.split('-')
                return {
                    province: region[0],
                    city: region[1],
                    zone: region[2],
                    isEnable: records.isEnable === '是' ? 1 : 0,
                    ...item
                }
            })
        } else {
            return records
        }
    }

    filterProvince = (inputValue, option) => {
        // const str = inputValue.split('')
        // str.forEach((value, index) => {
        //     if (option.props.children.indexOf(inputValue) !== -1 || option.props.children.indexOf(value) !== -1) {
        //         return true
        //     }
        // })
        // return false
        return option.props.children.indexOf(inputValue) !== -1
    }

    filter = (type, value) => {

    }

    filterByPaymentRule = (value) => {
        console.log(value)
        this.setState({
            paymentRule: value
        })
    }
}



function mapStateToProps(state) {
    const data = state.getIn(['cityManageReducer'])
    return {
        pageNow: data.getIn(['pageNow']),
        pageSize: data.getIn(['pageSize']),
        rowCount: data.getIn(['rowCount']),
        records: data.getIn(['records']).toJS(),
        isLoading: data.getIn(['isLoading']),
        addCityModalVisible: data.getIn(['addCityModalVisible']),
        companyDataSource: data.getIn(['companyDataSource']).toJS(),
        getCompanyLoadingText: data.getIn(['getCompanyLoadingText']),
        packagesList: data.getIn(['packagesList']).toJS()
    }
}

export default connect(mapStateToProps)(Page)