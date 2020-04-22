/* eslint-disable no-restricted-globals */

import { cardList } from './CreateWrapper';
import { SOUND_EFFECTS, soundEffect } from './Soundeffects';
import check from './answers';

const button = document.querySelector('.start');
const toggler = document.querySelector('.toggler');
const answers = document.querySelector('.answers');

export default function showTotalPage(isLose) {
  toggler.style.display = 'none';
  cardList.innerHTML = '';
  button.innerText = 'go to main page';
  const listItem = document.createElement('div');
  listItem.classList.add('result');
  if (!isLose) {
    listItem.innerHTML = '&#128568;<br>you win!';
    cardList.append(listItem);
    soundEffect(SOUND_EFFECTS.win, SOUND_EFFECTS.delayForGame);
  }
  if (isLose) {
    listItem.innerHTML = `&#128575;<br>
    try again...<br>
    wrong answers: ${check.wrongAnswersCounter}`;
    cardList.append(listItem);
    soundEffect(SOUND_EFFECTS.fail, SOUND_EFFECTS.delayForGame);
  }
  button.addEventListener('click', () => {
    location.hash = '#main';
    button.classList.remove('start_show');
    button.setAttribute('disabled', 'disabled');
    answers.classList.remove('answers_show');
    answers.innerText = '';
  });
}
