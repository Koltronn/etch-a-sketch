let bigContainer = document.getElementById('bigContainer')

bigContainer.setAttribute('style', 'display: flex;flex-wrap: wrap;align-items: center;justify-content: center;padding: 0;border: .5px;border-color: black;border-style: solid;max-width: 640px;margin: 0 auto')

for (x = 0; x < 256; x++){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    bigContainer.appendChild(cell);
    cell.setAttribute('style', 'border: 0px;margin: 0;min-width: 40px;min-height: 40px')
    
}

let cells = document.querySelectorAll('.cell');
cells.forEach(function(cell){
    cell.addEventListener('mouseover', function(e){
        cell.style.background="#000";
    })
})


let resetBtn = document.querySelector('button')
resetBtn.setAttribute('style', 'color: white; background-color: black; font-size:50px; display: flex; margin: 0 auto; margin-top: 50px')
resetBtn.addEventListener('click', function(){
    cells.forEach(function(cell){
        cell.style.background="#FFF"
    })
})