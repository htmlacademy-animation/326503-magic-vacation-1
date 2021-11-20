export default () => {
  document.addEventListener(`DOMContentLoaded`, function () {
    document.body.classList.add(`dom-loaded`);
  });

  const path = document.querySelector(`#letter-7`);
  const pathLength = path.getTotalLength();
  console.log(pathLength);
};
