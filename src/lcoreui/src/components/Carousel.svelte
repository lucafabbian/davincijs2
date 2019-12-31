<script>
  import {tick} from 'svelte'
  export let alt = ''
  export let img = ''
  export let length
  export let index = 0
  export let loaded = false

  const delay = t => new Promise(resolve => setTimeout(resolve, t));
  setInterval( () => { index++ }, 5000)
  $: {
    loaded = false
    while(index < 0)       index += length
    while(index >= length) index -= length
    delay(50).then(tick).then( () => loaded = true )
  }
</script>

<lc-carousel>
  <img {alt} src={img}/>
  <div>
    <slot/>
  </div>
</lc-carousel>

<style>
  :global(lc-carousel) {
    margin: .3em 0;
    align-items: self-end;
    color: white;
    width: 100%;
    display: grid;
  }

  :global( lc-carousel > *){
    width: 100%;
    grid-area: 1 / 1;
  }
</style>
