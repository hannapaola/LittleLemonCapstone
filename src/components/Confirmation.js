import React from "react";
import tables from "../images/mediterraneanTables.jpeg"

const Confirmation = () =>{
    return (
        <div className="confirmationPage">
            <div className="reservationBanner">
                <img className="bannerImage" src={tables} alt="Mediterranean tables" width="100%"/>
            </div>
            <div className="confirmation">
                <h1>Your reservation is ready!</h1>
                <p>We have send you the confirmation to the registered email.</p>
                <h2>We will see you soon</h2>
            </div>
        </div>
    );
}

export default Confirmation;