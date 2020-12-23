/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise
* @param {number} temp - The current temperature
* @returns {string} - A message about the temperature
*/
function temperatureMessage(temp = 32) {
    if(temp < 32 ){
      return "It's freezing!";
    } else {
      return "It's alright";
    }
}

/** Returns "It's freezing!" if the temperature is below 32, and "It's alright" otherwise. The implementation must use a ternary.
* @param {number} temp - The current temperatur
* @returns {string} - A message about the temperature
*/
const temperatureMessageUsingTernary = (temp) => {
      return (temp <= 31? "It's freezing!" : "It's alright");
}


/** Returns "You are a senior" if the age is 65 or older, "You are an adult" if the age is 18 or older, and "You are a minor" otherwise.
* @param {number} age - The age of the user
* @returns {string} - A message about their age
*/
const ageMessage = (age) => {
     if(age => 65) {
       return "You are a senior";
     } else if(age => 18) {
       return "You are an adult";
     } else if(age <= 18){      
       return "You are a minor";
     } 
       
     

}

module.exports = {
  temperatureMessage,
  temperatureMessageUsingTernary,
  ageMessage
}
