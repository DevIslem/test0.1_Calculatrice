
forDisplay = (value) => {
    RemoveZero();
    document.getElementById("output").innerHTML += value;
}


Clear =() => {
    console.log("clear function");
    document.getElementById("output").innerHTML='0';
};

RemoveZero =() => {
    var value = document.getElementById("output").innerHTML;
    if (value =="0"){
        value=" "
        document.getElementById("output").innerHTML= value;
    }
};

Perc = () => {
    var value = document.getElementById("output").innerHTML;
    value = value /100;
    document.getElementById("output").innerHTML= value;
}

Solve = () => {
    RemoveZero()
    var eq = document.getElementById("output").innerHTML;
    var result = eval(eq);
    document.getElementById("output").innerHTML = result;
};