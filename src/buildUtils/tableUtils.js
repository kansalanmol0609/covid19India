import { individualStateEvent } from "../index";

export const getTdEl = (data) => {
  const tdEl = document.createElement("td");
  tdEl.textContent = data;
  tdEl.className = "table-light";
  return tdEl;
};

export const getThEl = (data) => {
  const thEl = document.createElement("th");
  thEl.textContent = data;
  thEl.className = "table-active";
  return thEl;
};
export const getHeadingsRow = (data) => {
  const trEl = document.createElement("tr");
  let offset = 0;
  if (data.length === 5) {
    offset = 1;
  }
  data.forEach((heading, index) => {
    const thEl = getThEl(heading);
    if (index === offset) {
      thEl.className += "confirmedCases";
    } else if (index === offset + 1) {
      thEl.className += "activeCases";
    } else if (index === offset + 2) {
      thEl.className += "recoveredCases";
    } else if (index === offset + 3) {
      thEl.className += "deceasedCases";
    }
    trEl.appendChild(thEl);
  });
  trEl.className = "table-active";
  return trEl;
};

export const getIndividualRow = (data, idName = "") => {
  const trEl = document.createElement("tr");
  let offset = 0;
  if (data.length === 5) {
    offset = 1;
  }
  data.forEach((heading, index) => {
    const tdEl = getTdEl(heading);
    if (index === offset) {
      tdEl.className = "confirmedCases";
    } else if (index === offset + 1) {
      tdEl.className = "activeCases";
    } else if (index === offset + 2) {
      tdEl.className = "recoveredCases";
    } else if (index === offset + 3) {
      tdEl.className = "deceasedCases";
    }
    trEl.appendChild(tdEl);
  });
  trEl.className = "table-light";
  if (idName) {
    trEl.id = idName;
    trEl.classList.add("pointerHover");
    trEl.addEventListener("click", individualStateEvent);
  }
  return trEl;
};
