import { SOUND_EFFECTS, soundEffect } from './utils/Soundeffects';

const onButtonClick = (event) => {
  if (event.target.classList.contains('categories__item-button')) {
    event.target.parentElement.classList.add('categories__item-rotate');
    event.target.classList.add('categories__item-button-rotate');
    soundEffect(SOUND_EFFECTS.clickOnCard, SOUND_EFFECTS.delayForCard);

    const onMouseLeave = () => {
      event.target.parentElement.classList.remove('categories__item-rotate');
      event.target.classList.remove('categories__item-button-rotate');
    };

    const currentId = event.target.dataset.id;
    const currentElement = document.getElementById(currentId);
    currentElement.addEventListener('mouseleave', onMouseLeave);
  }
  clearTimeout(soundEffect);
};

export default function reverseCard() {
  window.addEventListener('click', onButtonClick);
}
