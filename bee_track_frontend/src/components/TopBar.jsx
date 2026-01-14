import Img from "./reuseable/Img";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function TopBar() {
    
    const [time, setTime] = useState(new Date());
    const [hours, setHours] = useState('--');
    const [minutes, setMinutes] = useState('--');

    const location = useLocation();
    const noTopBarPaths = ['/register', '/login'];

    useEffect(() => {
        const update = () => setTime(new Date());
        update();
        const now = new Date();
        const msToNextMinute = (60 - now.getSeconds()) * 1000;
        const timeoutId = setTimeout(() => {
            update();
            const intervalId = setInterval(update, 60000);
            return () => clearInterval(intervalId);
        }, msToNextMinute);
        return () => clearTimeout(timeoutId);
    }, []);


    useEffect(() => {
        setHours(((time.getHours() + 11) % 12 + 1).toString().padStart(2, '0'));
        setMinutes(time.getMinutes().toString().padStart(2, '0'));
    }, [time]);

    return (
        <>
        {!noTopBarPaths.includes(location.pathname) && (
            <header className="flex flex-row w-full h-[70px] max-h-[70px] b-bottom-secondary-black">
                <span className="text-primary-yellow font-bold text-3xl ms-2 my-auto">BeeTrack</span>
                <div className="flex flex-row ms-auto text-primary-yellow font-bold me-2 text-2xl my-auto">
                    {hours}:{minutes}
                    <span className="ms-1 text-primary-gray text-[12px] mt-[7px] leading-none">{time.getHours() >= 12 ? 'PM' : 'AM'}</span>
                    <Img src="images/hex_icon.png" className="w-[25px] ms-2 my-auto" />
                </div>
            </header>
        )}
        </>
    );
}

export default TopBar;