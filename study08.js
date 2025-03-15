//Control Statement (Condition/Selection) EP.2
//คำสั่งควบคุมในกลุ่มต้องการพิสูจน์ตรวจสอบก่อนทำงานใดๆ
//3. if-else-if พิสูจน์หลายครั้ง
let score = 80
if(score>=80){console.log('A');}
else if(score>=70){console.log('B');}
else if(score>=60){console.log('C');}
else if(score>=50){console.log('D');}
else{console.log('F');}



//4.Switch-case
let busno = 84
switch(busno){
    case 84:
        console.log('ไปวัดไร่ขิง');
        break
    case 123:
        console.log('ไปสนามหลวง');
        break
    case 7:
        console.log('คลองเคย');
        break
    default:
        console.log('ไม่พบข้อมูล');
    
}