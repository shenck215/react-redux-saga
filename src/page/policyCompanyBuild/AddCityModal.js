/**
 * Created by Steve on 2017/6/2.
 */
import React, { Component } from 'react'
import { Modal, Form, Input, Button, Cascader, Select } from 'antd'
import { addCityModalVisible as addCityModalVisibleActionCreator } from '../../action/policyCompanyBuild/policyCompanyBuildAction'

const FormItem = Form.Item

class AddCityModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            wordCount: 0
        }
    }

    render() {
        const { dispatch, visible, cancel, presetCityData } = this.props
        const { getFieldDecorator, resetFields } = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 6
            },
            wrapperCol: {
                xs: 24,
                sm: 16
            }
        }
        const options = [{
            label: '浙江',
            value: '浙江',
            children: [{
                label: '杭州',
                value: '杭州',
                children: [{
                    label: '江干',
                    value: '江干'
                }]
            }]
        }]

        return (
            <Modal visible={visible} title="添加服务城市" cancelText="放弃" okText="确认" onOk={this.submit} onCancel={() => {resetFields(); cancel()}}>
                <Form onSubmit={this.submit}>
                    <FormItem label="服务城市" {...formItemLayout} >
                        {
                            getFieldDecorator('serviceCity', {
                                rules: [{
                                    required: true,
                                    message: '服务城市不能为空'
                                }],
                                initialValue: presetCityData?presetCityData.serviceCity:[]
                            })(
                                <Cascader placeholder="请选择" options={options}/>
                            )
                        }
                    </FormItem>
                    <FormItem label="开户地区" {...formItemLayout} >
                        {
                            getFieldDecorator('accountAddress', {
                                rules: [{
                                    required: true,
                                    message: '开户地区不能为空'
                                }],
                                initialValue: presetCityData?presetCityData.accountAddress:[]
                            })(
                                <Cascader placeholder="请选择" options={options}/>
                            )
                        }
                    </FormItem>
                    <FormItem label="服务费" {...formItemLayout} >
                        {
                            getFieldDecorator('serviceFee', {
                                rules: [{
                                    required: true,
                                    message: '服务费不能为空'
                                }],
                                initialValue: presetCityData?presetCityData.serviceFee:null
                            })(
                                <Input addonAfter={<span>元/人月</span>}/>
                            )
                        }
                    </FormItem>
                    <FormItem label="账单类型" {...formItemLayout} >
                        {
                            getFieldDecorator('accountType', {
                                initialValue: presetCityData?presetCityData.accountType:null
                            })(
                                <Select placeholder="请选择">
                                    <Select.Option value="1">预收</Select.Option>
                                    <Select.Option value="2">实缴</Select.Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem label="账单归属月" {...formItemLayout} >
                        {
                            getFieldDecorator('accountMonth', {
                                initialValue: presetCityData?presetCityData.accountMonth:null
                            })(
                                <Select placeholder="请选择">
                                    <Select.Option value="0">当月</Select.Option>
                                    <Select.Option value="1">次月</Select.Option>
                                    <Select.Option value="2">双月</Select.Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem label="打款日" {...formItemLayout} >
                        {
                            getFieldDecorator('payDay', {
                                initialValue: presetCityData?presetCityData.payDay:null
                            })(
                                <Select placeholder="请选择">
                                    {this.generateDayOption()}
                                </Select>
                            )
                        }
                    </FormItem>
                    <FormItem label="可开具证明" {...formItemLayout} >
                        {
                            getFieldDecorator('issueCertificate', {
                                initialValue: presetCityData?presetCityData.issueCertificate:null
                            })(
                                <Input type="textarea" ref={(el) => this.issueCertificateInputElement = el} placeholder="可开具证明" onChange={this.issueCertificateTextAreaChange} defaultValue={presetCityData?presetCityData.issueCertificate:''}/>

                            )
                        }
                        <span>{`${this.state.wordCount}/100`}</span>
                    </FormItem>
                </Form>
            </Modal>
        )
    }

    submit = (e) => {
        e.preventDefault()
        const { receiveCityDatasource, dispatch } = this.props
        const { resetFields, validateFields } = this.props.form
        validateFields((errors, values) => {
            if(!errors) {
                dispatch(addCityModalVisibleActionCreator({addCityModalVisible: false}))
                Object.assign(values, {serviceAreaId: 0})
                console.log('addCityModal',values)
                // 表单数据回传给index页面处理
                receiveCityDatasource(values)
                resetFields()
                // this.issueCertificateInputElement.refs.input.value = ''
            }
        })
    }

    generateDayOption = () => {
        let children = []
        for (let i = 1;i<=30;i++) {
            children.push(
                <Select.Option value={i} key={i}>{`${i}号`}</Select.Option>
            )
        }
        return children
    }

    // 控制输入字数
    issueCertificateTextAreaChange = (e) => {
        let length = e.target.value.length
        if (length>100) {
            length = 100
            e.target.value = e.target.value.substring(0, 100)
        }
        this.setState({
            wordCount: length
        })
    }
}

export default Form.create()(AddCityModal)