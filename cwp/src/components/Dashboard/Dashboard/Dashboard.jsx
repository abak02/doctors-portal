import { useEffect, useState } from "react";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const containerStyle = {
    backgroundColor : "#F4FDFB",
    height: "100%"
}

const Dashboard = () => {
    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
      ];
    const month = monthNames[new Date().getMonth()];
    const day = new Date().getDate();
    const year = new Date().getFullYear();
    const dateF = `${month} ${day}, ${year}`;
    console.log(dateF);
  const [selectedDate, setSelectedDate] = useState(dateF);
  const [appointments, setAppointments] = useState([]);

  const handleDateChange = (date) => {
    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
      ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;
    setSelectedDate(formattedDate);
  };

  useEffect(()=> {
    fetch('http://localhost:5000/appointmentsByDate',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({selectedDate})
    })
    .then(res=>res.json())
    .then(data=>
        setAppointments(data))
  },[selectedDate])

  return (
    <div>
      <div style={containerStyle} className="row container-fluid">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5">
          <AppointmentByDate appointments={appointments} selectedDate={selectedDate}></AppointmentByDate>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
