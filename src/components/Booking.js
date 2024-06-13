import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm"
import tables from "../images/mediterraneanTables.jpeg"

const Booking = (props) =>{

    // Function to get available times
    const fetchAPI = function(){
        let list = [];
        for (let i=13; i<50; i++){
            list.push(i+":00");
            list.push(i+":30");
        }
        list.push("20:00");
        return list;
    }

    const initialState = {availableTimes : fetchAPI()};
    const [timeslist, setTimeslist] = useReducer(updateTimes, initialState);

    function updateTimes(state){
        return {availableTimes:fetchAPI()};
    }

    return (
        <div className="bookingpage">
            <div className="reservationBanner">
                <img className="bannerImage" src={tables} alt="Mediterranean tables" width="100%"/>
            </div>
            <BookingForm availableTimes={timeslist} dispatch={setTimeslist} SubmitForm={props.SubmitForm}/>
        </div>
    );
}

export default Booking;