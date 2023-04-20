//form이 submit될때 이벤트가발생한다. 이벤트리스너를 버튼이 아닌 form에다가 한번만 등록해줄겁니다.
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
//submit이벤트가 일어나면 인풋에서 사용자가 작성한 텍스트를 가져다가 li의 아이템으로추가해줄거다.


//localStorage 부분
//일단 전체 아이템들을 저장할 빈배열을 만든다.
let todos = [];

const save = () => {
    localStorage.setItem('todos',JSON.stringify(todos)); //todos는 위에 배열임.텍스트형식으로바꿔야함. 로컬스토리지는 문자열 형식으로만 저장을 할 수 있다.
};

const delItem = (event)=> {
    const target = event.target.parentElement; //삭제버튼의 부모//즉 li// span과 버튼모두
    //삭제를 딹깍 하고누르면 할일목록저장된 배열todos에선 삭제버튼누른것을 뺀 나머지만 저장해줘야함.
    todos = todos.filter((todo)=> todo.id !== parseInt(target.id)); //target.id는 내가 지워야할것.
    save(); //삭제버튼안누른것들만 다시 로컬스토리지에 저장해줌. 즉, 삭제버튼누른 li는 로컬스토리지에 사라진것.
    target.remove();//화면에서지워준다.
};

const addItem = (todo) =>{
    if(todo.text !==''){
        const li = document.createElement('li');
        const button = document.createElement('button');
        const span = document.createElement('span');

        span.innerText = todo.text;
        button.innerText = '삭제';
        button.addEventListener('click',delItem); //버튼을 누르면 delItem함수 발동

        li.appendChild(span);
        li.appendChild(button);   //li.append(span,button) 이렇게 해도된다
        ul.appendChild(li);

        li.id = todo.id; //나중에삭제할때 li자체를 삭제해야하므로 id를 할당해준다.
    };
};

const handler = (event) =>{
    event.preventDefault(); //새로고침되는걸 막음

    const todo = {
        id: Date.now(), //지금 시간의 밀리초를 반환하기때무네 유일함.그래서 유일한id로 생성된다.
        text: input.value  //내가 입력한 내용
    };

    todos.push(todo); //빈 배열에 todo객체를 push를 해줌.
    addItem(todo); //화면에 그려준다
    save();  //로컬스토리지에 저장한다.

    input.value='';
};




//로컬스토리지에 저장된요소를 새로고침해도 남아잇게끔하기
const init = () => {
    //const userTodos = localStorage.getItem('todos');
    //console.log(userTodos) //새로고침하면 문자열로뜸 [배열{객체}]로바꿔야함.

    const userTodos = JSON.parse(localStorage.getItem('todos')); //로컬스토리지에 남아잇는 내 todos를 가져와서 뮨자열된 배열을 JSON.parse로배열로만들어줌. 요소는 객체임.
    if(userTodos) { //저장된 데이터가 있어야지 에러를안뿜음
        userTodos.forEach((todo)=>{
            addItem(todo); //로컬스토리지에잇는 데이터들을 다시화면에 그려줌
        });
        
        todos= userTodos;
    };
    
};




init();
form.addEventListener('submit',handler);


///////////////////////////////////////////////////////////////////////////////
//1. 삭제버튼 추가
//2. 저장되게끔! 새로고침해도 저장한내용이 계속 남아있게끔
//3.삭제버튼을 누르면 저장된 데이터에 그 부분을지우게끔 업데이트



