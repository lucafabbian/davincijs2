<script>
  export let text = ''
  export let header = false
  export let bold = false
</script>
<style>
:global(lc-label) {
    display: block;
    box-sizing: border-box;
    font-size: 1em;
    font-weight: normal;
    margin-top: 0.4em;
    margin-bottom: 0.6em;
}

:global(lc-label[bold=true]) {
  font-weight: 800;
  color: #505050;
  font-size: 1.2em;
}

:global(lc-label[header=true]) {
  font-weight: 800;
  color: #505050;
  font-size: 2em;
  padding-top: 15px;
  padding-bottom: 10px;
}
</style>
<lc-label {header} {bold} on:click>
  {text}
  <slot/>
</lc-label>
