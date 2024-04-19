let nowTime=new Date()

function changeTime()
{
    let nowTime=new Date()
    let days=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    document.getElementById("dayName").innerHTML=days[nowTime.getDay()]
    document.getElementById("dateNow").innerHTML=nowTime.getDate()
    if(nowTime.getDate()<10)
    {
        document.getElementById("dateNow").innerHTML="0"+nowTime.getDate()  
    }
    document.getElementById("month").innerHTML=months[nowTime.getMonth()]
    document.getElementById("year").innerHTML=nowTime.getFullYear()
    document.getElementById("hour").innerHTML=nowTime.getHours()
    if(nowTime.getHours()>12)
    {
        document.getElementById("hour").innerHTML="0"+(nowTime.getHours()-12)
        document.getElementById("ampm").innerHTML="PM"
    }
    else if(nowTime.getHours()<10)
    {
        document.getElementById("hour").innerHTML="0"+nowTime.getHours()
    }
    document.getElementById("min").innerHTML=nowTime.getMinutes()
    if(nowTime.getMinutes()<10)
    {
        document.getElementById("min").innerHTML="0"+nowTime.getMinutes()
    }
    document.getElementById("second").innerHTML=nowTime.getSeconds()
    if(nowTime.getSeconds()<10)
    {
        document.getElementById("second").innerHTML="0"+nowTime.getSeconds()
    }
}







setInterval(changeTime,500)