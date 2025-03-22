export function useDateParser(parsedDate: string): string {
    const newDate = new Date(parsedDate);
    return [
        `${newDate.getDate()}`.padStart(2, "0"),
        `${newDate.getMonth() + 1}`.padStart(2, "0"),
        `${newDate.getFullYear()}`,
    ].join(".");
}
