import img1 from "../../assets/img (1).png"
import img2 from "../../assets/img (2).png"
import img3 from "../../assets/img (3).png"
import img4 from "../../assets/img (4).png"
import img5 from "../../assets/img (5).png"
import img6 from "../../assets/img (6).png"

const WhatWeOffer = () => {

    return (
       <div className="bg-gradient-to-r from-blue-900 via-indigo-600 to-blue-900 text-white px-5">
         <div className="flex justify-around items-center py-8 md:py-44 flex-col-reverse lg:flex-row">
            <div className="grid grid-cols-3 gap-14 text-center ">
                <div  data-aos="fade-down-right">
                    <img src={img1} className="md:h-36 md:w-36 w-16 h-16 rounded-full mb-5 mx-auto" alt="" />
                    <p className="md:font-semibold md:text-xl">Catering and decor</p>
                </div>
                <div data-aos="fade-down-left">
                    <img src={img2} className="md:h-36 md:w-36 w-16 h-16 rounded-full mb-5 mx-auto" alt="" />
                    <p className="md:font-semibold md:text-xl">Floral</p>
                </div>
                <div data-aos="fade-up-right">
                    <img src={img3} className="md:h-36 md:w-36 w-16 h-16 rounded-full mb-5 mx-auto" alt="" />
                    <p className="md:font-semibold md:text-xl">Photo, Video and Audio</p>
                </div>
                <div data-aos="fade-up-right">
                    <img src={img4} className="md:h-36 md:w-36 w-16 h-16 rounded-full mb-5 mx-auto" alt="" />
                    <p className="md:font-semibold md:text-xl">Invitation Cards</p>
                </div>
                <div data-aos="flip-left">
                    <img src={img5} className="md:h-36 md:w-36 w-16 h-16 rounded-full mb-5 mx-auto" alt="" />
                    <p className="md:font-semibold md:text-xl">Entertainment</p>
                </div>
                <div data-aos="flip-right">
                    <img src={img6} className="md:h-36 md:w-36 w-16 h-16 rounded-full mb-5 mx-auto" alt="" />
                    <p className="md:font-semibold md:text-xl">Venue Selection</p>
                </div>
            </div>
            <div className="md:max-w-lg mx-auto text-center mb-12">
                <h2 className="md:text-5xl text-3xl font-extrabold" data-aos="fade-up-right">What We Offer</h2>
                <p className="text-xl my-20">Each event and client is unique, and we believe our services should be as well. We know what hiring a planner is all about!</p>
                <button className="w-60 h-14 rounded-xl bg-gradient-to-r from-black to-blue-900 hover:from-blue-900 hover:to-black text-white text-xl">Hire Us</button>
            </div>
        </div>
       </div>
    );
};

export default WhatWeOffer;