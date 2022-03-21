class ClickCounter {
  constructor() {
    this.clickCount = 0;
    this.autoClicker = 0;
    this.autoClickerCost = 100;
    this.value = 0;
    this.donutMultipler = 0;
    this.costOfDonutMultiplier = 10;
  }
  countClicks() {
    this.clickCount++;
  }

  getAutoClickercount() {
    return 0;
  }
  getAutoClickercount() {
    return this.autoClicker;
  }

  buyAutoClicker() {
    if (this.clickCount >= 100) {
      this.clickCount -= 100;
      this.autoClicker++;
    }
  }
  autoClickerCost() {
    if (clickCount >= autoClickerCost) {
      clickCount = clickCount - autoClickerCost;
      autoClickerCost += Math.floor(autoClickerCost * 0.10);
    }
  }
  getDonutMultiplier() {
    return this.donutMultipler;
  }

  buyDonutMultiplier() {
    if (this.clickCount >= 10) {
      this.clickCount -= 10;
      this.donutMultipler++;
    }
  }
}
export { ClickCounter };
