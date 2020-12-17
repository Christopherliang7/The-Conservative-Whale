import React from 'react';
import axios from 'axios';
import 'regenerator-runtime';

class Sighting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Title: null,
      Description: null,
    }
    
    this.updateState = this.updateState.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  updateState(event) {
    event.preventDefault();
    const { name, value } = event.target
    this.setState({[name]: value});
  }

  submitPost(event) {
    event.preventDefault();
    axios.post('/posts', { title: this.state.Title, description: this.state.Description })
      .then(() => { console.log('Successfully Created a Post!;') })
      .then(() => { this.props.getPosts()})
      .catch((error) => {console.log('Error in Creating Post: ',  error)});
  }

  render() {
    return (
      <>
        <h2 className='sighting_title'>Post a Whale Sighting: </h2>
        <form className='sighting_form' onSubmit={(event) => this.submitPost(event)}>
          <input className='sighting_form_title' type="text" name="Title" placeholder="Title" onChange={(event) => this.updateState(event)}/>
          <br></br>
          <textarea className='sighting_form_description' type="text" name="Description" placeholder="Tell Us About What You Saw!" onChange={(event) => this.updateState(event)}/>
          <br></br>
          <input className='sighting_button' type='submit'/>
        </form>
      </>
    )
  }

};

export default Sighting;