import React, {
    Component,
} from 'react';
import {
    Table,
    Icon,
    Form,
    Switch,
    Radio,
} from 'antd';


import {
    fetchFn,
} from '../../api/fetch';

/*eslint-disable */

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        render: text => <a href="#">{text}</a>,
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 70,
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    }, {
        title: 'Action',
        key: 'action',
        width: 360,
        render: (text, record) => (
            <span>
                <a href="#">Action - {record.name}</a>
                <span className="ant-divider"></span>
                <a href="#">Delete</a>
                <span className="ant-divider"></span>
                <a href="#" className="ant-dropdown-link">
                    More actions <Icon type="down"></Icon>
                </a>
            </span>
        ),
    }
];

const data = [];

for (let i = 1; i <= 10; i++) {
    data.push({
        key: i,
        name: `Shenck${i}号`,
        age: `${i}2`,
        address: `Hang Zhou.${i} Xi Hu`,
        description: `KeKe , A - ${i}`,
    });
}

const title = () => 'Here is title';

const footer = () => 'Here is footer';

const scroll = { y: 240 };

const expandedRowRender = record => <p>{record.description}</p>;

class TableApp extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

        // fetchFn(javaConfig.cityAjaxUrl).then((data) => {
        //     console.log(data)
        // });

        this.state = {
            bordered: false,
            loading: false,
            pagination: true,
            size: 'default',
            title,
            showHeader: true,
            footer,
            rowSelection: {},
            scroll: undefined,
            expandedRowRender: undefined,
        }
    }

    /**
     * 边框，加载中
     * 状态切换
     */
    handleToggle = (value) => {
        return (enable) => {
            this.setState({
                [value]: enable
            });
        };
    }

    /**
     * title
     */
    handleChangeTitle = (enable) => {
        this.setState({
            title: enable ? title : undefined,
        });
    }

    /**
     * footer
     */
    handleChangeFooter = (enable) => {
        this.setState({
            footer: enable ? footer : undefined,
        });
    }

    /**
     * 显示头
     */
    handleChangeShowHeader = (enable) => {
        this.setState({
            showHeader: enable ? true : false,
        });
    }

    /**
     * 复选框
     */
    handleChangeRowSelection = (enable) => {
        console.log(this.state)
        this.setState({
            rowSelection: enable ? {} : undefined,
        });
    }

    /**
     * 表头固定
     */
    handleChangeScroll = (enable) => {
        this.setState({
            scroll: enable ? scroll : undefined,
        });
    }

    /**
     * 额外的展开行
     */
    handleChangeExpandedRowRender = (enable) => {
        this.setState({
            expandedRowRender: enable ? expandedRowRender : undefined,
        });
    }

    /**
     * 尺寸
     */
    handleChangeSize = (e) => {
        this.setState({
            size: e.target.value,
        });
    }


    render() {
        return (

            <div>
                <Form layout="inline">
                    <FormItem label="bordered">
                        <Switch checked={this.state.bordered} onChange={this.handleToggle('bordered')}></Switch>
                    </FormItem>
                    <FormItem label="loading">
                        <Switch checked={this.state.loading} onChange={this.handleToggle('loading')}></Switch>
                    </FormItem>
                    <FormItem label="pagination">
                        <Switch checked={this.state.pagination} onChange={this.handleToggle('pagination')}></Switch>
                    </FormItem>
                    <FormItem label="title">
                        <Switch checked={!!this.state.title} onChange={this.handleChangeTitle}></Switch>
                    </FormItem>
                    <FormItem label="footer">
                        <Switch checked={!!this.state.footer} onChange={this.handleChangeFooter}></Switch>
                    </FormItem>
                    <FormItem label="showHeader">
                        <Switch checked={this.state.showHeader} onChange={this.handleChangeShowHeader}></Switch>
                    </FormItem>
                    <FormItem label="rowSelection">
                        <Switch checked={this.state.rowSelection} onChange={this.handleChangeRowSelection}></Switch>
                    </FormItem>
                    <FormItem label="scroll">
                        <Switch checked={this.state.scroll} onChange={this.handleChangeScroll}></Switch>
                    </FormItem>
                    <FormItem label="expandedRowRender">
                        <Switch checked={this.state.expandedRowRender} onChange={this.handleChangeExpandedRowRender}></Switch>
                    </FormItem>
                    <FormItem label="Size">
                        <RadioGroup size="default" value={this.state.size} onChange={this.handleChangeSize}>
                            <RadioButton value="default">
                                Default
                            </RadioButton>
                            <RadioButton value="middle">
                                Middle
                            </RadioButton>
                            <RadioButton value="small">
                                Small
                            </RadioButton>
                        </RadioGroup>
                    </FormItem>
                </Form>
                <Table {...this.state} columns={columns} dataSource={data} />
            </div>

        );
    }
}

export default TableApp;

