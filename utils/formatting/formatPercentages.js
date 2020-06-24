export const formatPercentages = (percent) => {
  if (percent === "Undisclosed") {
    return percent;
  }
  if (!percent.length) {
    // Stops the format change if the admission rate is an undisclosed value
    return `${(percent * 100).toFixed(1)}%`;
  }
};
