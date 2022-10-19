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

class createRoom{  // 8) 'this' inside a class
    constructor(name){
        this.table = `${name}s table`
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap}`);
    }
}

// let createRoom = function (name){  // 7) 'this' inside a constructor
//     this.table = `${name}s table`
// }
// createRoom.prototype.cleanTable = function(soap){  // 7) 'this' inside a constructor
//     console.log(`cleaning ${this.table} using ${soap}`);
// }

const jillRoom = new createRoom('jill');  // 7) 'this' inside a constructor
const johnsRoom = new createRoom('john');  // 7) 'this' inside a constructor
jillRoom.cleanTable('some soap');  // 7) 'this' inside a constructor
johnsRoom.cleanTable('some soap');  // 7) 'this' inside a constructor

// console.log(johnsRoom.table)  // 2) 'this' inside an object
// johnsRoom.cleanTable()  // 3) 'this' inside a method
// this.garage.cleanTable()  // 3) 'this' inside a method
// cleanTable.call(this.garage,'some soap');  // 5) call function to rescue
// cleanTable.call(johnsRoom,'some soap');  // 5) call function to rescue


// second part
// 1) fat arrow function
let getA = a => a;
console.log(getA(1));  // 1
// 2) fat arrow function
let square = a => a*a;
console.log(square(2));  // 4
// 3)
let square1 = (a) => { return a*a };
console.log(square1(2)) // 4
// 4)
var a = 4
let square2 = () => { return a*a };
console.log(square2())  // 16
// 5)
var a = 4
let square3 = _ => { return a*a };
console.log(square3())  // 16
// 6)
let mult = (a,b) => { return a*b};
console.log(mult(2,4));  // 8
// 7)
var x = function (){
    this.val = 1
    setTimeout(() => {
        this.val++;
        console.log(this.val)
    },1)
}
var xx = new x()  // 2
// 8) Regular function
var y = function(){
    console.log(arguments[0])  // 1
};

y(1,2,3);
// 9) fat arrow function
var z = (...n) => {
    console.log(n[0])  // 1
};

z(1,2,3);

// second part 
// modified for 3) no. Question Answer

class Student {
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    setPlacementAge(minPlacementAge){
        // console.log(this);
        return(minMarks) => {
            // console.log('inside egligibleForCurrentCompany' , this)
            // if(this.marks > minMarks && this.age > minPlacementAge){
            //     console.log(this.name + " is ready for palcements")
            // } else {
            //     console.log(this.name + " is not ready for placement")
            // }
            if(this.marks > minMarks){
                console.log(this.name + " is egligible")
            }
        }
    }
    
}

const Amar = new Student('Amar', 25 , 75 );
const Soni = new Student('Soni', 13 , 35 );

Amar.setPlacementAge(18)(40);
Soni.setPlacementAge(18)(40);