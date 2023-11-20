import React from "react";
import useAxios from "../hooks/useAxios";
import axios from "../apis/dadjokes";

const Jokes = () => {
  const [joke, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfig: {
      Headers: {
        "Content-Language": "en-US",
      },
    },
  });
  return (
    <article>
      <h2>Random Dad Jokes.</h2>

      {loading && <p>loading...</p>}

      {!loading && error && <p className="errKsg">(error)</p>}

      {!loading && !error && joke && <p>{joke?.joke}</p>}

      {!loading && !error && !joke && <p>No joke to display! </p>}

      <button onClick={() => refetch()}>Get Joke</button>
    </article>
  );
};

export default Jokes;
