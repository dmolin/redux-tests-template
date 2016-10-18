import commentReducer, {initialState} from '../../src/reducers/comments'
import { SAVE_COMMENT } from '../../src/actions/types'

describe('Comments Reducers', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {type:'unknown'})).to.eql(initialState)
    expect(commentReducer()).to.eql(initialState)
  })

  it('SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, comment: 'test' };
    const expectation = [].concat(initialState, 'test')
    expect(commentReducer(undefined, action)).to.eql(expectation)
  })


})
