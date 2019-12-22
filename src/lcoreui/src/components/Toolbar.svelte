<script>

export let light = false
</script>
<style>
:global(lc-toolbar ){
  width: calc(100% -10px);
  height: 56px;
  display: flex;
  padding-left: 10px !important;
}

:global(lc-toolbar > * ){
  -webkit-app-region:no-drag;
}

:global(lc-toolbar > lc-label){
  -webkit-app-region:drag;
  text-overflow: ellipsis;
  font-weight: 500;
  font-size: 20px;
  line-height: 56px;
  word-spacing: 0;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 10px;
  flex: 1;
}

:global(lc-toolbar > input[type="text"]){
  font-size: 18px;
  line-height: 56px;
  word-spacing: 0;
  margin-left: 10px;
  flex: 1;
}

:global(lc-toolbar > lc-icon){
  background-color: transparent;
  font-size: 22px !important;
  width: 40px;
  text-align: center;
  margin-right: 5px;
  height: 40px;
  margin-top: 8px;
  line-height: 40px !important;
  border-radius: 50%;
  background-position: center;
  transition: all .2s ease-in-out;
}
:global(lc-toolbar > lc-icon:active){
  background-color: rgb(255,255,255,.25);
  transition: all .2s ease;
}

:global(lc-toolbar[light=true] > lc-icon:active){
  background-color: rgb(0, 0, 0,.15);
  transition: all .2s ease;
}

:global(lc-prominent ){
  line-height: 30px;
  height: 30px;
  display: block;
}
</style>

<lc-toolbar class="lc-appbar" {light}>
  <slot/>
</lc-toolbar>
