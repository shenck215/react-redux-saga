//页面数据保存提交
export const  HANDLE_SUBMIT = 'handle_Submit'
//服务商截点日时间
export const SERVICE_DAY_SELECT = 'service_Day_Select'
//参保月选择改变
export const INSURED_MONTH_SELECT_CHANGE = 'insured_Month_Select_Change'
//参保日选择改变
export const INSURED_DAY_SELECT_CHANGE = 'insured_Day_Select_Change'
//新增特殊截点日弹窗
export const ADD_SPECIAL_DAY_MODAL = 'add_Special_Day_Modal'
//新增特殊节点日弹窗确定按钮(编辑时)
export const HANDLE_SPECIAL_DAY_MODAL_CONFIRN_EDIT = 'handle_Special_Day_Modal_Confirm_Edit'
//新增特殊节点日弹窗确定按钮(新增时)
export const HANDLE_SPECIAL_DAY_MODAL_CONFIRN_ADD = 'handle_Special_Day_Modal_Confirm_Edit_Add'
//新增特殊截点日弹窗取消按钮
export const HANDLE_SPECIAL_DAY_MODAL_CANCEL = 'handle_Special_Day_Modal_Cancel'
//新增调基生效月
export const ADD_CHANGE_BASE = 'add_Change_Base'
//点击调基弹窗确认按钮(编辑)
export const HANDLE_CHANGE_BASE_MODAL_CONFIRM_EDIT = 'handle_Change_Base_Modal_Confirm_Edit'
//点击调基弹窗确认按钮(新增)
export const HANDLE_CHANGE_BASE_MODAL_CONFIRM_ADD = 'handle_Change_Base_Modal_Confirm_Add'
//点击调基弹窗取消按钮
export const HANDLE_CHANGE_BASE_MODAL_CANCEL = 'handle_Change_Base_Modal_Cancel'
//特殊截点日表格编辑
export const ON_SPECIAL_DAY_TABLE_EDIT = 'on_Special_Day_Table_Edit'
//特殊截点日表格删除
export const ON_SPECIAL_DAY_TABLE_DELETE = 'on_Special_Day_Table_Delete'
//调基表格编辑
export const ON_CHANGE_BASE_TABLE_EDIT = 'on_Change_Base_Table_Edit'
//调基表格删除
export const ON_CHANGE_BASE_TABLE_DELETE = 'on_Change_Base_Table_Delete'

export const handleSubmit = (params) => ({
    type: HANDLE_SUBMIT,
    params
})

export const serviceDaySelect = (params) => ({
    type: SERVICE_DAY_SELECT,
    params
})

export const insuredMonthSelectChange = (params) => ({
    type: INSURED_MONTH_SELECT_CHANGE,
    params
})

export const insuredDaySelectChange = (params) => ({
    type: INSURED_DAY_SELECT_CHANGE,
    params
})

export const addSpecialDayModal = (params) => ({
    type: ADD_SPECIAL_DAY_MODAL,
    params
})

export const handleSpecialDayModalConfirmEdit = (params) => ({
    type: HANDLE_SPECIAL_DAY_MODAL_CONFIRN_EDIT,
    params
})

export const handleSpecialDayModalConfirmEditAdd = (params) => ({
    type: HANDLE_SPECIAL_DAY_MODAL_CONFIRN_ADD,
    params
})

export const handleSpecialDayModalCancel = (params) => ({
    type: HANDLE_SPECIAL_DAY_MODAL_CANCEL,
    params
})

export const addChangeBase = (params) => ({
    type: ADD_CHANGE_BASE,
    params
})

export const handleChangeBaseModalConfirmEdit = (params) => ({
    type: HANDLE_CHANGE_BASE_MODAL_CONFIRM_EDIT,
    params
})
export const handleChangeBaseModalConfirmAdd = (params) => ({
    type: HANDLE_CHANGE_BASE_MODAL_CONFIRM_ADD,
    params
})

export const handleChangeBaseModalCancel = (params) => ({
    type: HANDLE_CHANGE_BASE_MODAL_CANCEL,
    params
})

export const onSpecialDayTableEdit = (params) => ({
    type: ON_SPECIAL_DAY_TABLE_EDIT,
    params
})

export const onSpecialDayTableDelete = (params) => ({
    type: ON_SPECIAL_DAY_TABLE_DELETE,
    params
})

export const onChangeBaseTableEdit = (params) => ({
    type: ON_CHANGE_BASE_TABLE_EDIT,
    params
})

export const onChangeBaseTableDelete = (params) => ({
    type: ON_CHANGE_BASE_TABLE_DELETE,
    params
})
