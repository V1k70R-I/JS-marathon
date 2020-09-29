const $btnDefaultAttack = document.getElementById('btn-kick-default');
const $btnCharcterUltimateaAttack = document.getElementById('btn-kick-ult-character');
const $btnEnemyUltimateAttack = document.getElementById('btn-kick-ult-enemy');

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
  character.changeHP(random(10));
  enemy.changeHP(random(10));
})

$btnCharcterUltimateaAttack.addEventListener('click', function () {
  enemy.changeHP(random(20));
})

$btnEnemyUltimateAttack.addEventListener('click', function () {
  character.changeHP(random(20));
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
  if (this.damageHP < count) {
    this.damageHP = 0;
    alert('Бедныи ' + this.name + ' проиграл!');
    $btnDefaultAttack.disabled = true;
    $btnCharcterUltimateaAttack.disabled = true;
    $btnEnemyUltimateAttack.disabled = true;
  }else {
      this.damageHP -= count;
  }

  this.renderHP()
}

function random(num) {
  return Math.ceil(10+Math.random()*num)
}

init();
