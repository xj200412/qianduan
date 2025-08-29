


import { createApp } from "vue";
import "./style.css"; // 确保这个路径正确
import App from "./App.vue";
import router from "./router";
import 'font-awesome/css/font-awesome.min.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
createApp(App).use(router).mount("#app");

// 设置请求拦截器添加token
