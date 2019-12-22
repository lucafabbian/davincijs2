<script>
  import {Icon} from '../lcoreui/src/index.mjs'
  import {sidemenu} from '../javascript/store.js'
</script>


<Icon icon="md-menu" on:click={() => sidemenu.update( (value) => !value )}/>
