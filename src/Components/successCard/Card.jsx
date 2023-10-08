import Aos from 'aos';
import { FaCaretDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Card = () => {

    const [show, setShow] = useState(false);
    const [successData, setSuccessData] = useState([]);

    useEffect(() => {
        fetch('/success.json')
            .then(res => res.json())
            .then(data => setSuccessData(data))
    }, [])


    Aos.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
    });

    const handleSeeAll = () => {
        setShow(!show)
    }
    return (
        <div className='container mx-auto'>
            <div className="py-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 ">
                {successData?.slice(0, show ? successData.length : 6).map((success, index) => (
                    <div key={index} className="flex flex-col justify-between items-center max-w-sm md:max-w-md xl:max-w-xl gap-3  mx-auto "
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className='p-5 lg:card-body bg-base-content text-white shadow-xl rounded-xl flex flex-col justify-center items-center relative'
                            data-aos="fade-right"
                        >
                            <p data-aos="fade-left">{success.content}</p>
                            <FaCaretDown className='text-4xl text-black absolute -bottom-5'></FaCaretDown>
                        </div>
                        <div className='flex gap-5' data-aos="fade-left">
                            <img src={success.img} className='w-14 h-14 rounded-full' alt="" />
                            <h5 className='card-title py-2'>{success.name}</h5>
                        </div>
                    </div>
                ))}

            </div>
            <div className="flex justify-center items-center pb-8">
                <Link onClick={handleSeeAll} to="/seeAll" className={`${show && "hidden"} w-52 btn btn-primary bg-gradient-to-r from-black to-blue-900 hover:from-blue-900 hover:to-black`}>See All</Link>

            </div>
        </div>
    );
};

export default Card;