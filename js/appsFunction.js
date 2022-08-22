
// function 1. get player ol list and create append child li and set innerText 
function getIdAndListAddOnInnerText(getText){
    const getName = document.getElementById(getText).innerText;

    const setText = document.getElementById('player-list');
    const setName = document.createElement('li');
    
    setName.innerText = getName;
    setText.appendChild(setName);

}


// function 2. click button to disable button 
function clickToDisableButton(disableId){
    document.getElementById(disableId).setAttribute( 'disabled', "")
    document.getElementById(disableId).style.backgroundColor = "red"    
}


// function 3. player expense calculate and set player expense fild
function playerExpensesCalculate(){
    const playerList = document.querySelectorAll('li');
    const perPlayerBudget = document.getElementById('par-player-budget');
    const perPlayerBudgetString = perPlayerBudget.value;
    const perPlayerBudgetAmount = parseFloat(perPlayerBudgetString);

    if(isNaN(playerList.length) || playerList.length < 5){
        alert("Please Select Team!! N:B: You Can Select 5 Players")
    }
    else{
        if(isNaN(perPlayerBudgetAmount)){
            alert("Please Enter Your Par Players Expenses!")
        }
        else{
            document.getElementById('player-expense').innerText = playerList.length * perPlayerBudgetAmount;
        }
    }
}

// function 3. total expense calculate and set total expense fild
function totalExpensesCalculate(){
    const playerExpenses = document.getElementById('player-expense').innerText;
    const playerTotalAmount = parseFloat(playerExpenses);

    const managerExpenses = document.getElementById('manager-expenses-fild').value
    const managerExpensesAmount = parseFloat(managerExpenses);

    const coachExpenses = document.getElementById('coach-expenses-fild').value
    const coachExpensesAmount = parseFloat(coachExpenses);

    if(isNaN(playerTotalAmount) || isNaN(managerExpensesAmount) || isNaN(coachExpensesAmount)){
        alert("Please Enter Manager and Coach Expenses Amount!")
    }
    else{
        document.getElementById('total-expenses-fild').innerText = playerTotalAmount + managerExpensesAmount + coachExpensesAmount;
    }
}