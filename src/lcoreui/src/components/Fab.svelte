<script>
  import Icon from './Icon.svelte'
  export let icon = 'md-plus'
</script>

<style>
:global(lc-fab){
  overflow: hidden;
  animation-duration: 0.5s;
  height: 56px !important;
  width: 56px !important;
  background-color: var(--lc-color-main);
  color: var(--lc-color-text);
  bottom: 20px;
  right: 20px;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,.2),0 1px 10px 0 rgba(0,0,0,.17),0 2px 4px -1px rgba(0,0,0,.6);
  position: fixed;
  display: block;
  border-radius: 100%;
  padding: 0;
  margin: 0;
  z-index: 100;
  box-sizing: border-box;
  -webkit-tap-highlight-color: #fff;
  transition: background-color .2s ease-in-out;
}

:global(lc-fab:active){
  background-color: #fff;
  transition: all .2s ease;
}

:global(lc-fab > lc-icon) {
  width: 56px;
  line-height: 56px !important;
  font-size: 26px !important;
  vertical-align: middle;
  text-align: center;
}
</style>

<lc-fab><Icon {icon}/></lc-fab>
