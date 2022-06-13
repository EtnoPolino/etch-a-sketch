const inputGrid = document.querySelector('input');
const wrapper = document.querySelector('.wrapper');
const submit = document.querySelector('.submit');
const clearButton = document.querySelector('.clear-grid');
/*const choiceButtons = document.querySelectorAll('button');*/

let isBlackActive = false;
let isRandomActive = false;
/*-------------------------------------------------------------------------------------------------------------
                                    AddeventListeners
-------------------------------------------------------------------------------------------------------------*/
submit.addEventListener('click', createSketch)
clearButton.addEventListener('click', clearBoard);

/*choiceButtons.forEach((button) => {
    button.addEventListener('click', test);
});*/


/*-------------------------------------------------------------------------------------------------------------
                                    functions
-------------------------------------------------------------------------------------------------------------*/
function createSketch(){

const blackColor = document.querySelector('.black-color');
    let numberOfDivs;

    removeElement();

    if (inputGrid.value > 100) {
        numberOfDivs = 100*100;
    }else if(inputGrid.value < 0){
        inputGrid.value = '';
        numberOfDivs = 0;
    }else{
        numberOfDivs = inputGrid.value*inputGrid.value;
    }
    
    for(let i = 1; i <= numberOfDivs; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        wrapper.appendChild(div);
    }

    if(inputGrid.value > 100){
        wrapper.style.gridTemplateColumns = `repeat(100,1fr)`;
        wrapper.style.gridTemplateRows = `repeat(100,1fr)`;
    }else{
        wrapper.style.gridTemplateColumns = `repeat(${inputGrid.value},1fr)`;
        wrapper.style.gridTemplateRows = `repeat(${inputGrid.value},1fr)`;
    }

/* it needs to be there because our created div now exist, before they just dont. */    
const boxes = document.querySelectorAll('.box');
const black = document.querySelector('.black-color');
const random = document.querySelector('.random-color'); 
    
    black.addEventListener('click', ()=>{
        isBlackActive = true;
        black.classList.toggle('active');

        isRandomActive = false;
        random.classList.remove('active');

    });

    random.addEventListener('click', ()=>{
        isRandomActive = true;
        random.classList.toggle('active');

        isBlackActive = false;
        black.classList.remove('active');
    })

    console.log('black active ? '+isBlackActive);
    console.log('random active ? '+isRandomActive);
    
    boxes.forEach( box => {
        box.addEventListener('mouseover', ()=>{
            console.log('test')
        });
    });

    


} // end of function createSketch

function clearBoard(){
    inputGrid.value = '';
    removeElement();
}

function removeElement(){
    while(wrapper.lastElementChild){
        wrapper.removeChild(wrapper.lastElementChild);
    }
}

function colorBox(){
    this.style.backgroundColor = 'black';
}

function colorRandom(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = '#' + randomColor;
}

function test(){
    choiceButtons.forEach((button) => {
        button.classList.remove('active');
    });

    this.classList.add('active');
}

function draw(){
    if(isBlackActive){
        this.style.backgroundColor = 'black';
    } else if (isRandomActive){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = '#' + randomColor;
    }
}


/*
const boxes = document.querySelectorAll('.box');
const randomColor = document.querySelector('.random-color');
const buttonChangeColors = document.querySelectorAll('.buttons');

    boxes.forEach( box => {
        box.addEventListener('mouseover', colorBox);
    }); */
/*
buttonChangeColors.forEach((button) => {
    button.addEventListener('click', test);
});*/


/*
j'appuis sur le bouton 'random color', il y'a une couleur noir qui se met...
    - on a des couleur random
quand je rappuis, j'enlève la couleur random, 
    - on a une couleur noir.
 


*/




/* 
TO DO

- mettre un toggle au bouton RandomCOlor pour mettre et enlever les couleur;
- le boutton clear doit aussi enlever les couleurs de randomColor.
- enlever le fait de mettre 0 et moins

*/

/*    
    randomColor.addEventListener('click', () => {
        randomColor.classList.toggle('active');

        if(randomColor.classList.contains('active')){
            boxes.forEach( box => {
                box.addEventListener('mouseover', colorRandom);
            });
        } else {
            boxes.forEach( box => {
                box.addEventListener('mouseover', colorBox);
            });
        }

        if(!randomColor.classList.contains('active') ){
            boxes.forEach( box => {
                box.addEventListener('mouseover', ()=>{
                    box.style.backgroundColor = 'black';
                });
            });
        }
        
    }) */


/* donc pour que ça marche


quand j'appuis sur un boutton 1...
    si ce bouton à la classe active ET black-color
        alors le mouseover de box est noir
       
quand j'appuis sur un boutton 2...
    si ce bouton à la classe active ET random-color
        alors le mouseover de box est random.

fin.



    */