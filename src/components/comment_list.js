import React from 'react'

class CommentList extends React.Component {
  render() {
    const {comments = []} = this.props

    return (
      <ul className='comment-list'>
        {comments.map((com,idx) => (
          <li key={idx} className='comment'>{com}</li>
        ))}
      </ul>
    )
  }
}

export default CommentList
