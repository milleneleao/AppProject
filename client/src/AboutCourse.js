import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './css/aboutcourse.css';

class AboutCourse extends Component{
    render(){
        return(
            <div>
                <Header />
                <div>
                    <div className="container">
                    <div className="row">
                        <div class="col-8" style={{ backgroundColor:"#F0EFE8",  margin: "10px", marginRight: "50px"  }}>
                            <iframe width="560" height="315" style={{margin: "10px", marginLeft: "85px" }} src="https://www.youtube.com/embed/DUKN1eVUxFs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            <h5 className="text mx-auto" >Hello ABC</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                                not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div class="col-3"  style={{ backgroundColor:"#F0EFE8", margin: "10px"}}>
                            <h5 className="text-center mx-auto" style={{ marginTop: "90px" }}>Total Balance</h5>
                            <p className="text-center mx-auto"style={{ marginTop: "20px" }}>0 CAD</p>
                            <button type="button" className="btn btn-secondary" style={{ marginLeft: "80px" }}>Book</button>
                            </div>
                        </div>
                    <div className="row">
                        <div class="col"  style={{ backgroundColor:"#F0EFE8", margin: "10px"}}>
                        <h5 className="text mx-auto mt-2">Book a course</h5>
                        <div className="container-fluid" style={{ backgroundColor:"white", margin: "10px"}}>
                        <h5 className="text mx-auto">Trial Class</h5>
                        <p className="text mx-auto">1 Lesson / 30 min</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutCourse;