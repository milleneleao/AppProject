import React from 'react';
import Header from './components/header';
import TimezonePicker from 'react-timezone';
import CountrySelector from './components/country-selector';
import LanguageSelector from './components/language-selector';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './components/languages/en';
import uk from './components/languages/uk';
import br from './components/languages/br';


counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.registerTranslations('br', br);


class Profile extends React.Component {
  render() {
    return (
      <div className="container-fluid" >
        <Header displaySING={"d-none"} displayLogin={"d-none"} />
        <div className="container">

          <div className="row">
            <div className="col-12 my-3 text-center h1"><Translate content="textTitleEdit"/></div>
          </div>

          <div className="border-top my-3"></div>


          <div className="row pt-3">
            <div className="col-2 text-center" >
              <img className="rounded-circle mw-100 p-3 border" src="./images/mom-icon.png" alt="" style={{ width: "100px", height: "100px" }} />
            </div>
            <div className="col-10" >
              <h4><Translate content="textEditProfilePhot"/></h4>
              <p className="font-weight-light"><Translate content="textLenghtPhoto"/></p>
              <button type="button" className="btn btn-outline-project-color-6"><Translate content="btnUpload"/></button>
            </div>
          </div>

          <form>
            <div className="row pt-3">
              <div className="col-2 text-center" >
              </div>

              <div className="col-10" >

                <div className="py-3"><h5><Translate content="textTitleBasic"/></h5>
                </div>


                <div className="form-group row">
                  <label htmlFor="kidsName" className="col-sm-2 col-form-label"><Translate content="textKidsName"/></label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="kidsName" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="parentName" className="col-sm-2 col-form-label"><Translate content="textParent"/></label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="parentName" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="Frominput" className="col-sm-2 col-form-label"><Translate content="textFrom"/></label>
                  <div className="col-sm-10">
                    <CountrySelector />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="Livinginput" className="col-sm-2 col-form-label"><Translate content="textLiving"/></label>
                  <div className="col-sm-10">
                    <CountrySelector />
                  </div>
                </div>


                <div className="form-group row">
                  <label htmlFor="Livinginput" className="col-sm-2 col-form-label"><Translate content="textTimezone"/></label>
                  <div className="col-sm-10">
                    <TimezonePicker />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-top my-3"></div>
            <div className="row pt-3">
              <div className="col-2 text-center" >
              </div>
              <div className="col-10" >
                <div><h5><Translate content="textTitleLanguages"/></h5></div>

                <div className="form-group row">
                  <label htmlFor="Nativeinput" className="col-sm-2 col-form-label"><Translate content="textNativeLanguages"/></label>
                  <div className="col-sm-10">
                    <LanguageSelector />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="Nativeinput" className="col-sm-2 col-form-label"><Translate content="textLanguageLearn"/></label>
                  <div className="col-sm-10">
                    <LanguageSelector />
                  </div>
                </div>

              </div>
            </div>
            <div className="border-top my-3"></div>
            <div className="pb-3 text-right">
              <button type="submit" className="btn btn-project-color-6  btn-lg " data-dismiss="modal"><Translate content="btnSave"/></button>
            </div>
          </form>
        </div>

      </div>


    )
  }
}

export default Profile;