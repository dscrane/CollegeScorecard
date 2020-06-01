// Formats the integer dollar amounts to display like currencies
export function formatDollarAmounts(price) {
  // Stops the format change if the cost is an undisclosed value
  if (price === "Undisclosed") {
    return price;
  }

  const currencyFormat = price
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return `$${currencyFormat}`;
}

// Formats the admission rate decimal value to a percentage
export function formatPercentages(percent) {
  // Stops the format change if the admission rate is an undisclosed value
  if (percent === "Undisclosed") {
    return percent;
  }

  return `${(percent * 100).toFixed(1)}%`;
}
