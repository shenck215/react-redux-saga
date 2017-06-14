import React from 'react';
import {
    Popover,
    Button,
    Icon,
    Form,
    Tooltip,
} from 'antd';
import moment from 'moment';
const FormItem = Form.Item;
import filterTableStyle from '../../css/plugin/filterTable/filterTable';

/**
 * title 标题
 * type icon图标
 * dom icon内容
 * hasBtn 是否有按钮 true为有
 * ok 确认按钮方法
 * cancel 取消按钮方法
 * fixed 是否固定在父节点 默认false，指向body
 * placement 浮层方向
 * overlayStyle 浮层样式
 * overlayClassName 浮层类名
 * formStyle 外层form样式
 * 
 * 若需要验证
 * vaildType子节点类型
 * Validator校验规则functions
 * defaultValue默认值
 * 
 */

class FilterTableFrom extends React.Component {

    constructor(props) {
        super(props);
    }

    getChildren() {
        const {
            children,
            form,
        } = this.props;
        const checkConfirm = this.checkConfirm;
        const { getFieldDecorator } = this.props.form;
        let node = [];

        React.Children.map(children, function (child, i) {
            const {
                key,
                props,
            } = child;
            const {
                vaildType,
                Validator,
                defaultValue,
             } = props;

            if (vaildType) {
                switch (vaildType) {
                    case 'input':
                        node.push(
                            <FormItem>{
                                getFieldDecorator(key, {
                                    rules: [
                                        {
                                            validator: Validator
                                        }
                                    ],
                                    initialValue: defaultValue
                                })(
                                    child
                                )}
                            </FormItem>
                        );
                        break;
                    case 'select':

                        node.push(
                            <FormItem>{
                                getFieldDecorator(key, {
                                    rules: [
                                        {
                                            validator: Validator
                                        }
                                    ],
                                    initialValue: defaultValue
                                })(
                                    child
                                    )}
                            </FormItem>
                        );
                        break;
                    default:
                        throw new Error('no type in vaildType')
                }
            } else {
                node.push(
                    <FormItem>{child}</FormItem>
                )

            }

        });
        return node;
    }
    render() {
        const {
             formStyle
        } = this.props;
        const children = this.getChildren();
        return (
            <Form style={formStyle ? formStyle : {}} className="form_style">
                {children}
            </Form>
        )
    }
}
const FilterTableFromContent = Form.create()(FilterTableFrom);


class FilterTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            controlVisible: false,
        }
    }
    controlVisible() {

        const {
            tabDisabled,
        } = this.props;
        this.setState({
            controlVisible: !this.state.controlVisible,
        });

        if (tabDisabled) {
            if (!this.state.controlVisible) {
                document.querySelector('.ant-tabs-tab-active').setAttribute("class", "ant-tabs-tab ant-tabs-tab-active ant-tabs-tab-disabled");
                let arr = document.querySelectorAll('.ant-tabs-tab:not(.ant-tabs-tab-active)');
                for (let item of arr) {
                    item.setAttribute("class", "ant-tabs-tab ant-tabs-tab-disabled");
                }
            } else {
                document.querySelector('.ant-tabs-tab-active').setAttribute("class", "ant-tabs-tab ant-tabs-tab-active");
                let arr = document.querySelectorAll('.ant-tabs-tab:not(.ant-tabs-tab-active)');
                for (let item of arr) {
                    item.setAttribute("class", "ant-tabs-tab");
                }
            }
        }

    }

    ok() {
        const {
            reg,
            ok,
            children,
        } = this.props;


        /**
         * 验证
         */
        let result = false;
        this.FilterTableFromContent.validateFields((err, values) => {

            if (!err) {
                //.log('Received values of form: ', values);
                result = true;
            }
        });
        if (!result) return;


        if (ok) {

            ok();

            this.controlVisible();
            return;
        }

        this.controlVisible();

    }

    cancel() {

        const {
            cancel,
        } = this.props;

        if (cancel) {
            cancel();
            this.controlVisible();
            return;
        }
        this.controlVisible();
    }

    getPopupContainer(triggerNode) {

        return triggerNode.parentNode;
    }

    contentProps() {
        const {
            children,
            hasBtn = true,
            btnStyle = {},
            formStyle,
        } = this.props;
        return (
            <div style={{ minWidth: 200, overflow: 'hidden' }}>
                <FilterTableFromContent formStyle={formStyle} ref={node => this.FilterTableFromContent = node}>{children}</FilterTableFromContent>
                {
                    hasBtn ?
                        <div className="btn_div" style={btnStyle}>
                            <Button
                                className="ok"
                                type="primary"
                                onClick={e => this.ok(e)}
                            >
                                保存
                        </Button>
                            <Button
                                className="cancel"
                                onClick={e => this.cancel(e)}
                            >
                                取消
                        </Button>
                        </div>
                        :
                        ''
                }
            </div>
        )
    }
    render() {
        const {
            title,
            placement,
            type,
            dom,
            overlayStyle,
            overlayClassName,
            fixed,
        } = this.props;

        let popoverProps = {
            content: this.contentProps(),
            trigger: "click",
            visible: this.state.controlVisible,
            placement: placement ? placement : 'bottom',
            overlayStyle: overlayStyle ? overlayStyle : {},
            overlayClassName: overlayClassName ? overlayClassName : '',
            arrowPointAtCenter: true,
        }

        if (fixed) {
            popoverProps.getPopupContainer = (triggerNode) => this.getPopupContainer(triggerNode);
        }

        return (
            <div style={{ position: 'relative' }}>
                {title}

                <Popover
                    {...popoverProps}
                >
                    <Icon type={type ? type : ''} onClick={() => this.controlVisible()}>
                        {dom ? dom : ''}
                    </Icon>
                </Popover>

            </div>
        );
    }
}


export default FilterTable;