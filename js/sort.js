var allTickets = document.querySelector('.info')
var sortDrobdown = document.getElementById('sort_drobdown')
var filterDrobdown = document.getElementById('filter')

var priorityDrobdown = document.getElementById('priority_drobdown');

allTickets.addEventListener('click', (event) => {
    // ==============  SORT  ===================
    if(event.target.dataset.sort === 'sort'){
        sortDrobdown.style.display="flex"
    }

    if(event.target.dataset.sort !== 'sort'){
        sortDrobdown.style.display="none"
    }
    if(event.target.dataset.sort === 'ascending-name'){
        counter = 1
        filteredArr = data.sort((a, b) =>{
            if(a.name > b.name) {
                return 1
            }
            else{
              return -1
            }
        })
        localStorage.setItem('generalArr', JSON.stringify(filteredArr))
        ticketsBlock.innerHTML = ''
        renderData(generalArr)
    }
    if(event.target.dataset.sort === 'descending-name'){
        counter = 1
        filteredArr = data.sort((a, b) =>{
            if(a.name < b.name) {
                return 1
            }
            else{
              return -1
            }
        })
        localStorage.setItem('generalArr', JSON.stringify(filteredArr))
        ticketsBlock.innerHTML = ''
        renderData(generalArr)
    }
    if(event.target.dataset.sort === 'ascending-time'){
        counter = 1
        data.forEach(elem => {
            let date1 = new Date(`${elem.date_of_onliine} ${elem.time}`)
            let dateNow = new Date();
            let diff = new Date(dateNow - date1);
            elem['ms'] = +diff/600
        })
        filteredArr = data.sort((a, b) => {
            if(a.ms > b.ms){
                return 1
            } else{
                return -1
            }
        })
        localStorage.setItem('generalArr', JSON.stringify(filteredArr))
        ticketsBlock.innerHTML = ''
        renderData(generalArr)
    }
    if(event.target.dataset.sort === 'descending-time'){
        counter = 1
        data.forEach(elem => {
            let date1 = new Date(`${elem.date_of_onliine} ${elem.time}`)
            let dateNow = new Date();
            let diff = new Date(dateNow - date1);
            elem['ms'] = +diff/600
        })
        filteredArr = data.sort((a, b) => {
            if(a.ms < b.ms){
                return 1
            } else{
                return -1
            }
        })
        localStorage.setItem('generalArr', JSON.stringify(filteredArr))
        ticketsBlock.innerHTML = ''
        renderData(generalArr)
    }

     // ==============  FILTER  ===================
     if(event.target.dataset.filter === 'filter'){
        filterDrobdown.style.display="flex"
     }
     if(event.target.dataset.filter !== 'filter'){
        filterDrobdown.style.display="none"
     }

     if(event.target.dataset.filter === 'high'){
        counter = 1
        filteredArr = data.filter(elem => {
             return elem.priority == 'high'
         })
        localStorage.setItem('generalArr', JSON.stringify(filteredArr))
        ticketsBlock.innerHTML = ''
         renderData(generalArr)
     }

     if(event.target.dataset.filter === 'normal'){
        counter = 1
        filteredArr = data.filter(elem => {
            return elem.priority == 'normal'
        })
        localStorage.setItem('generalArr', JSON.stringify(filteredArr))
        ticketsBlock.innerHTML = ''
        renderData(generalArr)
    }

    if(event.target.dataset.filter === 'low'){
        counter = 1
        filteredArr = data.filter(elem => {
            return elem.priority == 'low'
        })
        localStorage.setItem('generalArr', JSON.stringify(filteredArr))
        ticketsBlock.innerHTML = ''
        renderData(generalArr)
    }

    // ==============  PRIORITY  ===================
    if(event.target.dataset.priority === 'priority'){
        priorityDrobdown = event.target.closest('div').querySelector('#priority_drobdown')
        priorityDrobdown.style.display="flex"
    }
    if(event.target.dataset.priority !== 'priority'){
        priorityDrobdown.style.display="none"
    }

    if(event.target.dataset.priority === 'high'){
        let ticketCard = event.target.closest(".ticket")
        ticketCard.querySelector('#priority').textContent = 'high'
        ticketCard.querySelector('#priority').className = 'priority high'

        generalArr.forEach(elem => {
            if(elem.name.includes(ticketCard.querySelector('#ticketName').textContent)){
                elem.priority = 'high'
            }
        })
        localStorage.setItem('generalArr', JSON.stringify(generalArr))
    }
    if(event.target.dataset.priority === 'normal'){
        let ticketCard = event.target.closest(".ticket")
        ticketCard.querySelector('#priority').textContent = 'normal'
        ticketCard.querySelector('#priority').className = 'priority normal'

        generalArr.forEach(elem => {
            if(elem.name.includes(ticketCard.querySelector('#ticketName').textContent)){
                elem.priority = 'normal'
            }
        })
        localStorage.setItem('generalArr', JSON.stringify(generalArr))
    }
    if(event.target.dataset.priority === 'low'){
        let ticketCard = event.target.closest(".ticket")
        ticketCard.querySelector('#priority').textContent = 'low'
        ticketCard.querySelector('#priority').className = 'priority low'

        generalArr.forEach(elem => {
            if(elem.name.includes(ticketCard.querySelector('#ticketName').textContent)){
                elem.priority = 'low'
            }
        })
        localStorage.setItem('generalArr', JSON.stringify(generalArr))
    }
    if(event.target.dataset.priority === 'delete'){
        let ticketCard = event.target.closest(".ticket")
        generalArr.forEach((elem, index)=> {
            if(elem.name.includes(ticketCard.querySelector('#ticketName').textContent)){
                generalArr.splice(index, 1)
            }
        })

        localStorage.setItem('generalArr', JSON.stringify(generalArr))
        ticketCard.remove()   
    }
})