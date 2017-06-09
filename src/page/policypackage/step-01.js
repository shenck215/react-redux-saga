import React from 'react';

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Radio, Table, Modal, Alert, DatePicker } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;

const { MonthPicker } = DatePicker;


// css
import step01Css from '../../css/policypackage/step-01';



// 新增特殊截点日组件
class AddSpecialDayModal extends React.Component {

    state = {
        // 是否显示modal
        specialDayModal: {
            visible: false
        },
        // 特殊服务商截点日 月份
        serviceMonthSelect: {
            value: "1"
        },
        // 特殊参保截点日 月份
        insuredMonthSelect: {
            value: "1"
        },
        // 特殊参保截点日 日期
        insuredDaySelectChange: {
            value: ''
        }

    }

    specialDayModalhandleOk = () => {
        this.setState({
            specialDayModal: {
                visible: false
            }
        })
    }

    specialDayModalhandleCancel = () => {
        this.setState({
            specialDayModal: {
                visible: false
            }
        })
    }

    changeState = () => {
        this.setState({
            specialDayModal: {
                visible: true
            }
        })
    }
    monthPickerChange = (value) => {
        // 特殊截点日允许设置多个，但参保月份不允许重复，因此在选择后需要检测是否已添加，若已添加，则提示“该月份已存在，不需要重复设置”
        console.log(value.format('x'))
    }

    // 设置 特殊服务商截点日 可选日期
    getServiceDayOption = () => {
        let serviceDaySelectVal = this.props.data.serviceDaySelectVal; // 服务商截点日日期
        let insuredMonthSelectVal = this.state.serviceMonthSelect.value; // 1是当月，2是上月

        if (!serviceDaySelectVal || !insuredMonthSelectVal) {
            return;
        }

        if (insuredMonthSelectVal == 1) {
            return this.props.data.getOption(serviceDaySelectVal);
        } else {
            return this.props.data.getOption(28);
        }

    }

    serviceMonthSelectChange = (value) => {

        this.setState({
            serviceMonthSelect: {
                value: value
            }
        })
    }

    insuredMonthSelectChange = (value) => {

        console.log(value)

        this.setState({
            insuredMonthSelect: {
                value: value
            }
        })
    }

    insuredDaySelectChange = (value) => {

    }

    // 设置 特殊参保截点日 可选的日期
    getInsuredDayOption = () => {
        let serviceDaySelectVal = this.props.data.insuredDaySelectVal; // 参保截点日日期
        let insuredMonthSelectVal = this.state.insuredMonthSelect.value; // 1是当月，2是上月

        if (!serviceDaySelectVal || !insuredMonthSelectVal) {
            return;
        }

        if (insuredMonthSelectVal == 1) {
            return this.props.data.getOption(serviceDaySelectVal);
        } else {
            return this.props.data.getOption(28);
        }

    }


    render() {

        // 公共栅格配置
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };


        return (
            <div>
                <Modal
                    title = "设置特殊截点日"
                    visible = { this.state.specialDayModal.visible }
                    onOk = { this.specialDayModalhandleOk }
                    onCancel = { this.specialDayModalhandleCancel }
                    width = "700"
                >
                    <Alert message="注：特殊服务商截点日和特殊参保截点日的当月和上月是分别相对于常规的服务商截点日和参保截点日而言的" type="error" />
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label="参保月份"
                        >
                            <MonthPicker
                                placeholder = "请设置参保月份"
                                onChange = {this.monthPickerChange}
                             />
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="特殊服务商截点日"
                        >
                            <Select
                                className = {step01Css.select}
                                style = {{ width: 100 }}
                                placeholder = "请选择"
                                onChange = { this.serviceMonthSelectChange }
                                defaultValue = {this.state.serviceMonthSelect.value}
                            >
                                <Option value="1">当月</Option>
                                <Option value="2">上月</Option>
                            </Select>
                            &nbsp;
                            <Select
                                className={step01Css.select}
                                style={{ width: 100 }}
                                placeholder="请选择"
                            >
                                {this.getServiceDayOption()}
                            </Select>
                            （用于派单截点日的计算）
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="特殊参保截点日"
                        >
                            <Select
                                className={step01Css.select}
                                style={{ width: 100 }}
                                onChange = { this.insuredMonthSelectChange }
                                defaultValue = { this.state.insuredMonthSelect.value }
                                placeholder="请选择"
                            >
                                <Option value="1">当月</Option>
                                <Option value="2">上月</Option>
                            </Select>
                            &nbsp;
                            <Select
                                className={step01Css.select}
                                style={{ width: 100 }}
                                placeholder="请选择"
                                onChange = { this.insuredDaySelectChange }
                            >
                                {this.getInsuredDayOption()}
                            </Select>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={(
                                <span>
                                    备注说明
                                </span>
                            )}
                        >
                            <Input
                                type="textarea"
                                rows={4}
                                placeholder="请设置备注说明"
                            />
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }

}


