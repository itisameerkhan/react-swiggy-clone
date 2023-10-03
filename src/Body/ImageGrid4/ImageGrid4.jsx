import { Link } from "react-router-dom";
import { CDN_URL } from "../../utils/Constants";
import ImageGridCard from "../ImageGridCard";
import './ImageGrid4.css';
import ImgGridShimmer3 from "../../Shimmer/ImgGridShimmer3/ImgGridShimmer3";

const ImageGrid4 = ({imgGridCards}) => {
        return imgGridCards.length === 0 ? <ImgGridShimmer3 /> : (
        <div className="img-grid-container-4">
            <h2>Restaurants with online food delivery on Chennai</h2>
           <div className="img-grids">
           {imgGridCards.map((imgGrid) => (
                <Link to={'/restaurants/' + imgGrid?.info?.id} key={imgGrid?.info?.id}>
                    <ImageGridCard data={imgGrid} />
                </Link>
            ))}
           </div>
        </div>
    )
}

export default ImageGrid4;