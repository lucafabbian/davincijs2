<script>
  import Icon from './Icon.svelte'
  import Label from './Label.svelte'
  export let icon = ''
  export let pseudo = false

  export let label = ''
  export let color = ''
  export let style = ''
  $: computedStyle = (style? style + ';': '')
    + (color ? `background-color:${color};` : '')

</script>
<lc-button pseudo={pseudo} style={computedStyle} on:click>
  {#if icon} <Icon icon={icon}/> {/if}
  {#if label}<Label>{label}</Label> {/if}
  <slot/>
</lc-button>

<style>
  :global(lc-button) {
    max-width: 100vw;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    border: 0;
    box-sizing: border-box;
    padding: .6em 1em;
    margin: .3em 0;
    border-radius: .2em;
    background: #0074d9;
    font-size: 110%;
    -webkit-tap-highlight-color: #0000003b;
  }

  :global(lc-button > lc-label){
    margin: 0px;
    flex-grow: 1;
    word-break: break-word;
    text-overflow:clip;
  }

  :global(lc-button > lc-icon){
    font-size: 1.4em !important;
  }

  :global(lc-button > *){
    padding-right: .7em;
  }
  :global(lc-button>*:last-child) {
    padding-right: 0;
  }

  :global(lc-button:hover){
    box-shadow: inset 0 0 0 99em rgba(255,255,255,0.2);
    border: 0;
  }

  :global(lc-button[pseudo="false"]){
    color: #fff;
  }

  :global(lc-button[pseudo="true"]){
    background-color: transparent;
  }
  :global(lc-button[pseudo="true"]:hover){
    box-shadow: inset 0 0 0 99em rgba(0,0,0,0.2);
    border: 0;
  }
</style>
