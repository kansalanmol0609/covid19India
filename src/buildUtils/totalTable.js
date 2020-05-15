import { getIndividualRow, getHeadingsRow } from './tableUtils';

export const totalTable = data => {
    const totalTableEl = document.getElementById("total");

    const headingsArray = ["Confirmed", "Active", "Recovered", "Deceased"];
    totalTableEl.appendChild(getHeadingsRow(headingsArray));

    const changeArray = [`[${data["dailyconfirmed"]}]`, "-", `[${data["dailyrecovered"]}]`, `[${data["dailydeceased"]}]`];
    totalTableEl.appendChild(getIndividualRow(changeArray));

    const totalActive = +data["totalconfirmed"] - +data["totalrecovered"] - +data["totaldeceased"];
    const currentArray = [data["totalconfirmed"], totalActive, data["totalrecovered"], data["totaldeceased"]];
    totalTableEl.appendChild(getIndividualRow(currentArray));
}