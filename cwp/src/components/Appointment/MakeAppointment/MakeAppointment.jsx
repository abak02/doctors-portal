import { useState } from "react";
import Footer from "../../Home/Footer/Footer";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import Navbar from "../Navbar/Navbar";
import BookAppointment from "../BookAppointmet/BookAppointment";


const MakeAppointment = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date=>{
        setSelectedDate(date);
    }
    return (
        <>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
            
        </>
    );
};

export default MakeAppointment;