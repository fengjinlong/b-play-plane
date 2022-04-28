import { createApp } from "./runtime-canvas";
import App from "./App.vue";

import { game } from "./game";
// view 容器
document.body.append(game.view);
// stage 根结点
createApp(App).mount(game.stage);
