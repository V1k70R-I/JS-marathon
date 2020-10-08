import { player1, player2 } from './pokemonscreate.js'

class Selectors {
  constructor (name) {
    this.elHP = document.getElementById(`health-${name}`);
    this.elProgressbar = document.getElementById(`progressbar-${name}`);
  }
}

class Pokemon extends Selectors {
  constructor({name, hp, type, selectors, attacks = []}){
    super(selectors);

    this.name = name;
    this.hp = {
      current: hp,
      total: hp,
    };
    this.type = type;
    this.attacks = attacks;

    this.renderHP();
  }

  changeHP = (count) => {
    if (this.hp.current <= count) {
      this.hp.current = 0;
      if (this.name === 'Pikachu') {
        alert('ТЫ ПРОИГРАЛ!!!')
      } else if (this.name === 'Charmander') {
        alert('ТЫ ПОБЕДИЛ!!!  ')
      }
    }else {
      this.hp.current -= count;
    }

    this.renderHP();
    return count;
  }
  renderHP = () => {
    this.renderHPLife();
    this.renderProgressbarHP();
  }

  renderHPLife = () => {
    const { elHP, hp: { current, total} } = this;

    elHP.innerText = current + '/' + total;
  }

  renderProgressbarHP = () => {
    const { hp: { current, total}, elProgressbar } = this;
    const procent = current / (total/100);
    elProgressbar.style.width = procent + '%';
  }
}

export default Pokemon;
