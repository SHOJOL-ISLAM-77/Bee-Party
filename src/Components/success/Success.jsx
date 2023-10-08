import Aos from "aos";
import Card from "../successCard/Card";

const Success = () => {
    Aos.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
    });

    return (
        <div className="container mx-auto px-5 my-14">
            <h2 className="md:text-5xl text-3xl font-extrabold text-center">Our success</h2>
            <div className="bg-blue-300 max-w-[1200px] mx-auto my-14 grid grid-cols-3 rounded-xl" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

                <div className="text-center py-6 text-blue-900">
                    <h3 className="text-5xl md:text-8xl font-extrabold">20k+</h3>
                    <p className="font-bold md:text-xl">Happy Service</p>
                </div>
                <div className="text-center py-6 text-blue-900">
                    <h3 className="text-5xl md:text-8xl font-extrabold">35+</h3>
                    <p className="font-bold md:text-xl">Expert Team</p>
                </div>
                <div className="text-center py-6 text-blue-900">
                    <h3 className="text-5xl md:text-8xl font-extrabold">13+</h3>
                    <p className="font-bold md:text-xl">Yours Experience</p>
                </div>
            </div>

            <h3 className="text-3xl font-extrabold text-center">With whom I have successfully performed events</h3>
            <div>
                <Card></Card>
            </div>
        </div>
    );
};

export default Success;