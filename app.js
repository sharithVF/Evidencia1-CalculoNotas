const noteOne = document.querySelector(".noteOne");
const noteTwo = document.querySelector(".noteTwo");
const noteThree = document.querySelector(".noteThree");

const resultTotal = document.querySelector(".resultTotal");
const resultOne = document.querySelector(".resultOne");
const resultTwo = document.querySelector(".resultTwo");
const resultThree = document.querySelector(".resultThree");

const btnCalculate = document.querySelector(".btnCalculate");

btnCalculate.addEventListener("click", operation);

function operation() {
    
    let note1 = (noteOne.value * 0.30);
    let note2 = (noteTwo.value * 0.30);
    let note3 = (noteThree.value * 0.40);

    let addition = (note1 + note2 + note3);

    resultTotal.textContent = addition;

    // if (noteOne.value >= 1 || noteOne.value <= 5 && noteTwo.value >= 1 || noteTwo.value <= 5 && noteThree.value >= 1 || noteThree.value <= 5) {

        // if (addition <= 2.1 || addition <= 3.5 || addition <= 4.6) {
        
        //     resultOne.textContent = "Si deseas recuperar, necesitas: " + ((2.1 - (note1 + note2)) / 0.40).toFixed(2);
        //     resultTwo.textContent = "Para ganar necesitarias minimo: " + ((3.5 - (note1 + note2)) / 0.40).toFixed(2); 
        //     resultThree.textContent = "Para ganar con honores necesitarias minimo: " + ((4.6 - (note1 + note2)) / 0.40).toFixed(2);
        // }

        if (addition > 0 && addition <= 2.0) {

            // resultTotal.textContent = "Perdió la asignatura";
            resultOne.textContent = "Perdió la asignatura";
            resultTwo.textContent = "";
            resultThree.textContent = "";
    
        } else if (addition >= 2.1 && addition <= 3.4) {
    
            // resultTotal.textContent = "Perdió la asignatura pero tiene oportunidad de recuperar";
            resultOne.textContent = "Perdió la asignatura pero tiene oportunidad de recuperar";
            resultTwo.textContent = "Para ganar necesitarias minimo: " + ((3.5 - (note1 + note2)) / 0.40).toFixed(2);
            resultThree.textContent = "Para ganar con honores necesitarias minimo: " + ((4.6 - (note1 + note2)) / 0.40).toFixed(2)
    
        } else if (addition >= 3.5 && addition <= 4.5) {
    
            // resultTotal.textContent = "";
            resultOne.textContent = "";
            resultTwo.textContent = "Aprobó la asignatura de manera satisfactoria"
            resultThree.textContent = "Para ganar con honores necesitarias minimo: " + ((4.6 - (note1 + note2)) / 0.40).toFixed(2);
    
        } else if (addition >= 4.6 && addition <= 5.0) {
    
            // resultTotal.textContent = "";
            resultOne.textContent = "";
            resultTwo.textContent = "";
            resultThree.textContent = "Aprobó la asignatura y será reconocido con honores";
        }

    // } else {
    //     resultTotal.textContent = "¡No es un dato valido!";
    // }
}
