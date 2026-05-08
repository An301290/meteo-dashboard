export const formatDate = (showYear = false, isoString?: string) =>
  new Date(isoString ?? Date.now()).toLocaleDateString('en-US', {
    weekday: showYear ? 'long' : 'short',
    month: showYear ? 'long' : 'short',
    day: 'numeric',
    ...(showYear && { year: 'numeric' }),
  });

export const formatHour = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleTimeString([], { hour: 'numeric', hour12: true });
};

export const getUniqueDays = (timeArray: string[]) => {
  const seen = new Set<string>();
  return timeArray
    .map((t) => t.split('T')[0])
    .filter((date) => {
      if (seen.has(date)) return false;
      seen.add(date);
      return true;
    });
};
