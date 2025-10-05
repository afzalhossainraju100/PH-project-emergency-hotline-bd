//for heart section count
const HeartIcon = document.querySelectorAll(".fa-heart");
const heartCountDisplay = document.getElementById("heart-count-display");
let heartCount = 0;
//for call section alert
const callButton = document.querySelectorAll(".call-btn");
const message = document.querySelectorAll(".message");
const phoneNumber = document.querySelectorAll(".number");
const servicesName = document.querySelectorAll(".service-name");
//coin problem soleve
// const coinCountDisplay = document.getElementById("coin-count-display");
// let coin = parseInt(coinCountDisplay.innerText);
// console.log(coin);

//history problem solve
const historyStore = [];
const historyContainer = document.getElementById("history-container");

HeartIcon.forEach(function(HeartIcon) {
    HeartIcon.addEventListener("click", function () {
      heartCount++;
      heartCountDisplay.textContent = heartCount;
    });
});
//for call section alert
callButton.forEach(function(callButton, index){
    callButton.addEventListener("click", function() {
        const coinCountDisplay = document.getElementById("coin-count-display");
        let coin = parseInt(coinCountDisplay.innerText);
        if(coin >=20){
        alert("calling " + message[index].innerText + " at " + phoneNumber[index].innerText+"...");
        coin -=20;
        coinCountDisplay.innerText = coin;
        const data = {
          name: servicesName[index].innerText,
          number: phoneNumber[index].innerText,
          date: new Date().toLocaleString()
        };
        historyStore.push(data);
        localStorage.setItem("callHistory", JSON.stringify(historyStore));
        console.log(historyStore);

    }else{
        alert("You don't have enough coins to make a call.");
        return ;
    }
    });

});

//history solve

