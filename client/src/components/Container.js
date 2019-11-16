import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import UsersList from "./UsersList";
import { withAuthCkeck } from "./WithAuthCheck";

export function Container(props) {
  const onLogout = () => {
    localStorage.clear();
    props.history.push("/");
  }

  return (
    <div>
      <nav>
        <span>
          <NavLink exact to="/">Login</NavLink><br />
          <NavLink to="/register">Register</NavLink><br />
          <NavLink to="/users">Users List</NavLink><br />
        </span>

        <button onClick={onLogout}>Logout</button>

      </nav>

      <main>
        <Route
          exact
          path="/"
          component={LoginForm}
        />

        <Route
          exact
          path="/register"
          component={RegisterForm}
        />

        <Route
          exact
          path="/users"
          render={props => withAuthCkeck(UsersList, props)}
        />
      </main>
    </div>
  );
}

export default withRouter(Container);