import { renderComponent, findComponentDOM, expect } from '../test_helper'
import CommentList from '../../src/components/comment_list'

describe('CommentList', () => {
  let subject, subjectInstance, props

  beforeEach(() => {
    props = { comments: ['first', 'second'] }
    subjectInstance = renderComponent(CommentList, props)
    subject = findComponentDOM(subjectInstance)
  })

  it('tags each comment with a comment class', () => {
    expect(subject.find('.comment').length).to.equal(2)
  })

  it('shows each comment provided', () => {
    /*
    const matched = Array.prototype.slice.call(subject.find('.comment'), 0).reduce( (acc, el, idx) => {
      if (el.textContent === props.comments[idx]) 
        acc += 1
      return acc
    }, 0)
    expect(matched).to.equal(props.comments.length)
    */
    expect( Array.prototype.slice.call(
              subject.find('.comment'),0)
              .map( comm => comm.textContent )
              .join(',')).to.equal(props.comments.join(','))
  })
})

