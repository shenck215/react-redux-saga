/**
 * Created by caozheng on 2017/1/4.
 */
import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

// mainPage
import {
    routerMenu,
} from '../reducers/routerMenu/routerMenuReducer';

const indexReduces = combineReducers({
    routerMenu,
    routing: routerReducer
});

export default indexReduces;