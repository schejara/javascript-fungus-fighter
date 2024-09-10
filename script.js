// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let starAP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
onReady()

//let arrayOfAttack = ['arcane scepter','entangle','dragon blade','star fire']

function changeMeter(AP, HP){
    starAP -= AP;
    fungusHP -= HP;

    if(starAP < 0 ){
        console.log('star AP less than 0')
        starAP = 0;
        disableButton();
    }
    if(fungusHP < 0){
        console.log('Monster AP less than 0')
        fungusHP = 0;
    }

    console.log('star ap and fungus hp ',starAP,fungusHP)
    render();
    divImageUpdate();
}

function divImageUpdate() {
    let divs = document.querySelector('.freaky-fungus');
    if(starAP > 0 &&fungusHP ===  0){
        divs.classList.remove('walk');
        divs.classList.add('dead'); 
    }
    if (fungusHP > 0 && starAP ===0){
        let divs = document.querySelector('.freaky-fungus');
        divs.classList.remove('walk');
        divs.classList.add('jump');
    }
}
    
function disableButton(){
let buttonState = document.querySelectorAll('button')
buttonState.forEach(function (button)  {
    button.disabled = true;
})}


function handleClick(buttonName){
    if(buttonName === 'arcane'){
        console.log('buttton is', buttonName)
        let APvalue = 12;
        let HPvalue = 14;
        changeMeter (APvalue,HPvalue);
    }   

    if(buttonName === 'entangle'){
        console.log('buttton is', buttonName)
        let APvalue = 23;
        let HPvalue = 9;
        changeMeter (APvalue,HPvalue);
    } 

    if(buttonName === 'dragon'){
        console.log('buttton is', buttonName)
        let APvalue = 38;
        let HPvalue = 47;
        changeMeter (APvalue,HPvalue);
    } 

    if(buttonName === 'star'){
        console.log('buttton is', buttonName)
        let APvalue = 33;
        let HPvalue = 25;
        changeMeter (APvalue,HPvalue);
      } 

      
    }


function render(){

    let changeApText = document.getElementById('apId')
    console.log('change ap ',changeApText);
    let changeHpText = document.getElementById('hpId')
    console.log('change hp ',changeHpText);
 
changeApText.textContent = fungusHP;
changeHpText.textContent =  starAP

    
}




