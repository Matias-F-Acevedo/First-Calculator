// inputs
const currentValue = document.getElementById("current-value");
const previousValue = document.getElementById("previous-value");
// buttton (numbers, operator and equal)
const button = document.querySelectorAll("button")
const numbersButtons =document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal")



button.forEach(element =>{
    element.addEventListener("click",()=> {

        let valor = element.value

        switch (valor) {

            case "equal":
                if(currentValue.value !== ""){
        
                function evaluaArimetica(fn) {
                    return new Function('return ' + fn)();
                   }

                let resultado = evaluaArimetica(previousValue.value + currentValue.value)
                if(resultado == "Infinity"){
                    previousValue.value ="Cannot divide by zero"

                }else {
                    previousValue.value = previousValue.value + currentValue.value + element.textContent + resultado;
                }
                currentValue.value =""
                }
            break;

            case "deleteAll":
                previousValue.value = ""
                currentValue.value = ""
            break;

            case "delete":
                if(currentValue.value !== ""){
                    currentValue.value = currentValue.value.substring(0,currentValue.value.length-1 );
                }
            break;

            case "operator":

                if(currentValue.value == ""){
                    previousValue.value =  previousValue.value.substring(0,previousValue.value.length-1 )+ element.textContent
                }
                else {
                    previousValue.value = previousValue.value + currentValue.value+ element.textContent 
      
                    currentValue.value =""
                }
            break;

            case "number":
                currentValue.value = currentValue.value + element.textContent
            break;

            default:
                console.log("Error case: default");
            break;
        }
    
})
})    


















