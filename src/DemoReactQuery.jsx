// JSX code example
import React from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query"; // https://www.npmjs.com/package/react-query
import axios from "axios";
import ReactDOM from "react-dom";

const fetchData = async () => {
  const response = await axios.get("https://js-post-api.herokuapp.com/api/posts?_page=1&limit=10");
  console.log("response", response);
  return response.data;
};

const queryClient = new QueryClient();

function MyComponent() {
  const { data, isLoading, isError } = useQuery("data", fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError.message}</div>;

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default function DemoReactQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <MyComponent />
      </div>
    </QueryClientProvider>
  );
}

// export default DemoReactQuery()
ReactDOM.render(<DemoReactQuery />, document.getElementById("root"));
