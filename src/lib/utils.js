/**
 * @param {Date|string=} date
 * @returns {string} Formatted date
 */
export function formatDate(date) {
    if (date === undefined) {
        return "Current";
    }
    if (typeof date === "string") {
        date = new Date(date);
    }
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    }).format(date);
}
