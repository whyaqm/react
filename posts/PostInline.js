import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class PostsInline extends Component {
  render() {
//    const title=this.props.title
    const {post}=this.props
    const {elClass}=this.props
    const showContent=elClass==='card'?'d-block':'d-none'
    return (
      <div>
      {post!==undefined?<div className={elClass}>
      <h1><Link maintainScrollPosition={false} to={{
          pathname:`/posts/${post.slug}`,
            state:{fromDashboard:false}
        }}>{post.title}</Link></h1>
      <p className={showContent}> is {post.content}</p>
        </div>
        :""}
      </div>
    );
  }
}

export default PostsInline;
