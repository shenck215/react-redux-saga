import TableApp from '../page/wybdemo/TableApp';
import DateApp from '../page/wybdemo/DateApp';
import ModalApp from '../page/wybdemo/ModalApp';

/**
 * key必须与后台返回的code值对应(如：code为person_s，可以值为PersonsApp),
 * value值为组件名称
 */
let componentApp = {
    'WYBvalidApp': DateApp,
    'ButtonclienttransferApp': TableApp,
    'WYBinsuredApp': ModalApp,
};

export default componentApp;

