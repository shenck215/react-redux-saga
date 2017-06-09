/**
 * Created by YiShuai on 2017/5/27.
 */
export const GET_COMPANY_NAME_LIST = 'get_company_name_list'
export const RECEIVED_COMPANY_NAME_LIST = 'received_company_name_list'
export const IS_LOADING = 'is_company_list_loading'
export const MODIFY_FILTER_TAGS = 'modify_filter_tags'
export const MODIFY_FILTER_DATA = 'modify_filter_data'

export const getCompanyNameList = (payload) => ({
    type: GET_COMPANY_NAME_LIST,
    payload
})

export const receivedCompanyList = (payload) => ({
    type: RECEIVED_COMPANY_NAME_LIST,
    payload
})

export const toggleLoadingState = (payload) => ({
    type: IS_LOADING,
    payload
})

export const modifyFilterTags = (payload) => ({
    type: MODIFY_FILTER_TAGS,
    payload
})

export const modifyFilterData = (payload) => ({
    type: MODIFY_FILTER_DATA,
    payload
})