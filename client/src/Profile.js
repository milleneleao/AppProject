import React from 'react';
// import Header from './components/header';
// import TimezonePicker from 'react-timezone';
// import CountrySelector from './components/country-selector';
// import LanguageSelector from './components/language-selector';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './components/languages/en';
import uk from './components/languages/uk';
import br from './components/languages/br';
import './css/profile.css';
import Select from 'react-select'
import countryList from 'react-select-country-list'


counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.registerTranslations('br', br);
const ct = require('countries-and-timezones');

class Profile extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getTimezones = this.getTimezones.bind(this);
    this.changeHandlerKidsName = this.changeHandlerKidsName.bind(this);
    this.changeHandlerParentName = this.changeHandlerParentName.bind(this);
    this.changeHandlerParentName = this.changeHandlerParentName.bind(this);
    this.changeHandlerFromCountry = this.changeHandlerFromCountry.bind(this);
    this.changeHandlerLivingCountry = this.changeHandlerLivingCountry.bind(this);
    this.changeHandlerTimezone = this.changeHandlerTimezone.bind(this);
    this.fileSelectHander = this.fileSelectHander.bind(this);

    this.state = {
      kidsName: null,
      parentName: null,
      fromCountry: null,
      livingCountry: null,
      selectedFile: null,
      timezone: null,//Intl.DateTimeFormat().resolvedOptions().timeZone,
      listTimeZoneItems: [],
      file: "./images/mom-icon.png",
      visibleKidsAlert: "d-none",
      visibleParentAlert: "d-none",
      visibleFromCountryAlert: "d-none",
      visibleLivingCountryAlert: "d-none",
      visibleTimezoneAlert: "d-none"
    }

  }


  handleSubmit(e) {
    e.preventDefault();
    let fd = new FormData();
    let result = true;
    if (!this.state.kidsName) {
      result = false;
      this.setState({ visibleKidsAlert: "" });
    } else {
      this.setState({ visibleKidsAlert: "d-none" });
    }
    if (!this.state.parentName) {
      result = false;
      this.setState({ visibleParentAlert: "" });
    } else {
      this.setState({ visibleParentAlert: "d-none" });
    }
    if (!this.state.fromCountry) {
      result = false;
      this.setState({ visibleFromCountryAlert: "" });
    } else {
      this.setState({ visibleFromCountryAlert: "d-none" });
    }
    if (!this.state.livingCountry) {
      result = false;
      this.setState({ visibleLivingCountryAlert: "" });
    } else {
      this.setState({ visibleLivingCountryAlert: "d-none" });
    }
    if (!this.state.timezone) {
      result = false;
      this.setState({ visibleTimezoneAlert: "" });
    } else {
      this.setState({ visibleTimezoneAlert: "d-none" });
    }

    console.log(this.state.selectedFile);

    console.log(fd);
    if (result) {
     
      fd.append( 'uid', this.props.location.state.uid);
      fd.append('kidsName',      this.state.kidsName);
      fd.append('parentName',    this.state.parentName);
      fd.append('fromCountry',  `${JSON.stringify(this.state.fromCountry)}`);
      fd.append('livingCountry',`${JSON.stringify(this.state.livingCountry)}`);
      fd.append('timezone',     `${JSON.stringify(this.state.timezone)}`);
      fd.append('image', this.state.selectedFile);
      
      
      let url = 'http://localhost:3001/clients/register';
      fetch(url, {
        method: "POST",
        body: fd
      }).then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson.success) {
          this.props.history.push({
            pathname: '/dashboard',
            state: {
              course: this.state.course,
              uid: this.props.location.state.uid
            }
          });
        } else {

        }
      }).catch(err => console.log('Error ', err));

    };
  }

  getTimezones = (value) => {
    let timezones = ct.getTimezonesForCountry(value);
    let arryTimezones = [];
    timezones.forEach(timezone => {
      let value = timezone.name;
      let tItems = { value: "", label: "" };
      tItems.value = value;
      tItems.label = value;
      arryTimezones.push(tItems);
    });
    return arryTimezones;
  }

  changeHandlerKidsName(e) {
    this.setState({
      kidsName: e.target.value
    });
  }

  changeHandlerParentName(e) {
    this.setState({
      parentName: e.target.value
    });
  
  }

  changeHandlerFromCountry = value => {
    this.setState({ fromCountry: value });
    console.log(value.value);
  }

  changeHandlerLivingCountry = value => {
    this.setState({ livingCountry: value, timezone: null });
    let country = ct.getCountry(value.value).id;
    let arryTimezones = this.getTimezones(country);
    this.setState({ listTimeZoneItems: arryTimezones });
  }

  changeHandlerTimezone = value => {
    this.setState({ timezone: value });
  }


 
  fileSelectHander = event => {
    // event.preventDefault();
    let file = event.target.files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      console.log(reader.result);
      this.setState({
        file: URL.createObjectURL(file),
        selectedFile: reader.result
      });
    }; 
    // this.setState({
    //   file: URL.createObjectURL(event.target.files[0]),
    //   selectedFile: event.target.files[0]
    // });

  }

  render() {
    return (
      <div className="container-fluid" >
        {// <Header displaySING={"d-none"} displayLogin={"d-none"} />
        }
        <div className="container">
          <div className="row">
            <div className="col-12 my-3 text-center h1"> <Translate content="textTitleProfile" /> {`${this.props.location.state.name}`} </div>
          </div>
          <div className="border-top my-3"></div>
          <form className="form-inside-input" onSubmit={this.handleSubmit} noValidate>
            <div className="row pt-3">
              <div className="col-2 text-center" >
                <img className="rounded-circle mw-100 p-3 border" src={this.state.file} alt="" style={{ width: "100px", height: "100px" }} />
              </div>
              <div className="col-10" >
                <h4><Translate content="textEditProfilePhot" /></h4>
                <p className="font-weight-light"><Translate content="textLenghtPhoto" /></p>
                <span className="btn btn-project-color-6 btn-file">
                  Upload <input type="file" onChange={this.fileSelectHander} accept="image/x-png,image/gif,image/jpeg" />
                </span>
              </div>
            </div>

            <div className="row pt-3">
              <div className="col-2 text-center" ></div>

              <div className="col-10" >
                <div className="py-3"><h5><Translate content="textTitleBasic" /></h5></div>

                <div className="form-group row">
                  <label htmlFor="kidsName"  className="col-sm-2 col-form-label"><Translate content="textKidsName" /></label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="kidsName" onChange={this.changeHandlerKidsName} />
                    <div className={`pt-1 text-danger ${this.state.visibleKidsAlert}`} ><Translate content="err_01" /></div>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="parentName" className="col-sm-2 col-form-label"><Translate content="textParent" /></label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="parentName" onChange={this.changeHandlerParentName} />
                    <div className={`pt-1 text-danger ${this.state.visibleParentAlert}`} ><Translate content="err_01" /></div>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="Frominput" className="col-sm-2 col-form-label"><Translate content="textFrom" /></label>
                  <div className="col-sm-10">
                    <Select
                      options={countryList().getData()}
                      value={this.state.FromCountry}
                      onChange={this.changeHandlerFromCountry}
                    />
                    <div className={`pt-1 text-danger ${this.state.visibleFromCountryAlert}`} ><Translate content="err_01" /></div>
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="Livinginput" className="col-sm-2 col-form-label"><Translate content="textLiving" /></label>
                  <div className="col-sm-10">
                    <Select
                      options={countryList().getData()}
                      value={this.state.livingCountry}
                      onChange={this.changeHandlerLivingCountry}
                    />
                    <div className={`pt-1 text-danger ${this.state.visibleLivingCountryAlert}`} ><Translate content="err_01" /></div>
                  </div>
                </div>


                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"><Translate content="textTimezone" /></label>
                  <div className="col-sm-10">
                    <Select
                      options={this.state.listTimeZoneItems}
                      value={this.state.timezone}
                      onChange={this.changeHandlerTimezone}
                    />
                    <div className={`pt-1 text-danger ${this.state.visibleTimezoneAlert}`} ><Translate content="err_01" /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top my-3"></div>
            {
              // <div className="row pt-3">
              //   <div className="col-2 text-center" >
              //   </div>
              //   <div className="col-10" >
              //     <div><h5><Translate content="textTitleLanguages"/></h5></div>

              //     <div className="form-group row">
              //       <label htmlFor="Nativeinput" className="col-sm-2 col-form-label"><Translate content="textNativeLanguages"/></label>
              //       <div className="col-sm-10">
              //         <LanguageSelector />
              //       </div>
              //     </div>

              //     <div className="form-group row">
              //       <label htmlFor="Nativeinput" className="col-sm-2 col-form-label"><Translate content="textLanguageLearn"/></label>
              //       <div className="col-sm-10">
              //         <LanguageSelector />
              //       </div>
              //     </div>

              //   </div>
              // </div>
              //<div className="border-top my-3"></div>
            }

            <div className="pb-3 text-right">
              <button type="submit" className="btn btn-project-color-6  btn-lg " data-dismiss="modal"><Translate content="btnSave" /></button>
            </div>
          </form>
        </div>

      </div>



    )
  }

}


export default Profile;