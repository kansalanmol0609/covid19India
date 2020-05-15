import { getHeadingsRow, getIndividualRow} from './tableUtils';

export const individualTable = (data, firstCol) => {
    const individualTableEl = document.getElementById("individual");

    const headArray = [firstCol, "Confirmed", "Active" ,"Recovered" ,"Deceased"];
    individualTableEl.appendChild(getHeadingsRow(headArray));
    let offset = 0;
    if(firstCol === 'State/UT'){
        offset = 1;
    }
    for(let i=offset; i<data.length; i++){
        const currentState = data[i];
        const stateDataArray = [currentState["state"], currentState["confirmed"], currentState["active"], currentState["recovered"]];
        if(currentState["deaths"]){
            stateDataArray.push(currentState["deaths"]);
        }else{
            stateDataArray.push(currentState["deceased"]);
        }
        individualTableEl.appendChild(getIndividualRow(stateDataArray, currentState["statecode"]));
    }    
}