import { API } from "./dbCalls";

export const saveDestination = () => {

const destName = document.querySelector("#destName").value;
const destDescription = document.querySelector("#destDescription").value;
const destCost = document.querySelector("#destCost").value;
const destCountry = document.querySelector("#destCountry").value;

    let destObj = {
        name: destName,
        description: destDescription,
        country: destCountry,
        cost: destCost
    }

    API.postData("places", destObj);
}