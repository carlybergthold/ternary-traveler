import { API } from "./dbCalls";

export const displayToDOM = {
    currentDestinations: function () {
        const container = document.querySelector("#destinationsDiv");
        API.getData("places").then(data => {
        data.forEach(dest => {
            console.log(dest);
            let newDest = document.createElement("div");
            newDest.id = `dest-${dest.id}`

            let destHTML = `
                <h3>${dest.name}</h3>
                <p>Visa: ${dest.visa_required}</p>
                <p>Description: ${dest.description}</p>
                <p>Location: ${dest.location}</p>
                <p>Cost: ${dest.cost}</p>
                <p>Review: ${dest.review}</p>
            `
            //TO DO - don't show review if it's blank
            newDest.innerHTML = destHTML;
            container.appendChild(newDest);
        });
    })
    },
    destinationForm: function () {
        const container = document.querySelector("#destinationsForm");

        const destForm = `
            <form class="destForm hidden">
                <label for="destName">Destination Name</label>
                <input type="text" id="destName" name="destName" required></input></br>
                <label for="destDescription">Description</label>
                <input type="text" id="destDescription" name="destDescription" required></input></br>
                <label for="destCost">Trip Cost</label>
                <input type="text" id="destCost" name="destCost" required></input></br>
                <label for="destCountry">Country</label>
                <select name="destCountry" id="destCountry"></select></br>
                <button id="addDestBtn">Add To Your Itinerary!</button>
            </form>
        `
        const newDiv = document.createElement("div");
        newDiv.innerHTML = destForm;
        container.appendChild(newDiv);
    }
};

