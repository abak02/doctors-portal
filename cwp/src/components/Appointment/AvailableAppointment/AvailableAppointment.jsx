import React, { useContext, useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";

const AvailableAppointment = ({ book, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 mb-5 ">
      <div className="card p-3 border-light shadow">
        <div className="card-body text-center">
          <h5 className="card-title text-brand">{book.subject}</h5>
          <p>{book.visitingHour}</p>
          <p className="text-secondary">Available seat : {book.totalSpace}</p>

          <button onClick={openModal} className="btn-brand">
            Get Appointment
          </button>

          <AppointmentForm
            modalIsOpen={modalIsOpen}
            date={date}
            appointmentOn={book.subject}
            closeModal={closeModal}
          ></AppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointment;
