// https://www.w3schools.com/jsref/api_fetch.asp

export default function DemoAPI(params) {
  /*--- Use the fetch() function. ---*/
  fetch('https://js-post-api.herokuapp.com/api/posts?_page=1&limit=10')
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON response
      console.log('response', response);
      return response.json();
    })
    .then(data => {
      // Handle the JSON data
      console.log('data', data);
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch
      console.error('Fetch error:', error);
    });
}