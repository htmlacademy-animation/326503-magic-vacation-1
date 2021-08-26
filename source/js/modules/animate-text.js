export default () => {
  const animateTextLetters = function (
      elementSelector,
      duration,
      delay,
      initDelay = 0
  ) {
    function generateDelay(offset, index) {
      if (index % 3 === 2) {
        return offset;
      }

      if (index % 3 === 1) {
        return offset + delay;
      }

      if (index % 3 === 0) {
        return offset + delay * 2;
      }

      return offset + delay * 3;
    }

    function createLetterElement(letter, letterIndex, wordIndex) {
      if (letter === ` `) {
        return ` `;
      }

      const calculatedDelay =
        generateDelay(delay, letterIndex) + (wordIndex * duration) / 2;

      return `<span style="transition-duration: ${duration}ms; transition-delay: ${calculatedDelay + initDelay}ms;">
               ${letter}
              </span>`;
    }

    const elementToAnimate = document.querySelector(elementSelector);
    elementToAnimate.classList.add(`animated-text`);
    elementToAnimate.innerHTML = elementToAnimate.innerHTML
      .split(`&nbsp;`)
      .map(
          (word, wordIndex) =>
            `<span>
              ${word
                .split(``)
                .map((letter, letterIndex) =>
                  createLetterElement(letter, letterIndex, wordIndex)
                )
                .join(``)}
            </span>`
      )
      .join(` `);
  };

  animateTextLetters(`.intro__title`, 500, 70);
  animateTextLetters(`.intro__date`, 400, 70, 800);
  animateTextLetters(`.slider__item-title`, 400, 70);
  animateTextLetters(`.prizes__title`, 400, 70);
  animateTextLetters(`.rules__title`, 400, 70);
  animateTextLetters(`.game__title`, 400, 70);
};
