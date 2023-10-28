import { CDN_URL } from '../../utils/Constants';
import './AccordionMenu.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../Redux/cartSlice';

const AccordionMenu = ({data}) => {

    const dispatch = useDispatch();

    const HandleAddItems = (list) => {
        // dispatch action
        dispatch(addItem(list))
    }
    
    return (
        <div className="accordion-container" key={data?.card?.info?.name}>
            {data.map((list) => (
               <div className="accordion-container-main">
                 <div className="accordion-main-left">
                 <p className='accordion-name'>{list?.card?.info?.name}</p>
                 <h5 className="accordion-price">₹ {list?.card?.info?.price ? list?.card?.info?.price /100 : list?.card?.info?.defaultPrice /100}</h5>
                 <p className="accordion-description">{list?.card?.info?.description}</p>
                 </div>
                 <div className="accordion-main-right">
                    <img src={CDN_URL + list?.card?.info?.imageId} alt="" className='accordion-img' />
                    <button className='accordion-add-btn' onClick={() => HandleAddItems(list)}>ADD</button>
                 </div>
               </div>
            ))}
        </div>
    )
}

export default AccordionMenu;