import { useLoaderData } from "react-router-dom";
import HelmetRouter from "../../../routes/helmet/HelmetRouter";
import Header from "../../shared/Header/Header";
import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import RouteNavBar from "../../shared/RouteNavBar/RouteNavBar";
import BreakingNews from "../BreakingNews/BreakingNews";
import NewsCards from "../NewsCards/NewsCards";
import { useState } from "react";

const Home = () => {
    const allNews = useLoaderData();
    const [newsFromCategory, setNewsFromCategory] = useState(() => allNews);

    const handelNewsByCategory = (categoryId) => {
        if (categoryId === "0") {
            setNewsFromCategory(() => allNews);
        } else {
            const newNews = allNews.filter(news => news?.category_id === categoryId)
            setNewsFromCategory(() => newNews);
        }
    }


    return (
        <div>
            <HelmetRouter title="Dragon | Home" />
            <Header />
            <BreakingNews />
            <RouteNavBar />
            <div className="grid gap-5 grid-cols-1 md:grid-cols-4 mt-10 md:mt-20 mb-10 md:mb-20">
                <div>
                    <LeftSideNav handelNewsByCategory={handelNewsByCategory} />
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-2xl mb-5 font-semibold">Dragon News Home</h2>
                    <div className="flex flex-col items-center gap-8">
                        {
                            (newsFromCategory.length > 0) ?
                            newsFromCategory.map((news) => <NewsCards
                                key={news?._id}
                                news={news}
                            />)
                            :
                            <h3 className="text-3xl text-center font-bold my-8">No news found</h3>
                        }
                    </div>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;