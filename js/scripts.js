console.log("hola");

const d = document,
  $accordionAnswerHidden = d.querySelectorAll(".accordion__answer");

d.addEventListener("click", (e) => {
  if (e.target.matches(".accordion__question")) {
    if (
      e.target.nextElementSibling.classList.contains("accodion__answer--show")
    ) {
      e.target.nextElementSibling.classList.remove("accodion__answer--show");
      e.target.classList.remove("accordion__question--bold");
    } else {
      $accordionAnswerHidden.forEach((el) => {
        el.classList.remove("accodion__answer--show");

        el.previousElementSibling.classList.remove("accordion__question--bold");
      });

      e.target.nextElementSibling.classList.add("accodion__answer--show");

      e.target.classList.add("accordion__question--bold");
    }
  }
});

console.log();
