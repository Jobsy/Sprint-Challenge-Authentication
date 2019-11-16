
import React, {useRef} from "react";
import axios from "axios";

export default function RegisterForm(props) {
    const userNameRef = useRef();
    const passwordRef = useRef();

    const submit = () => {
      console.log("...:", {
          
        username: userNameRef.current.value,
        password: passwordRef.current.value,
    })
        axios.post("http://localhost:3300/api/auth/register", {
          
            username: userNameRef.current.value,
            password: passwordRef.current.value,
        })
        .then(res => {
            // debugger
            // console.log("///token: ", res.data.token)
            localStorage.setItem("token", res.data.token)
            props.history.push("/users");
        });
    };

    return (
        <div>
            <div>
                Username <input ref={userNameRef} type="
                text" />
                <br />

                Password  <input ref={passwordRef} type="
                text" />
                <br />
            </div>

            <div>
                <button onClick={submit}>Register</button>
            </div>
        </div>
    );
}