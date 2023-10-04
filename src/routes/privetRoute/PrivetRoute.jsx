import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'

const PrivetRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation()

    if (isLoading) {
        return (
            <div className="text-center">
                <span className="loading loading-bars loading-lg my-12"></span>
            </div>
        );
    }
    if (user) {
        return children;
    }
    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
};

PrivetRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivetRoute;