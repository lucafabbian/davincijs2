<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  import Icon from './Icon.svelte'
  import Label from './Label.svelte'
  export let icon = ""
  export let label = ""
  export let color = ""
  export let pseudo = false
</script>
<lc-button pseudo={pseudo} on:click={(e) => dispatch('click', e.detail)}>
  {#if icon != ""}
  <Icon icon={icon}/>
  {/if}
  {#if label != ""}
  <Label>{label}</Label>
  {/if}
  <slot/>
</lc-button>

<style>
  :global(lc-button) {
    cursor: pointer;
    display: inline-flex;
    border: 0;
    box-sizing: border-box;
    padding: .6em 1em;
    margin: .3em 0;
    border-radius: .2em;
    background: #0074d9;
    font-size: 110%;
  }

  :global(lc-button > lc-label){
    margin: 0px;
  }

  :global(lc-button > lc-icon){
    margin-right: 12px;
    font-size: 1.15em !important;
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
