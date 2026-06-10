const modetoggle =document.querySelector(".input");
const mainbody =document.querySelector(".black");

function updateMode(){
    if(modetoggle.checked){
mainbody.classList.remove("light-mode-active");
console.log("dark mode");
    }
    else{
        mainbody.classList.add("light-mode-active");
        console.log("light mode");
    }
}
updateMode();
modetoggle.addEventListener('change', updateMode);


// ////////////////////////////////////////////


const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.innerText; 

        
        if (buttonText === "C") {
            currentInput = ""; 
            display.innerText = ""; 
        }
        
    
        else if (buttonText === "DEL") {
            currentInput = currentInput.slice(0, -1); 
            display.innerText = currentInput || "0";
        }
        
              else if (buttonText === "=") {
            try {

                let formattedInput = currentInput.replace(/×/g, "*").replace(/÷/g, "/") .replace(/%/g, "/100");
                
                
                let result = eval(formattedInput);
                
                display.innerText = result; 
                currentInput = result.toString(); 
            } catch (error) {
                display.innerText = "Error";
                currentInput = "";
            }
        }
        
        else {
        
            if (display.innerText === "0" || display.innerText === "Error") {
                currentInput = buttonText;
            } else {
                currentInput += buttonText;}
            display.innerText = currentInput;
        }
    });
});