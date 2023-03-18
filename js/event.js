function calculateExpense(){
    const income = document.getElementById("total-income").value;
    const houseRent = document.getElementById("house-rent").value;
    const food = document.getElementById("food-cost").value;
    const busFare = document.getElementById("bus-fare").value;

    if(
        income <0 || income==""||
        houseRent< 0 || houseRent==""||
        food< 0 || food==""||
        busFare< 0 || busFare==""
    ){
        alert("Please enter positive number!");
        return
    }

    const expense = parseInt(houseRent)+parseInt(food)+parseInt(busFare);

    if(expense> income){
        alert("Expense is more than income!");
    }
    else{
        document.getElementById("output").innerText=expense;
    }
};