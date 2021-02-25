let numberOfDiv = 1;

document.querySelector('button.add').addEventListener('click', () => {
    const div = document.createElement('div')
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