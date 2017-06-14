/**
 * Created by YiShuai on 2017/6/13.
 */
import React, { Component } from 'react'
import { Form, Button } from 'antd'
import style from '../../css/cityManage/popsearch.css'

class PopForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Form style={{width: 250}}>
                {this.processChildrenToFormItems()}
            </Form>
        )
    }

    processChildrenToFormItems = () => {
        const { children } = this.props
        const { getFieldDecorator, resetFields, validateFields } = this.props.form
        let formItems = []
        React.Children.map(children, (child, index) => {
            formItems.push(
                <Form.Item style={{minWidth: 110, float: 'left'}}>
                    {
                        getFieldDecorator(`child${index}`, {
                            rules: [{
                                required: true,
                                message: '筛选条件不能为空'
                            }]
                        })(child)
                    }
                </Form.Item>
            )
        })
        formItems.push(
            <Form.Item style={{float: 'left'}}>
                <Button className={style.btnAction} htmlType="submit" type="primary" onClick={this.handleConfirm}>确定</Button>
                <Button className={style.btnAction} onClick={this.handleCancel}>取消</Button>
            </Form.Item>
        )
        return formItems
    }

    handleConfirm = () => {
        const { receiveFormData } = this.props
        this.props.form.validateFields((validateError, values) => {
            receiveFormData(true, validateError, values)
        })
    }

    handleCancel = () => {
        const { receiveFormData } = this.props
        this.props.form.resetFields()
        receiveFormData(false)
    }

}

export default Form.create()(PopForm)