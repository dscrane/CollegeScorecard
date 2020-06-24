export const formatDollarAmounts = (price) => {
  // Stops the format change if the cost is an undisclosed value
  if (price === "Undisclosed") {
    return price;
  }

  const currencyFormat = price
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return `$${currencyFormat}`;
};
