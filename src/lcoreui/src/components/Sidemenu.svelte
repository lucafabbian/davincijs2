<script>
  import { fly } from 'svelte/transition';
  import Modal from './Modal.svelte'
  export let open   = false
  export let expand = false
</script>
<style>
:global(lc-sidemenu){
  position: absolute;
  width: 70vw;
  height: 100vh;
  max-width: 25rem;
  left: 0px;
  top: 0px;
  background-color: #fff; /* #ebeff2;*/
  z-index: 400000;
  transition: all ease-out 0.18s;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 18px;
  box-sizing: border-box;
}
:global(lc-sidemenu.expanded){
  z-index: 1;
  height: auto;
  position: static;
  grid-row-start: 6;
  grid-row-end: 6;
  grid-column-start: 1;
  grid-column-end:   1;
  align-self: stretch;
}

:global(lc-sidemenu.hidden){
  pointer-events: none !important;
  transform: translateX(-70px);
}

</style>
{#if expand}
<lc-sidemenu class="expanded">
  <slot />
</lc-sidemenu>
{/if}
<Modal bind:open={open} opacity="0.25">
  {#if !expand}
  <lc-sidemenu transition:fly="{{x: -90, duration: 150}}">
    <slot />
  </lc-sidemenu>
  {/if}
</Modal>
