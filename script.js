let numberOfDiv = 1;
let divSize =100;

document.querySelector('button.add').addEventListener('click', () => {
    const div = document.createElement('div')
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    div.style.lineHeight = `${divSize}px`;
    div.textContent = numberOfDiv;
    document.querySelector('.building').appendChild(div)
    numberOfDiv++
})

document.querySelector('button.rem').addEventListener('click', () => {
    if (document.querySelector('.building div:last-child') !== null){
    document.querySelector('.building div:last-child').remove()
    numberOfDiv--
    }
})

document.getElementById('size-up').addEventListener('click', () => {
    const divs = document.querySelectorAll('.building div');
    divSize++;
    divs.forEach(div => {
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.style.lineHeight = `${divSize}px`;
    })
})

document.getElementById('size-down').addEventListener('click', () => {
    const divs = document.querySelectorAll('.building div');
    divSize--;
    divs.forEach(div => {
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.style.lineHeight = `${divSize}px`;
    })
})