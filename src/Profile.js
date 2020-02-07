import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import CountrySelector from './components/country-selector';
import './css/about.css';

class Profile extends Component {
  render() {
    return (
        <div >
            <Header />
        <div class="card">
            <img class="rounded-circle" src="..." alt="" />
            <div class="card-body">
                Edit Profile Photo<p class="card-text">Your profile photo must be less than 2MB.</p>
            </div>
        </div>
        
        
        <div id="countrySelector"/>
            From: <CountrySelector />
            Living In: <CountrySelector />      
            <Footer /> 
        </div>
    )
  }
}

export default Profile;