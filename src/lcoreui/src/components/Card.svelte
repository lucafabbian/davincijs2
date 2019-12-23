<script>

  export let padding = '8px'
  $: style = `${padding ? `padding: ${padding}` : ''}`
</script>
<style>
:global(lc-card) {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2);
  font-weight: 400;
  box-sizing: border-box;
  display: block;
  text-align: left;
  margin: .3em 0;
  word-wrap: break-word;
}
</style>

<lc-card {style}>
  <slot/>
</lc-card>
