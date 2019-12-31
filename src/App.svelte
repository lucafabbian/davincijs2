<script>
  import Router from 'svelte-spa-router'
  import {push} from 'svelte-spa-router'
  import {Home, Agenda, Orari, Comunicati,  Impostazioni, NotFound } from "./pages/*.svelte"
  import {App, Button, Sidemenu, Label, Icon, List } from './lcoreui/src/index.mjs'

  import { sidemenu } from "./javascript/store.js"

  // Struttura dell'app
  const routes = {
    '/': Home,
    '/agenda': Agenda,
    '/orari/:category/:orario?': Orari,
    '/comunicati/:category/:comunicato?': Comunicati,
    '/impostazioni': Impostazioni,
    '*':  NotFound,
  }

  const open = (href = '/') => {
    push(href)
    sidemenu.set(false)
  }

  let width
</script>
<svelte:window bind:innerWidth={width}/>

<App title="DaVinciJS2" color="#9f1919">
  <Sidemenu bind:open={$sidemenu} expand={width > 1250 }>
    <List>
      <img alt="logo-davincijs" src="./static/img/logo-toolbar.svg"/>
      <Button pseudo icon="md-home" label="Home" on:click={() => open('/')}/>
      <Button pseudo icon="md-calendar" label="Agenda" on:click={() => open('/agenda')}/>
      <Button pseudo icon="md-time" label="Orari" on:click={() => open('/orari/personale')}/>
      <Label header>Comunicati</Label>
      <Button pseudo icon="md-graduation-cap" label="Studenti" on:click={() => open('/comunicati/studenti')}/>
      <Button pseudo icon="md-accounts" label="Genitori" on:click={() => open('/comunicati/genitori')}/>
      <Button pseudo icon="md-case" label="Docenti" on:click={() => open('/comunicati/docenti')}/>
      <Label header>Utilità</Label>
      <Button pseudo icon="md-settings" label="Impostazioni" on:click={() => open('/impostazioni')}/>
    </List>
  </Sidemenu>
  <Router {routes}/>

</App>
