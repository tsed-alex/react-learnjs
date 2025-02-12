import { useSelector } from 'react-redux';
import { selectReviewEntities } from '../../../redux/entities/reviews/slice';
import { selectUserEntities } from '../../../redux/entities/users/slice';

export const Reviews = ({ reviewIds }) => {
    if (!reviewIds || !reviewIds?.length) {
        return null;
    }

    const reviews = useSelector(selectReviewEntities);
    const users = useSelector(selectUserEntities);

    const getUserNameById = (id) => {
        return users[id].name;
    };

    return (
        <>
            <h3>Reviews</h3>
            <ul>
                {reviewIds.map((id) => (
                    <li key={id}>
                        <div>{getUserNameById(reviews[id].userId)}:</div>
                        <div>{reviews[id].text}</div>
                        <div>Rating: {reviews[id].rating}</div>
                    </li>
                ))}
            </ul>
        </>
    );
};
