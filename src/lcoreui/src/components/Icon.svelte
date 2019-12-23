<script>

export let icon = ''
export let spin = false
let iconClass = ''
$: {
  iconClass = icon
  if(icon.startsWith('zmdi-')) iconClass = `zmdi ${icon}`
  if(icon.startsWith('md-')) iconClass = `zmdi ${icon.replace('md','zmdi')}`
  if(icon.startsWith('fa-')) iconClass = `fas ${icon}`
  if(spin) iconClass += ' zmdi-hc-spin'
}
export let size= ''
export let color = ''
$: style = (size ? `font-size: ${size} !important;` : '') + (color? `color: ${color};`: '')

</script>


<lc-icon class={iconClass} {style} on:click>
  <slot />
</lc-icon>
