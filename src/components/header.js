import React, { Component } from 'react';
import { Link } from "react-router-dom";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from '../components/languages/en';
import uk from '../components/languages/uk';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);

counterpart.setLocale('en');

class Header extends Component {
  
  state = {
    lang: 'en'
  }

  onLangChange = (e) => {
    this.setState({lang: e.target.value});
    counterpart.setLocale(e.target.value);
  }
  render() {
  return (
    <nav className="navbar  bg-project-color-2">
      <Link to="/"><img src='./images/logo192.png' className="rounded float-left" alt="Logo" style={{ width: "40px" }} /></Link>
        
      <div className="float-right pr-3">
      <select className="custom-select mr-2" style={{width: "200px"}} value={this.state.lang} onChange={this.onLangChange}>
          <option value="en">English</option>
          <option value="uk">Ukrainian</option>
          <option value="1" >Portugese</option>
        </select>
      <button type="button" className="btn btn-outline-project-color-1 mr-2 btn-rounded">LOG IN</button>
      <button type="button" className="btn btn-outline-project-color-1  btn-rounded">SIGN UP</button>
     </div>
    </nav>
  );
  }
}

export default Header;
