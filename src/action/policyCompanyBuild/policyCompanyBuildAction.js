/**
 * Created by Steve on 2017/6/2.
 */
/**
 * 命名规范：
 * saga请求action以GET、POST等http方法开头
 * saga返回action以RECEIVE开头 表示派发返回数据
 * actionCreator参照action的命名采用小驼峰写法
 * @type {string}
 */
export const GET_EXAMPLE = 'get_example'
export const RECEIVE_EXAMPLE = 'receive_example'
export const POST_NEW_COMPANY_INFO = 'post_new_company_info'
export const RECEIVE_NEW_COMPANY_RETURN_INFO = 'receive_new_company_return_info'
export const ADD_CITY_MODAL_VISIBLE = 'add_city_modal_visible'
export const ADD_CONTACT_MODAL_VISIBLE = 'add_contact_modal_visible'
export const MODIFY_CITY_DATASOURCE = 'modify_city_datasource'
export const MODIFY_CONTACT_DATASOURCE = 'modify_contact_datasource'
export const SET_PRESET_CITY_DATA = 'set_preset_city_data'
export const SET_PRESET_CONTACT_DATA = 'set_preset_contact_data'
export const IS_LOADING = 'is_build_loading'
export const HAS_RECEIVER_IN_THIS_COMPANY = 'has_receiver_in_this_company'
// 公司地址 城市插件返回的id
export const MODIFY_COMPANY_CITY_ID = 'modify_company_city_id'
// 附件url
export const MODIFY_PROTOCOL_ADDON_URL = 'modify_protocol_addon_url'

export const  getExample = (payload) => ({
    type: GET_EXAMPLE,
    payload
})

export const  receiveExample = (payload) => ({
    type: RECEIVE_EXAMPLE,
    payload
})

export const isLoading = (payload) => ({
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

export const modifyCityDataSource = (payload) => ({
    type: MODIFY_CITY_DATASOURCE,
    payload
})

export const modifyContactDataSource = (payload) => ({
    type: MODIFY_CONTACT_DATASOURCE,
    payload
})

export const setPresetCityData = (payload) => ({
    type: SET_PRESET_CITY_DATA,
    payload
})

export const setPresetContactData = (payload) => ({
    type: SET_PRESET_CONTACT_DATA,
    payload
})

export const postNewCompanyInfo = (payload) => ({
    type: POST_NEW_COMPANY_INFO,
    payload
})

export const receiveNewCompanyReturnInfo = (payload) => ({
    type: RECEIVE_NEW_COMPANY_RETURN_INFO,
    payload
})

export const hasReceiverInThisCompany = (payload) => ({
    type: HAS_RECEIVER_IN_THIS_COMPANY,
    payload
})

export const modifyCompanyCityId = (payload) => ({
    type: MODIFY_COMPANY_CITY_ID,
    payload
})

export const modifyProtocolAddonUrl = (payload) => ({
    type: MODIFY_PROTOCOL_ADDON_URL,
    payload
})