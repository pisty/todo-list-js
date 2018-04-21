/**
 * Created by István Szegedi on 2017. 05. 14.
 */

function TodoList(storage){
    this.storage = storage;
    var todoList = {};
    todoList.list = [];

    this.storage.initStorage('todoList', todoList);
}

TodoList.prototype.add = function(note){
    if(note.length == 0) {
        return false;
    } else {
        var list = this.storage.get();
        list.list.push({
            'note': note,
            'status': 0
        });
        this.storage.set(list);
    }
};

TodoList.prototype.remove = function(id){
    var list = this.storage.get();
    list.list.splice(id,1);
    this.storage.set(list);
};

TodoList.prototype.setStatus = function(id){
    var list = this.storage.get();

    for (var i = 0; i < list.list.length; i++) {
        if (i == id) {
            list.list[i].status = 1;
        }
    }
    this.storage.set(list);
};

/*
* TODO refactor: ViewHelper + template
* */
TodoList.prototype.getNotes = function(){
    var notesList = "";
    var list = this.storage.get().list;
    for (var i = 0; i < list.length; i++) {
        notesList +=
            '<li class="list-group-item justify-content-between' + (list[i].status == 1 ? ' list-group-item-success' : '' ) + '">' +
                list[i].note +
                '<div data-id="' + i + '">' +
                '<span class="btn btn-link btn-todo-ready px-2"><i class="fa fa-check fa-2x" aria-hidden="true"></i></span>'  +
                '<span class="btn btn-link btn-todo-delete px-2"><i class="fa fa-trash-o fa-2x" aria-hidden="true"></i></span>'  +
                '</div>' +
            '</li>';
    }
    return notesList;
};