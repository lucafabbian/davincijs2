<script>
  import {Icon} from '../lcoreui/src/index.mjs'
  import {sidemenu} from '../javascript/store.js'
  let width
</script>

<svelte:window bind:innerWidth={width}/>
{#if width <= 1250}
<Icon icon="md-menu" on:click={() => sidemenu.update( (value) => !value )}/>
{/if}
