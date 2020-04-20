export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    // this.sleep = 10;


  }
  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  hungryMode() {
    setInterval(() => {
      if (this.foodLevel > 0) {
        this.foodLevel -= 1;
      }
    }, 1000);
  }

  areYouStarving() {
    if (this.foodLevel > 0){
      return false;
    } else {
      return true;
    }
  }
}