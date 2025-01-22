import {restaurants} from "../../../../materials/mock";

export const TabsController = ({chooseRestaurantFn}) => {
    return (
        <div className="tabs-controller">
            {restaurants.map((item, index) => (
                <button className='tabs-controller__button' key={item.id} onClick={() => chooseRestaurantFn(index)}>{item.name}</button>
            ))}
        </div>
    );
};
