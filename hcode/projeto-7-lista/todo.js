let data = []

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
            // console.log(e.target.parentNode.querySelector('input').id)
            let todoId = (e.target.parentNode.querySelector('input').id)
            let title = li.querySelector('label').innerText

            if(confirm("Deseja realmente excluir a tarefa? " + title)) {
                data = data.filter(task => task.id !== parseInt(todoId))
                renderTodo()
            }
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