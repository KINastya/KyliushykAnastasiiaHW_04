const init = () => {
const action = prompt("Яку дію ви хочете зробити? \n додавання add ( + ) \n віднімання sub ( - ) \n ділення div ( / ) \n множення mult ( * )");
const number1 = prompt("Введіть перше число");
const number2 = prompt("Введіть двуге число");
const n1 = Number (number1);
const n2 = Number (number2);

if(isNaN(n1) || isNaN(n2)) {
    alert("Ви допустилися помилки, спробуйте ще раз.");
    return init();
}

if ( action === "додавання" || action === "add" || action ==="+"){
    alert(`${n1}+${n2}=${n1 + n2}`);
    return init();
} else if ( action === "віднімання" || action === "sub" || action === "-"){
    alert(`${n1}-${n2}=${n1 - n2}`);
    return init();
} else if ( action === "ділення" || action === "div" || action === "/"){
    alert(`${n1}/${n2}=${n1 / n2}`);
    return init();
} else if ( action === "множення" || action === "mult" || action === "*"){
    alert(`${n1}*${n2}=${n1 * n2}`);
    return init();
} 
}
init();