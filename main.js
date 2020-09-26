const $btnDefaultAttack = document.getElementById('btn-kick-default');
const $btnCharcterUltimateaAttack = document.getElementById('btn-kick-ult-character');
const $btnEnemyUltimateAttack = document.getElementById('btn-kick-ult-enemy');

const character = {
  name: 'Pikachu',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-character'),
  elProgressbar: document.getElementById('progressbar-character')
}

const enemy = {
  name: 'Charmander',
  defaultHP: 100,
  damageHP: 100,
  elHP: document.getElementById('health-enemy'),
  elProgressbar: document.getElementById('progressbar-enemy')

}

$btnDefaultAttack.addEventListener('click', function () {
  changeHP(random(10),character);
  changeHP(random(10),enemy);
})

$btnCharcterUltimateaAttack.addEventListener('click', function () {
  changeHP(random(20),enemy);
})

$btnEnemyUltimateAttack.addEventListener('click', function () {
  changeHP(random(20), character);
})

function init() {
  console.log('Start Game!');
  renderHP(character);
  renderHP(enemy);
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function renderHPLife(person) {
  person.elHP.innerText = person.damageHP + '/' + person.defaultHP;
}

function renderProgressbarHP(person) {
  person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert('Бедныи ' + person.name + ' проиграл!');
    $btnDefaultAttack.disabled = true;
    $btnCharcterUltimateaAttack.disabled = true;
    $btnEnemyUltimateAttack.disabled = true;
  }else {
      person.damageHP -= count;
  }

  renderHP(person)
}

function random(num) {
  return Math.ceil(10+Math.random()*num)
}

init();
