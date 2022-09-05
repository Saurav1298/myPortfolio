document.getElementById("toggleSwitch").onclick = function () {
    myFunction()
};

function myFunction() {
    let color = document.body.style.background;
    let col = document.getElementsByClassName("textcolor");


    if (color === 'black') {
        document.body.style.background = "none";

        for (let i = 0; i < col.length; i++) {
            col[i].style.color = 'black';
        }
    }
    else {
        document.body.style.background = "black";

        for (let i = 0; i < col.length; i++) {
            col[i].style.color = 'white';
        }

    }

}

