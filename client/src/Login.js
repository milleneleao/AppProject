import React, { Component } from 'react';
import Header from './components/header';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './components/languages/en';
import uk from './components/languages/uk';
import br from './components/languages/br';
// import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.registerTranslations('br', br);


class Login extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hadleEmailChange = this.hadleEmailChange.bind(this);
    this.hadlePasswordChange = this.hadlePasswordChange.bind(this);

    this.state = {
      email: undefined,
      password: undefined,
      success: undefined,
      message: undefined,
      code: undefined,
      userName: undefined,
      mailVisible: 'invisible',
      passvisible: 'invisible',
      alertVisible: 'invisible'

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
            ...this.state,
            success: responseJson.success,
            message: undefined
          })
        } else {
          this.setState({
            message: responseJson.error.message
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
            success: true,
            userName: responseJson.name,
            mailVisible: 'invisible',
            passvisible: 'invisible',
            alertVisible: 'invisible'
          })
          if (responseJson.showProfile) {
            //If there is Client Regiter call Dashboard Page
            if (responseJson.client){
              this.props.history.push({
                pathname: '/Dashboard',
                state: {
                  uid: responseJson.uid 
                }
              });
            } else {
              this.props.history.push({
                pathname: '/DashboardTeacher',
                state: {
                  uid: responseJson.uid 
                }
              });
            }

          } else {
            //else call Profile page
            var firstName = this.state.userName.replace(/ .*/, '');
            this.props.history.push({
              pathname: '/Profile',
              state: {
                name: firstName,
                uid: responseJson.uid 
              }
            });
          }
        } else {
          this.setState({
            success: false,
            code: responseJson.code
          })
          console.log(responseJson);
          switch (this.state.code) {
            case 'DD101_API_ERROR_01':
              this.setState({
                mailVisible: 'visible',
                passvisible: 'visible',
                alertVisible: 'invisible',
                message: 'err_01'
              })
              break;
            case 'DD101_API_ERROR_02':
              this.setState({
                mailVisible: 'visible',
                passvisible: 'invisible',
                alertVisible: 'invisible',
                message: 'err_01'
              })
              break;
            case 'DD101_API_ERROR_03':
              this.setState({
                mailVisible: 'invisible',
                passvisible: 'visible',
                alertVisible: 'invisible',
                message: 'err_01'
              })
              break;
            case 'DD101_API_ERROR_04':
              this.setState({
                mailVisible: 'invisible',
                passvisible: 'invisible',
                alertVisible: 'visible',
                message: responseJson.message.code
              })
              break;
            case 'DD101_API_ERROR_05':
              this.setState({
                mailVisible: 'invisible',
                passvisible: 'invisible',
                alertVisible: 'visible',
                message: 'err_02'
              })

              break;
            case 'DD101_API_ERROR_06':
              this.setState({
                mailVisible: 'invisible',
                passvisible: 'invisible',
                alertVisible: 'visible',
                message: 'err_03'
              })
              break;
            default:
            // code block
          }
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
    // const responseFacebook = (response) => {
    //   console.log(response);
    // }

    // const responseGoogle = (response) => {
    //   console.log(response);
    // }
    return (
      <div className="container-fluid" >
        <Header displayLogin={"d-none"} />
        <div className="container">
          <div className="row">
            <div className="col col-lg-12 mt-5">
              <div className="jumbotron jumbotron-fluid bg-white" style={{ background: "transparent !important" }}>
                <div className="container">
                  <div className="row">
                    <div className="col-6  m-auto ">  <img src="./images/coverC.jpg" className="img-fluid" alt="children read" /></div>
                    <div className="col-6 m-auto">
                      <form className="form-inside-input" onSubmit={this.handleSubmit} noValidate>
                        <div className={`alert alert-danger ${this.state.alertVisible}`} role="alert">
                          <Translate content={`${this.state.message}`} />
                        </div>
                        <Translate component="input" type="email" onChange={this.hadleEmailChange} id="exampleInputEmail" className="form-control" attributes={{ placeholder: "email_address" }} aria-describedby="emailHelp" required />
                        <div className={`text-danger ${this.state.mailVisible}  mb-2`}><Translate content={`${this.state.message}`} /></div>
                        <Translate component="input" type="password" onChange={this.hadlePasswordChange} id="exampleInputPassword1" className="form-control" attributes={{ placeholder: "password" }} aria-describedby="emailHelp" required />
                        <div className={`text-danger ${this.state.passvisible} mb-2`}> <Translate content={`${this.state.message}`} /></div>
                        {/* <div className="d-flex mb-3">
                         <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1"><Translate content="textName"/></label>
                          </div>
                          <div className="ml-auto"><a href="#" className="pl-5"><Translate content="textpass"/></a></div>
                        </div>*/}
                        <button type="submit" className="btn btn-project-color-6  btn-lg btn-block btn-rounded" data-dismiss="modal"><Translate content="btnLogin" /></button>
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