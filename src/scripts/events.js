document.addEventListener("click", function(e) {
    console.log(e);
    if (e.target.className === "editBtn") {
        e.preventDefault();
        console.log("edit");
    } else if (e.target.className === "deleteBtn") {
        e.preventDefault();
        console.log("delete");
        let destId = e.target.id.split("-").pop();
        console.log(destId);
    }
})


//edit

//delete
