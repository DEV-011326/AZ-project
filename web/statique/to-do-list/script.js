const To_Do_List = {};
var contor = 0;
function Task(name, id){
    // atributes 
    this.id = id;
    this.name = name,
    this.complet = false,
    this.task = create_task(this.name, this.id),
    // functions 
    this.get_task_odj = function () {
        return this;
    },
    this.completed = function () {
        if (!this.complet) {
            this.complet = true;
            document.getElementById(this.name+this.id).setAttribute('class', 'task-name inline size-28 bold franklin-font margin-100 color-white checked');
        }else {
            this.complet = false;
            document.getElementById(this.name+this.id).setAttribute('class', 'task-name inline size-28 bold franklin-font margin-100 color-white');
        };
    },
    this.get_obj = function () {
        return {
            'id' : this.id,
            'name' : this.name,
            'complet' : this.complet,
        }
    },
    this.cook = function () {
        return "id=" + this.id + ",name=" + this.name + ",complet=" + this.complet;
    }
    this.create_task = function (id, name, complet=false) {
        return create_task_obj(id, name, complet)
    }
}
function create_task_obj(name, id, complet=false) {
    let task = new Task(name, id);
    return task;
}
function create_task(name, id) {
    let task = document.createElement('div');
    task.setAttribute('class', 'task simpel-style margin-8');
    task.setAttribute('id', id);
    let p = document.createElement('p');
    p.innerText = name;
    p.setAttribute('id', name+id);
    p.setAttribute('onclick', 'clicked('+id+');');
    p.setAttribute('class', 'task-name inline size-28 bold franklin-font margin-100 color-white');
    let i = document.createElement('input');
    i.setAttribute('type', 'button');
    i.setAttribute('value', 'x');
    i.setAttribute('onclick', 'close_task('+id+');');
    i.setAttribute('class', 'close-task float-right size-25 bold heading radius-90');
    task.appendChild(p);
    task.appendChild(i);
    return task;
}
function add_new_task() {
    let name = document.getElementById('new-task').value;
    document.getElementById('new-task').value = '';
    if (name) {
        contor += 1;
        let task_obj = create_task_obj(name, contor);
        append_task(task_obj, contor);
    }
}
function clicked(id) {
    To_Do_List[id].completed();
}
function close_task(id) {
    document.getElementById(id).setAttribute('class', 'none');
    delete To_Do_List[id];
}
function append_task(task, ncontor) {
    document.querySelector(".tasks-vuew-vuew").appendChild(task.task);
    To_Do_List[ncontor] = task.get_task_odj();
    console.log(task.get_obj());
    
    // let cookie = task.cook();
    // if (document.cookie == '' && contor == 0) {
    //     document.cookie += cookie;
    // } else if (document.cookie != '' && contor == 0) {
    //     document.cookie = "";
    // }else {
    //     // document.cookie += cookie;
    //     document.cookie += ',' + cookie;
    // }
    // afficher();

    return true;
}

function afficher() {
    To_Do_List.forEach(task => {
        console.log(task.name);
        console.log(task.get_obj());
    });
}

// let i = document.getElementById('filter')
// i.addEventListener('change', filter())
function filter() {
    let f = document.getElementById('filter').value;
        if ( f ){
        let tv = document.getElementsByClassName('tasks-vuew-vuew');
        tv.value = '';
        To_Do_List.forEach(id => {
            if (f in To_Do_List[id].name) {
                tv.appendChild(To_Do_List[id].task);
            };
        });
    }else {
        To_Do_List.forEach(id => {
            tv.appendChild(To_Do_List[id].task);
        });
    }
}
// filter()


