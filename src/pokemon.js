import { player1, player2 } from './pokemonscreate.js'
import {startGame} from './main.js'

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
    const $control = document.querySelector('.control')
    if (this.hp.current <= count) {
      this.hp.current = 0;
      if (this.name === 'Pikachu') {
        const allButtons = document.querySelectorAll('.control .button');
        allButtons.forEach($item => $item.remove());
        const $btnRestartGame = document.createElement('button')
        $btnRestartGame.classList.add('button')
        $btnRestartGame.innerText = 'Restart Game!!!';
        $control.appendChild($btnRestartGame);
        $btnRestartGame.addEventListener('click', function () {
          $btnRestartGame.remove()
        })
      } else if (this.name === 'Charmander') {
        console.log("Ты победил");
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
