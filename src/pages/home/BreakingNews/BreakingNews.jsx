import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex items-center p-4 bg-gray-100 my-12">
            <h4 className="text-2xl text-white font-medium px-6 py-2 bg-rose-600">Latest</h4>
            <Marquee pauseOnHover={true}>
                <p className="mx-8 font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;