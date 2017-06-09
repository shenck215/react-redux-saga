import React from 'react';
import ReactDOM from 'react-dom';
import RouterIndexApp from './router/routerIndex';
import './css/index/index';
import { Provider } from 'react-redux';
import entryStores from './store/createStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import 'antd/dist/antd.css';

const history = syncHistoryWithStore(browserHistory, entryStores, {
    selectLocationState(state) {
        return state.get('routing');
    },
});

class Root extends React.Component {
    componentDidMount() {
        document.title = '金柚网后台管理';
    }
    render() {
        return (
            <Provider store={entryStores}>
                <RouterIndexApp history={history} />
            </Provider>
        );
    }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
