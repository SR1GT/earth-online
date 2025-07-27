<script>
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  let version = { y: 2025, m: 7, d: 15, ts: 0 };
  const today = new Date();
  version.y = today.getFullYear();
  version.m = today.getMonth() + 1;
  version.d = today.getDate();
  version.ts = today.getTime();

  let reqSection;
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(reqSection.querySelector("h2"), {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: reqSection,
        start: "top 80%",
        once: true,
      },
    });

    gsap.from(reqSection.querySelector("table"), {
      opacity: 0,
      y: 30,
      duration: 0.7,
      delay: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: reqSection,
        start: "top 80%",
        once: true,
      },
    });

    gsap.from(reqSection.querySelector("small"), {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: reqSection,
        start: "top 80%",
        once: true,
      },
    });
  });
</script>

<section
  bind:this={reqSection}
  id="requirements"
  class="flex flex-col justify-center items-center gap-12 py-16"
>
  <h2
    class="text-5xl font-extrabold text-highlight drop-shadow-lg flex items-center gap-4"
  >
    <svg
      style="fill: currentColor"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M768 937.6c-6.4 0-9.6 0-16-3.2l-243.2-128-243.2 128c-9.6 6.4-22.4 3.2-35.2-3.2-9.6-6.4-16-19.2-12.8-32l44.8-268.8-195.2-192c-9.6-9.6-12.8-22.4-9.6-32s12.8-19.2 25.6-22.4l268.8-38.4 121.6-246.4c9.6-22.4 48-22.4 57.6 0l121.6 246.4 268.8 38.4c12.8 3.2 22.4 9.6 25.6 22.4s0 25.6-9.6 32l-195.2 192 44.8 268.8c3.2 12.8-3.2 25.6-12.8 32 6.4 6.4 0 6.4-6.4 6.4z"
      ></path>
    </svg>
    启动你的地球 Online
    <svg
      style="fill: currentColor"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M768 937.6c-6.4 0-9.6 0-16-3.2l-243.2-128-243.2 128c-9.6 6.4-22.4 3.2-35.2-3.2-9.6-6.4-16-19.2-12.8-32l44.8-268.8-195.2-192c-9.6-9.6-12.8-22.4-9.6-32s12.8-19.2 25.6-22.4l268.8-38.4 121.6-246.4c9.6-22.4 48-22.4 57.6 0l121.6 246.4 268.8 38.4c12.8 3.2 22.4 9.6 25.6 22.4s0 25.6-9.6 32l-195.2 192 44.8 268.8c3.2 12.8-3.2 25.6-12.8 32 6.4 6.4 0 6.4-6.4 6.4z"
      ></path>
    </svg>
  </h2>
  <div
    class="w-full max-w-3xl bg-white/5 rounded-2xl shadow-2xl p-8 backdrop-blur-lg border border-white/10"
  >
    <table class="w-full text-center text-lg text-white">
      <thead>
        <tr class="bg-highlight/20">
          <th class="rounded-tl-2xl">项目</th>
          <th>极简配置</th>
          <th class="rounded-tr-2xl">究极配置</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="font-semibold">出生装备</td>
          <td>二手尿布 + 负债 DEBUFF</td>
          <td>金汤匙+学区房产权证</td>
        </tr>
        <tr class="bg-white/5">
          <td class="font-semibold">日常副本</td>
          <td>996 地狱难度（无存档点）</td>
          <td>环球旅行（自动挂机版）</td>
        </tr>
        <tr>
          <td class="font-semibold">社交模块</td>
          <td>相亲市场物价通胀 300%</td>
          <td>自动触发 “舔狗大军” 事件</td>
        </tr>
        <tr class="bg-white/5">
          <td class="font-semibold">系统版本</td>
          <td colspan="2" class=" text-center">
            v{version.y}.{version.m}.{version.d}.{version.ts}-beta
            <br />
            <span class="text-sm">
              （热修内容：<del>社会逻辑 BUG</del> 正在修复）
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <small class="text-white/60 text-center mt-4 text-base">
    *本配置仅供娱乐参考，最终解释权归作者所有
  </small>
</section>

<style>
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-highlight);
  }
  th {
    padding: 1rem 0.5rem;
  }
  td {
    padding: 0.75rem 0.5rem;
  }
</style>
