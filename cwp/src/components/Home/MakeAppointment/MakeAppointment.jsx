
import doctor from '../../../images/images/doctor.png'
import './MakeAppointment.css'
const MakeAppointment = () => {
    return (
        <section className='make-appointment mb-5'>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h6 className='text-primary text-uppercase'>Appointment</h6>
                        <h3 className='my-4 text-white'>Make An Appointment Today</h3>
                        <small className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</small><br/>
                        <button className="btn-brand mt-2">Get Started</button>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default MakeAppointment;