const $btnDefaultAttack = document.getElementById('btn-kick-default');
const $btnCharcterUltimateaAttack = document.getElementById('btn-kick-ult-character');
const $btnEnemyUltimateAttack = document.getElementById('btn-kick-ult-enemy');
const $logs = document.getElementById('logs');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character'),
  renderHP,
  changeHP,
  renderHPLife,
  renderProgressbarHP,
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy'),
  renderHP,
  changeHP,
  renderHPLife,
  renderProgressbarHP,
}

$btnDefaultAttack.addEventListener('click', function () {
  character.changeHP(damage = random(20));
  enemy.changeHP(damage = random(20));
})

$btnCharcterUltimateaAttack.addEventListener('click', function () {
  enemy.changeHP(damage = random(30));
})

$btnEnemyUltimateAttack.addEventListener('click', function () {
  character.changeHP(damage = random(30));
})

function init() {
  character.renderHP();
  enemy.renderHP();
}

function renderHP() {
  this.renderHPLife();
  this.renderProgressbarHP();
}

function renderHPLife() {
  this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
}

function renderProgressbarHP() {
  this.elProgressbar.style.width = (this.damageHP/this.defaultHP)*100 + '%';
}

function changeHP(count) {
  if (this.damageHP <= count) {
    this.damageHP = 0;
    alert('Бедныи ' + this.name + ' проиграл!');
    $btnDefaultAttack.disabled = true;
    $btnCharcterUltimateaAttack.disabled = true;
    $btnEnemyUltimateAttack.disabled = true;
    const log = this == enemy ? generateLog(this, character) : generateLog(this, enemy);
    const $p = document.createElement('p');
    $p.innerText =  log;
    $logs.insertBefore($p, $logs.children[0]);
  } else {
    this.damageHP -= count;

    const log = this == enemy ? generateLog(this, character) : generateLog(this, enemy);
    const $p = document.createElement('p');
    $p.innerText =  log;
    $logs.insertBefore($p, $logs.children[0]);
  }

  this.renderHP()
}

function random(num) {
  return Math.ceil(Math.random()*num)
}

function generateLog(firstPerson, secondPerson) {
  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. - ${damage} hp. У ${firstPerson.name} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. - ${damage}hp. У ${firstPerson.name} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. - ${damage}hp. У ${firstPerson.name} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. - ${damage}hp. У ${firstPerson.name} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. - ${damage}hp. У ${firstPerson.name} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. - ${damage}hp. У ${firstPerson.name} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. - ${damage}hp. У ${firstPerson.name} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. - ${damage}hp. У ${firstPerson.name} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. - ${damage}hp. У ${firstPerson.name} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. - ${damage}hp. У ${firstPerson.name} [${firstPerson.damageHP}/${firstPerson.defaultHP}]`
  ];

return logs[Math.floor(Math.random() * logs.length)];
}

init();
