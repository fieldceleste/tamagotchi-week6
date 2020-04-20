export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    // this.sleep = 10;
    this.wait = false;
    this.alive = true;


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
    if(this.wait === false && this.alive === true) {
      this.foodLevel = 10
      this.wait = true;
      setTimeout(() => {
        this.wait = false;

      }, 1001 * 2)
   }
  }
}
