import React, { Component } from 'react';

class PostCreate extends Component {
  render() {
    return(
    <form>
      <div className='form-group'>
      <label for='title'>Post title</label>
      <input type='text' name='title' id='title' className='form-control' placeholder='Block for title'/>
      </div>
      <div className='form-group'>
      <label for='content'>Post content</label>
      <textarea type='text' name='content' id='content' className='form-control' placeholder='Block for content'/>
      </div>
      <div className='form-group'>
      <label for='draft'>Post draft</label>
      <input type='checkbox' name='draft' id='draft' className='ml-2' placeholder='Block for draft'/>
      </div>
      <div className='form-group'>
      <label for='publish'>Post publish</label>
      <input type='date' name='publish' id='publish' className='form-control' placeholder='mm/dd/yyyy'/>
      </div>
      <button className='btn btn-primary'>Save</button>
      </form>
    )
  }
}

export default PostCreate;
