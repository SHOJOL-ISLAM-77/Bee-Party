import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar";
import bgImg from "../assets/wepik-export-202310070438253DEp.png"
import Services from "../Components/Services/Services";
import Aos from "aos";
import Success from "../Components/success/Success";
import WhatWeOffer from "../Components/WhatWeOffer/WhatWeOffer";


const Home = () => {
    const cards = useLoaderData();

    const bg = {
        backgroundImage: `url(${bgImg})`
    }

    Aos.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
    });
    return (
        <div>
            <div className="h-screen bg-no-repeat bg-cover max-h-[400px] md:max-h-fit" style={bg}>
                <Navbar></Navbar>
                <Banner ></Banner>
            </div>
            <div className="my-28 container mx-auto" data-aos="fade-up-right" >
                <h2 className="md:text-5xl text-3xl text-center py-8 font-extrabold">Awesome Services</h2>
                <p className="text-lg text-center font-Roboto">
                    We are proud that we provide all these services
                </p>
                <div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
                    {
                        cards?.map(info => <Services key={info.id} info={info}></Services>)
                    }
                </div>
            </div>

            <WhatWeOffer></WhatWeOffer>

            <Success></Success>
        </div>
    );
};

export default Home;