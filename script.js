let hrs = document.querySelector("#hrs-an");
let min = document.querySelector("#min-an");
let sec = document.querySelector("#sec-an");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hrs.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});


let hr = document.querySelector('#hrs-dg');
let mn = document.querySelector('#min-dg');
let sc = document.querySelector('#sec-dg');
setInterval(() => {
    let currentTime = new Date();
    hr.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours() ;
    mn.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes() ;
    sc.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds() ;
});














