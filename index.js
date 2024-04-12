
display = document.getElementById("display");

function appendToDisplay(input){ 
    display.value += input;

}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
 display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error!!";
    }
}
$("button").click(function(){
    var audio = new Audio("./tone.mp3");
    audio.play();
});

$('.delete').on('click', function() {
    display.value = display.value.slice(0, -1); 
    
});