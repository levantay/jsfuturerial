// Random function
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Create prototype
const Person = function (fullName, age, email, gender, height, weight) {
  this.fullName = fullName
  this.age = age
  this.email = email
  this.gender = gender
  this.height = height
  this.weight = weight
  this.calculateBMI = () => {
    return this.weight / Math.pow(this.height, 2)
  }
  this.guessHealth = () => {
    let BMI = this.calculateBMI().toFixed(1)

    if (BMI < 18.5) {
      return "Underweight"
    }
    if (18.5 <= BMI <= 24.9) {
      return "Normal weight"
    }
    if (25 <= BMI <= 29.9) {
      return "Overweight"
    }
    return "Obesity"
  }
}

// Data arrays
const dataArray = []
const limit = 10
const names = ['Jake','Lyly','Jack','Mymy','Giato','Gin','Dragon','King','Queen','KunLee']
const ages = [12, 23, 45, 21, 32]
const emails = ['jake23@gmail.com','tuoitre@gmail.com','gmail@gmail']
const genders = ["male","femele","other"]
const heights = [1.3, 1.7, 1.50, 2, 2.1]
const weights = [65, 70, 66, 100]

for (let count = 0; count < limit; count++) {
  const person = new Person(
    names[randomInt(0, 9)],
    ages[randomInt(0, 4)],
    emails[randomInt(0, 2)],
    genders[randomInt(0, 2)],
    heights[randomInt(0, 4)],
    weights[randomInt(0, 3)]
  )
  dataArray.push(person)
}

console.log(dataArray)


const addProperty = dataArray.map((obj) => {
  obj.BMI = obj.calculateBMI().toFixed(1)
  obj.healthStt = obj.guessHealth()

  return obj
})
