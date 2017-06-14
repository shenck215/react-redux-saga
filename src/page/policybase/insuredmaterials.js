import React from 'react';
import QueueAnim from 'rc-queue-anim';
import {
	Table,
	Modal,
	Button,
	Icon,
	Row,
	Col,
	Input,
	Select,
	Upload,
	message,
} from 'antd';
import insuredmaterials from '../../css/policybase/insuredmaterials';
import MaskPrompt from '../../component/maskPrompt/maskPrompt';
import { connect, actions } from 'react-redux';
import {
	fetchFn,
} from '../../api/fetch.js';
import apiConfig from '../../api/fetchIndex';
import ImageZoom from 'react-medium-image-zoom';
import {
	getMaterialItemList,
	existCitySocialSetm,
	deleteSuccessModule,
	deleteErrorModule,
	deleteMaterialItem,
	lookMaterialDetail,
	existMaterialName,
} from '../../action/policybase/insuredmaterialsAction';

const Option = Select.Option;
/**
 * 新增材料
 */
class CreateMaterialApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			textareaShow: false,
			isupload: false,
			fileType: [],
			fileList: [],
			name: '',
			property: '',
			boundProperties: '',
			listType: 'picture'
		};
	}

	showModal() {
		this.setState({
			modalVisible: true,
		})
	}

	handleSelectChange(value, key) {

		if (value === 7 && key === 'property') {
			this.setState({
				fileType: ['image/bmp', 'image/png', 'image/gif', 'image/jpeg'],
				fileList: [],
				listType: 'picture',
			})
		} else if (value === 8 && key === 'property') {
			this.setState({
				fileType: ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/pdf'],
				fileList: [],
				listType: 'text',
			})
		}

		if (key === 'property') {
			this.setState({
				textareaShow: value === 2 || value === 3 ? true : false,
				isupload: value === 7 || value === 8 ? true : false,
			})
		}

		this.setState({
			[key]: value,
		})

		if ((value !== 2 || value !== 3 || value !== 7 || value !== 8) && key === 'property') {
			this.setState({
				boundProperties: '',
			})
		}
	}

	textFn() {
		if (this.state.textareaShow) {
			return (
				<Row >
					<Col span={6}><span style={{ color: 'red' }}>*</span>可选值：</Col><Col span={18}><Input value={this.state.boundProperties} type="textarea" onChange={(e) => this.handleSelectChange(e.target.value, 'boundProperties')} maxLength={100} placeholder="请设置可选值，多个用顿号隔开" /></Col>
				</Row>)
		}
	}

	beforeUpload(file, fileList) {

		const {
			fileType,
		} = this.state;

		let isWant = false;

		if (fileType.indexOf(file.type) !== -1) {
			isWant = true;
		}

		if (!isWant) {
			message.error('上传的文件类型不正确');
			return false;
		}

		return isWant;
	}

	uploadSuccess(res, file) {
		if (res.status === 0) {
			this.setState({
				fileList: [
					{
						uid: file.uid,
						name: file.name,
						status: 'done',
						reponse: res.data,
						url: res.data.url,
					}
				],
			})
		} else {
			this.setState({
				fileList: [],
			})
			message.error('文件大小控制在3M之内');
		}
	}

	removeUpload() {
		this.setState({
			fileList: [],
		})
	}

	uploadFn() {
		const Uploadprops = {
			name: 'file',
			data: {
				type: 7
			},
			action: apiConfig.imgUpload,
			headers: {
				authorization: 'authorization-text',
			},
			multiple: true,
			listType: this.state.listType,
			fileList: this.state.fileList,
			beforeUpload: (file, fileList) => this.beforeUpload(file, fileList),
			onSuccess: (res, file) => this.uploadSuccess(res, file),
			onRemove: () => this.removeUpload(),
		};
		if (this.state.isupload) {
			return (
				<Row>
					<Col span={6}>填写实例：</Col><Col span={18}>
						<Upload {...Uploadprops} >
							<Button>
								<Icon type="upload" />上传
						</Button>
						</Upload></Col>

				</Row>
			)
		}
	}

	onOk() {

		const {
			name,
			property,
			boundProperties,
			fileList,
		} = this.state;

		const {
			dispatch,
			pageNow,
			pageSize,
		} = this.props;

		if (!name) {
			message.error('请设置材料名称');
			return false;
		} else if (!property) {
			message.error('请设置材料的属性');
			return false;
		} else if ((property === 2 || property === 3) && !boundProperties) {
			message.error('请设置属性的可选值');
			return false;
		} else if ((property === 7 || property === 8) && !fileList.length > 0) {
			message.error('请先上传图片或文件');
			return false;
		}

		return new Promise((resolve, reject) => {
			dispatch(existMaterialName({
				start: pageNow,
				length: pageSize,
				name,
				property,
				boundProperties: boundProperties ? boundProperties : fileList.length > 0 ? fileList[0].reponse.ossKey : '',
				resolve,
			}));
		}).then(() => {
			this.setState({
				modalVisible: false,
				name: '',
				property: '',
				fileList: [],
				textareaShow: false,
				boundProperties: '',
				isupload: false,
			})
		});

	}

	onCancel() {
		this.setState({
			modalVisible: false,
			name: '',
			property: '',
			fileList: [],
			textareaShow: false,
			boundProperties: '',
			isupload: false,
		})
	}


	render() {

		const {
			modalVisible,
			isMultiple,
		} = this.state;

		const modalProps = {
			visible: modalVisible,
			closable: true,
			maskClosable: false,
			width: 380,
			title: '操作提示',
			onCancel: () => this.onCancel(),
			footer: <div>
				<Button onClick={() => this.onCancel()}>取消</Button>
				<Button type="primary" loading={this.props.modalLoading} onClick={() => this.onOk()}>确认</Button>
			</div>,
		}

		let propertySelectProp = {
			key: Date.now(),
			showSearch: true,
			style: { width: '100%' },
			placeholder: "请选择",
			optionFilterProp: "children",
			allowClear: true,
			onChange: (value) => this.handleSelectChange(value, 'property'),
		}

		if (this.state.property) {
			propertySelectProp.value = this.state.property;
		}

		return (
			<div>
				<Button type="primary" className={insuredmaterials.createMaterialBtn} onClick={() => this.showModal()}>新建材料</Button>
				<Modal
					{...modalProps}
				>
					<Row>
						<Col span={6}><span style={{ color: 'red' }}>*</span>材料名称：</Col><Col span={18}><Input value={this.state.name} maxLength={50} onChange={(e) => this.handleSelectChange(e.target.value, 'name')} placeholder="请设置材料名称" /></Col>
					</Row>
					<Row>
						<Col span={6}><span style={{ color: 'red' }}>*</span>属性：</Col><Col span={18}>
							<Select
								{...propertySelectProp}
							>
								<Option value={1}>输入项</Option>
								<Option value={2}>单选项</Option>
								<Option value={3}>复选项</Option>
								<Option value={4}>地区插件</Option>
								<Option value={5}>地区+详细地址插件</Option>
								<Option value={6}>精确到日的时间插件</Option>
								<Option value={7}>图片</Option>
								<Option value={8}>文件</Option>
							</Select></Col>
					</Row>
					{this.textFn()}
					{this.uploadFn()}
				</Modal>
			</div>
		);
	}
}

