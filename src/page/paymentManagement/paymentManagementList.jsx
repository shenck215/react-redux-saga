import React, {
    Component,
} from 'react';
import moment from 'moment';
import QueueAnim from "rc-queue-anim/lib";
import { connect } from 'react-redux';
import {
    Table,
    Input,
    Select,
    DatePicker,
    Form,
    Button,
    Modal,
    Layout,
    message,
} from 'antd';
import {
    Link,
} from 'react-router';
import {
    paymentListRequestListData,
    paymentListCancelRequest,
    paymentListIsVisible,
} from '../../action/paymentManagement/paymentManagementListAction';
import paymentManagementListStyle from '../../css/paymentManagement/paymentManagementList';
import FilterTable from '../../component/filterTable/filterTable';
import Tags from '../../component/tags/tags';
let searchParamsCashe = {},
    searchTitle = [];
const Option = Select.Option;
const {
    RangePicker,
} = DatePicker;
const FormItem = Form.Item;
const {
    Sider,
    Content,
} = Layout;
let searchTitleText = {
    'paymentCode': '请款单号：',
    'paymentName': '请款人：',
    'amt': '请款金额：',
    'createTime': '请款时间：',
    'paymentInsurerNames': '相关参保人：',
    'paymentStatus': '状态：',
}

let indexOfObject = {
    'paymentCode': 0,
    'paymentName': 1,
    'amt': 2,
    'createTime': 3,
    'paymentInsurerNames': 4,
    'paymentStatus': 5,
}


class PaymentManagementListApp extends Component {

    constructor(props) {
        super(props);
        /**
         * 初始状态
         */
        this.state = {
            textSum: 0,
            cancelReasonId: '',
            cancelReasonValue: '',
            searchTitle: [],
            paymentCode: '',
            paymentName: '',
            amt: '',
            createTime: '',
            paymentInsurerNames: '',
            paymentStatus: '',
            //filterDropdownVisible: false,
        };
    }

    /**
     * 表格列
     */
    getcolumns = () => [
        {
            title: "操作",
            dataIndex: 'id',
            key: 'id',
            render: (text, record) => {
                if (record.paymentStatus == 1) {
                    return <span className={paymentManagementListStyle.cancelBtn} onClick={() => { this.cancelButton(text) }}>取消</span>
                } else {
                    return '';
                }
            }
        }, {
            title: <FilterTable title="请款单号" type="filter" ok={e => this.searchBtn('paymentCode')}>
                <Input
                    defaultValue={this.props.paymentCode}
                    value={this.state.paymentCode}
                    onChange={e => this.handleSearchChangeCache(e.target['value'], 'paymentCode')}
                />
            </FilterTable>,
            dataIndex: 'paymentCode',
            key: 'paymentCode',
            render: (text, render) => {
                return <Link to="/jsp/react/request/requestdetail" onClick={() => { this.goToDetail(render.id) }}>{text}</Link>
            },
        }, {
            title: <FilterTable title='请款人' type="filter" ok={e => this.searchBtn('paymentName')}>
                <Input
                    defaultValue={this.props.paymentName}
                    value={this.state.paymentName}
                    onChange={e => this.handleSearchChangeCache(e.target['value'], 'paymentName')}
                />
            </FilterTable>,
            dataIndex: 'paymentName',
            key: 'paymentName',
        }, {
            title: <FilterTable title='请款金额(元)' type="filter" ok={e => this.searchBtn('amt')}>
                <Select
                    allowClear={true}
                    defaultValue={this.props.amt? this.props.amt: '请选择'}
                    style={{width: 150}}
                    value={this.state.amt}
                    onChange={value => this.handleSearchChangeCache(value, 'amt')}
                >
                    <Option value="0.00~1000.00">0.00~1000.00</Option>
                    <Option value="1000.01~2000.00">1000.00~2000.00</Option>
                    <Option value="2000.01~3000.00">2000.00~3000.00</Option>
                    <Option value="3000.01~5000.00">3000.00~5000.00</Option>
                    <Option value="5000~">5000以上</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'amt',
            key: 'amt',
            width: '15%',
            render: text => `￥${text}`,
        }, {
            title: <FilterTable title='请款时间' type="filter" ok={e => this.searchBtn('createTime')}>
                <RangePicker 
                    defaultValue={this.props.createTime? this.props.createTime: ''} 
                    value={this.state.createTime} 
                    onChange={(data, dataString) => this.handleSearchChangeCache(data, 'createTime')} 
                />
            </FilterTable>,
            dataIndex: 'createTime',
            key: 'createTime',
            render: text => moment(text * 1000).format('YYYY-MM-DD HH:mm:ss'),
        }, {
            title: <FilterTable title='相关参保人' type="filter" ok={e => this.searchBtn('paymentInsurerNames')}>
                <Input
                    defaultValue={this.props.paymentInsurerNames}
                    value={this.state.paymentInsurerNames}
                    onChange={e => this.handleSearchChangeCache(e.target['value'], 'paymentInsurerNames')}
                />
            </FilterTable>,
            dataIndex: 'paymentInsurerNames',
            key: 'paymentInsurerNames',
            width: '30%',
        }, {
            title: <FilterTable title='状态' type="filter" ok={e => this.searchBtn('paymentStatus')}>
                <Select
                    allowClear={true}
                    defaultValue={this.props.paymentStatus? this.props.paymentStatus: '请选择'}
                    style={{width: 150}}
                    value={this.state.paymentStatus}
                    onChange={value => this.handleSearchChangeCache(value, 'paymentStatus')}
                >
                    <Option value="1">待处理</Option>
                    <Option value="2">已退款</Option>
                    <Option value="3">已取消</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'paymentStatus',
            key: 'paymentStatus',
            render: text => {
                if (text === 1) {
                    return '待处理';
                } else if (text === 2) {
                    return '已退款';
                } else if (text === 3) {
                    return '已取消';
                } else {
                    return '-/-';
                }
            }
        }];
        
