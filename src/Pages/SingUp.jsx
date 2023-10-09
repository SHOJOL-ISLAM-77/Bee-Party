import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";


const SingUp = () => {
    const [show, setShow] = useState(false)
    const [singUpError, setSingUpError] = useState('');
    const { createUserWithEmail, uploadProfile, googlePopUp } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleSingUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photoUrl.value;

        setSingUpError('');


        const passwordTest = /^(?=.*[A-Z])(?=.*[\W_]).*[A-Za-z0-9].*$/;
        if (password.length < 6) {
            setSingUpError(' Password should be at least 6 characters')
            return;
        } else if (!passwordTest.test(password)) {
            setSingUpError('Your password should have at least one upper case characters, a special character .');
            return;
        }
        createUserWithEmail(email, password)
            .then(result => {
                console.log(result);
                Swal.fire(
                    'Good job!',
                    'We come to congratulate you!',
                    'success'
                )

                uploadProfile(name, photo)
                    .then(result => {
                        console.log(result.user);
                    })
                    .catch(error => {
                        console.error(error);
                    })
                navigate(location?.state ? location.state : "/")

            })
            .catch(error => {
                setSingUpError(error.message)
            })
    }

    const handleGoogleSingUp = () => {
        googlePopUp()
            .then(
                navigate(location?.state ? location.state : "/")
            )
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 my-20">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSingUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photoUrl" type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                            <span onClick={() => setShow(!show)} className="absolute right-5 top-[50px] cursor-pointer">{show ? <FaEyeSlash /> : <FaEye />}</span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {
                            singUpError && <p className="text-red-700 pt-4">{singUpError}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <div className="flex justify-around">
                            <div className=" mt-6">
                                <button onClick={handleGoogleSingUp} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                                    <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                        <path d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" />
                                    </svg>
                                    Sign in with Google
                                </button>
                            </div>
                            <div className=" mt-6">
                                <button className="btn btn-primary">github</button>
                            </div>
                        </div>
                        <p>Have a account <Link className="text-blue-500 hover:underline" to="/login">Login</Link></p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SingUp;