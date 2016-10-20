import { renderComponent, renderContainer, getEl, findByType, expect } from '../test_helper';
import App from '../../src/components/app';
import CommentBox from '../../src/containers/comment_box';
import CommentList from '../../src/containers/comment_list';
import TestUtils from 'react-addons-test-utils';

describe('App', () => {
  let subject, $subject
  beforeEach(() => {
    subject = renderContainer(App)
    $subject = getEl(subject)
  })

  it('shows a comment box', () => {
    expect(findByType(subject, CommentBox)).to.not.throw
    //expect(subject.find('.comment-box')).to.exist
  })

  it('shows a comment list', () => {
    expect(findByType(subject, CommentList)).to.not.throw
  })
});
