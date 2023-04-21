const plusBtn = document.querySelector('.plusBtn');
const form = document.querySelector('form');
let count =0;
plusBtn.addEventListener('click',()=>{
    form.classList.toggle('on');
    count++;
    if(count % 2 !==0){
        plusBtn.textContent = '='
    }
    else {
        plusBtn.textContent = '+'
    }
})
///////////////////////////////////////////

const inputTitle =  document.querySelector('input');
const textarea = document.querySelector('.txt');
const ul = document.querySelector('ul');
const saveBtn = document.querySelector('.saveBtn');


const todos = [];

const saveLocal = () => {
    localStorage.setItem('todo',JSON.stringify(todos));
}

const delTodo = (e) => {
    const target = e.target.parentElement;
    target.remove();
}


const paintTodo= (e)=> {
    e.preventDefault(); 
    const todo = {
        id: Date.now(),
        title: inputTitle.value,
        text: textarea.value
    }
    todos.push(todo);
    saveLocal();

    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const btn = document.createElement('button');
    const p = document.createElement('p');

    h4.textContent = todo.title;
    p.textContent = todo.text;
    btn.classList.add('del');

    btn.addEventListener('click',delTodo);

    li.append(h4,btn,p);
    ul.appendChild(li);
}



saveBtn.addEventListener('click',paintTodo)
