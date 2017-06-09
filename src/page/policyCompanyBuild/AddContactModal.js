/**
 * Created by Steve on 2017/6/3.
 */
/**
 * Created by Steve on 2017/6/2.
 */
import React, { Component } from 'react'
import { Modal, Form, Input, Button, Radio } from 'antd'
import { addContactModalVisible as addContactModalVisibleActionCreator } from '../../action/policyCompanyBuild/policyCompanyBuildAction'

const FormItem = Form.Item

class AddContactModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            wordCount: 0
        }
    }

    render() {
        const { dispatch, visible, cancel, presetContactData, hasReceiverInThisCompany } = this.props
        // console.log('add contact modal', presetContactData)
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

        return (
            <Modal visible={visible} title="添加联系人" cancelText="放弃" okText="确认" onOk={this.submit} onCancel={() => {resetFields(); cancel()}}>
                <Form onSubmit={this.submit}>
                    <FormItem label="姓名" {...formItemLayout} >
                        {
                            getFieldDecorator('contactName', {
                                rules: [{
                                    required: true,
                                    message: '姓名不能为空'
                                }],
                                initialValue: presetContactData?presetContactData.contactName:null
                            })(
                                <Input />
                            )
                        }
                    </FormItem>
                    <FormItem label="手机" {...formItemLayout} >
                        {
                            getFieldDecorator('mobilePhoneNum', {
                                rules: [{
                                    required: true,
                                    message: '手机号码不能为空'
                                }],
                                initialValue: presetContactData?presetContactData.mobilePhoneNum:null
                            })(
                                <Input />
                            )
                        }
                    </FormItem>
                    <FormItem label="邮箱" {...formItemLayout} >
                        {
                            getFieldDecorator('emailAddr', {
                                rules: [{
                                    required: true,
                                    message: '邮箱不能为空'
                                }],
                                initialValue: presetContactData?presetContactData.emailAddr:null
                            })(
                                <Input />
                            )
                        }
                    </FormItem>
                    <FormItem label="固定电话" {...formItemLayout} >
                        {
                            getFieldDecorator('phoneNum', {
                                initialValue: presetContactData?presetContactData.phoneNum:null
                            })(
                                <Input />
                            )
                        }
                    </FormItem>
                    <FormItem label="QQ" {...formItemLayout} >
                        {
                            getFieldDecorator('qqNum', {
                                initialValue: presetContactData?presetContactData.qqNum:null
                            })(
                                <Input />
                            )
                        }
                    </FormItem>
                    <FormItem label="派单表接收人" {...formItemLayout} >
                        {
                            getFieldDecorator('receiver', {
                                initialValue: presetContactData?presetContactData.receiver:0
                            })(
                                <Radio.Group disabled={hasReceiverInThisCompany&&!this.props.isReceiver}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={0}>不是</Radio>
                                </Radio.Group>
                            )
                        }
                        <span className="ant-form-text">{this.props.hasReceiverInThisCompany?'（只能有一个派单表接收人）':''}</span>
                        {
                            // console.log('modal has receiver', hasReceiverInThisCompany)
                        }
                    </FormItem>
                    <FormItem label="备注" {...formItemLayout} >
                        {
                            getFieldDecorator('remark', {
                                initialValue: presetContactData?presetContactData.remark:null
                            })(
                                <Input type="textarea" ref={(el) => this.remarkInputElement = el} placeholder="备注" onChange={this.remarkTextAreaChange}/>
                            )
                        }
                        <span>{`${this.state.wordCount}/20`}</span>
                    </FormItem>
                </Form>
            </Modal>
        )
    }

    submit = (e) => {
        e.preventDefault()
        const { receiveContactDatasource, dispatch } = this.props
        const { resetFields, validateFields } = this.props.form
        validateFields((errors, values) => {
            // console.log('add contact modal', errors, values)
            if(!errors) {
                dispatch(addContactModalVisibleActionCreator({addCityModalVisible: false}))
                // 表单数据回传给index页面处理
                receiveContactDatasource(values)
                resetFields()
            }
        })
    }

    // 控制输入字数
    remarkTextAreaChange = (e) => {
        let length = e.target.value.length
        if (length>20) {
            length = 20
            e.target.value = e.target.value.substring(0, 20)
        }
        this.setState({
            wordCount: length
        })
    }
}

export default Form.create()(AddContactModal)