export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
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

sleep(){
  this.sleepLevel = 10;
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
messageSleep(){
  if(this.sleepLevel < 4){
    return "I'm sleepy!"
  }
}
}