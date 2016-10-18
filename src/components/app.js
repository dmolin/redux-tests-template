import React, { Component } from 'react'
import CommentBox from '../containers/comment_box'
import CommentList from '../containers/comment_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
