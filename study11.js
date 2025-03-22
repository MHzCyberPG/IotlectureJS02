// control statemente (Loop iteration repetition)
//ทำงานเดิมๆ ซ้ำ
//------------------------------------
// forEach ใช้กับ Array
let data1 = [10,20,30,40,50]
data1.forEach((x)=>{console.log(x*100);})


//for...of ใช้กับ Array
for(let i of data1)
{
    console.log(i*100);
}

console.log(`---------------------`);


//for ... in ใช้กับ Object หรือ Array(แต่ไม่แนะนำ)
let data2 = {
    name : `Sombat`,
    age : 30,
    city : `Bangkok`
}


for(let wow in data2)
{
    console.log(wow)
    console.log(data2.wow);
    console.log(data2[wow]);
    console.log(`----------`);
}
