export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error('Duration cannot be negative');
  }

  seconds = Math.round(seconds);

  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  let result = '';
  if (hours > 0) {
    result += `${hours}h`;
  }
  if (minutes > 0) {
    result += `${minutes}m`;
  }
  if (seconds > 0 || result === '') {
    result += `${seconds}s`;
  }

  return result;
}
