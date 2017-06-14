/**
 * Created by YiShuai on 2017/6/6.
 */
import React, { Component } from 'react'
import { Popover, Button, Select, Modal } from 'antd'

export default class PopSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popVisible: false,
            serviceStateChangedValue: null
        }
    }

    render() {
        const { defaultSelected, text } = this.props
        return (
            <Popover visible={this.state.popVisible} content={
                <span>
                    <Select defaultValue={defaultSelected} style={{minWidth: 100}}
                            onSelect={(value) => this.setState({serviceStateChangedValue: value})}
                            ref={selectElement => this.selectElement = selectElement }>
                        <Select.Option value={1}>正常服务</Select.Option>
                        <Select.Option value={2}>只减不增</Select.Option>
                        <Select.Option value={3}>停止服务</Select.Option>
                    </Select>
                    <Button style={{marginLeft: 4}} type="primary" onClick={this.save}>保存</Button>
                    <Button style={{marginLeft: 2}} type="danger" onClick={this.cancel}>X</Button>
                </span>}>
                <a onClick={this.pop}>{text}</a>
            </Popover>
        )
    }

    pop = () => {
        this.setState({
            popVisible: true
        })
    }

    save = () => {
        // hasSecuredCustomer应为布尔值
        const { defaultSelected, saveCallback, policyPackageState, hasSecuredCustomer } = this.props
        const {serviceStateChangedValue  } = this.state
        // TODO 改变为正常服务和只减不增的前置条件：政策包状态正常；停止服务的前置条件：名下无在保人员；
        // 如果选项发生改变
        if (serviceStateChangedValue !== defaultSelected) {
            // 如果原本为停止服务
            if (defaultSelected === 3 ) {
                // 改变为正常服务和只增不减的前提是 政策包正常2
                if (policyPackageState === 2)
                    saveCallback(serviceStateChangedValue)
                else
                    Modal.error({title: '该服务城市的政策包不正常，无法改变服务状态，否则会影响客户下单！'})
            } else {
                // 剩下为不是停止服务
                // 改变为停止服务的前提是 名下无在保人员
                if (!hasSecuredCustomer) {
                    saveCallback(serviceStateChangedValue)
                } else {
                    Modal.error({title: '该服务城市还有正在服务中的参保人，状态不能设置为停止服务，否则可能会影响客户的续费！'})
                }
            }

        }
        this.setState({
            popVisible: false
        })
        // console.log('popselect', this.selectElement)
    }

    cancel = () => {
        this.setState({
            popVisible: false
        })
    }


}