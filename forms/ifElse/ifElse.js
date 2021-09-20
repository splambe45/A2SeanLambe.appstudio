/* declares variables necessary for program*/
let firstName = prompt("Enter your first name:")
let state = prompt("Enter your state of residence in its two letter abreviasion: ")
let temperature = Number(prompt("Enter the current temperature in degrees Farenheit:"))
let messages = [
  'wear a warm coat, hat, scarf and gloves.', 
  "wear a warm coat but you won't need a hat, scarf or gloves.", 
  'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 
  'wear a warm coat, hat and gloves. Maybe a scarf too.', 
  'invalid data.']
  
/*executes output of messages based on the index of the messages array*/   
if (state == 'NE' && temperature < 32) {
    console.log(messages[0])
  } else if (state == 'NE' && temperature >= 32 && temperature < 50) {
    console.log(messages[1])
  } else if (state == 'FL' && temperature >= 32 && temperature < 50) {
    console.log(messages[2])
  } else if (state == 'FL' && temperature >= 50 && temperature < 70) {
    console.log(messages[3])
  } else {
    console.log(messages[4])
  }