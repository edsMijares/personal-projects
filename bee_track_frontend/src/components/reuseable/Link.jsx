import React from 'react';
import { NavLink } from 'react-router-dom';

function Link({ children, link = '/', className = '', onClick = null }) {
    return (
        <NavLink
            className={({ isActive }) =>
                "h-fit rounded-3xl py-1 px-5 my-auto " +
                (isActive ? "text-primary-yellow" : "text-white") + " " + className
            }
            to={link}
            onClick={onClick}
        >
            {children}
        </NavLink>
    );
}

export default React.memo(Link);
