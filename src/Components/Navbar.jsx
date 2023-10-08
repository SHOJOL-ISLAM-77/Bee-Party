import { NavLink } from "react-router-dom";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="backdrop-blur-sm bg-white/30">
            <div className="py-10 px-5 relative  container mx-auto ">
                <nav className="flex justify-between items-center gap-16">
                    <div><img className="max-w-[150px] md:max-w-[200px]" src="https://point.moxcreative.com/beeparty/wp-content/uploads/sites/10/2022/05/logo_beeparty.png" alt="this is Icon" /></div>
                    <div className="list-none md:flex gap-12 text-lg hidden ">
                        <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline text-xl" : "text-black text-xl"}> Home</NavLink></li>
                        <li><NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline text-xl" : "text-black text-xl"}> Donation</NavLink></li>
                        <li><NavLink to="/statistics" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline text-xl" : "text-black text-xl"}> Login</NavLink></li>
                    </div>
                </nav>
                <div className="absolute top-10 right-5  md:hidden" onClick={() => setShow(!show)}>
                    {
                        show ? <FaTimes className="text-center text-2xl cursor-pointer" /> : <FaAlignJustify className="text-center text-2xl cursor-pointer" />
                    }

                </div>
                <div className="list-none  text-lg md:hidden">
                    <div className={`list-none text-lg text-right pr-10 duration-1000 ${show === false ? '-mt-96 rotate-180 ' : "mt-8 "}`}>
                        <li className="bg-black text-white text-center px-10 py-3 m-2 rounded-xl"><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}> Home</NavLink></li>
                        <li className="bg-black text-white text-center px-10 py-3 m-2 rounded-xl"><NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}> Donation</NavLink></li>
                        <li className="bg-black text-white text-center px-10 py-3 m-2 rounded-xl"><NavLink to="/statistics" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}> Login</NavLink></li>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;