
function formatDateToYMD(d: Date) {
    return formatNumbersToYMD(d.getFullYear(), d.getMonth(), d.getDate())
}

function formatNumbersToYMD (year: number, month: number, day: number) {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

export {
    formatDateToYMD,
    formatNumbersToYMD
}