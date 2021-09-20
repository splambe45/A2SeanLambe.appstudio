/* declares variables necessary for program*/
let firstName1 = prompt("Enter your first name:")
let state1 = prompt("Enter your state of residence in its two letter abreviasion: ")
let temperature1 = Number(prompt("Enter the current temperature in degrees Farenheit:"))
let messages1 = [
  'wear a warm coat, hat, scarf and gloves.', 
  "wear a warm coat but you won't need a hat, scarf or gloves.", 
  'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 
  'wear a warm coat, hat and gloves. Maybe a scarf too.', 
  'invalid data.']
  
switch(state1) {
  case (state1 == 'NE' && temperature1 < 32):
    console.log(messages1[0])
    break
  case (state1 == 'NE' && temperature1 >= 32 && temperature1 < 50):
    console.log(messages1[1])
    break
  case (state1 == 'FL' && temperature1 >= 32 && temperature1 < 50):
    console.log(messages1[2])
    break
  case (state1 == 'FL' && temperature1 >= 50 && temperature1 < 70):
    console.log(messages1[3]) 
    break
  default:
    console.log(messages1[4])
  }
