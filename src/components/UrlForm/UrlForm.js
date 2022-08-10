import React, { useState } from 'react';


const UrlForm = () => {
 
  const [title, setTitle] = useState('')
  const [urlToShorten, setUrlToShorten] = useState([])

  handleNameChange = e => {
    // this.setState({ [e.target.name]: e.target.value });
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.clearInputs();
  // }

  // clearInputs = () => {
  //   this.setState({title: '', urlToShorten: ''});
  // }

    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          onChange={e => handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='title'
          value={urlToShorten}
          // onChange={e => handleNameChange(e)}
        />

        <button onClick={e => handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }


export default UrlForm;
