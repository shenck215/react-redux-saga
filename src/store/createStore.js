/**
 * Created by caozheng on 2017/1/4.
 */
import { createStore, applyMiddleware } from 'redux';
import {
    getSagaList,
} from '../sagas/index';
import createSagaMiddleware  from 'redux-saga';
import indexReduces from '../reducers/index';

const sagaMiddleware = createSagaMiddleware();
const sagaRun = sagaMiddleware.run;

const entryStores = createStore(
    indexReduces,
    applyMiddleware(sagaMiddleware)
);

for(const saga in getSagaList) {
    sagaRun( getSagaList[saga] )
}



export default entryStores