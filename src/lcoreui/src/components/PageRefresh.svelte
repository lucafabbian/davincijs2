<script>
  import { onMount, tick } from 'svelte';

  //Dev dependencies
  /* The "Pull to refresh" option is implemented using a custom
    version of https://www.npmjs.com/package/mobile-pull-to-refresh */
  import pullToRefresh       from 'mobile-pull-to-refresh'
  import ptrAnimatesMaterial from 'mobile-pull-to-refresh/src/styles/material/animates.js'
  import 'mobile-pull-to-refresh/src/styles/material/style.css'

  export let loading = false
  export let refreshable = false

  export let padding = '8px'
  $: style = `${padding ? `padding: ${padding}` : ''}`

  let content
  onMount( async () => {
    await tick()
    pullToRefresh({
      container: content,
      scrollable: content,
      animates: ptrAnimatesMaterial,
      refresh(){ return new Promise(resolve => { console.log('refreshing') }) },
    })
    console.log('bound')
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

<lc-page {style} bind:this={content}>
  <div class="pull-to-refresh-material__control" style="z-index: 2">
    <svg class="pull-to-refresh-material__icon" fill="#4285f4" width="24" height="24" viewBox="0 0 24 24">
      <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
    <svg class="pull-to-refresh-material__spinner" width="24" height="24" viewBox="25 25 50 50">
      <circle
      class="pull-to-refresh-material__path"
      cx="50" cy="50" r="20" fill="none" stroke="#4285f4" stroke-width="4"
      stroke-miterlimit="10" />
    </svg>
  </div>
  <slot/>
</lc-page>
