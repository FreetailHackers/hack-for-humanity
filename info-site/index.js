var down = false;
function pullDownSchedule() {
    var targetDiv = document.getElementById("schedule-div");
    if (!down) {
        targetDiv.classList.remove("div-animation-up");
        targetDiv.classList.add("div-animation-down");
    } else {
        targetDiv.classList.remove("div-animation-down");
        targetDiv.classList.add("div-animation-up");
    }
    down = !down;
}