const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector("#close-modal");
const authBtn = document.querySelector("#auth-btn");
const newsCards = document.querySelector(".news-cards");
const cards = [1, 2, 3];

function toggleModal(type) {
  if (type === "show") modal.style.display = "block";
  else modal.style.display = "none";
}
authBtn.addEventListener("click", () => toggleModal("show"));
closeModalBtn.addEventListener("click", () => toggleModal("hide"));

function createCard(seconds) {
  const container = document.createElement("div");
  container.classList.add("card");

  const img = document.createElement("img");
  img.src = "./assets/Rectangle 5.png";

  const author = document.createElement("p");
  author.textContent = "Sarah Hogward";
  const title = document.createElement("h2");
  title.textContent = "Space tourism takes giant leap forward";
  const description = document.createElement("h3");
  description.textContent =
    "Commercial space travel inches closer to reality as industry leaders announce successful test flights and expedited timelines for space tourism ventures. With innovative spacecraft designs and robust s...";

  const info = document.createElement("div");
  info.classList.add("info");

  const expiresIn = document.createElement("p");
  expiresIn.textContent = `This card will disappear in ${seconds} seconds`;

  const expirationTimer = setInterval(() => {
    if (seconds === 1) {
      clearInterval(expirationTimer);
      expiresIn.textContent = "The card has timed out";
      expiresIn.style.color = "#ff8080b3";
    } else {
      seconds--;
      expiresIn.textContent = `This card will disappear in ${seconds} seconds`;
    }
  }, 1000);

  const moreInfo = document.createElement("div");
  moreInfo.classList.add("more-info");

  const moreInfoText = document.createElement("p");
  moreInfoText.textContent = "See more";
  const moreInfoArrow = document.createElement("img");
  moreInfoArrow.src = "./assets/ep_arrow-right.png";

  moreInfo.append(moreInfoText, moreInfoArrow);
  info.append(expiresIn, moreInfo);
  container.append(img, author, title, description, info);
  newsCards.append(container);
}

cards.forEach((card) => {
  const cardDuration = Math.ceil(Math.random() * 20);
  createCard(cardDuration);
});
