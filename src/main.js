
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Tamagotchi } from './Tamagotchi.js';
// import { startTimer } from './timer.js';


const tama = new Tamagotchi('Tama');

$(document).ready(function () {

  $("#start").click(function () {
    $("#start").hide();
    tama.setHunger();
    setInterval(() => {
      $("#food-level").text(tama.foodLevel);
    }, 1000);
    if(tama.foodLevel === 0){
      alert("Im Hungry!");
    }
    tama.setSleep();
    setInterval(() => {
      $("#sleep-level").text(tama.sleepLevel);;
    }, 1000);
    tama.setPlayful();
    setInterval(() => {
      $("#playful-level").text(tama.playfulLevel);
    }, 1000);
  });
});
$("#food").click(function () {
  tama.feedSnack();
  $("#food-level").html(tama.foodLevel);
  if (tama.foodLevel === 10){
    alert("Im Full!");
  }
});
$("#sleep").click(function () {
  tama.nap();
  $("#sleep-level").html(tama.sleepLevel)
  if (tama.sleepLevel === 10){
    alert("I'm not Tired!");
  }
});
$("#play").click(function () {
  tama.giveToy();
  $("#playful-level").html(tama.playfulLevel);
  if (tama.playfulLevel === 10){
    alert("NO TOY!");
  }
});








// var Tamagotchi = {
//   initialize: function (name) {
//     this.name = name;
//     this.foodLevel = 10;
//     this.playLevel = 10;
//     this.sleepLevel = 10;
//   },
//   timePasses: function () {
//     this.foodLevel = this.foodLevel - 1;
//     this.playLevel = this.playLevel - 2;
//     this.sleepLevel = this.sleepLevel - 2;
//   },
//   isAlive: function () {
//     if (this.foodLevel <= 0 || this.playLevel <= 0 || this.sleepLevel <= 0) {
//       return false;
//     } else {
//       return true;
//     }
//   },
//   foodUp: function() {
//     this.foodLevel = this.foodLevel + 1
//   },
//   playUp: function() {
//     this.playLevel = this.playLevel + 1
//   },
//   sleepUp: function() {
//     this.sleepLevel = this.sleepLevel + 1
//   }
// }

// var tamagotchi;
// $(document).ready(function() {
//   $("#start-button").click(function() {
//     $("#start-button").hide();
//     tamagotchi = Object.create(Tamagotchi);
//     tamagotchi.initialize(prompt("Name your Tamagotchi"));

//     var countdown = setInterval(function() {

//         tamagotchi.timePasses();
//         $("span#food-level").text(tamagotchi.foodLevel);
//         $("span#play-level").text(tamagotchi.playLevel);
//         $("span#sleep-level").text(tamagotchi.sleepLevel);
//         if (!tamagotchi.isAlive()) {
//           alert(tamagotchi.name + " is dead!");
//           clearInterval(countdown);
//           $("#start-button").show();}
//       }, 1000)
//     })
//   $("#food-button").click(function() {
//     tamagotchi.foodUp();
//     $("span#food-level").text(tamagotchi.foodLevel);
//   })
//   $("#play-button").click(function() {
//     tamagotchi.playUp();
//     $("span#play-level").text(tamagotchi.playLevel);
//   })
//   $("#sleep-button").click(function() {
//     tamagotchi.sleepUp();
//     $("span#sleep-level").text(tamagotchi.sleepLevel);
//   })
//   })
