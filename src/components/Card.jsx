import React from "react";
import './Card.css';


function Card () {
    return (
          <div className="card bg-dark text-white">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="/assets/images/1.jpg" className="card-img" alt="TaskManagment Screenshot" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Task Managment</h5>
                <p className="card-text">React, JS, Bootstrap</p>
                <p className="card-text">A task manager for planning and make collabration easier.</p>
                <a href="#" className="btn btn-success mr-2">Live Demo</a>
                <a href="#" className="btn btn-outline-light">GitHub Code</a>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Card;