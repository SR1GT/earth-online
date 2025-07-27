<script>
  import gsap from "gsap";
  import TextPlugin from "gsap/TextPlugin";
  import { onMount } from "svelte";

  const persons = [
    {
      avatar: "/person1.png",
      nickname: "码农 007",
      achievement: "连续通关 “996 副本” 365 天",
      newProp: "腰椎间盘突出Ⅲ级",
    },
    {
      avatar: "/person2.png",
      nickname: "驴友",
      achievement: "解锁 195 张地图",
      newProp: "语言精通 LV8",
    },
  ];
  let currentPerson = persons[0];
  let currentIndex = 0;
  let avatar, nickname, achievement, newProp;

  gsap.registerPlugin(TextPlugin);
  onMount(async () => {
    const durationSecond = 0.5;
    while (true) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await gsap.to(avatar, { duration: durationSecond, opacity: 0 }).then();
      currentIndex = (currentIndex + 1) % persons.length;
      currentPerson = persons[currentIndex];
      gsap.to(avatar, {
        duration: durationSecond,
        delay: durationSecond,
        opacity: 1,
        attr: { src: currentPerson.avatar },
      });
      gsap.to(nickname, { duration: durationSecond, text: "" });
      gsap.to(nickname, {
        duration: durationSecond,
        delay: durationSecond,
        text: currentPerson.nickname,
      });
      gsap.to(achievement, { duration: durationSecond, text: "" });
      gsap.to(achievement, {
        duration: durationSecond,
        delay: durationSecond,
        text: currentPerson.achievement,
      });
      gsap.to(newProp, { duration: durationSecond, text: "" });
      gsap.to(newProp, {
        duration: durationSecond,
        delay: durationSecond,
        text: currentPerson.newProp,
      });
    }
  });
</script>

<section id="screenshots" class="flex-col justify-center items-center gap-8">
  <h2 class="flex items-center text-5xl font-bold mb-4">
    这里是
    <strong class="text-7xl text-highlight">全球玩家实况</strong>
    ，每一秒都在真实互动！
  </h2>
  <div class="flex items-center gap-8 p-8 border rounded-lg">
    <h3>最新玩家动态</h3>
    <div class="w-48 aspect-[4/5] border-8 border-amber-700">
      <img
        bind:this={avatar}
        src={currentPerson.avatar}
        alt=""
        class="w-full h-full object-cover"
      />
    </div>
    <ul class="w-84 flex flex-col gap-8">
      <li>
        <strong>玩家昵称：</strong>
        <span bind:this={nickname}>{currentPerson.nickname}</span>
      </li>
      <li>
        <strong>最新成就：</strong>
        <span bind:this={achievement}>{currentPerson.achievement}</span>
      </li>
      <li>
        <strong>最新属性：</strong>
        <span bind:this={newProp}>{currentPerson.newProp}</span>
      </li>
    </ul>
  </div>
  <a
    href="https://www.skylinewebcams.com/zh/top-live-cams.html"
    class="px-8 py-2 border border-highlight hover:bg-highlight hover:text-main duration-150 rounded-full"
  >
    查看更多动态实况
  </a>
  <small class="text-highlight font-bold animate-pulse">
    最新 NPC —— AI 正在锐意开发中，敬请期待...
  </small>
</section>

<style scoped>
  h3 {
    writing-mode: vertical-lr;
    letter-spacing: 0.5em;
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 8px var(--color-highlight);
  }
</style>
