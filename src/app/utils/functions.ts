export function getTimeColonString(timeInSeconds: number): string {
    if (isNaN(timeInSeconds)) {
        return "0:00";
    }
    const hoursNum = Math.floor(timeInSeconds / 3600);
    const minutesNum = Math.floor((timeInSeconds - (hoursNum * 3600)) / 60);
    const secondsNum = Math.round(timeInSeconds - (hoursNum * 3600) - (minutesNum * 60));

    if (hoursNum > 0) {
        return hoursNum.toString() + ":" + minutesNum.toString().padStart(2, "0") + ":" + secondsNum.toString().padStart(2, "0");
    } else {
        return minutesNum.toString() + ":" + secondsNum.toString().padStart(2, "0");
    }
}

export function getRatio(value: number, minimum: number, maximum: number) {
    return (value - minimum) / (maximum - minimum)
}