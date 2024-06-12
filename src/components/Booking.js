import React from "react";
import BookingForm from "../components/BookingForm"
import tables from "../images/mediterraneanTables.jpeg"

const Booking = (props) =>{
    return (
        <div className="bookingpage">
            <div className="reservationBanner">
                <img className="bannerImage" src={tables} alt="Mediterranean tables" width="100%"/>
            </div>
            <BookingForm SubmitForm={props.SubmitForm}/>
        </div>
    );
}

export default Booking;