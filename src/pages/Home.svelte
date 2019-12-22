<script>
  // Imports
  import { push } from 'svelte-spa-router'
  import { SidemenuButton } from '../components/*.svelte'
  import { Page, Toolbar, Button, Label, Icon } from '../lcoreui/src/index.mjs'

  let homeDropdown = false;
</script>

<Toolbar>
  <SidemenuButton/>
  <Label text="Home"/>
  <Icon icon="md-settings" on:click={ () => push('/impostazioni') } />
</Toolbar>
<Page>
  <Button label="hello"/>

</Page>
