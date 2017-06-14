import React from 'react'

import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Radio, Table, Modal, Alert, DatePicker,message } from 'antd';
import moment from 'moment'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'

import { addSpecialDayModal as addSpecialDayModalCreator, handleSpecialDayModalConfirmEdit as handleSpecialDayModalConfirmEditCreator,
    handleSpecialDayModalConfirmEditAdd as handleSpecialDayModalConfirmEditAddCreator, serviceDaySelect as serviceDaySelectCreator,
    insuredMonthSelectChange as insuredMonthSelectChangeCreator, insuredDaySelectChange as insuredDaySelectChangeCreator,
    addChangeBase as addChangeBaseCreator,handleChangeBaseModalConfirmEdit as handleChangeBaseModalConfirmEditCreator,
    handleChangeBaseModalConfirmAdd as handleChangeBaseModalConfirmAddCreator, onSpecialDayTableDelete as onSpecialDayTableDeleteCreator,
    onChangeBaseTableDelete as onChangeBaseTableDeleteCreator, onChangeBaseTableEdit as onChangeBaseTableEditCreator,
    onSpecialDayTableEdit as onSpecialDayTableEditCreator

} from '../../action/policyPackage/policyPackageOneAction'


const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const RadioGroup = Radio.Group;

const { MonthPicker } = DatePicker;


// css
import step01Css from '../../css/policypackage/step-01'

//新增特殊截点日弹窗
class AddSpecialDayModalApp extends React.Component {

    render() {
        const { visible, onOk, onCancel, form } = this.props
        const { getFieldDecorator } = form
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
        }