    componentWillMount() {
        const {
            dispatch,
            current,
            pageSize,
            paymentCode,
            paymentName,
            amt,
            createTime,
            paymentInsurerNames,
            paymentStatus,
        } = this.props;

        /**
         * 初始化请求
         */
        dispatch(paymentListRequestListData({
            current,
            pageSize,
            paymentCode,
            paymentName,
            amt,
            createTime,
            paymentInsurerNames,
            paymentStatus,
            searchTitle,
        }));
    }

    /**
     * 分页
     */
    pagination = (current) => {

        const {
            dispatch,
            pageSize,
            total,
            paymentCode,
            paymentName,
            amt,
            createTime,
            paymentInsurerNames,
            paymentStatus,
        } = this.props;

        return {
            current,
            total,
            size: "default",
            defaultPageSize: pageSize,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
            onChange: (current) => {

                dispatch(paymentListRequestListData({
                    current,
                    pageSize,
                    paymentCode,
                    paymentName,
                    amt,
                    createTime,
                    paymentInsurerNames,
                    paymentStatus,
                    searchTitle,
                }));
            },
            onShowSizeChange: (current, pageSize) => {

                dispatch(paymentListRequestListData({
                    current,
                    pageSize,
                    paymentCode,
                    paymentName,
                    amt,
                    createTime,
                    paymentInsurerNames,
                    paymentStatus,
                    searchTitle,
                }))
            }
        };
    }

    handleSearchChangeCache = (value, key) => {
        if(key === 'createTime'){
            let v = value.length > 0? moment((value[0]._d).getTime()).format('YYYY-MM-DD') + ' 至 ' + moment((value[1]._d).getTime()).format('YYYY-MM-DD') : '';
            searchParamsCashe[key] = v;
        }else {
            searchParamsCashe[key] = value;
        }
        this.setState({
            [key]: value
        });

    }

    /**
     * 筛选
     * @param {*} e 
     */

    searchBtn(key) {
        
        let searchText;
        
            if(key === 'paymentStatus') {
                let obj = {
                    1: '待处理',
                    2: '已退款',
                    3: '已取消',
                }
                searchText = obj[searchParamsCashe[key]];
            }else {
                searchText = searchParamsCashe[key];
            }

            if (searchParamsCashe[key]) {

                searchTitle[indexOfObject[key]] = <Tags
                                                        searchTitleText={searchTitleText[key]} 
                                                        searchText={searchText}
                                                        deleteSearchCashe={e => this.deleteSearchCashe(key)}
                                                    />;
            }else {
                searchTitle[indexOfObject[key]] = '';
            }

            

        this.setState({
            searchTitle,
            //filterDropdownVisible: false,
        });

        const {
            dispatch,
            current,
            pageSize,
        } = this.props;

        dispatch(paymentListRequestListData({
            current,
            pageSize,
            ...searchParamsCashe,
            searchTitle,
        }));
    }

    /**
     * 删除某个筛选条件
     */
    deleteSearchCashe(key) {

        delete searchParamsCashe[key];
        searchTitle[indexOfObject[key]] = '';
        


        this.setState({
            searchTitle,
            [key]: '',
        });

        const {
            dispatch,
            current,
            pageSize,
        } = this.props;

        dispatch(paymentListRequestListData({
            current,
            pageSize,
            ...searchParamsCashe,
            searchTitle,
        }));
    }

    /**
     * 重置
     * @param {*} e 
     */
    resetTable(e) {

        e.preventDefault();

        const {
            dispatch,
        } = this.props;

        searchParamsCashe = {};
        searchTitle = [];
        this.setState({
            searchTitle,
            paymentCode: '',
            paymentName: '',
            amt: '',
            createTime: '',
            paymentInsurerNames: '',
            paymentStatus: '',
        });

        dispatch(paymentListRequestListData({
            current: 1,
            pageSize: 20,
            ...searchParamsCashe,
            searchTitle,
        }));
    }

    /**
     * 调到详情页
     * @param {*} id 
     */
    goToDetail(id) {
        sessionStorage.setItem('requestDetailId', id);
    }

