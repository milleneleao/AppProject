import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import TimezonePicker from 'react-timezone';
import CountrySelector from './components/country-selector';

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
            From:<CountrySelector /><br></br>
            Living In:<CountrySelector /><br></br> 
            Timezone: <TimezonePicker />
        </form>  
        <Footer /> 
        </div>
    )
  }
}

export default Profile;