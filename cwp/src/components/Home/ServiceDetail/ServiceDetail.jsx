import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className='col-md-4 text-center'>
            <div className='mx-3 shadow-sm p-3 mb-5 rounded'>
                <img className=' m-1' style={{height:"75px"}} src={service.img} alt="" />
                <p>{service.name}</p>
                <small className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, neque animi cum molestiae accusantium ducimus.</small>
            </div>
            
        </div>
    );
};

export default ServiceDetail;