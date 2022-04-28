// 创建渲染器

import {  Container, Sprite, Text, Texture } from "pixi.js";
import { createRenderer } from "vue";
const renderer = createRenderer<Container, Container>({
  createElement(type) {
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
        break;
      default:
        throw new Error(`type 不存在${type}`);
        break;
    }
    return element;
  },
  patchProp(el, key, prevValue, nextValue) {
    // console.log(el)
    // console.log(key)
    switch (key) {
      case "texture":
        (el as Sprite).texture = Texture.from(nextValue);
        break;
      default:
        el[key] = nextValue;
        // el.y = nextValue;
        break;
    }
  },
  insert(el, parent) {
    parent.addChild(el);
  },
  remove(el) {
    if (el && el.parent) {
      el.parent.removeChild(el);
    }
  },
  createText(text: string) {
    return new Text(text);
  },
  createComment(text: string) {
    return new Text(text);
  },
  setText() {},
  setElementText() {},
  parentNode(node) {
    return node.parent;
  },
  nextSibling() {
    return null;
  },
});

export function createApp(rootComponent: any) {
  return renderer.createApp(rootComponent);
}
