import {Counter} from "../counter/Counter";

export const Menu = ({menu}) => {
    if(!menu || !menu?.length) {
        return null;
    }

    return (
        <>
            <h3>Menu</h3>
            <ul>{
                menu.map((item) => (
                    <li key={item.id}>
                        <div className='menu-item'>
                            <div className='menu-description'>
                                <div>{item.name}</div>
                                <div className='ingredients'>({item.ingredients.join('/')})</div>
                            </div>
                            <div className='menu-price'>{item.price}$</div>
                        </div>
                        <Counter/>
                    </li>
                ))
            }</ul>
        </>
    );
};