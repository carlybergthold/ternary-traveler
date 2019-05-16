export const getModal = () => {
    // const modalHTML = `
    // <!-- The Modal -->
    // <div id="myModal" class="modal">

    // <!-- Modal content -->
    // <div class="modal-content">
    //     <span class="close">&times;</span>
    //     <p>Some text in the Modal..</p>
    // </div>

    // </div>
    // `
    // const container = document.querySelector("#destinationsForm");
    // const newDiv = document.createElement("div");
    // newDiv.innerHTML = modalHTML;
    // container.appendChild(newDiv);

    // Get the modal
    const modal = document.getElementById("myModal");

    // Get the button that opens the modal
    const btn = document.querySelector(".deleteBtn");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
}

