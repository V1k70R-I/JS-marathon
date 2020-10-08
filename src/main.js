import random from './utils.js'
import {$btnLowKick, $btnDefaultAttack, $btnCharcterUltimateaAttack, $logs} from './elements.js'
import { generateLog, writeLog4Player, writeLog4Enemy} from './logs.js'
import { player1, player2 } from './pokemonscreate.js'
import { countHits, counterBtnClicks } from './buttons.js'


export const currentCountHits = countHits(1);

const leftLowKickHits = counterBtnClicks(4, $btnLowKick)
const leftDefaultAttackHits = counterBtnClicks(100, $btnDefaultAttack)
const leftUltimateHits = counterBtnClicks(5, $btnCharcterUltimateaAttack)

$btnLowKick.addEventListener('click', function () {
  leftLowKickHits()
  const damagePerHitPlayer = player1.changeHP(random(36))
  writeLog4Player(damagePerHitPlayer)
  const damagePerHitEnemy = player2.changeHP(random(12))
  writeLog4Enemy(damagePerHitEnemy)
})

$btnDefaultAttack.addEventListener('click', function () {
  leftDefaultAttackHits()
  const damagePerHitPlayer = player1.changeHP(random(18))
  writeLog4Player(damagePerHitPlayer)
  const damagePerHitEnemy = player2.changeHP(random(18))
  writeLog4Enemy(damagePerHitEnemy)
})

$btnCharcterUltimateaAttack.addEventListener('click', function () {
  leftUltimateHits()
  const damagePerHitPlayer = player1.changeHP(random(12))
  writeLog4Player(damagePerHitPlayer)
  const damagePerHitEnemy = player2.changeHP(random(36))
  writeLog4Enemy(damagePerHitEnemy)
})
