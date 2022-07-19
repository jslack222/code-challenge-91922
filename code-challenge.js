/*
Write function bmi that calculates body mass index 
(bmi = weight / height2).
*/

function bmi(weight, height) {
    const solution = weight / (height * height)
    if (solution <= 18.5) {
        return "Underweight"
    } else if (solution <= 25) {
        return "Normal"
    } else if (solution <= 30) {
        return "Overweight"
    } else if (solution > 30) {
        return "Obese"
    } else {
        return "Not defined"
    }
}
    console.log(bmi(80, 1.80))
