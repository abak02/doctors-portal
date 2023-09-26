import './ContactUs.css'
const ContactUs = () => {
    return (
        <section className='contact-section text-center p-5'>
            <p style={{color:'#1cc7c1'}}>Contact Us</p>
            <h2  className='text-white'>Stay Connected With Us</h2>
            <input className='form-control w-25 mx-auto mt-3 mb-3' type="text" name="" id="" placeholder='Enter Your Name'/>
            <input className='form-control w-25 mx-auto mt-3 mb-3' type="text" name="" id="" placeholder='Enter Your Email'/>
            <textarea className='form-control w-25 mx-auto mt-3 mb-3' type="text" name="" id="" placeholder='Enter Your Name'/>
            <button className='btn btn-primary'> Submit </button>
        </section>
    );
};

export default ContactUs;