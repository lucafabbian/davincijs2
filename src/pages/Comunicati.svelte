<script>
  // Imports
  import {push} from 'svelte-spa-router'
  import {SidemenuButton} from '../components/*.svelte'
  import {Page, Toolbar, Label, List, Button, Icon } from '../lcoreui/src/index.mjs'
  import {baseURL, comunicatiGenitori} from '../javascript/davinci.js'

  export let params = {} // Parametri url, {category: "genitori", number: "id comunicato"}
  let scrollTop = 0 // Bind scroll, così che aprendo e chiudendo un comunicato non torna all'inizio

  // Anziché caricare tutti i comunicati assieme, parte con 20 e poi aggiunge gli altri man mano
  let comunicatiCaricati = 20
  $: comunicati = $comunicatiGenitori.slice(0, comunicatiCaricati)

  // Gestisce il click sull'icona refresh
  let isRefreshing = false
  const refresh = () => {
    if(!isRefreshing){
      isRefreshing = true
      comunicatiGenitori.fetch().then(() => isRefreshing = false)
    }
  }


  const formatName = (name = '')=> name.replace('-', ' - ').replace(/\_/g, ' ').replace('.pdf', '')
  const downloadFile = filePath => {
      var link=document.createElement('a');
      link.href = filePath;
      link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
      link.click();
  }

  const openPdf       = comunicato => push(`/comunicati/${params.category}/${encodeURIComponent(comunicato.nome)}`)
  const clickDownload = comunicato => downloadFile(comunicato.url)
  const clickShare    = comunicato => window.open(`https://wa.me/?text=${comunicato.url}`)

  const clickPreferiti = (index) => {
    comunicatiTotali[index] = !comunicatiTotali[index]
  }
</script>

<Toolbar>
  <SidemenuButton/>
  <Label text={"Comunicati " + params.category}/>
  {#if params.number}
  <Icon icon="md-close" on:click={() => push(`/comunicati/${params.category}`)}/>
  {:else}
  <Icon icon="md-refresh" spin={isRefreshing} on:click={refresh}/>
  <Icon icon="md-star"/>
  {/if}
</Toolbar>
{#if params.number}
<iframe src={`./static/pdfviewer/web/viewer.html?file=${baseURL}sitoLiceo/images/comunicati/comunicati-${params.category}/${params.number}`}></iframe>
{:else}
<Page id="comunicati" infiniteScroll={ () => comunicatiCaricati += 40} bind:scrollTop={scrollTop}>
  <List>
  {#each comunicati as comunicato, index}
  <Button pseudo on:click={ () => openPdf(comunicato)}>
    <Label>{formatName(comunicato.nome)}</Label>
    <Icon icon="md-download" size="1.7em"
    on:click={ (e) => (e.stopPropagation(), clickDownload(comunicato)) }/>
    <Icon icon="md-share" size="1.5em"
    on:click={ (e) => (e.stopPropagation(), clickShare(comunicato)) }/>
    <Icon size="1.7em"
    icon={comunicato ? "md-star":"md-star-border" }
    color={comunicato ? "#daa900" : ""}
    on:click={ (e) => (e.stopPropagation(), clickPreferiti(index)) }/>
  </Button>
  {/each}
  </List>
</Page>
{/if}


<style>
iframe {
  margin: 0px;
  width: 100%;
  height: 100%;
  border: 0;
}

</style>
