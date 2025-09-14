// try {
    let t1 = new Task('to do smart list / gestion des tasks', '1', "silver");
    let t2 = new Task('mY-CV', '2', "cadetblue");
    let t3 = new Task('G-Web / geniral gestion', '3', "palegreen");
    let t4 = new Task('دراسة خطة عمل على المشروع', '4', "cadetblue");
    let t5 = new Task('SQL-PyVuew ', '5', "tomato");
    let t6 = new Task('temp roud map / gestion de temp', '6', "chocolate");
    var tasks = {1:t1.block, 2:t2.block, 3:t3.block, 4:t4.block, 5:t5.block, 6:t6.block};
    let vuew = document.querySelector(".tasks-vuew-vuew");
    // vuew.innerHTML = '';
    for (let i = 1; i <= 6; i += 1) {
        vuew.appendChild(tasks[i]);
    }
// } catch (err) {
    console.log(err);
// }
function create_task_block(name, color) {
    let task = document.createElement('div');
    task.setAttribute('class', 'task simple-style margin-8 simple-border background-' + color);
    let p = document.createElement('p');
    p.innerText = name;
    p.setAttribute('id', name);
    p.setAttribute('class', 'task-name inline size-28 bold franklin-font margin-100 color-white');
    if (name == "G-Web / geniral gestion" ) {
        let a = document.createElement('a');
        a.setAttribute('href', "http://g-web.localhost/index.php");
        a.appendChild(p);
        task.appendChild(a);
    } else {
        task.appendChild(p);
    }
    return task;
}
var To_Do_List = {};
var contor = 0;
function Task(name, id, color=(24, 108, 141)){
    // atributes 
    this.id = id;
    this.name = name,
    this. color = color,
    this.task = create_task(this.name, this.id, this.color),
    this.block = create_task_block(this.name, this.color),
    this.complet = false,
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
        let task = new Task(name, id);
        return task;
    }
}

function create_task(name, id, color) {
    // if color == (24, 108, 141)
    let task = document.createElement('div');
    task.setAttribute('class', 'task simple-style margin-8');
    task.setAttribute('id', id);
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
    return task;
}
function add_new_task() {
    let name = document.getElementById('new-task').value;
    document.getElementById('new-task').value = '';
    if (name) {
        contor += 1;
        id = contor;

        let task_obj = new Task().create_task(id, name);
        append_task(task_obj, id);
    }
}
function clicked(id) {
    To_Do_List[id].completed();
}
function close_task(id) {
    document.getElementById(id).setAttribute('class', 'none');

    delete To_Do_List[id];
    contor -= 1;
    afficher();
}
function append_task(task, id) {
    // document.querySelector(".tasks-vuew-vuew").appendChild(task.task);
    To_Do_List[id] = task.get_task_odj();
    // console.log(task.get_obj());
    afficher();
    return true;
}
function afficher() {
    filtre();
}
function filtre () {
    let filter = document.querySelector('#filter').value;
    let vuew = document.querySelector(".tasks-vuew-vuew");
    if (filter){
        if (filter == 'complet' | filter == 'completed' | filter == 'check') {
            for (let i=1; i <= contor; i += 1){
                if ( To_Do_List[i].complet ) {
                    vuew.appendChild(To_Do_List[i].task);
                }
            }
        } else {
            try {
                vuew.innerHTML = '';
                let F = new RegExp(filter);
                for (let i=1; i <= contor; i += 1){
                    if ( F.test(To_Do_List[i].name) ) {
                        vuew.appendChild(To_Do_List[i].task);
                    }
                }
            } catch (err) {
                console.log(err);
            } finally {
                // for (let i = 1; i <= 3; i += 1) {
                //     vuew.appendChild(tasks[i]);
                // }
            }
        }
    } else {
        vuew.innerHTML = '';
        for (let i=1; i <= contor; i += 1){
            vuew.appendChild(To_Do_List[i].task);
        }
        // for (let i = 1; i <= 3; i += 1) {
        //     vuew.appendChild(tasks[i]);
        // }
    }
}
function Clear() {
    To_Do_List = {};
    contor = 0;
    let vuew = document.querySelector(".tasks-vuew-vuew");
    vuew.innerHTML = '';
    filtre();
}
