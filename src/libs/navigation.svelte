<script>
  import { onMount } from "svelte";
  import Favicon from "/favicon.svg";

  let activeId = "",
    navList = [
      { id: "hero", label: "首页" },
      { id: "features", label: "游戏特色" },
      { id: "screenshots", label: "实机演示" },
      { id: "requirements", label: "系统要求" },
      { id: "faq", label: "常见问题" },
    ];
  const updateActiveId = () => (activeId = window.location.hash.slice(1));
  onMount(() => {
    updateActiveId();
    window.addEventListener("hashchange", updateActiveId);
    return () => window.removeEventListener("hashchange", updateActiveId);
  });

  function feedback() {
    if (
      confirm("请在 github.com/SR1GT/earth-online 提交反馈或建议，是否跳转？")
    )
      window.open("https://github.com/SR1GT/earth-online/issues");
  }
</script>

<nav
  class="fixed top-0 w-full h-12 flex justify-between items-center bg-main border-b border-white/20 z-[999]"
>
  <ul class="flex items-center">
    <li>
      <img src={Favicon} alt="logo" class="size-6 mx-4" />
    </li>
    {#each navList as item}
      <li>
        <a href={`#${item.id}`} class={activeId === item.id ? "active" : ""}>
          {item.label}
        </a>
      </li>
    {/each}
  </ul>
  <ul>
    <li>
      <button on:click={feedback}>反馈</button>
    </li>
  </ul>
</nav>

<style scoped>
  a,
  button {
    display: block;
    height: 3rem;
    padding: 0.75rem 1.5rem;
    transition: all 0.15s ease;
    &:hover {
      background-color: var(--color-highlight);
      color: var(--color-main);
    }
  }
  a.active,
  a:focus {
    background-color: color-mix(
      in oklab,
      transparent 10%,
      var(--color-highlight)
    );
    color: var(--color-main);
  }
</style>
