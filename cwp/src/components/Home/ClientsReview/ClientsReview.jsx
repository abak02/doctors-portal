import React from 'react';

const ClientsReview = ({review}) => {
    return (
              <div className='col-md-4'>
                <div className="shadow-sm rounded pe-4 ps-3 pt-3 pb-3 mt-3 mb-5">
                <small>{review.review}</small>
                <div className="d-flex  justify-content-start">
                <div className="row align-items-center mt-2">
                    <div className="col-md-4">
                        <img className='' style={{height:'50px'}} src={review.img} alt="" />
                    </div>
                    <div className="col-md-8">
                        <small className='fw-bold' style={{}}>{review.name}</small><br/>
                        <small>{review.place}</small>
                    </div>
                </div>
                </div>
                </div>
            </div>
        
    );
};

export default ClientsReview;