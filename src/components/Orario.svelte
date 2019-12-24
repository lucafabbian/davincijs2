<script>
const days = [
  ['Lun','lunedì'],
  ['Mar','martedì'],
  ['Mer','mercoledì'],
  ['Gio','giovedì'],
  ['Ven','venerdì'],
  ['Sab','sabato']
]

export let data = []
</script>

{#if data}
<div style="width:100%">
  {#each days as day}
  <div class="orario-giorno">
    {day[0]}
    {#each data.filter( el => el.giorno === day[1]) as lezione}
    <div class={'durata-' + lezione.durata}>
      {lezione.mat_cod}
    </div>
    {/each}
  </div>
  {/each}
</div>
{/if}

<style>
  .orario-giorno {
    text-align: center;
    margin-top: 20px;
    line-height: 30px;
    vertical-align: top;
    display: inline-block;
    width:16.666%;
    color: #4e4e4e;
  }

  .orario-giorno > div {
    margin-top: 5px;
    margin-left: 3px;
    margin-right: 3px;
    border-radius: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    background-color: #792222;
    font-size: 14px;
    color: white;
  }

  .orario-giorno .durata-1h00{
    height: 50px;
    line-height: 50px;
  }

  .orario-giorno .durata-2h00{
    height: 105px;
    line-height: 105px;
  }
</style>
