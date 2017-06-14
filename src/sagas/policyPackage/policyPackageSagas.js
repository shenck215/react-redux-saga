import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'

import { handleSubmit, HANDLE_SUBMIT } from '../../action/policyPackage/policyPackageOneAction'

import { putPolicyPackageOneInfo } from '../../api/policyPackage/policyPackageApi'

function* requestAsync(action) {
    switch (action.type) {
        case HANDLE_SUBMIT:
            const response = yield putPolicyPackageOneInfo(action.params)
            break
    }
}

export default function* watchSyncRequestAction() {
    yield takeEvery([
        HANDLE_SUBMIT
    ], requestAsync)
}