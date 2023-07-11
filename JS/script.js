inserir = (num) => {
    document.getElementById("result").innerHTML += num;
}

clean = () => {
    document.getElementById("result").innerHTML = "";
}

apagar = () => {
    let apagar = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = apagar.substring(0, apagar.length -1);
}

somar = () => {
    let num1 = document.getElementById("result").innerHTML;

    if(num1){
        document.getElementById("result").innerHTML = eval(num1);
    } else {
        document.getElementById("result").innerHTML = "nenhum comando";
    }
    
}