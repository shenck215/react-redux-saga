import React, {
    Component,
} from 'react';
import {
    connect,
} from 'react-redux';
import QueueAnim from "rc-queue-anim/lib";
import {
    Button,
    Table,
    Tooltip,
    Input,
    Select,
    DatePicker,
    Col,
    Dropdown,
    Menu,
    Icon,
    message,
} from 'antd';
import moment from 'moment';
import {
    Link,
} from 'react-router';
import policypackageListStyle from '../../css/policypackageList/policypackageList';
import calculatorImg from '../../images/calculator/calculator';
import FilterTable from '../../component/filterTable/filterTable';
import Tags from '../../component/tags/tags';
import {
    getPolicyPackageList,
    exportCompanyStrategyExcel,
} from '../../action/policypackageList/policypackageListAction';

const Option = Select.Option;
const {
    RangePicker,
} = DatePicker;

class policypackageListApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idList: [],
            a:1,
        };
    }

    componentWillMount() {

        const {
            dispatch,
            pageNow,
            pageSize,
            searchParamsCashe,
        } = this.props;

        dispatch(getPolicyPackageList({
            pageNow,
            pageSize,
            searchParamsCashe: searchParamsCashe.toJS(),
        }))
    }

    stringToAmt(min, max) {
        return `${min}~${max}`;
    }

    /**
     * 表格列
     */
    getcolumns = () => [
        {
            title: <FilterTable title="服务商名称" type="filter" fixed={true} overlayStyle={{width: 260}} ok={e => this.searchBtn('companyName')}>
                <Input
                    style={{width:118}}
                    defaultValue={this.props.searchParamsCashe.get('companyName')}
                    onChange={e => this.handleSearchChangeCache(e.target['value'], 'companyName')}
                />
            </FilterTable>,
            dataIndex: 'companyName',
            key: 'companyName',
            width: 150,
            fixed: 'left',
            render: (text) => {
                return <p className={policypackageListStyle.companyName}><img src={calculatorImg} alt="计算器" /><Link to="">{text}</Link></p>;
            }
        },
        {
            title: <FilterTable title="服务城市" type="filter" fixed={true} overlayStyle={{width: 260}} ok={e => this.searchBtn('serviceCity')}>
                <Input
                    style={{width:118}}
                    defaultValue={this.props.searchParamsCashe.get('serviceCity')}
                    onChange={e => this.handleSearchChangeCache(e.target['value'], 'serviceCity')}
                />
            </FilterTable>,
            dataIndex: 'serviceCity',
            key: 'serviceCity',
            width: 150,
            fixed: 'left',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: "开户地区",
            dataIndex: 'areaName',
            key: 'areaName',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="服务状态" type="filter" fixed={true} ok={e => this.searchBtn('serviceStatus')}>
                <Select
                    key={new Date().getTime()}
                    placeholder="请选择"
                    style={{width: 90}}
                    allowClear
                    defaultValue={this.props.searchParamsCashe.get('serviceStatus')}
                    onChange={e => this.handleSearchChangeCache(e, 'serviceStatus')}
                >
                    <Option value="1">正常服务</Option>
                    <Option value="2">只减不增</Option>
                    <Option value="3">停止服务</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'serviceStatus',
            key: 'serviceStatus',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="服务费" type="filter" fixed={true} ok={e => this.searchBtn('serviceCharge')}>
                <Select
                    key={new Date().getTime()}
                    placeholder="请选择"
                    allowClear
                    style={{width:90}}
                    defaultValue={this.props.searchParamsCashe.get('serviceCharge')}
                    onChange={e => this.handleSearchChangeCache(e, 'serviceCharge')}
                >
                    <Option value="0~10">0~10</Option>
                    <Option value="10~20">10~20</Option>
                    <Option value="20~30">20~30</Option>
                    <Option value="30~">30以上</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'serviceCharge',
            key: 'serviceCharge',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="政策包状态" type="filter" fixed={true} ok={e => this.searchBtn('strategyStatus')}>
                <Select
                    key={new Date().getTime()}
                    placeholder="请选择"
                    allowClear
                    style={{width:90}}
                    defaultValue={this.props.searchParamsCashe.get('strategyStatus')}
                    onChange={e => this.handleSearchChangeCache(e, 'strategyStatus')}
                >
                    <Option value="0">未设置</Option>
                    <Option value="1">异常</Option>
                    <Option value="4">正常</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'strategyStatus',
            key: 'strategyStatus',
            render: (text) => {
                let obj = {
                    '未设置': <Tooltip title="立即设置">
                        <Link to="/jsp/react/request/requestlist" className={policypackageListStyle.set}>未设置</Link>
                    </Tooltip>,
                    '异常': <Tooltip title="查看">
                        <Link to="/jsp/react/request/requestlist" className={policypackageListStyle.look}>异常</Link>
                    </Tooltip>,
                    '正常': <Tooltip title="查看">
                        <Link to="/jsp/react/request/requestlist" className={policypackageListStyle.look}>正常</Link>
                    </Tooltip>,
                }
                return obj[text];
            }
        },
        {
            title: <FilterTable title="缴纳规则" type="filter" fixed={true} overlayStyle={{width: 260}} ok={e => this.searchBtn('paymentRule')}>
                <Select
                    key={new Date().getTime()}
                    placeholder="请选择"
                    allowClear
                    style={{width:118}}
                    defaultValue={this.props.searchParamsCashe.get('paymentRule')}
                    onChange={e => this.handleSearchChangeCache(e, 'paymentRule')}
                >
                    <Option value="1">社保公积金强制</Option>
                    <Option value="2">社保强制公积金可选</Option>
                    <Option value="3">可单缴公积金</Option>
                    <Option value="4">仅缴社保</Option>
                    <Option value="5">仅缴公积金</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'paymentRule',
            key: 'paymentRule',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="增减规则" type="filter" fixed={true} overlayStyle={{width:260}} ok={e => this.searchBtn('changeRule')}>
                <Select
                    key={new Date().getTime()}
                    placeholder="请选择"
                    allowClear
                    style={{width:118}}
                    defaultValue={this.props.searchParamsCashe.get('changeRule')}
                    onChange={e => this.handleSearchChangeCache(e, 'changeRule')}
                >
                    <Option value="0">当月增当月减</Option>
                    <Option value="1">次月增次月减</Option>
                    <Option value="2">当月增次月减</Option>
                    <Option value="3">次月增当月减</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'changeRule',
            key: 'changeRule',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="服务商截点日" type="filter" overlayStyle={{ width: 345 }} fixed={true} ok={e => this.searchBtn('supplierDeadline')}>
                <RangePicker
                    style={{ width: 200 }}
                    placeholder={['请选择','请选择']}
                    defaultValue={this.props.searchParamsCashe.toJS().supplierDeadline}
                    onChange={(date, dateString) => this.handleSearchChangeCache(date, 'supplierDeadline', dateString)}
                />
            </FilterTable>,
            dataIndex: 'supplierDeadline',
            key: 'supplierDeadline',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="参保截点日" type="filter" overlayStyle={{ width: 345 }} fixed={true} ok={e => this.searchBtn('deadlineDay')}>
                <RangePicker
                    style={{ width: 200 }}
                    placeholder={['请选择','请选择']}
                    defaultValue={this.props.searchParamsCashe.toJS().deadlineDay}
                    onChange={(date, dateString) => this.handleSearchChangeCache(date, 'deadlineDay', dateString)}
                />
            </FilterTable>,
            dataIndex: 'deadlineDay',
            key: 'deadlineDay',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="当地社保截点日" type="filter" overlayStyle={{ width: 345 }} fixed={true} ok={e => this.searchBtn('insuranceDeadline')}>
                <RangePicker
                    style={{ width: 200 }}
                    placeholder={['请选择','请选择']}
                    defaultValue={this.props.searchParamsCashe.toJS().insuranceDeadline}
                    onChange={(date, dateString) => this.handleSearchChangeCache(date, 'insuranceDeadline', dateString)}
                />
            </FilterTable>,
            dataIndex: 'insuranceDeadline',
            key: 'insuranceDeadline',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="当地公积金截点日" type="filter" overlayStyle={{ width: 345 }} fixed={true} ok={e => this.searchBtn('housingFundDeadline')}>
                <RangePicker
                    style={{ width: 200 }}
                    placeholder={['请选择','请选择']}
                    defaultValue={this.props.searchParamsCashe.toJS().housingFundDeadline}
                    onChange={(date, dateString) => this.handleSearchChangeCache(date, 'housingFundDeadline', dateString)}
                />
            </FilterTable>,
            dataIndex: 'housingFundDeadline',
            key: 'housingFundDeadline',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="账单类型" type="filter" fixed={true} ok={e => this.searchBtn('billType')}>
                <Select
                    key={new Date().getTime()}
                    placeholder="请选择"
                    allowClear
                    style={{width:90}}
                    defaultValue={this.props.searchParamsCashe.get('billType')}
                    onChange={e => this.handleSearchChangeCache(e, 'billType')}
                >
                    <Option value="1">预收</Option>
                    <Option value="2">实缴</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'billType',
            key: 'billType',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="账单归属月" type="filter" fixed={true} ok={e => this.searchBtn('billMonth')}>
                <Select
                    key={new Date().getTime()}
                    placeholder="请选择"
                    allowClear
                    style={{width:90}}
                    defaultValue={this.props.searchParamsCashe.get('billMonth')}
                    onChange={e => this.handleSearchChangeCache(e, 'billMonth')}
                >
                    <Option value="0">当月</Option>
                    <Option value="1">次月</Option>
                    <Option value="2">双月</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'billMonth',
            key: 'billMonth',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="打款日" type="filter" overlayStyle={{ width: 345 }} fixed={true} ok={e => this.searchBtn('deductionDate')}>
                <RangePicker
                    style={{ width: 200 }}
                    placeholder={['请选择','请选择']}
                    defaultValue={this.props.searchParamsCashe.toJS().deductionDate}
                    onChange={(data, dateString) => this.handleSearchChangeCache(date, 'deductionDate', dateString)}
                />
            </FilterTable>,
            dataIndex: 'deductionDate',
            key: 'deductionDate',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="基数" type="filter" fixed={true} ok={e => this.searchBtn('isConsistent')}>
                <Select
                    key={new Date().getTime()}
                    placeholder="请选择"
                    allowClear
                    style={{width:90}}
                    defaultValue={this.props.searchParamsCashe.get('isConsistent')}
                    onChange={e => this.handleSearchChangeCache(e, 'isConsistent')}
                >
                    <Option value="0">不一致</Option>
                    <Option value="1">一致</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'isConsistent',
            key: 'isConsistent',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="残保金" type="filter" fixed={true} ok={e => this.searchBtn('ensureChargeMethod')}>
                <Select
                    key={new Date().getTime()}
                    placeholder="请选择"
                    allowClear
                    style={{width:90}}
                    defaultValue={this.props.searchParamsCashe.get('ensureChargeMethod')}
                    onChange={e => this.handleSearchChangeCache(e, 'ensureChargeMethod')}
                >
                    <Option value="0">不收</Option>
                    <Option value="1">月付</Option>
                    <Option value="2">年付</Option>
                    <Option value="3">一次性付款</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'ensureChargeMethod',
            key: 'ensureChargeMethod',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="大病险" type="filter" fixed={true} ok={e => this.searchBtn('seriousChargeMethod')}>
                <Select
                    key={new Date().getTime()}
                    placeholder="请选择"
                    allowClear
                    style={{width:90}}
                    defaultValue={this.props.searchParamsCashe.get('seriousChargeMethod')}
                    onChange={e => this.handleSearchChangeCache(e, 'seriousChargeMethod')}
                >
                    <Option value="0">不收</Option>
                    <Option value="1">月付</Option>
                    <Option value="2">年付</Option>
                    <Option value="3">一次性付款</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'seriousChargeMethod',
            key: 'seriousChargeMethod',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
        {
            title: <FilterTable title="可开具证明" type="filter" fixed={true} overlayStyle={{width:260}} ok={e => this.searchBtn('prove')}>
                <Input
                    style={{width:118}}
                    defaultValue={this.props.searchParamsCashe.get('prove')}
                    onChange={e => this.handleSearchChangeCache(e.target['value'], 'prove')}
                />
            </FilterTable>,
            dataIndex: 'prove',
            key: 'prove',
            render: (text) => {
                return text ? <Tooltip title={text}>
                    <span className={policypackageListStyle.look}>查看</span>
                </Tooltip> : '-/-';
            }
        },
        {
            title: <FilterTable title="调基说明" type="filter" fixed={true} overlayStyle={{width:260}} ok={e => this.searchBtn('adjustRemark')}>
                <Input
                    style={{width:118}}
                    defaultValue={this.props.searchParamsCashe.get('adjustRemark')}
                    onChange={e => this.handleSearchChangeCache(e.target['value'], 'adjustRemark')}
                />
            </FilterTable>,
            dataIndex: 'adjustRemark',
            key: 'adjustRemark',
            render: (text) => {
                return text ? <Tooltip title={text}>
                    <span className={policypackageListStyle.look}>查看</span>
                </Tooltip> : '-/-';
            }
        },
        {
            title: <FilterTable title="备注说明" type="filter" placement="left" fixed={true} overlayStyle={{width: 270}} ok={e => this.searchBtn('remark')}>
                <Input
                    style={{width:118}}
                    defaultValue={this.props.searchParamsCashe.get('remark')}
                    onChange={e => this.handleSearchChangeCache(e.target['value'], 'remark')}
                />
            </FilterTable>,
            dataIndex: 'remark',
            key: 'remark',
            render: (text) => {
                return text ? <Tooltip title={text}>
                    <span className={policypackageListStyle.look}>查看</span>
                </Tooltip> : '-/-';
            }
        },
        {
            title: <FilterTable title="上架状态" type="filter" placement="left" fixed={true} ok={e => this.searchBtn('isEnable')}>
                <Select
                    key={new Date().getTime()}
                    placeholder="请选择"
                    allowClear
                    style={{width:90}}
                    defaultValue={this.props.searchParamsCashe.get('isEnable')}
                    onChange={e => this.handleSearchChangeCache(e, 'isEnable')}
                >
                    <Option value="0">否</Option>
                    <Option value="1">是</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'isEnable',
            key: 'isEnable',
            render: (text) => {
                return text ? text : '-/-';
            }
        },
    ];

    /**
     * 分页
     */
    pagination = (pageNow) => {

        const {
            dispatch,
            pageSize,
            rowCount,
            searchParamsCashe,
        } = this.props;

        return {
            current: pageNow,
            total: rowCount,
            size: "default",
            defaultPageSize: pageSize,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
            onChange: (pageNow) => {

                dispatch(getPolicyPackageList({
                    pageNow,
                    pageSize,
                    searchParamsCashe: searchParamsCashe.toJS(),
                }));
            },
            onShowSizeChange: (pageNow, pageSize) => {

                dispatch(getPolicyPackageList({
                    pageNow,
                    pageSize,
                    searchParamsCashe: searchParamsCashe.toJS(),
                }))
            }
        };
    }

    searchParamsCashe = {};

    handleSearchChangeCache = (value, key, valueStr) => {
        const {
            searchParamsCashe,
        } = this.props;

        if (key === 'serviceCharge') {
            let index = value.indexOf('~');
            this.searchParamsCashe['lowServiceCharge'] = value.substr(0, index);
            this.searchParamsCashe['highServiceCharge'] = value.substr(index + 1);
            this.searchParamsCashe[key] = value;
        } else if (key === 'supplierDeadline'
            || key === 'deadlineDay'
            || key === 'insuranceDeadline'
            || key === 'housingFundDeadline'
            || key === 'deductionDate'
        ) {

            this.searchParamsCashe[key] = value;
            this.searchParamsCashe[`start${key.substr(0, 1).toUpperCase()}${key.substr(1)}`] = valueStr[0] ? (new Date(valueStr[0]).getTime() / 1000).toFixed() : '';
            this.searchParamsCashe[`end${key.substr(0, 1).toUpperCase()}${key.substr(1)}`] = valueStr[1] ? (new Date(valueStr[1]).getTime() / 1000).toFixed() : '';
        } else {
            this.searchParamsCashe[key] = value;
        }


    }

    /**
     * rangePicker转化
     */
    rangePickerToString(value) {
        return `${moment(new Date(value[0]._d).getTime()).format('YYYY-MM-DD')} ~ ${moment(new Date(value[0]._d).getTime()).format('YYYY-MM-DD')}`;
    }

    /**
     * 筛选
     * @param {*} e 
     */

    searchTitleArr = [];

    searchTitleIndex = {
            companyName: 0,
            serviceCity: 1,
            serviceStatus: 2,
            serviceCharge: 3,
            strategyStatus: 4,
            paymentRule: 5,
            changeRule: 6,
            supplierDeadline: 7,
            deadlineDay: 8,
            insuranceDeadline: 9,
            housingFundDeadline: 10,
            billType: 11,
            billMonth: 12,
            deductionDate: 13,
            isConsistent: 14,
            ensureChargeMethod: 15,
            seriousChargeMethod: 16,
            prove: 17,
            adjustRemark: 18,
            remark: 19,
            isEnable: 20,
        }

    searchBtn(key) {

        const {
            dispatch,
            pageNow,
            pageSize,
            searchParamsCashe,
        } = this.props;

        console.log(searchParamsCashe.toJS(),this.searchParamsCashe)
        let obj = { ...searchParamsCashe.toJS(), ...this.searchParamsCashe };

        let searchTitle = {
            companyName: '服务商名称: ',
            serviceCity: '服务城市: ',
            serviceStatus: '服务状态: ',
            serviceCharge: '服务费: ',
            strategyStatus: '政策包状态: ',
            paymentRule: '缴纳规则: ',
            changeRule: '增减规则: ',
            supplierDeadline: '服务商截点日: ',
            deadlineDay: '参保截点日: ',
            insuranceDeadline: '当地社保截点日: ',
            housingFundDeadline: '当地公积金截点日: ',
            billType: '账单类型: ',
            billMonth: '账单归属月: ',
            deductionDate: '打款日: ',
            isConsistent: '基数: ',
            ensureChargeMethod: '残保金: ',
            seriousChargeMethod: '大病险: ',
            prove: '可开具证明: ',
            adjustRemark: '调基说明: ',
            remark: '备注说明: ',
            isEnable: '上架状态: ',
        }

        /**
         * 服务状态
         */
        let serviceStatusObj = {
            1: '正常服务',
            2: '只减不增',
            3: '停止服务',
        }

        /**
         * 政策包状态
         */
        let strategyStatusObj = {
            0: '未设置',
            1: '异常',
            4: '正常',
        }

        /**
         * 缴纳规则
         */
        let paymentRuleObj = {
            1: '社保公积金强制',
            2: '社保强制公积金可选',
            3: '可单缴公积金',
            4: '仅缴社保',
            5: '仅缴公积金',
        }

        /**
         * 增减规则
         */
        let changeRuleObj = {
            0: '当月增当月减',
            1: '次月增次月减',
            2: '当月增次月减',
            3: '次月增当月减',
        }

        /**
         * 账单类型
         */
        let billTypeObj = {
            1: '预收',
            2: '实缴',
        }

        /**
         * 账单归属月
         */
        let billMonthObj = {
            0: '当月',
            1: '次月',
            2: '双月',
        }

        /**
         * 基数
         */
        let isConsistentObj = {
            0: '不一致',
            1: '一致',
        }

        /**
         * 残保金，大病
         */
        let ensureOrSeriousChargeMethodObj = {
            0: '不收',
            1: '月付',
            2: '年付',
            3: '一次性付款',
        }

        /**
         * 上架状态
         */
        let isEnableObj = {
            0: '否',
            1: '是',
        }

        for (let key in obj) {

            let searchTextContent;

            if (key === 'supplierDeadline'
                || key === 'deadlineDay'
                || key === 'insuranceDeadline'
                || key === 'housingFundDeadline'
                || key === 'deductionDate'
            ) {
                console.log(key,obj[key].length)
                if (obj[key].length > 0) {
                    searchTextContent = this.rangePickerToString(obj[key]);
                }
            } else if(key === 'serviceStatus'
                || key === 'strategyStatus'
                || key === 'paymentRule'
                || key === 'changeRule'
                || key === 'billType'
                || key === 'billMonth'
                || key === 'isConsistent'
                || key === 'ensureChargeMethod'
                || key === 'seriousChargeMethod'
                || key === 'isEnable'
                ){
                    
                    const str = key+"Obj[obj['"+key+"']]";
                    searchTextContent = eval(str);
            }else {
                searchTextContent = obj[key];
            }

            if(searchTextContent){
                this.searchTitleArr[this.searchTitleIndex[key]] = <Tags
                                                        searchTitleText={searchTitle[key]} 
                                                        searchText={searchTextContent}
                                                        deleteSearchCashe={e => this.deleteSearchCashe(key)}
                                                    />;
            }
            

        }

        dispatch(getPolicyPackageList({
            pageNow,
            pageSize,
            searchParamsCashe: obj,
            searchTitleArr: this.searchTitleArr,
        }))

    }

    /**
     * 删除某个筛选条件
     */
    deleteSearchCashe(key) {

        const {
            dispatch,
            pageNow,
            pageSize,
            searchParamsCashe,
        } = this.props;

        let obj = { ...searchParamsCashe.toJS(), ...this.searchParamsCashe };

        delete obj[key];
        delete this.searchParamsCashe[key]
        this.searchTitleArr[this.searchTitleIndex[key]] = '';

        if(key === 'serviceCharge'){
            delete this.searchParamsCashe['lowServiceCharge'];
            delete this.searchParamsCashe['highServiceCharge'];
            delete obj['lowServiceCharge'];
            delete obj['highServiceCharge'];
        }else if(key === 'supplierDeadline'
                || key === 'deadlineDay'
                || key === 'insuranceDeadline'
                || key === 'housingFundDeadline'
                || key === 'deductionDate'
        ) {
            delete this.searchParamsCashe[`start${key.substr(0, 1).toUpperCase()}${key.substr(1)}`];
            delete this.searchParamsCashe[`end${key.substr(0, 1).toUpperCase()}${key.substr(1)}`];
            delete obj[`start${key.substr(0, 1).toUpperCase()}${key.substr(1)}`];
            delete obj[`end${key.substr(0, 1).toUpperCase()}${key.substr(1)}`];
        }

        dispatch(getPolicyPackageList({
            pageNow,
            pageSize,
            searchParamsCashe: obj,
            searchTitleArr: this.searchTitleArr,
        }))
    }

    /**
     * 重置
     * @param {*} e 
     */
    resetTable(e) {

        e.preventDefault();

        const {
            dispatch,
            pageNow,
            pageSize,
        } = this.props;

        this.searchParamsCashe = {};
        this.searchTitleArr = [];

        dispatch(getPolicyPackageList({
            pageNow,
            pageSize,
            searchParamsCashe: {},
            searchTitleArr: [],
        }))

    }

    selectRow(keys) {
        this.setState({
            idList: keys,
        })
    }

    export(key) {
        
        const {
            dispatch,
            searchParamsCashe,
        } = this.props;
        
        const {
            idList,
        } = this.state;

        if(key === 'select'){
            if(idList.length === 0){
                message.error('请选择须操作的记录');
                return false;
            }
            dispatch(exportCompanyStrategyExcel({
                idList,
                key,
            }))
        }else if(key === 'search'){
            dispatch(exportCompanyStrategyExcel({
                idList,
                key,
                searchParamsCashe: searchParamsCashe.toJS(),
            }))
        }
    }

    /**
     * 渲染
     */
    render() {

        const {
            isLoading,
            dataSource,
            pageNow,
            searchParamsCashe,
            searchTitleArr,
            exportUrl,
        } = this.props;

        const rowSelection = {
            type: 'checkbox',
            onChange: keys => this.selectRow(keys),
        }

        const colums = this.getcolumns();

        const menu = (
            <Menu onClick={e => this.export(e.key)}>
                <Menu.Item key="select">导出选中项</Menu.Item>
                <Menu.Item key="search">导出筛选项</Menu.Item>
            </Menu>
        );

        return (
            <QueueAnim delay="300">
                <div key="1" style={{ position: 'relative' }}>
                    <div className={policypackageListStyle.policypackageListTitle}>
                        <span>服务商政策包管理</span>

                    </div>
                    <Dropdown overlay={menu} trigger="click">
                        <Button className={policypackageListStyle.export} type="primary" style={{ marginLeft: 8 }}>
                            导出 <Icon type="down" />
                        </Button>
                    </Dropdown>
                    <Button className={policypackageListStyle.resetBtn} onClick={e => this.resetTable(e)}>重置</Button>
                </div>
                <QueueAnim delay="300">
                    <div key="2">
                        <Table
                            title={() => {
                                return <div style={{overflow: 'hidden'}}><Col span="2" style={{width: 120,lineHeight: '34px'}}>筛选条件展示：</Col><Col span="22">{searchTitleArr ? searchTitleArr : ''}</Col></div>;
                            }}
                            bordered={true}
                            loading={isLoading}
                            rowKey={record => record.id}
                            columns={colums}
                            dataSource={dataSource.toJS()}
                            pagination={this.pagination(pageNow)}
                            scroll={{ x: 2300 }}
                            rowSelection={rowSelection}
                        />
                    </div>
                </QueueAnim>
                <iframe src={exportUrl} style={{display: 'none'}}/>
            </QueueAnim>

        );
    }
}

function mapStateToProps(state) {
    const data = state.getIn(['policyPackageList']);

    return {
        dataSource: data.getIn(['dataSource']),
        pageNow: data.get('pageNow'),
        pageSize: data.get('pageSize'),
        rowCount: data.get('rowCount'),
        isLoading: data.get('isLoading'),
        searchParamsCashe: data.get('searchParamsCashe'),
        searchTitleArr: data.get('searchTitleArr'),
        exportUrl: data.get('exportUrl'),
    }
}

export default connect(mapStateToProps)(policypackageListApp);
