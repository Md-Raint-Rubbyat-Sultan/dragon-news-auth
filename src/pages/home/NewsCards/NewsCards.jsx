import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const NewsCards = ({ news }) => {
    const { _id, title, image_url, details } = news;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img src={image_url} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    (details.length > 200) ?
                        <p>{details.slice(0, 200)} <Link to={`/newsDetails/${_id}`} className='text-rose-600 font-medium'>Read More...</Link></p>
                        :
                        <p>{details}</p>
                }
            </div>
        </div>
    );
}

NewsCards.propTypes = {
    news: PropTypes.object.isRequired,
};

export default NewsCards;