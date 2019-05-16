import { API } from "./dbCalls";
import { displayToDOM } from "./DOM";

export const saveDestination = () => {

    let destName = document.querySelector("#destName");
    let destDescription = document.querySelector("#destDescription");
    let destCost = document.querySelector("#destCost");
    let destCountry = document.querySelector("#destCountry");

    let destObj = {
        name: destName.value,
        description: destDescription.value,
        country: destCountry.value,
        cost: destCost.value,
        review: ""
    }

    API.postData("places", destObj).then(displayToDOM.currentDestinations);
    destName.value = "";
    destDescription.value = "";
    destCost.value = "";
    destCountry.value = "";
}