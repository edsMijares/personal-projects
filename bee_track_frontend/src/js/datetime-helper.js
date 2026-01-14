export function formatDateTime(utcDateString) {
    return new Date(utcDateString);
}
// Jan 01, 2024
export function humanReadable(date) {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return date.toLocaleDateString(undefined, options);
}
// 2024-01-01
export function humanDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}-${date.getDate().toString().padStart(2, '0')}`;
}
// 12:00:00 AM
export function humanTime(date) {
    const hours = ((date.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    return `${hours}:${minutes}:${seconds} ${ampm}`;
}

export function sec(date) {
    return date.getSeconds().toString().padStart(2, '0');
}

export function min(date) {
    return date.getMinutes().toString().padStart(2, '0');
}

export function hour(date) {
    return ((date.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
}

export function sameDay(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}

export function ampm(date) {
    return date.getHours() >= 12 ? 'PM' : 'AM';
}
// 12:00:00
export function dateDiff(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const hours = Math.floor(diffInSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((diffInSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (diffInSeconds % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
export function hourDiff(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const hours = Math.floor(diffInSeconds / 3600);
    return hours;
}