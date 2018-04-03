import reducer, { getInitialState} from '../src/reducers/pool'
import {addCombo, setMax} from '../src/actions'

const dispatchAndLog = (reducer, initialState, action) => {
  console.log('dispatching', action)
  const state = reducer(initialState, action)
  console.log('next state', state)
  return state
}

describe('pool reducer', () => {
  test('initial state', () => {
    expect(getInitialState()).toEqual({
      combos: {},
      totals: {
        quantity: 0,
        max: 0
      },
    })
  })
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(getInitialState())
  })
  it('should handle SET_MAX', () => {
    const MAX = 10000
    const { totals } = dispatchAndLog(reducer, undefined, setMax(MAX))
    expect(totals).toHaveProperty('max', MAX)
  })
  it('should handle ADD_COMBO', () => {
    const symbol = 'X'
    const instances = 1
    const value = 0
    const { totals, combos } = dispatchAndLog(reducer, undefined, addCombo(symbol, 1, 0))
    expect(combos).toHaveProperty(symbol, {instances, value})
    expect(totals).toHaveProperty('quantity', instances)
  })
})
