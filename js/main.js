$(".services__wrapper").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
});

let options = {
  strings: ["web developer", "team lite", "dark", "web", "good luck!"],
  typeSpeed: 40,
  loop: false,
  loop: Infinity,
  backSpeed: 50,
  showCursor: false,
};

let typed = new Typed(".intro__desc", options);

lightGallery(document.querySelector(".gallary__wrapper"));

let elForm = document.querySelector(".js__form");
let elInputOne = document.querySelector(".js__input1");
let elInputTwo = document.querySelector(".js__input2");
let elInputThree = document.querySelector(".js__input3");
let elTextArea = document.querySelector(".js__textarea");
let elResult = document.querySelector(".js__result");
let elResultTwo = document.querySelector(".js__result2");
let elResultThree = document.querySelector(".js__result3");
let elResultFour = document.querySelector(".js__result4");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let elInputOneVal = elInputOne.value;
  let elInputTwoVal = elInputTwo.value;
  let elInputThreeVal = elInputThree.value;
  let elTextAreaVal = elTextArea.value;
  let allInputVal =
    elInputOneVal + elInputTwoVal + elInputThreeVal + elTextAreaVal;
  // elInputOne.value = "";
  // elInputTwo.value = "";
  // elInputThree.value = "";
  // elTextArea.value = "";

  if (allInputVal == "") {
    elResult.textContent = "Empty information, please fill the form!!";
    elResult.style.color = "red";
  } else if(elInputThreeVal <= 12) {
    elResultThree.textContent = `not enought age to continuous!`
    elResultThree.style.color = "red"
  } else {
    elResult.innerHTML = `Your name:  <b>${elInputOneVal}</b> `;
    elResultTwo.innerHTML = `Your surname:  <b>${elInputTwoVal}</b>`;
    elResultThree.innerHTML = `Your age:  <b>${elInputThreeVal}</b>`;
    elResultFour.innerHTML = `Your info:  <b>${elTextAreaVal}</b>`;
    elResult.style.color = "black"
    elResultThree.style.color = "black"
  }
});


AOS.init( {
  once: true,
});