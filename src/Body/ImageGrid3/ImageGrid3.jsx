import './ImageGrid3.css';
import { CDN_URL } from '../../utils/Constants';
import { Link } from 'react-router-dom';
import ImgGridShimmer3 from '../../Shimmer/ImgGridShimmer3/ImgGridShimmer3';
import ImageGridCard from '../ImageGridCard';

const ImageGrid3 = (props) => {

    const {imgGridCards} = props;
    return imgGridCards.length === 0 ? <ImgGridShimmer3 /> : (
        <div className="img-grid-container-3">
            <h2>Top restaurants chain in Chennai</h2>
           <div className="img-grids-3">
           {imgGridCards.map((imgGrid) => (
                <Link to={'/restaurants/' + imgGrid?.info?.id} key={imgGrid?.info?.id}>
                    <ImageGridCard data={imgGrid} />
                </Link>
            ))}
           </div>
        </div>
    )
}

export default ImageGrid3;