<script>
  import { fly } from 'svelte/transition';
  import Modal from './Modal.svelte'
  export let open = false
</script>
<style>
:global(lc-sidemenu){
  position: absolute;
  width: 220px;
  height: 100vh;
  left: 0px;
  top: 0px;
  background-color: #fff; /* #ebeff2;*/
  z-index: 400000;
  transition: all ease-out 0.18s;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 21px;
  box-sizing: border-box;
}

:global(lc-sidemenu.hidden){
  pointer-events: none !important;
  transform: translateX(-70px);
}
</style>

<Modal bind:open={open} opacity="0.25">
  <lc-sidemenu transition:fly="{{x: -90, duration: 150}}">
    <slot />
  </lc-sidemenu>
</Modal>
