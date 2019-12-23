<script>
  // Imports
  import { push } from 'svelte-spa-router'
  import { SidemenuButton } from '../components/*.svelte'
  import { Page, Toolbar, Button, Card, Carousel, Label, Icon } from '../lcoreui/src/index.mjs'

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
  <Card>
    <Label bold>DaVinciJS2 v0.0.2</Label>
    <Label>Clicca per visualizzare il changelog</Label>
  </Card>
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