// 新增调基生效月组件
class AddChangeBaseModal extends React.Component {

    state = {
       
       changeBaseModal: {
           visible: false
       }

    }

    changeBaseModalhandleOk = () => {
        this.setState({
            changeBaseModal: {
                visible: false
            }
        })
    }
    changeBaseModalhandleCancel = () => {
        this.setState({
            changeBaseModal: {
                visible: false
            }
        })
    }

    changeState = () => {
        this.setState({})
    }

    render() {

        // 公共栅格配置
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };


        return (
            <div>
                <Modal
                    title="设置特殊截点日"
                    visible={this.state.changeBaseModal.visible}
                    onOk={this.changeBaseModalhandleOk}
                    onCancel={this.changeBaseModalhandleCancel}
                    width="500"
                >
                    <Alert message="调基生效月主要控制余额的使用和解冻，为减少公司的损失，请谨慎填写。" type="error" />
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label="调基生效年份"
                        >
                            <Select
                                className={step01Css.select}
                                style={{ width: 100 }}
                                placeholder="请选择"
                            >
                                <Option value="1">2016</Option>
                                <Option value="2">2017</Option>
                                <Option value="3">2018</Option>
                                <Option value="4">2019</Option>
                            </Select>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="社保调基生效月"
                        >
                            <Select
                                className={step01Css.select}
                                style={{ width: 100 }}
                                placeholder="请选择"
                            >
                                <Option value="1">有</Option>
                                <Option value="2">无</Option>
                            </Select>
                            &nbsp;
                            <Select
                                className={step01Css.select}
                                style={{ width: 100 }}
                                placeholder="请选择"
                            >
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                                <Option value="6">6</Option>
                                <Option value="7">7</Option>
                            </Select>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="公积金调基生效月"
                        >
                            <Select
                                className={step01Css.select}
                                style={{ width: 100 }}
                                placeholder="请选择"
                            >
                                <Option value="1">有</Option>
                                <Option value="2">无</Option>
                            </Select>
                            &nbsp;
                            <Select
                                className={step01Css.select}
                                style={{ width: 100 }}
                                placeholder="请选择"
                            >
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                                <Option value="6">6</Option>
                                <Option value="7">7</Option>
                            </Select>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }

}



// 页面主组件
class RegistrationForm extends React.Component {
    state = {
        // 服务商截点日
        serviceDaySelect: {
            value: ''
        },
        // 调基生效月
        changeBaseModal: {
            visible: false
        },
        // 参保截点日 月份
        insuredMonthSelect: {
            value: '1'
        },
        // 参保截点日 日期
        insuredDaySelect: {
            value: ''
        }
    }

    // 新增特殊截点日 动作
    addSpecialDay = () => {
        this.addSpecialDayModal.changeState();
    }

    addChangeBase = () => {

        this.setState({
            changeBaseModal: {
                visible: true
            }
        })
    }
    changeBaseModalhandleOk = () => {
        this.setState({
            changeBaseModal: {
                visible: false
            }
        });
    }

    changeBaseModalhandleCancel = () => {
        this.setState({
            changeBaseModal: {
                visible: false
            }
        });
    }

    serviceDaySelect = (value) => {
        this.setState({
            serviceDaySelect: {
                value: value
            }
        })
    }

    insuredMonthSelectChange = (value) => {
        this.setState({
            insuredMonthSelect: {
                value: value
            }
        })
    }

