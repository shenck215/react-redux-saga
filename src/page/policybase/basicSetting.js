import React from 'react';
import QueueAnim from "rc-queue-anim/lib";
import {
    Table,
    Select,
    Input,
    Tabs,
    Button,
    Icon,
    Col,
    Modal,
    message,
    Checkbox,
    Tooltip,
} from 'antd';
import { connect } from 'react-redux';
import FilterTable from '../../component/filterTable/filterTable';
import ControlledComponent from '../../component/controlledComponent/controlledComponent';
import MaskPrompt from '../../component/maskPrompt/maskPrompt';
import basicSettingStyle from '../../css/policybase/basicSetting';
import {
    getBasicSettingList,
    getBasicSettingUpdate,
    getUpdateSocialSet,
    existCitySocialSet,
    getDeleteSocialSet,
    getUpdateAreaPackge,
    getSmallTableDate,
    getPackageListData,
    deleteSocialSuccess,
    deleteSocialError,
} from '../../action/policybase/basicSettingAction';

const Option = Select.Option;
const TabPane = Tabs.TabPane;
const CheckboxGroup = Checkbox.Group;

class BasicSettingApp extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

        const {
            dispatch,
            start,
            length,
            index,
        } = this.props;

        this.state = {
            visible: false,
            smallTableVisible: false,
            isEdit: true,
            hasBtn: false,
        }


        dispatch(getBasicSettingList({
            index,
            start,
            length,
        }));
    }

    setChangeCache = {
        insuranceTel: '',
        insuranceUrl: '',
        housingFundTel: '',
        housingFundUrl: '',
        existAreaPackage: [],
    };

    getSelect() {
        let selectArr = [];
        for (let i = 1; i <= 30; i++) {
            selectArr.push(<Option value={i}>{i}号</Option>);
        }
        return selectArr;
    }

    /**
     * 表格列
     */
    getcolumns = () => [
        {
            title: <FilterTable title="省份"
                type="filter"
                fixed={true}
                placement="right"
                ok={e => this.searchBtn('province')}
            >
                <Select
                    key="province"
                    vaildType="select"
                    placeholder="请选择"
                    allowClear={true}
                    //defaultValue={this.props.province ? this.props.province : '请选择'}
                    
                //value={this.state.province}
                //onChange={value => this.handleSearchChangeCache(value, 'province')}
                >
                    <Option value="zhejiang">浙江</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'provinceName',
            key: 'provinceName',
        }, {
            title: <FilterTable
                title="城市"
                type="filter"
                fixed={true}
                ok={e => this.searchBtn('city')}
            >
                <Select
                    key="city"
                    vaildType="select"
                    placeholder="请选择"
                    allowClear={true}
                    //defaultValue={this.props.city ? this.props.city : '请选择'}
                    style={{ width: '100%' }}
                //value={this.state.city}
                //onChange={value => this.handleSearchChangeCache(value, 'province')}
                >
                    <Option value="hangzhou">杭州</Option>
                </Select>
            </FilterTable>,
            dataIndex: 'cityName',
            key: 'cityName',
        },
        {
            title: '区域',
            // title: <FilterTable 
            //             title="区域" 
            //             fixed={true}
            //             dom={
            //                 <span style={{color:'#F60',textDecoration: 'underline',cursor:'pointer'}}>请设置</span>
            //             }
            //             ok={e => this.searchBtn('city')}
            //         >
            //     <Input key="input1" vaildType="input" />
            //     <Input key="input2" vaildType="input" />
            // </FilterTable>,
            dataIndex: 'areaName',
            key: 'areaName',
        }, {
            title: '是否属主城区',
            dataIndex: 'isMainArea',
            key: 'isMainArea',
            render: (text, record) => {

                if (text) {
                    return <FilterTable
                        title=""
                        dom={
                            <span
                                style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                是
                                    </span>
                        }
                        fixed={true}
                        ok={e => this.updateBtn(record.areaId, 'isMainArea')}
                    >
                        <Select
                            laceholder="请选择"
                            onChange={value => this.handleSetChangeCache(value, 'isMainArea')}
                            defaultValue={text}
                        >
                            <Option value={true}>是</Option>
                            <Option value={false}>否</Option>
                        </Select>
                    </FilterTable>;
                } else {
                    return <FilterTable
                        title=""
                        dom={
                            <span
                                style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                否
                                    </span>

                        }
                        fixed={true}
                        ok={e => this.updateBtn(record.areaId, 'isMainArea')}
                    >
                        <Select
                            placeholder="请选择"
                            onChange={value => this.handleSetChangeCache(value, 'isMainArea')}
                            defaultValue={text}
                        >
                            <Option value={true}>是</Option>
                            <Option value={false}>否</Option>
                        </Select>
                    </FilterTable>;
                }
            }
        }, {
            title: '官方查询信息',
            dataIndex: 'existInfo',
            key: 'existInfo',
            render: (text, record, index) => {

                const {
                    areaId,
                    insuranceTel,
                    insuranceUrl,
                    housingFundTel,
                    housingFundUrl,
                    provinceName,
                    cityName,
                    areaName,
                } = record;

                let thisId = `existInfo-${index}`;



                let obj = {
                    thisId,
                    areaId,
                    provinceName,
                    cityName,
                    areaName,
                    insuranceTel,
                    insuranceUrl,
                    housingFundTel,
                    housingFundUrl,
                }

                if (text) {
                    return <FilterTable
                        title=""
                        dom={
                            <span
                                id={thisId}
                                style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}
                            >
                                查看
                                    </span>
                        }
                        hasBtn={false}
                        tabDisabled={true}
                        overlayStyle={{width: 430}}
                    >
                        <div className={basicSettingStyle.existInfoDiv} style={{ width: 400 }}>
                            <div style={{ height: 30 }}>
                                <Col span="20" className={basicSettingStyle.existInfoCol20}>{provinceName} - {cityName} - {areaName}</Col>
                                <Col span="4" className={basicSettingStyle.existInfoCol4}>
                                    <span onClick={e => this.existInfoEditBtn(obj)}>编辑</span>
                                </Col>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                        <th width="90">分类</th>
                                        <th>电话</th>
                                        <th>网址</th>
                                    </tr>
                                    <tr>
                                        <td>社保局</td>
                                        <td>{insuranceTel}</td>
                                        <td>http://{insuranceUrl}</td>
                                    </tr>
                                    <tr>
                                        <td>公积金中心</td>
                                        <td>{housingFundTel}</td>
                                        <td>http://{housingFundUrl}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </FilterTable>;
                } else {
                    return <span
                        id={thisId}
                        style={{ color: '#F60', textDecoration: 'underline', cursor: 'pointer' }}
                        onClick={e => this.existInfoEditBtn(obj)}
                    >
                        请设置
                            </span>;
                }
            }
        }, {
            title: '社保参保类型',
            dataIndex: 'existInsurance',
            key: 'existInsurance',
            render: (text, record, index) => {

                const {
                    dataSource,
                    socialList,
                } = this.props;

                if (text) {
                    return <span
                        style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}
                        onClick={() => this.showWindowMask(dataSource[index], 'existInsurance', index)}
                    >
                        查看
                            </span>
                } else {
                    return <span
                        style={{ color: '#F60', textDecoration: 'underline', cursor: 'pointer' }}
                        onClick={() => this.editOrNewSmallTable('existInsurance', Object.assign({}, socialList, { areaId: record.areaId }))}
                    >
                        请设置
                    </span>
                }
            }
        }, {
            title: '公积金参保类型',
            dataIndex: 'existHousingFund',
            key: 'existHousingFund',
            render: (text, record, index) => {

                const {
                    dataSource,
                    fundList,
                } = this.props;

                if (text) {
                    return <span
                        style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}
                        onClick={() => this.showWindowMask(dataSource[index], 'existHousingFund', index)}
                    >
                        查看
                            </span>
                } else {
                    return <span
                        style={{ color: '#F60', textDecoration: 'underline', cursor: 'pointer' }}
                        onClick={() => this.editOrNewSmallTable('existHousingFund', Object.assign({}, fundList, { areaId: record.areaId }))}
                    >
                        请设置
                    </span>
                }
            }
        }, {
            title: '当地社保截点日',
            dataIndex: 'insuranceDeadline',
            key: 'insuranceDeadline',
            render: (text, record) => {
                if (text) {
                    return <FilterTable
                        title=""
                        dom={
                            <span style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}>{text}</span>
                        }
                        fixed={true}
                        ok={e => this.updateBtn(record.areaId, 'insuranceDeadline')}
                    >
                        <Select
                            key="insuranceDeadline"
                            vaildType="select"
                            placeholder="请选择"
                            errmsg="请设置当地社保的截点日"
                            onChange={value => this.handleSetChangeCache(value, 'insuranceDeadline')}
                            defaultValue={text ? text : ''}
                        >
                            {this.getSelect()}
                        </Select>
                    </FilterTable>;
                } else {
                    return <FilterTable
                        title=""
                        dom={
                            <span style={{ color: '#F60', textDecoration: 'underline', cursor: 'pointer' }}>请设置</span>
                        }
                        fixed={true}
                        ok={e => this.updateBtn(record.areaId, 'insuranceDeadline')}
                    >
                        <Select
                            key="insuranceDeadline"
                            vaildType="select"
                            placeholder="请选择"
                            errmsg="请设置当地社保的截点日"
                            onChange={value => this.handleSetChangeCache(value, 'insuranceDeadline')}
                            defaultValue={text ? text : ''}
                        >
                            {this.getSelect()}
                        </Select>
                    </FilterTable>;
                }
            }
        }, {
            title: '当地公积金截点日',
            dataIndex: 'housingFundDeadline',
            key: 'housingFundDeadline',
            render: (text, record) => {
                if (text) {
                    return <FilterTable
                        title=""
                        dom={
                            <span style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}>{text}</span>
                        }
                        fixed={true}
                        ok={e => this.updateBtn(record.areaId, 'housingFundDeadline')}
                    >
                        <Select
                            key="housingFundDeadline"
                            vaildType="select"
                            placeholder="请选择"
                            errmsg="请设置当地公积金的截点日"
                            onChange={value => this.handleSetChangeCache(value, 'housingFundDeadline')}
                            defaultValue={text ? text : ''}
                        >
                            {this.getSelect()}
                        </Select>
                    </FilterTable>;
                } else {
                    return <FilterTable
                        title=""
                        dom={
                            <span style={{ color: '#F60', textDecoration: 'underline', cursor: 'pointer' }}>请设置</span>
                        }
                        fixed={true}
                        ok={e => this.updateBtn(record.areaId, 'housingFundDeadline')}
                    >
                        <Select
                            key="housingFundDeadline"
                            vaildType="select"
                            placeholder="请选择"
                            errmsg="请设置当地公积金的截点日"
                            onChange={value => this.handleSetChangeCache(value, 'housingFundDeadline')}
                            defaultValue={text ? text : ''}
                        >
                            {this.getSelect()}
                        </Select>
                    </FilterTable>;
                }
            }
        }, {
            title: '开通产品',
            dataIndex: 'existAreaPackage',
            key: 'existAreaPackage',
            render: (text, record, index) => {

                const {
                    areaPackageList,
                    provinceName,
                    cityName,
                    areaName,
                    areaId,
                } = record;

                const {
                    packageListOptions,
                } = this.props;

                let spanArr = [];

                for (let item of areaPackageList) {
                    spanArr.push(<span className={basicSettingStyle.packageIdList}>{item.packageName}</span>);
                }



                if (text) {
                    return <FilterTable
                        title=""
                        dom={
                            <span style={{ color: '#2196F3', textDecoration: 'underline', cursor: 'pointer' }}>查看</span>
                        }
                        ok={e => this.existAreaPackageOkBtn(areaId, 'packageIdList')}
                        cancel={e => this.existAreaPackageCancelBtn()}
                        hasBtn={this.state.hasBtn}
                        tabDisabled={true}
                        btnStyle={{position: 'relative',top: '30px'}}
                    >
                        {
                            this.state.isEdit ?
                                <div className={basicSettingStyle.existInfoDiv}>
                                    <div style={{ height: 30 }}>
                                        <Col span="20" className={basicSettingStyle.existInfoCol20}>{provinceName} - {cityName} - {areaName}</Col>
                                        <Col span="4" className={basicSettingStyle.existInfoCol4}>
                                            <span onClick={e => this.existAreaPackageEditBtn(areaId, areaPackageList)}>编辑</span>
                                        </Col>
                                    </div>
                                    <div>
                                        {spanArr}
                                    </div>
                                </div>
                                :
                                <div style={{ width: 270,height: 76 }}>
                                    <CheckboxGroup options={packageListOptions} value={this.state.packageIdList} onChange={value => this.handleSetChangeCache(value, 'packageIdList')} />
                                </div>

                        }

                    </FilterTable>;
                } else {

                    return <FilterTable
                        title=""
                        dom={
                            <span
                                style={{ color: '#F60', textDecoration: 'underline', cursor: 'pointer' }}
                                onClick={e => this.existAreaPackageLookBtn(areaId)}
                            >
                                请设置
                            </span>
                        }
                        btnStyle={{position: 'relative',top: '30px'}}
                        ok={e => this.existAreaPackageOkBtn(areaId, 'packageIdList')}
                    >
                        <div style={{ width: 270,height: 76 }}>
                            <CheckboxGroup options={packageListOptions} value={this.state.packageIdList} onChange={value => this.handleSetChangeCache(value, 'packageIdList')} />
                        </div>

                    </FilterTable>;
                }
            }
        }];


    /**
     * 参保类型表格列
     */
    getSmallColumns = () => [
        {
            title: '类型名称',
            dataIndex: 'typeName',
            key: 'typeName',
        },
        {
            title: '适合户口',
            dataIndex: 'householdType',
            key: 'householdType',
            render: (text) => {

                return text.replace(/1/, '本地城镇')
                    .replace(/2/, '外地城镇')
                    .replace(/3/, '本地农村')
                    .replace(/4/, '外地农村');
            }
        },
        {
            title: '类型描述',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '操作',
            key: 'id',
            render: (text, record, index) => {

                const nowKey = record.belongBusi === 1 ? 'existInsurance' : 'existHousingFund';

                return <div className={basicSettingStyle.smallTableBtn}>
                    <span onClick={e => this.editOrNewSmallTable(nowKey, record, 'edit')}>编辑</span> | <span onClick={e => this.deleteSmallTable(record, index)}>删除</span>
                </div>;

            }
        }
    ]


    editOrNewSmallTable(nowKey, record, type) {

        if (nowKey) {
            this.setState({
                nowKey,
                id: record.id,
                areaId: record.areaId,
                typeName: record.typeName,
                householdType: type === 'edit' ? JSON.parse(`[${record.householdType}]`) : record.householdType,
                description: record.description,
                smallTableVisible: true,
            })
        } else {
            this.setState({
                id: record.id,
                areaId: record.areaId,
                typeName: record.typeName,
                householdType: type === 'edit' ? JSON.parse(`[${record.householdType}]`) : record.householdType,
                description: record.description,
                smallTableVisible: true,
            })
        }

    }


    deleteSmallTable(record, index) {
        const {
            dispatch,
        } = this.props;

        dispatch(existCitySocialSet({
            baseId: record.id,
            index,
        }))

        this.setState({
            id: record.id,
        })
    }


    /**
     * 参保类型参看遮罩
     * @param {*} value 
     * @param {*} key 
     */
    showWindowMask(record, nowKey, index) {

        const {
            dispatch,
            dataSource,
        } = this.props;

        this.setState({
            nowKey,
            areaId: record.areaId,
            provinceName: record.provinceName,
            cityName: record.cityName,
            areaName: record.areaName,
        });

        return new Promise((resolve, reject) => {
            dispatch(getSmallTableDate({
                dataSource,
                index,
                resolve,
            }));
        }).then(() => {
            this.refs.maskPrompt.showWindowMask();
        });
    }


    handleSetChangeCache(value, key) {

        this.setChangeCache[key] = value;

        this.setState({
            [key]: value,
        })

    }

    updateBtn(areaId, nowKey) {
        const {
            dispatch,
            start,
            length,
        } = this.props;

        dispatch(getBasicSettingUpdate({
            start,
            length,
            areaId,
            setChangeCache: this.setChangeCache,
            nowKey,
        }));


    }

    addData() {
        const {
            dispatch,
            start,
            length,
        } = this.props;

        dispatch(getBasicSettingList({
            index,
            start,
            length,
        }));
    }

    /**
     * 官方查询信息的编辑
     */
    existInfoEditBtn(obj) {

        const {
            thisId,
            areaId,
            provinceName,
            cityName,
            areaName,
            insuranceTel,
            insuranceUrl,
            housingFundTel,
            housingFundUrl,
        } = obj;

        document.getElementById(thisId).click();

        this.setState({
            visible: true,
            areaId,
            provinceName,
            cityName,
            areaName,
            insuranceTel,
            insuranceUrl,
            housingFundTel,
            housingFundUrl,
        });
    }

    existInfoModalOk(nowKey, setChangeCache) {

        const {
            dispatch,
            start,
            length,
        } = this.props;

        const {
            insuranceTel,
            insuranceUrl,
            housingFundTel,
            housingFundUrl,
        } = setChangeCache;

        const {
            areaId,
        } = this.state;

        let flag = false;

        if (!insuranceTel) {
            flag = 'insuranceTel';
        } else if (!insuranceUrl && insuranceTel) {
            flag = 'insuranceUrl';
        } else if (!housingFundTel && insuranceUrl) {
            flag = 'housingFundTel';
        } else if (!housingFundUrl && housingFundUrl) {
            flag = 'housingFundUrl';
        }

        let errmsgObj = {
            insuranceTel: '请设置社保的电话',
            insuranceUrl: '请设置社保的网址',
            housingFundTel: '请设置公积金的电话',
            housingFundUrl: '请设置公积金的网址',
        }

        if (flag) {
            message.error(errmsgObj[flag]);
            return false;
        } else {

            return new Promise((resolve, reject) => {
                dispatch(getBasicSettingUpdate({
                    start,
                    length,
                    areaId,
                    setChangeCache,
                    nowKey,
                    resolve,
                }));
            }).then(() => {
                this.setState({
                    visible: false,
                    insuranceTel,
                    insuranceUrl,
                    housingFundTel,
                    housingFundUrl,
                });
            });



        }
    }

    existInfoModalCancel() {
        this.setState({
            visible: false,
        });
    }


    /**
     * 更新或新建参保类型弹窗操作
     */
    editOrNewSmallTableModalOk(areaId, nowKey, id) {
        const {
            dispatch,
            start,
            length,
            index,
        } = this.props;

        const {
            typeName,
            description,
            householdType,
        } = this.state;

        if (!typeName) {
            message.error('请填写类型名称')
            return false;
        } else if (!description) {
            message.error('请填写类型描述')
            return false;
        }

        return new Promise((resolve, reject) => {
            dispatch(getUpdateSocialSet({
                start,
                length,
                nowKey,
                id,
                areaId,
                resolve,
                index,
                typeName: typeName,
                householdType: householdType,
                description: description,
            }))
        }).then(() => {
            this.setState({
                smallTableVisible: false,
            });
        });

    }

    editOrNewSmallTableModalCancel() {
        this.setState({
            smallTableVisible: false,
        });
    }

    /**
     * 开通产品编辑
     */
    existAreaPackageEditBtn(areaId, areaPackageList) {

        let packageIdList = [];
        for (let item of areaPackageList) {
            packageIdList.push(item.packageId);
        }

        this.setState({
            isEdit: false,
            hasBtn: true,
            packageIdList,
        })

        const {
            dispatch,
        } = this.props;

        dispatch(getPackageListData({
            areaId,
        }))

    }

    /**
     * 开通产品设置
     */
    existAreaPackageLookBtn(areaId) {
        const {
            dispatch,
        } = this.props;

        dispatch(getPackageListData({
            areaId,
        }))

        this.setState({
            packageIdList: [],
        })
    }

    /**
     * 开通产品
     */
    existAreaPackageOkBtn(areaId, nowKey) {
        const {
            dispatch,
            start,
            length,
        } = this.props;

        let flag = false;

        if (nowKey === 'packageIdList' && this.setChangeCache['packageIdList'].length === 0) {
            flag = true;
        }

        if (flag) {
            message.error('请设置当前城市开通的产品套餐');
            return false;
        } else {

            return new Promise((resolve, reject) => {
                dispatch(getUpdateAreaPackge({
                    start,
                    length,
                    areaId,
                    setChangeCache: this.setChangeCache,
                    nowKey,
                    resolve,
                }));
            }).then(() => {
                this.setState({
                    packageIdList: this.setChangeCache['packageIdList'],
                    isEdit: true,
                    hasBtn: false,
                });
            });
        }
    }

    existAreaPackageCancelBtn() {

        setTimeout(() => {
            this.setState({
                isEdit: true,
                hasBtn: false,
            });
        }, 1000);

    }

    /**
     * 删除阻断弹窗--确认按钮
     */
    deleteErrorModalOk() {
        const {
            dispatch,
        } = this.props;

        dispatch(deleteSocialError({
            deleteErrorVisible: false,
        }))
    }

    /**
     * 删除成功弹窗--确认按钮
     */
    deleteSuccessModalOk(id, index) {
        const {
            dispatch,
            start,
            length,
        } = this.props;

        dispatch(getDeleteSocialSet({
            start,
            length,
            id,
            index,
        }))
    }

    /**
     * 删除成功弹窗--取消按钮
     */
    deleteSuccessModalCancel() {
        const {
            dispatch,
        } = this.props;

        dispatch(deleteSocialSuccess({
            deleteSuccessVisible: false,
        }))
    }


    /**
     * 分页
     */
    pagination = (current) => {

        const {
            dispatch,
            start,
            length,
            total,
            index,
        } = this.props;

        return {
            current,
            total,
            size: "default",
            defaultPageSize: length,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
            onChange: (current) => {

                dispatch(getBasicSettingList({
                    start: current,
                    index,
                    length,
                }));
            },
            onShowSizeChange: (current, pageSize) => {

                dispatch(getBasicSettingList({
                    index,
                    start: current,
                    length: pageSize,
                }));
            }
        };
    }


    render() {


        const {
            dataSource,
            loading,
            start,
            counter,
            socialList,
            fundList,
            deleteSuccessVisible,
            deleteErrorVisible,
        } = this.props;

        const {
            visible,
            smallTableVisible,
            nowKey,
            provinceName,
            cityName,
            id,
            areaId,
            areaName,
            insuranceTel,
            insuranceUrl,
            housingFundTel,
            housingFundUrl,
            typeName,
            householdType,
            //householdTypeArr,
            description,
        } = this.state;

        let setChangeCache = {
            insuranceTel,
            insuranceUrl,
            housingFundTel,
            housingFundUrl,
        }

        const existInfoModalProps = {
            visible: visible,
            closable: true,
            maskClosable: false,
            width: 480,
            title: '设置官方查询信息',
            onCancel: () => this.existInfoModalCancel(),
            footer: <div>
                        <Button onClick={() => this.existInfoModalCancel()}>取消</Button>
						<Button type="primary" loading={this.props.existInfoModalLoading} onClick={() => this.existInfoModalOk('existInfo', setChangeCache)}>确认</Button>
                    </div>,
            afterClose: () => {

            }
        }

        const smallTableModalProps = {
            visible: smallTableVisible,
            closable: true,
            maskClosable: false,
            width: 480,
            title: '设置参保类型',
            onCancel: () => this.editOrNewSmallTableModalCancel(),
            footer: <div>
                        <Button onClick={() => this.editOrNewSmallTableModalCancel()}>取消</Button>
						<Button type="primary" loading={this.props.smallTableModalLoading} onClick={() => this.editOrNewSmallTableModalOk(areaId, nowKey, id)}>确认</Button>
                    </div>,
            afterClose: () => {

            }
        }

        const deleteErrorProps = {
            visible: deleteErrorVisible,
            closable: true,
            maskClosable: false,
            width: 450,
            title: '操作提示',
            onCancel: () => this.deleteErrorModalOk(),
            footer: <Button type="primary" onClick={() => this.deleteErrorModalOk()}>我知道了</Button>,
            afterClose: () => {

            },

        }

        const deleteSuccessProps = {
            visible: deleteSuccessVisible,
            closable: true,
            maskClosable: false,
            width: 300,
            title: '操作提示',
            onCancel: () => this.deleteSuccessModalCancel(),
            footer: <div>
                        <Button onClick={() => this.deleteSuccessModalCancel()}>取消</Button>
						<Button type="primary" loading={this.props.deleteSuccessLoading} onClick={() => this.deleteSuccessModalOk(id, this.props.index)}>确认</Button>
                    </div>,
            afterClose: () => {

            }
        }

        return (
            <div>

                <Table
                    title={() => {
                        return <div><span>筛选条件展示：</span></div>;
                    }}
                    bordered={true}
                    columns={this.getcolumns()}
                    loading={loading}
                    pagination={this.pagination(start)}
                    dataSource={dataSource}
                />

                <Modal {...existInfoModalProps}>
                    <div className={basicSettingStyle.existInfoDiv} style={{ width: 450 }}>
                        <div style={{ height: 30 }}>
                            <span>当前城市：</span><span className={basicSettingStyle.existInfoCol20}>{provinceName} - {cityName} - {areaName}</span>
                        </div>
                        <div>
                            <table>
                                <tr>
                                    <th width="90">分类</th>
                                    <th>电话</th>
                                    <th>网址</th>
                                </tr>
                                <tr>
                                    <td>社保局</td>
                                    <td>
                                        <Input
                                            value={insuranceTel}
                                            onChange={e => this.handleSetChangeCache(e.target.value, 'insuranceTel')}
                                            maxLength="50"
                                        />
                                    </td>
                                    <td>
                                        <Input
                                            addonBefore="http://"
                                            value={insuranceUrl}
                                            onChange={e => this.handleSetChangeCache(e.target.value, 'insuranceUrl')}
                                            maxLength="50"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>公积金中心</td>
                                    <td>
                                        <Input
                                            value={housingFundTel}
                                            onChange={e => this.handleSetChangeCache(e.target.value, 'housingFundTel')}
                                            maxLength="50"
                                        />
                                    </td>
                                    <td>
                                        <Input
                                            addonBefore="http://"
                                            value={housingFundUrl}
                                            onChange={e => this.handleSetChangeCache(e.target.value, 'housingFundUrl')}
                                            maxLength="50"
                                        />
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </Modal>
                <Modal {...smallTableModalProps}>
                    <div className={basicSettingStyle.marginBottom10}>
                        所属业务：<span style={{ color: '#F60' }}>{nowKey === 'existInsurance' ? '社保' : '公积金'}</span>
                    </div>
                    <div className={basicSettingStyle.marginBottom10}>
                        <span>类型名称：</span>
                        <Input
                            style={{ width: '84%' }}
                            value={typeName}
                            maxLength={30}
                            placeholder="通俗易懂的定义名称，客户端可见，请谨慎填写"
                            onChange={e => this.handleSetChangeCache(e.target.value, 'typeName')}
                        />
                    </div>
                    <div className={basicSettingStyle.CheckboxGroup}>
                        <span>适合户口：</span>
                        <CheckboxGroup
                            options={[
                                { label: '本地城镇', value: 1 },
                                { label: '外地城镇', value: 2 },
                                { label: '本地农村', value: 3 },
                                { label: '外地农村', value: 4 },
                            ]}
                            //defaultValue={householdType? householdType.split(','): ''}
                            value={householdType}
                            onChange={value => this.handleSetChangeCache(value, 'householdType')}
                        />
                    </div>
                    <div className={basicSettingStyle.marginBottom10}>
                        <span className={basicSettingStyle.smallTableTextAreaSpan}>类型描述：</span>
                        <Input
                            type="textarea"
                            style={{ width: '84%' }}
                            value={description}
                            maxLength={100}
                            placeholder="请用通俗易懂的语言向投保人解释参保类型的意义，客户端可见，请谨慎填写，100字之内"
                            onChange={e => this.handleSetChangeCache(e.target.value, 'description')}
                        />
                    </div>
                </Modal>
                <Modal {...deleteErrorProps}>
                    <Icon
                        className={basicSettingStyle.deleteErrorI}
                        type="exclamation-circle-o"
                    />
                    <p className={basicSettingStyle.deleteErrorP}>
                        该类型有<span>关联的服务商政策包</span>，不可直接删除，请先删除服务商政策包中此类型，再执行此操作！
                    </p>
                </Modal>
                <Modal {...deleteSuccessProps}>
                    <Icon
                        className={basicSettingStyle.deleteSuccessI}
                        type="exclamation-circle-o"
                    />
                    <p className={basicSettingStyle.deleteSuccessP}>
                        您确认要<span>删除</span>吗？
                    </p>
                </Modal>
                <MaskPrompt ref="maskPrompt">
                    <div>
                        <span>当前城市：</span><span className={basicSettingStyle.existInfoCol20}>{provinceName} - {cityName} - {areaName}</span>
                    </div>
                    <div className={basicSettingStyle.maskWrapperTitle}>
                        <Col span="20" className={basicSettingStyle.maskWrapperTitleCol20}>
                            {nowKey === 'existInsurance' ? '社保参保类型' : '公积金参保类型'}
                        </Col>
                        <Col span="4" className={basicSettingStyle.maskWrapperTitleCol4}>
                            <Button type="primary" onClick={() => this.editOrNewSmallTable(nowKey, { areaId, })}>新增</Button>
                        </Col>
                    </div>
                    <Table
                        key={counter}
                        size="small"
                        pagination={false}
                        bordered={true}
                        columns={this.getSmallColumns()}
                        dataSource={nowKey === 'existInsurance' ? socialList : fundList}
                    />
                </MaskPrompt>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const data = state.getIn(['basicSettingList']);
    return {
        dataSource: data.getIn(['dataSource']).toJS(),
        isLoading: data.get('isLoading'),
        start: data.getIn(['start']),
        total: data.getIn(['total']),
        length: data.getIn(['length']),
        counter: data.get('counter'),
        socialList: data.getIn(['socialList']),
        fundList: data.getIn(['fundList']),
        index: data.getIn(['index']),
        packageListOptions: data.getIn(['packageListOptions']),
        deleteSuccessVisible: data.getIn(['deleteSuccessVisible']),
        deleteErrorVisible: data.getIn(['deleteErrorVisible']),
        existInfoModalLoading: data.getIn(['existInfoModalLoading']),
        smallTableModalLoading: data.getIn(['smallTableModalLoading']),
        deleteSuccessLoading: data.getIn(['deleteSuccessLoading']),
    }
}

export default connect(mapStateToProps)(BasicSettingApp);