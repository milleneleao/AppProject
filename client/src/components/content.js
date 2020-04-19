import React, { Component } from 'react';
import AboutData from '../data/content.json';


class Content extends Component {
    render() {
        
        return (
            <div>
            <div className="card-group ">
            {AboutData.map((item, index) => {
            return (
            <div className="card pt-1 border-0 bg-transparent" key={item.id}>
                <img className="mx-auto card-img-top img-fluid" src={item.photo} alt="contentphoto" />
                <div className="card-body">
                  <h2 className="card-title text-center h6">{item.name}</h2>
                </div>
              </div>
               )
            })}
            </div> 
        </div>  
        )
    }
      

}
export default Content;