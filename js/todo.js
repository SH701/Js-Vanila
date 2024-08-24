const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY="toDos";

let toDos = [];

function savedtoDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // string 형식으로 바꿈
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove(); // 클래스가 있으면 삭제 없으면 추가
  toDos=toDos.filter(toDo => toDo.id !== parseInt(li.id)); // 클릭한 id와 다른 요소는 남김
  savedtoDos();
}

function paintToDo(newTodO) {
  const li = document.createElement("li"); // li요소 생성
  li.id=newTodO.id;
  const span = document.createElement("span");
  span.innerText = newTodO.text;
  span.style.fontSize = "22px"; 
  span.style.fontWeight="bold"
  if (document.body.classList.contains("dark-mode")) {
    span.style.color = "white";
} else {
    span.style.color = "black";
}
  const button = document.createElement("button");
  button.innerText =  "❌";
  button.style.backgroundColor="transparent";
  button.style.borderWidth=0;
  button.style.fontSize="24px"
  button.style.cursor="pointer"
  button.addEventListener("click", deleteTodo);
  li.appendChild(span); // li에 span요소 추가
  li.appendChild(button);
  toDoList.appendChild(li); 
}

function handleToDoSubmit(event) { // 괄호안에 event는 아무 이름이나 가능
  event.preventDefault(); // 새로고침했을때 초기화되는걸 막음
  const newTodO = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj={ // 각 요소마다 id생성
    text:newTodO,
    id:Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  savedtoDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY); 

if(savedToDos !== null){
  const parsedToDos=JSON.parse(savedToDos); //array형식으로 바꿈
  toDos=parsedToDos;
  parsedToDos.forEach(paintToDo); //forEach 함수를 실행시켜줌
}

function coolFilter(){ 
  
}
const input = document.querySelector("#myinput");

input.addEventListener("focus", function() {
  input.setAttribute("data-placeholder", input.getAttribute("placeholder")); 
  input.setAttribute("placeholder", ""); 
});

input.addEventListener("blur", function() {
  input.setAttribute("placeholder", input.getAttribute("data-placeholder")); 
});