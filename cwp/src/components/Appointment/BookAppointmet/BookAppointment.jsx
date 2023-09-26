import React from 'react';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const BookAppointment = ({date}) => {

    const bookingData = [
        {
            id: '1',
            subject: 'Teeth Orthodontics',
            visitingHour : '8.00 AM - 9.00 AM',
            totalSpace: 10
        },
        {
            id: '2',
            subject: 'Teeth Orthodontics',
            visitingHour : '8.00 AM - 9.00 AM',
            totalSpace: 10
        },
        {
            id: '3',
            subject: 'Teeth Cleaning',
            visitingHour : '8.00 AM - 9.00 AM',
            totalSpace: 10
        },
        {
            id: '4',
            subject: 'Teeth Pudding',
            visitingHour : '8.00 AM - 9.00 AM',
            totalSpace: 10
        },
        {
            id: '5',
            subject: 'Teeth Orthodontics',
            visitingHour : '8.00 AM - 9.00 AM',
            totalSpace: 10
        },
        {
            id: '6',
            subject: 'Teeth Orthodontics',
            visitingHour : '8.00 AM - 9.00 AM',
            totalSpace: 10
        }
    ]


    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
      ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;
    return (
        <section>
            <h2 style={{color:"#1cc7c1"}} className='text-center'>Available Appointment {formattedDate}</h2>

            <div className="container">
                
                    <div className="row mt-5 ">
                        {
                            bookingData.map(book=><AvailableAppointment key={book.id} book={book} date={formattedDate}></AvailableAppointment>)
                        }
                    </div>
                
            </div>
            
        </section>
    );
};

export default BookAppointment;