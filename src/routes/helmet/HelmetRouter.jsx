import { Helmet } from "react-helmet-async";
import PropTypes from 'prop-types';

const HelmetRouter = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

HelmetRouter.propTypes = {
    title: PropTypes.string.isRequired,
}

export default HelmetRouter;