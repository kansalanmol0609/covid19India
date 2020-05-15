// import 'bootstrap/dist/css/bootstrap.min.css';
import { buildHomePage } from "./pages/homePage";
import { buildStatePage } from './pages/statePage';

const clearPage = () => {
    document.getElementById("heading").innerHTML = null;
    document.getElementById("total").innerHTML = null;
    document.getElementById("individual").innerHTML = null;
    document.getElementById("confirmedChart").innerHTML = null;
    document.getElementById("activeChart").innerHTML = null;
    document.getElementById("recoveredChart").innerHTML = null;
    document.getElementById("deceasedChart").innerHTML = null;
}

const stateData = buildHomePage();

export const individualStateEvent = (e) => {
    const statecode = e.target.parentElement.id; 
    stateData.then(tdata => {
        tdata.forEach(state => {
            if(state["statecode"] == statecode){
                clearPage();
                buildStatePage(e.target.parentElement.id, state);
                return;
            }
        })
    }).catch(err =>{
        console.log(err);
    })
}

// Both pages have 4 sections 
// Header
// Total Table
// Individual Table
// 4 Graphs