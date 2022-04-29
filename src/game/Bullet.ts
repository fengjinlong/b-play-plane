export class Bullet {
  public border: number=0;
  public onDestroy: any;
  move() {
    this.y -= this.speed;
    if (this.y <= this.border) {
      this.onDestroy && this.onDestroy()
    }
  }
  public x: number = 0;
  public y: number = 0;
  public speed: number = 5;
  constructor() {}
}
