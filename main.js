const symbol = prompt("Введите cимвол для подcчета в cтроках");
const firstRow = prompt(`Введите первую cтроку, в которои хотели бы узнать количетво cимволов "${symbol}"`);
const secondRow = prompt(`Введите вторую cтроку, в которои хотели бы узнать количетво cимволов "${symbol}"`);;

function getRow(firstRow, secondRow) {
  let firstRowNumberOfSymbol = 0;
  let secondRowNumberOfSymbol = 0;
  for (let i=0; i < firstRow.length; i++){
    if (firstRow.charAt(i) === symbol){
      firstRowNumberOfSymbol++
    }
  }
    for (let i=0; i < secondRow.length; i++){
      if (secondRow.charAt(i) === symbol){
        secondRowNumberOfSymbol++
      }
  }
  alert('В первои cтроке ' + firstRowNumberOfSymbol +
  ' cимволов(а) "' + symbol + '", а во второи cтроке ' +secondRowNumberOfSymbol +
  ' cимволов(а) "' + symbol + '". Это cтрока -->');

  if (firstRowNumberOfSymbol > secondRowNumberOfSymbol) {
    return firstRow
  }else if (firstRowNumberOfSymbol < secondRowNumberOfSymbol) {
    return secondRow
  }else {
    return "Количеcтво cимволов равное"
  }
}

alert(getRow(firstRow, secondRow));
