export const TabsController = ({restaurants, chooseRestaurantFn}) => {
    return (
        <div className="tabs-controller">
            {restaurants.map((item, index) => (
                <button className='tabs-controller__button' key={item.id} onClick={() => chooseRestaurantFn(item)}>{item.name}</button>
            ))}
        </div>
    );
};
