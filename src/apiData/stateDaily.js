export const getStateDailyData = async (statecode) => {
    const URL = 'https://api.covid19india.org/states_daily.json';
    const fetchResult = fetch(URL);
    const response = await fetchResult;
    const jsonData = await response.json();
    const resp = [];
    for(let i=0; i< jsonData["states_daily"].length; i+=3){
        const dataObj = {
            date: jsonData["states_daily"][i]["date"],
            totalconfirmed:jsonData["states_daily"][i][statecode.toLowerCase()],
            totalrecovered:jsonData["states_daily"][i+1][statecode.toLowerCase()],
            totaldeceased:jsonData["states_daily"][i+2][statecode.toLowerCase()],
        };
        resp.push(dataObj);
    }
    return resp;
  };
  