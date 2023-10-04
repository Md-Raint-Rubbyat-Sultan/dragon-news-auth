import { useLoaderData } from "react-router-dom";
import HelmetRouter from "../../routes/helmet/HelmetRouter";
import RouteNavBar from "../shared/RouteNavBar/RouteNavBar";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
    const singleNews = useLoaderData();
    // console.log(singleNews);
    const { title, image_url, details } = singleNews;
    return (
        <div>
            <HelmetRouter title="Details" />
            <Header />
            <div className="my-8">
            <RouteNavBar />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6" >
                <div className="md:col-span-3 space-y-5">
                    <h3 className="text-3xl">Dragon News</h3>
                    {/* card container */}
                    <div>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={image_url} alt={title} className="w-full rounded-lg" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">{title}</h2>
                                <p>{details}</p>
                                <div className="mt-8">
                                    <button className="btn bg-rose-600 text-white hover:text-rose-600"><FaArrowLeft /> All news in this category</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;