//control statement (loop iteration repetition) 
//break and continue ใน Loop
//---------------------------------------------
// 1. break in loop ทำงานเมื่อไหร่ จบลูปเลย
for(let i = 1; i<=5;i++)
{
    if(i==3)
    {
        break;
    }
    console.log(`${i} Hello`)

}

// 2. continue in loop ทำงานเมื่อไหร่ จบลูปรอบนั้้น ไปทำรอบต่อไป
for(let i = 1; i<=5;i++)
{
    if(i==3)
    {
    continue;
    }
    console.log(`${i} Hello`)
    
}