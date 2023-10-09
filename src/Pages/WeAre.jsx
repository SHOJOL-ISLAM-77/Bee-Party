import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import '../Components/Banner/Banner.css'
import WeAreCard from "../Components/WeAreCard/WeAreCard";

const WeAer = () => {
    const cardData = useLoaderData()
    return (
        <div className="bg-gradient-to-bl from-purple-300 via-orange-200 to-red-200">
            <Navbar></Navbar>

            <div className="text-gray py-16 container mx-auto">
                <h2 className="md:text-5xl text-3xl text-center py-7 gradient-text font-semibold">
                    where is mine to you</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
                    {
                        cardData.map(data => <WeAreCard key={data.id} cardData={data}></WeAreCard>)
                    }

                </div>
            </div>

        </div>
    );
};

export default WeAer;