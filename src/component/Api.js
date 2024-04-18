import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <h1>Title : {data.title}</h1>
          <p>Body : {data.body}</p>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default Api;
