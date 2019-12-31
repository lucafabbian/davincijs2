<script>
  // Imports
  import { push } from 'svelte-spa-router'
  import { fade } from 'svelte/transition';
  import { SidemenuButton } from '../components/*.svelte'
  import { Page, Toolbar, Button, Card, Carousel, Label, Icon } from '../lcoreui/src/index.mjs'
  import { internalNews, slideshowSito } from '../javascript/davinci.js'
  let homeDropdown = false
  let index = 0
  let loaded = false
  $: console.log($slideshowSito[0])
</script>

<Toolbar>
  <SidemenuButton/>
  <Label text="Home"/>
  <Icon icon="md-settings" on:click={ () => push('/impostazioni') } />
</Toolbar>
<Page maxWidth='570px'>
  <Carousel
  bind:index={index}
  bind:loaded={loaded}
  length={$slideshowSito.length}
  alt={$slideshowSito[index].title}
  img={$slideshowSito[index].img}>
    {#if loaded}
    <div class="caption" on:click={window.open($slideshowSito[index].url)}>
      {$slideshowSito[index].title || 'Loading...'}
    </div>
    {/if}
  </Carousel>
  {#each $internalNews as news}
  <Card style="display: flex; align-items: center; margin-top: 16px;">
    <img alt={`Preview della notizia${news.title}`} style="width: 20%; padding: 14px;" src={news.preview}/>
    <div style="flex: 1">
      <Label bold>{news.title}</Label>
      <Label>{news.subtitle}</Label>
    </div>
  </Card>
  {/each}
</Page>

<style>
  .caption {
    background-color: #000000c2;
    font-size: 1.1em;
    text-align: center;
    padding: 20px;
    min-height: 60px;
  }

</style>
