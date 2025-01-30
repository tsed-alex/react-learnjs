import { MenuItem } from './Menu-Item';

export const Menu = ({ menu }) => {
    if (!menu || !menu?.length) {
        return null;
    }

    return (
        <>
            <h3>Menu</h3>
            <ul>
                {menu.map((item) => (
                    <li key={item.id}>
                        <MenuItem item={item} />
                    </li>
                ))}
            </ul>
        </>
    );
};
