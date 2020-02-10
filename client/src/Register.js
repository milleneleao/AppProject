import React, { Component } from 'react';
import Header from './components/header';
// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';

class Register extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      username: undefined,
      email: undefined,
      password: undefined,
      singup: {
        success: undefined,
        message: undefined
      }
    }
  }

  static displayname = "Register";

  handleSubmit(e) {
    e.preventDefault();

    let dataToSend = {
      userData: {
        username: this.refs.username.value,
        email: this.refs.email.value,
        password: this.refs.password.value
      }
    };


    let url = 'http://localhost:3001/users/register';
    
    fetch(url, {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson.success) {
          this.setState({
            ...this.state,
            singup: {
              success: true,
              message: responseJson.message
            }
          });
        } else {
          this.setState({
            ...this.state,
            singup: {
              success: false,
              message: responseJson.message
            }
          });
        }
      })

    this.refs.username.value = '';
    this.refs.email.value = '';
    this.refs.password.value = '';
  }




  render() {
    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
      <div className="container-fluid" id="page-container" >
        <Header displaySING={"d-none"} />
        <div className="row m-5">
          <div className="col col-lg-12 mt-5">
            <div className="jumbotron jumbotron-fluid bg-white" style={{ background: "transparent !important" }}>
              <div className="container">
                <div className="row">
                  <div className="col-6  m-auto">  <img src="./images/coverC.jpg" className="img-fluid" alt="Responsive image" /></div>
                  <div className="col-6 m-auto">
                    {
                      this.state.singup.success !== undefined ? (
                        this.state.singup.success ?
                          <div className="alert alert-success" role="alert">
                            {this.state.singup.message}
                          </div>
                          : 
                          <div className="alert alert-danger" role="alert">
                          {this.state.singup.message}
                        </div>
                      ) : ''
                    }
                    <form className="form-inside-input p-5" onSubmit={this.handleSubmit} noValidate>
                      <input type="text" ref="username" className="form-control mb-3" id="exampleInputName" aria-describedby="emailHelp" placeholder="Name" required />
                      <input type="email" ref="email" className="form-control  mb-3" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" required />
                      <input type="password" ref="password" className="form-control  mb-3" id="exampleInputPassword1" placeholder="Password" required />
                      <div className="d-flex mb-3">
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label" htmlFor="exampleCheck1">I agree to  Terms of Service and Privacy Policy.</label>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-project-color-6  btn-lg btn-block btn-rounded" data-dismiss="modal">SING UP</button>
                    </form>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Register;



// <FacebookLogin
// appId="864016290721530" //APP ID NOT CREATED YET
// fields="name,email,picture"
// callback={responseFacebook}
// />

// <GoogleLogin
// clientId="" //CLIENTID NOT CREATED YET
// buttonText="LOGIN WITH GOOGLE"
// onSuccess={responseGoogle}
// onFailure={responseGoogle}
// />