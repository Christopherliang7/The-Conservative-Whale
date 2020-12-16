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
      .catch((error) => {console.log('Error in Creating Post: ',  error)});
  }

  render() {
    return (
      <>
        <h2>Post a Whale Sighting: </h2>
        <form onSubmit={(event) => this.submitPost(event)}>
          <input type="text" name="Title" placeholder="Title" onChange={(event) => this.updateState(event)}/>
          <br></br>
          <textarea type="text" name="Description" placeholder="Tell Us About What You Saw!" onChange={(event) => this.updateState(event)}/>
          <input type='submit'/>
        </form>
      </>
    )
  }

};

export default Sighting;