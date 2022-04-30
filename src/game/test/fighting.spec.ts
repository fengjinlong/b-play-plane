import { describe, it, test, expect, vi } from "vitest";
import { Bullet } from "../Bullet";
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from "../EnemyPlane";
import { fighting } from "../fighting";
import { setupPlane } from "../plane";
describe("核心战斗逻辑", () => {
  it("当我方子弹碰到敌军的时候，应该都销毁", () => {
    const bullet = new Bullet();
    bullet.y = 0;
    bullet.x = 0;
    bullet.width = 100;
    bullet.height = 100;
    const bullets = [bullet];
    const plane = setupPlane({}, bullets);
    const enemy = new EnemyPlane();
    enemy.x = 0;
    enemy.y = 0;
    enemy.width = 50;
    enemy.height = 50;
    const enemyPlanes = [enemy];
    fighting(plane, enemyPlanes);
    expect(bullets.length).toBe(0);
    expect(enemyPlanes.length).toBe(0);
  });
});
