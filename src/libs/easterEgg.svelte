<script>
  import { easterEggMsg, isEasterEggShow } from "../stores";

  let show = false;
  isEasterEggShow.subscribe((value) => (show = value));
  function close() {
    isEasterEggShow.set(false);
  }

  let msg = "";
  easterEggMsg.subscribe((value) => (msg = value));
</script>

<dialog
  class="fixed top-0 left-0 w-full h-screen justify-center items-center bg-black/50 z-[9999]"
  style:display={show ? "flex" : "none"}
  on:click|self={close}
>
  <main class="min-w-1/5 max-w-4/5 p-8 bg-main text-label rounded-md">
    <header class="flex justify-between items-center mb-4">
      <h6 class="font-bold">你发现了彩蛋！🎉</h6>
      <button aria-label="close" on:click={close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </header>
    <div class="text-highlight text-xl font-bold font-serif">
      {@html msg}
    </div>
  </main>
</dialog>
