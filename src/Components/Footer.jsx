import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import 'aos/dist/aos.css';

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-black via-blue-900 to-gray-900">
            <footer className=" p-10 container mx-auto footer  text-white justify-between md:justify-around grid-cols-2  ">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title ">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Social</header>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <a href=""><FaFacebook/></a>
                        <a href=""><FaYoutube/></a>
                        <a href=""><FaTwitter/></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;