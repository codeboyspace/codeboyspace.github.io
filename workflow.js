var x = 0;

function myFunction() {
    if (x == 0) {
        document.getElementById("sheeee").innerHTML = "sorry, your vootukaar moved the button, try again";
        document.getElementById("button").style.marginTop = "-100%";
        document.getElementById("button").style.marginRight = "66%";
        x = x + 1;
    } else {
        document.getElementById("button").style.marginTop = "50%";
        document.getElementById("button").style.marginLeft = "72%";
        document.getElementById("sheeee").innerHTML = "haha sorry, try again";
        x = x + 1;
    }
    if(x==3){
        window.location.href='wishh.html'
    }
}
