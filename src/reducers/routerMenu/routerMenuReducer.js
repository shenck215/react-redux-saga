import {
    RECEIVED_ROUTER_MENU_DATA,
	ROUTER_MENU_ISFINISHED,
} from '../../action/routerMenu/routerMenuAction';
import {
    //Breadcrumb,
    Menu,
    Icon,
} from 'antd';
import globalConfig from '../../config/config';
import {
    Link,
} from 'react-router';
import * as Immutable from 'immutable';
import React from 'react';
import {
    routerMenuApi,
} from '../../api/routerMenu/routerMenuApi';
import {
	componentApp,
	detailsPage,
} from '../../component/component';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
const ROOT_PATH = globalConfig.ROOT_PATH;

const initialState = Immutable.fromJS({
    user: {
        userInfo: {
            user_name: ''
        }
    },
    menu: [],
    routerArr: [],
    isFinished: false,
    collapsed: false,
    mode: 'inline',
    openKeys: [],
    //breadCrumbItem: {},
});

/**
 * 处理路由,生成对应的APP name
 */
let component = (code) => {
    let appNameArr = code.replace(/_/g,'').split('');
    appNameArr[0] = appNameArr[0].toLocaleUpperCase();
    let appName = appNameArr.join('') + 'App';
    return appName;
}

/**
 * 将路由与组件一一对应
 * @param {*} routerArr 
 * @param {*} arr 
 */
let componentForRoute = (routerArr,arr) => {
	
	let allRouter = routerArr.concat(detailsPage);
	
    for(let i in allRouter) {
        let key = Object.keys(allRouter[i])[1];
		arr[key]? allRouter[i].component = arr[key] : allRouter[i].component = arr['DemoApp'];
        delete allRouter[i][key];
    }

	return allRouter;
}

/**
 * 处理数据
 */
let dataProcess = (data) => {
    let menu = [];//导航栏

	let user = data;//用户信息

	let routerArr = [];//路由

	//let breadCrumb = {};//面包屑

	// 渲染左侧导航及添加路由
	// 一级导航栏
	for (let i = 0; i < data.userRole.length; i++) {
		let item1 = [];
		let item2 = [];
		let item3 = [];

		if (data.userRole[i].children && data.userRole[i].children.length > 0) {
			//二级导航栏
			for (let j = 0; j < data.userRole[i].children.length; j++) {

				//判断是否有三级
				if(data.userRole[i].children[j].children && data.userRole[i].children[j].children.length > 0) {
					//三级导航栏
					for(let k = 0;k < data.userRole[i].children[j].children.length; k++) {

						data.userRole[i].children[j].children[k].url? 
							data.userRole[i].children[j].children[k].url = (data.userRole[i].children[j].children[k].url).replace(/\/jsp/,`${ROOT_PATH}/jsp/react`) 
						: 
							data.userRole[i].children[j].children[k].url;

						// 组合三级导航节点
						item3.push(
							<MenuItem key={data.userRole[i].children[j].children[k].code}>
								{
									i === data.userRole.length - 1? 
										<Link to={data.userRole[i].children[j].children[k].url} onClick={()=>{document.documentElement.scrollTop = 0;}}>
											{data.userRole[i].children[j].children[k].displayName}
										</Link>
									: 
										<a href={data.userRole[i].children[j].children[k].system_url + data.userRole[i].children[j].children[k].url}>
											{data.userRole[i].children[j].children[k].displayName}
										</a>
								}
								
							</MenuItem>
						);

						/**
						 * 路由
						 */
						if(i === data.userRole.length - 1) {

							routerArr.push(
								{
									path: data.userRole[i].children[j].children[k].url,
									[component(data.userRole[i].children[j].children[k].code)]: '',
								}
							);

							/**
							 * 面包屑缓存
							 */
							// breadCrumb[`${data.userRole[i].code},${data.userRole[i].children[j].code},${data.userRole[i].children[j].children[k].code}`] = [data.userRole[i].displayName,data.userRole[i].children[j].displayName,data.userRole[i].children[j].children[k].displayName];

						}

						
					}
					// 组合二级导航节点
					item2 =
						<SubMenu
							key={data.userRole[i].children[j].code}
							title={<span className="nav-text">{data.userRole[i].children[j].displayName}</span>}
						>
							{item3}
						</SubMenu>
						;
					// 将二级导航节点插入相应的一级导航
					item1.push(item2);
					item3 = [];
				}else {
					data.userRole[i].children[j].url? 
						data.userRole[i].children[j].url = (data.userRole[i].children[j].url).replace(/\/jsp/,`${ROOT_PATH}/jsp/react`) 
					: 
						data.userRole[i].children[j].url;
					// 组合二级导航节点并插入相应的一级导航
					item1.push(
						<MenuItem key={data.userRole[i].children[j].code}>
							{
								i === data.userRole.length - 1?
									<Link to={data.userRole[i].children[j].url} onClick={()=>{document.documentElement.scrollTop = 0;}}>
										{data.userRole[i].children[j].displayName}
									</Link>
								:
									<a href={data.userRole[i].children[j].system_url + data.userRole[i].children[j].url}>
										{data.userRole[i].children[j].displayName}
									</a>
							}
							
						</MenuItem>
					);
					/**
					 * 路由
					 */
					if(i === data.userRole.length - 1) {

						routerArr.push(
							{
								path: data.userRole[i].children[j].url,
								[component(data.userRole[i].children[j].code)]: '',
							}
						);

						/**
						 * 面包屑缓存
						 */
						//breadCrumb[`${data.userRole[i].code},${data.userRole[i].children[j].code}`] = [data.userRole[i].displayName,data.userRole[i].children[j].displayName];
					}
				}
				
			}

		}
		
		/**
		 * 最终生成的导航栏
		 */
		var submenu =
			<SubMenu
				key={data.userRole[i].code}
				title={<span><Icon type="user" /><span className="nav-text">{data.userRole[i].displayName}</span></span>}
			>
				{item1}
			</SubMenu>
			;

		menu.push(submenu);

	}
	/**
	 * 将路由与组件一一对应
	 * componentForRoute(routerArr,componentApp);
	 */

	let renderRouteMune = {
		user,
		menu,
		routerArr : componentForRoute(routerArr,componentApp),
		//breadCrumb,
		isFinished: true,
	}
	
	return renderRouteMune;
}

export const routerMenu = (state = initialState, action) => {
    switch(action.type) {
        case RECEIVED_ROUTER_MENU_DATA:
			
			let data = dataProcess(action.params);

			return state.updateIn(['user'], () => {
				return data.user;
			}).updateIn(['menu'], () => {
				return data.menu;
			}).updateIn(['routerArr'], () => {
				return data.routerArr;
			})
			// .updateIn(['breadCrumb'], () => {
			// 	return data.breadCrumb;
			// });

		case ROUTER_MENU_ISFINISHED:

			const {
                isFinished,
            } = action.params;

            return state.updateIn(['isFinished'], () => {
                return isFinished;
            });

        default :
            return state;
    }
}