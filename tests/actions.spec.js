import reducer, { getInitialState} from '../src/reducers/pool'
import {ADD_COMBO} from '../src/types'
import {addCombo} from '../src/actions'

describe('actions', () => {
  it('should create an action to add combinations', () => {
    const action = addCombo()
    expect(action).toHaveProperty('type', ADD_COMBO)
  })
})
