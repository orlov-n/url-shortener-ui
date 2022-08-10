import React, { useState } from 'react';


const UrlForm = ({updateUrls}) => {
 
  const [title, setTitle] = useState('')
  const [urlToShorten, setUrlToShorten] = useState([])
  // const [newUrl, setNewUrl] = useState({})

  // const handleChange = e => {
  //   e.target.name === 'title' && setTitle(e.target.value)
  //   // console.log('title value in handleChange', e.target.value )

  //   e.target.name === 'urlToShorten' && setUrlToShorten(e.target.value)
  //   // console.log('urlToShorten value in handleChange', e.target.value )
  //   // this.setState({ [e.target.name]: e.target.value });

  // }

  const handleSubmit = e => {
    e.preventDefault();
    // setNewUrl()
    updateUrls({long_url: urlToShorten, title: title})
    clearInputs();
  }


  const clearInputs = () => {
    setTitle('')
    setUrlToShorten('')

    // setState({title: '', urlToShorten: ''});
  }
  
  // console.log('ABOVE FORM RETURN', 'title', title, 'urlToShorten', urlToShorten, )
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          // value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          // value={urlToShorten}
          onChange={e => setUrlToShorten(e.target.value)}
        />

        <button onClick={e => handleSubmit(e)}>
          Shorten Please!
        </button> 
      </form>
    )
  }


export default UrlForm;
