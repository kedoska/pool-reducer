import { ADD_COMBO, SET_MAX } from '../types'
 
export const getInitialState = () => ({
  combos: {},
  totals: {
    quantity: 0,
    max: 0
  },
})
 
export default function pool(state = getInitialState(), action) {
  switch (action.type) {
    case SET_MAX: {
      const {totals} = {...state}
      return {
        ...state,
        totals: {
          ...totals,
          max: action.max
        }
      }
    }
    case ADD_COMBO: {
      const {totals, combos} = {...state}
      const {symbol, instances, value} = {...action.payload}
      combos[symbol] = {instances, value}
      return {
        ...state,
        totals: {
          ...totals,
          quantity: totals.quantity + 1
        }
      }
    }
    default:
      return state
  }
}
