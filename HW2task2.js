const userPhone = prompt("Введите номер телефона")

function formattedPhone(phone) {
  let resultPhoneNumber = "";
  let newPhoneNumber;

  function numberAfterCodCountry(newPhoneNumber){
    for (let i = 5; i <= 7; i++) {
      resultPhoneNumber += newPhoneNumber.charAt(i)
    }
    resultPhoneNumber += "-"
    for (let i = 8; i <= 9; i++) {
      resultPhoneNumber += newPhoneNumber.charAt(i)
    }
    resultPhoneNumber += "-"
    for (let i = 10; i < newPhoneNumber.length; i++) {
      resultPhoneNumber += newPhoneNumber.charAt(i)
    }
  }
  if (phone.length === 12) {
    if (phone.charAt(0) === "+" && phone.charAt(1) === "7"){
      resultPhoneNumber += "+7 ("
      newPhoneNumber = phone
      for (let i = 2; i <= 4; i++) {
        resultPhoneNumber += phone.charAt(i)
      }
      resultPhoneNumber += ") "
      numberAfterCodCountry(newPhoneNumber)
      return resultPhoneNumber
    }else {
      return 'Еcли вы вводите номер телефона иcпользуя 12 cимволов он должен начинатьcя на "+7"'
    }
  } else if (phone.length === 11){
    if (phone.charAt(0) === "8"){
      resultPhoneNumber += "+7 ("
      let phoneArray = phone.split("")
      phoneArray.shift()
      phoneArray.unshift("7")
      phoneArray.unshift("+")
      let newPhoneNumber = phoneArray.join("")

      for (let i = 2; i <= 4; i++) {
        resultPhoneNumber += newPhoneNumber.charAt(i)
      }
      resultPhoneNumber += ") "
      numberAfterCodCountry(newPhoneNumber)
      return resultPhoneNumber
    }else {
      return 'Еcли вы вводите номер телефона иcпользуя 11 cимволов он должен начинатьcя на "8"'
    }
  } else if (phone.length === 10) {
    let phoneArray = phone.split("")
    phoneArray.unshift("7")
    phoneArray.unshift("+")
    let newPhoneNumber = phoneArray.join("")
    resultPhoneNumber += "+7 ("
    for (let i = 2; i <= 4; i++) {
      resultPhoneNumber += newPhoneNumber.charAt(i)
    }
    resultPhoneNumber += ") "
    numberAfterCodCountry(newPhoneNumber)
    return resultPhoneNumber
  } else {
    if (phone.length > 12){
      return "Длинныи номер телефона"
    } else if (phone.length < 10) {
      return "Короткии номер телефона"
    }
  }
}

alert("Отформатированныи номер телефона " + formattedPhone(userPhone));
