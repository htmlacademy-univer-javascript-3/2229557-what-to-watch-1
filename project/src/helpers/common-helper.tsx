export function getRunTime(runTime: number): string {
  const hours = Math.floor(runTime / 60);
  const minutes = runTime % 60;
  return `${hours}h ${minutes}m`;
}
