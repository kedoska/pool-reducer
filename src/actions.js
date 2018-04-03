import {
  ADD_COMBO,
  SET_MAX
} from './types'

export const addCombo = (symbol, instances, value) => ({
  type: ADD_COMBO,
  payload: {
    symbol,
    instances,
    value
  }
})

export const setMax = (max) => ({
  type: SET_MAX,
  max
})