class InsuredMaterials extends React.Component {
	constructor(props) {

		super(props);

		this.state = {
			materialName: '',
		};

	}
	componentWillMount() {
		const {
			dispatch,
			pageNow,
			pageSize,
		} = this.props;

		dispatch(getMaterialItemList({
			start: pageNow,
			length: pageSize,
		}))
	}

	getcolumns = () => [
		{
			title: '操作',
			dataIndex: 'id',
			key: 'id',
			width: 110,
			render: (text, record) => {
				return <a type="primary" onClick={() => this.cancelButton(text)}>删除</a>
			}
		}, {
			title: '材料名称',
			dataIndex: 'name',
			key: 'name',
			width: 200,
		}, {
			title: '属性',
			dataIndex: 'property',
			key: 'property',
			width: 300,
			render: (key) => {
				if (key === '1') {
					return '输入项'
				} else if (key === '2') {
					return '单选项'
				} else if (key === '3') {
					return '复选项'
				} else if (key === '4') {
					return '地区插件'
				} else if (key === '5') {
					return '地区+详细地址插件'
				} else if (key === '6') {
					return '精确到日的时间插件'
				} else if (key === '7') {
					return '图片'
				} else if (key === '8') {
					return '文件'
				}
			}
		}, {
			title: '关联属性',
			dataIndex: 'boundProperties',
			key: 'boundProperties',
			render: (key, record) => {
				if (key === '' || key === null) {
					return '-/-';
				} else if (record.property === '7') {
					return <ImageZoom
						image={{
							src: key,
							alt: '附件',
							style: { width: 32,height: 32 }
						}}
						zoomImage={{
							src: key,
							alt: '附件'
						}}

					/>;
				} else if (record.property === '8') {
					return <a href={key}>下载附件</a>;
				} else {
					return key;
				}
			}
		}, {
			title: '启用城市',
			dataIndex: 'materialCompanyList',
			key: 'materialCompanyList',
			width: 120,
			render: (text, record) => {
				return <a href="javascript:;" onClick={() => this.showWindowMask(record)}>查看</a>;
			}
		}
	];
	pagination = (current) => {

		const {
            dispatch,
			pageSize,
			total,
        } = this.props;

		return {
			current,
			total,
			size: "default",
			defaultPageSize: pageSize,
			showSizeChanger: true,
			showQuickJumper: true,
			showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
			onChange: (current) => {
				dispatch(getMaterialItemList({
					current,
					pageSize,
				}));
			},
			onShowSizeChange: (current, pageSize) => {
				dispatch(getMaterialItemList({
					current,
					pageSize,
				}))
			}
		};
	}


