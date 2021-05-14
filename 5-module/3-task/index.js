function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const width = carousel.offsetWidth;

  const rightButton = document.querySelector('.carousel__arrow_right');
  const leftButton = document.querySelector('.carousel__arrow_left');
  const buttons = document.querySelector('.carousel__arrow');
  const carouselInner = document.querySelector('.carousel__inner');

  const onClickRight = () => {
    carouselInner.style.transform = `translateX(-${width}px)`;
  };

  rightButton.addEventListener('click', () => {
    console.log("A");
    onClickRight();
  });

  const onClickLeft = () => {
    carouselInner.style.transform = `translateX(${width}px)`;
  };

  leftButton.addEventListener('click', () => {
    console.log("B");
    onClickLeft();
  });

}

// function hideSelf() {
//   const onClick = () => {
//     button.setAttribute('hidden', 'true');
//   };
//
//   const button = document.querySelector('.hide-self-button');
//
//   button.addEventListener('click', () => {
//     onClick();
//   });
// }
