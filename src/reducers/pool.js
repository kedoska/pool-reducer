import { ADD_COMBO } from '../types'
 
export const getInitialState = () => ({
  combos: {},
  totals: {
    quantity: 0
  },
})
 
export default function pool(state = getInitialState(), action) {
  switch (action.type) {
    case ADD_COMBO: {
      const {totals, combos} = {...state}
      const {symbol, instances, value} = {...action.payload}
      combos[symbol] = {instances, value}
      const next = {
        ...state,
        totals: {
          ...totals,
          quantity: totals.quantity + 1
        }
      }
      return next
    }
    default:
      return state
  }
}
