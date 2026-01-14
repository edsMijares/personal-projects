import { useEffect, useState } from "react";
import { useLoading } from "../js/loading-context";
import * as dh from "../js/datetime-helper";
import { get_time_log } from "../api/api";
import Pagination from "../components/reuseable/Pagination";

function TimeLogs() {
    const { showLoading, hideLoading } = useLoading();
    const [timeLogs, setTimeLogs] = useState([]);
    const [paginationData, setPaginationData] = useState({});
    const [minWorkingHours, setMinWorkingHours] = useState(null);

    const fetchTimeLog = async (page = 1) => {
        showLoading();
        try {
            const apiResponse = await get_time_log(page);
            apiResponse?.time_logs?.data.map((log) => {
                log.created_at = dh.formatDateTime(log.created_at);
                if (log.updated_at) {
                    log.updated_at = dh.formatDateTime(log.updated_at);
                }
                return log;
            });
            setPaginationData(apiResponse?.time_logs ?? {});
            setMinWorkingHours(apiResponse?.min_working_hours ?? null);
            setTimeLogs(apiResponse?.time_logs?.data);
        } finally {
            hideLoading();
        }
    };
    useEffect(() => {
        fetchTimeLog();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Time Logs</h1>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-3 mb-4">
                {timeLogs.map((log, index) => (
                    <div key={index} className="justify-evenly mb-2 p-4 rounded bg-secondary-black">
                        <strong className="text-primary-yellow">{dh.humanReadable(log.created_at)}</strong>
                        <div className="flex flex-col md:flex-row mt-2">
                            <div className="flex flex-col md:w-1/2">
                                <div className="flex flex-row">
                                    <div className="w-[100px]"><strong>Time In:</strong></div>
                                    <p> {dh.humanTime(log.created_at)}</p>
                                </div>
                                <div className="flex flex-row">
                                    <div className="w-[100px]"><strong>Time Out:</strong></div>
                                    <p> {log.updated_at ? dh.humanTime(log.updated_at) : "N/A"}</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:w-1/2">
                                <div className="flex flex-row">
                                    <div className="w-[100px]"><strong>Total Hours:</strong></div>
                                    <p> {log.updated_at ? dh.dateDiff(log.created_at, log.updated_at) : "N/A"}</p>
                                </div>
                                <div className="flex flex-row">
                                    <div className="w-[100px]"><strong>Status:</strong></div>
                                    <p className={log.updated_at ? (dh.hourDiff(log.created_at, log.updated_at) >= minWorkingHours ? 'text-green-500' : 'text-red-500') : 'text-yellow-500'}> {log.updated_at ? (dh.hourDiff(log.created_at, log.updated_at) >= minWorkingHours ? "Met" : "Not Met") : "N/A"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination data={paginationData} onPageChange={fetchTimeLog} />
        </div>
    );
}

export default TimeLogs;