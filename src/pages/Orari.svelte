<script>
  // Imports
  import {replace} from 'svelte-spa-router'
  import davinciApi  from '../javascript/davinciApiRaw.js'
  import {classi, docenti}  from '../javascript/davinci.js'
  import {SidemenuButton, Orario } from '../components/*.svelte'
  import {Page, Toolbar, Tabbar, Label } from '../lcoreui/src/index.mjs'

  export let params

  let tab = params.category
  $: replace('/orari/' + tab)

  let orarioPersonale = null
  davinciApi.fetchOrarioClasse("1A".toLowerCase()).then( response => orarioPersonale = response.data)

  let orarioClasse = null
  let selectedClasse = null

  $: sDocenti = $docenti.map( d => d.cognome + ' ' + d.nome)
  let orarioDocenti = null
  let selectedDocente = null

  $: orario = ({
    "personale": orarioPersonale,
    "classi":    orarioClasse,
    "docenti":   null,
  })[tab]
</script>

<Toolbar>
  <SidemenuButton/>
  <Label text={`Orario ${tab}`}/>
  {#if tab === 'classi'}
  <select bind:value={selectedClasse} on:change="{() =>
      davinciApi.fetchOrarioClasse(selectedClasse.toLowerCase()).then( response => orarioClasse = response.data)
    }">
		{#each $classi as classe}
			<option value={classe}>{classe}</option>
		{/each}
	</select>
  {/if}
  {#if tab === 'docenti'}
  <select bind:value={selectedDocente} on:change="{() => {
    console.log($docenti[sDocenti.indexOf(selectedDocente)])
      davinciApi.fetchOrarioDocente($docenti[sDocenti.indexOf(selectedDocente)]).then( response => orarioDocenti = response.data)
    }}">
    {#each sDocenti as docente}
      <option value={docente}>{docente}</option>
    {/each}
  </select>
  {/if}
</Toolbar>
<Page maxWidth='650px'>
  <Orario data={orario}/>
</Page>

<Tabbar bottom bind:tab={tab} entries={[
  {id: 'personale', label: 'Personale'},
  {id: 'classi', label: 'Classi'},
  {id: 'docenti', label: 'Docenti'},
]} />

<style>
:global(lc-toolbar select){
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: calc(50% - 2px);
  color: white;
}

:global(lc-toolbar select option){
  background-color: #9f1919;
}
</style>
