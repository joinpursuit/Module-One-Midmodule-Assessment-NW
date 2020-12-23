/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise
* @param {number} temp - The current temperature
* @returns {string} - A message about the temperature
*/
const temperatureMessage = (temp) => {
  let message = ""
  if (temp < 32){
    message = message + "It's freezing!"
  } else {
    message = message + "It's alright" 
  }
  return message
}

/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise. The implementation must use a ternary.
* @param {number} temp - The current temperatur
* @returns {string} - A message about the temperature
*/
const temperatureMessageUsingTernary = (temp) => {
  let tempMessage = temp < 32 ? `It's freezing!`:`It's alright`
  return tempMessage
}


/** Returns "You are a senior" if the age is 65 or older, "You are an adult" if the age is 18 or older, and "You are a minor" otherwise.
* @param {number} age - The age of the user
* @returns {string} - A message about their age
*/
const ageMessage = (age) => {
  let senior = age >= 65
  let adult = age >= 18
  let minor = age < 18
  switch(true){
    case senior:
      return "You are a senior";
      case adult:
        return "You are an adult"
        case minor:
          return "You are a minor"
  }
}


module.exports = {
  temperatureMessage,
  temperatureMessageUsingTernary,
  ageMessage
}
