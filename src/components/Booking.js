import React from "react";
import BookingForm from "../components/BookingForm"
import tables from "../images/mediterraneanTables.jpeg"

const Booking = () =>{
    return (
        <div className="mainpage">
            <div className="reservationBanner">
                <img className="bannerImage" src={tables} alt="Mediterranean tables" width="100%"/>
            </div>
            <BookingForm />
        </div>
    );
}

export default Booking;