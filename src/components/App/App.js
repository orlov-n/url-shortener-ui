import React, { useEffect, useState } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';


 const App = () => {

const [urls, setUrls] = useState([])

useEffect(() => {

getUrls().then((response) => {
  console.log('this is response', response)
  setUrls(response.urls)
  // updateUrls()
})

  // api call
}, [])

const updateUrls = (newUrl) => {
  // setUrls([...urls, newUrl])
console.log('newUrl in App', newUrl)
postUrls(newUrl).then(data => {
  console.log('Post newUrl from the app', data)
  console.log('Urls from the app', urls)
  
})
}

  console.log('urls above return in App', urls)
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm updateUrls={updateUrls}/>
        </header>

        <UrlContainer urls={urls}/>
      </main>
    );
  }


export default App;
