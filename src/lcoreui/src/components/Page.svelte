<script>
  import { onMount, tick } from 'svelte';

  export let loading = false
  export let refreshable = false

  export let padding = '8px'
  $: style = `${padding ? `padding: ${padding}` : ''}`
</script>
<style>
  :global(lc-page){
    flex: 1;
    background-color: var(--lc-color-background);
    overflow-y: overlay;
    overflow-x: hidden;
  }
</style>

<lc-page {style}>
  <slot/>
</lc-page>
