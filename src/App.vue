<template lang="pug">
  #app
    .container
      .chessboard
        h1 Chessboard
      .sidebar
        h1 {{ msg }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'This is the sidebar'
    }
  }
}
</script>

<style lang="stylus">
  @import '../node_modules/normalize-styl/normalize'
  
  lg = 'screen and (min-width: 960px)'
  
  body
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color #312e2b
    padding 10px
    @media lg
      padding 20px

  h1, h2
    font-weight: normal;

  ul
    list-style-type: none;
    padding: 0;

  li
    display: inline-block;
    margin: 0 10px;

  a
    color: #42b983;
   
  .container
    width 100%
    max-width 100%
    margin 0
    display flex
    flex-direction column
    @media lg
      margin 0 auto
      max-width 1200px
      flex-direction row 
  
  .chessboard
    width 100%
    margin 0
    margin-bottom 10px 
    @media lg
      width (2/3) * 100%
      margin 0 5px 0 0 
    background-color #B08967 
  
  .sidebar
    width 100%
    margin 0
    @media lg
      width (1/3) * 100%
      margin 0 0 0 5px 
    background-color #FFF 
</style>
