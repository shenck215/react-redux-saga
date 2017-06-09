/**
 * Created by YiShuai on 2017/6/1.
 */
export const GET_POLICY_COMPANY_DETAIL = 'get_policy_company_detail'
export const RECEIVED_POLICY_COMPANY_DETAIL = 'received_policy_company_detail'
export const DELETE_COMPANY = 'delete_company'
export const IS_LOADING = 'is_loading'
export const ADD_CITY_MODAL_VISIBLE = 'add_city_modal_visible'
export const ADD_CONTACT_MODAL_VISIBLE = 'add_contact_modal_visible'
export const PUT_MODIFIED_COMPANY_INFO = 'modify_company_info'
export const SAVING_LOADING = 'saving_loading'
export const PUT_MODIFIED_COMPANY_INFO_SUCCESS = 'put_modified_company_info_success'
export const TOGGLE_EDITABLE = 'toggle_editable'
// 服务城市相关action
export const GET_SERVICE_CITY = 'get_service_city'
export const RECEIVE_SERVICE_CITY = 'receive_service_city'
// 更改服务城市状态
export const MODIFY_SERVICE_CITY_SERVICE_STATE = 'modify_service_city_service_state'
export const MODIFY_SERVICE_CITY_SERVICE_STATE_SUCCESS = 'modify_service_city_service_state_success'
// 删除服务城市
export const DELETE_SERVICE_CITY = 'delete_service_city'
export const ADD_SERVICE_CITY = 'add_service_city'
export const MODIFY_SERVICE_CITY = 'modify_service_city'
// 城市下有无在保人员
export const HAS_SECURED_CUSTOMER_IN_SERVICE_CITY = 'has_secured_customer_in_service_city'
export const HAS_SECURED_CUSTOMER_IN_SERVICE_CITY_RESULT = 'has_secured_customer_in_service_city_result'

// 联系人相关action
export const GET_CONTACT = 'get_contact'
export const RECEIVE_CONTACT = 'receive_contact'
export const ADD_CONTACT = 'add_contact'
export const MODIFY_CONTACT = 'modify_contact'
export const DELETE_CONTACT = 'delete_contact'
export const HAS_RECEIVER_IN_THIS_COMPANY = 'has_receiver_in_this_company'
// 操作日志相关action
export const GET_OPERATION_LOG = 'get_operation_log'
export const RECEIVE_OPERATION_LOG = 'receive_operation_log'

export const getPolicyCompanyDetail = (payload) => ({
    type: GET_POLICY_COMPANY_DETAIL,
    payload
})

export const receivedPolicyCompanyDetail = (payload) => ({
    type: RECEIVED_POLICY_COMPANY_DETAIL,
    payload
})

export const toggleLoadingState = (payload) => ({
    type: IS_LOADING,
    payload
})

export const addCityModalVisible = (payload) => ({
    type: ADD_CITY_MODAL_VISIBLE,
    payload
})

export const addContactModalVisible = (payload) => ({
    type: ADD_CONTACT_MODAL_VISIBLE,
    payload
})

// 修改服务商信息
export const putModifiedCompanyInfo = (payload) => ({
    type: PUT_MODIFIED_COMPANY_INFO,
    payload
})

// 删除服务商
export const deleteCompany = (payload) => ({
    type: DELETE_COMPANY,
    payload
})

// 正在保存服务商信息
export const savingLoading = (payload) => ({
    type: SAVING_LOADING,
    payload
})

// 成功修改服务商信息
export const putModifiedCompanyInfoSuccess = (payload) => ({
    type: PUT_MODIFIED_COMPANY_INFO_SUCCESS,
    payload
})

export const toggleEditable = (payload) => ({
    type: TOGGLE_EDITABLE,
    payload
})

// 服务城市相关actionCreator
export const getServiceCity = (payload) => ({
    type: GET_SERVICE_CITY,
    payload
})
export const receiveServiceCity = (payload) => ({
    type: RECEIVE_SERVICE_CITY,
    payload
})
export const modifyServiceCityServiceState = (payload) => ({
    type: MODIFY_SERVICE_CITY_SERVICE_STATE,
    payload
})
export const modifyServiceCityServiceStateSuccess = (payload) => ({
    type: MODIFY_SERVICE_CITY_SERVICE_STATE_SUCCESS,
    payload
})
export const deleteServiceCity= (payload) => ({
    type: DELETE_SERVICE_CITY,
    payload
})
export const addServiceCity = (payload) => ({
    type: ADD_SERVICE_CITY,
    payload
})
export const modifyServiceCity = (payload) => ({
    type: MODIFY_SERVICE_CITY,
    payload
})
export const hasSecuredCustomerInServiceCity = (payload) => ({
    type: HAS_SECURED_CUSTOMER_IN_SERVICE_CITY,
    payload
})
export const hasSecuredCustomerInServiceCityResult = (payload) => ({
    type: HAS_SECURED_CUSTOMER_IN_SERVICE_CITY_RESULT,
    payload
})

// 联系人相关actionCreator
export const getContact = (payload) => ({
    type: GET_CONTACT,
    payload
})
export const receiveContact = (payload) => ({
    type: RECEIVE_CONTACT,
    payload
})
export const addContact = (payload) => ({
    type: ADD_CONTACT,
    payload
})
export const modifyContact = (payload) => ({
    type: MODIFY_CONTACT,
    payload
})
export const deleteContact = (payload) => ({
    type: DELETE_CONTACT,
    payload
})
export const hasReceiverInThisCompany = (payload) => ({
    type: HAS_RECEIVER_IN_THIS_COMPANY,
    payload
})

// 操作日志相关actionCreator
export const getOperationLog = (payload) => ({
    type: GET_OPERATION_LOG,
    payload
})
export const receiveOperationLog = (payload) => ({
    type: RECEIVE_OPERATION_LOG,
    payload
})
