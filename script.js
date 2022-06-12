const inputGrid = document.querySelector('input');
const wrapper = document.querySelector('.wrapper');
const submit = document.querySelector('.submit');
const clearButton = document.querySelector('.clear-grid');


/*-------------------------------------------------------------------------------------------------------------
                                    AddeventListeners
-------------------------------------------------------------------------------------------------------------*/
submit.addEventListener('click', createSketch)
clearButton.addEventListener('click', clearBoard);
/*-------------------------------------------------------------------------------------------------------------
                                    Oninput
-------------------------------------------------------------------------------------------------------------*/



/*-------------------------------------------------------------------------------------------------------------
                                    functions
-------------------------------------------------------------------------------------------------------------*/
function createSketch(){
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
}

function clearBoard(){
    inputGrid.value = '';
    removeElement();
}

function removeElement(){
    while(wrapper.lastElementChild){
        wrapper.removeChild(wrapper.lastElementChild);
    }
}