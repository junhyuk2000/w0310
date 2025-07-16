const todoInput = document.querySelector('#todo_input');
const todoList = document.querySelector('#todo_list');
const addBtn = document.querySelector('#add_btn');

// 엔터키로 할 일 추가
function enterAdd() {
    if(event.keyCode === 13 && todoInput.value !== ""){
        createList();
    }
}

// 버튼으로 할 일 추가
addBtn.addEventListener('click',()=>{
    if( todoInput.value !== ""){
        createList();
    }
}
);



// 할 일 추가 함수
const createList = () =>{
        const newList = document.createElement('li');
        const newBtn = document.createElement('button');
        const newSpan = document.createElement('span');
        const newSpanIcon = document.createElement('span');
        const trashIcon = document.createElement('i');

        trashIcon.className="fa-solid fa-trash";
        trashIcon.style.cursor = 'pointer';
        
        
        newSpanIcon.appendChild(trashIcon)
        newList.appendChild(newBtn);
        newList.appendChild(newSpan);
        newList.appendChild(newSpanIcon);

        newSpan.textContent = todoInput.value;

        todoList.appendChild(newList);

        todoInput.value = "";

        newBtn.addEventListener('click',()=>{
            newList.classList.toggle("complete");
        });
   
        trashIcon.addEventListener('click',()=>{
            const isDelete = confirm("정말 삭제하시겠습니까?");
            isDelete && todoList.removeChild(newList);
        });
    };
    


const deleteBtn = document.querySelector('.delete_all');
const selectBtn = document.querySelector('.delete_select');
// 모든 항목 삭제 함수
const deleteAll = () =>{
    const isDeleteAll = confirm("정말 모든 항목을 삭제하시겠습니까?");
    
    if(isDeleteAll === true) {
        const liList = document.querySelectorAll('#todo_list li');
        for (let i =0; i<liList.length; i++){
            liList[i].remove();
        }
    }

};

// 모든 항목 삭제
deleteBtn.addEventListener('click',()=>{
    const hasItem = todoList.querySelectorAll('li').length>0;
    hasItem 
    ? deleteAll()
    : alert("삭제할 항목이 없습니다.");
});

const deleteSelect = () => {
    const list = [...document.querySelectorAll('#todo_list li')];
    const selectList = list.filter((elm)=>{
        return elm.classList.contains('complete');
    });
    const isDeleteSelect = confirm("선택한 항목을 삭제하기겠습니까?");
    if(isDeleteSelect === true){
        for(let i = 0; i<selectList.length;i++){
            selectList[i].remove();
        }
    }
};

// 선택 항목 삭제
selectBtn.addEventListener('click',()=>{
    const list = [...document.querySelectorAll('#todo_list li')];
    const selectList = list.filter((elm)=>{
    return elm.classList.contains('complete');
    });
    selectList.length>0
    ? deleteSelect()
    : alert("선택된 항목이 없습니다.");
})