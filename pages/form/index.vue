<template>
    <div class="container">
  
      <MapComponent class="map-size" />
    </div>
</template>
  
  <script>
  import Logo from '~/components/NuxtLogo.vue'
  import MapComponent from '~/components/MapComponent'
  
  export default {
    name: 'IndexPage',
    layout: 'main_layouts',
    components:{
      Logo,
      MapComponent,
    }
  }
  </script>
  
  <style>
  .container{
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .title{
    font-family: 'Quicksand', 'Source Sans Pro', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  
  .subtitle{
    font-weight:300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  
  .links{
    padding-top:15px
  }
  
  .map-size {
      width: 75%;
      height: 500px;
  }
  
  </style>