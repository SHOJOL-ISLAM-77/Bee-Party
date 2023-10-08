import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SingUp = () => {

    const {createUserWithEmail} =useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        createUserWithEmail(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error=> {
            console.log(error.message);
        })
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
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