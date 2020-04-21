// export function timer (){
//   let count = 10;
//   let display = document.getElementById('timer');
//   setInterval(function(){
//     count --;
//     display.textContent = count;
//   })
// }


// export function startTimer(duration, display) {
//   var timer = duration, seconds;
//   setInterval(function () {

//       seconds = parseInt(timer % 60, 10);

//       seconds = seconds < 10 ? "0" + seconds : seconds;

//       display.textContent = seconds;

//       if (--timer < 0) {
//           timer = duration;
//       }
//   }, 1000);
// }
// window.onload = function () {
//   var tenSeconds = 60,
//       display = document.querySelector('#timer');
//   startTimer(tenSeconds, display);
// };
