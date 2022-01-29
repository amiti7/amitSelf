import React from 'react';
import {Link} from 'react-router-dom';
import './SubMenu.css';

function SubMenu(props) {
    const {list, closeSubmenu}=props;

    return (
        <>
        <ul onClick={closeSubmenu} className={'dropdown-menu'}>
            {list.map((item,index) => {
                return (
                    <li key = {index}>
                        <Link className={item.cName} to={item.path} onClick={closeSubmenu}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default SubMenu;