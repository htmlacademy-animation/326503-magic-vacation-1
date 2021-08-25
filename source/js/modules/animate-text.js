export default () => {
  const animateTextLetters = function (elementSelector, duration, delay) {
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

      return `<span style="transition-duration: ${duration}ms; transition-delay: ${calculatedDelay}ms;">
               ${letter}
              </span>`;
    }

    const elementToAnimate = document.querySelector(elementSelector);
    elementToAnimate.classList.add(`animated-text`);
    elementToAnimate.innerHTML = elementToAnimate.innerHTML
      .split(` `)
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
};
