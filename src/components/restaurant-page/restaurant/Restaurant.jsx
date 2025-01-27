export const Restaurant = ({activeRestaurant, children}) => {
    return (
        <div>
            <div className='restaurant-name'>{activeRestaurant.name}</div>
            {children}
        </div>
    );
};