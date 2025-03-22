//function Ep4
// คือ การทำงานหนึงๆ จะไม่ทำงานหากเราไม่เรียกใช้ ( Call funtion )
//------------------------------------------------------
//function expression การประกาศฟังก์ชันโดยใช้ตัวแปร
// 1. anonymous funtion ฟังก์ชั่นไม่มีชื่อ

let aa = function(){
    console.log(`Hello.....`);
}

const bb = function(x,y){
    console.log(x+y);

}

aa()
bb(5,10)
bb(100,200)

aa = 999
console.log(aa);

// bb=555 Error