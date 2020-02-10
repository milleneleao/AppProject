import React, { Component } from 'react';
import Header from './components/header';
import { Link, withRouter } from "react-router-dom";
// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';

class Login extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hadleEmailChange = this.hadleEmailChange.bind(this);
    this.hadlePasswordChange = this.hadlePasswordChange.bind(this);

    this.state = {
      email: undefined,
      password: undefined,
      logged: false,
      error: undefined
    }

  }



  componentDidMount() {
    this.verifytoken();
  }

  verifytoken() {
    let url = 'http://localhost:3001/auth/verifytoken';
    let token = localStorage.getItem('DD101_TOKEN');
    if (!token) {
      this.setState({
        error: 'No token defined. Please Login.'
      })
      return 
    }


    fetch(url, {
      method: "GET",
      body: undefined,
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      }
    }).then(response => response.json())
      .then(responseJson => {
        if (responseJson.success) {
          this.setState({
            logged: responseJson.success,
            error: undefined
          })
        } else {
          this.setState({
            error: responseJson.error.message
          })
        }
      }).catch(err => console.log('Error ', err));
  }



  static displayname = "Login";

  handleSubmit(e) {
    e.preventDefault();
    let dataToSend = {
      userData: {
        email: this.state.email,
        password: this.state.password
      }
    };

    let url = 'http://localhost:3001/auth/login';
    fetch(url, {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(responseJson => {
        if (responseJson.success) {
          localStorage.setItem('DD101_TOKEN', responseJson.token);
          this.setState({
            logged: true
          })
          this.props.history.push("/",);
        } else {
          console.log(responseJson.message);
        }
      }).catch(err => console.log('Error ', err));
  }

  hadleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  hadlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
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
        <Header displayLogin={"d-none"} />
        <div className="row m-5">
          <div className="col col-lg-12 mt-5">
            <div className="jumbotron jumbotron-fluid bg-white" style={{ background: "transparent !important" }}>
              <div className="container">
                <div className="row">
                  <div className="col-6  m-auto">  <img src="./images/coverC.jpg" className="img-fluid" alt="Responsive image" /></div>
                  <div className="col-6 m-auto">
                    <form className="form-inside-input p-5" onSubmit={this.handleSubmit} noValidate>
                      <input type="email" onChange={this.hadleEmailChange} className="form-control  mb-3" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" required />
                      <input type="password" onChange={this.hadlePasswordChange} className="form-control  mb-3" id="exampleInputPassword1" placeholder="Password" required />
                      <div className="d-flex mb-3">
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in</label>
                        </div>
                        <div className="ml-auto"><a href="#" className="pl-5">Forgot password?</a></div>
                      </div>
                      <button type="submit" className="btn btn-project-color-6  btn-lg btn-block btn-rounded" data-dismiss="modal">LOG IN</button>
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

export default Login;



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