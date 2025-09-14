function Task(id, name,color){
    this.id = id;
    this.name = name;
    this.color = color;
    this.compete = false;


    this.Set_complete= (complete)=>{
        this.complete = complete;
    }
}


function create_dom(Task){
    if(Task == null){
        return;
    }
    let id = Task.id;
    let name = Task.name;
    let color = Task.color;
    
    let div = document.createElement("div");
    div.setAttribute('class', 'task simple-style margin-8');
    div.setAttribute('id', id);
    let p = document.createElement('p');
    p.innerText = name;
    p.setAttribute('id', name+id);
    p.setAttribute('onclick', 'clicked('+id+');');
    p.setAttribute('class', 'task-name inline size-28 bold franklin-font margin-100 color-white cursor-pointer');
    let i = document.createElement('input');
    i.setAttribute('type', 'button');
    i.setAttribute('value', 'x');
    i.setAttribute('onclick', 'close_task('+id+');');
    i.setAttribute('class', 'close-task float-right size-25 bold heading radius-90 cursor-pointer');
    task.appendChild(p);
    task.appendChild(i);
}