export const makeScorecardApiRequest = async (queryString) => {
  const scorecardApiResponse = await axios.get(queryString);
  return scorecardApiResponse;
};
