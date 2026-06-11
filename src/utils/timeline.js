export const getTimeline = () => {
  const data = localStorage.getItem("timeline");

  if (data) {
    return JSON.parse(data);
  }

  return [];
};

export const saveTimeline = (entry) => {
  const current = getTimeline();

  const updated = [entry, ...current];

  localStorage.setItem("timeline", JSON.stringify(updated));
};
