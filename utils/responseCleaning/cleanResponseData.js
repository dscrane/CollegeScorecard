export const cleanResponseData = (responseData) => {
  if (responseData.length > 1) {
    // Return an array of cleaned scorecard objects
    return responseData.map((card) => {
      let schoolScorecard = {};
      // Iterate over the data from each school to reformat null values to display 'undisclosed'
      Object.keys(card).forEach((key) => {
        schoolScorecard[key] = card[key] === null ? "Undisclosed" : card[key];
      });

      return schoolScorecard;
    });
  } else {
    let schoolScorecard = {};
    // Iterate over the data from each school to reformat null values to display 'undisclosed'
    Object.keys(responseData).forEach((key) => {
      schoolScorecard[key] =
        responseData[key] === null ? "Undisclosed" : responseData[key];
    });
    return schoolScorecard;
  }
};
