export function truncateToDate(d) {
    const copy = new Date(d);
    copy.setHours(0, 0, 0, 0);
    return copy;
}
export function ensureNotPastDate(input, now = new Date()) {
    const inDate = truncateToDate(input).getTime();
    const today = truncateToDate(now).getTime();
    return inDate >= today;
}
//# sourceMappingURL=date.js.map