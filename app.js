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

    let definitive = (note1 + note2 + note3);
    let addition = (note1 + note2);

    resultTotal.textContent = definitive.toFixed(2);

    if (noteThree.value >= 1) {

        if (noteOne.value >= 1 && noteOne.value <= 5 && noteTwo.value >= 1 && noteTwo.value <= 5 && noteThree.value >= 1 && noteThree.value <= 5) {

            resultTotal.textContent = "Su nota definitiva es: " + definitive;

            if (definitive >= 3.5) {
                resultOne.textContent = "Ha ganado la asignatura";
                resultTwo.textContent = "";
                resultThree.textContent = "";
            } else {
                resultOne.textContent = "Ha perdido la asignatura";
                resultTwo.textContent = "";
                resultThree.textContent = "";
            } 
        } else {
            resultTotal.textContent = "¡No es un dato valido!";
            resultOne.textContent = "";
            resultTwo.textContent = "";
            resultThree.textContent = "";
        }
    } else {

        if (noteOne.value >= 1 && noteOne.value <= 5 && noteTwo.value >= 1 && noteTwo.value <= 5) {
    
            if (addition >= 2.1) {
            
                resultOne.textContent = "";
                resultTwo.textContent = "Para ganar necesitarias minimo: " + ((3.5 - (note1 + note2)) / 0.40).toFixed(2); 
                resultThree.textContent = "Para ganar con honores necesitarias minimo: " + ((4.6 - (note1 + note2)) / 0.40).toFixed(2);
            } else {
                resultOne.textContent = "Para recuperar necesitas: " + ((2.1 - (note1 + note2)) / 0.40).toFixed(2);
                resultTwo.textContent = "Para ganar necesitarias minimo: " + ((3.5 - (note1 + note2)) / 0.40).toFixed(2); 
                resultThree.textContent = "Para ganar con honores necesitarias minimo: " + ((4.6 - (note1 + note2)) / 0.40).toFixed(2);
            }
    
        } else {
            resultTotal.textContent = "¡No es un dato valido!";
            resultOne.textContent = "";
            resultTwo.textContent = "";
            resultThree.textContent = "";
        }
    }
}
