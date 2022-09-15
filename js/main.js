const ticItems = document.querySelectorAll(".wrapper__item"),
      userNames = document.querySelectorAll(".header__name"),
      popup = document.querySelector(".popup"),
      welcomeBtn = document.querySelector(".popup__btn");

const animationTiming = {
    duration: 300,
    fill: "forwards",
};


let counter = 0;
let allWinCombination = ["012", "345", "678", "036", "147", "258", "048", "246"];
let crossStr = "";
let circleStr = "";

ticItems.forEach((item, i) => {
    item.addEventListener("click", () => {
        counter += 1;
        addCrossOrCircle(item, toggleFigure(counter));
        endGame();
        winUser(item, i);
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
        return circle;
    } else {
        return cross;
    }
}

function enterUserName () {
    userNames.forEach((name, i) => {
        console.log(name);
        name.innerHTML += name.innerHTML = prompt(`Имя ${i + 1} игрока`, '');
    });
}

function endGame () {
    if (counter === 9) {
        alert ("Конец игры!");
    }
}

function winUser (cell, num ) {
    if (cell.classList.contains("cross")) {
        crossStr += num;
    } else {
        circleStr += num;
    }
    console.log(crossStr);
    console.log(circleStr);

    whoWin(crossStr, allWinCombination);
    whoWin(circleStr, allWinCombination);
}

function whoWin (str, arr) {
    arr.forEach(item => {
        if (str.includes(item)) {
            alert(`cross win!`);
        }
    });
}


welcomeBtn.addEventListener("click", () => {
    popup.animate(
        [
            {opacity: '100%'},
            {opacity: '50%'},
            {opacity: '0%', display: 'none'}
        ], animationTiming
    );
    popup.classList.add("close");
});


