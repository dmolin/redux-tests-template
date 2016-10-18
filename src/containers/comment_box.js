import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CommentBox from '../components/comment_box'
import { saveComment } from '../actions'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveComment
  }, dispatch)
}

//export default connect(null, mapDispatchToProps)(CommentBox)
export default connect(null, {saveComment})(CommentBox)
