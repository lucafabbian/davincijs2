<script>

	export let title = 'LCore'
  export let color = '#282828'
  export let textColor = '#fff'
  export let backgroundColor = '#efeff4'

</script>

<style>
:global(body, html){
  font-family: Roboto,Noto,sans-serif;
  margin: 0px;
  padding: 0px;
  user-select: none;
  overscroll-behavior: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}

:global(select){
  padding: 0 1.6em 0 .4em;
  margin: 0 0.5em;
  box-sizing: border-box;
  border: 0;
  border-radius: 2px;
  background-color: transparent;
}

:global(lc-app){
  display: grid;
  grid-template-columns: auto 100fr;
  grid-template-rows: auto auto auto auto auto 100fr auto auto auto auto auto;
  grid-auto-flow: column dense;
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent !important;
}

:global(lc-app .lc-appbar){
  grid-column-start: 1;
  grid-column-end: 3;
  -webkit-app-region:drag;
  z-index: 10;
  left: 0;
  right: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  box-shadow: 0 4px 5px -4px rgba(0,0,0,.5);
  overflow: hidden;
  font-weight: 400;
  width: 100%;
  white-space: nowrap;
  line-height: 56px;
  flex: 0 0 auto;
  background-color: var(--lc-color-main);
  color: var(--lc-color-text);
}

:global(lc-app .lc-appbar[light=true]){
  background-color: var(--lc-color-text);
  color: var(--lc-color-main);
}
:global(lc-app lc-page~.lc-appbar){
  grid-row-start: 7;
  grid-row-end: 7;
  box-shadow: 0 -4px 10px -4px rgba(0,0,0,.5);
}
</style>

<svelte:head>
	<title>{title}</title>
  <meta name="theme-color" content={color}>

</svelte:head>

<lc-app style="
--lc-color-main:{color};
--lc-color-text:{textColor};
--lc-color-background:{backgroundColor}">
  <slot/>
</lc-app>
