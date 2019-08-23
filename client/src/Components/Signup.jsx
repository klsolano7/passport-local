import React, { Component } from "react";
import axios from 'axios';

export default class Signup extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = (event) => {
      event.preventDefault();
      const { email,password } = this.state;
      axios({
          url: "/authentication/signup", 
          method: "POST",
          data: {
              email,
              password
          }
      })
      .then((response) =>{
          console.log("Date: ", response.data )
      })
      .catch((error) =>{
          console.log('Error: ', error.response)
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
          {/* <h2>Signup Component</h2> */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" onChange={this.handleChange} />
          <input type="password" name="password" onChange={this.handleChange} />
          <button>Signup</button>
        </form>
      </div>
    );
  }
}

// form>input*2 //
