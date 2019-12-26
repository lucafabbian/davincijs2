<script>
  // Imports
  import {push} from 'svelte-spa-router'
  import {SidemenuButton} from '../components/*.svelte' // Componenti dal progetto
  import {Page, Toolbar, Label, List, Button, Icon } from '../lcoreui/src/index.mjs' // Componenti dalla libreria
  import {baseURL, serializeComunicato, comunicatiStudenti,
    comunicatiGenitori, comunicatiDocenti} from '../javascript/davinci.js' // Api davinci

  export let params = {} // Parametri url, {category: "genitori", comunicato: "id/url comunicato"}
  let scrollTop = 0 // Ricordati lo scroll, così che aprendo e chiudendo un comunicato non si torni all'inizio

  // Anziché caricare tutti i comunicati assieme, parte con 20 e poi aggiunge gli altri man mano
  let comunicatiCaricati = 20
  let onlyPref = false // Se true mostra solo i preferiti
  $: comunicati = ({
    "studenti" : $comunicatiStudenti,
    "genitori" : $comunicatiGenitori,
    "docenti"  : $comunicatiDocenti,
  })[params.category]
    // Se onlyPref == true, mostra solo i preferiti
    .filter(comunicato => !onlyPref || preferiti.includes(serializeComunicato(comunicato)))
    .slice(0, comunicatiCaricati) // Carica solo alcuni comunicati

  // Gestisce il click sull'icona refresh
  let isRefreshing = false
  const refresh = () => {
    if(!isRefreshing){
      isRefreshing = true
      Promise.all([comunicatiStudenti, comunicatiGenitori, comunicatiDocenti]
        .map( comunicati => comunicati.fetch())).then(() => isRefreshing = false)
    }
  }

  // Dà al nome dei comunicati una formattazione migliore
  const formatName = (name = '')=> name.replace('-', ' - ').replace(/\_/g, ' ').replace('.pdf', '')
  // Forza il download del file
  const downloadFile = filePath => {
      var link=document.createElement('a');
      link.href = filePath;
      link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
      link.click();
  }

  const openPdf       = comunicato => push(`/comunicati/${params.category}/${encodeURIComponent(comunicato.nome)}`)
  const clickDownload = comunicato => downloadFile(comunicato.url)
  const clickShare    = comunicato => window.open(`https://wa.me/?text=${comunicato.url}`)

  /* Gestione dei comunicati letti
  Ogni volta che si apre l'url di un comunicato, lo inserisce in
  un array che sincronizza con il localStorage */
  // Carica letti dallo storage (viene ricaricato al cambio di categoria studenti/genitori/docenti)
  $: letti = JSON.parse(localStorage.getItem(`comunicati-letti-${params.category}`) || "[]")
  // Salva letti ogni volta che viene aggiornato
  $: localStorage.setItem(`comunicati-letti-${params.category}`, JSON.stringify(letti))
  // Salva letti ogni volta che viene aggiornato
  $: if(params.comunicato) if(!letti.includes(params.comunicato)) letti = [...letti, params.comunicato]

  /* Gestione dei comunicati preferiti
  Ogni volta che si clicca nella stella, una versione "compressa"
  (serialized) del comunicato viene salvata/rimossa dall'array
  preferiti, e quest'ultimo viene sincronizzato con il localStorage */
  // Carica preferiti dallo storage (viene ricaricato al cambio di categoria studenti/genitori/docenti)
  $: preferiti = JSON.parse(localStorage.getItem(`comunicati-preferiti-${params.category}`) || "[]")
  // Salva preferiti ogni volta che viene aggiornato
  $: localStorage.setItem(`comunicati-preferiti-${params.category}`, JSON.stringify(preferiti))
  // Gestisci il click sull'icona a stella
  const clickPreferiti = (comunicato) => {
    const serialized = serializeComunicato(comunicato)
    preferiti = preferiti.includes(serialized)         // Controlla se l'elemento è fra i preferiti
      ? preferiti.filter( elem => elem !== serialized) // C'era? Rimuovilo
      : [...preferiti, serialized]                     // Non c'era? Aggiungilo
  }
</script>

<Toolbar>
  <SidemenuButton/>
  <Label text={"Comunicati " + params.category}/>
  {#if params.comunicato}
    <Icon icon="md-close" on:click={() => push(`/comunicati/${params.category}`)}/>
  {:else}
    <Icon icon="md-refresh" spin={isRefreshing} on:click={refresh}/>
    <Icon icon="md-star" on:click={ () => onlyPref = !onlyPref }/>
  {/if}
</Toolbar>
{#if params.comunicato}
<lc-page>
  <iframe title="pdfviewer" src={`./static/pdfviewer/web/viewer.html?file=${baseURL}sitoLiceo/images/comunicati/comunicati-${params.category}/${params.comunicato}`}/>
</lc-page>
{:else}
<Page id="comunicati" infiniteScroll={ () => comunicatiCaricati += 40} bind:scrollTop={scrollTop}>
  <List>
    {#each comunicati as comunicato, index}
    <Button pseudo on:click={ () => openPdf(comunicato)}>
      <Label bold={!letti.includes(encodeURIComponent(comunicato.nome))}>{formatName(comunicato.nome)}</Label>
      <Icon icon="md-download" size="1.7em"
      on:click={ (e) => (e.stopPropagation(), clickDownload(comunicato)) }/>
      <Icon icon="md-share" size="1.5em"
      on:click={ (e) => (e.stopPropagation(), clickShare(comunicato)) }/>
      <Icon size="1.7em"
      icon={preferiti.includes(serializeComunicato(comunicato)) ? "md-star":"md-star-border" }
      color={preferiti.includes(serializeComunicato(comunicato)) ? "#daa900" : ""}
      on:click={ (e) => (e.stopPropagation(), clickPreferiti(comunicato)) }/>
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
