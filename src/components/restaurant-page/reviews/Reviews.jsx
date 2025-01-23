export const Reviews = ({reviews}) => {
    if(!reviews || !reviews?.length) {
        return null;
    }

    return (
        <>
            <h3>Reviews</h3>
            <ul>{
                reviews.map((item) => (
                    <li key={item.id}>
                        <div>{item.user}:</div>
                        <div>{item.text}</div>
                        <div>Rating: {item.rating}</div>
                    </li>
                ))
            }</ul>
        </>
    )
};