    getOption = (number) => {
        let optionArray = [];
        for (let i = 1; i <= number; i++) {
            optionArray.push(<Option value={i}>{i}</Option>);
        }
        return optionArray;
    }

    getInsuredDayOption = () => {
        let serviceDaySelectVal = this.state.serviceDaySelect.value; // 服务商截点日日期
        let insuredMonthSelectVal = this.state.insuredMonthSelect.value; // 1是当月，2是上月

        if (!serviceDaySelectVal || !insuredMonthSelectVal) {
            return;
        }

        if (insuredMonthSelectVal == 1) {
            return this.getOption(serviceDaySelectVal);
        } else {
            return this.getOption(28);
        }

    }

    insuredDayChange = () => {

    }

    insuredDaySelectChange = (value) => {
        this.setState({
            insuredDaySelect: {
                value: value
            }
        })
    }

    // 特殊截点日 提示
    specialDayTip = () => {

        let serviceDaySelectVal = this.state.serviceDaySelect.value; // 服务商截点日 日期
        let insuredDaySelectVal = this.state.insuredDaySelect.value; // 参保截点日 日期

        if (!serviceDaySelectVal) {
            return (<div>请先设置服务商截点日</div>);
        } else if (!insuredDaySelectVal) {
            return (<div>请先设置参保截点日</div>);
        } else {
            return '';
        }
    }
    


