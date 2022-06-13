let divisions;
let isBlackActive = false;
let isRandomActive = false;
const inputGrid = document.querySelector('input');
const wrapper = document.querySelector('.wrapper');
const submit = document.querySelector('.submit');
const blackColor = document.querySelector('.black-color');
const randomColor = document.querySelector('.random-color');
const clearButton = document.querySelector('.clear-grid');



createSketch(inputGrid.value);   /* initialisation */
colorDivision(divisions);    

/*-------------------------------------------------------------------------------------------------------------
                                    Add Event Listener
-------------------------------------------------------------------------------------------------------------*/

blackColor.addEventListener('click', chooseBlack);
randomColor.addEventListener('click', chooseRandom);

clearButton.addEventListener('click', ()=>{
    clearGrid();
    createSketch(inputGrid.value);
    colorDivision(divisions);
});

submit.addEventListener('click', ()=>{
    clearGrid();
    createSketch(inputGrid.value);
    colorDivision(divisions); 
})


/*-------------------------------------------------------------------------------------------------------------
                                    functions
-------------------------------------------------------------------------------------------------------------*/
function createSketch(size){
    let numberOfDivs;

    if(size > 100){
        numberOfDivs = 100*100;
    }else if(size <= 0){
        numberOfDivs = 1
    }else{
        numberOfDivs = size*size;
    }

    
    for(let i = 1; i <= numberOfDivs; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        wrapper.appendChild(div);
    }

    if(size > 100){
        wrapper.style.gridTemplateColumns = `repeat(100,1fr)`;
        wrapper.style.gridTemplateRows = `repeat(100,1fr)`;
    }else if(size <= 0){
        wrapper.style.gridTemplateColumns = `repeat(1,1fr)`;
        wrapper.style.gridTemplateRows = `repeat(1,1fr)`;
    }else{
        wrapper.style.gridTemplateColumns = `repeat(${size},1fr)`;
        wrapper.style.gridTemplateRows = `repeat(${size},1fr)`;
    }
    
    divisions = document.querySelectorAll('.box');   
}

function clearGrid(){
    divisions.forEach((division) => wrapper.removeChild(division));
}

function chooseBlack(){
    isBlackActive = !isBlackActive;
    this.classList.toggle('active');

    isRandomActive = false;
    randomColor.classList.remove('active')
}

function chooseRandom(){
    isRandomActive  = !isRandomActive;
    this.classList.toggle('active');

    isBlackActive = false;
    blackColor.classList.remove('active');
}

function colorDivision(arguments){   
    arguments.forEach((argument)=>{
        argument.addEventListener('mouseover', ()=>{
            if(isBlackActive){
                argument.style.backgroundColor = 'black';
            }else if(isRandomActive){
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                argument.style.backgroundColor = '#' + randomColor;
            }else{
                argument.style.backgroundColor = 'lightblue';
            }
        })
    })
}