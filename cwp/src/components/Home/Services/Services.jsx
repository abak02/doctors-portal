import React from 'react';
import cavity from '../../../images/images/cavity.png'
import fluoride from '../../../images/images/fluoride.png';
import teeth from '../../../images/images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const ServicesData = [
    {
        name : 'Fluoride Treatment',
        img: fluoride
    },
    {
        name : 'Cavity Filling',
        img: cavity
    },
    {
        name : 'Teeth Whitening',
        img: teeth
    }
]

const Services = () => {
    return (
        <section className=''>
            <div className="text-center m-5">
                <h5 style={{color:'#1cc7c1'}}>Our Services</h5>
                <h2 style={{color:"#3a4256"}}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className='w-75 d-flex'>
                {
                    ServicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
                </div>
            </div>
        </section>
    );
};

export default Services;