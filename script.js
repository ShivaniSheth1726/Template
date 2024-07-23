// Calculate the time string
const now = new Date();

// const ourTime = now.getHours() + ":" + now.getMinutes() + " PM GMT+5:30";
const ourTime = `${now.getHours()}:${now.getMinutes()} PM GMT+5:30`; //standard format currently used


console.log(ourTime);
// Show time on the web page
const timeEl = document.querySelector(".time");
timeEl.textContent = ourTime;