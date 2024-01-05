const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".hidden");
const submitBtn = document.getElementById("submit-rating");
const ratings = document.querySelectorAll(".score-btn");
const actualRating = document.getElementById("rating");

submitBtn.addEventListener("click", () => {
    mainContainer.style.display = "none"
    thanksContainer.classList.remove("hidden")
})
ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        actualRating.innerHTML = rating.innerHTML

    })
})
