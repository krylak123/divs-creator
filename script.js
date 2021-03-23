const panel = document.querySelector('.panel')
const spanSize = document.getElementById('spanSize')

let number = 1;
let divSize = 100;

spanSize.textContent = `${divSize}px`;

const addElement = () => {
    if (panel.querySelectorAll('div').length >= 20) return alert(`20 div's max`)
    const div = document.createElement('div')
    div.classList.add('panel__element')
    div.setAttribute('data-index', `${number}`)
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    div.textContent = number++;
    panel.appendChild(div)
}

const remElement = () => {
    if (panel.querySelector('div:last-child') !== null) {
        panel.querySelector('div:last-child').remove()
        number--;
    }
}

const sizeUpElement = () => {
    if (divSize >= 200) return alert('max 200px')
    const divs = panel.querySelectorAll('div')
    divSize += 5;
    divs.forEach(item => {
        item.style.width = `${divSize}px`;
        item.style.height = `${divSize}px`;
    })
    spanSize.textContent = `${divSize}px`;
}

const sizeDownElement = () => {
    if (divSize <= 50) return alert('min 50px')
    const divs = panel.querySelectorAll('div')
    divSize -= 5;
    divs.forEach(item => {
        item.style.width = `${divSize}px`;
        item.style.height = `${divSize}px`;
    })
    spanSize.textContent = `${divSize}px`;
}

const shapeCircleElement = () => {
    const divs = panel.querySelectorAll('div')
    divs.forEach(item => item.style.borderRadius = `50%`)
}

const shapeSquareElement = () => {
    const divs = panel.querySelectorAll('div')
    divs.forEach(item => item.style.borderRadius = ``)
}

document.getElementById('addBtn').addEventListener('click', addElement)
document.getElementById('remBtn').addEventListener('click', remElement)
document.getElementById('upSizeBtn').addEventListener('click', sizeUpElement)
document.getElementById('downSizeBtn').addEventListener('click', sizeDownElement)
document.getElementById('shapeCircleBtn').addEventListener('click', shapeCircleElement)
document.getElementById('shapeSquareBtn').addEventListener('click', shapeSquareElement)