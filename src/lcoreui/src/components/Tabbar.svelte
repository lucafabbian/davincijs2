
<lc-tabbar 	bind:this={tabbar} class="lc-appbar" {scrollable} {bottom} {light}>
  <slot/>
  {#each entries as entry}
    <lc-tabbar-entry
      class:active={tab === entry.id}
      on:click={ () => {tab = entry.id; updatePosition() }}
    >  {entry.label} </lc-tabbar-entry>
  {/each}
</lc-tabbar>

<script>
  import { onMount, tick } from 'svelte'

  export let bottom = false
  export let light = false

  export let tab = ''
  export let entries = []

  export let scrollable = false

  // Handle fixed scroll
  let tabbar, updatePosition
  onMount(() => updatePosition = async () => {
    if(!scrollable) return
    await tick();
    const activated = tabbar.querySelector('.active')
    if(!activated) return
    const tabbarChildren = [...tabbar.children]
    let scrollPosition = -(tabbar.clientWidth - tabbarChildren.reduce(
      (acc, el) => acc - el.clientWidth,  // Remove every child width
      tabbar.scrollWidth                  // Start from tabbar width
    )) / 2

    tabbarChildren.every((elem) => {
      scrollPosition += elem.clientWidth
      return elem !== activated
    })
    tabbar.scrollLeft = scrollPosition - (activated.clientWidth / 2)
  })

</script>
<style>
:global(lc-tabbar ){
  width: calc(100% -10px);
  height: 56px;
  display: flex;
}

:global(lc-tabbar[scrollable=false] ){
  display: flex;
}
:global(lc-tabbar[scrollable=false] > * ){
  flex: 1 0;
}

:global(lc-tabbar[scrollable=true] ) {
  max-width: 100vw;
  height: 56px;
  overflow-x: auto;
  display: inline-flex;
  scroll-behavior: smooth;
}
:global(lc-tabbar[scrollable=true]::after){
  content: "";
  display: inline-block;
  padding-left: 24px;
}
:global(lc-tabbar[scrollable=true] lc-tabbar-entry:first-of-type){
  margin-left: 24px;
}

:global(lc-tabbar[scrollable=true] > *) {
  display: inline-block;
  padding-left: 17px;
  padding-right: 17px;
}
:global(::-webkit-scrollbar ){
    width: 0px;  /* Remove scrollbar space */
    height: 0px;
    background: transparent;  /* Optional: just make scrollbar invisible */
}


:global(lc-tabbar lc-tabbar-entry){
  -webkit-app-region:no-drag;
  text-align: center;
  text-transform: uppercase;
  font-size: 1em;
}

:global(lc-tabbar lc-tabbar-entry.active){
  border-bottom: 5px solid;
  text-decoration: none;
  animation: lc-tabbar-ripple 0.3s linear forwards;
}

@keyframes lc-tabbar-ripple{
  0% { background: transparent; }
  20% { background: rgba(255, 255, 255, 0.1);  }
  100% { background: transparent; }
}

:global(lc-tabbar lc-tabbar-entry:not(.active)){
  color: #fff;
  opacity: .5;
}
</style>
