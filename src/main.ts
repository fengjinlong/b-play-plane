import { createApp } from "./runtime-canvas";
import App from "./App.vue";

import { game } from "./game";
// stage 根结点
createApp(App).mount(game.stage);
