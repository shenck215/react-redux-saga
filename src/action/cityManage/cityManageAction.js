/**
 * Created by YiShuai on 2017/6/12.
 */
export const GET_RECORDS = 'get_records'
export const RECEIVE_RECORDS = 'receive_records'
export const IS_LOADING = 'city_manage_is_loading'
export const TOGGLE_ADD_CITY_MODAL_VISIBLE = 'toggle_add_city_modal_visible'
export const GET_COMPANY_INFO_BY_CITY = 'get_company_info_by_city'
export const RECEIVE_COMPANY_INFO_BY_CITY = 'receive_company_info_by_city'
export const MODIFY_GET_COMPANY_LOADING_TEXT = 'modify_get_company_loading_text'

export const getRecords = (payload) => ({
    type: GET_RECORDS,
    payload
})

export const receiveRecords = (payload) => ({
    type: RECEIVE_RECORDS,
    payload
})

export const isLoading = (payload) => ({
    type: IS_LOADING,
    payload
})

export const toggleAddCityModalVisible = (payload) => ({
    type: TOGGLE_ADD_CITY_MODAL_VISIBLE,
    payload
})

export const getCompanyInfoByCity = (payload) => ({
    type: GET_COMPANY_INFO_BY_CITY,
    payload
})

export const receiveCompanyInfoByCity = (payload) => ({
    type: RECEIVE_COMPANY_INFO_BY_CITY,
    payload
})

export const modifyGetCompanyLoadingText = (payload) => ({
    type: MODIFY_GET_COMPANY_LOADING_TEXT,
    payload
})