    /**
     * cancelModalProps
     * @param {*} id 
     */
    cancelButton(id) {
        const {
            dispatch,
            visible,
        } = this.props;

        dispatch(paymentListIsVisible({
            visible: !visible,
        }));

        this.setState({
            cancelReasonId: id,
        });
    }

    /**
     * cancelModalProps确定按钮
     */
    onOk() {
        const {
            dispatch,
            current,
            pageSize,
            paymentCode,
            paymentName,
            amt,
            createTime,
            paymentInsurerNames,
            paymentStatus,
        } = this.props;

        if ((this.state.cancelReasonValue).replace(/(^\s*)|(\s*$)/g, "").length <= 0) {
            message.error('取消原因不能为空', 1);
            return false;
        } else {
            dispatch(paymentListCancelRequest({
                id: this.state.cancelReasonId,
                cancleReason: this.state.cancelReasonValue,
                current,
                pageSize,
                paymentCode,
                paymentName,
                amt,
                createTime,
                paymentInsurerNames,
                paymentStatus,
            }));
        }

    }

    /**
     * cancelModalProps取消按钮
     */
    onCancel() {
        const {
            dispatch,
            visible,
        } = this.props;

        dispatch(paymentListIsVisible({
            visible: !visible,
        }));

    }

    /**
     * 输入取消原因textarea
     * @param {*} e 
     */
    changeText(e) {
        this.setState({
            textSum: (e.target.value).length,
            cancelReasonValue: e.target.value,
        });

    }

    /**
     * 渲染
     */
    render() {

        const {
            dataSource,
            isLoading,
            current,
            total,
            pageSize,
            paymentCode,
            paymentName,
            amt,
            createTime,
            paymentInsurerNames,
            paymentStatus,
            visible,
            reload,
            searchTitle,
        } = this.props;

        
        const cancelModalProps = {
            visible: visible,
            closable: true,
            title: <span className={paymentManagementListStyle.cancelBtnTitle}>取消请款单</span>,
            onCancel: () => this.onCancel(),
            onOk: () => this.onOk(),
            cancelText: '取消',
            okText: '确认',
            afterClose: () => {
                this.setState({
                    cancelReasonId: '',
                    cancelReasonValue: '',
                    textSum: 0,
                })
            }
        }

        return (
            <QueueAnim delay="300">
                <div key="1" style={{position: 'relative'}}>
                    <div className={paymentManagementListStyle.paymentManagementTitle}>
                        <span>请款管理</span>
                        
                    </div>
                    <Button className={paymentManagementListStyle.resetBtn} loading={isLoading} onClick={e => this.resetTable(e)}>重置</Button>
                </div>
                <QueueAnim delay="300">
                    <div key="2">
                        <Table
                            title={() => {
                                return <div><span>筛选条件展示：</span>{searchTitle ? searchTitle : ''}</div>;
                            }}
                            bordered={true}
                            loading={isLoading}
                            rowKey={record => record.id}
                            columns={this.getcolumns()}
                            dataSource={dataSource}
                            pagination={this.pagination(current)}
                        />
                    </div>
                </QueueAnim>
                <Modal {...cancelModalProps}>
                    <div className={paymentManagementListStyle.cancelModal}>
                        <div className={paymentManagementListStyle.left}>
                            取消原因：
                        </div>
                        <div className={paymentManagementListStyle.right}>
                            <div className={paymentManagementListStyle.cancelReason}>
                                <Input
                                    type="textarea"
                                    autosize={{ minRows: 4, maxRows: 6 }}
                                    placeholder="请填写取消原因，控制在100个字之内"
                                    maxLength={100}
                                    onChange={e => this.changeText(e)}
                                    value={this.state.cancelReasonValue}
                                />
                                <span>{this.state.textSum}/100</span>
                            </div>
                        </div>
                    </div>
                    <p className={paymentManagementListStyle.tipText}>
                        取消请款单后，将作废现有请款单，退回关联退款单至服务，如该批退款单仍要请款，需由服务重新发起请款，确认如此操作？
                    </p>
                </Modal>
            </QueueAnim>

        );
    }
}

const PaymentManagementListFormApp = Form.create()(PaymentManagementListApp);

function mapStateToProps(state) {
    const data = state.getIn(['paymentManagementList']);
    return {
        dataSource: data.getIn(['dataSource']).toJS(),
        isLoading: data.getIn(['isLoading']),
        current: data.getIn(['current']),
        total: data.getIn(['total']),
        pageSize: data.getIn(['pageSize']),
        paymentCode: data.getIn(['paymentCode']),
        paymentName: data.getIn(['paymentName']),
        amt: data.getIn(['amt']),
        createTime: data.getIn(['createTime']),
        paymentInsurerNames: data.getIn(['paymentInsurerNames']),
        paymentStatus: data.getIn(['paymentStatus']),
        visible: data.getIn(['visible']),
        searchTitle: data.getIn(['searchTitle']),
    }
}

export default connect(mapStateToProps)(PaymentManagementListFormApp);