	/**
	 * 删除参保材料
	 */
	cancelButton(id) {
		const {
			dispatch,
		} = this.props;

		dispatch(existCitySocialSetm({
			materialItemId: id,
		}))
	}

	/**
	 * 正确弹窗-确认
	 */
	deleteSuccessOkBtn() {
		const {
			dispatch,
			id,
			pageNow,
			pageSize,
		} = this.props;

		dispatch(deleteMaterialItem({
			materialItemId: id,
			start: pageNow,
			length: pageSize,
		}));
	}

	/**
	 * 正确弹窗-取消
	 */
	deleteSuccessCancelBtn() {
		const {
			dispatch,
		} = this.props;

		dispatch(deleteSuccessModule({
			isDeleteSuccess: false,
		}));
	}

	/**
	 * 错误弹窗-取消
	 */
	deleteErrorCancelBtn() {
		const {
			dispatch,
		} = this.props;

		dispatch(deleteErrorModule({
			isDeleteError: false,
		}));
	}

	showWindowMask(record) {

		const {
			dispatch,
			materialArr,
			changeStatus,
			show,
		} = this.props;

		dispatch(lookMaterialDetail({
			materialCompanyList: record.materialCompanyList,
		}));

		this.setState({
			materialName: record.name,
		})

		// changeStatus({
		// 	materialName: record.name,
		// 	materialArr,
		// });

		MaskPrompt({
			content: <div>
						<p>
                            材料名称：<span className={insuredmaterials.materialName}>{record.name}</span>
                        </p>
                        <table className={insuredmaterials.materialTable}>
                            <tr>
                                <th>服务商</th><th>城市</th><th width="100">操作</th>
                            </tr>
                            {materialArr}
                        </table>
					</div>,
		})

		//show();
	}

	render() {
		const {
			dataSource,
			pageNow,
			pageSize,
			isDeleteSuccess,
			deleteSuccessLoading,
			isDeleteError,
			dispatch,
        } = this.props;

		const {
			materialName,
		} = this.state;


		const deleteSuccessProps = {
			visible: isDeleteSuccess,
			closable: true,
			maskClosable: false,
			width: 300,
			title: '操作提示',
			onCancel: () => this.deleteSuccessCancelBtn(),
			footer: <div>
				<Button onClick={() => this.deleteSuccessCancelBtn()}>取消</Button>
				<Button type="primary" loading={deleteSuccessLoading} onClick={() => this.deleteSuccessOkBtn()}>确认</Button>
			</div>
		}

		const deleteErrorProps = {
			visible: isDeleteError,
			closable: true,
			maskClosable: false,
			width: 450,
			title: '操作提示',
			onCancel: () => this.deleteErrorCancelBtn(),
			footer: <Button type="primary" onClick={() => this.deleteErrorCancelBtn()}>我知道了</Button>,
		}

		return (
			<div style={{ position: 'relative' }}>
				<CreateMaterialApp dispatch={dispatch} pageNow={pageNow} pageSize={pageSize} />
				<Table bordered dataSource={dataSource} columns={this.getcolumns()} pagination={this.pagination(pageNow)} />
				<Modal {...deleteSuccessProps}>
					<Icon
						className={insuredmaterials.deleteSuccessI}
						type="exclamation-circle-o"
					/>
					<p className={insuredmaterials.deleteSuccessP}>
						您确认要<span>删除</span>吗？
                    </p>
				</Modal>
				<Modal {...deleteErrorProps}>
					<Icon
						className={insuredmaterials.deleteErrorI}
						type="exclamation-circle-o"
					/>
					<p className={insuredmaterials.deleteErrorP}>
						该类型有<span>关联的服务商政策包</span>，不可直接删除，请先删除服务商政策包中此类型，再执行此操作！
                    </p>
				</Modal>
				
			</div>
		)
	}
}

function mapStateToProps(state) {
	const data = state.getIn(['insuredMaterialsListReducer']);

	return {
		dataSource: data.getIn(['dataSource']).toJS(),
		isLoading: data.getIn(['isLoading']),
		pageNow: data.getIn(['pageNow']),
		total: data.getIn(['total']),
		pageSize: data.getIn(['pageSize']),
		isDeleteSuccess: data.getIn(['isDeleteSuccess']),
		isDeleteError: data.getIn(['isDeleteError']),
		id: data.getIn(['id']),
		materialArr: data.getIn(['materialArr']),
		deleteSuccessLoading: data.getIn(['deleteSuccessLoading']),
		modalLoading: data.getIn(['modalLoading']),
	}
}
export default connect(mapStateToProps)(InsuredMaterials);