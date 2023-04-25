const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

//Recorro todos los botones
buttons.forEach((item) => {
    item.onclick = () =>{
        if (item.id == "clear"){
            display.innerHTML=""; //Borro texto
        }else if (item.id == "backspace") {
            let string = display.innerHTML.toString(); //convierte a una cadena de caracteres
            display.innerHTML=string.substring(0,string.length-1)//El substring() extrae el ultimo caracter
        }else if (display.innerHTML != "" && item.id=="equal") {
            display.innerHTML = eval(display.innerHTML); //evalua todas las operaciones aritmeticas
        }else if (display.innerHTML == "" && item.id=="equal") {
            display.innerHTML = "Null";
            setTimeout(() => (display.innerHTML=""),2000); //Limpia el texto en un determinado tiempo     
        }else{
            display.innerHTML+=item.id;
        }
    }
});

//Activando tema dark
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;
themeToggleBtn.onclick=() => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark=!isDark;
}

