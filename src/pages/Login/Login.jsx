import { Link, useLocation, useNavigate } from "react-router-dom";
import RouteNavBar from "../shared/RouteNavBar/RouteNavBar";
import HelmetRouter from "../../routes/helmet/HelmetRouter";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
    const { loginUser, forgetPassword } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [emailInput, setEmailInput] = useState(() => "");

    const handelLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        loginUser(email, password)
            .then(() => {
                toast.success("Successfully Login")
                // console.log(res)
                e.target.reset();
                navigate(location?.state || '/');
            })
            .catch(er => toast.error(er.message))
    }

    const handelForgetPassword = () => {
        forgetPassword(emailInput)
            .then(() => toast.success("An reset password email has been send. Please check your email. If email is not in inbox then check spam folder too.", { duration: 10000 }))
            .catch(er => toast.error(er.message + " Must Provide your email."))
    }

    return (
        <div className="bg-gray-100">
            <HelmetRouter title="Login" />
            <RouteNavBar />
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content">
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <form onSubmit={handelLogin} className="card-body">
                                <div className="text-center lg:text-left mb-10">
                                    <h1 className="text-4xl font-bold">Login now!</h1>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input onChange={(e) => setEmailInput(() => e.target.value)} type="email" value={emailInput} name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link onClick={handelForgetPassword} className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-neutral">Login</button>
                                </div>
                                <div className="mt-4">
                                    <p>Don&apos;t have an account? please <Link state={location?.state} to={'/register'} className="font-bold text-rose-600">Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;