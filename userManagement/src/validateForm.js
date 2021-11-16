// Name input validate
const nameInputValidate = (value, text) => {
  let isNameValid = true

  if (value === "") {
    text.innerHTML = `<span class = "text-danger">This text is required.</span>`
    isNameValid = false
  } else {
    text.innerHTML = `<span class = "text-success">Good job!</span>`
  }
  return isNameValid
}

// Email input validate function
const emailInputValidate = (value, text) => {
  const regExpEmail = /^[a-z]{0,9}\@[a-z]{0,9}\.com$/
  let isValidEmail = true

  if (!regExpEmail.test(value)) {
    text.innerHTML = `<span class = 'text-danger'>Your email is invalid!</span>`
    isValidEmail = false
  } else {
    text.innerHTML = `<span class = 'text-success'>Good job!</span>`
  }
  return isValidEmail
}

// Height validate
const heightValidate = (value, text) => {
  const regExpHeight = /^[\d]{0,1}\.[\d]{0,2}$/
  let isValidHeight = true

  if (!regExpHeight.test(value)) {
    text.innerHTML = `<span class = 'text-danger'>Your height is invalid!</span>`
    isValidHeight = false
  } else {
    text.innerHTML = `<span class = 'text-success'>Good job!</span>`
  }
  return isValidHeight
}

// Weight validate
const weightValidate = (value, text) => {
  const regExpWeight = /^[\d]{0,2}\.[\d]{1}$/
  let isValidWeight = true

  if (!regExpWeight.test(value)) {
    text.innerHTML = `<span class = 'text-danger'>Your weight is invalid!</span>`
    isValidWeight = false
  } else {
    text.innerHTML = `<span class = 'text-success'>Good job!</span>`
  }
  return isValidWeight
}

// Listen event from add button
const addFunction = () => {
  // Set variables
  const fullNameValue = $("fullName").value
  const textName = $("textName")
  const ageValue = $("age").value
  const emailValue = $("email").value
  const textEmail = $("textEmail")
  const heightValue =$("height").value
  const textHeight = $("textHeight")
  const weightValue = $("weight").value
  const textWeight = $("textWeight")

  const validName = nameInputValidate(fullNameValue, textName)
  const validEmail = emailInputValidate(emailValue, textEmail)
  const validHeight = heightValidate(heightValue, textHeight)
  const validWeight = weightValidate(weightValue, textWeight)

  const gender = getName("gender")
  let genderValue = ""
  gender.forEach((element) => {
    if (element.checked) {
      genderValue = element.value
    }
    return genderValue
  })

  // Validate for all data
  if (validName && validEmail && validHeight && validWeight) {
    const newData = new Person(
      fullNameValue,
      ageValue,
      emailValue,
      heightValue,
      weightValue,
      genderValue
    )

    dataArray.push(newData)

    const newArr = dataArray.map((obj) => {
      obj.BMI = obj.calculateBMI().toFixed(1)
      obj.healthStt = obj.guessHealth()

      return obj
    })

    // Remove old data
    $("tableData").remove()

    // New table
    const newTable = createTable(newArr)

    $("tableUser").append(newTable)
  }
}
