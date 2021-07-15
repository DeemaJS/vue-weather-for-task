export function converterKelvin(val) {
  return (val - 273).toFixed();
}

export function converterUnix(unix, mode) {
  const d = new Date(unix * 1000);
  if (mode === 'getTime') return `${d.getHours()}:${d.getMinutes() > 9 ? d.getMinutes() : `0${d.getMinutes()}`}`;
  if (mode === 'getHours') return d.getHours();
  const fullDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
  return fullDate;
}
