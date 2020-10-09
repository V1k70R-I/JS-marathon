import { player1, player2 } from './pokemonscreate.js'
import {currentCountHits} from './main.js'

const $logs = document.getElementById('logs')

function generateLog(whoDamaged, whoHit, count) {
  const { name, hp: { current, total} } = whoDamaged;
  const { name: enemyName } = whoHit;

  const logs = [
    `${name} вспомнил что-то важное, но неожиданно ${enemyName}, не помня себя от испуга, ударил в предплечье врага. - ${count}  hp. У ${name} [${current}/${total}]`,
    `${name} поперхнулся, и за это ${enemyName} с испугу приложил прямой удар коленом в лоб врага. - ${count} hp. У ${name} [${current}/${total}]`,
    `${name} пришел в себя, но неожиданно ${enemyName} случайно нанес мощнейший удар. - ${count} hp. У ${name} [${current}/${total}]`,
    `${name} поперхнулся, но в это время ${enemyName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. - ${count} hp. У ${name} [${current}/${total}]`,
    `${name} удивился, а ${enemyName} пошатнувшись влепил подлый удар. - ${count} hp. У ${name} [${current}/${total}]`,
    `${name} высморкался, но неожиданно ${enemyName} провел дробящий удар. - ${count} hp. У ${name} [${current}/${total}]`,
    `${name} пошатнулся, и внезапно наглый ${enemyName} беспричинно ударил в ногу противника. - ${count} hp. У ${name} [${current}/${total}]`,
    `${name} расстроился, как вдруг, неожиданно ${enemyName} случайно влепил стопой в живот соперника. - ${count} hp. У ${name} [${current}/${total}]`,
    `${name} забылся, но в это время наглый ${enemyName}, приняв волевое решение, неслышно подойдя сзади, ударил. - ${count} hp. У ${name} [${current}/${total}]`,
    `${name} пытался что-то сказать, но вдруг, неожиданно ${enemyName} со скуки, разбил бровь сопернику. - ${count} hp. У ${name} [${current}/${total}]`
  ];

return logs[Math.floor(Math.random() * logs.length)];
}

function writeLog(whoDamaged, whoHit) {
  return function writeLog4Selectors(damage) {
    const log = generateLog(whoDamaged, whoHit, damage);
    const $p = document.createElement('p');
    $p.innerText =  currentCountHits() + "." + log;
    $logs.insertBefore($p, $logs.children[0]);
  }
}

export const writeLog4Player = writeLog(player1, player2)
export const writeLog4Enemy = writeLog(player2, player1)
