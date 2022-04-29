import { Application } from "pixi.js";
import { Plane, setupPlane } from "./plane";
export * from "./plane";
export * from "./Bullet";
export const game = new Application({
  width: 500,
  height: 500,
});

// view 容器
document.body.append(game.view);

export function initGame(_plane, bullets) {
  const plane = setupPlane(_plane,  bullets);
  mainTicker(plane);
  return {
    plane,
    bullets,
  };
}

function mainTicker(plane: Plane) {
  game.ticker.add(() => {
    plane.run();
  });
}
