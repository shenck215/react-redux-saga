/**
 * Created by YiShuai on 2017/5/31.
 */
import React, { Component } from 'react'
import { Popover, Form, Icon, Button } from 'antd'

class PopFilterForm extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Form>
                {this.constructChildren()}
            </Form>
        )
    }

    constructChildren() {

        const { getFieldDecorator } = this.props.form
        let formItems = []

        // 包装每一个子组件进Form.Item
        React.Children.map(this.props.children, (child, index) => {
            const { props } = child
            const { prefixCls } = props
            if (prefixCls) {
                switch (prefixCls) {
                    case 'ant-input':
                        formItems.push(
                            <Form.Item>
                                {
                                    getFieldDecorator(index.toString(), {rules: [{ required: true, message: '筛选条件不能为空！' }]})(child)
                                }
                            </Form.Item>
                        )
                        break
                    case 'ant-calendar':
                        formItems.push(
                            <Form.Item>
                                {
                                    getFieldDecorator(index.toString(), {rules: [{ required: true, message: '筛选条件不能为空！' }]})(child)
                                }
                            </Form.Item>
                        )
                        break
                    case 'ant-select':
                        formItems.push(
                            <Form.Item>
                                {
                                    getFieldDecorator(index.toString(), {rules: [{ required: true, message: '筛选条件不能为空！' }]})(child)
                                }
                            </Form.Item>
                        )
                        break
                    default:
                        break
                }
            } else {
                formItems.push(child)
            }
        })

        return formItems
    }

}

const PopFilterFormWrapper = Form.create()(PopFilterForm)

export default class PopFilter extends Component {
     constructor(props) {
         super(props)
         this.state = {
             popVisible: false
         }
     }

     constructContent() {
        return (
            <div>
                <PopFilterFormWrapper ref={form => this.form = form}>
                    {this.props.children}
                </PopFilterFormWrapper>

                <div>
                    <Button onClick={() => this.cancel()} size="small" type="default">取消</Button>
                    <Button onClick={() => this.save()} size="small" type="primary" style={{marginLeft: 10}}>保存</Button>
                </div>
            </div>
        )
     }

     save() {
         const { save } = this.props
         this.form.validateFields((err, values) => {
             if (err){
                 save(false)
                 return
             } else {
                 save(true)
                 this.togglePopVisible()
                 this.form.resetFields()
             }
         })
     }

     cancel() {
         this.togglePopVisible()
         this.form.resetFields()
     }

     togglePopVisible() {
         this.setState({
             popVisible: !this.state.popVisible
         })
     }

     render() {
         const { title, iconType, placement } = this.props

         return (
             <div>
                 <Popover content={this.constructContent()} visible={this.state.popVisible} placement={placement ? placement : 'bottom'} trigger="click">
                     {title}<Icon type={iconType} onClick={() => this.togglePopVisible()}/>
                 </Popover>
             </div>
         )
     }

     componentDidMount() {
         if (this.state.popVisible) {
             const delegate = document.body.addEventListener('click', () => {
                 this.togglePopVisible()
                 document.body.removeEventListener('click', delegate)
             })
         }
     }
}