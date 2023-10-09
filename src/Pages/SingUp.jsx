import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";


const SingUp = () => {
    const [show, setShow] = useState(false)
    const [singUpError, setSingUpError] = useState('');
    const { createUserWithEmail, uploadProfile, googlePopUp, githubPopUp,  } = useContext(AuthContext);
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

                uploadProfile(name, photo)
                    .then(result => {
                        console.log(result.user);
                    })
                    .catch(error => {
                        setSingUpError(error.message);
                    })
                Swal.fire(
                    'Good job!',
                    'Thanks for Sing Up!',
                    'success'
                )
                navigate(location?.state ? location.state : "/")

            })
            .catch(error => {
                setSingUpError(error.message)
            })
    }

    const handleGoogleSingUp = () => {
        googlePopUp()
            .then(result =>{
                console.log(result);
            })
            .catch(error => {
                setSingUpError(error.message)
            })
    }
    const handleGithubSingUp = () => {
        githubPopUp()
            .then(

        )
            .catch(error => {
                setSingUpError(error.message)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 my-20">


                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-center text-4xl font-bold">Please Sign Up</h1>
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
                        <p>Have a account <Link className="text-blue-500 hover:underline" to="/login">Login</Link></p>
                    </form>
                    <h1 className="text-center font-medium text-3xl">OR</h1>
                    <button onClick={handleGoogleSingUp} className="flex items-center border rounded-md border-[#FDBF05] bg-white px-6 py-2 my-6 mx-8 text-sm font-medium text-gray-800 hover:bg-gray-200">
                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" > <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                        <span>Continue with Google</span>
                    </button>
                    <button onClick={handleGithubSingUp} type="button" className="flex items-center border rounded-md border-[#FDBF05] bg-white px-6 py-2 mb-6 mx-8 text-sm font-medium text-gray-800 hover:bg-gray-200">
                        <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
                        </svg>
                        Sign in with Github
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SingUp;