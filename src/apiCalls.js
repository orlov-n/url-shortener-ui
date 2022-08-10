export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}



export const postUrls = (url) => {
  return fetch('http://localhost:3001/api/v1/urls', {
  method: 'POST',
  body: JSON.stringify({
    long_url: url.long_url ,
    title: url.title,
  }),
  headers: {
    'Content-type': 'application/json', 
  }
  })
  .then(result => result.json())

}