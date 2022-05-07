

// eslint-disable-next-line import/no-cycle
import { AppMutationTypes } from './mutation-types'
import { AppActionTypes } from './action-types'

export const actions = {
  [AppActionTypes.ACTION_TOGGLE_SIDEBAR]({ commit }, withoutAnimation) {
    commit(AppMutationTypes.TOGGLE_SIDEBAR, withoutAnimation)
  },
  [AppActionTypes.ACTION_CLOSE_SIDEBAR]({ commit }, withoutAnimation) {
    commit(AppMutationTypes.CLOSE_SIDEBAR, withoutAnimation)
  },
  [AppActionTypes.ACTION_TOGGLE_DEVICE]({ commit }, device) {
    commit(AppMutationTypes.TOGGLE_DEVICE, device)
  },
  [AppActionTypes.ACTION_SET_LANGUAGE]({ commit }, language) {
    commit(AppMutationTypes.SET_LANGUAGE, language)
  },
  [AppActionTypes.ACTION_SET_SIZE]({ commit }, size) {
    commit(AppMutationTypes.SET_SIZE, size)
  }
}
