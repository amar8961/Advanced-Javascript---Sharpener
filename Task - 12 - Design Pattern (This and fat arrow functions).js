// this inside a global scope
this.table = 'window table'; 
// console.log(window.table);  // output -> 'window table'

this.garage = {
    table: 'garage table',
    cleanTable(){  // this inside a method
        console.log(`cleaning ${this.table}`)
    }
};
// this inside an object
let johnsRoom ={
    table: 'johns table',
    cleanTable(){  // this inside a method
        console.log(`cleaning ${this.table}`)
    }
}
console.log(johnsRoom.table)
johnsRoom.cleanTable()  // this inside a method
this.garage.cleanTable()  // this inside a method
