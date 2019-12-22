<script>
  export let title = ""
</script>

<nav>
  {title}
  <slot></slot>
</nav>
<div class="padding"/>


<style>
  nav {
    position: fixed;
    height: 56px;
    background-color: var(--color-main);
    width: 100vw;
    line-height: 56px;
    font-family: Roboto,Noto,sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  nav {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .padding {
    height: 56px;
  }
</style>
