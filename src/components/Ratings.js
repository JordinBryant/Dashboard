import React from "react";

function Ratings(props) {
    return (
        <div className='Ratings'>
           <h2>Reviews</h2>
           <h5>1,281</h5>
           
           <h3>{props.Ratings}</h3>
        </div> 
    );
}

export default Ratings;