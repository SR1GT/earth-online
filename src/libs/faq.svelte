<script>
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  let faqSection;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from([faqSection.querySelector("h2"), faqSection.querySelector("p")], {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: faqSection,
        start: "top 80%",
        once: true,
      },
    });

    gsap.from(faqSection.querySelectorAll("dt, dd"), {
      opacity: 0,
      y: 30,
      duration: 0.7,
      stagger: 0.15,
      delay: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: faqSection,
        start: "top 80%",
        once: true,
      },
    });
  });
</script>

<section
  bind:this={faqSection}
  id="faq"
  class="flex-col justify-center items-center gap-4"
>
  <h2 class="text-5xl font-bold">常见问题 FAQ</h2>
  <p class="text-label/50">如果你有任何疑问，请先查看以下常见问题解答。</p>
  <div class="flex justify-center items-start gap-16">
    <dl>
      <dt>为什么我的「人生主线」全是支线任务？</dt>
      <dd>因为你没氪「投胎 VIP」，系统默认给你塞满「打工日常」😅</dd>

      <dt>为什么「社交系统」这么难搞？</dt>
      <dd>本游戏采用「真实社交物理引擎」，嘴笨直接触发「冷场 DEBUFF」❄️</dd>

      <dt>为什么「经济系统」通货膨胀这么严重？</dt>
      <dd>
        因为「美联储」工会在后台狂刷「货币掉落率」，普通玩家只能捡金币碎片💸
      </dd>
    </dl>
    <dl>
      <dt>为什么「工作副本」不掉落「成就感」？</dt>
      <dd>该道具已被列为「稀有掉落」，建议转职「躺平玩家」降低难度🛌</dd>

      <dt>「恋爱副本」太难了，NPC动不动就发「好人卡」？</dt>
      <dd>建议先刷「颜值 DLC」或「钞能力 BUFF」，否则默认地狱难度💔</dd>

      <dt>这游戏能删号吗？我玩不下去了！</dt>
      <dd>理论上可以，但「重生 CD」未知，且大概率分配到「更烂的服务器」💀</dd>
    </dl>
  </div>
</section>

<style>
  dl {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    margin-top: 3.5rem;
    font-family: var(--font-serif);
  }
  dt {
    padding-top: 1.5rem;
    border-top: 1px dashed var(--color-label);
    &:first-child {
      padding-top: 0;
      border-top: none;
    }
    &::before {
      content: "Q：";
      color: var(--color-label);
    }
  }
  dd::before {
    content: "A：";
    color: var(--color-label);
  }
</style>
