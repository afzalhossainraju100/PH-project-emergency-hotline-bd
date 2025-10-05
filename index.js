//for heart section count
const HeartIcon = document.querySelectorAll(".fa-heart");
const heartCountDisplay = document.getElementById("heart-count-display");
let heartCount = 0;
//for call section alert
const callButton = document.querySelectorAll(".call-btn");
const message = document.querySelectorAll(".message");
const phoneNumber = document.querySelectorAll(".number");


HeartIcon.forEach(function(HeartIcon) {
    HeartIcon.addEventListener("click", function () {
      heartCount++;
      heartCountDisplay.textContent = heartCount;
    });
});
//for call section alert
callButton.forEach(function(callButton, index){
    callButton.addEventListener("click", function() {
        alert("calling " + message[index].innerText + " at " + phoneNumber[index].innerText+"...");
    });

});
