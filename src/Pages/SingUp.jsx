import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";


const SingUp = () => {
    const [show, setShow] = useState(false)
    const [singUpError, setSingUpError] = useState('');
    const { createUserWithEmail, uploadProfile } = useContext(AuthContext);



    const handleLogin = (e) => {
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
                .catch(error=>{
                    console.error(error);
                })

            })
            .catch(error => {
                setSingUpError(error.message)
            })

          

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200 my-20">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
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
                                <button className="btn btn-primary">google</button>
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