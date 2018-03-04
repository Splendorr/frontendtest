<template lang="pug">
  #app
    header
      .text
        h1 Front End Test
        p.instructions {{instructions}}
      .toggle
        button(@click="toggleCoords") {{showCoords ? "Hide" : "Show"}} Coordinates
    .container
      .chessboard
        .row(v-for="row in boardGrid.rows")
          .square(v-for="col in boardGrid.cols" :data-coord="col + row" v-on:click="clickSquare" v-bind:class="{selected : currentSquare == (col + row) }")
            span(v-show="showCoords") {{col + row}}
            //- each col in boardGrid.cols
            //-   - var coord = col + row
            //-   .square(data-coord=coord v-on:click="clickSquare" v-bind:class="{selected : currentSquare == (col + row) }")
                //- span= coord
      .sidebar
        p Clicked Squares:
        ol(v-if="clickedSquares.length")
          li(v-for="square in clickedSquares") {{square}}
        ol(v-else=)
          li None yet!
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'This is the sidebar',
      instructions: 'Click on a square on the chessboard to highlight it. The list of clicked squares appears in the sidebar.',
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

  h1, h2
    font-weight: normal;

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
      
  button
    display block
    margin-bottom 1em 
    font-size 0.9em  
    line-height 1.7 
    border-radius 4px 
    border 0px solid #000
    cursor pointer
    background-color #f0f0f0 
    &:active
      background-color @background-color - 25%
   
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
  
  .sidebar
    width 100%
    margin 0
    @media lg
      width (1/3) * 100%
      margin 0 0 0 5px 
    background-color #FFF
    border-radius 4px 
    ul, p
      padding 0 1em
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
    background-color #B08967 
    
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
        background-color #eed8b7
        &:nth-child(2n+1)
          background-color #b08967 
        &.selected
          background-color #f9e77b 
      &:nth-child(2n+1) 
        .square
          background-color #b08967
          &:nth-child(2n+1)
            background-color #eed8b7 
          &.selected
              background-color #f9e77b 
          
            
</style>
