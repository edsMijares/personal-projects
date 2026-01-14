import { NavLink } from 'react-router-dom';
function Link({ name = 'Default', link = '/'}) {
    return (
        <NavLink
            className={({ isActive }) =>
                "h-fit rounded-3xl py-1 px-5 my-auto mx-4 " +
                (isActive ? "btn-active" : "text-white")
            }
            to={link}
        >
            {name}
        </NavLink>
    );
}

export default Link;
