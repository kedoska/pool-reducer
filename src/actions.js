import { ADD_COMBO } from './types'

export const addCombo = (symbol, instances, value) => ({
  type: ADD_COMBO,
  payload: {
    symbol,
    instances,
    value
  }
})