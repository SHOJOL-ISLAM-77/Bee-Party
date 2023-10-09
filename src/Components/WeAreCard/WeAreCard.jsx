import PropTypes from 'prop-types';
import Swal from 'sweetalert2';


const WeAreCard = ({ cardData }) => {
    const { description, address, img } = cardData;

    const handleModal = () => {
        Swal.fire(
            'Good job!',
            'Call success!',
            'success'
        )
    }
    return (
        <div>
            <div className="card lg:w-96 w-80 bg-base-100 shadow-xl mx-auto ">
                <div className="card-body">
                    <div className='flex items-center gap-4'>
                        <h2 className="card-title inline tracking-[0px] md:text-lg lg:text-xl text-base"><span className='underline'>Our Address : <br /></span> {address}</h2>
                        <button onClick={handleModal} className='btn btn-outline btn-warning hidden lg:inline-block'>Call now !</button>
                    </div>
                    <p className='h-[70px] lg:h-[50px] text-sm text-justify'>{description}</p>
                    <button onClick={handleModal} className='btn btn-outline btn-warning block lg:hidden mt-2'>Call now !</button>
                </div>
                <figure ><img src={img} className='h-56 w-full' alt="Shoes" /></figure >
            </div>
        </div>
    );
};

export default WeAreCard;

WeAreCard.propTypes = {
    cardData: PropTypes.any
}