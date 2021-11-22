export default () => {
  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = document.querySelectorAll(`.screen--result`);
  if (results.length) {
    for (let i = 0; i < showResultEls.length; i++) {
      showResultEls[i].addEventListener(`click`, function () {
        let target = showResultEls[i].getAttribute(`data-target`);
        let titleAnimations = document.querySelectorAll(`#${target}-title animate`);
        let titleAnimationTransforms = document.querySelectorAll(`#${target}-title animateTransform`);

        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        let targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute(`id`) === target;
        });

        targetEl[0].classList.remove(`screen--hidden`);
        setTimeout(() => {
          targetEl[0].classList.add(`screen--show`);
        }, 10);

        if (target !== `result3`) {
          titleAnimations.forEach((animation) => animation.beginElement());
        } else {
          let TIMEOUT = 50;
          titleAnimations.forEach((animation, index) => {
            setTimeout(() => {
              animation.beginElement();
              titleAnimationTransforms[index].beginElement();
            }, TIMEOUT);
            TIMEOUT += 50;
          });
        }

      });
    }

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();
      });
    }
  }
};
