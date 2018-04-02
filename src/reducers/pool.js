import { ADD_COMBO } from '../types'
 
export const getInitialState = () => ({
  combos: {},
  totals: {},
})
 
export default function pool(state = getInitialState(), action) {
  switch (action.type) {
    case ADD_COMBO: {
      const {combos} = state
      const {symbol, instances, value} = action.payload
      combos[symbol] = {instances, value}
      return {
        ...state
      }
    }
    default:
      return state
  }
}
