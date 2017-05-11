import React, { Component } from 'react';
import { 
    Router,
    Route,
    IndexRoute,
} from 'react-router';
import { connect } from 'react-redux';
import {
    Spin,
} from 'antd';
import {
    getRouterMenu,
} from'../action/routerMenu/routerMenuAction';
//import renderRouteMune from './routers';
import MainPageApp from '../page/mainPage/mainPage';
import WelcomeApp from '../page/welcome/welcome';
import NotFoundPageApp from '../page/404/notFundPage';
/* eslint-disable */
/**
 * 懒加载
 */
function lazyLoadComponents(lazyModules) {  
  return (location, cb) => {
    const moduleKeys = Object.keys(lazyModules);
    const promises = moduleKeys.map(key =>
      new Promise(resolve => lazyModules[key](resolve))
    )

    Promise.all(promises).then(modules => {
      cb(null, modules.reduce((obj, module, i) => {
        obj[moduleKeys[i]] = module;
        return obj;
      }, {}))
    })
  }
}

function lazyLoadComponent(lazyModule, a) { 

    return (location, cb) => {
        lazyModule(module => cb(null, module.default));
    }
}


class RouterIndexApp extends Component {
	
	constructor (props) {
		super(props);
        
	}


	componentWillMount() {

        const {
            dispatch,
        } = this.props;

        dispatch(getRouterMenu({}));

	}

    getChildContext() {

        const {
            user,
            menu,
            breadCrumb,
        } = this.props;

        return {
            user,
            menu,
            breadCrumb,
        };
    }
	
	render() {

        const {
            isFinished,
            history,
            routerArr,
        } = this.props;

        let routers = [];
        /**
         * 生成Route
        */
        
        if(isFinished) {
            for(let item of routerArr) {
                routers.push(
                    <Route path={item.path} getComponent={lazyLoadComponent(item.component)} />
                );
            }
        }
        
            

		return (
			isFinished === true ?
                <Router history={history}>
                    <Route path="/" getComponent={lazyLoadComponent(MainPageApp)} >
                        <IndexRoute getComponent={lazyLoadComponent(WelcomeApp)} />
                        {routers}
                        <Route getComponent={lazyLoadComponent(NotFoundPageApp)} />
                    </Route>
                </Router>
			:
                (<div style={ {width: 100, height: 100,  position: 'fixed', left:'50%', margin: '-25px 0 0 -25px',top: '50%'}}>
                    <Spin size="large" tip="加载中..." />
                </div>)
		);
	}
}

RouterIndexApp.childContextTypes = {
    user: React.PropTypes.object,
    menu: React.PropTypes.array,
    breadCrumb: React.PropTypes.object,
}

function mapStateToProps(state) {
    const data = state.getIn(['routerMenu']);
    return {
        user: data.getIn(['user']),
        menu: data.getIn(['menu']),
        routerArr: data.getIn(['routerArr']),
        breadCrumb: data.getIn(['breadCrumb']),
        isFinished: data.getIn(['isFinished']),
    }
}

export default connect(mapStateToProps)(RouterIndexApp);