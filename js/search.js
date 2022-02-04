var searchBlock = document.querySelector('.search__block')
var input = document.querySelector('.menu__input')
var search = document.querySelector('.search')
var searchIcon = document.querySelector('.menu__search')

var filteredArr;

window.addEventListener('click', event => {
    if(event.target.dataset.search == 'icon'){
        event.target.style.display="none"
        searchBlock.style.display="flex"
    }

    if(event.target.dataset.search !== 'input' && event.target.dataset.search !== 'icon'){
        searchIcon.style.display="flex"
        searchBlock.style.display="none"
    }

    if(event.target.dataset.reset === 'reset'){
        counter = 1
        localStorage.setItem('generalArr', JSON.stringify(data))
        ticketsBlock.innerHTML = ''
        renderData(generalArr)
    }
})

input.addEventListener('keyup', ()=>{
    counter = 1
    let inputValue = input.value
    filteredArr = data.filter(element => {
        return element.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
    })
    localStorage.setItem('generalArr', JSON.stringify(filteredArr))
    ticketsBlock.innerHTML = ''
    renderData(generalArr)
    
})