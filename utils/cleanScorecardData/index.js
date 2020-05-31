// Cleans up the scorecard data and replaces null values with user friendly display
function cleanScorecardData(scorecards) {
  // Return an array of cleaned scorecard objects
  return scorecards.map((card) => {
    let schoolScorecard = {};
    // Iterate over the data from each school to reformat null values to display 'undisclosed'
    Object.keys(card).forEach((key) => {
      schoolScorecard[key] = card[key] === null ? "Undisclosed" : card[key];
    });

    return schoolScorecard;
  });
}
