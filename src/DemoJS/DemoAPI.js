// https://www.w3schools.com/jsref/api_fetch.asp
import axios from "axios";

export default function DemoAPI(params) {

  /*--------------- Using the fetch() function. ---------------*/
  fetch('https://js-post-api.herokuapp.com/api/posts?_page=1&limit=10', {
    method: "GET",
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer your-access-token'
    },
    // body: JSON.stringify({
    //   key: 'value'
    // })
  })
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the JSON response
      // console.log('response', response);
      return response.json();
    })
    .then(data => {
      // Handle the JSON data
      // console.log('data', data);
    })
    .catch(error => {
      // Handle any errors that occurred during the fetch
      console.error('Fetch error:', error);
    });

  /*--------------- Using promise.all(). ---------------*/
  // Define a function to make API calls.
  const fetchPosts = async (page) => {
    const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}&limit=10`);

    if (!response.ok) {
      throw new Error(`Failed to fetch posts from page ${page}`);
    }
    console.log('response', response);
    return response.json();
  };

  // Array of page numbers for the API calls.
  const pages = [1, 2, 3];

  // Array of promises for the API calls.
  const promises = pages.map(page => fetchPosts(page));

  // Wait for all promises to resolve in parallel.
  Promise.all(promises)
    .then(results => {
      // All promises have resolved successfully
      console.log('API calls completed successfully:', results);
      // You can process the results here
    })
    .catch(error => {
      // If any of the promises reject, catch the error here
      console.error('One or more API calls failed:', error);
    });

  /*--------------- Using the axios. ---------------*/
  axios.get('https://js-post-api.herokuapp.com/api/posts?_page=1&limit=10')
    .then(response => {
      // Handle the response data.
      // console.log('axios response data: ', response, response.data);
    }).catch(error => {
      // Handle any errors that occurred during the request.
      console.error('Axios error: ', error);
    });
}