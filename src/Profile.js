import React from 'react';
import Header from './components/header';
//import Footer from './components/footer';
import { CountryDropdown } from 'react-country-region-selector';
import TimezonePicker from 'react-timezone';

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
        
        <div id="basicInformation"/>
        <form>
            Kids Name: <input type="text"></input><br></br>
            Parent/Guardian Name:<input type="text"></input><br></br>
            From:<CountryDropdown /><br></br>
            Living In:<CountryDropdown /><br></br> 
            Timezone: <TimezonePicker />
        <div id="languages">
            Native Language:<br></br>
            Languages you want to learn:<br></br>
        </div>
        </form>   
        </div>
    )
  }
}

export default Profile;