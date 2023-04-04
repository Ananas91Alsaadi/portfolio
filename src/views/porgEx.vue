<script>
export default {
  data(){ return { 
    hoverLink:[false,false,false,false,false,false,false],
  }}
}
</script>  

<template>
<div class='qr-container'>
<div class="code-link">
  <h2>Ekorre</h2>

  <a href="https://ananas91alsaadi.github.io/Ekorre/" @mouseover="hoverLink[0]=true" @mouseout="hoverLink[0]=false"><img  :src="hoverLink[0]?'img/ekkore.png':'qr/ekorre.png'" alt=""></a>
</div>
  
  
<div class="code-link">

  <h2>The Hang Man</h2>
  <a href="https://ananas91alsaadi.github.io/TheHangMan/" @mouseover="hoverLink[1]=true" @mouseout="hoverLink[1]=false"><img  :src="hoverLink[1]?'img/hangman.png':'qr/hang-man.png'" alt=""></a>
</div>

  <div class="code-link">

  <h2>The Snake Same</h2>
  <a href="https://ananas91alsaadi.github.io/Tsss/" @mouseover="hoverLink[2]=true" @mouseout="hoverLink[2]=false"><img  :src="hoverLink[2]?'img/snake.png':'qr/tssss.png'" alt=""></a>
</div>

  <div class="code-link">

  <h2>Save The Balloon</h2>
  <a href="https://ananas91alsaadi.github.io/Save-the-Balloon/" @mouseover="hoverLink[3]=true" @mouseout="hoverLink[3]=false"><img  :src="hoverLink[3]?'img/ballon.png':'qr/ballon.png'" alt=""></a>
</div>

  <div class="code-link">

  <h2>Sudoku Solver</h2>
  <a href="https://ananas91alsaadi.github.io/SudokuSolver/" @mouseover="hoverLink[4]=true" @mouseout="hoverLink[4]=false"><img  :src="hoverLink[4]?'img/Sudoku solver.png':'qr/SudokuSolver.png'" alt=""></a>
</div>

  <div class="code-link">

  <h2>Memory Game (REACT)</h2>
  <a href="https://ananas91alsaadi.github.io/Memory_Game_React/" @mouseover="hoverLink[5]=true" @mouseout="hoverLink[5]=false"><img  :src="hoverLink[5]?'img/Memory game react.jpg':'qr/Memory Game (REACT).png'" alt=""></a>
</div>

  <div class="code-link">

  <h2>Solar cells Canvas</h2>
  <a href="https://ananas91alsaadi.github.io/swemounttest/" @mouseover="hoverLink[6]=true" @mouseout="hoverLink[6]=false"><img  :src="hoverLink[6]?'img/canvas.png':'qr/canvasqr.png'" alt=""></a>
</div>
</div>
</template>