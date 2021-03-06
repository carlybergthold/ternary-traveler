import { API } from "./dbCalls";

export const displayToDOM = {
    currentDestinations: function () {
        const container = document.querySelector("#destinationsDiv");
        container.innerHTML = "";
        API.getData("places").then(data => {
        data.forEach(dest => {
            let newDest = document.createElement("div");
            newDest.id = `dest-${dest.id}`
            newDest.className = "destCard";

            if (dest.review === null || dest.review === undefined) {
                dest.review.value = "hidden";
            }

            let destHTML = `
                <h3>${dest.name}</h3>
                <p><strong>DESCRIPTION:</strong> ${dest.description}
                </br><strong>COUNTRY:</strong> ${dest.country}
                </br><span id="costVal-${dest.id}"><strong>COST:</strong> ${dest.cost}</span>
                </br><span id="reviewVal-${dest.id}" class="${dest.review}"><strong>REVIEW:</strong> ${dest.review}</span>
                <section id="hidden-${dest.id}" class="hidden">
                    <label for="editCost">Edit Cost</label>
                    <input type="text" id="editCost-${dest.id}" class="editCost" name="editCost" required></input></br>
                    <label for="editReview">Add Review</label>
                    <input type="text" id="editReview-${dest.id}" class="editReview" name="editReview" required></input></br>
                    <button class="saveBtn" id="saveBtn-${dest.id}">Save</button>
                </section>
                <button id="deleteBtn-${dest.id}" class="deleteBtn">Remove</button>
                <button id="editBtn--${dest.id}" class="editBtn">Edit</button>
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
            <form class="destForm">
                <h2>Add a New Destination!</h2>
                <label for="destName">Name</label>
                <input type="text" id="destName" name="destName" required></input>
                <label for="destDescription">Description</label>
                <input type="text" id="destDescription" name="destDescription" required></input></br>
                <label for="destCost">Trip Cost</label>
                <input type="text" id="destCost" name="destCost" required></input>
                <label for="destCountry">Country</label>
                <select name="destCountry" id="destCountry"></select></br>
                <div id="destBtn">
                <button id="addDestBtn">Add To Your Itinerary!</button>
                </div>
            </form>
        `
        const newDiv = document.createElement("div");
        newDiv.innerHTML = destForm;
        container.appendChild(newDiv);
    }
};

