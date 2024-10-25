import './banner.scss';
import PropTypes from 'prop-types';

const Banner = ({ image, showText }) => {
    return (
        <div className="banner">
            <img src={image} alt="Banner" />
            {showText && (
                <div className="banner-text">Chez vous, partout et ailleurs</div>
            )}
        </div>
    );
};


Banner.propTypes = {
    image: PropTypes.string.isRequired, 
    showText: PropTypes.bool 
};

export default Banner;
