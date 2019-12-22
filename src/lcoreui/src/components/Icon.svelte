<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();


export let icon = ''
let iconClass = ''
$: {
  iconClass = icon
  if(icon.startsWith('zmdi-')) iconClass = `zmdi ${icon}`
  if(icon.startsWith('md-')) iconClass = `zmdi ${icon.replace('md','zmdi')}`
  if(icon.startsWith('fa-')) iconClass = `fas ${icon}`
}
</script>


<lc-icon class={iconClass} on:click={(e) => dispatch('click', e.detail)}>
  <slot />
</lc-icon>
