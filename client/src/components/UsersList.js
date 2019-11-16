
import React, { useState, useEffect } from "react";
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';

import axiosWithAuth from "../axios/index";
import axios from "axios";
import { UsersForm } from "./UsersForm";



export default function UsersList(props) {
  const [friends, setFriends] = useState({ data: [] });
  const [newFriends, setNewFriends] = useState({ data: [] });
  console.log("?????: ", friends)
  console.log("?????22222: ", newFriends)


  useEffect(() => {

    axiosWithAuth().get("http://localhost:3300/api/jokes")
      .then(res => {
        // debugger
        console.log(">>>: ", res)
        setFriends(res);
      })
      .catch(error => {
        alert("Sorryyyyyyyyyy" + error.message)
      });
  }, []);


  return (
    <div>

      {console.log("ffff2222:", friends)}
      {
        friends.data.map(friend => (
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



