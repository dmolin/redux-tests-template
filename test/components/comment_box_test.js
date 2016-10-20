import { renderComponent, getEl, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('CommentBox', () => {
  let subject, $subject
  beforeEach(() => {
    subject = renderComponent(CommentBox, {saveComment:sinon.spy()})
    $subject = getEl(subject)
  })

  it('has the correct class', () => {
    expect($subject).to.have.class('comment-box')
  })

  it('has a text area', () => {
    // without jQuery chai assertions
    //expect(subject[0].querySelectorAll('textarea').length).to.equal(1)
    expect($subject.find('textarea')).to.exist
  })

  it('has a button', () => {
    expect($subject.find('button')).to.exist
  })

  describe('entering some text', () => {
    beforeEach(() => {
      $subject.find('textarea').simulate('change', 'new comment')
    })

    it('shows text that is entered', () => {
      expect($subject.find('textarea')).to.have.value('new comment')
    })

    it('clears the input when submitted', () => {
      $subject.simulate('submit')
      expect($subject.find('textarea')).to.have.value('')
    })

    it('save the comment when submitted', () => {
      $subject.simulate('submit')
      expect(subject.props.saveComment).to.have.been.calledWith('new comment')
    })
  })
})
