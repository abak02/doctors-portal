import './Footer.css'
const Footer = () => {
    return (
        <section className='container mt-5 footer-section '>
           <div className="d-flex justify-content-center">
           <div className="row w-75">
                
                <div className="col-md-4">
                    <h6 style={{color:'#1cc7c1'}}>Services</h6>
                    <p>Emergency Checkup</p>
                    <p>Monthly Checkup</p>
                    <p>Weekly Checkup</p>
                    <p>Deep Checkup</p>
                </div>
                <div className="col-md-4">
                    <h6 style={{color:'#1cc7c1'}}>Services</h6>
                    <p>Emergency Checkup</p>
                    <p>Monthly Checkup</p>
                    <p>Weekly Checkup</p>
                    <p>Deep Checkup</p>
                </div>
                <div className="col-md-4">
                    <h6 style={{color:'#1cc7c1'}}>Services</h6>
                    <p>Emergency Checkup</p>
                    <p>Monthly Checkup</p>
                    <p>Weekly Checkup</p>
                    <p>Deep Checkup</p>
                </div>
               
         
            </div>
           </div>
           
            <h6 className='text-center m-5'>Copright {new Date().getFullYear()} YOYO</h6>
        </section>
    );
};

export default Footer;