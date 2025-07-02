
//
const myBay = 15;
const myOne = (myBay === 15);
if (myOne) {
    console.log ("Hi my world!")
} else if (myOne !== 13) {
    console.log("Good bay, my world")
} else {
    console.log("Not connect")
}
//


function show() {
    document.getElementById("secret").innerHTML = "28 мая 1998 г.";
}

function text() {
    document.getElementById("123").innerHTML= "Fuck you english";
}

function otpravit() {
    const paragraph = document.getElementById("message");
    const usertext = document.getElementById("pojelaniya").value;
    paragraph.innerHTML = usertext;
}