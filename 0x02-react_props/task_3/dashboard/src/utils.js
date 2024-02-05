export function getFullYear() {
    const currentDate = new Date();
    return (currentDate.getFullYear());
}

export  function getFooterCopy(isIndex) {
    if (isIndex) {
        return ('Holberton School');
    } else {
        return ('Holberton School main dashboard');
    }
}
export function getLatestNotification() {
    return(
        <p><strong>Urgent requirement</strong> - complete by EOD</p>
    );
}