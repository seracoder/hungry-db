import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function MealCard ({ id, image, name, category }) {
    return (
        <>
            <Link to={{ pathname: "/meal", search: `?id=${id}` }}>
                <div className="card bg-base-100 shadow-xl rounded-xl">
                    <figure><img src={image} alt="Shoes" className="bg-contain"/></figure>
                    <div className="card-body">
                        <div className="badge badge-secondary">{category}</div>
                        <p>{name}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

MealCard.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    area: PropTypes.string
}

export default MealCard;