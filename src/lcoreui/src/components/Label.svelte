<script>
  export let text = ''
  export let header = false
  export let bold = false
</script>
<style>
:global(lc-label) {
    display: block;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: normal;
    margin-top: 10px;
    margin-bottom: 15px;
}

:global(lc-label[bold=true]) {
  font-weight: 600;
  color: #505050;
  font-size: 18px;
}

:global(lc-label[header=true]) {
  font-weight: 800;
  color: #505050;
  font-size: 25px;
  padding-top: 15px;
  padding-bottom: 10px;
}
</style>
<lc-label {header} {bold}>
  {text}
  <slot/>
</lc-label>
