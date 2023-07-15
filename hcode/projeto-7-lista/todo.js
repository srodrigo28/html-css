let data = [
]

console.log(data)
function renderTodo() {
    document.querySelector('.todo').innerHTML = '';
    data.forEach(task => {
        let li = document.createElement('li')
        li.innerHTML = `
            <input type="checkbox" id="${task.id}" />
            <label for="${task.id}">${task.title}</label>
            <button>X</button>
        `
        li.querySelector('input').addEventListener('change', e => {
            if (e.target.checked) {
                li.classList.add('complete')
            } else {
                li.classList.remove('complete')
            }
        })
        li.querySelector('button').addEventListener('click', e => {
            console.warn("Deseja realmente apagar?")
        })

        document.querySelector('.todo').append(li)
    })
}



document.querySelector('#new-task').addEventListener('keyup', e => {
    if (e.key === 'Enter') {

        data.push({
            id: data.length + 1,
            title: e.target.value
        })
        e.target.value = ""

        renderTodo()
    }
})

renderTodo()