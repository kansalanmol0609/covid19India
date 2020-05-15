import { getStateData } from "../apiData/stateData";
import { getStateDailyData } from "../apiData/stateDaily";
import { headerBuilder } from "../buildUtils/headerBuilder";
import { totalTable } from "../buildUtils/totalTable";
import { individualTable } from "../buildUtils/individualTable";
import { chartBuilder } from "../buildUtils/chartBuilder";

export const buildStatePage = async (statecode, stateData) => {
  let data = await getStateData(statecode);
  window.scrollTo(0,0);
  //Back Button
  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Back";
  buttonEl.className = "btn btn-secondary btn-md mt-2";
  buttonEl.style.width = '80px';
  buttonEl.addEventListener("click", () => {
    location.reload();
  });
  document.getElementById("temporary").appendChild(buttonEl);

  //Head Section
  headerBuilder(data["name"]);

  //Total Table Section
  const headData = {
    dailyconfirmed: stateData["deltaconfirmed"],
    dailyrecovered: stateData["deltarecovered"],
    dailydeceased: stateData["deltadeaths"],
    totalconfirmed: stateData["confirmed"],
    totalrecovered: stateData["recovered"],
    totaldeceased: stateData["deaths"],
  };
  totalTable(headData);

  const districtObject = data["districtData"];
  const districtArray = [];
  for (let district in districtObject) {
    const tmpDistrict = districtObject[district];
    tmpDistrict["state"] = district;
    districtArray.push(tmpDistrict);
  }

  //Individual sections
  console.log(districtArray);
  individualTable(districtArray, "District");

  let timeSeriesData = await getStateDailyData(statecode);
  //Charts
  const confirmedTable = [["Date", "Confirmed"]],
    activeTable = [["Date", "Active"]],
    recoveredTable = [["Date", "Recovered"]],
    deceasedTable = [["Date", "Deceased"]];
  //array of objects
  timeSeriesData.forEach((dataPoint) => {
    let activeData =
      +dataPoint["totalconfirmed"] -
      +dataPoint["totalrecovered"] -
      +dataPoint["totaldeceased"];
    activeData = activeData >= 0 ? activeData : 0;
    confirmedTable.push([dataPoint["date"], +dataPoint["totalconfirmed"]]);
    activeTable.push([dataPoint["date"], activeData]);
    recoveredTable.push([dataPoint["date"], +dataPoint["totalrecovered"]]);
    deceasedTable.push([dataPoint["date"], +dataPoint["totaldeceased"]]);
  });
  if (timeSeriesData) {
    chartBuilder("confirmedChart", confirmedTable, "Confirmed");
    chartBuilder("activeChart", activeTable, "Active");
    chartBuilder("recoveredChart", recoveredTable, "Recovered");
    chartBuilder("deceasedChart", deceasedTable, "Deceased");
  }
};
