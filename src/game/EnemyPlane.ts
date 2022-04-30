export class EnemyPlane {
  public speed: number = 1;
  public y: number = 0;
  public x: number = 0;
  public height: number=100;
  public width: number=100;
  move() {
    this.y += this.speed;
  }
}
export function initEnemyPlanes(enemyPlanes: EnemyPlane[]) {
  // setInterval(() => {
    const enemy = new EnemyPlane();
    enemy.x = 0;
    enemy.y = 0;
    enemy.speed = 1;

    enemyPlanes.push(enemy);
  // }, 2000);

}
export function runEnemyPlanes(enemyPlanes: EnemyPlane[]) {
  enemyPlanes.forEach((enemyPlane) => {
    enemyPlane.move()
  })
}