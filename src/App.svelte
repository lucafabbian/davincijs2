<script>
  import Router from 'svelte-spa-router'
  import { Home, Agenda, Orari, Comunicati,  Impostazioni, NotFound } from "./pages/*.svelte"
  import {App, Page, Toolbar, Tabbar, Sidemenu, Dropdown,
    Label, Icon, Fab, Card } from './lcoreui/src/index.mjs'

  import { sidemenu } from "./javascript/store.js"

  // Struttura dell'app
  const routes = {
    '/': Home,
    '/agenda': Agenda,
    '/orari/:category?': Orari,
    '/comunicati/:category/:number?': Comunicati,
    '/impostazioni': Impostazioni,
    '*':  NotFound,
  }




</script>

<App title="DaVinciJS2" color="red">
  <Sidemenu bind:open={$sidemenu}>
    <a href="#/"> Home </a>
    <a href="#/agenda"> Agenda </a>
    <a href="#/orari"> Orari </a>
    <h1>Comunicati</h1>
    <a href="#/comunicati/studenti"> Studenti </a>
    <a href="#/comunicati/genitori"> Genitori </a>
    <a href="#/comunicati/docenti"> Docenti </a>
    <h1>Utilità</h1>
    <a href="#/impostazioni"> Impostazioni </a>
  </Sidemenu>
  <Router {routes}/>

</App>


<style>
  :global(body, html) {
    background-color: #fff;
    margin: 0;
    padding: 0;
    --color-main: gold;
  }

  .page-container {
    display: flex;
    height: 100vh;
    flex-direction: column;
  }
</style>
