import { describe, it, test, expect, vi } from "vitest";
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from "../EnemyPlane";
describe("Bullet", () => {
  it("move", () => {
    const enemy = new EnemyPlane();
    enemy.y = 0;
    enemy.speed = 1;
    enemy.move();
    expect(enemy.y).toBe(1);
  });
  it("initEnemyPlanes", () => {
    const enemyPlanes = []
    initEnemyPlanes(enemyPlanes)
    initEnemyPlanes(enemyPlanes)
    expect(enemyPlanes.length).toBe(2);
  })

  // it("自动生成 1 秒一个", () => {
  //   vi.useFakeTimers();
  //   const enemyPlanes = [];

  //   initEnemyPlanes(enemyPlanes);
  //   vi.advanceTimersByTime(6000);

  //   expect(enemyPlanes.length).toBe(3);
  //   vi.restoreAllMocks();
  // });
  it("所有敌军移动", () => {
    const enemy = new EnemyPlane();
    enemy.y = 1;
    const enemyPlanes = [enemy];
    runEnemyPlanes(enemyPlanes);
    expect(enemy.y).toBe(2);
  });
});
