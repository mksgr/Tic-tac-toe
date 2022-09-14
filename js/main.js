const ticItems = document.querySelectorAll(".wrapper__item");

ticItems.forEach(item => {
    item.addEventListener("click", () => {
        addCrossOrCircle(item, "circle");
    });
});

function addCrossOrCircle (cell, figure) {
    if (cell.classList.contains("circle") || cell.classList.contains("cross")) {
        console.log("Нельзя");
    } else {
        cell.classList.add(figure);
    }
}

function toggleFigure () {
    let cross = "cross";
    let circle = "circle";

}

console.log(toggleFigure());

