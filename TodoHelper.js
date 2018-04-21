/**
 * Created by István Szegedi on 2017. 05. 16.
 */

function TodoHelper(input){
    this.input = input;
}

TodoHelper.prototype.trashInput = function(){
    this.input.val('');
};