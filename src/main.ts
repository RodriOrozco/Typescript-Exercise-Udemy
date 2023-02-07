const taskForm = document.querySelector<HTMLFormElement>('#taskForm')
interface Task {
    title: string,
    description: string
}


let tasks: Task[] = []

taskForm?.addEventListener('submit', e => {
    e.preventDefault();
    console.log('click papurri')

    const title = taskForm['title'] as unknown as HTMLInputElement;
    const description = taskForm['description'] as unknown as HTMLTextAreaElement;
    
    tasks.push({
        title: title.value,
        description: description.value
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
})

document.addEventListener('DOMContentLoaded', ()=>{
    JSON.parse(localStorage.getItem('tasks') || '[]');
})