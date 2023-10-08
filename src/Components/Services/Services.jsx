import Aos from 'aos';
import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = ({ info }) => {

    const { title, description, image, id, price } = info;
    Aos.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
    });

    return (
        <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <div className="card card-compact max-w-[384px] mx-auto bg-base-100 shadow-xl font-Roboto">
                <figure><img className='w-full h-[250px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className='h-[120px]'>
                        {description.length < 200 ? <p>{description}</p> : <p>{description.slice(0, 200)}.......</p>}
                    </div>
                    <div className="card-actions justify-end">
                        <p className='text-2xl md:text-3xl inline-flex items-center'><FaDollarSign/> {price} </p>
                        <Link to={`seeDetails/${id}`} className="btn btn-primary bg-gradient-to-r from-black to-blue-900 hover:from-blue-900 hover:to-black">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

Services.propTypes = {
    info: PropTypes.any
}