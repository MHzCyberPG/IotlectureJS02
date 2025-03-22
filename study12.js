//funtion EP1
// คือ การทำงานหนึงๆ จะไม่ทำงานหากเราไม่เรียกใช้ ( Call funtion )
//-----------------------------------------

// Function  มี 4 ประเภทใหญ่ๆ
// 1. no parameter , no return


// function work01( this is parameter )
function work01()
{
    console.log(`Hello`);

    //return <----- this return (No return)
}


// 2. have parameter , no return
// function work02( this is parameter )
function work02(aa,bb,cc)
{
    console.log(aa+bb+cc);

    //return <----- this return ( No return)
}

//วิธีการเรียกใช้ Function
// work01(this is argument)
work01()
work01()
work02(10,20,30)
work02(100,200,300)
work01()