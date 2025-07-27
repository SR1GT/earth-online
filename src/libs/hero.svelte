<script>
  import { onMount } from "svelte";
  import Earth3D from "../utils/three";

  let container;
  onMount(async () => new Earth3D(container));
</script>

<section id="hero" class="relative">
  <svg class="absolute top-0 left-0 w-full h-[110%]">
    <defs>
      <linearGradient id="fadeGrad1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="white" stop-opacity="1" />
        <stop offset="80%" stop-color="white" stop-opacity="1" />
        <stop offset="100%" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <mask id="fadeMask1">
        <rect width="100%" height="100%" fill="url(#fadeGrad1)" />
      </mask>
    </defs>
    <image
      href="/starsky.jpg"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      mask="url(#fadeMask1)"
    />
  </svg>
  <div bind:this={container} class="w-3/5 h-full z-10"></div>
  <div class="relative w-2/5 h-full flex flex-col justify-center gap-16 z-10">
    <p
      class="absolute top-5/12 right-1/6 -translate-y-1/2 rotate-15 text-2xl text-red-500 font-bold font-serif animate-pulse"
    >
      警告！本游戏极度硬核
    </p>
    <h1 class="text-6xl font-bold">
      地球 Online
      <span class="text-xl font-serif">v{new Date().getFullYear()}</span>
    </h1>
    <p class="flex gap-4 items-center text-xl">
      <span>超真实物理引擎</span>
      <span>全随机出生点</span>
      <span>强制沉浸式体验</span>
    </p>
  </div>
</section>

<style>
  h1 {
    background-image: linear-gradient(to bottom, #fff, var(--color-highlight));
    background-clip: text;
    color: transparent;
  }
  p span {
    text-shadow: 0 0 5px var(--color-highlight);
  }
</style>
