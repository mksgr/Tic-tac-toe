const ticItems = document.querySelectorAll(".wrapper__item"),
      userNames = document.querySelectorAll(".header__name"),
      popup = document.querySelector(".popup"),
      welcomeBtn = document.querySelector(".popup__btn"),
      firstInName = document.querySelector(".form__name--first"),
      secondInName = document.querySelector(".form__name--second"),
      finishPopup = document.querySelector(".finish"),
      restartGame = finishPopup.querySelector(".finish__btn");

const animationTiming = {
    duration: 300,
    fill: "forwards",
};


let counter = 0;
let allWinCombination = [
    [0, 1 ,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


ticItems.forEach((item, i) => {
    item.addEventListener("click", () => {
        if (!(item.classList.contains("cross")) && !((item.classList.contains("circle")))) {
            counter++;
            console.log(counter);
        }
        
        addCrossOrCircle(item, toggleFigure(counter));
        winnerFigure(allWinCombination, counter);
    });
});


window.onload = () => {

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

function winnerFigure (combinations, count) {
    let noCombination = true;
    let result = "";
    for (let comb of combinations) {
        if (
        ticItems[comb[0]].classList.contains("cross") &&
        ticItems[comb[1]].classList.contains("cross") &&
        ticItems[comb[2]].classList.contains("cross")
        ) {
            noCombination = false;
            userNames[0].style.color = '#87fa24';
            result = `Игрок ${firstInName.value} (крестики) победил`;
            openFinishTitle(result);
        } else if (
        ticItems[comb[0]].classList.contains("circle") &&
        ticItems[comb[1]].classList.contains("circle") &&
        ticItems[comb[2]].classList.contains("circle")
        ) {
            noCombination = false;
            userNames[1].style.color = '#87fa24';
            result = `Игрок ${secondInName.value} (нолики) победил`;
            openFinishTitle(result);
        } else if (noCombination && count >= 9) {
            result = "Ничья!";
            openFinishTitle(result);
        }
    }
}

function openFinishTitle (res) {
    finishPopup.classList.remove("close");
    finishPopup.firstElementChild.innerHTML = res;

}

restartGame.addEventListener("click", () => {
    userNames[0].style.color = '#fff';
    userNames[1].style.color = '#fff';
    ticItems.forEach(item => {
        if (item.classList.contains("cross")) {
            item.classList.remove("cross");
        } else {
            item.classList.remove("circle");
        }
    });
    finishPopup.classList.add("close");
    counter = 0;
});

/* УБРАТЬ!!! */
//popup.classList.add("close");


welcomeBtn.addEventListener("click", () => {
    popup.animate(
        [
            {opacity: '100%'},
            {opacity: '50%'},
            {opacity: '0%'}
        ], animationTiming
    );
    getUserName();
    setTimeout(popClose, 500);
});

function popClose () {
    popup.classList.add("close");
}

function getUserName () {
    userNames[0].innerHTML += firstInName.value;
    userNames[1].innerHTML += secondInName.value;
}





