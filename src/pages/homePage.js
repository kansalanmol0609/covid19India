import { getData } from "../apiData/allIndiaData";
import { headerBuilder } from "../buildUtils/headerBuilder";
import { totalTable } from "../buildUtils/totalTable";
import { individualTable } from "../buildUtils/individualTable";
import { chartBuilder } from "../buildUtils/chartBuilder";

export const buildHomePage = async () => {
  const data = await getData();
  delete data["tested"];
  const timeSeriesData = data["cases_time_series"];

  // Header Section
  headerBuilder("India");

  // Total Table
  const tmpObject = timeSeriesData[timeSeriesData.length - 1];
  totalTable(tmpObject);

  // Individual Table
  individualTable(data["statewise"], "State/UT");

  //Charts
  const confirmedTable = [["Date", "Confirmed"]],
    activeTable = [["Date", "Active"]],
    recoveredTable = [["Date", "Recovered"]],
    deceasedTable = [["Date", "Deceased"]];
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
  chartBuilder("confirmedChart", confirmedTable, "Confirmed");
  chartBuilder("activeChart", activeTable, "Active");
  chartBuilder("recoveredChart", recoveredTable, "Recovered");
  chartBuilder("deceasedChart", deceasedTable, "Deceased");

  return data["statewise"];
};
