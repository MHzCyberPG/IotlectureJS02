//funtion EP3
// คือ การทำงานหนึงๆ จะไม่ทำงานหากเราไม่เรียกใช้ ( Call funtion )
//-----------------------------------------
//function for default parameter
function work05(x,y,z)// not have default
{
    console.log(x+y+z);

}

work05(10,20,30)

//  - function workA5(x=default,y=default,z=default)  <-- have default
function workA5(x=0,y=0,z=0)// have default
{
    console.log(x+y+z);
}
workA5(1)

//////////////////////////////////////////////

// function for return multiple Value
// return array value
function work06(){
    return [10,`hello`,true,555]
}

let data1 = work06()
console.log(data1[1]);

let [aa,bb,cc,dd] = work06()

// return object value
function work07(){
    return {
        a:10,
        b:`hello`,
        c:true,
        d:55555
    }
}

let data2 = work07()
console.log(data2.d);

//use dectruction to get value from object and array
console.log(`-------------------`);
let {a,b,c,d} = work07()
console.log(a);
console.log(b);
console.log(c);
console.log(d);
