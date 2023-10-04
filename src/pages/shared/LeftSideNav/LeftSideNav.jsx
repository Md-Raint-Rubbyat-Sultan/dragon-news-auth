import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LeftSideNav = ({ handelNewsByCategory }) => {
    const [categories, setCategories] = useState(() => []);

    const loadCategories = async () => {
        const res = await fetch('categories.json');
        const data = await res.json();
        setCategories(() => data);
    }

    useEffect(() => {
        let mount = true;
        loadCategories();
        return () => mount = false;
    }, []);

    return (
        <div>
            <div className="space-y-5">
                <h3 className="text-2xl font-semibold">All Category</h3>
                <p className="text-2xl text-center font-semibold bg-gray-100 py-3 px-5">National News</p>
                <div className="flex flex-col items-start gap-8 text-center">
                    {
                        categories.map((category, idx) => <Link onClick={()=>handelNewsByCategory(category?.id)} key={idx} className="text-lg text-gray-500 text-start  font-semibold  hover:underline w-3/4 mx-auto">{category?.name}</Link>)
                    }
                </div>
            </div>
        </div>
    );
};

LeftSideNav.propTypes = {
    handelNewsByCategory: PropTypes.func.isRequired,
}

export default LeftSideNav;