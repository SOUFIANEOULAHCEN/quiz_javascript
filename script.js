let divs = [];
let start_div = document.getElementById("start_div");
let answers = document.querySelectorAll(".answers");
let score = 0;
let startTime;

for (let j = 1; j <= 9; j++) {
  let div = document.getElementById(`div_${j}`);
  divs.push(div);
}

start_div.addEventListener("click", () => {
  start_div.classList.add("hide");
  divs[0].classList.remove("hide");
  startTime = new Date(); 
});
answers.forEach((answer) => {
  answer.addEventListener("click", (event) => {
    let currentIndex;
    for (let i = 0; i < divs.length; i++) {
      if (!divs[i].classList.contains("hide")) {
        currentIndex = i;
        break;
      }
    }

    if (event.target.id === "true") {
      score++; 
      event.target.classList.remove("btn-dark");
      event.target.classList.add("btn-success");
    } else {
      event.target.classList.remove("btn-dark");
      event.target.classList.add("btn-danger");
    }

    setTimeout(() => toDiv(currentIndex + 1), 500); // Call toDiv with currentIndex + 1

    if (currentIndex === divs.length - 2) {
      let final = document.getElementById("final");
      final.classList.remove("hide");
      let endTime = new Date();
      let elapsedTime = (endTime - startTime) / 1000;
      final.textContent = `Final Score: ${score}/8 | Time: ${elapsedTime.toFixed(
        2
      )} seconds`;
    }
  });
});

function toDiv(currentIndex) {
  divs[currentIndex - 1].classList.add("hide");
  if (currentIndex < divs.length) divs[currentIndex].classList.remove("hide");
}
