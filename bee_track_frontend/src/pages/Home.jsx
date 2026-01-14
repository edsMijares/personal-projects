import { useMemo, useEffect, useState } from "react";
import { useLoading } from "../js/loading-context";
import Btn from "../components/reuseable/Btn";
import * as dh from "../js/datetime-helper";
import { time_log, get_time_log } from "../api/api";

function Home() {
    const { showLoading, hideLoading } = useLoading();

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [timeInHour, setTimeInHour] = useState(null);
    const [timeInMinute, setTimeInMinute] = useState(null);
    const [timeOutHour, setTimeOutHour] = useState(null);
    const [timeOutMinute, setTimeOutMinute] = useState(null);

    const fetchTimeLog = async () => {
        showLoading();
        try {
            const currentTime = new Date();
            const response = await get_time_log(1);
            if (response?.time_logs?.data.length > 0) {
                const currentTimeLog = response.time_logs.data[0];
                if (dh.sameDay(currentTime, dh.formatDateTime(currentTimeLog.created_at))) {
                    if (currentTimeLog.created_at) {
                        var timeIn = dh.formatDateTime(currentTimeLog.created_at);
                        setTimeInHour(dh.hour(timeIn));
                        setTimeInMinute(dh.min(timeIn));
                    }
                    if (currentTimeLog.updated_at) {
                        var timeOut = dh.formatDateTime(currentTimeLog.updated_at);
                        setTimeOutHour(dh.hour(timeOut));
                        setTimeOutMinute(dh.min(timeOut));
                        var dateDiff = dh.dateDiff(timeIn, timeOut);
                        var totalHours = parseInt(dateDiff.split(":")[0]);
                        var totalMinutes = parseInt(dateDiff.split(":")[1]);
                        var totalSeconds = parseInt(dateDiff.split(":")[2]);
                        if (totalSeconds < 0) {
                            totalSeconds += 60;
                            totalMinutes -= 1;
                        }
                        if (totalMinutes < 0) {
                            totalMinutes += 60;
                            totalHours -= 1;
                        }
                        setHours(totalHours);
                        setMinutes(totalMinutes);
                        setSeconds(totalSeconds);
                    }else{
                        var secondPassed = currentTime.getSeconds() - timeIn.getSeconds();
                        var minutePassed = currentTime.getMinutes() - timeIn.getMinutes();
                        var hourPassed = currentTime.getHours() - timeIn.getHours();
                        if (secondPassed < 0) {
                            secondPassed += 60;
                            minutePassed -= 1;
                        }
                        if (minutePassed < 0) {
                            minutePassed += 60;
                            hourPassed -= 1;
                        }
                        setSeconds(secondPassed);
                        setMinutes(minutePassed);
                        setHours(hourPassed);
                    }
                }    
            }
        } 
        finally{
            hideLoading();
        }
    };

    useEffect(() => {
        fetchTimeLog();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formattedTime = useMemo(() => {
        return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
    }, [hours, minutes, seconds]);

    const formattedTimeIn = useMemo(() => {
        if (timeInHour === null || timeInMinute === null) return "--:--";
        return `${timeInHour}:${timeInMinute}`;
    }, [timeInHour, timeInMinute]);

    const formattedTimeOut = useMemo(() => {
        if (timeOutHour === null || timeOutMinute === null) return "--:--";
        return `${timeOutHour}:${timeOutMinute}`;
    }, [timeOutHour, timeOutMinute]);

    const timeClass = useMemo(() => 
        "flex flex-row text-7xl font-bold " + ((timeOutHour != null && timeOutMinute != null) ? 'text-primary-yellow' : ''), 
        [timeOutHour, timeOutMinute]
    );
    
    useEffect(() => {
        if (timeInHour != null && timeInMinute != null) {
            const timer = setInterval(() => {
                if (timeOutHour == null && timeOutMinute == null) {
                    setSeconds(prev => prev + 1);
                }else{
                    clearInterval(timer);
                }
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [timeInHour, timeInMinute, timeOutHour, timeOutMinute]);

    useEffect(() => {
        if (seconds >= 60) {
            setSeconds(0);
            setMinutes(prev => prev + 1);
        }
    }, [seconds]);

    useEffect(() => {
        if (minutes >= 60) {
            setMinutes(0);
            setHours(prev => prev + 1);
        }
    }, [minutes]);

    const updateState = async () => {
        if (timeOutHour == null && timeOutMinute == null) {
            const now = new Date();
            const h = dh.hour(now);
            const m = dh.min(now);
            if (timeInHour == null && timeInMinute == null) {
                await time_log();
                setTimeInHour(h);
                setTimeInMinute(m);
            } else {
                await time_log();
                fetchTimeLog();
                setTimeOutHour(h);
                setTimeOutMinute(m);
            }
        }
    }

    return (
        <main className="flex flex-col">
            <section className="flex flex-col w-full items-center mt-10">
                <div className={timeClass}>
                    {formattedTime}
                </div>
                <div className="flex flex-row text-primary-yellow mt-3">
                    {(timeInHour === null && timeInMinute === null) ? (<div>--:--</div>) : (
                        //12 hour format
                        <span className="my-auto font-bold">{formattedTimeIn}</span>
                    )}
                    <Btn
                        name={(timeOutHour != null && timeOutMinute != null) ? 'BUZZED OUT' : (timeInHour == null && timeInMinute == null) ? "TIME IN" : "TIME OUT"}
                        style={(timeOutHour != null && timeOutMinute != null) ? 2 : 1}
                        onClick={() => updateState()}
                    />
                    {(timeOutHour === null && timeOutMinute === null) ? (<div>--:--</div>) : (
                        <span className="my-auto font-bold">{formattedTimeOut}</span>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Home;