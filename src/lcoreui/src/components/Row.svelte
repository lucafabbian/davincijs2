<style>
:global(lc-list-row) {
  display: flex;
  width: 100%;
  padding-left: var(--lc-container-margin);
  padding-right: var(--lc-container-margin);
  box-sizing: border-box;
}

:global(lc-list-row:active){
  background-color: #ccc;
}

:global(lc-list-row > lc-icon){
  background-color: transparent;
  font-size: 22px !important;
  width: 20px;
  margin-right: 15px;
  text-align: center;
  height: 35px;
  line-height: 46px !important;
}
:global(lc-list-row > lc-elem-label){
  line-height: 46px !important;
  margin-top: 0px;
  margin-bottom: 0px;
}

</style>
<lc-list-row>
  <slot />
</lc-list-row>
