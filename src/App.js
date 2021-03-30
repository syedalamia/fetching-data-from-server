import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Component/Loading";

function App() {
  const [serverState, setFetchstate] = useState([{}]);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3000);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setFetchstate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {loader ? (
        <div className="App">
          <Loading />{" "}
        </div>
      ) : (
        <ul>
          <h2>Length of server fetching data {serverState.length}</h2>
          {serverState.map((data, index) => {
            return <li key={data.id}>{data.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
