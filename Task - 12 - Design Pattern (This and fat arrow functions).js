// this inside a global scope
this.table = 'window table'; 
// console.log(window.table);  // output -> 'window table'

this.garage = {
    table: 'garage table'
};
// this inside an object
let johnsRoom ={
    table: 'johns table'
}
console.log(johnsRoom.table)
