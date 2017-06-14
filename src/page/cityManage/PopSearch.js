/**
 * Created by YiShuai on 2017/6/13.
 */
import React, { Component } from 'react'
import { Popover, Icon, Button } from 'antd'
import PopForm from './PopForm'
import style from '../../css/cityManage/popsearch.css'

export default class PopSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popVisible: false
        }
    }

    render() {
        const popProps = {
            content: <div className={style.formContainer}>
                <PopForm receiveFormData={this.receiveFormData}>{this.props.children}</PopForm>
            </div>,
            placement: 'bottom',
            trigger: 'click',
            visible: this.state.popVisible
        }

        return (
            <Popover ref={el => this.popover = el} {...popProps}>
                <span onClick={this.pop}>{this.props.text}<Icon type="filter"/></span>
            </Popover>
        )
    }

    pop = () => {
        this.setState({
            popVisible: !this.state.popVisible
        })
    }

    receiveFormData = (actionType, validatedError, values) => {
        if (actionType) {
            console.log('validatedError, values', validatedError, values)
            if (!validatedError) {
                this.setState({
                    popVisible: false
                })
                this.props.confirm(values)
            } else {
                return
            }
        } else {
            this.setState({
                popVisible: false
            })
        }
    }

    // componentDidUpdate(prevProps, prevState) {
    //     let listener
    //     if (this.state.popVisible) {
    //         listener = document.body.addEventListener('click', (e) => {
    //             console.log('target', e, e.target, this.popover)
    //             if (e.target !== this.popover) {
    //                 this.setState({
    //                     popVisible: false
    //                 })
    //             }
    //         }, false)
    //     } else if(listener) {
    //         document.body.removeEventListener('click', listener)
    //     }
    // }

}