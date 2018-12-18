import React, { Component } from "react";
import axios from "axios";
class Axios extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res);
      this.setState({
        users: res.data
      });
    });
  }

  render() {
    const { users } = this.state;
    const userList = users.map(user => {
      return (
        <div key={user.id}>
          <div className="center ">
            {user.name} and user name is {user.username}
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <h1 className="center">Axios</h1>
        <p className="center">This is axios section</p>
        {userList}
      </div>
    );
  }
}

export default Axios;
