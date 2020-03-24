import React from 'react';
import Header from './components/header';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import './css/dashboard.css';
import en from './components/languages/en';
import uk from './components/languages/uk';
import br from './components/languages/br';


counterpart.registerTranslations('en', en);
counterpart.registerTranslations('uk', uk);
counterpart.registerTranslations('br', br);

class Dashboard extends React.Component{
  render() {

    const courses = {
        width: "15rem",
        textAlign: "center",
        
      };

      const profile = {
        width: "25rem",
        textAlign: "right"
      };

      const picture = {
        width: "100px",
        height: "100px",
        float: "left",
        marginTop: "20px",
        marginLeft: "30px"
      };

      const notifocations = {
        width: "20rem",
        textAlign: "center"
      };

      const balance = {
        width: "20rem",
        textAlign: "center"
      };

    return (
        <div className="container-fluid" >

        <Header displaySING={"d-none"} displayLogin={"d-none"} />
        <div className="container">


        <br></br>
        <div className="row">
        <div className="course" className="card" style={profile}>
        <img className="rounded-circle mw-100 p-3 border" src="./images/mom-icon.png" alt="" style={picture} />
            <div className="card-body">
            <h4><Translate content="textKidName"/></h4>
            <p className="font-weight-bold"><Translate content="textUserID"/> 0987654321</p>
            </div>
            </div>
            <div className="course" className="card" style={notifocations}>
            <div className="card-body">
            <h1>0</h1>
            <p className="font-weight-bold"><Translate content="textNotifications"/></p>
            </div>
            </div>

            <div className="course" className="card" style={balance}>
            <div className="card-body">
            <h4><Translate content="textBalance"/></h4>
            <h2>$0.00 USD</h2>
            <button type="button" className="btn btn-outline-project-color-6"><Translate content="btnCredits"/></button>
            </div>
            </div>
        </div>
        

        <div className="col-12 my-3 text-center h2"><Translate content="textMyCourses"/></div>
        <div className="row">
        <div className="course" className="card" style={courses}>
            <img className="card-img-top" src="./images/dis_1.jpg" alt="Card image cap" style={{paddingLeft: "40px"}} />
            <div className="card-body">
            <h5 className="card-title">English</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" className="btn btn-outline-project-color-6"><Translate content="btnMoreInfo"/></button>
            </div>
            </div>

            <div className="course" className="card" style={courses}>
            <img className="card-img-top" src="./images/dis_1.jpg" alt="Card image cap" style={{paddingLeft: "40px"}} />
            <div className="card-body">
            <h5 className="card-title">Ukrainian</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" className="btn btn-outline-project-color-6"><Translate content="btnMoreInfo"/></button>
            </div>
            </div>

            <div className="course" className="card" style={courses}>
            <img className="card-img-top" src="./images/dis_1.jpg" alt="Card image cap" style={{paddingLeft: "40px"}} />
            <div className="card-body">
            <h5 className="card-title">Portuguese</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" className="btn btn-outline-project-color-6"><Translate content="btnMoreInfo"/></button>
            </div>
            </div>
        
        <div className="col-12 my-3 text-center h2"><Translate content="textRecCourses"/></div>

            <div className="row">
            <div className="course" className="card" style={courses}>
            <img className="card-img-top" src="./images/dis_1.jpg" alt="Card image cap" style={{paddingLeft: "40px"}} />
            <div className="card-body">
            <h5 className="card-title">French</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" className="btn btn-outline-project-color-6"><Translate content="btnMoreInfo"/></button>
            </div>
            </div>

            <div className="course" className="card" style={courses}>
            <img className="card-img-top" src="./images/dis_1.jpg" alt="Card image cap" style={{paddingLeft: "40px"}} />
            <div className="card-body">
            <h5 className="card-title">Italian</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" className="btn btn-outline-project-color-6"><Translate content="btnMoreInfo"/></button>
            </div>
            </div>

            <div className="course" className="card" style={courses}>
            <img className="card-img-top" src="./images/dis_1.jpg" alt="Card image cap" style={{paddingLeft: "40px"}} />
            <div className="card-body">
            <h5 className="card-title">Mandarin</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" className="btn btn-outline-project-color-6"><Translate content="btnMoreInfo"/></button>
            </div>
            </div>
            </div>
        
        </div>
        <button type="button" className="btn btn-outline-project-color-6"><Translate content="btnShowAll"/></button>
        </div>
            
        </div>
    )
  }
}

export default Dashboard;