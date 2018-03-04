<template lang="pug">
  #app
    .container
      header
        .text
          h1 Front End Test by Nick Splendorr
          p.instructions {{instructions}}
        .toggle
          button(@click="toggleCoords") {{showCoords ? "Hide" : "Show"}} Coordinates
      .board-and-sidebar
        .chessboard
          .row(v-for="row in boardGrid.rows")
            .square(v-for="col in boardGrid.cols" :data-coord="col + row" v-on:click="clickSquare" v-bind:class="{selected : currentSquare == (col + row) }")
              span(v-show="showCoords") {{col + row}}
        .sidebar
          h2 Clicked Squares:
          ol(v-if="clickedSquares.length")
            li(v-for="square in clickedSquares") {{square}}
          ol(v-else=)
            span None yet!
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      instructions: 'Click or tap a square on the chessboard to highlight it. The squares you\'ve clicked are shown in the sidebar.',
      clickedSquares :[],
      currentSquare: '',
      boardGrid: { 
        rows: [8, 7, 6, 5, 4, 3, 2, 1], 
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] 
      },
      showCoords: false
    }
  },
  methods: {
    clickSquare: function (e) {
      let coord = e.currentTarget.getAttribute('data-coord');
      console.log('vue click coord: ', coord);
      this.currentSquare = coord;
      console.log('vue currentSquare: ', this.currentSquare);
      this.clickedSquares.push(coord);
    },
    toggleCoords: function(){
      this.showCoords = !this.showCoords
    }
  }
}
</script>

<style lang="stylus">
  @import '../node_modules/normalize-styl/normalize'
  
  lg = 'screen and (min-width: 769px)'
  
  colorStates(hex, amt)
    background-color hex
    &:hover, &:focus
      background-color hex + (amt * 100%)
    &:active
      background-color hex - ((amt / 3) * 100%)
  
  body
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #25211b;
    background-color #312e2b
    padding 10px
    @media lg
      padding 20px

  ul
    list-style-type: none;
    padding: 0;

  li
    margin: 0 1em;

  a
    color: #42b983;
    
  header
    display flex
    flex-direction column
    @media lg
      flex-direction row 
      justify-content space-between
      align-items flex-end
    h1
      margin 0
      margin-bottom 0.5rem
      color #FFF 
    p.instructions
      margin-top 0
      color #FFF 
  
  .toggle
    flex-shrink 0 
  button
    display block
    margin-bottom 1em 
    font-size 0.9em  
    line-height 1.7 
    border-radius 4px 
    border 0px solid #000
    cursor pointer
    background-color #e6e6e6 
    &:hover, &:focus
      background-color #e6e6e6 + 50%
    &:active
      background-color #e6e6e6 - 15%
   
  .container
    width 100%
    max-width 100%
    margin 0
    @media lg
      margin 0 auto
      max-width 1000px
      
  .board-and-sidebar
    display flex
    flex-direction column
    @media lg
      flex-direction row 
  
  .sidebar
    width 100%
    max-height 75vh
    overflow: scroll 
    margin 0
    padding 0.25rem 0
    @media lg
      width (1/3) * 100%
      margin 0 0 0 5px 
      padding 0
    background-color #FFF
    border-radius 4px 
    h2, ul, ol
      margin-top 0.5rem
      margin-bottom 0.5rem
      @media lg
        margin-top 1rem
        margin-bottom 1rem
    h2
      font-weight: normal;
      padding 0 0.75rem
      @media lg
        padding 0 1rem
    ul, ol, p
      padding 0 1.75em
      @media lg
        padding 0 2em
    ul
      li
        display block
  
  .chessboard
    width 100%
    margin 0
    margin-bottom 10px 
    border-radius 4px
    overflow hidden 
    @media lg
      width (2/3) * 100%
      margin 0 5px 0 0 
    // background-color #B08967 
    
    .row
      width 100%
      height auto
      clear: both
      display block
      height 0
      padding-bottom (1/8) * 100%
      
      .square
        position relative
        display inline-block
        width (1/8) * 100%
        height 0
        padding-bottom (1/8) * 100%
        cursor pointer
        span
          position absolute
          top 2px
          left 3px
        colorStates(#eed8b7, .30)
        &:nth-child(2n+1)
          colorStates(#b08967, .15)
        &.selected
          colorStates(#f9e77b, .15)
      &:nth-child(2n+1) 
        .square
          colorStates(#b08967, .15)
          &:nth-child(2n+1)
            colorStates(#eed8b7, .30)
          &.selected
              colorStates(#f9e77b, .15)
          
            
</style>
