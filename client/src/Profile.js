import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './css/profile.css';
import TimezonePicker from 'react-timezone';
import CountrySelector from './components/country-selector';
import LanguageSelector from './components/language-selector';

class Profile extends React.Component{
  render() {
    return (
        <div >
            <Header />
            <div class="card" id="profilePhoto">
                <img class="rounded-circle" src="public/img/profilePlaceholder.png" alt="" />
                <div class="card-body">
                   <h2>Edit Profile Photo</h2><p class="card-text">Your profile photo must be less than 2MB.</p>
                </div>
            </div>
        
        <form>
            <p class="text">Kids Name: <input type="text" class="textBox1"></input></p><br></br>
            <p class="text">Parent/Guardian Name:<input type="text" class="textBox"></input></p><br></br>
            <p class="dropdown">From:<CountrySelector /></p><br></br>
            <p class="dropdown">Living In:<CountrySelector /></p><br></br> 
            <p class="dropdown">Timezone: <TimezonePicker /></p><br></br>
            <p class="dropdown">Native Language: <LanguageSelector /></p><br></br>
            <p class="dropdown">Language you want to Learn: <LanguageSelector /></p><br></br>

        </form>

        <Footer /> 
        </div>
    )
  }
}

export default Profile;