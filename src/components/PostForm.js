import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  };
  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: this.state.title,
        body: this.state.body
      })
      .then(res => console.log(res.data));
  };
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor='title'>Title</label>
            <br />
            <input
              type='text'
              name='title'
              id='title'
              value={this.state.title}
              onChange={this.onChange}
            />
            <br />
          </div>
          <div>
            <label htmlFor='body'>Body</label>
            <br />
            <textarea
              name='body'
              id='body'
              cols='30'
              rows='5'
              value={this.state.body}
              onChange={this.onChange}
            ></textarea>
            <br />
          </div>
          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;
