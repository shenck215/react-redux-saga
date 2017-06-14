import * as Immutable from 'immutable'
import {
    HANDLE_SUBMIT,SERVICE_DAY_SELECT,INSURED_MONTH_SELECT_CHANGE,INSURED_DAY_SELECT_CHANGE,
    ADD_SPECIAL_DAY_MODAL,HANDLE_SPECIAL_DAY_MODAL_CONFIRN_EDIT,HANDLE_SPECIAL_DAY_MODAL_CONFIRN_ADD,HANDLE_SPECIAL_DAY_MODAL_CANCEL,
    ADD_CHANGE_BASE,HANDLE_CHANGE_BASE_MODAL_CONFIRM_EDIT,HANDLE_CHANGE_BASE_MODAL_CONFIRM_ADD,HANDLE_CHANGE_BASE_MODAL_CANCEL,
    ON_SPECIAL_DAY_TABLE_EDIT,ON_SPECIAL_DAY_TABLE_DELETE,ON_CHANGE_BASE_TABLE_EDIT,
    ON_CHANGE_BASE_TABLE_DELETE,
} from '../../action/policyPackage/policyPackageOneAction'

const initialState = Immutable.fromJS({
    specialDayModalVisibility: false,
    dataSource: [],
    count : 0,
    countKey: 0,
    index: -1,
    insuredMonths: [],
    changeBaseModalVisibility: false,
    dataSourceBase: [],
    countBase: 0,
    indexBase: -1,
    countKeyBase: 0,
    yearBase: [],

    serviceDaySelect: 0,
    insuredMonthSelect: 1,
    insuredDateDaySelected: 0,
})

export const policyPackageOneReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_SPECIAL_DAY_MODAL:
            return state.updateIn(['specialDayModalVisibility'], () => Immutable.fromJS(action.params.specialDayModalVisibility))
        case HANDLE_SPECIAL_DAY_MODAL_CONFIRN_EDIT:
            return state.updateIn(['specialDayModalVisibility'], () => action.params.specialDayModalVisibility)
                .updateIn(['dataSource'], () => Immutable.fromJS(action.params.dataSource))
                .updateIn(['index'], () => action.params.index)
                .updateIn(['countKey'], () => action.params.countKey)
                .updateIn(['insuredMonths'], () => action.params.insuredMonths)
        case HANDLE_SPECIAL_DAY_MODAL_CONFIRN_ADD:
            return state.updateIn(['specialDayModalVisibility'], () => action.params.specialDayModalVisibility)
                .updateIn(['dataSource'], () => Immutable.fromJS(action.params.dataSource))
                .updateIn(['count'], () => action.params.count)
                .updateIn(['countKey'], () => action.params.countKey)
                .updateIn(['insuredMonths'], () => action.params.insuredMonths)
        case SERVICE_DAY_SELECT:
            return state.updateIn(['serviceDaySelect'], () => action.params.serviceDaySelect)
        case INSURED_MONTH_SELECT_CHANGE:
            return state.updateIn(['insuredMonthSelect'], () => action.params.insuredMonthSelect)
        case INSURED_DAY_SELECT_CHANGE:
            return state.updateIn(['insuredDateDaySelected'], () => action.params.insuredDateDaySelected)
        case ADD_CHANGE_BASE:
            return state.updateIn(['changeBaseModalVisibility'], () => action.params.changeBaseModalVisibility)
        case HANDLE_CHANGE_BASE_MODAL_CONFIRM_EDIT:
            return state.updateIn(['changeBaseModalVisibility'], () => action.params.changeBaseModalVisibility)
                .updateIn(['dataSourceBase'], () => Immutable.fromJS(action.params.dataSourceBase))
                .updateIn(['countKeyBase'], () => action.params.countKeyBase)
                .updateIn(['yearBase'], () => Immutable.fromJS(action.params.yearBase))
                .updateIn(['indexBase'], () => action.params.indexBase)
        case HANDLE_CHANGE_BASE_MODAL_CONFIRM_ADD:
            return state.updateIn(['changeBaseModalVisibility'], () => action.params.changeBaseModalVisibility)
                .updateIn(['dataSourceBase'], () => Immutable.fromJS(action.params.dataSourceBase))
                .updateIn(['countBase'], () => action.params.countBase)
                .updateIn(['countKeyBase'], () => action.params.countKeyBase)
                .updateIn(['yearBase'], () => Immutable.fromJS(action.params.yearBase))
        case ON_SPECIAL_DAY_TABLE_DELETE:
            return state.updateIn(['dataSource'], () => Immutable.fromJS(action.params.dataSource))
                .updateIn(['count'], () => action.params.count)
                .updateIn(['insuredMonths'], () => action.params.insuredMonths)
        case ON_CHANGE_BASE_TABLE_DELETE:
            return state.updateIn(['dataSourceBase'], () => Immutable.fromJS(action.params.dataSourceBase))
                .updateIn(['countBase'], () => action.params.countBase)
                .updateIn(['yearBase'], () => action.params.yearBase)
        case ON_CHANGE_BASE_TABLE_EDIT:
            return state.updateIn(['changeBaseModalVisibility'], () => action.params.changeBaseModalVisibility)
                .updateIn(['indexBase'], () => action.params.indexBase)
        case ON_SPECIAL_DAY_TABLE_EDIT:
            return state.updateIn(['specialDayModalVisibility'], () => action.params.specialDayModalVisibility)
                .updateIn(['index'], () => action.params.index)
        default:
            return state
    }
}