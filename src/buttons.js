import {$btnLowKick, $btnDefaultAttack, $btnCharcterUltimateaAttack, $logs} from './elements.js'

export function countHits(num) {
  return function countHitsButton() {
    return num++
  }
}

export function counterBtnClicks(maxCLicks, btnName) {
  const text = btnName.innerText;
  btnName.innerText = `${text} (${maxCLicks})`
  return function leftBtnClicks() {
    maxCLicks--
    if (maxCLicks == 0) {
      btnName.disabled = true
    }
    btnName.innerText = `${text} (${maxCLicks})`
    return maxCLicks;
  }
}
