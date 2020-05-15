import { getHeadingsRow, getIndividualRow} from './tableUtils';

export const individualTable = (data, firstCol) => {
    const individualTableEl = document.getElementById("individual");

    const headArray = [firstCol, "Confirmed", "Active" ,"Recovered" ,"Deceased"];
    individualTableEl.appendChild(getHeadingsRow(headArray));

    for(let i=1; i<data.length; i++){
        const currentState = data[i];
        const stateDataArray = [currentState["state"], currentState["confirmed"], currentState["active"], currentState["recovered"], currentState["deaths"]];
        individualTableEl.appendChild(getIndividualRow(stateDataArray, currentState["statecode"]));
    }    
}