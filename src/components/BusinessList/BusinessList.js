import React from "react";
import "./BusinessList.css";
import Business from "../Business/Business.js";

//Loops through Array and returns a whole list of different businesses from the App Component
function BusinessList (props){
        return (
            <div className="BusinessList">
    {
    props.businesses.map((business) => {
        return <Business business ={business} key={business.id}/>
    })
    }
</div>
        )
    
};

export default BusinessList;