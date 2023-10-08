import { NavLink } from "react-router-dom";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const photo = user?.photoURL;
    const name = user?.displayName;


    const handleSingOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="backdrop-blur-sm bg-white/30">
            <div className="py-10 px-5 relative  container mx-auto ">
                <nav className="flex justify-between items-center gap-16">
                    <div><img className="max-w-[150px] md:max-w-[200px]" src="https://point.moxcreative.com/beeparty/wp-content/uploads/sites/10/2022/05/logo_beeparty.png" alt="this is Icon" /> </div>

                    <div className="list-none md:flex gap-12 text-lg hidden items-center">
                        <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline text-xl" : "text-black text-xl"}> Home</NavLink></li>
                        <li><NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline text-xl" : "text-black text-xl"}> Donation</NavLink></li>
                        <li><NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline text-xl" : "text-black text-xl"}> Login</NavLink></li>

                        {
                            user && <li className="flex items-center gap-5"><p>{name}</p> <img src={photo} className="inline mr-6 h-10 w-10 rounded-full" alt="" /> <button onClick={handleSingOut} className="hidden lg:inline btn bg-gradient-to-r from-black to-blue-900 hover:from-blue-900 hover:to-black text-white">Log Out</button> </li>
                        }
                    </div>
                </nav>
                <div className="absolute top-10 right-5 flex items-center gap-5  md:hidden" onClick={() => setShow(!show)}>
                    {
                        user && <div className="flex items-center gap-5"><p className="text-2xl">{name}</p> <img className="h-10 w-10 rounded-full" src={photo} alt="" /></div>
                    }
                    {
                        show ? <FaTimes className="text-center text-2xl cursor-pointer" /> : <FaAlignJustify className="text-center text-2xl cursor-pointer" />
                    }


                </div>
                <div className="list-none  text-lg md:hidden ">
                    <div className={`list-none text-lg text-right pr-10 duration-1000 ${show === false ? '-mt-96 rotate-180 ' : "mt-8 "}`}>
                        <li className="bg-black text-white text-center px-10 py-3 m-2 rounded-xl"><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}> Home</NavLink></li>
                        <li className="bg-black text-white text-center px-10 py-3 m-2 rounded-xl"><NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}> Donation</NavLink></li>
                        <li className="bg-black text-white text-center px-10 py-3 m-2 rounded-xl"><NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}> Login</NavLink></li>
                        {
                            user && <li onClick={handleSingOut} className="bg-black text-white text-center px-10 py-3 m-2 rounded-xl"><button>Log Out</button></li>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;