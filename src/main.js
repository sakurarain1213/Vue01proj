import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入 element-plus
import ElementPlus from "element-plus";
// 导入 element-plus 样式
import "element-plus/dist/index.css";
// 导入 element-plus 图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// 导入全局样式
//import "@/styles/index.scss";  这部分文件还没有  先不写
// 创建 vue 实例
const app = createApp(App);

// 使用router\vuex\element-plus并挂载
app.use(store).use(router).use(ElementPlus).mount('#app')

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
