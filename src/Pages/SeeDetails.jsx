import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";


const SeeDetails = () => {
    const {id, price, title, description, image} = useParams()
    return (
        <div className=" bg-gradient-to-r from-black via-blue-900 to-gray-900">
            <div className="container mx-auto">
                
            </div>
            <Navbar></Navbar>
            
        </div>
    );
};

export default SeeDetails;

