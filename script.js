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

let arrayOfAttack = ['arcane scepter','entangle','dragon blade','star fire']


function changeMeter(AP, HP){
    starAP -= AP;
    fungusHP -= HP;

    if(starAP < 0 ){
        starAP = 0;
       
    }
    if(fungusHP < 0){
        fungusHP = 0;
    }

    if(fungusHP ===  0){
        console.log('entered class change condition')
         let div = document.getElementsByClassName('freaky-fungus walk')
     // div.classList.remove('freaky-fungus walk');
      div.classList.add('freaky-fungus.dead');
    
        
    }
console.log('star ap and fungus hp ',starAP,fungusHP)
render();

}

function handleClick(buttonName){
    if(buttonName === 'arcane'){
        let APvalue = 12;
        let HPvalue = 14;
        changeMeter (APvalue,HPvalue);
    }   

    if(buttonName === 'entangle'){
        let APvalue = 23;
        let HPvalue = 9;
        changeMeter (APvalue,HPvalue);
    } 

    if(buttonName === 'dragon'){
        let APvalue = 38;
        let HPvalue = 47;
        changeMeter (APvalue,HPvalue);
    } 

    if(buttonName === 'star'){
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






