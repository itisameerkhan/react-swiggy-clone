import './Body.css'
import { useEffect, useState } from 'react';
import ImageGrid1 from './ImageGrid1/ImageGrid1';
import ImageGrid2 from './ImageGrid2/ImageGrid2';
import ImageGrid3 from './ImageGrid3/ImageGrid3';
import ImageGrid4 from './ImageGrid4/ImageGrid4';

const Body = () => {

    const [imgGridCards, setImgGridCards] = useState([]);
    const [imgGridCards2, setImgGridCards2] = useState([]);
    const [imgGridCards3, setImgGridCards3] = useState([]);
    const [imgGridCards4, setImgGridCards4] = useState([]);

    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setImgGridCards(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        setImgGridCards2(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        setImgGridCards3(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setImgGridCards4(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (
        <div className="body-container">
            {/* <ImageGrid1 imgGridCards={imgGridCards} /> */}
            <ImageGrid2 imgGridCards={imgGridCards2} />
            <ImageGrid3 imgGridCards={imgGridCards3} />
            <ImageGrid4 imgGridCards={imgGridCards4}  />
        </div>
    )
}

export default Body;