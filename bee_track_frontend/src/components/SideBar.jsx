import Img from "./reuseable/Img";
import Link from "./reuseable/Link";
import { useLocation } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import { GoPerson, GoHome, GoClock, GoTasklist} from "react-icons/go";
import { logout } from "../api/api";

function SideBar({ children }) {
    const location = useLocation();
    const noSidebarPaths = ['', '/login', '/register'];

    function handleLogout() {
        logout().then(() => {
            window.location.href = '/login';
        }).catch((error) => {
            console.error('Logout failed:', error);
        });
    }
    const LinkTag = (name, link, icon) => {
        return <Link link={link} className="flex flex-row">
                    <div className="mr-3">
                        {icon}
                    </div>
                    <span className="my-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">{name}</span>
                </Link>
    };
    return (
        <div className="flex flex-row">
            {!noSidebarPaths.includes(location.pathname) && (
                <aside className="min-h-screen bg-primary-black b-right-secondary-black flex flex-col group hover:w-[300px] max-w-fit w-16 transition-all duration-300">
                    <Img src="/images/queen_bee_icon.png" alt="Logo" className={'m-[10px] w-[50px]'} />
                    <nav className="flex flex-col h-full">
                        <div className="flex flex-col gap-5 mt-10">
                            {LinkTag('Home', '/', <GoHome size={24} />)}
                            {LinkTag('Profile', '/profile', <GoPerson size={24} />)}
                            {LinkTag('Tasks', '/tasks', <GoTasklist size={24} />)}
                            {LinkTag('Time Logs', '/timelogs', <GoClock size={24} />)}
                        </div>
                        <div className="mt-auto mb-5">
                            {LinkTag('Logout', '_blank', <RiLogoutBoxLine size={24} />)}
                        </div>
                    </nav>
                </aside>
            )}
            {noSidebarPaths.includes(location.pathname) && (
                <aside className="min-h-screen bg-primary-black b-right-secondary-black flex-grow flex flex-row">
                    <Img className={"m-auto"} src="/images/banner.png" alt="Logo" />
                </aside>
            )}
            
            <div className={ (!noSidebarPaths.includes(location.pathname) ? "flex-grow" : "") + " flex flex-col"}>
                {children}
            </div>
        </div>
    );
}

export default SideBar;