/**
 * Created by Steve on 2017/6/2.
 */
import * as Immutable from 'immutable'
import {
    RECEIVE_EXAMPLE, IS_LOADING, RECEIVE_NEW_COMPANY_RETURN_INFO,
    ADD_CITY_MODAL_VISIBLE, ADD_CONTACT_MODAL_VISIBLE,
    MODIFY_CITY_DATASOURCE, MODIFY_CONTACT_DATASOURCE,
    SET_PRESET_CITY_DATA, SET_PRESET_CONTACT_DATA,
    HAS_RECEIVER_IN_THIS_COMPANY, MODIFY_COMPANY_CITY_ID, MODIFY_PROTOCOL_ADDON_URL
} from '../../action/policyCompanyBuild/policyCompanyBuildAction'

const initialState = Immutable.fromJS({
    isLoading: false,
    addCityModalVisible: false,
    addContactModalVisible: false,
    // 表格数据
    cityDataSource: [],
    // 用于发送请求的数据
    city: [],
    presetCityData: null,
    presetCityDataIndex: null,
    contactDataSource: [],
    contact: [],
    presetContactData: null,
    presetContactDataIndex: null,
    // 是否有接收人及接收人在表格数据中的索引
    hasReceiverInThisCompany: false,
    receiverIndex: null,
    // 公司地址 FormItem中获取不到
    companyCityId: null,
    // 上传文件地址 FormItem中暂时获取不到
    protocolAddonUrl: null,
    // 请求结果码 0 失败 1 成功
    responseStatus: null
})

export const policyCompanyBuildReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_EXAMPLE:
            break
        case RECEIVE_NEW_COMPANY_RETURN_INFO:
            return state.updateIn(['responseStatus'], () => action.payload)
        case IS_LOADING:
            return state.updateIn(['isLoading'], () => action.payload)
        case ADD_CITY_MODAL_VISIBLE:
            const { addCityModalVisible } = action.payload
            return state.updateIn(['addCityModalVisible'], () => addCityModalVisible)
        case ADD_CONTACT_MODAL_VISIBLE:
            const { addContactModalVisible } = action.payload
            return state.updateIn(['addContactModalVisible'], () => addContactModalVisible)
        case MODIFY_CITY_DATASOURCE:
            const { cityDataSource, city } = action.payload
            return state.updateIn(['cityDataSource'], () => {
                return Immutable.fromJS(cityDataSource)
            }).updateIn(['city'], () => {
                return Immutable.fromJS(city)
            })
        case MODIFY_CONTACT_DATASOURCE:
            const { contactDataSource, contact } = action.payload
            return state.updateIn(['contactDataSource'], () => {
                return Immutable.fromJS(contactDataSource)
            }).updateIn(['contact'], () => {
                return Immutable.fromJS(contact)
            })
        case SET_PRESET_CITY_DATA:
            const { presetCityData, presetCityDataIndex } = action.payload
            return state.updateIn(['presetCityData'], () => {
                return presetCityData
            }).updateIn(['presetCityDataIndex'], () => {
                return presetCityDataIndex
            })
        case SET_PRESET_CONTACT_DATA:
            const { presetContactData, presetContactDataIndex } = action.payload
            return state.updateIn(['presetContactData'], () => presetContactData)
                .updateIn(['presetContactDataIndex'], () => presetContactDataIndex)
        case HAS_RECEIVER_IN_THIS_COMPANY:
            const { hasReceiverInThisCompany, receiverIndex } = action.payload
            return state.updateIn(['hasReceiverInThisCompany'], () => hasReceiverInThisCompany)
                        .updateIn(['receiverIndex'], () => receiverIndex)
        case MODIFY_COMPANY_CITY_ID:
            console.log('companycityid', action.payload)
            return state.updateIn(['companyCityId'], () => action.payload)
        case MODIFY_PROTOCOL_ADDON_URL:
            return state.updateIn(['protocolAddonUrl'], () => action.payload)
        default:
            return state
    }
}