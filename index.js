//for heart section count
const HeartIcon = document.querySelectorAll(".fa-heart");
const heartCountDisplay = document.getElementById("heart-count-display");
let heartCount = parseInt(heartCountDisplay.innerText);
//for call section alert
const callButton = document.querySelectorAll(".call-btn");
const message = document.querySelectorAll(".message");
const phoneNumber = document.querySelectorAll(".number");
const servicesName = document.querySelectorAll(".service-name");
const clearBtn = document.getElementById("clear-btn");
const copyCountDisplay = document.getElementById("copy-count-display");
const copyButton = document.querySelectorAll(".copy-button");
let copyCount = parseInt(copyCountDisplay.innerText);
//coin problem soleve

//clear button function
clearBtn.addEventListener("click", function () {
  historyStore.length = 0; //
  historyContainer.innerHTML = "";
});

//history problem solve
const historyStore = [];
const historyContainer = document.getElementById("history-container");

HeartIcon.forEach(function (HeartIcon) {
  HeartIcon.addEventListener("click", function () {
    heartCount++;
    heartCountDisplay.textContent = heartCount;
  });
});
//for copy section alert
copyButton.forEach(function (copyButton, index) {
  copyButton.addEventListener("click", function () {

    const numberToCopy = phoneNumber[index].innerText;
    navigator.clipboard
      .writeText(numberToCopy)

      
        copyCount++;
        copyCountDisplay.textContent = copyCount;
        alert("Phone number copied: " + numberToCopy);
  });
});
//for call section alert
callButton.forEach(function (callButton, index) {
  callButton.addEventListener("click", function () {
    const coinCountDisplay = document.getElementById("coin-count-display");
    let coin = parseInt(coinCountDisplay.innerText);
    if (coin >= 20) {
      alert(
        "calling " +
          message[index].innerText +
          " at " +
          phoneNumber[index].innerText +
          "..."
      );
      coin -= 20;
      coinCountDisplay.innerText = coin;
      const data = {
        name: servicesName[index].innerText,
        number: phoneNumber[index].innerText,
        date: new Date().toLocaleTimeString("en-US", { hour12: true }),
      };
      historyStore.push(data);
      //   console.log("message length:", message.length);
      //   console.log("phoneNumber length:", phoneNumber.length);
      //   console.log("servicesName length:", servicesName.length);
      //history solve
      historyContainer.innerHTML = "";
      if (historyStore.length > 0) {
        for (const data of historyStore) {
          const div = document.createElement("div");
          div.innerHTML = `
                    <div
              class="flex justify-between w-full items-center bg-[#fafafa] p-1 rounded-lg"
            >
              <div class="flex flex-col leanding-tight gap-1">
                <h1
                  class="service-name text-[#111111] text-[18px] font-[600] leanding-[100%] items-left"
                >
                  ${data.name}
                </h1>
                <p
                  class="text-[#5c5c5c] text-[18px] font-[400] leanding-[100%] items-left"
                >
                  ${data.number}
                </p>
              </div>
              <div>
                <p
                  class="text-[#111111] text-[18px] font-[400] leanding-[100%] items-left"
                >
                  ${data.date}
                </p>
              </div>
            </div>
        `;
          historyContainer.appendChild(div);
        }
      }
    } else {
      alert("You don't have enough coins to make a call.");
      return;
    }
  });
});
