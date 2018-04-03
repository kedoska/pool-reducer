import reducer, { getInitialState} from '../src/reducers/pool'
import {addCombo} from '../src/actions'

describe('pool reducer', () => {
  test('initial state', () => {
    expect(getInitialState()).toEqual({
      combos: {},
      totals: {},
    })
  })
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(getInitialState())
  })
  it('should handle ADD_COMBO', () => {
    const symbol = 'X'
    const instances = 1
    const value = 0
    const { combos } = reducer(undefined, addCombo(symbol, 1, 0))
    expect(combos).toHaveProperty(symbol, {instances, value})
  })
})
