export default function Question23() {
  // Encoding a URL
  const url = 'https://www.example.com/path with spaces/page.html?query=string&param=value';
  const encodedUrl = encodeURI(url);
  console.log(encodedUrl); // Output: https://www.example.com/path%20with%20spaces/page.html?query=string&param=value

  // Decoding a URL
  const decodedUrl = decodeURI(encodedUrl);
  console.log(decodedUrl); // Output: https://www.example.com/path with spaces/page.html?query=string&param=value

  // Encoding a URL component
  const query = 'key=value&key2=value2';
  const encodedQuery = encodeURIComponent(query);
  console.log(encodedQuery); // Output: key%3Dvalue%26key2%3Dvalue2

  // Decoding a URL component
  const decodedQuery = decodeURIComponent(encodedQuery);
  console.log(decodedQuery); // Output: key=value&key2=value2

}

