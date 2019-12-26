<script>
  import { onMount, onDestroy, tick } from 'svelte';
  import {fade} from 'svelte/transition'

  export let id = ''

  //TODO export let refreshable = false
  export let padding = '8px'
  export let style = ''
  export let maxWidth = ''
  $: computedStyle = (style ? style + ';' : '')
    + (padding ? `padding: ${padding};` : '')

  // infiniteScroll, inspired by https://github.com/andrelmlins/svelte-infinite-scroll
  export let scrollTop = 0
  $: tick().then( () => {if(component.scrollTop != scrollTop) component.scrollTop = scrollTop})

  export let infiniteScroll = null
  let isLoadMore = false
  let component
  const onScroll = (e) => {
    const offset = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop
    scrollTop = component.scrollTop
    if (offset <= 100) {
      if (!isLoadMore) infiniteScroll()
      isLoadMore = true;
    } else {
      isLoadMore = false;
    }
  }
  onMount( () => {
    component.addEventListener("scroll", onScroll);
    component.addEventListener("resize", onScroll);
  })
  onDestroy( () => {
    component.removeEventListener("scroll", onScroll);
    component.removeEventListener("resize", onScroll);
  })

</script>
<style>
  :global(lc-page){
    grid-row-start: 6;
    grid-row-end: 6;

    grid-column-start: 2;
    grid-column-end:   2;
    display: flex;
    flex: 1;
    background-color: var(--lc-color-background);
    overflow-y: overlay;
    overflow-x: hidden;
    justify-content: center;
  }
  :global(lc-page > lc-page-content){
    flex:1;
  }
</style>

<lc-page bind:this={component} in:fade={{duration: 500}} {id} style={computedStyle}>
  <lc-page-content style={maxWidth ? `max-width:${maxWidth};` : ''}>
    <slot/>
  </lc-page-content>
</lc-page>
