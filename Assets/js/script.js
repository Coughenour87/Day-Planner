var submitE1 = document.querySelector("#submit");
submitE1.addEventListener("click", function(event) {
    event.preventDefault();

    var response = "Saved";
    submissionResponseE1.textContent = response;
}