import "./assets/base.css";

import { mount } from "svelte";
import App from "./App.svelte";

const app = mount(App, {
  target: document.getElementById("app"),
});

window.addEventListener("contextmenu", (e) => e.preventDefault());
window.addEventListener("load", () => {
  // const 典中典 = () => {
  //   alert("差不多得啦😅 非要看源码建议 V50 我发你压缩包");
  //   window.location.href = "https://www.bilibili.com/video/BV1GJ411x7h7";
  // };
  // const 测码 = new Date();
  // const 测码2 = new Date();
  // setInterval(() => {
  //   测码2.setTime(new Date());
  //   if (测码2.getTime() - 测码.getTime() > 1000) {
  //     典中典();
  //   }
  //   测码.setTime(new Date());
  // }, 500);
});

export default app;
