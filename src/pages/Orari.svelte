<script>
  // Imports
  import { SidemenuButton } from '../components/*.svelte'
  import {Page, Toolbar, Tabbar, Label } from '../lcoreui/src/index.mjs'
  let tab = 'personale'
</script>

<Toolbar>
  <SidemenuButton/>
  <Label text="Impostazioni"/>
</Toolbar>
<Page>


</Page>
<Tabbar light bottom bind:tab={tab} entries={[
  {id: 'personale', label: 'Personale'},
  {id: 'classi', label: 'Classi'},
  {id: 'docenti', label: 'Docenti'},
]} />
