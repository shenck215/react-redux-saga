/**
 * Created by YiShuai on 2017/6/14.
 */
import React, { Component } from 'react'
import { Modal, Form, Select, Input, Table, Checkbox, Row, Col } from 'antd'
import { toggleAddCityModalVisible, getCompanyInfoByCity, modifyGetCompanyLoadingText } from '../../action/cityManage/cityManageAction'
import style from '../../css/cityManage/modal.css'

const existedCity = ['杭州', '成都']
let selectedCity = -1
let selectedCityIsExist = false

class AddCityForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            packagesListChecked: true
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const { dispatch, formCompanyDataSource, formLoadingText, packagesList } = this.props
        const formItemLayout = {
            labelCol: {
                sm: { span: 4 }
            },
            wrapperCol: {
                sm: { span: 20 }
            }
        }
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item label="城市" {...formItemLayout} >
                    {
                        getFieldDecorator('city', {
                            rules: [{
                                required: true,
                                message: '请先选择城市'
                            }, {
                                validator: (rule, value, callback) => {
                                    if (selectedCityIsExist) {
                                        dispatch(modifyGetCompanyLoadingText('请先选择城市'))
                                        callback('城市已存在')
                                    } else {
                                        dispatch(getCompanyInfoByCity(value))
                                        dispatch(modifyGetCompanyLoadingText('正在获取...'))
                                        callback()
                                    }
                                }
                            }]
                        })(
                            <Select onSelect={(value, option) => this.handleSelect(value, option)}>
                                <Select.Option value={1}>杭州</Select.Option>
                                <Select.Option value={2}>武汉</Select.Option>
                                <Select.Option value={3}>成都</Select.Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label="服务商" {...formItemLayout} >
                    {
                        getFieldDecorator('companyName', {
                            rules: []
                        })(
                            this.generateCompanyItem()
                        )
                    }
                </Form.Item>

                <Form.Item label="开通产品" {...formItemLayout} >
                    {
                        getFieldDecorator('packages', {
                            rules: []
                        })(
                            this.generatePackagesList()
                        )
                    }
                </Form.Item>
            </Form>
        )
    }

    handleSelect = (value, option) => {
        const { validateFields } = this.props.form
        selectedCity = value
        if (existedCity.indexOf(option.props.children) !== -1) {
            selectedCityIsExist = true
        } else {
            selectedCityIsExist = false
        }
        validateFields((err, value) => {
            console.log('err, value', err, value)
        })
    }

    handleSubmit = () => {

    }

    generateCompanyItem = () => {
        const { formCompanyDataSource, formLoadingText } = this.props
        if (selectedCity < 0 || selectedCityIsExist) {
            return (
                <span className={style.loadingText}>{formLoadingText}</span>
            )
        } else {
            if (formCompanyDataSource.length === 0) {
                return (<span className={style.noCompany}>该城市没有可提供正常服务的服务商</span>)
            } else {
                return (<Table dataSource={formCompanyDataSource}/>)
            }
        }
    }

    // 添加城市时动态生成开通产品区域
    generatePackagesList = () => {
        const { packagesList, formLoadingText } = this.props
        if (selectedCity < 0 || selectedCityIsExist) {
            return (
                <span className={style.loadingText}>{formLoadingText}</span>
            )
        } else {
            if (packagesList.length === 0) {
                return <span className={style.noCompany}>请设置当前城市开通的产品套餐</span>
            } else {
                return <Checkbox.Group onChange={this.handlePackagesListCheckChange}>
                    <Row>{this.generateCheckbox()}</Row>
                </Checkbox.Group>
            }
        }
    }

    // 根据packagesList动态生成复选框
    generateCheckbox = () => {
        const { packagesList } = this.props
        return packagesList.map(item =>
            <Col span={6}>
                <Checkbox
                    value={item.packageId}>
                    {item.packageName}
                </Checkbox>
            </Col>)
    }


    handlePackagesListCheckChange = (value) => {
        console.log(value)
    }

}

const AddCityFormWrapper = Form.create()(AddCityForm)

export default class AddCityModal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { visible } = this.props
        return (
            <Modal width={700} title="新增城市" visible={visible} onOk={this.handleModalOk} okText="确认添加" onCancel={this.handleModalCancel}>
                <AddCityFormWrapper {...this.props} ref="addCityForm"/>
            </Modal>
        )
    }

    handleModalOk = () => {
        // this.props.dispatch(toggleAddCityModalVisible(false))
        this.refs.addCityForm.validateFields((error, value) => {
            console.log('error, value', error, value)
        })
    }

    handleModalCancel = () => {
        this.props.dispatch(toggleAddCityModalVisible(false))
        // reset表单
        this.refs.addCityForm.resetFields()
        // reset标记变量
        selectedCity = -1
        selectedCityIsExist = false
        // reset some initialState variable
        this.props.dispatch(modifyGetCompanyLoadingText('请先选择城市'))
    }

}