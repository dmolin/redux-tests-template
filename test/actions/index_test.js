import { SAVE_COMMENT } from '../../src/actions/types'
import { saveComment } from '../../src/actions'

describe('actions', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      expect(saveComment('test').type).to.equal(SAVE_COMMENT)
    })

    it('has the correct payload', () => {
      expect(saveComment('test').comment).to.exist
      expect(saveComment('test').comment).to.equal('test')
    })
  })
})
