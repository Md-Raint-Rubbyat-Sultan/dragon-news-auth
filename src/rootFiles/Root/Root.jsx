import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-popins container mx-auto" data-theme="light">
            <Outlet />
        </div>
    );
};

export default Root;