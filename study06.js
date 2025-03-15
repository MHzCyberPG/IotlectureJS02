// Operator ตัวนำเนินการ EP.2
// คือ เครื่องหมายที่ใช้ในการดำเนินการกับข้อมูล
//----------------------------------
//Assignment Operators = += -= *= /= %=
let a = 10
let b = 10
//let b = b+a
a = a*100 

console.log(a);
b *= 100
console.log(b);

// Nullish Coalescing Operatppr
// กรณีที่หน้า ?? เป็น Null จะได้ค่าหลังเครื่องหมาย
// กรณีที่หน้า ?? เป็นใช่ Null จะได้ค่านั้นๆ เลย

let aa = null
let bb = 30
console.log(aa??"Hello");
console.log(bb??555);

// Ternary Conditional Operator __?__:__
//เงื่อนไข ? ทำ/ได้ เมื่อจริง : ทำ/ได้ เมื่อเท็จ
console.log(100 < 500 ? "hello... " : "Bye...");
let cc = 'Money'
let dd = 'Monkey'
console.log(cc == dd ?'Wow.....' : 'Woo.....');


//Spread Operator ... (จุด 3 จุด) จะใช้กับ Object และ Array
let ee = [10,20,30,40,50,60,70,80,90,100]
let ff = [111,222]

