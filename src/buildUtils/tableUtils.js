import { individualStateEvent } from '../index';

export const getTdEl = (data) => {
    const tdEl = document.createElement("td");
    tdEl.textContent = data;
    return tdEl;
}

export const getThEl = (data) => {
    const thEl = document.createElement("th");
    thEl.textContent = data;
    return thEl;
}
export const getHeadingsRow = (data) => {
    const trEl = document.createElement("tr");
    data.forEach( heading => {
        trEl.appendChild(getThEl(heading));
    })
    return trEl;
}

export const getIndividualRow = (data, idName="") => {
    const trEl = document.createElement("tr");
    if(idName){
        trEl.id = idName;
        trEl.addEventListener('click', individualStateEvent);
    }
    data.forEach( heading => {
        trEl.appendChild(getTdEl(heading));
    })
    return trEl;
}
