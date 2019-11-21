import React, { Component } from 'react';
import cookie from 'react-cookies'
import 'whatwg-fetch'
import moment from 'moment'
import PostForm from'./PostForm'


class PostCreate extends Component {
  render(){
    return(
    <div>
      <h1>Create Post</h1>
      <PostForm/>
      </div>
    )
  }
}
//  constructor(props){
//    super(props)
//    this.handleSubmit=this.handleSubmit.bind(this)
//    this.handleInputChange=this.handleInputChange.bind(this)
//    this.handleDraftChange=this.handleDraftChange.bind(this)
//    this.clearForm=this.clearForm.bind(this)
//    this.postTitleRef=React.createRef()
//    this.postContentRef=React.createRef()
//    this.state={
//      draft:false,
//      title:null,
//      content:null,
//      publish:null,
//      errors:{}
//    }
//  }
//  createPosts(data){
//    const endpoint='/api/posts/'
//    const csrfToken=cookie.load('csrftoken')
//    let thisComp=this
//    if(csrfToken!==undefined){
//      let lookupOptions={
//        method:'POST',
//        headers:{
//          'Content-Type':'application/json',
//          'X-CSRFToken':csrfToken
//        },
//        body:JSON.stringify(data),
//        credentials:'include'
//      }
//      fetch(endpoint,lookupOptions)
//        .then(function(response){
//          return response.json()
//        }).then(function(responseData){
//          console.log(responseData)
//          if(thisComp.props.newPostItemCreated){
//            thisComp.props.newPostItemCreated(responseData)
//          }
//          thisComp.clearForm()
//        }).catch(function(error){
//          console.log("error",error)
//          alert('An error occured!')
//        })
//    }
//  }
//  handleSubmit(event){
//    event.preventDefault()
//    let data=this.state
//    this.createPosts(data)
//  }
//  handleInputChange(event){
//    event.preventDefault()
//    let key=event.target.name
//    let value=event.target.value
//    if (key==='title'){
//      if(value.length > 120){
//      alert('This title is too long')
//      }
//    }
//    this.setState({
//      [key]:value
//    })
//  }
//  handleDraftChange(event){
//    this.setState({
//      draft:!this.state.draft
//    })
//  }
//  clearForm(event){
//    if(event){
//      event.preventDefault()
//    }
//    this.postCreateForm.reset()
//  }
//  clearFormRefs(){
//    this.postTitleRef.current=''
//    this.postContentRef.current=''
//  }
//  componentDidMount(){
//    this.setState({
//      draft:false,
//      title:null,
//      content:null,
//      publish:moment(new Date()).format('YYYY-MM-DD'),
//    })
//    this.postTitleRef.current.focus()
//  }
//  render() {
//    const {publish}=this.state
//    return(
//    <form onSubmit={this.handleSubmit} ref={(el)=>this.postCreateForm=el}>
//      <div className='form-group'>
//      <label for='title'>Post title</label>
//      <input 
//      type='text' 
//      name='title' 
//      id='title' 
//      className='form-control' 
//      placeholder='Block for title' 
//      ref={this.postTitleRef}
//      onChange={this.handleInputChange} 
//      required='required'/>
//      </div>
//      <div className='form-group'>
//      <label for='content'>Post content</label>
//      <textarea type='text' name='content' id='content' className='form-control' placeholder='Block for content' onChange={this.handleInputChange} required='required' ref={this.postContentRef}/>
//      </div>
//      <div className='form-group'>
//      <label for='draft'>
//      <input type='checkbox' name='draft' checked={this.state.draft} id='draft' className='ml-2' placeholder='Block for draft' onChange={this.handleDraftChange}/>
//      Post draft</label>
//      <button onClick={(event)=>{event.preventDefault();this.handleDraftChange()}}>Toggle draft</button>
//      </div>
//      <div className='form-group'>
//      <label for='publish'>Post publish</label>
//      <input 
//      type='date' 
//      name='publish' 
//      id='publish' 
//      className='form-control' 
//      placeholder='mm/dd/yyyy' 
//      onChange={this.handleInputChange} 
//      value={publish}
//      required='required'/>
//      </div>
//      <button className='btn btn-primary'>Save</button>
//      <button className='btn btn-secondary' onClick={this.clearForm}>Cancel</button>
//      </form>
//    )
//  }
//}
//
export default PostCreate;
