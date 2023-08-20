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


//for changing color

// const colorBoxC = document.getElementById("colorBoxC");
// const colorBox = document.getElementById("colorBox");




// colorBox.addEventListener('input', (event) => {
//   const chosenColor = event.target.value;
//   colorBoxC.style.backgroundColor = chosenColor;
// })



// const colorInputs = document.querySelectorAll('input[type="color"]');
// const boxes = document.querySelectorAll('.color-box');

// colorInputs.forEach((input, index) => {
//   input.addEventListener('input', () => {
//     const selectedColor = input.value;
//     boxes[index].style.backgroundColor = selectedColor;
//   });
// });



const colorObjects = document.querySelectorAll('.color-object');
const colorPickers = document.querySelectorAll('.color-picker');

colorPickers.forEach((colorPicker) => {
    colorPicker.addEventListener('input', (event) => {
        const targetId = event.target.dataset.target;
        console.log(targetId)
        const chosenColor = event.target.value;

        const targetObject = document.getElementById(targetId);
        targetObject.style.backgroundColor = chosenColor;
    });
});


















