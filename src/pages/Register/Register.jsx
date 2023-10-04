import { Link, useLocation, useNavigate } from "react-router-dom";
import RouteNavBar from "../shared/RouteNavBar/RouteNavBar";
import HelmetRouter from "../../routes/helmet/HelmetRouter";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
    const { createNewUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handelRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photoUrl = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photoUrl, email, password);
        createNewUser(email, password)
            .then(() => {
                toast.success("Successfully Register")
                // console.log(res);
                e.target.reset();
                navigate(location?.state || '/')
            })
            .catch(er => toast.error(er.message))
    }

    return (
        <div className="bg-gray-100">
            <HelmetRouter title="Register" />
            <RouteNavBar />
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content">
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <form onSubmit={handelRegister} className="card-body">
                                <div className="text-center lg:text-left mb-10">
                                    <h1 className="text-4xl font-bold">Register now!</h1>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-neutral">Register</button>
                                </div>
                                <div className="mt-4">
                                    <p>Already have an account? please <Link to={'/login'} className="font-bold text-rose-600">Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;