import React, { useContext } from 'react';
import Modal from 'react-modal';
import { useForm , Controller} from "react-hook-form";
import { userContext } from '../../../App';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen , closeModal,appointmentOn,date}) => {
    const { control, handleSubmit,  formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date()
        data.createdUserMail = loggedInUser.email;
        fetch('http://localhost:5000/addAppointment',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success=>{
          if(success) {
            closeModal();
            alert('Appointment Inserted Successfully');
          }
        })
    };
    
    return (
        <div>
            
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5 className='text-brand text-center'>{appointmentOn}</h5>
        <p className='text-secondary text-center'>{date}</p>
        <p>Logged In as : {loggedInUser.name}</p>

        <form onSubmit={handleSubmit(onSubmit)}>
            
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <Controller
            name="fullName"
            control={control}
            rules={{ required: 'Full Name is required' }}
            render={({ field }) => <input {...field} type="text" className={`form-control ${errors.fullName ? 'is-invalid' : ''}`} />}
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            rules={{ required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } }}
            render={({ field }) => <input {...field} type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} />}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="sex" className="form-label">
            Sex
          </label>
          <Controller
            name="sex"
            control={control}
            rules={{ required: 'Sex is required' }}
            render={({ field }) => (
              <select {...field} className={`form-select ${errors.sex ? 'is-invalid' : ''}`}>
                <option value="">Select Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            )}
          />
          {errors.sex && <div className="invalid-feedback">{errors.sex.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="weight" className="form-label">
            Weight (in kg)
          </label>
          <Controller
            name="weight"
            control={control}
            rules={{ required: 'Weight is required', pattern: { value: /^\d+(\.\d{1,2})?$/, message: 'Invalid weight format' } }}
            render={({ field }) => <input {...field} type="text" className={`form-control ${errors.weight ? 'is-invalid' : ''}`} />}
          />
          {errors.weight && <div className="invalid-feedback">{errors.weight.message}</div>}
        </div>
        <button type="submit" className="btn-brand">Submit</button>
      </form>
      

      </Modal>
        </div>
    );
};

export default AppointmentForm;