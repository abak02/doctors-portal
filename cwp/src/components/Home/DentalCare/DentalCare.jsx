
import baby from '../../../images/images/treatment.png';
import './DentalCare.css'
const DentalCare = () => {
    return (
        <div className='dental-care pb-0 pb-md-5 my-5'>
            <div className="container mb-5 d-flex align-items-center justify-content-center">
            <div className="row mb-5 d-flex justify-content-center align-items-center w-75">
                <div className="col-md-5 mb-4 m-md-0">
                    <img src={baby} className='img-fluid rounded ' alt="" />
                </div>
                <div className="col-md-5 align-items-center">
                    <h2 style={{color:'#3A4256'}}>Exceptional Dental Care,<br/> on Your Terms</h2>
                    <p className='text-secondary text-style'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className=" btn-brand">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DentalCare;