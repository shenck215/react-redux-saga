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
    message,
    Tooltip,
} from 'antd';
import moment from 'moment';
import stepStyle from '../../css/policypackage/step-03';
import {
    getForecastPolicyInfo,
    getRemarkOfEdit,
    saveForecastPolicyInfo,
    emptyRemarkData,
} from '../../action/policypackage/step-03-Action';
import FilterTable from '../../component/filterTable/filterTable';

import {
    updateAreaPackgeApi,
} from '../../api/policybase/baseSettingApi';

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
            width: '15%',
        },
        {
            title: '生效时间',
            dataIndex: 'startTime',
            key: 'startTime',
            width: '15%',
            render: (text, record) => {
                let errmsg = `请设置${record.insuranceName}的预测生效时间`;
                if (text) {
                    return <FilterTable
                        dom={
                            <span
                                style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                {moment(text * 1000).format('YYYY-MM')}
                            </span>
                        }
                        ok={() => this.confirm('startTime', record.insuranceType, record)}
                        formStyle={{ width: 170 }}
                    >
                        <MonthPicker
                            key="startTime"
                            vaildType="input"
                            Validator={(rule, value, callback) => this.inputValidator(rule, value, callback, errmsg, record.startTimeMax)}
                            //defaultValue={moment(moment(text * 1000).format('YYYY-MM'),'YYYY-MM')}
                            onChange={(date, dateString) => this.changeData('startTime', dateString, record)}
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
                        ok={() => this.confirm('startTime', record.insuranceType, record)}
                        formStyle={{ width: 170 }}
                    >
                        <MonthPicker
                            key="startTime"
                            vaildType="input"
                            errmsg={errmsg}
                            Validator={(rule, value, callback) => this.inputValidator(rule, value, callback, errmsg, record.startTimeMax)}
                            //defaultValue={moment(moment(text * 1000).format('YYYY-MM'),'YYYY-MM')}
                            onChange={(date, dateString) => this.changeData('startTime', dateString, record)}
                        />
                    </FilterTable>;
                }
            }
        },
        {
            title: '上浮方式',
            dataIndex: 'increaseType',
            key: 'increaseType',
            width: '15%',
            render: (text, record) => {
                let errmsg = `请设置${record.insuranceName}的上浮方式`;
                if (text || text === 0) {
                    return <FilterTable
                        title=""
                        dom={
                            <span
                                style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                {text === 0 ? '比例' : '固定'}
                            </span>
                        }
                        formStyle={{ width: 120 }}
                        ok={() => this.confirm('increaseType', record.insuranceType, record)}
                    >
                        <Select
                            key={new Date()}
                            vaildType="select"
                            errmsg={errmsg}
                            Validator={(rule, value, callback) => this.increaseTypeValidator(rule, value, callback, errmsg)}
                            placeholder="请选择"
                            style={{ width: 120 }}
                            onChange={(value) => this.changeData('increaseType', value, record)}
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
                        formStyle={{ width: 120 }}
                        ok={() => this.confirm('increaseType', record.insuranceType, record)}
                    >
                        <Select
                            key={new Date()}
                            vaildType="select"
                            errmsg={errmsg}
                            Validator={(rule, value, callback) => this.increaseTypeValidator(rule, value, callback, errmsg)}
                            placeholder="请选择"
                            style={{ width: 120 }}
                            onChange={(value) => this.changeData('increaseType', value, record)}
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
            width: '15%',
            render: (text, record) => {

                let errmsg = `请设置${record.insuranceName}的上浮值`;

                if (text) {
                    return <FilterTable
                        title=""
                        dom={
                            <span
                                style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                {record.increaseType === 0 ? `${text}%` : `${text}元`}
                            </span>
                        }
                        formStyle={{ width: 170 }}
                        ok={() => this.confirm('increaseValue', record.insuranceType, record)}
                    >
                        {
                            record.increaseType === 0 ?
                                <Input
                                    addonAfter="%"
                                    key="increaseValue"
                                    vaildType="input"
                                    errmsg={errmsg}
                                    Validator={(rule, value, callback) => this.inputValidator(rule, value, callback, errmsg, record.proIncreaseMax)}
                                    maxValue={record.proIncreaseMax}
                                    onChange={(e) => this.changeData('increaseValue', Number(e.target.value), record)}
                                />
                                :
                                <Input
                                    addonAfter="元"
                                    key="increaseValue"
                                    vaildType="input"
                                    errmsg={errmsg}
                                    Validator={(rule, value, callback) => this.inputValidator(rule, value, callback, errmsg, record.fixedIncreaseMax)}
                                    maxValue={record.fixedIncreaseMax}
                                    onChange={(e) => this.changeData('increaseValue', Number(e.target.value), record)}
                                />
                        }
                    </FilterTable>;
                } else {
                    if (record.increaseType !== null) {
                        return <FilterTable
                            title=""
                            dom={
                                <span
                                    style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }}
                                >
                                    请设置
                                </span>
                            }
                            formStyle={{ width: 170 }}
                            ok={() => this.confirm('increaseValue', record.insuranceType, record)}
                        >
                            {
                                record.increaseType === 0 ?
                                    <Input
                                        addonAfter="%"
                                        key="increaseValue"
                                        vaildType="input"
                                        errmsg={errmsg}
                                        Validator={(rule, value, callback) => this.inputValidator(rule, value, callback, errmsg, record.proIncreaseMax)}
                                        maxValue={record.proIncreaseMax}
                                        onChange={(e) => this.changeData('increaseValue', Number(e.target.value), record)}
                                    />
                                    :
                                    <Input
                                        addonAfter="元"
                                        key="increaseValue"
                                        vaildType="input"
                                        errmsg={errmsg}
                                        Validator={(rule, value, callback) => this.inputValidator(rule, value, callback, errmsg, record.fixedIncreaseMax)}
                                        maxValue={record.fixedIncreaseMax}
                                        onChange={(e) => this.changeData('increaseValue', Number(e.target.value), record)}
                                    />
                            }
                        </FilterTable>;
                    } else {

                        let title = `请先设置${record.insuranceName}的上浮方式`;

                        return <Tooltip title={title}><span style={{ color: '#ccc', textDecoration: 'underline', cursor: 'pointer' }}>请设置</span></Tooltip>;
                    }

                }
            }
        },
        {
            title: '上浮后最低基数或固定收费预算',
            dataIndex: 'remark',
            key: 'remark',
            render: (text, record) => {

                if(text){
                    return <span>{text}</span>
                }else{
                    return <span style={{ color: '#ccc' }}>请先设置上浮规则</span>
                }
                
            }
        }
    ]

    /**
     * 生效时间验证
     * 上浮值验证
     * @param {*} rule 
     * @param {*} value 
     * @param {*} callback 
     */
    inputValidator(rule, value, callback, errmsg,  validValue) {
        if (!value) {
            return callback(errmsg)
        }

        if (rule.field === 'startTime') {
            if (!(validValue && value ? (new Date(value._d).getTime() / 1000).toFixed() > validValue : true)) {
                return callback(`预测政策的生效时间须大于最新明细政策包${moment(validValue * 1000).format('YYYY-MM')}`);
            }

        }

        if (rule.field === 'increaseValue') {

            if(validValue === -1){
                if(!(/(?!^0\.0?0$)^[0-9]+?(\.[0-9]{1,2})?$/.test(value))){
                    return callback(`请输入>=0的数字，最多允许两位小数`);
                }
            }else{
                if (!(/(?!^0\.0?0$)^[0-9]+?(\.[0-9]{1,2})?$/.test(value) && (validValue && value <= validValue && value >= 0))) {
                    return callback(`请输入0<＝X<=${validValue}的数字，最多允许两位小数`)
                }
            }
            

        }

        callback();
    }

    /**
     * 上浮方式验证
     * @param {*} rule 
     * @param {*} value 
     * @param {*} callback 
     */
    increaseTypeValidator(rule, value, callback, errmsg) {

        if (!value && value !== 0) {
            return callback(errmsg);
        }

        callback()
    }

    changeObj = {};

    confirm(key, insuranceType, record) {

        const {
            list,
            dispatch,
        } = this.props;

        const increaseTypeValue = record.increaseType;

        let obj = {
            cityStrategyId: 1,
            insuranceType,
            key,
            value: this.changeObj[key],
            list: list.toJS(),
            increaseType: record.increaseType,
            increaseValue: record.increaseValue,
        }

        return new Promise((resolve, reject) => {
            dispatch(getRemarkOfEdit({
                ...obj,
                resolve,
            }))
        }).then(() => {

            const {
                list,
            } = this.props;

            if(key === 'increaseType' && increaseTypeValue !== this.changeObj['increaseType']){
                dispatch(emptyRemarkData({
                    insuranceType: record.insuranceType,
                    key: 'increaseValue',
                    value: '',
                    list: list.toJS(),
                }))
            }
        })
        
    }

    changeData(key, value, record) {

        const {
            dispatch,
            list,
        } = this.props;

        if (key === 'startTime') {
            this.changeObj[key] = new Date(value).getTime() / 1000;
        } else if (key === 'increaseType') {
            this.changeObj[key] = value;
        } else if (key === 'increaseValue') {
            this.changeObj[key] = value;
        }
    }

    save(){

        const {
            dispatch,
            list,
        } = this.props;  

        dispatch(saveForecastPolicyInfo({
            cityStrategyId: 1,
            cityForecastList: list.toJS(),
        }))  
    }

    render() {

        const {
            areasName,
            list,
            tableIsLoading,
            btnIsLoading,
        } = this.props;

        const colums = this.getColums();

        return (
            <div>
                <div key="1">
                    <div className={stepStyle.title}>设置城市政策<span>{areasName}</span></div>
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
                        loading={tableIsLoading}
                        rowKey={record => record.id}
                        columns={colums}
                        dataSource={list.toJS()}
                        pagination={false}
                    />
                    <div className={stepStyle.btnGroup}>
                        <Button><i className="anticon anticon-double-left"></i>上一步</Button>
                        <Button type="primary" loading={btnIsLoading} onClick={() => this.save()}>保存，下一步<i className="anticon anticon-double-right"></i></Button>
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    const data = state.getIn(['forecastPolicyInfoReducer']);
    return {
        areasName: data.get('areasName'),
        list: data.get('list'),
        btnIsLoading: data.get('btnIsLoading'),
    }
}

export default connect(mapStateToProps)(Step3);