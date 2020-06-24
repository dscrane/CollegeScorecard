export const formatNumericValues = (number) => {
  // Stops the format change if the number is undefined
  if (number === "Undisclosed") {
    return number;
  }

  const numberFormat = number
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "1,");
  return `${numberFormat}`;
};
