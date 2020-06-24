export const scorecardApiRequest = async (queryString) => {
  const scorecardApiResponse = await axios.get(queryString);
  return scorecardApiResponse;
};
