window.addEventListener("load", () => {});

const showImage = (e) => {
  const bigImage = document.getElementById("big-image");
  const smallImages = document.querySelectorAll("#small-images img");

  smallImages.forEach((smallImage) => {
    smallImage.style.borderColor = "";
  });

  bigImage.src = e.src;

  setInterval(() => {
    e.style.borderColor = "";

    if (bigImage.src == e.src) e.style.borderColor = "#163a57";

    localStorage.setItem("bigImg", bigImage.src);
  }, 10);
};

// --------------------------------------

const rating = (e) => {
  const stars = document.querySelectorAll("#stars ion-icon");

  for (let i = 0; i < stars.length; i++) {
    stars[i].style.color = "";
  }

  for (let i = 0; i <= e.id; i++) {
    stars[i].style.color = "orange";
  }

  for (let i = 0; i < stars.length; i++) {
    localStorage.setItem(`rate${i}`, stars[i].style.color);
  }
};

// --

const rating1 = (e) => {
  const stars1 = document.querySelectorAll("#stars-1 ion-icon");

  for (let i = 0; i < stars1.length; i++) {
    stars1[i].style.color = "";
  }

  for (let i = 0; i <= e.id; i++) {
    stars1[i].style.color = "orange";
  }

  for (let i = 0; i < stars1.length; i++) {
    localStorage.setItem(`rateO${i}`, stars1[i].style.color);
  }
};

// --

const rating2 = (e) => {
  const stars2 = document.querySelectorAll("#stars-2 ion-icon");

  for (let i = 0; i < stars2.length; i++) {
    stars2[i].style.color = "";
  }

  for (let i = 0; i <= e.id; i++) {
    stars2[i].style.color = "orange";
  }

  for (let i = 0; i < stars2.length; i++) {
    localStorage.setItem(`rateS${i}`, stars2[i].style.color);
  }
};

// --------------------------------------
let indx = localStorage.getItem("bigImg") != null ? -1 : 0;
window.onload = () => {
  const inputs = document.querySelectorAll("input");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = localStorage.getItem(`input${i}`);
  }

  // -----------------

  const stars = document.querySelectorAll("#stars ion-icon");
  const stars1 = document.querySelectorAll("#stars-1 ion-icon");
  const stars2 = document.querySelectorAll("#stars-2 ion-icon");

  for (let i = 0; i < stars.length; i++) {
    stars[i].style.color = localStorage.getItem(`rate${[i]}`);
  }

  // --

  for (let i = 0; i < stars1.length; i++) {
    stars1[i].style.color = localStorage.getItem(`rateO${[i]}`);
  }

  // --

  for (let i = 0; i < stars2.length; i++) {
    stars2[i].style.color = localStorage.getItem(`rateS${[i]}`);
  }

  // -----------------

  const bigImage = document.getElementById("big-image");
  const smallImages = document.querySelectorAll("#small-images img");

  bigImage.src =
    localStorage.getItem("bigImg") != null
      ? localStorage.getItem("bigImg")
      : smallImages[0].src;

  smallImages.forEach((smallImage) => {
    if (bigImage.src == smallImage.src)
      smallImage.style.borderColor = "#163a57";
  });

  //get lifeBar width
  const lifeBar = document.getElementById("life-bar");
  const lifeValues = document.querySelectorAll("#life-text input");

  let lifePercent = (lifeValues[0].value * 100) / lifeValues[1].value;

  lifeBar.style.width = lifePercent + "%";
};

const lifeChange = () => {
  const lifeBar = document.getElementById("life-bar");
  const lifeValues = document.querySelectorAll("#life-text input");

  //max life first
  if (lifeValues[1].value == "") {
    lifeValues[0].value = "";
    alert("Vida maxima primeiro");
  }

  //limit chars
  lifeValues.forEach((lifeValue) => {
    if (lifeValue.value.length > 4)
      lifeValue.value = lifeValue.value.substr(0, 4);
  });
  //

  //check if max life value is bigger or equal to current life
  if (parseInt(lifeValues[0].value) > parseInt(lifeValues[1].value))
    lifeValues[0].value = lifeValues[0].value.slice(0, -1);
  //

  //change percent
  let lifePercent = (lifeValues[0].value * 100) / lifeValues[1].value;

  lifeBar.style.width = lifePercent + "%";
  //

  //check if is negative
  lifeValues.forEach((lifeValue) => {
    lifeValue.value = lifeValue.value.replace("-", "");
  });
  //

  //localStorage save
  inputSave();
};

const inputSave = () => {
  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    localStorage.setItem(`input${i}`, inputs[i].value);
  }
};

// --------------------------------------

let bigImage = document.getElementById("big-image");

bigImage.onclick = () => {
  const imgArray = [
    "../RPG-record/img/archer.jpg",
    "../RPG-record/img/knight.jpg",
    "../RPG-record/img/monk.jpg",
    "../RPG-record/img/witch.jpg",
  ];

  if (window.innerWidth <= 620) {
    indx++;
    if (indx >= imgArray.length) indx = 0;

    console.log(indx);
    bigImage.src = imgArray[indx];

    if (bigImage.src == imgArray[indx]) indx = 0;

    localStorage.setItem("bigImg", bigImage.src);
  }
};
