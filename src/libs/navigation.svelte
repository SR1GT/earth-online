<script>
  import Favicon from "/favicon.svg";

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
    <li><a href="#hero">首页</a></li>
    <li><a href="#features">游戏特色</a></li>
    <li><a href="#screenshots">实机演示</a></li>
    <li><a href="#requirements">系统要求</a></li>
    <li><a href="#faq">常见问题</a></li>
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
</style>
