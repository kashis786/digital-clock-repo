let hours = document.getElementById('hours');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
function displayTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;
    document.getElementById('datePic').innerHTML = day + "-" + month + "-" + year;
    document.getElementById('datePic').style.color = "white";
    hours.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displayTime , 1000)