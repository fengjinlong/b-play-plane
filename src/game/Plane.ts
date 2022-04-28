export interface Plane {
  moveRight();
  x: number;
  y: number;
  moveLeft();
  moveUp();
  moveDown();
}

const defaultOptions = {
  x: 0,
  y: 0,
  speed: 5,
};
export function setupPlane(plane:any, options?:any): Plane {
  Object.assign(plane, defaultOptions, options);
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
  return plane;
}
