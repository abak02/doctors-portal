import semi from '../../../images/images/semi.png'
import ClientsReview from '../ClientsReview/ClientsReview';
import people1 from '../../../images/images/people1.png';
import people2 from '../../../images/images/people2.png';
import people3 from '../../../images/images/people3.png';

const Testimonial = () => {


    const clientsReview = [
        {
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            place: 'California',
            img:people1
        },
        {
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            place: 'California',
            img:people2
        },
        {
            review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            place: 'California',
            img:people3
        }
    ]

    return (
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-md-4">
                    <h6 style={{color:"#19D3AE"}}>Testimonial</h6>
                    <h3>What our patients says</h3>
                </div>
                <div className="col-md-2">
                        <img  style={{height:'75px'}} src={semi} alt="" />
                </div>
                <div className="d-flex justify-content-center">
                <div className="row">
                {
                    clientsReview.map(review=><ClientsReview review = {review}></ClientsReview>)
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;