import cardsToRender from './CardToRender';
import cardList from './utils/CreateWrapper';

export const navigationCatalog = {
  '#main': 0,
  '#actionA': 1,
  '#actionB': 2,
  '#actionC': 3,
  '#adjective': 4,
  '#animalA': 5,
  '#animalB': 6,
  '#clothes': 7,
  '#emotions': 8,
  '#score': 9,
};

export function addHashesToAddresline() {
  window.addEventListener('hashchange', () => {
    cardList.innerHTML = '';
    cardsToRender(navigationCatalog[location.hash]);
  }, false);
}
