
import React, { useState, useEffect } from "react";

import axiosWithAuth from "../axios/index";



export default function JokesList(props) {
  const [jokes, setJokes] = useState({ data: [] });

  useEffect(() => {

    axiosWithAuth().get("http://localhost:3300/api/jokes")
      .then(res => {
        // debugger
        console.log(">>>: ", res)
        setJokes(res);
      })
      .catch(error => {
        alert("Sorryyyyyyyyyy" + error.message)
      });
  }, []);


  return (
    <div>

      {console.log("ffff2222:", jokes)}
      {
        jokes.data.map(friend => (
          // newFriends.data.map(friend => (
          <div key={friend.id}>
            Joke: {friend.joke}
            <br />
            <br />
            <br />
          </div>
        ))
      }
    </div>
  )
}



