// 1) this inside a global scope
this.table = 'window table'; 
// console.log(window.table);  // output -> 'window table'
const cleanTable = function(){  // 4) this inside a function
    console.log(`cleaning ${this.table}`);
}

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
