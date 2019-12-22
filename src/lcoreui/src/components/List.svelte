<lc-list>
  <slot/>
</lc-list>


<style>
  :global(lc-list){
    display: flex;
    flex-direction: column;
  }

  :global(lc-list > lc-label[header="true"]){
    font-weight: 600;
    text-transform: uppercase;
    color: #c00000;
    font-size: 1.1em;
    padding-top: 35px;
    margin-top: 15px;
    margin-bottom: 8px;
    margin-left: 12px;
  }
</style>
