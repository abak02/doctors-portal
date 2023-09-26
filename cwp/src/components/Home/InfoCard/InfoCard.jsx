
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './IndoCard.css'

const InfoCard = ({info}) => {
    return (
        <div className='col-md-4 text-white info-card'>
            <div className={`d-flex align-items-center justify-content-center info-${info.background} mb-3 p-4`}>
                <div className='mx-2'>
                    <FontAwesomeIcon className='info-icon' icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>      
            </div>          
        </div>
    );
};

export default InfoCard;