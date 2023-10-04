import swimming from '../../../assets/qZone1.png';
import classRoom from '../../../assets/qZone2.png';
import PlayGround from '../../../assets/qZone3.png';
import backGround from '../../../assets/bg.png';
import { FaGoogle, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';

const RightSideNav = () => {
    const { loginWithGoogle, loginWithGithub } = useContext(AuthContext);

    const handelGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                toast.success("Successfully login with google");
                // console.log(res);
            })
            .catch(er => toast.error(er?.message))
    }

    const handelGithubLogin = () => {
        loginWithGithub()
            .then(() => {
                toast.success("Successfully login with google");
                // console.log(res);
            })
            .catch(er => toast.error(er?.message))
    }

    return (
        <div className="space-y-7">
            <div className="px-4 pb-4 space-y-4">
                <h3 className="text-2xl font-semibold">Login With</h3>
                <button onClick={handelGoogleLogin} className="btn btn-ghost h-auto border-2 border-blue-400 text-blue-400 w-full"><FaGoogle />Login with Google</button>
                <button onClick={handelGithubLogin} className="btn btn-ghost h-auto border-2 border-black w-full"><FaGithub /> Login with Github</button>
            </div>
            <div className="space-y-5 p-4">
                <h3 className="text-2xl font-semibold">Find Us On</h3>
                <div className='font-medium'>
                    <p className='border rounded-t p-4'><a className='flex items-center gap-2' href="">
                        <FaFacebook className='text-blue-400' /> Facebook
                    </a></p>
                    <p className='border-l border-r p-4'><a className='flex items-center gap-2' href="">
                        <FaTwitter className='text-blue-400' /> Twitter
                    </a></p>
                    <p className='border rounded-b p-4'><a className='flex items-center gap-2' href="">
                        <FaInstagram className='text-red-400' /> Instagram
                    </a></p>
                </div>
            </div>
            <div className="space-y-5 p-4 bg-gray-100">
                <h3 className="text-2xl font-semibold">Q-Zone</h3>
                <img className='w-full' src={swimming} alt="Swimming" />
                <img className='w-full' src={classRoom} alt="Class Room" />
                <img className='w-full' src={PlayGround} alt="Play Ground" />
            </div>
            <div style={{
                backgroundImage: `url(${backGround})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} className='px-4 py-8 lg:py-16 lg:px-9  text-white text-center space-y-5'>
                <h1 className='text-3xl md:text-2xl lg:text-3xl font-bold'>Create an Amazing Newspaper</h1>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='text-2xl font-semibold px-5 py-2 bg-rose-600'>Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNav;