//function Ep6
// คือ การทำงานหนึงๆ จะไม่ทำงานหากเราไม่เรียกใช้ ( Call funtion )
//------------------------------------------------------
//calback function คือฟังก์ชั่นที่ทำงานทีหลัง หลังจากการเรียกใช้ฟังก์ชั่นหนึ่งๆ ไปก่อนหน้า

function funcA(x,y,z){
    console.log(x+y)
    z(`IoT`)
}

function funcB(yourname){
    console.log(`Hello ${yourname}`);
}

funcA(5,10,funcB)

console.log(`'---------------------------'`);
funcA(100,200,(x)=>{console.log(`wow wow wow ..... ${x}`);})

