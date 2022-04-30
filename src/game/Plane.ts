import { Bullet } from "./Bullet";

export interface Plane {
  bullets: Bullet[];
  run();
  attack();
  moveRight();
  x: number;
  y: number;
  moveLeft();
  moveUp();
  moveDown();
}

const defaultOptions = {
  x: 0,
  y: 300,
  speed: 5,
};
export function setupPlane(plane:any, bullets:Bullet[],options?:any,): Plane {
  Object.assign(plane, defaultOptions, options);
  plane.bullets = bullets;
  initMove(plane);
  initAttack(plane, bullets);
  initRun(plane, bullets);
  return plane;
}
function initAttack(plane: any, bullets: Bullet[]) {
  plane.attack = () => {
    const bullet = new Bullet();
    bullet.x = plane.x + 25;
    bullet.y = plane.y;
    bullet.border = 100
    bullet.onDestroy =() => {
      const index = bullets.indexOf(bullet);
      bullets.splice(index, 1);
    }
    bullets.push(bullet);
  };
}

function initRun(plane: any, bullets: Bullet[]) {
  plane.run = () => {
    bullets.forEach(bullet => {
      bullet.move();
    });
  };
}

function initMove(plane: any) {
  plane.moveDown = () => {
    plane.y += plane.speed;
  };
  plane.moveUp = () => {
    plane.y -= plane.speed;
  };
  plane.moveLeft = () => {
    plane.x -= plane.speed;
  };
  plane.moveRight = () => {
    plane.x += plane.speed;
  };
}

