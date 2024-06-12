import React, { useState } from "react";

const BookingForm = (props) =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [adults, setAdults] = useState("");
    const [childs, setChilds] = useState("");
    const [special, setSpecial] = useState(false);
    const [request, setRequest] = useState("");

    const hours = ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"]

    const handleCheckboxChange = (event) => {
        setSpecial(event.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault ();
        props.SubmitForm(e);
    }

    const specialBox = () => {
        if (special)
            return (
            <div>
                <input className="requestbox" id="requestDescription" value={request} onChange={(e)=>setRequest(e.target.value)}/>
            </div>
            )
        return null;
    }

    return (
        <div className="reserveTable">
            <h1>Table reservation</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="inputdiv">
                        <label htmlFor="nameSelection">Name</label>
                        <input id="nameSelection" value={name} onChange={(e)=>setName(e.target.value)} required/>
                    </div>
                    <div className="inputdiv">
                        <label htmlFor="emailSelection">e-mail</label>
                        <input id="emailSelection" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required/>
                    </div>
                    <div className="inputdiv">
                        <label htmlFor="dateSelection">Date</label>
                        <input id="dateSelection" value={date} onChange={(e)=>setDate(e.target.value)}
                            type="date" required />
                    </div>
                    <div className="inputdiv">
                        <label htmlFor="hourSelection">Hour</label>
                        <select id="hourSelection" value={hour} onChange={(e)=>setHour(e.target.value)}>
                            <option value="">Select hour</option>
                            {
                                hours.map( (s) => ( <option key={s}>{s}</option> ) )
                            }
                        </select>
                    </div>
                    <div className="inputdiv">
                        <label htmlFor="adultsSelection">Adults</label>
                        <input id="adultsSelection" min="1" value={adults} onChange={(e)=>setAdults(e.target.value)}/>
                    </div>
                    <div className="inputdiv">
                        <label htmlFor="childsSelection">Childs</label>
                        <input id="childsSelection" min="0" value={childs} onChange={(e)=>setChilds(e.target.value)}/>
                    </div>
                    <div>
                        <label className="longlabel" htmlFor="requestSelection">Special request</label>
                        <input className="checkbox" id="requestSelection" type="checkbox" name="request" value={special} onChange={handleCheckboxChange}></input>
                    </div>
                    {specialBox()}
                    <div className="divSubmitButton">
                        <input className="submitButton" aria-label="On Click" type="submit" value={"Reserve"}/>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default BookingForm;