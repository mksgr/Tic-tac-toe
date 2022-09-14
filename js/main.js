const ticItems = document.querySelectorAll(".wrapper__item");
const userNames = document.querySelectorAll(".header__name");

ticItems.forEach((item, i) => {
    item.addEventListener("click", () => {
        addCrossOrCircle(item, toggleFigure(i));
        endGame(i);
    });
});


window.onload = () => {
    //enterUserName();
};

function addCrossOrCircle (cell, figure) {
    if (cell.classList.contains("circle") || cell.classList.contains("cross")) {
        console.log("Нельзя");
    } else {
        cell.classList.add(figure);
    }
}

function toggleFigure (step) {
    let cross = "cross";
    let circle = "circle";

    if (step % 2 === 0) {
        step++;
        return cross;
    } else {
        step++;
        return circle;
    }
}

function enterUserName () {
    userNames.forEach((name, i) => {
        console.log(name);
        name.innerHTML += name.innerHTML = prompt(`Имя ${i + 1} игрока`, '');
    });
}

function endGame (num) {
    if (num === 8) {
        alert ("Конец!");
    }
}


