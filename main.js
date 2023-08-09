let bigContainer = document.getElementById('bigContainer')

bigContainer.setAttribute('style', 'display: flex;flex-wrap: wrap;align-items: center;justify-content: center;padding: 0;border: 0;border-color: black;border-style: solid;max-width: 672px;margin: 0 auto')

for (x = 0; x < 256; x++){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    bigContainer.appendChild(cell);
    cell.setAttribute('style', 'border: .5px;margin: 0;min-width: 40px;min-height: 40px;border-color: black;border-style: solid')
    
}

let cells = document.querySelectorAll('.cell');
cells.forEach(function(cell){
    cell.addEventListener('mouseenter', function(e){
        cell.style.background="#000";
    })
})