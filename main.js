let bigContainer = document.getElementById('bigContainer')

bigContainer.setAttribute('style', 'display: flex;flex-wrap: wrap;align-items: center;justify-content: center;padding: 0;border: .5px;border-color: black;border-style: solid;max-width: 640px;max-height:640px;margin: 0 auto')

function gridSize(num, width, height){
    for (x = 0; x < num; x++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        bigContainer.appendChild(cell);
        cell.setAttribute('style', `border: 0px;border-color:black;border-style:solid;margin: 0;min-width: ${width};min-height: ${height}`)
        
    }
    let cells = document.querySelectorAll('.cell');
    cells.forEach(function(cell){
        cell.addEventListener('mouseover', function(e){
            cell.style.background="#000";
        })
    })
    let resetBtn = document.querySelector('button')
    resetBtn.setAttribute('style', 'color: white; background-color: black; font-size:30px; display: flex; margin: 0 auto; margin-top: 40px')
    resetBtn.addEventListener('click', function(){
        cells.forEach(function(cell){
            cell.style.background="#FFF"
        })
    })
}

gridSize(64, '80px', '80px')

let sizeOptions = document.getElementById('grid-sizes')
sizeOptions.addEventListener('click', function(){
    if(this.value === '8x8'){
        bigContainer.innerHTML = '';
        gridSize(64, '80px', '80px')
    } else if(this.value === '16x16'){
        bigContainer.innerHTML = '';
        gridSize(256, '40px', '40px')
    } else if(this.value === '32x32'){
        bigContainer.innerHTML = '';
        gridSize(1024, '20px', '20px')
    } else if(this.value === '64x64'){
        bigContainer.innerHTML = '';
        gridSize(4096, '10px', '10px')
    }  return;
})


let titleContainer = document.querySelector('h1')
titleContainer.setAttribute('style', 'text-align:center;font-size:60px')