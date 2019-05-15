import { displayToDOM } from "./DOM";
import { addCountries } from "./countryList";
import { saveDestination } from "./saveDest";


displayToDOM.currentDestinations();
displayToDOM.destinationForm();
addCountries();

document.querySelector("#addDestBtn").addEventListener("click", function(e) {
    e.preventDefault();
    saveDestination();
})



// As a user, I should be able to enter in an point of interest, and associate it with a place.

// Given a user has entered in all details of a point of interest
// When the user performs a gesture to save the point of interest
// Then the point of interest should be displayed in the application

// Given a user wants to change the cost of a point of interest or add/change the review to a point of interest
// When the user performs a gesture to edit the point of interest
// Then the user should be presented with a form that has the cost and review, if it's not blank, pre-filled
// And there should be an affordance to save the edited cost and review

// Given a user has saved a point of interest
// When the user visits their application
// Then all points of interest should be displayed
// And each point of interest should have an affordance to delete it

// Given a user wants to remove a previously stored point of interest
// When the user performs a gesture on the delete affordance
// Then the user should be prompted to confirm the delete

// Given a user is viewing the delete prompt When the user selects the confirmation affordance Then the point of interest should be deleted And the confirmation message should disappear And the list of points of interest should be refreshed

// Given a user is viewing the delete prompt When the user selects the cancel affordance Then the point of interest should NOT be deleted And the confirmation message should disappear