export function buildDuration(duration) {
    let minutes = Math.floor(duration / 60);
    let seconds = Math.floor(duration % 60);
    return minutes + ":" + String(seconds).padStart(2, "0");
}