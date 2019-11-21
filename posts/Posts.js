import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import 'whatwg-fetch'
import cookie from 'react-cookies'
import PostInline from './PostInline'

class Posts extends Component {
  constructor(props){
    super(props)
    this.togglePostListClass=this.togglePostListClass.bind(this)
    this.handleNewPost=this.handleNewPost.bind(this)
  }
  state={
    posts:[],
    postsListClass:"card",
  }
  loadPosts(){
    const endpoint='/api/posts/'
    let thisComp=this
    let lookupOptions={
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    }
    fetch(endpoint,lookupOptions)
      .then(function(response){
        return response.json()
      }).then(function(responseData){
        console.log(responseData)
        thisComp.setState({
          posts:responseData
        })
      }).catch(function(error){
        console.log("error",error)
      })
  }
  handleNewPost(postItemData){
    console.log(postItemData)
    let currentPosts=this.state.posts
    currentPosts.unshift(postItemData)
    this.setState({
      posts:currentPosts
    })
  }
  togglePostListClass(event){
    event.preventDefault()
    let currentListClass=this.state.postsListClass
    if(currentListClass===""){
      this.setState({
        postsListClass:"card",
      })
    }else{
    this.setState({
      postsListClass:"",
    })
    }
  }
  componentDidMount(){
    this.setState({
      posts:[],
      postsListClass:"card",
    })
    this.loadPosts()
  }
  render() {
    const{posts}=this.state
    const{postsListClass}=this.state
    const csrfToken=cookie.load('csrftoken')
    return (
      <div>
      <h1>Hi Joy!</h1>
      <Link maintainScrollPosition={false} to={{
          pathname:`/posts/create`,
            state:{fromDashboard:false}
        }}>Create Post</Link>
      <button onClick={this.togglePostListClass}>Toggle Class</button>
      {posts.length>0?posts.map((postItem,index)=>{
        return (
        <PostInline post={postItem} elClass={postsListClass}/>
        )
      }):<p>No found.</p>}
      </div>
    );
  }
}

export default Posts;
