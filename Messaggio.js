function displayExitContainer() {
    let exitContainer = document.getElementById("exitContainer");
    let buttonContainer = document.getElementById("buttonContainer");
    exitContainer.style.display = "block";
    buttonContainer.style.display = "none";
}

function hideExitContainer() {
    let container = document.getElementById("exitContainer");
    container.style.display = "none";
    buttonContainer.style.display = "block";
}