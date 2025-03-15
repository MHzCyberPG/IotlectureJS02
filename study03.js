//Data type
//คือตัวข้อมูล (Literal) ที่เก็บไว้ในตัวแปร (Variable)หรือที่นำไปใช้งาน
//----------------------------------------
// String
let aa = "Hello"

// Number 
let bb = 10
let cc = 10.54548

// Boolean
let dd = true
let ee = false 

//Array
let gg = [10,20,30,40,50,60]
let hh = ['AAA','BBB','CCC']
let ii = [10,'BBB',true,{data1:'Hi....',data2:'Bye.....'}]


// Object
// let C_Object = {data1:'Hi....',data2:'Bye.....'}
let ff = {
    yourname: 'John',
    age: 20,
    gender: 'Male',
    studentstate: true,
    address:{
        provice: 'Chonburi',
        City: 'Panthong'
    },
    food:['KFC', 'Pizza', 'Cake']
}

console.log(ff.yourname);
console.log(ff.address.provice);
console.log(ff.food[1]);