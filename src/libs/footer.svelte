<script>
  import Vite from "/vite.svg";
  import Svelte from "/svelte.svg";
  import { easterEggMsg, isEasterEggShow } from "../stores";

  function miku() {
    isEasterEggShow.set(true);
    easterEggMsg.set(
      `<p style="background-color: #39C5BB; color: white;">你召唤了初音未来！🎤</p>`
    );
  }
</script>

<footer
  class="flex justify-center items-center gap-16 p-8 border-t border-white/20"
>
  <ul>
    <li>
      Powered by
      <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
        <img src={Vite} class="h-6" alt="Vite logo" />
      </a>
      and
      <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer">
        <img src={Svelte} class="h-6" alt="Svelte logo" />
      </a>
    </li>
    <li>
      Copyright &copy; 2025
      <a
        href="https://github.com/SR1GT"
        target="_blank"
        rel="noopener noreferrer"
      >
        @SR1GT
      </a>
    </li>
  </ul>
  <ul>
    <li>
      图片资源：
      <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
        Unsplash
      </a>
      &
      <a
        href="https://planetpixelemporium.com/earth8081.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Planet Earth Texture Maps
      </a>
    </li>
    <li>免责声明：本页面所有内容纯属虚构，最终解释权归作者所有</li>
  </ul>
  <button on:click={miku}>
    <img src="/miku.gif" alt="miku" class="h-32" />
  </button>
</footer>

<style scoped>
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  li {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
</style>
