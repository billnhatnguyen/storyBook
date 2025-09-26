
const rocket = document.getElementById("rocket");
if (rocket) {
    rocket.addEventListener("click", () => {
        rocket.style.transform = "translateX(100vh)";

        setTimeout(() => {
            window.location.href = "secondPage.html";
        }, 1000);
    });
}

const icon = document.getElementById("icon");
if (icon) {
  icon.addEventListener("click", () => {
    icon.classList.add("spin");

    // Remove the class after animation so it can spin again if needed
    icon.addEventListener("animationend", function handler() {
      icon.classList.remove("spin");
      icon.removeEventListener("animationend", handler);
      window.location.href = "thirdPage.html";
    });
  });
}

const cherry = document.getElementById("cherry");
if (cherry) {  
  cherry.addEventListener("click", () => {

  cherry.addEventListener(
    "animationend",
    () => {
      window.location.href = "fourthPage.html";
    },
    { once: true }
  );
    cherry.classList.add("slide-out");

  });
}

const finalGo = document.getElementById("finalGo");

if (finalGo) {  
  finalGo.addEventListener("click", () => {
    
    finalGo.classList.add("spin"); 

    finalGo.addEventListener(
      "animationend",
      () => {
        window.location.href = "fifthPage.html"; 
      },
      { once: true } 
    );
  });
}