<script>
  import { afterUpdate, tick } from 'svelte'
  export let open = false
  export let opacity = 0.15

  let modal
  afterUpdate( async () => {
    document.body.appendChild(modal)
  })

</script>
<style>
:global(lc-modal-mask) {
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
}
:global(lc-modal-content) {
  z-index: 1100;
}
</style>

<lc-modal bind:this={modal}>
  {#if open}
    <lc-modal-mask style={'opacity:' + opacity}  on:click|self={() => open = false}/>
  {/if}
  {#if open}
    <lc-modal-content> <slot/> </lc-modal-content>
  {/if}
</lc-modal>
