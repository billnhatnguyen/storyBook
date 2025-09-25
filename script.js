
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