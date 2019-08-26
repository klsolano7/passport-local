import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: "",
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    axios({
      url: "/authentication/signin",
      method: "POST",
      data: {
        email,
        password
      }
    })
      .then(response => {
        this.props.history.push('/profile')
      })
      .catch(error => {
        this.setState({
            errorMessage: error.response.data.message
        })
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        {/* <h2>Login Component</h2> */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" onChange={this.handleChange} />
          <input type="password" name="password" onChange={this.handleChange} />
          <button>Login</button>
        </form>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}
