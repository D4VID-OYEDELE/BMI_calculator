const button =document.querySelector(".btn")
button.addEventListener("click", calculateBMI)

function calculateBMI() {
    const fullName = document.querySelector(".Name").value
    let height = document.querySelector(".height").value
    let weight = document.querySelector(".weight").value
    let result = document.querySelector(".result")

    var BMI = weight/(height*height)

    BMI = BMI.toFixed(0)
    // console.log(BMI)

    if (fullName == "" || height == "" || weight == "") {
        setTimeout(() => {
            result.innerHTML ="Please fill out all fields."
            result.style.color = "red"
            setTimeout(() => {
                result.innerHTML =""
            },3000)
        },100)
    } else {
        // result.innerHTML = `Hey ${fullName} your BMI value is ${BMI}kg/m <sup>2</sup>`
        if (BMI == 0 && BMI <= 18.5) {
            result.innerHTML = `Hey ${fullName} your BMI value is ${BMI}kg/m <sup>2</sup>. You are underweight. Please eat properly and see a medical doctor.`
        } else if(BMI > 18.5 && BMI <= 24.9) {
            result.innerHTML = `Hey ${fullName} your BMI value is ${BMI}kg/m <sup>2</sup>. You are healthy. Continue your good diet.`
        } else if(BMI > 24.9 && BMI <= 29.9){
            result.innerHTML = `Hey ${fullName} your BMI value is ${BMI}kg/m <sup>2</sup>. You are overweight. Please reduce your diet and see a medical doctor.`
        }else if(BMI >= 30){
            result.innerHTML = `Hey ${fullName} your BMI value is ${BMI}kg/m <sup>2</sup>. You are obese. Seek medical attention immediately!`
        }
        
    }
}

