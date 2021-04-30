import React from "react";
import "./Business.css";

//This is responsinble for the appearance & design for each returned Business tab in the array
function Business (props){
      return (
      <div className ="Business">
      <div className="image-container">
        <img src={props.business.imageSrc} alt=''/>
      </div>
      <h2>{props.business.name}</h2>
      <div className="Business-information">
        <div className="Business-address">
          <a href={`http://maps.google.com/?q=${props.business.address},${props.business.city},${props.business.state},${props.business.zipCode}`}><p>{props.business.address}</p></a>
          <p>{props.business.city}</p>
          <p>{props.business.state} {props.business.zipCode}</p>
        </div>
        <div className="Business-reviews">
          <h3>{props.business.category}</h3>
          <h3 className="rating">{props.business.rating}</h3>
          <p>{props.business.reviewCount}</p>
        </div>
      </div>
    </div>
       ) 
};

export default Business;