import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Banner.css";
import Aos from "aos";

const Banner = () => {
    Aos.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
    });
    return (
        <div className="lg:my-28 flex flex-col justify-center items-center gap-6 " data-aos="flip-left" >
            <h1 className="md:text-6xl text-3xl font-bold text-center  gradient-text">
                Bring your child’s <br /> dream event to life
            </h1>
            <h4 className="text-base md:text-xl text-center md:py-5 text-black">
                Make your next birthday party a memorable <br /> one with our expert event management services
            </h4>
            <Link to='/previews-service' className="btn md:text-lg  px-9 bg-gradient-to-r from-sky-700 to-indigo-900 hover:from-indigo-900 hover:to-sky-700 text-white">Our previews Services <FaArrowRight /></Link>
        </div>
    );
};

export default Banner;