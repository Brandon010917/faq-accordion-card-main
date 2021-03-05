const d = document,
  $accordionAnswerHidden = d.querySelectorAll(".accordion__answer"),
  $illustrationBox = d.querySelector(".illustration__box");

d.addEventListener("click", (e) => {
  if (e.target.matches(".accordion__question")) {
    if (
      e.target.nextElementSibling.classList.contains("accodion__answer--show")
    ) {
      e.target.nextElementSibling.classList.remove("accodion__answer--show");
      e.target.classList.remove(
        "accordion__question--bold",
        "accordion__question--rotate"
      );
    } else {
      $accordionAnswerHidden.forEach((el) => {
        if (el.classList.contains("accodion__answer--show")) {
          el.classList.remove("accodion__answer--show");
        }

        el.previousElementSibling.classList.remove(
          "accordion__question--bold",
          "accordion__question--rotate"
        );
      });

      e.target.nextElementSibling.classList.add("accodion__answer--show");

      e.target.classList.add(
        "accordion__question--bold",
        "accordion__question--rotate"
      );
    }
  }
});

d.addEventListener("mouseover", (e) => {
  if (e.target.matches(".accordion__question")) {
    $illustrationBox.classList.add("illustration__box--translate");
  } else {
    $illustrationBox.classList.remove("illustration__box--translate");
  }
});
