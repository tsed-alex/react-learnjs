import { MenuItem } from './menu-item/Menu-Item';
import { useSelector } from 'react-redux';
import { selectDishEntities } from '../../../redux/entities/dishes/dishes';

export const Menu = ({ menuIds }) => {
    if (!menuIds || !menuIds?.length) {
        return null;
    }

    const menus = useSelector(selectDishEntities);

    return (
        <>
            <h3>Menu</h3>
            <ul>
                {menuIds.map((id) => (
                    <li key={id}>
                        <MenuItem item={menus[id]} />
                    </li>
                ))}
            </ul>
        </>
    );
};
