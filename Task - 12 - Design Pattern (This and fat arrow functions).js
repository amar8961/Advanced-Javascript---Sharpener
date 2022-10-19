// 1) this inside a global scope
this.table = 'window table'; 
// console.log(window.table);  // output -> 'window table'
const cleanTable = function(soap){  // 4) this inside a function
    console.log(`cleaning ${this.table} using ${soap}`);
}
cleanTable.call(this,'some soap');  // 5) call function to rescue

this.garage = {
    table: 'garage table',
    cleanTable(){  // 3) this inside a method
        console.log(`cleaning ${this.table}`)
    }
};
// 2) this inside an object
let johnsRoom ={
    table: 'johns table',
    cleanTable(){  // 3) this inside a method
        console.log(`cleaning ${this.table}`)
    }
}
console.log(johnsRoom.table)
johnsRoom.cleanTable()  // 3) this inside a method
this.garage.cleanTable()  // 3) this inside a method
cleanTable.call(this.garage,'some soap');  // 5) call function to rescue
cleanTable.call(johnsRoom,'some soap');  // 5) call function to rescue
