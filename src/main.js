import random from './utils.js'
import {$btnLowKick, $btnDefaultAttack, $btnCharcterUltimateaAttack, $logs} from './elements.js'
import generateLog from './logs.js'
import { player1, player2 } from './pokemonscreate.js'

$btnLowKick.addEventListener('click', function () {
  player1.changeHP(random(36), function(count) {
    const log = generateLog(player1, player2, count);
    const $p = document.createElement('p');
    $p.innerText =  currentCountHits() + "." + log;
    $logs.insertBefore($p, $logs.children[0]);
  });
  player2.changeHP(random(12), function(count) {
    const log = generateLog(player2, player1, count);
    const $p = document.createElement('p');
    $p.innerText =  currentCountHits() + "." + log;
    $logs.insertBefore($p, $logs.children[0]);
  });
  $btnLowKick.innerText = leftLowKickHits("Low Kick")
})

$btnDefaultAttack.addEventListener('click', function () {
  player1.changeHP(random(18), function(count) {
    const log = generateLog(player1, player2, count);
    const $p = document.createElement('p');
    $p.innerText =  currentCountHits() + "." + log;
    $logs.insertBefore($p, $logs.children[0]);
  });
  player2.changeHP(random(18), function(count) {
    const log = generateLog(player2, player1, count);
    const $p = document.createElement('p');
    $p.innerText =  currentCountHits() + "." + log;
    $logs.insertBefore($p, $logs.children[0]);
  });
  $btnDefaultAttack.innerText = leftDefaultAttackHits("Default Attack")
})

$btnCharcterUltimateaAttack.addEventListener('click', function () {
  player1.changeHP(random(12), function(count) {
    const log = generateLog(player1, player2, count);
    const $p = document.createElement('p');
    $p.innerText =  currentCountHits() + "." + log;
    $logs.insertBefore($p, $logs.children[0]);
  });
  player2.changeHP(random(36), function(count) {
    const log = generateLog(player2, player1, count);
    const $p = document.createElement('p');
    $p.innerText =  currentCountHits() + "." + log;
    $logs.insertBefore($p, $logs.children[0]);
  });
  $btnCharcterUltimateaAttack.innerText = leftUltimateHits("Ultimate")
})

function init() {
  $btnLowKick.innerText = leftLowKickHits("Low Kick");
  $btnDefaultAttack.innerText = leftDefaultAttackHits("Default Attack");
  $btnCharcterUltimateaAttack.innerText = leftUltimateHits("Ultimate");
}

let startCount = 1;

function countHits(num) {
  return function countHitsButton() {
    return num++
  }
}

const currentCountHits = countHits(startCount);

function counterBtnClicks(btnName, maxCLicks) {
  return function leftBtnClicks(nameAttack) {
    // console.log(maxCLicks);
    if (maxCLicks == 0) {
      btnName.disabled = true
      return nameAttack +  maxCLicks--
    } else {
      return nameAttack + " ("+ maxCLicks-- + ")"
    }
  }
}

const leftLowKickHits = counterBtnClicks($btnLowKick, 5)
const leftDefaultAttackHits = counterBtnClicks($btnDefaultAttack, 100)
const leftUltimateHits = counterBtnClicks($btnCharcterUltimateaAttack, 3)

init()
