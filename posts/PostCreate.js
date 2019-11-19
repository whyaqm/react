import React, { Component } from 'react';
import cookie from 'react-cookies'
import 'whatwg-fetch'

class PostCreate extends Component {
  constructor(props){
    super(props)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleInputChange=this.handleInputChange.bind(this)
  }
  createPosts(data){
    const endpoint='/api/posts/'
    const csrfToken=cookie.load('csrftoken')
    let thisComp=this
    if(csrfToken!==undefined){
      let lookupOptions={
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'X-CSRFToken':csrfToken
        },
        body:JSON.stringify(data),
        credentials:'include'
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
          alert('An error occured!')
        })
    }
  }
  handleSubmit(event){
    event.preventDefault()
  //  console.log(this.state)
    let data=this.state
    if(data['draft']==='on'){
      data['draft']=true
    }else{
      data['draft']=false
    }
//    console.log(data)
    this.createPosts(data)
  }
  handleInputChange(event){
    event.preventDefault()
    console.log(event.target.name,event.target.value)
    let key=event.target.name
    let value=event.target.value
    if (key==='title'){
      if(value.length > 120){
      alert('This title is too long')
      }
    }
    this.setState({
      [key]:value
    })
  }
  componentDidMount(){
    this.setState({
      draft:false,
      title:null,
      content:null,
      publish:null,
    })
  }
  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <div className='form-group'>
      <label for='title'>Post title</label>
      <input type='text' name='title' id='title' className='form-control' placeholder='Block for title' onChange={this.handleInputChange} required='required'/>
      </div>
      <div className='form-group'>
      <label for='content'>Post content</label>
      <textarea type='text' name='content' id='content' className='form-control' placeholder='Block for content' onChange={this.handleInputChange} required='required'/>
      </div>
      <div className='form-group'>
      <label for='draft'>Post draft</label>
      <input type='checkbox' name='draft' id='draft' className='ml-2' placeholder='Block for draft' onChange={this.handleInputChange}/>
      </div>
      <div className='form-group'>
      <label for='publish'>Post publish</label>
      <input type='date' name='publish' id='publish' className='form-control' placeholder='mm/dd/yyyy' onChange={this.handleInputChange} required='required'/>
      </div>
      <button className='btn btn-primary'>Save</button>
      </form>
    )
  }
}

export default PostCreate;
