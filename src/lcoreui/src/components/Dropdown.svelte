<script>
import Modal from './Modal.svelte'
import Card  from './Card.svelte'

export let open = false

</script>
<style>
:global(lc-dropdown){
  position: absolute;
  display: inline-block;
  padding: 0;
  padding-left: 0;
  margin: 0;
  top: 2px;
  right: 3px;
  z-index: 8000 !important;
  font-size: 1em;
}

:global(lc-dropdown > lc-card){
  color: #4a4a4a;
  padding-top: 0px;
  padding-bottom: 0px;
  min-width: 150px;
}
</style>

<Modal bind:open>
  <lc-dropdown>
    <Card>
    <slot />
    </Card>
  </lc-dropdown>
</Modal>
