import React from 'react';
import {
    connect,
} from 'react-redux';
import {
    Steps,
    Table,
    Button,
    DatePicker,
    Select,
    Input,
} from 'antd';
import moment from 'moment';
import stepStyle from '../../css/policypackage/step-03';
import {
    getForecastPolicyInfo,
} from '../../action/policypackage/step-03-Action';
import FilterTable from '../../component/filterTable/filterTable';

const Step = Steps.Step;
const {
    MonthPicker,
} = DatePicker;
const Option = Select.Option;

// 页面主组件
class Step3 extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {
            dispatch,
        } = this.props;

        dispatch(getForecastPolicyInfo({
            cityStrategyId: 1,
        }))
    }

    getColums = () => [
        {
            title: '险种',
            dataIndex: 'insuranceName',
            key: 'insuranceName',
        },
        {
            title: '生效时间',
            dataIndex: 'startTime',
            key: 'startTime',
            render: (text) => {
                if (text) {
                    return <FilterTable
                        dom={
                            <span
                                style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                {moment(text * 1000).format('YYYY-MM-DD')}
                            </span>
                        }
                        overlayStyle={{ width: 240 }}
                        formStyle={{ width: 100 }}
                    >
                        <MonthPicker
                            style={{ width: 100 }}
                        />
                    </FilterTable>;
                } else {
                    return <FilterTable
                        title=""
                        dom={
                            <span
                                style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                请设置
                            </span>
                        }
                        overlayStyle={{ width: 240 }}
                        formStyle={{ width: 100 }}
                    >
                        <MonthPicker
                            style={{ width: 100 }}
                        />
                    </FilterTable>;
                }
            }
        },
        {
            title: '上浮方式',
            dataIndex: 'increaseType',
            key: 'increaseType',
            render: (text) => {
                if (text || text === 0) {
                    return <FilterTable
                        title=""
                        dom={
                            <span
                                style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                {text === 1 ? '比例' : '固定'}
                            </span>
                        }
                        overlayStyle={{ width: 240 }}
                        formStyle={{ width: 100 }}
                    >
                        <Select
                            key={new Date()}
                            placeholder="请选择"
                            width={{ width: 100 }}
                        >
                            <Option value={0}>比例</Option>
                            <Option value={1}>固定</Option>
                        </Select>
                    </FilterTable>;
                } else {
                    return <FilterTable
                        title=""
                        dom={
                            <span
                                style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                请设置
                            </span>
                        }
                    >
                        <Select
                            key={new Date()}
                            placeholder="请选择"
                            width={{ width: 100 }}
                        >
                            <Option value={0}>比例</Option>
                            <Option value={1}>固定</Option>
                        </Select>
                    </FilterTable>;
                }
            }
        },
        {
            title: '上浮值',
            dataIndex: 'increaseValue',
            key: 'increaseValue',
            render: (text, record) => {
                if (text) {
                    return <FilterTable
                        title=""
                        dom={
                            <span
                                style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                {record.increaseType === 1 ? `${text}%` : `${text}元`}
                            </span>
                        }
                        overlayClassName={stepStyle.addonAfterInputDiv}
                        formStyle={{ width: 100 }}
                    >
                        {
                            record.increaseType === 1 ?
                                <Input
                                    addonAfter="%"
                                    className={stepStyle.addonAfterInput}
                                />
                                :
                                <Input
                                    addonAfter="元"
                                    className={stepStyle.addonAfterInput}
                                />
                        }
                    </FilterTable>;
                } else {
                    return <FilterTable
                        title=""
                        dom={
                            <span
                                style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                请设置
                            </span>
                        }
                        overlayClassName={stepStyle.addonAfterInputDiv}
                        formStyle={{ width: 100 }}
                    >
                        {
                            record.increaseType === 1 ?
                                <Input
                                    addonAfter="%"
                                />
                                :
                                <Input
                                    addonAfter="元"
                                />
                        }
                    </FilterTable>;
                }
            }
        },
        {
            title: '上浮后最低基数或固定收费预算',
            dataIndex: 'cityStrategyId',
            key: 'cityStrategyId',
            render: (text, record) => {
                return <span>请先设置上浮规则</span>
            }
        }
    ]

    render() {

        const {
            list,
        } = this.props;

        const colums = this.getColums();

        return (
            <div>
                <div key="1">
                    <div className={stepStyle.title}>设置城市政策<span>浙江 - 杭州 - 市区</span></div>
                    <Steps current={2}>
                        <Step title="设置基本信息" />
                        <Step title="设置正式政策包明细" />
                        <Step title="设置预测包上浮策略" />
                        <Step title="设置参保材料" />
                    </Steps>
                </div>
                <div>
                    <Table
                        style={{ marginTop: 20 }}
                        bordered={true}
                        //loading={isLoading}
                        rowKey={record => record.id}
                        columns={colums}
                        dataSource={list.toJS()}
                        pagination={false}
                    />
                    <div className={stepStyle.btnGroup}>
                        <Button><i className="anticon anticon-double-left"></i>上一步</Button>
                        <Button type="primary">保存，下一步<i className="anticon anticon-double-right"></i></Button>
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    const data = state.getIn(['forecastPolicyInfoReducer']);
    return {
        list: data.get('list'),
    }
}

export default connect(mapStateToProps)(Step3);