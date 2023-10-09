import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { FaDollarSign } from "react-icons/fa";
import Swal from "sweetalert2";


const SeeDetails = () => {
    const { id } = useParams()
    const intId = parseInt(id)
    const details = useLoaderData()
    const data = details.find(donation => intId === donation.id);
    const { title, image, description, price } = data;

    const handleGoHome = () => {
        Swal.fire(
            'Good job!',
            'We come to congratulate you!',
            'success'
        )
    }

    return (
        <div className=" bg-gradient-to-tr from-yellow-950 via-blue-900 to-stone-500 text-white">
            <Navbar></Navbar>

            <div className="container mx-auto lg:py-28 ">

                <div className=" flex justify-between flex-col md:flex-row gap-10 my-6 mx-5">
                <h2 className="text-3xl inline text-center font-bold sm:hidden">{title}</h2>
                    <img className="md:w-1/2" src={image} alt="" />
                    <div className="md:w-1/2 flex flex-col justify-around gap-5">
                        <h2 className="text-3xl md:text-5xl hidden sm:inline">{title}</h2>
                        <h3 className="text-2xl md:text-4xl rounded-xl backdrop-blur-sm bg-black/30 p-4">Pay <span className="text-red-400  inline-flex items-center"><FaDollarSign />{price}</span> we handle your sweet birthday</h3>
                        <Link to='/' onClick={handleGoHome} className="btn text-2xl md:text-3xl w-[200px] bg-gradient-to-tl from-emerald-500 via-cyan-700 to-indigo-600 text-white hover:from-indigo-500 hover:via-cyan-700 hover:to-emerald-500">Payment</Link>
                    </div>
                </div>
                <p className="text-slate-300 mx-5 text-justify text-xs md:text-sm lg:text-base py-3">{description}</p>
            </div>


        </div>
    );
};

export default SeeDetails;

