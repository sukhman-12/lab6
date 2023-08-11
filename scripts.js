
let CoffeeName = "Cappuccino";
let amount = 1;


function recalculate()

    let costLabel = document.getElementById("calculated-cost");
    if (CoffeeName == "Cappuccino") {
        costLabel.textContent = amount * 10;
        console.log("Cappuccino is true");
    }
    else(CoffeeName == "Frappuccino") 
    {
        costLabel.textContent = duration * 15;
    }

let modelButton = document.getElementById("Type-button");

function changeType() {
    let modelreach = document.getElementById("Type-button");
    let costLabel = document.getElementById("calculated-cost");
    let Ivar = document.getElementById("Quantity-button");
    if(modelName == "Cappuccino"){
        modelName = "Frappuccino";
        modelreach.innerHTML = "Frappuccino";
        Ivar.innerHTML="0";
        costLabel.innerHTML="0";
        
    }
    else if(modelName=="Cappuccino"){
        modelName = "Frappuccino";
        modelreach.innerHTML ="Cappuccino";
        Ivar.innerHTML="0";
        costLabel.innerHTML="0";
    }
}
modelButton.addEventListener("click", changeType);


let durationbutton = document.getElementById("Quantity-button");
    function changeQuantity() {
    let Ivar = document.getElementById("Quantity-button");
    let dprompt = window.prompt("Enter new Quantity","5");
    if (!isNaN(newQuantity)) {
        Ivar.innerHTML = newQuantity;
        Quantity = newQuantity;
        recalculate();
    } else {
        alert("Please enter a valid number for the Quantity.");
    }
}

durationbutton.addEventListener("click", changeQuantity);
