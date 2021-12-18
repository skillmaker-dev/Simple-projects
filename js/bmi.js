let heightRange = document.querySelector("#height-range");
let weightRange = document.querySelector("#weight-range");
let heightDiv = document.querySelector(".height-value");
let weightDiv = document.querySelector(".weight-value");
let male = document.querySelector(".gender__male");
let female = document.querySelector(".gender__female");
let calculateBtn = document.querySelector(".calculate");
let closeBtn = document.querySelector(".close-btn");
let popupPanel = document.querySelector(".popup-container");
let popup = document.querySelector(".popup");
let result = document.querySelector(".bmi-result-calculated");
let weightDescription = document.querySelector(".weight-description");
let maleIsSelected = false;
let femaleIsSelected = false;

heightRange.addEventListener("input",function() {
    heightDiv.innerText = heightRange.value + "Cm";
});

weightRange.addEventListener("input",function() {
    weightDiv.innerText = weightRange.value + "Kg";
});

male.addEventListener("click",function() {
    male.classList.add("gender-selected");
    female.classList.remove("gender-selected");
    
    maleIsSelected = true;
    femaleIsSelected = false;
});

female.addEventListener("click",function() {
    female.classList.add("gender-selected");
    male.classList.remove("gender-selected");
    femaleIsSelected = true;
    maleIsSelected = false;
});


calculateBtn.addEventListener("click",function() {
    popup.classList.toggle("show-popup");
    popupPanel.classList.toggle("show-popup");
    let bmiResult = calculateBmi(heightRange.value,weightRange.value);
    result.innerText = bmiResult;
    
    if(bmiResult < 16)
        weightDescription.innerText = "Severe Thinness";
    else if(bmiResult >= 16 && bmiResult <=17)
        weightDescription.innerText = "Moderate Thinness";
    else if(bmiResult > 17 && bmiResult <=18.5)
        weightDescription.innerText = "Mild Thinness";
    else if(bmiResult > 18.5 && bmiResult <=25)
        weightDescription.innerText = "Normal";
    else if(bmiResult > 25)
        weightDescription.innerText = "Overweight";
        

})

closeBtn.addEventListener("click",function() {
    popup.classList.toggle("show-popup");
    popupPanel.classList.toggle("show-popup");
})

function calculateBmi(height,weight)
{
    let heightM = height / 100;
    return (weight/(heightM*heightM)).toFixed(2);
}