<script>
  // Imports
  import { push } from 'svelte-spa-router'
  import { SidemenuButton } from '../components/*.svelte'
  import { Page, Toolbar, Button, Card, Carousel, Label, Icon } from '../lcoreui/src/index.mjs'
  import { internalNews } from '../javascript/davinci.js'
  let homeDropdown = false
</script>

<Toolbar>
  <SidemenuButton/>
  <Label text="Home"/>
  <Icon icon="md-settings" on:click={ () => push('/impostazioni') } />
</Toolbar>
<Page maxWidth='570px'>
  <Carousel>
    <div class="caption">Biologia con Curvatura Biomedica</div>
  </Carousel>
  {#each $internalNews as news}
  <Card style="display: flex; align-items: center; margin-top: 16px;">
    <img style="width: 20%; padding: 14px;" src={news.preview}/>
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
