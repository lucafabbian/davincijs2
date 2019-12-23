<script>
  import { onMount, onDestroy, tick } from 'svelte';
  import {fade} from 'svelte/transition'

  export let id = ""
  export let loading = false
  export let refreshable = false

  export let padding = '8px'
  $: style = `${padding ? `padding: ${padding}` : ''}`

  // infiniteScroll, inspired by https://github.com/andrelmlins/svelte-infinite-scroll
  export let infiniteScroll = null
  let isLoadMore = false
  let component
  const onScroll = (e) => {
    const offset = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop
    if (offset <= 100) {
      if (!isLoadMore) infiniteScroll()
      isLoadMore = true;
    } else {
      isLoadMore = false;
    }
  }
  onMount( () => { if(infiniteScroll){
    component.addEventListener("scroll", onScroll);
    component.addEventListener("resize", onScroll);
  }})
  onDestroy( () => {
    component.removeEventListener("scroll", onScroll);
    component.removeEventListener("resize", onScroll);
  })

</script>
<style>
  :global(lc-page){
    flex: 1;
    background-color: var(--lc-color-background);
    overflow-y: overlay;
    overflow-x: hidden;
  }
</style>

<lc-page bind:this={component} in:fade={{duration: 500}} {id} {style}>
  <slot/>
</lc-page>
