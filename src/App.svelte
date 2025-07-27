<script>
  import EasterEgg from "./libs/easterEgg.svelte";
  import Faq from "./libs/faq.svelte";
  import Features from "./libs/features.svelte";
  import Footer from "./libs/footer.svelte";
  import Hero from "./libs/hero.svelte";
  import Navigation from "./libs/navigation.svelte";
  import Requirements from "./libs/requirements.svelte";
  import Screenshots from "./libs/screenshots.svelte";
  import { easterEggMsg, isEasterEggShow } from "./stores";

  let show = false;
  isEasterEggShow.subscribe((value) => (show = value));

  const preventKeys = ["I", "i", "U", "u"];
  window.addEventListener("keydown", (e) => {
    if (
      e.key === "F12" ||
      ((e.ctrlKey || e.metaKey) && preventKeys.includes(e.key))
    ) {
      e.preventDefault();
      isEasterEggShow.set(!show);
      easterEggMsg.set(`<p>↑↑↓↓←→←→BA 这破网页有🔨console 你调个🐍皮</p>
<p>F12 抠烂也找不到彩蛋的 真当哥们没试过？🤡</p>  
<marquee>💥温馨提示：检测到 DevTools 行为将自动播放《大悲咒》remix 版</marquee>`);
    }
  });
</script>

<main
  class="w-full min-h-screen bg-gradient-to-r from-[#232946] via-[#1e1e2f] to-[#0f0f1c]"
>
  <Navigation />
  <Hero />
  <Features />
  <Screenshots />
  <Requirements />
  <Faq />
  <Footer />

  {#if show}
    <EasterEgg />
  {/if}
</main>

<style>
</style>
