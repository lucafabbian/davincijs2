<script>
  // Imports
  import { SidemenuButton } from '../components/*.svelte'
  import {Page, Toolbar, Label, List, Button, Icon } from '../lcoreui/src/index.mjs'

  let comunicatiTotali = [false, true, false, false, false, true, false, false, false, true, true, false, false, true, false, false, false, true, false, false, false, true, true, false,
    false, true, false, false, false, true, false, false, false, true, true, false, false, true, false, false, false, true, false, false, false, true, true, false,
    false, true, false, false, false, true, false, false, false, true, true, false, false, true, false, false, false, true, false, false, false, true, true, false,
    false, true, false, false, false, true, false, false, false, true, true, false, false, true, false, false, false, true, false, false, false, true, true, false,
    false, true, false, false, false, true, false, false, false, true, true, false, false, true, false, false, false, true, false, false, false, true, true, false,
    false, true, false, false, false, true, false, false, false, true, true, false, false, true, false, false, false, true, false, false, false, true, true, false,
    false, true, false, false, false, true, false, false, false, true, true, false, false, true, false, false, false, true, false, false, false, true, true, false,
    false, true, false, false, false, true, false, false, false, true, true, false, false, true, false, false, false, true, false, false, false, true, true, false,
    false, true, false, false, false, true, false, false, false, true, true, false, false, true, false, false, false, true, false, false, false, true, true, false,
    false, true, false, false, false, true, false, false, false, true, true, false, false, true, false, false, false, true, false, false, false, true, true, false,
    false, true, false, false, false, true, false, false, false, true, true, false, false, true, false, false, false, true, false, false, false, true, true, false,

  ]

  let comunicatiCaricati = 20
  $: comunicati = comunicatiTotali.slice(0, comunicatiCaricati)

  let isRefreshing = false
  const refresh = () => {
    if(!isRefreshing){
      isRefreshing = true
      setTimeout( () => isRefreshing = false, 1000)
    }
  }

  const openPdf        = (index) => {

  }
  const clickDownload  = (index) => {

  }
  const clickShare     = (index) => {

  }
  const clickPreferiti = (index) => {
    comunicatiTotali[index] = !comunicatiTotali[index]
  }
</script>

<Toolbar>
  <SidemenuButton/>
  <Label text="Comunicati"/>
  <Icon icon="md-refresh" spin={isRefreshing} on:click={refresh}/>
  <Icon icon="md-star"/>
</Toolbar>

<Page id="comunicati" infiniteScroll={ () => comunicatiCaricati += 40}>
  <List>
  {#each comunicati as comunicato, index}
  <Button pseudo on:click={ () => openPdf(index)}>
    <Label>{index} - Riunione gentitorte</Label>
    <Icon icon="md-download" size="1.7em"
    on:click={ (e) => (e.stopPropagation(), clickDownload(index)) }/>
    <Icon icon="md-share" size="1.5em"
    on:click={ (e) => (e.stopPropagation(), clickShare(index)) }/>
    <Icon size="1.7em"
    icon={comunicato ? "md-star":"md-star-border" }
    color={comunicato ? "#daa900" : ""}
    on:click={ (e) => (e.stopPropagation(), clickPreferiti(index)) }/>
  </Button>
  {/each}
  </List>
</Page>
