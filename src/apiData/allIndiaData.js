export const getData = async () => {
  const URL = `https://api.covid19india.org/data.json`;
  const fetchResult = fetch(URL);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
};