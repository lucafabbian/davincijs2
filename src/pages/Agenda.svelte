<script>
  // Imports
  import davinciApi from '../javascript/davinciApiRaw.js'
  import { SidemenuButton } from '../components/*.svelte'
  import {Page, Toolbar, Label, Icon } from '../lcoreui/src/index.mjs'
  let date = new Date()
  $: firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getTime()
  $: lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1).getTime()
  $: console.log(firstDay, lastDay)

  davinciApi.fetchAgenda({
    prima:1575154800,
    dopo:1577833200,
  }).then( r => console.log(r))

  const mesi =  [ "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre" ]
</script>

<Toolbar>
  <SidemenuButton/>
  <Label text={`${mesi[date.getMonth()]} ${date.getFullYear()}`}/>
  <Icon icon="md-chevron-left"  on:click={ () => date = new Date(date.getFullYear(), date.getMonth() - 1)}/>
  <Icon icon="md-chevron-right" on:click={ () => date = new Date(date.getFullYear(), date.getMonth() + 1)}/>
  <Icon icon="md-calendar" on:click={ () => date = new Date()}/>
</Toolbar>
<Page>


</Page>
