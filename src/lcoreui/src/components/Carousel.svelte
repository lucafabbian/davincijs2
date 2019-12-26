<script>


</script>

<lc-carousel>
  <img alt="preview" src="https://davapi.antonionapolitano.eu//sitoLiceo/images/slideshow/CurvaturaBiomedica.jpg">
  <div>
    <slot/>
  </div>
</lc-carousel>

<style>
  :global(lc-carousel) {
    margin: .3em 0;
    align-items: self-end;
    color: white;
    width: 100%;
    display: grid;
  }

  :global( lc-carousel > *){
    width: 100%;
    grid-area: 1 / 1;
  }
</style>
