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


class Register extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hadleEmailChange = this.hadleEmailChange.bind(this);
    this.hadlePasswordChange = this.hadlePasswordChange.bind(this);
    this.hadleUsernameChange = this.hadleUsernameChange.bind(this);
    this.hadlePasswordChangeConfirm = this.hadlePasswordChangeConfirm.bind(this);

    this.state = {
      username: undefined,
      email: undefined,
      password: undefined,
      passwordC: undefined,
      submit: false,
      nameVisible: 'invisible',
      mailVisible: 'invisible',
      passVisible: 'invisible',
      passVisibleC: 'invisible',
      alertVisible: 'invisible',
      message: undefined,
      messagep: undefined,
      success: undefined,
      code: undefined
    }
  }

  static displayname = "Register";



  handleSubmit(e) {
    e.preventDefault();
   

    var aux = (this.state.username === undefined || this.state.email === undefined || this.state.password === undefined);
    if (!aux){
      this.setState({
        mailVisible: 'invisible',
        passVisible: 'invisible',
        nameVisible: 'invisible'
      });
      
      if (this.state.passwordC === undefined){
        this.setState({
          passVisibleC: 'visible',
          messagep:     'messagep'
        });
      } else if (this.state.submit){
        aux = true;
      }
    }

    if (aux) {
      let dataToSend = {
        userData: {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
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
              success: true,
              message: 'err_04',
              alertVisible: 'alert-success visible',
              mailVisible: 'invisible',
              passVisible: 'invisible',
              nameVisible: 'invisible',
            });
          } else {
            this.setState({
              ...this.state,
              success: false,
              code: responseJson.code
            });
            switch (this.state.code) {
              case 'DD102_API_ERROR_01':
                this.setState({
                  mailVisible: 'visible',
                  passVisible: 'visible',
                  nameVisible: 'visible',
                  alertVisible: 'invisible',
                  message: 'err_01'
                })
                break;
              case 'DD102_API_ERROR_02':
                this.setState({
                  mailVisible: 'visible',
                  passVisible: 'invisible',
                  nameVisible: 'visible',
                  alertVisible: 'invisible',
                  message: 'err_01'
                })
                break;
              case 'DD102_API_ERROR_03':
                this.setState({
                  mailVisible: 'invisible',
                  passVisible: 'visible',
                  nameVisible: 'visible',
                  alertVisible: 'invisible',
                  message: 'err_01'
                })
                break;
              case 'DD102_API_ERROR_04':
                this.setState({
                  mailVisible: 'visible',
                  passVisible: 'visible',
                  nameVisible: 'invisible',
                  alertVisible: 'invisible',
                  message: 'err_01'
                })
                break;
              case 'DD102_API_ERROR_05':
                this.setState({
                  mailVisible: 'invisible',
                  passVisible: 'invisible',
                  nameVisible: 'visible',
                  alertVisible: 'invisible',
                  message: 'err_01'
                })
                break;
              case 'DD102_API_ERROR_06':
                this.setState({
                  mailVisible: 'visible',
                  passVisible: 'invisible',
                  nameVisible: 'invisible',
                  alertVisible: 'invisible',
                  message: 'err_01'
                })
                break;
              case 'DD102_API_ERROR_07':
                this.setState({
                  mailVisible: 'invisible',
                  passVisible: 'visible',
                  nameVisible: 'invisible',
                  alertVisible: 'invisible',
                  message: 'err_01'
                })
                break;
              case 'DD102_API_ERROR_08':
                this.setState({
                  mailVisible: 'invisible',
                  passVisible: 'invisible',
                  nameVisible: 'invisible',
                  alertVisible: 'alert-danger visible',
                  message: 'err_05'
                })
                break;
              case 'DD102_API_ERROR_09':
                this.setState({
                  mailVisible: 'invisible',
                  passVisible: 'invisible',
                  nameVisible: 'invisible',
                  alertVisible: 'alert-danger visible',
                  message: 'err_06'
                })
                break;
              default:
              // code block
            }
          }
        })

    }

  }


  hadleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
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

  hadlePasswordChangeConfirm(e) {
    if (this.state.password !== e.target.value) {
      this.setState({
        passwordC:  e.target.value,
        passVisibleC: 'visible',
        messagep: 'messagep',
        submit: false
      });
    } else {
      this.setState({
        passwordC:  e.target.value,
        passVisibleC: 'invisible',
        messagep: '',
        submit: true
      });
    }
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
        <Header displaySING={"d-none"} />
        <div className="container">
          <div className="row">
            <div className="col col-lg-12 mt-5">
              <div className="jumbotron jumbotron-fluid bg-white" style={{ background: "transparent !important" }}>
                <div className="container">
                  <div className="row">
                    <div className="col-6 m-auto">  <img src="./images/coverC.jpg" className="img-fluid" alt="kids" /></div>
                    <div className="col-6 m-auto">
                      <form className="form-inside-input" onSubmit={this.handleSubmit} noValidate>
                        <div className={`alert  ${this.state.alertVisible}`} role="alert">
                          <Translate content={`${this.state.message}`} />
                        </div>
                        <Translate component="input" onChange={this.hadleUsernameChange} type="text" id="exampleInputName" className="form-control" attributes={{ placeholder: "textName" }} aria-describedby="emailHelp" required />
                        <div className={`text-danger ${this.state.nameVisible}  mb-2`}><Translate content={`${this.state.message}`} /></div>
                        <Translate component="input" onChange={this.hadleEmailChange} type="email" id="exampleInputEmail" className="form-control" attributes={{ placeholder: "email_address" }} aria-describedby="emailHelp" required />
                        <div className={`text-danger ${this.state.mailVisible}  mb-2`}><Translate content={`${this.state.message}`} /></div>
                        <Translate component="input" onChange={this.hadlePasswordChange} type="password" id="exampleInputPassword1" className="form-control " attributes={{ placeholder: "password" }} aria-describedby="emailHelp" required />
                        <div className={`text-danger ${this.state.passVisible}  mb-2`}><Translate content={`${this.state.message}`} /></div>
                        <Translate component="input" onChange={this.hadlePasswordChangeConfirm} type="password" id="exampleInputPassword2" className="form-control " attributes={{ placeholder: "passwordC" }} aria-describedby="emailHelp" required />
                        <div className={`text-danger ${this.state.passVisibleC}  mb-2`}><Translate content={`${this.state.messagep}`} /></div>

                        {/* <div className="d-flex mb-3">
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1"><Translate content="textAgree"/></label>
                          </div>
                        </div>
                    */}
                        <button type="submit" className="btn btn-project-color-6  btn-lg btn-block btn-rounded" data-dismiss="modal"><Translate content="btnSingUp" /></button>
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