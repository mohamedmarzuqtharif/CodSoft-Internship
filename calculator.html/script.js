let output_screen = document.getElementById("output");

function display(num){
    output_screen.value += num;
}

function Calculate(){
    try{
        output_screen.value = eval(output_screen.value);
    }
    catch(err){
        alert("Invalid Input");
    }
}

function Clear(){
    output_screen.value = "";
}

function Del(){
    output_screen.value = output_screen.value.slice(0,-1);
}