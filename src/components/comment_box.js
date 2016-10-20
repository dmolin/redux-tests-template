import React from 'react'

class CommentBox extends React.Component {
  constructor(...args) {
    super(...args)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.props.saveComment(this.refs.comment.value)
    this.refs.comment.value = ''
  }

  componentDidMount() {
    const len = this.refs.comment.value.length * 2
    this.refs.comment.setSelectionRange(len,len)
  }

  render() {
    const {comment} = this.props

    return (
      <form className='comment-box' onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>

        <textarea defaultValue={comment} ref='comment'></textarea>
        <div className='comment-actions'><button>Submit comment</button></div>
      </form>
    );
  }
}

CommentBox.defaultProps = {
  comment: ''
}

if (process.env.NODE_ENV !== 'production') {
  const {string} = React.PropTypes
  CommentBox.propTypes = {
    comment: string
  }
}

export default CommentBox

