import React from 'react';

const AppointmentByDate = ({appointments, selectedDate}) => {
    console.log(appointments);
    return (
        <div>
            <h1>Appointment on</h1>
            <p className='text-secondary'>{selectedDate}</p>
            <div>
            {
                appointments.map(appointment =>
                    <li key={appointment._id}>{appointment.fullName}</li>
                )
            }
            </div>
        </div>
    );
};

export default AppointmentByDate;