window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // TODO: Complete the function
   // Grabbing of elements

   //add event listener for the button
   const btn = document.getElementById("convertButton")
   btn.addEventListener("click", convertButtonClicked)

   //grab the two input text boxes
   const celsInput = document.getElementById("cInput")
   const fahrInput = document.getElementById("fInput")

//add event listener and clear the opposite box when you are typing in your input box
   celsInput.addEventListener("input", function () { clearTextbox(fahrInput); });
   fahrInput.addEventListener("input", function () { clearTextbox(celsInput); });
}

//clears out textboxes
function clearTextBox(textInput){
   textInput.value = ""
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return degreesCelsius * 9 / 5 + 32
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return (degreesFahrenheit - 32) * 5 / 9
}

function convertButtonClicked(){

   //grab all the things so that we can manipulate
   const celsInput = document.getElementById("cInput")
   const fahrInput = document.getElementById("fInput")
   const weatherImg = document.getElementById("weatherImage")
   const errMsg = document.getElementById("errorMessage")

   //if there was an error message beforehand when calculating..clear it
   errMsg.innerHTML = ""

   //convert based on which has text
   //conver to f
   if(celsInput.value.length > 0){
      const celsius = parseFloat(celsInput.value)
      if(!isNaN(celsius)){
         fahrInput.value = convertCtoF(celsius)
      }
      else{
         errMsg.innerHTML = celsInput.value + " is not a number"
      }

   }

   //TODO: else if fahr to celsisus

   //set image based on F temp
   //I will show you have to do it with the cold image
   const fahr = parseFloat(fahrInput.value)
   // < 32 dgs cold image, > 50 warm image, anything else is cool image
   if(!isNaN(fahr)){
      if(fahr < 32.0){
         weatherImg.src = "cold.png"
         weatherImg.alt = "Cold"
      }
      
      //TODO else if for above 50 degrees with warm and else for cool
   }


}