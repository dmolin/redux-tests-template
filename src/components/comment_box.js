import React from 'react'

class CommentBox extends React.Component {
  constructor(...args) {
    super(...args)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    // use controlled input
    this.state = {
      comment: ''
    }
  }

  handleChange(ev) {
    this.setState({comment: ev.target.value })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({comment:''})
  }

  render() {
    const state = this.state

    return (
      <form className='comment-box' onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>

        <textarea onChange={this.handleChange} value={state.comment}></textarea>
        <div className='comment-actions'><button>Submit comment</button></div>
      </form>
    );
  }
}

export default CommentBox

