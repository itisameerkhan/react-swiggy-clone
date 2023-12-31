import { useState, useEffect } from 'react';
import './RestaurantMenu.css';
import { useParams } from 'react-router-dom';
import { CDN_URL } from '../utils/Constants';
import RestaurantCategories from '../Body/RestaurantCategories/RestaurantCategories';
import RestaurantMenuShimmer from './RestaurantMenuShimmer/RestaurantMenuShimmer';

const RestaurantMenu = () => {

    const[restaurantList, setRestaurantList] = useState([]);
    const [restaurantDatas, setRestaurantDatas] = useState([]);
    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(0);
    
    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0826802&lng=80.2707184&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        setRestaurantList(json);
        const restaurantDatasMenu = json?.data?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
        setRestaurantDatas(restaurantDatasMenu)
    }
    if(restaurantList.length === 0) return <RestaurantMenuShimmer />

    const {name, city, cuisines, areaName, avgRating, totalRatingsString, costForTwoMessage} = restaurantList?.data?.cards[0]?.card?.card?.info;
    const {lastMileTravelString, slaString} = restaurantList?.data?.cards[0]?.card?.card?.info?.sla;
    const {message} = restaurantList?.data?.cards[0]?.card?.card?.info?.feeDetails;

    return (
        <div className="restaurant-menu-container">
           <div className="res-menu-nav">
                <p>Home/{city}/{name}</p>
                <i className="fa-solid fa-magnifying-glass"></i>
           </div>
           <div className="res-menu-main">
            <div className="res-menu-main-left">
                <h2>{name}</h2>
                <p>{cuisines.join(', ')}</p>
                <p>{areaName + ', ' + lastMileTravelString}</p>
                <p> <i className="fa-solid fa-bicycle" style={{marginRight:'5px'}}></i>
                    {message}
                </p>
            </div>
            <div className="res-menu-main-right">
                <h3>
                   <i className="fa-solid fa-star"></i>
                    {avgRating}
                </h3>
                <p>{totalRatingsString}</p>
            </div>
           </div>
           <div className="res-menu-main-time">
             <h4><i class="fa-solid fa-clock"></i>{slaString}</h4>
             <h4><i class="fa-solid fa-money-bill"></i>{costForTwoMessage}</h4>
           </div>
           <div className="res-categories">
            {restaurantDatas.map((category, index) => (
                <RestaurantCategories  
                resCategory={category?.card?.card} 
                key={category?.card?.card?.title} 
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                />
            ))}
           </div>
        </div>
    )
}

export default RestaurantMenu;