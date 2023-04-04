<script >
const width = window.innerWidth;
const height = window.innerHeight;

export default {
    data() {
    return {
      canvasSize: width > 1200 ? 100 : (width /1200 ) * 100,

    }},
    computed: {
    stageSize() {
      let obj = {
        width: (width * 30/100),
        height: (width * 30/100),
        fill: '#fff',

      };
      return obj;
    },
  },

}


</script>  

<template>
  <main class="cl">
        <v-stage ref="stage" :config="stageSize">
      <v-layer >
<v-group 
:config="{
                x:50*canvasSize/100  ,
                y:100*canvasSize/100,
                fill: '#fff',
                text: 'English',
              }"
>

<v-text  :config="{
                fill: '#fff',
                text: 'English',
                fontSize:20*canvasSize/100,
                y:-8,
              }"
              />

                <v-circle
                v-for="i in 5" :key="i"
              :config="{
                x:(75 + i*50)*canvasSize/100 ,
                radius: 30*canvasSize/100,
                fill: '#fff',
                shadowBlur: 10,
              }"
            />
            <v-circle
                v-for="i in 4" :key="i"
              :config="{
                x:(75 + i*50)*canvasSize/100 ,
                radius: 30*canvasSize/100,
                fill: '#b366d7',
                shadowBlur: 10,
              }"
            />

        </v-group>
        <v-group 
:config="{
                x:50*canvasSize/100  ,
                y:200*canvasSize/100,
                fill: '#fff',
                text: 'English',
              }"
>

<v-text  :config="{
                fill: '#fff',
                text: 'Swedish',
                fontSize:20*canvasSize/100,
                y:-8,
              }"
              />

                <v-circle
                v-for="i in 5" :key="i"
              :config="{
                x:(75 + i*50)*canvasSize/100 ,
                radius: 30*canvasSize/100,
                fill: '#fff',
                shadowBlur: 10,
              }"
            />
            <v-circle
                v-for="i in 4" :key="i"
              :config="{
                x:(75 + i*50)*canvasSize/100 ,
                radius: 30*canvasSize/100,
                fill: '#b366d7',
                shadowBlur: 10,
              }"
            />

        </v-group>
        <v-group 
:config="{
                x:50 *canvasSize/100 ,
                y:300*canvasSize/100,
                fill: '#fff',
                text: 'English',
              }"
>

<v-text  :config="{
                fill: '#fff',
                text: 'Arabic',
                fontSize:20*canvasSize/100,
                y:-8,
              }"
              />

                <v-circle
                v-for="i in 5" :key="i"
              :config="{
                x:(75 + i*50)*canvasSize/100 ,
                radius: 30*canvasSize/100,
                fill: '#fff',
                shadowBlur: 10,
              }"
            />
            <v-circle
                v-for="i in 5" :key="i"
              :config="{
                x:(75 + i*50)*canvasSize/100 ,
                radius: 30*canvasSize/100,
                fill: '#b366d7',
                shadowBlur: 10,
              }"
            />

        </v-group>
        </v-layer>
    </v-stage>
<div class="cl-child">
  <h1>Competencies</h1>
  <br>

<p>Programming of Visual Basic, HTML, CSS and JavaScript. Microsoft Office. Maintenance of computers and printers.</p>


<p>I reached the final in the financial analysis from the CFA institute challenge
</p>
<p>Driving license Type: B</p>


<br>
<br>
<br>

<h1>Hobbies</h1>
  <br>

<p>Chess, basketball, swimming and fishing</p>


</div>
</main>
</template>