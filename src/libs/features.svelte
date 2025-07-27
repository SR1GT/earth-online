<script>
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  let featuresSection;
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(featuresSection.querySelector("svg"), {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: featuresSection,
        start: "top 80%",
        once: true,
      },
    });

    gsap.from(featuresSection.querySelectorAll("li"), {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.2,
      delay: 0.4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: featuresSection,
        start: "top 80%",
        once: true,
      },
    });
  });
</script>

<section
  bind:this={featuresSection}
  id="features"
  class="flex-col justify-center items-center gap-8 px-16"
>
  <svg viewBox="0 0 1200 100" width="1200" height="100">
    <defs>
      <linearGradient id="fadeGrad2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="white" stop-opacity="1" />
        <stop offset="100%" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <mask id="fadeMask2">
        <rect width="100%" height="100%" fill="url(#fadeGrad2)" />
      </mask>
    </defs>
    <text
      x="50%"
      y="50%"
      font-size="80"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="none"
      stroke="var(--color-label)"
      stroke-width="2"
      mask="url(#fadeMask2)"
    >
      准备好体验极致真实了吗？
    </text>
  </svg>
  <ul class="w-full flex flex-wrap justify-evenly items-center gap-y-20">
    <li>
      <h3>🌍 无缝地图</h3>
      <p>1:1 还原地表地貌，连你家楼下奶茶店都精确建模</p>
    </li>
    <li>
      <h3>🎮 全职业系统</h3>
      <p>从 “学生” 到 “CEO” ，转职需消耗时间货币（且成功率随机）</p>
    </li>
    <li>
      <h3>⚡ 动态事件</h3>
      <p>随机触发 “老板的怒吼”、“房东催租” 等限时挑战任务</p>
    </li>
    <li>
      <h3>🌐 社交地狱</h3>
      <p>强制绑定 “家族公会” 和 “同事联盟”，退会惩罚机制严苛</p>
    </li>
  </ul>
</section>

<style scoped>
  li {
    width: 35rem;
    height: 12rem;
    padding: 2rem;
    border: 3px solid
      color-mix(in oklab, var(--color-highlight) 40%, transparent);
    border-radius: 10px;
    &:hover {
      box-shadow:
        0 0 50px 5px var(--color-highlight),
        0 0 5px 1px var(--color-highlight) inset;
      border-color: var(--color-highlight);
      background-color: color-mix(
        in oklab,
        var(--color-highlight) 10%,
        transparent
      );
      transition: all 0.15s ease-in-out;
    }
  }
  li h3 {
    font-size: 2.25rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  li p {
    font-size: 1.125rem;
  }
</style>
