import React from 'react';

import mainPageStyle from '../../css/mainPage/mainPage.css';
import {
	Layout,
	Menu,
	//Breadcrumb,
	Icon
} from 'antd';

const {
	Header,
	Content,
	Footer,
	Sider
} = Layout;
const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;

/* eslint-disable */

class MainPageApp extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			collapsed: false,
			mode: 'inline',
			user: {
				userInfo: {
					user_name: ''
				}
			},
			menu: [],
			openKeys: sessionStorage.openKeys ? (sessionStorage.openKeys).split(',') : [],
			//breadCrumbItem: [<Breadcrumb.Item>无忧保首页</Breadcrumb.Item>],
		}
	}

	componentWillMount() {

		this.setState({
			user: this.context.user,
			menu: this.context.menu,
			//breadCrumb: this.context.breadCrumb,
		})


	}

	onCollapse = (collapsed) => {
		this.setState({
			collapsed: !this.state.collapsed,
			mode: 'inline'
		});

	}

	menuClick = (item) => {

		let openKeys = item.keyPath;
		sessionStorage.setItem('openKeys', openKeys.join(','));
		this.setState({
			openKeys: openKeys,
		});

		// if (openKeys.length) {

		// 	this.proBreadCrumbItem(openKeys);

		// }

	}

	/**
	 * 根据openKeys获取面包屑关系
	 */
	// proBreadCrumbItem = (openKeys) => {
		
	// 	let breadCrumbItem = [];
	// 	const breadCrumb = this.state.breadCrumb;
	// 	const nowOpenKeys = openKeys? openKeys: sessionStorage.openKeys;
	// 	const breadCrumbKey = nowOpenKeys.reverse().join(',');
	// 	if (breadCrumb[breadCrumbKey]) {
	// 		for (let item of breadCrumb[breadCrumbKey]) {
	// 			breadCrumbItem.push(<Breadcrumb.Item>{item}</Breadcrumb.Item>);
	// 		}
	// 		this.setState({
	// 			breadCrumbItem: breadCrumbItem
	// 		});
	// 		sessionStorage.setItem('breadCrumbKey',breadCrumbKey);
	// 	}
	// }

	menuOpenChange = (openKeys) => {


		this.setState({
			openKeys: openKeys,
		});

		sessionStorage.setItem('openKeys', openKeys.join(','));

	}


	render() {	
		
		/**
		 * 子组件
		 */
		const children = this.props.children;

		//let breadCrumbItem = [];
		/**
		 * 生成面包屑
		 */
		// if(sessionStorage.breadCrumbKey) {
		// 	const breadCrumb = this.state.breadCrumb;
		// 	const breadCrumbKey = sessionStorage.breadCrumbKey;
		// 	if (breadCrumb[breadCrumbKey]) {
		// 		for (let item of breadCrumb[breadCrumbKey]) {
		// 			breadCrumbItem.push(<Breadcrumb.Item>{item}</Breadcrumb.Item>);
		// 		}
		// 	}
		// }else {
		// 	breadCrumbItem = this.state.breadCrumbItem;//初始化
		// }

		return (
			<Layout style={{height: '100%'}}>

				<Sider
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
				>

					<div className="logo">金柚网</div>
					<Menu theme="dark" onClick={this.menuClick} openKeys={this.state.openKeys} onOpenChange={this.menuOpenChange} mode={this.state.mode} defaultSelectedKeys={this.state.openKeys} style={{ "padding-bottom": '153px' }}>
						{this.state.menu}
					</Menu>

				</Sider>
				<Layout>
					<Header style={{ background: '#FFF', padding: 0 }}>
						<Icon
							className="trigger"
							type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.onCollapse}
						/>
						<div className={mainPageStyle.headerUserWrapper}>
							<Menu
								onClick={this.handleClick}
								mode="horizontal"
							>
								<SubMenu title={<span><Icon type="user" />{this.state.user.userInfo.user_name}</span>}>
									<MenuItemGroup title="users">
										{/*<Menu.Item key="setting:1">更改账号</Menu.Item>*/}
										<Menu.Item key="setting:1">
											<a href="/logout">
												<Icon type="poweroff" />
												注销
											</a>
										</Menu.Item>
									</MenuItemGroup>
								</SubMenu>
							</Menu>
						</div>
					</Header>
		
					<Content style={{ margin: "12px 16px 24px" }}>
						{
							// <Breadcrumb style={{ margin: '12px 0' }}>
							// 	{breadCrumbItem}
							// </Breadcrumb>
						}
						<div style={{ padding: 24, background: '#fff', minHeight: 738 }}>
							{children}
						</div>
					</Content>

					<Footer style={{ textAlign: 'center' }}>Copyright &copy; 2017 - 2018杭州今元标矩科技有限公司 版权归今元集团所有</Footer>
				</Layout>
			</Layout>
		);
	}
}

MainPageApp.contextTypes = {
  	user: React.PropTypes.object,
    menu: React.PropTypes.array,
    //breadCrumb: React.PropTypes.object,
};

export default MainPageApp;