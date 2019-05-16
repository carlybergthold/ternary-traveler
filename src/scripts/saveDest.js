import { API } from "./dbCalls";
import { displayToDOM } from "./DOM";

export const saveDestination = () => {

let destName = document.querySelector("#destName").value;
let destDescription = document.querySelector("#destDescription").value;
let destCost = document.querySelector("#destCost").value;
let destCountry = document.querySelector("#destCountry").value;

    let destObj = {
        name: destName,
        description: destDescription,
        country: destCountry,
        cost: destCost,
        review: ""
    }

    API.postData("places", destObj).then(displayToDOM.currentDestinations);
    destName.value = "";
    destDescription = "";
    destCost = "";
    destCountry = "";
}