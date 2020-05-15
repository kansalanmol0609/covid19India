export const getStateData = async (statecode) => {
    const URL = `https://api.covid19india.org/state_district_wise.json`;
    const fetchResult = fetch(URL);
    const response = await fetchResult;
    const jsonData = await response.json();
    for(let state in jsonData){
        if(jsonData[state]["statecode"] == statecode){
            jsonData[state]["name"] = state;
            return jsonData[state];
        }
    }
    return null;
  };
  