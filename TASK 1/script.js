// JavaScript for interactivity
document.getElementById("alertButton").addEventListener("click", function() {
    alert("Opps! Page is not Available Now");
});

document.getElementById("alertButton2").addEventListener("click", function() {
    alert("Opps! Page is not Available Now");
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        $('#navbar').css({top:"100px"});
    }
    else {
        $('#navbar').css({top:"0px"});
    }
    },false); 

    document.getElementById("submit-button").addEventListener("click", function() {
        alert("Submitted! We will Contact you Soon.");
    });