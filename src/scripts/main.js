import { displayToDOM } from "./DOM";
import { addCountries } from "./countryList";
import { saveDestination } from "./saveDest";
import { API } from "./dbCalls";


displayToDOM.currentDestinations();
displayToDOM.destinationForm();
addCountries();

document.querySelector("#addDestBtn").addEventListener("click", function(e) {
    e.preventDefault();
    saveDestination();
})

//event listeners for edit, delete, and save buttons
document.addEventListener("click", function(e) {
    e.preventDefault();
    let destId = e.target.id.split("-").pop();
    let destCost = document.querySelector(`#editCost-${destId}`);
    let destReview = document.querySelector(`#editReview-${destId}`);

    if (e.target.className === "editBtn") {
        // unhide input div with same id
        document.querySelector(`#hidden-${destId}`).classList.remove("hidden");
        let costVal = document.querySelector(`#costVal-${destId}`).textContent.split(": ").pop();
        let reviewVal = document.querySelector(`#reviewVal-${destId}`).textContent.split(": ").pop();
        destCost.value = costVal;
        destReview.value = reviewVal;
    }
    else if (e.target.className === "deleteBtn") {
        const modal = document.getElementById("myModal");
        const span = document.getElementsByClassName("close")[0];
        const yesBtn = document.getElementById("yesBtn");
        const cancelBtn = document.getElementById("cancelBtn");

        modal.style.display = "block";

        // When the user clicks on the yes button, delete the destination and close the modal
        yesBtn.onclick = function() {
            API.deleteData("places", destId).then(displayToDOM.currentDestinations);
            modal.style.display = "none";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks on the cancel button, close the modal
        cancelBtn.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    }
    else if (e.target.className === "saveBtn") {
        let destObj = {
            cost: destCost.value,
            review: destReview.value
          };
        API.patchData("places", destId, destObj).then(displayToDOM.currentDestinations);
    }
})

