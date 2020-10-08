import random from './utils.js'
import { generateLog, writeLog4Player, writeLog4Enemy} from './logs.js'
import { player1, player2 } from './pokemonscreate.js'
import { countHits, counterBtnClicks } from './buttons.js'

export const currentCountHits = countHits(1);

const $control = document.querySelector('.control')

const enemyDefaultAttack = player2.attacks[0]

player1.attacks.forEach(item => {
  const $btnKick = document.createElement('button')
  $btnKick.classList.add('button')
  $btnKick.innerText = item.name;
  $control.appendChild($btnKick);
  const leftBtnClicks = counterBtnClicks(item.maxCount, $btnKick)
  $btnKick.addEventListener('click', function () {
    leftBtnClicks()
    const damagePerHitEnemy = player2.changeHP(random(item.maxDamage, item.minDamage))
    writeLog4Enemy(damagePerHitEnemy)
    const damagePerHitPlayer = player1.changeHP(random(enemyDefaultAttack.maxDamage, enemyDefaultAttack.minDamage))
    writeLog4Player(damagePerHitPlayer)
  })
});
