import React, { useState } from 'react';


const UrlForm = () => {
 
  const [title, setTitle] = useState('')
  const [urlToShorten, setUrlToShorten] = useState([])
  const [newUrl, setNewUrl] = useState({})

  const handleNameChange = e => {
    e.target.name === 'titile' && setTitle(e.target.value)
    e.target.name === 'urlToShorten' && setUrlToShorten(e.target.value)
    // this.setState({ [e.target.name]: e.target.value });

  }

  handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
  }

  // clearInputs = () => {
  //   this.setState({title: '', urlToShorten: ''});
  // }

    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          // value={title}
          onChange={e => handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          // value={urlToShorten}
          onChange={e => handleNameChange(e)}
        />

        <button onClick={e => handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }


export default UrlForm;
