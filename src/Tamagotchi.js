export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.playfulLevel = 10;
    this.wait = false;
    this.alive = true;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
  areYouStarving() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  feed() {
    this.foodLevel = 10;
  }
  feedSnack(){
    if(this.foodLevel >= 10) { 
      return "Im full";     
    } else {
      this.foodLevel += 1;
    }
  }
  waiting() {
    if (this.wait === false && this.alive === true) {
      this.foodLevel = 10
      this.wait = true;
      setTimeout(() => {
        this.wait = false;
      }, 2001)
    }
  }
  messageFood() {
    if (this.foodLevel < 4) {
      return "I'm hungry!"
    }
  }

  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 1000);
  }
  areYouSleepy() {
    if (this.sleepLevel > 0) {
      return false;
    } else {
      return true;
    }
  }
  sleep() {
    this.sleepLevel = 10;
  }

  nap(){
    if(this.sleepLevel >= 6) { 
      return "Im not Tired";     
    } else {
      this.sleepLevel += 5;
    }
  }

  waiting2() {
    if (this.wait === false && this.alive === true) {
      this.sleepLevel = 10
      this.wait = true;
      setTimeout(() => {
        this.wait = false;
      }, 5001)
    }
  }
  messageSleep() {
    if (this.sleepLevel < 4) {
      return "I'm sleepy!"
    }
  }

  setPlayful() {
    setInterval(() => {
      this.playfulLevel--;
    }, 1000);
  }

  areYouMad() {
    if (this.playfulLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  play() {
    this.playfulLevel = 10;
  }
  giveToy(){
    if(this.playfulLevel >= 8) { 
      return "NO!!!";     
    } else {
      this.playfulLevel += 3;
    }
  }
  waiting3() {
    if (this.wait === false && this.alive === true) {
      this.playfulLevel = 10
      this.wait = true;
      setTimeout(() => {
        this.wait = false;
      }, 4001)
    }
  }

  aliveCheck() {
    let levelSum = this.foodLevel + this.sleepLevel + this.playfulLevel;
    if (levelSum === 0) {
      return  "Your Tamagotchi is dead!";
    } else if (levelSum < 18 && levelSum > 3) {
      return  "Im good";
    } else {
      return "I'm enjoying life";
    }
  }
}




