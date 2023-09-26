import React from 'react';
import chair from '../../../images/images/chair.png'
import { Link } from "react-router-dom";
const HeaderMain = () => {
    return (
        <main className='row d-flex align-items-center' style={{height:'600px'}}>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile<br/>Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed suscipit quam laborum architecto velit error.</p>
                <Link to='/appointment'> <button className="btn-brand">Get Appointment</button></Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;