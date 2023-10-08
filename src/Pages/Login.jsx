import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";


const Login = () => {
    const [show, setShow] = useState(false)
    const [singUpError, setSingUpError] = useState('');
    const {login} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSingUpError('');
        
        login(email, password)
        .then(result => {
            console.log(result);
            Swal.fire(
                'Good job!',
                'Login!',
                'success'
            )
            navigate(location?.state ? location.state : "/")

        })
        .catch(
            setSingUpError('Do not match email or password')
        )
        
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Do not have a account <Link className="text-blue-500 hover:underline" to="/singUp">Sing Up</Link></p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;