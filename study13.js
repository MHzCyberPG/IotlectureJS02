//funtion EP2
// คือ การทำงานหนึงๆ จะไม่ทำงานหากเราไม่เรียกใช้ ( Call funtion )
//-----------------------------------------
// 3. no parameter , has return

// function work03( this is parameter )
function work03()
{
    console.log(`Wow.....`);
    return 10 // have return
}


// 4. have parameter , has return

// function work04( this is parameter )
function work04(x,y)
{
    console.log(`Hey.....`);
    return x**y // have return
}

//วิธีการเรียกใช้ Function
// work03(this is argument)
let test1 = work03()
let test2 = work04(9,9)
console.log(`-------------------`);
console.log(test1);
console.log(test2);
console.log(test1+test2);