import './ImageGridCard.css';
import { CDN_URL } from '../utils/Constants';

const ImageGridCard = ({ data }) => {
    return (
        <div className="img-grid-card">
            <img src={CDN_URL + data?.info?.cloudinaryImageId} alt="" className='img-grid-3' />
            <h4 className='img-grid-title'>{data?.info?.name}</h4>
            <p className='img-grid-ratings'>
            <i className="fa-solid fa-star"></i>
            <p>{data?.info?.avgRating}</p>
            </p>
            <p className='img-grid-cuisines'>
            {data?.info?.cuisines.join(', ')}
            </p>
        </div>
    )
}

export default ImageGridCard;