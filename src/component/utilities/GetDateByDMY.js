const getDateDMY = () => {
    const date = new Date();
    const [day, month, year] = [
        date.getDate(),
        date.getMonth() + 1,
        date.getFullYear(),
    ];
    const [seconds, minutes, hours] = [
        date.getSeconds(),
        date.getMinutes(),
        date.getHours(),
    ];
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${seconds}:${minutes}:${hours}`;
    return { currentDate: formattedDate, currentTime: formattedTime };
}

export { getDateDMY };