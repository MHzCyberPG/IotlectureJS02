//function Ep5
// คือ การทำงานหนึงๆ จะไม่ทำงานหากเราไม่เรียกใช้ ( Call funtion )
//------------------------------------------------------
// 2. arrow function การประกาศฟังก์ชั่นโดยใช้ => (fat arrow)
let aa = ()=>{
    console.log(`Hello.....`);
}

let aaa = ()=> console.log(`Hello..........`);

const bb = (x,y)=>{
    return x + y
}

const bbb = (x,y) => x + y

console.log(bb(5,10));
console.log(bbb(55,100));


const cc = (x) => console.log(x);
const ccc = x => console.log(x);

console.log(cc(1));
console.log(ccc(1));