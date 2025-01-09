
document.addEventListener("scroll", () => {
const elements = document.querySelectorAll(".pudu_content");
const triggerHeight = window.innerHeight * 0.8; // Trigger when element is 80% into the viewport

elements.forEach(element => {
const elementTop = element.getBoundingClientRect().top;

if (elementTop < triggerHeight) {
element.classList.add("active"); // Add class to trigger animation
}
});
});


document.addEventListener("scroll", () => {
const elements = document.querySelectorAll(".feature-image");
const triggerHeight = window.innerHeight * 0.8; // Trigger when element is 80% into the viewport

elements.forEach(element => {
const elementTop = element.getBoundingClientRect().top;

if (elementTop < triggerHeight) {
element.classList.add("active"); // Add class to trigger animation
}
});
});


document.addEventListener("scroll", () => {
const elements = document.querySelectorAll(".pudu_image");
const triggerHeight = window.innerHeight * 0.8; // Trigger when element is 80% into the viewport

elements.forEach(element => {
const elementTop = element.getBoundingClientRect().top;

if (elementTop < triggerHeight) {
element.classList.add("active"); // Add class to trigger animation
}
});
});


document.addEventListener("scroll", () => {
const elements = document.querySelectorAll(".feature-content");
const triggerHeight = window.innerHeight * 0.8; // Trigger when element is 80% into the viewport

elements.forEach(element => {
const elementTop = element.getBoundingClientRect().top;

if (elementTop < triggerHeight) {
element.classList.add("active"); // Add class to trigger animation
}
});
});

