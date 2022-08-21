

// 1. select button Lionel Messi 30 
document.getElementById('select-messi').addEventListener('click', function(){

    const playerList = document.querySelectorAll('li');
    if(playerList.length < 5 ){
        getIdToListAddOnInnerText('messi');
        clickToDisableButton('select-messi');   
    }
    else{
        alert('You have Select Player 5')
    }
    
})

// select button Marquinhos 5 
document.getElementById('select-marquinhos').addEventListener('click', function(){
    

    const playerList = document.querySelectorAll('li');
    if(playerList.length < 5 ){
        getIdToListAddOnInnerText('marquinhos');
    clickToDisableButton('select-marquinhos');
        
    }
    else{
        alert("you have selected 5 player")
    }
})

// select button Kylian Mbappé 7
document.getElementById('select-kylian').addEventListener('click', function(){
    

    const playerList = document.querySelectorAll('li');
    if(playerList.length < 5 ){
        getIdToListAddOnInnerText('kylian');
        clickToDisableButton('select-kylian');
        
    }
    else{
        alert("you have selected 5 player")
    }
})

// select button Neymar Jr 10
document.getElementById('select-neymar').addEventListener('click', function(){
    

    const playerList = document.querySelectorAll('li');
    if(playerList.length < 5 ){
        getIdToListAddOnInnerText('neymar');
    clickToDisableButton('select-neymar');
        
    }
    else{
        alert("you have selected 5 player")
    }
})

// select button Ander Herrera 21
document.getElementById('select-herrera').addEventListener('click', function(){
   
    const playerList = document.querySelectorAll('li');
    if(playerList.length < 5 ){
        getIdToListAddOnInnerText('herrera');
    clickToDisableButton('select-herrera');
        
    }
    else{
        alert("you have selected 5 player")
    }
})

// select button Idrissa Gueye 27
document.getElementById('select-idrissa').addEventListener('click', function(){
    

    const playerList = document.querySelectorAll('li');
    if(playerList.length < 5 ){
        getIdToListAddOnInnerText('idrissa');
    clickToDisableButton('select-idrissa');
        
    }
    else{
        alert("you have selected 5 player")
    }

})

// select button Achraf Hakimi 2
document.getElementById('select-hakimi').addEventListener('click', function(){
    

    const playerList = document.querySelectorAll('li');
    if(playerList.length < 5 ){
        getIdToListAddOnInnerText('hakimi');
    clickToDisableButton('select-hakimi');
        
    }
    else{
        alert("you have selected 5 player")
    }
})

// select button Gianluigi Donnarumma 99
document.getElementById('select-donnarumma').addEventListener('click', function(){
    const playerList = document.querySelectorAll('li');
    if(playerList.length < 5 ){
        getIdToListAddOnInnerText('donnarumma');
    clickToDisableButton('select-donnarumma');
        
    }
    else{
        alert("you have selected 5 player")
    }
})
// select button Alexandre Letellier 90
document.getElementById('select-alexandre').addEventListener('click', function(){
    const playerList = document.querySelectorAll('li');
    if(playerList.length < 5 ){
        getIdToListAddOnInnerText('alexandre');
    clickToDisableButton('select-alexandre');
        
    }
    else{
        alert("you have selected 5 player")
    }
    
})



function getIdToListAddOnInnerText(getText){
    const getName = document.getElementById(getText).innerText;

    const setText = document.getElementById('player-list');
    const setName = document.createElement('li');
    setName.innerText = getName;
    setText.appendChild(setName);

}

function clickToDisableButton(disableId){
    document.getElementById(disableId).setAttribute( 'disabled', "")
    document.getElementById(disableId).style.backgroundColor = "red"    
}

function playerFiveSelect(){

    const playerList = document.querySelectorAll('li');
    if(playerList.length < 5 ){
        
    }
    else{
        alert("you have selected 5 player")
    }
}


function playerExpensesCalculate(){
    const playerList = document.querySelectorAll('li');
    const perPlayerBudget = document.getElementById('par-player-budget');
    const perPlayerBudgetString = perPlayerBudget.value;
    const perPlayerBudgetAmount = parseFloat(perPlayerBudgetString);

    const playerExpensesFild = document.getElementById('player-expense');
    document.getElementById('player-expense').innerText = playerList.length * perPlayerBudgetAmount; 
    // const playerExpensesNumber = parseFloat(playerExpensesString);

    // playerExpensesFild.innerText = (playerList.length + 1) * perPlayerBudgetAmount

    console.log(playerExpensesFild);
}