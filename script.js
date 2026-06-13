setTimeout(() => {

    document
    .getElementById("enterBtn")
    .classList.add("show-btn");

}, 3000);

document
.getElementById("enterBtn")
.addEventListener("click", () => {

    window.location.href = "welcome.html";

});
function showScreen2(){

    document.getElementById("screen1").classList.add("hidden");

    document.getElementById("screen2").classList.remove("hidden");

    setTimeout(() => {

        document.getElementById("screen2").classList.add("hidden");

        document.getElementById("screen3").classList.remove("hidden");

    }, 5000);
}


function showScreen4(){

    document.getElementById("screen3").classList.add("hidden");

    document.getElementById("screen4").classList.remove("hidden");

}


function showFinal(){

    document.getElementById("screen4").classList.add("hidden");

    document.getElementById("finalScreen").classList.remove("hidden");

}

function goBackToScreen4() {

    document.getElementById("finalScreen").classList.add("hidden");

    document.getElementById("screen4").classList.remove("hidden");
}