        return (
                <Modal
                    title = "设置特殊截点日"
                    visible = {visible}
                    onCancel = {onCancel}
                    width = "700"
                    footer={
                        [
                            <Button key="Return" size="large" onClick={onCancel}>取消</Button>,
                            <Button key="Submit" size="large" onClick={onOk}>确定</Button>
                        ]
                    }
                >
                    <Alert message="注：特殊服务商截点日和特殊参保截点日的当月和上月是分别相对于常规的服务商截点日和参保截点日而言的" type="error" />
                    <Form >
                        <FormItem
                            {...formItemLayout}
                            label="参保月份"
                        >
                            {getFieldDecorator('insuredMonth',{
                                rules: [{required:true, message:'请设置参保月份'}],
                            })(
                                <MonthPicker
                                    placeholder = "请设置参保月份"
                                    onChange = {this.monthPickerChange}
                                />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="特殊服务商截点日"
                        >
                            {getFieldDecorator('specialServiceMonthSelect',{
                                initialValue: "1"
                            })(
                                <Select
                                    className = {step01Css.select}
                                    style = {{ width: 100 }}
                                >
                                    <Option value="1">当月</Option>
                                    <Option value="2">上月</Option>
                                </Select>
                            )}

                            &nbsp;
                            {getFieldDecorator('specialServiceDaySelect',{
                                rules: [{required:true, message:'请设置特殊服务商截点日'}]
                            })(
                                <Select
                                    className={step01Css.select}
                                    style={{ width: 100 }}
                                    placeholder="请选择"
                                >
                                    <Option value="1">1</Option>
                                    {/*this.getServiceDayOption()*/}
                                </Select>
                            )}

                            （用于派单截点日的计算）
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="特殊参保截点日"
                            required
                        >
                            {getFieldDecorator('specialInsuredMonthSelect',{
                                initialValue: "1"
                            })(
                                <Select
                                    className={step01Css.select}
                                    style={{ width: 100 }}
                                >
                                    <Option value="1">当月</Option>
                                    <Option value="2">上月</Option>
                                </Select>
                            )}
                            &nbsp;
                            {getFieldDecorator('specialInsuredDaySelect',{
                                rules:[{required:true, message:'请设置特殊截点日'}]
                            })(
                                <Select
                                    className={step01Css.select}
                                    style={{ width: 100 }}
                                    placeholder="请选择"
                                >
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    {/*this.getInsuredDayOption()*/}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={(
                                <span>
                                    备注说明
                                </span>
                            )}
                        >
                            {getFieldDecorator('remarkDescription',{
                                rules: [{required: true, message:'设置特殊截点日的原因，此信息用户可见，请谨慎填写'},
                                    {max:20, message:"备注说明请控制在20个字之内"}
                                ]
                            })(
                                <Input
                                    type="textarea"
                                    rows={4}
                                    placeholder="设置特殊截点日的原因，此信息用户可见，请谨慎填写，20个字之内"
                                />
                            )}

                        </FormItem>
                    </Form>
                </Modal>
        )
    }

}
const AddSpecialDayModal = Form.create()(AddSpecialDayModalApp)

// 新增调基生效月组件
class AddChangeBaseModalApp extends React.Component {

    render() {
        const { visible, onOk, onCancel, form } = this.props
        const { getFieldDecorator } = form
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
                    visible={visible}
                    onCancel={onCancel}
                    width="500"
                    footer={
                        [
                            <Button key="Return" size="large" onClick={onCancel}>取消</Button>,
                            <Button key="submit" size="large" type="primary" onClick={onOk}>确认</Button>
                        ]
                    }
                >
                    <Alert message="调基生效月主要控制余额的使用和解冻，为减少公司的损失，请谨慎填写。" type="error" />
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label="调基生效年份"
                        >
                            {getFieldDecorator('changeBaseYear',{
                                rules: [{required: true, message:'请设置生效年份'}]
                            })(
                                <Select
                                    className={step01Css.select}
                                    style={{ width: 100 }}
                                    placeholder="请选择"
                                >
                                    <Option value="1">2016</Option>
                                    <Option value="2">2017</Option>
                                    <Option value="3">2018</Option>
                                    <Option value="4">2019</Option>
                                    <Option value="5">2020</Option>
                                    <Option value="6">2021</Option>
                                    <Option value="7">2022</Option>
                                    <Option value="8">2023</Option>
                                    <Option value="9">2024</Option>
                                    <Option value="10">2025</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="社保调基生效月"
                        >
                            {getFieldDecorator('socialChangeBaseMonthSelect',{
                                initialValue: '1'
                            })(
                                <Select
                                    className={step01Css.select}
                                    style={{ width: 100 }}
                                >
                                    <Option value="1">有</Option>
                                    <Option value="2">无</Option>
                                </Select>
                            )}
                            &nbsp;
                            {getFieldDecorator('socialChangeBaseMonth')(
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
                                    <Option value="8">8</Option>
                                    <Option value="9">9</Option>
                                    <Option value="10">10</Option>
                                    <Option value="11">11</Option>
                                    <Option value="12">12</Option>
                                </Select>
                            )}

                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="公积金调基生效月"
                        >
                            {getFieldDecorator('accumulationChangeBaseMonthSelect')(
                                <Select
                                    className={step01Css.select}
                                    style={{ width: 100 }}
                                    placeholder="请选择"
                                >
                                    <Option value="1">有</Option>
                                    <Option value="2">无</Option>
                                </Select>
                            )}
                            &nbsp;
                            {getFieldDecorator('accumulationChangeBaseMonth')(
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
                            )}

                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }

}
const AddChangeBaseModal = Form.create()(AddChangeBaseModalApp)

// 页面主组件
class RegistrationForm extends React.Component {
    constructor(props) {
        super(props)
        // 特殊截点日 table 列数据
         this.columns = [{
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
            render: (text, record, index) => {
                return([<a href="#" onClick={() => this.onSpecialDayTableEdit(index)}>编辑</a>, ' | ', <a href="#" onClick={() => this.onSpecialDayTableDelete(index)}>删除</a>])
            }
        }],

         this.columnsBase = [
                 {
                     title: '调基生效年份',
                     dataIndex: 'year',
                     key: 'year'
                 }, {
                     title: '社保调基生效月',
                     dataIndex: 'socialMonth',
                     key: 'socialMonth',
                 }, {
                     title: '公积金调基生效月',
                     dataIndex: 'foundationMonth',
                     key: 'foundationMonth',
                 }, {
                     title: '操作',
                     dataIndex: 'tool',
                     key: 'tool',
                     render: (text, record, index) => {
                     return([<a href="#" onClick={() => this.onChangeBaseTableTableEdit(index)}>编辑</a>, ' | ', <a href="#" onClick={() => this.onChangeBaseTableDelete(index)}>删除</a>])
                    }
                 }
             ]

    }

    getOption = (number) => {
        let optionArray = []
        for (let i = 1; i <= number; i++) {
            optionArray.push(<Option value={i}>{i}</Option>);
        }
        return optionArray;
    }
    //页面保存提交
    handleSubmit = (e) => {
        const { dataSource, dataSourceBase } = this.props
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            //新增的城市列表
            const cityAdjustList = []
            for (let i=0; i < dataSourceBase.length; i++) {
                cityAdjustList[i].cityStrategyId = i //?
                cityAdjustList[i].adjustYear = dataSourceBase
            }
            const cityStrategyId = 0//?
            const adjustYear = ''
            const data = {
                //新增的城市列表
            }
            const submitData = {...values, dataSource, dataSourceBase}
            console.log('提交类型', typeof(submitData))
            console.log('提交数据', submitData)
            console.log('类型', typeof(values))
            if (!err) {
                console.log('符合条件打印: ', values)

            }
        })
    }
    //服务商截点日时间
    serviceDaySelect = (value) => {
        const { dispatch } = this.props
        dispatch(serviceDaySelectCreator({
            serviceDaySelect: value
        }))
        // this.setState({
        //     serviceDaySelect: value
        // })
    }
    //参保月选择改变
    insuredMonthSelectChange = (value) => {
        const { dispatch } = this.props
        dispatch(insuredMonthSelectChangeCreator({
            insuredMonthSelect: value
        }))
        // this.setState({
        //     insuredMonthSelect: value
        // })
    }
    //参保日选择改变
    insuredDaySelectChange = (value) => {
        const { dispatch } = this.props
        dispatch(insuredDaySelectChangeCreator({
            insuredDateDaySelected: value
        }))
        // this.setState({
        //     insuredDateDaySelected: value
        // })
    }
    //新增特殊截点日弹窗
    addSpecialDayModal = () => {
        if(!this.props.serviceDaySelect) {
            //显示设置服务商截点Modal并返回
            return(message.error('请先设置服务商截点'))
           // return(alert('请先设置服务商截点'))
        }
        if(!this.props.insuredDateDaySelected) {
            //显示设置参保截点日Modal并返回
            return(message.error('请先设置参保日截点'))
        }
        console.log('点击了新增')
        console.log ('可见性',this.props.specialDayModalVisibility)
        console.log('属性',this.props)
        const { dispatch } = this.props
        dispatch(addSpecialDayModalCreator({
            specialDayModalVisibility: true
        }))

        // this.setState({
        //     specialDayModal: {
        //         isVisibility: true
        //     }
        // })
    }
    //保存特殊截点日弹窗的form属性
    saveFormRef = (form) => {
       this.form = form
    }
    //新增特殊节点日弹窗确定按钮
    handleSpecialDayModalConfirm = ()=> {
        const { count, dataSource, index, countKey, insuredMonths, dispatch } = this.props
        const form = this.form
        form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values)
                // console.log("月份", values.insuredMonth)
               // console.log('描述',typeof(moment(values.insuredMonth).format("YYYY-MM")))

                const month = moment(values.insuredMonth).format("YYYY-MM")
                for (let i=0; i< insuredMonths.length; i++) {
                    if (month === insuredMonths[i]) {
                        return message.error('该月份已存在，不需要重复设置')
                    }
                }
                insuredMonths.push(month)
                const serviceMonth = parseInt(values.specialServiceMonthSelect) === 1 ? '[当月]' : '[下月]'
                const serviceDay = values.specialServiceDaySelect
                const insuredMonth = parseInt(values.specialInsuredMonthSelect) === 1 ? '[当月]' : '[下月]'
                const insuredDay = values.specialInsuredDaySelect
                const reason =  values.remarkDescription

                const newData = {
                    key: countKey,
                    month: month,
                    serviceDay: `${serviceMonth}${serviceDay}号`,
                    insuredDate: `${insuredMonth}${insuredDay}号`,
                    reason: reason,
                    //保存的原始数据
                    // insuredMonths: values.insuredMonth,
                    // specialServiceMonthSelect: parseInt(values.specialServiceMonthSelect),
                    // specialServiceDaySelect: parseInt(values.specialServiceDaySelect),
                    // specialInsuredMonthSelect: parseInt(values.specialInsuredMonthSelect),
                    // specialInsuredDaySelect: parseInt(values.specialInsuredDaySelect)
                }
                if (index >= 0) {//编辑
                    const monthOld = dataSource[index].month


                    for (let i=0; i<insuredMonths.length; i++) {
                        if(monthOld == insuredMonths[i]){
                            insuredMonths.splice(i, 1)
                        }
                    }
                    dataSource.splice(index, 1, newData)
                    
                    dispatch(handleSpecialDayModalConfirmEditCreator(
                        {
                             specialDayModalVisibility: false,
                             dataSource: dataSource,
                             index: -1,
                             countKey: countKey + 1,
                             insuredMonths: insuredMonths
                         }
                    ))

                }else {
                    dispatch(handleSpecialDayModalConfirmEditAddCreator({

                            specialDayModalVisibility: false,
                            dataSource: [...dataSource, newData],
                            count: count + 1,
                            countKey: countKey + 1,
                            insuredMonths: insuredMonths
                        }
                    ))
                }
            }
        })
    }

    //新增特殊截点日弹窗取消按钮
    handleSpecialDayModalCancel = ()=> {
        const { dispatch } = this.props
        dispatch(addSpecialDayModalCreator({
            specialDayModalVisibility: false
        }))
        // this.setState({
        //     specialDayModal: {
        //         isVisibility: false
        //     }
        // })
    }

    //新增调基生效月
    addChangeBase = ()=> {
        const { dispatch } = this.props
        dispatch(addChangeBaseCreator({
            changeBaseModalVisibility: true
        }))
        // this.setState({
        //     changeBaseModal: {
        //         isVisibility: true
        //     }
        // })
    }
    //保存截点
    saveFormRef2 = (form)=> {
        this.form2=form
    }
    //点击调基弹窗确认按钮
    handleChangeBaseModalConfirm = () => {
        const { dataSourceBase , countBase ,countKeyBase, indexBase, yearBase, dispatch} = this.props
        const form = this.form2
        form.validateFields((err, values) => {
            if(!err){
                const year = `${ parseInt(values.changeBaseYear) + 2015}年`
                const yearInt = parseInt(values.changeBaseYear)
                for(let i=0; i < yearBase.length; i++) {
                    if(yearInt == yearBase[i])
                        return message.error('该年份已存在，不需要重复设置')
                }
                yearBase.push(yearInt)
                const sMonth = `${values.socialChangeBaseMonth}`
                const socialMonth = `${parseInt(values.socialChangeBaseMonthSelect) === 1 ? sMonth :  '无'}`
                const fMonth = `${values.accumulationChangeBaseMonth}`
                const foundationMonth = `${parseInt(values.accumulationChangeBaseMonthSelect) === 1 ? fMonth :  '无'}`
                const newData = {
                    key: countKeyBase,
                    year: year,
                    socialMonth: socialMonth,
                    foundationMonth: foundationMonth,
                    //原始数据
                    changeBaseYear: parseInt(values.changeBaseYear) + 2015,
                    socialChangeBaseMonth: parseInt(values.socialChangeBaseMonth),
                    socialChangeBaseMonthSelect: parseInt(values.socialChangeBaseMonthSelect),
                    accumulationChangeBaseMonth: parseInt(values.accumulationChangeBaseMonth),
                    accumulationChangeBaseMonthSelect: parseInt(values.accumulationChangeBaseMonthSelect)

                }

                if(indexBase >= 0){//编辑
                    const yearBaseOld = parseInt(dataSourceBase[indexBase].year) - 2015
                    for(let i=0; i<yearBase.length; i++){
                        if(yearBaseOld == yearBase[i]) {
                            yearBase.splice(i, 1)
                        }
                    }
                    dataSourceBase.splice(indexBase, 1, newData)
                    dispatch(handleChangeBaseModalConfirmEditCreator({
                        changeBaseModalVisibility: false,
                        dataSourceBase: dataSourceBase,
                        countKeyBase: countKeyBase + 1,
                        yearBase: yearBase,
                        indexBase: -1,
                    }))

                }else {
                    dispatch(handleChangeBaseModalConfirmAddCreator({
                        changeBaseModalVisibility: false,
                        dataSourceBase: [...dataSourceBase, newData],
                        countBase: countBase + 1,
                        countKeyBase: countKeyBase + 1,
                        yearBase: yearBase,
                    }))
                }
            }
        })
    }
    //点击调基弹窗取消按钮
    handleChangeBaseModalCancel = () => {
        const { dispatch } = this.props
        dispatch(addChangeBaseCreator({
            changeBaseModalVisibility: false
        }))
        // this.setState({
        //     changeBaseModal: {
        //         isVisibility: false
        //     }
        // })
    }

    //获取参保截点日
    getInsuredDayOption = () => {
        let serviceDaySelectVal = this.props.serviceDaySelect // 服务商截点日日期
        let insuredMonthSelectVal = this.props.insuredMonthSelect // 1是当月，2是上月

        if (!serviceDaySelectVal || !insuredMonthSelectVal) {
            return;
        }

        if (insuredMonthSelectVal == 1) {
            return this.getOption(serviceDaySelectVal);
        } else {
            return this.getOption(28);
        }
    }

    // 特殊截点日 提示控制新增表格的显示
    specialDayTip = () => {

        let serviceDaySelectVal = this.props.serviceDaySelect // 服务商截点日 日期
        let insuredDaySelectVal = this.props.insuredDateDaySelected // 参保截点日 日期
        let count = this.props.count

        if (!serviceDaySelectVal) {
            return true
        } else if (!insuredDaySelectVal) {
            return true
        } else if(!count){
            return true
        } else {
            return false
        }
    }
    //控制调基生效月表格显示
    baseTip = () => {
        let countBase = this.props.countBase
        if(!countBase) {
            return true
        }else {
            return false
        }
}
    //特殊截点日表格编辑
    onSpecialDayTableEdit = (index) => {
        const { dispatch } = this.props
        dispatch(onSpecialDayTableEditCreator({
            specialDayModalVisibility: true,
            index: index
        }))
        // this.setState({
        //     specialDayModal: {
        //         isVisibility: true
        //     },
        //     index: index
        // })
    }
    //特殊截点日表格删除
    onSpecialDayTableDelete = (index) => {
       // console.log('删除', index)
        const dataSource = [...this.props.dataSource]
        const insuredM = dataSource[index].month
        const { count, insuredMonths, dispatch } = this.props
        for(let i=0; i<insuredMonths.length; i++) {
            if (insuredM === insuredMonths[i]){
                insuredMonths.splice(i, 1)
            }
        }
        dataSource.splice(index, 1)
        dispatch(onSpecialDayTableDeleteCreator({
            dataSource,
            count: count -1,
            insuredMonths: insuredMonths
        }))
        // this.setState({
        //     dataSource,
        //     count: count -1,
        //     insuredMonths: insuredMonths
        // })
    }
    //调基表格编辑
    onChangeBaseTableTableEdit = (index) => {
        const { dispatch } = this.props
        dispatch(onChangeBaseTableEditCreator({
            changeBaseModalVisibility: true,
            indexBase: index
        }))
    }
    //调基表格删除
    onChangeBaseTableDelete = (index) => {
        const dataSourceBase = [...this.props.dataSourceBase]
        const { countBase, yearBase, dispatch } = this.props
        const yearInt = parseInt(dataSourceBase[index].year) -2015
        for(let i=0; i<yearBase.length; i++){
            if(yearInt == yearBase[i]) {
                yearBase.splice(i, 1)
            }
        }
        dataSourceBase.splice(index, 1)
        dispatch(onChangeBaseTableDeleteCreator({
            dataSourceBase,
            countBase: countBase - 1,
            yearBase: yearBase,
        }))
        // this.setState({
        //     dataSourceBase,
        //     countBase: countBase - 1,
        //     yearBase: yearBase,
        // })
    }
    //调基数据源转换为表格数据源
    changeBaseDateSource = (datas) => datas.map((data) => ({
            key: data.key,
            year: data.year,
            socialMonth: data.socialMonth,
            foundationMonth: data.foundationMonth,
        })
    )
    render() {

        const { getFieldDecorator } = this.props.form;
        const columns = this.columns
        const dataSource = this.props.dataSource

        const dataSourceBase = this.changeBaseDateSource(this.props.dataSourceBase)
        const columnsBase = this.columnsBase
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
                        rules: [{ required: true, message: '请设置服务商截点日' }],
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
                            defaultValue="暂不设置"
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
                    {!this.specialDayTip() && <Table className={step01Css.table} columns={columns} dataSource={dataSource} pagination={false} bordered={true} />}
                    <span onClick={this.addSpecialDayModal} className={step01Css.add}><Icon type="plus" /> 新增</span>
                </FormItem>
                {/*visible={this.state.specialDayModal.isVisibility}*/}
                <AddSpecialDayModal
                    ref={this.saveFormRef}
                    visible={this.props.specialDayModalVisibility}
                    onOk={this.handleSpecialDayModalConfirm}
                    onCancel={this.handleSpecialDayModalCancel}
                />
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>缴纳规则</span>
                    )}
                >
                    {getFieldDecorator('paymentRule', {
                        rules: [{ required: true, message: '请设置缴纳规则' }],
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
                        rules: [{ required: true, message: '请设置增减规则' }],
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
                            <Tooltip title="设置一致后,该城市基数的缴纳范围为:在同一参保类型中,社保和公积金所有险种中基数取最小值作为共同的下限,取最大值作为共同的上限">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            &nbsp;社保公积金基数
                        </span>
                    )}
                >
                    {getFieldDecorator('selecteUniform')(
                        <Checkbox >一致</Checkbox>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            调基生效月
                        </span>
                    )}
                >
                    {!this.baseTip() && <Table className={step01Css.table} columns={columnsBase} dataSource={dataSourceBase} pagination={false} bordered />}
                    <div onClick={this.addChangeBase} className={step01Css.add}><Icon type="plus" /> 新增</div>
                </FormItem>
                <AddChangeBaseModal
                    ref={this.saveFormRef2}
                    visible={this.props.changeBaseModalVisibility}
                    onOk={this.handleChangeBaseModalConfirm}
                    onCancel={this.handleChangeBaseModalCancel}
                />
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            增员单导出设置
                        </span>
                    )}
                >
                    {getFieldDecorator('exportInsuredType')(
                        <Checkbox >导出参保类型</Checkbox>
                    )}
                    {getFieldDecorator('residenceType')(
                        <Checkbox >户口性质显示省内省外</Checkbox>
                    )}

                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            调基说明
                        </span>
                    )}
                >
                    {getFieldDecorator('baseDescription', {
                        rules: [{max: 300, message:"调基说明请控制在300个字之内"}]
                    })(
                        <Input
                            type="textarea"
                            rows={4}
                            placeholder="调基条件、调基材料、调基政策等信息说明，300个字之内"
                        />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            参保须知
                        </span>
                    )}
                >
                    {getFieldDecorator('insuredNotice',{
                        rules: [{max: 300, message:"用户参保须知请控制在300个字之内"}]
                    })(
                        <Input
                            type="textarea"
                            rows={4}
                            placeholder="参保前告知客户的注意事项，此信息面向客户开放，请谨慎填写，300个字之内"
                        />
                    )}

                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            备注说明
                        </span>
                    )}
                >
                    {getFieldDecorator('remarks', {
                        rules: [{max: 300, message:"备注说明请控制在300个字之内"}]
                    })(
                        <Input
                            type="textarea"
                            rows={4}
                            placeholder="当前城市的特殊事项说明，仅后台开放，300个字之内"
                        />
                    )}
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

const WrappedRegistrationForm = Form.create()(RegistrationForm)

function mapStateToProps(state) {
    const data = state.getIn(['policyPackageOneReducer'])
    return {
        specialDayModalVisibility: data.getIn(['specialDayModalVisibility']),
        dataSource: data.getIn(['dataSource']).toJS(),
        count: data.getIn(['count']),
        countKey: data.getIn(['countKey']),
        index: data.getIn(['index']),
        insuredMonths: data.getIn(['insuredMonths']).toJS(),
        changeBaseModalVisibility: data.getIn(['changeBaseModalVisibility']),
        dataSourceBase: data.getIn(['dataSourceBase']).toJS(),
        countBase: data.getIn(['countBase']),
        indexBase: data.getIn(['indexBase']),
        countKeyBase: data.getIn(['countKeyBase']),
        yearBase: data.getIn(['yearBase']).toJS(),
        serviceDaySelect: data.getIn(['serviceDaySelect']),
        insuredMonthSelect: data.getIn(['insuredMonthSelect']),
        insuredDateDaySelected: data.getIn(['insuredDateDaySelected']),
    }
}

export default connect(mapStateToProps)(WrappedRegistrationForm);