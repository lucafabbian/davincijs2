<script>
  // Imports
  import { push } from 'svelte-spa-router'
  import { SidemenuButton } from '../components/*.svelte'
  import { Page, Toolbar, Button, Card, Carousel, Label, Icon } from '../lcoreui/src/index.mjs'
  import { internalNews } from '../javascript/davinci.js'
  let homeDropdown = false;
</script>

<Toolbar>
  <SidemenuButton/>
  <Label text="Home"/>
  <Icon icon="md-settings" on:click={ () => push('/impostazioni') } />
</Toolbar>
<Page>
  <Carousel>
    <div class="caption">Biologia con Curvatura Biomedica</div>
  </Carousel>
  {#each $internalNews as news}
  <Card>
    <Label bold>{news.title}</Label>
    <Label>{news.subtitle}</Label>
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
