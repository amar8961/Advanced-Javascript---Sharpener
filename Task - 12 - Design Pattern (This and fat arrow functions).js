// 1) 'this' inside a global scope
this.table = 'window table'; 
// console.log(window.table);  // output -> 'window table'
// const cleanTable = function(soap){  // 4) 'this' inside a function
    
//     const innerFunction = function (_soap){  // 6) 'this' inside an inner function
//         console.log(`cleaning ${this.table} using ${_soap}`);
//     }
//     innerFunction(soap);  // 6) 'this' inside an inner function
// }

// cleanTable.call(this,'some soap');  // 5) call function to rescue

this.garage = {
    table: 'garage table',
    // cleanTable(){  // 3) 'this' inside a method
    //     console.log(`cleaning ${this.table}`)
    // }
};
// // 2) 'this' inside an object
// let johnsRoom ={
//     table: 'johns table',
//     cleanTable(){  // 3) 'this' inside a method
//         console.log(`cleaning ${this.table}`)
//     }
// }

let createRoom = function (name){  // 7) 'this' inside a constructor
    this.table = `${name}s table`
}
createRoom.prototype.cleanTable = function(soap){  // 7) 'this' inside a constructor
    console.log(`cleaning ${this.table} using ${soap}`);
}

const jillRoom = new createRoom('jill');  // 7) 'this' inside a constructor
const johnsRoom = new createRoom('john');  // 7) 'this' inside a constructor
jillRoom.cleanTable('some soap');  // 7) 'this' inside a constructor
johnsRoom.cleanTable('some soap');  // 7) 'this' inside a constructor

// console.log(johnsRoom.table)  // 2) 'this' inside an object
// johnsRoom.cleanTable()  // 3) 'this' inside a method
// this.garage.cleanTable()  // 3) 'this' inside a method
// cleanTable.call(this.garage,'some soap');  // 5) call function to rescue
// cleanTable.call(johnsRoom,'some soap');  // 5) call function to rescue
