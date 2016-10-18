import { renderComponent, renderContainer, findComponentDOM, findByType, expect } from '../test_helper';
import App from '../../src/components/app';
import CommentBox from '../../src/containers/comment_box';
import CommentList from '../../src/containers/comment_list';
import TestUtils from 'react-addons-test-utils';

describe('App', () => {
  let subjectInstance, subject
  beforeEach(() => {
    subjectInstance = renderContainer(App)
    subject = findComponentDOM(subjectInstance)
  })

  it('shows a comment box', () => {
    expect(findByType(subjectInstance, CommentBox)).to.not.throw
    //expect(subject.find('.comment-box')).to.exist
  })

  it('shows a comment list', () => {
    expect(findByType(subjectInstance, CommentList)).to.not.throw
  })
});
