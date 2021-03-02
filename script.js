let numberOfDiv = 1;
let divSize = 100;
let fontSize = 30;
let divSizeSpan = document.querySelector('[data-option="size"] span');
divSizeSpan.textContent = divSize + "px";

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
    divSizeSpan.textContent = divSize + "px";
})

document.getElementById('size-down').addEventListener('click', () => {
    if (divSize > 0) {
    const divs = document.querySelectorAll('.building div');
    divSize--;
    divs.forEach(div => {
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.style.lineHeight = `${divSize}px`;
    })
    divSizeSpan.textContent = divSize + "px";
    } else alert("size 0px! It can't be less.");
})