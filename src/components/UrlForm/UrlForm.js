import React, { useState } from 'react';


const UrlForm = () => {
 
  const [title, setTitle] = useState('')
  const [urlToShorten, setUrlToShorten] = useState([])
  const [newUrl, setNewUrl] = useState({})

  const handleChange = e => {
    e.target.name === 'title' && setTitle(e.target.value)
    console.log('title value in handleChange', e.target.value )

    e.target.name === 'urlToShorten' && setUrlToShorten(e.target.value)
    console.log('urlToShorten value in handleChange', e.target.value )
    // this.setState({ [e.target.name]: e.target.value });

  }

  const handleSubmit = e => {
    e.preventDefault();
    setNewUrl({long_url: urlToShorten, title: title})

    // clearInputs();
  }

  // clearInputs = () => {
  //   this.setState({title: '', urlToShorten: ''});
  // }
  console.log('title', title, 'urlToShorten', urlToShorten, 'newUrl', newUrl)
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          // value={title}
          onChange={e => handleChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          // value={urlToShorten}
          onChange={e => handleChange(e)}
        />

        <button onClick={e => handleSubmit(e)}>
          Shorten Please!
        </button> 
      </form>
    )
  }


export default UrlForm;