    render() {

        const { getFieldDecorator } = this.props.form;

        // 公共栅格配置
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 3,
                },
            },
        };


        // 特殊截点日 table 数据
        const columns = [{
            title: '参保月份',
            dataIndex: 'month',
            key: 'month'
        }, {
            title: '特殊服务商截点日',
            dataIndex: 'serviceDay',
            key: 'serviceDay',
        }, {
            title: '特殊参保截点日',
            dataIndex: 'insuredDate',
            key: 'insuredDate',
        }, {
            title: '提前原因（用户端可见）',
            dataIndex: 'reason',
            key: 'reason'
        }, {
            title: '操作',
            dataIndex: 'tool',
            key: 'tool',
            render: function () {
                var result = [<a href="#">编辑</a>, ' | ', <a href="#">删除</a>];
                return result;
            }
        }];

        const data = [
            {
                key: '1',
                month: '2017-02',
                serviceDay: '[当月]5号',
                insuredDate: '[上月]15号',
                reason: '春节'
            },
            {
                key: '2',
                month: '2017-02',
                serviceDay: '[当月]5号',
                insuredDate: '[上月]15号',
                reason: '春节'
            }
        ];


        // 调基生效月 table 数据
        const changeBaseColumns = [{
            title: '调基生效年份',
            dataIndex: 'year',
            key: 'year'
        }, {
            title: '社保调基生效月',
            dataIndex: 'shebaomonth',
            key: 'shebaomonth',
        }, {
            title: '公积金调基生效月',
            dataIndex: 'fundmonth',
            key: 'fundmonth',
        }, {
            title: '操作',
            dataIndex: 'tool',
            key: 'tool',
            render: function () {
                var result = [<a href="#">编辑</a>, ' | ', <a href="#">删除</a>];
                return result;
            }
        }];

        const changeBaseData = [
            {
                key: '1',
                year: '2016年',
                shebaomonth: '7月',
                fundmonth: '无',
            },
            {
                key: '2',
                year: '2017年',
                shebaomonth: '7月',
                fundmonth: '8月',
            },
        ];
        // xxx


        return (
            <Form onSubmit={this.handleSubmit} className={step01Css.form}>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>服务商截点日</span>
                    )}
                >
                    每月&nbsp;
                    {getFieldDecorator('serviceDate', {
                        rules: [{ required: true, message: '' }],
                    })(
                        <Select
                            className={step01Css.select}
                            style={{ width: 100 }}
                            placeholder="请选择"
                            onChange={this.serviceDaySelect}
                        >
                            {this.getOption(31)}
                        </Select>
                        )}
                    &nbsp;日
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>参保截点日</span>
                    )}
                >
                    {getFieldDecorator('insuredDate', {
                        rules: [{ required: true, message: '' }],
                        initialValue: "1"
                    })(
                        <Select
                            className={step01Css.select}
                            style={{ width: 100 }}
                            placeholder="请选择"
                            defaultValue={this.state.insuredMonthSelect.value}
                            onChange={this.insuredMonthSelectChange}
                        >
                            <Option value="1">当月</Option>
                            <Option value="2">上月</Option>
                        </Select>
                        )}
                    &nbsp;每月&nbsp;
                    {getFieldDecorator('insuredDateDay', {
                        rules: [{ required: true, message: '' }],
                    })(
                        <Select
                            className={step01Css.select}
                            style={{ width: 100 }}
                            placeholder="请选择"
                            onChange={this.insuredDaySelectChange}
                        >
                            {this.getInsuredDayOption()}
                        </Select>
                        )}
                    &nbsp;日
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            <Tooltip title="主要应用于大于三天以上的节假日，如：国庆、春节">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            &nbsp;特殊截点日
                        </span>
                    )}
                >
                    {this.specialDayTip()}
                    <AddSpecialDayModal data={
                        {
                            getOption: this.getOption,
                            serviceDaySelectVal: this.state.serviceDaySelect.value,
                            insuredDaySelectVal: this.state.insuredDaySelect.value
                        }
                    } ref={node => this.addSpecialDayModal = node} />


                    {!this.specialDayTip() && <Table className={step01Css.table} columns={columns} dataSource={data} pagination={false} bordered={true} />}
                    {/*{!this.specialDayTip() && <div onClick={this.addSpecialDay} className={step01Css.add}><Icon type="plus" /> 新增</div>}*/}
                    <span onClick={this.addSpecialDay} className={step01Css.add}><Icon type="plus" /> 新增</span>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>缴纳规则</span>
                    )}
                >
                    {getFieldDecorator('paymentRule', {
                        rules: [{ required: true, message: '' }],
                    })(
                        <Select
                            className={step01Css.select}
                            style={{ width: 200 }}
                            placeholder="请选择"
                        >
                            <Option value="1">社保公积金强制</Option>
                            <Option value="2">社保强制公积金可选</Option>
                            <Option value="3">可单缴公积金</Option>
                            <Option value="4">仅缴社保</Option>
                            <Option value="5">仅缴公积金</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>增减规则</span>
                    )}
                >
                    {getFieldDecorator('addReduceRule', {
                        rules: [{ required: true, message: '' }],
                    })(
                        <Select
                            className={step01Css.select}
                            style={{ width: 200 }}
                            placeholder="请选择"
                        >
                            <Option value="1">增当月减当月</Option>
                            <Option value="2">增当月减次月</Option>
                            <Option value="3">增次月减当月</Option>
                            <Option value="4">增次月减次月</Option>
                        </Select>
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            <Tooltip title="What do you want other to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            &nbsp;社保公积金基数
                        </span>
                    )}
                >
                    <Checkbox >一致</Checkbox>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            <Tooltip title="What do you want other to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            &nbsp;社保公积金基数
                        </span>
                    )}
                >
                    <Checkbox >增员需要额外收取</Checkbox>
                    <Checkbox >减员需要额外收取</Checkbox>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            调基生效月
                        </span>
                    )}
                >

                    <AddChangeBaseModal/>
                    <Table className={step01Css.table} columns={changeBaseColumns} dataSource={changeBaseData} pagination={false} bordered={true} />
                    <div onClick={this.addChangeBase} className={step01Css.add}><Icon type="plus" /> 新增</div>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            调基说明
                        </span>
                    )}
                >
                    <Input
                        type="textarea"
                        rows={4}
                        placeholder="调基条件、调基材料、调基政策等信息说明，300个字之内"
                    />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            参保须知
                        </span>
                    )}
                >
                    <Input
                        type="textarea"
                        rows={4}
                        placeholder="参保前告知客户的注意事项，此信息面向客户开放，请谨慎填写，300个字之内"
                    />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            备注说明
                        </span>
                    )}
                >
                    <Input
                        type="textarea"
                        rows={4}
                        placeholder="当前城市的特殊事项说明，仅后台开放，300个字之内"
                    />
                </FormItem>
                <FormItem
                    {...tailFormItemLayout}
                >
                    <Button type="primary" htmlType="submit" size="large">保存，下一步</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;