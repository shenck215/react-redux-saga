/**
 * Created by YiShuai on 2017/6/2.
 */
import React, { Component } from 'react'
import { Form, Table, Input, Row, Col, Cascader, Button, DatePicker, Upload, Icon, Popconfirm} from 'antd'
import style from '../../css/policyCompanyBuild/style.css'
import ApiConfig from '../../api/fetchIndex'
import { browserHistory } from 'react-router'
import {
    addCityModalVisible as addCityModalVisibleActionCreator,
    addContactModalVisible as addContactModalVisibleActionCreator,
    isLoading, modifyCompanyCityId, modifyProtocolAddonUrl
} from '../../action/policyCompanyBuild/policyCompanyBuildAction'

const FormItem = Form.Item

let cascader = [{
    label: '杭州',
    value: 'hz',
    children: [{
        label: '下城',
        value: 'xc',
        children: [{
            label: '凤起路',
            value: 'fql'
        }]
    }]
}]

class PolicyCompanyForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            protocolAddon: false,
            city: false,
            contact: false,
            wordCount: 0
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.responseStatus === 1 && nextProps.loading === false) {
            // browserHistory.push({path: '/jsp/react/policycompany/policycompanylist/policycompanydetail', query: {id: id}})
            console.log('responseStatus in form page', nextProps.responseStatus)
        }
    }

    render() {
        const companyNameLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
        }
        const tableLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        }
        const { getFieldDecorator } = this.props.form
        const { cityDataSource, contactDataSource, dispatch } = this.props
        const columnsCity = [{
            title: '服务城市',
            dataIndex: 'serviceCity',
            key: 'serviceCity'
        }, {
            title: '开户地区',
            dataIndex: 'accountAddress',
            key: 'accountAddress'
        }, {
            title: '服务费(元/人月)',
            dataIndex: 'serviceFee',
            key: 'serviceFee'
        }, {
            title: '账单类型',
            dataIndex: 'accountType',
            key: 'accountType'
        }, {
            title: '账单归属月',
            dataIndex: 'accountMonth',
            key: 'accountMonth'
        }, {
            title: '打款日',
            dataIndex: 'payDay',
            key: 'payDay'
        }, {
            title: '可开具证明',
            dataIndex: 'issueCertificate',
            key: 'issueCertificate'
        }, {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (text, record, index) => <span>
                <a onClick={() => this.props.editCityDataSource(index)}>编辑</a>&nbsp;|&nbsp;
                <Popconfirm title="确定删除" onConfirm={() => {this.props.deleteCityDataSource(index)}} okText="确定" cancelText="取消"><a href="#">删除</a></Popconfirm>
            </span>
        }]

        const columnsContact = [{
            title: '姓名',
            dataIndex: 'contactName',
            key: 'contactName'
        }, {
            title: '手机',
            dataIndex: 'mobilePhoneNum',
            key: 'mobilePhoneNum'
        }, {
            title: '邮箱',
            dataIndex: 'emailAddr',
            key: 'emailAddr'
        }, {
            title: '固定电话',
            dataIndex: 'phoneNum',
            key: 'phoneNum'
        }, {
            title: 'QQ',
            dataIndex: 'qqNum',
            key: 'qqNum'
        }, {
            title: '派单表接收人',
            dataIndex: 'receiver',
            key: 'receiver'
        }, {
            title: '备注',
            dataIndex: 'remark',
            key: 'remark'
        }, {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (text, record, index) => <span>
                <a onClick={() => this.props.editContactDataSource(index)}>编辑</a>&nbsp;|&nbsp;
                <Popconfirm title="确定删除" onConfirm={() => {this.props.deleteContactDataSource(index)}} okText="确定" cancelText="取消"><a href="#">删除</a></Popconfirm>
            </span>
        }]

        return(
            <Form onSubmit={(e) => this.submit(e)}>
                <FormItem {...companyNameLayout} label='服务商名称'>
                    {
                        getFieldDecorator('companyName', {
                                rules: [{
                                    required: true,
                                    message: '必填项'
                                }]
                            }
                        )(
                            <Input placeholder="请填写营业执照上的企业名称"/>
                        )
                    }
                </FormItem>
                <FormItem {...companyNameLayout} label='公司地址'>
                    {
                        getFieldDecorator('companyAddress', {
                                rules: [{
                                    required: true,
                                    message: '必填项'
                                }]
                            }
                        )(
                            <Row gutter={4}>
                                <Col span={8}><Cascader options={cascader} placeholder="请选择" onChange={(value) => dispatch(modifyCompanyCityId(value))}/></Col>
                                <Col span={16}><Input placeholder="请填写详细地址"/></Col>
                            </Row>
                        )
                    }
                </FormItem>
                <FormItem {...companyNameLayout} label='合作时间'>
                    {
                        getFieldDecorator('cooperationTime')(
                            <DatePicker.RangePicker placeholder={['合作开始时间', '合作结束时间']} />
                        )
                    }
                </FormItem>
                <FormItem {...companyNameLayout} label='协议附件'>
                    {
                        // getFieldDecorator('protocolAddon', {
                        //     rules: [{
                        //         // validator: (rule, value, callback) => {
                        //         //     if (contactDataSource.length === 0) {
                        //         //         callback('附件大小不能超过5M');
                        //         //         console.log(rule, value, callback)
                        //         //     }
                        //         // }
                        //         valuePropName: 'fileList',
                        //         getValueFromEvent: (e) => {
                        //             console.log('event upload', e)
                        //             console.log(e.fileList)
                        //         }
                        //     }],
                        // })(
                        //     <Upload action={ApiConfig.attachmentUpload} onChange={this.uploadChange}>
                        //         <Button>上传<Icon type="upload"/></Button>
                        //     </Upload>
                        // )
                    }
                    <Upload action={ApiConfig.attachmentUpload} onChange={this.uploadChange} disabled={this.state.protocolAddon}>
                        <Button>上传<Icon type="upload"/></Button>
                    </Upload>
                </FormItem>
                <FormItem {...tableLayout} label='联系人' help={contactDataSource.length !== 0?'':"至少有一个联系人"} validateStatus={contactDataSource.length !== 0?'success':'error'}>
                    {
                        getFieldDecorator('contact', {
                                rules: [{
                                    validator: (rule, value, callback) => {
                                        if (contactDataSource.length === 0) {
                                            console.log('联系人验证不通过', rule, value, callback)
                                            callback('至少有一个联系人');
                                        } else {
                                            callback()
                                            console.log(contactDataSource.length)
                                        }
                                    }
                                }],
                            }
                        )(
                            <div>
                                <Table style={contactDataSource.length ? {}:{display: 'none'}} dataSource={contactDataSource} columns={columnsContact} size="small" bordered={true} pagination={false}/>
                                <Button size="small" type="dashed" onClick={this.showAddContactModal}>+ 新增</Button>
                            </div>
                        )
                    }
                </FormItem>
                <FormItem {...tableLayout} label='服务城市' help={cityDataSource.length !== 0?'':"至少有一个服务城市"} validateStatus={cityDataSource.length !== 0?'success':'error'}>
                    {
                        getFieldDecorator('city', {
                                rules: [{
                                    validator: (rule, value, callback) => {
                                        if (cityDataSource.length === 0) {
                                            console.log('服务城市验证不通过', rule, value, callback)
                                            callback('至少有一个服务城市');
                                        } else {
                                            callback()
                                            // console.log(cityDataSource.length)
                                        }
                                    }
                                }]
                            }
                        )(
                            <div>
                                <Table style={cityDataSource.length !== 0?{}:{display: 'none'}} dataSource={cityDataSource} columns={columnsCity} size="small" bordered={true} pagination={false}/>
                                <Button size="small" type="dashed" onClick={this.showAddCityModal}>+ 新增</Button>
                            </div>
                        )
                    }
                </FormItem>
                <FormItem {...companyNameLayout} label="备注">
                    {
                        getFieldDecorator('remark')(
                            <Input type="textarea" placeholder="备注" onChange={this.remarkTextAreaChange}/>
                        )
                    }
                    <span>{`${this.state.wordCount}/500`}</span>
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('submit')(
                            <Row>
                                <Col offset={4} span={4}><Button type="primary" className={style.saveBtn} htmlType="submit" loading={this.props.loading}>保存</Button></Col>
                            </Row>
                        )
                    }
                </FormItem>
            </Form>
        )
    }

    submit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((errors, values) => {
            // console.log('form', errors, values)
            // console.log(Object.keys(errors))
            if (!errors) {
                this.props.dispatch(isLoading(true))
                this.props.submit(values)
                // 提交成功后dispatch isLoading为false 然后browseRoute跳转到/jsp/react/policyCompanyList/policyCompanyDetail
                // setTimeout(() => this.props.dispatch(isLoading(false)), 2000)
            } else {
                // 自定义验证时验证错误不会自动清空  以下两个字段需要自定义验证 所以手动清空 其他字段不用
                this.props.form.resetFields(['city', 'contact'])
            }
        })
    }

    uploadChange = ({file}) => {
        console.log('file status', file.status)
        // 上传完成 上传按钮不可用
        if (file.status === 'done') {
            this.setState({
                // 附件存在的标志
                protocolAddon: true
            })
        }
        // 移除文件 可重新上传
        if (file.status === 'removed') {
            this.setState({
                protocolAddon: false
            })
        }
        //文件上传返回值
        if(file.response) {
            console.log('返回',file.response.data.url)
            this.props.dispatch(modifyProtocolAddonUrl(file.response.data.url))
            return file.response.data.url
        } else {
            console.log('上传失败')
        }
    }
    showAddContactModal = () => {
        const { dispatch } = this.props
        dispatch(addContactModalVisibleActionCreator({addContactModalVisible: true}))
    }

    showAddCityModal = () => {
        const { dispatch } = this.props
        dispatch(addCityModalVisibleActionCreator({addCityModalVisible: true}))
    }

    // 控制输入字数
    remarkTextAreaChange = (e) => {
        let length = e.target.value.length
        if (length>500) {
            length = 500
            e.target.value = e.target.value.substring(0, 500)
        }
        this.setState({
            wordCount: length
        })
    }
}

export default Form.create()(PolicyCompanyForm)